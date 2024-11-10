import { EmailTemplate } from "@/app/components/email-template";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["spidgorny@gmail.com"],
      subject: "Contact from Web2App",
      react: EmailTemplate(postData),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
