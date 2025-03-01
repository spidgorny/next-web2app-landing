import { config } from "dotenv";
import { findUp } from "find-up";

export async function runTest(callback: () => Promise<void>) {
  const envPath = await findUp(".env");
  config({ path: envPath });
  console.log(process.uptime(), "Running");
  await callback();
  console.log("done in", process.uptime());
}
