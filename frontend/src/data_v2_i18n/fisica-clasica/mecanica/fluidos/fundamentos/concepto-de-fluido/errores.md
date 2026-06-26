# Errores comunes en el concepto de fluido

## Errores conceptuales

### Error 1: Confundir viscosidad con densidad
**Por qué parece correcto**: Existe la idea intuitiva de que un fluido "pesado" (denso) debe ser también "espeso" (viscoso).
**Por qué es incorrecto**: La densidad [[rho]] mide la masa por unidad de volumen (inercia), mientras que la viscosidad [[mu]] mide la resistencia a la deformación (fricción). Son propiedades independientes.
**Señal de detección**: Creer que el mercurio (muy denso) es más viscoso que el aceite de motor, cuando es al revés.
**Corrección conceptual**: Piensa en la densidad como "cuánto pesa" y en la viscosidad como "qué tanto se resiste a ser derramado".
**Mini-ejemplo**: El aceite flota en el agua (es menos denso), pero fluye mucho más lentamente que el agua (es más viscoso).

### Error 2: Pensar que los fluidos no ofrecen ninguna resistencia al corte
**Por qué parece correcto**: Como los fluidos no mantienen su forma, se tiende a pensar que no hay ninguna fuerza oponiéndose al movimiento lateral.
**Por qué es incorrecto**: Los fluidos ofrecen una resistencia dinámica. No se detienen ante el esfuerzo cortante [[tau]], pero requieren una fuerza finita para mantener una velocidad de deformación determinada.
**Señal de detección**: Olvidar incluir la fuerza viscosa en el balance de fuerzas de un objeto moviéndose en un fluido.
**Corrección conceptual**: Un fluido ofrece resistencia **mientras se mueve**; un sólido elástico ofrece resistencia **mientras está deformado**.
**Mini-ejemplo**: Es más difícil mover la mano rápidamente bajo el agua que hacerlo lentamente, debido a que el esfuerzo [[tau]] aumenta con el gradiente [[du_dy]].

## Errores de modelo

### Error 1: Aplicar la ley de Newton a fluidos no-newtonianos
**Por qué parece correcto**: La fórmula la ley de Newton de la viscosidad.
**Por qué es incorrecto**: Muchos fluidos complejos (sangre, polímeros, pastas) tienen una viscosidad [[mu]] que cambia según la fuerza aplicada. Usar un valor constante de viscosidad lleva a errores masivos.
**Señal de detección**: El esfuerzo medido no es proporcional a la velocidad aplicada.
**Corrección conceptual**: Verifica siempre si el fluido es newtoniano antes de usar la ley simple de viscosidad.
**Mini-ejemplo**: El ketchup no sale del bote hasta que se le da un golpe fuerte (superar el esfuerzo de fluencia), lo cual contradice el modelo newtoniano lineal.

### Error 2: Ignorar la condición de no deslizamiento
**Por qué parece correcto**: Resulta difícil imaginar que la capa de fluido justo al lado de una pared esté "pegada" y tenga velocidad cero.
**Por qué es incorrecto**: Las fuerzas intermoleculares entre el fluido y el sólido son tan fuertes que obligan a la primera capa a detenerse. Ignorar esto impide calcular correctamente el gradiente de velocidad [[du_dy]].
**Señal de detección**: Dibujar perfiles de velocidad donde el fluido tiene una velocidad distinta de cero justo en la superficie fija.
**Corrección conceptual**: La velocidad del fluido en la pared es **siempre** igual a la velocidad de la pared.
**Mini-ejemplo**: El polvo permanece en las aspas de un ventilador porque el aire justo en la superficie de la aspa no se mueve respecto a ella.

## Errores matemáticos

### Error 1: Confundir viscosidad dinámica con cinemática
**Por qué parece correcto**: Ambas miden "viscosidad" y se usan en fórmulas similares.
**Por qué es incorrecto**: La viscosidad dinámica [[mu]] mide la fricción interna pura, mientras que la cinemática (la relaci?n entre viscosidad din?mica, densidad y viscosidad cinem?tica) incluye la densidad. Intercambiarlas rompe la consistencia dimensional de la ley de Newton.
**Señal de detección**: Obtener resultados de esfuerzo [[tau]] con unidades incoherentes.
**Corrección conceptual**: Asegúrate de usar [[mu]] (Pa s) cuando trabajes con fuerzas y esfuerzos directos.
**Mini-ejemplo**: En la ley de Newton la ley de Newton de la viscosidad), si usas viscosidad cinemática el resultado no será en Pascales.

## Errores de interpretación

### Error 1: Tratar al fluido como un conjunto de partículas sólidas
**Por qué parece correcto**: Es más fácil visualizar el movimiento de "bolitas" que el de un medio continuo.
**Por qué es incorrecto**: En mecánica de fluidos básica, el fluido es un **continuo**. Ignorar los gradientes internos [[du_dy]] y tratarlo como una masa sólida impide entender por qué existe la viscosidad.
**Señal de detección**: Intentar aplicar cinemática de sólidos (velocidad única para todo el cuerpo) a un flujo con fricción.
**Corrección conceptual**: El fluido siempre tiene un perfil de velocidades; diferentes capas se mueven a diferentes velocidades.
**Mini-ejemplo**: Si tratas al aceite como un sólido, no podrías explicar por qué una placa resbala sobre él con mayor o menor dificultad según el espesor [[h]].

## Regla de autocontrol rápido
**"Fluido = Deformación Continua"**. Si te encuentras analizando un sistema donde el material se deforma y luego se queda quieto manteniendo la fuerza, no estás tratando con un fluido, sino con un sólido elástico. El fluido solo encuentra el equilibrio cuando la fuerza motora se anula o se equilibra con la fricción viscosa en movimiento.
