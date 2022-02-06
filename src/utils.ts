import { covalentEth } from "./services/api";
import prisma from "../prisma/client";

interface Item {
  contract_ticker_symbol: string;
  balance: string | number;
  quote: number;
  logo_url: string;
  contract_address: string;
  contract_name: string;
}

export function calcTreasury(items: Item[]) {
  let treasury = 0;
  items.forEach((item) => (treasury += item.quote));
  return treasury;
}

export async function calcTokenBalances(daoId: number) {
  const dao = await prisma.dAO.findFirst({
    where: { id: daoId },
    include: { addresses: { where: { type: "treasury" } } },
  });

  if (!dao || dao.addresses.length === 0) {
    return [];
  }

  for (const address of dao.addresses) {
    const balance = await covalentEth.getTokenBalances!(address.address);

    console.log(balance);
  }
}
