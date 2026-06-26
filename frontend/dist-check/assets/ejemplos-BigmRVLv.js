const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un sistema de poleas compuestas se utiliza para elevar una carga de 500 kg en un almacén industrial. El sistema consta de dos poleas móviles y cuatro tramos de cuerda que sostienen directamente la carga. La eficiencia mecánica del sistema, debido a rozamiento en los ejes y rigidez de la cuerda, se estima en 0.85. Se pide calcular la fuerza de tracción ideal, la fuerza real necesaria, y determinar si un operario que puede ejercer una fuerza máxima de 300 N puede mover la carga.\r
\r
## Datos\r
\r
- Masa de la carga: 500 kg\r
- Aceleración de la gravedad: 9.8 m/s²\r
- Número de tramos portantes: 4\r
- Eficiencia mecánica: 0.85\r
- Fuerza máxima del operario: 300 N\r
\r
Magnitudes relevantes:\r
- [[W]]: peso de la carga\r
- [[nSel]]: número de tramos portantes\r
- [[eta]]: eficiencia mecánica\r
- [[F_ideal]]: fuerza ideal de tracción\r
- [[F_real]]: fuerza real de tracción\r
\r
## Definición del sistema\r
\r
El sistema es un polipasto con poleas compuestas. La carga cuelga de poleas móviles que reducen la fuerza necesaria distribuyendo el peso entre múltiples tramos de cuerda. El extremo libre de la cuerda es donde el operario aplica la fuerza de tracción.\r
\r
## Modelo físico\r
\r
Se aplicará el modelo de poleas compuestas con pérdidas, que incluye la eficiencia mecánica para account for rozamiento y deformaciones.\r
\r
Fórmulas a utilizar:\r
\r
{{f:fuerza_ideal_poleas_compuestas}}\r
\r
{{f:fuerza_real_poleas_compuestas}}\r
\r
## Justificación del modelo\r
\r
El modelo es apropiado porque:\r
- Las poleas están en equilibrio estático o movimiento cuasi-estático (velocidad constante)\r
- La cuerda es inextensible y no desliza sobre las poleas\r
- Las pérdidas pueden resumirse en un factor de eficiencia global\r
- El número de tramos es claramente identificable en el diagrama\r
\r
## Resolución simbólica\r
\r
Paso 1: Calcular el peso de la carga.\r
\r
El peso se obtiene multiplicando masa por gravedad: [[W]] = m × g.\r
\r
Paso 2: Calcular la fuerza ideal.\r
\r
Aplicando la fórmula del modelo ideal:\r
\r
{{f:fuerza_ideal_poleas_compuestas}}\r
\r
La fuerza teórica mínima se obtiene dividiendo el peso entre el número de tramos.\r
\r
Paso 3: Calcular la fuerza real.\r
\r
Aplicando la fórmula con eficiencia:\r
\r
{{f:fuerza_real_poleas_compuestas}}\r
\r
La fuerza real se obtiene dividiendo el peso entre el producto de tramos por eficiencia. Esto incorpora las pérdidas mecánicas.\r
\r
Paso 4: Comparar con capacidad del operario.\r
\r
La fuerza real debe compararse con la fuerza máxima que puede ejercer el operario.\r
\r
## Sustitución numérica\r
\r
Paso 1: Peso de la carga.\r
\r
Multiplicando 500 kg por 9.8 m/s² se obtiene 4900 N.\r
\r
Paso 2: Fuerza ideal.\r
\r
Dividiendo 4900 N entre 4 tramos se obtiene 1225 N.\r
\r
Paso 3: Fuerza real.\r
\r
El producto de tramos por eficiencia es 4 × 0.85, es decir, 3.4. Dividiendo 4900 N entre 3.4 se obtiene aproximadamente 1441 N.\r
\r
Paso 4: Comparación.\r
\r
La fuerza real requerida (1441 N) es casi cinco veces mayor que la fuerza máxima del operario (300 N). Un solo operario no puede mover esta carga con este sistema.\r
\r
## Validación dimensional\r
\r
- [[W]]: dimensión de fuerza (M L T⁻²), resultado en newtons. Correcto.\r
- [[F_ideal]] y [[F_real]]: dimensión de fuerza, consistente con [[W]]. Correcto.\r
- [[nSel]] y [[eta]]: adimensionales. Correcto.\r
\r
Verificación de magnitudes: La fuerza ideal (1225 N) es menor que el peso (4900 N), consistente con ventaja mecánica. La fuerza real (1441 N) es mayor que la ideal, consistente con pérdidas.\r
\r
## Interpretación física\r
\r
Los resultados revelan una importante lección sobre diseño de sistemas mecánicos. Aunque el sistema tiene ventaja mecánica 4 en teoría, las pérdidas por rozamiento y deformación reducen la ventaja efectiva a solo 3.4. Esto significa que el 15% de la ventaja teórica se pierde en calor y deformaciones no útiles.\r
\r
La carga de 500 kg, equivalente a aproximadamente media tonelada, requiere un esfuerzo de casi 150 kgf (147 kgf exactamente). Este valor supera ampliamente la capacidad de cualquier operario humano individual, que típicamente puede mantener esfuerzos sostenidos de 30-50 kgf.\r
\r
Este ejemplo demuestra la importancia crítica de considerar la eficiencia real en aplicaciones prácticas. Un diseñador inexpertos podría calcular erróneamente que 4 tramos son suficientes para una carga de 500 kg, asumiendo que un operario con 300 N de fuerza máxima (aproximadamente 30 kgf) podría manejarla. Sin considerar las pérdidas, el cálculo daría 1225 N necesarios, lo que parece manejable pero resulta peligrosamente inexacto.\r
\r
Para mover esta carga de manera segura y efectiva, se necesitaría necesariamente una de tres alternativas: (a) implementar un sistema con más tramos portantes (6 u 8) para incrementar la ventaja mecánica real por encima de 5, (b) incorporar un mecanismo de tracción mecánica motorizado como un malacate eléctrico que elimine la dependencia de la fuerza humana, o (c) coordinar múltiples operarios trabajando simultáneamente para sumar sus capacidades de fuerza individual.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En operaciones de rescate en montaña, equipos de emergencia utilizan sistemas de poleas compuestas para evacuar heridos en camilla. Un técnico de rescate debe diseñar un sistema que permita bajar una camilla con paciente (peso total aproximado 120 kg) por un barranco de 30 metros de profundidad. El técnico puede ejercer una fuerza máxima segura de 200 N para controlar el descenso.\r
\r
## Estimación física\r
\r
Peso total a elevar: multiplicando 120 kg por 9.8 m/s² se obtiene aproximadamente 1176 N, redondeado a 1200 N para cálculo rápido.\r
\r
Para limitar la fuerza a 200 N con eficiencia típica de 0.9 en equipos de rescate bien mantenidos, se necesita una ventaja mecánica efectiva de al menos 6 (calculado como 1200 N dividido entre el producto de 200 N por 0.9).\r
\r
Esto implica un sistema con 6 o más tramos portantes. Un polipasto con tres poleas móviles proporciona 6 tramos.\r
\r
Longitud de cuerda necesaria: para descender 30 m con 6 tramos, se debe desplegar 180 m de cuerda (30 m × 6 tramos).\r
\r
## Interpretación\r
\r
El sistema de rescate requiere cuerda suficiente (180 m) y un mecanismo de freno de seguridad. La ventaja mecánica permite que un solo rescatista controle descenso de 120 kg con esfuerzo moderado (200 N, equivalente a levantar 20 kg).\r
`;export{e as default};
