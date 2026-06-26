const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un vehiculo de ensayo se desplaza en tramo recto y se desea estimar la fuerza de arrastre en dos puntos de operacion para evaluar si el actuador de traccion tiene margen suficiente. Se conoce que el regimen de flujo en el intervalo de trabajo se aproxima bien con dependencia cuadratica. El problema pide calcular [[F_d]] para dos valores de [[v]] y justificar por que la variacion no puede interpretarse como lineal.\r
\r
## Datos\r
\r
Se dispone de los siguientes datos de calibracion: [[rho]] del aire, [[C_d]] del prototipo y [[A]] frontal efectiva. Tambien se entrega un valor operativo de [[c]] ya ajustado en banco para comparar ambos procedimientos. Las velocidades de interes son [[v]]_1 y [[v]]_2, con [[v]]_2 aproximadamente doble de [[v]]_1.\r
\r
El objetivo explicito es comparar dos rutas de calculo: ruta reducida con [[c]] y ruta puente con [[rho]], [[C_d]], [[A]]. Ambas deben converger dentro del margen experimental declarado.\r
\r
## Definición del sistema\r
\r
El sistema es el vehiculo tratado como cuerpo rigido traslacional en eje horizontal. Se ignoran variaciones de pendiente y efectos de viento lateral para esta version del problema. El fluido de referencia es aire quieto respecto al laboratorio.\r
\r
En el DCL horizontal, la fuerza motriz neta debe compensar la resistencia [[F_d]] y cualquier termino adicional que no se modele aqui se considera en el error de ajuste. Esta decision es coherente con un ejercicio centrado en arrastre cuadratico, no en cierre dinamico completo del tren de potencia.\r
\r
## Modelo físico\r
\r
La ley reducida para calcular la fuerza resistiva es:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
La ley puente para interpretar el parametro equivalente es:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Con estas dos expresiones, el problema conecta lectura rapida de [[F_d]] con interpretacion fisica de [[c]].\r
\r
## Justificación del modelo\r
\r
Se adopta modelo cuadratico por tres razones fisicas y didacticas. Primera, el rango de rapidez es suficientemente alto para que la dependencia no lineal sea visible en los datos. Segunda, el laboratorio reporta estabilidad de [[C_d]] en la ventana analizada, lo que evita introducir variaciones de regimen en este ejercicio. Tercera, el objetivo del examen es evaluar razonamiento de escalado, y el escalado cuadratico es precisamente el nucleo conceptual del leaf.\r
\r
Ademas, este modelo permite discutir diseno. Si [[F_d]] crece con [[v]] al cuadrado, cualquier estrategia de reduccion de [[A]] o mejora de [[C_d]] tiene impacto creciente conforme sube la velocidad. Esa lectura supera la simple sustitucion numerica.\r
\r
## Resolución simbólica\r
\r
Ruta 1, usando coeficiente equivalente conocido:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
Se evalua [[F_d]]_1 con [[v]]_1 y [[F_d]]_2 con [[v]]_2.\r
\r
Ruta 2, reconstruyendo [[c]] desde propiedades:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Con el [[c]] reconstruido, se vuelve a calcular [[F_d]] para ambas velocidades y se contrasta con la ruta 1.\r
\r
El paso clave de la resolucion es la comparacion de razones:\r
\r
- razon de rapidez: [[v]]_2/[[v]]_1\r
- razon de fuerza: [[F_d]]_2/[[F_d]]_1\r
\r
En comportamiento cuadratico ideal, la segunda razon debe aproximarse al cuadrado de la primera. Esta verificacion simbólica es el punto de control principal del ejercicio.\r
\r
## Sustitución numérica\r
\r
Al sustituir valores representativos de laboratorio, la primera velocidad produce una resistencia moderada y la segunda una resistencia claramente mayor. Cuando [[v]]_2 es cercana al doble de [[v]]_1, la fuerza estimada se acerca a cuatro veces el valor inicial, con desviacion pequena atribuible a redondeo y tolerancia de medicion.\r
\r
Con la ruta puente, el [[c]] calculado con [[rho]], [[C_d]] y [[A]] coincide dentro del margen esperado con el [[c]] de calibracion. Ese acuerdo valida que el parametro reducido conserva sentido fisico y no es una constante arbitraria. Si no hubiera acuerdo, la conclusion correcta no seria ajustar a mano, sino revisar definicion de [[A]], condicion de [[rho]] y consistencia de [[C_d]] con el regimen realmente usado.\r
\r
## Validación dimensional\r
\r
La validacion dimensional exige verificar que [[F_d]] salga en N y que [[c]] conserve unidades compatibles con fuerza dividida por rapidez al cuadrado. En la formula puente, [[rho]] aporta masa por volumen, [[A]] aporta area y [[C_d]] es adimensional, por lo que el resultado mantiene consistencia.\r
\r
Tambien se revisa validez de signo y dominio: [[c]] debe ser no negativa y [[v]] se usa como rapidez no negativa en esta formulacion escalar. Si alguna conversion de unidades rompe estas condiciones, el resultado pierde interpretabilidad fisica aunque el calculo parezca formalmente correcto.\r
\r
## Interpretación física\r
\r
El resultado muestra que el costo resistivo de aumentar velocidad no es proporcional. En zonas de velocidad alta, pequenas mejoras geometricas pueden ahorrar fuerza de forma significativa, mientras que incrementos de velocidad sin rediseño elevan rapidamente la demanda del sistema motriz.\r
\r
Tambien emerge una lectura comparativa importante: dos escenarios con misma [[v]] pueden dar distinta [[F_d]] si cambia [[A]], [[rho]] o [[C_d]]. Por eso este leaf no se limita a predecir una fuerza; enseña a identificar que variable de diseño conviene modificar primero para mejorar desempeño.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un equipo de ciclismo de ruta analiza postura aerodinamica para una contrarreloj corta. El entrenador dispone de telemetria de velocidad y de estimaciones de potencia, y busca una lectura fisica sencilla para decidir entre dos configuraciones: postura alta de control y postura acoplada de baja exposicion frontal.\r
\r
En ambas configuraciones, la masa total y la mecanica de pedaleo son similares. Lo que cambia de forma dominante es [[A]] y, en menor medida, [[C_d]]. La densidad [[rho]] se mantiene casi constante en la ventana de ensayo.\r
\r
## Estimación física\r
\r
Primero se identifica el coeficiente equivalente de cada postura:\r
\r
{{f:coeficiente_cuadratico_equivalente}}\r
\r
Luego se estima la fuerza resistiva para una misma [[v]] objetivo en ambas configuraciones:\r
\r
{{f:arrastre_cuadratico_reducido}}\r
\r
La postura acoplada muestra menor [[A]], por lo que reduce [[c]] y desplaza hacia abajo la curva [[F_d]]-[[v]]. La diferencia de fuerza no parece enorme a velocidad media, pero crece de forma notable en el extremo alto del intervalo. Esta observacion es coherente con la naturaleza cuadratica del modelo.\r
\r
Como lectura operativa, el equipo concluye que mantener postura acoplada en tramos rapidos produce ganancia energetica acumulada. Sin embargo, en tramos tecnicos con curvas cerradas puede preferirse postura alta por control, aceptando mayor [[F_d]]. La decision final no es matematica pura: combina mecanismo fisico y criterio tactico.\r
\r
## Interpretación\r
\r
Este caso real confirma dos mensajes del leaf. Primero, la variable clave para reducir arrastre no siempre es solo bajar velocidad; a veces es optimizar [[A]] y [[C_d]] para que la misma velocidad cueste menos fuerza. Segundo, interpretar [[c]] permite conectar medicion de campo con decisiones de configuracion sin depender de simulaciones complejas en cada iteracion.\r
\r
La comparacion entre posturas tambien separa este leaf de otros vecinos. Aqui no se decide el regimen completo ni la velocidad terminal; se decide como leer y usar la no linealidad de [[F_d]] en funcion de [[v]] para mejorar rendimiento bajo condiciones dadas.\r
`;export{e as default};
