import client from "@/pages/libs/server/client";
import withHandler from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	// Destructure phone and email from the request body
	const { phone, email } = req.body;

	// Create a payload object with the phone number if it exists, otherwise with the email
	const payload = phone ? { phone: +phone } : { email };

	// Attempt to update the user with the details in the payload, if the user doesn't exist, create a new one
	const user = await client.user.upsert({
		where: {
			...payload,
		},
		create: {
			...payload,
		},
		update: {},
	});
	console.log(user);
	return res.status(200).end();
}

export default withHandler("POST", handler);
