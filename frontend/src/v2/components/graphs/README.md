# Graphs V2

## Norma global

Todo grafico de leaf debe pasar por una fabrica comun. No se deben renderizar
directamente `CoordGraphRenderer`, `DclRenderer`, `SvgProfileRenderer` ni
`SvgFrame` desde el export final del archivo de grafico.

- `Coord`: usar `createCoordGraph(...)` o `createCoordGraphPage(...)`.
- `Dcl`: usar `createDclGraph(...)`.
- `Svg`: usar `createSvgGraph(...)`.

La fabrica vive en:

```txt
frontend/src/v2/components/graphs/graphFactories.jsx
```

Esto centraliza:

- normalizacion de props (`params`, `sharedParams`, `paramsIn`, `lang`);
- boundary de errores por tipo de grafico;
- conexion con los renderers comunes;
- paso de callbacks de interpretacion y estado hacia Phyxi IA.

## Estructura de carpetas

Cada area debe tener solo:

```txt
area/
  Coord/
  Dcl/
  Svg/
  index.js
```

Los archivos auxiliares que pertenezcan a un tipo deben vivir dentro de esa
carpeta de tipo. No se deben dejar helpers activos junto al `index.js`.

## Plantillas

Usar las plantillas de `_templates/` como punto de partida:

- `GraphsCoord.template.jsx`
- `GraphsDcl.template.jsx`
- `GraphsSvg.template.jsx`

## Patron Coord

Preferido para graficas parametrizadas:

```jsx
import { createCoordGraphPage } from "../graphFactories.jsx";

export default createCoordGraphPage({
  displayName: "LeafGraphsCoord",
  title: { es: "Titulo", en: "Title" },
  defaultParams: {},
  controls: [],
  compute: (pNum) => ({ data: [], extra: {} }),
  render: ({ data }) => null,
});
```

Si ya existe un componente especializado, debe envolverse:

```jsx
import { createCoordGraph } from "../../graphFactories.jsx";

function LeafGraphsCoordView(props) {
  return null;
}

export default createCoordGraph({
  Component: LeafGraphsCoordView,
  displayName: "LeafGraphsCoord",
});
```

## Patron Dcl

```jsx
import { createDclGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/example.profile";

export default createDclGraph({
  displayName: "LeafGraphsDcl",
  profile,
});
```

Si hay ajustes del profile, usar `mapProfile`; no renderizar `DclRenderer`
directamente en el archivo del leaf.

## Patron Svg

Preferido con profile:

```jsx
import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/example.svg.profile.jsx";

export default createSvgGraph({
  displayName: "LeafGraphsSvg",
  profile,
});
```

Si el SVG es personalizado, envolver el componente:

```jsx
import { createSvgGraph } from "../../graphFactories.jsx";

function LeafGraphsSvgView(props) {
  return null;
}

export default createSvgGraph({
  Component: LeafGraphsSvgView,
  displayName: "LeafGraphsSvg",
});
```

No crear nuevos archivos de grafico que exporten directamente un renderer.
