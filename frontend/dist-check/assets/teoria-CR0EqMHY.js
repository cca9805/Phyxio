const e=`# Seguridad eléctrica

## Contexto conceptual

La seguridad eléctrica es el conjunto de principios físicos y normativos que determinan cuándo una instalación eléctrica puede causar daño a personas o bienes. Cada límite normativo tiene una justificación física medible basada en la respuesta fisiológica del cuerpo humano a la corriente eléctrica.

En el ámbito doméstico, la red a 230 V AC 50 Hz es suficiente para causar la muerte si una persona queda conectada entre fase y tierra. La convivencia segura con esta tensión es consecuencia directa de las protecciones físicas instaladas: el interruptor diferencial y el interruptor magnetotérmico.

Comprender la seguridad eléctrica exige conocer tres conceptos inseparables: la tensión de contacto aplicada al cuerpo, la resistencia corporal que limita el paso de corriente, y la corriente resultante que produce el daño fisiológico.

## 🟢 Nivel esencial

Cuando una persona toca un conductor con tensión, el cuerpo humano actúa como una resistencia en el circuito. La corriente resultante depende de la tensión de la fuente y de la resistencia que oponga el cuerpo.

El daño biológico no lo produce la tensión directamente, sino la **corriente eléctrica que circula por los tejidos**. Corrientes inferiores a 1 mA son imperceptibles. Entre 1 y 10 mA provocan cosquilleo. A partir de 10 mA los músculos se contraen involuntariamente (tetanización), impidiendo soltar el conductor. Entre 30 y 100 mA existe riesgo real de fibrilación ventricular si la exposición supera los 30 ms.

La **resistencia corporal** varía drásticamente según las condiciones de la piel. Con manos secas puede superar los 50 000 Ω, mientras que con manos mojadas cae hasta 1 000 Ω, multiplicando por 50 la corriente resultante. Por ello, las normas son extremadamente estrictas en baños y zonas húmedas.

## 🔵 Nivel formal

La relación fundamental de la seguridad eléctrica es la Ley de Ohm aplicada al circuito de contacto:

{{f:corriente_corporal}}

donde [[I_cuerpo]] es la corriente que circula por el cuerpo (en amperios), [[V_contacto]] es la tensión de contacto (en voltios) y [[R_cuerpo]] es la resistencia eléctrica del cuerpo (en ohmios).

El valor normativo de referencia para [[R_cuerpo]] es de 1000 Ω (según la norma IEC 60479), que representa el peor caso con piel húmeda. Con 230 V y esta resistencia, la corriente corporal teórica alcanzaría los 230 mA, superando masivamente el umbral de fibrilación.

La evaluación del nivel de protección del diferencial instalado se cuantifica mediante el [[margen]]:

{{f:margen_proteccion}}

donde [[I_diferencial]] es el umbral de disparo del interruptor diferencial instalado. El [[margen]] es una cantidad adimensional; un valor mayor que 1 indica protección efectiva, mientras que menor que 1 señala un riesgo no mitigado.

Para evaluar el riesgo biológico directo sobre el organismo frente al límite tolerable, se emplea el cociente de seguridad fisiológica:

{{f:ratio_seguridad}}

donde [[ratio_seguridad]] es el cociente de seguridad y [[I_segura]] es la corriente límite segura (30 mA). Si [[ratio_seguridad]] supera la unidad, la corriente corporal rebasa el umbral fisiológico de seguridad ventricular.

Los umbrales fisiológicos de [[I_segura]] establecidos por la norma IEC 60479 son:
- **Menos de 1 mA**: imperceptible.
- **1 a 10 mA**: percepción y cosquilleo sin peligro.
- **10 a 30 mA**: tetanización muscular e incapacidad de soltar.
- **30 a 100 mA**: fibrilación ventricular posible con exposición mayor a 30 ms.
- **Más de 100 mA**: fibrilación ventricular casi segura y potencialmente letal.

El diferencial estándar de 30 mA se diseña para disparar en el inicio de la zona de fibrilación, en un tiempo inferior a 30 ms.

## 🔴 Nivel estructural

La complejidad de la seguridad eléctrica radica en la interdependencia real de los parámetros físicos.

**Dependencia temporal de la resistencia.** La resistencia del cuerpo disminuye con el tiempo de exposición. Las quemaduras eléctricas destruyen progresivamente la capa resistiva de la piel, reduciendo [[R_cuerpo]] durante el contacto. Esto genera una retroalimentación positiva peligrosa: a mayor tiempo de contacto, menor resistencia y mayor corriente corporal. La rápida respuesta del diferencial (menos de 30 ms) detiene este ciclo letal antes de su inicio.

**Trayectoria anatómica y riesgo cardíaco.** El riesgo de fibrilación depende de la fracción de [[I_cuerpo]] que atraviesa el corazón. La trayectoria mano izquierda-pies es la más peligrosa porque cruza el músculo cardíaco directamente. Trayectorias como mano-mano también son críticas, mientras que mano derecha-pies presenta un riesgo cardíaco ligeramente menor pero igualmente letal.

**Tensión de contacto frente a tensión de red.** En contactos indirectos (fallo de aislamiento en electrodomésticos), la tensión de contacto depende de la resistencia del circuito de tierra. Con una tierra adecuada, la tensión se reduce a niveles seguros; con tierra defectuosa, la tensión de contacto puede alcanzar los 230 V de red completos.

**Dependencia temporal de los umbrales.** La norma IEC 60479 establece curvas de seguridad en el plano corriente-tiempo. Con 100 mA el tiempo seguro máximo es de 30 ms, mientras que con 30 mA se extiende a segundos. El tiempo de disparo del diferencial es crítico: debe abrir el circuito antes de que el producto de corriente y tiempo cause un daño irreversible.

**Corrientes de fuga acumuladas y selectividad.** Las instalaciones reales presentan pequeñas fugas parásitas por envejecimiento del aislamiento y filtros capacitivos. La suma de estas fugas consume parte del umbral del diferencial, reduciendo el [[margen]] de seguridad para contactos accidentales. Por ello, se instalan diferenciales de alta sensibilidad (10 mA) en zonas de alto riesgo como baños, dejando sensibilidades mayores para circuitos generales.

## Interpretación física profunda

La seguridad eléctrica ilustra cómo el peligro real difiere de la percepción intuitiva. Se suele temer a la alta tensión, pero la tensión es solo la causa indirecta. El agente de daño biológico directo es la corriente eléctrica resultante. Un generador de 30 000 V con una resistencia interna de 10 MΩ es inofensivo (corriente menor a 3 mA), mientras que la red doméstica de 230 V con baja resistencia es mortal.

Las normas de seguridad diseñan las protecciones basándose en el peor caso posible de resistencia corporal (1000 Ω). Esto asegura que el diferencial proteja de manera efectiva incluso en las circunstancias de contacto más desfavorables.

La relación física explica también por qué 50 V es el límite normativo de tensión segura: con la resistencia corporal mínima de 1000 Ω, produce exactamente 50 mA, el valor umbral a partir del cual la tetanización muscular imposibilita la liberación voluntaria del conductor.

## Orden de magnitud

Las corrientes de la seguridad eléctrica abarcan cuatro órdenes de magnitud en la escala del miliamperio (mA = 10⁻³ A):

- **0.5 mA**: límite de percepción (fisiológicamente insignificante).
- **10 mA**: umbral de tetanización muscular (incapacidad de soltar).
- **30 mA**: umbral de disparo diferencial estándar (potencia equivalente de unos 6.9 W a 230 V).
- **100 mA**: umbral de fibrilación ventricular en exposiciones cortas.

Cualquier cálculo que produzca [[I_cuerpo]] por encima de 300 mA con tensión doméstica indica una [[R_cuerpo]] inferior a 770 Ω, algo física y fisiológicamente inverosímil salvo en presencia de heridas abiertas o contacto directo con mucosas.

## Método de resolución personalizado

Para evaluar el riesgo eléctrico en un escenario de contacto:

1. **Identificar la tensión de contacto** [[V_contacto]]: determinar si es contacto directo de fase (230 V) o indirecto a través de una masa defectuosa.
2. **Estimar la resistencia corporal** [[R_cuerpo]]: clasificar el entorno en seco (mayor a 10 000 Ω), húmedo (1000 a 5000 Ω) o mojado (menor a 1000 Ω).
3. **Calcular la corriente corporal** [[I_cuerpo]] como cociente entre [[V_contacto]] y [[R_cuerpo]].
4. **Evaluar el nivel de peligro** comparando [[I_cuerpo]] con los umbrales de la norma IEC 60479.
5. **Calcular el cociente de seguridad** [[ratio_seguridad]] dividiendo [[I_cuerpo]] entre [[I_segura]] (30 mA) y el [[margen]] de protección dividiendo [[I_diferencial]] entre [[I_cuerpo]].
6. **Determinar la efectividad de la protección**: comprobar si el [[margen]] es mayor o igual a 1 y el tiempo de disparo es menor a 30 ms.

## Casos especiales y ejemplo extendido

**Caso especial 1: el cuarto de baño.** La presencia de agua y superficies conductoras reduce la resistencia corporal a 500 Ω. Un fallo de aislamiento en un electrodoméstico sin tierra adecuada genera 230 V de contacto, produciendo una corriente de 460 mA, letal en milisegundos. Esto justifica la exigencia de diferenciales de alta sensibilidad y estrictas distancias de seguridad.

**Caso especial 2: el neutro abierto.** Aunque el neutro suele estar a potencial de tierra (cercano a 0 V), una interrupción en el conductor de neutro de la instalación desplaza su potencial hacia el de la fase (100 a 230 V). Asumir que el neutro es siempre seguro es un error conceptual crítico.

**Caso especial 3: la paradoja de los guantes húmedos.** Unos guantes de cuero secos elevan la resistencia a 100 000 Ω, bloqueando la corriente. Sin embargo, si se humedecen por sudor, su resistencia cae drásticamente a 5 000 Ω, permitiendo corrientes de tetanización (46 mA). Las protecciones deben diseñarse siempre para el peor escenario húmedo.

## Preguntas reales del alumno

**¿Por qué no se usan diferenciales de 1 mA en toda la casa?**
Porque toda instalación presenta corrientes de fuga parásitas inofensivas por capacitancia y filtros de equipos. Su suma suele alcanzar los 5 a 10 mA. Un diferencial de 1 mA provocaría disparos intempestivos continuos. El umbral de 30 mA equilibra seguridad y continuidad.

**¿Por qué la corriente alterna es más peligrosa que la continua?**
La frecuencia de 50 Hz de la red alterna interfiere directamente con el ritmo eléctrico natural del corazón, facilitando la fibrilación. En corriente continua, los umbrales de riesgo son cuatro veces superiores al no existir esta resonancia bioeléctrica.

**¿Puede un diferencial en buen estado no proteger?**
Sí, si la instalación ya acumula 25 mA de fugas parásitas ordinarias, dejando solo 5 mA de [[margen]] real de protección. También ocurre si el mecanismo del diferencial es lento (mayor a 100 ms), permitiendo una exposición letal antes del corte.

## Conexiones transversales y rutas de estudio

La seguridad eléctrica se conecta directamente con el leaf anterior [Diferencial y magnetotérmico](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico), que detalla los mecanismos físicos de disparo que aquí se analizan desde su efectividad biológica. El [[margen]] calculado justifica la selección de las sensibilidades de los dispositivos.

La Ley de Ohm en este leaf extiende los principios de circuitos básicos aplicándolos a una resistencia biológica. Aquí, el cálculo determina un umbral de supervivencia.

Hacia adelante, el leaf [Riesgos y precauciones](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/riesgos-y-precauciones) concreta las medidas y distancias de seguridad derivadas de este análisis.

## Síntesis final

La seguridad eléctrica doméstica se rige por la Ley de Ohm aplicada al cuerpo humano, relacionando la tensión de contacto, la resistencia corporal y la corriente resultante. El daño fisiológico lo produce la corriente, no la tensión directamente. Las protecciones diferenciales limitan el tiempo y la corriente de exposición por debajo del umbral de fibrilación ventricular. La resistencia corporal es la variable más crítica: su caída drástica en entornos húmedos puede transformar un contacto ordinario en un evento letal.
`;export{e as default};
