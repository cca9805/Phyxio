# Plantilla Graph Coord v1

## Objetivo

Esta plantilla define la ficha minima para cualquier grafico Coord. Un grafico
Coord no es solo una curva: es una lectura cuantitativa conectada con la
calculadora, la interpretacion y el modo experimento.

## 1. Identidad

- leaf_id
- graph_type: Coord
- graph_id
- proposito didactico
- nivel educativo ES/EN

## 2. Contrato con calculadora

Debe dejar claro:

- entradas esperadas
- alias aceptados
- magnitudes derivadas por compute
- target interpretable
- politica de uso de sharedParams.__calc

Plantilla:

```yaml
calculator_contract:
  expected_inputs: []
  accepted_aliases: {}
  derived_magnitudes: []
  target_candidates: []
  calc_sync:
    source: sharedParams.__calc
    consumes: [target, result, known, formulaTitle]
    mode_policy: follow-calc-until-user-edit
```

## 3. Contrato con interpretacion

Debe especificar:

- como se genera interpretationTarget
- como se genera interpretationValue
- que graphState emite
- que magnitudes son seleccionables

Plantilla:

```yaml
interpretation_contract:
  interpretation_binding:
    paramsIn: []
    stateOut: []
    target: null
  selectable_magnitudes: []
  emitted_semantic_context: [target, value, paramsIn, stateOut]
  supports_focus_target: true
```

## 4. Modo experimento

Debe declarar:

- defaultParams
- controls con rangos reales
- presets si existen
- politica de desbloqueo respecto a calculadora
- estrategia de reset

## 5. Modelo fisico

Debe declarar:

- ecuaciones usadas por compute
- hipotesis del modelo
- dominio de validez
- simplificaciones del muestreo o de la curva

## 6. Animacion

Por defecto, un Coord puede no tener tiempo interno. Si lo tiene, debe quedar
explicado si representa tiempo fisico real o una exploracion pedagogica.

## 7. Salidas visuales

Debe declarar:

- ejes y unidades obligatorias
- curvas, puntos o envolventes visibles
- magnitudes legibles en la card lateral
- capas opcionales por nivel

## 8. Checklist de coherencia

- las variables del eje existen en magnitudes.yaml
- la curva se corresponde con formulas.yaml
- el target interpretado existe de verdad
- el grafico sirve tanto con calculadora como en experimento
- la lectura del grafico pertenece al leaf y no a otro parecido

## Regla dura

Si el grafico Coord no puede explicar que magnitud esta interpretando y por
que esa magnitud es la dominante del leaf, no esta cerrado.