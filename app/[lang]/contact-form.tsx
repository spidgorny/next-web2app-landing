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
    message: "I would like to discuss my website with you.\nURL: https://",
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
    <form onSubmit={run} id="contact">
      <div className="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32">
        <div className="rounded-3xl bg-[#ffffff] p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="rounded-3xl bg-[var(--primary-color)] p-8 pt-12 text-[var(--light-text-color)]">
              <div className="mb-4 uppercase">Kontaktieren Sie uns</div>
              <div className="mb-6 text-4xl font-semibold [font-family:var(--font-family-heading)]">
                <i className="fas fa-comment-dots" aria-hidden="true"></i> Wir
                freuen uns auf Ihre Nachricht
              </div>
              <div className="hidden py-4 lg:block">
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--dark-background-color)] p-6">
                    <i
                      className="fa-duotone fa-location-dot text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">Unser Standort</div>
                    <div className="">Frankfurt am Main, Deutschland</div>
                  </div>
                </div>
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--dark-background-color)] p-6">
                    <i
                      className="fa-duotone fa-envelope text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">E-Mail Kontakt</div>
                    <div className="">kontakt@web2app.com</div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--dark-background-color)] p-6">
                    <i
                      className="fa-duotone fa-phone text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">
                      Rufen Sie uns an
                    </div>
                    <div className="">(030) 12345678</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6">
              <div className="flex flex-col space-y-4 md:space-y-12">
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                  <div className="w-full">
                    <div className="">
                      <label
                        htmlFor="first-name"
                        className="font-medium text-[var(--dark-text-color)]"
                      >
                        Vorname
                      </label>
                    </div>
                    <div>
                      <input
                        name="firstName"
                        type="text"
                        className="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                        value={formData.firstName ?? ""}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <label
                        htmlFor="last-name"
                        className="font-medium text-[var(--dark-text-color)]"
                      >
                        Nachname
                      </label>
                    </div>
                    <div>
                      <input
                        name="lastName"
                        type="text"
                        className="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                        value={formData.lastName ?? ""}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                  <div className="w-full">
                    <div className="">
                      <label
                        htmlFor="email"
                        className="font-medium text-[var(--dark-text-color)]"
                      >
                        E-Mail Adresse
                      </label>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                        value={formData.email ?? ""}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <label
                        htmlFor="phone"
                        className="font-medium text-[var(--dark-text-color)]"
                      >
                        Telefonnummer
                      </label>
                    </div>
                    <div>
                      <input
                        type="phone"
                        name="phone"
                        className="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                        value={formData.phone ?? ""}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="message"
                      className="font-medium text-[var(--dark-text-color)]"
                    >
                      Nachricht
                    </label>
                  </div>
                  <div className="">
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full border border-[#ffffff] border-b-[var(--gray-text-color)] p-2"
                      value={formData.message ?? ""}
                      onChange={onChange}
                    ></textarea>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold uppercase text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
                    disabled={isWorking}
                  >
                    {isWorking ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      "Nachricht senden"
                    )}
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 mt-4">{error.message}</div>
                )}

                {isMailSent.value && (
                  <div className="text-green-500 mt-4">
                    Thank you for contacting us. We will get back to you
                    shortly.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
