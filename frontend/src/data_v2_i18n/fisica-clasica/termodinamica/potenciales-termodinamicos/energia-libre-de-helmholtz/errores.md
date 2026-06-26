## Errores conceptuales

### Error 1: Aplicar el criterio de Gibbs en un recipiente rígido

**Por qué parece correcto**

La mayoría de los libros de texto enfatizan la energía libre de Gibbs (ΔG) como criterio universal de espontaneidad. El alumno aprende que «la energía libre negativa implica proceso espontáneo» y generaliza este criterio a cualquier situación, sin distinguir si la presión o el volumen permanecen constantes. El mecanismo cognitivo es una **generalización excesiva** del criterio más frecuentemente enseñado.

**Por qué es incorrecto**

Gibbs asume presión constante del entorno; Helmholtz asume volumen constante. En un recipiente rígido termostatado, la presión interna cambia durante el proceso y el trabajo de expansión no está disponible. El criterio correcto es [[DeltaA]] negativa, no la energía libre de Gibbs (ΔG) negativa. Usar Gibbs en un sistema confinado puede llevar a conclusiones opuestas sobre la espontaneidad.

**Señal de detección**

El enunciado menciona «recipiente cerrado», «volumen fijo», «bomba calorimétrica» o «autoclave sellada», pero la resolución aplica la ecuación de Gibbs con la entalpía (ΔH) en lugar de [[DeltaU]].

**Corrección conceptual**

Identificar primero las condiciones de frontera: presión constante → criterio de Gibbs con la entalpía (ΔH); volumen constante → criterio de Helmholtz con [[DeltaU]]. La espontaneidad a V y T constantes depende exclusivamente del signo de [[DeltaA]].

**Mini-ejemplo de contraste**

La condensación de vapor en un matraz sellado a 350 K tiene [[DeltaU]] negativa y [[DeltaS]] negativa. A esa temperatura, [[DeltaA]] puede ser positiva (no espontánea la condensación) aunque la energía libre de Gibbs (ΔG) sea negativa. El alumno que aplica Gibbs concluiría erróneamente que la condensación es espontánea.

---

### Error 2: Confundir espontaneidad con velocidad de reacción

**Por qué parece correcto**

En la experiencia cotidiana, los procesos que «quieren» ocurrir suelen ocurrir rápidamente. Un estudiante que ha calculado [[DeltaA]] muy negativa puede esperar que la reacción se complete en segundos. La analogía con la caída de un objeto pesado refuerza la idea.

**Por qué es incorrecto**

La termodinámica describe el estado inicial y final; la cinética describe el camino y la velocidad. [[DeltaA]] negativa garantiza que el proceso **puede** ocurrir espontáneamente, pero no dice nada sobre cuán rápido lo hará. La velocidad la controla la **energía de activación**.

**Señal de detección**

El alumno usa el resultado de [[DeltaA]] negativa para afirmar que la reacción «ocurrirá» o «está ocurriendo», sin distinguir entre predicción termodinámica y predicción cinética.

**Corrección conceptual**

[[DeltaA]] es un criterio termodinámico de dirección, no de velocidad. Para predecir la velocidad se necesitan datos de cinética: constante de velocidad, energía de activación, catalizadores.

**Mini-ejemplo de contraste**

La transformación del diamante en grafito en un recipiente sellado tiene [[DeltaA]] ligeramente negativa a condiciones normales, pero la transformación no ocurre a ninguna escala temporal humana por la altísima barrera cinética.

---

## Errores de modelo

### Error 1: Ignorar la dependencia de [[DeltaU]] y [[DeltaS]] con la temperatura

**Por qué parece correcto**

En el modelo estándar, [[DeltaU]] y [[DeltaS]] se tratan como constantes. Los ejercicios de iniciación siempre proporcionan estos valores como datos fijos. El alumno generaliza que siempre son constantes.

**Por qué es incorrecto**

Las capacidades caloríficas dependen de [[T]], y [[DeltaU]] es la integral de esa diferencia. Para rangos superiores a 200 K o procesos con cambios de fase, [[DeltaU]] y [[DeltaS]] varían significativamente, la recta [[DeltaA]] vs [[T]] se curva, y [[T_inv]] calculada puede diferir en decenas de kelvin del valor real.

**Señal de detección**

La predicción de [[T_inv]] no coincide con la temperatura de equilibrio observada. La gráfica experimental de [[DeltaA]] vs [[T]] muestra curvatura sistemática.

**Corrección conceptual**

Para rangos amplios de temperatura, aplicar la corrección de Kirchhoff. Cuando el problema especifica un rango estrecho (menos de 100 K) y sin cambio de fase, la aproximación de constancia es válida.

**Mini-ejemplo de contraste**

Calcular [[T_inv]] de la evaporación de agua confinada usando solo valores a 298 K da aproximadamente 373 K, que coincide bien. Pero intentar calcular la temperatura de ebullición del tungsteno con el mismo método produce un resultado que difiere en cientos de kelvin del valor real.

---

## Errores matemáticos

### Error 1: Mezclar unidades entre [[DeltaU]] (kJ) y [[DeltaS]] (J/K)

**Por qué parece correcto**

Los valores tabulados de [[DeltaU]] suelen darse en kJ/mol y los de [[DeltaS]] en J/(mol·K). Un alumno que trabaja con números directamente de tabla, sin unificar unidades, obtiene un resultado desplazado por un factor de mil.

**Por qué es incorrecto**

En la ecuación de Helmholtz, [[DeltaU]] y [[T]]·[[DeltaS]] deben expresarse en las mismas unidades antes de restar. Si [[DeltaU]] está en kJ y el producto [[T]]·[[DeltaS]] en J, la diferencia mezcla escalas y produce un resultado completamente erróneo.

**Señal de detección**

El valor de [[DeltaA]] calculado es del orden de megajulios cuando se esperan kilojulios, o del orden de julios cuando se esperan kilojulios.

**Corrección conceptual**

Antes de sustituir, unificar todas las magnitudes en el mismo sistema de unidades: o todo en J y J/K, o todo en kJ y kJ/K.

**Mini-ejemplo de contraste**

Para una isomerización con [[DeltaU]] de 5.2 kJ/mol y [[DeltaS]] de 12 J/(mol·K) a 298 K: si se resta 5200 J menos el producto de 298 K por 12 J/K (que da 3576 J), el resultado correcto es positivo. Si erróneamente se usa [[DeltaU]] como 5.2 sin convertir, el resultado da signo incorrecto.

---

## Errores de interpretación

### Error 1: Interpretar [[DeltaA]] negativa como «liberación de calor»

**Por qué parece correcto**

El alumno asocia «energía libre negativa» con «el sistema libera energía al entorno», confundiendo [[DeltaA]] con el calor intercambiado. La terminología «energía libre» sugiere liberación.

**Por qué es incorrecto**

[[DeltaA]] negativa indica que el proceso es espontáneo y que puede extraerse trabajo no expansivo máximo, pero no implica necesariamente que el sistema libere calor. Un proceso endotérmico ([[DeltaU]] positiva) puede ser espontáneo si [[DeltaS]] es suficientemente positiva para hacer [[DeltaA]] negativa.

**Señal de detección**

El alumno concluye «el proceso es exotérmico porque [[DeltaA]] es negativa» sin analizar el signo de [[DeltaU]] por separado.

**Corrección conceptual**

[[DeltaA]] combina energía interna y entropía. Un proceso espontáneo puede absorber calor del entorno si la ganancia entrópica compensa el coste energético. Analizar [[DeltaU]] y [[DeltaS]] por separado antes de interpretar [[DeltaA]].

**Mini-ejemplo de contraste**

La disolución endotérmica de nitrato de amonio en agua dentro de un calorímetro sellado tiene [[DeltaU]] positiva pero [[DeltaS]] muy positiva, resultando en [[DeltaA]] negativa: el proceso es espontáneo aunque enfríe la solución.

---

## Regla de autocontrol rápido

Antes de cerrar cualquier problema de Helmholtz, verificar en este orden:

1. ¿El sistema está a volumen y temperatura constantes? Si no, reconsiderar si Helmholtz es el criterio adecuado.
2. ¿[[T]] está en kelvin? Si el valor es menor de 200, probablemente está en Celsius.
3. ¿[[DeltaU]] y [[DeltaS]] están en unidades coherentes (ambos en J o ambos en kJ)?
4. ¿El signo de [[DeltaA]] es coherente con la tabla de cuatro casos de signos de [[DeltaU]] y [[DeltaS]]?
5. Si se calculó [[T_inv]], ¿es positiva? Si es negativa, revisar signos de entrada.

Si alguna verificación falla, el resultado de [[DeltaA]] no es fiable y la interpretación de espontaneidad debe posponerse hasta corregir el error.
