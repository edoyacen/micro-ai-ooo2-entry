// This entry writes the answer for "An AI out-of-office reply" (a make.fun bounty task) to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'Away until Monday. Your urgent request has been placed in a queue that I have logically priority-sorted to never.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}.`);
