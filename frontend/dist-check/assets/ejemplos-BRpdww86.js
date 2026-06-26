const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
En una máquina de Atwood, dos masas están conectadas por una cuerda ligera e inextensible que pasa por una polea ideal sin masa ni rozamiento. La masa izquierda tiene valor 3 kg y la masa derecha 5 kg. El sistema se libera desde el reposo.\r
\r
Se pide determinar: (a) la aceleración del sistema y el sentido del movimiento; (b) la tensión en la cuerda; (c) la velocidad de ambas masas tras 2 segundos de movimiento.\r
\r
## Datos\r
\r
- Masa izquierda [[m1]]: 3 kg\r
- Masa derecha [[m2]]: 5 kg\r
- Gravedad [[g]]: 9.8 m/s²\r
- Tiempo de movimiento: 2 s\r
- Velocidad inicial: 0 (reposo)\r
\r
## Definición del sistema\r
\r
El sistema consta de dos masas puntuales acopladas por una cuerda ideal. La cuerda transmite fuerza sin deformarse y la polea cambia la dirección de la tensión sin disipar energía.\r
\r
Ejes de referencia: para [[m1]] (masa menor), eje vertical positivo hacia arriba; para [[m2]] (masa mayor), eje vertical positivo hacia abajo. Esta elección implica que si [[a]] > 0, [[m2]] desciende y [[m1]] asciende.\r
\r
## Modelo físico\r
\r
Aplicamos la segunda ley de Newton a cada masa por separado, considerando que comparten la misma magnitud de aceleración [[a]] debido a la cuerda inextensible.\r
\r
Para [[m1]]: la tensión [[T]] hacia arriba menos el peso hacia abajo produce la aceleración hacia arriba.\r
\r
Para [[m2]]: el peso hacia abajo menos la tensión [[T]] hacia arriba produce la aceleración hacia abajo.\r
\r
La aceleración del sistema viene dada por la fórmula fundamental:\r
\r
{{f:aceleracion_atwood}}\r
\r
La tensión en la cuerda se obtiene mediante:\r
\r
{{f:tension_atwood}}\r
\r
## Justificación del modelo\r
\r
El modelo de máquina de Atwood ideal es aplicable porque:\r
- La cuerda es ligera (sin masa) e inextensible (no se estira)\r
- La polea no tiene masa ni rozamiento en su eje\r
- El movimiento es vertical puramente (sin oscilaciones)\r
- Ambas masas se mueven con la misma magnitud de aceleración\r
\r
## Resolución simbólica\r
\r
Paso 1: Calcular la aceleración sustituyendo en la fórmula de Atwood.\r
\r
Numerador: diferencia de masas multiplicada por gravedad.\r
\r
Denominador: suma de ambas masas.\r
\r
Paso 2: Calcular la tensión sustituyendo masas y gravedad en la fórmula de tensión.\r
\r
El numerador contiene el producto de ambas masas y el doble de la gravedad.\r
\r
El denominador es la suma de masas.\r
\r
Paso 3: Para la velocidad tras 2 segundos, aplicar cinemática del MRUA.\r
\r
Velocidad final es aceleración multiplicada por tiempo (partiendo del reposo).\r
\r
## Sustitución numérica\r
\r
Evaluación (a) — Aceleración:\r
\r
Operación: (5 kg menos 3 kg) multiplicado por 9.8 m/s² dividido entre (5 kg más 3 kg).\r
\r
Resultado: 2 kg por 9.8 m/s² dividido entre 8 kg produce 2.45 m/s².\r
\r
Asignación: [[a]] es aproximadamente 2.45 m/s², positiva, lo que confirma que [[m2]] desciende y [[m1]] asciende.\r
\r
Evaluación (b) — Tensión:\r
\r
Operación: 2 multiplicado por 3 kg, por 5 kg, por 9.8 m/s², dividido entre 8 kg.\r
\r
Resultado: 294 kg²·m/s² dividido entre 8 kg produce 36.75 N.\r
\r
Asignación: [[T]] es aproximadamente 36.8 N.\r
\r
Verificación: la tensión debe estar entre el peso de [[m1]] (29.4 N) y el de [[m2]] (49 N). El resultado 36.8 N satisface esta condición.\r
\r
Evaluación (c) — Velocidad a los 2 segundos:\r
\r
Operación: 2.45 m/s² multiplicado por 2 s.\r
\r
Resultado: 4.9 m/s.\r
\r
Interpretación: tras 2 segundos, [[m2]] desciende a 4.9 m/s mientras [[m1]] asciende a la misma velocidad.\r
\r
## Validación dimensional\r
\r
- Aceleración [[a]]: kg multiplicado por m/s² dividido entre kg resulta en m/s² \`[L T⁻²]\` ✓\r
- Tensión [[T]]: kg·kg·m/s² dividido entre kg resulta en kg·m/s² es decir N \`[M L T⁻²]\` ✓\r
- Velocidad: m/s² multiplicado por s resulta en m/s \`[L T⁻¹]\` ✓\r
\r
Todas las magnidades tienen dimensiones coherentes.\r
\r
## Interpretación física\r
\r
El resultado de 2.45 m/s² representa aproximadamente un cuarto de la gravedad, consistente con la diferencia moderada entre masas (5 kg vs 3 kg). Si las masas fueran iguales, la aceleración sería cero (equilibrio); si una fuera mucho mayor que la otra, la aceleración se aproximaría a [[g]].\r
\r
La tensión de 36.8 N está entre los pesos de ambas masas (29.4 N y 49 N), actuando como fuerza de acoplamiento. Es mayor que el peso de [[m1]] (por eso acelera hacia arriba) pero menor que el de [[m2]] (por eso acelera hacia abajo).\r
\r
El movimiento a velocidad creciente durante 2 segundos produce desplazamientos significativos: cada masa recorre aproximadamente 4.9 metros (espacio = 0.5·a·t²), suficiente para verificar experimentalmente en un laboratorio.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un elevador de contrapeso en una mina subterránea utiliza un sistema de dos cabinas conectadas por cable que pasa por una polea en la parte superior del pozo. Cuando una cabina sube cargada de mineral, la otra baja vacía, aprovechando la diferencia de pesos para reducir el consumo energético del motor.\r
\r
En una configuración típica: cabina cargada (masa efectiva 2000 kg), cabina vacía (masa efectiva 800 kg), cable de acero de alta resistencia, polea de gran diámetro con rodamientos de baja fricción. El motor debe proporcionar solo la diferencia de fuerza necesaria para acelerar el sistema y compensar rozamientos menores.\r
\r
El ingeniero de minas necesita calcular: (a) la aceleración máxima segura del sistema (límite regulador: 2 m/s²); (b) la tensión máxima en el cable para verificar resistencia; (c) el tiempo de subida si el pozo tiene 150 metros de profundidad y se acelera a máximo régimen.\r
\r
## Estimación física\r
\r
Datos del sistema industrial:\r
- Masa cabina cargada descendente [[m1]]: 2000 kg (equivalente a [[m2]] en la fórmula cuando desciende)\r
- Masa cabina vacía ascendente [[m2]]: 800 kg (equivalente a [[m1]] en la fórmula)\r
- Profundidad del pozo: 150 m\r
- Límite de aceleración regulatorio: 2 m/s²\r
- Gravedad [[g]]: 9.8 m/s²\r
\r
**Paso 1**: Calcular aceleración teórica del sistema ideal.\r
\r
Operación: diferencia de masas (1200 kg) multiplicada por 9.8 m/s² dividido entre suma de masas (2800 kg).\r
\r
Resultado: aproximadamente 4.2 m/s².\r
\r
Evaluación: esta aceleración excede el límite regulatorio de seguridad de 2 m/s². El sistema debe limitarse a 2 m/s² mediante control del motor.\r
\r
**Paso 2**: Calcular tensión en el cable a aceleración máxima permitida.\r
\r
Con [[a]] = 2 m/s², aplicamos la segunda ley a la cabina ascendente (800 kg).\r
\r
Operación: 800 kg multiplicado por (9.8 m/s² más 2 m/s²).\r
\r
Resultado: 800 kg por 11.8 m/s² produce 9440 N.\r
\r
Asignación: [[T]] es aproximadamente 9440 N (9.44 kN).\r
\r
Verificación de seguridad: cables de acero de 20 mm de diámetro tienen carga de rotura típica de 200 kN con factor de seguridad 10, permitiendo trabajos hasta 20 kN. La tensión calculada de 9.4 kN está dentro del margen seguro.\r
\r
**Paso 3**: Calcular tiempo de subida a aceleración constante de 2 m/s².\r
\r
Operación: desplazamiento (150 m) = 0.5 multiplicado por aceleración (2 m/s²) multiplicado por tiempo al cuadrado.\r
\r
Despejando tiempo: raíz cuadrada de (300 m dividido entre 2 m/s²) = raíz cuadrada de 150 s².\r
\r
Resultado: aproximadamente 12.2 segundos.\r
\r
Nota práctica: en operación real el sistema acelera durante los primeros segundos, luego mantiene velocidad constante, y finalmente frena. El tiempo total real es mayor que este cálculo teórico de aceleración pura.\r
\r
## Interpretación\r
\r
La magnitud [[a]] en este contexto industrial determina la comodidad y seguridad del transporte. Aceleraciones superiores a 2 m/s² causarían incomodidad a los operarios y estrés estructural excesivo. El cálculo muestra que el sistema "natural" tendería a acelerar más rápido (4.2 m/s²), por lo que el control electrónico del motor debe limitar activamente la aceleración.\r
\r
La tensión [[T]] representa el esfuerzo mecánico en el cable. Aunque la diferencia de pesos es grande (2000 kg vs 800 kg), la tensión real depende de cuánto acelera el sistema. A mayor aceleración, mayor tensión. Este es el principio detrás de los frenos de seguridad: si el cable se rompe, la tensión desaparece y los frenos se activan automáticamente.\r
\r
El sistema de contrapeso reduce drásticicamente el consumo energético comparado con un elevador convencional. Sin contrapeso, el motor debería vencer el peso completo de 2000 kg. Con contrapeso de 800 kg, el motor solo compensa la diferencia (1200 kg efectivos) más la inercia del sistema. Este principio de balanceo de masas se aplica también en ascensores modernos, funiculares y sistemas de transporte por cable.\r
`;export{e as default};
