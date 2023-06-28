import React, { useState } from "react";
import { cls } from "../libs/utils";
import { SiteMenu, Header, BreadCrumbs } from "./header_nav";

interface LayoutProps {
	title?: string;
	canGoBack?: boolean;
	isWideScreen?: boolean;
	children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const onMenuClick = () => setIsMenuOpen((prev) => !prev);

	return (
		<div className={cls("flex flex-col", isMenuOpen ? "h-screen" : "")}>
			<Header isMenuOpen={isMenuOpen} onMenuClick={onMenuClick} />
			{isMenuOpen ? (
				<SiteMenu isMenuOpen={isMenuOpen} />
			) : (
				<>
					<BreadCrumbs title={title} />
					{children}
				</>
			)}
		</div>
	);
}
