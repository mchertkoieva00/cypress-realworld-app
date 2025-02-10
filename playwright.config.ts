import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30000,
  retries: process.env.CI ? 2 : 0, // Retry twice on CI, no retries locally
  workers: process.env.CI ? 3 : undefined,

  reporter: [
    ["html"],
    ["list"], // Adding Allure later
  ],

  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
};

export default config;
