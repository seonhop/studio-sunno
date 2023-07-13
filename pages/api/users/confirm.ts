import client from "@/pages/libs/server/client";
import withHandler, { ResponseType } from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	// Destructure phone and email from the request body
	const { token } = req.body;
	console.log(token);

	return res.json({ ok: true });
}

export default withHandler("POST", handler);
