// Print an HTML file to PDF with the Chrome or Chromium already installed on the machine.
// Usage: node pdf.mjs <input.html> <output.pdf>
// No Puppeteer download. Set CHROME_PATH to override detection.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error("usage: node pdf.mjs <input.html> <output.pdf>");
  process.exit(2);
}

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("No Chrome or Chromium found. Set CHROME_PATH to the browser binary.");
  process.exit(1);
}

const inPath = resolve(input);
const outPath = resolve(output);
mkdirSync(dirname(outPath), { recursive: true });

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--force-device-scale-factor=1",
    `--print-to-pdf=${outPath}`,
    pathToFileURL(inPath).href,
  ],
  // Chrome prints harmless display and allocator errors to stderr on macOS; keep only the pdf result.
  { stdio: ["ignore", "inherit", "ignore"] }
);

console.log(`wrote ${outPath}`);
