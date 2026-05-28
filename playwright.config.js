const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  fullyParallel: false,
  reporter: [["line"]],
  use: {
    browserName: "chromium",
    trace: "retain-on-failure"
  }
});
