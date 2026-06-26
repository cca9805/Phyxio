# Aplicaciones

## 1. Condensadores de película en electrónica de consumo

Los condensadores de película de polipropileno o poliéster son omnipresentes en electrónica de audio, fuentes de alimentación y filtros. El polipropileno tiene [[epsilon_r]] ≈ 2.2, bajo pero con pérdidas dieléctricas mínimas; el poliéster tiene [[epsilon_r]] ≈ 3.3 con pérdidas algo mayores. La elección depende del equilibrio entre compacidad (favorece [[epsilon_r]] alto) y calidad eléctrica (favorece pérdidas bajas).

En una fuente de alimentación, el condensador de filtrado convierte una señal rectificada pulsante en tensión continua estable. La capacitancia necesaria determina la ondulación residual. Usar un dieléctrico de [[epsilon_r]] tres veces mayor permite reducir el volumen del condensador a un tercio con igual capacitancia [[capacitancia_con_dielectrico]]. Sin embargo, la mayor pérdida dieléctrica del poliéster a alta frecuencia eleva la disipación térmica y puede reducir la vida útil del componente.

Variable dominante: [[epsilon_r]] del material de película, que controla el compromiso entre tamaño y calidad eléctrica del condensador.
Límite de validez: el modelo LHI es válido mientras la frecuencia de operación esté por debajo de la frecuencia de relajación del polímero y el campo [[campo_electrico_en_el_dielectrico]] no supere el 20 % de la rigidez dieléctrica del material.

## 2. Aislamiento de cables de alta tensión

Los cables de transmisión eléctrica a alta tensión (100–500 kV) están rodeados de una capa de polietileno entrecruzado (XLPE) con [[epsilon_r]] ≈ 2.3. El objetivo primario no es maximizar la capacitancia, sino aislar eléctricamente el conductor y controlar la distribución del campo [[campo_electrico_en_el_dielectrico]] entre el conductor y la pantalla exterior.

Un [[epsilon_r]] bajo mantiene [[campo_electrico_en_el_dielectrico]] relativamente uniforme radialmente y reduce las pérdidas dieléctricas en corriente alterna. El dieléctrico actúa aquí como escudo: reduce el campo en la región más próxima al conductor, que es donde el campo es más intenso en geometría cilíndrica. Si [[epsilon_r]] fuera más alto, la capacitancia del cable aumentaría y con ella la corriente reactiva de carga, que puede superar la capacidad térmica del cable en líneas largas.

Variable dominante: [[epsilon_r]] del aislante, que determina la capacitancia por unidad de longitud del cable y el perfil del campo [[campo_electrico_en_el_dielectrico]] radial.
Límite de validez: el modelo es válido mientras [[campo_electrico_en_el_dielectrico]] en el punto de mayor campo (superficie del conductor) sea inferior a la rigidez dieléctrica del XLPE, aproximadamente 20 MV/m.

## 3. Sensores capacitivos de humedad y composición

Los sensores capacitivos de humedad utilizan un material higroscópico como dieléctrico. Al absorber agua del ambiente, [[epsilon_r]] del compuesto aumenta porque el agua líquida tiene [[epsilon_r]] ≈ 80. El cambio de [[capacitancia_con_dielectrico]] es directamente proporcional al cambio de [[epsilon_r]] del composite, y medir [[capacitancia_con_dielectrico]] permite inferir el contenido de humedad.

En aplicaciones de control industrial, el mismo principio se usa para detectar el nivel de un líquido en un tanque: el condensador parcialmente sumergido tiene un [[epsilon_r]] efectivo intermedio entre el del líquido y el del aire, y [[capacitancia_con_dielectrico]] varía linealmente con el nivel. La calibración requiere conocer [[capacitancia_en_vacio]] con el tanque vacío y [[capacitancia_con_dielectrico]] con el tanque lleno para determinar el rango dinámico del sensor.

Variable dominante: la variación de [[epsilon_r]] del dieléctrico activo (composite higroscópico o mezcla líquido-aire), que modifica [[capacitancia_con_dielectrico]] de forma proporcional y medible.
Límite de validez: el sensor opera linealmente mientras la variación de [[epsilon_r]] sea pequeña respecto al valor nominal (régimen incremental lineal). Si el dieléctrico satura o experimenta histéresis por temperatura, la linealidad se pierde.

## 4. Memorias ferroeléctricas no volátiles (FeRAM)

Las memorias ferroeléctricas utilizan materiales con [[epsilon_r]] extremadamente alto (titanato de plomo-circonio, PZT) que además exhiben histéresis dieléctrica. La polarización remanente del material —que persiste cuando el campo externo se elimina— codifica los bits "0" y "1" de la memoria sin necesidad de alimentación continua.

El ciclo de escritura aplica un campo [[campo_electrico_en_el_dielectrico]] superior al campo coercitivo del ferroelectrico, orientando la polarización en una dirección (escritura de "1") o en la contraria (escritura de "0"). El ciclo de lectura detecta si el condensador cambia de estado al aplicar un campo de prueba: si hay cambio de polarización, la carga detectada es mayor (bit "1"); si no cambia (ya estaba en la dirección del campo de prueba), la carga es menor (bit "0").

Variable dominante: el campo coercitivo del material, que determina el voltaje mínimo de escritura y el rango de operación del bit frente al ruido térmico.
Límite de validez: el modelo de histéresis rectangular es válido solo a campo suficientemente alto; a temperatura superior a la temperatura de Curie del material, la ferroelectricidad desaparece y la memoria pierde la propiedad de no volatilidad.

## 5. Blindaje dieléctrico en dispositivos de diagnóstico por resonancia magnética (MRI)

En equipos de resonancia magnética, los componentes electrónicos dentro del área de campo de radiofrecuencia experimentan campos muy intensos a frecuencias de decenas a centenares de MHz. Se utilizan láminas de dieléctrico de alta [[epsilon_r]] para desviar y redistribuir el campo RF, reduciendo puntos calientes en el tejido biológico adyacente (efecto "dielectric padding").

El principio de funcionamiento se basa en que un material de [[epsilon_r]] alto concentra las líneas de campo en su interior, redistribuyendo el campo externo. Materiales con [[epsilon_r]] entre 50 y 300 (soluciones de calcio-sulfato o cerámicas especiales) se modelan como "lentes dieléctricas" que homogeneizan la distribución del campo [[campo_electrico_en_el_dielectrico]] en el volumen de imagen. Este efecto no puede modelarse con el condensador plano ideal: requiere electrostática en geometría tridimensional, pero el parámetro clave que gobierna la redistribución sigue siendo [[epsilon_r]] del material seleccionado.

Variable dominante: [[epsilon_r]] del material de relleno, que controla el índice de refracción efectivo para las ondas de radiofrecuencia y la redistribución del campo en el volumen de imagen.
Límite de validez: el modelo de [[epsilon_r]] constante es válido mientras la frecuencia de operación esté por debajo de la frecuencia de relajación del material y la variación de [[epsilon_r]] con la temperatura no supere el 5 % en el rango de trabajo.