# Modelos físicos para el equilibrio termodinámico

## Modelo ideal

El modelo ideal representa un sistema macroscopico dividido en regiones que pueden intercambiar calor, volumen o materia segun sus fronteras. El equilibrio se alcanza cuando las variables intensivas relevantes se igualan o compensan: [[T]] para intercambio térmico, [[P]] para fronteras moviles y [[mu]] para intercambio material.

En este modelo no se describe el movimiento microscópico individual. Se describe el estado macroscopico final, donde [[DeltaT]], [[DeltaP]] y la afinidad [[A]] asociada a procesos permitidos se anulan.

## Hipótesis

- El sistema tiene variables de estado bien definidas.
- Las fronteras y restricciones se conocen.
- Las regiones internas pueden aproximarse como subsistemas macroscopicos.
- Los gradientes relevantes son medibles mediante [[DeltaT]], [[DeltaP]] o [[A]].
- La escala de observación supera el tiempo de relajación [[tau]] necesario.

Estas hipótesis evitan confundir equilibrio con reposo aparente o con estado estacionario sostenido por flujos.

## Dominio de validez cuantitativo

El modelo es adecuado cuando las diferencias internas son pequenas frente a la precision experimental. Criterio operativo: < 0.1 K para la diferencia térmica en un laboratorio sensible y < 1% de la presión de referencia para el desequilibrio mecánico de un pistón simple. En termodinámica escolar suele bastar con tratar [[DeltaT]] y [[DeltaP]] como cero dentro de las cifras significativas del problema.

Si [[tau]] es mucho menor que el tiempo de observación, el equilibrio puede considerarse alcanzado. Si [[tau]] es comparable o mayor que el tiempo de medida, conviene hablar de relajación o metastabilidad.

## Señales de fallo del modelo

El modelo falla si hay flujo permanente de calor, gradientes espaciales sostenidos, reacciones lentas no equilibradas, turbulencia, histeresis o envejecimiento del material. También falla si el sistema esta impulsado desde fuera, como una barra mantenida entre dos temperaturas distintas.

Una senal observable de fallo es que una lectura local de [[T]] o [[P]] depende mucho del punto de medida. Otra es que el sistema repite cambios lentos aunque parezca constante durante un intervalo corto.

## Modelo extendido o alternativo

Cuando el equilibrio no se alcanza de inmediato, se usa un modelo de relajación. Ese modelo introduce flujos, conductancias, capacidades térmicas, viscosidad, difusion o cinética quimica. Entonces [[tau]] se convierte en una variable central y las diferencias [[DeltaT]] y [[DeltaP]] evolucionan en el tiempo.

Conviene cambiar al modelo extendido si se pide tasa de enfriamiento, velocidad de difusion, tiempo hasta equilibrio, perfil espacial o produccion de entropía durante el proceso. El equilibrio sigue siendo el destino, pero el modelo alternativo describe el camino.

## Comparacion operativa

El modelo ideal responde si un estado final puede tratarse como equilibrio. El modelo extendido responde cuanto tarda en alcanzarse y que flujos aparecen durante la relajación. Para ejercicios de estado, basta el ideal; para procesos temporales, hace falta el extendido.
