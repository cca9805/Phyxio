const e=`# Errores comunes: balance de momento con flujo de masa\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir la definición formal de balance de momento con flujo de masa con la intuición cotidiana\r
\r
**Por qué parece correcto:**\r
La intuición cotidiana sobre balance de momento con flujo de masa funciona en contextos simples, así que parece correcta siempre.\r
\r
**Por qué es incorrecto:**\r
La definición física de balance de momento con flujo de masa incluye restricciones (vectorialidad, signo, marco de referencia) que la intuición ignora.\r
\r
**Señal de detección:**\r
El alumno obtiene un resultado con el signo incorrecto o con magnitud absurda y no lo cuestiona.\r
\r
**Corrección conceptual:**\r
Volver a la definición formal, verificar unidades y signo, y comparar con un caso límite conocido.\r
\r
**Mini-ejemplo de contraste:**\r
Un alumno aplica balance de momento con flujo de masa sin considerar el signo vectorial y obtiene un resultado positivo donde debería ser negativo; la magnitud es correcta pero la dirección no.\r
\r
## Errores de modelo\r
\r
### Error 2: Aplicar el modelo ideal de balance de momento con flujo de masa fuera de su dominio de validez\r
\r
**Por qué parece correcto:**\r
El modelo funciona en los ejercicios tipo, así que parece universal.\r
\r
**Por qué es incorrecto:**\r
Todo modelo tiene hipótesis de validez. Fuera de su dominio, las predicciones divergen de la realidad.\r
\r
**Señal de detección:**\r
El resultado numérico viola un límite físico conocido (velocidad mayor que \\(c\\), energía negativa, etc.).\r
\r
**Corrección conceptual:**\r
Verificar antes de calcular que las hipótesis del modelo se cumplen; si no, usar el modelo extendido.\r
\r
**Mini-ejemplo de contraste:**\r
Aplicar la fórmula ideal de balance de momento con flujo de masa a velocidades relativistas da un error >5 % cuando v > 0.1c.\r
\r
## Errores matemáticos\r
\r
### Error 3: Error de signo al proyectar vectores en el cálculo de balance de momento con flujo de masa\r
\r
**Por qué parece correcto:**\r
Elegir todos los valores positivos simplifica el cálculo.\r
\r
**Por qué es incorrecto:**\r
La dirección del vector importa. Un signo equivocado en la proyección invierte el resultado.\r
\r
**Señal de detección:**\r
El resultado tiene signo opuesto al esperado por el diagrama o la situación física.\r
\r
**Corrección conceptual:**\r
Definir los ejes y los signos positivos antes de sustituir valores, y verificar coherencia al final.\r
\r
**Mini-ejemplo de contraste:**\r
Una partícula se mueve hacia la izquierda respecto al eje \\(x\\). Si se pone \\(v > 0\\) en vez de \\(v < 0\\), el momento calculado apunta al lado equivocado.\r
\r
## Errores de interpretación\r
\r
### Error 4: Leer el resultado numérico sin interpretar su significado físico\r
\r
**Por qué parece correcto:**\r
El número es la respuesta; no hace falta más análisis.\r
\r
**Por qué es incorrecto:**\r
Un resultado numérico sin interpretación física puede ocultar errores de concepto, signo o modelo.\r
\r
**Señal de detección:**\r
El alumno presenta solo cifras sin unidades, sin dirección o sin comparación con un caso límite.\r
\r
**Corrección conceptual:**\r
Después de obtener el número, verificar unidades, sentido físico y coherencia con casos límite.\r
\r
**Mini-ejemplo de contraste:**\r
El alumno calcula un momento lineal [[P]] con signo negativo y anota solo el módulo. El signo negativo indica dirección opuesta al eje elegido, información que se pierde.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por bueno un resultado, aplica esta lista de comprobación:\r
\r
1. **Unidades**: ¿el resultado tiene las dimensiones esperadas?\r
2. **Signo**: ¿el signo es coherente con la dirección elegida en el diagrama?\r
3. **Orden de magnitud**: ¿el valor es físicamente razonable para el escenario?\r
4. **Caso límite**: ¿la fórmula se reduce a un resultado conocido cuando un parámetro tiende a cero o a infinito?\r
`;export{e as default};
