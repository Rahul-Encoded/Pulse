import { test, expect } from "@playwright/test";

test.describe("Visual Regression Tests", () => {
  test("homepage matches reference screenshot", async ({ page }) => {
    // Set viewport to match reference screenshot dimensions
    await page.setViewportSize({ width: 2475, height: 1303 });

    // Navigate to the homepage
    await page.goto("/");

    // Wait for the page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Wait for table content to be visible
    await page.waitForSelector("table", { state: "visible" });

    // Freeze all dynamic content
    await page.evaluate(() => {
      // Stop all intervals and timeouts
      let id = window.setTimeout(() => {}, 0);
      while (id--) {
        window.clearTimeout(id);
        window.clearInterval(id);
      }

      // Freeze Date.now() and Math.random()
      const now = Date.now();
      Date.now = () => now;
      Math.random = () => 0.5;
    });

    // Disable animations
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `,
    });

    // Wait for any pending renders to complete
    await page.waitForTimeout(2000);

    // Compare against the reference screenshot
    await expect(page).toHaveScreenshot("PulseScreenshot.png", {
      maxDiffPixels: 100, // Reduced since content should now be stable
      timeout: 30000, // Increased timeout for first-time snapshot generation
    });
  });
});
