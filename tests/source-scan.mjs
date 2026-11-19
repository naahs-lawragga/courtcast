import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const files=['index.html','courtcast-app.js','courtcast-security.js','vercel.json','README.md','PRIVACY.md','SECURITY.md'];
const checks=[/\b(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/,/AIza[0-9A-Za-z_-]{35}/,/\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/\b(?:api[_-]?key|password|client[_-]?secret|access[_-]?token)\s*[:=]\s*["'][^"']{12,}["']/i];
for(const file of files){const src=readFileSync(file,'utf8');for(const check of checks)assert(!check.test(src),'Potential credential pattern in '+file);}
const app=readFileSync('courtcast-app.js','utf8');
assert(!/\beval\s*\(|\bnew Function\s*\(/.test(app),'No dynamic JavaScript evaluation in application');
assert(app.includes('CCSecurity.validRequest')&&app.includes('CCSecurity.validMedia')&&app.includes('CCSecurity.validMessage'));
console.log('Basic source scan passed. This is not a comprehensive secret or vulnerability audit.');
