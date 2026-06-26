const e=`## Errores conceptuales

### Error 1: Usar la temperatura en Celsius en lugar de kelvin

**Por qué parece correcto**

El alumno trabaja habitualmente con temperaturas en Celsius en la vida cotidiana y en los enunciados de los problemas. Al ver «27 °C» en el enunciado, la tendencia natural es sustituir 27 directamente como temperatura en la ley del gas ideal, por analogía con otras fórmulas donde las unidades de entrada coinciden con las del enunciado.

**Por qué es incorrecto**

La constante [[R]] (8.314 J/(mol·K)) está definida con [[T]] en kelvin. La escala Celsius tiene su cero en 273.15 K, no en 0 K. Sustituir 27 °C en lugar de 300.15 K produce un valor de [[P]] o [[V]] unas 11 veces menor que el correcto. La proporcionalidad directa de la ley del gas ideal solo es exacta porque [[T]] mide la energía cinética absoluta desde el cero absoluto.

**Señal de detección**

Si el resultado de [[P]] es del orden de 10 Pa para un gas a temperatura ambiente en un recipiente de litros con pocos moles, en lugar de 10⁵ Pa, la causa más probable es haber usado Celsius en lugar de kelvin.

**Corrección conceptual**

Toda temperatura debe convertirse a kelvin antes de sustituirla: añadir 273.15 al valor en grados Celsius da el valor en kelvin. Esta regla es absoluta y no admite excepciones en la ley del gas ideal.

**Mini-ejemplo de contraste**

Para 0.50 mol de He en 12.0 L: usar 20 como temperatura da [[P]] ≈ 6928 Pa (irreal). Usar 293.15 K da [[P]] ≈ 101 480 Pa, cercano a 1 atm — el resultado físicamente correcto.

---

### Error 2: Confundir la masa del gas con la cantidad de sustancia en moles

**Por qué parece correcto**

El enunciado puede dar la masa del gas en gramos y el alumno la sustituye directamente como [[n]] en moles, confundiendo ambas magnitudes porque ambas miden «cuánto gas hay».

**Por qué es incorrecto**

La cantidad de sustancia [[n]] en moles se obtiene dividiendo la masa (en gramos) entre la masa molar del gas (en g/mol). Para el nitrógeno (N₂, masa molar 28 g/mol), 56 g corresponden a 2 mol, no a 56 mol. El error multiplica [[n]] por la masa molar del gas, dando resultados entre 2 y 200 veces mayores según el gas.

**Señal de detección**

El resultado de [[P]] o [[V]] difiere del esperado en un factor aproximadamente igual a la masa molar del gas del problema.

**Corrección conceptual**

Dividir siempre la masa del gas (en gramos) entre su masa molar (en g/mol) para obtener [[n]] antes de aplicar la ley del gas ideal.

**Mini-ejemplo de contraste**

Para 56 g de N₂ (masa molar 28 g/mol): dividir 56 entre 28 da [[n]] = 2 mol. Si el alumno usa 56 mol directamente, obtiene una [[P]] 28 veces mayor que la correcta.

---

## Errores de modelo

### Error 3: Aplicar la ley del gas ideal a gases reales en condiciones extremas

**Por qué parece correcto**

La ley del gas ideal funciona para la gran mayoría de los problemas de nivel básico e intermedio. El alumno generaliza su aplicación sin verificar si las condiciones del problema se hallan dentro del dominio de validez del modelo.

**Por qué es incorrecto**

A alta presión o temperatura cercana al punto de condensación, las interacciones intermoleculares y el volumen propio de las moléculas producen desviaciones medibles del comportamiento ideal. El vapor de agua a 150 °C y 40 atm tiene Z ≈ 0.91: la ley del gas ideal sobrestima el volumen real en un 9 %. En diseño industrial, ese margen de error puede implicar subdimensionamiento de un recipiente.

**Señal de detección**

La temperatura del gas es próxima a su temperatura de ebullición a la presión de trabajo, o la presión supera 20–50 atm para gases como CO₂, vapores de hidrocarburos o vapor de agua.

**Corrección conceptual**

Calcular el factor de compresibilidad —cociente P·V_real / (n·R·T)— con datos tabulados. Si difiere de 1 en más del 5 %, usar la ecuación de Van der Waals u otra más precisa.

**Mini-ejemplo de contraste**

Para CO₂ a 300 K y 60 atm: la ley del gas ideal predice [[V]] ≈ 0.41 L/mol. El valor experimental real es ≈ 0.32 L/mol. La discrepancia es del 28 %. La temperatura crítica del CO₂ es 304 K — casi igual a 300 K — lo que sitúa el sistema cerca del punto crítico.

---

## Errores matemáticos

### Error 4: Mezclar sistemas de unidades (litros con el SI)

**Por qué parece correcto**

Los volúmenes de laboratorio se expresan convencionalmente en litros. El alumno puede conocer el valor del volumen en litros y usarlo directamente con [[R]] = 8.314 J/(mol·K), sin percatarse de que esta constante exige metros cúbicos.

**Por qué es incorrecto**

El julio equivale a pascales multiplicados por metros cúbicos, no por litros. Si [[V]] se introduce en litros usando el valor SI de [[R]], el cálculo de [[P]] resulta 1000 veces mayor que el real, o equivalentemente el cálculo de [[V]] resulta 1000 veces mayor. El factor de error es 1000 en todos los casos (1 L = 10⁻³ m³).

**Señal de detección**

[[P]] calculada un factor ≈ 1000 por encima o por debajo de la esperada para condiciones habituales, o [[V]] en m³ resulta 1000 veces mayor que el valor esperado en litros.

**Corrección conceptual**

Usar [[R]] = 8.314 J/(mol·K) con [[P]] en Pa y [[V]] en m³. Alternativa compatible: usar [[R]] = 0.08206 L·atm/(mol·K) con [[P]] en atm y [[V]] en litros. Nunca mezclar los dos sistemas.

**Mini-ejemplo de contraste**

Para 2 mol a 300 K en 5 L: usando [[V]] = 0.005 m³ se obtiene [[P]] ≈ 997 680 Pa ≈ 9.85 atm (correcto). Usando [[V]] = 5 (en litros directamente) se obtiene [[P]] ≈ 998 Pa — un factor 1000 menor, completamente erróneo.

---

## Errores de interpretación

### Error 5: Confundir proceso isotérmico con proceso a presión constante

**Por qué parece correcto**

El alumno que recuerda vagamente las leyes de los gases puede creer que «temperatura constante» y «presión constante» describen el mismo proceso, o no tener claro que en un proceso isotérmico [[P]] y [[V]] varían mientras [[T]] permanece fija.

**Por qué es incorrecto**

En un proceso isotérmico ([[T]] constante, [[n]] constante), la ley del gas ideal implica que el producto [[P]]·[[V]] se conserva: si [[V]] disminuye, [[P]] aumenta en la misma proporción (son inversamente proporcionales). Un proceso isobárico ([[P]] constante, [[n]] constante) implica que el cociente [[V]]/[[T]] se conserva: [[V]] y [[T]] varían en proporción directa. Los dos procesos son radicalmente distintos.

**Señal de detección**

El alumno aplica la conservación del cociente [[V]]/[[T]] en un problema isotérmico, donde debería conservar el producto [[P]]·[[V]], o viceversa.

**Corrección conceptual**

Identificar qué variable permanece constante antes de elegir la forma de la ley combinada: a [[T]] fija, conservar [[P]]·[[V]]; a [[P]] fija, conservar [[V]]/[[T]]; a [[V]] fijo, conservar [[P]]/[[T]].

**Mini-ejemplo de contraste**

Un cilindro con émbolo contiene gas a 1 atm y 0.5 L. Se comprime isotérmicamente hasta 0.25 L. Resultado correcto: [[P]] se duplica hasta 2 atm. Si el alumno aplica la ley isobárica, concluye que [[V]] no cambia a [[T]] constante (puesto que [[V]]/[[T]] se conservaría si [[P]] fuera fija), lo cual es absurdo para una compresión.

---

## Regla de autocontrol rápido

Antes de dar el resultado por bueno, verificar sistemáticamente:

1. ¿La temperatura está en kelvin? Añadir 273.15 si está en Celsius.
2. ¿El volumen está en m³? Dividir entre 1000 si está en litros.
3. ¿La cantidad de sustancia está en moles y no en gramos? Dividir la masa entre la masa molar del gas.
4. ¿El resultado de [[P]] está en el rango 10³–10⁶ Pa para condiciones de laboratorio habituales? Si no, revisar unidades.
5. ¿El volumen molar ([[V]]/[[n]]) es del orden de 22 L/mol a presión atmosférica y temperatura ambiente? Si difiere por un factor de 10 o más, hay un error de unidades.
`;export{e as default};
