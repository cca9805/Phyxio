# Estructura de Gráficos V2

## 📁 Organización de Carpetas

```
frontend/src/v2/components/graphs/
├── GraphPageV2.jsx          # Componente base para todos los gráficos
├── shared/                  # Componentes compartidos reutilizables
│   ├── index.js            # Barrel export
│   ├── GraphCard.jsx       # Tarjeta para envolver gráficos
│   ├── InfoCard.jsx        # Tarjeta para información calculada
│   └── PresetSelector.jsx  # Selector de presets (ej: gravedad)
├── cinematica/             # Gráficos de cinemática
│   ├── index.js           # Barrel export
│   ├── MRUGraphs.jsx
│   ├── MRUAGraphs.jsx
│   └── ...
└── dinamica/              # Gráficos de dinámica
    ├── index.js          # Barrel export
    ├── PesoGraphs.jsx
    └── ...
```

---

## 🎯 Principios de Organización

### 1. Separación de Responsabilidades
- **`data_v2/`**: Contenido estático (markdown, YAML, configuración)
- **`v2/components/graphs/`**: Componentes React (código ejecutable)

### 2. Barrel Exports
Cada carpeta de tema tiene un `index.js` que exporta todos sus componentes:

```javascript
// cinematica/index.js
export { default as MRUGraphs } from "./MRUGraphs";
export { default as MRUAGraphs } from "./MRUAGraphs";
// ...
```

**Ventajas:**
- Imports más limpios en V2LeafTabs
- Fácil ver qué componentes existen
- Mejor para tree-shaking

### 3. Componentes Compartidos
La carpeta `shared/` contiene componentes reutilizables:
- `GraphCard`: Envoltorio consistente para gráficos
- `InfoCard`: Tarjetas de información
- `PresetSelector`: Selectores de valores predefinidos

---

## 📝 Cómo Usar

### Importar en V2LeafTabs

**❌ Antes (imports individuales):**
```javascript
import MRUGraphs from "../components/graphs/cinematica/MRUGraphs";
import MRUAGraphs from "../components/graphs/cinematica/MRUAGraphs";
import CaidaLibreGraphs from "../components/graphs/cinematica/CaidaLibreGraphs";
// ... 49 líneas más
```

**✅ Ahora (barrel exports):**
```javascript
import {
  MRUGraphs,
  MRUAGraphs,
  CaidaLibreGraphs,
  // ...
} from "../components/graphs/cinematica";

import {
  PesoGraphs,
  NormalGraphs,
  // ...
} from "../components/graphs/dinamica";
```

### Usar Componentes Compartidos

```javascript
import { GraphCard, InfoCard, PresetSelector } from "../shared";

// En tu componente de gráfico
<GraphCard title="x(t) — posición">
  <ResponsiveContainer>
    <LineChart data={data}>
      {/* ... */}
    </LineChart>
  </ResponsiveContainer>
</GraphCard>

<InfoCard title="Resultados">
  <div>x = {x.toFixed(2)} m</div>
  <div>v = {v.toFixed(2)} m/s</div>
</InfoCard>

<PresetSelector
  label="Gravedad"
  presets={[
    { id: "tierra", name: "Tierra", value: "9.81 m/s²" },
    { id: "luna", name: "Luna", value: "1.62 m/s²" },
  ]}
  value={preset}
  onChange={setPreset}
/>
```

---

## 🔧 Crear un Nuevo Gráfico

### 1. Crear el archivo en la carpeta correspondiente

```bash
# Para cinemática
frontend/src/v2/components/graphs/cinematica/NuevoTemaGraphs.jsx

# Para dinámica
frontend/src/v2/components/graphs/dinamica/NuevoTemaGraphs.jsx
```

### 2. Usar GraphPageV2 como base

```javascript
import GraphPageV2 from "../GraphPageV2";
import { GraphCard, InfoCard } from "../shared";

export default function NuevoTemaGraphs({ params }) {
  return (
    <GraphPageV2
      title="Nuevo Tema"
      params={params}
      defaultParams={{ param1: 10, param2: 5 }}
      controls={[
        { id: "param1", label: "Parámetro 1 (unidad)" },
        { id: "param2", label: "Parámetro 2 (unidad)" },
      ]}
      compute={(pNum) => {
        const data = calcularDatos(pNum);
        return { data };
      }}
    >
      {({ pNum, data }) => (
        <>
          <InfoCard title="Resultados">
            <div>Valor: {pNum.param1 * pNum.param2}</div>
          </InfoCard>

          <GraphCard title="Gráfico">
            {/* Tu gráfico aquí */}
          </GraphCard>
        </>
      )}
    </GraphPageV2>
  );
}
```

### 3. Añadir al barrel export

```javascript
// cinematica/index.js o dinamica/index.js
export { default as NuevoTemaGraphs } from "./NuevoTemaGraphs";
```

### 4. Importar en V2LeafTabs

```javascript
import {
  // ... otros imports
  NuevoTemaGraphs,
} from "../components/graphs/cinematica";
```

### 5. Añadir al objeto GRAPH_IDS

```javascript
const GRAPH_IDS = {
  // ...
  "nuevo-tema": NuevoTemaGraphs,
};
```

---

## 📊 Estructura por Tema

### Cinemática (18 componentes)

**Movimiento Rectilíneo:**
- MRUGraphs
- MRUAGraphs
- CaidaLibreGraphs

**Movimiento en 2D:**
- TiroHorizontalGraphs
- TiroVerticalGraphs
- TiroParabolicoGraphs
- Movimiento2DGraphs

**Movimiento Circular:**
- MCUGraphs
- MCUAGraphs

**Rotación:**
- MagnitudesAngularesGraphs
- CinematicaRotacionalGraphs
- RelacionLinealAngularGraphs
- RodaduraGraphs

**Movimiento Relativo:**
- SistemasReferenciaGraphs
- VelocidadRelativaGraphs
- EncuentrosGraphs
- RelativeMotionGraphs

### Dinámica (31 componentes)

**Leyes de Newton:**
- PrimeraLeyInerciaGraphs
- SegundaLeyFuerzaMasaGraphs
- TerceraLeyAccionReaccionGraphs

**Sistemas de Referencia:**
- SistemasInercialesGraphs
- SistemasNoInercialesGraphs

**Diagramas de Fuerzas:**
- IdentificacionDeFuerzasGraphs
- DiagramasCuerpoLibreGraphs
- DescomposicionVectorialGraphs

**Fuerzas - Peso:**
- PesoGraphs
- PesoDefinicionGraphs
- PesoContextosGraphs

**Fuerzas - Normal:**
- NormalGraphs
- NormalEnPlanosGraphs

**Fuerzas - Rozamiento:**
- RozamientoGraphs
- RozamientoEstaticoGraphs
- RozamientoDinamicoGraphs
- CoeficienteRozamientoGraphs

**Fuerzas - Tensión:**
- TensionGraphs

**Fuerzas - Elástica:**
- FuerzaElasticaGraphs
- LeyDeHookeGraphs
- SistemasConMuellesGraphs

**Fuerzas - Centrípeta/Centrífuga:**
- FuerzaCentrifugaGraphs

**Estática - Centro de Masas:**
- CentroMasasCuerposExtendidosGraphs
- CentroMasasDiscretosGraphs

**Estática - Equilibrio:**
- CondicionSumatoriaFuerzasGraphs
- CondicionSumatoriaMomentosGraphs
- MomentoFuerzaGraphs

**Estática - Palancas:**
- VentajaMecanicaGraphs
- TiposDePalancasGraphs

**Aplicaciones:**
- DinamicaAplicacionesGraphs

---

## 🚀 Próximos Pasos

### Temas Futuros a Añadir

Cuando se implementen gráficos para otros temas, crear carpetas:

```
graphs/
├── trabajo-energia/
│   └── index.js
├── cantidad-movimiento/
│   └── index.js
├── gravitacion/
│   └── index.js
├── oscilaciones/
│   └── index.js
├── fluidos/
│   └── index.js
└── termodinamica/
    └── index.js
```

Cada una con su barrel export siguiendo el mismo patrón.

---

## 📚 Referencias

- **GraphPageV2**: Ver `GraphPageV2.jsx` para documentación completa
- **Guía de Migración**: Ver `GUIA_MIGRACION_GRAPHPAGEV2.md` en la raíz
- **Ejemplo Completo**: Ver `EJEMPLO_MIGRACION_MRU.jsx` en la raíz

---

## ✅ Beneficios de esta Estructura

1. **Imports más limpios**: Menos líneas en V2LeafTabs
2. **Mejor organización**: Fácil encontrar componentes por tema
3. **Reutilización**: Componentes compartidos en `shared/`
4. **Escalabilidad**: Fácil añadir nuevos temas
5. **Mantenibilidad**: Cambios centralizados en GraphPageV2
6. **Tree-shaking**: Mejor optimización del bundle
7. **Documentación**: Estructura autodocumentada

---

**Última actualización**: 22 de enero de 2026
