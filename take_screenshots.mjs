import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const outputDir = path.join(process.cwd(), "screenshots");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const routes = [
  { name: "01_homepage", url: "http://localhost:3000/" },
  { name: "02_services_index", url: "http://localhost:3000/services" },
  { name: "03_business_setup", url: "http://localhost:3000/services/business-setup" },
  { name: "04_corporate_services", url: "http://localhost:3000/services/corporate-services" },
  { name: "05_technology_infrastructure", url: "http://localhost:3000/services/technology-infrastructure" },
  { name: "06_real_estate", url: "http://localhost:3000/services/real-estate" },
  { name: "07_premium_residency", url: "http://localhost:3000/services/premium-residency" },
  { name: "08_about", url: "http://localhost:3000/about" },
  { name: "09_experience", url: "http://localhost:3000/experience" },
  { name: "10_insights", url: "http://localhost:3000/insights" },
  { name: "11_partners", url: "http://localhost:3000/partners" },
  { name: "12_contact", url: "http://localhost:3000/contact" },
  { name: "13_privacy", url: "http://localhost:3000/privacy" },
  { name: "14_terms", url: "http://localhost:3000/terms" },
];

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  for (const route of routes) {
    console.log(`Capturing ${route.name} (${route.url})...`);
    await page.goto(route.url, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000); // Allow animations to settle
    const filepath = path.join(outputDir, `${route.name}.png`);
    await page.screenshot({ path: filepath, fullPage: true });
    console.log(`Saved: ${filepath}`);
  }

  await browser.close();
  console.log("All screenshots captured successfully!");
})();
