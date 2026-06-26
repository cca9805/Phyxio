## Contexto conceptual

El cuadro eléctrico de una vivienda organiza la distribución de la energía en circuitos independientes y protege cada uno con al menos un magnetotérmico. El diferencial, generalmente uno por bloque de circuitos, añade una capa adicional de protección frente a fugas de corriente. La confusión más frecuente es tratar estos dos dispositivos como equivalentes o intercambiables, cuando en realidad miden cosas completamente distintas.

El magnetotérmico opera comparando [[corriente_de_carga]] con el calibre nominal [[corriente_nominal_del_magnetotermico]]. Si la corriente supera ese valor durante suficiente tiempo, el elemento bimetálico se calienta, se deforma y abre el circuito. Para un cortocircuito, el elemento magnético actúa en milisegundos. En ningún caso el magnetotérmico mide si hay fuga a tierra: solo vigila la magnitud total de [[corriente_de_carga]] en su circuito.

El diferencial opera midiendo simultáneamente la [[corriente_de_fase]] y la [[corriente_de_neutro]]. En condiciones normales sin fuga a tierra, toda la corriente que entra por fase regresa por neutro: [[desequilibrio_diferencial]] es prácticamente cero. Si hay una fuga, parte de la corriente vuelve por un camino alternativo y [[desequilibrio_diferencial]] deja de ser cero. Cuando [[desequilibrio_diferencial]] supera [[umbral_diferencial_nominal]], el diferencial actúa. Este mecanismo es independiente de la magnitud total de [[corriente_de_carga]]: un circuito puede estar perfectamente dentro del calibre magnetotérmico y aun así tener una fuga que dispare el diferencial.

La confusión entre ambos dispositivos genera dos errores habituales: cambiar el diferencial cuando lo que hay es sobrecarga, y cambiar el magnetotérmico cuando lo que hay es fuga. Ninguno de los dos cambios resuelve el problema original.

## 🟢 Nivel esencial

El diferencial no limita la potencia de la vivienda ni protege el cableado frente a sobrecargas. Su única función es detectar desequilibrio entre fase y neutro. Si [[desequilibrio_diferencial]] supera [[umbral_diferencial_nominal]], corta el suministro para proteger a las personas frente al contacto eléctrico indirecto.

El magnetotérmico no detecta fugas a tierra ni protege a las personas de forma directa. Su función es proteger el cableado frente al exceso de corriente y frente al calentamiento que ese exceso produce. Cuando la corriente supera el calibre nominal de forma sostenida o cuando hay un cortocircuito, corta el circuito.

Una consecuencia importante: puede haber riesgo eléctrico real sin que ninguno de los dos dispare. Si hay una sobrecarga equilibrada sin fuga, el diferencial no actúa. Si la corriente de fuga es pequeña pero constante en un punto de conexión deteriorado, el calor local puede ser elevado sin que la corriente total supere el calibre.

La frase "no saltó nada" no es evidencia de seguridad. Es simplemente evidencia de que la corriente total no superó el calibre y de que [[desequilibrio_diferencial]] no superó [[umbral_diferencial_nominal]] en el instante medido.

## 🔵 Nivel formal

La corriente que circula por un circuito cuando se conecta una carga es:

{{f:corriente_carga}}

Esta [[corriente_de_carga]] se compara con [[corriente_nominal_del_magnetotermico]] del magnetotérmico. Si [[corriente_de_carga]] supera [[corriente_nominal_del_magnetotermico]], existe sobrecarga. Para cuantificar qué fracción de la capacidad nominal se está usando, se define el [[margen_termico]]:

{{f:ratio_termico}}

Valores de [[margen_termico]] iguales o superiores a 1 indican que el magnetotérmico está en zona de posible disparo.

El desequilibrio entre conductores que mide el diferencial se calcula como:

{{f:desequilibrio}}

donde [[corriente_de_fase]] es la corriente medida en el conductor de fase e [[corriente_de_neutro]] es la corriente medida en el conductor de neutro. Físicamente, [[desequilibrio_diferencial]] representa la corriente que no regresa por el camino previsto, es decir, la que se ha desviado a tierra por alguna fuga. Para cuantificar qué fracción del umbral diferencial se ha alcanzado, se define el [[margen_dif]]:

{{f:ratio_diferencial}}

Cuando [[margen_dif]] alcanza 1, el diferencial actúa. Los valores de [[umbral_diferencial_nominal]] más habituales en instalaciones residenciales son 30 mA (alta sensibilidad, protección personal) y 300 mA (media sensibilidad, protección contra incendios).

La potencia máxima aproximada que puede conectarse antes de que el magnetotérmico actúe es:

{{f:potencia_limite}}

Esta [[potencia_limite_magnetotermica]] es una estimación para carga resistiva pura a tensión [[tension_de_suministro]] nominal. En la práctica, la curva de disparo magnetotérmico depende del tiempo y de la temperatura del bimetálico, por lo que [[potencia_limite_magnetotermica]] es un orden de magnitud, no un límite exacto.

## 🔴 Nivel estructural

Cada protección responde a una variable independiente, por lo que sus dominios de actuación son complementarios pero no superpuestos:

- **Sobrecarga equilibrada:** [[corriente_de_carga]] supera [[corriente_nominal_del_magnetotermico]], [[desequilibrio_diferencial]] es pequeño. Actúa el magnetotérmico, el diferencial puede no actuar.
- **Fuga a tierra:** [[desequilibrio_diferencial]] supera [[umbral_diferencial_nominal]], pero [[corriente_de_carga]] puede estar dentro del calibre. Actúa el diferencial, el magnetotérmico puede no actuar.
- **Defecto térmico local:** conexión degradada con resistencia de contacto elevada. La disipación local es alta pero [[corriente_de_carga]] no supera [[corriente_nominal_del_magnetotermico]] y [[desequilibrio_diferencial]] es pequeño. Ninguno dispara, pero hay riesgo real de incendio.

El tercer escenario es el más peligroso precisamente porque ninguna protección actúa. El calor disipado en un punto de contacto con resistencia [[tension_de_suministro]]-dependiente puede causar daños irreversibles sin que el cuadro dé señal alguna.

El modelo de dos protecciones independientes es válido para análisis residencial monofásico con cuadro estándar. Pierde exactitud en instalaciones trifásicas, en presencia de armónicos elevados (que pueden causar disparos fantasma), o cuando el diferencial es de tipo A en lugar de tipo AC (diferente respuesta a corrientes pulsantes de CC).

## Interpretación física profunda

Cuando se pregunta "¿por qué saltó uno y no el otro?", la respuesta correcta exige identificar qué magnitud superó su umbral. Si saltó el diferencial, hubo una diferencia [[desequilibrio_diferencial]] apreciable entre [[corriente_de_fase]] e [[corriente_de_neutro]]: algo rompió la simetría. Si saltó el magnetotérmico, [[corriente_de_carga]] superó [[corriente_nominal_del_magnetotermico]] en ese circuito concreto, independientemente de si había fuga.

El [[margen_dif]] y el [[margen_termico]] son herramientas de diagnóstico: un [[margen_termico]] de 0,85 indica que el circuito opera al 85 % de su capacidad nominal, con margen para sobrecargas transitorias pero sin margen cómodo para añadir cargas. Un [[margen_dif]] de 0,6 indica que la fuga actual es el 60 % del umbral: no dispara, pero señala que algo no está en condiciones ideales.

La acción correcta cuando el diferencial dispara repetidamente no es subir [[umbral_diferencial_nominal]]: eso eliminaría la protección. La acción correcta es identificar el circuito o aparato que genera [[desequilibrio_diferencial]] y corregir la fuga.

## Orden de magnitud

En una instalación residencial española típica: [[umbral_diferencial_nominal]] = 30 mA para el diferencial de alta sensibilidad; [[corriente_nominal_del_magnetotermico]] típicos para circuitos de iluminación 10 A, tomas generales 16 A, cocina 25 A. Para una [[tension_de_suministro]] de 230 V, la [[potencia_limite_magnetotermica]] de un circuito de 16 A es de aproximadamente 3,7 kW. Una fuga de 30 mA a 230 V representa una [[potencia_de_carga]] disipada de solo 6,9 W, pero es suficiente para ser letal si circula por el cuerpo humano.

## Método de resolución personalizado

Para diagnosticar un incidente con protecciones:

1. Identificar qué dispositivo actuó (diferencial, magnetotérmico o ninguno).
2. Estimar la [[corriente_de_carga]] del circuito afectado usando [[potencia_de_carga]] conocida y [[tension_de_suministro]] nominal.
3. Calcular [[margen_termico]] = [[corriente_de_carga]] / [[corriente_nominal_del_magnetotermico]] y comparar con 1.
4. Si hay medición de [[corriente_de_fase]] e [[corriente_de_neutro]], calcular [[desequilibrio_diferencial]] y [[margen_dif]].
5. Si hay síntomas térmicos sin disparo, inspeccionar puntos de conexión y verificar resistencia de contacto.
6. Corregir la causa raíz: redistribuir cargas, reparar fuga, sustituir conexión degradada.
7. Verificar en operación real; no aceptar "ya no salta" como único criterio de éxito.

## Casos especiales y ejemplo extendido

**Caso A — Sobrecarga pura.** Circuito de 230 V con magnetotérmico de 16 A. Se conectan equipos con [[potencia_de_carga]] total de 4 800 W. La [[corriente_de_carga]] resultante es aproximadamente 20,9 A. El [[margen_termico]] supera 1,30, indicando sobrecarga del 30 %. Esperable actuación del magnetotérmico en pocos minutos.

**Caso B — Fuga sin sobrecarga.** Se mide [[corriente_de_fase]] = 9,62 A e [[corriente_de_neutro]] = 9,57 A. La diferencia absoluta da [[desequilibrio_diferencial]] de 0,05 A equivalente a 50 mA. Con [[umbral_diferencial_nominal]] de 30 mA, el [[margen_dif]] supera la unidad: esperable actuación del diferencial aunque [[corriente_de_carga]] total no supere ningún calibre.

**Caso C — Defecto térmico sin disparo.** Circuito con [[corriente_de_carga]] de 13 A y magnetotérmico de 16 A. El [[margen_termico]] es aproximadamente 0,81, dentro del calibre. No hay fuga apreciable. Sin embargo, una conexión floja tiene resistencia de contacto elevada y disipa calor localmente. Ninguna protección actúa, pero el defecto existe.

## Preguntas reales del alumno

**¿Si salta el diferencial, debo subir su umbral [[umbral_diferencial_nominal]]?** No. Subir [[umbral_diferencial_nominal]] elimina la protección personal. Hay que identificar el origen de [[desequilibrio_diferencial]] y corregirlo.

**¿Si salta el magnetotérmico, basta con poner uno de mayor [[corriente_nominal_del_magnetotermico]]?** Solo si el cableado, la instalación y la protección general lo permiten. Cambiar [[corriente_nominal_del_magnetotermico]] sin recalcular toda la línea puede dejar el conductor desprotegido.

**¿Por qué a veces salta al encender un aparato y luego no?** Pueden ser transitorios de arranque, degradación intermitente dependiente de temperatura o humedad, o defecto que solo aparece bajo carga.

**¿Qué no dispara el diferencial?** Sobrecargas equilibradas donde [[corriente_de_fase]] ≈ [[corriente_de_neutro]] y algunos fallos térmicos locales sin fuga apreciable.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con **seguridad eléctrica** (efecto de las protecciones sobre el riesgo humano), con **enchufes y tomas** (fallos térmicos locales con o sin disparo), y con **tensión y potencia en casa** (base para estimar la [[corriente_de_carga]] de cada circuito). También conecta con el concepto general de **dominio de validez del modelo físico**: el modelo de dos protecciones independientes tiene límites claros que el análisis riguroso debe reconocer.

Ruta de estudio recomendada: **intensidad de corriente → resistencia y ley de Ohm → tensión y potencia en casa → diferencial y magnetotérmico (este leaf) → seguridad eléctrica.**

## Síntesis final

El diferencial y el magnetotérmico no protegen lo mismo ni contra lo mismo. El diferencial vigila [[desequilibrio_diferencial]] y protege personas. El magnetotérmico vigila [[corriente_de_carga]] respecto a [[corriente_nominal_del_magnetotermico]] y protege el cableado. Conocer qué magnitud supera qué umbral en cada incidente permite diagnosticar con precisión, actuar con seguridad y evitar las decisiones peligrosas de subir calibres sin criterio técnico.