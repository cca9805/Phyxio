const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un camión de reparto circula por autopista a velocidad [[v]] constante de 90 km/h. El camión pasa por el punto A (0) a las 09:00 h.\r
\r
Calcula: **(a)** la posición [[x]] del camión a las 09:40 h; **(b)** cuánto tiempo [[t]] tarda en llegar al punto B, situado a 135 km de A; **(c)** el desplazamiento [[dx]] durante los primeros 20 minutos.\r
\r
## Datos\r
\r
| Símbolo | Significado | Valor |\r
|---|---|---|\r
| $v$ | velocidad constante | 90 km/h → 25 m/s |\r
| $x_0$ | posición inicial [[x0]] | $0\\;\\text{km}$ |\r
| $t_a$ | tiempo del apartado (a) | 40 min → (2)/(3) h |\r
| $x_B$ | posición del punto B | $135\\;\\text{km}$ |\r
| $t_c$ | tiempo del apartado (c) | 20 min → (1)/(3) h |\r
\r
Sentido positivo: dirección del movimiento del camión.\r
\r
## Definición del sistema\r
\r
El sistema es el camión modelado como partícula puntual con movimiento rectilíneo uniforme sobre el eje de la autopista. La magnitud núcleo del leaf es \`v\`, constante durante todo el trayecto. Las magnitudes secundarias son \`x\` (posición), [[x0]] (posición inicial), [[dx]] (desplazamiento) y [[dt]] (intervalo de tiempo [[dt]] ). La aceleración es nula en todo momento.\r
\r
## Modelo físico\r
\r
El MRU es válido porque el camión mantiene el crucero activado a velocidad fija sobre calzada recta; no hay aceleración medible. La relación núcleo la relacion correspondiente describe la posición en cualquier instante, y la relacion correspondiente conecta desplazamiento con tiempo.\r
\r
{{f:mru_posicion}}\r
\r
{{f:mru_velocidad_media}}\r
\r
\r
## Justificación del modelo\r
\r
En una autopista recta con crucero activado, la resistencia del aire y el rozamiento quedan compensados por el motor, y la velocidad se mantiene constante. La geometría 1D es adecuada. Si hubiera curvas o variaciones de velocidad, el MRU dejaría de ser válido.\r
\r
## Resolución simbólica\r
\r
{{f:mru_velocidad_media}}\r
\r
\r
{{f:mru_posicion}}\r
\r
\r
**Apartado (a) — posición en $t_a$:**\r
\r
\r
**Apartado (b) — tiempo hasta B:**\r
\r
\r
**Apartado (c) — desplazamiento en $t_c$:**\r
\r
\r
## Sustitución numérica\r
\r
Para el apartado (a), 90 km/h durante 2/3 h produce 60 km desde A. Para el apartado (b), llegar a 135 km exige 1,5 h, es decir, las 10:30 h. Para el apartado (c), durante 1/3 h el desplazamiento es 30 km.\r
\r
**Apartado (a):**\r
\r
\r
**Apartado (b):**\r
\r
\r
**Apartado (c):**\r
\r
\r
## Validación dimensional\r
\r
Velocidad por tiempo devuelve longitud: km/h multiplicado por h produce km. Al despejar tiempo, km dividido por km/h produce h. El signo positivo coincide con el eje elegido en el sentido del movimiento.\r
\r
\r
## Interpretación física\r
\r
El rasgo físico fundamental del MRU es la proporcionalidad lineal entre desplazamiento y tiempo: el camión avanza 90 km cada hora sin excepción, de modo que cualquier fracción del tiempo corresponde a la misma fracción del espacio. Esto significa que la relación la relacion correspondiente no es solo una fórmula, sino la expresión algebraica de un movimiento donde el futuro es perfectamente predecible a partir del presente sin necesidad de conocer el pasado: basta con saber la posición actual y la velocidad.\r
\r
{{f:mru_posicion}}\r
\r
\r
Los tres apartados del problema ilustran que esta relación admite tres lecturas distintas según qué dato se busca. Cuando se conocen velocidad y tiempo, el resultado es una posición (apartado a). Cuando se conocen velocidad y posición objetivo, el resultado es un tiempo (apartado b). Cuando se conocen velocidad y tiempo, el resultado es un desplazamiento (apartado c). Las tres situaciones son físicamente distintas pero matemáticamente equivalentes porque en MRU la velocidad es el nexo invariante que conecta espacio y tiempo de forma única.\r
\r
En una gráfica $x$-$t$, el movimiento se representa como una línea recta de pendiente $v$: la constancia de esa pendiente es la expresión geométrica de que no hay aceleración. Si la pendiente variara, el modelo MRU dejaría de ser válido y habría que recurrir al MRUA o a modelos más complejos. La gráfica $v$-$t$ complementaria es una línea horizontal, cuya área bajo la curva en cualquier intervalo reproduce el desplazamiento calculado en los apartados.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un sistema de gestión de flota rastrea camiones mediante GPS con frecuencia de 1 min. Un operador quiere estimar si el camión llegará a tiempo al almacén, que dista $48\\;\\text{km}$ del último registro de posición. El GPS indica 85 km/h en ese instante.\r
\r
## Estimación física\r
\r
Con MRU: [[dt]] . Esta estimación asume que la velocidad se mantiene constante hasta el destino. En realidad hay semáforos y posibles retenciones, pero para una autopista en horas no punta es una primera aproximación razonable.\r
\r
## Interpretación\r
\r
El operador puede dar una estimación de llegada de 34 minutos con una incertidumbre de quizás ±5 min debida a condiciones de tráfico. Si el camión hubiera estado acelerando o frenando activamente, el modelo MRU introduciría error sistemático; en ese caso sería necesario MRUA o datos más frecuentes del GPS. La validez del modelo depende directamente de qué tan estable sea la velocidad en el tramo restante.\r
\r
\r
## Lista de verificación\r
\r
Antes de dar el resultado por bueno, confirma punto por punto:\r
\r
1. ¿Se ha definido el eje con sentido positivo y origen explícito?\r
2. ¿La velocidad constante [[v]] tiene el signo coherente con ese sentido?\r
3. ¿La posición inicial [[x0]] coincide con el dato del enunciado?\r
4. ¿La ecuación de posición la relacion correspondiente se ha despejado correctamente y sin errores de signo?\r
\r
{{f:mru_posicion}}\r
\r
5. ¿El resultado tiene unidades de posición (metros, kilómetros)?\r
6. ¿El valor numérico es razonable en el contexto del problema?\r
\r
Cada una de estas preguntas tiene un propósito concreto. En el MRU el error más frecuente no es algebraico sino conceptual: confundir la posición inicial con el desplazamiento, o asignar signo equivocado a la velocidad. Desarrollar el hábito de esta verificación desde los primeros ejercicios ahorra tiempo en problemas más complejos.\r
`;export{e as default};
