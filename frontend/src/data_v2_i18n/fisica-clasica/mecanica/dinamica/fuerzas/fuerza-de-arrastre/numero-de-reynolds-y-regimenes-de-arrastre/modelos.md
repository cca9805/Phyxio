# Modelos físicos: Numero de Reynolds y regimenes de arrastre

## Modelo ideal

El modelo ideal de este leaf no calcula directamente la fuerza de arrastre. Su funcion principal es diagnosticar el regimen mediante [[Re]] para seleccionar el bloque de arrastre mas coherente. Esta separacion evita un error clasico: usar una ley de fuerza sin justificar primero su dominio de validez.

Bajo este modelo, se asume que la escena puede representarse con una longitud caracteristica [[L]], una velocidad relativa [[v]] y una propiedad viscosa del medio ([[eta]] o [[nu]]). Con esas entradas se estima [[Re]] y se decide si la descripcion dominante debe priorizar comportamiento viscoso, inercial o transicional.

## Hipótesis

El modelo se sostiene sobre hipotesis explicitas:

1. La eleccion de [[L]] representa la escala geometrica realmente dominante.
2. La velocidad [[v]] usada en el calculo es la velocidad relativa fisicamente relevante.
3. Las propiedades del medio ([[rho]], [[eta]], [[nu]]) corresponden al estado termico real de operacion.
4. El analisis busca una clasificacion operativa de regimen, no una descripcion completa de turbulencia.

Estas hipotesis son razonables para seleccion preliminar de modelo y comparacion de escenarios de ingenieria educativa.

## Dominio de validez cuantitativo

Para este leaf, un marco operativo util de lectura es:

- Zona A (viscosidad dominante): [[Re]] < 1e2 en geometria externa simple, o [[Re]] < 2e3 en conduccion interna tipica.
- Zona B (transicion): 1e2 <= [[Re]] <= 1e3 en externa simple, o 2e3 <= [[Re]] <= 4e3 en interna tipica.
- Zona C (inercia dominante): [[Re]] > 1e3 en externa simple, o [[Re]] > 4e3 en interna tipica.

Estos umbrales son guias de modelado, no fronteras universales. La geometria y las condiciones de borde pueden desplazar los limites.

## Señales de fallo del modelo

El modelo de seleccion basado en [[Re]] empieza a fallar si aparecen estas señales:

1. La clasificacion cambia con ajustes minimos de [[L]] sin justificacion fisica.
2. La banda operativa de [[v]] cruza zonas y aun asi se mantiene un unico bloque de arrastre.
3. Las predicciones de fuerza difieren de medicion mas de 15% de forma sistematica.
4. Se usan propiedades del medio fuera de su condicion termica real.

Cuando estas señales aparecen, no conviene afinar decimales; conviene revisar la arquitectura del modelo.

## Modelo extendido o alternativo

La transicion de modelo debe declararse de forma explicita:

1. Si la operacion queda en Zona A, se prioriza una formulacion de arrastre lineal con validacion de dependencia viscosa.
2. Si la operacion queda en Zona C, se prioriza una formulacion de arrastre no lineal dominada por inercia y estela.
3. Si la operacion cruza Zona B, se adopta estrategia por tramos o una correlacion transicional validada.

En aplicaciones reales, esta transicion puede incluir dependencia de rugosidad, efecto de confinamiento o ajuste de coeficientes efectivos por rango.

## Comparación operativa

| Aspecto | Seleccion simple por [[Re]] | Enfoque extendido por tramos |
|---|---|---|
| Objetivo | Diagnostico rapido de regimen | Prediccion robusta en banda amplia |
| Datos requeridos | [[v]], [[L]], [[eta]] o [[nu]] | Datos anteriores + validacion experimental |
| Complejidad | Baja | Media/Alta |
| Riesgo de extrapolacion | Alto en zonas mixtas | Menor si se declara transicion |
| Uso recomendado | Estimacion preliminar | Diseno y operacion con variabilidad |

La leccion central de modelos en este leaf es sencilla: [[Re]] orienta la puerta de entrada, pero la calidad final depende de declarar cuando se cambia de modelo y por que.
