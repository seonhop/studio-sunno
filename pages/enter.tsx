import { useState } from "react";
import "material-icons/iconfont/material-icons.css";
import { cls } from "./libs/utils";
import { useForm } from "react-hook-form";
import { TypedInput } from "./components/input";
import { Email, PhoneAndroid } from "@mui/icons-material";
import { SocialLoginBtn } from "./components/button";

interface EnterFormProps {
	email?: string;
	phone?: string;
}

export default function Enter() {
	const { register, reset, handleSubmit } = useForm<EnterFormProps>();
	const [method, setMethod] = useState<"email" | "phone">("email");
	const onEmailClick = () => {
		reset();
		setMethod("email");
	};
	const onPhoneClick = () => {
		reset();
		setMethod("phone");
	};
	const onValid = (data: EnterFormProps) => {};
	return (
		<div className="p-12 flex flex-col justify-center h-screen">
			<h3 className="text-3xl text-center font-bold logo">Studio Sunno</h3>

			<div className="flex flex-col my-10">
				<div className="grid grid-cols-2 p-1 rounded-sm">
					<button
						onClick={onEmailClick}
						className={cls(
							"text-sm p-1.5 ",
							method === "email"
								? "rounded-full text-white font-semibold bg-black"
								: "text-zinc-500"
						)}
					>
						<div className="flex justify-center items-center gap-2">
							<Email />
							<span>Email</span>
						</div>
					</button>
					<button
						onClick={onPhoneClick}
						className={cls(
							"text-sm p-1 ",
							method === "phone"
								? "rounded-full text-white font-semibold bg-black"
								: "text-zinc-500"
						)}
					>
						<div className="flex justify-center items-center gap-1">
							<PhoneAndroid />
							<span>Phone</span>
						</div>
					</button>
				</div>
				<form className="my-4" onSubmit={handleSubmit(onValid)}>
					<label className="font-medium">
						{method === "email" ? "Email address" : null}
						{method === "phone" ? "Phone number" : null}
					</label>
					<div>
						{method === "email" ? (
							<TypedInput
								type="email"
								id="email"
								register={register("email")}
								required
							/>
						) : null}
						{method === "phone" ? (
							<TypedInput
								type="number"
								id="phone"
								register={register("phone")}
								required
							/>
						) : null}
					</div>
					<button className="transition-colors mt-5 w-full bg-stone-200 hover:bg-stone-300  py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none ">
						{method === "email" ? "Get login link" : null}
						{method === "phone" ? "Get one-time password" : null}
					</button>
				</form>

				<div>
					<div className="relative my-8">
						<div className="absolute w-full border-t-2 border-black" />
						<div className="relative -top-3 text-center ">
							<span className="bg-white px-2 text-sm font-semibold">Or</span>
						</div>
					</div>
					<div className="grid gap-2 text-sm">
						<SocialLoginBtn name="Google" />
						<SocialLoginBtn name="Github" />
						<SocialLoginBtn name="Twitter" />
					</div>
				</div>
			</div>
		</div>
	);
}
