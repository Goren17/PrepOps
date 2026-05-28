const { test, expect } = require("@playwright/test");
const path = require("path");

const appUrl = `file://${path.resolve(__dirname, "..", "index.html")}`;

async function logCheckpoint(name, details = {}) {
  console.log(`\n[smoke] ${name}`);
  Object.entries(details).forEach(([key, value]) => {
    console.log(`[smoke]   ${key}: ${value}`);
  });
}

test("static app renders and core filters work", async ({ page }) => {
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  await logCheckpoint("Opening app", { url: appUrl });
  await page.goto(appUrl);

  await expect(page.locator("#subjectTitle")).toContainText("All questions");
  expect(await page.locator("#subjectNav button").count()).toBeGreaterThan(0);
  expect(await page.locator("#questionList .question-item").count()).toBeGreaterThan(0);
  await expect(page.locator("#questionText")).not.toContainText("Choose a question");

  const initialTitle = await page.locator("#subjectTitle").innerText();
  const initialQueueTitle = await page.locator("#queueTitle").innerText();
  const initialSubjectCount = await page.locator("#subjectNav button").count();
  const initialQueueCount = await page.locator("#questionList .question-item").count();
  await logCheckpoint("Initial render", {
    title: initialTitle,
    queueTitle: initialQueueTitle,
    subjects: initialSubjectCount,
    renderedQueueItems: initialQueueCount
  });

  await page.locator("#playlistSelect").selectOption("applied");
  await expect(page.locator("#subjectTitle")).toContainText("Applied Materials DevOps");
  const appliedQueueTitle = await page.locator("#queueTitle").innerText();
  const appliedQueueCount = await page.locator("#questionList .question-item").count();
  await logCheckpoint("Applied playlist selected", {
    title: await page.locator("#subjectTitle").innerText(),
    queueTitle: appliedQueueTitle,
    renderedQueueItems: appliedQueueCount
  });
  expect(appliedQueueTitle).toMatch(/Practice Queue \([1-9][0-9]*\)/);

  await page.locator("[data-mode='scenario']").click();
  await expect(page.locator("#subjectTitle")).toContainText("Scenarios");
  const scenarioQueueTitle = await page.locator("#queueTitle").innerText();
  const scenarioQueueCount = await page.locator("#questionList .question-item").count();
  await logCheckpoint("Scenario mode selected", {
    title: await page.locator("#subjectTitle").innerText(),
    queueTitle: scenarioQueueTitle,
    renderedQueueItems: scenarioQueueCount
  });
  expect(scenarioQueueTitle).toMatch(/Practice Queue \([1-9][0-9]*\)/);

  await page.locator("#showBtn").click();
  await expect(page.locator("#answerBox")).toBeVisible();
  expect(await page.locator("#structureSteps span").count()).toBeGreaterThan(0);
  await logCheckpoint("Answer reveal", {
    structure: await page.locator("#structureSteps").innerText(),
    answerVisible: await page.locator("#answerBox").isVisible()
  });

  await page.locator("#mockSetupBtn").click();
  await expect(page.locator("#mockPanel")).toBeVisible();
  await page.locator("#mockPresetSelect").selectOption("applied");
  const checkedMockSubjects = await page.locator("#mockSubjectChoices input:checked").count();
  await logCheckpoint("Mock preset selected", {
    preset: await page.locator("#mockPresetSelect").inputValue(),
    checkedSubjects: checkedMockSubjects,
    questionCount: await page.locator("#mockCountSelect").inputValue()
  });
  expect(checkedMockSubjects).toBeGreaterThan(0);

  expect(consoleErrors, "browser console errors").toEqual([]);
  expect(pageErrors, "uncaught page errors").toEqual([]);
});
