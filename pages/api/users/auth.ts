import client from "@/pages/libs/server/client";
import withHandler, { ResponseType } from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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
	if (phone) {
		const msg = await twilioClient.messages.create({
			messagingServiceSid: process.env.TWILIO_MSID,
			to: process.env.PHONE_NUM!,
			body: `Your login token is ${payload}`,
		});
		console.log(msg);
	}

	return res.json({ ok: true });
}

export default withHandler("POST", handler);
