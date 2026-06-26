const e=`## Errores conceptuales\r
\r
### Error 1: Confundir trabajo con energía interna\r
\r
**Por qué parece correcto**\r
Trabajo y energía aparecen juntos en termodinámica, y muchos ejercicios asocian ambos conceptos. El alumno puede pensar que cualquier cambio de energía del gas es directamente trabajo mecánico.\r
\r
**Por qué es incorrecto**\r
El trabajo [[W]] es energía transferida por desplazamiento volumétrico. La energía interna depende del estado termodinámico y puede cambiar incluso si el volumen no varía.\r
\r
**Señal de detección**\r
Se detecta cuando se utiliza la variación de temperatura como si fuera el trabajo realizado por el gas.\r
\r
**Corrección conceptual**\r
Se debe distinguir: el trabajo describe la transferencia mecánica entre gas y entorno; la energía interna describe el contenido energético del gas en su estado.\r
\r
**Mini-ejemplo de contraste**\r
En un proceso isocórico el volumen no cambia, así que [[W]] es cero. Sin embargo la temperatura puede subir y la energía interna puede aumentar.\r
\r
## Errores de modelo\r
\r
\r
### Error 1: Aplicar gas ideal en condiciones de alta densidad\r
\r
**Por qué parece correcto**\r
La ley del gas ideal es la más conocida y se intenta primero en cualquier problema de gases.\r
\r
**Por qué es incorrecto**\r
A presiones altas y densidades elevadas las interacciones moleculares y el volumen finito de las partículas afectan significativamente la relación p-V.\r
\r
**Señal de detección**\r
Esto suele aparecer cuando la curva p-V medida se separa de las isotermas ideales, especialmente para presiones mayores de 10⁶ Pa.\r
\r
**Corrección conceptual**\r
Conviene usar un modelo extendido cuando el gas se desvía de la ley ideal. La desviación indica efectos de exclusión de volumen y atracción intermolecular.\r
\r
**Mini-ejemplo de contraste**\r
Un gas a alta presión presenta una presión mayor que la predicha por la ley del gas ideal. El modelo ideal subestima entonces la compresibilidad real.\r
\r
## Errores matemáticos\r
\r
### Error 1: Confundir [[DeltaV]] con volumen absoluto\r
\r
**Por qué parece correcto**\r
El símbolo [[DeltaV]] se parece a [[V]], y puede parecer simplemente otra forma de hablar del volumen.\r
\r
**Por qué es incorrecto**\r
[[DeltaV]] es la variación de volumen entre estados inicial y final. No es el volumen absoluto del gas en un instante dado.\r
\r
**Señal de detección**\r
Cuando se usa [[DeltaV]] en lugar de [[V]] para calcular presión o trabajo, el resultado es erróneo.\r
\r
**Corrección conceptual**\r
Usa [[V]] para el volumen en un punto específico y [[DeltaV]] para la diferencia entre volumen final e inicial.\r
\r
**Mini-ejemplo de contraste**\r
Si V inicial es 0.02 m³ y V final es 0.05 m³, entonces [[DeltaV]] es 0.03 m³. No es correcto usar 0.05 m³ como [[DeltaV]].\r
\r
## Errores de interpretación\r
\r
### Error 1: Creer que un área mayor siempre significa más energía útil\r
\r
**Por qué parece correcto**\r
El trabajo se representa como un área, y un área mayor parece intuitivamente mayor energía.\r
\r
**Por qué es incorrecto**\r
El signo y la dirección del proceso importan. En compresión, el área se interpreta como trabajo recibido por el gas, no como energía entregada por él.\r
\r
**Señal de detección**\r
Cuando un estudiante interpreta una trayectoria hacia la izquierda como si el gas hubiera generado energía útil.\r
\r
**Corrección conceptual**\r
Observa el signo de [[DeltaV]]: expansión positiva significa trabajo por el gas; compresión negativa significa trabajo sobre el gas.\r
\r
**Mini-ejemplo de contraste**\r
Una trayectoria horizontal hacia la izquierda tiene el mismo valor absoluto de área que una expansión, pero corresponde a trabajo entrante, no saliente.\r
\r
## Regla de autocontrol rápido\r
\r
Para cualquier trabajo en un diagrama p-V, comprueba siempre: si la presión es constante, si el cambio de volumen es positivo o negativo y si el área bajo la curva corresponde al signo esperado de [[W]].\r
`;export{e as default};
