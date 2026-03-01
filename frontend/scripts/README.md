# Scripts de Generación

Este directorio contiene los scripts que generan automáticamente archivos de configuración para la aplicación.

## Scripts Principales

### 🔄 Regeneración Automática

Estos scripts se ejecutan **automáticamente** cuando inicias el servidor de desarrollo o haces build:

- **`npm run dev`** → Ejecuta `generate:topics` y `generate:sidebar` automáticamente
- **`npm run build`** → Ejecuta `validate:hierarchy`, `generate:topics` y `generate:sidebar` automáticamente

### 📝 Scripts Disponibles

#### `npm run generate:topics`
Genera `src/data/topics.generated.js` desde:
- `src/data/hierarchy-config.js` (estructura de navegación)
- `scripts/generateTopicsV3.js` (lógica de generación con títulos y rutas)

**Características:**
- ✅ Títulos con tildes correctas (mapeo en `titleMapping`)
- ✅ Rutas jerárquicas completas (ej: `/clasica/termodinamica/02_magnitudes_termicas/temperatura`)
- ✅ Descripciones e iconos para cada tema

#### `npm run generate:sidebar`
Genera `src/data/sidebarItems.generated.js` desde:
- `src/data/termodinamica/hierarchicalStructure.js` (estructura de termodinámica)
- `src/data/hierarchy-config.js` (otras secciones)
- `scripts/generateSidebarFromHierarchy.js` (lógica de generación)

**Características:**
- ✅ Títulos con tildes correctas (mapeo en `TITLE_MAP`)
- ✅ Estructura jerárquica completa para el sidebar
- ✅ Iconos de Bootstrap para cada sección

#### `npm run generate:all`
Ejecuta ambos scripts de generación en secuencia:
1. `generate:topics`
2. `generate:sidebar`

Útil cuando haces cambios en la estructura y quieres regenerar todo manualmente.

## Archivos Generados

### ⚠️ NO EDITAR MANUALMENTE

Estos archivos se regeneran automáticamente:

- `src/data/topics.generated.js` - Datos de temas y navegación
- `src/data/sidebarItems.generated.js` - Estructura del sidebar

**Si necesitas hacer cambios, edita los archivos fuente:**

### 📄 Archivos Fuente (Editar aquí)

#### Para agregar/modificar títulos con tildes:
- `scripts/generateTopicsV3.js` → Objeto `titleMapping` (línea ~360)
- `scripts/generateSidebarFromHierarchy.js` → Objeto `TITLE_MAP` (línea ~35)

#### Para agregar/modificar la estructura de navegación:
- `src/data/hierarchy-config.js` → Estructura general
- `src/data/termodinamica/hierarchicalStructure.js` → Estructura detallada de termodinámica

#### Para agregar/modificar rutas:
- `scripts/generateTopicsV3.js` → Función `generateLinkForSection` (línea ~676)

## Flujo de Trabajo

### Agregar un nuevo tema

1. **Agregar a la estructura:**
   ```javascript
   // En src/data/hierarchy-config.js
   termodinamica: [
     "01_conceptos_fundamentales",
     "02_magnitudes_termicas",
     "14_nuevo_tema" // ← Agregar aquí
   ]
   ```

2. **Agregar título con tildes:**
   ```javascript
   // En scripts/generateTopicsV3.js (titleMapping)
   '14_nuevo_tema': 'Nuevo Tema con Tildes',
   
   // En scripts/generateSidebarFromHierarchy.js (TITLE_MAP)
   '14_nuevo_tema': 'Nuevo Tema con Tildes',
   ```

3. **Regenerar archivos:**
   ```bash
   npm run generate:all
   ```

4. **Verificar:**
   - Los archivos `.generated.js` se actualizarán automáticamente
   - Las rutas se generarán correctamente
   - Las tildes se mostrarán correctamente

## Solución de Problemas

### Las tildes no se muestran correctamente
- ✅ Verifica que los archivos `.generated.js` tengan encoding UTF-8
- ✅ Limpia la caché del navegador (Ctrl+Shift+Delete)
- ✅ Haz hard refresh (Ctrl+F5)

### Las rutas están incorrectas
- ✅ Verifica que el tema esté en la lista correcta en `generateLinkForSection`
- ✅ Regenera con `npm run generate:all`
- ✅ Reinicia el servidor de desarrollo

### El sidebar no se actualiza
- ✅ Ejecuta manualmente `npm run generate:sidebar`
- ✅ Verifica que el script esté en `predev` del package.json
- ✅ Reinicia el servidor de desarrollo

## Mantenimiento

### ✅ Los cambios se mantienen porque:
1. Las correcciones están en los **scripts de generación**, no en los archivos generados
2. Los scripts se ejecutan automáticamente en cada `npm run dev`
3. Los archivos fuente (`hierarchicalStructure.js`, `hierarchy-config.js`) no se regeneran

### ⚠️ Nunca edites directamente:
- `src/data/topics.generated.js`
- `src/data/sidebarItems.generated.js`

Estos archivos se sobrescriben en cada regeneración.
