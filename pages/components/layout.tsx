import React from "react";

interface LayoutProps {
	title?: string;
	canGoBack?: boolean;
	isWideScreen?: boolean;
	children: React.ReactNode;
}

export default function Layout({
	title,
	canGoBack,
	isWideScreen,
	children,
}: LayoutProps) {
	return (
		<div>
			<div className="mt-4 mx-4 max-w-6xl">
				<h3 className="logo text-2xl">Studio Sunno</h3>
				<div className="relative flex gap-2 mt-3">
					<div className="absolute w-full border-t-2 border-black" />
					<div className="relative -top-3 text-center ">
						<span className="bg-white text-sm font-semibold text-black pr-2 ">
							{title}
						</span>
					</div>
				</div>
			</div>

			<div>{children}</div>
		</div>
	);
}

/*
{isWideScreen ? (
				<nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center"></nav>
			) : null}
*/
