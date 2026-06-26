const e=`\uFEFF# Ejemplo tipo examen

## Enunciado
Un vehículo de masa [[m1]] = 1200 kg se desplaza hacia la derecha con una velocidad inicial [[v1i]] = 25 m/s. Delante de él, un segundo vehículo de masa [[m2]] = 1800 kg se mueve en el mismo sentido con una velocidad [[v2i]] = 10 m/s. El primer vehículo impacta contra la parte trasera del segundo. Tras la colisión, se observa que los vehículos se separan, pero el coeficiente de restitución del impacto es [[e]] = 0.4. Calcula las velocidades finales [[v1f]] y [[v2f]] de ambos vehículos, la energía final [[Kf]] y determina la cantidad de energía cinética disipada [[DeltaK]] durante el choque.

## Datos
- Masa del proyectil: [[m1]] = 1200 kg.
- Velocidad inicial 1: [[v1i]] = 25 m/s (sentido positivo).
- Masa del blanco: [[m2]] = 1800 kg.
- Velocidad inicial 2: [[v2i]] = 10 m/s (sentido positivo).
- Coeficiente de restitución: [[e]] = 0.4.

## Definición del sistema
El sistema está formado por los dos vehículos. Durante el brevísimo intervalo de tiempo que dura el impacto, las fuerzas de deformación mutua son mucho más intensas que las fuerzas externas (como el rozamiento con el pavimento), por lo que el sistema puede considerarse aislado. Esto garantiza la conservación del momento lineal total [[p]]. Al ser un choque inelástico con [[e]] < 1, sabemos de antemano que habrá una disipación neta de energía cinética.

## Modelo físico
Se aplica el **Modelo de Colisión Inelástica Unidimensional**. Este modelo asume que:
1. El impacto es frontal y el movimiento ocurre en una sola línea recta.
2. Se conserva el momento lineal [[p]].
3. La energía cinética no se conserva; parte se disipa en deformación y calor.
4. El rebote relativo se reduce según el factor dado por el coeficiente de restitución [[e]].

## Justificación del modelo
La elección de este modelo se justifica por el dato del coeficiente de restitución (0.4), que sitúa al evento en el rango inelástico. No es un choque elástico (donde se recuperaría toda la velocidad relativa) ni totalmente inelástico (donde los coches quedarían pegados). El modelo inelástico es el único capaz de estimar velocidades de salida distintas respetando la disipación de energía observada en colisiones reales de carrocerías metálicas.

## Resolución simbólica

El problema se resuelve planteando el sistema de ecuaciones de balance:

{{f:p}}

{{f:e_definition}}

Para hallar directamente las velocidades de salida, utilizamos las soluciones analíticas del modelo inelástico:

{{f:v1f_inelastic}}

{{f:v2f_inelastic}}

Una vez obtenidas las velocidades, evaluamos el balance energético del sistema calculando la energía inicial [[Ki]], la final [[Kf]] y la variación neta [[DeltaK]]:

{{f:ki_system}}

{{f:kf_system}}

{{f:delta_k}}

Finalmente, calculamos la severidad de la disipación mediante la fracción de energía perdida:

{{f:energy_loss_fraction}}

## Sustitución numérica
1. **Velocidades finales**:
   - [[v1f]] = ((1200 - 0.4 * 1800) / (1200 + 1800)) * 25 + ((1 + 0.4) * 1800 / (1200 + 1800)) * 10
   - [[v1f]] = (480 / 3000) * 25 + (2520 / 3000) * 10 = 4.0 + 8.4 = 12.4 m/s
   - [[v2f]] = ((1 + 0.4) * 1200 / (1200 + 1800)) * 25 + ((1800 - 0.4 * 1200) / (1200 + 1800)) * 10
   - [[v2f]] = (1680 / 3000) * 25 + (1320 / 3000) * 10 = 14.0 + 4.4 = 18.4 m/s

2. **Balance de energía**:
   - [[Ki]] = 0.5 * 1200 * (25)^2 + 0.5 * 1800 * (10)^2 = 375000 + 90000 = 465000 J
   - [[Kf]] = 0.5 * 1200 * (12.4)^2 + 0.5 * 1800 * (18.4)^2 = 92256 + 304704 = 396960 J
   - [[DeltaK]] = 396960 - 465000 = -68040 J

3. **Fracción de disipación**:
   - [[loss_fraction]] = 68040 / 465000 = 0.146 (aproximadamente un 14.6 por ciento de la energía inicial).

## Validación dimensional
Las velocidades resultantes se expresan en metros por segundo (m/s) y las energías [[K]] en Julios (J), manteniendo la coherencia con el Sistema Internacional. El balance de momento total [[p]] permanece constante en 48000 kg*m/s, validando la integridad del cálculo.

## Interpretación física
El resultado muestra que el vehículo delantero ha sido acelerado (cambia de 10 a 18.4 m/s) a expensas de la frenada brusca del primer vehículo (cambia de 25 a 12.4 m/s). La disipación de más de 68000 Julios (un valor de orden de magnitud significativo) se ha empleado físicamente en deformar las estructuras metálicas de ambos coches y en generar el ruido del impacto, confirmando la naturaleza inelástica del leaf.

# Ejemplo de aplicación real

## Contexto
En los laboratorios de seguridad vial, se realizan ensayos de impacto para medir el índice de supervivencia de los pasajeros. Un vehículo se lanza contra una barrera deformable a una velocidad controlada para estudiar su comportamiento inelástico.

## Estimación física
Consideramos un coche de [[m1]] = 1500 kg que impacta a [[v1i]] = 15 m/s contra un bloque de hormigón fijo. Si el coche fuera elástico, rebotaría con la misma velocidad, lo que mataría a los ocupantes por la aceleración extrema. En la realidad, el diseño está pensado para que el coeficiente de restitución [[e]] sea muy bajo (cercano a 0.1). Un **valor razonable** para la disipación de energía [[DeltaK]] en estos casos es de un **orden de magnitud** de 150000 Julios.

## Interpretación
La baja restitución (bajo valor de [[e]]) es una medida de seguridad: cuanto menor es el rebote, mayor es la energía absorbida por la carrocería en lugar de ser devuelta a los pasajeros como energía cinética de retroceso. El modelo inelástico permite a los ingenieros diseñar "zonas de deformación programada" que maximizan la magnitud de [[DeltaK]] para proteger la vida humana.


`;export{e as default};
