const e=`# Modelos\r
\r
## Modelo ideal\r
\r
La herramienta gráfica que se estudia en este tema se apoya en un modelo cinemático simplificado:\r
\r
- El móvil es un **punto material** que se desplaza a lo largo de un solo eje.\r
- La variable cinemática representada (posición, [[velocidad]] o aceleración) es una **función continua del [[tiempo]] ** y puede aproximarse por **segmentos lineales** (polinomios de grado uno a trozos).\r
- El [[tiempo]] se mide con un reloj ideal de resolución perfecta.\r
- No intervienen fuerzas: el análisis es puramente cinemático (se acepta el gráfico como dato y se extrae información sin preguntar qué causa el movimiento).\r
\r
Bajo estas condiciones, las dos operaciones gráficas fundamentales son exactas:\r
\r
| Operación | Significado |\r
|----------------------------|--------------------------------------------|\r
| Pendiente de la tangente | Derivada temporal → [[velocidad]] o aceleración|\r
| Área bajo la curva | Integral temporal → [[desplazamiento]] o cambio de [[velocidad]] |\r
\r
## Hipótesis\r
\r
- **Movimiento unidimensional**: el móvil se desplaza sobre un eje único; no se consideran componentes transversales ni trayectorias curvas.\r
- **Continuidad temporal**: la magnitud representada varía de forma continua; no hay saltos instantáneos de posición ni de [[velocidad]] .\r
- **Linealización por tramos**: dentro de cada intervalo, la magnitud puede aproximarse por una recta. Si la curvatura real supera el 10 % de desviación, el tramo debe subdividirse.\r
- **Ausencia de fuerzas**: el modelo no pregunta por las causas del movimiento; solo lee el gráfico como dato.\r
\r
Violar cualquiera de estas hipótesis invalida las operaciones de pendiente y área tal como se aplican aquí.\r
\r
## Dominio de validez cuantitativo\r
\r
| Parámetro | Rango válido del modelo lineal por tramos |\r
|---------------------------|------------------------------------------------------|\r
| Duración de cada segmento | Δt ≥ 0,5 s (resolución típica de sensores escolares) |\r
| Número de segmentos | Entre 2 y 10 por gráfico; más de 10 implica curva suave → usar splines |\r
| Aceleración | |a| < 50 m/s² (régimen no relativista, sin necesidad de corrección) |\r
| Velocidad | v ≪ c; en la práctica, v < 300 m/s para que la cinemática clásica sea suficiente |\r
\r
Fuera de estos rangos, la linealización genera errores significativos y conviene emplear modelos más sofisticados (ajuste polinómico, integración numérica o cinemática relativista).\r
\r
## Señales de fallo del modelo\r
\r
1. **Pendiente infinita**: si el gráfico \\(v\\)-\\(t\\) presenta un salto vertical, el modelo predice aceleración infinita, lo cual es físicamente imposible. La señal indica una discontinuidad en los datos (cambio de fase ultrarápido o error del sensor).\r
2. **Área negativa inesperada**: si el gráfico \\(v\\)-\\(t\\) cruza el eje del [[tiempo]] , el área por debajo del eje es negativa, lo que significa [[desplazamiento]] en sentido contrario. Si el problema no contempla retroceso, un área negativa delata una mala interpretación del sistema de referencia.\r
3. **Velocidad media fuera de intervalo**: la [[velocidad]] media debe situarse entre el valor mínimo y el máximo de \\(v\\) dentro del intervalo. Si el resultado cae fuera de ese rango, hay un error aritmético o un segmento mal delimitado.\r
4. **Curva con curvatura pronunciada donde se asume recta**: cuando la diferencia entre el valor medido y la recta interpoladora supera el 10 % en algún punto, el modelo lineal por tramos ya no es fiel y debe subdividirse ese segmento.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando los datos reales no forman segmentos rectos perfectos, el modelo se extiende de dos formas:\r
\r
1. **Ajuste por tramos curvos**: se reemplazan los segmentos lineales por polinomios de grado 2 o 3 (splines), lo que permite aproximar curvas suaves y obtener derivadas más cercanas a los valores reales.\r
2. **Inclusión de incertidumbre experimental**: cada punto de la gráfica lleva asociada una barra de error vertical (incertidumbre en la magnitud medida) y una horizontal (resolución temporal del sensor). Las pendientes y las áreas se calculan entonces con propagación de errores.\r
\r
Cuando conviene pasar al modelo extendido: si la desviación entre los datos y la recta interpoladora supera el 10 % en más de un tramo, o si el número de segmentos supera 10, la linealización simple deja de ser fiable y debe emplearse el ajuste por splines o la integración numérica.\r
\r
## Comparación operativa\r
\r
| Modelo | Ventaja | Coste |\r
|---------------------------|-------------------------------------------|-----------------------------------|\r
| Lineal por tramos (este) | Visual, rápido, sin cálculo avanzado | Pierde exactitud en curvas suaves |\r
| Ajuste polinómico global | Buena aproximación continua | Puede oscilar fuera de los datos (fenómeno de Runge) |\r
| Integración numérica | Maneja cualquier forma de gráfico | Requiere datos digitalizados y software |\r
| Expresión analítica exacta| Resultado simbólico elegante | Sólo posible si se conoce la ley \\(v(t)\\) o \\(x(t)\\) en forma cerrada |\r
\r
Para la enseñanza introductoria, el modelo lineal por tramos es el más adecuado: entrena la lectura gráfica (pendientes y áreas) sin requerir herramientas de cálculo superior, y sus limitaciones son fácilmente detectables por el propio estudiante al cotejar resultados con la forma visual del gráfico.\r
`;export{e as default};
