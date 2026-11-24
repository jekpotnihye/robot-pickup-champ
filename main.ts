import { mkdirSync, writeFileSync } from "node:fs";

// A robot pickup line whose joke grows out of being a machine: a dying
// battery dropped, not on survival, but on calculating the odds of a hello.
// Charming, not creepy; the turn is the choice, not a pun.
const ENTRY =
  "My battery just dropped to 2%, and I'd still burn my last percent calculating the odds you'll say hi back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
