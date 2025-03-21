import { Resend } from "resend";
import {
  ContactFormEmailTemplate,
  EmailTemplateProps,
} from "@/components/contact-form-email-template.tsx";
import invariant from "tiny-invariant";

export async function sendContactForm(postData: EmailTemplateProps) {
  invariant(process.env.RESEND_API_KEY, "RESEND_API_KEY is not set");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["spidgorny@gmail.com"],
    subject: "Contact from Web2App",
    react: await ContactFormEmailTemplate(postData),
  });
  return { data, error };
}
