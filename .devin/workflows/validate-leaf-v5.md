---
description: phyxio_leaf_validator_v2
---
# Validar leaf v5

Objetivo: ejecutar validación real y producir una lista accionable de reparaciones.

## Procedimiento

1. Localizar ruta del leaf.
2. Ejecutar validador completo si existe:

```powershell
python tools\phyxio_leaf_validator_v2_v2.py all <leaf_path>
```

3. Si falla el comando, probar variantes usadas por el repo:

```powershell
python tools\phyxio_leaf_validator_v2_v2.py <leaf_path>
py tools\phyxio_leaf_validator_v2_v2.py all <leaf_path>
```

4. Si existe validador por etapas, usarlo para aislar el problema:

```powershell
python tools\phyxio_validate_stage.py yaml <leaf_path>
python tools\phyxio_validate_stage.py markdown-es <leaf_path>
python tools\phyxio_validate_stage.py markdown-en <leaf_path>
python tools\phyxio_validate_stage.py semantic <leaf_path>
python tools\phyxio_validate_stage.py graphs <leaf_path>
```

5. Agrupar fails por causa raíz:

- estructura
- render matemático
- meta/mapa
- magnitudes/fórmulas
- interpretación
- cobertura
- didáctica/carga cognitiva
- gráficos

## Salida

Entregar:

```text
VALIDATION_REPORT
leaf: <ruta>
overall_score: <si aparece>
status: PASS/FAIL
fails_by_root_cause:
- ...
next_repairs:
1. ...
2. ...
```

No declarar PASS si no se ejecutó el validador.
