const e=`# Modelos físicos: Analisis completo\r
\r
## Modelo ideal\r
\r
El leaf trabaja con el modelo de rozamiento seco de Coulomb sobre una superficie horizontal rígida e inmóvil. Las simplificaciones centrales son: el bloque se trata como un cuerpo rígido puntual, la superficie no se deforma, los coeficientes [[mu_e]] y [[mu_c]] son constantes independientes de la velocidad y del área de contacto, y la fuerza normal [[N]] es estrictamente vertical.\r
\r
Este modelo captura la esencia de la decisión de régimen: comparar la fuerza aplicada con el umbral estático, decidir si hay deslizamiento y, en caso afirmativo, calcular la aceleración usando el coeficiente cinético. En condiciones de laboratorio escolar (bloques de madera o metal sobre mesas secas) el modelo reproduce los resultados experimentales con errores inferiores al 10 %.\r
\r
## Hipótesis\r
\r
- **Superficie horizontal e indeformable**: el contacto se mantiene plano y [[N]] coincide con el peso. Violarla (por ejemplo en un plano inclinado) exige descomponer el peso en componentes.\r
- **Coeficientes constantes**: [[mu_e]] y [[mu_c]] no dependen de la velocidad, la temperatura ni el área de contacto aparente. Violarla hace que la fricción varíe durante el deslizamiento y el modelo algebraico simple ya no basta.\r
- **Empuje puramente horizontal**: no hay componente vertical en [[F_ext]]. Violarla cambia [[N]] y, con ella, todos los umbrales de fricción.\r
- **Cuerpo rígido sin rotación**: el bloque no gira ni se deforma. Violarla introduce momentos de fuerza y posible vuelco antes del deslizamiento.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es fiable cuando se cumplen simultáneamente:\r
\r
- La velocidad de deslizamiento es menor que 10 m/s, rango en el que la dependencia de [[mu_c]] con [[v]] es despreciable para la mayoría de pares de materiales secos.\r
- La masa del bloque está entre 0.1 kg y 100 kg, intervalo donde la deformación de la superficie de apoyo es insignificante para mesas de laboratorio.\r
- La fuerza normal [[N]] es del orden de magnitud de 1 N a 1000 N; fuera de ese rango (cargas muy ligeras o muy pesadas) los microcontactos cambian de naturaleza.\r
- El error relativo aceptable es superior al 5 %, ya que en condiciones reales los coeficientes presentan variabilidad de ese orden.\r
\r
## Señales de fallo del modelo\r
\r
- La aceleración medida difiere de la calculada en más del 15 % de forma sistemática, no aleatoria.\r
- El bloque oscila o vibra al arrancar, lo que indica que la transición estático-cinético no es una simple discontinuidad sino un proceso dinámico con stick-slip.\r
- La superficie se calienta perceptiblemente, lo que altera [[mu_c]] durante el mismo experimento.\r
- El bloque gira o vuelca en lugar de deslizar, señal de que el momento de la fuerza neta supera al momento estabilizador del peso.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido incorpora la dependencia de [[mu_c]] con la velocidad (ley de Stribeck), que predice una caída del coeficiente a velocidades muy bajas seguida de un aumento a velocidades altas por efectos viscosos del lubricante o la capa de aire. También puede incluir la componente normal variable si el empuje es inclinado.\r
\r
Cuando conviene pasar al modelo extendido: si el experimento muestra oscilaciones de tipo stick-slip, si la superficie está lubricada, o si la velocidad de deslizamiento supera los 10 m/s. En esos casos, el modelo algebraico de este leaf se sustituye por ecuaciones diferenciales que describen la evolución temporal de la fricción.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo horizontal simple | Modelo con Stribeck |\r
|---------|--------------------------|---------------------|\r
| Precisión típica | 90–95 % en laboratorio seco | superior al 98 % con calibración |\r
| Herramienta matemática | Álgebra y comparación de umbrales | Ecuaciones diferenciales ordinarias |\r
| Tiempo de resolución | Minutos (papel y lápiz) | Requiere simulación numérica |\r
| Cuándo usarlo | Educación, diseño preliminar | Investigación tribológica, ingeniería de precisión |\r
| Parámetros necesarios | Dos coeficientes constantes | Curva completa de fricción frente a velocidad |\r
`;export{e as default};
