import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

let defaultLocale = "en";
let locales = ["en", "de"];

export function getLocale(headers: object) {
	let languages = new Negotiator({ headers }).languages();
	console.log("languages", languages);

	if (["*"].toString() === languages.toString()) {
		return defaultLocale;
	}

	return match(languages, locales, defaultLocale); // -> 'en-US'
}
