import type { NextPage } from "next";
import "material-icons/iconfont/material-icons.css";

const Home: NextPage = () => {
	return (
		<div className="grid grid-cols-2 m-12 gap-4">
			{[...Array(10)].map((_, i) => (
				<div key={i} className="w-full h-full">
					<div>
						<span className="text-[10px] font-light text-zinc-400">
							Domestic Shorthair
						</span>

						<div className="flex bg-slate-300 w-full h-32" />
						<h3 className="mt-1">July</h3>
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
	);
};

export default Home;
