import os
path = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica\dinamica-traslacional\sistemas-con-rozamiento\analisis-completo\teoria.md"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()
# Line 27 is index 26
lines[26] = lines[26].replace("representan", "representan (como [[m]] o [[g]])")
with open(path, "w", encoding="utf-8") as f:
    f.writelines(lines)
print("Updated line 27")
