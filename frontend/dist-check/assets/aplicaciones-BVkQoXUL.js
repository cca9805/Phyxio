const e=`# Aplicaciones de la energía en rodadura\r
\r
## 1. Ruedas de bicicleta\r
\r
En una bicicleta, cada rueda aporta energía de avance y energía de giro. La magnitud [[K_total]] permite estimar cuánta energía adicional requiere acelerar ruedas con distinto [[I]]. Dos ruedas con igual [[m]] pueden sentirse diferentes si una concentra masa cerca del borde, porque para la misma [[v_cm]] la condición con [[R]] impone una [[omega]] y la energía rotacional crece con [[I]].\r
\r
Variable dominante: [[I]], porque controla la fracción rotacional para una velocidad dada. Límite de validez: el modelo ideal no incluye deformación del neumático, pérdidas en rodamientos ni resistencia aerodinámica. En sprint o ciudad, la estimación sigue siendo útil para comparar diseños.\r
\r
La aplicación es útil porque convierte una sensación de manejo en un balance energético. Si dos ruedas tienen la misma [[m]] pero diferente distribución de masa, el cambio aparece en [[I]] y no necesariamente en el peso total. En arranques repetidos, la diferencia acumulada puede ser perceptible aunque cada evento individual parezca pequeño.\r
\r
## 2. Cilindros y esferas en rampas\r
\r
Cuando un cilindro o una esfera baja por una rampa, la energía potencial asociada a [[g]] y [[phi]] se transforma en [[K_total]]. El reparto depende de [[I]], de modo que una esfera maciza, un cilindro y un aro no adquieren la misma [[a_cm]]. La energía total [[E_total]] permite cerrar el balance si no hay pérdidas.\r
\r
Variable dominante: cociente entre [[I]] y \`m R^2\`. Límite de validez: si el contacto no ofrece suficiente fricción estática, aparece deslizamiento y el balance ideal debe incluir disipación.\r
\r
Este caso es el laboratorio natural del tema. Permite comparar cuerpos con geometrías distintas sin cambiar la altura de salida. El objeto que dedica más energía al giro deja menos energía para [[v_cm]], y por tanto llega con menor rapidez traslacional.\r
\r
## 3. Neumáticos de vehículos\r
\r
En vehículos, la energía rotacional de las ruedas forma parte del coste de acelerar. A alta velocidad, [[K_total]] de cada rueda puede ser relevante frente a cambios de velocidad. Además, el radio efectivo [[R]] cambia ligeramente con carga y presión, lo que modifica la relación entre [[v_cm]] y [[omega]].\r
\r
Variable dominante: [[R]] efectivo junto con [[I]]. Límite de validez: neumáticos reales se deforman, se calientan y disipan energía, así que el modelo rígido es una primera aproximación.\r
\r
La lectura ayuda a separar efectos. Una presión baja modifica el radio efectivo y aumenta pérdidas por deformación; una llanta pesada modifica [[I]]. Ambos fenómenos pueden sentirse como menor eficiencia, pero no tienen la misma causa ni la misma solución.\r
\r
## 4. Frenado y bloqueo de ruedas\r
\r
Durante una frenada, [[K_total]] debe disminuir. Si la rueda sigue en rodadura, el reparto entre traslación y rotación se mantiene ligado. Si la rueda se bloquea, [[omega]] cae y aparece deslizamiento, con disipación intensa en el contacto. El análisis energético ayuda a distinguir frenado controlado de patinaje.\r
\r
Variable dominante: diferencia entre [[E_total]] inicial y final. Límite de validez: el modelo ideal no describe temperatura, desgaste ni adherencia variable; necesita términos disipativos.\r
\r
El bloqueo de rueda es un cambio de modelo, no solo un cambio de número. Mientras hay rodadura, [[v_cm]], [[R]] y [[omega]] están ligados. Cuando aparece deslizamiento, la energía se reparte entre calor y movimiento de forma dependiente del contacto.\r
\r
## 5. Robots móviles y ruedas de precisión\r
\r
En robots, la condición de rodadura permite convertir medidas de [[omega]] en estimaciones de [[v_cm]]. La energía ayuda a dimensionar motores y baterías cuando hay aceleraciones frecuentes. Si [[a_cm]] y [[alpha]] no son coherentes, puede haber patinaje o mala calibración del radio.\r
\r
Variable dominante: coherencia entre [[v_cm]], [[omega]] y [[R]]. Límite de validez: superficies blandas, polvo o ruedas deformables rompen la relación ideal y exigen sensores o modelos de contacto.\r
\r
En robótica, esta coherencia también sirve para diagnóstico. Si el controlador ordena una [[omega]] y la odometría estima una [[v_cm]] incompatible, el robot puede estar patinando. Entonces el cálculo de [[K_total]] sigue siendo una referencia, pero la navegación necesita corrección.\r
\r
En todas estas aplicaciones, [[theta]] y [[tau]] pueden aparecer si se estudia trabajo de motores o frenos. La idea central no cambia: separar traslación, rotación, condición de contacto y posibles pérdidas antes de interpretar la energía.\r
\r
La ventaja de este enfoque es que escala desde un ejercicio de rampa hasta máquinas reales. Primero se identifica el reparto energético, luego se decide si [[E_total]] se conserva o si se añaden pérdidas. Esa disciplina evita mezclar cinemática, dinámica y energía en una sola fórmula opaca.\r
\r
Otra aplicación transversal es la lectura de datos experimentales. Si se mide [[v_cm]] con vídeo y [[omega]] con un sensor, la comparación con [[R]] permite detectar deslizamiento antes de hacer balances de energía. Si los datos son coherentes, [[K_total]] se puede separar en dos barras claras. Si no lo son, el experimento está mostrando disipación o error de calibración, no una excepción a la conservación de la energía.`;export{e as default};
