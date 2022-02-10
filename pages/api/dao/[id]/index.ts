import { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";

async function daoRoute(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  const id = Number(query.id);

  switch (method) {
    case "GET":
      if (isNaN(id)) {
        return res.status(404).json({ error: "dao not found" });
      }

      const dao = await prisma.dAO.findFirst({ where: { id } });

      if (!dao) {
        return res.status(404).json({ error: "dao not found" });
      }

      return res.status(200).json(dao);
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}

export default daoRoute;
