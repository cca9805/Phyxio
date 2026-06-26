const e=`## Modelo ideal\r
\r
El modelo ideal que usa este leaf describe un gas diluido y sin interacciones moleculares relevantes. La única presión relevante es la ejercida por los choques de las moléculas con las paredes, y el volumen [[V]] ocupa todo el espacio disponible para el gas.\r
\r
Este modelo permite interpretar la forma de un proceso en un diagrama p-V sin introducir correcciones de volumen finito, fuerzas intermoleculares ni efectos de no idealidad.\r
\r
## Hipótesis\r
\r
- El gas es ideal. Las moléculas no interaccionan excepto en choques elásticos.\r
- La presión [[P]] es homogénea dentro del volumen considerado.\r
- La cantidad de sustancia [[n]] se conserva en un sistema cerrado.\r
- La temperatura [[T]] define la familia de isotermas, y el proceso puede ser isobárico o de volumen variable.\r
\r
Si se viola alguna hipótesis, la curva p-V puede distorsionarse y las fórmulas simples del leaf dejan de aplicar.\r
\r
## Dominio de validez cuantitativo\r
\r
- El modelo es válido para presiones del orden de 10⁵ Pa y menores, típicas de gases en recipientes de laboratorio.\r
- La ley funciona bien cuando la densidad permanece baja y se cumplen condiciones de gas ideal, es decir cuando P < 1×10⁶ Pa y las distancias moleculares son grandes frente al tamaño de las moléculas.\r
- Para volúmenes del orden de 10⁻⁴ m³ a 10⁻¹ m³ en recipientes comunes, la aproximación de gas ideal suele ser razonable si no hay condensación.\r
\r
## Señales de fallo del modelo\r
\r
- Si la trayectoria p-V se separa significativamente de una familia de isotermas ideales, el gas ya no es ideal.\r
- Si la curva muestra regiones de pendiente súbita o pliegues, puede haber transiciones de fase o efectos de interacción molecular.\r
- Si el trabajo inferido del área no coincide con la energía transferida estimada por otros medios, el modelo de gas ideal puede estar fallando.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando conviene pasar al modelo de van der Waals u otro modelo realista: para densidades altas y presiones cercanas o superiores a 1×10⁶ Pa, las interacciones intermoleculares y el volumen finito de las partículas ya no pueden despreciarse.\r
\r
La transición al modelo extendido conviene cuando el gas muestra un comportamiento más rígido de lo previsto por la ley del gas ideal y la curva p-V se desplaza hacia presiones mayores a la misma temperatura.\r
\r
## Comparación operativa\r
\r
- Modelo ideal: simple, válido para gases diluidos a presiones moderadas. Modelo extendido: más complejo, necesario para densidades altas.\r
- Modelo ideal: curvas de proceso bien definidas y fáciles de leer. Modelo extendido: trayectorias corregidas por interacciones y volumen ocupado.\r
- Modelo ideal: útil para enseñanza y primeros cálculos de trabajo. Modelo extendido: necesario para predicciones precisas en condiciones extremas.\r
`;export{e as default};
