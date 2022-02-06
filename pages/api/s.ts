import { NextApiRequest, NextApiResponse } from "next";

async function newWalletRoute(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}
