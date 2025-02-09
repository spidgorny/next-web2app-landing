"use client";
import { DeviceFrameset } from "react-device-frameset";
import React, { FormEvent, useState } from "react";
import { IoMdShare } from "react-icons/io";
import { useAsyncWorking } from "spidgorny-react-helpers/use-async-working";
import axios from "axios";
import { useFormData } from "spidgorny-react-helpers/use-form-data";
import { useStateObj } from "spidgorny-react-helpers/use-state-obj";

export const AppPreview = () => {
  const { formData, onChange } = useFormData<{ url?: string; title?: string }>(
    {},
  );
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
  );

  const url = iframeUrl.value;
  const isValidUrl =
    url && url.startsWith("http") && url.includes("://") && url.includes(".");

  return (
    <div
      className="flex flex-col md:flex-row gap-3 items-center md:items-start bg-[var(--light-background-color)]"
      id="start"
    >
      <div className="container mx-auto flex flex-col sm:flex-row">
        <form onSubmit={run} className="w-full md:w-1/2 mb-10 p-8">
          <div className="flex flex-col gap-3 mb-3">
            <label className="text-gray-800">
              Website URL
              <input
                type="url"
                name="url"
                placeholder="Enter your website URL"
                className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm bg-white"
                value={formData.url ?? ""}
                onChange={onChange}
              />
            </label>
            <label className="text-gray-800">
              App Title:
              <input
                type="text"
                name="title"
                placeholder="App Title"
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
              {isWorking ? <Spinner /> : ""} Preview App
            </button>

            <pre className="text-transparent">
              {JSON.stringify(formData, null, 2)}
            </pre>
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
              <iframe
                src={url}
                className="w-full h-full overflow-auto"
              ></iframe>
            )}
            {urlError && (
              <div className="bg-red-100 text-red-800 p-4">{urlError}</div>
            )}
            {!url && (
              <div className="bg-gray-200 rounded-lg p-4 shadow-lg h-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                  <div className="bg-blue-500 text-white p-2 text-center">
                    App
                  </div>
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

export function Spinner() {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
