# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-ideal-microscopico
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Gas ideal microscopico

## Errores conceptuales

### Error 1: Confundir [[temperatura]] con velocidad individual

**Por qué parece correcto**
Al calentar el gas, muchas partículas se mueven más rápido, así que parece natural decir que la [[temperatura]] es la velocidad.

**Por qué es incorrecto**
La [[temperatura]] se relaciona con la [[energia_cinetica_media]], no con la velocidad exacta de cada partícula. Hay una distribución de velocidades.

**Señal de detección**
El alumno afirma que todas las partículas tienen la misma [[velocidad_rms]].

**Corrección conceptual**
La [[velocidad_rms]] es una escala estadística, no una velocidad común obligatoria.

**Mini-ejemplo de contraste**
Dos gases a la misma [[temperatura]] tienen igual [[energia_cinetica_media]] traslacional media, pero distinta [[velocidad_rms]] si cambia la [[masa_particula]].

### Error 2: Pensar que la [[presion]] es una fuerza almacenada en el gas

**Por qué parece correcto**
La [[presion]] se nota como empuje sobre las paredes y puede parecer una fuerza interna quieta.

**Por qué es incorrecto**
La [[presion]] surge de choques microscópicos y transferencia de impulso, no de una fuerza estática única.

**Señal de detección**
Se explica la [[presion]] sin mencionar choques, [[numero_particulas]], [[volumen]] o movimiento.

**Corrección conceptual**
Relaciona la [[presion]] con impactos colectivos y con {{f:presion_microscopica_gas_ideal}}.

**Mini-ejemplo de contraste**
Si aumenta la [[temperatura]] a [[volumen]] fijo, los choques son más energéticos y la [[presion]] sube.

## Errores de modelo

### Error 3: Aplicar gas ideal a cualquier gas comprimido

**Por qué parece correcto**
La fórmula ideal es simple y suele funcionar en problemas introductorios.

**Por qué es incorrecto**
A alta [[presion]] o pequeño [[volumen]], el tamaño molecular y las interacciones no se pueden ignorar.

**Señal de detección**
El resultado predice [[presion]] ideal en condiciones cercanas a licuefacción.

**Corrección conceptual**
Usa el modelo ideal solo para gases diluidos y equilibrio térmico.

**Mini-ejemplo de contraste**
A baja densidad el helio se aproxima al ideal; cerca de licuarse necesita modelo real.

### Error 4: Usar el modelo monoatómico para todo gas

**Por qué parece correcto**
Muchas fórmulas del gas ideal parecen universales.

**Por qué es incorrecto**
La relación directa entre [[temperatura]] y [[energia_cinetica_media]] traslacional es limpia para partículas monoatómicas; gases poliatómicos almacenan energía en rotación o vibración.

**Señal de detección**
Se usa la misma energía interna para helio y dióxido de carbono sin matices.

**Corrección conceptual**
Distingue traslación de energía interna total.

**Mini-ejemplo de contraste**
El argón se ajusta mejor al modelo monoatómico que una molécula compleja caliente.

## Errores matemáticos

### Error 5: Usar grados Celsius como [[temperatura]]

**Por qué parece correcto**
El termómetro cotidiano usa grados Celsius y los números parecen manejables.

**Por qué es incorrecto**
Las relaciones con [[constante_boltzmann]] requieren [[temperatura]] absoluta en kelvin.

**Señal de detección**
A 0 °C se concluye que la [[energia_cinetica_media]] es nula.

**Corrección conceptual**
Convierte siempre a kelvin antes de aplicar {{f:energia_cinetica_media_temperatura}}.

**Mini-ejemplo de contraste**
0 °C corresponde a 273 K, por tanto hay energía cinética microscópica.

### Error 6: Olvidar la raíz en [[velocidad_rms]]

**Por qué parece correcto**
Como la energía crece con [[temperatura]], se piensa que la rapidez también crece igual.

**Por qué es incorrecto**
La energía cinética depende del cuadrado de la rapidez, así que [[velocidad_rms]] crece con raíz cuadrada.

**Señal de detección**
Al duplicar [[temperatura]], el alumno duplica la [[velocidad_rms]].

**Corrección conceptual**
Usa {{f:velocidad_cuadratica_media}} y revisa la dependencia cuadrática.

**Mini-ejemplo de contraste**
Si [[temperatura]] se cuadruplica, la [[velocidad_rms]] se duplica, no se cuadruplica.

## Errores de interpretación

### Error 7: Leer [[energia_cinetica_media]] como energía total del gas

**Por qué parece correcto**
La palabra energía invita a pensar en el sistema completo.

**Por qué es incorrecto**
[[energia_cinetica_media]] es energía por partícula, mientras que la energía total depende de [[numero_particulas]].

**Señal de detección**
Se compara una energía por partícula con energía macroscópica sin multiplicar por [[numero_particulas]].

**Corrección conceptual**
Distingue escala microscópica por partícula y suma colectiva.

**Mini-ejemplo de contraste**
Una partícula tiene energía del orden de 10^-21 J, pero un mol contiene muchísimas partículas.

### Error 8: Interpretar [[velocidad_rms]] como dirección de movimiento

**Por qué parece correcto**
La velocidad suele dibujarse con flechas en mecánica.

**Por qué es incorrecto**
[[velocidad_rms]] es una rapidez típica escalar, no un vector con dirección fija.

**Señal de detección**
Se asigna un signo positivo o negativo a [[velocidad_rms]].

**Corrección conceptual**
Léela como escala de rapidez asociada a la energía.

**Mini-ejemplo de contraste**
En equilibrio no hay dirección preferida, aunque las partículas se muevan muy rápido.

## Regla de autocontrol rápido

Antes de interpretar, revisa: [[temperatura]] en kelvin, magnitud por partícula o total, validez ideal, y si [[velocidad_rms]] se está usando como rapidez estadística, no como velocidad común.

