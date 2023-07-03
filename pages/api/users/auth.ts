import client from "@/pages/libs/server/client";
import withHandler from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.body);
	return res.status(200).end();
}

export default withHandler("POST", handler);
