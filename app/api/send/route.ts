import { EmailTemplateProps } from "@/components/contact-form-email-template.tsx";
import { NextRequest } from "next/server";
import { sendContactForm } from "@/lib/resend/send-contact-form.ts";

export async function POST(request: NextRequest) {
  try {
    const postData = (await request.json()) as EmailTemplateProps;
    const { data, error } = await sendContactForm(postData);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
