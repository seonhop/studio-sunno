import { useState } from "react";
import "material-icons/iconfont/material-icons.css";
import { cls } from "./libs/client/utils";
import { useForm } from "react-hook-form";
import { TypedInput } from "./components/input";
import { Email, PhoneAndroid } from "@mui/icons-material";
import { LoginBtn, SocialLoginBtn } from "./components/button";
import useMutation from "./libs/client/useMutation";
import { NextPage } from "next";

interface AuthFormProps {
	email?: string;
	phone?: string;
}

interface TokenFormProps {
	token: string;
}

interface MutationResult {
	ok: boolean;
}

const Auth: NextPage = () => {
	const [enter, { loading, data, error }] =
		useMutation<MutationResult>("api/users/auth");
	const [confirmToken, { loading: tokenLoading, data: tokenData }] =
		useMutation<MutationResult>("api/users/confirm");
	const { register, reset, handleSubmit } = useForm<AuthFormProps>();
	const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
		useForm<TokenFormProps>();
	const [method, setMethod] = useState<"email" | "phone">("email");
	const onEmailClick = () => {
		reset();
		setMethod("email");
	};
	const onPhoneClick = () => {
		reset();
		setMethod("phone");
	};
	const onValid = (authForm: AuthFormProps) => {
		if (loading) return;
		enter(authForm);
	};
	const onTokenValid = (tokenForm: TokenFormProps) => {
		if (tokenLoading) return;
		confirmToken(tokenForm);
	};
	return (
		<div className="p-12 flex flex-col justify-center h-screen">
			<h3 className="text-3xl text-center font-bold logo">Studio Sunno</h3>

			<div className="flex flex-col my-10">
				{data?.ok ? (
					<form className="my-4" onSubmit={tokenHandleSubmit(onTokenValid)}>
						<label className="font-medium text-sm">Confirmation Code</label>
						<TypedInput
							type="number"
							id="token"
							register={tokenRegister("token")}
							required
						/>
						<LoginBtn text={tokenLoading ? "Loading..." : "Confirm"} />
					</form>
				) : (
					<>
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
							<label className="font-medium text-sm">
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
							{method === "email" ? (
								<LoginBtn text={loading ? "Sending..." : "Get login link"} />
							) : null}
							{method === "phone" ? (
								<LoginBtn
									text={loading ? "Sending..." : "Get one-time password"}
								/>
							) : null}
						</form>
					</>
				)}

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
};

export default Auth;
