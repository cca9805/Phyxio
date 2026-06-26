# Errores comunes: movimiento del centro de masas

## Errores conceptuales

### Error 1: Creer que las fuerzas internas afectan la aceleración del CM

**Por qué parece correcto:**
Dentro de una explosión todo cambia, así que el CM debería acelerarse.

**Por qué es incorrecto:**
Por la tercera ley de Newton, las fuerzas internas se cancelan. Solo la fuerza externa neta acelera el CM.

**Señal de detección:**
El alumno incluye la fuerza de la explosión en el balance de [[F_ext]].

**Corrección conceptual:**
Identificar fuerzas internas (entre partes del sistema) e identificar las fuerzas externas (desde fuera del sistema) antes de aplicar la ley:

{{f:newton_cm}}

**Mini-ejemplo de contraste:**
Proyectil que explota en vuelo: las fuerzas de la explosión son internas. El CM sigue la misma trayectoria parabólica que tenía antes de explotar.

## Errores de modelo

### Error 2: Aplicar la ley de Newton cuando la masa del sistema cambia

**Por qué parece correcto:**
La segunda ley siempre se asocia a la expresión de fuerza igual a masa por aceleración, así que parece correcto usarla sin más en cualquier escenario.

**Por qué es incorrecto:**
Si la masa del sistema varía (cohete, cadena que cae), la forma correcta es el ritmo de cambio del momento:

{{f:newton_general_momentum}}

Dicha forma incluye el término de variación de masa `dm/dt`.

**Señal de detección:**
El alumno divide la fuerza entre la masa instantánea sin incluir el término del flujo de momento.

**Corrección conceptual:**
Usar la expansión para masa variable:

{{f:variable_mass_expansion}}

**Mini-ejemplo de contraste:**
Cohete: En ausencia de fuerzas externas, la variación de momento es nula:

{{f:rocket_momentum_balance}}

Ignorar el segundo término elimina el empuje necesario para la propulsión.

## Errores matemáticos

### Error 3: Confundir velocidad del CM con velocidad de una de las partículas

**Por qué parece correcto:**
Si una partícula es mucho más pesada, su velocidad parece ser la del CM.

**Por qué es incorrecto:**
La definición cinemática requiere un promedio ponderado por inercia:

{{f:vcm_weighted_average}}

Incluso si una masa domina, la otra contribuye y el resultado difiere del valor individual.

**Señal de detección:**
El alumno asume que la velocidad del CM es igual a la de la partícula 1 sin calcular la media ponderada de todo el conjunto.

**Corrección conceptual:**
Calcular siempre la velocidad del CM para el sistema binario usando las velocidades individuales [[v1]] y [[v2]]:

{{f:vcm_two_bodies}}

Y comparar con [[v1]] para cuantificar la diferencia.

**Mini-ejemplo de contraste:**
Masas de 10 kg a 5 m/s y 1 kg a 50 m/s. El cálculo arroja `9.1` m/s, no 5 m/s.

## Errores de interpretación

### Error 4: Interpretar la trayectoria del CM como la trayectoria de cada fragmento

**Por qué parece correcto:**
Si el CM sigue una parábola, cada fragmento debería hacer lo mismo.

**Por qué es incorrecto:**
Cada fragmento tiene su propia trayectoria según la velocidad que recibió en la separación. Solo el CM mantiene la trayectoria original.

**Señal de detección:**
El alumno incluye fragmentos cayendo por la misma parábola.

**Corrección conceptual:**
Dibujar la trayectoria del CM (parábola) y las de los fragmentos por separado, verificando que la media ponderada sigue en la parábola original.

**Mini-ejemplo de contraste:**
Proyectil que se parte en dos: uno cae vertical y el otro sale rasante. El CM sigue la parábola, pero ninguno de los dos fragmentos la recorre.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica esta lista de comprobación:

1. **Unidades**: ¿el resultado tiene las dimensiones esperadas?
2. **Signo**: ¿el signo es coherente con la dirección elegida en el diagrama?
3. **Orden de magnitud**: ¿el valor es físicamente razonable para el escenario?
4. **Caso límite**: ¿la fórmula se reduce a un resultado conocido cuando un parámetro tiende a cero o a infinito?
