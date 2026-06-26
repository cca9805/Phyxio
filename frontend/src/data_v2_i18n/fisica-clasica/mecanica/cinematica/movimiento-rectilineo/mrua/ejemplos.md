# Ejemplo tipo examen

## Enunciado

Un coche circula por autovía a 25 m/s (90 km/h) cuando el conductor avista un obstáculo y frena con aceleración [[a]] constante -5,0 m/s². Toma 0 en el punto de inicio del frenado.

Calcula: **(a)** el tiempo [[t]] que tarda en detenerse; **(b)** la distancia de frenado; **(c)** la posición [[x]] y la velocidad [[v]] a los 3 s de iniciar el frenado; **(d)** verifica el resultado de (b) mediante la velocidad media.

## Datos

| Símbolo | Significado | Valor |
|---|---|---|
| $v_0$ | velocidad inicial [[v0]] | $25\;\text{m/s}$ |
| $v$ | velocidad final (parada) | $0\;\text{m/s}$ |
| $a$ | aceleración (frenado) | $-5{,}0\;\text{m/s}^2$ |
| $x_0$ | posición inicial [[x0]] | $0\;\text{m}$ |
| $t_c$ | instante del apartado (c) | $3{,}0\;\text{s}$ |

Sentido positivo: dirección del movimiento inicial del coche.

## Definición del sistema

El sistema es el coche modelado como partícula puntual con MRUA sobre el eje de la autovía. Las magnitudes núcleo son a (aceleración constante, negativa en este caso), [[v0]] (velocidad inicial), v (velocidad en cada instante), t (tiempo), x (posición), [[x0]] (posición inicial) y [[dx]] (desplazamiento [[dx]] ). La aceleración es constante durante toda la maniobra de frenado.

## Modelo físico

El MRUA es válido porque el sistema ABS del coche mantiene una desaceleración aproximadamente constante durante la maniobra. Las cuatro relaciones núcleo del leaf son la relacion correspondiente, la relacion correspondiente, la relacion correspondiente y la relacion correspondiente; los cuatro apartados del problema permiten aplicar cada una de ellas en un contexto diferente.

{{f:mrua_velocidad}}

{{f:mrua_posicion}}

{{f:mrua_torricelli}}

{{f:mrua_desplazamiento_medio}}


## Justificación del modelo

En una autovía recta, con pavimento seco y sistema ABS, la fuerza de frenado se mantiene prácticamente constante a lo largo del trayecto, lo que justifica tratar `a` como constante. Si la calzada fuera irregular o el frenado fuera brusco e irregular, habría que sustituir el MRUA por un modelo con aceleración variable. La geometría 1D es adecuada porque la trayectoria es rectilínea.

## Resolución simbólica

**Apartado (a) — tiempo de parada** (despejando $t$ de la relacion correspondiente):

{{f:mrua_velocidad}}



**Apartado (b) — distancia de frenado** (la relacion correspondiente, elimina el tiempo):

{{f:mrua_torricelli}}



**Apartado (c) — posición y velocidad a 3 s:**



**Apartado (d) — verificación por velocidad media** la relacion correspondiente:

{{f:mrua_desplazamiento_medio}}



## Sustitución numérica

La velocidad inicial es 25 m/s y la aceleraci?n es -5 m/s?. El tiempo de parada resulta 5 s, la distancia de frenado 62,5 m y la posici?n a los 2 s queda 40 m desde el inicio. La verificaci?n con velocidad media confirma el resultado.

**Apartado (a):**


**Apartado (b):**


**Apartado (c):**



**Apartado (d):**


## Validación dimensional

La velocidad combina m/s con m/s? multiplicado por s. La posici?n suma longitudes: velocidad por tiempo y aceleraci?n por tiempo al cuadrado. Torricelli conserva dimensi?n de velocidad al cuadrado en ambos lados.


## Interpretación física

El apartado (a) usa la relacion correspondiente invertida: la velocidad disminuye linealmente hasta cero en 5 s porque `a` es constante y negativa. El apartado (b) aplica la relacion correspondiente para obtener el desplazamiento total sin pasar por el tiempo: 62,5 m equivalen a casi dos tercios de un campo de fútbol. El apartado (c) muestra que a los 3 s (antes de detenerse) el coche lleva recorridos 52,5 m y aún conserva 10 m/s, lo que ilustra que la mayor parte del desplazamiento ocurre en la primera mitad del frenado. El apartado (d) confirma el resultado con la relacion correspondiente: la velocidad media durante el frenado es exactamente la semisuma de $v_0$ y $v$, y ese valor multiplicado por el tiempo reproduce los 62,5 m. La concordancia entre los dos métodos valida la consistencia interna del modelo.

{{f:mrua_velocidad}}

{{f:mrua_torricelli}}

{{f:mrua_desplazamiento_medio}}


---

# Ejemplo de aplicación real

## Contexto

En un accidente de tráfico, los peritos reconstruyen la velocidad inicial del vehículo a partir de la longitud de la huella de frenado. La huella mide Δ x → 45 m sobre asfalto seco; el coeficiente de rozamiento cinético entre el neumático y el pavimento permite estimar a ≈ -7,5 m/s².

## Estimación física

Con la relacion correspondiente despejando $v_0$ (sabiendo que el coche quedó parado, $v = 0$):

{{f:mrua_torricelli}}



El límite legal en ese tramo era 80 km/h, por lo que la estimación indica que el vehículo circulaba por encima del límite antes de frenar.

## Interpretación

La clave del análisis pericial es que la relacion correspondiente permite obtener [[v0]] directamente desde datos observables en la escena (longitud de huella) y datos de laboratorio (coeficiente de rozamiento), sin necesidad de cronometrar nada. La incertidumbre principal proviene del valor de a: si el pavimento estuviera húmedo o el vehículo no tuviera ABS, la aceleración de frenado sería menor, lo que elevaría la estimación de [[v0]]. Por eso los peritos suelen dar un intervalo [[dt]] de velocidades en lugar de un valor único. Si las huellas no fueran rectas o el coche hubiera girado durante el frenado, el modelo 1D dejaría de ser válido y habría que recurrir a un análisis bidimensional.

{{f:mrua_torricelli}}



## Lista de verificación

Antes de finalizar el análisis, comprueba:

1. ¿Se ha elegido un eje con sentido positivo claramente definido?
2. ¿La aceleración [[a]] tiene el signo correcto (negativa si el objeto frena)?
3. ¿La velocidad inicial [[v0]] se ha extraído correctamente del enunciado?
4. ¿La ecuación la relacion correspondiente o la relacion correspondiente es la adecuada para los datos disponibles?

{{f:mrua_velocidad}}

{{f:mrua_posicion}}

5. ¿El resultado final tiene las unidades que se pedían?
6. ¿El valor numérico es coherente con la intuición física del problema?

Estas verificaciones son especialmente importantes en el MRUA porque elegir la ecuación incorrecta de partida conduce a resultados erróneos aunque el procedimiento algebraico sea correcto. La ecuación la relacion correspondiente es particularmente útil cuando el tiempo no está dado ni es buscado directamente.

{{f:mrua_torricelli}}

