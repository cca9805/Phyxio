# Ejemplo tipo examen

## Enunciado

Un oscilador masa-muelle-amortiguador tiene [[m]] = 1,0 kg, [[k]] = 400 N/m y [[b]] = 4,0 N*s/m. Se aplica una fuerza sinusoidal de amplitud [[F0]] = 8,0 N y se quiere estudiar la resonancia de desplazamiento. Calcula la pulsación natural [[omega0]], la pulsación de resonancia [[omega_r]], el factor de calidad [[Q]] y la amplitud [[X]] cuando la fuerza trabaja en [[omega_f]] = 19,6 rad/s.

## Datos

Los datos del sistema son [[m]], [[k]] y [[b]]. La fuente externa queda caracterizada por [[F0]] y por la frecuencia de trabajo [[omega_f]]. Las incógnitas físicas son [[omega0]], [[omega_r]], [[Q]] y [[X]]. La pregunta no pide solo una amplitud: pide decidir si la frecuencia dada cae cerca del máximo de la curva.

## Definición del sistema

El sistema se modela como oscilador lineal forzado con amortiguamiento viscoso. La respuesta que interesa es estacionaria, por lo que se supone que el transitorio inicial ya ha desaparecido. La resonancia se analizará como máximo de [[X]] frente a [[omega_f]], no como una oscilación libre.

## Modelo físico

El modelo físico combina la curva de amplitud forzada, la localización del pico resonante y el factor de calidad. La fuerza externa fija la escala [[F0]], pero el pico lo determinan [[m]], [[k]] y [[b]]. Si [[omega_f]] queda cerca de [[omega_r]], la amplitud calculada debe interpretarse como respuesta en zona crítica.

## Justificación del modelo

El modelo es válido porque [[m]] y [[k]] fijan una escala oscilatoria estable, [[b]] introduce disipación positiva y [[F0]] actúa como excitación sinusoidal controlada. Bajo esas condiciones, la energía que entra en cada ciclo puede compararse con la energía disipada y la curva de [[X]] frente a [[omega_f]] tiene sentido físico. Si la amplitud calculada fuese demasiado grande para el montaje, habría que revisar la hipótesis lineal.

## Resolución simbólica

La amplitud estacionaria en función de la frecuencia se calcula con:

{{f:amplitud_respuesta}}

La posición del pico de desplazamiento se estima con:

{{f:frecuencia_resonancia}}

La selectividad del pico se evalúa mediante:

{{f:factor_calidad}}

La decisión de resonancia se formula comparando la frecuencia de trabajo con la posición del pico:

{{f:criterio_resonancia}}

## Sustitución numérica

Primero se estima la escala natural: [[omega0]] = sqrt(400/1,0) = 20 rad/s. Para localizar el pico, se calcula el término corrector del amortiguamiento: [[b]]^2/(2[[m]]^2) = 16/2 = 8 s^-2. Por tanto, [[omega_r]] = sqrt(400 - 8) = sqrt(392) ≈ 19,8 rad/s.

El factor de calidad vale [[Q]] = [[m]][[omega0]]/[[b]] = 1,0·20/4,0 = 5. Este valor indica un pico apreciable, pero no extremadamente estrecho. La frecuencia de trabajo [[omega_f]] = 19,6 rad/s queda muy cerca de [[omega_r]], así que el sistema trabaja en zona resonante.

Para calcular la amplitud en esa frecuencia, el término elástico menos inercial es [[k]] - [[m]][[omega_f]]^2 = 400 - 1,0·19,6^2 = 15,84 N/m. El término disipativo es [[b]][[omega_f]] = 4,0·19,6 = 78,4 N/m. El denominador dinámico vale aproximadamente sqrt(15,84^2 + 78,4^2) = 80,0 N/m. Entonces [[X]] ≈ 8,0/80,0 = 0,10 m.

## Validación dimensional

La pulsación [[omega_r]] tiene unidades de rad/s porque procede de una raíz de términos con dimensión s^-2. El factor [[Q]] es adimensional, ya que [[m]][[omega0]] y [[b]] tienen la misma dimensión. En la amplitud, [[F0]] se divide por una rigidez dinámica equivalente, por lo que el resultado queda en metros.

## Interpretación física

El resultado muestra una resonancia moderada: la frecuencia de trabajo está prácticamente en la posición del pico, y [[Q]] = 5 indica que el sistema es selectivo pero todavía disipativo. La amplitud de 0,10 m debe compararse con el rango admisible del montaje. Si esa deformación es excesiva, no basta con reducir la fuerza; también puede aumentarse [[b]] o desplazar el pico modificando [[m]] o [[k]].

La lectura clave es que no hemos declarado resonancia por ver una amplitud grande. La hemos declarado porque se calculó [[omega_r]], se comparó con [[omega_f]] y se verificó que el amortiguamiento permite un pico claro. Esa secuencia evita confundir fuerza forzada con resonancia.

# Ejemplo de aplicación real

## Contexto

Una máquina rotativa funciona cerca de 190 revoluciones por minuto y transmite vibración a una bancada. El equipo de mantenimiento observa que al variar ligeramente la velocidad la vibración cambia mucho. Se quiere saber si el problema corresponde a resonancia del soporte.

## Estimación física

Primero se convierte la velocidad a [[omega_f]] y se mide [[X]] tras esperar el régimen estacionario. Después se repite la medición para varias velocidades cercanas, manteniendo aproximadamente constante [[F0]]. Si la curva muestra un máximo reproducible y estrecho, se estima [[omega_r]]. Con ensayos de decaimiento o respuesta en frecuencia se aproxima [[b]] y se obtiene [[Q]].

## Interpretación

Si la velocidad nominal cae dentro del pico, la solución puede ser cambiar la velocidad de operación, añadir amortiguamiento, modificar la rigidez del soporte o cambiar la masa efectiva. Si la curva no tiene máximo claro, el problema puede ser desequilibrio, holgura o transitorio. El criterio de resonancia exige siempre curva, frecuencia crítica y lectura de amortiguamiento.
