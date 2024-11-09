import { NextRequest } from "next/server";
import axios from "axios";
import invariant from "tiny-invariant";

export async function POST(request: NextRequest) {
  const formData = await request.json();
  console.log({ formData });
  invariant(isValidUrl(formData.url), "Invalid URL");
  const { headers } = await axios.head(formData.url);
  console.log({ headers });
  if (headers["content-security-policy"]?.includes("self")) {
    return Response.json({
      status: "error",
      message: `CSP policy is too restrictive on ${formData.url}. We can not display the preview, but making a mobile app will still work.`,
    });
  }
  return Response.json({
    status: "ok",
  });
}

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
