import type { NextPage } from "next";
import FemaleIcon from "@mui/icons-material/FemaleOutlined";

const ItemDetail: NextPage = () => {
	return (
		<div className="m-4 h-screen">
			<h3 className="logo text-2xl">Studio Sunno</h3>
			<div className="relative flex gap-2 mt-3">
				<div className="absolute w-full border-t-2 border-black" />
				<div className="relative -top-3 text-center ">
					<span className="bg-white text-sm font-semibold text-black pr-2 ">
						All / Sweet Dreams, July
					</span>
				</div>
			</div>
			<div className="grid gap-2">
				<div className="border border-black w-full h-80 rounded-md" />
				<div className="grid grid-cols-2 gap-2 mt-2">
					<div className="flex flex-col ">
						<div className="flex items-center ">
							<span className="uppercase text-sm text-zinc-400">July /</span>
							<FemaleIcon fontSize="small" className="text-zinc-400 " />
							<span className="uppercase text-sm text-zinc-400">
								/ 1 YR 4 Mo
							</span>
						</div>

						<h2 className="text-xl font-semibold ">Sweet Dreams, July</h2>
						<div className="mt-1 h-32 text-sm ">
							<p className="overflow-hidden rec-desc ">
								A collection of photos featuring sleeping July. July is a super
								cute cat with a heart-shaped nose. She came to me on my
								birthday, hence her name, July. her name comes from the fact
								that i dont know
							</p>
						</div>
						<button className="border border-black border-r-4 border-b-4 text-sm py-2 rounded-md bg-indigo-600 text-white">
							Add to Gallery
						</button>
					</div>
					<div>
						<div className="w-full h-full border rounded-md rounded-t-[80px] border-t border-black"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
