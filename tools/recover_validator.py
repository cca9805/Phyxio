import os
import json
import re

log_path = r"C:\Users\USER\AppData\Local\Packages\OpenAI.Codex_2p2nqsd0c76g0\LocalCache\Local\Codex\Logs\2026\06\19\codex-desktop-ae51fd4b-f6fb-4e72-99bc-fdda025e761b-284436-t1-i1-000116-0.log"
print(f"Scanning Codex log for recovery: {log_path}")

if not os.path.exists(log_path):
    print("Log file not found!")
    exit(1)

with open(log_path, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Let's search for JSON objects containing write_to_file and _core.py
# Logs might have JSON blocks in different formats. We can find JSON by looking for '{' and matching '}'
matches = []

# Find all JSON-like objects in the text using a simple regex or parser
# Tool calls in Codex are often logged as JSON.
# Let's search for the pattern: "TargetFile" : ".*_core.py"
# and look for the CodeContent field in the surrounding JSON.
pos = 0
while True:
    pos = content.find("_core.py", pos)
    if pos == -1:
        break
    
    # Found "_core.py", let's search backward to find the start of the JSON object '{'
    # and forward to find the end of the JSON object '}'
    start_bracket = -1
    open_brackets = 0
    # Search backward for the start of this JSON block
    # We look for a '{' that begins the tool call args
    for i in range(pos, max(0, pos - 2000), -1):
        if content[i] == '{':
            # check if it starts with "arguments" or "args" or "tool_calls"
            start_bracket = i
            break
            
    if start_bracket != -1:
        # Search forward from start_bracket to parse a valid JSON block
        # We match matching brackets
        open_brackets = 0
        end_bracket = -1
        for j in range(start_bracket, min(len(content), start_bracket + 500000)):
            if content[j] == '{':
                open_brackets += 1
            elif content[j] == '}':
                open_brackets -= 1
                if open_brackets == 0:
                    end_bracket = j
                    break
        
        if end_bracket != -1:
            json_str = content[start_bracket:end_bracket+1]
            try:
                # clean up any formatting prefix/suffix in log if needed
                data = json.loads(json_str)
                # Check if it has CodeContent and targets _core.py
                target = data.get("TargetFile", "")
                code = data.get("CodeContent", "")
                if not target and "args" in data:
                    args = data["args"]
                    if isinstance(args, str):
                        args = json.loads(args)
                    target = args.get("TargetFile", "")
                    code = args.get("CodeContent", "")
                
                if "_core.py" in target and code:
                    lines_count = len(code.splitlines())
                    print(f"Parsed JSON match: {lines_count} lines, {len(code)} bytes")
                    matches.append(code)
            except Exception as e:
                # If json.loads fails, try regex extraction of CodeContent value
                # which is a JSON string literal.
                pass
                
    pos += 8 # Move past "_core.py"

if not matches:
    # Let's try raw regex matching for CodeContent string in the file
    # CodeContent is followed by a string: "CodeContent": "..."
    # Since the string can be huge and contain escaped quotes, we can find it by finding
    # "CodeContent": " and reading until the closing quote (respecting escapes).
    print("Trying raw regex/substring matching for CodeContent...")
    pos = 0
    while True:
        pos = content.find('"CodeContent"', pos)
        if pos == -1:
            pos = content.find("'CodeContent'", pos)
        if pos == -1:
            break
            
        # Find start of string after colon
        start_quote = content.find('"', pos + 13)
        if start_quote != -1 and start_quote - pos < 20:
            # Extract string with escape handling
            escaped = []
            i = start_quote + 1
            while i < len(content):
                c = content[i]
                if c == '\\':
                    if content[i+1] == '"':
                        escaped.append('"')
                        i += 2
                        continue
                    elif content[i+1] == '\\':
                        escaped.append('\\')
                        i += 2
                        continue
                    elif content[i+1] == 'n':
                        escaped.append('\n')
                        i += 2
                        continue
                    elif content[i+1] == 't':
                        escaped.append('\t')
                        i += 2
                        continue
                    else:
                        escaped.append(content[i:i+2])
                        i += 2
                        continue
                elif c == '"':
                    break
                else:
                    escaped.append(c)
                    i += 1
            code = "".join(escaped)
            if "def validate_leaf" in code or "REQUIRED_FILES" in code:
                lines_count = len(code.splitlines())
                print(f"Regex match: {lines_count} lines, {len(code)} bytes")
                matches.append(code)
        pos += 13

if matches:
    # Sort matches by line count descending
    matches_sorted = sorted(matches, key=lambda x: len(x.splitlines()), reverse=True)
    best = matches_sorted[0]
    lines_count = len(best.splitlines())
    print(f"\nBest match: {lines_count} lines, {len(best)} bytes")
    
    # Save to validator_modular/_core.py
    out_path = r"c:\Users\USER\Desktop\Phyxio\tools\validator_modular\_core.py"
    with open(out_path, "w", encoding="utf-8") as out_f:
        out_f.write(best)
    print(f"SUCCESS: Recovered core written to {out_path}")
else:
    print("Could not recover _core.py from Codex logs.")
