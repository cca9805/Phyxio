const e=`# Historia

## Problema histórico

A finales del siglo XIX, cuando la electrificación de los hogares europeos y norteamericanos comenzaba a masificarse, la comunidad científica e industrial carecía de cualquier marco sistemático para entender cuánta corriente eléctrica resultaba peligrosa para el ser humano. Las muertes por electrocución eran frecuentes entre los trabajadores de instalaciones eléctricas y, progresivamente, entre los usuarios domésticos. El problema central no tenía respuesta: ¿qué hace exactamente la corriente eléctrica al cuerpo humano y a partir de qué umbral resulta letal?

Los primeros estudios sistemáticos los realizó Charles Dalziel en la Universidad de California (Berkeley) durante las décadas de 1940 y 1950. Dalziel se preguntó si era posible definir curvas de seguridad en el plano corriente-tiempo que separaran las condiciones seguras de las peligrosas para el ser humano. Su trabajo, continuado por investigadores europeos como Biegelmeier en Austria, sentó las bases de lo que hoy es la norma IEC 60479 —el documento que establece los umbrales de [[I_segura]] utilizados en todo el diseño de protecciones eléctricas domésticas.

## Dificultad conceptual previa

El obstáculo fundamental era tanto experimental como conceptual. Experimentalmente, no era ético someter a seres humanos a corrientes eléctricas potencialmente letales para medir sus umbrales. Conceptualmente, la comunidad asumía que la tensión era el agente de daño primario —analogía con el calor: a mayor temperatura, mayor quemadura— y que la corriente era simplemente la consecuencia. Esta confusión entre causa (tensión) y efecto fisiológico directo (corriente) retrasó el desarrollo de normas de protección basadas en corriente durante décadas.

La dificultad adicional era que el daño fisiológico no es proporcional solo a la corriente instantánea, sino al producto I×t (corriente por tiempo de exposición). Una corriente de 100 mA durante 10 ms puede ser menos dañina que 30 mA durante 3 segundos, en contra de la intuición de "más corriente, más peligro". Sin un modelo matemático del corazón como oscilador eléctrico susceptible a perturbaciones externas, era imposible predecir el umbral de fibrilación ventricular.

## Qué cambió

El avance clave fue la caracterización electrofisiológica del corazón humano como sistema oscilante con período refractario. En la década de 1950, la investigación en electrofisiología cardíaca demostró que la fibrilación ventricular solo puede inducirse durante una ventana temporal específica del ciclo cardíaco (la fase T de la onda electrocardiográfica). Esto explicaba por qué la duración de la exposición determinaba tanto el riesgo: una exposición de 20 ms puede no coincidir con la fase vulnerable, mientras que una de 500 ms casi seguramente la alcanzará.

Dalziel combinó experimentos con animales (perros y ovejas, cuyos corazones tienen masas comparables a las humanas) con datos de electrocuciones accidentales no letales y construyó las primeras curvas de seguridad I-t publicadas en 1961. Biegelmeier refinó estas curvas en los años 1970 con estudios más extensos, y el resultado final fue adoptado por la IEC como base de la norma 60479 en 1984. Por primera vez existía un documento científico que respondía la pregunta con cifras concretas: 30 mA como umbral de disparo del diferencial doméstico, 30 ms como tiempo máximo de exposición antes del riesgo grave de fibrilación.

## Impacto en la física

La normalización de los umbrales fisiológicos transformó radicalmente el diseño de instalaciones eléctricas. Antes de IEC 60479, los diferenciales se diseñaban empíricamente con intervalos de seguridad arbitrarios. Después, toda la cadena de diseño —desde la sensibilidad del diferencial ([[I_diferencial]]) hasta la resistencia máxima de tierra— se derivó de los umbrales fisiológicos mediante la Ley de Ohm aplicada al circuito de contacto humano.

El impacto más profundo fue conceptual: unificó la física eléctrica (Ley de Ohm aplicada al cuerpo) con la fisiología cardíaca (modelo de oscilador susceptible) en un único marco predictivo. La resistencia corporal [[R_cuerpo]] dejó de ser una curiosidad biológica y se convirtió en el parámetro de diseño central de los sistemas de protección eléctrica en el mundo entero.

## Conexión con física moderna

Los principios establecidos por Dalziel y Biegelmeier siguen siendo los fundamentos de la norma IEC 60479 vigente, actualizada en 2005 y 2018 con datos de nuevas investigaciones sobre población pediátrica, usuarios con enfermedades cardíacas y efectos de la corriente continua frente a la alterna. Los avances en electrofisiología cardíaca del siglo XXI —modelos computacionales del corazón humano en 3D— están permitiendo refinar las curvas de seguridad con mayor precisión que los estudios originales en animales.

La misma física de [[I_cuerpo]] que protege a las personas de los riesgos domésticos se aplica en el extremo opuesto del espectro: la desfibrilación cardíaca usa corrientes de 1–10 A durante 5–10 ms para restablecer el ritmo sinusal normal de un corazón en fibrilación. La comprensión cuantitativa de los umbrales fisiológicos hace posible tanto proteger del daño accidental como revertir el daño ya producido.
`;export{e as default};
