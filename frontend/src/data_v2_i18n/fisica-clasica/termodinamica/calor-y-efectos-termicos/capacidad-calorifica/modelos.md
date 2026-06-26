## Modelo ideal

El modelo ideal trata [[C]] como una constante del cuerpo durante el intervalo de temperatura estudiado. En ese caso, el calor sensible intercambiado es proporcional a [[DeltaT]] y la pendiente de la grafica [[Q]] frente a [[DeltaT]] es [[C]]. El modelo describe calentamiento o enfriamiento sin cambio de estado.

## Hipótesis

- El cuerpo no cruza una transicion de fase.
- [[C]] permanece aproximadamente constante en el rango de temperatura.
- El cuerpo es homogeneo o puede representarse por una capacidad efectiva.
- Las perdidas al entorno son pequeñas o ya estan corregidas.
- [[Q]] y [[DeltaT]] se escriben con signos coherentes.

## Dominio de validez cuantitativo

Para muchos solidos y liquidos cerca de temperatura ambiente, usar [[C]] constante introduce errores menores que unos pocos por ciento si el intervalo de temperatura no supera varias decenas de kelvin. En agua, metales comunes y recipientes de laboratorio, esta aproximacion suele ser suficiente para prácticas de bachillerato y primeros cursos universitarios.

Si el intervalo supera unos 100 K, si se trabaja cerca del cero absoluto o si el material esta cerca de una transicion, la capacidad calorifica puede variar de forma apreciable. En esos casos, el dato de tabla a una sola temperatura deja de representar todo el proceso.

Criterio práctico: usar el modelo ideal si |[[DeltaT]]| < 100 K, el proceso no cruza cambios de estado y el error tolerado es mayor que 5 %. Si las perdidas superan el 10 % de [[Q]], o si el recipiente tiene una [[C]] comparable a la muestra y no se ha incluido, el modelo debe ampliarse.

## Señales de fallo del modelo

- La grafica experimental de [[Q]] frente a [[DeltaT]] no es una recta.
- El cuerpo atraviesa fusion, ebullicion u otra transicion de fase.
- El valor calculado de [[C]] depende mucho del intervalo usado.
- El balance energético no cierra aunque las unidades y signos sean correctos.
- El recipiente, sensor o soporte tiene una capacidad comparable a la muestra y fue omitido.

## Modelo extendido o alternativo

El primer modelo extendido permite que [[C]] dependa de la temperatura. En vez de usar una sola pendiente, se usa una capacidad promedio en el intervalo o datos tabulados por tramos. Para cuerpos compuestos, el modelo alternativo suma capacidades parciales de cada componente: muestra, recipiente, tapa y sensores.

Cuando conviene cambiar de modelo: si se necesita precision mejor que cinco por ciento, si el intervalo de temperatura es grande, si el cuerpo no es homogeneo o si aparecen tramos de cambio de estado. En un cambio de estado debe usarse calor latente; la capacidad calorifica ordinaria no describe la meseta de temperatura.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido | Cuerpo compuesto |
|---|---|---|---|
| Capacidad | [[C]] constante | [[C]] variable con temperatura | suma de capacidades parciales |
| Uso | estimaciones y laboratorio basico | alta precision o gran intervalo | calorimetros y equipos reales |
| Riesgo | ignorar cambios de estado | necesitar datos de tabla | olvidar recipiente o sensor |
