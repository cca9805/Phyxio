const e=`## Errores conceptuales\r
\r
### Error 1: Pensar que la sustentación se debe solo al camino más largo\r
\r
**Por qué parece correcto**\r
La explicación escolar suele decir que el aire de arriba recorre más distancia y por eso debe ir más rápido. Es una analogía sencilla, pero excesivamente rígida.\r
\r
**Por qué es incorrecto**\r
El flujo no está obligado a llegar simultáneamente al borde de salida por ambos caminos. La distribución de presiones depende de condiciones de contorno, circulación, viscosidad y estado de la capa límite.\r
\r
**Señal de detección**\r
El alumno no puede explicar por qué un ala plana con ángulo de ataque también genera sustentación.\r
\r
**Corrección conceptual**\r
La sustentación debe leerse como combinación de presión, desviación del flujo y circulación.\r
\r
**Mini-ejemplo de contraste**\r
Un ala plana con pequeño ángulo de ataque puede generar sustentación, aunque no tenga un extradós claramente más largo. Eso muestra que la explicación por longitud de camino no basta.\r
\r
## Errores de modelo\r
\r
### Error 1: Usar la fórmula global fuera de pérdida\r
\r
**Por qué parece correcto**\r
La fórmula de [[L]] parece universal porque contiene pocos parámetros.\r
\r
**Por qué es incorrecto**\r
Si el flujo se separa, [[C_L]] deja de comportarse como un coeficiente suave. El resultado numérico puede ocultar que el modelo ya no representa el fenómeno.\r
\r
**Señal de detección**\r
Aumentar el ángulo no aumenta la fuerza o aparecen valores enormes de [[C_L]].\r
\r
**Corrección conceptual**\r
Antes de aplicar la fórmula, comprobar régimen, ángulo y adherencia del flujo.\r
\r
**Mini-ejemplo de contraste**\r
Si un cálculo exige [[C_L]] muy alto para una avioneta ordinaria, el problema probablemente no se resuelve aumentando el número, sino revisando pérdida, flaps o datos de entrada.\r
\r
## Errores matemáticos\r
\r
### Error 1: No convertir unidades de velocidad o área\r
\r
**Por qué parece correcto**\r
El cálculo parece algebraicamente correcto aunque se introduzcan km/h o cm².\r
\r
**Por qué es incorrecto**\r
La fuerza queda en newtons solo si [[rho]], [[v]] y [[S]] están en unidades SI compatibles.\r
\r
**Señal de detección**\r
El resultado queda varios órdenes de magnitud por encima o por debajo del peso esperado.\r
\r
**Corrección conceptual**\r
Convertir siempre velocidad a m/s y superficie a m² antes de sustituir.\r
\r
**Mini-ejemplo de contraste**\r
Usar 90 como si fueran m/s cuando el dato está en km/h multiplica artificialmente la fuerza estimada y puede convertir un ala normal en un resultado imposible.\r
\r
## Errores de interpretación\r
\r
### Error 1: Confundir sustentación grande con vuelo posible\r
\r
**Por qué parece correcto**\r
Si [[L]] es grande, parece que el avión necesariamente vuela.\r
\r
**Por qué es incorrecto**\r
Hace falta comparar con [[W]], considerar resistencia, potencia, estabilidad y margen de pérdida.\r
\r
**Señal de detección**\r
El alumno no verifica si [[L]] compensa el peso ni si el régimen es estable.\r
\r
**Corrección conceptual**\r
Interpretar la fuerza dentro del balance completo del vuelo.\r
\r
**Mini-ejemplo de contraste**\r
Un alerón de coche puede generar una fuerza grande, pero no permite volar: su orientación produce carga hacia abajo y debe interpretarse junto con la normal sobre los neumáticos.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar cualquier ejercicio, pregunta tres cosas: si las unidades son SI, si el valor de [[C_L]] es plausible y si el régimen declarado permite usar el modelo. Si una de esas tres falla, el número puede estar bien calculado y seguir siendo físicamente inútil.`;export{e as default};
