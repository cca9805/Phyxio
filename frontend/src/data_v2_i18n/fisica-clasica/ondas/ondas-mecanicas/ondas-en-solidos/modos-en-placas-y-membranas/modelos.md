## Modelo ideal

El modelo de referencia en este leaf es la **placa delgada de Kirchhoff-Love** para placas elásticas y la **membrana ideal de Helmholtz** para membranas tensadas. Ambos son modelos lineales de pequeñas deformaciones que describen la vibración libre de estructuras bidimensionales con bordes empotrados.

En la placa de Kirchhoff, la hipótesis fundamental es que las secciones transversales permanecen planas y perpendiculares a la superficie media durante la deformación. Esta condición elimina la deformación por cortante transversal y simplifica la ecuación diferencial gobernante al bilaplaciano del desplazamiento. La fuerza restauradora es la rigidez a la flexión [[rigidez_a_la_flexion_de_la_placa]], proporcional al cubo del espesor [[h_placa]].

En la membrana ideal, la rigidez a la flexión es exactamente nula. La única fuerza restauradora es la tensión superficial [[tension_superficial_de_la_membrana]], y el sistema es el análogo bidimensional de la cuerda vibrante. El modelo ignora cualquier efecto de rigidez a la flexión de la membrana real, que siempre tiene algún espesor finito.

## Hipótesis

- **Placa delgada:** el espesor [[h_placa]] debe ser mucho menor que las dimensiones en plano [[a_dim]] y [[b_dim]] (condición práctica: [[h_placa]] menor que la décima parte de la dimensión menor). Violar esta hipótesis introduce errores crecientes en [[f_mn]] porque la deformación por cortante transversal, ignorada en Kirchhoff, rebaja las frecuencias reales.

- **Pequeñas deformaciones:** la amplitud de vibración debe ser pequeña en comparación con el espesor [[h_placa]]. Para amplitudes mayores, la membrana o la placa desarrollan no linealidades geométricas que cambian la frecuencia con la amplitud.

- **Material isótropo y homogéneo:** [[modulo_de_young]], [[nu_p]] y [[rho_vol]] son uniformes en toda la placa. Los materiales estratificados o con gradiente de propiedades requieren parámetros efectivos.

- **Bordes simplemente apoyados:** las condiciones de contorno presuponen desplazamiento nulo y momento flector nulo en todos los bordes. Bordes empotrados o libres modifican los coeficientes numéricos pero no la estructura funcional de la fórmula modal.

- **Tensión uniforme en la membrana:** [[tension_superficial_de_la_membrana]] es la misma en todas las direcciones y en todo punto de la membrana. Una distribución no uniforme de tensión altera los patrones nodales y las frecuencias.

## Dominio de validez cuantitativo

El modelo de placa de Kirchhoff es fiable cuando [[h_placa]] es menor que 1/10 de la dimensión menor en plano. Para una placa de 0.3 m × 0.2 m, esto implica que [[h_placa]] < 20 mm. Para frecuencias modales en el rango audible (hasta 20 kHz), la hipótesis se mantiene bien para placas metálicas típicas de 1–5 mm de espesor.

La corrección de Mindlin se vuelve necesaria cuando el cociente frecuencia × espesor supera aproximadamente 50 kHz·mm para el acero. Por encima de este umbral, el error del modelo de Kirchhoff en [[f_mn]] supera el 5 %.

Para la membrana ideal, el modelo falla cuando el ratio de rigidez a la flexión respecto a la tensión supera el 1 %: concretamente cuando [[rigidez_a_la_flexion_de_la_placa]]/(T × a²) > 0.01. Para un parche de batería de mylar de 80 µm de espesor y tensión de 1500 N/m, este ratio es inferior a 0.001, validando plenamente el modelo de membrana pura.

## Señales de fallo del modelo

- **Frecuencias medidas más bajas que las calculadas por Kirchhoff** para modos de alto índice: señal de que la deformación por cortante es significativa y el modelo de Mindlin es necesario.

- **Frecuencia del modo fundamental que sube al aumentar la amplitud de excitación:** indica no linealidad geométrica (régimen de grandes deformaciones en la membrana, o tensión membranaria adicional en la placa). El modelo lineal sobreestima el amortiguamiento en ese régimen.

- **Patrones nodales no rectangulares en una placa rectangular:** puede indicar anisotropía del material (tensiones residuales del proceso de fabricación, laminado, etc.) que el modelo isótropo no captura.

- **Modos medidos con degeneración levantada respecto a la predicción teórica en placa cuadrada:** señal de ortotropía o de imperfecciones geométricas del borde que rompen la simetría cuadrada.

## Modelo extendido o alternativo

La **teoría de Mindlin-Reissner** extiende el modelo de Kirchhoff incorporando la deformación por cortante transversal y la inercia rotacional. Es el modelo correcto para placas moderadamente gruesas y para el análisis de ondas de flexión a alta frecuencia. Las frecuencias de Mindlin son siempre menores o iguales que las de Kirchhoff para el mismo modo.

Para membranas con rigidez a la flexión no despreciable (como las membranas de polímero grueso o las de elastómero), el modelo extendido de **placa-membrana** combina la tensión de pretensado con la rigidez a la flexión. Las frecuencias modales están entonces acotadas inferior e superiormente por los modelos puros de membrana y placa respectivamente.

Cuando conviene pasar al modelo de Mindlin: cuando el espesor [[h_placa]] supera el 10 % de la dimensión menor, o cuando las frecuencias de interés superan el umbral de 50 kHz·mm para el acero. Cuando conviene pasar al modelo placa-membrana: cuando [[rigidez_a_la_flexion_de_la_placa]]/(T × a²) está entre 0.01 y 1, es decir, cuando ni la rigidez ni la tensión dominan claramente.

## Comparación operativa

| Criterio | Modelo placa (Kirchhoff) | Modelo membrana (Helmholtz) |
|---|---|---|
| Fuerza restauradora | Rigidez a la flexión [[rigidez_a_la_flexion_de_la_placa]] | Tensión superficial [[tension_superficial_de_la_membrana]] |
| Dispersión | Sí (velocidad depende de la frecuencia) | No (velocidad constante) |
| Parámetro de afinado | [[h_placa]], [[modulo_de_young]] (fijos en fabricación) | [[tension_superficial_de_la_membrana]] (ajustable) |
| Condición de validez | [[h_placa]] mucho menor que dimensiones en plano | Rigidez a la flexión despreciable |
| Ecuación gobernante | Bilaplaciano del desplazamiento | Laplaciano del desplazamiento |
| Degeneración modal en cuadrado | Sí | Sí |
| Extensión a geometría circular | Placa circular de Kirchhoff | Membrana circular con funciones de Bessel |