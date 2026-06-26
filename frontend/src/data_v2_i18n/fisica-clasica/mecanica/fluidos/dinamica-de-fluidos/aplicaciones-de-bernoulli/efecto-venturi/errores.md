# Errores comunes en el efecto Venturi

## Errores conceptuales

### Error 1: Creer que "más velocidad implica más presión"
**Por qué parece correcto**: Existe la intuición cotidiana de que un fluido que se mueve rápido tiene "más fuerza" o "empuja más fuerte" contra lo que se cruza en su camino.
**Por qué es incorrecto**: La presión estática es una medida de la energía potencial del fluido. Para ganar energía cinética (velocidad), el fluido debe "pagar" con su energía de presión. Si la velocidad aumenta, la presión disminuye para conservar la energía total.
**Señal de detección**: Obtener una presión [[p2]] mayor que [[p1]] en un estrechamiento horizontal.
**Corrección conceptual**: Recuerda que la presión es la causa de la aceleración; se necesita una presión alta detrás y baja delante para empujar el fluido hacia adelante.
**Mini-ejemplo**: Al soplar entre dos hojas de papel, estas se juntan en lugar de separarse, porque el aire rápido entre ellas crea una zona de baja presión.

### Error 2: Confundir caudal con velocidad
**Por qué parece correcto**: Se tiende a pensar que si el espacio es más pequeño, el fluido "se amontona" y por tanto se frena, como en un atasco de tráfico.
**Por qué es incorrecto**: Los fluidos son continuos e incompresibles (en este modelo). Si el caudal [[Q]] no cambia, la misma cantidad de litros por segundo debe pasar por la sección ancha [[A1]] y la estrecha [[A2]]. La única forma es que el fluido corra más rápido en el estrechamiento.
**Señal de detección**: Pensar que la velocidad [[v2]] es menor que [[v1]] cuando el área disminuye.
**Corrección conceptual**: Aplica siempre la ecuación de continuidad antes de hacer cualquier balance de presiones: el producto [[A1]]·[[v1]] debe ser igual a [[A2]]·[[v2]] si el fluido es incompresible.
**Mini-ejemplo**: Al tapar parcialmente la salida de una manguera, el agua sale con más fuerza (velocidad), no se queda retenida dentro.

## Errores de modelo

### Error 1: Ignorar la cavitación
**Por qué parece correcto**: Los cálculos matemáticos de Bernoulli pueden arrojar presiones negativas muy grandes sin que la ecuación "se queje".
**Por qué es incorrecto**: Los líquidos tienen un límite físico llamado presión de vapor. Si la presión [[p2]] cae por debajo de este límite, el líquido se convierte en burbujas de vapor, rompiendo el flujo continuo.
**Señal de detección**: Resultados de presión absoluta cercanos a cero o negativos.
**Corrección conceptual**: Siempre verifica que $p_2$ sea mayor que la presión de vapor del fluido a esa temperatura.
**Mini-ejemplo**: En bombas industriales, el ruido de "golpeteo" (como piedras dentro del tubo) indica que el Venturi está cavitando y dañando el material.

### Error 2: Despreciar la viscosidad en tubos reales
**Por qué parece correcto**: El modelo de Bernoulli es mucho más sencillo de aplicar que las ecuaciones con pérdida de carga.
**Por qué es incorrecto**: En tubos reales, la fricción con las paredes consume energía. Esto hace que la presión no se recupere totalmente después del estrechamiento.
**Señal de detección**: La presión medida aguas abajo del Venturi es mucho menor que la presión de entrada [[p1]].
**Corrección conceptual**: Usa el modelo Venturi para tramos cortos y usa coeficientes de descarga para aplicaciones de ingeniería real.
**Mini-ejemplo**: Un medidor de Venturi real siempre tiene un pequeño error sistemático que obliga a multiplicarlo por un factor de corrección (aprox. 0.98).

## Errores matemáticos

### Error 1: Olvidar elevar al cuadrado las velocidades
**Por qué parece correcto**: Se asocia Bernoulli a una suma lineal de términos de energía.
**Por qué es incorrecto**: La energía cinética depende del cuadrado de la velocidad ($v^2$). Olvidar este exponente infravalora drásticamente el efecto de la caída de presión [[dp]] cuando la velocidad aumenta.
**Señal de detección**: Obtener diferencias de presión incoherentes con los órdenes de magnitud esperados en fluidos rápidos.
**Corrección conceptual**: Revisa siempre el exponente 2 en cada término cinético de la ecuación.
**Mini-ejemplo**: Si la velocidad se duplica, la caída de presión se multiplica por 4, no por 2.

## Errores de interpretación

### Error 1: Atribuir la caída de presión al rozamiento
**Por qué parece correcto**: En la vida diaria, asociamos "pérdida de presión" con "rozamiento" o "pérdida de energía".
**Por qué es incorrecto**: En el efecto Venturi ideal, la caída de presión [[dp]] no es una pérdida de energía, sino una transformación de energía potencial en cinética. La energía total se conserva.
**Señal de detección**: Creer que el fluido se calienta debido a la caída de presión en el estrechamiento.
**Corrección conceptual**: Entiende que la presión baja porque el fluido está "ocupado" moviéndose rápido, no porque haya rozado contra algo.
**Mini-ejemplo**: En un Venturi ideal, al volver a la sección ancha, la presión vuelve a su valor original [[p1]].

## Regla de autocontrol rápido
**"Menos área, más velocidad, menos presión"**. Si en tus resultados la sección más estrecha tiene una presión mayor que la sección ancha, el ejercicio está mal planteado casi con seguridad. Siempre verifica que la caída de presión [[dp]] sea positiva en el sentido del estrechamiento.