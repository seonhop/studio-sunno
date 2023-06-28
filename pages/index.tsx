import type { NextPage } from "next";
import "material-icons/iconfont/material-icons.css";
import FemaleIcon from "@mui/icons-material/FemaleOutlined";
import Layout from "./components/layout";

const Home: NextPage = () => {
	return (
		<Layout title="All">
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
					<button className="fixed bottom-24 right-5 bg-indigo-600 rounded-full p-4 shadow-xl hover:bg-indigo-700 transition-colors text-white">
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
