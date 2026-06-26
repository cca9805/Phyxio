const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de madera de 5 kg de masa reposa sobre una mesa horizontal. Los coeficientes de fricción entre la madera y la superficie son: estático [[mu_s]] = 0.40 y cinético [[mu_k]] = 0.30. Se aplica una fuerza horizontal [[F]] mediante una dinamómetro. Se pide calcular: (a) la fuerza máxima que puede aplicarse sin que el bloque se mueva; (b) la aceleración del bloque si se aplica una fuerza de 25 N; (c) la fuerza necesaria para mantener el bloque en movimiento uniforme una vez iniciado.\r
\r
## Datos\r
\r
- Masa del bloque: [[m]] = 5 kg\r
- Coeficiente de fricción estático: [[mu_s]] = 0.40 (adimensional)\r
- Coeficiente de fricción cinético: [[mu_k]] = 0.30 (adimensional)\r
- Aceleración gravitatoria: [[g]] = 9.8 m/s² (valor estándar)\r
- Fuerza aplicada caso (b): [[F]] = 25 N\r
\r
## Definición del sistema\r
\r
El sistema mecánico consiste en un bloque rígido sobre una superficie plana horizontal. El bloque está sometido a cuatro fuerzas en el plano vertical-horizontal: peso [[W]] hacia abajo, reacción normal [[N]] hacia arriba, fuerza aplicada [[F]] horizontal, y fuerza de fricción [[f_s]] o [[f_k]] horizontal opuesta al movimiento o tendencia al movimiento.\r
\r
## Modelo físico\r
\r
El modelo de Coulomb para fricción seca describe la interacción de contacto. En régimen estático, la fricción se adapta hasta un máximo definido por el umbral estático.\r
\r
{{f:umbral_estatico}}\r
\r
En régimen cinético, la fricción es constante y proporcional a la normal mediante el coeficiente cinético.\r
\r
{{f:friccion_cinetica}}\r
\r
La dinámica horizontal obedece la segunda ley de Newton.\r
\r
{{f:segunda_ley_horizontal}}\r
\r
La normal en superficie horizontal iguala al peso.\r
\r
{{f:normal_superficie}}\r
\r
El peso se calcula mediante la ley gravitatoria.\r
\r
{{f:peso_gravitatorio}}\r
\r
## Justificación del modelo\r
\r
El modelo de Coulomb es apropiado porque: (1) las superficies son secas (madera sobre material de mesa), (2) las velocidades serán moderadas (< 1 m/s), (3) no hay lubricación ni fluidos intermedios, (4) la deformación de las superficies es negligible comparada con las dimensiones del bloque. A escalas de laboratorio con estas condiciones, el modelo predice con errores menores al 5%.\r
\r
## Resolución simbólica\r
\r
**Paso 1**: Calcular el peso del bloque usando la magnitud [[m]] y la gravedad [[g]].\r
\r
{{f:peso_gravitatorio}}\r
\r
**Paso 2**: Determinar la reacción normal en la superficie horizontal.\r
\r
{{f:normal_superficie}}\r
\r
**Paso 3**: Para el apartado (a), calcular el umbral estático máximo usando [[mu_s]] y [[N]].\r
\r
{{f:umbral_estatico}}\r
\r
**Paso 4**: Comparar la fuerza aplicada con el umbral para determinar el régimen.\r
\r
Si [[F]] ≤ [[f_s]], el bloque permanece en reposo con aceleración nula.\r
\r
Si [[F]] > [[f_s]], el bloque acelera según la segunda ley.\r
\r
**Paso 5**: En régimen cinético, calcular la fricción cinética con [[mu_k]] y [[N]].\r
\r
{{f:friccion_cinetica}}\r
\r
**Paso 6**: Aplicar la segunda ley de Newton horizontal para obtener la aceleración.\r
\r
{{f:segunda_ley_horizontal}}\r
\r
**Paso 7**: Para movimiento uniforme, la fuerza neta debe ser cero, por tanto [[F]] = [[f_k]].\r
\r
## Sustitución numérica\r
\r
**Paso 1**: Peso del bloque.\r
\r
Operación: 5 kg multiplicado por 9.8 m/s². Resultado: 49 N. Asignación: [[W]] = 49 N.\r
\r
**Paso 2**: Reacción normal.\r
\r
En superficie horizontal sin fuerzas verticales adicionales, la normal iguala al peso. Asignación: [[N]] = 49 N.\r
\r
**Paso 3**: Umbral estático máximo.\r
\r
Operación: 0.40 multiplicado por 49 N. Resultado: 19.6 N. Asignación: [[f_s]] = 19.6 N.\r
\r
Respuesta apartado (a): la fuerza máxima sin movimiento es aproximadamente 19.6 N.\r
\r
**Paso 4**: Evaluación régimen para [[F]] = 25 N.\r
\r
Comparación: 25 N > 19.6 N. El bloque está en régimen cinético y acelerará.\r
\r
**Paso 5**: Fricción cinética.\r
\r
Operación: 0.30 multiplicado por 49 N. Resultado: 14.7 N. Asignación: [[f_k]] = 14.7 N.\r
\r
**Paso 6**: Aceleración con fuerza de 25 N.\r
\r
Operación: (25 N menos 14.7 N) dividido entre 5 kg. Resultado: 10.3 N dividido entre 5 kg. Asignación: [[a]] = 2.06 m/s².\r
\r
Respuesta apartado (b): la aceleración es aproximadamente 2.1 m/s².\r
\r
**Paso 7**: Fuerza para movimiento uniforme.\r
\r
Para velocidad constante, la fuerza aplicada debe equilibrar exactamente la fricción cinética. Asignación: [[F]] = [[f_k]] = 14.7 N.\r
\r
Respuesta apartado (c): se requieren aproximadamente 14.7 N.\r
\r
## Validación dimensional\r
\r
- Peso [[W]]: kg multiplicado por m/s² resulta en N (unidades de fuerza) \`[M L T⁻²]\` ✓\r
- Normal [[N]]: igual a peso, mismas unidades de fuerza \`[M L T⁻²]\` ✓\r
- Umbral estático [[f_s]]: adimensional multiplicado por N resulta en N \`[M L T⁻²]\` ✓\r
- Fricción cinética [[f_k]]: mismas unidades que [[f_s]] \`[M L T⁻²]\` ✓\r
- Aceleración [[a]]: N dividido entre kg resulta en m/s² \`[L T⁻²]\` ✓\r
\r
Todos los resultados tienen dimensiones coherentes con las magnitudes físicas involucradas.\r
\r
## Interpretación física\r
\r
El resultado del apartado (a) revela que la fricción estática actúa como una barrera protectora que impide el movimiento hasta alcanzar los 19.6 N. Esto significa que empujos suaves (como los de una brisa o un toque accidental) no desplazarán el objeto, proporcionando estabilidad al sistema. La fricción estática real en cualquier empuje inferior a este umbral es exactamente igual al empuje aplicado, manteniendo equilibrio perfecto.\r
\r
Cuando se aplican 25 N en el apartado (b), la fuerza supera el umbral estático en aproximadamente 5.4 N (un 28% por encima del límite). La diferencia entre fuerza aplicada (25 N) y resistencia cinética (14.7 N) produce una fuerza neta de 10.3 N, que genera la aceleración de 2.06 m/s². Físicamente, esto indica que el bloque ganará velocidad rápidamente; tras un segundo ya alcanzaría 2 m/s aproximadamente.\r
\r
El apartado (c) demuestra un principio crucial: una vez en movimiento, se requiere menos fuerza para mantener el bloque en marcha que para iniciar el movimiento. Los 14.7 N necesarios para movimiento uniforme son significativamente menores que los 19.6 N del umbral estático. Esto explica por qué es más fácil mantener un objeto deslizando que iniciar el deslizamiento desde el reposo. En aplicaciones prácticas como el diseño de sistemas de transporte, esto implica que los motores deben proporcionar mayor par de arranque (para vencer [[f_s]]) que el par de mantenimiento (para vencer [[f_k]]).\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un operario en una planta de ensamblaje debe mover cajas de componentes electrónicos sobre una mesa de trabajo recubierta de fieltro antiestático. Las cajas tienen masa de 12 kg y deben deslizarse suavemente sin dañar los componentes internos. El supervisor necesita determinar: (a) qué fuerza mínima debe ser capaz de ejercer un operario para iniciar el movimiento; (b) qué fuerza es suficiente para mantener la caja deslizando a velocidad constante; (c) si un empujón brusco de 80 N podría dañar la caja por aceleración excesiva.\r
\r
Los coeficientes de fricción caja-fieltro son: estático [[mu_s]] = 0.35, cinético [[mu_k]] = 0.25. La aceleración máxima segura para los componentes es 3 m/s².\r
\r
## Estimación física\r
\r
**Paso 1**: Calcular el peso de la caja.\r
\r
Operación: 12 kg multiplicado por 9.8 m/s². Resultado: 117.6 N. Asignación: [[W]] = 117.6 N.\r
\r
**Paso 2**: Determinar la reacción normal.\r
\r
En superficie horizontal, la normal iguala al peso. Asignación: [[N]] = 117.6 N.\r
\r
**Paso 3**: Calcular el umbral estático para evaluación (a).\r
\r
Operación: 0.35 multiplicado por 117.6 N. Resultado: aproximadamente 41 N. Asignación: [[f_s]] = 41 N.\r
\r
Conclusión (a): el operario debe poder ejercer al menos 41 N (aproximadamente 4.2 kgf) para iniciar el movimiento. Fuerzas menores no desplazarán la caja.\r
\r
**Paso 4**: Calcular la fricción cinética para evaluación (b).\r
\r
Operación: 0.25 multiplicado por 117.6 N. Resultado: aproximadamente 29 N. Asignación: [[f_k]] = 29 N.\r
\r
Conclusión (b): una vez en movimiento, solo 29 N mantienen la caja deslizando uniformemente. Esto permite al operario reducir el esfuerzo tras el arranque inicial.\r
\r
**Paso 5**: Evaluar la aceleración con empujón de 80 N.\r
\r
Diferencia entre empuje y fricción cinética: 80 N menos 29 N produce 51 N de fuerza neta.\r
\r
Operación: 51 N dividido entre 12 kg. Resultado: 4.25 m/s². Asignación: aceleración de 4.25 m/s².\r
\r
Comparación con límite seguro: 4.25 m/s² > 3 m/s². El empujón brusco excede la aceleración segura.\r
\r
Conclusión (c): un empujón de 80 N podría dañar los componentes internos por aceleración excesiva. Se recomienda empujes controlados menores a 65 N (que producirían aproximadamente 3 m/s² de aceleración máxima).\r
\r
## Interpretación\r
\r
La magnitud [[f_s]] en este contexto industrial representa la barrera de seguridad que protege los componentes de movimientos accidentales. Una caja de 12 kg sobre fieltro requiere fuerzas superiores a 41 N para comenzar a moverse, lo que significa que golpes leves o vibraciones ambientales normales no desplazarán las cajas de sus posiciones de trabajo.\r
\r
La diferencia entre fuerza de arranque (41 N) y fuerza de mantenimiento (29 N) tiene implicaciones ergonómicas importantes. Los operarios experimentan "sacudidas" cuando las cajas repentinamente aceleran tras superar el umbral estático. Esta transición abrupta puede causar fatiga muscular y riesgo de daño a los componentes si no se controla.\r
\r
El análisis de la aceleración máxima demuestra que no solo la fuerza total importa, sino la diferencia entre fuerza aplicada y resistencia cinética. Un empujón de 80 N parece razonable para una caja de 12 kg (menos de 7 kgf), pero la aceleración resultante de 4.25 m/s² excede los límites de seguridad de los componentes electrónicos delicados. Esto ilustra que en diseño de procesos industriales, las especificaciones deben basarse en aceleración permitida, no solo en fuerzas totales.\r
\r
La masa [[m]] juega un papel estabilizador: cajas más pesadas requieren fuerzas mayores para arrancar, pero una vez en movimiento, su mayor inercia también las hace más resistentes a cambios bruscos de velocidad. Para componentes frágiles, cajas más pesadas pueden ser más seguras que ligeras, siempre que el umbral estático no sea excesivo para los operarios.\r
`;export{e as default};
