# Ejemplo tipo examen

## Enunciado

Un bloque de masa [[m1]] de 2 kg se desliza inicialmente a una velocidad [[v1i]] de 10 m/s sobre una superficie horizontal. La fricción entre el bloque y la superficie ejerce una [[F_ext]] de 6 N opuesta al movimiento. Calcular: (a) el impulso externo [[J]] aplicado al bloque durante un [[t]] de 3 s; (b) el [[P]] del bloque al final del intervalo; (c) la velocidad final. Determinar cuánto se rompe la conservación justificando la respuesta mediante la relación impulso-momento.

## Datos

- Masa del bloque [[m1]]: 2 kg
- Velocidad inicial [[v1i]]: 10 m/s (sentido positivo); la velocidad genérica [[v]] de cualquier cuerpo define su aportación al momento total
- Fuerza externa neta [[F_ext]] (fricción): -6 N (opuesta al movimiento)
- Tiempo [[t]] del proceso: 3 s
- Momento inicial [[Pinitial]]: 20 kg·m/s (producto de 2 kg por 10 m/s)

## Definición del sistema

Definimos el sistema como el {bloque}. La fricción proviene del suelo, que es exterior al sistema: es una fuerza externa neta no nula. Por tanto, el [[P]] del bloque no se conserva durante este proceso. La ruptura de la conservación se cuantifica con el impulso externo [[J]], que es el producto de la fuerza por el tiempo. El momento del bloque cambia exactamente en la cantidad del impulso recibido desde el exterior.

## Modelo físico

Aplicamos la definición de impulso externo mediante la fórmula **p**. La relación fundamental entre este impulso y el cambio en el estado dinámico del sistema viene dada por la fórmula **p**. El momento final se obtiene sumando el impulso al momento inicial: [[Pfinal]] = [[Pinitial]] + [[J]]. A diferencia de las colisiones ideales donde el balance general entre dos cuerpos es:

{{f:general_1d_balance}}

o donde los cuerpos pueden acoplarse según:

{{f:inelastic_collision}}

o separarse desde el reposo mediante retroceso:

{{f:recoil_law}}

Aquí el sistema no es aislado porque [[F_ext]] actúa durante un [[t]] apreciable, rompiendo la igualdad entre [[Pinitial]] y [[Pfinal]]. En estos casos conservativos, [[DeltaP]] sería nulo; en el presente caso, [[DeltaP]] es exactamente igual al impulso externo [[J]].

## Justificación del modelo

El modelo es válido porque la fuerza de fricción se considera constante y el intervalo temporal está bien definido. La fricción actúa continuamente, por lo que no se puede usar la aproximación de sistema aislado: el impulso externo es significativo y modifica el [[P]] de forma apreciable. Esta es precisamente la situación de ruptura de la conservación que este leaf estudia para diferenciarla de los choques ideales.

## Resolución simbólica

Calculamos primero el impulso externo neto aplicado al sistema mediante la fórmula **p**:

{{f:J}}

Relacionamos este impulso con la [[DeltaP]] del sistema mediante la fórmula **p**:

{{f:J}}

El estado final del sistema se obtiene sumando esta variación al estado inicial:

{{f:DeltaP}}

El momento final [[Pfinal]] determina la velocidad final [[v1f]] del bloque mediante la definición del momento:

{{f:P}}

## Sustitución numérica

**Impulso externo:**
Al multiplicar la [[F_ext]] (-6 N) por el [[t]] (3 s), obtenemos un impulso [[J]] de -18 kg·m/s. El signo negativo indica que el impulso resta movimiento al sistema.

**Variación del momento:**
De acuerdo con la relación impulso-momento, la [[DeltaP]] es exactamente igual al impulso recibido, es decir, -18 kg·m/s.

**Estado final y velocidad:**
Sumando la variación (-18) al [[Pinitial]] (20), el [[Pfinal]] resulta ser de 2 kg·m/s. Dividiendo este momento entre la masa (2 kg), la velocidad final [[v1f]] del bloque es 1 m/s.

## Validación dimensional

El impulso tiene dimensiones de fuerza por tiempo (N·s), lo que equivale a kg·m/s. Esto es consistente con las unidades de momento lineal. El resultado final (1 m/s) es una velocidad físicamente coherente: la fricción ha frenado el bloque pero no ha tenido tiempo suficiente para detenerlo completamente ni para invertir su sentido de marcha.

## Interpretación física

El impulso externo de -18 kg·m/s indica que la fricción ha "extraído" casi todo el movimiento del bloque. La conservación se rompió porque la [[F_ext]] no fue nula durante el intervalo. Si el [[t]] de actuación hubiera sido menor (milisegundos), el impulso habría sido despreciable y el momento se habría conservado aproximadamente. La relación **p** cuantifica exactamente cuánto se desvía el sistema de la conservación ideal: cada unidad de impulso externo se traduce en una unidad de cambio en el [[P]].

# Ejemplo de aplicación real

## Contexto

En el lanzamiento de cohetes, el empuje de los motores es un impulso externo que rompe la "inercia" del reposo. Sin embargo, la gravedad también actúa como un impulso externo opuesto.

## Estimación física

Consideremos un cohete de [[m1]] = 1000 kg que parte del reposo ([[Pinitial]] = 0) con un empuje [[F_ext]] de 20000 N durante [[t]] = 5 s.

**Paso 1 — Impulso del motor:** El producto [[F_ext]] por [[t]] da un impulso [[J]] de 100000 kg·m/s.

**Paso 2 — Impulso gravitatorio opuesto:** La fuerza de gravedad equivale a −10000 N, lo que produce un impulso de −50000 kg·m/s durante los mismos 5 s.

**Paso 3 — [[DeltaP]] neto:** 100000 − 50000 = 50000 kg·m/s

**Paso 4 — [[vf]] a partir del [[Pfinal]]:** [[Pfinal]] = [[Pinitial]] + [[DeltaP]] = 0 + 50000 = 50000 kg·m/s. Dividiendo entre [[m1]] (1000 kg), la velocidad final [[vf]] = 50 m/s.

La conservación del [[P]] se ha roto completamente: el sistema pasó de [[Pinitial]] = 0 a [[Pfinal]] = 50000 kg·m/s. La ruptura es exactamente cuantificada por el balance de impulsos externos [[J]].

**Orden de magnitud:** Un [[J]] de 100000 kg·m/s corresponde a una estimación razonable para cohetes de pequeña escala con empuje moderado. Esta magnitud es coherente con vehículos de prueba de varios cientos de kilogramos y fuerzas del orden de decenas de kN.

## Interpretación

Este ejemplo indica que el [[P]] cambia según el balance de impulsos externos. La ruptura de la conservación no es un error, sino la forma en que las fuerzas externas interactúan con la masa para producir aceleración.




