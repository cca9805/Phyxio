const e=`# Modelos para variables intensivas\r
\r
## Modelo ideal\r
\r
El modelo ideal trata una variable intensiva como una propiedad de estado local o media que no cambia al escalar una muestra uniforme. Si se duplican simultaneamente [[m]] y [[V]] manteniendo composicion, fase y equilibrio interno, [[T]], [[P]], [[rho]] y la variable generica [[X_int]] permanecen iguales. El sistema puede hacerse mayor, pero la lectura de estado no se convierte en una suma.\r
\r
Este modelo es útil cuando el sistema es macroscopico, esta suficientemente mezclado y no presenta gradientes importantes. En esas condiciones, una sola cifra para [[T]] o [[P]] representa razonablemente a todo el sistema. También permite clasificar cocientes como [[rho]], porque la normalizacion cancela el efecto de escala.\r
\r
## Hipótesis\r
\r
La primera hipótesis es homogeneidad interna: el valor observado no cambia de forma significativa entre regiones. La segunda es comparabilidad: las partes que se escalan o mezclan pertenecen a la misma fase o a fases tratadas con una regla clara. La tercera es referencia comun: [[m]] y [[V]] se refieren al mismo sistema cuando se calcula [[rho]].\r
\r
También se supone que [[lambda_escala]] cambia cantidad de sistema, no estado. Si al escalar se modifica la temperatura por intercambio con el entorno o se comprime el gas, ya no se esta aplicando el test puro de intensividad. La prueba solo tiene sentido cuando la copia agregada es equivalente a la original.\r
\r
## Dominio de validez cuantitativo\r
\r
Como criterio de aula, el modelo de una única intensiva media funciona bien cuando las variaciones internas cumplen \`DeltaX/X < 0.01\` en la escala de trabajo. Si dos termometros en una muestra difieren menos del uno por ciento de la lectura relevante, se puede usar una [[T]] media sin perder la decision física principal. Si la variación de [[P]] dentro de un recipiente es pequeña frente a la presión media, una presión única puede ser suficiente.\r
\r
Para cocientes como [[rho]], se requiere [[V]] positivo y una muestra representativa. En una mezcla estratificada, una densidad media puede ser útil para inventario, pero no describe cada capa. En calculos de mezcla, el promedio de [[X_A]] y [[X_B]] debe ponderarse con cantidades positivas y compatibles; una media simple solo es razonable si las cantidades son iguales.\r
\r
## Señales de fallo del modelo\r
\r
El modelo falla si aparecen gradientes grandes de temperatura, presión o composicion. También falla si hay fronteras activas, cambios de fase, reaccion quimica localizada o flujo rápido que impide definir equilibrio local. Una señal práctica es que dos sensores razonables colocados en puntos distintos no dan lecturas compatibles.\r
\r
Otra señal de fallo es usar intensivas para hacer balances de inventario. Si se intenta sumar temperaturas para obtener temperatura total, el modelo conceptual se ha roto. Si se intenta comparar dos recipientes por [[P]] sin conocer area o cantidad de gas, se puede confundir empuje local con fuerza total o inventario.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando la muestra no es uniforme, conviene cambiar al modelo de campo intensivo. En lugar de una sola [[T]], [[P]] o [[rho]], se usan valores locales dependientes de la posicion y, a veces, del tiempo. La transicion es obligatoria cuando el gradiente observado domina la incertidumbre de medida o cuando la pregunta pide flujo, transferencia o estabilidad espacial.\r
\r
Si la mezcla no es ideal, se cambia al modelo de propiedades efectivas o ecuaciones de estado. En ese caso el promedio ponderado simple deja de ser suficiente y se introducen calores específicos, compresibilidades, actividad o relaciones constitutivas. El criterio para cambiar de modelo es claro: si la regla intensiva simple no predice la lectura final dentro de la tolerancia física, hay que representar la estructura interna.\r
\r
## Comparación operativa\r
\r
El modelo ideal responde rápido: duplicar una muestra no cambia [[X_int]]. El modelo de campo responde con más detalle: cada punto tiene su propio valor. El modelo efectivo responde cuando la composicion o la fase hacen que una media simple sea engañosa. Elegir entre ellos depende de la pregunta: comparacion de estado, mapa espacial o calculo de mezcla real.\r
`;export{e as default};
