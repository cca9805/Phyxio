const e=`## 1. Neumáticos de vehículos y variación estacional de presión

Los neumáticos de automóvil son recipientes de [[V]] prácticamente constante (el caucho es casi inextensible a la presión de inflado). Contienen aire a una [[P]] típica de 2.2–2.5 bar (220 000–250 000 Pa) a temperatura de llenado. Cuando la [[T]] ambiental cambia entre el invierno (−10 °C, 263 K) y el verano (40 °C, 313 K), la presión varía en el cociente de temperaturas absolutas (313 K entre 263 K, es decir aproximadamente 1.19), lo que representa un aumento del 19 %.

La ley del gas ideal en forma isocórica ([[n]] constante) permite calcular exactamente cuánto ha cambiado [[P]] y si es necesario ajustarla: al conservarse el cociente [[P]]/[[T]] entre los dos estados, la [[P]] final se obtiene multiplicando la inicial por el cociente de temperaturas. Los fabricantes recomiendan verificar la presión en frío porque ese es el estado más cercano al modelo: en caliente, el calor generado por la fricción con el suelo añade una contribución adicional difícil de separar.

Variable dominante: [[T]] (la presión cambia en proporción directa con la temperatura absoluta).
Límite de validez: el modelo ideal aplica mientras el caucho no se deforme elásticamente de forma significativa ni el gas cambie de composición (por ejemplo, por pérdida de humedad del aire).

---

## 2. Almacenamiento de hidrógeno en vehículos de pila de combustible

Los vehículos de hidrógeno almacenan H₂ a [[P]] de 350–700 bar (35–70 MPa) en tanques de fibra de carbono. A 700 bar y temperatura ambiente (300 K), un tanque de 150 L almacena idealmente:

Con [[P]] de 7 × 10⁷ Pa, [[V]] de 0.150 m³ y [[T]] de 300 K, la ley del gas ideal predice [[n]] ≈ 4220 mol ≈ 8.5 kg de H₂. Sin embargo, el factor de compresibilidad del hidrógeno a 700 bar y 300 K es Z ≈ 1.32 (Z > 1 porque el volumen excluido domina): la masa real almacenada es ≈ 8.5/1.32 ≈ 6.4 kg.

Esta desviación del 24 % demuestra que a estas presiones la ley del gas ideal sobreestima significativamente la densidad de almacenamiento. Los ingenieros de diseño deben usar ecuaciones de estado más precisas (Benedict–Webb–Rubin para H₂) para calcular la autonomía real del vehículo.

Variable dominante: [[P]] (a temperaturas fijas, la densidad de almacenamiento depende casi linealmente de [[P]] en el rango ideal, pero la corrección de no idealidad se vuelve crucial a partir de ~50 bar).
Límite de validez: la ley del gas ideal introduce errores inaceptables (>5 %) para H₂ por encima de ~100 bar a temperatura ambiente.

---

## 3. Buceo con escafandra: expansión del gas al ascender

Un buceador desciende a 30 m de profundidad, donde la presión total suma 4 atm (405 000 Pa): la presión atmosférica aporta 1 atm y la columna de agua añade otras 3 atm. Esta [[P]] elevada comprime el gas de sus pulmones en la misma proporción. Sus pulmones contienen [[n]] moles de aire a esa presión y a [[T]] corporal (37 °C, equivalente a 310 K). Al ascender a la superficie (1 atm, misma [[T]]), el volumen del gas se multiplica por el cociente de presiones, que es 4 a 1, es decir, el volumen se cuadruplica (proceso isotérmico, [[n]] fijo en los pulmones).

La ley del gas ideal en forma isotérmica conserva el producto [[P]]·[[V]], prediciendo esa cuadruplicación del volumen. Los pulmones pueden expandirse solo un 30–40 % antes de dañarse. Si el buceador asciende sin exhalar, la sobreexpansión pulmonar puede causar un barotrauma grave.

La ecuación de estado no es solo una herramienta de cálculo académico: su violación (ascenso rápido sin exhalar) es la causa directa de uno de los accidentes de buceo más peligrosos.

Variable dominante: [[P]] (la expansión del gas es inversamente proporcional a la presión para proceso isotérmico).
Límite de validez: el modelo isotérmico es válido si el ascenso es suficientemente lento como para que el gas permanezca a temperatura corporal. En ascensos muy rápidos hay que considerar efectos adiabáticos.

---

## 4. Manómetro de automóvil y la diferencia entre presión absoluta y manométrica

Los manómetros de llenado de neumáticos miden presión **manométrica** (relativa a la atmosférica), no presión absoluta. La ley del gas ideal requiere presión **absoluta**: la [[P]] absoluta es la suma de la presión manométrica y la presión atmosférica.

Si el manómetro indica 2.1 bar (210 000 Pa manométricos) y la presión atmosférica es 101 325 Pa, la presión absoluta es 311 325 Pa ≈ 3.07 atm. Usar 2.1 bar directamente en la ley del gas ideal produciría un error del 32 % en [[n]] o [[T]] calculadas.

Esta distinción es crítica en cualquier aplicación industrial donde la presión se lee en manómetros: compresores, reactores, tuberías. El error de no añadir la presión atmosférica puede llevar a dimensionar mal un recipiente, subestimando las fuerzas sobre sus paredes.

Variable dominante: [[P]] (la distinción entre presión absoluta y manométrica es operativa solo cuando la presión manométrica es del orden de la atmosférica; a 700 bar la corrección de 1 atm es despreciable).
Límite de validez: la corrección es relevante cuando [[P]]_man < 10 atm; a presiones muy altas la contribución de la presión atmosférica es despreciable frente al error de no idealidad.

---

## 5. Globos de gas en medicina: anestesia con óxido nitroso

En cirugía, el óxido nitroso (N₂O) se almacena en botellas a [[T]] ambiente y [[P]] de 50 bar. Al abrir la válvula hacia el circuito de anestesia (a ~1 bar), el gas se expande y su [[T]] cae debido al efecto Joule–Thomson (para N₂O a temperatura ambiente este efecto es de enfriamiento). El caudalímetro debe compensar este enfriamiento para garantizar que la concentración y flujo de N₂O lleguen al paciente con exactitud.

La ley del gas ideal permite calcular cuántos moles de gas han salido de la botella midiendo la caída de [[P]] interior y conociendo [[V]] y [[T]] de la botella. Si la botella tiene un volumen de 5 L y [[P]] cae de 50 a 40 bar a [[T]] de 295 K:

La variación de [[n]] que ha salido es proporcional a la caída de [[P]] multiplicada por [[V]] y dividida entre el producto [[R]]·[[T]]. La caída de presión es 10 bar (equivalente a 10⁶ Pa); el volumen es 0.005 m³; el producto [[R]]·[[T]] resulta aproximadamente 2453 J/mol. Dividiendo el numerador (10⁶ por 0.005, que da 5000 J) entre 2453 J/mol se obtiene aproximadamente 2.04 mol, equivalente a unos 89.6 g de N₂O, que es [[n]] liberado.

Este cálculo, ejecutado en tiempo real por el equipo de anestesia, permite monitorizar el consumo del gas anestésico y anticipar cuándo debe cambiarse la botella sin interrumpir la intervención.

Variable dominante: [[n]] (la cantidad de gas administrado se controla midiendo la variación de [[P]] en el recipiente de almacenamiento).
Límite de validez: el modelo ideal introduce un error apreciable para N₂O a 50 bar porque su temperatura crítica es 309.6 K (ligeramente superior a temperatura ambiente): en condiciones de uso, el factor de compresibilidad Z es inferior a la unidad y la botella contiene más gas del que predice el modelo ideal. El equipo médico usa tablas de gas real para estimar con precisión la cantidad disponible.
`;export{e as default};
