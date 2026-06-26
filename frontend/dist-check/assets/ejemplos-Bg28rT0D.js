const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de hierro de 5 kg a 800 K se introduce en un gran lago a 290 K hasta alcanzar el equilibrio térmico. La capacidad calorífica específica del hierro es 450 J/(kg·K). Calcular: (a) la variación de entropía del bloque, (b) la variación de entropía del lago, (c) la variación de entropía del universo, y (d) la exergía destruida en el proceso si la temperatura de referencia es 290 K. Determinar si el proceso es reversible, irreversible o imposible.\r
\r
## Datos\r
\r
- Masa del hierro: 5 kg\r
- Temperatura inicial del hierro: [[T_sis]] = 800 K\r
- Temperatura del lago (reservorio, constante): [[T_ent]] = 290 K
- Temperatura final del hierro (equilibrio): 290 K
- Capacidad calorífica específica del hierro: 450 J/(kg·K)
- Calor real cedido por el bloque: [[Q_sis]], obtenido a partir del enfriamiento.
\r
## Definición del sistema\r
\r
El sistema es el bloque de hierro. El entorno es el lago, modelado como reservorio térmico a temperatura constante [[T_ent]] = 290 K (su masa es tan grande que su temperatura no cambia apreciablemente). El universo termodinámico es bloque + lago.\r
\r
## Modelo físico\r
\r
Se aplica el criterio de irreversibilidad:\r
\r
{{f:criterio_irreversibilidad}}\r
\r
Para [[DeltaS_sis]] se usa la fórmula de calentamiento/enfriamiento con capacidad calorífica constante (función de estado). Para [[DeltaS_ent]] se usa la fórmula isotérmica con el calor real cedido por el bloque al lago. La hipótesis central es que la capacidad calorífica del hierro es constante entre 290 K y 800 K (desviación real menor del 8% para hierro sólido, aceptable para una estimación).\r
\r
## Justificación del modelo\r
\r
El modelo es válido porque:\r
- El lago es suficientemente grande para que su temperatura permanezca constante (reservorio ideal): un lago de un millón de kg de agua absorbe el calor del bloque sin cambiar apreciablemente su temperatura.\r
- El bloque alcanza el equilibrio a 290 K (mismo T que el lago al final).\r
\r
El modelo dejaría de valer si:\r
- El lago fuese un recipiente pequeño (la temperatura del agua cambiaría apreciablemente).\r
- El hierro sufriera un cambio de fase en el intervalo (la transición alotrópica α→γ del hierro ocurre a 1185 K, fuera de nuestro rango).\r
\r
## Resolución simbólica\r
\r
Paso 1: [[DeltaS_sis]] (función de estado, camino reversible de enfriamiento isobárico):\r
\r
La entropía del bloque se evalúa con el camino reversible de enfriamiento y capacidad calorífica constante.\r
\r
Paso 2: Calor real cedido por el bloque al lago:\r
\r
El calor real cedido se obtiene multiplicando masa, capacidad calorífica y descenso de temperatura.\r
\r
Paso 3: [[DeltaS_ent]] (reservorio isotérmico):\r
\r
La entropía del lago se obtiene dividiendo el calor real absorbido por [[T_ent]].\r
\r
Paso 4: Balance del universo:\r
\r
{{f:criterio_irreversibilidad}}\r
\r
## Sustitución numérica\r
\r
**[[DeltaS_sis]]**: con masa de 5 kg, capacidad calorífica de 450 J/(kg·K), estado final a 290 K y [[T_sis]] = 800 K, el cociente de temperaturas es 290/800 = 0.3625. Su logaritmo natural es aproximadamente −1.015, por lo que el bloque queda en [[DeltaS_sis]] ≈ −2284 J/K.\r
\r
**Calor cedido por el bloque**: el producto de masa, capacidad calorífica y descenso térmico da 1147500 J, es decir, 1147.5 kJ.\r
\r
**[[DeltaS_ent]]**: dividir 1147500 J entre 290 K da aproximadamente +3957 J/K. Así [[DeltaS_ent]] ≈ +3957 J/K.\r
\r
**[[DeltaS_univ]]**: sumar −2284 + 3957 = +1673 J/K. Así [[DeltaS_univ]] ≈ +1673 J/K.\r
\r
**Exergía destruida**: multiplicar T_0 × [[S_gen]] = 290 × 1673 ≈ 485170 J ≈ 485 kJ.\r
\r
## Validación dimensional\r
\r
El chequeo dimensional confirma que cada término entrópico queda en J/K y que la exergía destruida queda en julios.\r
\r
- [[DeltaS_sis]]: \`[M] · [L² T⁻² Θ⁻¹] · [1] = [M L² T⁻² Θ⁻¹]\` → J/K\r
- [[DeltaS_ent]]: \`[M L² T⁻²] / [Θ] = [M L² T⁻² Θ⁻¹]\` → J/K\r
- Exergía: \`[Θ] · [M L² T⁻² Θ⁻¹] = [M L² T⁻²]\` → J\r
\r
## Interpretación física\r
\r
El bloque de hierro pierde una gran cantidad de entropía ([[DeltaS_sis]] ≈ −2284 J/K) al enfriarse desde 800 K hasta 290 K. Sin embargo, el lago gana aún más entropía ([[DeltaS_ent]] ≈ +3957 J/K) porque absorbe el mismo calor a una temperatura mucho menor (290 K vs. 800 K). La asimetría fundamental: la misma energía vale «más entropía» cuando es absorbida a baja temperatura.\r
\r
El resultado [[DeltaS_univ]] ≈ +1673 J/K >> 0 confirma que el proceso es **fuertemente irreversible**. La gran diferencia de temperaturas (800 K vs. 290 K) genera una irreversibilidad enorme. La exergía destruida (≈ 485 kJ) representa el trabajo potencial que podría haberse extraído si se hubiera usado una máquina térmica reversible entre el bloque y el lago, en lugar del simple contacto térmico directo.\r
\r
Esto significa que la energía se conserva, pero su capacidad de transformarse en trabajo disminuye. Físicamente, el salto térmico domina: el lago recibe calor a baja temperatura y por eso aumenta su entropía más de lo que el bloque la reduce.\r
\r
Si en vez de sumergir el bloque directamente se hubiese usado una máquina de Carnot operando entre 800 K y 290 K, se habría podido extraer hasta 485 kJ de trabajo útil. Ese trabajo se ha perdido irreversiblemente al hacer el contacto directo.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una planta petroquímica, un flujo de gases de combustión a 1200 K se enfría hasta 500 K en un intercambiador de calor que precalienta aire de combustión de 300 K a 600 K. El flujo másico de gases es 10 kg/s con capacidad calorífica media de 1100 J/(kg·K) y el de aire es 15 kg/s con capacidad calorífica media de 1005 J/(kg·K). El ingeniero necesita calcular la tasa de generación de entropía del intercambiador para evaluar su eficiencia de segunda ley y decidir si vale la pena invertir en un intercambiador con menor salto térmico.\r
\r
## Estimación física\r
\r
Estimación de orden de magnitud: para los gases de combustión, que se enfrían de 1200 K a 500 K, la contribución entrópica es negativa porque pierden dispersión térmica.\r
\r
La tasa asociada a los gases es aproximadamente −9625 J/(K·s).\r
\r
Para el aire, que se calienta de 300 K a 600 K, la contribución es positiva porque absorbe calor a menor temperatura media.\r
\r
La tasa asociada al aire es aproximadamente +10447 J/(K·s).\r
\r
Variación total del universo (el universo es gases + aire, sin reservorio externo):\r
\r
La suma de ambas contribuciones da [[DeltaS_univ]] ≈ +822 J/(K·s).\r
\r
La tasa de generación de entropía es [[S_gen]] ≈ 822 W/K.\r
\r
La exergía destruida por segundo es: 300 × 822 ≈ 246600 W ≈ 247 kW.\r
\r
## Interpretación\r
\r
El intercambiador destruye 247 kW de exergía continuamente. Si los gases de combustión se enfriaran hasta una temperatura más próxima a la del aire (menor ΔT medio logarítmico), la generación de entropía disminuiría. Sin embargo, eso requeriría mayor superficie de intercambio (mayor inversión). El análisis entrópico proporciona el criterio cuantitativo: ¿el ahorro en exergía (proporcional a [[S_gen]] reducido) justifica el coste del intercambiador más grande?\r
\r
En la práctica, la optimización termoeconómica busca el ΔT medio logarítmico que minimiza el coste total (inversión + pérdidas exergéticas valoradas en EUR/kWh). La tasa [[S_gen]] ≈ 822 W/K indica que este intercambiador tiene margen de mejora significativo, dado que su eficiencia de segunda ley es aproximadamente (1 − 822/valor_máximo_teórico) < 1.
\r
La metodología de minimización de generación de entropía (EGM, Entropy Generation Minimisation) desarrollada por Adrian Bejan es la herramienta estándar en ingeniería térmica para este tipo de optimización, y se basa enteramente en el cálculo correcto de [[DeltaS_univ]] y [[S_gen]].\r
`;export{e as default};
