## Errores conceptuales
### Error 1: creer que la tensión superficial es una fuerza total
**Por qué parece correcto**  
La unidad N/m contiene newton y el alumno interpreta [[sigma]] como si ya fuera una fuerza. Es una analogía incorrecta con peso o normal.

**Por qué es incorrecto**  
[[sigma]] debe multiplicarse por una longitud efectiva [[L]] para obtener [[F]]. Sin geometría no hay fuerza total.

**Señal de detección**  
El cálculo da newton por metro cuando el problema pide newton.

**Mini-ejemplo de contraste**
Si calculas la fuerza sobre un aro de 10 cm, el resultado debe ser distinto que sobre uno de 20 cm para el mismo líquido. Si no cambia, has olvidado multiplicar por la longitud.

**Corrección conceptual**  
Primero identifica el borde de contacto y después calcula la fuerza superficial con la relación correspondiente.

### Error 2: pensar que toda capilaridad sube
**Por qué parece correcto**  
Los ejemplos escolares suelen usar agua y vidrio, donde el ascenso es positivo.

**Por qué es incorrecto**  
El signo de [[h]] depende del mojado y del ángulo [[theta]]. Un líquido que no moja puede producir depresión capilar.

**Señal de detección**  
El alumno escribe siempre [[h]] positiva aunque el enunciado indique menisco convexo o mal mojado.

**Mini-ejemplo de contraste**
En mercurio sobre vidrio, la columna baja en lugar de subir. El coseno de un ángulo obtuso es negativo, reflejando esta depresión física.

**Corrección conceptual**  
Lee el ángulo de contacto antes de decidir el signo físico del desplazamiento vertical.

## Errores de modelo
### Error 1: usar Laplace para una superficie plana
**Por qué parece correcto**  
La fórmula de Laplace parece una regla universal para cualquier superficie.

**Por qué es incorrecto**  
El salto [[dp]] depende de la curvatura. Si [[R]] es enorme, la interfaz se aproxima a plana y el efecto tiende a ser pequeño.

**Señal de detección**  
Aparece un salto de presión grande en una superficie casi plana.

**Mini-ejemplo de contraste**
En una piscina en calma, el salto de presión entre el aire y el agua es despreciable. En una gota microscópica, ese mismo salto puede ser de varios kilopascales.

**Corrección conceptual**  
Usa Laplace solo si el radio de curvatura está físicamente definido.

### Error 2: ignorar las dos caras de una película
**Por qué parece correcto**  
El dibujo muestra una sola línea de borde y parece natural usar una sola longitud.

**Por qué es incorrecto**  
Una película jabonosa tiene dos interfaces. La fuerza medida puede incluir ambas caras.

**Señal de detección**  
El resultado experimental es aproximadamente el doble del calculado.

**Mini-ejemplo de contraste**
Si levantas un aro de una solución jabonosa, la película tiene una cara interna y otra externa. La fuerza total de tracción es el doble de la que tendría una sola interfaz.

**Corrección conceptual**  
Antes de sustituir, decide cuántas interfaces reales actúan sobre el borde.

## Errores matemáticos
### Error 1: usar diámetro en lugar de radio
**Por qué parece correcto**  
Muchos tubos se especifican por diámetro comercial.

**Por qué es incorrecto**  
La fórmula de ascenso capilar usa radio [[r]], no diámetro. Usar diámetro reduce el resultado a la mitad.

**Señal de detección**  
El ascenso calculado es sistemáticamente menor que el esperado.

**Mini-ejemplo de contraste**
Si el enunciado dice "tubo de 2 mm", el valor de [[r]] es 1 mm. Sustituir 2 mm directamente en la fórmula de Jurin dará una altura que es exactamente la mitad de la real.

**Corrección conceptual**  
Convierte diámetro a radio antes de usar la fórmula.

### Error 2: mezclar unidades de tensión superficial
**Por qué parece correcto**  
Algunas tablas dan mN/m y el alumno introduce ese número como N/m.

**Por qué es incorrecto**  
Un factor mil cambia [[F]], [[dp]] y [[h]] en el mismo factor.

**Señal de detección**  
Las fuerzas o alturas salen mil veces mayores o menores.

**Mini-ejemplo de contraste**
Si usas 72 (mN/m) en lugar de 0.072 (N/m) para el agua, el cálculo de la altura capilar podría dar metros en lugar de milímetros, un resultado físicamente imposible.

**Corrección conceptual**  
Convierte siempre [[sigma]] a N/m antes de calcular.

## Errores de interpretación
### Error 1: confundir viscosidad y tensión superficial
**Por qué parece correcto**  
Ambas propiedades parecen describir “resistencia” del líquido.

**Por qué es incorrecto**  
viscosidad controla disipación por movimiento; [[sigma]] controla energía de interfaz. Una afecta al flujo, la otra a superficie y curvatura.

**Señal de detección**  
El alumno usa viscosidad en un problema estático de gotas o capilares.

**Mini-ejemplo de contraste**
Una gota de aceite y una de agua tienen viscosidades muy distintas, pero su forma estática depende de la tensión superficial y el mojado, no de lo rápido que fluirían.

**Corrección conceptual**  
Pregunta si el fenómeno ocurre por movimiento interno o por geometría de interfaz.

### Error 2: olvidar que la escala decide el dominio
**Por qué parece correcto**  
Las mismas fórmulas parecen aplicables a cualquier tamaño.

**Por qué es incorrecto**  
La tensión superficial domina en escalas pequeñas; en escalas grandes dominan peso, presión o inercia.

**Señal de detección**  
El resultado predice efectos capilares enormes en sistemas de gran radio.

**Mini-ejemplo de contraste**
En un vaso de agua de 10 cm de ancho, el menisco capilar solo se nota en los bordes. Intentar calcular un "ascenso total" para el vaso completo usando la fórmula de Jurin es un error de escala.

**Corrección conceptual**  
Compara [[r]], [[R]] y [[L]] con las escalas reales antes de confiar en el resultado.

## Regla de autocontrol rápido
Antes de cerrar un ejercicio de tensión superficial, comprueba cuatro preguntas. ¿Estoy calculando una fuerza, un salto de presión o una altura? ¿He elegido bien la longitud, el radio o el ángulo? ¿Las unidades de [[sigma]] están en N/m? ¿El signo de [[h]] tiene sentido con el mojado? Si una respuesta no es clara, el cálculo aún no está cerrado.