import { chromium } from "playwright";
const [url, out, w = "1440", h = "900", full] = process.argv.slice(2);
const b = await chromium.launch({ channel: "msedge", headless: true });
const p = await (await b.newContext({ viewport: { width: +w, height: +h } })).newPage();
await p.goto(url, { waitUntil: "networkidle" });
await p.waitForTimeout(1200);
await p.screenshot({ path: out, fullPage: full === "full" });
await b.close();
