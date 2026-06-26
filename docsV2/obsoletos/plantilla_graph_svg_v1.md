# Plantilla Graph SVG v1

## Objetivo

Esta plantilla define la ficha minima obligatoria para cualquier grafico SVG de
Phyxio. Un SVG no se considera valido solo porque renderiza: debe nacer con
identidad, contrato con calculadora, contrato con interpretacion, modo
experimento, modelo fisico, politica de animacion y salidas visuales claras.

## 1. Identidad

- leaf_id
- graph_type: Svg
- graph_id
- proposito didactico
- nivel educativo ES/EN

Plantilla:

```yaml
identity:
  leaf_id: nombre-del-leaf
  graph_type: Svg
  graph_id: svg-nombre-del-leaf
  proposito_didactico:
    es: Que lectura fisica aporta el SVG.
    en: What physical reading the SVG adds.
  nivel_educativo:
    es: bachillerato | universidad inicial
    en: high school | early undergraduate
```

## 2. Contrato con calculadora

Debe declarar:

- magnitudes de entrada esperadas
- alias aceptados
- magnitudes derivadas
- target interpretable o lista de targets
- como consume sharedParams.__calc
- politica de sincronizacion calculadora -> grafico

Plantilla:

```yaml
calculator_contract:
  expected_inputs: [m1, m2, v1, v2]
  accepted_aliases:
    v_cm: [vcm, Vcm]
  derived_magnitudes: [p1, p2, pTot, xcm]
  target_candidates: [pTot, xcm]
  calc_sync:
    source: sharedParams.__calc
    consumes: [target, result, known, formulaTitle]
    mode_policy: follow-calc-until-user-edit
```

## 3. Contrato con interpretacion

Debe declarar:

- interpretation_binding
- stateOut real del SVG
- magnitudes seleccionables
- contexto semantico emitido
- si puede abrir foco sobre una magnitud concreta

Plantilla:

```yaml
interpretation_contract:
  interpretation_binding:
    paramsIn: [m1, m2, v1, v2]
    stateOut: [p1, p2, pTot, xcm]
    target: pTot
  selectable_magnitudes: [p1, p2, pTot, xcm]
  emitted_semantic_context:
    - profileId
    - leafId
    - target
    - value
    - paramsIn
    - stateOut
  supports_focus_target: true
```

## 4. Modo experimento

Debe declarar:

- parametros manipulables
- rangos y presets
- cuando se desbloquea de la calculadora
- como se resetea

## 5. Modelo fisico

Debe declarar:

- ecuaciones usadas
- hipotesis
- dominio de validez
- simplificaciones visuales

## 6. Animacion

Todo SVG debe responder explicitamente a estas preguntas:

- Tiene tiempo interno: si | no
- Tiene play/pause: si | no
- La animacion representa tiempo fisico real o tiempo pedagogico

Si la respuesta es no, debe quedar documentado. No se admite silencio.

## 7. Salidas visuales

Debe declarar:

- que se dibuja
- que magnitudes se leen
- que debe quedar visible siempre
- que puede ocultarse por nivel

## 8. Checklist de coherencia

- todas las magnitudes usadas existen en magnitudes.yaml
- todas las formulas usadas existen en formulas.yaml
- hay al menos un target interpretable
- el SVG representa el leaf real y no un primo cercano
- funciona en modo calculadora y modo experimento

## Regla dura

Un SVG que no emite contexto interpretable o que no distingue entre tiempo
fisico y tiempo pedagogico no esta cerrado a nivel premium.