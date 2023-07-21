import client from "@/pages/libs/server/client";
import withHandler, { ResponseType } from "@/pages/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { withApiSession } from "@/pages/libs/server/withSession";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const profile = await client.user.findUnique({
		where: {
			id: req.session.user?.id,
		},
	});
	res.json({
		ok: true,
		profile,
	});
}

export default withApiSession(
	withHandler({
		method: "GET",
		handler,
	})
);
