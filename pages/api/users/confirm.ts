import client from "@/pages/libs/server/client";
import withHandler, { ResponseType } from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	// Destructure phone and email from the request body
	const { token } = req.body;
	console.log(token);
	const exists = await client.token.findUnique({
		where: {
			payload: token,
		},
		include: {
			user: true,
		},
	});
	if (!exists) res.status(404).end();
	req.session.user = {
		id: exists?.userId,
	};
	console.log(exists);

	return res.json({ ok: true });
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
	cookieName: "session",
	password:
		"123183024128309183081203091380123801230129381083102831023812098312089034",
});
