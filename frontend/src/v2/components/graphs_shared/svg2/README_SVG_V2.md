# SVG v2 (contrato basado en config)

## Dónde van los datos
Por leaf/subtema, crea:
`/frontend/src/data_v2/<ruta_relativa>/graphs/svg.config.js`

`ruta_relativa` sale de `meta.yaml`.

Ejemplo:
`/frontend/src/data_v2/fisica-clasica/mecanica/cinematica/caida-libre/graphs/svg.config.js`

## Cómo se usa
```jsx
import { SvgBlock, loadSvgConfigByLeafRelPath } from "@/v2/components/graphs_shared/svg2";

const cfg = await loadSvgConfigByLeafRelPath(meta.ruta_relativa);
return <SvgBlock config={cfg} />;
```

## Qué NO hace esta capa
- No calcula fórmulas (eso es CalculatorV2).
- No define inputs del tema: los declara el schema en el config.
