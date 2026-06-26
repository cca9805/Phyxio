const e=`# Errores frecuentes: Arrastre cuadratico\r
\r
## Errores conceptuales\r
\r
### Error 1: Leer [[F_d]] como efecto lineal de [[v]]\r
\r
### Por qué parece correcto\r
En otros temas cercanos se trabaja con proporcionalidades lineales y esa intuicion se arrastra aqui.\r
\r
### Por qué es incorrecto\r
En este leaf, el modelo operativo establece crecimiento cuadratico, no lineal.\r
\r
### Señal de detección\r
Al duplicar [[v]], tu estimacion de [[F_d]] solo se duplica en vez de acercarse a cuatro veces.\r
\r
### Corrección conceptual\r
Verifica la ley activa y usa la lectura de escalado como test rapido de coherencia.\r
\r
### Mini-ejemplo\r
Si [[v]] pasa de 8 a 16 m/s y [[c]] se mantiene, [[F_d]] no debe pasar de 40 a 80 N por inercia lineal, sino aproximarse a 160 N si era 40 N en el primer caso.\r
\r
### Error 2: Tratar [[c]] como constante universal\r
\r
### Por qué parece correcto\r
En ejercicios cortos suele darse un unico valor de [[c]].\r
\r
### Por qué es incorrecto\r
[[c]] depende de [[rho]], [[C_d]] y [[A]], por lo que cambia cuando cambia medio o geometria efectiva.\r
\r
### Señal de detección\r
Obtienes predicciones inconsistentes entre escenarios donde variaron postura o densidad, pero mantuviste [[c]] fija.\r
\r
### Corrección conceptual\r
Usa la formula puente para justificar si [[c]] debe recalibrarse.\r
\r
### Mini-ejemplo\r
El mismo ciclista en postura erguida y acoplada no comparte [[A]] ni [[C_d]], por tanto no debe compartir el mismo [[c]] sin validacion.\r
\r
### Error 3: Confundir rapidez relativa con rapidez al suelo\r
\r
### Por qué parece correcto\r
El dato de velocidad suele venir de un velocimetro de suelo.\r
\r
### Por qué es incorrecto\r
El arrastre depende de la rapidez relativa al fluido, no del desplazamiento respecto al terreno.\r
\r
### Señal de detección\r
El calculo no explica por que con viento en contra sube la demanda resistiva aun con igual velocidad de suelo.\r
\r
### Corrección conceptual\r
Define [[v]] respecto al fluido antes de aplicar cualquier ecuacion.\r
\r
### Mini-ejemplo\r
A 12 m/s sobre suelo con 4 m/s de viento frontal, la rapidez relativa no es 12 sino 16 m/s.\r
\r
## Errores de modelo\r
\r
### Error 4: Forzar modelo cuadratico fuera de su rango\r
\r
### Por qué parece correcto\r
Una vez aprendida la ley, se tiende a usarla siempre.\r
\r
### Por qué es incorrecto\r
Hay tramos donde el comportamiento no sigue bien el patron cuadratico y requiere otro modelo o un ajuste por tramos.\r
\r
### Señal de detección\r
La curva medida [[F_d]] frente a [[v]] pierde convexidad estable y el error sistematico crece.\r
\r
### Corrección conceptual\r
Introduce criterio de transición de modelo cuando el ajuste exceda el margen aceptado.\r
\r
### Mini-ejemplo\r
Si dos ventanas de velocidad exigen valores incompatibles de [[c]], no es solo ruido: puede ser cambio de regimen.\r
\r
### Error 5: Ignorar el rol de [[A]] en comparaciones\r
\r
### Por qué parece correcto\r
Se asume que la geometria casi no cambia entre casos.\r
\r
### Por qué es incorrecto\r
Cambios pequenos de postura u orientacion alteran [[A]] y desplazan toda la curva de [[F_d]].\r
\r
### Señal de detección\r
No logras explicar diferencias de fuerza entre ensayos con igual masa y velocidad nominal.\r
\r
### Corrección conceptual\r
Documenta [[A]] de referencia y su condicion de medicion en cada comparacion.\r
\r
### Mini-ejemplo\r
Dos configuraciones de dron con la misma [[v]] pueden mostrar [[F_d]] distinta si una expone mayor area frontal.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejar sin cuidar dominio fisico\r
\r
### Por qué parece correcto\r
El despeje algebraico parece formalmente valido.\r
\r
### Por qué es incorrecto\r
Algunos despejes requieren restricciones como [[v]] > 0 o [[c]] > 0 para conservar sentido fisico.\r
\r
### Señal de detección\r
Aparece una raiz de valor negativo o un coeficiente fisicamente imposible.\r
\r
### Corrección conceptual\r
Revisa restricciones declaradas en los despejes antes de aceptar resultado.\r
\r
### Mini-ejemplo\r
Calcular [[v]] con [[c]] negativo da un resultado numerico posible en calculadora, pero fisicamente invalido.\r
\r
### Error 7: Mezclar unidades en [[rho]], [[A]] y [[c]]\r
\r
### Por qué parece correcto\r
El numero final puede parecer razonable aunque las unidades esten mal.\r
\r
### Por qué es incorrecto\r
La coherencia dimensional es parte del modelo, no un detalle administrativo.\r
\r
### Señal de detección\r
[[c]] sale con unidades incompatibles con N*s^2/m^2.\r
\r
### Corrección conceptual\r
Normaliza unidades al SI antes de evaluar expresiones.\r
\r
### Mini-ejemplo\r
Usar area en cm^2 sin convertir altera [[c]] por varios ordenes de magnitud.\r
\r
## Errores de interpretación\r
\r
### Error 8: Reportar solo el numero de [[F_d]]\r
\r
### Por qué parece correcto\r
En examen rapido, obtener un valor parece suficiente.\r
\r
### Por qué es incorrecto\r
Sin lectura causal, no sabes que variable domina ni como actuar para mejorar el sistema.\r
\r
### Señal de detección\r
Tu conclusion no menciona [[v]], [[c]] ni condicion de validez.\r
\r
### Corrección conceptual\r
Cierra cada resultado con una frase de mecanismo y una frase de limite.\r
\r
### Mini-ejemplo\r
No basta decir [[F_d]] = 95 N; debes explicar si la demanda crece por velocidad, por densidad o por geometria.\r
\r
### Error 9: Sobreinterpretar precision decimal\r
\r
### Por qué parece correcto\r
Mas decimales dan sensacion de mayor rigor.\r
\r
### Por qué es incorrecto\r
Si el modelo tiene incertidumbre experimental, decimales extra no agregan verdad fisica.\r
\r
### Señal de detección\r
Presentas cuatro decimales con datos de entrada aproximados y sin analisis de margen.\r
\r
### Corrección conceptual\r
Ajusta cifras significativas al nivel de calidad de datos y de modelo.\r
\r
### Mini-ejemplo\r
Con medicion de [[v]] y [[C_d]] de baja precision, reportar [[F_d]] con dos o tres cifras suele ser mas honesto.\r
\r
## Regla de autocontrol rápido\r
\r
Usa esta checklist mental despues de resolver un problema:\r
\r
- Tiene sentido dimensional.\r
- El orden de magnitud es razonable para el escenario.\r
- El escalado al duplicar [[v]] es compatible con comportamiento cuadratico.\r
- La conclusion declara limite de validez.\r
- La interpretacion menciona [[v]], [[c]], [[rho]], [[C_d]] y [[A]].\r
\r
Si alguno de estos puntos falla, reexamina el planteamiento antes de confiar en el resultado.\r
`;export{e as default};
