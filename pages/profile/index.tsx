import type { NextPage } from "next";
import "material-icons/iconfont/material-icons.css";
import { Send } from "@mui/icons-material";

const Profile: NextPage = () => {
	return (
		<>
			<div className="mt-4 mx-4">
				<h3 className="logo text-2xl">Studio Sunno</h3>
				<div className="relative flex gap-2 mt-3">
					<div className="absolute w-full border-t-2 border-black" />
					<div className="relative -top-3 text-center ">
						<span className="bg-white text-sm font-semibold text-black pr-2 ">
							Profile
						</span>
					</div>
				</div>
			</div>
			<div className="w-full grid gap-1">
				<div className="w-full grid h-80 grid-cols-5 gap-1">
					<div className="col-span-3  bg-stone-400 text-white p-4 flex flex-col justify-end">
						<span className="text-sm">Since 2023</span>
						<h1 className="text-4xl font-bold">179 Films</h1>
					</div>
					<div className="col-span-2 flex flex-col gap-1 ">
						<div className="h-1/2 bg-stone-400 text-white px-3 py-2 flex flex-col justify-end">
							<span>Released</span>
						</div>
						<div className="h-1/2 text-sm bg-stone-400 text-white px-3 py-2 flex flex-col justify-end">
							<span>(Most Valuable Pets)</span>
						</div>
					</div>
				</div>
				<div className="col-span-full h-52 flex items-end text-sm justify-center py-4 bg-slate-100">
					<button className="py-2 px-4 rounded-full bg-black text-white">
						Your Stickers Here
					</button>
				</div>
				<div className="col-span-full grid grid-cols-3 gap-1 h-40">
					<div className=" bg-stone-300 text-white px-3 py-2 flex flex-col justify-end">
						<span>Drafts</span>
					</div>
					<div className=" bg-stone-300 text-white px-3 py-2 flex flex-col justify-end">
						<span>Trash</span>
					</div>
					<div className="   flex items-center justify-center flex-col gap-2">
						<span className="text-xs w-full text-center">
							Questions or Feedback?
						</span>
						<div className="flex text-sm gap-1 ">
							<Send fontSize="small" />
							<span className="font-semibold">studio_sunno</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;