# Aplicaciones

## 1. Cálculo de consumo energético en elevadores y grúas

**Contexto:** Empresas de construcción necesitan estimar la potencia eléctrica de los motores de grúas para levantar materiales.

- Para una carga máxima $m=2000\,\text{kg}$ a $h=50\,\text{m}$ en $t=2\,\text{min}$,
  $$W = mgh = 2000 \times 10 \times 50 = 1 \times 10^6\,\text{J}$$
  $$P = W/t = 1\,\text{MJ} / 120\,\text{s} = 8.3\,\text{kW}$$
- Añadir un factor de seguridad del $25\%$ para fricción y eficiencia del motor (rendimiento $\eta=0.8$), motor requerido $\approx 12.5\,\text{kW}$.
 - Añadir un factor de seguridad del $25\%$ para fricción y eficiencia del motor (rendimiento $\eta=0.8$), motor requerido $\approx 12.5\,\text{kW}$. 
 
 **Decisión de compra:** elegir motor de $15\,\text{kW}$ para cubrir picos y asegurar vida útil.

 ---

 ## 2. Dimensionado de sistemas de almacenamiento energético gravitatorio (PHES y alternativas)

 - Ejemplo rápido: embalse de agua elevado $V=500\,\text{m}^3$, $h=100\,\text{m}$ almacena $E=\rho g V h = 5\times10^8\,\text{J} \approx 139\,\text{kWh}$. Para suministrar 10 MW pico se necesitarían ~0.0139 h = 50 s de descarga útil (en la práctica, eficiencia 70–85% y pérdidas de red).  

 **Criterios de diseño:** elegir altura disponible $h$ y volumen $V$ según la potencia pico y duración requerida. Comparar con alternativas (baterías: densidad energética, coste por kWh, ciclos de vida). Calcular eficiencia global: $\eta_{roundtrip} = \eta_{pump}\eta_{turbine}\eta_{grid}$ (típico 70–85%).

 ---

 ## 3. Dimensionado de motores y sistemas de tracción para pendientes (transporte)

 - Ejemplo calculado: para pendiente media $\alpha=6\%$, carga $m=40,000$ kg, trabajo por longitud $dW/dx = mg\sin\alpha \approx 24,000$ N. A velocidad $v=25$ m/s, potencia adicional requerida $P=Fv=24,000\times25=600,000$ W = 600 kW.  

 **Decisión técnica:** seleccionar motor/transmisión con margen térmico y dinámico (factor 1.2–1.5 sobre potencia continua), y verificar capacidad de frenado regenerativo en descenso para recuperar parte de la energía.

 ---

 ## 4. Geodesia, GNSS y correcciones relativistas: aplicaciones de alta precisión

 - La diferencia de potencial gravitatorio entre dos puntos causa corrimiento temporal en relojes atómicos; para precisión milimétrica en alturas, se usan correcciones $\Delta U / c^2$ en frecuencia.  

 **Ejemplo práctico:** Un cambio de altura $\Delta h=1$ m implica cambio relativo de frecuencia $\Delta f/f \approx g\Delta h / c^2 \approx 1.1\times10^{-16}$. Relojes ópticos modernos (10^-18) detectan micrometros geométricos; útil en altimetría y recursos hídricos.

 ---

 ## 5. Astrofísica aplicada y energía de maniobras orbitales

 - Cálculo de "delta-v" para transferencias orbitales se traduce en trabajo por unidad de masa necesario. Para lanzamiento o cambios de órbita, $\Delta E/m$ se obtiene a partir de diferencias energía total orbital $E=\tfrac{1}{2}v^2- GM/r$.  

 **Ejemplo**: Transferencia de Hohmann desde órbita baja (LEO) a GTO requiere $\Delta v$ característico; convertir a energía por masa y calcular gasto energético y masa expendida según la ecuación de Tsiolkovsky para dimensionar combustible y motor.

 ---

 ## 6. Energía mareomotriz y potencial gravitatorio de cuerpos celestes

 - El potencial gravitatorio gobierna la energía disponible en mareas y corrientes de marea; diseño de turbinas mareomotrices requiere cálculo de diferencia de potencial gravitacional y flujo de masa de agua para estimar potencia extractable.

 **Criterio:** integrar energía potencial por ciclo de marea; comparar con impacto ambiental y coste por kWh.

 ---

 ## 7. Física de impacto y diseño orbital—aplicaciones en defensa y exploración

 - La energía potencial transformada durante la reentrada o en maniobras de captura orbital determina requisitos térmicos y estructurales. Calcular energía de impacto y diseñar escudos térmicos/absorción de energía.

 ---

 ## Recomendaciones metodológicas generales

 - Mantener consistencia en la referencia de potencial (superficie vs. infinito) y documentarla en los cálculos.  
 - Incluir pérdidas y eficiencia en todas las estimaciones (motores, bombas, turbinas).  
 - Validar modelos $mgh$ vs. $-GMm/r$ según el rango de alturas y distancia relativa al cuerpo central.  
 - Para proyectos de infraestructura, acompañar cálculos energéticos con análisis económico (CAPEX/OPEX) y análisis de ciclo de vida.


---

## 2. Dimensionado de sistemas de almacenamiento energético gravitatorio (p.ej., pilas de bloques o volantes de inercia verticales)

- Volumen de agua $V=500\,\text{m}^3$ elevado $h=100\,\text{m}$ almacena energía:
  $$E = \rho g V h = 1000 \times 10 \times 500 \times 100 = 5 \times 10^8\,\text{J} = 139\,\text{kWh}$$
- Permite gestionar la demanda pico en redes eléctricas cuando se descarga el agua.

---

## 3. Planificación de rampas y desniveles en transporte terrestre

- Para camiones que suben una rampa de $\alpha=6\%$ con carga $m=40,000\,\text{kg}$ a $v=25\,\text{m/s}$,
  el trabajo por unidad de longitud: $dW/dx = mg\sin\alpha \approx 40\,000 \times 10 \times 0.06 = 24,000\,\text{N}$.
- Energía por kilómetro: $24,000\,\text{N} \times 1000\,\text{m} = 24\,\text{MJ}$.
- Permite calcular consumo adicional de combustible y dimensionar motores.

---

## 4. Estimación de energías en geodesia y altura relativa

- Satélites GNSS usan potencial gravitatorio para determinar diferencias de altura con precisión milimétrica.
- La energía potencial gravitatoria es proporcional a la altura; mediciones de frecuencia de reloj relativista calibran $\Delta U$.

---

## 5. Investigaciones de física fundamental y astrofísica

- Estudiar velocidades de escape de planetas extrasolares para predecir pérdida atmosférica.
- Calcular la energía liberada por acreción de materia en discos circumestelares usando el potencial universal; esencial en modelos de formación de estrellas y AGNs.
