import os
import re
from pathlib import Path

def scan_markdown_files(directory):
    pattern = re.compile(r'\{\{f:([\w-]+)\}\}')
    results = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                path = Path(root) / file
                content = path.read_text(encoding='utf-8')
                matches = pattern.findall(content)
                if not matches:
                    continue
                
                counts = {}
                for m in matches:
                    counts[m] = counts.get(m, 0) + 1
                
                # Report if any formula is used many times
                suspicious = {id: count for id, count in counts.items() if count > 3}
                if suspicious:
                    results.append((str(path), suspicious))
    
    return results

if __name__ == "__main__":
    directory = "frontend/src/data_v2_i18n/fisica-clasica/mecanica/rotacion"
    findings = scan_markdown_files(directory)
    for path, suspicious in findings:
        print(f"Path: {path}")
        for id, count in suspicious.items():
            print(f"  ID: {id}, Count: {count}")
