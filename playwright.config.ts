import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT ?? 3100);
const baseURL = `http://127.0.0.1:${PORT}`;
const LOCAL_CHANNEL = process.env.CI ? undefined : "msedge";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Each worker runs a full browser against a local production server. Beyond 2, a laptop that
  // is also running an IDE and a browser starts timing out page loads — contention, not app bugs.
  workers: process.env.CI ? 1 : 2,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  // CI installs Playwright's own Chromium. Locally we drive the already-installed
  // Edge so contributors don't need the extra ~150MB browser download.
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel: LOCAL_CHANNEL } },
    { name: "mobile", use: { ...devices["Pixel 7"], channel: LOCAL_CHANNEL } },
  ],
  // Tests run against a production build so they catch build-time regressions.
  // NEXT_DIST_DIR keeps that build out of `.next` — building into the directory a
  // running `next dev` is serving from corrupts it — and PORT keeps it off 3000.
  webServer: {
    command: `npm run build && npm run start -- --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
    env: { NEXT_DIST_DIR: ".next-e2e" },
  },
});
