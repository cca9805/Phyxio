# Ejemplo tipo examen

## Enunciado

Una muestra de 2 moles de gas ideal nitrogeno se encuentra inicialmente a una presion de 400 kPa y un volumen de 12.5 litros en un recipiente con paredes conductoras sumergido en un bano termostático a 300 K. El gas se expande lentamente de forma isotermica hasta que su presion se reduce a la mitad. Determinar el volumen final, el trabajo realizado por el gas y el calor intercambiado con el bano termico.

## Datos

- Moles de gas: 2 mol
- Presion inicial: 400 kPa, equivalente a 400 000 Pa
- Volumen inicial: 12.5 litros, equivalente a 0.0125 metros cubicos
- Temperatura: 300 K (constante durante todo el proceso)
- Presion final: 200 kPa, equivalente a 200 000 Pa

## Definición del sistema

El sistema es el gas nitrogeno encerrado en el recipiente. Las paredes conductoras permiten el intercambio de calor con el bano termostático. El proceso es isotermico reversible porque el bano mantiene [[T]] constante y la expansion es suficientemente lenta para que el gas este en equilibrio en todo momento. El sistema esta cerrado: [[n]] no varia.

## Modelo físico

Se aplica el modelo de **gas ideal isotermico**. La ley de Boyle garantiza que el producto [[p1]] por [[V1]] es igual al producto [[p2]] por [[V2]]. El trabajo [[W]] realizado por el gas se obtiene integrando la presion a lo largo de la hiperbola entre el volumen inicial y el volumen final. Dado que [[T]] es constante, la variacion de energia interna es nula y por el primer principio el calor absorbido [[Q_iso]] es igual a [[W]].

## Justificación del modelo

El modelo de gas ideal es apropiado para nitrogeno a 300 K y presiones de 200 a 400 kPa (entre 2 y 4 atm), muy por debajo del limite de 100 atm donde las desviaciones superan el 10 %. El proceso es cuasiestatico porque se especifica expansion lenta. El bano termostático garantiza que [[T]] permanece constante con alta precision. El modelo dejaria de ser valido si la presion superara los 100 atm o si la expansion fuera brusca.

## Resolución simbólica

El volumen final se obtiene directamente de la ley de Boyle, despejando el volumen desconocido:

{{f:ley_boyle}}

Como [[p2]] es la mitad de [[p1]], el cociente [[p1]] sobre [[p2]] vale 2, de modo que [[V2]] es el doble de [[V1]].

El trabajo isotermico usa el logaritmo natural del cociente de volumenes:

{{f:trabajo_isotermico}}

El logaritmo natural de 2 es aproximadamente 0.693. Por tanto [[W]] es el producto de [[n]], la constante de los gases, [[T]] y 0.693.

## Sustitución numérica

Para el volumen final: el cociente entre [[p1]] y [[p2]] es 2; multiplicando [[V1]] por este cociente se obtiene [[V2]] igual a 0.025 metros cubicos, equivalente a 25 litros. Por tanto [[V2]] ≈ 0.025 m³.

Para el trabajo: multiplicar 2 moles por 8.314 julios por mol por kelvin, por 300 K y por el logaritmo natural de 2 (aproximadamente 0.693). El resultado es aproximadamente 3454 J. Por tanto [[W]] ≈ 3454 J.

Por el primer principio aplicado al proceso isotermico, [[Q_iso]] es exactamente igual a [[W]]. Por tanto [[Q_iso]] ≈ 3454 J.

## Validación dimensional

Para el volumen:

- Presion tiene dimension `[M L⁻¹ T⁻²]` y volumen tiene dimension `[L³]`. El cociente de presiones es adimensional; multiplicar `[L³]` por un numero adimensional da `[L³]` ✓

Para el trabajo:

- Moles `[N]` multiplicados por la constante de los gases `[M L² T⁻² N⁻¹ Theta⁻¹]`, por temperatura `[Theta]` y por el logaritmo natural (adimensional): el resultado es `[M L² T⁻²]`, que es la dimension de la energia en julios ✓

## Interpretación física

El gas de nitrogeno experimento una expansion isotermica en la que su volumen se duplico de 12.5 litros a 25 litros mientras la presion cayo a la mitad, de 400 kPa a 200 kPa. Por tanto, el gas realizo un trabajo de aproximadamente 3454 J sobre el embolo. La magnitud del trabajo depende directamente del producto [[n]] por [[T]]: a mayor temperatura o mayor cantidad de gas, mayor trabajo para el mismo cociente de volumenes.

Este trabajo no provino de la energia interna del gas, sino del calor [[Q_iso]] que el bano termostático cedio al gas. Este es el rasgo mas caracteristico del proceso isotermico: el gas no "se gasta" al expandirse; simplemente actua como intermediario entre el foco termico y el entorno mecanico. Si la expansion fuera adiabatica en lugar de isotermica, la temperatura caeria durante el proceso y el gas realizaria menos trabajo (porque la curva adiabatica es mas empinada que la isotermica en el diagrama pV), y no habria intercambio de calor.

La curva descrita por el gas en el diagrama pV es la hiperbola de Boyle. El area bajo esa hiperbola entre los dos volumenes representa exactamente el trabajo calculado. Si [[T]] fuera mayor, la hiperbola estaria mas alejada del origen y el area bajo la curva seria mayor, lo que se traduce en mas trabajo para el mismo cociente de volumenes.

# Ejemplo de aplicación real

## Contexto

Los compresores de aire utilizados en talleres mecanicos, laboratorios de fisica y sistemas de refrigeracion industrial comprimen el aire de forma aproximadamente isotermica cuando la velocidad de compresion es baja y la disipacion de calor hacia el exterior es eficiente. Un compresor tipico de taller opera entre 100 kPa (presion atmosferica) y 700 kPa (7 bares), reduciendo el volumen del aire por un factor de aproximadamente 7 para cada ciclo de compresion.

## Estimación física

Para un compresor con un cilindro de 0.5 litros que comprime 1 litro de aire a temperatura ambiente (300 K) hasta 700 kPa, el trabajo de compresion isotermica se obtiene con el logaritmo del cociente de volumenes. El cociente de presiones es 7, lo que equivale a un cociente de volumenes de 7 segun la ley de Boyle. El logaritmo natural de 7 es aproximadamente 1.946. Para un mol de aire (aproximadamente 29 gramos), el trabajo de compresion [[W]] es aproximadamente 4843 J por ciclo, que el compresor debe extraer del motor electrico y que el aire cede como calor al bloque del compresor y al aire circundante.

En un compresor real, la eficiencia isotermica es del 60 al 80 % porque parte del proceso es inevitablemente mas rapido que el tiempo de equilibracion termica, haciendo que la curva real se acerque a la adiabatica. Esto significa que el calor disipado a la temperatura del entorno es menor que el trabajo de compresion calculado, y la diferencia eleva la temperatura del gas comprimido.

## Interpretación

El proceso isotermico en el compresor ilustra que comprimir un gas siempre requiere energia, y que esa energia puede gestionarse de dos formas: entregandola al entorno como calor (proceso isotermico, mas eficiente) o acumulandola en el gas como aumento de temperatura (proceso adiabatico, menos eficiente para el enfriamiento posterior). Los sistemas de refrigeracion prefieren la compresion cuasi-isotermica porque reduce el trabajo total del ciclo y prolonga la vida del compresor al evitar picos de temperatura.

La dependencia de [[W]] con [[T]] explica por que los compresores tienen refrigeracion intercalada en etapas multiples: comprimir en varios pasos con enfriamiento entre cada paso equivale a aproximar mejor el proceso isotermico ideal, reduciendo el trabajo total necesario respecto a una compresion adiabatica de un solo paso.
