// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await axios.get("https://random-data-api.com/api/v2/users?size=100");

    const usuarios = response.data;

    return res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
  }
}
