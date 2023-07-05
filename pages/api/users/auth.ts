import client from "@/pages/libs/server/client";
import withHandler, { ResponseType } from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	// Destructure phone and email from the request body
	const { phone, email } = req.body;

	// Create a payload object with the phone number if it exists, otherwise with the email
	const loginMethod = phone ? { phone: +phone } : email ? { email } : null;
	if (!loginMethod) return res.status(400).json({ ok: false });
	const payload = Math.floor(100000 + Math.random() * 900000) + "";

	// Create a token associated with the user
	// If the user doesn't exist, it will be created using the connectOrCreate function
	const token = await client.token.create({
		data: {
			payload,
			user: {
				connectOrCreate: {
					where: { ...loginMethod },
					create: { ...loginMethod },
				},
			},
		},
	});
	return res.json({ ok: true });
}

export default withHandler("POST", handler);
