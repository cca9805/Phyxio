# Ejemplo tipo examen

## Enunciado

Un sistema de poleas compuestas se utiliza para elevar una carga de 500 kg en un almacén industrial. El sistema consta de dos poleas móviles y cuatro tramos de cuerda que sostienen directamente la carga. La eficiencia mecánica del sistema, debido a rozamiento en los ejes y rigidez de la cuerda, se estima en 0.85. Se pide calcular la fuerza de tracción ideal, la fuerza real necesaria, y determinar si un operario que puede ejercer una fuerza máxima de 300 N puede mover la carga.

## Datos

- Masa de la carga: 500 kg
- Aceleración de la gravedad: 9.8 m/s²
- Número de tramos portantes: 4
- Eficiencia mecánica: 0.85
- Fuerza máxima del operario: 300 N

Magnitudes relevantes:
- [[W]]: peso de la carga
- [[nSel]]: número de tramos portantes
- [[eta]]: eficiencia mecánica
- [[F_ideal]]: fuerza ideal de tracción
- [[F_real]]: fuerza real de tracción

## Definición del sistema

El sistema es un polipasto con poleas compuestas. La carga cuelga de poleas móviles que reducen la fuerza necesaria distribuyendo el peso entre múltiples tramos de cuerda. El extremo libre de la cuerda es donde el operario aplica la fuerza de tracción.

## Modelo físico

Se aplicará el modelo de poleas compuestas con pérdidas, que incluye la eficiencia mecánica para account for rozamiento y deformaciones.

Fórmulas a utilizar:

{{f:fuerza_ideal_poleas_compuestas}}

{{f:fuerza_real_poleas_compuestas}}

## Justificación del modelo

El modelo es apropiado porque:
- Las poleas están en equilibrio estático o movimiento cuasi-estático (velocidad constante)
- La cuerda es inextensible y no desliza sobre las poleas
- Las pérdidas pueden resumirse en un factor de eficiencia global
- El número de tramos es claramente identificable en el diagrama

## Resolución simbólica

Paso 1: Calcular el peso de la carga.

El peso se obtiene multiplicando masa por gravedad: [[W]] = m × g.

Paso 2: Calcular la fuerza ideal.

Aplicando la fórmula del modelo ideal:

{{f:fuerza_ideal_poleas_compuestas}}

La fuerza teórica mínima se obtiene dividiendo el peso entre el número de tramos.

Paso 3: Calcular la fuerza real.

Aplicando la fórmula con eficiencia:

{{f:fuerza_real_poleas_compuestas}}

La fuerza real se obtiene dividiendo el peso entre el producto de tramos por eficiencia. Esto incorpora las pérdidas mecánicas.

Paso 4: Comparar con capacidad del operario.

La fuerza real debe compararse con la fuerza máxima que puede ejercer el operario.

## Sustitución numérica

Paso 1: Peso de la carga.

Multiplicando 500 kg por 9.8 m/s² se obtiene 4900 N.

Paso 2: Fuerza ideal.

Dividiendo 4900 N entre 4 tramos se obtiene 1225 N.

Paso 3: Fuerza real.

El producto de tramos por eficiencia es 4 × 0.85, es decir, 3.4. Dividiendo 4900 N entre 3.4 se obtiene aproximadamente 1441 N.

Paso 4: Comparación.

La fuerza real requerida (1441 N) es casi cinco veces mayor que la fuerza máxima del operario (300 N). Un solo operario no puede mover esta carga con este sistema.

## Validación dimensional

- [[W]]: dimensión de fuerza (M L T⁻²), resultado en newtons. Correcto.
- [[F_ideal]] y [[F_real]]: dimensión de fuerza, consistente con [[W]]. Correcto.
- [[nSel]] y [[eta]]: adimensionales. Correcto.

Verificación de magnitudes: La fuerza ideal (1225 N) es menor que el peso (4900 N), consistente con ventaja mecánica. La fuerza real (1441 N) es mayor que la ideal, consistente con pérdidas.

## Interpretación física

Los resultados revelan una importante lección sobre diseño de sistemas mecánicos. Aunque el sistema tiene ventaja mecánica 4 en teoría, las pérdidas por rozamiento y deformación reducen la ventaja efectiva a solo 3.4. Esto significa que el 15% de la ventaja teórica se pierde en calor y deformaciones no útiles.

La carga de 500 kg, equivalente a aproximadamente media tonelada, requiere un esfuerzo de casi 150 kgf (147 kgf exactamente). Este valor supera ampliamente la capacidad de cualquier operario humano individual, que típicamente puede mantener esfuerzos sostenidos de 30-50 kgf.

Este ejemplo demuestra la importancia crítica de considerar la eficiencia real en aplicaciones prácticas. Un diseñador inexpertos podría calcular erróneamente que 4 tramos son suficientes para una carga de 500 kg, asumiendo que un operario con 300 N de fuerza máxima (aproximadamente 30 kgf) podría manejarla. Sin considerar las pérdidas, el cálculo daría 1225 N necesarios, lo que parece manejable pero resulta peligrosamente inexacto.

Para mover esta carga de manera segura y efectiva, se necesitaría necesariamente una de tres alternativas: (a) implementar un sistema con más tramos portantes (6 u 8) para incrementar la ventaja mecánica real por encima de 5, (b) incorporar un mecanismo de tracción mecánica motorizado como un malacate eléctrico que elimine la dependencia de la fuerza humana, o (c) coordinar múltiples operarios trabajando simultáneamente para sumar sus capacidades de fuerza individual.

# Ejemplo de aplicación real

## Contexto

En operaciones de rescate en montaña, equipos de emergencia utilizan sistemas de poleas compuestas para evacuar heridos en camilla. Un técnico de rescate debe diseñar un sistema que permita bajar una camilla con paciente (peso total aproximado 120 kg) por un barranco de 30 metros de profundidad. El técnico puede ejercer una fuerza máxima segura de 200 N para controlar el descenso.

## Estimación física

Peso total a elevar: multiplicando 120 kg por 9.8 m/s² se obtiene aproximadamente 1176 N, redondeado a 1200 N para cálculo rápido.

Para limitar la fuerza a 200 N con eficiencia típica de 0.9 en equipos de rescate bien mantenidos, se necesita una ventaja mecánica efectiva de al menos 6 (calculado como 1200 N dividido entre el producto de 200 N por 0.9).

Esto implica un sistema con 6 o más tramos portantes. Un polipasto con tres poleas móviles proporciona 6 tramos.

Longitud de cuerda necesaria: para descender 30 m con 6 tramos, se debe desplegar 180 m de cuerda (30 m × 6 tramos).

## Interpretación

El sistema de rescate requiere cuerda suficiente (180 m) y un mecanismo de freno de seguridad. La ventaja mecánica permite que un solo rescatista controle descenso de 120 kg con esfuerzo moderado (200 N, equivalente a levantar 20 kg).
