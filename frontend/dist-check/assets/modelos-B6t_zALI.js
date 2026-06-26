const e=`# Modelos fisicos de la definicion de momento de inercia\r
\r
## Modelo ideal\r
\r
El modelo ideal trata el cuerpo como rigido y con un eje de giro perfectamente definido. Bajo esta hipotesis, la distribucion de masa no cambia mientras se estudia el movimiento y el momento de inercia puede calcularse una sola vez antes de pasar a la dinamica. Esta es la situacion en la que las formulas tabuladas y las integrales estaticas son validas.\r
\r
## Hipótesis\r
\r
- El eje de giro es fijo y esta especificado geometricamente.\r
- La distribucion de masa no cambia durante el intervalo de estudio.\r
- Las deformaciones del cuerpo son despreciables frente a sus dimensiones relevantes.\r
- La distancia que entra en la definicion es la perpendicular al eje, no una longitud cualquiera del objeto.\r
\r
Estas hipotesis convierten a [[I]] en una magnitud de geometria dinamicamente estable. Sin ellas, el valor de [[I]] puede dejar de ser constante o incluso dejar de tener sentido como escalar simple.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo rigido con eje fijo es razonable cuando las deformaciones no cambian de forma apreciable las distancias radiales al eje. Un criterio practico es exigir que la variacion relativa cumpla\r
\r
{{f:segunda_ley_rotacional}}\r
\r
, es decir, que el cambio radial efectivo sea menor que el 1 % de la escala geometrica dominante. Si la redistribucion de masa o la flexion llevan a Delta r / R ge 0.01, el valor de I deja de ser una constante fiable y la prediccion\r
\r
{{f:segunda_ley_rotacional}}\r
\r
empieza a degradarse.\r
\r
## Señales de fallo del modelo\r
\r
- La aceleracion angular medida no es compatible con [[tau]]/[[I]] pese a tener torque bien caracterizado.\r
- La distribucion de masa cambia durante el movimiento, como en un patinador que recoge los brazos.\r
- Aparecen vibraciones o deformaciones que modifican las distancias al eje.\r
- El problema requiere comparar varios ejes no equivalentes sin fijar uno principal.\r
\r
## Modelo extendido o alternativo\r
\r
El primer modelo alternativo aparece cuando el sistema puede representarse como suma de subcuerpos o masas puntuales. En ese caso conviene usar la vision discreta:\r
\r
{{f:definicion_discreta}}\r
\r
El segundo aparece cuando la masa esta distribuida de forma continua y la geometria obliga a introducir un elemento diferencial de masa:\r
\r
{{f:definicion_continua}}\r
\r
Un tercer nivel de extension llega cuando la distribucion de masa cambia en el tiempo o el eje no permanece fijo. Entonces I deja de ser una constante y puede requerirse un tratamiento temporal o tensorial.\r
\r
La transicion entre modelos no debe hacerse por costumbre, sino por criterio. Si el cuerpo puede descomponerse claramente en piezas o masas localizadas, el modelo discreto es suficiente. Si lo decisivo es la densidad continua [[rho]] y la geometria, conviene pasar al modelo integral. Si ademas el eje cambia o el cuerpo rota libremente en 3D, el modelo escalar deja de bastar.\r
\r
## Comparación operativa\r
\r
El modelo discreto es operativo cuando interesan unas pocas masas bien localizadas y permite ver con claridad el papel de cada [[m_i]]. El modelo continuo es mas general y captura bien el efecto de [[dm]] y de la densidad [[rho]] sobre la inercia total. El modelo mediante radio de giro es excelente para comparaciones compactas, pero ya no muestra de forma directa que parte de la geometria produce el valor de [[I]].\r
\r
En la practica, conviene cambiar de modelo cuando una representacion mas simple pierde visibilidad fisica. Si una suma discreta empieza a ocultar la geometria real, hay que pasar a la integral. Si una integral completa no aporta nada nuevo porque el cuerpo es tabulado, conviene volver a la formula estandar o al radio de giro.`;export{e as default};
