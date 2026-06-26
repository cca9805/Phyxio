# Modelos de potencia

## Modelo ideal

El modelo ideal trata la [[P]] como tasa de transferencia mecanica bien definida. Para un intervalo completo usa [[W]] y [[t]]; para un instante usa [[F]], [[v]] y [[theta]]. La hipotesis central es que las magnitudes pertenecen al mismo sistema, al mismo punto de aplicacion y al mismo intervalo o instante fisico.

En este modelo, la potencia media resume un proceso; la potencia instantanea describe una condicion local. Ambas lecturas son compatibles, pero no intercambiables sin justificar uniformidad temporal.

## Hipotesis

- El trabajo [[W]] corresponde exactamente al intervalo [[t]] usado.
- La fuerza [[F]] y la rapidez [[v]] pertenecen al mismo punto material.
- El angulo [[theta]] representa la orientacion real entre fuerza y movimiento.
- Las unidades se expresan de forma coherente: J/s o N m/s.
- Los efectos termicos, electricos o internos se tratan solo si se declara un rendimiento adicional.

## Dominio de validez cuantitativo

Como criterio operativo, la potencia media es fiable si la variacion instantanea no supera mucho el valor medio durante el intervalo. En ejercicios introductorios puede aceptarse una diferencia relativa menor que el 10 % cuando se usa una media como aproximacion. Si los picos de potencia superan dos o tres veces la media, conviene pasar a una descripcion instantanea.

Tambien debe cumplirse [[t]] > 0. Para la forma instantanea, si [[theta]] esta cerca de pi/2, pequenas incertidumbres angulares pueden cambiar mucho la lectura de [[P]]; en ese caso es mejor usar producto escalar o componentes.

## Senales de fallo del modelo

El modelo falla si se usa una fuerza estatica con rapidez nula para afirmar potencia mecanica no nula. Tambien falla si se toma la velocidad del centro de masas cuando la fuerza actua en otro punto, o si se promedia un trabajo de una fase con el tiempo de otra.

Otra senal es obtener potencias absurdas respecto a la escala: megawatts para una accion humana ordinaria, o watts minimos para un motor que acelera una carga grande en poco tiempo.

## Modelo extendido o alternativo

Conviene cambiar a un modelo extendido cuando hay rendimiento, perdidas internas, potencia electrica de entrada, rozamiento importante o transferencia termica. En esos casos la potencia mecanica util puede ser solo una parte de la potencia suministrada.

Tambien conviene cambiar de modelo cuando la fuerza varia rapidamente o cuando hay impactos. Entonces una potencia media puede ocultar picos relevantes y se necesita una funcion temporal o un modelo impulsivo.

## Comparacion operativa

- Modelo medio: simple, util para comparar procesos completos y consumo energetico global.
- Modelo instantaneo: mas preciso para motores, frenado, picos de demanda y control.
- Modelo con rendimiento: necesario cuando se distingue potencia suministrada, util y disipada.
- Modelo impulsivo: mejor cuando el contacto es muy breve y la potencia instantanea formal puede no ser la magnitud mas estable.

La regla practica es elegir el modelo por la pregunta fisica: intervalo completo, instante, eficiencia o pico de demanda.
