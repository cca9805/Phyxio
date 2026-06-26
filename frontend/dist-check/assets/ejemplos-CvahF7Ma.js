const e=`\uFEFF# Ecuación de Bernoulli — Ejemplos guiados\r
\r
# Ejemplo tipo examen\r
\r
## Enunciado\r
Un depósito grande de agua está abierto a la atmósfera. La presión en la superficie libre es la presión atmosférica. La velocidad [[v]] del agua en la superficie es prácticamente nula. Un orificio pequeño se abre en la pared lateral del depósito, a una profundidad de 5,0 m por debajo de la superficie libre. La densidad del agua es [[rho]] = 1000 kg/m³ y la aceleración de la gravedad [[g]] = 9,81 m/s². Determinar la velocidad de salida del agua por el orificio y la presión dinámica [[q]] en la sección de salida.\r
\r
## Datos\r
- Presión en la superficie [[p]]: 101 325 Pa (punto 1, atmosférica)\r
- Velocidad en la superficie [[v]]: nula (depósito grande)\r
- Cota de la superficie [[z]]: 5,0 m sobre el orificio\r
- Presión en el orificio: 101 325 Pa (abierto a la atmósfera)\r
- Cota del orificio: 0 m (nivel de referencia)\r
- Densidad del agua [[rho]]: 1000 kg/m³\r
- Gravedad [[g]]: 9,81 m/s²\r
\r
## Definición del sistema\r
- Variable objetivo: velocidad de salida y presión dinámica [[q]] en el orificio.\r
- Ecuación troncal: la altura de energía \r
{{f:head}} \r
aplicada entre la superficie del depósito (punto 1) y el orificio (punto 2).\r
\r
## Modelo físico\r
Se aplica el modelo ideal de Bernoulli: flujo estacionario, fluido incompresible con densidad [[rho]] constante, flujo inviscido, evaluado a lo largo de la línea de corriente que conecta la superficie libre con el punto de salida en el orificio. La magnitud núcleo, que es la altura de energía [[H]], se asume constante a lo largo de toda esta trayectoria, relacionando directamente la pérdida de cota [[z]] con el aumento de velocidad [[v]] y presión dinámica [[q]].\r
\r
## Justificación del modelo\r
La hipótesis de incompresibilidad está garantizada desde una perspectiva cuantitativa porque el fluido es agua líquida, cuya variación de densidad es nula bajo estas presiones. La hipótesis de flujo inviscido es plenamente justificable para una estimación de cota superior teórica y asume que toda la macro-energía se transfiere sin pérdidas. La velocidad de salida esperada permite suponer que no hay desviaciones drásticas causadas por fricción extrema en esta resolución de primer orden.\r
\r
## Resolución simbólica\r
\r
Aplicando la ecuación de alturas de energía\r
\r
{{f:head}}\r
\r
entre los puntos 1 y 2 en forma de presiones:\r
Se escribe el balance de presión, energía cinética y energía de elevación entre superficie y orificio.\r
Como las presiones se cancelan y la velocidad en la superficie es nula, la expresión se simplifica al **Teorema de Torricelli**, por lo que la velocidad de salida depende de la gravedad y de la profundidad.\r
La presión dinámica en la salida se obtiene de su propia fórmula núcleo\r
\r
{{f:q_dinamica}}\r
\r
:\r
se evalúa la presión dinámica en la salida como función de [[rho]] y del cuadrado de [[v]].\r
## Sustitución numérica\r
La velocidad de salida estimada es aproximadamente 9,90 m/s.\r
La presión dinámica asociada es aproximadamente 49 005 Pa.\r
## Validación dimensional\r
Las unidades son consistentes: la velocidad queda en metros por segundo y la presión dinámica queda en pascales.\r
## Interpretación física\r
Físicamente, el resultado numérico de velocidad de salida arroja 9,9 m/s, valor que es matemáticamente idéntico a la velocidad hipotética universal que alcanzaría una partícula en caída parabólica libre desde una cota vertical de 5 metros de profundidad. Esta similitud cinemática consolida la elegancia del Teorema de Torricelli de 1643 y valida la premisa profunda del modelo: la conservación neta en la naturaleza exige que toda la energía potencial inyectada por la columna en el punto inicial se traduzca de forma transparente en energía cinética de chorro en el orificio inferior. Al medir la presión dinámica [[q]] final, observamos un aporte de 49 005 Pa, lo cual encapsula milimétricamente el valor original hidrostático; Bernoulli y el principio de Arquímedes confluyen con robusta exactitud formal. Esto implica que el modelo ideal es correcto.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Un ingeniero necesita estimar el caudal de agua que baja por una tubería vertical que conecta dos depósitos situados a distinta altura. El depósito superior tiene la superficie a [[z]] = 10 m con presión atmosférica. La tubería descarga en el depósito inferior a cota cero, también a presión atmosférica. El tubo tiene diámetro constante de 0,05 m.\r
\r
## Estimación física\r
Invocando el modelo ideal de Bernoulli, asumimos la conservación absoluta de la altura de energía [[H]] que conecta las superficies maestras de los dos tanques principales de agua. Al encontrarse abiertas a la atmósfera, las presiones se neutralizan algebraicamente mutuamente. Las velocidades macroscópicas en las inmensas áreas de reservorio son marginales. El balance central es, en esencia, un canje puramente gravitatorio hacia lo cinético. Cuantitativamente, usando la derivada formulada en forma de cabeza\r
\r
{{f:head}}\r
\r
entre los respectivos extremos del tubo de flujo:\r
la velocidad ideal estimada es aproximadamente 14,0 m/s para una diferencia de altura de 10 m.\r
Cuantificando ahora la presión dinámica con su teorema derivado\r
\r
{{f:q_dinamica}}\r
\r
:\r
la presión dinámica estimada es aproximadamente 98 000 Pa.\r
El caudal volumétrico resultante arrojaría como estimación ideal fundamental:\r
el caudal ideal de referencia es de alrededor de 2,75 por 10 elevado a menos 2 m3 por segundo, equivalente a 27,5 L/s.\r
## Interpretación\r
La cota principal de estudio revela matemáticamente el flujo supremo teóricamente aportable: 27,5 litros por cada segundo, limitando estructuralmente a todo proyecto empírico real. Adicionalmente, esto indica y resalta de forma contundente la monumental presión dinámica obtenida (98 000 Pa, virtualmente una atmósfera física). En el plano de las tolerancias tangibles, una turbulencia masiva emerge con un Reynolds que explota la escala empírica (700 000). Bajo estos violentos gradientes turbulentos, el modelo ideal puro cede la soberanía física; si aplicáramos Darcy-Weisbach y tomáramos el factor de fricción real de 0,015 en la rugosidad, las gigantescas pérdidas friccionales arruinarían todo el potencial de caída excediendo los 10 metros métricos, obligando con rotundidad a una disminución forzada e innegociable de la velocidad de flujo hasta resolver su nuevo balance energético iterado. En consecuencia, el diagnóstico preliminar ideal fue fenomenalmente eficaz demostrando la cota absoluta del diseño aunque las realidades entrópicas exijan una revisión ulterior obligatoria donde la fricción domina.\r
\r
`;export{e as default};
