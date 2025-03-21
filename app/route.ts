import { getLocale } from "@/lib/get-locale.tsx";
import { headers } from "next/headers";

export async function GET() {
	// Redirect if there is no locale
	const headersList = await headers();
	const headersObj = Object.fromEntries(headersList.entries());
	console.log("headers", headersObj);
	const locale = getLocale(headersObj);
	console.warn("LOCALE", locale);
	const newPathname = `/${locale}`;
	console.log("pathname", newPathname);

	const protocol = headersList.get("x-forwarded-proto") || "http";
	const host = headersList.get("host") || "";
	// const pathname = headersList.get('x-invoke-path') || '';

	const url = `${protocol}://${host}${newPathname}`;
	console.log("redirect", url);

	return Response.redirect(url);
}
