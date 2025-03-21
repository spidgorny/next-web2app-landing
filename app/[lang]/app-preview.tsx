"use client";
import { DeviceFrameset } from "react-device-frameset";
import React, { FormEvent, useState } from "react";
import { IoMdShare } from "react-icons/io";
import { useAsyncWorking } from "spidgorny-react-helpers/use-async-working";
import axios from "axios";
import { useFormData } from "spidgorny-react-helpers/use-form-data";
import { useStateObj } from "spidgorny-react-helpers/use-state-obj";
import { useDictionary } from "@/components/localization-context.tsx";
import { Spinner } from "@/components/spinner.tsx";

export const AppPreview = () => {
	const dict = useDictionary();

	const { formData, onChange } = useFormData<{ url?: string; title?: string }>({
		url: "https://next-web2app-landing.vercel.app/",
	});
	const [urlError, setUrlError] = useState<string | null>(null);
	const iframeUrl = useStateObj<string>("");

	const { isWorking, run } = useAsyncWorking(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			setUrlError(null);
			console.log("formData", formData);
			const { data } = await axios.post("/api/preview", formData);
			console.log("res", data);
			if (data.status === "error") {
				setUrlError(data.message);
				return;
			}
			iframeUrl.set(formData.url ?? "");
		},
		[formData],
	);

	const url = iframeUrl.value;
	const isValidUrl =
		url && url.startsWith("http") && url.includes("://") && url.includes(".");

	return (
		<div
			className="my-12 flex flex-col md:flex-row gap-3 items-center md:items-start bg-[var(--light-background-color)]"
			id="start"
		>
			<div className="container mx-auto flex flex-col sm:flex-row">
				<form onSubmit={run} className="w-full md:w-1/2 mb-10 p-8">
					<h2 className="mb-8 text-left text-4xl font-bold [font-family:var(--font-family-heading)] text-[var(--dark-text-color)]">
						{dict.AppPreview.title}
					</h2>

					<p className="my-3">{dict.AppPreview.introText}</p>

					<div className="flex flex-col gap-3 mb-3">
						<label className="text-gray-800">
							{dict.AppPreview.websiteUrl}:
							<input
								type="url"
								name="url"
								placeholder={dict.AppPreview.enterWebsiteUrl}
								className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm bg-white"
								value={formData.url ?? ""}
								onChange={onChange}
								required
							/>
						</label>
						<label className="text-gray-800">
							{dict.AppPreview.appTitle}:
							<input
								type="text"
								name="title"
								placeholder={dict.AppPreview.appTitle}
								className="w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm border border-gray-300 bg-white"
								value={formData.title ?? ""}
								onChange={onChange}
							/>
						</label>
						<button
							className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 disabled:opacity-50 flex justify-center gap-3"
							type="submit"
							disabled={isWorking}
						>
							{isWorking ? <Spinner /> : ""} {dict.AppPreview.submitButton}
						</button>

						<pre className="text-transparent">{JSON.stringify(formData, null, 2)}</pre>
					</div>
				</form>
				<div className="w-full md:w-1/2 p-8 flex justify-center">
					<DeviceFrameset device="iPhone X" color="gold">
						<div className="bg-gray-200 p-4 shadow-lg text-black text-xl flex justify-between">
							<div>{formData?.title}</div>
							<div>
								<IoMdShare />
							</div>
						</div>
						{url && !urlError && (
							<iframe src={url} className="w-full h-full overflow-auto"></iframe>
						)}
						{urlError && <div className="bg-red-100 text-red-800 p-4">{urlError}</div>}
						{!url && (
							<div className="bg-gray-200 rounded-lg p-4 shadow-lg h-full">
								<div className="bg-white rounded-lg overflow-hidden shadow-inner">
									<div className="bg-blue-500 text-white p-2 text-center">App</div>
									<div className="p-4">
										<div className="bg-gray-300 h-8 w-3/4 rounded mb-2"></div>
										<div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
										<div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
										<div className="bg-gray-300 h-8 w-1/2 rounded"></div>
									</div>
								</div>
							</div>
						)}
					</DeviceFrameset>
				</div>
			</div>
		</div>
	);
};
