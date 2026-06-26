# Errores Comunes en el Marco del Centro de Masas

## Errores conceptuales

### Error 1: Creer que el CM debe coincidir con una partícula
**Por qué parece correcto**
El alumno tiende a buscar un objeto físico real como referencia, y le resulta contraintuitivo que el sistema de referencia más importante esté anclado en un punto del espacio vacío.

**Por qué es incorrecto**
El centro de masas es un promedio matemático de la distribución de materia. En un sistema de dos esferas separadas, el CM está en el segmento que las une, fuera de ambos cuerpos. El marco CM sigue a ese punto geométrico, no a las partículas.

**Señal de detección**
Intentar igualar la velocidad del marco [[vcm]] a la velocidad de una de las partículas ([[v1]] o [[v2]]) de forma sistemática.

**Corrección conceptual**
Define el CM como el "punto de equilibrio de la inercia". Es un punto virtual que representa al sistema completo.

**Mini-ejemplo de contraste**
En un sistema de dos masas iguales moviéndose en sentidos opuestos a 5 m/s, la [[vcm]] es 0 m/s. Ninguna partícula está en reposo, pero el marco CM sí lo está.

### Error 2: Confundir energía interna con energía total
**Por qué parece correcto**
Como el marco CM es el más "importante", el alumno asume que la energía medida allí ([[K_cm]]) es la única que tiene el sistema.

**Por qué es incorrecto**
Según el teorema de König, la energía total [[K_lab]] incluye la energía interna MÁS la energía de traslación del CM. Ignorar esta última viola la conservación de la energía en el laboratorio.

**Señal de detección**
Obtener un valor de [[K_cm]] igual a [[K_lab]] cuando el sistema se está desplazando globalmente (velocidad [[vcm]] no nula).

**Corrección conceptual**
Recuerda que [[K_cm]] es la energía "mínima" del sistema. El resto de la energía depende de la velocidad del observador.

**Mini-ejemplo de contraste**
Un proyectil que explota en el aire tiene una [[K_cm]] debida a la explosión, pero su [[K_lab]] sigue incluyendo la energía de su trayectoria parabólica original.

## Errores de modelo

### Error 3: Aplicar Galileo a velocidades lumínicas
**Por qué parece correcto**
La relación entre la velocidad interna [[u_i]], la velocidad de laboratorio [[v_i]] y la del centro de masas [[vcm]] se rige por la ley de transformación 

{{f:velocity_transformation}}

. Esta relación es tan sencilla que se aplica por inercia a cualquier escenario, incluyendo partículas subatómicas.

**Por qué es incorrecto**
A velocidades cercanas a *c*, las velocidades no se restan linealmente. Se debe usar la suma de velocidades de Einstein para asegurar que nada supere la velocidad de la luz.

**Señal de detección**
Calcular una velocidad relativa [[v_rel]] que resulte mayor que `3.0 × 10⁸` m/s.

**Corrección conceptual**
El modelo de este leaf es estrictamente clásico (Galileano). Para altas energías, el marco CM requiere cinemática relativista.

**Mini-ejemplo de contraste**
Dos fotones alejándose en sentidos opuestos tienen una velocidad relativa de *c*, no de 2c.

## Errores matemáticos

### Error 4: Promedio de velocidades sin ponderar
**Por qué parece correcto**
La intuición dicta que la velocidad "media" es ([[v1]] + [[v2]]) / 2.

**Por qué es incorrecto**
La física no promedia valores, promedia estados de movimiento. Una masa mayor tiene más influencia en la [[vcm]]. Se debe usar siempre la masa total [[M]] como denominador.

**Señal de detección**
Obtener el mismo valor de [[vcm]] para un sistema (1kg, 10kg) que para uno (5kg, 5kg) con las mismas velocidades iniciales.

**Corrección conceptual**
La [[vcm]] es el centro de masas en movimiento; si la masa no es igual, el CM está más cerca de la partícula más pesada.

**Mini-ejemplo de contraste**
Si un mosquito choca contra un tren, la [[vcm]] es prácticamente la velocidad del tren, no la media entre ambos.

## Errores de interpretación

### Error 5: Signos opuestos en el marco CM
**Por qué parece correcto**
El alumno olvida que el marco CM es el marco de "momento nulo" y asigna velocidades arbitrarias a las partículas.

**Por qué es incorrecto**
En el marco CM, para que la suma de momentos sea cero, las partículas DEBEN moverse en sentidos opuestos. Si ambas tienen el mismo signo de velocidad [[u_i]], el momento total no sería nulo.

**Señal de detección**
Dibujar vectores de velocidad interna [[u_i]] apuntando en la misma dirección.

**Corrección conceptual**
En el marco CM, el sistema siempre se ve como una "compresión" (se acercan) o una "expansión" (se alejan).

**Mini-ejemplo de contraste**
Si las masas son iguales, entonces las velocidades internas deben ser vectores opuestos (mismo módulo, sentido contrario). Si obtienes valores asimétricos, el cálculo es incorrecto.

## Regla de autocontrol rápido

Para verificar si tus resultados en el marco del centro de masas son coherentes, aplica la **Prueba del Momento Cero**: Multiplica cada masa por su velocidad interna calculada y súmalas:
Verifica siempre el balance:

{{f:u_balance}}

Si el resultado no es exactamente cero, has cometido un error en el cálculo de [[vcm]] o en la transformación de velocidades [[u_i]].
