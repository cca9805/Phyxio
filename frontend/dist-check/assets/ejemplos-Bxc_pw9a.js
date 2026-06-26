const e=`# Ejemplo tipo examen

## Enunciado

Un cilindro con émbolo libre contiene 2 mol de nitrógeno gaseoso (gas diatómico ideal) a presión constante de \\(2{,}00 \\times 10^5\\) Pa. La temperatura inicial [[T1]] es 300 K y el volumen inicial [[V1]] es 24,94 L. Se calienta el gas a presión constante hasta [[T2]] de 450 K. Calcular [[V2]], [[DeltaV]], [[W]], [[DeltaU]] y [[Q]], y verificar el balance energético.

## Datos

- [[p]] de \\(2{,}00 \\times 10^5\\) Pa (constante)
- 2 mol de gas ; \\(C_V\\) vale \\(\\frac{5}{2}R\\) ; \\(C_p\\) vale \\(\\frac{7}{2}R\\)
- [[T1]] de 300 K ; [[V1]] de 24,94 L, equivalente a \\(24{,}94 \\times 10^{-3}\\) m³
- [[T2]] de 450 K (dato final)

## Definición del sistema

El sistema es el gas de nitrógeno encerrado entre el cilindro y el émbolo libre. Las paredes son diatérmanas (hay intercambio de calor). El émbolo se desplaza sin fricción, de modo que la presión del gas iguala en todo momento la presión exterior.

## Modelo físico

Se aplica el modelo de **gas ideal con proceso isobárico cuasiestático**. La magnitud central [[p]] se mantiene constante, y las magnitudes que evolucionan son [[V1]] → [[V2]] y [[T1]] → [[T2]]. El trabajo se obtiene de

{{f:trabajo_isobarico}}

y la relación entre volumen y temperatura de

{{f:ley_gay_lussac}}

## Justificación del modelo

El modelo de gas ideal es válido a esta presión (0,2 MPa ≪ 10 MPa) y a estas temperaturas (300–450 K, lejos del punto de licuefacción del nitrógeno a ~77 K). El proceso cuasiestático se justifica porque el émbolo se mueve lentamente y la presión interior es uniforme. Si la presión variara o el proceso fuera brusco, el modelo isobárico dejaría de ser válido y habría que usar un proceso politrópico.

## Resolución simbólica

**Volumen final**: de la ley de Gay-Lussac, [[V2]] se obtiene multiplicando [[V1]] por la razón [[T2]] / [[T1]].

**Variación de volumen**: [[DeltaV]] resulta de restar [[V1]] a [[V2]].

**Trabajo**: [[W]] se obtiene multiplicando [[p]] por [[DeltaV]].

**Energía interna**: para gas ideal, [[DeltaU]] se obtiene multiplicando \\(n C_V\\) por [[DeltaT]].

**Calor**: de

{{f:primer_principio_isobarico}}

se obtiene [[Q]] como suma de [[DeltaU]] y [[W]].

## Sustitución numérica

Volumen final: multiplicar 24,94 L por la razón 450/300 = 1,5 da 37,41 L. Por tanto [[V2]] ≈ 37,41 L.

Variación de volumen: restar 24,94 L a 37,41 L da 12,47 L, equivalente a \\(12{,}47 \\times 10^{-3}\\) m³. Por tanto [[DeltaV]] resulta de unos \\(+12{,}47 \\times 10^{-3}\\) m³ (expansión).

Trabajo: multiplicar \\(2{,}00 \\times 10^5\\) Pa por \\(12{,}47 \\times 10^{-3}\\) m³ da aproximadamente 2494 J. Por tanto [[W]] ≈ 2494 J.

Variación de temperatura: [[DeltaT]] es 450 − 300 = 150 K.

Energía interna: multiplicar 2 mol por \\(\\frac{5}{2} \\times 8{,}314\\) J/(mol·K) por 150 K da aproximadamente 6236 J. Por tanto [[DeltaU]] ≈ 6236 J.

Calor: sumar 6236 J y 2494 J da 8730 J. Por tanto [[Q]] ≈ 8730 J.

## Validación dimensional

- Trabajo: \`[Pa] · [m³]\` = \`[N m⁻²] · [m³]\` = \`[N·m]\` = \`[J]\` ✓ → \`[M L² T⁻²]\`
- Energía interna: \`[mol] · [J mol⁻¹ K⁻¹] · [K]\` = \`[J]\` ✓ → \`[M L² T⁻²]\`
- Balance: \`[J]\` = \`[J]\` + \`[J]\` ✓

## Interpretación física

El nitrógeno absorbió 8,73 kJ de calor del entorno. De ese total, **2,49 kJ se convirtieron en trabajo mecánico** (movimiento del émbolo) y **6,24 kJ quedaron almacenados como mayor energía cinética molecular** (temperatura más alta). La proporción [[W]]/[[Q]] (2494/8730, aproximadamente 28,6%) es fija para cualquier gas diatómico ideal en proceso isobárico, y coincide con el cociente \\(R/C_p\\) para gas diatómico.

Si la presión se duplicara (a \\(4 \\times 10^5\\) Pa) con el mismo [[DeltaT]], el trabajo [[W]] también se duplicaría, pero [[DeltaU]] no cambiaría porque la energía interna del gas ideal depende solo de [[DeltaT]], no de [[p]]. Esto significa que a mayor presión de trabajo, más calor total [[Q]] hay que suministrar para conseguir el mismo aumento de temperatura.

En el diagrama pV, el proceso aparece como una línea horizontal a \\(2 \\times 10^5\\) Pa. El área del rectángulo bajo esa línea (base [[DeltaV]] de \\(12{,}47 \\times 10^{-3}\\) m³ y altura [[p]] de \\(2 \\times 10^5\\) Pa) es exactamente [[W]] de 2494 J. Esta representación geométrica hace visible que el isobárico produce más trabajo que el adiabático entre los mismos estados de volumen, ya que en el adiabático la presión cae mientras el gas se expande.

# Ejemplo de aplicación real

## Contexto

En un sistema de calefacción por aire forzado, el aire circula a presión atmosférica constante ([[p]] ≈ \\(10^5\\) Pa) a través de un intercambiador de calor eléctrico. El caudal másico es de 0,5 kg/s y la temperatura del aire sube de [[T1]] (290 K) a [[T2]] (320 K). Se pide estimar la potencia de calefacción necesaria usando el modelo isobárico.

## Estimación física

Para aire seco (gas diatómico, \\(C_p\\) ≈ 1005 J/(kg·K)), el calor necesario por unidad de tiempo es el producto del caudal másico por la capacidad calorífica específica a presión constante por el incremento de temperatura. Multiplicando 0,5 kg/s por 1005 J/(kg·K) por 30 K se obtiene aproximadamente 15 075 W. Por tanto [[Q]] ≈ 15 kW de potencia de calefacción.

El trabajo de expansión asociado es mucho menor: el término [[W]] (producto [[p]] por [[DeltaV]]) en términos de flujo representa solo el cociente \\(R/C_p\\) de la potencia total (aproximadamente el 28,6% en gas diatómico ideal isobárico). El resto ([[DeltaU]] ≈ 71,4%) calienta el aire efectivamente.

> [!NOTE]
> A escala de edificio, una diferencia de 1 K en [[T2]] supone una variación de 503 W en la potencia requerida. El modelo isobárico permite ajustar la consigna del termostato con precisión directamente proporcional a [[DeltaT]].

## Interpretación

El modelo isobárico es aquí la herramienta natural porque la presión de la red de aire acondicionado se mantiene constante por diseño. [[DeltaU]] da el calor real depositado en el aire (que lo calienta), mientras que [[W]] representa el pequeño trabajo de dilatación del aire al pasar por el intercambiador. La variable dominante es [[DeltaT]]: multiplicarla por el caudal y por \\(C_p\\) da directamente la potencia, sin necesidad de conocer el volumen ni la densidad del aire en cada instante.

El límite del modelo es la presión: si la instalación operara con diferencias de presión apreciables (ventiladores de alta potencia en ductos cerrados), el proceso dejaría de ser estrictamente isobárico y habría que añadir la contribución del trabajo de bombeo. En ventilación doméstica estándar, ese término es menor del 1% de [[Q]] y puede ignorarse.
`;export{e as default};
