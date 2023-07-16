import client from "@/pages/libs/server/client";
import withHandler, { ResponseType } from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { withApiSession } from "@/pages/libs/server/withSession";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	// Destructure phone and email from the request body
	const { token } = req.body;
	const foundToken = await client.token.findUnique({
		where: {
			payload: token,
		},
		include: {
			user: true,
		},
	});
	if (!foundToken) return res.status(404).end();
	req.session.user = {
		id: foundToken?.userId,
	};
	await req.session.save();
	await client.token.deleteMany({
		where: {
			userId: foundToken.userId,
		},
	});

	return res.json({ ok: true });
}

export default withApiSession(withHandler("POST", handler));
