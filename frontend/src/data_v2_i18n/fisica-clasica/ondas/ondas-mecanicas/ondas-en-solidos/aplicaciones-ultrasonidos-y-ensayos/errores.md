## Errores conceptuales


### Error 1: Confundir la velocidad ultrasónica con la frecuencia del transductor

**Por qué parece correcto**

El alumno observa que equipos con transductores de distinta frecuencia se usan para detectar defectos diferentes y concluye que la frecuencia del transductor es lo que cambia [[v_us]] en el material. La analogía con la luz (donde la velocidad cambia con la longitud de onda en medios dispersivos) refuerza esta generalización errónea.

**Por qué es incorrecto**

[[v_us]] es una propiedad del material (depende de su módulo elástico y su densidad) y no del transductor. La frecuencia del transductor determina la longitud de onda y, por tanto, la resolución del ensayo, pero no altera la velocidad de propagación en sólidos metálicos no dispersivos. Para un acero dado a temperatura constante, [[v_us]] es idéntica independientemente de si el transductor opera a 1 MHz o a 10 MHz.

**Señal de detección**

El alumno intenta ajustar [[v_us]] del material cambiando la frecuencia en el formulario de la calculadora, o calcula dos profundidades distintas para el mismo defecto usando las mismas [[t_vuelo]] pero distintas frecuencias del transductor.

**Corrección conceptual**

La frecuencia del transductor selecciona la longitud de onda y la resolución, no la velocidad. Para cambiar [[v_us]], habría que cambiar el material o su temperatura. Consultar siempre el valor de [[v_us]] en tablas del material específico a la temperatura de ensayo.

**Mini-ejemplo de contraste**

Si se ensaya la misma pieza de acero a 2 MHz y a 10 MHz, ambos ensayos deben producir exactamente el mismo [[d_defecto]] para el mismo defecto. Si el resultado difiere, el error está en la calibración del equipo, no en [[v_us]].

---


### Error 2: Creer que mayor [[coeficiente_de_reflexion_acustica]] implica siempre mayor peligrosidad del defecto

**Por qué parece correcto**

Un eco de mayor amplitud en el A-scan parece indicar un defecto más severo. Como [[coeficiente_de_reflexion_acustica]] gobierna la amplitud del eco, se establece la equivalencia mental: más [[coeficiente_de_reflexion_acustica]] es igual a más peligro.

**Por qué es incorrecto**

[[coeficiente_de_reflexion_acustica]] mide el contraste acústico en la interfaz del defecto, no su peligrosidad mecánica. Una fisura muy pequeña llena de aire produce [[coeficiente_de_reflexion_acustica]] próximo a 1 (eco máximo) pero puede ser mecánicamente irrelevante. Una inclusión de material duro con [[impedancia_acustica]] parecida a la del acero puede tener [[coeficiente_de_reflexion_acustica]] casi nulo (eco mínimo) y aun así ser peligrosa por su fragilidad o por la concentración de tensiones que genera.

**Señal de detección**

El alumno ordena defectos por peligrosidad tomando únicamente la amplitud del eco como criterio, ignorando el tamaño, la orientación y la naturaleza del defecto.

**Corrección conceptual**

La peligrosidad de un defecto se evalúa con criterios de mecánica de fractura (tamaño crítico, factor de intensidad de tensiones) que requieren conocer el tamaño, la geometría y la posición del defecto, no solo su contraste acústico. [[coeficiente_de_reflexion_acustica]] informa sobre la naturaleza de la interfaz, no sobre la criticidad estructural.

**Mini-ejemplo de contraste**

Un poro esférico de 0.1 mm de diámetro lleno de aire tiene [[coeficiente_de_reflexion_acustica]] próximo a 1 pero es indetectable en la práctica por ser más pequeño que la longitud de onda. Una inclusión plana de 5 mm de espesor de material cerámico puede tener [[coeficiente_de_reflexion_acustica]] de 0.3 y ser estructuralmente crítica por delaminar bajo carga.

## Errores de modelo


### Error 3: Aplicar la fórmula de tiempo de vuelo sin tener en cuenta el doble recorrido

**Por qué parece correcto**

La fórmula de posición con velocidad constante que se aprende en cinemática es posición igual a velocidad por tiempo. El alumno aplica directamente esta regla sin recordar que el pulso ultrasónico recorre la distancia al defecto dos veces.

**Por qué es incorrecto**

El [[t_vuelo]] medido es el tiempo total desde la emisión hasta la recepción del eco. En ese tiempo, el pulso recorre el camino de ida hasta el defecto y el camino de vuelta de regreso al transductor. El resultado correcto para [[d_defecto]] requiere dividir entre 2 el producto de [[v_us]] por [[t_vuelo]]. Omitir el factor 2 produce una profundidad exactamente el doble de la real.

**Señal de detección**

El valor de [[d_defecto]] calculado supera el espesor nominal de la pieza, lo que físicamente es imposible. También se detecta si el eco de la pared trasera produce una profundidad igual al doble del espesor medido por otros medios.

**Corrección conceptual**

El pulso hace un viaje de ida y vuelta. La distancia al defecto es la mitad del camino total recorrido. La fórmula correcta divide entre 2 para obtener [[d_defecto]] a partir del tiempo total.

**Mini-ejemplo de contraste**

Una pieza de acero de 50 mm de espesor con [[v_us]] de 5900 m/s tiene su eco de pared trasera a aproximadamente 16.9 µs. Sin el factor 2, el cálculo daría una "profundidad" de 100 mm, que es el doble del espesor real y físicamente imposible para el eco de la pared trasera.

## Errores matemáticos


### Error 4: Inconsistencia de unidades entre [[t_vuelo]] y [[v_us]]

**Por qué parece correcto**

Los equipos de ultrasonidos muestran [[t_vuelo]] en microsegundos porque son los valores más legibles para el operador. El alumno toma ese valor directamente y lo multiplica por [[v_us]] en m/s, olvidando que las unidades no son compatibles sin conversión.

**Por qué es incorrecto**

La fórmula de [[d_defecto]] requiere que [[t_vuelo]] esté en segundos cuando [[v_us]] está en m/s para obtener [[d_defecto]] en metros. Si [[t_vuelo]] se introduce en microsegundos sin convertir, el resultado es un millón de veces mayor que el valor real: un defecto a 25 mm aparecería como si estuviera a 25 km.

**Señal de detección**

El resultado de [[d_defecto]] es varios órdenes de magnitud mayor que el espesor de la pieza. Por ejemplo, [[d_defecto]] de 25 000 m o de 25 km para una pieza de acero.

**Corrección conceptual**

Antes de multiplicar, convertir [[t_vuelo]] de microsegundos a segundos dividiendo entre un millón, o bien ajustar [[v_us]] a m/µs (que vale aproximadamente 5.9 mm/µs para acero), manteniendo la coherencia dimensional en todo el cálculo.

**Mini-ejemplo de contraste**

Con [[v_us]] de 5900 m/s y [[t_vuelo]] de 8.5 µs sin convertir, se obtiene un producto de 50 150, que en unidades mezcladas no tiene sentido físico. Convirtiendo correctamente a 8.5×10⁻⁶ s, el producto da 0.050 m, y dividiendo entre 2 resulta [[d_defecto]] de 0.025 m (25 mm), que es el valor correcto.

## Errores de interpretación


### Error 5: Interpretar el signo de [[coeficiente_de_reflexion_acustica]] como dirección de propagación

**Por qué parece correcto**

En física, el signo de una magnitud a menudo indica dirección (positivo hacia la derecha, negativo hacia la izquierda). El alumno aplica esta convención y concluye que [[coeficiente_de_reflexion_acustica]] negativo significa que el eco viaja en dirección contraria o que la onda se transmite hacia el interior en lugar de reflejarse.

**Por qué es incorrecto**

El signo de [[coeficiente_de_reflexion_acustica]] indica si la onda reflejada está en fase o en contrafase con la incidente, es decir, si hay inversión de fase en la reflexión. Un [[coeficiente_de_reflexion_acustica]] negativo significa que el segundo medio es acústicamente más blando que el primero (menor [[impedancia_acustica]]), y la onda reflejada tiene presión de signo opuesto. No indica dirección de propagación: la onda reflejada siempre viaja de vuelta hacia el transductor independientemente del signo de [[coeficiente_de_reflexion_acustica]].

**Señal de detección**

El alumno escribe que con [[coeficiente_de_reflexion_acustica]] negativo la onda "no regresa al transductor" o que "la energía solo se transmite y no se refleja". También puede calcular la fracción de energía reflejada usando [[coeficiente_de_reflexion_acustica]] negativo directamente en lugar de su módulo al cuadrado.

**Corrección conceptual**

El módulo de [[coeficiente_de_reflexion_acustica]] al cuadrado da la fracción de intensidad reflejada; el módulo de [[coeficiente_de_reflexion_acustica]] (siempre positivo) da la fracción de amplitud reflejada. El signo solo indica la polaridad del eco. La onda reflejada siempre existe cuando [[coeficiente_de_reflexion_acustica]] es distinto de cero, independientemente de su signo.

**Mini-ejemplo de contraste**

En la interfaz agua-aire (siendo el segundo medio el aire, más blando), [[coeficiente_de_reflexion_acustica]] es negativo y próximo a -1. Esto no implica que no haya reflexión; al contrario, casi toda la energía se refleja. La diferencia observable es que el eco llega con presión de signo opuesto al pulso original, algo que el equipo puede detectar invirtiendo la polaridad del pico en el A-scan.

## Regla de autocontrol rápido

Antes de dar por válido cualquier resultado en un ensayo ultrasónico, verificar estas cuatro condiciones:

1. **[[d_defecto]] es menor que el espesor nominal de la pieza**: si el resultado supera el espesor conocido, se ha cometido alguno de los errores anteriores (factor 2 omitido, unidades mezcladas o eco mal identificado).
2. **[[v_us]] es consistente con el material declarado**: el rango típico para metales estructurales va de 3000 m/s a 6500 m/s para ondas longitudinales. Un valor fuera de este rango requiere verificación inmediata de la calibración.
3. **El módulo de [[coeficiente_de_reflexion_acustica]] está entre 0 y 1**: un valor fuera de este rango indica error algebraico en el cálculo de [[impedancia_acustica]] de los dos medios o uso de unidades distintas para cada uno.
4. **Las unidades son coherentes**: [[t_vuelo]] en segundos, [[v_us]] en m/s y [[d_defecto]] en metros; o bien [[t_vuelo]] en µs, [[v_us]] en mm/µs y [[d_defecto]] en mm. Nunca mezclar.

Si alguna de estas cuatro condiciones falla, revisar desde el principio antes de reportar el resultado.