import { NextRequest } from "next/server";
import axios, { AxiosError } from "axios";
import invariant from "tiny-invariant";

export async function POST(request: NextRequest) {
	try {
		const formData = await request.json();
		console.log({ formData });
		invariant(isValidUrl(formData.url), "Invalid URL");
		const { headers } = await axios.head(formData.url, { timeout: 10_000 });
		console.log("res", { headers });
		if (headers["content-security-policy"]?.includes("self")) {
			throw new Error(
				`CSP policy is too restrictive on ${formData.url}. We can not display the preview, but making a mobile app will still work.`,
			);
		}
		return Response.json({
			status: "ok",
		});
	} catch (e) {
		invariant(e instanceof Error, "e must be Error");
		console.error("ERROR in /api/preview", e.message);
		if (e instanceof AxiosError) {
			console.error("headers", e.response?.headers);
		}
		return Response.json(
			{
				status: "error",
				message: e.message,
			},
			{
				status: 200, // for Axios to catch errors easier
			},
		);
	}
}

function isValidUrl(url: string) {
	try {
		new URL(url);
		return true;
	} catch (e) {
		throw new Error("Invalid URL error. Please check the URL and try again", {
			cause: e,
		});
	}
}
