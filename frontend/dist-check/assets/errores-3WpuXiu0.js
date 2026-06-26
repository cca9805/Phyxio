const e=`# Errores frecuentes: Traslación y rotación\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
**Por qué parece correcto**\r
\r
La presencia de varias magnitudes en el problema puede hacer creer que todas cumplen el mismo rol causal.\r
\r
**Por qué es incorrecto**\r
\r
En este leaf, el torque neto [[tau_net]] causa [[alpha]], y luego [[alpha]] se proyecta en [[a]] mediante [[R]]. Si se invierte esa cadena, el razonamiento pierde sentido físico.\r
\r
**Señal de detección**\r
\r
El estudiante afirma que [[alpha]] “produce” [[tau_net]] sin justificar retroacción física real.\r
\r
**Corrección conceptual**\r
\r
Construir siempre la cadena causal explícita: entrada dinámica, respuesta angular, respuesta lineal y lectura energética.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con [[tau_net]] fija, cambiar [[I]] modifica [[alpha]]. Si la causa fuera [[alpha]], variar [[I]] no debería importar, y eso contradice la observación.\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
**Por qué parece correcto**\r
\r
Repetir ejercicios con la misma estructura genera la ilusión de que la ecuación siempre funciona igual.\r
\r
**Por qué es incorrecto**\r
\r
Cada relación exige hipótesis: rigidez, no deslizamiento, rango clásico y coherencia de unidades.\r
\r
**Señal de detección**\r
\r
Se sustituyen números sin declarar validez del vínculo entre [[alpha]], [[a]] y [[R]].\r
\r
**Corrección conceptual**\r
\r
Antes de operar, declarar hipótesis y escribir una condición de validez observable.\r
\r
**Mini-ejemplo de contraste**\r
\r
Si hay deslizamiento, [[a]] medida deja de coincidir con [[alpha]]·[[R]]. Aplicar el vínculo sin validarlo produce error sistemático.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
**Por qué parece correcto**\r
\r
[[K]], [[Kt]] y [[Kr]] comparten unidades de energía y pueden parecer intercambiables.\r
\r
**Por qué es incorrecto**\r
\r
[[K]] es total, mientras [[Kt]] y [[Kr]] describen mecanismos distintos. Mezclarlas impide interpretar dónde se está almacenando energía.\r
\r
**Señal de detección**\r
\r
El informe usa solo [[K]] y nunca separa componentes pese a tener datos de [[v]] y [[omega]].\r
\r
**Corrección conceptual**\r
\r
Obligar a reportar el trío [[K]], [[Kt]], [[Kr]] en cualquier transitorio de interés.\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos sistemas con el mismo [[K]] pueden comportarse distinto: uno con mayor [[Kr]] acelera linealmente peor que otro con mayor [[Kt]].\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
**Por qué parece correcto**\r
\r
Cuando el modelo funcionó una vez, se asume que seguirá funcionando en cualquier régimen.\r
\r
**Por qué es incorrecto**\r
\r
El cambio de carga, fricción o adherencia puede romper hipótesis y volver inválida la predicción.\r
\r
**Señal de detección**\r
\r
Error relativo superior al 10 por ciento en mediciones repetidas bajo condiciones comparables.\r
\r
**Corrección conceptual**\r
\r
Definir umbral operativo y activar transición a modelo extendido cuando se supere de forma persistente.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un banco pasa de error del 3 por ciento al 14 por ciento tras cambio de recubrimiento. Mantener el modelo ideal ya no es defendible.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
**Por qué parece correcto**\r
\r
Los límites suelen verse como detalle teórico y no como parte del resultado.\r
\r
**Por qué es incorrecto**\r
\r
Sin límites, la predicción se extrapola donde el modelo no representa la física real.\r
\r
**Señal de detección**\r
\r
No aparece ninguna frase del tipo “válido mientras...” en la conclusión.\r
\r
**Corrección conceptual**\r
\r
Cerrar siempre con condición de validez y condición de salida del modelo.\r
\r
**Mini-ejemplo de contraste**\r
\r
El cálculo fue correcto en baja velocidad, pero en régimen rápido emergen pérdidas no modeladas y la predicción deja de ajustar.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
**Por qué parece correcto**\r
\r
La manipulación simbólica parece formalmente limpia y crea confianza excesiva.\r
\r
**Por qué es incorrecto**\r
\r
Un signo equivocado en dinámica acoplada cambia dirección física de [[alpha]] y de [[a]].\r
\r
**Señal de detección**\r
\r
Resultado con sentido contrario al observado sin justificación de convención de signos.\r
\r
**Corrección conceptual**\r
\r
Verificar signo esperado, dimensiones y orden de magnitud antes de aceptar despejes.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con [[tau_net]] positiva, obtener [[alpha]] negativa sin cambio de convención indica error algebraico, no fenómeno nuevo.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
**Por qué parece correcto**\r
\r
Se prioriza terminar el cálculo y se deja el control de unidades para el final.\r
\r
**Por qué es incorrecto**\r
\r
Una conversión incorrecta arruina cualquier interpretación, aunque la estructura algebraica sea correcta.\r
\r
**Señal de detección**\r
\r
Valores de [[a]] o de [[K]] fuera de rango razonable sin explicación física.\r
\r
**Corrección conceptual**\r
\r
Normalizar unidades al inicio y mantener trazabilidad dimensional en cada paso.\r
\r
**Mini-ejemplo de contraste**\r
\r
Usar [[R]] en cm junto con SI en el resto puede inflar o reducir [[a]] por factor cien sin que el alumno lo note.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
**Por qué parece correcto**\r
\r
Más decimales se confunden con más verdad física.\r
\r
**Por qué es incorrecto**\r
\r
La incertidumbre de modelo y de medición suele ser mayor que la diferencia entre decimales finales.\r
\r
**Señal de detección**\r
\r
Se decide entre alternativas por diferencias menores al ruido experimental.\r
\r
**Corrección conceptual**\r
\r
Reportar cifras significativas coherentes con incertidumbre y comparar bandas, no solo valores puntuales.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con incertidumbre del 5 por ciento, distinguir opciones por una diferencia del 0.3 por ciento no tiene respaldo experimental.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
**Por qué parece correcto**\r
\r
Llegar al número final da sensación de tarea completada.\r
\r
**Por qué es incorrecto**\r
\r
Sin interpretación causal, el resultado no guía diseño, mantenimiento ni control.\r
\r
**Señal de detección**\r
\r
El cierre incluye solo números y no explica implicaciones para operación real.\r
\r
**Corrección conceptual**\r
\r
Añadir siempre un cierre con significado físico, validez y decisión sugerida.\r
\r
**Mini-ejemplo de contraste**\r
\r
Informar solo [[K]] no indica si el sistema acelera bien; separar [[Kt]] y [[Kr]] sí permite decidir una mejora de diseño.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar una resolución, verificar esta secuencia mínima:\r
\r
- Causalidad: [[tau_net]] impulsa [[alpha]] y [[alpha]] se proyecta en [[a]] mediante [[R]].\r
- Coherencia energética: [[K]] debe ser compatible con [[Kt]] y [[Kr]].\r
- Dimensiones y unidades: todo paso debe conservar consistencia física.\r
- Validez declarada: indicar explícitamente cuándo el modelo deja de aplicar.\r
- Interpretación operativa: convertir el número en decisión técnica argumentada.`;export{e as default};
