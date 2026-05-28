const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const questionsPath = path.join(root, "questions.js");
const source = fs.readFileSync(questionsPath, "utf8");
const context = {};

vm.createContext(context);
vm.runInContext(`${source}\nthis.QUESTIONS = QUESTIONS;`, context, { filename: "questions.js" });

const questions = context.QUESTIONS;
const errors = [];
const ids = new Set();
const subjectSummaries = [];

function fail(message) {
  errors.push(message);
}

function idFor(subject, itemIndex) {
  return `${subject}-${itemIndex}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

if (!Array.isArray(questions)) {
  fail("QUESTIONS must be an array.");
} else {
  console.log("::group::Question bank summary");
  console.log(`Source: ${path.relative(root, questionsPath)}`);
  console.log(`Groups found: ${questions.length}`);
  console.log("::endgroup::");

  questions.forEach((group, groupIndex) => {
    if (!group || typeof group !== "object") {
      fail(`Group ${groupIndex} must be an object.`);
      return;
    }

    if (!group.subject || typeof group.subject !== "string") {
      fail(`Group ${groupIndex} is missing a string subject.`);
    }

    if (!group.icon || typeof group.icon !== "string") {
      fail(`Group ${group.subject || groupIndex} is missing a string icon.`);
    }

    if (!Array.isArray(group.items) || !group.items.length) {
      fail(`Group ${group.subject || groupIndex} must have at least one item.`);
      return;
    }

    subjectSummaries.push({
      subject: group.subject,
      icon: group.icon,
      count: group.items.length
    });

    group.items.forEach((item, itemIndex) => {
      const label = `${group.subject || groupIndex} item ${itemIndex}`;
      const id = idFor(group.subject || `group-${groupIndex}`, itemIndex);

      if (ids.has(id)) fail(`Duplicate generated id: ${id}`);
      ids.add(id);

      if (!item || typeof item !== "object") {
        fail(`${label} must be an object.`);
        return;
      }

      if (!item.q || typeof item.q !== "string") {
        fail(`${label} is missing a string q.`);
      }

      if (!item.a || typeof item.a !== "string") {
        fail(`${label} is missing a string a.`);
      }

      if (!Array.isArray(item.signals) || !item.signals.length) {
        fail(`${label} must have at least one signal.`);
      } else {
        item.signals.forEach((signal, signalIndex) => {
          if (!signal || typeof signal !== "string") {
            fail(`${label} signal ${signalIndex} must be a non-empty string.`);
          }
        });
      }
    });
  });
}

if (subjectSummaries.length) {
  console.log("::group::Subjects");
  subjectSummaries.forEach(({ subject, icon, count }) => {
    console.log(`${icon.padEnd(2)}  ${subject.padEnd(28)} ${String(count).padStart(3)} questions`);
  });
  console.log("::endgroup::");
}

if (errors.length) {
  console.error("::group::Validation errors");
  console.error(`Question validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  console.error("::endgroup::");
  process.exit(1);
}

console.log("::group::Validation result");
console.log(`Validated groups: ${questions.length}`);
console.log(`Validated questions: ${ids.size}`);
console.log("Duplicate generated IDs: none");
console.log("Missing required fields: none");
console.log("::endgroup::");
