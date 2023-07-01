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
