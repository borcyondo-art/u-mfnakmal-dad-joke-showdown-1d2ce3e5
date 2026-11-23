// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I opened a fortune-telling shop next door to a bank. The rent is high, the customers are skeptical, and the prophet margins are excellent.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
