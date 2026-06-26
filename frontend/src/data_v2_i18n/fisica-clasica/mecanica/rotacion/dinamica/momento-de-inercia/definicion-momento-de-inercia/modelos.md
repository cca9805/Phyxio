# Modelos fisicos de la definicion de momento de inercia

## Modelo ideal

El modelo ideal trata el cuerpo como rigido y con un eje de giro perfectamente definido. Bajo esta hipotesis, la distribucion de masa no cambia mientras se estudia el movimiento y el momento de inercia puede calcularse una sola vez antes de pasar a la dinamica. Esta es la situacion en la que las formulas tabuladas y las integrales estaticas son validas.

## Hipótesis

- El eje de giro es fijo y esta especificado geometricamente.
- La distribucion de masa no cambia durante el intervalo de estudio.
- Las deformaciones del cuerpo son despreciables frente a sus dimensiones relevantes.
- La distancia que entra en la definicion es la perpendicular al eje, no una longitud cualquiera del objeto.

Estas hipotesis convierten a [[I]] en una magnitud de geometria dinamicamente estable. Sin ellas, el valor de [[I]] puede dejar de ser constante o incluso dejar de tener sentido como escalar simple.

## Dominio de validez cuantitativo

El modelo rigido con eje fijo es razonable cuando las deformaciones no cambian de forma apreciable las distancias radiales al eje. Un criterio practico es exigir que la variacion relativa cumpla

{{f:segunda_ley_rotacional}}

, es decir, que el cambio radial efectivo sea menor que el 1 % de la escala geometrica dominante. Si la redistribucion de masa o la flexion llevan a Delta r / R ge 0.01, el valor de I deja de ser una constante fiable y la prediccion

{{f:segunda_ley_rotacional}}

empieza a degradarse.

## Señales de fallo del modelo

- La aceleracion angular medida no es compatible con [[tau]]/[[I]] pese a tener torque bien caracterizado.
- La distribucion de masa cambia durante el movimiento, como en un patinador que recoge los brazos.
- Aparecen vibraciones o deformaciones que modifican las distancias al eje.
- El problema requiere comparar varios ejes no equivalentes sin fijar uno principal.

## Modelo extendido o alternativo

El primer modelo alternativo aparece cuando el sistema puede representarse como suma de subcuerpos o masas puntuales. En ese caso conviene usar la vision discreta:

{{f:definicion_discreta}}

El segundo aparece cuando la masa esta distribuida de forma continua y la geometria obliga a introducir un elemento diferencial de masa:

{{f:definicion_continua}}

Un tercer nivel de extension llega cuando la distribucion de masa cambia en el tiempo o el eje no permanece fijo. Entonces I deja de ser una constante y puede requerirse un tratamiento temporal o tensorial.

La transicion entre modelos no debe hacerse por costumbre, sino por criterio. Si el cuerpo puede descomponerse claramente en piezas o masas localizadas, el modelo discreto es suficiente. Si lo decisivo es la densidad continua [[rho]] y la geometria, conviene pasar al modelo integral. Si ademas el eje cambia o el cuerpo rota libremente en 3D, el modelo escalar deja de bastar.

## Comparación operativa

El modelo discreto es operativo cuando interesan unas pocas masas bien localizadas y permite ver con claridad el papel de cada [[m_i]]. El modelo continuo es mas general y captura bien el efecto de [[dm]] y de la densidad [[rho]] sobre la inercia total. El modelo mediante radio de giro es excelente para comparaciones compactas, pero ya no muestra de forma directa que parte de la geometria produce el valor de [[I]].

En la practica, conviene cambiar de modelo cuando una representacion mas simple pierde visibilidad fisica. Si una suma discreta empieza a ocultar la geometria real, hay que pasar a la integral. Si una integral completa no aporta nada nuevo porque el cuerpo es tabulado, conviene volver a la formula estandar o al radio de giro.