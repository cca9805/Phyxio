const e=`# Modelos físicos: Bloque colgante\r
\r
## Modelo ideal\r
\r
El leaf trabaja con el modelo del bloque puntual suspendido de un cable ideal vertical. Las simplificaciones centrales son: el bloque se trata como masa puntual sin extensión, el cable es inextensible (no se estira) e inelástico (no almacena energía), la gravedad [[g]] es constante y uniforme, y no hay resistencia del aire ni rozamiento en la guía.\r
\r
Este modelo captura la esencia de la dinámica vertical: la diferencia entre la tensión del cable hacia arriba y el peso gravitatorio hacia abajo produce la aceleración según la segunda ley de Newton. En condiciones de laboratorio escolar (bloques de kg colgando de hilos de nylon de metros de longitud) el modelo reproduce los resultados experimentales con errores inferiores al 5 %.\r
\r
## Hipótesis\r
\r
- **Cable ideal**: sin masa propia, inextensible e inelástico. Violarla (cable de varios kilómetros de profundidad) añade el peso del cable a la carga y permite oscilaciones elásticas.\r
- **Campo gravitatorio uniforme**: [[g]] constante en todo el recorrido del bloque. Violarla (alturas de cientos de km) requiere considerar la variación de gravedad con la altura.\r
- **Bloque puntual**: toda la masa concentrada en un punto sin tamaño. Violarla (cuerpos extendidos que rotan) introduce momento de inercia y energía rotacional.\r
- **Sin resistencia del aire**: la única fuerza vertical es la tensión. Violarla (velocidades altas o cuerpos de gran sección) requiere añadir un término de arrastre proporcional al cuadrado de la velocidad.
\r
## Dominio de validez cuantitativo\r
\r
El modelo es fiable cuando se cumplen simultáneamente:\r
\r
- La velocidad del bloque es menor que 5 m/s, rango en el que la resistencia del aire es despreciable para masas superiores a 1 kg.\r
- La longitud del cable es menor que 100 m, intervalo donde el peso propio del cable es menos del 5 % de la carga típica.\r
- La aceleración es menor que 2 m/s², lo que evita oscilaciones transversales significativas del cable.\r
- El error relativo aceptable es superior al 3 %, ya que en condiciones reales hay ligeras fricciones en poleas y guías.\r
\r
## Señales de fallo del modelo\r
\r
- La tensión medida difiere de la calculada en más del 10 % de forma sistemática, indicando que el cable tiene masa apreciable o hay fricción no modelada.\r
- El bloque oscila transversalmente con amplitud creciente, lo que indica que el modelo unidimensional vertical es insuficiente.\r
- La aceleración no es constante a pesar de tensión constante, señal de que el cable se está estirando (elasticidad) o la guía presenta rozamiento variable.\r
- El sistema entra en resonancia a ciertas frecuencias de excitación, revelando dinámica de ondas en el cable no capturada por el modelo rígido.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido incorpora la elasticidad del cable como resorte lineal con constante elástica k, transformando el sistema en un oscilador masa-resorte vertical. Este modelo predice oscilaciones armónicas cuando el bloque se desplaza de la posición de equilibrio y permite calcular la frecuencia natural del sistema.
\r
Cuando conviene pasar al modelo extendido: si el cable es largo y fino (más de 100 m), si se observan oscilaciones persistentes tras un cambio brusco de tensión, o si se necesita predecir la respuesta dinámica a fuerzas variables en el tiempo. En esos casos, el modelo algebraico simple se sustituye por la ecuación diferencial del oscilador forzado: masa por aceleración más la constante elástica del cable por el desplazamiento, igual a la diferencia entre la tensión variable en el tiempo y el peso constante.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo cable rígido | Modelo cable elástico |\r
|---------|---------------------|----------------------|\r
| Precisión típica | 95–98 % en laboratorio | superior al 99 % con calibración |\r
| Herramienta matemática | Álgebra y cinemática | Ecuaciones diferenciales ordinarias |\r
| Tiempo de resolución | Minutos (papel y lápiz) | Requiere simulación numérica |\r
| Cuándo usarlo | Educación, diseño preliminar | Análisis de vibraciones, cables largos |\r
| Parámetros necesarios | Masa y gravedad | Masa, gravedad y constante elástica del cable |\r
`;export{e as default};
