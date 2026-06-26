# Ejemplo tipo examen

## Enunciado

Un hogar tiene conectados simultáneamente los siguientes electrodomésticos en el mismo circuito de 16 A: un horno eléctrico de 2200 W, un microondas de 1200 W y una cafetera de 800 W. La tensión de la red es de 230 V. Se pide:

(a) Calcular la potencia total consumida por los tres electrodomésticos.

(b) Determinar la corriente total que circula por el circuito e indicar si excede la capacidad de la protección de 16 A.

(c) Calcular la resistencia equivalente del conjunto de electrodomésticos conectados en paralelo.

(d) Si se añade adicionalmente un tostador de 1000 W, ¿cuál sería la nueva corriente total? ¿Qué consecuencias tendría esta situación?

## Datos

- Horno eléctrico: [[potencia_electrica]]_horno = 2200 W
- Microondas: [[potencia_electrica]]_micro = 1200 W
- Cafetera: [[potencia_electrica]]_cafe = 800 W
- Tostador adicional (apartado d): [[potencia_electrica]]_tost = 1000 W
- Tensión de red: [[tension_electrica]] = 230 V
- Protección del circuito: [[intensidad_de_corriente]]_max = 16 A
- Configuración: Conexión en paralelo a la misma tensión

## Definición del sistema

El sistema consiste en tres cargas resistivas puras conectadas en paralelo a una fuente de tensión alterna de 230 V (tensión nominal doméstica europea). Cada electrodoméstico se modela como una resistencia equivalente que consume potencia activa según su especificación nominal.

La conexión en paralelo implica que todos los electrodomésticos comparten la misma diferencia de potencial [[tension_electrica]] = 230 V, mientras que la corriente total [[intensidad_de_corriente]]_total es la suma algebraica de las corrientes individuales consumidas por cada carga.

El circuito está protegido por un magnetotérmico de 16 A, que actúa como límite de seguridad térmica y de cortocircuito.

## Modelo físico

El modelo se basa en las relaciones fundamentales de circuitos eléctricos en régimen estacionario:

{{f:potencia_base}}

Esta ecuación relaciona potencia eléctrica, tensión y corriente instantáneas. Para cargas resistivas puras, también puede expresarse en función de la resistencia:

{{f:potencia_resistiva}}

Para la conexión en paralelo de resistencias, la resistencia equivalente se calcula como la inversa de la suma de inversas de cada resistencia individual.

Donde [[resistencia_electrica]]_eq es la resistencia equivalente del conjunto, y [[resistencia_electrica]]₁, [[resistencia_electrica]]₂, [[resistencia_electrica]]₃ son las resistencias individuales de cada electrodoméstico.

## Justificación del modelo

El modelo de cargas resistivas puras es válido para electrodomésticos de calefacción como hornos, tostadores, cafeteras y la resistencia del microondas (magnetrón). Estos dispositivos operan mediante conversión directa de energía eléctrica en calor mediante el efecto Joule, con factor de potencia prácticamente unitario (cos φ ≈ 1).

**Causalidad física**: La potencia disipada en una resistencia depende cuadráticamente de la tensión aplicada. Como la tensión de red se mantiene constante (regulada por la distribuidora), cada electrodoméstico consume la potencia nominal especificada independientemente de otros dispositivos conectados. La única limitación es la capacidad del conductor y la protección del circuito.

**Dominio de validez**: El modelo es válido cuando:
- La tensión de red se mantiene en 230 V ± 10% (207-253 V según EN 50160)
- Los electrodomésticos operan en régimen estacionario (no durante arranque)
- El cableado tiene resistencia despreciable comparada con las cargas
- No hay armónicos significativos que alteren la potencia aparente

El modelo deja de ser válido si la caída de tensión en el cableado es significativa (> 5%), lo que ocurriría si la corriente total excediera ampliamente la capacidad del conductor, o durante transitorios de arranque de motores donde las corrientes pueden ser 3-7 veces superiores a la nominal.

## Resolución simbólica

**(a) Potencia total**

Para cargas en paralelo, la potencia total consumida es la suma algebraica de las potencias individuales:

[[potencia_electrica]]_total = [[potencia_electrica]]_horno + [[potencia_electrica]]_micro + [[potencia_electrica]]_cafe

**(b) Corriente total**

Aplicando la ecuación de potencia [[potencia_electrica]] = [[tension_electrica]]·[[intensidad_de_corriente]], despejamos la corriente:

[[intensidad_de_corriente]]_total = [[potencia_electrica]]_total / [[tension_electrica]]

**(c) Resistencia equivalente**

Primero calculamos las resistencias individuales de cada electrodoméstico usando [[resistencia_electrica]] = [[tension_electrica]]² / [[potencia_electrica]]:

- [[resistencia_electrica]]_horno = [[tension_electrica]]² / [[potencia_electrica]]_horno
- [[resistencia_electrica]]_micro = [[tension_electrica]]² / [[potencia_electrica]]_micro
- [[resistencia_electrica]]_cafe = [[tension_electrica]]² / [[potencia_electrica]]_cafe

Luego aplicamos la fórmula de resistencias en paralelo para obtener [[resistencia_electrica]]_eq.

**(d) Con tostador adicional**

La nueva potencia total incluye el tostador:

[[potencia_electrica]]_nueva = [[potencia_electrica]]_total + [[potencia_electrica]]_tost

La nueva corriente se calcula dividiendo la nueva [[potencia_electrica]]_nueva entre [[tension_electrica]].

**(e) Energía consumida en 2 horas de uso normal**

La energía acumulada [[energia_consumida]] durante un tiempo [[t_h]] se obtiene con:

{{f:energia}}

## Sustitución numérica

**(a) Cálculo de potencia total**

Sumando cada potencia: horno 2200 W más microondas 1200 W más cafetera 800 W.

[[potencia_electrica]]_total ≈ 4200 W (4.2 kW)

**(b) Cálculo de corriente total**

Dividiendo [[potencia_electrica]]_total entre [[tension_electrica]]: 4200 W entre 230 V da aproximadamente 18.26 A.

[[intensidad_de_corriente]]_total ≈ 18.3 A

**Evaluación de límite**: La corriente calculada de 18.3 A excede la protección de 16 A del circuito. Esta condición es insegura.

**(c) Cálculo de resistencias individuales y equivalente**

{{f:potencia_resistiva}}

Para el horno: elevar 230 V al cuadrado y dividir por 2200 W da aproximadamente 24.0 Ω. Por tanto [[resistencia_electrica]]_horno ≈ 24.0 Ω.

Para el microondas: elevar 230 V al cuadrado y dividir por 1200 W da aproximadamente 44.1 Ω. Por tanto [[resistencia_electrica]]_micro ≈ 44.1 Ω.

Para la cafetera: elevar 230 V al cuadrado y dividir por 800 W da aproximadamente 66.1 Ω. Por tanto [[resistencia_electrica]]_cafe ≈ 66.1 Ω.

Aplicando la fórmula de paralelo (inversa de la suma de inversas):

[[resistencia_electrica]]_eq ≈ 12.6 Ω

Verificación: dividir [[tension_electrica]] (230 V) entre [[intensidad_de_corriente]]_total (18.26 A) también da aproximadamente 12.6 Ω.

**(e) Energía consumida durante 2 [[t_h]] con los tres electrodomésticos funcionando**

Convirtiendo primero la potencia total a [[potencia_en_kilovatios]] = 4.2 kW, multiplicamos por [[t_h]] (2 h):

[[energia_consumida]] ≈ 8.4 kWh (aproximadamente 1.26 € a tarifa media de 0.15 €/kWh).

**(d) Escenario con tostador adicional**

Nueva potencia total:

Añadiendo el tostador: 4200 W más 1000 W del tostador.

[[potencia_electrica]]_nueva ≈ 5200 W (5.2 kW)

Nueva corriente total:

Dividiendo la nueva potencia total entre [[tension_electrica]]: 5200 W entre 230 V.

[[intensidad_de_corriente]]_nueva ≈ 22.6 A

## Validación dimensional

Para la ecuación de potencia ([[potencia_electrica]] igual a [[tension_electrica]] por [[intensidad_de_corriente]]):

- Unidades de potencia: `[M L² T⁻³]` (vatios)
- Unidades de tensión: `[M L² T⁻³ I⁻¹]` (voltios)
- Unidades de corriente: `[I]` (amperios)
- Verificación: `[M L² T⁻³ I⁻¹]` · `[I]` = `[M L² T⁻³]` ✓

Para la ecuación de resistencia ([[resistencia_electrica]] igual a [[tension_electrica]] al cuadrado dividido entre [[potencia_electrica]]):

- Unidades de resistencia: `[M L² T⁻³ I⁻²]` (ohmios)
- Unidades de tensión al cuadrado: `[M² L⁴ T⁻⁶ I⁻²]`
- Unidades de potencia: `[M L² T⁻³]`
- Verificación: `[M² L⁴ T⁻⁶ I⁻²]` / `[M L² T⁻³]` = `[M L² T⁻³ I⁻²]` ✓

Para la resistencia equivalente en paralelo:

- Unidades de conductancia (1/[[resistencia_electrica]]): `[M⁻¹ L⁻² T³ I²]` (siemens)
- Suma de conductancias: `[M⁻¹ L⁻² T³ I²]` + `[M⁻¹ L⁻² T³ I²]` = `[M⁻¹ L⁻² T³ I²]` ✓
- Inverso de conductancia total: `[M L² T⁻³ I⁻²]` = unidades de resistencia ✓

## Interpretación física

El análisis revela una situación de riesgo eléctrico inmediato. Con los tres electrodomésticos operando simultáneamente, la corriente demandada (18.3 A) excede en un 14% la capacidad nominal de la protección (16 A). Físicamente, esto significa que el magnetotérmico debería dispararse para proteger el cableado, interrumpiendo el suministro eléctrico.

Si la protección fallara o estuviera sobredimensionada inadecuadamente, el cableado del circuito (típicamente 1.5 mm² o 2.5 mm² de sección) transportaría una corriente superior a su capacidad térmica continua. Según el efecto Joule, la potencia disipada como calor en el cable es proporcional al cuadrado de [[intensidad_de_corriente]] multiplicado por la resistencia del cable. Un aumento del 14% en corriente produce un aumento del 30% en calor generado, acelerando la degradación del aislamiento térmico y aumentando el riesgo de incendio.

La resistencia equivalente calculada (12.6 Ω) es menor que cualquiera de las resistencias individuales, lo cual es característico de conexiones en paralelo. Este valor bajo de resistencia equivalente es precisamente lo que permite la alta corriente total: la red "ve" una carga casi como un cortocircuito comparada con los valores individuales.

El apartado (d) demuestra la rápida escalada del riesgo al añadir cargas. El tostador adicional eleva la corriente a 22.6 A, un 41% por encima del límite de protección. Esta condición es crítica y requiere intervención inmediata: redistribución de cargas entre circuitos, instalación de un circuito dedicado de mayor capacidad para la cocina, o gestión activa de la simultaneidad (no operar todos los electrodomésticos al mismo tiempo).

Si la resistencia de cableado fuera significativa (por ejemplo, 0.5 Ω en una instalación antigua), la caída de tensión en los cables sería el producto de [[intensidad_de_corriente]] (18.3 A) por esa resistencia (0.5 Ω), aproximadamente 9.2 V. Los electrodomésticos recibirían solo 220.8 V en lugar de 230 V, reduciendo su potencia efectiva y prolongando los tiempos de operación, lo cual compensaría parcialmente pero no eliminaría el riesgo térmico del cableado.

---

# Ejemplo de aplicación real


## Contexto

María vive en un piso antiguo del centro de Madrid con instalación eléctrica de más de 40 años. Su cuadro eléctrico tiene protecciones de 16 A por circuito, y el cableado es de sección 1.5 mm² (capacidad nominal ~16 A). María ha notado que últimamente el magnetotérmico de la cocina salta con frecuencia, especialmente por la mañana cuando prepara el desayuno.

Su cocina tiene conectados: una cafetera (800 W), un tostador (1000 W), un hervidor de agua (2200 W), y el frigorífico (150 W). María suele encender la cafetera, el tostador y el hervidor simultáneamente por la mañana para preparar desayuno rápido. El frigorífico permanece conectado permanentemente.

María necesita entender por qué salta la protección y qué soluciones tiene disponibles sin necesidad de reforma completa de la instalación.

## Estimación física

Para diagnosticar el problema de María, aplicamos las relaciones fundamentales de potencia y corriente del leaf. Además de la corriente, calculamos la energía [[energia_consumida]] consumida durante el desayuno (aproximadamente 15 minutos, es decir 0.25 [[t_h]]) para cuantificar el impacto económico.

Primero, calculamos la potencia total simultánea cuando María opera sus electrodomésticos de desayuno más el frigorífico base:

Sumando: cafetera 800 W, tostador 1000 W, hervidor 2200 W y frigorífico 150 W.

[[potencia_electrica]]_total ≈ 4150 W (4.15 kW)

Aplicando la ecuación de potencia para obtener la corriente:

{{f:potencia_base}}

Dividiendo la potencia total entre la tensión doméstica de 230 V:

Dividiendo [[potencia_electrica]]_total entre [[tension_electrica]]: 4150 W entre 230 V.

[[intensidad_de_corriente]]_total ≈ 18.0 A

Esta corriente excede la protección de 16 A en un 12.5%, lo cual explica los disparos frecuentes del magnetotérmico. La protección está funcionando correctamente al detectar una sobrecarga.

La [[energia_consumida]] consumida en ese desayuno de 0.25 [[t_h]] se calcula con la fórmula de energía:

{{f:energia}}

[[potencia_en_kilovatios]] × [[t_h]] = 4.15 kW × 0.25 h ≈ 1.04 kWh (aproximadamente 0.16 € a tarifa media).

Analicemos alternativas de gestión de carga:

**Escenario 1**: Si María usa solo cafetera + tostador + frigorífico (sin hervidor):

Cafetera 800 W más tostador 1000 W más frigorífico 150 W: potencia total 1950 W. Dividida entre 230 V:

Corriente [[intensidad_de_corriente]] ≈ 8.5 A (dentro del margen seguro < 16 A)

**Escenario 2**: Si María usa solo hervidor + cafetera + frigorífico (sin tostador):

Hervidor 2200 W más cafetera 800 W más frigorífico 150 W: potencia total 3150 W. Dividida entre 230 V:

Corriente [[intensidad_de_corriente]] ≈ 13.7 A (dentro de margen aceptable, aunque elevado)

**Escenario 3**: Si María escalona el uso (hervidor primero, luego cafetera cuando el hervidor apague):

Potencia máxima instantánea: solo el hervidor activo (2200 W) más frigorífico (150 W).

Corriente máxima [[intensidad_de_corriente]] ≈ 10.2 A (margen cómodo y seguro)

## Interpretación

El problema de María es un caso clásico de evolución de hábitos de consumo sin actualización correspondiente de la infraestructura eléctrica. Cuando la vivienda fue cableada hace 40 años, era improbable que una cocina doméstica tuviera tantos electrodomésticos de alta potencia disponibles simultáneamente. La cultura del "desayuno exprés" con múltiples aparatos operando al mismo tiempo es un fenómeno reciente.

Físicamente, los disparos del magnetotérmico son una protección necesaria, no una molestia. Sin ellos, el cableado de 1.5 mm² (diseñado para ~16 A máximo) transportaría 18 A continuos, generando calor por efecto Joule que degradaría progresivamente el aislamiento PVC del cable. Con el tiempo, esta degradación podría llevar a cortocircuitos o incendios.

Las soluciones disponibles para María, ordenadas por complejidad creciente:

1. **Gestión temporal (sin coste)**: Escalonar el uso de electrodomésticos. Usar el hervidor primero (2 minutos), luego la cafetera (3 minutos), finalmente el tostador (2 minutos). Esta secuencia mantiene la corriente máxima alrededor de 10 A, bien dentro de la capacidad del circuito.

2. **Redistribución de carga (bajo coste)**: Si hay otro circuito disponible (salón, dormitorio), conectar el hervidor a ese circuito mediante extensión temporal durante el desayuno. El frigorífico debe permanecer en el circuito de cocina por proximidad.

3. **Sustitución de electrodomésticos (coste medio)**: Reemplazar el hervidor de 2200 W por uno de menor potencia (1000-1500 W) o cambiar a hervidor de inducción más eficiente. Alternativamente, usar una thermomix u otro aparato multifunción que combine funciones.

4. **Actualización de circuito (alto coste)**: Contratar a un electricista para instalar un circuito dedicado de cocina con cable 2.5 mm² y protección de 20-25 A. Esta es la solución definitiva pero requiere inversión significativa.

La solución más adecuada para María, considerando que vive en alquiler y no puede realizar obras mayores, es la gestión temporal. Con solo cambiar sus hábitos de preparación de desayuno (escalonar en lugar de simultanear), resuelve el problema sin coste alguno.

La lección física subyacente es que la potencia eléctrica demandada es el resultado de decisiones humanas de uso, no solo de la presencia de electrodomésticos. La simultaneidad es una variable gestionable que impacta directamente sobre la seguridad eléctrica y el confort de uso.
