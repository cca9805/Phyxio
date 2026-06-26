# Errores Comunes en Ondas Superficiales

El estudio del oleaje presenta desafíos conceptuales significativos. A continuación, se detallan los malentendidos más frecuentes siguiendo la estructura de blindaje Nivel 5.

## Errores conceptuales

### Error
**Confundir velocidad de fase con transporte de masa**
- **Por qué parece correcto:** Al observar una ola en el mar, vemos una forma que avanza rápidamente hacia la costa, lo que da la ilusión de una corriente de agua que nos arrastraría con ella.
- **Por qué es incorrecto:** Las ondas superficiales son perturbaciones de energía. Las partículas de agua describen órbitas circulares o elípticas, regresando casi exactamente al mismo punto tras el paso de una onda.
- **Señal de detección:** Si calculas una velocidad [[c]] de 10 m/s y asumes que el agua te arrastrará a esa velocidad horizontalmente, estás cometiendo este error.
- **Corrección conceptual:** Entienda que la ola es un flujo de información y energía, no un transporte neto de materia. El agua solo "oscila" en su sitio.
- **Mini-ejemplo:** Una boya en alta mar sube y baja al paso de las olas, pero no se aleja de su posición original de anclaje a pesar de que las crestas pasen velozmente bajo ella.

### Error
**Creer que la gravedad es la única fuerza restauradora en todas las escalas**
- **Por qué parece correcto:** En nuestra experiencia diaria con lagos y océanos, la gravedad es claramente la fuerza que domina el comportamiento del agua y devuelve la superficie al equilibrio.
- **Por qué es incorrecto:** Para ondas con [[lambda]] menor a 1.7 cm, la tensión superficial se vuelve la fuerza dominante. Estas son las ondas capilares, cuya física es opuesta en términos de dispersión.
- **Señal de detección:** Aplicar la fórmula de regimen de aguas aguas profundas a las pequeñas arrugas producidas por un insecto o una gota de lluvia sobre un estanque.
- **Corrección conceptual:** Verifique siempre la escala espacial del problema. Si la onda es milimétrica, la gravedad es secundaria frente a la tensión superficial.
- **Mini-ejemplo:** Las "arrugas" de tensión superficial en un vaso de agua viajan más rápido cuanto más cortas son, al revés que las olas del mar.

## Errores de modelo

### Error
**Aplicar el modelo de aguas aguas profundas en zonas costeras**
- **Por qué parece correcto:** La fórmula de aguas aguas profundas es más sencilla y no requiere conocer la profundidad [[h]], lo que tienta a usarla por comodidad.
- **Por qué es incorrecto:** El régimen de aguas aguas profundas termina cuando la profundidad es menor a la mitad de la longitud de onda. En la costa, esta condición nunca se cumple y el fondo marino domina la física.
- **Señal de detección:** Obtener una velocidad [[c]] que permanece constante en tus cálculos a medida que la ola se acerca a la orilla.
- **Corrección conceptual:** Clasifique el régimen comparando [[h]] con [[lambda]]. Si la ola "siente" el fondo, el modelo de regimen de aguas aguas profundas dará resultados erróneos.
- **Mini-ejemplo:** Predecir que una ola gigante en la playa viajará a la misma velocidad que en mitad del océano.

## Errores matemáticos

### Error
**Uso incorrecto del argumento en la función tangente hiperbólica**
- **Por qué parece correcto:** Al aplicar la fórmula general de Airy, es fácil confundir los factores o el orden de las variables dentro del argumento.
- **Por qué es incorrecto:** El argumento debe ser el número de onda adimensional multiplicado por la profundidad (la expresion correspondiente de onda superficial). Olvidar el la expresion correspondiente de onda superficial es el error más frecuente.
- **Señal de detección:** Obtener velocidades del sonido (cientos de m/s) para olas pequeñas de estanque.
- **Corrección conceptual:** Asegúrese de trabajar en radianes y verifique que el argumento de la la expresion correspondiente de onda superficial sea una cantidad sin unidades.
- **Mini-ejemplo:** Calcular la expresion correspondiente de onda superficial en lugar de el cociente entre profundidad y longitud de onda.

## Errores de interpretación

### Error
**Malinterpretar la letalidad de los tsunamis basándose solo en su altura en alta mar**
- **Por qué parece correcto:** Tendemos a evaluar el peligro de una ola por lo alta que se ve en el horizonte. Un tsunami de 30 cm parece inofensivo.
- **Por qué es incorrecto:** El peligro de un tsunami no es su altura inicial, sino su longitud de onda kilométrica y su profundidad [[h]]. Mueve toda la masa del océano, no solo la superficie.
- **Señal de detección:** Creer que un barco en alta mar está en peligro por el paso de un tsunami que aún no ha llegado a la costa.
- **Corrección conceptual:** El tsunami es un pulso de energía masivo. Su altura solo se vuelve destructiva cuando la velocidad cae al entrar en aguas aguas someras.
- **Mini-ejemplo:** Un tsunami puede pasar bajo un barco en medio del Pacífico sin que los tripulantes lo noten, para luego destruir una ciudad costera.

## Regla de autocontrol rápido
Antes de dar por finalizado un cálculo de velocidad de olas, verifique la **Coherencia de Régimen**:
1. Calcule el ratio el cociente entre profundidad y longitud de onda.
2. Si usó regimen de aguas aguas profundas pero el ratio es < 0.5, su resultado es **inválido**.
3. Si usó regimen de aguas aguas someras pero el ratio es > 0.05, su resultado es **una aproximación grosera**.
4. Verifique la rapidez: Si [[c]] > 30  m/s para una ola de viento, revise sus unidades de [[g]].