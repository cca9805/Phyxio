# Errores frecuentes: Arrastre cuadratico

## Errores conceptuales

### Error 1: Leer [[F_d]] como efecto lineal de [[v]]

### Por qué parece correcto
En otros temas cercanos se trabaja con proporcionalidades lineales y esa intuicion se arrastra aqui.

### Por qué es incorrecto
En este leaf, el modelo operativo establece crecimiento cuadratico, no lineal.

### Señal de detección
Al duplicar [[v]], tu estimacion de [[F_d]] solo se duplica en vez de acercarse a cuatro veces.

### Corrección conceptual
Verifica la ley activa y usa la lectura de escalado como test rapido de coherencia.

### Mini-ejemplo
Si [[v]] pasa de 8 a 16 m/s y [[c]] se mantiene, [[F_d]] no debe pasar de 40 a 80 N por inercia lineal, sino aproximarse a 160 N si era 40 N en el primer caso.

### Error 2: Tratar [[c]] como constante universal

### Por qué parece correcto
En ejercicios cortos suele darse un unico valor de [[c]].

### Por qué es incorrecto
[[c]] depende de [[rho]], [[C_d]] y [[A]], por lo que cambia cuando cambia medio o geometria efectiva.

### Señal de detección
Obtienes predicciones inconsistentes entre escenarios donde variaron postura o densidad, pero mantuviste [[c]] fija.

### Corrección conceptual
Usa la formula puente para justificar si [[c]] debe recalibrarse.

### Mini-ejemplo
El mismo ciclista en postura erguida y acoplada no comparte [[A]] ni [[C_d]], por tanto no debe compartir el mismo [[c]] sin validacion.

### Error 3: Confundir rapidez relativa con rapidez al suelo

### Por qué parece correcto
El dato de velocidad suele venir de un velocimetro de suelo.

### Por qué es incorrecto
El arrastre depende de la rapidez relativa al fluido, no del desplazamiento respecto al terreno.

### Señal de detección
El calculo no explica por que con viento en contra sube la demanda resistiva aun con igual velocidad de suelo.

### Corrección conceptual
Define [[v]] respecto al fluido antes de aplicar cualquier ecuacion.

### Mini-ejemplo
A 12 m/s sobre suelo con 4 m/s de viento frontal, la rapidez relativa no es 12 sino 16 m/s.

## Errores de modelo

### Error 4: Forzar modelo cuadratico fuera de su rango

### Por qué parece correcto
Una vez aprendida la ley, se tiende a usarla siempre.

### Por qué es incorrecto
Hay tramos donde el comportamiento no sigue bien el patron cuadratico y requiere otro modelo o un ajuste por tramos.

### Señal de detección
La curva medida [[F_d]] frente a [[v]] pierde convexidad estable y el error sistematico crece.

### Corrección conceptual
Introduce criterio de transición de modelo cuando el ajuste exceda el margen aceptado.

### Mini-ejemplo
Si dos ventanas de velocidad exigen valores incompatibles de [[c]], no es solo ruido: puede ser cambio de regimen.

### Error 5: Ignorar el rol de [[A]] en comparaciones

### Por qué parece correcto
Se asume que la geometria casi no cambia entre casos.

### Por qué es incorrecto
Cambios pequenos de postura u orientacion alteran [[A]] y desplazan toda la curva de [[F_d]].

### Señal de detección
No logras explicar diferencias de fuerza entre ensayos con igual masa y velocidad nominal.

### Corrección conceptual
Documenta [[A]] de referencia y su condicion de medicion en cada comparacion.

### Mini-ejemplo
Dos configuraciones de dron con la misma [[v]] pueden mostrar [[F_d]] distinta si una expone mayor area frontal.

## Errores matemáticos

### Error 6: Despejar sin cuidar dominio fisico

### Por qué parece correcto
El despeje algebraico parece formalmente valido.

### Por qué es incorrecto
Algunos despejes requieren restricciones como [[v]] > 0 o [[c]] > 0 para conservar sentido fisico.

### Señal de detección
Aparece una raiz de valor negativo o un coeficiente fisicamente imposible.

### Corrección conceptual
Revisa restricciones declaradas en los despejes antes de aceptar resultado.

### Mini-ejemplo
Calcular [[v]] con [[c]] negativo da un resultado numerico posible en calculadora, pero fisicamente invalido.

### Error 7: Mezclar unidades en [[rho]], [[A]] y [[c]]

### Por qué parece correcto
El numero final puede parecer razonable aunque las unidades esten mal.

### Por qué es incorrecto
La coherencia dimensional es parte del modelo, no un detalle administrativo.

### Señal de detección
[[c]] sale con unidades incompatibles con N*s^2/m^2.

### Corrección conceptual
Normaliza unidades al SI antes de evaluar expresiones.

### Mini-ejemplo
Usar area en cm^2 sin convertir altera [[c]] por varios ordenes de magnitud.

## Errores de interpretación

### Error 8: Reportar solo el numero de [[F_d]]

### Por qué parece correcto
En examen rapido, obtener un valor parece suficiente.

### Por qué es incorrecto
Sin lectura causal, no sabes que variable domina ni como actuar para mejorar el sistema.

### Señal de detección
Tu conclusion no menciona [[v]], [[c]] ni condicion de validez.

### Corrección conceptual
Cierra cada resultado con una frase de mecanismo y una frase de limite.

### Mini-ejemplo
No basta decir [[F_d]] = 95 N; debes explicar si la demanda crece por velocidad, por densidad o por geometria.

### Error 9: Sobreinterpretar precision decimal

### Por qué parece correcto
Mas decimales dan sensacion de mayor rigor.

### Por qué es incorrecto
Si el modelo tiene incertidumbre experimental, decimales extra no agregan verdad fisica.

### Señal de detección
Presentas cuatro decimales con datos de entrada aproximados y sin analisis de margen.

### Corrección conceptual
Ajusta cifras significativas al nivel de calidad de datos y de modelo.

### Mini-ejemplo
Con medicion de [[v]] y [[C_d]] de baja precision, reportar [[F_d]] con dos o tres cifras suele ser mas honesto.

## Regla de autocontrol rápido

Usa esta checklist mental despues de resolver un problema:

- Tiene sentido dimensional.
- El orden de magnitud es razonable para el escenario.
- El escalado al duplicar [[v]] es compatible con comportamiento cuadratico.
- La conclusion declara limite de validez.
- La interpretacion menciona [[v]], [[c]], [[rho]], [[C_d]] y [[A]].

Si alguno de estos puntos falla, reexamina el planteamiento antes de confiar en el resultado.
