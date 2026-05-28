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

function fail(message) {
  errors.push(message);
}

function idFor(subject, itemIndex) {
  return `${subject}-${itemIndex}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

if (!Array.isArray(questions)) {
  fail("QUESTIONS must be an array.");
} else {
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

if (errors.length) {
  console.error(`Question validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validated ${questions.length} groups and ${ids.size} questions.`);
