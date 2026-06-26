const e=`# Modelos Físicos: Momentos Típicos de Inercia\r
\r
## Modelo ideal\r
El modelo ideal para el estudio de los momentos típicos de inercia es el **Sólido Rígido Geométrico**. Este modelo asume que el objeto posee una geometría perfecta (esferas perfectas, cilindros infinitamente rectos, discos sin espesor) y, lo más importante, una **densidad volumétrica uniforme** (\r
\r
{{f:disco-macizo}}\r
\r
). Bajo estas hipótesis, el cálculo del momento de inercia se simplifica a la resolución de una integral de volumen puramente matemática, donde el resultado depende exclusivamente de la masa total M y las dimensiones características del objeto (R o L).\r
\r
La simplificación central consiste en ignorar las imperfecciones del material (porosidad, inclusiones de mayor densidad) y las irregularidades de la superficie. Al tratar el objeto como un cuerpo matemático puro, se pueden derivar las fórmulas estándar (como\r
\r
{{f:esfera-maciza}}\r
\r
para la esfera maciza) que sirven como piezas de catálogo para construir la dinámica de sistemas mucho más complejos.\r
\r
## Hipótesis\r
El modelo de Sólido Rígido Geométrico descansa sobre cuatro hipótesis:\r
\r
1. **Densidad uniforme**: la densidad volumétrica rho es constante en todo el cuerpo; no hay gradientes internos ni estratificación de material.\r
2. **Geometría ideal**: la forma del cuerpo coincide exactamente con la primitiva geométrica descrita (esfera perfecta, cilindro recto, disco sin espesor, varilla sin radio transversal).\r
3. **Sólido rígido**: las distancias entre cualquier par de puntos del cuerpo no cambian durante la rotación; no hay deformación elástica ni expansión centrífuga apreciable.\r
4. **Eje de simetría conocido**: el eje de rotación coincide con el eje de simetría geométrica del cuerpo o se conoce su distancia al centro de masas para aplicar el teorema de Steiner.\r
\r
## Dominio de validez cuantitativo\r
Las fórmulas típicas de inercia son aproximaciones robustas siempre que el objeto real mantenga una simetría geométrica con una tolerancia aceptable. En ingeniería, se considera que una esfera real puede modelarse con la fórmula típica si su desviación de circularidad cumple:\r
{{f:esfera-maciza}}\r
Si un objeto está deformado más allá de este rango del 5 %, el error al usar la fórmula estándar superará el margen de seguridad de cálculo dinámico.\r
\r
Para objetos delgados como varillas o discos, el modelo es válido mientras la dimensión transversal sea al menos un orden de magnitud menor que la dimensión principal:\r
{{f:placa-rectangular}}\r
La fórmula\r
\r
{{f:placa-rectangular}}\r
\r
 para una varilla y la fórmula\r
\r
{{f:placa-rectangular}}\r
\r
para el disco macizo se rigen por este límite. Las dimensiones a y b de una placa rectangular deben cumplir una condición análoga respecto al espesor.\r
\r
## Señales de fallo del modelo\r
Un modelo basado en fórmulas típicas falla cuando el objeto presenta **asimetrías de masa no visibles**. Si una esfera perfectamente equilibrada visualmente muestra una rotación preferente o "cabecea" al girar, la densidad no es uniforme. En este caso, el uso de\r
\r
{{f:esfera-maciza}}\r
\r
producirá errores en el eje. Las vibraciones excesivas son la señal de fallo física más común: indican que el eje de rotación geométrico no coincide con el eje de inercia real.\r
\r
Otra señal de fallo es la **desviación dimensional bajo carga**. Si al aumentar la velocidad angular la estructura se expande, las dimensiones del objeto cambian y la fórmula estática típica deja de ser válida. La respuesta al torque se vuelve no lineal, indicando que la geometría ideal ha sido superada.\r
\r
## Modelo extendido o alternativo\r
El modelo extendido considera el **Cuerpo de Densidad Variable** o objetos con geometría real (no ideal). En este escenario, la masa no se distribuye de forma homogénea, lo que invalida las fórmulas típicas directas. Se debe recurrir a la integración directa de la función de densidad rho(r, theta, phi), permitiendo modelar objetos como planetas (donde el núcleo es mucho más denso que la corteza) o componentes industriales de fundición con gradientes térmicos de masa.\r
\r
A diferencia del modelo ideal, el extendido no ofrece una fórmula única por forma. Requiere conocer la arquitectura interna del material. Mientras que en el modelo ideal una esfera siempre tiene inercia\r
\r
{{f:esfera-maciza}}\r
\r
, en el modelo extendido una esfera hueca con paredes de espesor variable tendrá una inercia que es función de sus radios interno y externo.\r
\r
Cuándo conviene pasar al modelo extendido: cuando la excentricidad supera 0,05; cuando la dimensión transversal supera el 10 % de la principal; cuando se detectan vibraciones preferentes que indican densidad no uniforme; o cuando el radio de giro experimental difiere del factor de forma teórico en más de un 5 %.\r
\r
## Comparación operativa\r
\r
| Modelo | Cuándo usarlo | Ventaja | Limitación |\r
|---|---|---|---|\r
| Sólido rígido geométrico (catálogo) | Objetos uniformes con geometría estándar | Cálculo inmediato con I, m, R o L | Requiere densidad uniforme y geometría ideal |\r
| Radio de giro experimental k | Objetos de forma compleja o material no homogéneo | Más preciso para objetos reales | Requiere medición experimental |\r
| Elementos finitos (FEA) | Piezas de geometría orgánica o distribución de masa desconocida | Precisión muy alta | Coste computacional elevado |`;export{e as default};
