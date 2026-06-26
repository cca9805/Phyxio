const e=`# Enchufes y tomas\r
\r
Una toma de corriente no es un punto de acceso ilimitado a la red eléctrica. Es un componente físico con un límite de corriente nominal [[I_max]] que, al superarse de forma sostenida, genera calor en los contactos metálicos y puede provocar degradación, cortocircuito o incendio. Entender qué magnitudes determinan ese límite y cómo calcularlas es la competencia central de este leaf.\r
\r
El mecanismo de riesgo no es eléctrico en sentido estricto — no hay fuga, no hay desequilibrio fase-neutro — sino térmico: la resistencia de contacto [[R_contacto]] disipa calor según la ley de Joule localizada. Cuanto mayor es la corriente total [[I_tot]], mayor es el calentamiento, y ese calentamiento crece con el cuadrado de [[I_tot]].\r
\r
## Contexto conceptual\r
\r
Una toma de corriente conecta la instalación fija de la vivienda con los equipos portátiles del usuario. Es el último eslabón de una cadena de protecciones que incluye el diferencial, el magnetotérmico y el cableado de la instalación. Sin embargo, la toma en sí no tiene protección propia: su único límite de diseño es [[I_max]], un umbral pasivo que no actúa — solo define cuándo el uso es seguro y cuándo no.\r
\r
El concepto de [[margen_uso]] conecta este leaf con el de diferencial y magnetotérmico: allí se calcula el margen respecto al umbral de disparo de las protecciones activas; aquí se calcula el margen respecto al límite pasivo de la toma. La lógica es la misma: un ratio adimensional que mide la proximidad al límite de seguridad.\r
\r
## 🟢 Nivel esencial\r
\r
Una toma de corriente tiene un límite de corriente [[I_max]] impreso en el dispositivo o declarado por el fabricante. En instalaciones domésticas europeas, el valor más habitual es 16 A. Una regleta de baja calidad puede tener 10 A.\r
\r
Cuando se conectan varios equipos a la misma toma o regleta, la corriente individual [[I]] de cada equipo se suma. Si esa suma supera [[I_max]], la toma está en sobrecarga. Los contactos se calientan. Si la situación se mantiene, el plástico de la carcasa puede ablandarse, los contactos pueden oxidarse o deformarse, y el riesgo de incendio aumenta.\r
\r
El hecho de que ningún diferencial ni magnetotérmico salte no garantiza que la toma esté segura. El diferencial detecta fugas a tierra; el magnetotérmico protege el cableado del circuito. Ninguno protege los contactos internos de la toma frente a la sobrecarga local.\r
\r
## 🔵 Nivel formal\r
\r
La corriente que demanda un equipo individual de potencia [[P]] conectado a una toma de tensión [[V]] es:\r
\r
{{f:corriente_individual}}\r
\r
La corriente total que circula por los contactos cuando se conectan simultáneamente varios equipos de potencia total [[P_tot]] es:\r
\r
{{f:corriente_total}}\r
\r
Esta [[I_tot]] se compara con [[I_max]]. Para cuantificar el margen de uso de la toma, se define el ratio:\r
\r
{{f:ratio_uso}}\r
\r
Cuando [[margen_uso]] alcanza 1, la toma está en su límite nominal. Valores superiores indican sobrecarga activa.\r
\r
La potencia máxima que puede conectarse sin superar el límite nominal es:\r
\r
{{f:potencia_max}}\r
\r
Para evaluar el riesgo térmico local cuando la toma o el enchufe presentan contacto degradado, se aplica la ley de Joule localizada:\r
\r
{{f:perdida_contacto}}\r
\r
Esta [[P_perdida]] crece con el cuadrado de [[I_tot]]: duplicar la corriente cuadruplica el calor disipado en el contacto.\r
\r
Las cinco fórmulas del leaf forman una cadena causal cerrada. El dato de entrada más accesible es [[P]] de cada equipo — impresa en la etiqueta del fabricante. A partir de [[P]] y [[V]] se obtiene [[I]] de ese equipo; sumando todas las [[I]] individuales se obtiene [[I_tot]]; dividiendo [[I_tot]] entre [[I_max]] se obtiene [[margen_uso]]; multiplicando [[V]] por [[I_max]] se obtiene [[P_max]] como referencia de diseño; y elevando [[I_tot]] al cuadrado y multiplicando por [[R_contacto]] se obtiene [[P_perdida]] como indicador de riesgo térmico de contacto.\r
\r
Numéricamente: con [[V]] = 230 V, [[I_max]] = 16 A y [[P_tot]] = 2 000 W, resulta [[I_tot]] = 8,70 A, [[margen_uso]] = 0,54 y [[P_max]] = 3 680 W. Si [[R_contacto]] = 0,05 Ω (toma nueva), [[P_perdida]] = 3,78 W. Si [[R_contacto]] = 0,3 Ω (toma deteriorada), [[P_perdida]] = 22,7 W — ya en zona de riesgo aunque [[margen_uso]] sea seguro.\r
\r
La relación entre [[P_tot]] y [[margen_uso]] es lineal con pendiente 1/(V·[[I_max]]). Para una toma de 16 A a 230 V, cada 100 W adicionales de [[P_tot]] incrementan [[margen_uso]] en 0,027. Para una regleta de 10 A a 230 V, el mismo incremento de 100 W supone un aumento de [[margen_uso]] de 0,043 — un 60 % más sensible. Esta diferencia cuantitativa explica por qué las regletas de menor capacidad se saturan mucho antes que las tomas individuales de mayor calibre cuando se conectan calefactores o electrodomésticos de alta potencia.\r
\r
## 🔴 Nivel estructural\r
\r
El modelo de toma ideal asume [[R_contacto]] = 0 y por tanto [[P_perdida]] = 0. En la práctica, incluso tomas nuevas tienen [[R_contacto]] del orden de centésimas de ohmio. Con el tiempo y el uso, [[R_contacto]] puede aumentar por oxidación del contacto metálico, suciedad acumulada en la interfaz, deformación mecánica del borne o degradación del material conductor.\r
\r
El límite de validez del modelo resistivo es el régimen permanente con corriente alterna eficaz. Los transitorios de arranque de motores o la corriente de carga de condensadores pueden generar picos breves de corriente que superan [[I_max]] sin causar degradación inmediata, porque la energía disipada en cada transitorio es pequeña.\r
\r
El modelo no incluye la distribución de temperatura en la carcasa ni la resistencia térmica del contacto al entorno. En condiciones de ventilación reducida (regleta bajo un mueble, enchufe tapado) la temperatura real puede ser mayor que la predicha por un modelo de disipación en estado estacionario.\r
\r
El dominio de validez práctico del modelo: régimen permanente, carga resistiva o casi resistiva, factor de potencia próximo a la unidad. Para cargas con arranque elevado o con mucha electrónica de potencia, el análisis requiere considerar la forma de onda de la corriente.\r
\r
La transición al modelo extendido se justifica cuando el modelo simple predice seguridad (bajo [[margen_uso]]) pero hay síntomas físicos observables de calentamiento en el contacto. En ese caso, la variable de diagnóstico deja de ser [[I_tot]] y pasa a ser [[R_contacto]], medida directamente con un ohmímetro de resolución mili-ohm o estimada por el calor generado a corriente conocida.\r
\r
## Interpretación física profunda\r
\r
La diferencia entre sobrecarga y defecto térmico de contacto es la más importante distinción conceptual de este leaf. En la sobrecarga, [[I_tot]] supera [[I_max]] y el calor se produce porque la corriente es excesiva. En el defecto térmico, [[I_tot]] puede estar dentro del límite pero [[R_contacto]] es anormalmente alta, y [[P_perdida]] = [[I_tot]]² · [[R_contacto]] es significativa porque [[R_contacto]] ha aumentado por degradación.\r
\r
Ambos fenómenos tienen la misma consecuencia física — calentamiento del contacto — pero causas distintas y soluciones distintas. Identificar cuál está presente es el primer paso diagnóstico: calcular [[margen_uso]] y, si está bien, estimar si [[P_perdida]] puede ser significativa dado el estado del contacto.\r
\r
## Orden de magnitud\r
\r
En una instalación residencial española típica, [[V]] = 230 V. Una toma estándar tiene [[I_max]] = 16 A, por lo que su [[P_max]] es aproximadamente 3 680 W. Una regleta de baja calidad de 10 A tiene [[P_max]] de 2 300 W.\r
\r
Conectar un calefactor de 2 000 W, un ordenador portátil de 90 W y un cargador de 18 W a la misma regleta supone una [[P_tot]] de 2 108 W, equivalente a [[I_tot]] de 9,2 A, con [[margen_uso]] de 0,57. Dentro del límite. Añadir una segunda estufa de 2 000 W eleva [[P_tot]] a 4 108 W, [[I_tot]] a 17,9 A y [[margen_uso]] a 1,12: sobrecarga activa.\r
\r
Una [[R_contacto]] de 0,1 Ω con [[I_tot]] = 16 A disipa 25,6 W en el contacto. Con [[R_contacto]] = 0,5 Ω (contacto degradado), la disipación sube a 128 W, suficiente para dañar el plástico en minutos.\r
\r
## Método de resolución personalizado\r
\r
Para evaluar si una toma o regleta está sobrecargada:\r
\r
1. Identificar todos los equipos conectados simultáneamente y sus potencias nominales [[P]].\r
2. Sumar potencias: calcular [[P_tot]].\r
3. Calcular [[I_tot]] usando la fórmula de corriente total con [[V]] = 230 V.\r
4. Identificar [[I_max]] de la toma o regleta (etiqueta del fabricante).\r
5. Calcular [[margen_uso]] y comparar con 1.\r
6. Si [[margen_uso]] > 0,8 en uso continuado, redistribuir carga o cambiar a regleta de mayor capacidad.\r
7. Si hay síntomas térmicos (calor en enchufe, olor a quemado, plástico decolorado), inspeccionar [[R_contacto]] y sustituir la toma.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso A — Regleta con múltiples cargadores.** Cuatro cargadores de smartphone de 18 W, un portátil de 65 W y una lámpara LED de 10 W: [[P_tot]] = 147 W, [[I_tot]] = 0,64 A. [[margen_uso]] = 0,04. Sin riesgo térmico.\r
\r
**Caso B — Calefactores en regleta.** Dos calefactores de 2 000 W en regleta de 10 A ([[P_max]] = 2 300 W): [[P_tot]] = 4 000 W, [[I_tot]] = 17,4 A. [[margen_uso]] = 1,74. Sobrecarga severa. Riesgo inmediato.\r
\r
**Caso C — Contacto degradado sin sobrecarga.** [[I_tot]] = 8 A (dentro del límite de 16 A) con [[R_contacto]] = 0,3 Ω por oxidación: [[P_perdida]] = 19,2 W. Ningún magnetotérmico actúa, pero el calor local puede dañar el contacto progresivamente.\r
\r
## Preguntas reales del alumno\r
\r
**¿Si la regleta tiene fusible propio, está protegida frente a sobrecarga?** El fusible de la regleta protege el circuito contra cortocircuito, pero no necesariamente contra la degradación térmica lenta por sobrecarga moderada. Un fusible de 16 A puede no actuar ante una sobrecarga del 10 % que, mantenida durante horas, degrada el contacto progresivamente.\r
\r
**¿Una regleta de más amperes es siempre mejor?** Una regleta de 16 A es más segura que una de 10 A solo si el cableado y los contactos internos están dimensionados para 16 A. Una regleta de baja calidad etiquetada como 16 A puede tener contactos que no aguantan esa corriente. El sello de calidad y la norma de producto (EN 61058) son más relevantes que el valor de [[I_max]] declarado.\r
\r
**¿Por qué los calefactores son el principal riesgo en regletas?** Porque tienen una [[P]] alta y constante durante horas. Un calefactor de 2 000 W consume una corriente de aproximadamente 8,7 A de forma continua. Si hay otros equipos en la misma regleta, [[I_tot]] puede superar [[I_max]] rápidamente. Además, el calor del calefactor eleva la temperatura ambiente de la regleta, reduciendo su capacidad de disipación.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta directamente con **diferencial y magnetotérmico** (las protecciones no detectan sobrecarga local de toma), con **tensión y potencia en casa** (P y V como datos de entrada) y con **seguridad eléctrica** (consecuencias del calentamiento de contacto). La ley de Joule localizada en [[R_contacto]] es el puente entre la magnitud eléctrica observable ([[I_tot]]) y el riesgo físico (temperatura del contacto).\r
\r
Ruta de estudio recomendada: **corriente eléctrica → resistencia y ley de Ohm → potencia eléctrica → tensión y potencia en casa → enchufes y tomas (este leaf) → diferencial y magnetotérmico → seguridad eléctrica.**\r
\r
## Síntesis final\r
\r
La toma de corriente tiene un límite [[I_max]] que no debe superarse en régimen permanente. La corriente total [[I_tot]] = [[P_tot]] / [[V]] es la magnitud que circula por los contactos. El ratio [[margen_uso]] = [[I_tot]] / [[I_max]] cuantifica la proximidad a la sobrecarga. La ley de Joule localizada en [[R_contacto]] explica el riesgo térmico incluso con corrientes dentro del límite cuando el contacto está degradado. Ninguna protección del circuito detecta este riesgo: la única defensa es no superar [[margen_uso]] y mantener los contactos en buen estado.`;export{e as default};
