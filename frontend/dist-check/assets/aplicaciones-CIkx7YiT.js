const e=`## 1. Neumáticos de vehículos y variación estacional de presión

Los neumáticos de automóvil son recipientes de [[V]] prácticamente constante (el caucho es casi inextensible a la presión de inflado). Contienen aire a una [[P]] típica de 2.2–2.5 bar (220 000–250 000 Pa) a la temperatura de llenado. Cuando la [[T]] ambiental varía entre invierno (−10 °C, 263 K) y verano (40 °C, 313 K), la presión cambia en el cociente de temperaturas absolutas (313 K entre 263 K, aproximadamente 1.19), lo que representa un aumento del 19 %.

La ley del gas ideal en forma isocórica ([[n]] constante) permite calcular exactamente cuánto ha cambiado [[P]]: al conservarse el cociente [[P]]/[[T]], la [[P]] final se obtiene multiplicando la inicial por el cociente de temperaturas. Los fabricantes recomiendan verificar la presión en frío porque ese es el estado más próximo al modelo ideal: en caliente, el calor generado por la fricción con el asfalto añade una contribución adicional difícil de separar.

Variable dominante: [[T]] (la presión cambia en proporción directa con la temperatura absoluta).
Límite de validez: el modelo ideal aplica mientras el caucho no se deforme de forma significativa y la composición del gas no cambie (por ejemplo, por pérdida de humedad del aire comprimido).

---

## 2. Globos meteorológicos: expansión en la ascensión

Un globo meteorológico se lanza con [[n]] = 3.50 mol de helio a 1 atm y 15 °C (288 K). Al alcanzar 8 km de altitud, la presión exterior desciende a 0.351 atm y la temperatura a −35 °C (238 K). La membrana mantiene siempre [[P]] interior igual a la exterior.

El volumen inicial es [[V]]₁ = [[n]]·[[R]]·[[T]]₁/[[P]]₁ ≈ 82.6 L. El volumen a 8 km es [[V]]₂ = [[n]]·[[R]]·[[T]]₂/[[P]]₂ ≈ 219 L. El globo se expande hasta 2.65 veces su volumen inicial: la caída de [[P]] (factor ≈ 2.85) domina sobre la caída de [[T]] (factor ≈ 0.83). Los globos se inflan solo parcialmente al lanzamiento para disponer de esta capacidad de expansión sin riesgo de reventarse.

Variable dominante: [[P]] (la caída de presión exterior es el factor dominante de la expansión; el descenso de temperatura actúa en sentido contrario pero con menor magnitud).
Límite de validez: el helio a 1 atm y −35 °C está muy lejos de su temperatura crítica (5.2 K), por lo que Z ≈ 1.000 y el modelo ideal es excelente.

---

## 3. Buceo con escafandra: expansión del gas al ascender

Un buceador desciende a 30 m, donde la presión total es 4 atm (405 000 Pa). Sus pulmones contienen aire a esa presión y a [[T]] corporal (37 °C, 310 K). Al ascender a la superficie (1 atm, misma [[T]]), la ley de Boyle (proceso isotérmico, [[n]] fijo) predice que el volumen pulmonar se cuadruplica. Los pulmones solo pueden expandirse un 30–40 % antes de dañarse: si el buceador asciende sin exhalar, la sobreexpansión pulmonar provoca un barotrauma grave.

Variable dominante: [[P]] (la expansión del gas es inversamente proporcional a la presión para un proceso isotérmico).
Límite de validez: el modelo isotérmico es válido si el ascenso es suficientemente lento para que el gas permanezca a temperatura corporal. En ascensos muy rápidos deben considerarse efectos adiabáticos.

---

## 4. Manómetro de neumáticos: presión absoluta frente a presión manométrica

Los manómetros de neumáticos miden la **presión manométrica** (relativa a la atmosférica), no la presión absoluta. La ley del gas ideal requiere la **presión absoluta**: [[P]]_abs = [[P]]_man + [[P]]_atm.

Si el manómetro marca 2.1 bar y la presión atmosférica es 1.013 bar, la presión absoluta es 3.113 bar ≈ 3.07 atm. Usar directamente 2.1 bar en la ley del gas ideal produciría un error del 32 % en el cálculo de [[n]] o [[T]].

Variable dominante: [[P]] (la distinción entre presión absoluta y manométrica es operativamente importante cuando la presión manométrica es del orden de la atmosférica; a presiones industriales muy altas, la corrección de 1 atm es despreciable).
Límite de validez: la corrección es relevante siempre que [[P]]_man sea menor de 10 atm.

---

## 5. Cilindros de gas médico: óxido nitroso en anestesia

El óxido nitroso (N₂O) se almacena en cilindros médicos a [[T]] ambiente y [[P]] de 50 bar. Al abrirse la válvula hacia el circuito de anestesia (~1 bar), el gas se expande. La ley del gas ideal permite calcular cuántos moles han salido del cilindro midiendo la caída de [[P]] interna y conociendo [[V]] y [[T]] del cilindro.

Si el cilindro tiene [[V]] = 5.0 L (0.005 m³) y [[P]] cae de 50 bar a 40 bar a [[T]] = 295 K: la variación de [[n]] es proporcional a la caída de [[P]] (10⁶ Pa) multiplicada por [[V]] (0.005 m³) y dividida entre [[R]]·[[T]] (≈ 2453 J/mol). El resultado es Δ[[n]] ≈ 2.04 mol ≈ 89.6 g de N₂O suministrados. Este cálculo, realizado en tiempo real por el equipo de anestesia, permite anticipar cuándo debe cambiarse el cilindro sin interrumpir el procedimiento.

Variable dominante: [[n]] (la cantidad de gas administrada se controla midiendo la caída de [[P]] en el cilindro de almacenamiento).
Límite de validez: el modelo ideal introduce un error apreciable para N₂O a 50 bar, porque su temperatura crítica es 309.6 K (ligeramente superior a la temperatura ambiente): el factor Z es inferior a la unidad y el cilindro contiene más gas del que predice el modelo ideal. Los equipos médicos usan tablas de gas real para estimar la cantidad disponible con precisión.
`;export{e as default};
