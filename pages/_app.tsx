import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{ fetcher: (key: string) => fetch(key).then((res) => res.json()) }}
		>
			<div className="w-full mx-auto max-w-6xl">
				<Component {...pageProps} />
			</div>
		</SWRConfig>
	);
}
