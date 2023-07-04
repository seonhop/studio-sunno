import client from "@/pages/libs/server/client";
import withHandler from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Destructure phone and email from the request body
	const { phone, email } = req.body;

	// Create a payload object with the phone number if it exists, otherwise with the email
	const payload = phone ? { phone: +phone } : { email };

	const token = await client.token.create({
		data: {
			payload: "1234",
			user: {
				connectOrCreate: { where: { ...payload }, create: { ...payload } },
			},
		},
	});
	console.log(token);
	return res.status(200).end();
}

export default withHandler("POST", handler);
