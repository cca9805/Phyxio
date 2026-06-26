const e=`# Aplicaciones de dos masas unidas por cuerda\r
\r
## 1. Elevadores de contrapeso en edificios de gran altura\r
\r
Los ascensores modernos de gran altura emplean sistemas de contrapeso que funcionan esencialmente como máquinas de Atwood a gran escala. El contrapeso, con masa aproximadamente igual a la del coche vacío más la mitad de la carga nominal, reduce drásticamente el trabajo que debe realizar el motor.\r
\r
Cuando el ascensor sube con pasajeros, el contrapeso desciende y "ayuda" al motor a vencer la inercia del sistema. La diferencia de pesos entre cabina y contrapeso determina la aceleración natural del sistema. El motor solo debe compensar esta diferencia más las pérdidas por fricción. En un edificio de cien pisos, este diseño puede reducir el consumo energético hasta un sesenta por ciento comparado con un sistema sin contrapeso.\r
\r
El diseñador debe calcular la tensión en los cables considerando la aceleración máxima permitida por normativa de seguridad, típicamente alrededor de 1.5 metros por segundo cuadrado. Una aceleración excesiva causaría incomodidad a los pasajeros y estrés mecánico en los componentes.\r
\r
Variable dominante: la diferencia de masas entre cabina cargada y contrapeso, que determina la fuerza neta necesaria y el consumo energético del sistema.\r
Límite de validez: cuando la velocidad alcanza régimen constante, la aceleración es nula y la tensión se estabiliza en un valor diferente; el modelo de Atwood acelerado deja de describir adecuadamente la fase de velocidad constante.\r
\r
## 2. Funiculares y sistemas de transporte por cable en zonas montañosas\r
\r
Los funiculares utilizan dos cabinas conectadas por cable que se desplazan sobre vías inclinadas, compensando sus pesos mutuamente mediante el principio de Atwood. Cuando una cabina sube cargada de pasajeros, la otra desciende, y el motor solo debe vencer la diferencia de pesos más la fricción de rodadura.\r
\r
En la práctica ingenieril, el ángulo de inclinación modifica la componente efectiva de la gravedad a lo largo de la vía, pero la estructura del acoplamiento permanece análoga. La tensión en el cable de tracción debe calcularse considerando tanto la geometría del sistema como la aceleración deseada durante el arranque.\r
\r
Los sistemas modernos incorporan frenos de emergencia que se activan si la tensión cae bruscamente, detectando roturas de cable. Esta medida de seguridad explota el hecho de que en condiciones normales la tensión nunca es nula mientras el sistema opera.\r
\r
Variable dominante: la relación entre masas de ambas cabinas y la pendiente de la vía, que determinan conjuntamente la aceleración efectiva y la carga mecánica sobre la infraestructura.\r
Límite de validez: cuando la fricción de rodadura o la resistencia del aire se vuelven comparables a la diferencia de pesos, el modelo ideal deja de ser preciso y se requiere incluir fuerzas disipativas en el análisis.\r
\r
## 3. Sistemas de extracción minera en pozos verticales\r
\r
Las minas subterráneas emplean sistemas de jaulas conectadas por cable de acero que descienden y ascienden simultáneamente por el pozo principal. La jaula cargada de mineral desciende mientras la jaula vacía asciende, o viceversa, optimizando el ciclo de transporte.\r
\r
El ingeniero de minas debe verificar que la tensión en el cable nunca exceda la carga de trabajo admisible, considerando el factor de seguridad reglamentario. Para ello calcula la tensión teórica sumando el peso de la jaula, la carga, y el término de inercia debido a la aceleración del sistema completo.\r
\r
La velocidad máxima de operación está limitada por la capacidad del freno de seguridad y por la tensión máxima que puede soportar el cable durante las maniobras de frenado. Un cálculo incorrecto de estas tensiones puede resultar en rotura de cable con consecuencias catastróficas.\r
\r
Variable dominante: la masa total del sistema acoplado (ambas jaulas más cargas), que determina la inercia que el motor debe vencer para alcanzar la velocidad operativa en el tiempo reglamentado.\r
Límite de validez: cuando la elasticidad del cable de acero, típicamente de cientos de metros de longitud, produce oscilaciones significativas, el modelo de cuerda inextensible pierde validez y se requiere análisis de vibraciones mecánicas.\r
\r
## 4. Experimentos de laboratorio para medir la aceleración gravitatoria\r
\r
George Atwood diseñó originalmente su máquina para medir la gravedad con alta precisión utilizando los cronómetros disponibles en el siglo dieciocho. Al reducir la aceleración efectiva mediante el cociente de masas, prolongaba el tiempo de caída facilitando la medición.\r
\r
En laboratorios modernos de física universitaria, los estudiantes determinan [[g]] midiendo la aceleración del sistema para diferentes combinaciones de masas. Ajustando los valores de [[m1]] y [[m2]] para obtener aceleraciones pequeñas, pueden cronometrar el movimiento con instrumentos sencillos y aún así alcanzar precisión razonable.\r
\r
El método pedagógico incluye verificar que la tensión calculada coincide con lecturas de dinamómetros si están disponibles, y comprobar que la relación entre aceleración y diferencia de masas es lineal como predice la teoría.\r
\r
Variable dominante: la aceleración del sistema medida experimentalmente, que permite despejar el valor de la gravedad a partir de la diferencia de masas conocida y la suma de masas.\r
Límite de validez: cuando la fricción en la polea o la resistencia del aire sobre las masas introduce desviaciones sistemáticas superiores al uno por ciento respecto al valor teórico ideal.\r
\r
## 5. Grúas pórtico con sistema de equilibrio en puertos industriales\r
\r
Las grúas pórtico de gran envergadura emplean carros de contrapeso que se desplazan horizontalmente para compensar la carga suspendida, reduciendo el momento de vuelco sobre la estructura. El principio físico es análogo al de Atwood, donde el equilibrio de masas determina la estabilidad del sistema.\r
\r
Cuando el carro de carga se desplaza a una posición extendida, el carro de contrapeso se mueve automáticamente a la posición simétrica respecto al eje central para mantener el equilibrio de momentos. La aceleración del sistema de posicionamiento depende de la diferencia de masas entre ambos carros.\r
\r
El operario debe conocer la masa de la carga para ajustar correctamente la posición del contrapeso. Un error en esta estimación puede producir momentos desequilibrantes que estresen la estructura de la grúa o, en casos extremos, provoquen vuelco.\r
\r
Variable dominante: la posición relativa de los carros de carga y contrapeso respecto al eje de rotación, que determina el momento resultante y la estabilidad estructural de la grúa pórtico.\r
Límite de validez: cuando la carga oscila pendularmente debido a movimientos bruscos, aparecen fuerzas centrífugas adicionales que el modelo estático de equilibrio de masas no contempla.\r
`;export{e as default};
