import os, re

files = [
    'frontend/src/v2/components/graphs/dinamica/Svg/PalancaGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/PlanoInclinadoGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/PoleaGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/PoleasCompuestasGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/PoleasSimplesGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/RuedaYEjeGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/TiposDePalancasGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Svg/TornilloGraphsSvg.jsx',
    'frontend/src/v2/components/graphs/dinamica/Coord/PoleasCompuestasGraphsCoord.jsx',
    'frontend/src/v2/components/graphs/dinamica/Coord/PoleasSimplesGraphsCoord.jsx',
    'frontend/src/v2/components/graphs/dinamica/Coord/TornilloGraphsCoord.jsx',
    'frontend/src/v2/components/graphs/dinamica/Coord/VentajaMecanicaGraphsCoord.jsx',
    'frontend/src/v2/components/graphs/dinamica/Dcl/PlanoInclinadoGraphsDcl.jsx'
]

for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        rel_imports = re.findall(r'from\s+[\'\"](\.\.[^\'\"]+)[\'\"]', content)
        if rel_imports:
            print(f'{fpath}: {rel_imports}')
    else:
        print(f'{fpath} does not exist!')
