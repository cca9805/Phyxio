const e=`# Peso en diferentes contextos\r
\r
## Contexto conceptual\r
\r
Este leaf aborda una pregunta muy concreta: como cambia la lectura de soporte de un sistema cuando cambia el entorno gravitatorio o cuando cambia la aceleracion del marco. En la vida diaria solemos llamar peso a todo, pero en fisica conviene distinguir entre la fuerza gravitatoria real [[P]] y la lectura de apoyo [[Pap]], que puede aumentar, disminuir o anularse dependiendo del estado dinamico.\r
\r
La clave conceptual es separar tres niveles: fuente del campo, posicion dentro del campo y marco de observacion. La fuente se describe con [[M]] y la constante [[G]]. La posicion se expresa con [[R]], [[h]] y [[r]]. El marco de observacion introduce [[a]] y la fuerza de contacto [[N]], que en muchos experimentos coincide con la lectura de una bascula. Esta separacion evita confundir causa con efecto y permite explicar por que dos personas con la misma [[m]] pueden registrar pesos aparentes distintos en situaciones diferentes.\r
\r
## 🟢 Nivel esencial\r
\r
En el nivel esencial no empezamos por ecuaciones, empezamos por decisiones fisicas. Si preguntas cuanto pesa un cuerpo, primero debes decir en que lugar esta y como se mueve el soporte. Un objeto en reposo sobre la superficie terrestre no ofrece la misma lectura que el mismo objeto dentro de un ascensor acelerado o en una orbita baja.\r
\r
El primer mensaje esencial es que [[m]] no cambia al cambiar de planeta o de ascensor. Lo que cambia es la intensidad efectiva del campo y, en muchos casos, la lectura de soporte. Por eso la experiencia subjetiva de pesadez no mide solo gravedad: tambien refleja dinamica del marco.\r
\r
El segundo mensaje esencial es geometrico: conviene distinguir entre medidas locales de altura y medidas globales de distancia al centro. Si mezclas esas escalas, el resultado puede parecer correcto en algebra pero fallar en fisica.\r
\r
El tercer mensaje esencial es causal: una cosa es la interaccion gravitatoria real y otra cosa es la lectura instrumental asociada a contacto. Cuando esta jerarquia queda clara, el tema deja de verse como una coleccion de formulas y pasa a ser un mapa de decisiones fisicas bien justificadas.\r
\r
## 🔵 Nivel formal\r
\r
En el nivel formal introducimos las relaciones operativas del leaf. Cada formula responde a una pregunta especifica y debe usarse con criterio de dominio.\r
\r
Relacion vectorial local entre masa y campo:\r
\r
{{f:peso_local_vectorial}}\r
\r
Esta relacion fija que [[P]] depende de [[m]] y [[g]], y que la direccion del vector sigue la direccion del campo. No es una igualdad escalar ciega: contiene orientacion fisica.\r
\r
Aproximacion de superficie para el modulo del peso:\r
\r
{{f:peso_superficie}}\r
\r
Es util cuando la altura relevante es pequena frente a [[R]]. En ese contexto, [[g0]] representa una referencia local estable y permite estimaciones rapidas de [[Pmod]].\r
\r
Cambio de gravedad con altura respecto a superficie:\r
\r
{{f:gravedad_altura}}\r
\r
Esta expresion muestra por que [[gmod]] decrece al aumentar [[h]]. El efecto no es lineal: la variacion sigue una dependencia cuadratica en la razon geometrica.\r
\r
Modelo de campo central general:\r
\r
{{f:gravedad_campo_central}}\r
\r
Aqui aparecen explicitamente [[G]], [[M]] y [[r]]. Esta forma es la adecuada cuando la escala de variacion espacial no permite tratar al campo como casi constante.\r
\r
Relacion dinamica para lectura de soporte:\r
\r
{{f:peso_aparente_concepto}}\r
\r
Esta expresion integra gravedad y aceleracion del marco. Permite explicar casos limite como la caida libre, donde la lectura [[Pap]] puede tender a cero aunque la gravedad siga existiendo.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural responde a la pregunta mas importante para el trabajo experto: cuando conviene cambiar de representacion o de modelo.\r
\r
Si el problema trata variaciones pequenas alrededor de una superficie conocida, usar [[g0]] y la aproximacion local suele bastar. Si el problema recorre alturas comparables con [[R]] o exige comparaciones entre planetas con [[M]] muy distintas, conviene pasar a la descripcion con [[G]], [[M]] y [[r]].\r
\r
Tambien hay un criterio experimental: si dos modelos entregan diferencias comparables a la incertidumbre instrumental, cualquiera puede ser util. Si la diferencia supera claramente la incertidumbre y cambia decisiones fisicas, debes usar el modelo mas completo. Esta idea conecta con practica de laboratorio y con ingenieria de sistemas.\r
\r
Por ultimo, recuerda que [[Pap]] y [[N]] son magnitudes de contacto. Si no hay contacto mecanico, la lectura de soporte pierde sentido operativo, aunque [[P]] siga siendo no nulo. Esta distincion evita errores de interpretacion en escenarios de orbita, plataformas en aceleracion y maniobras verticales.\r
\r
## Interpretación física profunda\r
\r
Interpretar bien este leaf significa poder contar una historia causal completa: que campo existe, donde estas, que marco eliges y que sensor estas leyendo. Una respuesta puramente numerica no basta. Debes poder justificar por que un valor sube o baja y cual magnitud domina la variacion.\r
\r
Cuando [[h]] aumenta, [[gmod]] baja y suele bajar [[Pmod]]. Cuando el marco acelera hacia arriba, [[Pap]] sube aunque [[m]] permanezca fija. Cuando el marco cae con aceleracion opuesta al campo y de magnitud comparable, [[Pap]] puede caer de forma drastica. Esta lectura causal es la que conecta teoria, experimento y grafica.\r
\r
## Orden de magnitud\r
\r
Referencias practicas utiles para control de resultados:\r
\r
- [[m]]: de gramos a toneladas, segun aplicacion.\r
- [[gmod]]: de casi cero en espacio profundo a centenas de metros por segundo cuadrado en entornos extremos.\r
- [[Pmod]] y [[Pap]]: desde fracciones de newton hasta cargas industriales.\r
- [[R]] y [[r]]: desde radios planetarios a distancias orbitales.\r
\r
Un resultado fuera de escala no siempre es imposible, pero siempre exige revisitar unidades, dominio y datos.\r
\r
## Método de resolución personalizado\r
\r
1. Define objetivo de salida: [[P]], [[Pmod]], [[gmod]] o [[Pap]].\r
2. Identifica contexto: superficie, altura variable o campo central.\r
3. Decide magnitudes geometricas correctas: [[h]] o [[r]].\r
4. Elige formula del leaf segun dominio y no por costumbre.\r
5. Ejecuta sustitucion numerica y valida unidades.\r
6. Interpreta causalmente el resultado.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso A: en caida libre ideal, la interaccion de soporte puede desaparecer y la lectura [[Pap]] tender a cero.\r
\r
Caso B: a gran distancia radial, el campo se debilita y el peso real decrece, pero nunca por cambio de [[m]], sino por cambio de [[gmod]].\r
\r
Caso C: en ascensor acelerado, la lectura de bascula puede aumentar sin cambio de planeta.\r
\r
## Preguntas reales del alumno\r
\r
Por que en un problema usan [[g0]] y en otro usan [[G]] y [[M]]: porque cambian la escala y la precision requerida.\r
\r
Si [[Pap]] cambia, cambia el peso real [[P]]: no necesariamente; puede cambiar solo la dinamica del soporte.\r
\r
Por que aparece [[N]] en un diagrama de cuerpo libre: porque el sensor lee contacto, no lee directamente la fuerza gravitatoria global.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con segunda ley de Newton, diagramas de cuerpo libre y gravitación central. Tambien prepara terreno para dinamica orbital y para interpretacion de sensores inerciales en tecnologia.\r
\r
## Síntesis final\r
\r
Peso en diferentes contextos no es repetir una formula con otros numeros. Es aprender a distinguir entre fuerza gravitatoria real, modelo espacial del campo y lectura de soporte en un marco concreto. Cuando dominas esa distincion, tus resultados numericos ganan coherencia y tu interpretacion fisica se vuelve transferible a problemas nuevos.\r
\r
Esa transferencia es la señal de aprendizaje profundo: puedes cambiar de escenario sin perder criterio sobre que se mide, que se modela y que se interpreta.\r
\r
En practica profesional, esa claridad evita errores de seguridad, mejora la calidad de calibracion y acelera la toma de decisiones cuando el contexto fisico cambia durante una operacion real.\r
`;export{e as default};
