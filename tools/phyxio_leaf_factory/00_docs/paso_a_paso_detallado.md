# Crear Leaf - Guía Paso a Paso Detallada

> **Nota:** Este documento contiene TODOS los pasos individuales explicados en detalle.
> 
> Para la versión automatizada con pipelines, ver: `comandos_create_leaf.md`
>
> **Nuevo:** Configura el leaf activo una sola vez con `ruta_leaf.py` y olvídate de escribir `--leaf-id` repetidamente.

---

## Flujo de Trabajo

```
[Pipelines] → [Intervención Humana] → [Pipelines] → [Intervención Humana] ...
```

| Fase | Pipeline | Intervención Humana |
|------|----------|---------------------|
| 1 | Crear estructura + Prompts YAML | Enviar prompts 01-04 a IA, pegar respuestas |
| 2 | Procesar YAML + Prompt interpretación | Enviar prompt 05 a IA, pegar respuesta |
| 3 | Procesar interpretación + Prompts .md | Enviar prompts .md a IA, descargar ZIP |
| 4 | Procesar ZIP → Final | Ninguna (totalmente automático) |

---

# FASE 1: Estructura y Prompts YAML

## Paso 00: Configurar leaf activo (NUEVO - Recomendado)

Configura el leaf una sola vez al inicio de la sesión:

```powershell
# Establecer leaf activo
python tools/phyxio_leaf_factory/ruta_leaf.py --set conduccion --name "Conducción"

# Verificar que está configurado
python tools/phyxio_leaf_factory/ruta_leaf.py --show
```

## Paso 00b: Crear estructura del leaf

```powershell
# Con leaf activo configurado:
python tools/phyxio_leaf_factory/create_leaf.py --force

# O especificando manualmente:
python tools/phyxio_leaf_factory/create_leaf.py --leaf-id conduccion --name "Conducción" --force --set-active
```

**Qué hace:** Crea el directorio del leaf con la estructura base de archivos YAML y meta.

## Paso 01: Validar estructura

```powershell
# Con leaf activo:
python tools/phyxio_leaf_factory/07_checks/check_leaf_structure.py

# O manualmente:
python tools/phyxio_leaf_factory/07_checks/check_leaf_structure.py --leaf-id conduccion
```

## Paso 02: Extraer campos de plantilla

```bash
python tools/phyxio_leaf_factory/03_extractors/extract_template_contract.py
```

## Paso 03: Insertar campos extraídos

```powershell
# Con leaf activo:
python tools/phyxio_leaf_factory/generate_leaf_skeleton.py --force

# O manualmente:
python tools/phyxio_leaf_factory/generate_leaf_skeleton.py --leaf-id conduccion --name "Conducción" --force
```

## Paso 04: Validar estructura nuevamente

```powershell
python tools/phyxio_leaf_factory/07_checks/check_leaf_structure.py
```

## Paso 05: Validar contrato JSON

```powershell
python tools/phyxio_leaf_factory/07_checks/check_contract_skeleton.py
```

## Paso 06: Actualizar meta con datos del mapa

```powershell
python tools/phyxio_leaf_factory/06_writers/sync_meta_from_map.py \
  --map "./frontend/src/v2/map/phyxio-map.yaml" \
  --leaf-id conduccion
```

## Paso 07: Generar prompts YAML (Fase 1)

```powershell
python tools/phyxio_leaf_factory/04_prompts/generate_yaml_prompts.py
```

**Genera:** prompts 01-04 para meta, magnitudes, formulas, graficos.

## Paso 08: Chequear prompts

```powershell
python tools/phyxio_leaf_factory/07_checks/check_yaml_prompts.py
```

## Paso 09: Preparar archivos de respuesta

```powershell
python tools/phyxio_leaf_factory/05_ai_responses/prepare_yaml_response_files.py
```

---

# 🔴 INTERVENCIÓN HUMANA 1

## Paso 10: Enviar prompts a IA y recibir respuestas

## Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Si no se cumple el checklist no empaquetes nada

**Acciones manuales:**

1. Abrir `01_meta.prompt.md` → Copiar en IA → Pegar respuesta en `01_meta.response.yaml`
2. Abrir `02_magnitudes.prompt.md` → Copiar en IA → Pegar respuesta en `02_magnitudes.response.yaml`
3. Abrir `03_formulas.prompt.md` → Copiar en IA → Pegar respuesta en `03_formulas.response.yaml`
4. Abrir `04_graficos.prompt.md` → Copiar en IA → Pegar respuesta en `04_graficos.response.yaml`

---

# FASE 2: Respuestas YAML y Prompt Interpretación

## Paso 11: Validar respuestas de IA

```powershell
python tools/phyxio_leaf_factory/07_checks/check_yaml_ai_responses.py
```

## Paso 12: Escribir respuestas a YAML del leaf

```powershell
python tools/phyxio_leaf_factory/06_writers/write_yaml_ai_responses.py
```

## Paso 13: Sincronizar interpretacion.yaml

**Requisito:** magnitudes.yaml y formulas.yaml deben tener datos.

```powershell
python tools/phyxio_leaf_factory/06_writers/sync_interpretacion_from_meta.py
```

## Paso 14: Regenerar prompts (Fase 2)

```powershell
python tools/phyxio_leaf_factory/04_prompts/generate_yaml_prompts.py
```

**Genera:** prompt 05_interpretacion.prompt.md

---

# 🔴 INTERVENCIÓN HUMANA 2

## Paso 15: Enviar prompt interpretación y escribir

## Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Si no se cumple el checklist no empaquetes nada

**Acciones manuales:**

1. Abrir `05_interpretacion.prompt.md` → Copiar en IA → Pegar respuesta en `05_interpretacion.response.yaml`
2. Ejecutar escritura:

```powershell
python tools/phyxio_leaf_factory/06_writers/write_yaml_ai_responses.py
```

---

# FASE 3: Prompts Markdown

## Paso 16: Generar prompts .md (Fase 3)

```powershell
python tools/phyxio_leaf_factory/04_prompts/generate_batch_md_prompt.py
```

**Genera:** 5 prompts para historia.md, aplicaciones.md, modelos.md, ejemplos.md, errores.md

## Paso 17: Chequear prompts .md

```powershell
python tools/phyxio_leaf_factory/07_checks/check_md_prompts.py
```

## Paso 18: Preparar archivos de respuesta .md

```powershell
python tools/phyxio_leaf_factory/05_ai_responses/prepare_md_response_files.py
```

---

# 🔴 INTERVENCIÓN HUMANA 3

## Paso 19: Enviar prompts .md a IA y recibir ZIP

## Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Si no se cumple el checklist no empaquetes nada

**Acciones manuales:**

1. **Enviar todos los prompts a la IA** (puedes enviarlos en un solo mensaje combinado):
   - `historia.prompt.md`
   - `aplicaciones.prompt.md`
   - `modelos.prompt.md`
   - `ejemplos.prompt.md`
   - `errores.prompt.md`

2. **Recibir ZIP:** La IA generará un ZIP con 12 archivos .md (es + en)

3. **Descargar ZIP** a `C:\Users\USER\Downloads\descargas_phyxio\<leaf-id>.zip` (el nombre debe coincidir con el leaf activo)

---

# FASE 4: Procesar ZIP (Automático)

## Paso 20: Desempaquetar ZIP

```powershell
mkdir temp_zip_extract
Expand-Archive -Path "C:\Users\USER\Downloads\descargas_phyxio\conduccion.zip" -DestinationPath "temp_zip_extract"
```

## Paso 21: Copiar archivos .md al leaf

```powershell
copy "temp_zip_extract\*.md" "frontend\src\data_v2_i18n\fisica-clasica\termodinamica\transferencia-de-calor\conduccion\"
```

## Paso 22: Ejecutar reparador (nuevo sistema)

```powershell
python tools/phyxio_leaf_factory/06_writers/reparador_leafs.py --path frontend/src/data_v2_i18n/fisica-clasica/termodinamica/transferencia-de-calor/conduccion
```

## Paso 23: Validación final

```powershell
python tools/phyxio_leaf_validator_v2.py frontend/src/data_v2_i18n/fisica-clasica/termodinamica/transferencia-de-calor/conduccion
```

---

# Resumen de Comandos por Fase

## Pipeline 1 (Automático hasta prompts YAML)
```powershell
# Con leaf activo configurado:
python tools/phyxio_leaf_factory/run_pipeline_phase1.py --force

# O manualmente:
python tools/phyxio_leaf_factory/run_pipeline_phase1.py --leaf-id conduccion --name "Conducción" --force
```

## Pipeline 2 (Automático: respuestas YAML → prompt interpretación)
```powershell
python tools/phyxio_leaf_factory/run_pipeline_phase2.py
```

## Pipeline 3 (Automático: interpretación → prompts .md)
```powershell
python tools/phyxio_leaf_factory/run_pipeline_phase3.py
```

## Pipeline 4 (Automático: ZIP → validación final)
```powershell
# Detecta ZIP automáticamente basado en leaf activo:
python tools/phyxio_leaf_factory/07_pipeline/process_latest_zip.py

# O especificando ZIP manualmente:
python tools/phyxio_leaf_factory/07_pipeline/process_ai_zip_response.py --zip "C:\Users\USER\Downloads\descargas_phyxio\conduccion.zip"
```

---

# Resumen de Intervenciones Humanas

| Punto | Acción | Archivos |
|-------|--------|----------|
| Después de Paso 09 | Copiar 4 prompts a IA, pegar 4 respuestas | 01-04 .prompt.md → .response.yaml |
| Después de Paso 14 | Copiar 1 prompt a IA, pegar 1 respuesta | 05_interpretacion.prompt.md → .response.yaml |
| Después de Paso 18 | Copiar 5 prompts a IA, descargar ZIP | 5 .prompt.md → ZIP con 12 archivos |
