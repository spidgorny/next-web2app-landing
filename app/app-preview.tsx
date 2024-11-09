"use client";
import { DeviceFrameset } from "react-device-frameset";
import React, { useState } from "react";
import { FormEvent } from "react";
import { IoMdShare } from "react-icons/io";
import { FaSpinner } from "react-icons/fa6";
import { useAsyncWorking } from "spidgorny-react-helpers/use-async-working";
import axios from "axios";
import { useFormData } from "spidgorny-react-helpers/use-form-data";

export const AppPreview = () => {
  const { formData, onChange } = useFormData<{ url?: string; title?: string }>(
    {},
  );
  const [urlError, setUrlError] = useState<string | null>(null);

  const { isWorking, error, run } = useAsyncWorking(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setUrlError(null);
      console.log(formData);
      const { data } = await axios.post("/api/preview", formData);
      if (data.status === "error") {
        setUrlError(data.message);
      }
    },
  );

  const url = formData.url;
  const isValidUrl =
    url && url.startsWith("http") && url.includes("://") && url.includes(".");

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={run} className="w-full mb-10">
        <div className="flex flex-col gap-3 mb-3">
          <label className="text-gray-800">
            Website URL ({isValidUrl ? 1 : 0}):
            <input
              type="url"
              name="url"
              placeholder="Enter your website URL"
              className="w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm bg-white"
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
              className="w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm"
              value={formData.title ?? ""}
              onChange={onChange}
            />
          </label>
          <button
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 disabled:opacity-50 flex justify-center gap-3"
            type="submit"
            disabled={!isValidUrl}
          >
            {isWorking ? <FaSpinner /> : ""} Preview App
          </button>
        </div>
      </form>
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
        {urlError && (
          <div className="bg-red-100 text-red-800 p-4">{urlError}</div>
        )}
        {!url && (
          <div className="bg-gray-200 rounded-lg p-4 shadow-lg mt-6">
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
  );
};
