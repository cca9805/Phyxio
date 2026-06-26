#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

function run(cmd, cwd) {
  return cp.execSync(cmd, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function findRepoRoot(startDir) {
  try {
    return run("git rev-parse --show-toplevel", startDir).trim();
  } catch {
    console.error("No se pudo localizar el repositorio git.");
    process.exit(2);
  }
}

const marker = "# Phyxio mojibake hook";
const block = `${marker}
npm --prefix frontend run check:mojibake:staged
status=$?
if [ $status -ne 0 ]; then
  echo "pre-commit: mojibake detectado, commit cancelado."
  exit $status
fi
`;

const repoRoot = findRepoRoot(process.cwd());
const hooksDir = path.join(repoRoot, ".git", "hooks");
const hookPath = path.join(hooksDir, "pre-commit");

if (!fs.existsSync(hooksDir)) {
  console.error("No existe .git/hooks en este repositorio.");
  process.exit(2);
}

let existing = "";
if (fs.existsSync(hookPath)) {
  existing = fs.readFileSync(hookPath, "utf8");
  if (existing.includes(marker)) {
    console.log("Hook de mojibake ya estaba instalado.");
    process.exit(0);
  }
}

let content = existing.trim();
if (content.length === 0) {
  content = "#!/bin/sh\n";
} else if (!content.startsWith("#!/bin/sh")) {
  content = `#!/bin/sh\n${content}\n`;
} else if (!content.endsWith("\n")) {
  content += "\n";
}

content += `\n${block}`;
fs.writeFileSync(hookPath, content, { encoding: "utf8" });

try {
  fs.chmodSync(hookPath, 0o755);
} catch {
  // On Windows this may be a no-op.
}

console.log(`Hook instalado en ${hookPath}`);
