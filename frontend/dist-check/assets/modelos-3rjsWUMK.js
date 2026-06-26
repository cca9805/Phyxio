const e=`# Modelos físicos en la analogía traslacional\r
\r
## Modelo ideal\r
El modelo ideal del leaf supone que la comparación entre traslación y rotación puede hacerse sobre cuerpos rígidos, con ejes y signos bien definidos, sin complicaciones geométricas secundarias. En ese marco, la analogía es limpia y permite identificar una misma estructura de causa neta, inercia y respuesta. El valor del modelo ideal es pedagógico y operativo. Permite reconocer la arquitectura común antes de entrar en detalles que podrían distraer.\r
\r
## Hipótesis\r
Las hipótesis básicas son explícitas. Se trabaja en mecánica clásica, con un sistema rígido o con inercia rotacional localmente constante, y con una única coordenada relevante por problema. También se asume que el eje de rotación está bien elegido y que el convenio de signos es coherente. Sin esas hipótesis, la analogía deja de ordenar el problema y empieza a ocultar diferencias físicas importantes.\r
\r
## Dominio de validez cuantitativo\r
Un criterio cuantitativo simple es que la analogía se considere útil cuando la comparación permite predecir orden de magnitud, signo y dependencia funcional con error conceptual menor al 10 por ciento en la lectura global del problema. Si la geometría del torque modifica la respuesta más allá de ese margen, la analogía sigue siendo orientativa pero ya no debe usarse como guía única. Además, la masa y la inercia deben ser positivas, y el eje de cálculo debe coincidir con el eje real del problema.\r
\r
## Señales de fallo del modelo\r
Una señal clara de fallo es tratar la inercia rotacional como si fuera una constante universal del cuerpo, sin notar que depende del eje. Otra es suponer que cualquier fuerza tiene un torque análogo sin construir brazo de palanca ni sentido de giro. También falla el modelo si el alumno usa magnitudes de estado como si fueran causas dinámicas. Cuando aparecen esas señales, la analogía ya no está aclarando el fenómeno, sino produciendo una traducción falsa.\r
\r
## Modelo extendido o alternativo\r
El modelo extendido incorpora las diferencias que el ideal había comprimido. En vez de trabajar solo con paralelos formales, obliga a revisar geometría, distribución de masa y construcción del torque. También puede requerir pasar de una lectura centrada en la respuesta instantánea a otra centrada en el estado dinámico, o distinguir entre una analogía útil para intuición y un modelo geométrico completo para cálculo.\r
\r
Conviene pasar al modelo alternativo cuando el eje cambia, cuando la distribución de masa es decisiva, cuando existen varios torques competidores o cuando la analogía lineal deja residuos conceptuales persistentes. En ese punto, la pregunta ya no es "qué magnitud corresponde a cuál", sino "qué parte del paralelismo sigue viva y qué parte ha dejado de representar la física".\r
\r
## Comparación operativa\r
Operativamente, el modelo ideal es excelente para enseñar estructura, detectar papeles físicos y acelerar el diagnóstico conceptual. El modelo extendido es mejor cuando la geometría del problema manda o cuando el cálculo del torque no puede separarse de la distribución espacial de fuerzas. La comparación entre ambos modelos no se decide por elegancia algebraica, sino por capacidad para conservar significado físico sin simplificar de más.`;export{e as default};
