const e=`## 1. Diseño de intercambiadores de calor en climatización

En los sistemas de aire acondicionado, el refrigerante intercambia calor con el aire del local a través de un evaporador. El refrigerante se evapora a temperatura constante (proceso isotérmico a presión fija) absorbiendo calor del aire caliente. El ingeniero calcula [[DeltaS]] del refrigerante y del aire para evaluar la irreversibilidad del intercambio y dimensionar la superficie del evaporador de forma que la generación de entropía sea mínima.

Cuanto menor es la diferencia de temperaturas entre refrigerante y aire, menor es [[DeltaS]]_universo generado por unidad de calor transferido, pero mayor superficie de intercambio se necesita. El cálculo entrópico proporciona el criterio cuantitativo para el compromiso económico entre coste de material (superficie) y coste energético (irreversibilidad que reduce el COP del ciclo).

La hipótesis dominante es que el refrigerante se evapora isotérmicamente ([[DeltaS]] = [[Q_rev]]/[[T]]) mientras que el aire se enfría con [[c_p]] constante ([[DeltaS]] = [[m]]·[[c_p]]·ln([[T_f]]/[[T_i]])). El balance entrópico del intercambiador completo determina la eficiencia de segunda ley del equipo.

Variable dominante: [[DeltaS]]_universo generado en el intercambiador (J/(K·s))
Límite de validez: el modelo isotérmico del refrigerante falla si hay caída de presión significativa en el evaporador, porque entonces la temperatura de evaporación no es constante a lo largo del tubo.

## 2. Control de calidad en procesos de soldadura por fusión

En soldadura de metales, una junta se calienta localmente hasta la temperatura de fusión del material de aporte. La variación de entropía de la zona afectada térmicamente (ZAT) determina la microestructura final del metal: un enfriamiento rápido (alta tasa de variación de [[DeltaS]]) produce martensita (dura pero frágil), mientras que un enfriamiento lento produce ferrita-perlita (más dúctil).

El metalúrgico calcula [[DeltaS]] del metal en el enfriamiento posterior a la soldadura para predecir la velocidad de enfriamiento crítica y seleccionar los parámetros de soldadura (corriente, velocidad de pasada, precalentamiento) que minimicen el riesgo de fractura.

Se aplica la fórmula logarítmica con [[c_p]] del acero (≈ 500 J/(kg·K)) desde la temperatura de fusión (≈ 1800 K) hasta la temperatura ambiente. La contribución entrópica del cambio de fase (solidificación) se suma aparte como calor latente dividido por la temperatura de solidificación.

Variable dominante: [[DeltaS]] por unidad de masa de la ZAT (J/(kg·K))
Límite de validez: el modelo falla si [[c_p]] varía drásticamente en el rango (transiciones alotrópicas del hierro a 1185 K y 1667 K alteran [[c_p]] hasta un 20%).

## 3. Evaluación de eficiencia en turbinas de gas aeronáuticas

En un turborreactor, el gas de combustión se expande desde la cámara de combustión (≈ 1600 K, alta presión) hasta el escape (≈ 800 K, presión atmosférica). La eficiencia isentrópica de la turbina se define comparando el trabajo real extraído con el trabajo máximo teórico (proceso isentrópico, [[DeltaS]] = 0).

El ingeniero calcula [[DeltaS]]_gas usando la fórmula de gas ideal general con cambio simultáneo de temperatura y volumen. La diferencia entre el [[DeltaS]] real y cero (caso ideal) cuantifica directamente las pérdidas por fricción aerodinámica, turbulencia y transferencia de calor parásita en los álabes.

La fórmula aplicada es [[DeltaS]] = [[n]]·[[c_v]]·ln([[T_f]]/[[T_i]]) + [[n]]·[[R]]·ln([[V_f]]/[[V_i]]), donde ambos términos contribuyen simultáneamente. Un [[DeltaS]] total mayor que cero indica que la turbina genera irreversibilidad interna proporcional a esa diferencia.

Variable dominante: [[DeltaS]] del gas por unidad de masa (J/(kg·K)) como indicador de pérdidas internas
Límite de validez: a temperaturas > 2000 K la disociación de CO₂ y H₂O modifica [[c_v]] significativamente; además, los gases de combustión no son estrictamente un gas ideal puro.

## 4. Conservación de alimentos mediante congelación rápida

En la industria alimentaria, la congelación ultrarrápida (criogénica, con nitrógeno líquido a 77 K) se prefiere a la congelación lenta porque produce cristales de hielo más pequeños que preservan la textura celular. La diferencia termodinámica se analiza mediante la variación de entropía del alimento durante la congelación.

El proceso se divide en tramos: enfriamiento del alimento líquido desde temperatura ambiente ([[T_i]] ≈ 293 K) hasta el punto de congelación ([[T]] ≈ 271 K para alimentos con solutos), cambio de fase isotérmico (solidificación) y enfriamiento del sólido hasta la temperatura de almacenamiento ([[T_f]] ≈ 255 K). Cada tramo aporta su contribución a [[DeltaS]].

La contribución dominante es el cambio de fase: con un calor latente de congelación de ≈ 334 kJ/kg y una temperatura de congelación de 271 K, [[DeltaS]]_fase ≈ −334000/271 ≈ −1232 J/(kg·K) para el alimento. La velocidad a la que se extrae esa entropía (J/(K·s)) determina el tamaño de los cristales y la calidad del producto.

Variable dominante: tasa de variación de [[DeltaS]] durante la solidificación (J/(K·s))
Límite de validez: el modelo isotérmico de cambio de fase no es exacto cuando hay solutos que deprimen el punto de congelación de forma gradual (rango de congelación en vez de punto único).

## 5. Diseño de aislamiento térmico en sondas espaciales

Las sondas interplanetarias operan en entornos con gradientes térmicos extremos: la cara iluminada por el sol puede alcanzar 400 K mientras que la cara en sombra baja a 100 K. Los sistemas de control térmico buscan minimizar la variación de entropía de los componentes electrónicos sensibles, manteniéndolos en un rango estrecho de temperaturas.

El cálculo de [[DeltaS]] de un componente electrónico que fluctúa entre [[T_i]] = 280 K y [[T_f]] = 320 K (rango aceptable) frente a uno que fluctúa entre 200 K y 400 K (rango peligroso) cuantifica el daño térmico acumulado. Cada ciclo térmico produce un [[DeltaS]] = [[m]]·[[c_p]]·ln([[T_f]]/[[T_i]]) que contribuye a la fatiga térmica del material.

El diseño del escudo térmico multicapa (MLI) y los heat pipes se optimizan para que [[DeltaS]] por ciclo orbital sea mínimo. Un [[DeltaS]] por ciclo inferior a cierto umbral garantiza una vida útil de miles de ciclos orbitales sin degradación significativa de los contactos de soldadura y semiconductores.

Variable dominante: [[DeltaS]] acumulado por ciclo orbital del componente (J/K por ciclo)
Límite de validez: el modelo falla a temperaturas inferiores a 50 K (ley de Debye) donde [[c_p]] ya no es constante, y cuando la radiación térmica domina sobre la conducción en el balance energético del componente.
`;export{e as default};
