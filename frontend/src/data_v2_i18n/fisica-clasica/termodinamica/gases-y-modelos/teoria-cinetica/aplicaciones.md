## 1. Diseño de separadores isotópicos para enriquecimiento de uranio

La separación de isótopos de uranio para combustible nuclear se basa en la diferencia de [[v_rms]] entre moléculas de hexafluoruro de uranio-235 y hexafluoruro de uranio-238. Aunque ambos compuestos tienen masas molares muy próximas (349 y 352 g/mol respectivamente), la teoría cinética predice que a la misma [[T]] sus velocidades cuadráticas medias difieren en un factor de aproximadamente 1.004. Este factor multiplicativo es minúsculo, pero es suficiente para que en celdas de difusión gaseosa en cascada (miles de etapas) el isótopo más ligero se concentre progresivamente en la corriente que avanza. El diseño de cada celda requiere calcular con precisión el flujo másico en función de [[v_rms]], [[T]] y la geometría del orificio.

Variable dominante: [[m_mol]] (la diferencia de masa entre isótopos controla el factor de separación por etapa).

Límite de validez: el modelo cinético ideal es aplicable porque el hexafluoruro de uranio gaseoso a las presiones de trabajo (algunos kPa) está muy por debajo de su presión crítica. A presiones superiores a 150 kPa o temperaturas inferiores a 340 K el gas comienza a condensar y el modelo falla.

---

## 2. Predicción de la velocidad del sonido en gases

La velocidad del sonido en un gas ideal es proporcional a [[v_rms]]: depende de la raíz de [[T]] dividida por [[m_mol]] multiplicada por un factor que incluye el coeficiente de calor específico. Para el diseño de instrumentos musicales de viento, de micrófonos de condensador y de sensores de temperatura ultrasónicos, se necesita conocer cómo varía la velocidad del sonido con [[T]] y con la composición del gas. Cuando se mezclan helio y nitrógeno (como en la anestesia médica con mezclas helio-oxígeno), la [[v_rms]] resultante cambia apreciablemente y con ella la velocidad del sonido, lo que afecta a la calidad vocal del paciente.

Variable dominante: [[T]] (la velocidad del sonido varía con la raíz de [[T]], lo que se detecta fácilmente en aplicaciones de medición remota de temperatura).

Límite de validez: el modelo cinético ideal es válido para gases a presión atmosférica entre 200 K y 1500 K. Por encima de 1500 K en gases diatómicos, los grados vibracionales se activan y el coeficiente adiabático varía, introduciendo correcciones que el modelo cinético simple no captura.

---

## 3. Selección de gases refrigerantes en sistemas criogénicos

En la licuefacción de gases industriales (nitrógeno, argón, oxígeno), el proceso de expansión de Joule-Thomson aprovecha las desviaciones del comportamiento ideal para enfriar el gas. El punto de partida del análisis es siempre la [[T]] de inicio, que determina la [[v_rms]] del gas y la energía cinética media [[E_k_mol]] a extraer. Los ingenieros de proceso usan la teoría cinética para estimar qué [[T]] mínima de preenfriamiento se necesita antes de la expansión para que el efecto Joule-Thomson produzca enfriamiento en lugar de calentamiento (el efecto invierte signo por encima de la temperatura de inversión de Joule-Thomson). Para el nitrógeno, esa temperatura de inversión es de aproximadamente 620 K a presión atmosférica.

Variable dominante: [[T]] (la temperatura de entrada al intercambiador de frío determina si el gas se enfría o se calienta al expandirse).

Límite de validez: el modelo cinético ideal solo predice la dirección cualitativa del efecto. Para cálculos cuantitativos precisos de temperatura de inversión es necesario el modelo de Van der Waals o ecuaciones de estado más complejas. El modelo ideal es inaplicable para gases cerca del punto crítico o bajo la temperatura crítica.

---

## 4. Estimación de la fuga de helio en globos meteorológicos

Los globos de helio utilizados en meteorología pierden gas gradualmente por efusión a través del material del globo. La tasa de efusión es proporcional a [[v_rms]] del helio, que a 20 °C es de aproximadamente 1350 m/s, mucho mayor que la del nitrógeno (515 m/s) o la del argón (430 m/s). Por eso el helio escapa mucho más rápido que otros gases a través de los poros del látex. Los fabricantes de globos meteorológicos deben estimar la duración del globo inflado calculando la tasa de efusión en función de [[m_mol]], [[T]] y el tamaño promedio de los poros del material, derivando ese cálculo directamente de la ley de Graham, que a su vez es consecuencia directa de la teoría cinética.

Variable dominante: [[m_mol]] (la masa molecular del gas controla inversamente la tasa de efusión: un gas con menor masa escapa más rápido a la misma temperatura).

Límite de validez: la ley de efusión cinética es válida cuando el recorrido libre medio de las moléculas es mayor que el diámetro de los poros. Para poros mayores de 1 mm, el flujo es viscoso (no efusivo) y la [[v_rms]] cinética ya no determina la tasa de fuga.

---

## 5. Análisis de la capa de exosfera en planetología

En la exosfera de un planeta (la región más externa de la atmósfera donde las moléculas ya no colisionan entre sí), las partículas se mueven en trayectorias balísticas independientes. Una fracción de esas moléculas tiene velocidades superiores a la velocidad de escape gravitacional del planeta. La teoría cinética permite calcular qué fracción del gas presente en la exosfera supera la velocidad de escape en función de [[T]] y [[m_mol]]. Este cálculo es fundamental para comprender por qué la Tierra retiene nitrógeno y oxígeno pero no hidrógeno libre (cuya [[v_rms]] a 1000 K en la exosfera es cercana a los 5000 m/s, ya próxima a la velocidad de escape terrestre de 11 200 m/s), mientras que Marte, con menor gravedad y atmósfera más delgada, ha perdido gran parte de su atmósfera original a lo largo de miles de millones de años.

Variable dominante: [[v_rms]] (directamente ligada a [[T]] y a [[m_mol]]; la cola de alta velocidad de la distribución de Maxwell-Boltzmann determina la tasa de escape atmosférico a largo plazo).

Límite de validez: este análisis asume que la distribución de velocidades en la exosfera es la distribución de Maxwell-Boltzmann de equilibrio, lo que es una aproximación. En la exosfera real, la distribución está truncada en la velocidad de escape porque las moléculas más rápidas ya han escapado; el modelo cinético de equilibrio sobreestima ligeramente la tasa de escape.
