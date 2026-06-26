const e=`# Modelos físicos: Numero de Reynolds y regimenes de arrastre\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf no calcula directamente la fuerza de arrastre. Su funcion principal es diagnosticar el regimen mediante [[Re]] para seleccionar el bloque de arrastre mas coherente. Esta separacion evita un error clasico: usar una ley de fuerza sin justificar primero su dominio de validez.\r
\r
Bajo este modelo, se asume que la escena puede representarse con una longitud caracteristica [[L]], una velocidad relativa [[v]] y una propiedad viscosa del medio ([[eta]] o [[nu]]). Con esas entradas se estima [[Re]] y se decide si la descripcion dominante debe priorizar comportamiento viscoso, inercial o transicional.\r
\r
## Hipótesis\r
\r
El modelo se sostiene sobre hipotesis explicitas:\r
\r
1. La eleccion de [[L]] representa la escala geometrica realmente dominante.\r
2. La velocidad [[v]] usada en el calculo es la velocidad relativa fisicamente relevante.\r
3. Las propiedades del medio ([[rho]], [[eta]], [[nu]]) corresponden al estado termico real de operacion.\r
4. El analisis busca una clasificacion operativa de regimen, no una descripcion completa de turbulencia.\r
\r
Estas hipotesis son razonables para seleccion preliminar de modelo y comparacion de escenarios de ingenieria educativa.\r
\r
## Dominio de validez cuantitativo\r
\r
Para este leaf, un marco operativo util de lectura es:\r
\r
- Zona A (viscosidad dominante): [[Re]] < 1e2 en geometria externa simple, o [[Re]] < 2e3 en conduccion interna tipica.\r
- Zona B (transicion): 1e2 <= [[Re]] <= 1e3 en externa simple, o 2e3 <= [[Re]] <= 4e3 en interna tipica.\r
- Zona C (inercia dominante): [[Re]] > 1e3 en externa simple, o [[Re]] > 4e3 en interna tipica.\r
\r
Estos umbrales son guias de modelado, no fronteras universales. La geometria y las condiciones de borde pueden desplazar los limites.\r
\r
## Señales de fallo del modelo\r
\r
El modelo de seleccion basado en [[Re]] empieza a fallar si aparecen estas señales:\r
\r
1. La clasificacion cambia con ajustes minimos de [[L]] sin justificacion fisica.\r
2. La banda operativa de [[v]] cruza zonas y aun asi se mantiene un unico bloque de arrastre.\r
3. Las predicciones de fuerza difieren de medicion mas de 15% de forma sistematica.\r
4. Se usan propiedades del medio fuera de su condicion termica real.\r
\r
Cuando estas señales aparecen, no conviene afinar decimales; conviene revisar la arquitectura del modelo.\r
\r
## Modelo extendido o alternativo\r
\r
La transicion de modelo debe declararse de forma explicita:\r
\r
1. Si la operacion queda en Zona A, se prioriza una formulacion de arrastre lineal con validacion de dependencia viscosa.\r
2. Si la operacion queda en Zona C, se prioriza una formulacion de arrastre no lineal dominada por inercia y estela.\r
3. Si la operacion cruza Zona B, se adopta estrategia por tramos o una correlacion transicional validada.\r
\r
En aplicaciones reales, esta transicion puede incluir dependencia de rugosidad, efecto de confinamiento o ajuste de coeficientes efectivos por rango.\r
\r
## Comparación operativa\r
\r
| Aspecto | Seleccion simple por [[Re]] | Enfoque extendido por tramos |\r
|---|---|---|\r
| Objetivo | Diagnostico rapido de regimen | Prediccion robusta en banda amplia |\r
| Datos requeridos | [[v]], [[L]], [[eta]] o [[nu]] | Datos anteriores + validacion experimental |\r
| Complejidad | Baja | Media/Alta |\r
| Riesgo de extrapolacion | Alto en zonas mixtas | Menor si se declara transicion |\r
| Uso recomendado | Estimacion preliminar | Diseno y operacion con variabilidad |\r
\r
La leccion central de modelos en este leaf es sencilla: [[Re]] orienta la puerta de entrada, pero la calidad final depende de declarar cuando se cambia de modelo y por que.\r
`;export{e as default};
