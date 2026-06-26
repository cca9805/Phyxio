# Viscosidad - Errores Comunes y Guía de Autocontrol

## Errores conceptuales

### Error 1: Confundir viscosidad con densidad
**por qué parece correcto**: Ambos describen una propiedad "intrínseca" del fluido que afecta a cómo percibimos su movimiento. Intuitivamente, algo "pesado" parece más difícil de mover.
**por qué es incorrecto**: La densidad [[rho]] es una medida de la inercia (masa por volumen), mientras que la viscosidad [[mu]] es una medida de la fricción interna (resistencia al deslizamiento entre capas).
**señal de detección**: Suposición de que el mercurio es más difícil de bombear que el aceite ligero solo por ser más denso.
**corrección conceptual**: La densidad escala con la inercia y la viscosidad dinámica escala con la disipación de energía térmica. Son propiedades físicas de orígenes distintos.
**mini-ejemplo**: El mercurio es 13.6 veces más denso que el agua, pero su viscosidad es comparable. Un aceite de motor es menos denso que el agua pero cientos de veces más viscoso.

### Error 2: Ignorar la condición de no deslizamiento
**por qué parece correcto**: Es más sencillo suponer que todo el fluido en una tubería o canal se mueve a la misma velocidad constante (perfil plano).
**por qué es incorrecto**: Los fluidos viscosos reales se "adhieren" a las paredes sólidas a nivel molecular; su velocidad relativa en la superficie de contacto es obligatoriamente cero.
**señal de detección**: Obtener resultados de esfuerzo cortante [[tau]] nulos en superficies móviles o proponer perfiles de velocidad constantes hasta la pared.
**corrección conceptual**: La viscosidad genera un gradiente de velocidad [[dudy]] que es máximo precisamente en las paredes del conducto.
**mini-ejemplo**: En una manguera, el agua del centro viaja a máxima velocidad, mientras que el agua en contacto con el plástico está estática. Sin este gradiente, no habría rozamiento ni pérdida de presión.

## Errores de modelo

### Error 3: Aplicar leyes Newtonianas a fluidos complejos (No-Newtonianos)
**por qué parece correcto**: La ley de Newton es la fórmula estándar

{{f:tau_mu}}

y parece aplicable a cualquier líquido por defecto.
**por qué es incorrecto**: Muchos fluidos cotidianos e industriales (sangre, pintura, lodos, polímeros) tienen una viscosidad que cambia según la intensidad del esfuerzo aplicado.
**señal de detección**: Observar que la resistencia al flujo no aumenta de forma proporcional cuando se duplica la velocidad de bombeo.
**corrección conceptual**: Identificar si el fluido es pseudoplástico (se ablanda) o dilatante (se endurece) antes de usar una [[mu]] constante en los cálculos.
**mini-ejemplo**: La mezcla de almidón de maíz con agua se comporta como un líquido si se mueve despacio, pero actúa como un sólido quebradizo ante un impacto fuerte, violando la linealidad de Newton.

## Errores matemáticos

### Error 4: Mezclar viscosidad dinámica y cinemática en las fórmulas
**por qué parece correcto**: En muchos manuales técnicos ambos términos se llaman simplemente "viscosidad", lo que induce a error.
**por qué es incorrecto**: La dinámica [[mu]] mide la resistencia a la deformación (Fuerza), mientras que la cinemática [[nu]] mide la difusión de la cantidad de movimiento (Movimiento). Tienen dimensiones incompatibles.
**señal de detección**: Inconsistencia dimensional (obtener Newtons cuando se deberían obtener metros) al resolver el Número de Reynolds o la fuerza de arrastre.
**corrección conceptual**: Recordar siempre la relación

{{f:nu_mu}}

. Nunca sustituya una por otra sin aplicar el factor de densidad [[rho]].
**mini-ejemplo**: Si usa [[nu]] en lugar de [[mu]] para calcular el esfuerzo sobre un cojinete de agua, el error será de un factor de 1000 (la densidad del agua).

## Errores de interpretación

### Error 5: Olvidar el efecto radical de la temperatura
**por qué parece correcto**: Tratar la viscosidad como una constante tabulada fija del material, similar a la constante de gravitación.
**por qué es incorrecto**: La viscosidad es extraordinariamente sensible al calor. En líquidos, un aumento de pocos grados puede reducir la viscosidad a la mitad.
**señal de detección**: Discrepancias masivas entre los cálculos teóricos y el comportamiento real de una maquinaria en marcha.
**corrección conceptual**: En líquidos, el calor aumenta la distancia intermolecular (baja [[mu]]); en gases, aumenta las colisiones (sube [[mu]]).
**mini-ejemplo**: Un motor de coche arrancado en frío sufre más desgaste porque el aceite es demasiado viscoso para fluir por los conductos estrechos hasta que se calienta.

## Regla de autocontrol rápido
Antes de entregar un cálculo de viscosidad, verifique estos tres puntos:
1.  **Consistencia dimensional**: ¿Mis unidades de viscosidad dinámica están en Pa·s (o kg/(m·s))? Si tengo centipoises (cP), ¿he multiplicado por $10^{-3}$?
2.  **Sentido físico de la fuerza**: ¿La fuerza que he calculado se opone al movimiento? Si el resultado sugiere que el fluido "ayuda" al objeto a moverse, hay un error de signo en el gradiente de velocidad [[dudy]].
3.  **Chequeo de régimen**: ¿He verificado que el flujo es laminar? Si el número de Reynolds es muy alto, mi cálculo basado en viscosidad molecular será una subestimación grosera de la resistencia real.