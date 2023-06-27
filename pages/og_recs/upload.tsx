import type { NextPage } from "next";
import { Female, ChevronRight } from "@mui/icons-material";

const Upload: NextPage = () => {
	return (
		<div className="m-4">
			<h3 className="logo text-2xl">Studio Sunno</h3>
			<div className="relative flex gap-2 mt-3">
				<div className="absolute w-full border-t-2 border-black" />
				<div className="relative -top-3 text-center ">
					<span className="bg-white text-sm font-semibold text-black pr-2 ">
						Upload
					</span>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-2">
				<div className="col-span-full flex items-end justify-end rounded-sm w-full">
					<button className=" py-1 bg-none font-semibold flex items-center">
						Open Editor <ChevronRight></ChevronRight>
					</button>
				</div>
				<label
					htmlFor="file_input"
					className="col-span-full flex flex-col cursor-pointer items-center justify-center border-2 border-dashed border-black h-72 rounded-sm  hover:bg-zinc-100  transition-colors"
				>
					<svg
						className="h-12 w-12 "
						stroke="currentColor"
						fill="none"
						viewBox="0 0 48 48"
						aria-hidden="true"
					>
						<path
							d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span className="text-xs">Click to upload</span>

					<input id="file_input" className="hidden" type="file" />
				</label>
				<div className="flex flex-col gap-4 col-span-full mt-2">
					<div className="flex w-full gap-4">
						<label htmlFor="type" className=" font-medium w-1/2">
							Type
							<select
								id="type"
								className="mt-1 px-2 py-1 text-sm appearance-none focus:outline-0 w-full border-2 border-black rounded-sm  placeholder-zinc-400 focus:outline-none text-black"
							></select>
						</label>
						<label htmlFor="package_selection" className=" font-medium w-1/2">
							Package Selection
							<input
								id="package_selection"
								className="mt-1 px-2 py-1 text-sm appearance-none focus:outline-0 w-full border-2 border-black rounded-sm  placeholder-zinc-400 focus:outline-none"
							/>
						</label>
					</div>
					<label htmlFor="title" className=" font-medium ">
						Title
						<input
							id="title"
							className="mt-1 px-2 py-1 text-sm appearance-none focus:outline-0 w-full border-2 border-black rounded-sm  placeholder-zinc-400 focus:outline-none"
						/>
					</label>
					<label htmlFor="description" className=" font-medium mb-1">
						Description
						<div>
							<textarea
								id="description"
								className="mt-1 px-2 py-1 text-sm appearance-none  w-full border-2 border-black rounded-sm  placeholder-zinc-400 focus:border-black focus:outline-0 focus:ring-0 "
								rows={6}
							/>
						</div>
					</label>
				</div>
			</div>
			<div className="flex justify-end w-full gap-4">
				<button className="font-medium">Save</button>
				<button className="rounded-sm px-4 py-2 bg-stone-200 border-black font-medium hover:bg-stone-300 ">
					Upload
				</button>
			</div>
		</div>
	);
};

export default Upload;
