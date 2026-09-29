// Validate a JSON Resume file against the official schema. Works on Node 20.
// Usage: node validate.mjs ../resume.json
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { validate } = require("jsonschema");
const schema = require("@jsonresume/schema/schema.json");

const file = process.argv[2] ?? "../resume.json";
const result = validate(JSON.parse(readFileSync(file, "utf8")), schema);

if (result.valid) {
  console.log(`${file}: valid JSON Resume`);
} else {
  console.error(`${file}: ${result.errors.length} schema error(s)`);
  for (const e of result.errors) console.error(`  ${e.property}: ${e.message}`);
  process.exit(1);
}
