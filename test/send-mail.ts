import { sendContactForm } from "@/lib/resend/send-contact-form.ts";
import { runTest } from "@/test/bootstrap.ts";

void runTest(async () => {
  const res = await sendContactForm({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    url: "https://example.com",
    message: "Hello, this is a test message.",
  });
  console.log("res", res);
});
