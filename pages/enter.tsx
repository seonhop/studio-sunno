import { useState } from "react";
import "material-icons/iconfont/material-icons.css";

function cls(...classNames: string[]) {
	return classNames.join(" ");
}

export default function Enter() {
	const [method, setMethod] = useState<"email" | "phone">("email");
	const onEmailClick = () => setMethod("email");
	const onPhoneClick = () => setMethod("phone");
	return (
		<div className="m-12">
			<h3 className="text-3xl text-center font-bold logo">Studio Sunno</h3>

			<div className="flex flex-col my-10">
				<div className="grid grid-cols-2  bg-gray-100 p-1 rounded-xl">
					<button
						onClick={onEmailClick}
						className={cls(
							"text-sm p-3 ",
							method === "email"
								? "bg-white rounded-xl text-black font-semibold"
								: "text-zinc-500"
						)}
					>
						<div className="flex justify-center items-center gap-2">
							<span className="material-icons-outlined">email</span>Email
						</div>
					</button>
					<button
						onClick={onPhoneClick}
						className={cls(
							"text-sm p-3 ",
							method === "phone"
								? "bg-white rounded-xl text-black font-semibold"
								: "text-zinc-500"
						)}
					>
						<div className="flex justify-center items-center gap-1">
							<span className="material-icons-outlined">phone_android</span>
							Phone
						</div>
					</button>
				</div>
				<form className="my-4">
					<label className="text-xs text-zinc-500">
						{method === "email" ? "Email address" : null}
						{method === "phone" ? "Phone number" : null}
					</label>
					<div className="mt-1">
						{method === "email" ? (
							<input
								type="email"
								required
								className="px-2 appearance-none focus:outline-0 w-full border border-zinc-300 rounded-lg shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							/>
						) : null}
						{method === "phone" ? (
							<div className="w-full flex items-center">
								<span className="h-full flex items-center justify-center px-3 py-2 rounded-l-md border border-r-0 border-zinc-300 bg-zinc-50 text-zinc-500 select-none ">
									+1
								</span>
								<input
									type="number"
									required
									className="appearance-none w-full px-3 py-2 border border-zinc-300 rounded-md rounded-l-none shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								/>
							</div>
						) : null}
					</div>
					<button className="transition-colors mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none ">
						{method === "email" ? "Get login link" : null}
						{method === "phone" ? "Get one-time password" : null}
					</button>
				</form>

				<div>
					<div className="relative my-8">
						<div className="absolute w-full border-t border-zinc-300" />
						<div className="relative -top-3 text-center ">
							<span className="bg-white px-2 text-sm text-zinc-500">Or</span>
						</div>
					</div>
					<div className="grid gap-2 text-zinc-500">
						<button className="transition-colors w-full border border-zinc-200 rounded-lg py-3 hover:bg-zinc-100 hover:text-black">
							<div className="flex items-center justify-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-google"
									viewBox="0 0 16 16"
								>
									{" "}
									<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />{" "}
								</svg>

								<span className="text-sm">Continue with Google</span>
							</div>
						</button>
						<button className="transition-colors w-full border border-zinc-200 rounded-lg py-3 hover:bg-zinc-100 hover:text-black">
							<div className="flex items-center justify-center gap-2">
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="text-sm">Continue with Github</span>
							</div>
						</button>
						<button className="transition-colors w-full border border-zinc-200 rounded-lg py-3 hover:bg-zinc-100 hover:text-black">
							<div className="flex items-center justify-center gap-2">
								<svg
									className="w-5 h-5"
									aria-hidden="true"
									fill="currentColor"
									viewBox="	0 0 20 20"
								>
									<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
								</svg>
								<span className="text-sm">Continue with Twitter</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
