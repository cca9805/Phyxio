# Errores comunes:

El estudio del plano inclinado es propenso a varios errores conceptuales y matemáticos que pueden invalidar por completo un análisis dinámico.

## Errores conceptuales

### Error 1: El mito de la "creación de energía"
#### ¿Por qué parece correcto?
Porque el esfuerzo [[P]] necesario para subir la carga es notablemente menor que el peso total [[W]], sugiriendo una ganancia neta.
#### ¿Por qué es incorrecto?
Porque viola la conservación de la energía. El ahorro en fuerza se compensa exactamente con el aumento en la distancia recorrida [[L]].
#### Señal de detección
Obtener un trabajo de entrada menor al cambio de energía potencial.
#### Corrección conceptual
El plano inclinado es un multiplicador de fuerza, pero el trabajo mecánico ideal se mantiene constante.
#### Mini-ejemplo
Para subir 100 N a 1 m (100 J), una rampa de 4 m requiere 25 N. El esfuerzo baja, pero el trabajo (25 N * 4 m) sigue siendo 100 J.

## Errores de modelo

### Error 2: Desprecio del rozamiento en rampas reales
#### ¿Por qué parece correcto?
Los ejercicios de física básica suelen ignorar la fricción por simplicidad, y tendemos a aplicar fórmulas ideales en situaciones del mundo real.
#### ¿Por qué es incorrecto?
En una rampa real, el rozamiento [[f]] puede representar hasta el 30-50% del esfuerzo total. Ignorarlo subestima drásticamente la potencia necesaria.
#### Señal de detección
El objeto no se mueve a pesar de aplicar la fuerza ideal calculada.
#### Corrección conceptual
Incorporar siempre el coeficiente [[mu]] y la Normal [[N]] en el balance de fuerzas.
#### Mini-ejemplo
En una rampa de madera, ignorar la fricción lleva a diseñar motores que se queman por sobreesfuerzo.

## Errores matemáticos

### Error 3: Confusión entre masa y peso
#### ¿Por qué parece correcto?
En la vida cotidiana solemos usar "kilos" para ambas magnitudes, lo que induce a error al usar la masa [[m]] directamente en balances de fuerzas.
#### ¿Por qué es incorrecto?
Las leyes de Newton operan con fuerzas (Newtons). Usar kilogramos en una suma de fuerzas invalida dimensionalmente el cálculo.
#### Señal de detección
Resultados de fuerza u aceleración que difieren por un factor de aproximadamente 10 ([[g]]).
#### Corrección conceptual
Multiplicar siempre la masa por la gravedad para obtener el peso:
{{f:peso_total}}
#### Mini-ejemplo
Un bloque de 10 kg en una rampa no ejerce una fuerza de 10 sobre el plano, sino de 98.1 N (su peso).

### Error 4: Inversión trigonométrica
#### ¿Por qué parece correcto?
Muchos libros asocian siempre el eje X con el coseno, induciendo a error en el plano inclinado estándar.
#### ¿Por qué es incorrecto?
Si el ángulo [[theta]] se mide respecto a la horizontal, la fuerza que tira hacia abajo del plano es la componente del SENO.
#### Señal de detección
Obtener un esfuerzo nulo para una rampa vertical o un esfuerzo máximo para una rampa horizontal.
#### Corrección conceptual
La componente paralela responsable del movimiento es:
{{f:descomposicion_paralela}}
#### Mini-ejemplo
En una rampa casi vertical, el seno es casi 1 (todo el peso tira hacia abajo), mientras que el coseno es casi 0.

## Errores de interpretación

### Error 5: Rendimiento mayor al 100%
#### ¿Por qué parece correcto?
Errores de redondeo o mala aplicación de la fórmula de rendimiento [[eta]] pueden dar resultados superiores a 1.
#### ¿Por qué es incorrecto?
Viola la segunda ley de la termodinámica. Ninguna máquina real puede devolver más energía de la que recibe.
#### Señal de detección
Un valor de [[eta]] superior a la unidad en los resultados finales.
#### Corrección conceptual
Revisar el balance de energía: el trabajo de salida siempre es menor o igual al de entrada.
#### Mini-ejemplo
Si calculas que una rampa devuelve 120 J habiendo aplicado 100 J, hay un error de signo o concepto.

## Regla de autocontrol rápido
- [ ] **Coherencia de la Normal**: ¿Es tu fuerza normal [[N]] menor o igual que el peso total [[W]]?
- [ ] **Consistencia del esfuerzo**: ¿Es el esfuerzo aplicado [[P]] menor que el peso [[W]] en condiciones ideales?
- [ ] **Balance energético**: ¿Es el trabajo de entrada (P * L) mayor o igual que la ganancia de energía potencial (W * h)?
- [ ] **Rendimiento**: ¿Es el rendimiento [[eta]] menor o igual al 100%?

### Registro de fórmulas de corrección

Componente de Deslizamiento:
{{f:descomposicion_paralela}}

Fuerza de Reacción de la Superficie:
{{f:normal_plano}}

Cálculo del Rozamiento Real:
{{f:fuerza_rozamiento}}
