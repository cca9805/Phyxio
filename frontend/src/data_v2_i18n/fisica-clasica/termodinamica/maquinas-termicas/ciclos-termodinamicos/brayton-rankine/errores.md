# Errores frecuentes — Ciclos Brayton y Rankine

## Errores conceptuales

### Error 1: Confundir el rendimiento del ciclo con el de Carnot

**Por qué parece correcto**
El alumno calcula el rendimiento de Carnot entre [[T_H]] y [[T_C]] y lo presenta directamente como el rendimiento del ciclo Brayton o Rankine. El ciclo de Carnot es el ciclo de referencia teórico, y su fórmula es sencilla, por lo que parece razonable aplicarla directamente.

**Por qué es incorrecto**
El rendimiento de Carnot es un límite superior teórico, no el rendimiento del ciclo analizado. El ciclo Brayton con las mismas temperaturas límite tiene un [[eta_th]] significativamente menor porque los procesos de adición y rechazo de calor no son isotérmicos: se producen a temperatura variable, lo que reduce la eficiencia media del ciclo.

**Señal de detección**
Si el resultado de [[eta_th]] para un ciclo Brayton industrial con [[r_p]] de 15 supera el 60 %, es probable que se haya calculado Carnot en lugar del Brayton.

**Corrección conceptual**
Para el ciclo Brayton ideal usar la fórmula con [[r_p]] y [[gamma]]. Para el ciclo Rankine usar el cociente [[W_neto]] sobre [[Q_H]]. El rendimiento de Carnot sirve únicamente como cota superior de referencia para comprobar coherencia.

**Mini-ejemplo de contraste**
Un ciclo Brayton con [[r_p]] de 15 y [[gamma]] de 1.40 tiene un rendimiento teórico de aproximadamente 53 %. Si el alumno calcula el Carnot entre 300 K y 1500 K obtiene 80 %. La diferencia de 27 puntos porcentuales evidencia que son ciclos distintos con rendimientos distintos.

## Errores de modelo

### Error 2: Usar temperaturas en Celsius en lugar de kelvin

**Por qué parece correcto**
El alumno usa temperaturas en Celsius directamente en las fórmulas de rendimiento porque los enunciados de problemas industriales suelen expresar las temperaturas en esa escala. El procedimiento parece directo y natural.

**Por qué es incorrecto**
Las fórmulas de rendimiento termodinámico requieren temperatura absoluta en kelvin. Usar Celsius produce resultados sin sentido físico: un ciclo con [[T_H]] de 300 °C y [[T_C]] de 50 °C daría un rendimiento de Carnot erróneo del 83 %, cuando el correcto con kelvin es 43.6 %.

**Señal de detección**
Si [[eta_th]] supera el 60 % para condiciones de vapor convencionales, sospechar inmediatamente que las temperaturas se han usado en Celsius en lugar de kelvin.

**Corrección conceptual**
Añadir 273.15 K a cada temperatura en Celsius antes de cualquier sustitución numérica. Desarrollar el hábito de convertir como primer paso sistemático antes de aplicar cualquier fórmula termodinámica.

**Mini-ejemplo de contraste**
Con [[T_H]] de 300 °C y [[T_C]] de 50 °C: en Celsius se obtiene erróneamente un rendimiento de Carnot de 83 %. En kelvin (573 K y 323 K), el rendimiento correcto es 43.6 %. La diferencia de casi 40 puntos porcentuales muestra que el error de unidades produce resultados físicamente absurdos.

## Errores matemáticos

### Error 3: Ignorar el trabajo del compresor en el ciclo Brayton

**Por qué parece correcto**
El alumno calcula el rendimiento del Brayton usando solo el trabajo de la turbina en el numerador, sin restar el trabajo consumido por el compresor. En el ciclo Rankine el trabajo de la bomba es despreciable, y parece razonable trasladar esa simplificación al Brayton.

**Por qué es incorrecto**
En el ciclo Brayton, el compresor puede consumir entre el 40 % y el 60 % del trabajo bruto de la turbina. [[W_neto]] es la diferencia: trabajo de turbina menos trabajo de compresor. Ignorar el compresor sobreestima gravemente el trabajo útil y el rendimiento.

**Señal de detección**
Un [[eta_th]] del Brayton superior al 75 % con parámetros normales indica que muy probablemente se ha omitido el trabajo del compresor.

**Corrección conceptual**
Aplicar siempre el balance energético completo. Para el Brayton ideal: trabajo de turbina proporcional a la diferencia de temperaturas en la expansión; trabajo de compresor proporcional a la diferencia de temperaturas en la compresión. [[W_neto]] es la diferencia de ambos.

**Mini-ejemplo de contraste**
Un ciclo Brayton con trabajo de turbina de 500 kJ/kg y trabajo de compresor de 250 kJ/kg tiene [[W_neto]] de 250 kJ/kg. Si se omite el compresor, se declara un trabajo de 500 kJ/kg, el doble del real, y el rendimiento calculado también se duplica erróneamente.

## Errores de interpretación

### Error 4: Confundir [[r_p]] del Brayton con la relación de compresión del Otto

**Por qué parece correcto**
El alumno usa la definición de relación de compresión volumétrica del ciclo Otto en la fórmula del Brayton, o aplica la fórmula del Otto con [[r_p]] del Brayton. Ambos ciclos tienen compresión y expansión adiabáticas y fórmulas de rendimiento con estructura similar.

**Por qué es incorrecto**
En el ciclo Otto, el parámetro de eficiencia es la relación de compresión volumétrica (cociente de volúmenes). En el ciclo Brayton, el parámetro es [[r_p]] (cociente de presiones). Las fórmulas son distintas y no son intercambiables. Mezclarlas produce resultados completamente erróneos.

**Señal de detección**
Si el enunciado menciona turbina de gas o compresor axial y el parámetro dado es una relación de presiones, se trata de un ciclo Brayton, no de un ciclo Otto. Si el resultado no coincide con los órdenes de magnitud esperados del Brayton, verificar qué fórmula se ha aplicado.

**Corrección conceptual**
Verificar siempre qué ciclo se está analizando y qué parámetro caracteriza ese ciclo específico. Para el Brayton, el único parámetro de eficiencia es [[r_p]] junto con [[gamma]]. Para el Otto, el parámetro es la relación de compresión volumétrica.

**Mini-ejemplo de contraste**
Con un valor de 10 aplicado a la fórmula del Otto se obtiene un rendimiento de 60.2 % (relación volumétrica). Con [[r_p]] de 10 en la fórmula del Brayton se obtiene 48.2 %. Los resultados difieren en 12 puntos porcentuales porque son fórmulas y ciclos distintos.

## Regla de autocontrol rápido

### Error 5: Asumir que [[Q_C]] puede ser nulo para maximizar el rendimiento

**Por qué parece correcto**
El alumno argumenta que si se diseñara el ciclo para rechazar el mínimo calor posible al foco frío, el rendimiento podría acercarse al 100 %. La fórmula sugiere que si [[Q_C]] tiende a cero, [[W_neto]] tiende a [[Q_H]] y el rendimiento tiende a uno. El razonamiento algebraico parece correcto.

**Por qué es incorrecto**
La segunda ley de la termodinámica en su enunciado de Kelvin-Planck prohíbe un ciclo que opera entre dos focos y no rechaza calor al foco frío. [[Q_C]] nunca puede ser nulo en un ciclo real. El enunciado de Clausius establece que el calor no fluye espontáneamente de frío a caliente, lo que implica que el foco frío siempre recibirá calor.

**Señal de detección**
Siempre que [[eta_th]] calculado supere el rendimiento de Carnot entre las temperaturas del enunciado, existe un error conceptual o numérico que invalida el resultado.

**Corrección conceptual**
Calcular el rendimiento de Carnot entre [[T_H]] y [[T_C]] para encontrar el límite máximo teórico. Ese límite siempre es menor que 1 mientras [[T_C]] sea mayor que 0 K. Cualquier ciclo real opera por debajo de ese límite.

**Mini-ejemplo de contraste**
Entre [[T_H]] de 1500 K y [[T_C]] de 300 K, el Carnot da 80 %. Cualquier resultado de [[eta_th]] superior a 80 % para esas temperaturas es automáticamente inválido: la segunda ley lo prohíbe, independientemente del diseño del ciclo.
