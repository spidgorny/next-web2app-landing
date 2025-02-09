"use client";
import { useFormData } from "spidgorny-react-helpers/use-form-data";
import { useAsyncWorking } from "spidgorny-react-helpers/use-async-working";
import React, { FormEvent } from "react";
import { FaSpinner } from "react-icons/fa6";
import { EmailTemplateProps } from "@/app/components/contact-form-email-template.tsx";
import { useStateObj } from "spidgorny-react-helpers/use-state-obj";
import { sendContactFormAction } from "@/app/[lang]/actions.ts";

export function ContactForm() {
  const { formData, onChange } = useFormData<EmailTemplateProps>({
    message:
      "I would like to discuss my project with you. Please contact me by mail or phone: ___",
  });
  const isMailSent = useStateObj(false);

  const { isWorking, error, run } = useAsyncWorking(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("formData", formData);
      // Handle form submission logic here
      // const { data } = await axios.post("/api/send", formData);
      const data = await sendContactFormAction(formData);
      console.log("res", data);
      isMailSent.setTrue();
    },
  );

  return (
    <form
      onSubmit={run}
      className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Start Here. Contact Us
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg text-black"
          value={formData.name ?? ""}
          onChange={onChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg text-black"
          value={formData.email ?? ""}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Website URL *</label>
        <input
          type="url"
          name="url"
          placeholder="Your Website URL"
          className="w-full px-4 py-2 border rounded-lg text-black"
          value={formData.url ?? ""}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Platforms</label>
        <div className="flex items-center">
          <label>
            <input
              type="checkbox"
              name="appAndroid"
              value="android"
              className="mr-2"
              onChange={onChange}
            />
            <span className="text-black mr-4">Android</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="appIos"
              value="ios"
              className="mr-2"
              onChange={onChange}
            />
            <span className="text-black">iOS</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg text-black"
          value={formData.message ?? ""}
          onChange={onChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        disabled={isWorking}
      >
        {isWorking ? <FaSpinner className="animate-spin" /> : "Send Message"}
      </button>
      {error && <div className="text-red-500 mt-4">{error.message}</div>}
      {isMailSent.value && (
        <div className="text-green-500 mt-4">
          Thank you for contacting us. We will get back to you shortly.
        </div>
      )}
    </form>
  );
}
