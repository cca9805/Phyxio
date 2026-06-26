const e=`# Ejemplo tipo examen

## Enunciado

Un recipiente rígido de 15.0 L contiene nitrógeno gaseoso (N₂) a 25.0 °C y 2.50 atm. Se calienta el recipiente hasta que la presión interior asciende a 4.00 atm. (a) Calcula la temperatura final del nitrógeno. (b) Determina la cantidad de sustancia de nitrógeno presente. (c) ¿En qué medida se puede confiar en el resultado de la ley del gas ideal para esta situación?

## Datos

- Volumen ([[V]]): 0.0150 m³ (15.0 L, constante, recipiente rígido)
- Temperatura inicial ([[T]]₁): 298.15 K (25.0 °C)
- Presión inicial ([[P]]₁): 253 313 Pa (2.50 atm)
- Presión final ([[P]]₂): 405 300 Pa (4.00 atm)
- Constante de los gases ([[R]]): 8.314 J/(mol·K)

## Definición del sistema

Sistema: masa de nitrógeno gaseoso encerrada en el recipiente (sistema cerrado, [[n]] constante). El recipiente es rígido e impermeable: [[V]] y [[n]] se mantienen constantes durante todo el proceso.

## Modelo físico

Se aplica la **ley del gas ideal**. Como el recipiente es rígido ([[V]] constante) y cerrado ([[n]] constante), la relación entre las variables de estado inicial y final es:

{{f:ley_gas_ideal}}

Con [[n]] y [[V]] constantes se obtiene la ley de Gay-Lussac: el cociente [[P]]/[[T]] se conserva, lo que permite calcular [[T]]₂ sin necesidad de conocer [[n]] explícitamente en el apartado (a).

## Justificación del modelo

El nitrógeno a presiones de 2.5–4 atm y temperaturas superiores a 300 K es un gas bien alejado de su temperatura crítica (126 K) y de su punto de condensación. El factor de compresibilidad del N₂ en esas condiciones es Z ≈ 0.997, una desviación del 0.3 % del comportamiento ideal: el modelo de gas ideal es plenamente válido. Si la presión alcanzara varias decenas de atmósferas o la temperatura descendiera hacia los 130 K, sería necesario usar la ecuación de Van der Waals.

## Resolución simbólica

Ambos apartados parten de la misma fórmula núcleo del leaf:

{{f:ley_gas_ideal}}

**Apartado (a):** Con [[V]] y [[n]] constantes el cociente [[P]]/[[T]] se conserva entre estados. Por tanto [[T]]₂ es proporcional a [[T]]₁ y al cociente de presiones [[P]]₂/[[P]]₁: a mayor [[P]] final, mayor [[T]] final necesaria para mantener el equilibrio.

**Apartado (b):** Despejando [[n]] se obtiene que su valor es el cociente entre el producto [[P]]₁·[[V]] y el producto [[R]]·[[T]]₁. El estado inicial y el final dan idéntico [[n]] porque el sistema es cerrado.

## Sustitución numérica

**Apartado (a):**

La temperatura inicial ([[T]]₁) vale 298.15 K. El cociente de presiones (4.00 entre 2.50) da 1.600. Multiplicando 298.15 K por ese factor se obtiene aproximadamente 477 K. Por tanto [[T]]₂ ≈ 477 K, equivalente a unos 204 °C. La temperatura aumentó en 179 K para sostener el doble de presión con [[V]] fijo.

**Apartado (b):**

El numerador resulta de multiplicar 253 313 Pa por 0.0150 m³, obteniendo aproximadamente 3799.7 J. El denominador es el producto de [[R]] (8.314 J/(mol·K)) por [[T]]₁ (298.15 K), que da aproximadamente 2478.8 J/mol. Dividiendo numerador entre denominador se obtiene [[n]] ≈ 1.533 mol. Esta cantidad de N₂ tiene una masa de aproximadamente 42.9 g (1.533 multiplicado por la masa molar 28 g/mol).

## Validación dimensional

Para el apartado (b), [[n]] es el cociente entre el producto [[P]]·[[V]] y el producto [[R]]·[[T]]. Análisis dimensional con la notación azul Phyxio:

- Numerador: \`[Pa · m³] = [M L⁻¹ T⁻²] · [L³] = [M L² T⁻²] = [J]\`
- Denominador: \`[J mol⁻¹ K⁻¹ · K] = [J mol⁻¹]\`
- Cociente: \`[J] / [J mol⁻¹] = [mol]\` ✓

## Interpretación física

El calentamiento isocórico es el proceso donde la **causa es el aporte de energía térmica** y el **efecto es el aumento de [[P]]**, sin posibilidad de expansión. Al crecer [[T]] de 298 K a 477 K —un factor de 1.6— la energía cinética media de cada molécula aumenta en ese mismo factor. Las moléculas golpean las paredes con mayor frecuencia y mayor impulso, por lo que [[P]] se duplica exactamente en la misma proporción que [[T]]. Esta causalidad directa —más [[T]] implica más [[P]] a [[V]] fijo— es la esencia de la ley del gas ideal en régimen isocórico.

La implicación práctica es concreta: cualquier recipiente cerrado que contiene gas a [[P]] conocida debe soportar también la [[P]] que alcanzará si [[T]] sube en un escenario extremo (incendio, exposición solar intensa). Un recipiente dimensionado solo para 2.5 atm a 25 °C quedaría expuesto a rotura si la temperatura interior alcanzara los 204 °C.

La cantidad de 1.53 mol de N₂ (unos 42.9 g) permite validar el resultado por una segunda vía: el volumen molar resultante es 15 L / 1.53 mol ≈ 9.8 L/mol, coherente con el valor de referencia de 22.4 L/mol a 1 atm reducido por el factor de presión 2.5. Si [[n]] fuera erróneamente grande o pequeño, esta coherencia fallaría, señalando el error antes de llegar a la interpretación.

---

# Ejemplo de aplicación real

## Contexto

Un meteorólogo analiza la variación de [[P]] en el interior de una sonda meteorológica. El globo de la sonda asciende desde el nivel del mar (1 atm, 15 °C) hasta 10 km de altitud (0.265 atm, −50 °C). El gas interior es helio con 0.80 mol. Se quiere estimar cómo cambia [[V]] del globo durante el ascenso, asumiendo que la membrana del globo mantiene [[P]] interior igual a la exterior en todo momento.

## Estimación física

La magnitud clave a estimar es [[V]] del globo en cada etapa del ascenso, con [[n]] fijo (membrana cerrada) y [[P]] igual a la presión exterior. Se aplica directamente:

{{f:ley_gas_ideal}}

**Orden de magnitud al nivel del mar** ([[P]] de 101 325 Pa, [[T]] de 288 K, [[n]] de 0.80 mol): [[V]] es el cociente del producto [[n]]·[[R]]·[[T]] entre [[P]]. El resultado es [[V]] ≈ 18.9 L — comparable al volumen de una bolsa grande, coherente con un globo meteorológico parcialmente inflado al momento del lanzamiento.

**Lectura cuantitativa a 10 km** ([[P]] de 26 851 Pa, [[T]] de 223 K, [[n]] constante): [[P]] ha caído al 26 % del valor inicial y [[T]] al 77 %. El nuevo [[V]] ≈ 55.2 L. La **relación clave** es que [[V]] a 10 km es aproximadamente 2.92 veces [[V]] al nivel del mar: la caída de [[P]] (factor 3.77) supera con claridad al descenso de [[T]] (factor 0.77), produciendo una expansión neta de casi el triple del volumen original.

## Interpretación

La expansión del globo al ascender se debe a dos efectos simultáneos actuando en sentidos distintos: la disminución de [[P]] exterior (que tiende a expandir el globo) y la disminución de [[T]] (que tiende a contraerlo). El factor neto de 2.92 resulta de combinar la caída de presión (factor P₁/P₂ ≈ 3.77) con la caída de temperatura (factor T₂/T₁ ≈ 0.774). El efecto de la presión domina claramente sobre el de la temperatura en este caso.

Esta estimación es clave para el diseño de la membrana del globo: debe poder soportar casi el triple de su volumen inicial sin perder estanqueidad ni tensión mecánica. Si el globo se diseña con un volumen máximo inferior al calculado, reventará antes de alcanzar la altitud objetivo. Los globos meteorológicos reales se inflan solo parcialmente al nivel del mar precisamente para disponer de esta capacidad de expansión durante el ascenso.
`;export{e as default};
