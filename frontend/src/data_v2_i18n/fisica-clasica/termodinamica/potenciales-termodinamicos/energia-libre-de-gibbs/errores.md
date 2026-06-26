## Errores conceptuales

### Error 1: Identificar proceso exotérmico con proceso espontáneo

**Por qué parece correcto**

La intuición cotidiana asocia "liberar energía" con "ocurrir por sí solo". La mayoría de los procesos observables a temperatura ambiente son exotérmicos y también espontáneos: la combustión, la corrosión del hierro, la precipitación de sales. Esta coincidencia parcial crea la regla mental errónea de que [[DeltaH]] negativa es suficiente para garantizar la espontaneidad. El mecanismo cognitivo es una **generalización excesiva** a partir de casos frecuentes pero no exhaustivos.

**Por qué es incorrecto**

El criterio correcto es [[DeltaG]] negativa, no [[DeltaH]] negativa. La ecuación de Gibbs resta el término [[T]]·[[DeltaS]] de [[DeltaH]]: si [[DeltaS]] es suficientemente negativa y [[T]] suficientemente alta, el producto [[T]]·[[DeltaS]] puede superar a [[DeltaH]] en valor absoluto, haciendo [[DeltaG]] positiva aunque [[DeltaH]] sea negativa. El proceso es entonces no espontáneo a pesar de ser exotérmico.

**Señal de detección**

El alumno aplica el criterio de espontaneidad mirando únicamente el signo de [[DeltaH]] sin calcular [[DeltaG]]. En el enunciado o resolución aparece la conclusión "es exotérmico, por tanto espontáneo" sin evaluar el término entrópico.

**Corrección conceptual**

La espontaneidad a P y T constantes depende exclusivamente del signo de [[DeltaG]], que combina las contribuciones de [[DeltaH]] y de [[T]]·[[DeltaS]]. Solo cuando [[DeltaS]] es positiva y [[DeltaH]] es negativa se garantiza la espontaneidad a cualquier temperatura. En todos los demás casos hay que calcular [[DeltaG]] explícitamente.

**Mini-ejemplo de contraste**

La formación de cristales de hielo a partir de agua líquida por debajo de 273 K es espontánea a pesar de que [[DeltaH]] es negativa y [[DeltaS]] es negativa (el agua pierde desorden al cristalizar). Por encima de 273 K, exactamente el mismo proceso —con el mismo [[DeltaH]] negativo— ya no es espontáneo porque el término [[T]]·[[DeltaS]] negativo supera al [[DeltaH]] negativo y [[DeltaG]] resulta positiva.

---

### Error 2: Confundir espontaneidad con velocidad de reacción

**Por qué parece correcto**

En la experiencia cotidiana, los procesos que "quieren" ocurrir suelen ocurrir rápidamente. Un estudiante que ha calculado [[DeltaG]] muy negativa puede esperar que la reacción se complete en segundos o minutos. La analogía con la caída de un objeto pesado refuerza la idea: si la fuerza es grande, la caída es rápida.

**Por qué es incorrecto**

La termodinámica describe el estado inicial y final; la cinética describe el camino y la velocidad. [[DeltaG]] negativa garantiza que el proceso **puede** ocurrir espontáneamente, pero no dice nada sobre cuán rápido lo hará. La velocidad la controla la **energía de activación**, que puede ser arbitrariamente alta incluso para procesos con [[DeltaG]] muy negativa. El diamante tiene una [[DeltaG]] ligeramente negativa respecto al grafito a condiciones normales, pero la transformación no ocurre a ninguna escala temporal humana por la altísima barrera cinética.

**Señal de detección**

El alumno usa el resultado de [[DeltaG]] negativa para afirmar que la reacción "ocurrirá" o "está ocurriendo", sin distinguir entre predicción termodinámica y predicción cinética.

**Corrección conceptual**

[[DeltaG]] es un criterio termodinámico de dirección, no de velocidad. Para predecir la velocidad se necesitan datos de cinética: constante de velocidad, energía de activación, catalizadores. Un proceso puede ser termodinámicamente favorable pero cinéticamente inerte durante millones de años.

**Mini-ejemplo de contraste**

La combustión de una mezcla de hidrógeno y oxígeno tiene [[DeltaG]] enormemente negativa a temperatura ambiente, pero la mezcla puede almacenarse indefinidamente sin reaccionar. Solo con una chispa (energía de activación) se desencadena la reacción. La termodinámica predijo la dirección; la cinética explica por qué no ocurrió sola.

---

## Errores de modelo

### Error 1: Ignorar la dependencia de [[DeltaH]] y [[DeltaS]] con la temperatura

**Por qué parece correcto**

En el modelo estándar, [[DeltaH]] y [[DeltaS]] se tratan como constantes. Los ejercicios de iniciación siempre proporcionan estos valores como datos fijos. El alumno aprende la ecuación con constantes y generaliza que siempre son constantes, sin percibir que es una aproximación.

**Por qué es incorrecto**

Las capacidades caloríficas de los sistemas reales dependen de [[T]], y [[DeltaH]] es la integral de esa diferencia de capacidades. Para rangos de temperatura superiores a 200 K o para procesos que atraviesan cambios de fase, [[DeltaH]] y [[DeltaS]] varían significativamente, la recta [[DeltaG]] vs [[T]] se curva, y [[T_inv]] calculada con los valores a temperatura estándar puede diferir en decenas o cientos de kelvin del valor real.

**Señal de detección**

La predicción de [[T_inv]] no coincide con la temperatura de equilibrio observada experimentalmente. La gráfica experimental de [[DeltaG]] vs [[T]] muestra curvatura sistemática que el modelo lineal no puede reproducir.

**Corrección conceptual**

Para rangos amplios de temperatura, aplicar la corrección de Kirchhoff integrando las diferencias de capacidades caloríficas. Cuando el problema especifica un rango de temperatura estrecho (menos de 100 K) y sin cambio de fase, la aproximación de constancia es válida.

**Mini-ejemplo de contraste**

Calcular [[T_inv]] de la evaporación del agua usando solo los valores estándar a 298 K da aproximadamente 373 K, que coincide bien con el punto de ebullición. Pero intentar calcular la temperatura de ebullición del tungsteno con el mismo método y los datos a 298 K produce un resultado que difiere en cientos de kelvin del valor real (3695 K), porque las capacidades caloríficas varían enormemente en ese rango.

---

## Errores matemáticos

### Error 1: Mezclar unidades entre [[DeltaH]] (kJ) y [[DeltaS]] (J/K)

**Por qué parece correcto**

Los valores tabulados de [[DeltaH]] suelen darse en kJ/mol y los de [[DeltaS]] en J/(mol·K). Un alumno que trabaja con números directamente de tabla, sin unificar unidades, puede multiplicar kilojoules por J/K, obteniendo un resultado que está desplazado por un factor de mil sin ningún aviso numérico obvio.

**Por qué es incorrecto**

En la ecuación de Gibbs, [[DeltaH]] y [[T]]·[[DeltaS]] deben expresarse en las mismas unidades antes de restar. Si [[DeltaH]] está en kJ y el producto [[T]]·[[DeltaS]] en J, la diferencia mezcla escalas y produce un resultado completamente erróneo. El valor de [[DeltaG]] obtenido puede ser mil veces mayor o menor que el correcto, lo que lleva a conclusiones opuestas sobre la espontaneidad.

**Señal de detección**

El valor de [[DeltaG]] calculado es del orden de megajulios cuando se esperan kilojulios, o del orden de julios cuando se esperan kilojulios. El término [[T]]·[[DeltaS]] a temperatura ambiente (298 K) con [[DeltaS]] en J/(mol·K) da decenas de kilojulios; si el resultado es decenas de julios, hay un factor de mil desplazado.

**Corrección conceptual**

Antes de sustituir, unificar todas las magnitudes en el mismo sistema de unidades: o todo en J y J/K, o todo en kJ y kJ/K. La conversión más segura es expresar [[DeltaH]] en J (multiplicar el valor en kJ por 1000) y [[DeltaS]] en J/K, y calcular [[DeltaG]] en J.

**Mini-ejemplo de contraste**

Para la disolución de NaCl, tomando [[DeltaH]] de 3.9 kJ/mol y [[DeltaS]] de 43 J/(mol·K) a 298 K: si se resta 3900 J menos el producto de 298 K por 43 J/K (que da 12814 J), el resultado correcto es negativo, indicando proceso espontáneo. Si erróneamente se usa [[DeltaH]] como 3.9 (en kJ, sin convertir) y se resta el producto de 298 por 43, el resultado da 12810 con signo incorrecto, concluyendo erróneamente que el proceso no es espontáneo.

---

## Errores de interpretación

### Error 1: Leer el signo de [[T_inv]] como indicador de espontaneidad en lugar de umbral de cambio

**Por qué parece correcto**

El alumno ve que [[T_inv]] tiene un valor numérico positivo o negativo (aunque fisicamente solo tiene sentido positivo) y lo interpreta directamente como si dijera algo sobre si el proceso es espontáneo o no, en lugar de leerlo como el umbral donde cambia el régimen de espontaneidad.

**Por qué es incorrecto**

[[T_inv]] es la temperatura a la que [[DeltaG]] vale cero; no es una medida de espontaneidad sino un marcador de transición. La espontaneidad a una temperatura dada se determina comparando [[T]] con [[T_inv]] y sabiendo la pendiente de la recta (el signo de [[DeltaS]]). Si [[DeltaS]] es positiva y [[T]] es mayor que [[T_inv]], el proceso es espontáneo; si es menor, no lo es. La confusión surge al no conectar [[T_inv]] con la ecuación completa de [[DeltaG]].

**Señal de detección**

El alumno calcula [[T_inv]] correctamente pero luego comete el error de afirmar que "como [[T_inv]] es positiva, el proceso es espontáneo" o "como [[T_inv]] es alta, el proceso no es espontáneo a temperatura ambiente", sin comparar [[T]] real con [[T_inv]] y sin considerar el signo de [[DeltaS]].

**Corrección conceptual**

[[T_inv]] divide el eje de temperaturas en dos regiones. La región donde el proceso es espontáneo depende del signo de [[DeltaS]]: si [[DeltaS]] es positiva, el proceso es espontáneo por encima de [[T_inv]]; si [[DeltaS]] es negativa, es espontáneo por debajo. Siempre comparar [[T]] de trabajo con [[T_inv]] y verificar el signo de la pendiente.

**Mini-ejemplo de contraste**

Para un proceso con [[DeltaH]] positiva de 10 000 J y [[DeltaS]] positiva de 50 J/K, la temperatura de inversión es 200 K. A 250 K (por encima de [[T_inv]]), [[DeltaG]] es negativa: proceso espontáneo. A 150 K (por debajo de [[T_inv]]), [[DeltaG]] es positiva: proceso no espontáneo. Un alumno que solo mire [[T_inv]] sin comparar con [[T]] real cometería el error de no concluir nada sobre la temperatura de trabajo.

---

## Regla de autocontrol rápido

Antes de entregar cualquier cálculo de [[DeltaG]] o [[T_inv]], verificar mentalmente cinco puntos:

1. Las unidades de [[DeltaH]] y [[DeltaS]] son coherentes: ambas en J y J/K, o ambas en kJ y kJ/K. Un factor de mil es el error más frecuente.
2. [[T]] está en kelvin, no en Celsius. Sumar 273.15 si es necesario.
3. El signo de [[DeltaG]] se lee según el criterio correcto: negativo es espontáneo, positivo es no espontáneo, cero es equilibrio.
4. Si se calculó [[T_inv]], comparar con la temperatura real del proceso y tener en cuenta el signo de [[DeltaS]] para concluir sobre la espontaneidad en esa temperatura específica.
5. No confundir espontaneidad (criterio termodinámico de [[DeltaG]]) con velocidad de reacción (criterio cinético de energía de activación).

Aplicar estos cinco puntos detecta más del 90 % de los errores más frecuentes en el cálculo de la energía libre de Gibbs.
