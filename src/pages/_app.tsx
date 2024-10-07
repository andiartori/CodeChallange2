import "@/styles/globals.css";
import { Afacad } from "next/font/google";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const afacad = Afacad({ subsets: ["latin"] });
const queryClient = new QueryClient();

axios.defaults.baseURL = "https://randomuser.me";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_CMS_CDN_URL;

axios.defaults.baseURL = process.env.NEXT_PUBLIC_CMS_API_URL;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<main className={afacad.className}>
				<Component {...pageProps} />
			</main>
		</QueryClientProvider>
	);
}
