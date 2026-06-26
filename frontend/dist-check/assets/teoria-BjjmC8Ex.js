const e=`# Sin rozamiento\r
\r
## Contexto conceptual\r
\r
Este leaf estudia el caso más limpio de dinámica traslacional en rampa: un bloque de masa [[m]] deslizándose sobre un plano de ángulo [[theta]] sin pérdidas por fricción. Lejos de ser un caso "demasiado ideal", es el laboratorio conceptual donde se aprende a separar geometría, fuerza y respuesta dinámica.\r
\r
La cadena causal central es clara. El peso total [[P]] se descompone en una parte paralela [[P_par]] y una parte perpendicular [[P_perp]]. La componente paralela impulsa el movimiento y la perpendicular determina el contacto a través de la normal [[N]]. De esa estructura emerge la aceleración [[a]].\r
\r
Este tema también conecta con cinemática: una vez conocida [[a]], se puede estimar la velocidad final [[v_f]], el tiempo [[t]] y la evolución de la velocidad [[v]] para un tramo [[L]].\r
\r
En términos de formación, este leaf cumple una función puente. Por un lado, consolida la lectura vectorial de fuerzas; por otro, prepara la transición a escenarios reales con disipación. Dominar este caso no es quedarse en una idealización, sino adquirir una referencia estable para detectar y cuantificar desviaciones cuando aparezcan efectos no ideales.\r
\r
## 🟢 Nivel esencial\r
\r
La intuición correcta es esta: inclinar el plano no cambia la gravedad [[g]], pero sí cambia qué tan fácilmente el bloque acelera.\r
\r
Cuando [[theta]] es pequeño, el movimiento tarda en arrancar y el descenso es suave. Cuando [[theta]] aumenta, la aceleración [[a]] crece y el deslizamiento se vuelve más evidente. Ese patrón permite anticipar el comportamiento sin hacer todavía cálculo detallado.\r
\r
Otra idea clave es que [[m]] no decide por sí sola la aceleración en el modelo ideal. Dos bloques de distinta masa pueden mostrar la misma tendencia dinámica si comparten la misma rampa. Por eso este nivel se centra en lectura causal y no en manipulación algebraica.\r
\r
En síntesis, el nivel esencial debe responder tres preguntas cualitativas: qué variable controla el fenómeno, cómo cambia la respuesta al variar esa variable y qué interpretación física tiene ese cambio. Si esa lectura conceptual está clara, el paso al nivel formal se vuelve natural y no mecánico.\r
\r
## 🔵 Nivel formal\r
\r
Primero, la descomposición del peso en el eje paralelo:\r
\r
{{f:descomposicion_paralela}}\r
\r
Segundo, la descomposición en el eje perpendicular:\r
\r
{{f:descomposicion_perpendicular}}\r
\r
Como no hay aceleración perpendicular al plano, la normal cumple:\r
\r
{{f:normal_plano_ideal}}\r
\r
En dinámica paralela ideal, la aceleración resulta:\r
\r
{{f:aceleracion_plano_ideal}}\r
\r
Si el bloque parte del reposo y recorre una distancia [[L]], la rapidez final se estima con:\r
\r
{{f:velocidad_final_desde_reposo}}\r
\r
Y el tiempo de deslizamiento para ese tramo se obtiene con:\r
\r
{{f:tiempo_deslizamiento}}\r
\r
Lectura física de estas ecuaciones:\r
\r
- [[P_par]] es la causa motriz.\r
- [[P_perp]] y [[N]] describen el cierre de contacto.\r
- [[a]] traduce geometría en respuesta dinámica.\r
- [[v_f]], [[v]] y [[t]] traducen dinámica en predicción temporal.\r
\r
Secuencia formal recomendada para mantener coherencia matemática y física:\r
\r
1. Fijar convenio de ejes y verificar unidades de entrada para [[m]], [[g]], [[theta]] y [[L]].\r
2. Obtener primero las componentes del peso y comprobar que respetan el dominio geométrico del ángulo.\r
3. Cerrar el eje normal para validar contacto y asegurar consistencia interna del modelo.\r
4. Calcular después la respuesta dinámica en el eje del plano para estimar [[a]].\r
5. Usar la cinemática para predecir [[v_f]] y [[t]], y comparar si ambos resultados son compatibles entre sí.\r
\r
Este orden evita errores frecuentes de cálculo invertido. También separa con claridad qué parte pertenece a la geometría del problema y qué parte pertenece a la evolución temporal, mejorando la trazabilidad del razonamiento en ejercicios y en práctica experimental.\r
\r
## 🔴 Nivel estructural\r
\r
El modelo funciona con gran potencia didáctica, pero tiene fronteras. Su validez depende de hipótesis explícitas:\r
\r
1. Superficie rígida y sin fricción relevante.\r
2. Contacto continuo entre bloque y plano.\r
3. Rango geométrico convencional: 0 <= [[theta]] <= 90 grados.\r
4. Régimen clásico sin efectos relativistas ni deformaciones dominantes.\r
\r
Criterios cuantitativos operativos útiles:\r
\r
- 0 <= [[a]] <= [[g]] en el modelo ideal.\r
- [[N]] <= [[P]] y [[N]] >= 0.\r
- [[P_par]] aumenta con [[theta]] y [[P_perp]] disminuye con [[theta]].\r
- Error relativo entre predicción y medición menor o igual a 10 por ciento en prácticas básicas.\r
\r
Si estos criterios fallan de forma sistemática, ya no es un problema de cálculo fino: es señal de que el modelo ideal dejó de representar el sistema real.\r
\r
Una decisión madura en este punto es registrar explícitamente el criterio de salida del modelo. Por ejemplo: si el error relativo en [[t]] o [[v_f]] supera 10 por ciento en tres ensayos equivalentes, se debe escalar a un modelo con fricción. Este tipo de regla transforma una impresión subjetiva en un procedimiento reproducible.\r
\r
## Interpretación física profunda\r
\r
El punto más importante no es memorizar senos y cosenos, sino entender el mecanismo: la aceleración nace de una proyección geométrica de una fuerza ya existente. No aparece una fuerza nueva al inclinar; cambia la descomposición de [[P]].\r
\r
Esa lectura permite anticipar comportamiento sin calcular cada detalle:\r
\r
- Si [[theta]] aumenta, [[a]] aumenta.\r
- Si [[theta]] se aproxima a cero, [[a]] se aproxima a cero.\r
- Si [[theta]] se aproxima a 90 grados, [[a]] se aproxima a [[g]].\r
\r
Además, entender por qué [[m]] se cancela en [[a]] evita errores conceptuales frecuentes. Muchos estudiantes esperan más aceleración para más masa; este leaf muestra cuándo esa intuición falla y por qué.\r
\r
Esa discusión es especialmente útil para separar propiedades intrínsecas del sistema y propiedades del entorno. [[m]] describe inercia del bloque, pero en el cociente dinámico ideal queda compensada por la fuerza gravitatoria proporcional. En cambio, [[theta]] pertenece a la configuración geométrica del entorno y sí altera la fracción efectiva de peso útil para acelerar.\r
\r
## Orden de magnitud\r
\r
Para chequeo rápido de plausibilidad:\r
\r
- [[g]] en Tierra está cerca de 9.8 m/s2.\r
- [[a]] debe quedar en el intervalo entre 0 y [[g]].\r
- [[v_f]] crece con la raíz de [[L]], no linealmente con [[L]].\r
- [[t]] disminuye cuando [[a]] aumenta para el mismo [[L]].\r
\r
Un resultado fuera de estas pautas suele indicar error de unidades, ángulo mal interpretado o confusión de componentes.\r
\r
## Método de resolución personalizado\r
\r
Secuencia recomendada para evitar errores:\r
\r
1. Definir ejes alineados con la rampa.\r
2. Identificar [[m]], [[g]], [[theta]], [[L]] y estado inicial.\r
3. Descomponer [[P]] en [[P_par]] y [[P_perp]].\r
4. Cerrar el eje normal para obtener [[N]].\r
5. Calcular [[a]] con la dinámica paralela ideal.\r
6. Estimar [[v_f]] y [[t]] según objetivo del problema.\r
7. Verificar dimensiones, signos y orden de magnitud.\r
8. Cerrar con interpretación causal, no solo numérica.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: [[theta]] = 0. Se obtiene [[a]] = 0 y no hay deslizamiento espontáneo.\r
\r
Caso especial 2: [[theta]] cercano a 90 grados. [[a]] se aproxima a [[g]] y [[N]] tiende a cero.\r
\r
Ejemplo extendido integrado: comparar dos rampas con mismo [[L]] y distinto [[theta]]. La rampa más inclinada produce mayor [[a]], menor [[t]] y mayor [[v_f]] final, aun con la misma [[m]].\r
\r
## Preguntas reales del alumno\r
\r
¿Por qué la masa [[m]] no aparece en la aceleración final?\r
\r
Porque en el modelo ideal [[m]] escala tanto la fuerza motriz como la inercia en la misma proporción y se cancela.\r
\r
¿Si [[theta]] se duplica, [[a]] se duplica?\r
\r
No necesariamente. La relación es trigonométrica, no lineal.\r
\r
¿Por qué necesito [[N]] si no acelero en ese eje?\r
\r
Porque [[N]] valida contacto y prepara el salto a modelos con fricción, donde la fuerza de rozamiento depende de [[N]].\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con:\r
\r
- descomposición vectorial de fuerzas,\r
- segunda ley de Newton en ejes adaptados,\r
- cinemática de aceleración constante,\r
- transición a planos con fricción.\r
\r
Ruta sugerida: dominar este caso ideal y luego pasar a con-rozamiento para entender cómo aparece el umbral de deslizamiento y cómo cambia la curva [[a]] frente a [[theta]].\r
\r
Otra conexión transversal importante es con diseño experimental. En lugar de preguntar solo "cuánto da", conviene preguntar "qué mediría para comprobarlo". En este leaf, medir [[t]] para varios valores de [[theta]] y comparar con predicción ideal construye una práctica científica completa: hipótesis, modelo, predicción, dato y revisión.\r
\r
## Síntesis final\r
\r
El plano inclinado sin fricción enseña una competencia central: convertir geometría en dinámica con causalidad explícita. Al dominar [[P]], [[P_par]], [[P_perp]], [[N]], [[a]], [[v_f]], [[v]], [[t]] y [[L]], el estudiante deja de "aplicar fórmulas" y empieza a leer el sistema físico con criterio de ingeniería.`;export{e as default};
