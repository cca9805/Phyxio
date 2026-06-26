# Ejemplo tipo examen

## Enunciado

Un recipiente rígido y perfectamente aislado térmicamente contiene dos compartimentos separados por una membrana. El compartimento A contiene 2 kg de agua líquida a 80 °C y el compartimento B contiene 3 kg de agua líquida a 20 °C. Se retira la membrana y los dos volúmenes de agua se mezclan. Determina la temperatura final de la mezcla, verifica si el sistema puede considerarse aislado y razona sobre la dirección espontánea del proceso usando el segundo principio. El calor específico del agua es 4186 J/(kg·°C).

## Datos

- Masa del agua caliente: 2 kg
- Temperatura inicial del agua caliente: 80 °C
- Masa del agua fría: 3 kg
- Temperatura inicial del agua fría: 20 °C
- Calor específico del agua: 4186 J/(kg·°C)
- Tipo de frontera: rígida, adiabática, impermeable

## Definición del sistema

El sistema termodinámico es el conjunto de los 5 kg de agua contenidos en el recipiente. La frontera está definida por las paredes del recipiente, que son rígidas (sin variación de volumen exterior), adiabáticas (sin conducción térmica hacia el exterior) e impermeables (sin flujo de masa al entorno). El proceso es la mezcla de los dos volúmenes de agua tras retirar la membrana interna.

## Modelo físico

El sistema se modela como un **sistema aislado**. Las condiciones de la frontera imponen que [[Q_ais]] sea nulo (paredes adiabáticas) y [[W_ais]] sea nulo (paredes rígidas). Por el primer principio aplicado al sistema aislado, la [[DeltaU]] total del sistema es nula. Esto significa que la energía cedida por el agua caliente es exactamente igual a la energía absorbida por el agua fría. Para temperatura de mezcla bajo la hipótesis de calor específico constante, se aplica la conservación de energía interna entre los dos subsistemas.

## Justificación del modelo

El modelo de sistema aislado es válido porque el recipiente es metálico, grueso y aislado térmicamente, y el proceso de mezcla ocurre en un tiempo corto (segundos a minutos). En esas condiciones, las fugas de calor hacia el entorno son despreciables. La frontera es efectivamente adiabática en la escala de tiempo del proceso. Si el proceso durara horas en una sala fría, el modelo dejaría de ser válido y habría que tratar el sistema como cerrado con intercambio de calor. La membrana interna no forma parte de la frontera del sistema: su retirada es un proceso interno que no viola el aislamiento.

## Resolución simbólica

Aplicando el primer principio al sistema aislado:

{{f:primer_principio_aislado}}

Con [[Q_ais]] y [[W_ais]] nulos, [[DeltaU]] es cero. La energía interna total se conserva, lo que en términos de calor específico constante implica que el calor cedido por el agua caliente iguala al calor ganado por el agua fría. Expresando este balance en términos de masa, calor específico y variación de temperatura, se obtiene la temperatura de equilibrio final.

El segundo principio establece que [[S_ais]] debe ser mayor o igual a cero para un proceso espontáneo en sistema aislado:

{{f:entropia_aislado}}

La mezcla de dos cuerpos a distinta temperatura es un proceso irreversible, por lo que [[S_ais]] será estrictamente positivo.

## Sustitución numérica

La temperatura final de mezcla se obtiene del balance energético. La energía cedida por el agua caliente es 2 kg multiplicado por 4186 J/(kg·°C) multiplicado por (80 °C menos la temperatura final). La energía ganada por el agua fría es 3 kg multiplicado por 4186 J/(kg·°C) multiplicado por (la temperatura final menos 20 °C). Igualando ambas expresiones y despejando la temperatura final:

Multiplicando los coeficientes: el agua caliente tiene un coeficiente de 2 × 4186, que es 8372 J/°C. El agua fría tiene un coeficiente de 3 × 4186, que es 12558 J/°C. El total es 20930 J/°C para el denominador del balance.

El numerador es 8372 × 80 más 12558 × 20, que equivale a 669760 J más 251160 J, resultando en 920920 J. Dividiendo entre 20930 J/°C se obtiene una temperatura final de aproximadamente 44 °C.

Verificación: la energía cedida por el agua caliente es 8372 × (80 − 44), es decir 8372 × 36, lo que da aproximadamente 301392 J. La energía absorbida por el agua fría es 12558 × (44 − 20), es decir 12558 × 24, lo que da aproximadamente 301392 J. La igualdad confirma el resultado. Por tanto [[DeltaU]] ≈ 0 J, consistente con el sistema aislado.

## Validación dimensional

La unidad de la temperatura final se obtiene del cociente entre energía en julios y el producto de masa en kg por calor específico en J/(kg·°C). El cociente de unidades resulta en grados Celsius, que es la unidad correcta para temperatura de mezcla. Las unidades de energía interna son julios, coherentes con la dimensión `[M L² T⁻²]`. El calor específico tiene dimensión `[L² T⁻² Theta⁻¹]`, y al multiplicarse por masa `[M]` y temperatura `[Theta]` da efectivamente unidades de energía `[M L² T⁻²]` ✓.

## Interpretación física

El resultado [[DeltaU]] ≈ 0 J confirma que el sistema se ha comportado como un sistema aislado ideal durante el proceso de mezcla. La energía interna total se ha conservado: el agua caliente ha cedido exactamente la energía que el agua fría ha ganado. La temperatura final de 44 °C es la temperatura de equilibrio térmico que maximiza la entropía del sistema bajo la restricción de [[U]] fijo.

La mezcla es un proceso irreversible porque parte de un estado de no equilibrio (dos regiones a distinta temperatura) y evoluciona hacia el equilibrio (temperatura uniforme). [[S_ais]] es positivo, lo que confirma que el proceso es espontáneo y que no puede revertirse sin intervención externa. Si se intentara separar el agua caliente de la fría una vez mezcladas sin aportar trabajo externo, el segundo principio lo prohíbe: [[S_ais]] no puede disminuir en el sistema aislado.

Si la masa del agua fría fuera mayor (por ejemplo, 10 kg), la temperatura final estaría mucho más próxima a 20 °C, mostrando que la temperatura de equilibrio depende de la "masa disponible" de cada componente. Esto ilustra que [[DeltaU]] sigue siendo cero independientemente de la proporción de masas, mientras que [[S_ais]] aumentaría aún más cuanto mayor sea el gradiente inicial de temperatura entre los componentes.

---

# Ejemplo de aplicación real

## Contexto

Un recipiente Dewar de laboratorio de 2 litros se usa para almacenar nitrógeno líquido a −196 °C en un laboratorio de criobiología. El técnico necesita estimar cuánto tiempo puede considerarse el recipiente como un sistema aislado efectivo antes de que la evaporación del nitrógeno por absorción de calor del entorno sea significativa (superior al 5% del contenido). La tasa de absorción de calor del recipiente Dewar es de aproximadamente 0.5 W.

## Estimación física

La energía total almacenada en el nitrógeno líquido se estima como la masa multiplicada por el calor latente de vaporización. El nitrógeno líquido tiene una densidad de 808 kg/m³ a −196 °C, por lo que 2 litros contienen aproximadamente 1.6 kg de nitrógeno. El calor latente de vaporización del nitrógeno es de aproximadamente 199 kJ/kg.

La energía total de cambio de fase disponible es 1.6 kg multiplicado por 199000 J/kg, lo que equivale aproximadamente a 318400 J. El 5% de ese valor es aproximadamente 15920 J. Con una tasa de absorción de 0.5 W (0.5 J/s), el tiempo necesario para absorber esa cantidad de calor es 15920 J dividido entre 0.5 J/s, lo que resulta en aproximadamente 31840 segundos, equivalentes a algo menos de 9 horas.

## Interpretación

El recipiente Dewar puede considerarse como un sistema aislado efectivo durante aproximadamente 9 horas antes de que la evaporación del nitrógeno supere el 5% del contenido. Durante ese tiempo, [[Q_ais]] es suficientemente pequeño para que el modelo de sistema aislado sea una aproximación válida a efectos prácticos. Transcurrido ese tiempo, el sistema debe tratarse como sistema abierto (con flujo de materia en forma de gas nitrógeno que escapa) o como sistema cerrado con [[Q_ais]] no despreciable.

Este ejemplo ilustra que el aislamiento es siempre una aproximación temporal: cuanto mejor es la frontera (en este caso, el Dewar de vacío con revestimiento reflectante), mayor es el tiempo durante el cual la idealización de sistema aislado es válida. Para diseñar un almacenamiento de mayor duración, habría que reducir la tasa de absorción de calor mejorando el vacío o añadiendo capas de aislante adicionales.
