## Problema histórico

El problema de las vibraciones transversales de vigas elásticas fue uno de los grandes desafíos de la mecánica del siglo XVIII. Mientras que la cuerda vibrante se resolvió satisfactoriamente con la ecuación de onda de segundo orden (d'Alembert, 1747), las barras y vigas presentaban un comportamiento cualitativamente diferente que no encajaba en el mismo marco: los sonidos producidos por una barra golpeada tenían armónicos no equiespaciados y las perturbaciones se ensanchaban al propagarse.

El desafío era encontrar la ecuación de movimiento correcta para una viga elástica que explicara estos fenómenos observados experimentalmente: la dependencia de las frecuencias de resonancia con la geometría de la sección (no solo con la longitud) y la naturaleza dispersiva de la propagación.

## Dificultad conceptual previa

La dificultad principal era la falta de una teoría de la elasticidad suficientemente desarrollada para conectar las propiedades geométricas de la sección transversal con la fuerza restauradora en flexión. En la cuerda, la tensión proporciona una fuerza restauradora simple proporcional a la curvatura (segunda derivada). En la viga, la fuerza restauradora depende de cómo se distribuyen las tensiones internas a lo largo de la sección, lo que requiere integrar sobre toda la sección transversal y produce un momento flector proporcional a la curvatura local.

Los matemáticos del siglo XVIII debían resolver una cuestión fundamental: la fuerza restauradora en una viga es proporcional a la cuarta derivada espacial del desplazamiento, no a la segunda. Este hecho, aparentemente simple en retrospectiva, requería una comprensión profunda de la mecánica de sólidos deformables que Hooke había apenas esbozado y que Euler y Bernoulli formalizaron a lo largo de décadas de trabajo.

La confusión adicional entre módulo elástico, momento de inercia de la sección y densidad del material impedía establecer la dependencia funcional correcta entre la frecuencia de resonancia y los parámetros de la viga.

## Qué cambió

Daniel Bernoulli propuso en 1735 que la ecuación diferencial de una viga vibrante involucraba la cuarta derivada espacial del desplazamiento, basándose en la proporcionalidad entre momento flector y curvatura (hipótesis de Bernoulli-Euler). Euler desarrolló la formulación completa entre 1744 y 1770, estableciendo la ecuación biarmónica para el desplazamiento transversal de una viga esbelta.

El resultado clave fue reconocer que el producto del módulo de Young por el momento de inercia de la sección (EI) actúa como el parámetro de rigidez efectivo, análogo a la tensión en la cuerda pero con un orden diferencial más alto. Esto explicaba inmediatamente por qué las frecuencias de resonancia dependían del cubo del espesor (a través de I) y por qué los parciales de una barra libre no eran armónicos.

La relación de dispersión cuadrática ([[omega]] proporcional al cuadrado del número de onda) quedó implícita en los trabajos de Euler, aunque la interpretación en términos de velocidad de fase dependiente de la frecuencia solo se formalizó en el siglo XIX con el desarrollo de la teoría ondulatoria de Fourier.

## Impacto en la física

La teoría de Euler-Bernoulli tuvo un impacto profundo en varios frentes:

Estableció el primer ejemplo de **ecuación de movimiento con dispersión** en mecánica de sólidos, décadas antes de que se entendiera la dispersión en otros contextos (óptica, ondas en agua). Esto proporcionó un laboratorio conceptual para la teoría de ondas dispersivas que Stokes, Rayleigh y Lamb desarrollarían en el siglo XIX.

Introdujo la noción de **propiedad geométrica de la sección** (momento de inercia) como parámetro independiente del material, separando por primera vez la contribución del material (E) de la contribución geométrica (I) a la rigidez estructural. Esta separación es la base de toda la ingeniería estructural moderna.

Motivó la búsqueda de modelos mejorados (Timoshenko, 1921) cuando las predicciones de Euler-Bernoulli fallaban a frecuencias altas, impulsando el desarrollo de la mecánica de medios continuos en el siglo XX.

La teoría también fue fundamental en el desarrollo de la **acústica musical**: la explicación de por qué las barras de xilófono tienen armónicos inarmónicos (a diferencia de las cuerdas) proviene directamente de la dispersión cuadrática de Euler-Bernoulli.

## Conexión con física moderna

La dispersión cuadrática de las ondas flexionales reaparece en múltiples contextos de la física moderna:

En **nanotecnología**, los nanotubos de carbono y las nanovigas de grafeno se modelan como vigas de Euler-Bernoulli a escala nanométrica, y su dispersión flexional determina las propiedades térmicas y mecánicas de nanocompuestos. La validez del modelo clásico a escala atómica es un tema activo de investigación.

En **metamateriales acústicos**, los diseñadores explotan la dispersión flexional para crear bandas de frecuencia prohibidas (bandgaps) en estructuras periódicas de vigas. Controlando la geometría de la celda unitaria se puede detener la propagación de ondas de flexión en rangos de frecuencia específicos.

En **sismología**, la dispersión de ondas superficiales de tipo Rayleigh en capas estratificadas tiene una estructura matemática similar a la dispersión flexional, y los métodos de inversión desarrollados para vigas se aplican al análisis de perfiles de velocidad del subsuelo.

La ecuación de Euler-Bernoulli es también un caso particular de las ecuaciones de vigas en medios activos y piezoeléctricos, donde el acoplamiento electromecánico modifica la rigidez efectiva y por tanto la dispersión, con aplicaciones en sensores y actuadores MEMS.