with open('frontend/src/v2/components/graphs/dinamica/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's count open/close braces
open_braces = []
for idx, char in enumerate(content):
    if char == '{':
        open_braces.append(idx)
    elif char == '}':
        if open_braces:
            open_braces.pop()
        else:
            print(f"Extra closing brace at index {idx} near: {content[max(0, idx-50):idx+50]}")

if open_braces:
    print(f"Unmatched opening braces: {len(open_braces)}")
    for ob in open_braces[-5:]:
        print(f"Opening brace at index {ob} near: {content[ob:ob+100]}")
else:
    print("Braces are balanced!")
