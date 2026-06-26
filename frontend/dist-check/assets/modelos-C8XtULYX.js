const e=`# Modelos físicos: concepto de fluido

## Modelo ideal
El modelo ideal del concepto de fluido se basa en la **hipótesis del medio continuo**. En este modelo, ignoramos la naturaleza atómica y molecular de la materia, tratando al fluido como una sustancia matemáticamente continua donde las propiedades (densidad [[rho]], velocidad velocidad local, presión) están definidas en cada punto del espacio. Además, se asume que el fluido es **newtoniano**, es decir, que su resistencia al movimiento es puramente lineal y proporcional a la tasa de deformación.

## Hipótesis
1.  **Continuidad**: Se asume que el volumen elemental representativo es lo suficientemente grande como para promediar las fluctuaciones moleculares, pero lo suficientemente pequeño como para ser considerado un punto diferencial.
2.  **Fluido Newtoniano**: La viscosidad [[mu]] se considera una propiedad constante del material, independiente del tiempo y del esfuerzo cortante [[tau]] aplicado.
3.  **No deslizamiento**: Se asume que las moléculas de fluido en contacto con un sólido no se deslizan respecto a él, adquiriendo su misma velocidad.
4.  **Homogeneidad**: En este nivel básico, se suele asumir que las propiedades son uniformes en toda la masa del fluido.

## Dominio de validez cuantitativo
Para que el modelo de medio continuo sea válido, el **número de Knudsen** (n?mero de Knudsen definido como camino libre medio dividido por escala macrosc?pica) debe ser menor a 0.01 (Kn < 0.01).
- Si Kn > 0.1, los efectos moleculares empiezan a ser dominantes y el modelo de fluido convencional falla.
- El modelo newtoniano es válido para la gran mayoría de fluidos simples (agua, aire, aceites minerales) a velocidades moderadas.

## Señales de fallo del modelo
- **Inconsistencia en la viscosidad**: Si al aumentar el gradiente [[du_dy]] la fuerza no aumenta de forma proporcional, el fluido es no-newtoniano.
- **Ruptura de la continuidad**: En gases a muy baja presión (vacío extremo) o en canales de escala nanométrica, los resultados macroscópicos dejan de coincidir con los experimentos.
- **Turbulencia severa**: Cuando la inercia supera enormemente a la viscosidad (Re > 4000), el perfil de velocidad deja de ser lineal y el modelo de flujo de Couette simple ya no describe el sistema.

## Modelo extendido o alternativo
Para situaciones donde el modelo newtoniano falla, se utilizan modelos de **reología compleja** (como el modelo de Ley de Potencia o fluidos viscoelásticos). En casos de flujo de gases en microcanales o en la alta atmósfera, **conviene cambiar a** modelos de **dinámica molecular** o a las ecuaciones de Boltzmann, que abandonan la hipótesis del medio continuo para tratar directamente con la estadística de las partículas.

## Comparación operativa
La comparación con modelos alternativos sirve para decidir si conviene una descripción macroscópica o microscópica. El modelo de medio continuo es extremadamente potente y eficiente para casi todas las aplicaciones de ingeniería terrestre, desde la hidráulica hasta el diseño de barcos, mientras que los modelos moleculares se reservan para condiciones extremas de escala o presión.\r
`;export{e as default};
