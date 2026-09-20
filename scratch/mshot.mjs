import { chromium } from "playwright";
const b = await chromium.launch({ channel: "msedge", headless: true });
const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })).newPage();
await p.addInitScript(() => localStorage.setItem("vs_cookie_consent", "declined"));
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
for (const [sel, out] of [["#estimator", "m_estimator.png"], ["section:has-text('One Kingdom, ten very different markets.')", "m_map.png"]]) {
  const el = p.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(2500);
  await el.screenshot({ path: "scratch/" + out });
}
await b.close();
