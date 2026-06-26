# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-ideal-microscopico
# Target response file: errores.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Microscopic Ideal Gas

## Conceptual errors

### Error 1: Confundir [[temperatura]] con velocidad individual

**Why it seems correct**
Al calentar el gas, muchas partículas se mueven más rápido, así que parece natural decir que la [[temperatura]] es la velocidad.

**Why it is incorrect**
La [[temperatura]] se relaciona con la [[energia_cinetica_media]], no con la velocidad exacta de cada partícula. Hay una distribución de velocidades.

**Detection signal**
El alumno afirma que todas las partículas tienen la misma [[velocidad_rms]].

**Conceptual correction**
La [[velocidad_rms]] es una escala estadística, no una velocidad común obligatoria.

**Mini-example of contrast**
Dos gases a la misma [[temperatura]] tienen igual [[energia_cinetica_media]] traslacional media, pero distinta [[velocidad_rms]] si cambia la [[masa_particula]].

### Error 2: Pensar que la [[presion]] es una fuerza almacenada en el gas

**Why it seems correct**
La [[presion]] se nota como empuje sobre las paredes y puede parecer una fuerza interna quieta.

**Why it is incorrect**
La [[presion]] surge de choques microscópicos y transferencia de impulso, no de una fuerza estática única.

**Detection signal**
Se explica la [[presion]] sin mencionar choques, [[numero_particulas]], [[volumen]] o movimiento.

**Conceptual correction**
Relaciona la [[presion]] con impactos colectivos y con {{f:presion_microscopica_gas_ideal}}.

**Mini-example of contrast**
Si aumenta la [[temperatura]] a [[volumen]] fijo, los choques son más energéticos y la [[presion]] sube.

## Model errors

### Error 3: Aplicar gas ideal a cualquier gas comprimido

**Why it seems correct**
La fórmula ideal es simple y suele funcionar en problemas introductorios.

**Why it is incorrect**
A alta [[presion]] o pequeño [[volumen]], el tamaño molecular y las interacciones no se pueden ignorar.

**Detection signal**
El resultado predice [[presion]] ideal en condiciones cercanas a licuefacción.

**Conceptual correction**
Usa el modelo ideal solo para gases diluidos y equilibrio térmico.

**Mini-example of contrast**
A baja densidad el helio se aproxima al ideal; cerca de licuarse necesita modelo real.

### Error 4: Usar el modelo monoatómico para todo gas

**Why it seems correct**
Muchas fórmulas del gas ideal parecen universales.

**Why it is incorrect**
La relación directa entre [[temperatura]] y [[energia_cinetica_media]] traslacional es limpia para partículas monoatómicas; gases poliatómicos almacenan energía en rotación o vibración.

**Detection signal**
Se usa la misma energía interna para helio y dióxido de carbono sin matices.

**Conceptual correction**
Distingue traslación de energía interna total.

**Mini-example of contrast**
El argón se ajusta mejor al modelo monoatómico que una molécula compleja caliente.

## Mathematical errors

### Error 5: Usar grados Celsius como [[temperatura]]

**Why it seems correct**
El termómetro cotidiano usa grados Celsius y los números parecen manejables.

**Why it is incorrect**
Las relaciones con [[constante_boltzmann]] requieren [[temperatura]] absoluta en kelvin.

**Detection signal**
A 0 °C se concluye que la [[energia_cinetica_media]] es nula.

**Conceptual correction**
Convierte siempre a kelvin antes de aplicar {{f:energia_cinetica_media_temperatura}}.

**Mini-example of contrast**
0 °C corresponde a 273 K, por tanto hay energía cinética microscópica.

### Error 6: Olvidar la raíz en [[velocidad_rms]]

**Why it seems correct**
Como la energía crece con [[temperatura]], se piensa que la rapidez también crece igual.

**Why it is incorrect**
La energía cinética depende del cuadrado de la rapidez, así que [[velocidad_rms]] crece con raíz cuadrada.

**Detection signal**
Al duplicar [[temperatura]], el alumno duplica la [[velocidad_rms]].

**Conceptual correction**
Usa {{f:velocidad_cuadratica_media}} y revisa la dependencia cuadrática.

**Mini-example of contrast**
Si [[temperatura]] se cuadruplica, la [[velocidad_rms]] se duplica, no se cuadruplica.

## Interpretation errors

### Error 7: Leer [[energia_cinetica_media]] como energía total del gas

**Why it seems correct**
La palabra energía invita a pensar en el sistema completo.

**Why it is incorrect**
[[energia_cinetica_media]] es energía por partícula, mientras que la energía total depende de [[numero_particulas]].

**Detection signal**
Se compara una energía por partícula con energía macroscópica sin multiplicar por [[numero_particulas]].

**Conceptual correction**
Distingue escala microscópica por partícula y suma colectiva.

**Mini-example of contrast**
Una partícula tiene energía del orden de 10^-21 J, pero un mol contiene muchísimas partículas.

### Error 8: Interpretar [[velocidad_rms]] como dirección de movimiento

**Why it seems correct**
La velocidad suele dibujarse con flechas en mecánica.

**Why it is incorrect**
[[velocidad_rms]] es una rapidez típica escalar, no un vector con dirección fija.

**Detection signal**
Se asigna un signo positivo o negativo a [[velocidad_rms]].

**Conceptual correction**
Léela como escala de rapidez asociada a la energía.

**Mini-example of contrast**
En equilibrio no hay dirección preferida, aunque las partículas se muevan muy rápido.

## Quick self-control rule

Antes de interpretar, revisa: [[temperatura]] en kelvin, magnitud por partícula o total, validez ideal, y si [[velocidad_rms]] se está usando como rapidez estadística, no como velocidad común.

