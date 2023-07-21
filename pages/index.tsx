import type { NextPage } from "next";
import "material-icons/iconfont/material-icons.css";
import Layout from "./components/layout";
import useUser from "./libs/client/useUser";
import Head from "next/head";

const Home: NextPage = () => {
	const { user, isLoading } = useUser();
	console.log(user);
	return (
		<Layout title="All">
			<Head>
				<title>Home</title>
			</Head>
			<div className="mx-4">
				<div className="grid grid-cols-2 gap-4">
					{[...Array(10)].map((_, i) => (
						<div key={i} className="w-full">
							<div>
								<div className="flex bg-slate-300 w-full h-32" />
								<span className="uppercase mt-5 font-semibold">july</span>
								<h3 className="font-semibold -mt-1">Sweet Dreams, July</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Home;
