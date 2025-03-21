"use server";
import { sendContactForm } from "@/lib/resend/send-contact-form.ts";
import { EmailTemplateProps } from "@/components/contact-form-email-template.tsx";

export async function sendContactFormAction(postData: EmailTemplateProps) {
  const { data, error } = await sendContactForm(postData);
  if (error) {
    throw error;
  }
  return data;
}
