const e=`# Diferencial y magnetotérmico\r
\r
En un cuadro eléctrico doméstico conviven dos tipos de protecciones que con frecuencia se confunden entre sí: el diferencial y el magnetotérmico. Aunque ambos interrumpen el suministro cuando actúan, vigilan magnitudes físicas completamente distintas y responden a amenazas diferentes. El [[I_delta]] que el diferencial mide no es la [[I]] total del circuito, sino el desequilibrio entre conductor de fase y neutro. El [[margen_termico]] que determina cuándo actúa el magnetotérmico depende de si [[I]] supera [[I_n]]. Entender esta distinción es el primer paso para diagnosticar correctamente cualquier incidencia eléctrica en vivienda.\r
\r
## Contexto conceptual\r
\r
El cuadro eléctrico de una vivienda organiza la distribución de la energía en circuitos independientes y protege cada uno con al menos un magnetotérmico. El diferencial, generalmente uno por bloque de circuitos, añade una capa adicional de protección frente a fugas de corriente. La confusión más frecuente es tratar estos dos dispositivos como equivalentes o intercambiables, cuando en realidad miden cosas completamente distintas.\r
\r
El magnetotérmico opera comparando [[I]] con el calibre nominal [[I_n]]. Si la corriente supera ese valor durante suficiente tiempo, el elemento bimetálico se calienta, se deforma y abre el circuito. Para un cortocircuito, el elemento magnético actúa en milisegundos. En ningún caso el magnetotérmico mide si hay fuga a tierra: solo vigila la magnitud total de [[I]] en su circuito.\r
\r
El diferencial opera midiendo simultáneamente la [[I_fase]] y la [[I_neutro]]. En condiciones normales sin fuga a tierra, toda la corriente que entra por fase regresa por neutro: [[I_delta]] es prácticamente cero. Si hay una fuga, parte de la corriente vuelve por un camino alternativo y [[I_delta]] deja de ser cero. Cuando [[I_delta]] supera [[I_dn]], el diferencial actúa. Este mecanismo es independiente de la magnitud total de [[I]]: un circuito puede estar perfectamente dentro del calibre magnetotérmico y aun así tener una fuga que dispare el diferencial.\r
\r
La confusión entre ambos dispositivos genera dos errores habituales: cambiar el diferencial cuando lo que hay es sobrecarga, y cambiar el magnetotérmico cuando lo que hay es fuga. Ninguno de los dos cambios resuelve el problema original.\r
\r
## 🟢 Nivel esencial\r
\r
El diferencial no limita la potencia de la vivienda ni protege el cableado frente a sobrecargas. Su única función es detectar desequilibrio entre fase y neutro. Si [[I_delta]] supera [[I_dn]], corta el suministro para proteger a las personas frente al contacto eléctrico indirecto.\r
\r
El magnetotérmico no detecta fugas a tierra ni protege a las personas de forma directa. Su función es proteger el cableado frente al exceso de corriente y frente al calentamiento que ese exceso produce. Cuando la corriente supera el calibre nominal de forma sostenida o cuando hay un cortocircuito, corta el circuito.\r
\r
Una consecuencia importante: puede haber riesgo eléctrico real sin que ninguno de los dos dispare. Si hay una sobrecarga equilibrada sin fuga, el diferencial no actúa. Si la corriente de fuga es pequeña pero constante en un punto de conexión deteriorado, el calor local puede ser elevado sin que la corriente total supere el calibre.\r
\r
La frase "no saltó nada" no es evidencia de seguridad. Es simplemente evidencia de que la corriente total no superó el calibre y de que [[I_delta]] no superó [[I_dn]] en el instante medido.\r
\r
## 🔵 Nivel formal\r
\r
La corriente que circula por un circuito cuando se conecta una carga es:\r
\r
{{f:corriente_carga}}\r
\r
Esta [[I]] se compara con [[I_n]] del magnetotérmico. Si [[I]] supera [[I_n]], existe sobrecarga. Para cuantificar qué fracción de la capacidad nominal se está usando, se define el [[margen_termico]]:\r
\r
{{f:ratio_termico}}\r
\r
Valores de [[margen_termico]] iguales o superiores a 1 indican que el magnetotérmico está en zona de posible disparo.\r
\r
El desequilibrio entre conductores que mide el diferencial se calcula como:\r
\r
{{f:desequilibrio}}\r
\r
donde [[I_fase]] es la corriente medida en el conductor de fase e [[I_neutro]] es la corriente medida en el conductor de neutro. Físicamente, [[I_delta]] representa la corriente que no regresa por el camino previsto, es decir, la que se ha desviado a tierra por alguna fuga. Para cuantificar qué fracción del umbral diferencial se ha alcanzado, se define el [[margen_dif]]:\r
\r
{{f:ratio_diferencial}}\r
\r
Cuando [[margen_dif]] alcanza 1, el diferencial actúa. Los valores de [[I_dn]] más habituales en instalaciones residenciales son 30 mA (alta sensibilidad, protección personal) y 300 mA (media sensibilidad, protección contra incendios).\r
\r
La potencia máxima aproximada que puede conectarse antes de que el magnetotérmico actúe es:\r
\r
{{f:potencia_limite}}\r
\r
Esta [[P_lim]] es una estimación para carga resistiva pura a tensión [[V]] nominal. En la práctica, la curva de disparo magnetotérmico depende del tiempo y de la temperatura del bimetálico, por lo que [[P_lim]] es un orden de magnitud, no un límite exacto.\r
\r
## 🔴 Nivel estructural\r
\r
Cada protección responde a una variable independiente, por lo que sus dominios de actuación son complementarios pero no superpuestos:\r
\r
- **Sobrecarga equilibrada:** [[I]] supera [[I_n]], [[I_delta]] es pequeño. Actúa el magnetotérmico, el diferencial puede no actuar.\r
- **Fuga a tierra:** [[I_delta]] supera [[I_dn]], pero [[I]] puede estar dentro del calibre. Actúa el diferencial, el magnetotérmico puede no actuar.\r
- **Defecto térmico local:** conexión degradada con resistencia de contacto elevada. La disipación local es alta pero [[I]] no supera [[I_n]] y [[I_delta]] es pequeño. Ninguno dispara, pero hay riesgo real de incendio.\r
\r
El tercer escenario es el más peligroso precisamente porque ninguna protección actúa. El calor disipado en un punto de contacto con resistencia [[V]]-dependiente puede causar daños irreversibles sin que el cuadro dé señal alguna.\r
\r
El modelo de dos protecciones independientes es válido para análisis residencial monofásico con cuadro estándar. Pierde exactitud en instalaciones trifásicas, en presencia de armónicos elevados (que pueden causar disparos fantasma), o cuando el diferencial es de tipo A en lugar de tipo AC (diferente respuesta a corrientes pulsantes de CC).\r
\r
## Interpretación física profunda\r
\r
Cuando se pregunta "¿por qué saltó uno y no el otro?", la respuesta correcta exige identificar qué magnitud superó su umbral. Si saltó el diferencial, hubo una diferencia [[I_delta]] apreciable entre [[I_fase]] e [[I_neutro]]: algo rompió la simetría. Si saltó el magnetotérmico, [[I]] superó [[I_n]] en ese circuito concreto, independientemente de si había fuga.\r
\r
El [[margen_dif]] y el [[margen_termico]] son herramientas de diagnóstico: un [[margen_termico]] de 0,85 indica que el circuito opera al 85 % de su capacidad nominal, con margen para sobrecargas transitorias pero sin margen cómodo para añadir cargas. Un [[margen_dif]] de 0,6 indica que la fuga actual es el 60 % del umbral: no dispara, pero señala que algo no está en condiciones ideales.\r
\r
La acción correcta cuando el diferencial dispara repetidamente no es subir [[I_dn]]: eso eliminaría la protección. La acción correcta es identificar el circuito o aparato que genera [[I_delta]] y corregir la fuga.\r
\r
## Orden de magnitud\r
\r
En una instalación residencial española típica: [[I_dn]] = 30 mA para el diferencial de alta sensibilidad; [[I_n]] típicos para circuitos de iluminación 10 A, tomas generales 16 A, cocina 25 A. Para una [[V]] de 230 V, la [[P_lim]] de un circuito de 16 A es de aproximadamente 3,7 kW. Una fuga de 30 mA a 230 V representa una [[P]] disipada de solo 6,9 W, pero es suficiente para ser letal si circula por el cuerpo humano.\r
\r
## Método de resolución personalizado\r
\r
Para diagnosticar un incidente con protecciones:\r
\r
1. Identificar qué dispositivo actuó (diferencial, magnetotérmico o ninguno).\r
2. Estimar la [[I]] del circuito afectado usando [[P]] conocida y [[V]] nominal.\r
3. Calcular [[margen_termico]] = [[I]] / [[I_n]] y comparar con 1.\r
4. Si hay medición de [[I_fase]] e [[I_neutro]], calcular [[I_delta]] y [[margen_dif]].\r
5. Si hay síntomas térmicos sin disparo, inspeccionar puntos de conexión y verificar resistencia de contacto.\r
6. Corregir la causa raíz: redistribuir cargas, reparar fuga, sustituir conexión degradada.\r
7. Verificar en operación real; no aceptar "ya no salta" como único criterio de éxito.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso A — Sobrecarga pura.** Circuito de 230 V con magnetotérmico de 16 A. Se conectan equipos con [[P]] total de 4 800 W. La [[I]] resultante es aproximadamente 20,9 A. El [[margen_termico]] supera 1,30, indicando sobrecarga del 30 %. Esperable actuación del magnetotérmico en pocos minutos.\r
\r
**Caso B — Fuga sin sobrecarga.** Se mide [[I_fase]] = 9,62 A e [[I_neutro]] = 9,57 A. La diferencia absoluta da [[I_delta]] de 0,05 A equivalente a 50 mA. Con [[I_dn]] de 30 mA, el [[margen_dif]] supera la unidad: esperable actuación del diferencial aunque [[I]] total no supere ningún calibre.\r
\r
**Caso C — Defecto térmico sin disparo.** Circuito con [[I]] de 13 A y magnetotérmico de 16 A. El [[margen_termico]] es aproximadamente 0,81, dentro del calibre. No hay fuga apreciable. Sin embargo, una conexión floja tiene resistencia de contacto elevada y disipa calor localmente. Ninguna protección actúa, pero el defecto existe.\r
\r
## Preguntas reales del alumno\r
\r
**¿Si salta el diferencial, debo subir su umbral [[I_dn]]?** No. Subir [[I_dn]] elimina la protección personal. Hay que identificar el origen de [[I_delta]] y corregirlo.\r
\r
**¿Si salta el magnetotérmico, basta con poner uno de mayor [[I_n]]?** Solo si el cableado, la instalación y la protección general lo permiten. Cambiar [[I_n]] sin recalcular toda la línea puede dejar el conductor desprotegido.\r
\r
**¿Por qué a veces salta al encender un aparato y luego no?** Pueden ser transitorios de arranque, degradación intermitente dependiente de temperatura o humedad, o defecto que solo aparece bajo carga.\r
\r
**¿Qué no dispara el diferencial?** Sobrecargas equilibradas donde [[I_fase]] ≈ [[I_neutro]] y algunos fallos térmicos locales sin fuga apreciable.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta directamente con **seguridad eléctrica** (efecto de las protecciones sobre el riesgo humano), con **enchufes y tomas** (fallos térmicos locales con o sin disparo), y con **tensión y potencia en casa** (base para estimar la [[I]] de cada circuito). También conecta con el concepto general de **dominio de validez del modelo físico**: el modelo de dos protecciones independientes tiene límites claros que el análisis riguroso debe reconocer.\r
\r
Ruta de estudio recomendada: **intensidad de corriente → resistencia y ley de Ohm → tensión y potencia en casa → diferencial y magnetotérmico (este leaf) → seguridad eléctrica.**\r
\r
## Síntesis final\r
\r
El diferencial y el magnetotérmico no protegen lo mismo ni contra lo mismo. El diferencial vigila [[I_delta]] y protege personas. El magnetotérmico vigila [[I]] respecto a [[I_n]] y protege el cableado. Conocer qué magnitud supera qué umbral en cada incidente permite diagnosticar con precisión, actuar con seguridad y evitar las decisiones peligrosas de subir calibres sin criterio técnico.\r
`;export{e as default};
