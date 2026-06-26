# Crear Leaf - Guía Detallada Paso a Paso

> **Nota:** Este documento contiene TODOS los pasos individuales. Para la versión automatizada por pipelines, ver `comandos_create_leaf.md`.

---

## Índice de Fases

- [Fase 1: Estructura y YAML (pasos 00-09)](#fase-1-estructura-y-yaml)
- [Fase 2: Respuestas YAML (pasos 10-12)](#fase-2-respuestas-yaml)
- [Fase 3: Interpretación (pasos 13-15)](#fase-3-interpretación)
- [Fase 4: Prompts Markdown (pasos 16-18)](#fase-4-prompts-markdown)
- [Fase 5: Respuestas Markdown (pasos 19-22)](#fase-5-respuestas-markdown)
- [Fase 6: Procesar ZIP (pasos 23-26)](#fase-6-procesar-zip)

---

### Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Si no se cumple el checklist no envies nada

## Fase 1: Estructura y YAML

### 00 Crea la estructura del leaf

```powershell
python tools/phyxio_leaf_factory/create_leaf.py --leaf-id segunda-ley-fuerza-masa --name "Segunda ley de Newton" --force
```

### 01 Valida la estructura de archivos del leaf

```powershell
python tools/phyxio_leaf_factory/07_checks/check_leaf_structure.py --leaf-id segunda-ley-fuerza-masa
```

### 02 Extrae campos de la plantilla

```bash
python tools/phyxio_leaf_factory/03_extractors/extract_template_contract.py
```

### 03 Inserta campos extraidos

```powershell
python tools/phyxio_leaf_factory/generate_leaf_skeleton.py --leaf-id segunda-ley-fuerza-masa --name "Segunda ley de Newton" --force
```

### 04 Valida de nuevo la estructura de archivos del leaf

```powershell
python tools/phyxio_leaf_factory/07_checks/check_leaf_structure.py --leaf-id segunda-ley-fuerza-masa
```

### 05 Valida el contrato json contra la estructura

```powershell
python tools/phyxio_leaf_factory/07_checks/check_contract_skeleton.py --leaf-id segunda-ley-fuerza-masa
```

### 06 Actualiza el meta con datos del mapa

```powershell
python tools/phyxio_leaf_factory/06_writers/sync_meta_from_map.py --map "./frontend/src/v2/map/phyxio-map.yaml" --leaf-dir "./frontend/src/data_v2_i18n/pruebas/segunda-ley-fuerza-masa" --leaf-id "segunda-ley-fuerza-masa"
```

### 07 Generar prompts de los archivos yaml (fase 1)

**Nota:** Se generan los prompts y se preparan los archivos .response.yaml vacíos.

```powershell
python tools/phyxio_leaf_factory/04_prompts/generate_yaml_prompts.py --leaf-id segunda-ley-fuerza-masa
```

### 08 Chequea los prompts

```powershell
python tools/phyxio_leaf_factory/07_checks/check_yaml_prompts.py --leaf-id segunda-ley-fuerza-masa
```

### 09 Crea los archivos de respuesta donde pegar lo devuelto por la IA

```powershell
python tools/phyxio_leaf_factory/05_ai_responses/prepare_yaml_response_files.py --leaf-id segunda-ley-fuerza-masa
```

---

## Fase 2: Respuestas YAML

### 10 Enviar prompts a la IA y recibir respuestas

**Acción manual:**
- Copiar cada prompt (01-04) en la IA
- Pegar respuesta de la IA en los archivos .response.yaml correspondientes

### 11 Validar respuestas de IA

```powershell
python tools/phyxio_leaf_factory/07_checks/check_yaml_ai_responses.py --leaf-id segunda-ley-fuerza-masa
```

### 12 Escribir respuestas validadas a los archivos YAML del leaf

```powershell
python tools/phyxio_leaf_factory/06_writers/write_yaml_ai_responses.py --leaf-id segunda-ley-fuerza-masa
```

---

## Fase 3: Interpretación

### 13 Sincronizar interpretacion.yaml desde meta/magnitudes/formulas

**Requisito:** Los archivos magnitudes.yaml y formulas.yaml deben tener datos reales.

```powershell
python tools/phyxio_leaf_factory/06_writers/sync_interpretacion_from_meta.py --leaf-id segunda-ley-fuerza-masa
```

### 14 Regenerar prompts para obtener 05_interpretacion (fase 2)

```powershell
python tools/phyxio_leaf_factory/04_prompts/generate_yaml_prompts.py --leaf-id segunda-ley-fuerza-masa
```

Ahora se generarán 5 prompts, incluyendo 05_interpretacion.prompt.md

### 15 Enviar prompt 05 a la IA y escribir respuesta

**Acción manual:**
- Copiar 05_interpretacion.prompt.md en la IA
- Pegar respuesta en 05_interpretacion.response.yaml
- Ejecutar write_yaml_ai_responses.py de nuevo:

```powershell
python tools/phyxio_leaf_factory/06_writers/write_yaml_ai_responses.py --leaf-id segunda-ley-fuerza-masa
```

---

## Fase 4: Prompts Markdown

### 16 Generar prompts de los archivos .md (fase 3)

**Nota:** Se generan los 5 prompts para los archivos markdown: historia.md, aplicaciones.md, modelos.md, ejemplos.md, errores.md

```powershell
python tools/phyxio_leaf_factory/04_prompts/generate_batch_md_prompt.py --leaf-id segunda-ley-fuerza-masa
```

### 17 Chequear los prompts de .md

```powershell
python tools/phyxio_leaf_factory/07_checks/check_md_prompts.py --leaf-id segunda-ley-fuerza-masa
```

### 18 Crear archivos de respuesta .md

```powershell
python tools/phyxio_leaf_factory/05_ai_responses/prepare_md_response_files.py --leaf-id segunda-ley-fuerza-masa
```

---

## Fase 5: Respuestas Markdown

### 19 Enviar prompts .md a la IA y recibir respuestas

**Nota:** Se generarán 5 archivos .response.md. Enviar cada prompt a la IA y pegar la respuesta en su archivo .response.md correspondiente.

1. Copiar `historia.prompt.md` en la IA → Pegar respuesta en `historia.response.md`
2. Copiar `aplicaciones.prompt.md` en la IA → Pegar respuesta en `aplicaciones.response.md`
3. Copiar `modelos.prompt.md` en la IA → Pegar respuesta en `modelos.response.md`
4. Copiar `ejemplos.prompt.md` en la IA → Pegar respuesta en `ejemplos.response.md`
5. Copiar `errores.prompt.md` en la IA → Pegar respuesta en `errores.response.md`

### 20 Escribir respuestas .md en los archivos finales

```powershell
python tools/phyxio_leaf_factory/06_writers/write_md_ai_responses.py --leaf-id segunda-ley-fuerza-masa
```

### 21 Ejecutar auto-fix en los archivos .md generados

```powershell
python tools/phyxio_leaf_factory/06_writers/auto_fix_md.py --leaf-id segunda-ley-fuerza-masa
```

### 22 Pasa el validador

```powershell
python tools/phyxio_leaf_validator_v2.py frontend/src/data_v2_i18n/pruebas/segunda-ley-fuerza-masa
```

---

## Fase 6: Procesar ZIP

### 23 Desempaquetar el ZIP descargado

**Nota:** Descomprime el ZIP de la IA en una carpeta temporal.

```powershell
# Crear carpeta temporal
mkdir temp_zip_extract

# Descomprimir (ajusta la ruta al ZIP descargado)
Expand-Archive -Path "C:\Users\USER\Downloads\segunda-ley-fuerza-masa.zip" -DestinationPath "temp_zip_extract"
```

### 24 Copiar archivos .md al leaf

**Nota:** Copia los 12 archivos markdown descomprimidos al directorio del leaf.

```powershell
# Copiar archivos .md al leaf (es)
copy "temp_zip_extract\*.md" "frontend\src\data_v2_i18n\pruebas\segunda-ley-fuerza-masa\"

# O copiar individualmente si hay subcarpetas es/en
# copy "temp_zip_extract\es\*.md" "frontend\src\data_v2_i18n\pruebas\segunda-ley-fuerza-masa\"
# copy "temp_zip_extract\en\*.md" "frontend\src\data_v2_i18n\pruebas\segunda-ley-fuerza-masa\"
```

### 25 Ejecutar auto-fix en archivos .md

**Nota:** Corrige estructura, placeholders, notación dimensional y otros problemas automáticamente.

```powershell
python tools/phyxio_leaf_factory/06_writers/auto_fix_md.py --leaf-id segunda-ley-fuerza-masa
```

### 26 Validar el leaf final

```bash
python tools/phyxio_leaf_validator_v2.py frontend/src/data_v2_i18n/pruebas/segunda-ley-fuerza-masa
```

---

## Comandos Útiles

### Limpiar y regenerar todo

```bash
# Eliminar leaf existente
rm -rf frontend/src/data_v2_i18n/pruebas/segunda-ley-fuerza-masa

# Volver a empezar desde cero
python tools/phyxio_leaf_factory/create_leaf.py --leaf-id segunda-ley-fuerza-masa --name "Segunda ley de Newton" --force
```

### Solo validar

```powershell
python tools/phyxio_leaf_validator_v2.py frontend/src/data_v2_i18n/pruebas/segunda-ley-fuerza-masa
```
