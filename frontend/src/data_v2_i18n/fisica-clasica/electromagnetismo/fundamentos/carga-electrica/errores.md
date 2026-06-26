## Errores conceptuales


### Error 1: Confundir carga eléctrica con corriente eléctrica

**Por qué parece correcto**

El alumno sabe que ambas magnitudes tienen que ver con "la electricidad" y que la corriente fluye en cables que transportan carga. La generalización errónea es que carga y corriente son la misma cosa o que son intercambiables en cualquier contexto. La analogía cotidiana con el agua refuerza la confusión: si el agua es la corriente, ¿qué es la carga?

**Por qué es incorrecto**

La [[carga_electrica]] es una cantidad acumulada; la corriente es la tasa de flujo de esa cantidad. Son tan distintas como el volumen de agua almacenado en un depósito y el caudal que sale por el grifo. Un condensador cargado tiene [[carga_electrica]] máxima y corriente nula; en el instante de descargarse, la corriente es máxima y [[carga_electrica]] está disminuyendo. Confundirlas produce cálculos dimensionalmente incorrectos.

**Señal de detección**

El alumno sustituye amperios donde debería usar culombios, o viceversa. Otro síntoma: el alumno dice que "la corriente es grande porque la carga es grande", sin notar que ambas pueden tener signos independientes y que la corriente depende también del tiempo.

**Corrección conceptual**

[[carga_electrica]] responde a la pregunta "¿cuánta electricidad hay acumulada?"; la corriente responde a "¿a qué ritmo fluye la carga?". La relación entre ambas involucra el tiempo: una carga grande puede fluir lentamente (corriente pequeña) o rápidamente (corriente grande).

**Mini-ejemplo de contraste**

Un rayo descarga varios culombios en unos milisegundos: la corriente instantánea es enorme (del orden de kiloamperios). Un cable doméstico transporta corrientes de amperios durante horas: la carga total transferida en ese tiempo puede superar la del rayo. El cable no "tiene más carga" que el rayo en cada instante; simplemente fluye durante más tiempo.

---


### Error 2: Creer que un objeto neutro no tiene carga en su interior

**Por qué parece correcto**

Si un objeto es neutro, su [[q_neta]] es cero. El alumno infiere que no hay cargas en su interior, porque "cero" evoca "ausencia". Esta generalización es reforzada por el lenguaje cotidiano: "no está cargado" se asocia intuitivamente a "no hay electricidad".

**Por qué es incorrecto**

Un objeto neutro contiene enormes cantidades de [[q_pos]] y [[q_neg]] que se compensan exactamente. Un gramo de agua contiene aproximadamente 96 millones de culombios de carga positiva (protones del hidrógeno y del oxígeno) y la misma cantidad de carga negativa (electrones). La neutralidad significa balance, no ausencia.

**Señal de detección**

El alumno concluye que un objeto neutro no puede ejercer ninguna fuerza eléctrica en ninguna circunstancia. Esto es falso para distancias cortas: las distribuciones internas de carga generan campos dipolares y fuerzas de Van der Waals incluso entre objetos neutros.

**Corrección conceptual**

La neutralidad eléctrica significa que [[q_neta]] es cero, es decir, que [[q_pos]] y [[q_neg]] son iguales en módulo. Las cargas existen en enormes cantidades; solo se cancelan en el efecto neto a larga distancia. A corta distancia, la distribución interna importa.

**Mini-ejemplo de contraste**

Un imán atrae clips de acero aunque el imán y los clips sean eléctricamente neutros: la fuerza magnética no es la coulombiana, pero el ejemplo ilustra que neutralidad no equivale a inactividad eléctrica. De forma más directa, un globo cargado negativamente atrae un papel neutro porque induce en él una redistribución de cargas internas: los protones del papel se acercan más al globo que los electrones, creando una atracción neta.

---

## Errores de modelo


### Error 3: Aplicar la cuantización de la carga a sistemas macroscópicos con resolución numérica fraccionaria

**Por qué parece correcto**

El alumno sabe que la carga está cuantizada y que [[numero_de_cargas_elementales]] debe ser entero. Al calcular [[numero_de_cargas_elementales]] dividiendo [[carga_electrica]] entre [[carga_elemental]], obtiene un resultado con muchos decimales (por ejemplo, n aproximadamente igual a 6.24 por diez a la doce) y decide que debe redondearse al entero más cercano. El error es creer que el redondeo cambia el resultado físico.

**Por qué es incorrecto**

Para cargas macroscópicas del orden de microcoulombios o mayores, [[numero_de_cargas_elementales]] es del orden de billones. El redondeo al entero más cercano no altera el resultado físico en ninguna medida apreciable: la diferencia relativa es inferior a una parte en un billón. El modelo continuo de carga (sin cuantización explícita) es una aproximación perfectamente válida a esas escalas. Forzar el redondeo no añade precisión; en el extremo opuesto, si [[numero_de_cargas_elementales]] da un número pequeño con parte decimal significativa (por ejemplo 2.5), hay un error real en los datos de entrada.

**Señal de detección**

El alumno reporta [[numero_de_cargas_elementales]] con decimales como resultado final de un problema de cuantización de carga microscópica, o aplica la cuantización a cargas macroscópicas sin necesidad y comete errores de redondeo acumulativos.

**Corrección conceptual**

La cuantización de la carga es relevante cuando [[numero_de_cargas_elementales]] es pequeño (menos de unos millones). Para cargas macroscópicas, el modelo continuo es indistinguible del discreto. Si [[numero_de_cargas_elementales]] da un resultado no entero en un contexto microscópico, hay error en los datos; si es macroscópico, el resultado es correcto y el decimal es irrelevante.

**Mini-ejemplo de contraste**

Un electrón aislado tiene [[carga_electrica]] igual a [[carga_elemental]] negativo y [[numero_de_cargas_elementales]] igual a menos uno exacto. Si un experimento de Millikan mide una gota con [[carga_electrica]] equivalente a tres cargas elementales, [[numero_de_cargas_elementales]] debe ser exactamente tres; cualquier desviación indica error experimental. Para un condensador de laboratorio con carga del orden de microcoulombios, [[numero_de_cargas_elementales]] es de orden diez elevado a trece y el decimal es irrelevante.

---


### Error 4: Creer que la carga puede destruirse en una neutralización

**Por qué parece correcto**

Cuando un objeto positivo y uno negativo se neutralizan, la [[q_neta]] del sistema pasa a cero. El alumno interpreta este "desaparecer de la carga" como destrucción. La analogía con la suma algebraica refuerza el error: si tenemos más uno y menos uno y el resultado es cero, "la carga desapareció".

**Por qué es incorrecto**

La carga no se destruye: se redistribuye. Cuando los electrones del objeto negativo fluyen hacia el positivo, compensan exactamente el déficit de electrones del objeto positivo. Antes del proceso, la carga total del sistema es positiva más negativa, que da cero; después también es cero. La carga total se conservó en todo momento.

**Señal de detección**

El alumno escribe que "la carga se anuló" o "desapareció" en lugar de "se redistribuyó" o "se transfirió". También puede creer erróneamente que en una neutralización se libera carga hacia el entorno.

**Corrección conceptual**

La conservación de la carga es absoluta: [[q_neta]] del universo no cambia. En una neutralización, los portadores de carga (electrones) se mueven de un objeto al otro hasta que el balance es cero. Los electrones siguen existiendo; solo cambiaron de lugar.

**Mini-ejemplo de contraste**

Si se tiene una esfera con carga positiva de 5 µC y otra con carga negativa de 5 µC y se las pone en contacto, los electrones de la esfera negativa fluyen hacia la positiva hasta que ambas tienen carga neta cero. La [[q_neta]] del sistema antes del contacto era cero (5 menos 5); después del contacto sigue siendo cero. Ninguna carga apareció ni desapareció.

---

## Errores matemáticos


### Error 5: Sumar módulos de cargas en lugar de hacer suma algebraica

**Por qué parece correcto**

El alumno ve un sistema con una carga de 3 µC y otra de 2 µC, y calcula la carga total como 5 µC. La operación parece natural porque "sumar" significa combinar. No identifica que una de las cargas puede ser negativa y que el signo cambia radicalmente el resultado.

**Por qué es incorrecto**

La [[q_neta]] se calcula como suma algebraica: [[q_pos]] más [[q_neg]], donde [[q_neg]] es siempre negativa o nula. Si hay 3 µC positivos y 2 µC negativos, la carga neta es 1 µC, no 5 µC. Sumar módulos equivale a ignorar el signo, que es precisamente la información más importante en electrostática: determina si la interacción es atractiva o repulsiva.

**Señal de detección**

El alumno obtiene una [[q_neta]] mayor que la de cualquiera de las cargas individuales cuando debería obtener un valor intermedio. O bien calcula la fuerza coulombiana entre dos objetos como si ambos tuvieran la misma polaridad cuando en realidad son de polaridades opuestas.

**Corrección conceptual**

Asignar el signo correcto a cada carga desde el principio. Las cargas positivas entran con signo positivo y las negativas con signo negativo. La suma algebraica produce la [[q_neta]] real. Verificar siempre que el resultado sea físicamente plausible: si los objetos tienen cargas de signos opuestos, la [[q_neta]] debe ser menor en módulo que la mayor de las dos.

**Mini-ejemplo de contraste**

Dos objetos con cargas de 4 µC y 4 µC negativo se ponen en contacto y la [[q_neta]] combinada se distribuye por igual. Si se suma algebraicamente, el total es cero; si se suman los módulos, daría 8 µC, lo que implicaría que la carga se duplicó por contacto: una violación flagrante de la conservación.

---

## Errores de interpretación


### Error 6: Interpretar carga negativa como "menos electricidad" que carga positiva

**Por qué parece correcto**

En el lenguaje cotidiano, negativo suena a "menos", a "falta", a algo inferior. El alumno transfiere este significado cultural a la física y concluye que un objeto con [[carga_electrica]] negativa tiene "menos electricidad" que uno con la misma [[carga_electrica]] positiva. Esta interpretación lleva a errores en el análisis de fuerzas.

**Por qué es incorrecto**

La [[carga_electrica]] positiva y negativa son simétricas en módulo: un electrón con [[carga_electrica]] negativa de valor [[carga_elemental]] tiene exactamente el mismo efecto en magnitud que un protón con [[carga_electrica]] positiva del mismo valor. El signo solo indica el tipo de portador y el sentido de la fuerza (atracción o repulsión), no la intensidad. Dos cargas iguales en módulo pero opuestas en signo producen fuerzas de igual magnitud entre sí.

**Señal de detección**

El alumno calcula la fuerza entre dos objetos usando solo el módulo de una carga y despreciando el signo de la otra, o concluye que la interacción entre una carga de gran módulo negativo y una pequeña positiva es más débil que entre dos pequeñas positivas del mismo módulo absoluto.

**Corrección conceptual**

El módulo de [[carga_electrica]] determina la intensidad de la interacción; el signo determina su dirección. Cargas de signos opuestos se atraen con la misma intensidad que se repelirían si tuvieran el mismo signo. Lo que cambia es solo el sentido de la fuerza, nunca su módulo si los módulos de carga son iguales.

**Mini-ejemplo de contraste**

Un protón y un electrón separados a la misma distancia que dos protones experimentan fuerzas de igual módulo. El par protón-electrón se atrae; el par protón-protón se repele, pero la intensidad es idéntica en ambos casos si la distancia y los módulos de carga son los mismos.

---

## Regla de autocontrol rápido

Antes de dar por bueno cualquier resultado de [[carga_electrica]] o [[numero_de_cargas_elementales]], verificar estas cuatro condiciones:

1. **Signo correcto**: el objeto que cedió electrones quedó positivo; el que ganó electrones quedó negativo. Si el signo no coincide con esa regla, revisar.
2. **[[numero_de_cargas_elementales]] entero**: si [[numero_de_cargas_elementales]] es fraccionario en un contexto de carga elemental, hay un error de unidades o de datos.
3. **Conservación**: sumar algebraicamente [[carga_electrica]] inicial y [[carga_electrica]] final del sistema. Si no coinciden en un sistema aislado, hay un error de planteamiento.
4. **Escala razonable**: para objetos cotidianos la carga es del orden de nanocoulombios a microcoulombios. Un resultado de culombios en un contexto de laboratorio ordinario es sospechoso.