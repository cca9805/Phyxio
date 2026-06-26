# Pack Phyxio: Protocolo + Leaf Validator

Contenido:


- `protocolo_v5.md`
- `phyxio_leaf_validator.py`
- `plantilla_v5.md`
- `plantilla_graficos_v5.md`
- `plantilla_graph_svg_v1.md`
- `plantilla_graph_coord_v1.md`
- `plantilla_graph_dcl_v1.md`

## Graficos v1

Los documentos `plantilla_graph_svg_v1.md`, `plantilla_graph_coord_v1.md` y
`plantilla_graph_dcl_v1.md` son la capa operativa por tipo de grafico.

El documento `plantilla_graficos_v5.md` es la
aduana del sistema: se usa para revisar si el grafico representa el leaf real,
si conversa con `__calc`, si emite contexto interpretable y si funciona en modo
calculadora y experimento.

Complemento en frontend:

- `frontend/src/v2/components/graphs/_templates/graphContractTemplates.js`

Ese modulo deja esqueletos reutilizables para que cada wrapper nuevo nazca con
su ficha estandar y no se limite a un JSX aislado.

## Uso del validador

### Validar un ZIP
```bash
python phyxio_leaf_validator.py /ruta/al/leaf.zip
```

### Validar una carpeta
```bash
python phyxio_leaf_validator.py /ruta/al/leaf/
```

### Salida JSON
```bash
python phyxio_leaf_validator.py /ruta/al/leaf.zip --json
```

## Qué revisa

- 15 archivos exactos
- campos obligatorios de `meta.yaml`
- estructura de `magnitudes.yaml`
- estructura de `formulas.yaml`
- secciones obligatorias de teoría, modelos, errores, ejemplos e historia
- mínimos de palabras
- mínimo de aplicaciones
- presencia de “Variable dominante:”
- comprobación aproximada de inglés en archivos `.en.md`
- coherencia simbólica básica

## Alcance

Es un validador automático de primera línea. Detecta la mayoría de fallos estructurales que impiden llegar a nivel 5, pero no sustituye una revisión editorial humana fina.