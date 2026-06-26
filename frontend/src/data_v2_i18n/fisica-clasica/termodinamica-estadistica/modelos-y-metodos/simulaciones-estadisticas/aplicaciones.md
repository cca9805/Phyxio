# Aplicaciones

## 1. Estimar [[energia]] media en un sólido modelo

Variable dominante: [[error_estadistico]]
Límite de validez: [[numero_muestras]] efectivo ≥ 10³ y [[error_estadistico]] < 0,05·|[[media_muestral]]|

En un sólido simplificado, una simulación puede recorrer configuraciones microscópicas y medir la [[energia]] por partícula como [[observable]]. La [[media_muestral]] estima la [[energia]] media térmica, mientras que la [[desviacion_estandar]] recoge cuánto fluctúan las configuraciones individuales. Lo que se predice no es el valor de una configuración aislada, sino el promedio esperado a una [[temperatura]] concreta. El [[error_estadistico]] limita la confianza de esa predicción: si es comparable a la diferencia entre dos modelos de interacción, la simulación no decide cuál describe mejor el material. Esta aplicación obliga a vigilar que la [[probabilidad_aceptacion]] no sea demasiado baja, porque una cadena atrapada en pocas configuraciones de [[energia]] aparenta precisión pero no explora el sólido. También permite planificar el cálculo: si se necesita reducir el [[error_estadistico]] a la mitad, no basta duplicar el tiempo de simulación; normalmente hay que cuadruplicar las muestras efectivas. Así, la física del sólido y el coste computacional quedan unidos por una regla cuantitativa simple.

## 2. Comparar modelos microscópicos de un gas

Variable dominante: [[media_muestral]]
Límite de validez: diferencia entre modelos > 3·[[error_estadistico]]

Dos modelos de gas pueden predecir valores cercanos para un [[observable]], por ejemplo una magnitud energética o estructural. En lugar de resolver todas las trayectorias moleculares, se toman muchas muestras y se calcula la [[media_muestral]] mediante la [[suma_observable]]. La decisión física depende de si la diferencia entre modelos supera claramente el [[error_estadistico]]. Si no la supera, no hay victoria: solo hay empate estadístico. Aquí la [[temperatura]] fija la escala térmica y la [[probabilidad_boltzmann]] indica qué estados de [[energia]] deben pesar más. El método constriñe la interpretación: una curva suave o una media estable no bastan si la incertidumbre todavía cubre la diferencia buscada. Además, obliga a distinguir entre diferencia numérica y diferencia resoluble. Dos resultados pueden tener decimales distintos y, aun así, no representar modelos separables si el [[error_estadistico]] es demasiado grande.

## 3. Diseñar una simulación Monte Carlo eficiente

Variable dominante: [[probabilidad_aceptacion]]
Límite de validez: 0,1 < [[probabilidad_aceptacion]] < 0,9 como criterio inicial de exploración

En Monte Carlo, no solo importa cuántas muestras se generan, sino cómo se generan. La [[probabilidad_aceptacion]] decide si una propuesta con cierta [[diferencia_energia]] se incorpora a la trayectoria. Si casi todo se rechaza, el sistema queda inmóvil y el [[numero_muestras]] efectivo es pequeño. Si casi todo se acepta sin criterio, puede perderse la ponderación térmica correcta. Una simulación útil busca equilibrio entre movimiento y fidelidad física. El [[error_estadistico]] permite ver el efecto final: si decrece demasiado despacio, quizá hay correlación fuerte entre muestras. Esta aplicación mide eficiencia, predice coste computacional y constriñe el tamaño de paso o la forma de proponer configuraciones. También sirve como diagnóstico temprano: antes de invertir horas de cálculo, se puede ejecutar una simulación corta y observar si la [[media_muestral]] se mueve por bloques o si el [[error_estadistico]] cae como se espera.

## 4. Evaluar fluctuaciones cerca de una transición

Variable dominante: [[desviacion_estandar]]
Límite de validez: la [[desviacion_estandar]] debe estabilizarse al aumentar [[numero_muestras]]

Cerca de una transición térmica, un [[observable]] puede presentar fluctuaciones grandes. La [[desviacion_estandar]] crece y el [[error_estadistico]] tarda más en bajar para un mismo [[numero_muestras]]. La aplicación práctica es decidir si una señal observada es una propiedad física real o una fluctuación de muestreo. La [[media_muestral]] puede cambiar lentamente porque la simulación alterna entre familias de estados con distinta [[energia]]. En estos casos, la lectura ingenua de una sola ejecución resulta peligrosa. Conviene usar réplicas independientes, bloques largos y comparación de escalas. El método constriñe la afirmación: si el error no queda por debajo de la anchura física relevante, no se debe declarar una transición bien localizada. En la práctica, esta aplicación enseña que las zonas críticas exigen más muestras y más cautela que las regiones térmicas suaves.

## 5. Planificar coste computacional de una precisión objetivo

Variable dominante: [[numero_muestras]]
Límite de validez: para reducir [[error_estadistico]] por un factor r, usar aproximadamente r² veces más muestras

En proyectos computacionales, la pregunta práctica suele ser cuántas horas de cálculo hacen falta. Si el [[error_estadistico]] baja como raíz inversa de [[numero_muestras]], la precisión tiene un precio cuadrático. Reducir el error a la mitad exige unas cuatro veces más muestras efectivas; reducirlo diez veces exige unas cien veces más. Esta aplicación predice coste antes de lanzar simulaciones largas. El [[observable]], la [[desviacion_estandar]] y la [[media_muestral]] ayudan a decidir si la precisión objetivo merece la pena. En sistemas térmicos, además, [[temperatura]], [[probabilidad_boltzmann]] y [[probabilidad_aceptacion]] condicionan cuántas muestras son realmente útiles. Así, el método constriñe recursos y evita cálculos espectaculares pero físicamente innecesarios. La simulación deja de ser una caja negra y se convierte en una negociación explícita entre precisión, tiempo, fluctuación del [[observable]] y pregunta física que se quiere contestar.

En conjunto, estas cinco aplicaciones muestran que el centro del leaf no es generar números, sino decidir cuándo esos números son físicamente resolutivos.