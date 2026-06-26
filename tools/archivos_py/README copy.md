# Scripts para elevar Phyxio hacia Nivel 4

Estos scripts no convierten por arte de magia un leaf flojo en una joya de Halliday con una sola tecla. Sí hacen gran parte del trabajo repetitivo y dejan un informe claro de lo que todavía requiere edición humana.

## Qué resuelven

1. **Auditoría estructural Nivel 4**
   - archivos obligatorios
   - secciones obligatorias de `teoria.md`
   - presencia de LaTeX en bloque
   - detección de fórmulas en texto plano
   - detección de mojibake
   - patrones de inglés literal o débil
   - chequeo básico entre `formulas.yaml` y `magnitudes.yaml`

2. **Elevación automática del inglés técnico**
   - reemplazos seguros de glosario
   - pulido de frases inglesas demasiado literales
   - normalización de títulos visibles en YAML
   - backups `.bak` automáticos

3. **Lint rápido matemático y estructural**
   - localiza texto con fórmulas mal renderizadas o sospechosas

## Qué NO resuelven solos

- redacción profunda de teoría de nivel 4 en sentido editorial
- creación real de dominio de validez si no existe
- mejora de ejemplos si faltan interpretaciones físicas
- reescritura pedagógica avanzada en todos los tabs

## Recomendación de uso

### 1. Auditar

```bash
python3 audit_level4.py /ruta/a/frontend/src/data_v2/fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-simples
```

Genera:
- `level4_audit_report.json`
- `level4_audit_report.md`

### 2. Probar mejoras de inglés en seco

```bash
python3 upgrade_english_level4.py /ruta/al/nodo
```

### 3. Escribir cambios y crear backup

```bash
python3 upgrade_english_level4.py /ruta/al/nodo --write
```

### 4. Lint matemático rápido

```bash
python3 check_math_and_structure.py /ruta/al/nodo
```

## Flujo recomendado para todo Phyxio

```bash
python3 audit_level4.py frontend/src/data_v2
python3 upgrade_english_level4.py frontend/src/data_v2 --write
python3 check_math_and_structure.py frontend/src/data_v2
```

## Siguiente paso ideal

Usar el informe del `audit_level4.py` para atacar solo los leaves con puntuación menor de **3.7 / 4.0**, que suelen ser los que todavía huelen a traducción literal o a teoría con costuras visibles.
