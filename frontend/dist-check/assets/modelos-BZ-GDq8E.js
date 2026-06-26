const e=`\uFEFF# Modelos Físicos de Densidad\r
\r
## Modelo ideal\r
El modelo ideal de densidad se basa en la **Hipótesis del Medio Continuo**, que trata al fluido como una sustancia cuya materia se distribuye de forma perfectamente uniforme en todo el espacio que ocupa. En este modelo, la densidad [[rho]] se define como una propiedad puntual bien definida, ignorando el hecho de que la materia está compuesta por átomos y vacío. Este enfoque permite aplicar el cálculo diferencial e integral para modelar flujos y presiones, convirtiendo a la densidad en un campo escalar continuo [[rho]] variable en el espacio.\r
\r
## Hipótesis\r
Para que este modelo sea representativo de la realidad, se deben aceptar las siguientes simplificaciones:\r
1.  **Homogeneidad**: Se asume que las propiedades son idénticas en cualquier pequeña porción del fluido estudiado.\r
2.  **Estructura No Molecular**: Se ignora el espacio vacío entre moléculas; el fluido "llena" el espacio completamente.\r
3.  **Incompresibilidad (en líquidos)**: Se asume que la densidad no cambia con la presión, lo cual simplifica enormemente las ecuaciones de Navier-Stokes.\r
4.  **Estado Estacionario**: En muchos análisis iniciales, se asume que [[rho]] no varía con el tiempo.\r
\r
## Dominio de validez cuantitativo\r
El modelo de densidad como medio continuo es extraordinariamente robusto, pero tiene límites claros:\r
- **Líquidos y Sólidos**: El modelo es válido hasta escalas de nanómetros (10 elevado a -9 m), donde la estructura molecular empieza a dominar.\r
- **Gases**: Válido siempre que el camino libre medio de las moléculas sea mucho menor que las dimensiones del recipiente (Número de Knudsen Kn < 0.01).\r
- **Régimen Macroscópico**: Para muestras de volumen V > 10 elevado a -15 m al cubo en condiciones estándar, las fluctuaciones estadísticas de masa son despreciables (error < 10 elevado a -6).\r
\r
## Señales de fallo del modelo\r
Un investigador debe abandonar el modelo de densidad uniforme cuando observa las siguientes señales:\r
1.  **Fluctuaciones de Presión Extremas**: En gases a muy baja presión (vacío), donde el número de partículas es tan bajo que la densidad "salta" erráticamente.\r
2.  **Gradientes Térmicos Intensos**: Si el fluido se calienta de forma desigual, aparecen corrientes de convección porque la densidad ya no es uniforme.\r
3.  **Mezclas Multifásicas**: Si hay burbujas de gas en un líquido, el modelo de una única [[rho]] falla y se debe usar un modelo de mezcla o de fases separadas.\r
\r
## Modelo extendido o alternativo\r
Cuando los límites del dominio ideal se superan, decidir cuando conviene cambiar de modelo es vital:\r
1.  **Dinámica Molecular**: Se usa cuando el sistema es tan pequeño que debemos simular cada partícula individualmente.\r
2.  **Ecuaciones de Estado (Gas Real)**: Se usan para gases donde la densidad cambia drásticamente con la presión y la temperatura (Van der Waals, Redlich-Kwong).\r
3.  **Modelo de Mezclas**: Para fluidos con sólidos en suspensión o emulsiones, donde se definen fracciones volumétricas para cada componente.\r
\r
## Comparación operativa\r
Mientras que el modelo de medio continuo es el estándar de oro para la ingeniería civil e hidráulica (donde el agua se trata como un bloque denso e incompresible), el modelo de gas real es indispensable en la industria aeroespacial y petroquímica. Por otro lado, la dinámica molecular queda reservada para la nanotecnología y la bioquímica avanzada. La elección depende siempre de si el fenómeno de interés ocurre a una escala donde la "textura" granular de la materia influye en el resultado final.\r
`;export{e as default};
