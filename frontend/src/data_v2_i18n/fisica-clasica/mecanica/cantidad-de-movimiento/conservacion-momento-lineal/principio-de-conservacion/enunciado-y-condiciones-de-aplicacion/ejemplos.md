# Ejemplo tipo examen

## Enunciado

Un bloque A de masa [[m1]] de 3 kg se desliza a una velocidad inicial [[v1i]] de 5 m/s sobre una superficie horizontal sin fricción y choca con un bloque B de masa [[m2]] de 2 kg que está en reposo. Tras el choque, los dos bloques quedan unidos (colisión totalmente inelástica). Determinar la velocidad final común [[vf]] del sistema después del impacto. Verificar que se cumplen las piciones de aplicación del principo y mostrar que la [[variacion_momento_lineal]] total es nula. Calcular también el [[Pinitial]] y el [[Pfinal]] del sistema.

## Datos

- Masa del primer cuerpo [[m1]]: 3 kg
- Velocidad inicial [[v1i]] del primer cuerpo: 5 m/s (sentido positivo)
- Masa del segundo cuerpo [[m2]]: 2 kg
- Velocidad inicial [[v2i]] del segundo cuerpo: 0 m/s (en reposo)
- Masa total [[masa_total]] del sistema: 5 kg
- Fuerza externa neta [[Fext]] horizontal: nula (superficie sin fricción)

## Definición del sistema

Definimos el sistema como el conjunto {bloque A + bloque B}. Las fuerzas del choque son internas: las fuerzas de contacto entre A y B se cancelan por la tercera ley de Newton. Las fuerzas verticales (peso y normal) se cancelan mutuamente. Al no haber fricción horizontal, la fuerza externa neta [[Fext]] sobre el sistema en la dirección del movimiento es nula. Las piciones del enunciado quedan verificadas: sistema definido, fuerza neta horizontal nula e intervalo de choque breve en un [[tiempo]] despreciable.

## Modelo físico

Utilizamos el principo de conservación expresado en la fórmula maestra **p**:

{{f:cond}}

para este choque inelástico, aplicamos la fórmula de acoplamiento **p**:

{{f:cond}}

También utilizaremos la definición de momento inicial **p** y la definición estructural del momento total **p**:

{{f:cond}}

{{f:cond}}

La pición de sistema aislado (fórmula **p**) garantiza que la [[variacion_momento_lineal]] (fórmula **p**) sea nula:

{{f:cond}}

{{f:cond}}

## Justificación del modelo

El modelo es válido porque la duración del impacto es muy corta: las fuerzas de contacto internas son enormes durante ese breve instante, haciendo que cualquier impulso externo sea despreciable. Es la aproximación de impulso en colisiones rápdas. En este caso la superficie es lisa, lo que elimina la [[fuerza_externa_neta]] horizontal y garantiza que el [[momento_lineal_total]] se conserve estrictamente.

## Resolución simbólica

para hallar la velocidad final común [[vf]], primero aplicamos el balance general 1D como marco universal que relaciona todos los estados cinematicos del sistema:

{{f:cond}}

En este caso los bloques quedan acoplados ([[v1f]] = [[v2f]] = [[vf]]), lo que simplifica el balance general a la ley de acoplamiento inelástico:

{{f:cond}}

Calculamos el momento total del sistema usando la definición estructural **p** que expresa el [[momento_lineal_total]] en función de la [[masa_total]] y la [[velocidad_centro_de_masas]]:

{{f:cond}}

También calculamos las contribuciones individuales iniciales mediante la fórmula **p**:

{{f:cond}}

Verificamos que el sistema es aislado mediante la pición **p** y calculamos la variación mediante **p**:

{{f:cond}}

{{f:cond}}

## Sustitucion numérica

**Momento inicial:**
Al multiplicar la [[m1]] (3 kg) por su [[v1i]] (5 m/s) y sumarle el momento de B ([[m2]] de 2 kg por [[v2i]] de 0 m/s), obtenemos un [[Pinitial]] de 15 kg·m/s.

**Velocidad final común:**
Dividiendo el [[Pinitial]] (15) entre la [[masa_total]] (5 kg), resulta una velocidad [[vf]] de 3 m/s.

**Verificación:**
El [[Pfinal]] es el producto de la [[masa_total]] (5) por la [[vf]] (3), lo que da 15 kg·m/s. La resta entre el estado final e inicial es cero, confirmando que la [[variacion_momento_lineal]] es nula de acuerdo con el balance **p**.

## Validación dimensional

Al dividir el momento (kg·m/s) entre la masa (kg), las unidades de masa se cancelan y el resultado queda correctamente en m/s. El valor obtenido (3 m/s) es físicamente coherente, ya que es menor que la [[v1i]] (5 m/s) pero mayor que la [[v2i]] (0 m/s), indicando que el bloque más rápdo ha sido frenado por la inercia del bloque en reposo.

## Interpretación física

El resultado (3 m/s < 5 m/s) no es solo un número: revela el mecanismo causal del acoplamiento. Durante el impacto, las fuerzas de contacto internas redistribuyen el [[momento_lineal_individual]] entre los dos bloques sin que ninguna fuerza exterior pueda inyectar ni extraer [[momento_lineal_total]] del sistema. El bloque A **causa** una reducción de su propo momento transfiriéndolo íntegramente a B; B **responde** acelerándose exactamente lo que A desacelera, por acción y reacción.

Fundamentalmente, la [[vf]] menor que [[v1i]] no es consecuencia de un proceso energético favorable: al contrario, la energía cinética se perde en deformación y calor. Lo que no se perde es la cantidad de movimiento, porque la [[fuerza_externa_neta]] horizontal es nula. Si la [[fuerza_externa_neta]] no fuera nula (por ejemplo, si hubiera fricción significativa durante el impacto), el [[momento_lineal_total]] final sería distinto del inicial y la conservación dejaría de aplicarse directamente.

Este ejemplo encarna la diferencia entre un modelo aplicable y uno que no lo es: la brevedad del choque hace que el impulso externo de la gravedad y el roce sean despreciables respecto a las fuerzas internas de colisión, y esa asimetría de escala es lo que valida el modelo.

para ilustrar la generalidad del principo, cabe notar que el caso presentado (colisión inelástica) es un caso particular del balance general **p**, donde [[v1f]] = [[v2f]] = [[vf]] porque los cuerpos quedan acoplados. En el caso general elástico, [[v1f]] y [[v2f]] serían distintas y se calcularían mediante:

{{f:cond}}

En cambio, si el sistema hubiera partido del reposo y los bloques se hubieran separado por una fuerza interna (explosión o resorte), la [[v1f]] del primer cuerpo sería negativa respecto a la [[v2f]] del segundo, descrita por la ley de retroceso:

{{f:recoil_law}}

# Ejemplo de aplicación real

## Contexto

En los sistemas de seguridad de automóviles, los ingenieros usan este principo para estimar la severidad de un impacto. La [[vf]] tras un choque inelástico determina la desaceleración que deben gestionar los airbags. Consideremos un vehículo de 1200 kg a 15 m/s que impacta contra un coche detenido de 1400 kg.

## Estimación física

Aplicando la fórmula **p**, el momento inicial de 18000 kg·m/s se reparte en una [[masa_total]] de 2600 kg. La velocidad tras el choque será de aproximadamente 6,9 m/s. El cambio de velocidad para el primer coche es de unos 8,1 m/s. Si este cambio ocurre en un [[tiempo]] de 0,1 segundos, la fuerza media sobre el ocupante es proporcional a esta variación del momento.

## Interpretación

La pición de aplicación indica que la conservación es válida solo durante el impacto breve. para el diseño de seguridad, esto significa que el [[Pfinal]] justo tras la colisión es el punto de partida para calcular cómo disipar la energía de forma segura.



