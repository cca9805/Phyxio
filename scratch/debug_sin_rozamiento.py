with open('frontend/src/v2/components/graphs/dinamica/index.js', 'r', encoding='utf-8') as f:
    content = f.read()

pos = content.find('"sin-rozamiento":')
if pos != -1:
    print(content[pos:pos+2000])
else:
    print("Not found!")
