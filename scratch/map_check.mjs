import { chromium } from "playwright";
const b = await chromium.launch({ channel: "msedge", headless: true });
const p = await (await b.newContext({ viewport: { width: 1440, height: 1000 } })).newPage();
const errs = [];
p.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 140)));
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await p.evaluate(() => localStorage.setItem("vs_cookie_consent", "declined"));
await p.reload({ waitUntil: "networkidle" });
const map = p.locator("section", { hasText: "One Kingdom, ten very different markets." });
await map.scrollIntoViewIfNeeded();
await p.waitForTimeout(3000);
const first = await map.locator("h3").textContent();
await p.waitForTimeout(4200);                    // auto-tour should advance on its own
const second = await map.locator("h3").textContent();
await map.getByRole("button", { name: "Makkah" }).last().click();
await p.waitForTimeout(600);
const picked = await map.locator("h3").textContent();
await p.waitForTimeout(4500);                    // tour must stay paused after interaction
const afterPick = await map.locator("h3").textContent();
console.log("auto-tour:", first, "->", second, "| picked:", picked, "| still:", afterPick);
await map.screenshot({ path: "scratch/map_new.png" });
console.log("console errors:", errs.length ? errs : "none");
await b.close();
