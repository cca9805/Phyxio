# Aplicaciones

## 1. Ingeniería de motores térmicos y centrales eléctricas

Las centrales termoeléctricas (carbón, gas, nuclear) son motores de calor que operan entre un foco caliente (combustión o fisión) y un foco frío (condensador con agua de río o torre de refrigeración). La segunda ley, expresada en términos de [[DeltaS]], establece que ningún motor puede convertir completamente el calor en trabajo: una fracción debe cederse al foco frío.

La eficiencia máxima teórica es la de Carnot: η_Carnot = 1 − [[T_abs]]_fría / [[T_abs]]_caliente. Para una central de gas de ciclo combinado con [[T_abs]]_caliente = 1600 K y [[T_abs]]_fría = 300 K, la eficiencia de Carnot es del 81%, aunque las irreversibilidades reales reducen la eficiencia al 55–60%. El [[DeltaS]] generado por cada irreversibilidad es directamente proporcional al trabajo útil perdido: minimizar la producción de entropía equivale a maximizar la eficiencia energética.

Variable dominante: [[DeltaS]] del universo generado por ciclo determina el trabajo desperdiciado y la eficiencia real frente a la ideal; [[T_abs]] de los focos fija el límite de Carnot insuperable.
Límite de validez: el análisis de Clausius aplica a ciclos donde el fluido de trabajo pasa por estados de equilibrio; en turbinas reales con gradientes de temperatura internos y fricciones, se necesita análisis exergético más detallado, pero el límite de Clausius sigue siendo la cota superior absoluta.

## 2. Industria criogénica y licuefacción de gases

La producción de nitrógeno líquido (77 K, −196 °C), oxígeno líquido (90 K) y helio líquido (4 K) requiere comprimir y enfriar gases por debajo de su temperatura de licuefacción. La definición de Clausius es central en el diseño de intercambiadores de calor criogénicos: a temperaturas bajas, [[DeltaS]] = [[Q_rev]] / [[T_abs]] es muy grande para el mismo [[Q_rev]] porque [[T_abs]] es muy pequeño.

El trabajo mínimo teórico para licuar 1 mol de nitrógeno desde 300 K hasta 77 K está limitado por el aumento de entropía del entorno: W_min = [[T_abs]]_entorno × [[DeltaS]]_universo_min. Cualquier irreversibilidad en el compresor o el intercambiador aumenta [[DeltaS]]_universo y eleva el consumo de trabajo real por encima del mínimo. Las plantas criogénicas de alta eficiencia minimizan sistemáticamente la producción de entropía en cada etapa.

Variable dominante: [[T_abs]] es el denominador de [[DeltaS]] = [[Q_rev]] / [[T_abs]]; a temperaturas criogénicas, pequeñas pérdidas de calor producen enormes aumentos de [[DeltaS]] y costes energéticos desproporcionados.
Límite de validez: el modelo es exacto para procesos cuasi-estáticos; los flujos reales con gradientes de velocidad y temperatura requieren análisis de entropía de generación de Gouy-Stodola, que es una extensión del formalismo de Clausius.

## 3. Meteorología y ciencias del clima

La atmósfera terrestre es un motor de calor gigante impulsado por el diferencial de temperatura entre la superficie (media 288 K) y la tropopausa (media 220 K). El [[DeltaS]] generado por la disipación viscosa en los vórtices atmosféricos y la irreversibilidad en las nubes de convección determina la magnitud de la circulación general atmosférica.

La termodinámica de la atmósfera usa extensivamente la entropía potencial (θ = T × (P_0/P)^(R/cp)), que es una variable conservada en procesos adiabáticos. El cambio en entropía potencial de una parcela de aire es proporcional al [[DeltaS]] de esa parcela más el intercambio de calor latente con el entorno. Los modelos de predicción numérica del tiempo calculan la advección de entropía potencial para predecir la estabilidad atmosférica e identificar regiones propensas a convección severa.

Variable dominante: [[DeltaS]] de las parcelas de aire en procesos de condensación de nubes determina la energía disponible para tormentas y ciclones; [[T_abs]] de los diferentes niveles atmosféricos establece el potencial termodinámico de cada zona.
Límite de validez: el balance de entropía aplica a escala de parcelas de aire de 1–10 km; a escala microscópica de gotas individuales, se necesitan efectos de superficie y tensión interfacial que van más allá de la termodinámica clásica de Clausius.

## 4. Refrigeración industrial y bombas de calor

Un refrigerador o bomba de calor invierte el flujo espontáneo de calor mediante trabajo mecánico. Para extraer calor [[Q_rev]]_frío de un depósito frío a [[T_abs]]_fría, el refrigerador debe ceder más calor al foco caliente: [[Q_rev]]_caliente > [[Q_rev]]_frío. La diferencia es el trabajo consumido.

La eficiencia de un refrigerador ideal (coeficiente de funcionamiento, COP) está también limitada por la segunda ley: COP = [[T_abs]]_fría / ([[T_abs]]_caliente − [[T_abs]]_fría). Para un aire acondicionado que mantiene una habitación a 293 K cuando el exterior está a 308 K, el COP de Carnot es 293/15 ≈ 19.5: en teoría, con 1 kJ de trabajo se podrían transferir 19.5 kJ de calor. Los equipos reales tienen COP entre 3 y 6 debido a las irreversibilidades, que son directamente el [[DeltaS]] generado por fricción, turbulencia y gradientes de temperatura en los intercambiadores.

Variable dominante: [[DeltaS]] generado por irreversibilidades determina la diferencia entre el COP real y el de Carnot; [[T_abs]]_fría establece el límite del COP máximo posible.
Límite de validez: el análisis de Clausius aplica cuando los procesos son cuasi-estáticos; en ciclos reales de alta velocidad, el análisis de entropía de flujos compresibles es necesario pero sigue usando [[DeltaS]] = [[Q_rev]] / [[T_abs]] como base.

## 5. Química termodinámica y criterio de espontaneidad de Gibbs

En química, el criterio de espontaneidad de una reacción requiere conocer el cambio de entropía del sistema ([[DeltaS]]_reacción) y del entorno ([[DeltaS]]_entorno = −[[Q_rev]]_reacción / [[T_abs]]). La condición de espontaneidad es [[DeltaS]]_universo = [[DeltaS]]_reacción + [[DeltaS]]_entorno > 0.

La energía libre de Gibbs ΔG = ΔH − [[T_abs]] · [[DeltaS]] combina en una sola cantidad las contribuciones de entalpía y entropía. Cuando ΔG < 0, la reacción es espontánea a [[T_abs]] y presión constante. La dependencia de ΔG con [[T_abs]] revela que ciertas reacciones son espontáneas solo a alta temperatura (domina el término [[DeltaS]]) y otras solo a baja temperatura (domina el término ΔH). El diseño de procesos industriales de síntesis química (síntesis de amoniaco, craqueo del petróleo, producción de acero) requiere calcular [[DeltaS]] de reacción para optimizar la temperatura de operación.

Variable dominante: [[DeltaS]]_reacción determina el signo de la contribución entrópica a ΔG y define si la reacción favorece la espontaneidad a alta temperatura; [[T_abs]] actúa como amplificador del efecto entrópico.
Límite de validez: la fórmula [[DeltaS]] = [[Q_rev]] / [[T_abs]] aplica para calcular [[DeltaS]] de cada etapa de la reacción solo cuando la etapa es isotérmica; para reacciones con varios pasos a diferentes temperaturas, [[DeltaS]] total se suma de forma algebraica directa porque es función de estado.
