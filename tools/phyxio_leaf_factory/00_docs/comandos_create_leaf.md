# Creación de Leaf - Pipelines Automatizados

> **Resumen:** Este documento contiene los 4 pipelines automatizados. Para el paso a paso detallado, ver: `paso_a_paso_detallado.md`
>
> **Nuevo:** Usa `ruta_leaf.py` para configurar el leaf activo una sola vez y olvidarte de escribir `--leaf-id` en cada comando.

---

## Flujo de Pipelines

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Pipeline 1  │────▶│ Int.Humana 1 │────▶│ Pipeline 2  │────▶│ Int.Humana 2 │
│ (0→YAML)    │     │(Pegar 4 YAML)│     │(YAML→Interp) │     │(Pegar interp.)│
└─────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                                            │
       ┌────────────────────────────────────────────────────────────────────┘
       ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Pipeline 3  │────▶│ Int.Humana 3 │────▶│ Pipeline 4  │
│(Interp→.md)  │     │(Enviar .md  │     │(ZIP→Final)   │
└──────────────┘     │+ Descargar  │     └──────────────┘
                     │   ZIP)       │
                     └──────────────┘
```

---

## Configuración Inicial: Establecer Leaf Activo

Configura el leaf una sola vez, luego todos los comandos lo usarán automáticamente:

```bash
# Establecer leaf activo
python tools/phyxio_leaf_factory/ruta_leaf.py --set conduccion --name "Conducción"

# Verificar leaf activo
python tools/phyxio_leaf_factory/ruta_leaf.py --show
```

---

## Pipeline 1: Crear Estructura → Prompts YAML (pasos 00-09)

**Automático hasta:** Tener los 4 prompts YAML listos para enviar a la IA.

**Intervención humana después:** Enviar prompts 01-04 a la IA, pegar 4 respuestas en archivos .response.yaml

```bash
# Con leaf activo configurado (recomendado):
python tools/phyxio_leaf_factory/run_pipeline_phase1.py --force

# O especificando leaf manualmente:
python tools/phyxio_leaf_factory/run_pipeline_phase1.py \
  --leaf-id conduccion \
  --name "Conducción" \
  --force
```

**Equivale a:** Pasos 00-09 automatizados (crear estructura, validar, generar prompts YAML, preparar archivos de respuesta).

**Resultado:** Prompts listos en:
- `01_meta.prompt.md`
- `02_magnitudes.prompt.md`
- `03_formulas.prompt.md`
- `04_graficos.prompt.md`

---

## 🔴 Intervención Humana 1

### Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Totalmente prohibido frases como "Completar - contenido obligatorio por redactar"
7. Si no se cumple el checklist no envies nada

Enviar los 4 prompts a la IA y pegar respuestas:

1. Copiar `01_meta.prompt.md` → IA → Pegar en `01_meta.response.yaml`
2. Copiar `02_magnitudes.prompt.md` → IA → Pegar en `02_magnitudes.response.yaml`
3. Copiar `03_formulas.prompt.md` → IA → Pegar en `03_formulas.response.yaml`
4. Copiar `04_graficos.prompt.md` → IA → Pegar en `04_graficos.response.yaml`

---

## Pipeline 2: Respuestas YAML → Prompt Interpretación (pasos 11-14)

**Automático hasta:** Tener el prompt 05_interpretacion listo.

**Intervención humana después:** Enviar prompt interpretación a la IA, pegar respuesta.

```bash
# Con leaf activo configurado:
python tools/phyxio_leaf_factory/run_pipeline_phase2.py

# Modo automático (si ya pegaste las respuestas manualmente):
python tools/phyxio_leaf_factory/run_pipeline_phase2.py --auto

# O especificando leaf manualmente:
python tools/phyxio_leaf_factory/run_pipeline_phase2.py --leaf-id conduccion
```

**Equivale a:**
- Validar respuestas YAML (paso 11)
- Escribir respuestas al leaf (paso 12)
- Sincronizar interpretacion.yaml (paso 13)
- Generar prompt 05_interpretacion (paso 14)

**Resultado:** Prompt listo:
- `05_interpretacion.prompt.md`

---

## 🔴 Intervención Humana 2

Enviar prompt interpretación y escribir respuesta:

### Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Totalmente prohibido frases como "Completar - contenido obligatorio por redactar"
7. Si no se cumple el checklist no envies nada

1. Copiar `05_interpretacion.prompt.md` → IA → Pegar en `05_interpretacion.response.yaml`
2. Ejecutar escritura:
   ```bash
   python tools/phyxio_leaf_factory/06_writers/write_yaml_ai_responses.py \
     --leaf-id segunda-ley-fuerza-masa
   ```

---

## Pipeline 3: Interpretación → Prompts .md (pasos 16-18)

**Automático hasta:** Tener los 5 prompts .md listos para enviar a la IA.

**Intervención humana después:** Enviar prompts .md a la IA, recibir ZIP descargado.

```bash
# Con leaf activo configurado:
python tools/phyxio_leaf_factory/run_pipeline_phase3.py

# O especificando leaf manualmente:
python tools/phyxio_leaf_factory/run_pipeline_phase3.py --leaf-id conduccion
```

**Equivale a:**
- Escribir interpretación al leaf
- Generar prompts .md: historia, aplicaciones, modelos, ejemplos, errores (paso 16)
- Chequear prompts .md (paso 17)
- Preparar archivos de respuesta .md (paso 18)

**Resultado:** Prompts listos:
- `historia.prompt.md`
- `aplicaciones.prompt.md`
- `modelos.prompt.md`
- `ejemplos.prompt.md`
- `errores.prompt.md`

---

## 🔴 Intervención Humana 3

### Prompt manual

Voy a darte contenido que DEBES leer íntegramente antes de responder. No resumas, no omitas, no inventes. Si algo no está claro, PREGUNTA antes de asumir. REGLAS: 
1. No inventes información que no esté en el contenido. 
2. No cambies requisitos funcionales. 
3. No generes texto estilo plantilla 
4. Si falta información, pregunta antes de continuar. 
5. Mantén el estilo, arquitectura y convenciones del proyecto. 
6. Totalmente prohibido frases como "Completar - contenido obligatorio por redactar"
7. Si no se cumple el checklist no envies nada

Enviar prompts .md a la IA y descargar ZIP:

1. **Enviar todos los 5 prompts a la IA** (pueden ir en un solo mensaje combinado)
2. **Recibir ZIP:** La IA generará un ZIP con 12 archivos .md (español + inglés)
3. **Descargar ZIP** a: `C:\Users\USER\Downloads\descargas_phyxio\<leaf-id>.zip` (ej: `conduccion.zip`)

---

## Pipeline 4: ZIP → Validación Final (pasos 20-23)

**Totalmente automático:** Desempaqueta ZIP, copia archivos, ejecuta reparador, valida.

**No requiere intervención humana.**

```bash
# Con leaf activo configurado - detecta ZIP automáticamente:
python tools/phyxio_leaf_factory/07_pipeline/process_latest_zip.py

# O especificando leaf manualmente:
python tools/phyxio_leaf_factory/07_pipeline/process_latest_zip.py --leaf-id conduccion

# Opción B: Especificar ZIP manualmente (con leaf activo):
python tools/phyxio_leaf_factory/07_pipeline/process_ai_zip_response.py \
  --zip "C:\Users\USER\Downloads\descargas_phyxio\conduccion.zip"
```

**Nota:** El ZIP descargado debe llamarse `<leaf-id>.zip` (ej: `conduccion.zip`).

**Equivale a:**
- Desempaquetar ZIP (paso 20)
- Copiar archivos .md al leaf (paso 21)
- Ejecutar auto-fix (paso 22)
- Validar leaf final (paso 23)

---

## Resumen Visual

| Pipeline | Automático hasta | Intervención Humana | Comando |
|----------|------------------|---------------------|---------|
| **1** | Prompts YAML listos | Pegar 4 respuestas YAML | `run_pipeline_phase1.py` |
| **2** | Prompt interpretación listo | Pegar respuesta interpretación | `run_pipeline_phase2.py` |
| **3** | Prompts .md listos | Enviar .md, descargar ZIP | `run_pipeline_phase3.py` |
| **4** | **FINAL** | Ninguna | `process_ai_zip_response.py` |

---

## Paso a Paso Manual

Para ver TODOS los pasos individuales con sus comandos específicos, ver: **`paso_a_paso_detallado.md`**"