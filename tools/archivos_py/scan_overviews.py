import os, re, sys

root = 'frontend/src/data_v2_i18n'
results = []

for dirpath, dirs, files in os.walk(root):
    for fname in ['overview.md', 'overview.en.md']:
        if fname not in files:
            continue
        path = os.path.join(dirpath, fname)
        text = open(path, encoding='utf-8', errors='replace').read()
        lines = text.splitlines()

        issues = []
        for i, line in enumerate(lines, 1):
            stripped = line.strip()
            if 'village.' in stripped:
                issues.append(('GARBAGE', i, stripped[:120]))
            if re.search(r'\\\([^)]*\\\)', line):
                issues.append(('LATEX_INLINE', i, stripped[:120]))
            if '\ufffd' in line:
                issues.append(('ENCODING', i, stripped[:120]))

        if issues:
            rel = os.path.relpath(path, root)
            results.append((rel, issues))

print('Total files with issues: %d' % len(results))
for rel, iss in sorted(results):
    types = sorted(set(t for t, _, _ in iss))
    print('  [%s] %s' % ('|'.join(types), rel))
    for t, lineno, snippet in iss[:4]:
        print('    L%d (%s): %s' % (lineno, t, snippet))
