import { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

async function daosRoute(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      const daos = await prisma.dAO.findMany();

      return res.status(200).json(daos);
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}

export default daosRoute;
