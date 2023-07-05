import { GithubIcon, GoogleIcon, TwitterIcon } from "./svgIcons";

interface SocialLoginBtnProps {
	name: string;
}

export function SocialLoginBtn({ name }: { name: string }) {
	return (
		<button className="transition-colors w-full rounded-sm py-2 border-2 border-black hover:bg-stone-100">
			<div className="flex items-center justify-center gap-2">
				{name === "Google" ? (
					<GoogleIcon />
				) : name === "Github" ? (
					<GithubIcon />
				) : (
					<TwitterIcon />
				)}
				<span className="text-sm">Continue with {name}</span>
			</div>
		</button>
	);
}

export function LoginBtn({ text }: { text: string }) {
	return (
		<button className="transition-colors mt-5 w-full bg-stone-200 hover:bg-stone-300  py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none ">
			{text}
		</button>
	);
}
