const a=`# Ondas longitudinales en fluidos

## Contexto conceptual

Las **ondas longitudinales** constituyen el mecanismo fundamental de transporte de energía mecánica a través de fluidos. A diferencia de las ondas transversales en cuerdas, donde cada elemento se desplaza perpendicularmente a la dirección de propagación, en una onda longitudinal las partículas del medio oscilan **en la misma dirección** en que viaja la perturbación. El resultado observable es una sucesión alternante de **compresiones** (zonas de alta presión y densidad) y **rarefacciones** (zonas de baja presión y densidad).

Este leaf se enmarca dentro del bloque de ondas mecánicas y conecta directamente con el estudio previo de la [rapidez de propagación en cuerdas](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/velocidad-de-propagacion). El paso de cuerdas a fluidos introduce un cambio esencial: la propiedad restauradora ya no es la tensión lineal sino la **elasticidad volumétrica** del medio, cuantificada por [[B]]. Comprender esta transición es indispensable para abordar fenómenos como el sonido, las ondas sísmicas primarias y la ecografía médica.

## 🟢 Nivel esencial

Cuando un pistón, un diapasón o cualquier fuente vibra contra un fluido, empuja las moléculas cercanas y crea una zona de mayor densidad: una **compresión**. Las moléculas comprimidas empujan a las vecinas y retroceden, generando una zona de menor densidad: una **rarefacción**. Este ciclo se repite y la perturbación viaja alejándose de la fuente sin que el fluido se desplace globalmente.

La rapidez con que ese patrón de compresiones y rarefacciones avanza depende de dos propiedades del medio. Cuanto más rígido es el fluido (mayor [[B]]), más rápido las moléculas transmiten la presión. Cuanto más denso (mayor [[rho]]), más inercia oponen al movimiento y la perturbación avanza más despacio. La frecuencia [[f]] la fija la fuente, no el medio, mientras que la escala espacial [[lambda]] se ajusta como consecuencia.

> [!TIP]
> La onda transporta energía y momento, pero las moléculas individuales solo oscilan alrededor de su posición de equilibrio.

## 🔵 Nivel formal

La rapidez de propagación de una onda longitudinal en un fluido se obtiene del balance entre la fuerza restauradora elástica y la inercia del medio:

- **Rapidez de propagación**:
{{f:velocidad_longitudinal_fluidos}}
[[B]] representa el **módulo de compresibilidad volumétrica**: la razón entre el incremento de presión aplicado y la deformación relativa de volumen resultante. Valores altos de [[B]] indican un fluido difícil de comprimir, donde la restauración es vigorosa y la perturbación viaja rápido. [[rho]] aporta la inercia volumétrica que frena ese avance. La raíz cuadrada refleja que duplicar [[B]] no duplica [[v]]; la dependencia es sublineal.

Cuando una fuente oscila con frecuencia [[f]] en el seno de un fluido, la separación espacial entre compresiones consecutivas define la longitud de onda:

- **Longitud de onda**:
{{f:longitud_onda_longitudinal}}
Si el medio cambia de [[B]] o [[rho]] (por ejemplo al pasar de aire a agua), [[v]] cambia, y con [[f]] constante la escala espacial [[lambda]] se reajusta proporcionalmente.

La **impedancia acústica** cuantifica la oposición del fluido a ser deformado por la onda de presión:

- **Impedancia acústica**:
{{f:impedancia_acustica}}
[[Z]] resulta del producto de la inercia volumétrica [[rho]] y la rapidez de propagación [[v]]. En la frontera entre dos fluidos con impedancias distintas, la diferencia de [[Z]] determina qué fracción de la energía se refleja y qué fracción se transmite. Este concepto es la base física de la ecografía y de la reflexión del sonido en interfaces líquido-gas.

## 🔴 Nivel estructural

La expresión de [[v]] procede de la **ecuación de onda linealizada** para un fluido ideal. Se parte de la conservación de masa (ecuación de continuidad) y de la segunda ley de Newton aplicada a un elemento diferencial de fluido (ecuación de Euler), combinándolas bajo la hipótesis de perturbaciones pequeñas. La condición de compresión **adiabática** es crucial: si la onda avanza tan rápido que no hay intercambio térmico apreciable, [[B]] es el módulo adiabático. En gases ideales esto equivale al producto de la presión por el coeficiente adiabático del gas.

> [!WARNING]
> Si el proceso de compresión fuera isotérmico (frecuencias extremadamente bajas o medios con alta conductividad térmica), habría que sustituir el módulo adiabático por el isotérmico, reduciendo [[v]] de forma apreciable.

**Dependencias cruzadas y régimen de validez.** La formulación supone un medio **continuo, homogéneo e isótropo** con perturbaciones de amplitud pequeña frente a la presión de equilibrio. Cuando la amplitud crece, aparecen efectos no lineales: la zona de compresión viaja ligeramente más rápido que la de rarefacción, deformando el perfil hasta generar ondas de choque. El modelo lineal deja de ser válido cuando la variación de presión es comparable a la presión estática.

La impedancia [[Z]] gobierna los **coeficientes de reflexión y transmisión** en una interfaz plana. Dos fluidos con [[Z]] idénticas permiten transmisión total; una diferencia grande (aire-agua, por ejemplo, con una razón de impedancias cercana a 3500) produce reflexión casi completa. Este fenómeno explica por qué el sonido apenas penetra desde el aire al agua sin un acoplador intermedio.

La longitud de onda [[lambda]] fija la **resolución espacial** del fenómeno ondulatorio. Obstáculos con dimensiones comparables a [[lambda]] producen difracción significativa. Para frecuencias audibles en aire, [[lambda]] varía desde unos diecisiete metros en el extremo grave hasta poco más de un centímetro en el agudo, lo que determina el diseño de barreras acústicas, resonadores y altavoces.

## Interpretación física profunda

La rapidez [[v]] no describe el movimiento de materia sino la **velocidad de fase del patrón de presión**. Cada molécula oscila longitudinalmente alrededor de su posición de equilibrio con una amplitud muy inferior a [[lambda]]. Lo que viaja es la información sobre la compresión, no las moléculas mismas.

La dualidad entre [[B]] (restauración) y [[rho]] (inercia) es una instancia del principio general que rige toda propagación mecánica. En cuerdas el par análogo es tensión y densidad lineal; en sólidos elásticos, el módulo de Young y la densidad. Reconocer esta estructura permite predecir cualitativamente cómo varía [[v]] sin memorizar fórmulas separadas: siempre crece con la rigidez y decrece con la inercia.

## Orden de magnitud

En **aire a 20 °C**, [[v]] ronda los 343 m/s. En **agua dulce** sube a unos 1480 m/s, casi 4.3 veces más. En **acero** (onda longitudinal en sólido), se alcanzan unos 5900 m/s.

- Un resultado de [[v]] inferior a 100 m/s en un gas convencional es sospechoso de error en [[B]] o [[rho]].
- Un resultado superior a 6000 m/s en un líquido común delata probablemente una confusión de unidades o un módulo de compresibilidad erróneo.

Comparar siempre el orden de magnitud del resultado con la referencia de 343 m/s en aire permite detectar rápidamente absurdos numéricos.

## Método de resolución personalizado

1. **Identificar el medio**: determinar si es gas, líquido o sólido; localizar [[B]] y [[rho]] del material en las condiciones dadas.
2. **Seleccionar la fórmula adecuada**: para rapidez usar la relación entre [[v]], [[B]] y [[rho]]; para escala espacial usar la relación con [[f]].
3. **Verificar unidades**: [[B]] en pascales y [[rho]] en kg/m³ producen [[v]] en m/s directamente. Cuidado con unidades compuestas como kPa o g/cm³.
4. **Evaluar coherencia**: comparar el resultado con la referencia del medio (343 m/s en aire, 1480 m/s en agua). Desviaciones de más de un factor dos exigen revisión.
5. **Interpretar físicamente**: explicar si el resultado indica un medio rígido o blando, denso o ligero, y qué implica para la transmisión de energía acústica.

## Casos especiales y ejemplo extendido

**Caso 1 — Cambio de medio.** Cuando una onda longitudinal pasa de aire a agua, [[v]] se multiplica aproximadamente por 4.3. Con [[f]] fijada por la fuente, [[lambda]] también se multiplica por ese factor. La onda se "estira" espacialmente al entrar en el medio más rígido y denso. La mayor parte de la energía se refleja por la enorme diferencia de [[Z]].

**Caso 2 — Efecto de la temperatura en gases.** Al calentar un gas a presión constante, [[rho]] disminuye porque el gas se expande. Simultáneamente, el módulo adiabático cambia proporcionalmente a la presión (que se mantiene), de modo que [[v]] aumenta con la temperatura. En aire, la rapidez crece aproximadamente 0.6 m/s por cada grado celsius. Esto explica por qué el sonido viaja más rápido en verano que en invierno y por qué las capas atmosféricas a distinta temperatura curvan los rayos acústicos (refracción térmica).

## Preguntas reales del alumno

**¿Por qué la frecuencia no cambia al pasar la onda de un fluido a otro?**
Porque la fuente impone el ritmo temporal. En la frontera, cada compresión que llega genera una compresión en el segundo medio al mismo ritmo. Lo que se ajusta es [[lambda]], no [[f]].

**¿Puede existir una onda longitudinal en el vacío?**
No. La onda longitudinal mecánica necesita materia que se comprima y se expanda. Sin moléculas no hay restauración elástica ni inercia; tanto [[B]] como [[rho]] dejan de existir.

**¿Mayor densidad siempre significa menor rapidez?**
No necesariamente. Aunque [[rho]] aparece en el denominador, un líquido denso suele tener un [[B]] mucho mayor que un gas ligero, y el efecto neto puede ser una rapidez mayor. El agua es más densa y más rápida que el aire porque su [[B]] es enormemente superior.

**¿La impedancia acústica mide pérdida de energía?**
No. [[Z]] mide la oposición del medio a la deformación, no la disipación. La pérdida de energía se asocia a la viscosidad y la absorción, que no entran en el modelo ideal.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en la [rapidez de propagación en cuerdas](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/velocidad-de-propagacion), donde la estructura raíz cuadrada de la rapidez (rigidez sobre inercia) se introduce por primera vez. Comprender la analogía facilita la extensión a ondas en sólidos y a ondas electromagnéticas.

Desde aquí, el alumno puede avanzar hacia [ondas estacionarias](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias) para estudiar resonancia en tubos, o hacia ondas en fluidos más complejas donde la viscosidad y la compresibilidad finita modifican la dispersión.

## Síntesis final

Las ondas longitudinales en fluidos transportan energía mediante compresiones y rarefacciones sucesivas. La rapidez de propagación refleja la competencia entre la rigidez volumétrica del medio y su inercia, mientras que la impedancia acústica gobierna el reparto de energía en las interfaces. Dominar estas relaciones permite analizar desde la propagación del sonido en la atmósfera hasta el diseño de transductores ultrasónicos y la interpretación de ecografías médicas.
`;export{a as default};
