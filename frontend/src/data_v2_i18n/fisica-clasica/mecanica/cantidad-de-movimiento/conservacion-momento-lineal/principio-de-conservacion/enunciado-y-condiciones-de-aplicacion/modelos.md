# Modelos físicos del principio de conservación

## Modelo ideal

El modelo canónico de este leaf asume un **sistema perfectamente aislado**: un conjunto cerrado de masas que interactúan únicamente mediante fuerzas internas, sin ningún intercambio de momento con el entorno. Bajo estas condiciones, la [[fuerza_externa_neta]] ([[Fext]]) es estrictamente nula y la [[variacion_momento_lineal]] del sistema es cero. Este es el modelo de partida para cualquier análisis de colisiones, explosiones o separaciones en mecánica clásica.

El balance fundamental que sintetiza este modelo es:

{{f:cons_principle}}

donde el [[Pinitial]] (suma vectorial de los [[momento_lineal_individual]] de todos los cuerpos antes de la interacción) es idéntico al [[Pfinal]] (suma vectorial después de la interacción). El hecho de que [[Pinitial]] = [[Pfinal]] es la expresión matemática exacta del principio de conservación.

## Hipótesis

Para que el modelo ideal sea aplicable con rigor se necesitan las siguientes hipótesis:

1. **Sistema cerrado**: La [[masa_total]] del sistema no cambia durante la interacción. No hay cuerpos que entren o salgan, y no hay pérdida de masa por evaporación, fragmentación ni emisión.
2. **[[fuerza_externa_neta]] nula**: Todas las fuerzas que actúan sobre el sistema desde el exterior se cancelan o son despreciables frente a las fuerzas internas durante el intervalo de análisis.
3. **Fronteras bien definidas**: Todos los objetos que intercambian fuerzas intensas pertenecen al sistema. La [[masa_individual]] de cada cuerpo (en este leaf, [[m1]] y [[m2]]) es conocida y constante.
4. **Aproximación impulsiva**: En colisiones rápidas, el [[tiempo]] de contacto es tan breve que el impulso de fuerzas externas (como el peso o la fricción del suelo) es despreciable frente al intercambio interno de [[momento_lineal_individual]].
5. **Mecánica clásica**: Las [[velocidad_individual]] son muy inferiores a la velocidad de la luz y las masas son lo suficientemente grandes para ignorar efectos cuánticos de indeterminación.

## Dominio de validez cuantitativo

El modelo de sistema aislado es fiable cuando se cumplen simultáneamente estos criterios numéricos:

- **Relación de impulsos**: El impulso externo neto debe ser inferior al 5% del [[momento_lineal_total]] inicial. Esta condición garantiza que el intercambio de [[variacion_momento_lineal]] interno domina ampliamente sobre cualquier aporte externo.
- **Duración del [[tiempo]] de contacto**: En colisiones sólidas macroscópicas, los intervalos típicos son de 10^{-3} a 10^{-6} s. El impulso gravitacional en ese margen es mg·Δt ≈ mg·10^{-4} N·s, muchas veces menor que los picos de fuerza del impacto (del orden de 10^3 a 10^6 N).
- **Rango de velocidades**: La definición clásica de [[momento_lineal_individual]] como producto de masa por [[velocidad_individual]] es precisa cuando esas velocidades son inferiores al 10% de la velocidad de la luz (aproximadamente 30 millones de metros por segundo). A velocidades superiores, se requiere la definición relativista.
- **Número de cuerpos**: Este leaf trata explícitamente el caso de dos cuerpos ([[m1]] y [[m2]]). El modelo se extiende de forma directa a N cuerpos sumando los N momentos individuales.

## Señales de fallo del modelo

El modelo de conservación del [[momento_lineal_total]] falla cuando se detectan alguna de las siguientes señales:

- **[[fuerza_externa_neta]] sostenida y no despreciable**: Si una fuerza externa actúa durante un [[tiempo]] comparable al de la interacción (por ejemplo, un motor activo durante el choque), la [[variacion_momento_lineal]] no puede ignorarse y la conservación del [[momento_lineal_total]] no se cumple.
- **Sistema abierto con pérdida de masa**: Si durante la interacción algún cuerpo pierde o gana [[masa_individual]] (fragmentación en muchas piezas, combustión de propergol), la contabilización del [[momento_lineal_individual]] de cada componente se vuelve ambigua sin inventariar cada fragmento.
- **Velocidades relativistas**: Cuando las [[velocidad_individual]] se aproximan a la velocidad de la luz, la definición clásica de [[momento_lineal_individual]] subestima el momento real al ignorar el factor de Lorentz, violando la conservación en el modelo newtoniano.
- **Violación observada de la conservación**: Si al medir [[Pinitial]] y [[Pfinal]] experimentalmente se obtiene una [[variacion_momento_lineal]] no nula, hay una fuerza externa no contabilizada (o bien la frontera del sistema está mal definida).

## Modelo extendido o alternativo

Cuando las hipótesis del modelo ideal dejan de cumplirse —porque la [[fuerza_externa_neta]] no puede despreciarse, porque las velocidades son relativistas o porque el sistema involucra más de dos cuerpos con estados finales diferenciados— es cuando conviene cambiar de modelo. En esos casos conviene pasar al modelo extendido o alternativo adecuado:

- **Modelo con impulso externo**: Si la [[fuerza_externa_neta]] es conocida y constante durante el [[tiempo]] de interacción, su impulso se incluye en el balance para obtener el [[Pfinal]] del sistema. Esto generaliza el balance a sistemas no completamente aislados.
- **Colisión inelástica perfecta**: Cuando [[m1]] y [[m2]] quedan acoplados tras el impacto, la [[vf]] común se calcula con:

{{f:inelastic_collision}}

- **Separación desde el reposo (retroceso/explosión)**: Cuando el [[Pinitial]] es nulo y los cuerpos se separan por fuerza interna:

{{f:recoil_law}}

- **Balance general 1D**: Para la forma más universal de interacción entre dos cuerpos con [[v1i]], [[v2i]], [[v1f]], [[v2f]]:

{{f:general_1d_balance}}

## Comparación operativa

| Modelo | Condición de aplicación | Incógnita habitual |
|--------|-------------------------|--------------------|
| Aislamiento ideal | F_ext = 0 | [[Pfinal]], estados finales |
| Colisión inelástica | F_ext ≈ 0, cuerpos acoplados | [[vf]] |
| Retroceso / explosión | [[Pinitial]] = 0, separación interna | [[v1f]], [[v2f]] |
| Balance general 1D | F_ext ≈ 0, cualquier tipo de choque | [[v1f]] o [[v2f]] |
| Con impulso externo | [[fuerza_externa_neta]] conocida y no nula | [[variacion_momento_lineal]] |

El modelo ideal es el más frecuente en exámenes. Los modelos extendidos se usan cuando el enunciado indica fuerzas externas explícitas o procesos con más de dos cuerpos con distintos estados finales.
