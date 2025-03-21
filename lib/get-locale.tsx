import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

let locales = ["en", "de"];

export function getLocale(headers: object) {
	let languages = new Negotiator({ headers }).languages();
	console.log("languages", languages);
	let defaultLocale = "en";

	return match(languages, locales, defaultLocale); // -> 'en-US'
}