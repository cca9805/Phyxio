const e=`## Errores conceptuales\r
### Error 1: creer que la tensión superficial es una fuerza total\r
**Por qué parece correcto**  \r
La unidad N/m contiene newton y el alumno interpreta [[sigma]] como si ya fuera una fuerza. Es una analogía incorrecta con peso o normal.\r
\r
**Por qué es incorrecto**  \r
[[sigma]] debe multiplicarse por una longitud efectiva [[L]] para obtener [[F]]. Sin geometría no hay fuerza total.\r
\r
**Señal de detección**  \r
El cálculo da newton por metro cuando el problema pide newton.\r
\r
**Mini-ejemplo de contraste**\r
Si calculas la fuerza sobre un aro de 10 cm, el resultado debe ser distinto que sobre uno de 20 cm para el mismo líquido. Si no cambia, has olvidado multiplicar por la longitud.\r
\r
**Corrección conceptual**  \r
Primero identifica el borde de contacto y después calcula la fuerza superficial con la relación correspondiente.\r
\r
### Error 2: pensar que toda capilaridad sube\r
**Por qué parece correcto**  \r
Los ejemplos escolares suelen usar agua y vidrio, donde el ascenso es positivo.\r
\r
**Por qué es incorrecto**  \r
El signo de [[h]] depende del mojado y del ángulo [[theta]]. Un líquido que no moja puede producir depresión capilar.\r
\r
**Señal de detección**  \r
El alumno escribe siempre [[h]] positiva aunque el enunciado indique menisco convexo o mal mojado.\r
\r
**Mini-ejemplo de contraste**\r
En mercurio sobre vidrio, la columna baja en lugar de subir. El coseno de un ángulo obtuso es negativo, reflejando esta depresión física.\r
\r
**Corrección conceptual**  \r
Lee el ángulo de contacto antes de decidir el signo físico del desplazamiento vertical.\r
\r
## Errores de modelo\r
### Error 1: usar Laplace para una superficie plana\r
**Por qué parece correcto**  \r
La fórmula de Laplace parece una regla universal para cualquier superficie.\r
\r
**Por qué es incorrecto**  \r
El salto [[dp]] depende de la curvatura. Si [[R]] es enorme, la interfaz se aproxima a plana y el efecto tiende a ser pequeño.\r
\r
**Señal de detección**  \r
Aparece un salto de presión grande en una superficie casi plana.\r
\r
**Mini-ejemplo de contraste**\r
En una piscina en calma, el salto de presión entre el aire y el agua es despreciable. En una gota microscópica, ese mismo salto puede ser de varios kilopascales.\r
\r
**Corrección conceptual**  \r
Usa Laplace solo si el radio de curvatura está físicamente definido.\r
\r
### Error 2: ignorar las dos caras de una película\r
**Por qué parece correcto**  \r
El dibujo muestra una sola línea de borde y parece natural usar una sola longitud.\r
\r
**Por qué es incorrecto**  \r
Una película jabonosa tiene dos interfaces. La fuerza medida puede incluir ambas caras.\r
\r
**Señal de detección**  \r
El resultado experimental es aproximadamente el doble del calculado.\r
\r
**Mini-ejemplo de contraste**\r
Si levantas un aro de una solución jabonosa, la película tiene una cara interna y otra externa. La fuerza total de tracción es el doble de la que tendría una sola interfaz.\r
\r
**Corrección conceptual**  \r
Antes de sustituir, decide cuántas interfaces reales actúan sobre el borde.\r
\r
## Errores matemáticos\r
### Error 1: usar diámetro en lugar de radio\r
**Por qué parece correcto**  \r
Muchos tubos se especifican por diámetro comercial.\r
\r
**Por qué es incorrecto**  \r
La fórmula de ascenso capilar usa radio [[r]], no diámetro. Usar diámetro reduce el resultado a la mitad.\r
\r
**Señal de detección**  \r
El ascenso calculado es sistemáticamente menor que el esperado.\r
\r
**Mini-ejemplo de contraste**\r
Si el enunciado dice "tubo de 2 mm", el valor de [[r]] es 1 mm. Sustituir 2 mm directamente en la fórmula de Jurin dará una altura que es exactamente la mitad de la real.\r
\r
**Corrección conceptual**  \r
Convierte diámetro a radio antes de usar la fórmula.\r
\r
### Error 2: mezclar unidades de tensión superficial\r
**Por qué parece correcto**  \r
Algunas tablas dan mN/m y el alumno introduce ese número como N/m.\r
\r
**Por qué es incorrecto**  \r
Un factor mil cambia [[F]], [[dp]] y [[h]] en el mismo factor.\r
\r
**Señal de detección**  \r
Las fuerzas o alturas salen mil veces mayores o menores.\r
\r
**Mini-ejemplo de contraste**\r
Si usas 72 (mN/m) en lugar de 0.072 (N/m) para el agua, el cálculo de la altura capilar podría dar metros en lugar de milímetros, un resultado físicamente imposible.\r
\r
**Corrección conceptual**  \r
Convierte siempre [[sigma]] a N/m antes de calcular.\r
\r
## Errores de interpretación\r
### Error 1: confundir viscosidad y tensión superficial\r
**Por qué parece correcto**  \r
Ambas propiedades parecen describir “resistencia” del líquido.\r
\r
**Por qué es incorrecto**  \r
viscosidad controla disipación por movimiento; [[sigma]] controla energía de interfaz. Una afecta al flujo, la otra a superficie y curvatura.\r
\r
**Señal de detección**  \r
El alumno usa viscosidad en un problema estático de gotas o capilares.\r
\r
**Mini-ejemplo de contraste**\r
Una gota de aceite y una de agua tienen viscosidades muy distintas, pero su forma estática depende de la tensión superficial y el mojado, no de lo rápido que fluirían.\r
\r
**Corrección conceptual**  \r
Pregunta si el fenómeno ocurre por movimiento interno o por geometría de interfaz.\r
\r
### Error 2: olvidar que la escala decide el dominio\r
**Por qué parece correcto**  \r
Las mismas fórmulas parecen aplicables a cualquier tamaño.\r
\r
**Por qué es incorrecto**  \r
La tensión superficial domina en escalas pequeñas; en escalas grandes dominan peso, presión o inercia.\r
\r
**Señal de detección**  \r
El resultado predice efectos capilares enormes en sistemas de gran radio.\r
\r
**Mini-ejemplo de contraste**\r
En un vaso de agua de 10 cm de ancho, el menisco capilar solo se nota en los bordes. Intentar calcular un "ascenso total" para el vaso completo usando la fórmula de Jurin es un error de escala.\r
\r
**Corrección conceptual**  \r
Compara [[r]], [[R]] y [[L]] con las escalas reales antes de confiar en el resultado.\r
\r
## Regla de autocontrol rápido\r
Antes de cerrar un ejercicio de tensión superficial, comprueba cuatro preguntas. ¿Estoy calculando una fuerza, un salto de presión o una altura? ¿He elegido bien la longitud, el radio o el ángulo? ¿Las unidades de [[sigma]] están en N/m? ¿El signo de [[h]] tiene sentido con el mojado? Si una respuesta no es clara, el cálculo aún no está cerrado.`;export{e as default};
