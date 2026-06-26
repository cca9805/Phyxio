## 1. Vibración de estructuras ligeras

Después de un golpe, una estructura puede oscilar varias veces antes de calmarse. El régimen subamortiguado permite separar el ritmo de esos ciclos, gobernado por [[omega_d]], de la reducción de máximos, gobernada por [[gamma]]. Esta distinción es útil en pasarelas, soportes, carcasas y piezas mecánicas que no deben vibrar durante demasiado tiempo.

Variable dominante: [[omega_d]], porque fija la separación temporal entre máximos y cruces.

Límite de validez: si hay impactos, deformación plástica o uniones con holgura, la respuesta deja de ser lineal.

## 2. Instrumentos de medida con aguja

Una aguja de medición puede oscilar alrededor del valor final antes de asentarse. Si el amortiguamiento es insuficiente, el usuario debe esperar varios ciclos para leer. El leaf permite estimar cuánto se reduce la amplitud mediante [[x_env]] y si la frecuencia visible permite distinguir los ciclos en pantalla o a simple vista.

Variable dominante: [[x_env]], porque indica la amplitud residual que aún contamina la lectura.

Límite de validez: el modelo falla si hay fricción seca en el eje o si el sistema de lectura aplica corrección activa.

## 3. Suspensiones y aislamiento vibratorio

En una suspensión, el régimen subamortiguado aparece cuando el sistema absorbe energía pero todavía rebota. Puede ser aceptable si los ciclos desaparecen rápido, pero problemático si la vibración se transmite al usuario o al equipo. La razón entre [[gamma]] y [[omega0]] orienta el ajuste.

Variable dominante: [[gamma]], porque controla la rapidez con que cae la envolvente.

Límite de validez: amplitudes grandes, topes mecánicos y amortiguadores dependientes de temperatura requieren modelos no lineales.

## 4. Señales acústicas y resonadores

Una cuerda, una membrana o una cavidad acústica puede producir una señal que oscila y decae. El tono observado se relaciona con [[omega_d]], mientras que la duración perceptible depende de [[gamma]]. Por eso dos instrumentos pueden tener tonos parecidos pero apagarse con velocidades muy distintas.

Variable dominante: [[A]], porque la amplitud inicial condiciona la intensidad observable del sonido.

Límite de validez: el modelo es local; amplitudes grandes, acoplamientos complejos o excitación continua requieren modelos acústicos más ricos.

## 5. Ensayos experimentales de amortiguamiento

En laboratorio se puede registrar [[x]] frente a [[t]] y extraer parámetros del sistema. La separación entre máximos estima [[omega_d]], mientras la reducción de máximos estima [[gamma]]. Esta aplicación convierte una gráfica en parámetros físicos interpretables.

Variable dominante: [[x]], porque es la señal medida de la que se infieren las demás magnitudes.

Límite de validez: ruido, baja resolución temporal o sensores que saturan pueden falsear máximos y cruces.

En todas estas aplicaciones, el criterio común es que la oscilación visible no implica ausencia de disipación. El leaf enseña a mirar dos escalas a la vez: cuántos ciclos aparecen y cuánto se reducen. Esa lectura ayuda a decidir si conviene añadir amortiguamiento, cambiar rigidez o aceptar una vibración residual.

En ingeniería, esta lectura permite decidir si el problema está en la frecuencia de la vibración o en su duración. Una estructura puede tener un ritmo aceptable pero una pérdida demasiado lenta, o una vibración breve pero con ciclos muy perceptibles. Mirar solo el máximo inicial oculta esa diferencia. En instrumentos, el mismo análisis separa precisión de lectura y tiempo de espera. En acústica, separa tono y duración perceptible. En laboratorio, convierte una gráfica en parámetros físicos. La utilidad didáctica es directa: el alumno aprende a no confundir que algo oscile con que conserve energía. Cada aplicación muestra una señal que cruza el equilibrio y, al mismo tiempo, pierde amplitud de forma progresiva.

También permite comparar soluciones. Añadir material disipativo modifica [[gamma]], cambiar geometría o rigidez modifica [[omega0]], y alterar las condiciones iniciales modifica [[A]] o [[phi]]. Esas acciones no son equivalentes, aunque todas cambien la gráfica. En un diseño real, el criterio puede ser reducir el número de ciclos visibles, bajar la amplitud por debajo de una tolerancia antes de cierto tiempo o evitar que la vibración excite otro componente. El régimen subamortiguado da el vocabulario mínimo para distinguir esos objetivos.

Por eso estas aplicaciones funcionan como puente entre teoría y diagnóstico. No se trata de memorizar una curva, sino de aprender a leer una señal: separación entre picos, reducción de máximos, cruces de equilibrio y coherencia con el modelo. Cuando esos rasgos se reconocen, el estudiante puede justificar decisiones de ingeniería con argumentos físicos y no solo con una sustitución numérica.

En términos prácticos, el régimen subamortiguado no es bueno ni malo por sí mismo. Es adecuado cuando se toleran algunos ciclos y se valora una respuesta viva, como en ciertos resonadores o sistemas de medida rápidos. Es inadecuado cuando cada cruce del equilibrio produce desgaste, ruido, incomodidad o riesgo. La física del leaf permite formular esa elección de forma precisa.

Ese matiz es importante para el profesor: permite convertir una misma gráfica en varias preguntas. ¿Qué parámetro cambia el tiempo entre máximos? ¿Qué parámetro cambia la caída de amplitud? ¿Qué evidencia experimental obligaría a abandonar el modelo? Así, las aplicaciones no son ejemplos decorativos, sino pruebas de comprensión del régimen.
