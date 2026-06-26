const e=`## Errores conceptuales\r
\r
### Error 1: Confundir dimensión espacial con grados de libertad\r
\r
**Por qué parece correcto**\r
La generalización excesiva lleva a pensar que vivir en 3D implica siempre tres variables libres. El mecanismo cognitivo es una analogía incorrecta entre espacio físico y espacio de configuración.\r
\r
**Por qué es incorrecto**\r
Las ligaduras eliminan independencia entre coordenadas. Por eso [[f]] no coincide necesariamente con la dimensión espacial.\r
\r
**Señal de detección**\r
Se reporta [[f]] igual a 3 sin justificar [[C]] ni independencia de restricciones.\r
\r
**Corrección conceptual**\r
Separar siempre descripción geométrica de estructura de independencia; calcular [[f]] después de identificar ligaduras.\r
\r
**Mini-ejemplo de contraste**\r
Dos partículas en 3D no siempre tienen seis grados libres. Si la distancia mutua es fija, el conteo cambia y mantener 6 como libres produce dinámica imposible.\r
\r
## Errores de modelo\r
\r
### Error 2: Elegir coordenadas por comodidad algebraica sin lectura física\r
\r
**Por qué parece correcto**\r
La heurística de minimizar escritura suele funcionar en ejercicios simples y genera confianza excesiva.\r
\r
**Por qué es incorrecto**\r
Si la coordenada no tiene interpretación clara, el modelo pierde trazabilidad y validación física.\r
\r
**Señal de detección**\r
No se puede explicar en una frase qué representa cada variable en términos observables.\r
\r
**Corrección conceptual**\r
Elegir coordenadas por independencia y significado físico, no solo por forma algebraica.\r
\r
**Mini-ejemplo de contraste**\r
Un ajuste numérico en variables abstractas puede converger, pero si no respeta la ligadura geométrica observada, el resultado no describe el sistema real.\r
\r
## Errores matemáticos\r
\r
### Error 3: Mezclar unidades angulares en [[theta]]\r
\r
**Por qué parece correcto**\r
La confusión de magnitudes surge por cambio de herramienta: calculadora en radianes y datos en grados.\r
\r
**Por qué es incorrecto**\r
Seno y coseno dependen de la unidad angular operativa. Mezclarla rompe coherencia de [[x]], [[y]] y [[r]].\r
\r
**Señal de detección**\r
Los signos por cuadrante no coinciden con la posición física esperada.\r
\r
**Corrección conceptual**\r
Declarar unidad angular al inicio y mantenerla estable en todo el flujo.\r
\r
**Mini-ejemplo de contraste**\r
Usar 90 como radianes entrega proyecciones absurdas; usar 90 grados convertidos a radianes produce valores coherentes.\r
\r
## Errores de interpretación\r
\r
### Error 4: Tomar [[r]] como distancia recorrida\r
\r
**Por qué parece correcto**\r
La analogía incorrecta entre distancia al origen y longitud de trayectoria es intuitiva para principiantes.\r
\r
**Por qué es incorrecto**\r
[[r]] es estado geométrico instantáneo, no acumulado temporal de camino recorrido.\r
\r
**Señal de detección**\r
Se compara [[r]] directamente con odometría sin justificar geometría de trayectoria.\r
\r
**Corrección conceptual**\r
Distinguir variables de estado de variables acumulativas antes de interpretar resultados.\r
\r
**Mini-ejemplo de contraste**\r
Una partícula que gira en circunferencia mantiene [[r]] constante mientras la distancia recorrida crece con el tiempo.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de aceptar cualquier resultado, aplicar esta secuencia: 1) ¿Cada variable tiene significado físico explícito? 2) ¿Las ligaduras están contadas sin redundancia? 3) ¿Las unidades son coherentes, especialmente en [[theta]]? 4) ¿La interpretación distingue estado y acumulación?\r
\r
Si una sola respuesta es negativa, detener cálculo final y rehacer el modelo base. Esta regla evita que errores pequeños escalen a conclusiones físicamente incorrectas y obliga a verificar independencia, validez y lectura causal antes de cerrar.`;export{e as default};
