# Ejemplo tipo examen

## Enunciado

Una mezcla de nitrógeno y hidrógeno se introduce en un reactor industrial para producir amoniaco mediante el proceso de Haber. Los datos termodinámicos estándar para la reacción de síntesis son:

- Variación de entalpía estándar: menos 92 000 J por mol de amoniaco producido
- Variación de entropía estándar: menos 198 J por kelvin y mol

Determinar la variación de energía libre de Gibbs a 298 K y a 700 K, calcular la temperatura de inversión, e interpretar físicamente qué régimen es más adecuado para el proceso industrial teniendo en cuenta únicamente el criterio termodinámico.

## Datos

- Variación de entalpía: menos 92 000 J/mol
- Variación de entropía: menos 198 J/(mol·K)
- Temperatura primera evaluación: 298 K
- Temperatura segunda evaluación: 700 K

## Definición del sistema

El sistema es un mol de amoniaco producido en la reacción de síntesis a presión constante. Se trabaja en el marco del modelo estándar de Gibbs con [[DeltaH]] y [[DeltaS]] constantes. Las magnitudes centrales son [[DeltaG]], [[DeltaH]], [[DeltaS]], [[T]] y [[T_inv]].

## Modelo físico

La reacción de síntesis de amoniaco opera a presión y temperatura controladas. El criterio de espontaneidad a P y T constantes es el signo de [[DeltaG]], calculado mediante la definición de Gibbs. Como [[DeltaH]] es negativa y [[DeltaS]] también es negativa, el proceso pertenece al cuadrante donde la espontaneidad solo se mantiene por debajo de la temperatura de inversión [[T_inv]]: a bajas temperaturas domina el impulso entálpico (favorable); a altas temperaturas domina el término [[T]]·[[DeltaS]] (desfavorable porque [[DeltaS]] es negativa).

## Justificación del modelo

El modelo estándar de Gibbs es válido porque se trabaja a presión constante y se evalúa el proceso en torno a 298 K y 700 K, rango en el que los datos tabulados de [[DeltaH]] y [[DeltaS]] son razonablemente constantes para la síntesis de amoniaco. El modelo dejaría de ser válido si se quisiera analizar el proceso por encima de 1500 K, donde las capacidades caloríficas cambian significativamente, o si la presión variara durante el proceso.

## Resolución simbólica

Aplicando la definición de la variación de energía libre de Gibbs:

{{f:definicion_gibbs}}

Para la temperatura de inversión, imponiendo que [[DeltaG]] sea nulo:

{{f:temperatura_inversion}}

## Sustitución numérica

**A 298 K:**

Multiplicar 298 K por menos 198 J/(mol·K) da el término entrópico: menos 58 996 J/mol (aproximadamente menos 59 000 J/mol). Restar ese valor de [[DeltaH]] (menos 92 000 J/mol): menos 92 000 menos (menos 59 000) da menos 33 000 J/mol. Por tanto [[DeltaG]] a 298 K es aproximadamente menos 33 000 J/mol, es decir, [[DeltaG]] ≈ −33 kJ/mol.

**A 700 K:**

Multiplicar 700 K por menos 198 J/(mol·K) da menos 138 600 J/mol. Restar de [[DeltaH]]: menos 92 000 menos (menos 138 600) da más 46 600 J/mol. Por tanto [[DeltaG]] a 700 K es aproximadamente más 47 kJ/mol, es decir, [[DeltaG]] ≈ +47 kJ/mol.

**Temperatura de inversión:**

Dividir [[DeltaH]] entre [[DeltaS]]: menos 92 000 J/mol entre menos 198 J/(mol·K) da aproximadamente 465 K. Por tanto [[T_inv]] ≈ 465 K.

## Validación dimensional

Las unidades de [[DeltaG]] se verifican así: julios divididos entre mol para [[DeltaH]], y kelvin multiplicado por julios divididos entre kelvin y mol para el término [[T]]·[[DeltaS]], resultan ambos en J/mol. La diferencia es dimensionalmente homogénea `[M L² T⁻²]` por mol.

Para [[T_inv]], la dimensión es julios divididos entre (mol) sobre julios divididos entre (mol·kelvin), lo que da kelvin: dimensión `[Θ]`, coherente con una temperatura.

## Interpretación física

A 298 K la variación de Gibbs es negativa (aproximadamente menos 33 kJ/mol), lo que indica que la síntesis de amoniaco es **termodinámicamente espontánea** a temperatura ambiente. El impulso entálpico (la exotermicidad de la reacción) domina sobre el coste entrópico de reducir el número de moles gaseosos, y el resultado neto es favorable.

A 700 K la situación se invierte radicalmente: [[DeltaG]] ≈ +47 kJ/mol, lo que indica que el proceso es **no espontáneo** a esa temperatura. El término [[T]]·[[DeltaS]] —que actúa con signo negativo porque [[DeltaS]] es negativa— ha crecido tanto que supera la exotermicidad de la reacción, haciendo desfavorable la formación de amoniaco.

La temperatura de inversión [[T_inv]] ≈ 465 K marca el umbral exacto: por debajo de 465 K el proceso es espontáneo; por encima, no lo es. Industrialmente, el proceso de Haber opera a temperaturas de 400–500 °C (673–773 K), lo que termodinámicamente sería no espontáneo según este modelo. La razón es exclusivamente cinética: a temperatura ambiente la reacción es tan lenta que no es viable industrialmente, y se usan catalizadores de hierro a temperatura elevada para acelerar la cinética a expensas de la espontaneidad termodinámica. El equilibrio se desplaza hacia los productos controlando la presión (varios cientos de atmósferas), que no está contemplada en el modelo estándar de Gibbs pero modifica significativamente el criterio real de espontaneidad.

Si [[DeltaH]] fuera la mitad de negativa (solo menos 46 kJ/mol), manteniendo el mismo [[DeltaS]], [[T_inv]] sería de solo 232 K: el proceso sería no espontáneo ya a temperatura ambiente, y el problema industrial sería mucho más grave. Esto muestra que la exotermicidad de la reacción es crucial para mantener la ventana de espontaneidad a temperaturas moderadas.

---

# Ejemplo de aplicación real

## Contexto

La formación de herrumbre (óxido de hierro hidratado) sobre estructuras de acero expuestas a la intemperie es uno de los fenómenos de corrosión más costosos a nivel industrial. El análisis termodinámico mediante [[DeltaG]] permite comprender por qué este proceso ocurre espontáneamente en condiciones ambiente y cómo las condiciones ambientales (temperatura, humedad) afectan a su velocidad termodinámica.

Para la oxidación simplificada del hierro, los datos a 298 K son aproximadamente: variación de entalpía de formación del óxido ferroso de alrededor de menos 265 kJ/mol y variación de entropía de alrededor de menos 70 J/(mol·K). Estas son magnitudes del orden correcto para un análisis cualitativo.

## Estimación física

A 298 K (temperatura ambiente estándar), multiplicar 298 K por menos 70 J/(mol·K) da el término entrópico en torno a menos 20 860 J/mol (aproximadamente menos 21 kJ/mol). Restar ese valor de [[DeltaH]] (menos 265 000 J/mol) da una variación de Gibbs de aproximadamente menos 265 000 más 21 000, es decir, [[DeltaG]] ≈ −244 kJ/mol. El valor es **grande y negativo**: la corrosión del hierro es termodinámicamente muy favorable a temperatura ambiente.

La temperatura de inversión se obtiene dividiendo menos 265 000 entre menos 70, dando aproximadamente 3786 K. Este valor está muy por encima de cualquier temperatura de operación práctica, lo que significa que a **cualquier temperatura físicamente relevante** (por debajo del punto de fusión del acero, alrededor de 1800 K), la oxidación del hierro es siempre termodinámicamente espontánea: el proceso nunca puede revertirse por cambio de temperatura en condiciones normales.

## Interpretación

El análisis de [[DeltaG]] revela que la corrosión del hierro es prácticamente inevitable desde el punto de vista termodinámico: con [[T_inv]] en torno a 3786 K, no existe ninguna temperatura de trabajo realista a la que la reversión espontánea del óxido a hierro metálico sea posible. La única forma de regenerar el hierro es aportando energía externa (reducción electroquímica, alto horno con carbono), que precisamente "paga" la variación de Gibbs positiva del proceso inverso.

Desde el punto de vista del diseño de materiales, este análisis justifica las estrategias de protección del acero: recubrimientos (pintura, galvanizado con zinc) o aleaciones (acero inoxidable con cromo) que cambian radicalmente los valores de [[DeltaH]] y [[DeltaS]] del proceso de corrosión superficial, elevando [[DeltaG]] hacia valores menos negativos o incluso positivos. El recubrimiento de zinc funciona precisamente porque [[DeltaG]] para la oxidación del zinc en presencia del hierro crea una capa pasivante que no progresa; el análisis termodinámico predice que es favorece más la oxidación superficial protectora que la corrosión generalizada del hierro subyacente.
