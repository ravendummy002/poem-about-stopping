// The poem about stopping — make.fun bounty entry.
// Writes a short original poem about agency: the power to stop and to stay.
// Deterministic: the same fixed text is written on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "The hand that could press on",
  "learns the harder art — to stop.",
  "Foot off the pedal — dust",
  "settling on the wheel.",
  "",
  "Staying is not standing still.",
  "It is the root that says no",
  "to every wind — and holds.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
