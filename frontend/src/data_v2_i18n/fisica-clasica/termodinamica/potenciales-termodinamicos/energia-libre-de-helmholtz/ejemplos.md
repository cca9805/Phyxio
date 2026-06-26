# Ejemplo tipo examen

## Enunciado

Un mol de vapor de agua se introduce en un recipiente rígido de acero inoxidable termostatado a temperatura constante. Se desea evaluar si la condensación parcial del vapor es termodinámicamente favorable en dos condiciones de temperatura. Los datos termodinámicos para la transición vapor-liquido son:

- Variación de energía interna: menos 41 000 J por mol de agua condensada
- Variación de entropía: menos 109 J por kelvin y mol

Determinar la variación de energía libre de Helmholtz a 350 K y a 400 K, calcular la temperatura de inversión, e interpretar físicamente qué régimen favorece la condensación en el recipiente confinado.

## Datos

- Variación de energía interna: menos 41 000 J/mol
- Variación de entropía: menos 109 J/(mol·K)
- Temperatura primera evaluación: 350 K
- Temperatura segunda evaluación: 400 K

## Definición del sistema

El sistema es un mol de agua en transición vapor-liquido dentro de un recipiente de volumen fijo termostatado. Se trabaja en el marco del modelo estándar de Helmholtz con [[DeltaU]] y [[DeltaS]] constantes. Las magnitudes centrales son [[DeltaA]], [[DeltaU]], [[DeltaS]], [[T]] y [[T_inv]].

## Modelo físico

La condensación de vapor en un recipiente rígido opera a volumen y temperatura controladas. El criterio de espontaneidad a V y T constantes es el signo de [[DeltaA]], calculado mediante la definición de Helmholtz. Como [[DeltaU]] es negativa y [[DeltaS]] también es negativa, el proceso pertenece al cuadrante donde la espontaneidad solo se mantiene por debajo de la temperatura de inversión [[T_inv]]: a bajas temperaturas domina el impulso energético (favorable a la condensación); a altas temperaturas domina el término [[T]]·[[DeltaS]] (desfavorable porque [[DeltaS]] es negativa, favoreciendo el vapor).

## Justificación del modelo

El modelo estándar de Helmholtz es válido porque el recipiente es rígido (volumen constante) y se evalúa el proceso en torno a 350 K y 400 K, rango en el que los datos tabulados de [[DeltaU]] y [[DeltaS]] son razonablemente constantes para la condensación de agua. El modelo dejaría de ser válido si la presión interna variara lo suficiente para deformar el recipiente o si se quisiera analizar el proceso por encima de 500 K con disociación molecular.

## Resolución simbólica

Aplicando la definición de la variación de energía libre de Helmholtz:

{{f:definicion_helmholtz}}

Para la temperatura de inversión, imponiendo que [[DeltaA]] sea nula:

{{f:temperatura_inversion}}

## Sustitución numérica

**A 350 K:**

Multiplicar 350 K por menos 109 J/(mol·K) da el término entrópico: menos 38 150 J/mol. Restar ese valor de [[DeltaU]] (menos 41 000 J/mol): menos 41 000 menos (menos 38 150) da menos 2 850 J/mol. Por tanto [[DeltaA]] a 350 K es aproximadamente menos 2.9 kJ/mol, es decir, [[DeltaA]] ≈ −2.9 kJ/mol.

**A 400 K:**

Multiplicar 400 K por menos 109 J/(mol·K) da menos 43 600 J/mol. Restar de [[DeltaU]]: menos 41 000 menos (menos 43 600) da más 2 600 J/mol. Por tanto [[DeltaA]] a 400 K es aproximadamente más 2.6 kJ/mol, es decir, [[DeltaA]] ≈ +2.6 kJ/mol.

**Temperatura de inversión:**

Dividir [[DeltaU]] entre [[DeltaS]]: menos 41 000 J/mol entre menos 109 J/(mol·K) da aproximadamente 376 K. Por tanto [[T_inv]] ≈ 376 K.

## Validación dimensional

Las unidades de [[DeltaA]] se verifican así: julios por mol para [[DeltaU]], y kelvin multiplicado por julios por kelvin y mol para el término [[T]]·[[DeltaS]], resultan ambos en J/mol. La diferencia es dimensionalmente homogénea `[M L² T⁻²]` por mol.

Para [[T_inv]], la dimensión es julios por mol divididos entre julios por mol y kelvin, lo que da kelvin: dimensión `[Θ]`, coherente con una temperatura.

## Interpretación física

A 350 K la variación de Helmholtz es negativa (aproximadamente menos 2.9 kJ/mol), lo que indica que la **condensación parcial del vapor es termodinámicamente espontánea** en el recipiente rígido a esa temperatura. El impulso energético de liberar energía interna al pasar de vapor a líquido domina sobre el coste entrópico de reducir el desorden molecular.

A 400 K la situación se invierte: [[DeltaA]] ≈ +2.6 kJ/mol indica que la condensación es **no espontánea** a esa temperatura en el recipiente confinado. El término [[T]]·[[DeltaS]] —que actúa con signo negativo porque [[DeltaS]] es negativa— ha crecido tanto que supera la liberación de energía interna, haciendo desfavorable la condensación. El vapor es la fase termodinámicamente preferida.

La temperatura de inversión [[T_inv]] ≈ 376 K marca el umbral exacto: por debajo de 376 K la condensación es espontánea; por encima, no lo es. Este valor es cercano al punto de ebullición a presión atmosférica (373 K), lo cual es físicamente coherente porque en un recipiente parcialmente lleno la presión de vapor se aproxima a la presión de saturación.

Si la variación de energía interna fuera solo la mitad de negativa (menos 20 500 J/mol), manteniendo el mismo [[DeltaS]], [[T_inv]] sería de solo 188 K: la condensación sería no espontánea ya a 350 K. Esto muestra que la magnitud de la liberación de energía interna es crucial para mantener la ventana de espontaneidad a temperaturas moderadas en recipientes confinados.

---

# Ejemplo de aplicación real

## Contexto

Los materiales porosos como el carbón activado o los zeolitos se utilizan para capturar dióxido de carbono de flujos de gases industriales en recipientes de adsorción de volumen fijo. El análisis termodinámico mediante [[DeltaA]] permite comprender por qué la adsorción ocurre espontáneamente a temperatura ambiente y cómo la temperatura de regeneración del adsorbente se relaciona con [[T_inv]].

Para la adsorción de CO₂ en un zeolito 13X a 298 K, los datos aproximados son: variación de energía interna de adsorción de alrededor de menos 35 kJ/mol y variación de entropía de alrededor de menos 95 J/(mol·K). Estas magnitudes son del orden correcto para un análisis cualitativo en un recipiente rígido de adsorción.

## Estimación física

A 298 K (temperatura ambiente), multiplicar 298 K por menos 95 J/(mol·K) da el término entrópico en torno a menos 28 310 J/mol (aproximadamente menos 28.3 kJ/mol). Restar ese valor de [[DeltaU]] (menos 35 000 J/mol) da una variación de Helmholtz de aproximadamente menos 35 000 más 28 300, es decir, [[DeltaA]] ≈ −6.7 kJ/mol. El valor es **moderadamente negativo**: la adsorción de CO₂ es termodinámicamente favorable en el recipiente confinado a temperatura ambiente.

La temperatura de inversión se obtiene dividiendo menos 35 000 entre menos 95, dando aproximadamente 368 K. Por encima de 368 K, la adsorción deja de ser espontánea y el CO₂ se desorbe: este es precisamente el principio de la **regeneración térmica** del adsorbente, que se realiza calentando el recipiente rígido por encima de [[T_inv]].

## Interpretación

El análisis de [[DeltaA]] revela que la captura de CO₂ en zeolitos es termodinámicamente viable a temperatura ambiente gracias a la liberación de energía interna al formar enlaces del gas con el marco poroso, que compensa la pérdida de entropía del gas al pasar de fase libre a fase adsorbida. La temperatura de regeneración debe superar [[T_inv]] ≈ 368 K para invertir la espontaneidad y liberar el CO₂ capturado.

Desde el punto de vista del diseño de equipos, este análisis justifica el ciclo adsorción-regeneración: adsorber a temperatura ambiente (donde [[DeltaA]] es negativa) y regenerar a 100–150 °C (donde [[DeltaA]] se vuelve positiva y la desorción es espontánea). El coste energético de la regeneración es precisamente el trabajo necesario para «pagar» la [[DeltaA]] positiva de la desorción, que el análisis de Helmholtz cuantifica directamente.
