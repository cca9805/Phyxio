const e=`# Modelos físicos: efecto Venturi\r
\r
## Modelo ideal\r
El modelo ideal del efecto Venturi se basa en las suposiciones de Bernoulli para un fluido perfecto. Se considera que el fluido es incompresible (densidad [[rho]] constante), no viscoso (sin rozamiento interno ni con las paredes) y que el flujo es estacionario e irrotacional. Bajo estas condiciones, la energía se conserva perfectamente entre la presión estática y la energía cinética, permitiendo que la caída de presión [[dp]] sea una función exacta del cuadrado de las velocidades [[v1]] y [[v2]].\r
\r
## Hipótesis\r
1.  **Fluido incompresible**: La densidad del fluido no cambia significativamente a pesar de las variaciones de presión [[p1]] y [[p2]].\r
2.  **Flujo estacionario**: Las propiedades del fluido en cualquier punto del espacio no varían con el tiempo.\r
3.  **Sin fricción**: No se consideran las pérdidas de carga debidas a la viscosidad del fluido o la rugosidad de las áreas [[A1]] y [[A2]].\r
4.  **Tubo horizontal**: Se desprecia el efecto de la gravedad al no haber cambios de altura.\r
\r
## Dominio de validez cuantitativo\r
Para que el modelo de Venturi sea físicamente fiable, deben cumplirse los siguientes criterios cuantitativos:\r
- **Régimen incompresible**: En gases, la velocidad debe ser menor a Mach 0.3 (aproximadamente 100 m/s en aire a nivel del mar). Por encima de este valor, la densidad [[rho]] deja de ser constante.\r
- **Régimen de flujo**: El número de Reynolds debe ser lo suficientemente alto (Re > 4000) para que el flujo sea plenamente turbulento y el perfil de velocidades sea predecible, pero no tanto como para que la fricción domine sobre el efecto de presión.\r
- **Error relativo**: Las predicciones del modelo ideal suelen desviarse menos del 2 % respecto a un tubo real bien diseñado con un cono de salida suave.\r
\r
## Señales de fallo del modelo\r
- **Cavitación**: Si la presión calculada [[p2]] cae por debajo de la presión de vapor del líquido, aparecerán burbujas y el modelo dejará de ser válido.\r
- **Pérdida de carga excesiva**: Si la diferencia de presión real medida es mucho mayor a la calculada por \`dp_venturi\`, la fricción está dominando el sistema.\r
- **Compresibilidad**: Si al aplicar el modelo a un gas el resultado de velocidad se acerca a la velocidad del sonido, el modelo incompresible producirá errores masivos.\r
\r
## Modelo extendido o alternativo\r
El modelo real incorpora el **coeficiente de descarga (C)**, que corrige la fórmula ideal para tener en cuenta la viscosidad y el perfil de velocidad no uniforme. El caudal real es el caudal ideal multiplicado por C, con C entre 0.95 y 0.99 para tubos estándar. En casos de altas velocidades en gases, se debe utilizar el modelo de **flujo compresible de Saint-Venant**, que tiene en cuenta las variaciones de densidad.\r
\r
## Comparación operativa\r
La comparación con modelos alternativos sirve para decidir si conviene una descripción estática, dinámica, lineal, cuadrática, elástica o puramente geométrica. Cuando los efectos de fricción son significativos o el número de Mach supera 0.3, **conviene cambiar a** un modelo de flujo real o compresible para mantener la precisión. La mejor elección es la que conserva significado físico con el menor número de supuestos discutibles y con una interpretación verificable en el escenario real.`;export{e as default};
