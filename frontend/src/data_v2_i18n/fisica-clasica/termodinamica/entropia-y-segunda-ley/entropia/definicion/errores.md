# Errores frecuentes

## Errores conceptuales

### Error 1: Usar temperatura en Celsius en lugar de kelvin en la fórmula de Clausius

**Por qué parece correcto**

El enunciado del problema menciona una temperatura de, por ejemplo, 27 °C o 100 °C. El alumno sustituye directamente ese número en [[T_abs]] sin convertir. La fórmula [[DeltaS]] = [[Q_rev]] / [[T_abs]] sigue teniendo el mismo aspecto y produce un número.

**Por qué es incorrecto**

La definición de Clausius usa la temperatura termodinámica absoluta: [[T_abs]] es la temperatura en la escala kelvin, que comienza en el cero absoluto (−273.15 °C). Usar 27 en lugar de 300 K sobreestima [[DeltaS]] en un factor de 300/27 ≈ 11. Usar 100 en lugar de 373 K sobreestima [[DeltaS]] en un factor de 3.73. Ambos errores son sistemáticos y grandes.

**Señal de detección**

Si [[DeltaS]] calculado es mayor de 100 J/K para procesos cotidianos (unos pocos gramos o moles de sustancia a temperatura ambiente), sospechar de error en la unidad de [[T_abs]]. Si [[DeltaS]] de fusión del hielo resulta mayor de 50 J/K por gramo, hay error de escala de temperatura.

**Corrección conceptual**

Siempre convertir [[T_abs]] a kelvin antes de calcular: [[T_abs]] (K) = T (°C) + 273.15. La temperatura de 0 °C equivale a 273 K; la de 100 °C equivale a 373 K. El cero kelvin (−273.15 °C) es el punto donde la energía térmica es mínima y [[DeltaS]] divergiría para cualquier calor finito.

**Mini-ejemplo de contraste**

Fusión de 1 mol de hielo: con [[Q_rev]] de 6010 J y [[T_abs]] de 273 K, la definición de Clausius da aproximadamente 22 J/(mol K). Si se introduce cero como si fuera kelvin, aparece una division imposible. Con la temperatura absoluta correcta, el resultado vuelve al valor tabulado.

---

### Error 2: Confundir [[DeltaS]] del sistema con [[DeltaS]] del universo

**Por qué parece correcto**

La segunda ley se enuncia como "la entropía no puede disminuir". El alumno interpreta que [[DeltaS]] debe ser siempre positivo o cero, y se alarma si obtiene [[DeltaS]] negativo para un proceso de enfriamiento o condensación.

**Por qué es incorrecto**

La segunda ley establece que [[DeltaS]]_universo ≥ 0, no que [[DeltaS]]_sistema ≥ 0. El sistema puede perfectamente perder entropía ([[DeltaS]]_sistema < 0) si el entorno gana más entropía de la que pierde el sistema. Un refrigerador, una condensación de vapor, o la solidificación de un metal fundido producen [[DeltaS]]_sistema < 0, pero en todos los casos [[DeltaS]]_entorno > |[[DeltaS]]_sistema|.

**Señal de detección**

El alumno escribe "esto no puede ser porque [[DeltaS]] es negativo" para un proceso que físicamente reduce la entropía del sistema (enfriamiento, condensación, cristalización). O bien calcula solo [[DeltaS]]_sistema y lo compara con la segunda ley sin calcular [[DeltaS]]_entorno.

**Corrección conceptual**

Para verificar la segunda ley, calcular [[DeltaS]]_universo = [[DeltaS]]_sistema + [[DeltaS]]_entorno. El entorno absorbe [[Q_rev]] a la temperatura [[T_abs]]_entorno: [[DeltaS]]_entorno = −[[Q_rev]] / [[T_abs]]_entorno. Solo si [[T_abs]]_entorno = [[T_abs]]_sistema (reservorio al mismo nivel térmico) se tiene [[DeltaS]]_universo = 0 (proceso reversible).

**Mini-ejemplo de contraste**

Condensación de 1 mol de vapor de agua a 100 °C (373 K): [[Q_rev]]_sistema = −40650 J, [[DeltaS]]_sistema = −40650 / 373 ≈ −109 J/(mol·K). El entorno (también a 373 K) absorbe +40650 J: [[DeltaS]]_entorno = +40650 / 373 ≈ +109 J/(mol·K). [[DeltaS]]_universo = 0: proceso reversible a temperatura constante. Sin error.

---

## Errores de modelo

### Error 3: Aplicar la fórmula isotérmica a un proceso de calentamiento sensible

**Por qué parece correcto**

El alumno tiene [[Q_rev]] (calor suministrado a un cuerpo que se calienta de 20 °C a 80 °C) y [[T_abs]] (alguna temperatura del proceso). Aplica [[DeltaS]] = [[Q_rev]] / [[T_abs]] directamente usando la temperatura media o la temperatura inicial.

**Por qué es incorrecto**

La relación de Clausius es válida solo cuando [[T_abs]] es constante durante el proceso. Si [[T_abs]] varía (calentamiento sensible), se necesita un modelo integrado de calentamiento, no la división isotérmica directa. Usar la temperatura media produce un error que puede alcanzar el 5-10% para rangos de temperatura amplios.

**Señal de detección**

El enunciado proporciona una temperatura inicial y una temperatura final distintas sin mencionar cambio de fase. El alumno usa una única [[T_abs]] en la fórmula de Clausius directa.

**Corrección conceptual**

Identificar el tipo de proceso antes de calcular. Si T varía y no hay cambio de fase, usar la fórmula logarítmica del modelo extendido. Si hay cambio de fase a temperatura constante, usar la fórmula isotérmica con [[T_abs]] igual a la temperatura de transición.

**Mini-ejemplo de contraste**

Calentamiento de 1 kg de agua de 293 K a 373 K: el modelo integrado con capacidad calorífica del agua da cerca de 1000 J/K. Si se usa una temperatura media en la relación isotérmica, el valor queda cercano en este rango, pero el procedimiento no es general y falla para intervalos más amplios.

---

## Errores matemáticos

### Error 4: Olvidar el signo de [[Q_rev]] y obtener [[DeltaS]] con signo incorrecto

**Por qué parece correcto**

El alumno calcula el valor absoluto del calor latente de un proceso y lo divide por [[T_abs]], obteniendo [[DeltaS]] positivo independientemente del tipo de proceso.

**Por qué es incorrecto**

El signo de [[Q_rev]] determina el signo de [[DeltaS]]. Para procesos donde el sistema cede calor (condensación, solidificación, enfriamiento), [[Q_rev]] es negativo y [[DeltaS]] debe ser negativo. Invertir el signo da [[DeltaS]] positivo para un proceso que reduce la entropía del sistema, lo que contradice la física del proceso.

**Señal de detección**

[[DeltaS]] positivo para un proceso de condensación o solidificación, o [[DeltaS]] negativo para un proceso de fusión o vaporización. El signo de [[DeltaS]] siempre debe ser coherente con la dirección del proceso: los procesos que "ordenan" el sistema (solidificación, condensación) producen [[DeltaS]]_sistema < 0.

**Corrección conceptual**

Convención de signo: [[Q_rev]] > 0 cuando el sistema absorbe calor (proceso endotérmico); [[Q_rev]] < 0 cuando el sistema cede calor (proceso exotérmico). [[DeltaS]] = [[Q_rev]] / [[T_abs]] hereda el signo de [[Q_rev]] porque [[T_abs]] es siempre positivo.

**Mini-ejemplo de contraste**

Vaporización del agua: el sistema absorbe calor del entorno → [[Q_rev]] = +40650 J/mol → [[DeltaS]] = +40650/373 ≈ +109 J/(mol·K) > 0 (correcto: el gas tiene mayor dispersión que el líquido). Condensación: el sistema cede calor → [[Q_rev]] = −40650 J/mol → [[DeltaS]] = −109 J/(mol·K) < 0 (correcto: el líquido tiene menor dispersión que el gas).

---

## Errores de interpretación

### Error 5: Interpretar [[DeltaS]] = 0 como que "no ha pasado nada" en el proceso

**Por qué parece correcto**

[[DeltaS]] = 0 significa que la entropía no ha cambiado. El alumno interpreta esto como que el proceso es trivial o que no hay cambio físico significativo.

**Por qué es incorrecto**

[[DeltaS]] = 0 en el sistema define un proceso isentrópico (reversible y adiabático), que puede implicar cambios enormes de temperatura, presión y volumen. Un gas comprimido adiabáticamente y de forma reversible puede calentarse cientos de kelvin sin cambiar su entropía. [[DeltaS]] = 0 tampoco significa [[DeltaS]]_universo = 0 para cualquier proceso: solo lo hace si el proceso es completamente reversible.

**Señal de detección**

El alumno concluye de [[DeltaS]]_sistema = 0 que el proceso es trivial o que no hay trabajo ni calor involucrados. O bien interpreta un proceso adiabático como un proceso donde "no ocurre nada termodinámicamente".

**Corrección conceptual**

[[DeltaS]] = 0 del sistema es compatible con: (a) proceso isentrópico reversible adiabático (gran trabajo, cero calor), (b) proceso cíclico que vuelve al estado inicial (S es función de estado), (c) proceso isotérmico adiabático (imposible: si T es constante y no hay calor, un gas ideal no puede cambiar de estado). En el ciclo de Carnot, [[DeltaS]]_sistema es cero para el ciclo completo, pero cada etapa individual tiene [[DeltaS]] no nulo.

**Mini-ejemplo de contraste**

Compresión adiabática reversible de 1 mol de gas ideal de 300 K y 1 atm a 2 atm: [[DeltaS]] = 0 (isentrópico), pero la temperatura final sube a aproximadamente 365 K y se realiza trabajo sobre el gas de unos 1800 J. El proceso es físicamente importante aunque [[DeltaS]] = 0.

---

## Regla de autocontrol rápido

1. [[T_abs]] es siempre positivo en kelvin; si el resultado de despejar [[T_abs]] es negativo, el signo de [[DeltaS]] o [[Q_rev]] está invertido.
2. La diferencia entre [[T_abs]] en kelvin y en Celsius es siempre 273.15; un resultado que depende cuantitativamente de si se usa una u otra escala indica que [[T_abs]] debe estar en kelvin.
3. Para la fusión del agua a 0 °C, [[DeltaS]] por mol es aproximadamente 22 J/(mol·K); para la vaporización a 100 °C es aproximadamente 109 J/(mol·K). Si el resultado se aleja mucho de estos valores para el agua, revisar unidades y signos.
