const a=`# Pendiente y area

## Que es

La pendiente mide cuanto cambia la magnitud vertical cuando avanza la magnitud horizontal. En una grafica, responde a la pregunta "a que ritmo cambia esto respecto a aquello". El area bajo una curva mide acumulacion: suma pequenas contribuciones a lo largo de un intervalo.

No son operaciones intercambiables. La pendiente mira inclinacion local o media; el area mira cantidad total acumulada. En fisica, esta diferencia separa velocidad de desplazamiento, fuerza de impulso, potencia de energia y corriente de carga.

## Por que aparece en fisica

Aparece porque muchas leyes fisicas no solo preguntan por un valor, sino por cambios y acumulaciones. En una grafica posicion-tiempo, la pendiente es velocidad. En una grafica velocidad-tiempo, el area es desplazamiento. En una grafica fuerza-tiempo, el area es impulso.

Tambien aparece en trabajo mecanico, electricidad, termodinamica y fluidos. Una curva puede decir cuanto se transfiere, cuanto se acumula o cuan rapido cambia una magnitud, siempre que los ejes esten bien identificados.

## Idea visual o geometrica

La pendiente se ve como inclinacion. Si una recta sube mucho por cada paso horizontal, la tasa de cambio es grande y positiva. Si baja, la pendiente es negativa. Si es horizontal, la magnitud vertical no cambia respecto a la horizontal.

![Pendiente como subida dividida entre avance](/graphs/matematicas/funciones-y-graficas/pendiente-y-area/pendiente-secante-tangente.svg)

El area se ve como una region. Si la curva esta por encima del eje horizontal, el area con signo es positiva; si esta por debajo, es negativa. En una grafica fisica, esa region no es solo geometria: sus unidades salen de multiplicar las unidades de los dos ejes.

![Area positiva y negativa bajo una curva](/graphs/matematicas/funciones-y-graficas/pendiente-y-area/area-bajo-curva-signo.svg)

## Lenguaje simbolico minimo

La pendiente media entre dos puntos se escribe como cambio vertical dividido por cambio horizontal: \`m = Delta y / Delta x\`. En fisica, si los ejes son \`x (m)\` y \`t (s)\`, entonces \`Delta x / Delta t\` tiene unidades \`m/s\` y se interpreta como velocidad media.

El area acumulada se representa como suma de rectangulos o, en nivel avanzado, como integral. Si los ejes son \`v (m/s)\` y \`t (s)\`, el producto \`v Delta t\` tiene unidades \`m\`, asi que el area bajo la curva velocidad-tiempo representa desplazamiento.

![Pendiente y area en graficas de cinematica](/graphs/matematicas/funciones-y-graficas/pendiente-y-area/cinematica-pendiente-area.svg)

## Que significa el resultado

El resultado de una pendiente es una tasa: "cuanto cambia la magnitud vertical por cada unidad de la horizontal". Su unidad es un cociente de unidades. Una pendiente de \`3 m/s\` en posicion-tiempo significa que la posicion aumenta \`3 m\` cada segundo en ese tramo.

El resultado de un area es una acumulacion. Su unidad es el producto de las unidades de los ejes. Un area de \`12 N s\` bajo una curva fuerza-tiempo no es una fuerza: es impulso, y mide cambio de cantidad de movimiento.

## Cuando no debes usarlo

No uses pendiente cuando la pregunta pide cantidad acumulada en un intervalo. Si una grafica velocidad-tiempo pregunta por desplazamiento total, calcular solo una pendiente responde a otra pregunta. Tampoco uses area cuando se pide ritmo instantaneo de cambio.

No debes ignorar el signo ni las unidades. Un area negativa puede indicar desplazamiento hacia el sentido negativo, trabajo extraido o carga transferida en sentido opuesto. Una pendiente grande en una grafica con ejes comprimidos no se acepta por apariencia: debe calcularse con escalas reales.

## Resumen operativo

Primero identifica ejes, unidades e intervalo. Si la pregunta dice "ritmo", "tasa", "velocidad de cambio" o "inclinacion", piensa en pendiente. Si dice "total", "acumulado", "desplazamiento", "trabajo", "impulso" o "carga", piensa en area.

El nivel basico consiste en distinguir subida, bajada, region y signo. El nivel intermedio exige calcular pendiente media y areas simples con unidades. El nivel avanzado exige interpretar pendiente instantanea, areas con signo, tramos por partes y conexion con derivadas e integrales.
`;export{a as default};
