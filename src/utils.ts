import { covalentEth } from "./services/api";

export async function calcTokenHolders(address: string) {
  let pageNumber = 1;
  let data: any[] = [];
  while (true) {
    const items = (
      await covalentEth.getTokenHolders!(address, pageNumber, 10000)
    ).data.items;
    console.log("loading more ...");
    if (items.length === 0) {
      break;
    }
    data = [...data, ...items];
    pageNumber += 1;
  }

  console.log(
    data.sort((a, b) => {
      const balanceB = Number(b.balance);
      const balanceA = Number(a.balance);

      if (balanceB > balanceA) {
        return -1;
      }

      if (balanceA > balanceB) {
        return 1;
      }

      return 0;
    })
  );
}
