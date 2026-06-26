# Ejemplo tipo examen

## Enunciado

Un cilindro de acero rígido de laboratorio contiene nitrógeno diatómico. El cilindro está sellado herméticamente. El gas se calienta eléctricamente hasta que su temperatura se eleva en un total de 250 K. Determinar la energía interna absorbida por el gas, el calor intercambiado con el entorno y el trabajo mecánico realizado durante el proceso.

## Datos

- Cantidad de sustancia: 3 mol de nitrógeno diatómico
- Variación de temperatura: 250 K
- Calor específico molar a volumen constante del nitrógeno diatómico: 20.8 J por mol y kelvin
- Recipiente perfectamente rígido (volumen constante)

## Definición del sistema

El sistema termodinámico es la masa de nitrógeno encerrada en el cilindro de acero. La frontera del sistema coincide con las paredes internas del cilindro. Al ser las paredes rígidas, la frontera del sistema es fija en el espacio y no puede desplazarse, lo que establece la condición isocórica.

El entorno es todo lo que rodea al cilindro, incluido el sistema de calentamiento eléctrico que suministra la energía. La interacción entre sistema y entorno se produce exclusivamente mediante calor a través de las paredes del cilindro.

## Modelo físico

El proceso es isocórico porque el recipiente es perfectamente rígido. Las magnitudes clave son la variación de energía interna [[DeltaU]], el calor intercambiado [[Q]], el trabajo mecánico [[W]], la variación de temperatura [[DeltaT]], el número de moles [[n]] y el calor específico molar a volumen constante [[Cv]].

Al ser el proceso isocórico, [[W]] es nulo por condición geométrica. La relación fundamental del proceso es que [[DeltaU]] es igual a [[Q]], directamente calculada mediante el producto de [[n]], [[Cv]] y [[DeltaT]].

## Justificación del modelo

El modelo isocórico es válido porque el cilindro de acero es un recipiente rígido que no experimenta deformación significativa. El nitrógeno diatómico a temperaturas normales se comporta como gas ideal con [[Cv]] constante de 20.8 J por mol y kelvin, correspondiente a cinco medios de la constante de los gases (tres grados translacionales y dos rotacionales). La variación de temperatura de 250 K no activa los modos vibracionales del nitrógeno, que solo son relevantes por encima de 1000 K.

El modelo dejaría de ser válido si el cilindro se deformara bajo la presión generada, si hubiera fugas de gas durante el calentamiento, o si la temperatura alcanzara valores cercanos a la disociación del nitrógeno molecular (por encima de 3000 K).

## Resolución simbólica

Primer paso: identificar el tipo de proceso. Al ser el volumen constante, el trabajo es nulo:

{{f:trabajo_isocorico}}

Segundo paso: calcular [[DeltaU]] directamente mediante la fórmula fundamental del proceso isocórico:

{{f:energia_interna_isocorica}}

Tercer paso: aplicar la identidad del proceso isocórico entre calor y energía interna:

{{f:calor_isocorico}}

Cuarto paso: expresar la variación de temperatura a partir de los estados inicial y final:

{{f:variacion_temperatura_isocorica}}

## Sustitución numérica

Para el trabajo, dado que el proceso es isocórico, el resultado es directamente nulo. Por tanto [[W]] es 0 J.

Para la variación de energía interna, multiplicar 3 mol por 20.8 J por mol y kelvin por 250 K. El producto de 3 por 20.8 es 62.4, y multiplicando por 250 resulta 15 600 J. Por tanto [[DeltaU]] ≈ 15 600 J, equivalente a 15.6 kJ.

Para el calor intercambiado, aplicando la identidad del proceso isocórico [[Q]] es igual a [[DeltaU]]. Por tanto [[Q]] ≈ 15 600 J, equivalente a 15.6 kJ.

Para la variación de temperatura, si la temperatura inicial es 300 K y la final es 550 K, restar 300 de 550 da 250 K. Por tanto [[DeltaT]] ≈ 250 K, que confirma el dato del enunciado.

## Validación dimensional

Para [[DeltaU]]: multiplicar moles por unidades de calor específico molar por kelvins da como resultado joules. Expresando las dimensiones: `[N] · [M L² T⁻² Θ⁻¹ N⁻¹] · [Θ]` se simplifican los moles y los kelvins, resultando `[M L² T⁻²]`, que es la dimensión de energía en joules. La verificación dimensional confirma el resultado.

Para [[W]]: al ser nulo, la verificación es trivial. Un trabajo nulo es siempre dimensionalmente consistente con `[M L² T⁻²]`.

## Interpretación física

El resultado de [[DeltaU]] de 15 600 J representa un incremento significativo de la energía cinética molecular del nitrógeno. Cada molécula del gas se mueve más rápidamente después del proceso: la temperatura ha aumentado 250 K, lo que equivale a un incremento relativo de temperatura absoluta del 83 % si la temperatura inicial era 300 K. Consecuentemente, la presión del gas también ha aumentado en esa misma proporción, pasando de la presión inicial a 1.83 veces esa presión.

El valor de [[Q]] de 15.6 kJ representa el calor suministrado por el sistema de calentamiento eléctrico. Si se duplicara el número de moles manteniendo el mismo [[DeltaT]], [[DeltaU]] y [[Q]] también se duplicarían a 31.2 kJ, porque la capacidad calorífica total del sistema es proporcional a [[n]]. Si se usara helio monoatómico con [[Cv]] de 12.5 J por mol y kelvin en lugar de nitrógeno, el calor necesario para el mismo [[DeltaT]] sería 9375 J, un 40 % menos, porque el helio tiene solo tres grados de libertad frente a los cinco del nitrógeno. Esto ilustra que el tipo de gas (su estructura molecular) determina cuánta energía necesita para calentarse lo mismo.

---

# Ejemplo de aplicación real

## Contexto

Una válvula de seguridad mal calibrada en un reactor industrial se obstruye durante un ciclo de calentamiento controlado. El reactor contiene 50 mol de dióxido de carbono triásomico a temperatura inicial de 400 K. Durante la obstrucción, el gas recibe 248 kJ de calor antes de que los operarios activen el sistema de emergencia. El volumen del reactor permanece constante durante todo el incidente.

## Estimación física

Para el dióxido de carbono a 400 K el calor específico molar a volumen constante es aproximadamente 24.9 J por mol y kelvin (gas triatómico con seis grados de libertad activos). Aplicando la relación del proceso isocórico con [[Q]] igual a [[DeltaU]] y siendo [[Q]] 248 kJ, la variación de temperatura se calcula dividiendo 248 000 J entre el producto de 50 mol por 24.9 J por mol y kelvin. El producto de 50 por 24.9 es 1245 J por kelvin, y dividiendo 248 000 entre 1245 resulta [[DeltaT]] de aproximadamente 199 K. La temperatura final estimada del gas en el reactor es de 400 más 199, unos 599 K.

La presión del gas aumenta en la misma proporción que la temperatura: la razón de 599 K entre 400 K es aproximadamente 1.5, por lo que la presión se habría multiplicado por 1.5. Si el sistema operaba inicialmente a 20 atm, la presión durante el incidente alcanzaría unas 30 atm.

## Interpretación

El incremento de presión del 50 % ilustra el peligro del proceso isocórico en sistemas industriales cerrados. Todo el calor suministrado al gas ha ido íntegramente a [[DeltaU]] porque no hay trabajo mecánico posible con el volumen constante. En un proceso isobárico equivalente, parte de ese calor habría podido disiparse como trabajo de expansión, moderando el incremento de temperatura. La rigidez del recipiente concentra toda la energía térmica en presión y temperatura, que son las variables de riesgo para la integridad estructural del reactor.

Este tipo de análisis isocórico es la base de los cálculos de seguridad de tanques de almacenamiento de gases comprimidos, calderas de vapor y reactores de procesos químicos. El diseño de las válvulas de seguridad se basa precisamente en la relación entre el calor que puede suministrarse al sistema y el incremento de presión resultante mediante la ley de Gay-Lussac a volumen constante.
