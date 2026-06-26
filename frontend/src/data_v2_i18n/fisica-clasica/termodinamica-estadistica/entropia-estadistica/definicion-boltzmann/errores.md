## Errores conceptuales


### Error 1: Identificar [[entropia]] con desorden visual
**Por qué parece correcto**
Muchas explicaciones escolares usan dibujos de partículas mezcladas y ordenadas, así que parece natural asociar [[entropia]] con aspecto caótico.

**Por qué es incorrecto**
La definición de Boltzmann habla de [[numero_microestados]] compatibles con un macroestado, no de una impresión visual. Dos dibujos similares pueden representar multiplicidades muy distintas.

**Señal de detección**
El razonamiento usa frases como “se ve más desordenado” sin mencionar restricciones, macroestado ni [[numero_microestados]].

**Corrección conceptual**
Lee la [[entropia]] como accesibilidad microscópica: más formas compatibles implican mayor valor estadístico.

**Mini-ejemplo de contraste**
Un gas expandido en el doble de volumen puede parecer igual de homogéneo, pero permite muchos más microestados espaciales.


### Error 2: Pensar que más microestados producen crecimiento lineal
**Por qué parece correcto**
Si [[numero_microestados]] aumenta, parece lógico esperar que [[entropia]] aumente en la misma proporción.

**Por qué es incorrecto**
La relación es logarítmica. Multiplicar [[numero_microestados]] suma contribuciones de [[entropia]], no multiplica directamente la magnitud.

**Señal de detección**
El alumno duplica [[numero_microestados]] y duplica [[entropia]] sin usar

{{f:entropia_boltzmann}}

.

**Corrección conceptual**
Recuerda que el logaritmo comprime multiplicidades enormes y permite sumar entropías de sistemas independientes.

**Mini-ejemplo de contraste**
Pasar de 10³ a 10⁶ microestados no multiplica la [[entropia]] por mil; aumenta según el logaritmo del cociente.

## Errores de modelo


### Error 3: Comparar macrostados con reglas de conteo distintas
**Por qué parece correcto**
Parece que cualquier [[numero_microestados_inicial]] y [[numero_microestados_final]] pueden formar un [[ratio_microestados]].

**Por qué es incorrecto**
La [[delta_entropia]] exige que ambos conteos usen el mismo sistema, las mismas restricciones y la misma granularidad.

**Señal de detección**
La comparación mezcla partículas distinguibles en un estado e indistinguibles en el otro.

**Corrección conceptual**
Antes de usar

{{f:diferencia_entropia_boltzmann}}

, verifica que ambos conteos pertenecen al mismo modelo.

**Mini-ejemplo de contraste**
Comparar un gas clásico con un sistema cuántico sin adaptar el conteo produce un cociente artificial.


### Error 4: Aplicar la definición a un proceso sin macroestado definido
**Por qué parece correcto**
La fórmula parece universal y breve, así que se intenta aplicar a cualquier cambio.

**Por qué es incorrecto**
Sin macroestado claro, [[numero_microestados]] no representa un conjunto físico identificable.

**Señal de detección**
El enunciado no fija variables macroscópicas ni condiciones de compatibilidad.

**Corrección conceptual**
Define primero el macroestado y después cuenta microestados compatibles.

**Mini-ejemplo de contraste**
No basta decir “un gas se mueve”; hay que fijar energía, volumen, partículas u otras restricciones relevantes.

## Errores matemáticos


### Error 5: Usar [[numero_microestados]] nulo o negativo
**Por qué parece correcto**
En cálculos abstractos se manipulan números sin comprobar dominio.

**Por qué es incorrecto**
El logaritmo físico solo admite [[numero_microestados]] positivo. Cero significa que el macroestado no es accesible.

**Señal de detección**
Aparece logaritmo de 0, de un número negativo o de una multiplicidad sin unidades conceptuales claras.

**Corrección conceptual**
Exige [[numero_microestados]] > 0 antes de aplicar

{{f:entropia_boltzmann}}

.

**Mini-ejemplo de contraste**
Un macroestado imposible no tiene [[entropia]] calculable; se descarta o se redefine el modelo.


### Error 6: Confundir cociente con diferencia de microestados
**Por qué parece correcto**
La palabra variación sugiere restar cantidades finales e iniciales.

**Por qué es incorrecto**
La [[delta_entropia]] depende de [[ratio_microestados]], no de una resta simple entre [[numero_microestados_final]] y [[numero_microestados_inicial]].

**Señal de detección**
El alumno calcula una diferencia directa de conteos y luego la multiplica por [[k_boltzmann]].

**Corrección conceptual**
Usa el cociente de multiplicidades para medir cuántas veces cambia la accesibilidad.

**Mini-ejemplo de contraste**
Pasar de 10² a 10⁴ microestados y de 10⁶ a 10⁸ tiene el mismo cociente, aunque las restas sean diferentes.

## Errores de interpretación


### Error 7: Leer [[k_boltzmann]] como una probabilidad
**Por qué parece correcto**
Aparece en una fórmula estadística y puede confundirse con un factor de azar.

**Por qué es incorrecto**
[[k_boltzmann]] es una constante de escala con unidades; no mide probabilidad ni número de opciones.

**Señal de detección**
La explicación dice que [[k_boltzmann]] “aumenta la probabilidad” del macroestado.

**Corrección conceptual**
Interpreta [[k_boltzmann]] como puente entre conteo microscópico y [[entropia]] termodinámica.

**Mini-ejemplo de contraste**
Cambiar unidades no cambia el [[numero_microestados]], pero sí la forma numérica de la escala de [[entropia]].


### Error 8: Interpretar [[delta_entropia]] aislada del sistema
**Por qué parece correcto**
El signo de [[delta_entropia]] parece contener toda la información.

**Por qué es incorrecto**
El signo indica cambio de multiplicidad para el sistema considerado, pero no sustituye el análisis del entorno ni de las restricciones.

**Señal de detección**
Se concluye espontaneidad solo mirando [[delta_entropia]] del subsistema.

**Corrección conceptual**
Relaciona el signo con el [[ratio_microestados]] y revisa qué sistema se está comparando.

**Mini-ejemplo de contraste**
Un subsistema puede reducir su [[entropia]] mientras el conjunto sistema-entorno aumenta su multiplicidad total.

## Regla de autocontrol rápido

Antes de aceptar un resultado, comprueba tres cosas: todos los microestados son positivos, el conteo inicial y final usa la misma regla, y la lectura de [[entropia]] se hace como logaritmo de multiplicidad, no como desorden visual.