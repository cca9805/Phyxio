# Plantilla Graph DCL v1

## Objetivo

Esta plantilla define la ficha minima para cualquier grafico DCL. Un DCL no es
un icono de fuerzas: es una escena fisica trazable a formulas, signos,
hipotesis y lectura interpretativa.

## 1. Identidad

- leaf_id
- graph_type: Dcl
- graph_id
- proposito didactico
- nivel educativo ES/EN

## 2. Contrato con calculadora

Debe declarar:

- entradas que pueden venir de calculadora
- alias aceptados
- magnitudes derivadas del diagrama
- targets interpretables
- politica de sincronizacion con sharedParams.__calc

## 3. Contrato con interpretacion

Debe declarar:

- interpretation_binding
- stateOut del diagrama
- magnitudes seleccionables
- contexto semantico emitido
- si puede enfocar una fuerza, eje o magnitud concreta

## 4. Modo experimento

Debe declarar:

- parametros manipulables
- presets de escena si existen
- politica de seguimiento de calculadora
- reseteo a escena base

## 5. Modelo fisico

Debe declarar:

- ecuaciones usadas
- hipotesis
- dominio de validez
- simplificaciones visuales del cuerpo y los vectores

## 6. Animacion

Un DCL normalmente no requiere tiempo interno. Si introduce animacion, debe
justificarla como tiempo fisico real o como ayuda pedagogica.

## 7. Salidas visuales

Debe declarar:

- que cuerpo o sistema se dibuja
- que fuerzas o ejes se muestran
- que capas son obligatorias
- que anotaciones pueden ocultarse por nivel

## 8. Checklist de coherencia

- no aparece ninguna fuerza sin causa fisica
- las magnitudes existen en magnitudes.yaml
- las ecuaciones existen en formulas.yaml
- hay al menos un target interpretable si el leaf usa interpretacion grafica
- el diagrama representa exactamente la escena del leaf

## Regla dura

Si el DCL es intercambiable con otro leaf sin cambios sustanciales, entonces no
es un DCL del leaf: es un placeholder.