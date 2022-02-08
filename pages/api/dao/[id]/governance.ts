import { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";
import { gql } from "@apollo/client";
import client from "apollo-client";

interface Space {
  proposalsCount: number;
  followersCount: number;
  name: string;
  symbol: string;
}

async function daoGovernanceRoute(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      const dao = await prisma.dAO.findFirst({
        where: { id: Number(id) },
        include: {
          addresses: {
            where: {
              type: "governance",
              active: true,
              description: { contains: "Snapshot" },
            },
          },
        },
      });

      if (!dao) {
        return res.status(404).end("DAO not found");
      }

      if (dao.addresses.length === 0) {
        return res.status(200).json({});
      }

      let space: Space | undefined = undefined;

      for (const address of dao.addresses) {
        const { data } = await client.query({
          query: gql`
              query{
                space(id: "${address.address}") {
                  proposalsCount
                  followersCount
                  symbol
                  name
                }
              }
            `,
        });

        if (!data.space) {
          continue;
        }

        if (space) {
          space.proposalsCount += data.space.proposalsCount;
          space.followersCount += data.space.followersCount;
        } else {
          space = {
            name: data.space.name,
            symbol: data.space.symbol,
            proposalsCount: data.space.proposalsCount,
            followersCount: data.space.followersCount,
          };
        }
      }

      return res.status(200).json(space);

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}

export default daoGovernanceRoute;
