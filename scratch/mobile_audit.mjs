import { chromium } from "playwright";
const ROUTES = ["/", "/services", "/services/business-setup", "/services/real-estate", "/about", "/contact", "/insights", "/experience", "/partners"];
const b = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
const p = await ctx.newPage();
await p.addInitScript(() => localStorage.setItem("vs_cookie_consent", "declined"));
for (const r of ROUTES) {
  await p.goto("http://localhost:3000" + r, { waitUntil: "networkidle" });
  await p.evaluate(async () => { await new Promise((res) => { let y = 0; const t = setInterval(() => { window.scrollTo(0, y); y += 700; if (y > document.body.scrollHeight) { clearInterval(t); window.scrollTo(0, 0); res(); } }, 40); }); });
  await p.waitForTimeout(500);
  const rep = await p.evaluate(() => {
    const dw = document.documentElement.clientWidth;
    const overflow = [...document.querySelectorAll("body *")].filter((el) => {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return r.width > 0 && r.right > dw + 2 && cs.position !== "fixed" && !el.closest("[class*=overflow-hidden]") && !el.closest("svg");
    }).map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)}`);
    const small = [...document.querySelectorAll("a,button,input,select,textarea")].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.height < 40 || r.width < 40);
    }).map((el) => `${el.tagName.toLowerCase()}:${Math.round(el.getBoundingClientRect().width)}x${Math.round(el.getBoundingClientRect().height)}:${(el.textContent || "").trim().slice(0, 18)}`);
    const tiny = [...document.querySelectorAll("p,span,li,a,div")].filter((el) => {
      const fs = parseFloat(getComputedStyle(el).fontSize);
      return fs > 0 && fs < 12 && (el.textContent || "").trim().length > 12 && el.children.length === 0;
    }).length;
    return { scrollW: document.documentElement.scrollWidth, clientW: dw, overflow: [...new Set(overflow)].slice(0, 4), small: [...new Set(small)].slice(0, 6), smallCount: small.length, tiny };
  });
  console.log(`${r.padEnd(34)} hscroll:${rep.scrollW > rep.clientW + 2} | tap<40:${rep.smallCount} | text<12px:${rep.tiny}`);
  if (rep.overflow.length) console.log("   overflow:", rep.overflow.join(" | "));
  if (rep.small.length) console.log("   small:", rep.small.join(" | "));
}
await b.close();
