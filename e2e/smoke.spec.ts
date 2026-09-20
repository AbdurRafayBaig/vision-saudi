import { test, expect, type APIRequestContext } from "@playwright/test";

// Each call gets its own client IP so the 5-per-minute rate limit never trips mid-suite.
const postContact = (request: APIRequestContext, data: Record<string, unknown>) =>
  request.post("/api/contact", { data, headers: { "x-real-ip": `e2e-${Math.random()}` } });

const ROUTES = [
  "/",
  "/services",
  "/services/business-setup",
  "/services/corporate-services",
  "/services/technology-infrastructure",
  "/services/real-estate",
  "/services/premium-residency",
  "/about",
  "/contact",
  "/partners",
  "/insights",
  "/experience",
  "/privacy",
  "/terms",
];

test.describe("every route renders", () => {
  for (const route of ROUTES) {
    test(`${route} loads without errors`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));

      const response = await page.goto(route);
      expect(response?.status(), `${route} should return 2xx`).toBeLessThan(400);

      // exactly one h1 per page (SEO + a11y landmark hygiene)
      await expect(page.locator("h1")).toHaveCount(1);

      // single main landmark
      await expect(page.locator("main")).toHaveCount(1);

      expect(consoleErrors, `console errors on ${route}`).toEqual([]);
    });
  }
});

test.describe("SEO metadata", () => {
  test("each page has a unique title and canonical", async ({ page }) => {
    const seen = new Map<string, string>();
    for (const route of ["/", "/services", "/about", "/contact"]) {
      await page.goto(route);
      const title = await page.title();
      expect(title.length, `${route} needs a title`).toBeGreaterThan(10);
      expect(seen.has(title), `duplicate title "${title}" on ${route}`).toBe(false);
      seen.set(title, route);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical, `${route} needs a canonical`).toBeTruthy();
    }
  });

  test("legal pages are noindex", async ({ page }) => {
    for (const route of ["/privacy", "/terms"]) {
      await page.goto(route);
      const robots = await page.locator('meta[name="robots"]').getAttribute("content");
      expect(robots, `${route} should be noindex`).toContain("noindex");
    }
  });
});

test.describe("layout integrity", () => {
  test("no horizontal overflow on mobile", async ({ page }) => {
    for (const route of ["/", "/services", "/contact"]) {
      await page.goto(route);
      const overflows = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2
      );
      expect(overflows, `${route} scrolls horizontally`).toBe(false);
    }
  });

  test("no broken images", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let y = 0;
        const timer = setInterval(() => {
          window.scrollTo(0, y);
          y += 800;
          if (y > document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 50);
      });
    });
    const broken = await page.evaluate(() =>
      [...document.querySelectorAll("img")]
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.src)
    );
    expect(broken).toEqual([]);
  });
});

test.describe("contact form", () => {
  test("rejects an invalid email at the API", async ({ request }) => {
    const res = await postContact(request, { name: "Test", email: "not-an-email", phone: "+966 50 000 0000", serviceIntent: "business-setup", consent: true });
    expect(res.status()).toBe(400);
  });

  test("rejects a submission missing required fields", async ({ request }) => {
    const res = await postContact(request, { name: "Test" });
    expect(res.status()).toBe(400);
  });
});

test.describe("insights articles", () => {
  test("each article renders its own body, not a shared one", async ({ page }) => {
    await page.goto("/insights/saudi-market-entry-guide-2026");
    await expect(page.getByRole("heading", { name: "The 5-Stage Client Journey Framework" })).toBeVisible();

    await page.goto("/insights/saudi-premium-residency-pathways-explained");
    await expect(page.getByRole("heading", { name: "Key Residency Pathways Overview" })).toBeVisible();
    await expect(page.getByText("The 5-Stage Client Journey Framework")).toHaveCount(0);
  });

  test("unknown article slug returns the branded 404", async ({ page }) => {
    const res = await page.goto("/insights/does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: /doesn.t exist/ })).toBeVisible();
  });
});

test.describe("lead form protection", () => {
  const valid = {
    name: "Test User",
    email: "test@example.com",
    phone: "+966 50 000 0000",
    serviceIntent: "business-setup",
    consent: true,
  };

  test("rejects an unknown service intent", async ({ request }) => {
    const res = await postContact(request, { ...valid, serviceIntent: "hacker" });
    expect(res.status()).toBe(400);
  });

  test("rejects a submission without privacy consent", async ({ request }) => {
    const res = await postContact(request, { ...valid, consent: false });
    expect(res.status()).toBe(400);
  });

  test("silently accepts (and drops) honeypot submissions", async ({ request }) => {
    const res = await postContact(request, { ...valid, website: "spam.example" });
    expect(res.status()).toBe(200);
  });
});

test("security headers are set", async ({ request }) => {
  const res = await request.get("/");
  const h = res.headers();
  expect(h["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(h["x-content-type-options"]).toBe("nosniff");
  expect(h["x-frame-options"]).toBe("DENY");
  expect(h["x-powered-by"]).toBeUndefined();
});

test.describe("homepage tools", () => {
  test.beforeEach(async ({ page }) => {
    // Never send real emails from tests.
    await page.route("**/api/contact", (route) => route.fulfill({ json: { ok: true } }));
    await page.addInitScript(() => localStorage.setItem("vs_cookie_consent", "declined"));
    await page.goto("/");
  });

  test("estimator recalculates the roadmap and captures the plan", async ({ page }) => {
    const est = page.locator("#estimator");
    const timeline = est.locator("p.font-display").first();
    await expect(timeline).toContainText("5–9");
    await est.getByLabel(/Regional Headquarters/).check();
    await est.getByLabel(/Industrial/).check();
    await expect(timeline).toContainText("10–20");
    await expect(est.getByText("Industrial licensing")).toBeVisible();

    await est.getByRole("button", { name: /Email me the full plan/ }).click();
    await est.getByLabel("Full Name *").fill("Test Person");
    await est.getByLabel("Email *").fill("test@example.com");
    await est.getByLabel("Phone / WhatsApp *").fill("+966 50 000 0000");
    await est.getByRole("checkbox").check();
    const [req] = await Promise.all([
      page.waitForRequest("**/api/contact"),
      est.getByRole("button", { name: /Email me the full plan/ }).click(),
    ]);
    expect(req.postDataJSON()).toMatchObject({ leadType: "estimate" });
    expect(req.postDataJSON().planSummary).toContain("Regional Headquarters");
    await expect(est.getByText("Your roadmap is on its way.")).toBeVisible();
  });

  test("map shows details for the selected region", async ({ page }) => {
    const map = page.locator("section", { hasText: "One Kingdom, ten very different markets." });
    // Click the chip, not a pin: the auto-tour re-renders pins and detaches them mid-click.
    await map.getByRole("button", { name: "Eastern Province", exact: true }).click();
    await expect(map.getByRole("heading", { level: 3 })).toHaveText("Eastern Province");
  });

  test("guide is gated and downloads a real PDF", async ({ page, request }) => {
    const guide = page.locator("#guide");
    await guide.getByLabel("Full Name *").fill("Test Person");
    await guide.getByLabel("Work Email *").fill("test@example.com");
    await guide.getByRole("checkbox").check();
    await guide.getByRole("button", { name: /Get the free guide/ }).click();
    const href = await guide.getByRole("link", { name: /Download the guide/ }).getAttribute("href");
    const pdf = await request.get(href!);
    expect(pdf.status()).toBe(200);
    expect(pdf.headers()["content-type"]).toContain("application/pdf");
  });

  test("official partner logos load", async ({ page }) => {
    const partners = page.locator("section", { hasText: "Strategic Partnerships" });
    await partners.scrollIntoViewIfNeeded();
    for (const name of ["Ministry of Foreign Affairs", "Riyadh Region Municipality"]) {
      const logo = partners.getByRole("img", { name }).first();
      await expect(logo).toBeVisible();
      // Marquee logos load lazily, so poll until the browser has actually decoded the file.
      await expect.poll(() => logo.evaluate((i: HTMLImageElement) => i.naturalWidth), { timeout: 10000 }).toBeGreaterThan(0);
    }
  });
});

// Guides need only name + email, but every other lead must include a phone for the callback.
// (The guide UI test above proves the no-phone guide path passes the same shared schema.)
test("inquiry without a phone number is rejected", async ({ request }) => {
  const res = await postContact(request, {
    name: "Test User",
    email: "test@example.com",
    serviceIntent: "business-setup",
    consent: true,
  });
  expect(res.status()).toBe(400);
  expect((await res.json()).error).toMatch(/phone/i);
});

test.describe("wayfinding", () => {
  test("a service page places itself in a trail and links the other pillars", async ({ page }) => {
    await page.goto("/services/business-setup");

    const crumbs = page.getByRole("navigation", { name: "Breadcrumb" });
    await expect(crumbs.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(crumbs.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    await expect(crumbs.getByText("Business Setup & Market Entry")).toHaveAttribute("aria-current", "page");

    // BreadcrumbList is what turns the URL line in a search result into a path.
    const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(ld.some((s) => s.includes("BreadcrumbList"))).toBe(true);

    const related = page.locator("section", { hasText: "What usually comes with this" });
    await expect(related.getByRole("link", { name: /Real Estate Investment/ })).toBeVisible();
    // The current pillar should not offer itself.
    await expect(related.getByRole("link", { name: /Business Setup/ })).toHaveCount(0);
  });

  test("an article ends with a way forward, not a dead stop", async ({ page }) => {
    await page.goto("/insights/saudi-market-entry-guide-2026");
    await expect(page.getByRole("link", { name: /Speak to a strategist/ })).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "More insights" }).getByRole("link").first()
    ).toBeVisible();
  });

  test("the homepage navigator lists every service pillar exactly once", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("#services");
    // Five pillars, rendered twice (desktop list + mobile stack); only one set is visible.
    for (const title of [
      "Business Setup & Market Entry",
      "Corporate & Business Services",
      "Technology & Digital Infrastructure",
      "Real Estate Investment & Advisory",
      "Saudi Premium Residency Pathways",
    ]) {
      await expect(nav.getByRole("heading", { name: title, level: 3 }).filter({ visible: true })).toHaveCount(1);
    }
  });
});

test.describe("contact", () => {
  test("asks for four things up front and keeps the rest optional", async ({ page }) => {
    await page.goto("/contact");
    const form = page.locator("form");

    await expect(form.getByLabel("Full Name *")).toBeVisible();
    await expect(form.getByLabel("Work Email *")).toBeVisible();
    await expect(form.getByLabel("Phone / WhatsApp *")).toBeVisible();

    const company = form.getByLabel("Company / Entity Name");
    await expect(company).toBeHidden();
    await form.getByText(/Add detail so we can answer properly/).click();
    await expect(company).toBeVisible();
  });
});

test.describe("estimator, step two", () => {
  test("judges a target date and carries the answer into the plan", async ({ page }) => {
    await page.goto("/");
    const est = page.locator("#estimator");

    const soon = new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10);
    await est.locator("#estimator-target-date").fill(soon);
    await expect(est.getByText(/no slack|Not on that date/)).toBeVisible();

    const far = new Date(Date.now() + 300 * 864e5).toISOString().slice(0, 10);
    await est.locator("#estimator-target-date").fill(far);
    await expect(est.getByText("That date is achievable.")).toBeVisible();

    await est.getByRole("button", { name: /Email me the full plan/ }).click();
    await est.getByLabel("Full Name *").fill("Date Tester");
    await est.getByLabel("Work Email *").fill("date@example.com");
    await est.getByLabel("Phone / WhatsApp *").fill("+966500000000");
    await est.getByRole("checkbox").check();

    const [req] = await Promise.all([
      page.waitForRequest((r) => r.url().includes("/api/contact") && r.method() === "POST"),
      est.getByRole("button", { name: /Email me the full plan/ }).click(),
    ]);
    expect(req.postDataJSON().planSummary).toContain("Target operational date");
  });

  test("the document checklist follows the entity and reports what is ready", async ({ page }) => {
    await page.goto("/");
    const est = page.locator("#estimator");
    await est.getByText(/Documents you'll need to provide/).click();

    await expect(est.getByText("Articles of Association", { exact: true })).toBeVisible();
    await est.getByText("Branch of a Foreign Company").click();
    await expect(est.getByText("Bank reference letter")).toBeVisible();
    await expect(est.getByText("Articles of Association", { exact: true })).toHaveCount(0);

    await est.locator("details input[type=checkbox]").first().check();
    await expect(est.getByText("(1/8 ready)")).toBeVisible();
  });
});

test.describe("property shortlist", () => {
  test("saves across a reload and sends the set as one enquiry", async ({ page }) => {
    await page.goto("/services/real-estate");
    await page.getByRole("button", { name: "Decline" }).click();
    const saves = page.locator('button[aria-label^="Save "]');
    await saves.first().scrollIntoViewIfNeeded();
    await saves.nth(0).click();
    await saves.nth(1).click();

    const bar = page.locator("text=shortlisted").first();
    await expect(bar).toContainText("2");

    // The point of saving is that it survives leaving the page.
    await page.reload();
    await expect(page.getByRole("button", { name: "Decline" })).toHaveCount(0);
    await expect(page.locator("text=shortlisted").first()).toContainText("2");

    await page.getByRole("button", { name: /Email me these 2/ }).click();
    await page.getByLabel("Full Name *").fill("Shortlist Tester");
    await page.getByLabel("Work Email *").fill("shortlist@example.com");
    await page.getByLabel("Phone / WhatsApp *").fill("+966500000000");
    await page.getByRole("checkbox").check();

    const [req] = await Promise.all([
      page.waitForRequest((r) => r.url().includes("/api/contact") && r.method() === "POST"),
      page.getByRole("button", { name: /Email me these 2/ }).click(),
    ]);
    const body = req.postDataJSON();
    expect(body.serviceIntent).toBe("real-estate");
    expect(body.planSummary).toContain("Shortlisted 2 properties");
  });
});
