## Contexto conceptual

Una toma de corriente conecta la instalación fija de la vivienda con los equipos portátiles del usuario. Es el último eslabón de una cadena de protecciones que incluye el diferencial, el magnetotérmico y el cableado de la instalación. Sin embargo, la toma en sí no tiene protección propia: su único límite de diseño es [[corriente_maxima_nominal]], un umbral pasivo que no actúa — solo define cuándo el uso es seguro y cuándo no.

El concepto de [[margen_uso]] conecta este leaf con el de diferencial y magnetotérmico: allí se calcula el margen respecto al umbral de disparo de las protecciones activas; aquí se calcula el margen respecto al límite pasivo de la toma. La lógica es la misma: un ratio adimensional que mide la proximidad al límite de seguridad.

## 🟢 Nivel esencial

Una toma de corriente tiene un límite de corriente [[corriente_maxima_nominal]] impreso en el dispositivo o declarado por el fabricante. En instalaciones domésticas europeas, el valor más habitual es 16 A. Una regleta de baja calidad puede tener 10 A.

Cuando se conectan varios equipos a la misma toma o regleta, la corriente individual [[corriente_individual_de_carga]] de cada equipo se suma. Si esa suma supera [[corriente_maxima_nominal]], la toma está en sobrecarga. Los contactos se calientan. Si la situación se mantiene, el plástico de la carcasa puede ablandarse, los contactos pueden oxidarse o deformarse, y el riesgo de incendio aumenta.

El hecho de que ningún diferencial ni magnetotérmico salte no garantiza que la toma esté segura. El diferencial detecta fugas a tierra; el magnetotérmico protege el cableado del circuito. Ninguno protege los contactos internos de la toma frente a la sobrecarga local.

## 🔵 Nivel formal

La corriente que demanda un equipo individual de potencia [[potencia_de_carga]] conectado a una toma de tensión [[tension_de_suministro]] es:

{{f:corriente_individual}}

La corriente total que circula por los contactos cuando se conectan simultáneamente varios equipos de potencia total [[potencia_total_simultanea]] es:

{{f:corriente_total}}

Esta [[corriente_total_en_la_toma]] se compara con [[corriente_maxima_nominal]]. Para cuantificar el margen de uso de la toma, se define el ratio:

{{f:ratio_uso}}

Cuando [[margen_uso]] alcanza 1, la toma está en su límite nominal. Valores superiores indican sobrecarga activa.

La potencia máxima que puede conectarse sin superar el límite nominal es:

{{f:potencia_max}}

Para evaluar el riesgo térmico local cuando la toma o el enchufe presentan contacto degradado, se aplica la ley de Joule localizada:

{{f:perdida_contacto}}

Esta [[potencia_disipada_en_el_contacto]] crece con el cuadrado de [[corriente_total_en_la_toma]]: duplicar la corriente cuadruplica el calor disipado en el contacto.

Las cinco fórmulas del leaf forman una cadena causal cerrada. El dato de entrada más accesible es [[potencia_de_carga]] de cada equipo — impresa en la etiqueta del fabricante. A partir de [[potencia_de_carga]] y [[tension_de_suministro]] se obtiene [[corriente_individual_de_carga]] de ese equipo; sumando todas las [[corriente_individual_de_carga]] individuales se obtiene [[corriente_total_en_la_toma]]; dividiendo [[corriente_total_en_la_toma]] entre [[corriente_maxima_nominal]] se obtiene [[margen_uso]]; multiplicando [[tension_de_suministro]] por [[corriente_maxima_nominal]] se obtiene [[potencia_maxima_nominal]] como referencia de diseño; y elevando [[corriente_total_en_la_toma]] al cuadrado y multiplicando por [[resistencia_de_contacto]] se obtiene [[potencia_disipada_en_el_contacto]] como indicador de riesgo térmico de contacto.

Numéricamente: con [[tension_de_suministro]] = 230 V, [[corriente_maxima_nominal]] = 16 A y [[potencia_total_simultanea]] = 2 000 W, resulta [[corriente_total_en_la_toma]] = 8,70 A, [[margen_uso]] = 0,54 y [[potencia_maxima_nominal]] = 3 680 W. Si [[resistencia_de_contacto]] = 0,05 Ω (toma nueva), [[potencia_disipada_en_el_contacto]] = 3,78 W. Si [[resistencia_de_contacto]] = 0,3 Ω (toma deteriorada), [[potencia_disipada_en_el_contacto]] = 22,7 W — ya en zona de riesgo aunque [[margen_uso]] sea seguro.

La relación entre [[potencia_total_simultanea]] y [[margen_uso]] es lineal con pendiente 1/(V·[[corriente_maxima_nominal]]). Para una toma de 16 A a 230 V, cada 100 W adicionales de [[potencia_total_simultanea]] incrementan [[margen_uso]] en 0,027. Para una regleta de 10 A a 230 V, el mismo incremento de 100 W supone un aumento de [[margen_uso]] de 0,043 — un 60 % más sensible. Esta diferencia cuantitativa explica por qué las regletas de menor capacidad se saturan mucho antes que las tomas individuales de mayor calibre cuando se conectan calefactores o electrodomésticos de alta potencia.

## 🔴 Nivel estructural

El modelo de toma ideal asume [[resistencia_de_contacto]] = 0 y por tanto [[potencia_disipada_en_el_contacto]] = 0. En la práctica, incluso tomas nuevas tienen [[resistencia_de_contacto]] del orden de centésimas de ohmio. Con el tiempo y el uso, [[resistencia_de_contacto]] puede aumentar por oxidación del contacto metálico, suciedad acumulada en la interfaz, deformación mecánica del borne o degradación del material conductor.

El límite de validez del modelo resistivo es el régimen permanente con corriente alterna eficaz. Los transitorios de arranque de motores o la corriente de carga de condensadores pueden generar picos breves de corriente que superan [[corriente_maxima_nominal]] sin causar degradación inmediata, porque la energía disipada en cada transitorio es pequeña.

El modelo no incluye la distribución de temperatura en la carcasa ni la resistencia térmica del contacto al entorno. En condiciones de ventilación reducida (regleta bajo un mueble, enchufe tapado) la temperatura real puede ser mayor que la predicha por un modelo de disipación en estado estacionario.

El dominio de validez práctico del modelo: régimen permanente, carga resistiva o casi resistiva, factor de potencia próximo a la unidad. Para cargas con arranque elevado o con mucha electrónica de potencia, el análisis requiere considerar la forma de onda de la corriente.

La transición al modelo extendido se justifica cuando el modelo simple predice seguridad (bajo [[margen_uso]]) pero hay síntomas físicos observables de calentamiento en el contacto. En ese caso, la variable de diagnóstico deja de ser [[corriente_total_en_la_toma]] y pasa a ser [[resistencia_de_contacto]], medida directamente con un ohmímetro de resolución mili-ohm o estimada por el calor generado a corriente conocida.

## Interpretación física profunda

La diferencia entre sobrecarga y defecto térmico de contacto es la más importante distinción conceptual de este leaf. En la sobrecarga, [[corriente_total_en_la_toma]] supera [[corriente_maxima_nominal]] y el calor se produce porque la corriente es excesiva. En el defecto térmico, [[corriente_total_en_la_toma]] puede estar dentro del límite pero [[resistencia_de_contacto]] es anormalmente alta, y [[potencia_disipada_en_el_contacto]] = [[corriente_total_en_la_toma]]² · [[resistencia_de_contacto]] es significativa porque [[resistencia_de_contacto]] ha aumentado por degradación.

Ambos fenómenos tienen la misma consecuencia física — calentamiento del contacto — pero causas distintas y soluciones distintas. Identificar cuál está presente es el primer paso diagnóstico: calcular [[margen_uso]] y, si está bien, estimar si [[potencia_disipada_en_el_contacto]] puede ser significativa dado el estado del contacto.

## Orden de magnitud

En una instalación residencial española típica, [[tension_de_suministro]] = 230 V. Una toma estándar tiene [[corriente_maxima_nominal]] = 16 A, por lo que su [[potencia_maxima_nominal]] es aproximadamente 3 680 W. Una regleta de baja calidad de 10 A tiene [[potencia_maxima_nominal]] de 2 300 W.

Conectar un calefactor de 2 000 W, un ordenador portátil de 90 W y un cargador de 18 W a la misma regleta supone una [[potencia_total_simultanea]] de 2 108 W, equivalente a [[corriente_total_en_la_toma]] de 9,2 A, con [[margen_uso]] de 0,57. Dentro del límite. Añadir una segunda estufa de 2 000 W eleva [[potencia_total_simultanea]] a 4 108 W, [[corriente_total_en_la_toma]] a 17,9 A y [[margen_uso]] a 1,12: sobrecarga activa.

Una [[resistencia_de_contacto]] de 0,1 Ω con [[corriente_total_en_la_toma]] = 16 A disipa 25,6 W en el contacto. Con [[resistencia_de_contacto]] = 0,5 Ω (contacto degradado), la disipación sube a 128 W, suficiente para dañar el plástico en minutos.

## Método de resolución personalizado

Para evaluar si una toma o regleta está sobrecargada:

1. Identificar todos los equipos conectados simultáneamente y sus potencias nominales [[potencia_de_carga]].
2. Sumar potencias: calcular [[potencia_total_simultanea]].
3. Calcular [[corriente_total_en_la_toma]] usando la fórmula de corriente total con [[tension_de_suministro]] = 230 V.
4. Identificar [[corriente_maxima_nominal]] de la toma o regleta (etiqueta del fabricante).
5. Calcular [[margen_uso]] y comparar con 1.
6. Si [[margen_uso]] > 0,8 en uso continuado, redistribuir carga o cambiar a regleta de mayor capacidad.
7. Si hay síntomas térmicos (calor en enchufe, olor a quemado, plástico decolorado), inspeccionar [[resistencia_de_contacto]] y sustituir la toma.

## Casos especiales y ejemplo extendido

**Caso A — Regleta con múltiples cargadores.** Cuatro cargadores de smartphone de 18 W, un portátil de 65 W y una lámpara LED de 10 W: [[potencia_total_simultanea]] = 147 W, [[corriente_total_en_la_toma]] = 0,64 A. [[margen_uso]] = 0,04. Sin riesgo térmico.

**Caso B — Calefactores en regleta.** Dos calefactores de 2 000 W en regleta de 10 A ([[potencia_maxima_nominal]] = 2 300 W): [[potencia_total_simultanea]] = 4 000 W, [[corriente_total_en_la_toma]] = 17,4 A. [[margen_uso]] = 1,74. Sobrecarga severa. Riesgo inmediato.

**Caso C — Contacto degradado sin sobrecarga.** [[corriente_total_en_la_toma]] = 8 A (dentro del límite de 16 A) con [[resistencia_de_contacto]] = 0,3 Ω por oxidación: [[potencia_disipada_en_el_contacto]] = 19,2 W. Ningún magnetotérmico actúa, pero el calor local puede dañar el contacto progresivamente.

## Preguntas reales del alumno

**¿Si la regleta tiene fusible propio, está protegida frente a sobrecarga?** El fusible de la regleta protege el circuito contra cortocircuito, pero no necesariamente contra la degradación térmica lenta por sobrecarga moderada. Un fusible de 16 A puede no actuar ante una sobrecarga del 10 % que, mantenida durante horas, degrada el contacto progresivamente.

**¿Una regleta de más amperes es siempre mejor?** Una regleta de 16 A es más segura que una de 10 A solo si el cableado y los contactos internos están dimensionados para 16 A. Una regleta de baja calidad etiquetada como 16 A puede tener contactos que no aguantan esa corriente. El sello de calidad y la norma de producto (EN 61058) son más relevantes que el valor de [[corriente_maxima_nominal]] declarado.

**¿Por qué los calefactores son el principal riesgo en regletas?** Porque tienen una [[potencia_de_carga]] alta y constante durante horas. Un calefactor de 2 000 W consume una corriente de aproximadamente 8,7 A de forma continua. Si hay otros equipos en la misma regleta, [[corriente_total_en_la_toma]] puede superar [[corriente_maxima_nominal]] rápidamente. Además, el calor del calefactor eleva la temperatura ambiente de la regleta, reduciendo su capacidad de disipación.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con **diferencial y magnetotérmico** (las protecciones no detectan sobrecarga local de toma), con **tensión y potencia en casa** (P y V como datos de entrada) y con **seguridad eléctrica** (consecuencias del calentamiento de contacto). La ley de Joule localizada en [[resistencia_de_contacto]] es el puente entre la magnitud eléctrica observable ([[corriente_total_en_la_toma]]) y el riesgo físico (temperatura del contacto).

Ruta de estudio recomendada: **corriente eléctrica → resistencia y ley de Ohm → potencia eléctrica → tensión y potencia en casa → enchufes y tomas (este leaf) → diferencial y magnetotérmico → seguridad eléctrica.**

## Síntesis final

La toma de corriente tiene un límite [[corriente_maxima_nominal]] que no debe superarse en régimen permanente. La corriente total [[corriente_total_en_la_toma]] = [[potencia_total_simultanea]] / [[tension_de_suministro]] es la magnitud que circula por los contactos. El ratio [[margen_uso]] = [[corriente_total_en_la_toma]] / [[corriente_maxima_nominal]] cuantifica la proximidad a la sobrecarga. La ley de Joule localizada en [[resistencia_de_contacto]] explica el riesgo térmico incluso con corrientes dentro del límite cuando el contacto está degradado. Ninguna protección del circuito detecta este riesgo: la única defensa es no superar [[margen_uso]] y mantener los contactos en buen estado.