import type { NextPage } from "next";
import {
	ChevronRight,
	AddPhotoAlternateOutlined,
	Album,
	EditOutlined,
} from "@mui/icons-material";
import Layout from "../components/layout";
import { TypedInput } from "../components/input";
import { useForm } from "react-hook-form";

const Upload: NextPage = () => {
	const { register } = useForm();
	return (
		<Layout title="Upload">
			<div className="mx-4">
				<div className="grid grid-cols-4 gap-2">
					<div className="col-span-full flex items-end justify-end rounded-sm w-full mb-1">
						<button className="bg-none font-semibold flex items-center">
							Open Editor <ChevronRight></ChevronRight>
						</button>
					</div>
					<div className="flex col-span-full gap-2">
						<div className="flex w-1/3 flex-col gap-2">
							<label htmlFor="type" className=" font-medium w-full">
								Type
								<select
									id="type"
									className="mt-1 px-2 py-1 text-sm appearance-none focus:outline-0 w-full border-2 border-black rounded-sm  placeholder-zinc-400 focus:outline-none text-black"
								></select>
							</label>
						</div>
						<div className="flex grow flex-col gap-1 ">
							<span className="font-medium">Contents</span>
							<label className="flex gap-1 bg-stone-200 hover:bg-stone-300 px-2 py-1.5 items-center justify-center cursor-pointer">
								<span className="text-sm">
									Upload your images to the recording
								</span>

								<input
									id="contents"
									className="hidden px-2 py-1 text-sm appearance-none focus:outline-0 w-full border-2 border-black rounded-r-sm  placeholder-zinc-400 focus:outline-none"
									type="file"
									accept="image/png, image/jpeg, image/jpg"
									multiple
								/>
							</label>
						</div>
					</div>
					<div className="col-span-full gap-2 flex pt-4 border-t-2 border-black mt-2">
						<label
							htmlFor="file_input"
							className="w-1/2 flex flex-col cursor-pointer items-center justify-center border-2 border-dashed border-black h-52 rounded-sm  hover:bg-zinc-100  transition-colors"
						>
							<AddPhotoAlternateOutlined />
							<span className="text-xs">Choose cover design</span>

							<input
								id="file_input"
								className="hidden"
								type="file"
								accept="image/png, image/jpeg, image/jpg"
							/>
						</label>
						<div className="w-1/2 flex flex-col gap-2">
							<label
								htmlFor="file_input"
								className="w-full flex flex-col cursor-pointer items-center justify-center border-2 border-dashed border-black grow rounded-sm  hover:bg-zinc-100  transition-colors"
							>
								<Album />
								<span className="text-xs">Choose recording design</span>

								<input
									id="file_input"
									className="hidden"
									type="file"
									accept="image/png, image/jpeg, image/jpg"
								/>
							</label>
							<div className="flex gap-2 items-center">
								<div className="w-4 h-4 bg-blue-500"></div>
								<div className="w-4 h-4 bg-red-500"></div>
								<div className="w-4 h-4 bg-orange-500"></div>
								<div className="w-4 h-4 bg-amber-500"></div>
								<div className="w-4 h-4 bg-emerald-500"></div>
								<div className="w-4 h-4 bg-violet-500"></div>
								<EditOutlined fontSize="small" />
								<label className="text-xs px-2 bg-stone-200 py-0.5 hover:bg-stone-300 cursor-pointer">
									Upload
									<input
										id="file_input"
										className="hidden"
										type="file"
										accept="image/png, image/jpeg, image/jpg"
									/>
								</label>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 col-span-full mt-2">
						<label htmlFor="title" className=" font-medium ">
							Title
							<TypedInput
								type="text"
								id="title"
								required
								register={register("title")}
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
				<div className="flex justify-end w-full gap-4 mb-4">
					<button className="font-medium">Save</button>
					<button className="rounded-sm px-4 py-1 bg-stone-200 border-black font-medium hover:bg-stone-300 ">
						Upload
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default Upload;
