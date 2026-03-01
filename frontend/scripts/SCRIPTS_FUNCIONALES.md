# 📋 Scripts Funcionales vs Obsoletos - Diciembre 2025

## ✅ SCRIPTS FUNCIONALES (Mantener)

### Generación Principal (Usados en package.json)
- **generateTopicsV3.js** ⭐ - Genera topics.generated.js (CRÍTICO - usado en predev/prebuild)
- **generateSidebarFromHierarchy.js** ⭐ - Genera sidebarItems.generated.js (CRÍTICO - usado en predev/prebuild)
- **validate-hierarchy.js** - Valida estructura de jerarquía (usado en prebuild)

### Verificación y Validación (Útiles para desarrollo)
- **check-icons.js** - Verifica iconos en el sistema
- **verify-sidebar-icons.js** - Verifica iconos del sidebar
- **test-metadata-map.js** - Prueba mapeo de metadatos

### Utilidades de Corrección (Mantener por si se necesitan)
- **fixThermodynamicsImportPaths.js** - Corrige imports de termodinámica

### Archivos de Datos
- **education-hierarchy.json** - Datos de jerarquía educativa
- **education-levels-report.json** - Reporte de niveles educativos
- **hierarchy-verification-report.json** - Reporte de verificación

### Documentación
- **README.md** - Documentación de scripts
- **ANALISIS_SCRIPTS.md** - Análisis anterior de scripts
- **SCRIPTS_FUNCIONALES.md** - Este archivo

---

## 🔴 SCRIPTS OBSOLETOS (Mover a backup)

### Scripts de Corrección (Ya aplicados)
- fix-double-commas.cjs
- fix-duplicate-icons.js
- fix-duplicate-imports.cjs
- fix-import-order.cjs
- fix-metadata-syntax.cjs
- fix-theoryv2-imports.cjs
- fixAcusticaFormulas.js
- fixCalorTemperaturaRoutes.cjs
- fixElectricidadRoutes.cjs
- fixMagnetismoRoutes.cjs
- fixMecanicaFluidosRoutes.js
- fixOndasMecanicasRoutes.js
- fixOpticaRoutes.js

### Scripts de Generación de Contenido (Ya completado)
- add-education-levels-smart.cjs
- add-education-levels.cjs
- add-levels-from-educationlevel.cjs
- build-education-hierarchy.cjs
- generate-education-levels-with-icons.cjs
- generate-education-themes-from-topics.cjs
- generate-education-themes.cjs
- generate-hierarchical-levels.cjs
- generateTopicMetadata.cjs
- education-hierarchy-from-metadata.js
- education-themes-generated.js

### Scripts de Limpieza (Ya aplicados)
- clean-education-view.cjs
- clean-hardcoded-array.cjs
- extract-all-icons.js
- extract-emojis.cjs
- find-duplicate-icons.js
- find-missing-theme.cjs
- find-missing-themes.cjs

### Scripts de Conversión (Ya aplicados)
- convert-all-icons-to-emoji.cjs
- convert-icons-expanded.cjs
- convert-icons-final.cjs
- replace-repeated-emojis.cjs

### Scripts de Verificación (Ya completados)
- check-missing-emojis.cjs
- verify-all-themes-in-hierarchy.cjs
- verify-education-levels.cjs
- verify-levels.cjs
- verify-themes-count.cjs
- verify-theoryv2-imports.cjs
- scan-education-levels-hierarchical.cjs
- scan-education-levels.cjs

### Scripts de Parches (Ya aplicados)
- patch-ensure-theoryv2-esos.cjs
- patch-ensure-theoryv2-esos.js
- redistribute-levels-lomloe.cjs
- report-eso-theoryv2.cjs

### Scripts de Sincronización (Ya aplicados)
- sync-sidebar-icons.js
- generateSidebarFromEducationHierarchy.js
- generateSidebarFromHierarchy.js (duplicado de funcionalidad en V3)

### Scripts de Prueba
- test.js

---

## 📊 Resumen

**Total inicial:** ~80 archivos (scripts + JSON)
**Movidos a backup:** 76 archivos obsoletos
**Funcionales actuales:** 13 archivos (7 scripts + 3 JSON + 3 MD)
**Reducción:** ~84%

### Desglose Final
- ✅ **3 scripts críticos** (usados en build)
- ✅ **4 scripts de verificación** (útiles para desarrollo)
- ✅ **3 archivos JSON** (datos necesarios)
- ✅ **3 archivos MD** (documentación)

---

## ✅ Acción Completada

- ✅ Movidos 76 scripts obsoletos a `backup-scripts-enero-2025/`
- ✅ Mantenidos solo 7 scripts funcionales
- ✅ Actualizado `package.json` para usar solo scripts existentes
- ✅ Estructura limpia y mantenible

## 🔧 Scripts en package.json

```json
"predev": "npm run generate:topics && npm run generate:sidebar",
"prebuild": "npm run validate:hierarchy && npm run generate:topics && npm run generate:sidebar",
"generate:topics": "node scripts/generateTopicsV3.js",
"generate:sidebar": "node scripts/generateSidebarFromHierarchy.js",
"validate:hierarchy": "node scripts/validate-hierarchy.js"
```

Todos los scripts referenciados existen y son funcionales.
