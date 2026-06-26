const e=`# Variación de entropía\r
\r
## Contexto conceptual\r
\r
La definición de Clausius establece que la **entropía** es una función de estado cuya variación se calcula mediante la integral del calor reversible dividido por la temperatura absoluta. Este leaf se centra en el paso operativo: dado un proceso concreto (isotérmico, calentamiento, expansión de gas ideal), **¿cómo se calcula numéricamente [[DeltaS]]?**\r
\r
Saber calcular [[DeltaS]] es la herramienta que permite evaluar si un proceso es posible, cuánta irreversibilidad genera y cómo se redistribuye la energía térmica entre sistema y entorno. Sin dominar esta técnica de cálculo, la segunda ley queda como una declaración abstracta incapaz de producir predicciones cuantitativas.\r
\r
La variación de entropía conecta directamente con la eficiencia de máquinas térmicas, la dirección espontánea de procesos naturales y la degradación de la energía útil. Comprender sus distintas fórmulas según el tipo de proceso es el primer paso para analizar balances entrópicos completos.\r
\r
## 🟢 Nivel esencial\r
\r
La **variación de entropía** [[DeltaS]] mide cuánto cambia la dispersión energética de un sistema al pasar de un estado a otro. Es una cantidad que depende solo de los estados inicial y final, nunca del camino que se recorra entre ellos.\r
\r
> [!TIP]\r
> Piensa en [[DeltaS]] como un «contador de desorden energético»: si el sistema absorbe calor, [[DeltaS]] sube; si cede calor, [[DeltaS]] baja. Cuanto menor es la temperatura a la que ocurre el intercambio, mayor es el impacto en la entropía.\r
\r
Para un proceso a **temperatura constante** (cambio de fase, expansión isotérmica), basta dividir el calor reversible [[Q_rev]] entre la temperatura [[T]] del proceso. Para un **calentamiento gradual**, la temperatura varía y aparece un logaritmo natural del cociente de temperaturas. Para un **gas ideal** que cambia simultáneamente de temperatura y volumen, hay dos contribuciones independientes que se suman.\r
\r
La clave intuitiva es que la entropía es más sensible al calor cuando la temperatura es baja: un julio de calor a 100 K produce diez veces más entropía que el mismo julio a 1000 K.\r
\r
## 🔵 Nivel formal\r
\r
La variación de entropía se calcula de forma diferente según el proceso:\r
\r
- **Proceso isotérmico** (temperatura constante):\r
\r
{{f:variacion_entropia_isotermica}}\r
\r
Esta expresión se aplica directamente a cambios de fase (fusión, vaporización) y a expansiones isotérmicas de gas ideal. [[Q_rev]] es el calor del camino reversible equivalente y [[T]] la temperatura absoluta constante en kelvin.\r
\r
- **Calentamiento isobárico** con capacidad calorífica constante:\r
\r
{{f:variacion_entropia_calentamiento}}\r
\r
Aquí [[m]] es la masa, [[c_p]] la capacidad calorífica específica, [[T_f]] la temperatura final y [[T_i]] la inicial, ambas en kelvin. El logaritmo natural refleja que cada incremento de temperatura aporta menos entropía cuanto más caliente está el sistema.\r
\r
- **Gas ideal** con cambio simultáneo de temperatura y volumen:\r
\r
{{f:variacion_entropia_gas_ideal}}\r
\r
La primera contribución ([[n]]·[[c_v]]·ln([[T_f]]/[[T_i]])) es la contribución **térmica**: redistribución de energía interna. La segunda ([[n]]·[[R]]·ln([[V_f]]/[[V_i]])) es la contribución **volumétrica**: redistribución espacial de moléculas. Ambas son independientes y aditivas porque [[DeltaS]] es función de estado.\r
\r
> [!NOTE]\r
> La forma con variables (T, V) usa [[c_v]]; la forma alternativa con variables (T, P) usa [[c_p]] y un término con presiones. Ambas dan el mismo [[DeltaS]] porque es función de estado.\r
\r
## 🔴 Nivel estructural\r
\r
La estructura del cálculo de [[DeltaS]] revela propiedades profundas de la entropía:\r
\r
**Aditividad por tramos**: si un proceso cruza un cambio de fase, [[DeltaS]] total es la suma de las contribuciones de cada tramo. Para calentar hielo de −10 °C a vapor a 120 °C se necesitan cinco tramos: calentamiento del hielo, fusión, calentamiento del agua líquida, vaporización y calentamiento del vapor. Cada tramo usa su fórmula específica.\r
\r
**Independencia del camino**: como [[DeltaS]] es función de estado, se puede calcular por cualquier camino reversible que conecte los mismos estados inicial y final. Si el proceso real es irreversible, se inventa un camino reversible ficticio con los mismos extremos y se calcula [[DeltaS]] sobre ese camino.\r
\r
> [!WARNING]\r
> El calor real medido en un proceso irreversible **no** sirve para calcular [[DeltaS]]. Solo [[Q_rev]] del camino reversible equivalente produce el valor correcto.\r
\r
**Sensibilidad térmica inversa**: la dependencia \\(1/T\\) implica que a bajas temperaturas la entropía es extremadamente sensible al calor. Cerca del cero absoluto, cualquier mínimo calor produce variaciones entrópicas enormes, lo que conecta con el tercer principio de la termodinámica.\r
\r
**Límite isentrópico**: cuando [[DeltaS]] es cero en la fórmula de gas ideal, se recupera la relación adiabática reversible. Esto demuestra que los procesos adiabáticos reversibles son exactamente aquellos para los cuales las contribuciones térmica y volumétrica se cancelan mutuamente.\r
\r
**Descomposición en grados de libertad**: la contribución térmica ([[c_v]]·ln) refleja la redistribución de energía entre grados de libertad internos (traslación, rotación, vibración). La contribución volumétrica ([[R]]·ln) refleja la redistribución espacial. Un gas con más grados de libertad (mayor [[c_v]]) tiene una contribución térmica proporcionalmente mayor.\r
\r
La divergencia del resultado cuando [[T]] → 0 K o cuando algún volumen tiende a cero no es un defecto matemático sino un reflejo del tercer principio: el cero absoluto es inalcanzable y ningún gas real puede comprimirse a volumen nulo.\r
\r
## Interpretación física profunda\r
\r
La variación de entropía no es una abstracción formal sino una medida operativa de la **calidad de la energía**. Un [[DeltaS]] positivo del sistema indica que la energía se ha dispersado hacia configuraciones menos aprovechables para producir trabajo. Un [[DeltaS]] negativo del sistema solo es posible a costa de un [[DeltaS]] positivo aún mayor del entorno.\r
\r
La **asimetría entre absorción y cesión** de calor se manifiesta en que calentar un cuerpo de [[T_i]] a [[T_f]] produce un [[DeltaS]] positivo, pero enfriar ese mismo cuerpo al estado original no «deshace» la irreversibilidad del entorno. El universo como conjunto siempre avanza hacia mayor entropía total.\r
\r
> [!NOTE]\r
> La variación de entropía es la magnitud que permite cuantificar la «flecha del tiempo» termodinámica: distingue pasado de futuro en procesos macroscópicos.\r
\r
## Orden de magnitud\r
\r
- **Fusión de 1 mol de hielo** a 273 K: [[DeltaS]] ≈ 22 J/(mol·K).\r
- **Vaporización de 1 mol de agua** a 373 K: [[DeltaS]] ≈ 109 J/(mol·K) — unas 5 veces más que la fusión.\r
- **Calentamiento de 1 kg de agua** de 20 °C a 80 °C: [[DeltaS]] ≈ 780 J/K.\r
- **Expansión libre** de 1 mol de gas ideal al doble de volumen: [[DeltaS]] = [[R]]·ln(2) ≈ 5.76 J/(mol·K).\r
\r
Si un cálculo produce [[DeltaS]] del orden de miles de J/K para un sistema de pocos gramos sin cambio de fase, probablemente hay un error de unidades (Celsius en lugar de kelvin, o calor en calorías sin convertir a julios).\r
\r
> [!WARNING]\r
> Un [[DeltaS]] negativo del sistema mayor en valor absoluto que 500 J/K para procesos cotidianos es sospechoso y requiere verificación de datos.\r
\r
## Método de resolución personalizado\r
\r
1. **Identificar el tipo de proceso**: ¿es isotérmico (cambio de fase, expansión isotérmica)? ¿Es calentamiento/enfriamiento sin cambio de fase? ¿Es un gas ideal con cambio de T y V simultáneo?\r
2. **Seleccionar la fórmula correcta** según el proceso identificado.\r
3. **Convertir temperaturas a kelvin** antes de sustituir (sumar 273.15 a valores en Celsius).\r
4. **Verificar si hay cambio de fase intermedio**: si el rango de temperaturas cruza un punto de fusión o ebullición, calcular por tramos.\r
5. **Sustituir y evaluar**: calcular el logaritmo natural con precisión. Recordar que ln(1) = 0 y ln(2) ≈ 0.693.\r
6. **Comprobar coherencia de signos**: calentamiento o absorción de calor → [[DeltaS]] > 0; enfriamiento o cesión → [[DeltaS]] < 0.\r
7. **Verificar orden de magnitud**: comparar con las referencias anteriores para detectar resultados absurdos.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso 1: Expansión libre de gas ideal**. Un gas ideal se expande al vacío: no hay calor real ni trabajo externo. Sin embargo, [[DeltaS]] no es cero porque la entropía es función de estado. Se calcula imaginando un camino reversible entre los mismos estados. Este ejemplo demuestra que [[DeltaS]] no requiere calor real: depende solo de los estados.\r
\r
**Caso 2: Mezcla de dos bloques metálicos a diferente temperatura**. Un bloque a 500 K y otro a 300 K se ponen en contacto térmico hasta alcanzar equilibrio (400 K si masas y capacidades iguales). El bloque caliente pierde entropía: [[DeltaS]]₁ = [[m]]·[[c_p]]·ln(400/500) < 0. El bloque frío gana entropía: [[DeltaS]]₂ = [[m]]·[[c_p]]·ln(400/300) > 0. La variación total [[DeltaS]]₁ + [[DeltaS]]₂ > 0 siempre: el proceso irreversible genera entropía neta en el universo.\r
\r
> [!TIP]\r
> En la mezcla, el bloque frío gana más entropía de la que pierde el caliente. La asimetría surge de la dependencia 1/T: la misma cantidad de calor produce más entropía al ser absorbida a baja temperatura.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué se usa [[Q_rev]] y no el calor real?**\r
Porque [[DeltaS]] es función de estado: su valor depende solo de los estados inicial y final. El camino reversible es una herramienta de cálculo que garantiza el valor correcto. En un proceso irreversible, el calor real medido es menor (en absorción) que [[Q_rev]], pero [[DeltaS]] tiene el mismo valor porque no depende del camino.\r
\r
**¿El [[DeltaS]] del sistema puede ser negativo?**\r
Sí. Un sistema puede perder entropía (cesión de calor, compresión). Lo que la segunda ley prohíbe es que [[DeltaS]] del **universo** (sistema + entorno) sea negativo. Si el sistema pierde entropía, el entorno gana al menos esa misma cantidad.\r
\r
**¿Por qué aparece un logaritmo en calentamiento pero no en proceso isotérmico?**\r
Porque en el proceso isotérmico [[T]] es constante y la relación de Clausius se reduce a una división directa. En calentamiento, [[T]] varía y hay que integrar el intercambio reversible; de ahí aparece el logaritmo del cociente de temperaturas.\r
\r
**¿Qué ocurre si hay cambio de fase a mitad del calentamiento?**\r
Hay que dividir el cálculo en tramos: primero el calentamiento hasta la temperatura de transición, luego el cambio de fase (fórmula isotérmica con el calor latente), y después continuar el calentamiento desde la nueva fase. Cada tramo aporta su propia contribución a [[DeltaS]] total.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
El cálculo de [[DeltaS]] es prerequisito para:\r
- [Procesos reversibles](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/procesos-reversibles): donde [[DeltaS]]_universo = 0.\r
- [Procesos irreversibles](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/procesos-irreversibles): donde [[DeltaS]]_universo > 0.\r
- El ciclo de Carnot, que opera entre isotermas (fórmula isotérmica) y adiabáticas (isentrópicas).\r
\r
Conecta hacia atrás con la [definición de entropía](leaf:física-clasica/termodinámica/entropía-y-segunda-ley/entropía/definición) y con la [capacidad calorífica](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/calor-específico) que aparece como parámetro material.\r
\r
La habilidad de calcular [[DeltaS]] por tramos es esencial en ingeniería térmica para evaluar la eficiencia de intercambiadores de calor, turbinas y compresores.\r
\r
## Síntesis final\r
\r
Calcular la variación de entropía requiere identificar el tipo de proceso, elegir la fórmula adecuada y respetar las unidades en kelvin. El resultado es siempre una función de estado que cuantifica la redistribución de energía térmica, independiente del camino real. Dominar las tres fórmulas fundamentales (isotérmica, calentamiento y gas ideal) permite abordar cualquier proceso termodinámico por descomposición en tramos elementales.\r
`;export{e as default};
