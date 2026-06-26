const e=`## Errores conceptuales

### Error 1: Confundir la temperatura en Celsius con la temperatura en kelvin

**Por qué parece correcto**

El alumno trabaja habitualmente con temperaturas en Celsius en la vida cotidiana y en muchos enunciados de problemas. Al ver "25 °C" en el enunciado, la tendencia natural es sustituir 25 directamente como temperatura en la ley del gas ideal, por analogía con otras fórmulas donde las unidades de entrada son las del enunciado.

**Por qué es incorrecto**

La constante [[R]] (8.314 J/(mol·K)) está definida con [[T]] en kelvin. La escala Celsius tiene su cero en 273.15 K, no en 0 K. Sustituir 25 °C en lugar de 298 K produce un valor de [[P]] o [[V]] unas 12 veces menor que el correcto. La proporción directa en la ley del gas ideal solo es válida porque [[T]] mide energía absoluta desde el cero absoluto.

**Señal de detección**

Si el resultado de [[P]] es del orden de 10 Pa para un gas a temperatura ambiente en un recipiente de litros con unos pocos moles, en lugar del orden de 10⁵ Pa, la causa más probable es haber usado Celsius en lugar de kelvin.

**Corrección conceptual**

Toda temperatura debe convertirse a kelvin antes de sustituirla: añadir 273.15 al valor en grados Celsius da el valor en kelvin. La regla es absoluta y no admite excepciones en la ley del gas ideal.

**Mini-ejemplo de contraste**

Para 1 mol de gas ideal en 0.024 m³: usar 25 como temperatura da aproximadamente 8660 Pa (muy bajo). Usar 298 kelvin da aproximadamente 103 200 Pa, cercano a 1 atm; [[P]] alcanza ese valor correcto solo con la temperatura en kelvin.

---

### Error 2: Mezclar sistemas de unidades (litros con SI)

**Por qué parece correcto**

Los volúmenes de laboratorio se expresan convencionalmente en litros. El alumno puede conocer el valor del volumen en litros y usarlo directamente con [[R]] (8.314 J/(mol·K)), sin percatarse de que esta constante exige metros cúbicos.

**Por qué es incorrecto**

El julio equivale a pascales multiplicados por metros cúbicos, no por litros. Si [[V]] se introduce en litros empleando el valor SI de [[R]], el cálculo de [[P]] resulta 1000 veces mayor que el real, o equivalentemente el cálculo de [[V]] resulta 1000 veces mayor. El alumno puede detectar el error comparando con el volumen molar de referencia: 22.4 L/mol a 0 °C y 1 atm (equivalente a 0.0224 m³/mol).

**Señal de detección**

[[P]] calculada un factor ≈ 1000 por encima de la esperada, o [[V]] calculado en m³ resulta 1000 veces mayor de lo esperado en litros.

**Corrección conceptual**

Usar [[R]] como 8.314 J/(mol·K) con [[P]] en Pa y [[V]] en m³. Alternativa compatible: usar [[R]] como 0.08206 L·atm/(mol·K) con [[P]] en atm y [[V]] en litros. Nunca mezclar los dos sistemas.

**Mini-ejemplo de contraste**

Para 2 mol a 300 K en 5 L: usando 0.005 m³ como volumen, la operación da aproximadamente 997 680 Pa (unas 9.85 atm), que es [[P]] correcto. Si por error se usa 5 como volumen (en litros), el resultado de [[P]] sería 1000 veces mayor, completamente erróneo.

---

## Errores de modelo

### Error 3: Aplicar la ley del gas ideal a gases reales en condiciones extremas

**Por qué parece correcto**

La ley del gas ideal es omnipresente en los libros de texto y funciona para la mayoría de los problemas estándar. El alumno generaliza su aplicación sin verificar si las condiciones del problema están dentro del dominio de validez del modelo.

**Por qué es incorrecto**

A alta presión o temperatura cercana al punto de condensación, las interacciones intermoleculares y el volumen propio de las moléculas producen desviaciones medibles. Por ejemplo, el vapor de agua a 200 °C y 50 atm tiene Z ≈ 0.92: la ley del gas ideal sobrestima el volumen real en un 8 %. En ingeniería de procesos, ese 8 % puede ser la diferencia entre un diseño seguro y uno insuficiente.

**Señal de detección**

Temperatura del gas cercana a su punto de ebullición a la presión de trabajo, o presión superior a ~20–50 atm para gases comunes como CO₂, vapores de hidrocarburos o vapor de agua.

**Corrección conceptual**

Calcular el factor de compresibilidad Z con datos reales del gas: es el cociente entre el producto [[P]]·[[V]] real y el valor teórico ideal [[n]]·[[R]]·[[T]]. Si este factor difiere de la unidad en más del 5 %, usar la ecuación de Van der Waals u otra ecuación de estado más precisa.

**Mini-ejemplo de contraste**

Para CO₂ a 300 K y 60 atm (6 MPa), la ley del gas ideal predice [[V]] ≈ 0.41 L/mol. El valor experimental real es ≈ 0.32 L/mol. La discrepancia es del 28 %, completamente inaceptable para cualquier cálculo de ingeniería. La temperatura crítica del CO₂ es 304 K, apenas por encima de 300 K: el sistema está muy cerca del punto crítico.

---

## Errores matemáticos

### Error 4: Confundir la masa del gas con la cantidad de sustancia en moles

**Por qué parece correcto**

El enunciado del problema puede dar la masa del gas en gramos o kilogramos, y el alumno la sustituye directamente como [[n]] en moles, confundiendo ambas magnitudes porque ambas miden "cuánto gas hay".

**Por qué es incorrecto**

La cantidad de sustancia [[n]] en moles se obtiene dividiendo la masa (en gramos) entre la masa molar del gas (en g/mol). Para el nitrógeno (N₂, con masa molar de 28 g/mol), 28 g corresponden a 1 mol, no a 28 mol. El error multiplica [[n]] por la masa molar del gas, dando resultados entre 2 y 200 veces mayores según el gas.

**Señal de detección**

El resultado de [[P]] o [[V]] es un número de orden de magnitud muy diferente al esperado, y la relación del error coincide aproximadamente con la masa molar del gas del problema.

**Corrección conceptual**

Siempre dividir la masa del gas (en gramos) entre su masa molar (en g/mol) para obtener [[n]] antes de aplicar la ley del gas ideal.

**Mini-ejemplo de contraste**

Para 14 g de nitrógeno (N₂, masa molar de 28 g/mol): dividir 14 entre 28 da 0.5 mol, que es [[n]] correcto. Si el alumno usa 14 mol directamente, obtiene una [[P]] 28 veces mayor que la correcta.

---

## Errores de interpretación

### Error 5: Confundir proceso isotérmico con presión constante

**Por qué parece correcto**

El alumno que recuerda solo vagamente las leyes de los gases puede creer que "temperatura constante" y "presión constante" describen el mismo proceso, o puede no tener claro que en un proceso isotérmico [[P]] y [[V]] varían mientras [[T]] permanece fija.

**Por qué es incorrecto**

En un proceso isotérmico ([[T]] constante, [[n]] constante), la ley del gas ideal implica que el producto [[P]]·[[V]] se conserva: si [[V]] disminuye, [[P]] aumenta en la misma proporción. Son magnitudes inversamente proporcionales. Un proceso isobárico ([[P]] constante, [[n]] constante) implica que el cociente [[V]]/[[T]] se conserva: [[V]] y [[T]] varían en proporción directa. Ambos procesos son radicalmente distintos.

**Señal de detección**

El alumno aplica la conservación del cociente volumen-temperatura en un problema isotérmico (donde debería conservar el producto presión-volumen), o viceversa.

**Corrección conceptual**

En un proceso isotérmico ([[T]] fija): el producto [[P]]·[[V]] se conserva entre el estado inicial y el final. En un proceso isobárico ([[P]] fija): el cociente [[V]]/[[T]] se conserva. La clave es identificar qué variable permanece constante antes de elegir la forma de la ley combinada.

**Mini-ejemplo de contraste**

Un cilindro con émbolo contiene gas a 1 atm y 0.5 L. Se comprime isotérmicamente hasta 0.25 L. Resultado correcto: la presión se duplica, alcanzando [[P]] de 2 atm. Si el alumno aplica incorrectamente la ley isobárica, concluye que el volumen no cambiaría al conservar el cociente volumen-temperatura con [[T]] fija, lo cual es absurdo para una compresión.

---

## Regla de autocontrol rápido

Antes de dar el resultado por bueno, verificar sistemáticamente:

1. ¿La temperatura está en kelvin? Añadir 273.15 si está en Celsius.
2. ¿El volumen está en m³? Dividir entre 1000 si está en litros.
3. ¿La cantidad de sustancia es en moles y no en gramos? Dividir la masa entre la masa molar del gas.
4. ¿El resultado de [[P]] está en el rango 10³–10⁷ Pa para condiciones habituales? Si no, revisar unidades.
5. ¿El volumen molar (cociente de [[V]] entre [[n]]) es del orden de 22 L/mol a presión atmosférica y temperatura ambiente? Si difiere por un factor de 10 o más, hay un error de unidades.
`;export{e as default};
