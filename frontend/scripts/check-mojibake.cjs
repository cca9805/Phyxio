#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const os = require("os");
const path = require("path");
const cp = require("child_process");

const args = new Set(process.argv.slice(2));
const stagedOnly = args.has("--staged");

const ROOT_RELATIVE_TARGETS = [
  path.join("frontend", "src", "data_v2_i18n", "fisica-clasica"),
  path.join("frontend", "src", "v2", "components", "DCL"),
  path.join("frontend", "src", "v2", "components", "graphs", "dinamica"),
  path.join("frontend", "src", "v2", "components", "SVG", "profiles"),
];
const VALID_EXT = new Set([".md", ".yaml", ".yml", ".js", ".jsx"]);

const MOJIBAKE_PATTERNS = [
  "Ã¡",
  "Ã©",
  "Ã­",
  "Ã³",
  "Ãº",
  "Ã±",
  "Ã",
  "Ã‰",
  "Ã",
  "Ã“",
  "Ãš",
  "Ã‘",
  "Ã¼",
  "Ã",
  "Â",
  "â€“",
  "â€”",
  "â€",
  "â€œ",
  "â€",
  "â€˜",
  "â€™",
  "ðŸ",
  "Î±",
  "Î²",
  "Î³",
  "Î´",
  "Î¸",
  "Î»",
  "Î¼",
  "Ï‰",
  "Ï€",
  "Ă",
  "\uFFFD",
];

function run(cmd, cwd) {
  return cp.execSync(cmd, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runGit(args, cwd) {
  const stamp = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const stdoutPath = path.join(os.tmpdir(), `phyxio-git-out-${stamp}.txt`);
  const stderrPath = path.join(os.tmpdir(), `phyxio-git-err-${stamp}.txt`);
  const quote = (arg) => `"${String(arg).replace(/"/g, '\\"')}"`;
  const cmd = `git ${args.map(quote).join(" ")} > "${stdoutPath}" 2> "${stderrPath}"`;

  try {
    cp.execSync(cmd, {
      cwd,
      stdio: "ignore",
    });
    return fs.existsSync(stdoutPath) ? fs.readFileSync(stdoutPath, "utf8") : "";
  } catch (error) {
    const message = fs.existsSync(stderrPath)
      ? fs.readFileSync(stderrPath, "utf8")
      : error.message;
    throw new Error(message.trim() || error.message);
  } finally {
    if (fs.existsSync(stdoutPath)) fs.unlinkSync(stdoutPath);
    if (fs.existsSync(stderrPath)) fs.unlinkSync(stderrPath);
  }
}

function findRepoRoot(startDir) {
  try {
    return runGit(["rev-parse", "--show-toplevel"], startDir).trim();
  } catch {
    console.error("No se pudo localizar el repositorio git.");
    process.exit(2);
  }
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function listAllFiles(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      const abs = path.join(current, e.name);
      if (e.isDirectory()) {
        stack.push(abs);
      } else if (VALID_EXT.has(path.extname(e.name).toLowerCase())) {
        out.push(abs);
      }
    }
  }
  return out;
}

function listStagedFiles(repoRoot, targetAbsDir) {
  let staged = [];
  try {
    const raw = runGit(["diff", "--cached", "--name-only", "--diff-filter=ACMR"], repoRoot);
    staged = raw
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
  } catch (err) {
    console.error("No se pudieron leer archivos staged.", err.message);
    process.exit(2);
  }

  const targetWithSlash = toPosix(path.resolve(targetAbsDir)) + "/";

  return staged
    .map((rel) => path.resolve(repoRoot, rel))
    .filter((abs) => abs.startsWith(path.resolve(targetAbsDir) + path.sep) || abs === path.resolve(targetAbsDir))
    .filter((abs) => fs.existsSync(abs))
    .filter((abs) => VALID_EXT.has(path.extname(abs).toLowerCase()))
    .filter((abs) => toPosix(abs).startsWith(targetWithSlash));
}

function findMojibakeLines(content) {
  const hits = [];
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (MOJIBAKE_PATTERNS.some((token) => line.includes(token))) {
      hits.push({ line: i + 1, text: line });
    }
  }
  return hits;
}

const repoRoot = findRepoRoot(process.cwd());
const targetDirs = ROOT_RELATIVE_TARGETS
  .map((rel) => path.join(repoRoot, rel))
  .filter((dir) => fs.existsSync(dir));

if (targetDirs.length === 0) {
  console.error(`No existe ninguna ruta objetivo valida: ${ROOT_RELATIVE_TARGETS.join(", ")}`);
  process.exit(2);
}

const files = stagedOnly
  ? targetDirs.flatMap((dir) => listStagedFiles(repoRoot, dir))
  : targetDirs.flatMap((dir) => listAllFiles(dir));

if (files.length === 0) {
  if (stagedOnly) {
    console.log("No hay archivos staged en fisica-clasica para validar mojibake.");
  } else {
    console.log("No se encontraron archivos para validar.");
  }
  process.exit(0);
}

const findings = [];
for (const abs of files) {
  let content;
  try {
    content = fs.readFileSync(abs, "utf8");
  } catch {
    continue;
  }
  const hits = findMojibakeLines(content);
  if (hits.length > 0) {
    findings.push({
      file: path.relative(repoRoot, abs),
      hits,
    });
  }
}

if (findings.length === 0) {
  console.log(`OK: sin mojibake en ${files.length} archivo(s) revisados.`);
  process.exit(0);
}

console.error(`ERROR: mojibake detectado en ${findings.length} archivo(s).`);
let printed = 0;
const maxPrinted = 200;
for (const item of findings) {
  for (const hit of item.hits) {
    if (printed >= maxPrinted) {
      console.error("... salida truncada (demasiadas coincidencias).");
      process.exit(1);
    }
    console.error(`${toPosix(item.file)}:${hit.line}: ${hit.text}`);
    printed += 1;
  }
}

process.exit(1);
