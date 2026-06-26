const e=`# Aplicaciones físicas de la condición de rodadura\r
\r
La fuerza didáctica de este leaf está en que la misma comparación entre avance y giro aparece en contextos muy distintos. A veces sirve para decidir si un modelo ideal es suficiente. Otras veces sirve para activar una corrección de control, detectar desgaste o descartar una medición poco fiable. En todos los casos, la física útil consiste en comparar la evolución real del sistema con la compatibilidad geométrica que exigiría el contacto perfecto.\r
\r
## 1. Frenado ABS en automoción\r
\r
Los sistemas ABS no necesitan una teoría completa del neumático para actuar en primera aproximación. Les basta con comparar la velocidad lineal del vehículo con la velocidad periférica de cada rueda y detectar cuándo aparece un residuo de contacto apreciable. Mientras el residuo es pequeño, la rueda sigue cerca del régimen de rodadura pura y puede transmitir fuerza de frenado útil sin bloquearse. Cuando el residuo crece, la centralita interpreta que el contacto empieza a deslizar y libera presión hidráulica antes de que la rueda pierda demasiada adherencia. Esta aplicación es un ejemplo perfecto de cómo un criterio geométrico sencillo se convierte en una decisión de control de alta relevancia práctica.\r
\r
Desde el punto de vista físico, el mérito del ABS no es “adivinar” el bloqueo, sino detectarlo cuando todavía está naciendo. La condición de rodadura proporciona exactamente esa alerta temprana.\r
\r
Variable dominante: [[delta]]\r
Límite de validez: útil mientras el diagnóstico rápido del contacto sea suficiente; no reemplaza un modelo completo de neumático en maniobras extremas.\r
\r
## 2. Control de tracción en ruedas motrices\r
\r
Durante una aceleración fuerte, especialmente sobre suelo mojado o gravilla, una rueda motriz puede girar más de lo que el vehículo avanza. La condición de rodadura sirve entonces para detectar patinamiento incipiente. Si el residuo cambia de signo y el giro empieza a exceder al avance lineal, el sistema de control reduce par motor o frena selectivamente la rueda. La ventaja de esta aplicación es que permite actuar muy pronto, cuando la pérdida de adherencia todavía es moderada y el vehículo puede recuperar estabilidad sin una intervención brusca. De nuevo, la física útil no está en saber solo cuánto gira la rueda, sino en comparar ese giro con el desplazamiento real del coche.\r
\r
En esta aplicación se ve muy bien la diferencia entre dato bruto y lectura física. Dos ruedas pueden girar casi a la misma velocidad angular y, sin embargo, tener estados de contacto muy distintos si el avance real del vehículo no acompaña.\r
\r
Variable dominante: [[v_contacto]]\r
Límite de validez: funciona bien para diagnóstico inicial; para estimaciones muy finas hay que incorporar deformación del neumático y transferencia de carga.\r
\r
## 3. Odometría en robótica móvil\r
\r
Muchos robots terrestres calculan distancia recorrida contando giros de rueda. Ese procedimiento solo es fiable si la rueda mantiene aproximadamente la ligadura ideal entre avance y rotación. En suelos lisos, el método puede ser excelente. En arenas, alfombras blandas o suelos con polvo, el deslizamiento hace que el número de vueltas deje de corresponder con la trayectoria real. La condición de rodadura se convierte entonces en una herramienta para estimar cuándo la odometría basada solo en encoders empieza a degradarse. Por eso en robótica se combina a menudo con visión, sensores inerciales o mapas, pero la primera alerta de fallo sigue naciendo de la comparación entre giro medido y avance compatible.\r
\r
La lección tecnológica es clara: contar vueltas no basta. Hace falta saber cuándo esas vueltas representan movimiento útil y cuándo están sobreestimando o subestimando la trayectoria real.\r
\r
Variable dominante: [[omega]]\r
Límite de validez: muy útil en superficies relativamente adherentes; pierde fiabilidad cuando el terreno es blando o cuando los giros son muy bruscos.\r
\r
## 4. Ferrocarriles y adherencia acero-acero\r
\r
En el ferrocarril la rodadura ideal tiene una importancia extraordinaria porque el contacto acero-acero ofrece poca fricción pero gran eficiencia energética. La locomotora necesita que el giro de las ruedas y el avance del tren permanezcan coordinados para transmitir esfuerzo tractor sin patinar. En pendientes, lluvia o arranques con carga elevada, pequeñas desviaciones del régimen ideal pueden traducirse en pérdida significativa de capacidad de tracción. La condición de rodadura no resuelve por sí sola toda la complejidad ferroviaria, pero sí organiza el diagnóstico inicial: si el avance y el giro dejan de ser compatibles, el sistema está saliendo del régimen eficiente y aparecen desgaste y calentamiento innecesarios.\r
\r
Por eso esta comparación simple sigue siendo operativa incluso en sistemas enormes. El tamaño del vehículo cambia, pero la lógica del contacto sigue siendo la misma.\r
\r
Variable dominante: [[v]]\r
Límite de validez: describe bien el régimen nominal; para análisis fino hay que incluir elasticidad del contacto y reparto real de cargas por eje.\r
\r
## 5. Bancos de ensayo y laboratorios docentes\r
\r
En laboratorios de mecánica, una rueda sobre cinta o una esfera sobre carril permiten verificar de forma muy visual la condición de rodadura. La ventaja didáctica es que se puede medir [[v]], medir [[omega]], calcular el residuo [[delta]] y decidir si la ligadura vale antes de pasar a la dinámica completa. Esto convierte al leaf en una herramienta experimental, no solo teórica. También ayuda a mostrar algo muy importante para el alumno: que una igualdad física no se memoriza como dogma, sino que se valida con datos. En un banco de ensayo sencillo, incluso un residuo pequeño ya permite discutir errores de medida, calidad del contacto y límites del modelo ideal.\r
\r
Además, esta aplicación es la más útil para entrenar criterio. El estudiante puede ver con sus propios datos que una diferencia pequeña entre giro y avance no es necesariamente ruido irrelevante, sino a veces la frontera entre dos modelos distintos.\r
\r
Variable dominante: [[R]]\r
Límite de validez: excelente para enseñanza y validación básica; no reproduce por completo el comportamiento de neumáticos reales o superficies muy deformables.`;export{e as default};
