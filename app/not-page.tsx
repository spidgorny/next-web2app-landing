import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getLocale } from "@/lib/get-locale.tsx";

// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default async function IndexLocale() {
	// const pathname  = usePathname();
	// // const locales = serverRuntimeConfig.locales;
	// const locales = ['en', 'de']
	// const pathnameHasLocale = locales.some(
	// 	(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	// )

	// Redirect if there is no locale
	const headersList = await headers();
	const headersObj = Object.fromEntries(headersList.entries());
	console.log("headers", headersObj);
	const locale = getLocale(headersObj);
	console.warn("LOCALE", locale);
	const newPathname = `/${locale}`;
	console.log("redirect", newPathname);
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return redirect(newPathname);
}
