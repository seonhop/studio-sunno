import { cls } from "../libs/utils";
import Link from "next/link";
import { Search, Add, Dvr, Menu, Close } from "@mui/icons-material";

interface MenuProps {
	isMenuOpen: boolean;
}

interface HeaderProps {
	isMenuOpen: boolean;
	onMenuClick: () => void;
}

interface BreadCrumbsProps {
	title?: string;
}

export function Header({ isMenuOpen, onMenuClick }: HeaderProps) {
	return (
		<div id="site-header" className="my-3 mx-4 max-w-6xl min-h-[28px]">
			<div className="w-full flex justify-between items-end">
				<Link href="/" className="logo text-2xl leading-4">
					Studio Sunno
				</Link>
				<div className="flex gap-3">
					<Link href="/og_recs/upload">
						<Add />
					</Link>
					<Dvr />
					<button onClick={onMenuClick}>
						{!isMenuOpen ? <Menu /> : <Close />}
					</button>
				</div>
			</div>
		</div>
	);
}

export function SiteMenu({ isMenuOpen }: MenuProps) {
	return (
		<div
			className={cls(
				isMenuOpen ? "grow" : "h-0",
				"w-full transition-all delay-150 duration-300 flex flex-col px-4"
			)}
		>
			<div className="flex items-center border-b-2 border-black">
				<Search className="text-zinc-500" />
				<input
					type="text"
					placeholder="Search..."
					className=" appearance-none  focus:outline-0 focus:border-none w-full focus:ring-0 border-t-0 border-x-0 border-none"
				/>
			</div>
			<div className="flex flex-col grow w-full mt-4 gap-2">
				<span className="text-lg font-semibold hover:underline">About</span>
				<Link href="/my_page" className="text-lg font-semibold hover:underline">
					My Page
				</Link>
				<span className="text-lg font-semibold hover:underline">Support</span>
			</div>
		</div>
	);
}

export function BreadCrumbs({ title }: BreadCrumbsProps) {
	return (
		<div className="relative flex gap-2 mt-4 mx-4 ">
			<div className="absolute w-full border-t-2 border-black" />
			<div className="relative -top-3 text-center ">
				<span className="bg-white text-sm font-semibold text-black pr-2 ">
					{title}
				</span>
			</div>
		</div>
	);
}
