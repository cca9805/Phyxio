# Ejemplo tipo examen


## Enunciado

Un electricista trabaja en un cuadro eléctrico doméstico con las manos ligeramente húmedas por sudor. Accidentalmente toca con la mano izquierda un conductor de fase de 230 V AC mientras su pie derecho está en contacto con el suelo de hormigón. La instalación dispone de un interruptor diferencial de 30 mA.

a) Calcula la corriente que circulará por el cuerpo del electricista en el momento del contacto, usando el valor normativo de resistencia corporal para condiciones húmedas.

b) Determina si el diferencial de 30 mA protege al electricista en este escenario, calculando el [[margen]] de protección.

c) Explica qué cambiaría si el diferencial fuera de 10 mA y razona cuál es más adecuado para esta situación.

d) Calcula el cociente de seguridad fisiológica para evaluar cuantitativamente el riesgo biológico directo sobre el cuerpo humano.

## Datos

- Tensión de contacto: [[tension_de_contacto]] = 230 V AC
- Resistencia corporal (condiciones húmedas, normativa IEC 60479): [[resistencia_electrica_del_cuerpo_humano]] = 1 000 Ω
- Umbral del diferencial instalado: [[corriente_de_disparo_del_diferencial]] de 30 mA (0.030 A)
- Umbral del diferencial alternativo: [[corriente_de_disparo_del_diferencial]] de 10 mA (0.010 A)
- Umbral de fibrilación ventricular: [[corriente_de_seguridad_maxima]] = 30 mA
- Cociente de seguridad fisiológica a evaluar: [[ratio_seguridad]]

## Definición del sistema

El sistema es el circuito eléctrico formado por la fase de la red (230 V), el cuerpo del electricista como resistencia equivalente de 1000 Ω, y el retorno de corriente a través del suelo de hormigón hasta el neutro de la red. El cuerpo actúa como una resistencia conectada entre la fase y tierra.

## Modelo físico

Se aplica el modelo resistivo ideal de seguridad eléctrica, que trata el cuerpo humano como resistencia pura [[resistencia_electrica_del_cuerpo_humano]] constante durante el contacto. La relación fundamental es la Ley de Ohm aplicada al circuito de contacto:

{{f:corriente_corporal}}

La protección se cuantifica mediante el [[margen]] entre el umbral diferencial y la corriente corporal:

{{f:margen_proteccion}}

El cociente de seguridad fisiológica relaciona directamente la corriente corporal resultante con la corriente de seguridad biológica máxima admisible:

{{f:ratio_seguridad}}

## Justificación del modelo

El modelo resistivo puro es válido porque la frecuencia es 50 Hz (rango nominal de IEC 60479), la tensión es la de la red doméstica estándar y el tiempo de contacto es breve (el análisis es del instante inicial del contacto). El valor de 1000 Ω es el peor caso normativo para condiciones húmedas: las protecciones diseñadas con este valor cubren todos los casos de piel con humedad moderada a alta.

El modelo dejaría de ser válido si el contacto se prolongara más de 1 segundo, porque la resistencia corporal disminuye con las quemaduras progresivas. Para el análisis de seguridad instantánea, el modelo estático es apropiado.

## Resolución simbólica

Aplicando la fórmula de corriente corporal:

{{f:corriente_corporal}}

La corriente corporal es [[tension_de_contacto]] dividida entre [[resistencia_electrica_del_cuerpo_humano]].

Para el [[margen]] de protección:

{{f:margen_proteccion}}

El [[margen]] con el diferencial de 30 mA es [[corriente_de_disparo_del_diferencial]] (0.030 A) dividido entre [[corriente_a_traves_del_cuerpo]]. Con el diferencial de 10 mA el numerador cambia a 0.010 A.

Para evaluar el riesgo fisiológico directo de forma cuantitativa, usamos el cociente de seguridad:

{{f:ratio_seguridad}}

El cociente se calcula como el valor de [[corriente_a_traves_del_cuerpo]] dividido entre [[corriente_de_seguridad_maxima]].

## Sustitución numérica

**Apartado a — Corriente corporal:**

Dividiendo la tensión de contacto (230 V) entre la resistencia corporal (1000 Ω) se obtiene la corriente. El resultado es 0.230 A. Por tanto [[corriente_a_traves_del_cuerpo]] ≈ 230 mA.

**Apartado b — Margen con diferencial de 30 mA:**

Dividiendo el umbral del diferencial (0.030 A) entre la corriente corporal calculada (0.230 A) da un cociente de 0.130. Por tanto [[margen]] ≈ 0.13.

El [[margen]] es **inferior a 1**, lo que indica que el diferencial de 30 mA no proporciona protección en este escenario: la corriente corporal de 230 mA supera ampliamente el umbral de disparo de 30 mA. El diferencial sí dispararía (230 mA > 30 mA), pero el problema es que ya existe riesgo vital antes del disparo, y el tiempo que tarda en disparar puede ser suficiente para causar fibrilación.

**Apartado c — Margen con diferencial de 10 mA:**

Dividiendo 0.010 A entre 0.230 A da un cociente de 0.043. Por tanto [[margen]] ≈ 0.043.

El [[margen]] sigue siendo inferior a 1. Incluso con diferencial de 10 mA, la corriente corporal de 230 mA supera el umbral de 10 mA. En este escenario extremo (contacto directo con fase, manos húmedas), ningún diferencial convencional puede garantizar protección únicamente por su umbral de corriente: el tiempo de respuesta y la eliminación del contacto son los factores determinantes.

**Apartado d — Cociente de seguridad fisiológica:**

Dividiendo la corriente corporal calculada (0.230 A) entre la corriente de seguridad máxima (0.030 A) se obtiene un cociente de seguridad:

el valor obtenido de [[ratio_seguridad]] es de aproximadamente 7.67 (resultado de dividir 0.230 entre 0.030).

Dado que [[ratio_seguridad]] es muy superior a 1 (específicamente, 7.67), el escenario es de extremo peligro. La corriente que atraviesa el corazón supera en más de 7 veces el umbral fisiológico seguro.

## Validación dimensional

- Corriente corporal: La tensión en voltios dividida por la resistencia en ohmios nos da la corriente en amperios. Dimensionalmente, `[V] / [Ω]` equivale a `[M L² T⁻³ I⁻¹] / [M L² T⁻³ I⁻²]`, simplificándose a `[I]`, que se mide en amperios (A) ✓
- Margen de protección: El cociente entre dos intensidades de corriente (amperios divididos por amperios) `[A] / [A]` se cancela, dando un valor adimensional ✓
- Cociente de seguridad fisiológica: La relación entre la corriente corporal calculada y la corriente límite segura, al ser ambas corrientes en amperios `[A] / [A]`, resulta en una magnitud puramente adimensional ✓

## Interpretación física

El resultado de 230 mA es casi 8 veces el umbral de fibrilación ventricular de 30 mA. En la trayectoria mano izquierda-pies que cruza el corazón, esta corriente produciría fibrilación ventricular casi con certeza en cualquier exposición superior a 30 ms. El diferencial de 30 mA dispararía —la corriente de 230 mA supera su umbral— pero el tiempo transcurrido desde el contacto hasta el disparo (típicamente 20–40 ms para diferenciales estándar) puede ser suficiente para iniciar la fibrilación.

Este escenario ilustra que la protección eléctrica efectiva no depende únicamente del umbral del diferencial, sino también de su tiempo de respuesta y, sobre todo, de eliminar las condiciones que generan corrientes corporal tan elevadas: trabajo en tensión con las manos húmedas es una práctica de alto riesgo que requiere equipos de protección individual específicos para trabajos eléctricos.

Si [[resistencia_electrica_del_cuerpo_humano]] fuera 10 000 Ω (piel seca), la corriente resultante sería 23 mA, por debajo del umbral de fibrilación aunque en la zona de tetanización. En ese caso el diferencial de 30 mA proporciona un [[margen]] de 30/23 ≈ 1.3, que sí garantiza protección efectiva con tiempo de respuesta suficiente. Esto demuestra cuánto cambia el riesgo por las condiciones de la piel.

---

# Ejemplo de aplicación real


## Contexto

Un hogar con una instalación eléctrica de 20 años presenta disparos ocasionales del diferencial principal de 30 mA. El instalador debe evaluar si la instalación es segura para los habitantes y si el nivel de protección es adecuado para las zonas húmedas (baño y cocina), donde los residentes pasan varias horas al día.

## Estimación física

La corriente de fuga acumulada de la instalación se estima en 15 mA (cables con aislamiento envejecido y varios electrodomésticos con condensadores de filtro). Esto consume el 50% del umbral del diferencial de 30 mA, dejando solo 15 mA de [[margen]] para un contacto accidental.

En el baño, con [[resistencia_electrica_del_cuerpo_humano]] estimada en 800 Ω (piel mojada tras ducha), un contacto directo con una fase de 230 V produciría [[corriente_a_traves_del_cuerpo]] = 230/800 ≈ 288 mA. Este valor supera masivamente el umbral de 30 mA, pero la corriente ya supera el [[margen]] residual de 15 mA disponible, con lo que el diferencial dispararía ante cualquier fuga adicional superior a 15 mA, incluido el propio contacto corporal.

El umbral normativo para zonas mojadas (IEC 60364-7-701) es 10 mA de diferencial, no 30 mA. Con 30 mA y 15 mA de fuga acumulada, la protección efectiva para el baño queda reducida a prácticamente nula.

## Interpretación

La instalación presenta dos problemas superpuestos. Primero, el nivel de fuga acumulada de 15 mA indica degradación del aislamiento: cables envejecidos que deben revisarse antes de que la fuga aumente hasta niveles que causen disparos continuos. Segundo, el diferencial de 30 mA para el baño no cumple la normativa vigente, que exige 10 mA en zonas con bañera o ducha.

La acción correctiva es reemplazar el diferencial del circuito de baño por uno de 10 mA y buscar y reparar las fugas de aislamiento. El diferencial de 30 mA puede mantenerse para los circuitos generales si la fuga acumulada se reduce por debajo de 10 mA mediante la reparación del aislamiento.