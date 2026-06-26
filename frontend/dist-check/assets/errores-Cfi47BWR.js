const e=`# Errores — Líneas de campo eléctrico

## Errores conceptuales

### Error 1: Creer que las líneas de campo son trayectorias de cargas

**Por qué parece correcto**

La analogía más inmediata con algo visible es la trayectoria: el alumno ve una línea con flecha y la identifica con el camino que recorre algo. Como el campo indica la dirección de la fuerza sobre una carga positiva, parece lógico que esa carga siga la línea de campo como si fuera un carril.

**Por qué es incorrecto**

Una carga en movimiento tiene inercia. La segunda ley de Newton dice que la fuerza cambia la velocidad, no la posición directamente. Si la velocidad inicial de la carga no es tangente a la línea de campo, la trayectoria se curva de forma distinta a la línea. Solo en el caso especial de que la velocidad inicial sea exactamente tangente a una línea rectilínea la trayectoria coincide con la línea de campo.

**Señal de detección**

El alumno afirma que una carga lanzada perpendicularmente a las líneas de campo "debería" girar y seguir la línea más cercana. O calcula una trayectoria curvada suponiendo que siempre apunta hacia la tangente de la línea de campo.

**Corrección conceptual**

Las líneas de campo indican la dirección de la fuerza en cada punto, no la dirección del movimiento. Para obtener la trayectoria hay que resolver las ecuaciones del movimiento integrando la aceleración a lo largo del tiempo. Solo en campos uniformes las trayectorias son parábolas (movimiento uniformemente acelerado), no las líneas de campo rectilíneas.

**Mini-ejemplo de contraste**

Una carga positiva lanzada horizontalmente en un campo eléctrico vertical uniforme sigue una parábola, exactamente igual que un proyectil en la gravedad. Las líneas de campo son verticales y rectas, pero la trayectoria de la carga es curva. Si el alumno aplicara el error, diría que la carga gira hasta quedar vertical; el resultado correcto es que nunca deja de avanzar horizontalmente.

---

### Error 2: Creer que las líneas de campo pueden cruzarse fuera de una carga

**Por qué parece correcto**

Al dibujar manualmente las líneas de dos cargas del mismo signo, el alumno tiende a trazar algunas que se aproximan y se "juntan" entre las cargas, pensando que se repelen y se cruzan en el punto medio donde el campo es débil.

**Por qué es incorrecto**

Si dos líneas se cruzaran en un punto, el campo [[E]] tendría dos direcciones distintas en ese punto simultáneamente. La unicidad del campo eléctrico (garantizada por la ecuación de Poisson con condiciones de contorno bien definidas) impide que esto ocurra. En el punto neutro entre dos cargas iguales del mismo signo, el campo es nulo, pero no hay líneas pasando por ese punto; las líneas se curvan para evitarlo.

**Señal de detección**

El alumno traza un diagrama donde dos líneas de campo se tocan o se cruzan en una zona sin carga visible. O argumenta que el campo "nulo" en el punto medio justifica el cruce porque "allí no hay campo que separe las líneas".

**Corrección conceptual**

Precisamente donde el campo es nulo no hay ninguna línea de campo. Las líneas rodean ese punto sin pasar por él. El cruce de líneas es imposible porque violaría la unicidad matemática del campo.

**Mini-ejemplo de contraste**

Para dos cargas positivas iguales, el punto medio tiene [[E]] nulo. Si el alumno dibuja líneas que se cruzan allí, puede comprobar que calculando el campo vectorialmente en ese punto exacto (suma de dos vectores opuestos e iguales) el resultado es cero: no hay ningún vector que sea tangente a esas líneas cruzadas, porque no hay vector en ese punto.

## Errores de modelo

### Error 3: Confundir el número de líneas con el número de cargas

**Por qué parece correcto**

El alumno aprende que las líneas salen de las cargas positivas. De ahí deduce que si hay dos cargas positivas debe haber exactamente el mismo número de líneas saliendo de cada una, independientemente de sus valores.

**Por qué es incorrecto**

El número de líneas que salen de una carga [[q_fuente]] es proporcional al valor absoluto de esa carga, no al número de cargas. Si hay una carga de valor doble, le corresponde el doble de líneas. La convención se establece fijando un número de líneas por unidad de carga; todas las representaciones deben ser coherentes con esta escala.

**Señal de detección**

El alumno dibuja el mismo número de líneas alrededor de una carga de 2 μC y una de 1 μC. O en un problema con cargas de distintos valores asigna líneas sin tener en cuenta la proporción.

**Corrección conceptual**

Antes de dibujar, establecer la escala: por ejemplo, 4 líneas por cada microcoulombio. Una carga de 2 μC tendrá 8 líneas, una de 1 μC tendrá 4 y una de −3 μC tendrá 12 líneas que entran. Esta coherencia garantiza que la densidad de líneas refleje correctamente el módulo de [[E]] en cada zona.

**Mini-ejemplo de contraste**

Un dipolo con carga positiva de 2 μC y negativa de 1 μC no puede tener el mismo número de líneas saliendo y entrando. Si el alumno dibuja 8 líneas iguales en ambas cargas, el diagrama es incorrecto: 4 de las 8 líneas de la positiva deben "ir al infinito" (porque no hay suficiente carga negativa para absorberlas todas), y solo 4 terminan en la negativa.

## Errores matemáticos

### Error 4: Calcular el flujo [[phi_E]] usando solo el módulo del campo sin el factor coseno

**Por qué parece correcto**

El alumno recuerda que el flujo tiene que ver con "cuánto campo pasa" y sustituye directamente [[E]] por [[phi_E]] multiplicando campo por área, sin considerar la orientación relativa entre [[E]] y la superficie.

**Por qué es incorrecto**

El flujo [[phi_E]] depende de cuántas líneas atraviesan la superficie, no de cuántas hay en la zona. Si el campo es paralelo a la superficie, ninguna línea la atraviesa y el flujo es nulo aunque el campo sea intenso. El factor [[angulo_campo]] entre [[E]] y la normal exterior es imprescindible: solo la componente perpendicular al plano contribuye al flujo.

**Señal de detección**

El alumno obtiene el mismo flujo para una superficie horizontal y una vertical colocadas en el mismo campo uniforme vertical, argumentando que el campo tiene el mismo módulo en ambos casos. O bien el resultado del flujo no es nulo para una superficie paralela al campo.

**Corrección conceptual**

El flujo es el producto del campo por el área de la proyección perpendicular de la superficie sobre el frente de onda (o equivalentemente, el área multiplicada por el coseno del ángulo entre [[E]] y la normal). Siempre preguntar: "¿cuántas líneas de campo cruzan esta superficie?" La respuesta es cero si el campo es tangente a ella.

**Mini-ejemplo de contraste**

Un campo uniforme vertical de módulo [[E]] apunta hacia arriba. Una superficie horizontal de área A tiene flujo [[phi_E]] igual a [[E]] por A (todas las líneas la atraviesan). Una superficie vertical del mismo área tiene flujo nulo (ninguna línea la atraviesa). Si el alumno obtiene el mismo valor para ambas, su cálculo ignora el ángulo y es incorrecto.

## Errores de interpretación

### Error 5: Pensar que la línea de campo más cercana indica la dirección del campo en un punto arbitrario

**Por qué parece correcto**

En un diagrama con líneas discretas, el alumno identifica visualmente la línea más cercana a un punto de interés y asume que el campo en ese punto apunta exactamente en la dirección de esa línea, incluso si el punto no está sobre ella.

**Por qué es incorrecto**

Las líneas de campo dan la dirección del campo solo en los puntos que pertenecen a ellas. En un punto entre dos líneas, la dirección real de [[E]] es una interpolación vectorial entre las tangentes a las líneas vecinas, ponderada por la distancia. Las líneas discretas son una muestra del campo continuo, no el campo mismo.

**Señal de detección**

El alumno traza la dirección del campo en un punto intermedio como exactamente paralela a la línea más cercana, sin considerar la influencia de las líneas vecinas. O afirma que el campo tiene dirección exactamente vertical porque hay una línea vertical cercana, cuando el campo real en ese punto tiene una componente horizontal apreciable.

**Corrección conceptual**

Para estimar la dirección del campo en un punto entre líneas, hay que interpolar: la dirección real está entre las tangentes de las dos líneas vecinas, más próxima a la tangente de la línea más cercana. Para mayor precisión, añadir más líneas al diagrama o calcular el campo analíticamente.

**Mini-ejemplo de contraste**

En el dipolo eléctrico, el punto en el plano ecuatorial exactamente a mitad de distancia entre las dos cargas tiene campo dirigido en sentido opuesto al momento dipolar. Si el alumno solo mira la línea de campo más cercana (que puede estar levemente inclinada), podría estimar una dirección errónea. El cálculo analítico por superposición da la dirección exacta.

## Regla de autocontrol rápido

Ante cualquier diagrama de líneas de campo, verificar sistemáticamente:

1. **¿Nacen en positivas y terminan en negativas?** Si hay líneas que terminan en una carga positiva o nacen en una negativa, el diagrama es incorrecto.
2. **¿Se cruzan en algún punto sin carga?** Si sí, hay un error: reformular el trazado.
3. **¿El número de líneas es proporcional al valor absoluto de cada carga?** Contar las líneas de cada carga y verificar la proporción.
4. **¿La densidad de líneas crece al acercarse a una carga?** Si la densidad disminuye al acercarse, el diagrama invierte la ley de Coulomb.
5. **¿El flujo a través de una superficie que no encierra carga es cero?** Contar las líneas que entran y las que salen; deben ser iguales.
`;export{e as default};
