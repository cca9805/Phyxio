## Modelo ideal

El modelo ideal de la ley de Snell trata la interfaz como un plano geométrico infinito que separa dos medios perfectamente homogéneos, isótropos y no dispersivos. Los rayos son líneas rectas y los ángulos se definen con precisión arbitraria respecto a la normal. El índice de refracción de cada medio es un número constante independiente de la longitud de onda, la temperatura y la intensidad. En este marco, la relación entre los senos de los ángulos y los índices es exacta y no hay pérdida de energía en la interfaz más allá de lo previsto por la partición reflexión-refracción.

Este modelo simplifica el problema al ignorar la polarización, la dispersión cromática, las imperfecciones superficiales y los efectos ondulatorios. Su principal virtud es que permite resolver problemas de dirección de rayos con una sola ecuación y datos mínimos.

## Hipótesis

- La interfaz es plana a escala de la longitud de onda; si la rugosidad es comparable a la longitud de onda, la difracción domina y la dirección del rayo deja de estar bien definida.
- Los medios son homogéneos e isótropos; en un cristal birrefringente, la polarización produciría dos rayos refractados distintos y la ley simple se invalidaría.
- El índice de refracción es constante con la longitud de onda; si hay dispersión, la ley aplica solo a una frecuencia específica y cada color se refracta con un ángulo diferente.
- La luz es monocromática o cuasimonocromática; la luz blanca produce separación espectral que el modelo ideal no incorpora.
- La intensidad es baja, de modo que no hay efectos no lineales (autoenfoque, generación de armónicos).

## Dominio de validez cuantitativo

La ley de Snell ideal es excelente cuando la rugosidad superficial es menor que la longitud de onda dividida entre diez. Para luz visible con longitud de onda de aproximadamente 550 nm, esto exige una planitud superficial mejor que 55 nm, lo cual es habitual en vidrios ópticos pulidos.

La aproximación no dispersiva es razonable cuando la variación del índice a lo largo del espectro visible es menor al 1 % del valor central, situación típica de vidrios crown ordinarios en el rango 400–700 nm. Para vidrios flint de alta dispersión, el error puede superar el 3 % entre el rojo y el violeta.

En cuanto al ángulo de incidencia, la ley es exacta para cualquier valor entre 0 y 90 grados. Sin embargo, para ángulos superiores a 80 grados la reflectividad de Fresnel supera el 30 % y en la práctica casi toda la energía se refleja aun sin superar el ángulo crítico.

Condiciones cuantitativas de validez:
- Rugosidad superficial < 55 nm para luz visible (orden de magnitud de la longitud de onda dividida entre 10)
- Variación del índice con la longitud de onda < 1 % en el rango espectral usado
- Diámetro de haz > 100 longitudes de onda para que el concepto de rayo sea válido

## Señales de fallo del modelo

- El rayo refractado aparece difuminado o presenta múltiples direcciones en lugar de una sola línea nítida: esto indica que la rugosidad superficial es comparable a la longitud de onda y la difracción produce un patrón de dispersión.
- Los resultados varían significativamente con el color de la luz utilizada: la dispersión cromática del medio no es despreciable y el índice efectivo depende de la frecuencia.
- La intensidad refractada medida es mucho menor que la predicha por la partición de Fresnel: posible absorción en la interfaz, impurezas superficiales o rugosidad no controlada.
- Aparecen dos imágenes o dos puntos refractados en cristales: birrefringencia del medio que invalida la hipótesis de isotropía.
- La dirección medida del rayo refractado depende de la polarización de la luz incidente: medio anisótropo que requiere el modelo de doble refracción.

## Modelo extendido o alternativo

El modelo dispersivo incorpora la dependencia del índice de refracción con la longitud de onda mediante la ecuación de Cauchy o la relación de Sellmeier. En este modelo, cada componente espectral obedece su propia ley de Snell con un valor distinto de [[n1]] y [[n2]], lo que produce separación angular de colores. Cuando conviene pasar al modelo dispersivo: cuando se trabaja con luz blanca o policromática y se necesita predecir la separación angular entre componentes espectrales, como en el diseño de prismas dispersores o la corrección de aberración cromática en lentes.

Para interfaces curvas, la extensión consiste en aplicar la ley de Snell localmente usando la normal a la superficie en cada punto de incidencia. Esto conduce al trazado de rayos secuencial, donde cada superficie se trata como una nueva interfaz plana local. Cuando conviene pasar al modelo de trazado de rayos secuencial: cuando la superficie no es plana y se requiere predecir la formación de imagen o las aberraciones del sistema óptico.

Para campos intensos o medios no lineales, el índice depende de la intensidad y la ley de Snell debe complementarse con la ecuación del autoenfoque o la ecuación eikonal no lineal.

## Comparación operativa

| Criterio | Modelo ideal | Modelo dispersivo |
|---|---|---|
| Variables de entrada | dos índices constantes, un ángulo | dos funciones de índice vs longitud de onda, un ángulo, una longitud de onda |
| Precisión para luz monocromática | exacta en medios isótropos | idéntica (se reduce al ideal para una sola frecuencia) |
| Precisión para luz blanca | incorrecta (ignora separación cromática) | correcta (predice ángulo por color) |
| Complejidad de cálculo | una operación trigonométrica | una operación por cada componente espectral |
| Aplicación típica | problemas de un solo rayo, lentes delgadas | diseño de prismas, corrección cromática |
| Limitaciones residuales | no predice intensidades ni polarización | no incorpora birrefringencia ni efectos no lineales |