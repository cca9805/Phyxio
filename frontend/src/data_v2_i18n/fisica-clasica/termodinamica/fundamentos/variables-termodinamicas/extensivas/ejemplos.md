# Ejemplo tipo examen

## Enunciado

Una muestra de gas tiene masa [[m]] de 0.50 kg, volumen [[V]] de 0.40 m3, energía interna [[U]] de 150 kJ y entropía [[S]] de 0.90 kJ/K. Se juntan dos copias identicas en el mismo estado. Calcula las magnitudes extensivas totales y el cociente masa-volumen resultante. Decide que magnitudes se duplican y cuales no.

## Datos

- Factor de escala: [[lambda_escala]] igual a 2.
- Magnitudes extensivas iniciales: [[m]], [[V]], [[U]] y [[S]].
- Magnitud generica: [[X_ext]] para aplicar el test de escala.
- Densidad inicial y final: [[rho]].
- Magnitud específica representativa: [[x_esp]] para comparar por unidad de masa.

## Definición del sistema

El sistema final es la union de dos subsistemas equivalentes. No se cambia el material ni el estado intensivo de cada copia antes de juntarlas. Por tanto se puede aplicar el modelo ideal de aditividad extensiva.

## Modelo físico

Usamos el test de escalado de [[X_ext]] y la suma de subsistemas. Las cantidades totales [[m]], [[V]], [[U]] y [[S]] deben multiplicarse por [[lambda_escala]]. La propiedad [[rho]] se calcula como cociente entre dos extensivas y sirve para comprobar que normalizar elimina la escala. Si se calcula [[x_esp]] para energía interna, se compara energía por kg, no energía total.

## Justificacion del modelo

Las dos copias son identicas y estan en el mismo estado, de modo que no aparece cambio de composicion ni mezcla no ideal. Como se suman inventarios compatibles, la masa total, el volumen total, la energía interna total y la entropía total son aditivos. El cociente masa-volumen no debe duplicarse porque tanto numerador como denominador se duplican.

## Resolucion simbolica

Criterio de escalado:

{{f:criterio_extensividad}}

Esta relación permite pasar de una copia a dos copias usando [[lambda_escala]] sin cambiar el estado intensivo.

Aditividad:

{{f:aditividad_extensiva}}

Aqui se aplica por separado a [[m]], [[V]], [[U]] y [[S]], porque cada una representa un inventario total.

Cociente masa-volumen:

{{f:densidad}}

Este cociente sirve como control: si masa y volumen escalan juntos, la propiedad normalizada queda constante.

Magnitud específica:

{{f:magnitud_especifica}}

La magnitud específica confirma la misma idea para cualquier inventario extensivo dividido por [[m]].

## Sustitucion numerica

La masa final es 1.00 kg. El volumen final es 0.80 m3. La energía interna final es 300 kJ. La entropía final es 1.80 kJ/K. Todas esas magnitudes se duplican porque son extensivas.

El cociente masa-volumen inicial es 0.50 kg dividido entre 0.40 m3, es decir 1.25 kg/m3. El cociente final es 1.00 kg dividido entre 0.80 m3, también 1.25 kg/m3. La energía específica inicial es 150 kJ dividido entre 0.50 kg, es decir 300 kJ/kg. La energía específica final es 300 kJ dividido entre 1.00 kg, otra vez 300 kJ/kg.

## Validacion dimensional

- [[m]] se mide en kg y se suma con kg.
- [[V]] se mide en m3 y se suma con m3.
- [[U]] se mide en J o kJ; [[S]] se mide en J/K o kJ/K.
- [[rho]] tiene dimension `[M L⁻³]`.
- [[x_esp]] tiene dimension de [[X_ext]] dividida por `[M]`.

## Interpretacion física

El resultado muestra la diferencia entre inventario y propiedad normalizada. El sistema final contiene el doble de materia, espacio, energía y entropía, pero no es "más denso" ni tiene mayor energía por kg. Si se compararan las muestras usando solo [[U]], ganaria la muestra grande; usando [[x_esp]], se ve que el estado energético por masa es el mismo.

Fisicamente, juntar dos copias no intensifica el gas: solo aumenta cuanto gas hay. El estado local de cada porcion sigue siendo equivalente. Por eso una extensiva responde a la pregunta "cuanto total hay", mientras una propiedad normalizada responde a "como es cada unidad de sistema". Confundir esas dos preguntas lleva a comparar tamanos en vez de estados.

# Ejemplo de aplicación real

## Contexto

En un laboratorio se comparan dos recipientes con el mismo liquido a la misma temperatura. Uno contiene 100 g y otro 300 g. El segundo tiene tres veces más masa y aproximadamente tres veces más volumen, pero el cociente masa-volumen del liquido es el mismo.

## Estimacion física

Si 100 g ocupan 110 mL, entonces 300 g ocuparan cerca de 330 mL si el estado es equivalente. El cociente masa/volumen queda igual dentro de la incertidumbre experimental. Si la energía interna fuera proporcional a masa, el recipiente grande tendria tres veces más [[U]], pero la energía específica [[x_esp]] seria la misma.

La estimacion puede comprobarse con una balanza y una probeta. Si el segundo volumen medido fuera 332 mL en lugar de 330 mL, la diferencia relativa seria menor que 1% y podria atribuirse a lectura experimental. Si aparecieran 360 mL, ya no seria una simple escala: habria que revisar temperatura, burbujas, composicion o error de medida.

## Interpretacion

La lectura cuantitativa evita confundir tamano con estado. El recipiente grande contiene más cantidad total, pero no representa una sustancia diferente ni una intensidad mayor. Para comparar materiales se usan cocientes como [[rho]]; para hacer balances se usan extensivas como [[m]], [[V]], [[U]] y [[S]].

La conclusion operativa es que una extensiva sirve para inventariar y una normalizada sirve para comparar. El mismo experimento produce ambas lecturas: masa total para saber cuanto liquido hay, y cociente masa-volumen para reconocer si sigue siendo el mismo material.
