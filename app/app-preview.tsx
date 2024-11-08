"use client";
import { DeviceFrameset } from "react-device-frameset";
import React from "types-react";

export const AppPreview = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3 mb-3">
          <label className="text-gray-800">
            Website URL:
            <input
              type="url"
              placeholder="Enter your website URL"
              className="w-full px-4 py-2 text-gray-700 rounded-lg shadow-sm"
            />
          </label>
        </div>
      </form>
      <DeviceFrameset device="iPhone X" color="gold">
        <div className="bg-gray-200 rounded-lg p-4 shadow-lg">
          <div className="bg-white rounded-lg overflow-hidden shadow-inner">
            <div className="bg-blue-500 text-white p-2 text-center">
              App Header
            </div>
            <div className="p-4">
              <div className="bg-gray-300 h-8 w-3/4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
              <div className="bg-gray-300 h-4 w-full rounded mb-2"></div>
              <div className="bg-gray-300 h-8 w-1/2 rounded"></div>
            </div>
          </div>
        </div>
      </DeviceFrameset>
    </div>
  );
};
