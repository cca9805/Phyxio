const e=`\uFEFF# Rueda y eje — Modelos y validez\r
\r
## Modelo ideal\r
\r
El modelo ideal de la rueda y el eje asume que la máquina es rígida, sin rozamiento, con masas despreciables y operando en condiciones cuasiestáticas. Bajo estas hipótesis el equilibrio de torques es exacto:\r
\r
{{f:ley_rueda_ideal}}\r
\r
La ventaja mecánica ideal [[VM]] es la razón geométrica entre los radios:\r
\r
{{f:ventaja_mecanica_ideal}}\r
\r
Este modelo captura la esencia del mecanismo: el sistema no crea energía, sino que redistribuye fuerza y desplazamiento. Todo lo que ganas en [[Fr]] lo pagas en recorrido [[sR]].\r
\r
## Hipótesis\r
\r
- **Rigidez total**: rueda y eje no se deforman bajo carga. Si se viola, el radio efectivo cambia con la carga, modificando la ventaja mecánica real.\r
- **Sin rozamiento**: el rendimiento es exactamente 1. Si se viola, el esfuerzo [[FR]] real es mayor que el calculado y se pierde energía en calor.\r
- **Masas despreciables**: la inercia rotacional de la rueda y el eje no aporta torque resistente. Si se viola, en operación dinámica (aceleración) el balance de torques incluye un término I·α adicional.\r
- **Radios constantes**: [[R]] y [[r]] no varían durante el movimiento. Si la cuerda se enrolla en varias capas, el radio efectivo crece con el número de capas, haciendo la ventaja mecánica dependiente de la posición.\r
- **Velocidad constante o reposo**: no hay aceleración angular. Si se viola, la ecuación de movimiento rotacional reemplaza al equilibrio estático.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo ideal es aplicable cuando se cumplen simultáneamente:\r
\r
- Velocidad de giro menor que 1 rev/s: el rozamiento dinámico en los cojinetes es despreciable.\r
- La carga [[Fr]] supera 50 veces el peso propio de la rueda: el peso de la máquina representa menos del 2% de la carga total.\r
- Rendimiento medido mayor que 0,95: el modelo ideal sobreestima la fuerza de salida en menos del 5%.\r
- Deformación angular del eje menor que 1°: la torsión no modifica apreciablemente la relación cinemática [[sR]]/[[sr]].\r
\r
Fuera de estas condiciones el error sistemático supera el 5% y conviene usar el modelo con rendimiento [[eta]].\r
\r
## Señales de fallo del modelo\r
\r
- El esfuerzo [[FR]] medido es notablemente mayor que [[Fr]]·r/R: indica pérdidas por rozamiento no contempladas en el modelo ideal.\r
- El sistema no gira aunque [[FR]] supere el valor de equilibrio: síntoma de rozamiento estático elevado o autobloqueo.\r
- El arco recorrido [[sR]] es mayor que el predicho por la cinemática ideal: apunta a deslizamiento de la cuerda sobre la rueda.\r
- La temperatura de los cojinetes del eje aumenta durante la operación: la fricción disipada en calor no está representada en el modelo ideal.\r
- La ventaja mecánica medida disminuye bajo cargas altas: indica deformación del eje (torsión) o compresión de los cojinetes.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido introduce el rendimiento mecánico [[eta]] para representar todas las pérdidas internas como un único factor. El esfuerzo real necesario aumenta:\r
\r
{{f:ley_rueda_real}}\r
\r
La ventaja mecánica real es siempre menor que la ideal:\r
\r
{{f:ventaja_mecanica_real}}\r
\r
El balance energético completo se expresa como:\r
\r
{{f:balance_energia_rueda}}\r
\r
El rendimiento [[eta]] agrupa rozamiento en cojinetes, rigidez de las uniones y deformaciones elásticas. En aplicaciones industriales típicas [[eta]] oscila entre 0,75 y 0,95. Este modelo es válido para la mayoría de cálculos de ingeniería siempre que [[eta]] sea conocido o estimable.\r
\r
## Comparación operativa\r
\r
Cuando conviene pasar al modelo extendido: siempre que [[eta]] sea inferior a 0,95 o que el sistema sea de aplicación industrial. Para estimaciones preliminares o laboratorio didáctico el modelo ideal es suficiente.\r
\r
| Criterio | Modelo ideal | Modelo con rendimiento |\r
|---|---|---|\r
| Esfuerzo calculado | [[Fr]] · r / R | [[Fr]] · r / ([[eta]] · R) |\r
| Precisión | Exacta solo si [[eta]] próximo a 1 | Correcta para sistemas reales |\r
| Parámetros necesarios | [[FR]], [[Fr]], R, r | [[FR]], [[Fr]], R, r, [[eta]] |\r
| Complejidad | Mínima | Baja |\r
| Rango de aplicación | Laboratorio, estimación rápida | Ingeniería operativa, diseño |\r
| Cuándo usarlo | [[eta]] superior a 0,95 o cálculo preliminar | [[eta]] inferior a 0,95 o diseño de seguridad |\r
\r
El modelo ideal es el punto de partida pedagógico obligatorio. El modelo con rendimiento es el estándar para cualquier dimensionamiento real de motores, actuadores o sistemas de transmisión rotacional.\r
\r
`;export{e as default};
