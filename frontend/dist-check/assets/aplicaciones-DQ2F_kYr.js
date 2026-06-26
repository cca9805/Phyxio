const e=`# Aplicaciones de trabajo y torque\r
\r
## 1. Motores eléctricos\r
\r
Un motor entrega [[tau]] a un eje que gira con [[omega]]. La potencia [[P]] permite estimar energía por unidad de tiempo, mientras [[W]] estima energía acumulada durante un ciclo. En control de velocidad, el torque no siempre es constante, así que puede ser necesario usar \`trabajo_torque_variable\`.\r
\r
Variable dominante: [[P]], porque limita la tasa de energía útil. Límite de validez: el modelo ideal no incluye eficiencia eléctrica, calor ni saturación del motor.\r
\r
## 2. Frenos de disco\r
\r
El freno aplica un [[tau]] opuesto al giro. El trabajo [[W]] suele ser negativo para el rotor y se transforma en calor. La potencia [[P]] permite evaluar carga térmica instantánea y riesgo de sobrecalentamiento.\r
\r
Variable dominante: [[tau]], porque fija la extracción de energía para un giro dado. Límite de validez: el torque real cambia con temperatura, presión y velocidad.\r
\r
## 3. Llaves y herramientas\r
\r
Al apretar un tornillo, el torque aplicado durante un ángulo [[theta]] puede representar trabajo sobre la unión. Si el ángulo es pequeño pero el torque alto, la energía puede ser moderada aunque la tensión mecánica sea grande.\r
\r
Variable dominante: [[theta]], porque sin giro no hay trabajo aunque exista torque. Límite de validez: parte del trabajo se pierde en rozamiento de rosca y deformación.\r
\r
## 4. Turbinas y generadores\r
\r
Una turbina recibe torque del fluido y un generador extrae potencia del eje. La relación \`potencia_angular\` permite conectar [[tau]], [[omega]] y [[P]]. El trabajo acumulado durante un intervalo se obtiene integrando potencia o torque.\r
\r
Variable dominante: [[omega]], porque a igual torque aumenta la potencia. Límite de validez: en máquinas reales hay pérdidas aerodinámicas, eléctricas y mecánicas.\r
\r
## 5. Resortes torsionales\r
\r
En un resorte torsional, [[tau]] cambia con [[theta]], de modo que el trabajo es área bajo la curva y no producto simple. Esta aplicación muestra por qué \`trabajo_torque_variable\` es necesario para sistemas elásticos.\r
\r
Variable dominante: curva [[tau]] frente a [[theta]]. Límite de validez: si el resorte sale del régimen elástico, la curva deja de ser reversible.\r
\r
En todas las aplicaciones conviene separar acción, desplazamiento, energía y ritmo. El mismo torque puede ser seguro en un intervalo breve y problemático si se mantiene durante muchas vueltas. La lectura energética completa evita dimensionar motores, frenos o herramientas usando solo un número de torque.\r
\r
## Comparación de decisiones de diseño\r
\r
En motores eléctricos, el dato de catálogo más visible suele ser el torque máximo, pero la selección real depende de la curva completa. Un motor puede sostener [[tau]] alto durante poco tiempo y después limitar corriente para no sobrecalentarse. En ese caso [[P]] marca la exigencia instantánea y [[W]] acumulado ayuda a estimar energía térmica. Por eso se comparan ciclos de trabajo, no solo picos de torque.\r
\r
En frenos, el objetivo no es producir energía mecánica útil sino extraerla del rotor. El signo de [[W]] es entonces una lectura de disipación. Dos frenadas con igual trabajo total pueden ser muy distintas si una concentra la extracción en poco tiempo. La potencia [[P]] alta exige disipación rápida de calor, mientras que el trabajo total fija la energía que finalmente debe abandonar el sistema.\r
\r
En herramientas, una llave dinamométrica controla [[tau]], pero el resultado sobre la unión depende también de [[theta]] y del rozamiento. Un giro adicional pequeño puede cambiar mucho la tensión si el sistema es rígido, mientras que parte del trabajo puede perderse en roscas. La aplicación enseña que torque de apriete no es una medida directa de energía almacenada ni de fuerza de sujeción sin modelo adicional.\r
\r
En turbinas y generadores, la misma ecuación permite leer sentidos opuestos de transferencia. La turbina entrega torque al eje; el generador aplica torque resistente para convertir energía mecánica en eléctrica. Si [[omega]] aumenta con el mismo [[tau]], la potencia mecánica aumenta, pero también pueden crecer pérdidas aerodinámicas y eléctricas. El balance debe separar potencia de entrada, potencia útil y calor.\r
\r
En resortes torsionales, el área bajo la curva es decisiva porque el torque suele crecer con el giro. Usar el valor final de [[tau]] como si fuera constante sobreestima el trabajo almacenado en un resorte lineal. Esta aplicación es una transición natural hacia energía potencial elástica rotacional y hacia sistemas donde la curva experimental importa más que una fórmula cerrada.\r
\r
La regla práctica es preguntar qué se controla y qué se mide. Si se controla torque y se mide giro, se calcula [[W]]. Si se controla velocidad y se mide torque, se calcula [[P]]. Si ambos cambian, se necesita una curva o una integración. Esa decisión evita aplicar una fórmula correcta en el contexto equivocado.\r
\r
En laboratorio, esta misma regla guía la toma de datos. Un sensor de torque aislado no basta para estimar energía; necesita un encoder que mida [[theta]]. Un tacómetro aislado no basta para estimar potencia; necesita el torque simultáneo sobre el mismo eje. Cuando los sensores no están sincronizados, la incertidumbre puede ser mayor que la diferencia que se intenta medir. Por eso los ensayos de motores y frenos registran torque, ángulo, velocidad y temperatura como señales acopladas.`;export{e as default};
