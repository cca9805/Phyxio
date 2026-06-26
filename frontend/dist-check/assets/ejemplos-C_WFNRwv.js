const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un sistema mecánico se describe inicialmente con [[Nq]]=6 coordenadas generalizadas [[q]]. Sobre él actúan [[C]]=2 ligaduras holónomas independientes, una de ellas dependiente de [[t]]. El ejercicio pide escribir el criterio de admisibilidad, contar los grados de libertad [[f]], identificar qué desplazamientos virtuales [[delta_q]] son compatibles y explicar cuándo aparece un multiplicador [[lambda]] en la formulación con [[L]] y [[qdot]].
\r
## Datos\r
\r
- Coordenadas antes de reducir: [[Nq]]=6.
- Ligaduras independientes: [[C]]=2.
- Coordenadas generalizadas: [[q]]; velocidades generalizadas: [[qdot]].
- Condición de ligadura: [[phi]]=0, con posible dependencia temporal [[t]].
\r
## Definición del sistema\r
\r
El sistema base no se define por su dibujo cartesiano, sino por el conjunto de configuraciones que satisfacen sus ligaduras. Cada ecuación independiente reduce una dirección libre del espacio de configuración. Por eso el diagnóstico central es decidir si las restricciones son independientes y si deben imponerse por reducción explícita o por multiplicadores.
\r
## Modelo físico\r
\r
El modelo físico usa [[phi]]=0 para seleccionar configuraciones admisibles, [[Nq]] y [[C]] para contar [[f]], [[delta_q]] para distinguir variaciones compatibles y [[lambda]] para representar la reacción de una ligadura dentro de la dinámica gobernada por [[L]]. Así se separa geometría admisible, conteo estructural y ecuación de movimiento.
\r
{{f:ligadura_holonomica}}\r
\r
{{f:desplazamiento_virtual_admisible}}\r
\r
{{f:multiplicadores_lagrange}}\r
\r
{{f:conteo_grados_libertad}}\r
\r
## Justificación del modelo\r
\r
El modelo vale porque las ligaduras se consideran holónomas, diferenciables e independientes en la región estudiada. Dejaría de valer sin ajustes si alguna restricción fuera redundante, si la condición no pudiera escribirse como [[phi]]([[q]],[[t]])=0, o si el rango de la matriz de ligaduras cambiara durante el movimiento.
\r
## Resolución simbólica\r
\r
Primero, condición de admisibilidad:

{{f:ligadura_holonomica}}

Segundo, compatibilidad de desplazamientos virtuales:

{{f:desplazamiento_virtual_admisible}}
\r
Tercero, reacción de ligadura en la dinámica:

{{f:multiplicadores_lagrange}}

Cuarto, conteo estructural de independencia:
\r
{{f:conteo_grados_libertad}}\r
\r
Estas relaciones se usan de manera encadenada: [[phi]] define la condición, [[delta_q]] define las variaciones permitidas, [[lambda]] representa la reacción y [[f]] resume cuántas coordenadas independientes quedan.
\r
## Sustitución numérica\r
\r
Con [[Nq]]=6 y [[C]]=2:
- [[f]]=6-2=4.

Interpretación intermedia: el sistema puede escribirse con seis coordenadas, pero solo cuatro combinaciones son independientes cuando las dos ligaduras están activas. El multiplicador [[lambda]] no añade un grado de libertad; codifica la reacción necesaria para mantener [[phi]]=0.
\r
## Validación dimensional\r
\r
Para el conteo de [[f]], [[Nq]] y [[C]] son adimensionales enteros, por lo que [[f]] también es adimensional. En la condición [[phi]]=0, todos los términos de la ligadura deben compartir dimensión física. En la ecuación con [[lambda]], las unidades de [[lambda]] dependen de la dimensión de [[phi]] y deben producir una fuerza generalizada compatible con [[L]].
\r
## Interpretación física\r
\r
El resultado [[f]]=4 indica que dos direcciones posibles han quedado bloqueadas por ligaduras independientes. Si una ligadura fuera redundante, usar [[C]]=2 sería un sobreconteo y el modelo perdería movilidad artificialmente. La lectura física correcta es verificar primero independencia y después interpretar la reducción.
\r
# Ejemplo de aplicación real\r
\r
## Contexto

Un equipo de simulación desarrolla un módulo para inspección orbital de una herramienta alrededor de un eje. Inicialmente, el motor numérico usa [[x]] y [[y]] como estados dinámicos y aplica una corrección de radio en cada paso para mantener trayectoria circular. El sistema funciona en casos simples, pero en escenarios de alta frecuencia introduce ruido numérico acumulativo.

Se decide rediseñar el modelo: usar [[theta]] como estado principal y tratar [[r]] como parámetro fijo cuando la ligadura radial es dominante. Luego, reconstruir [[x]] y [[y]] solo para visualización y telemetría.

La decisión no se toma por estética algebraica. Antes se verifica que la restricción radial sea estable, que no cambie de rango durante la maniobra y que el estado angular conserve la información necesaria para control. Si alguna de esas condiciones falla, conviene mantener una descripción redundante y controlar el error de cierre explícitamente.
\r
## Estimación física\r
\r
Benchmark interno de 5000 pasos:\r
- Modelo cartesiano corregido: error radial medio 3.4 mm y tiempo relativo 1.00.\r
- Modelo con coordenada generalizada angular: error radial medio 1.1 mm y tiempo relativo 0.68.\r
\r
La reducción de error no proviene de una mejor integración aislada, sino de la eliminación de redundancia de estado. Al modelar independencia real, el sistema necesita menos compensaciones numéricas y mantiene mejor coherencia geométrica.

Una segunda comparación revisa deriva acumulada tras diez segundos con el mismo paso temporal. El esquema corregido acumula desviación radial varias veces mayor, lo que confirma que el problema no era solo truncamiento numérico, sino elección de variables incompatible con la ligadura dominante.
\r
## Interpretación\r
\r
La decisión física es clara: cuando la ligadura principal fija [[r]], usar [[theta]] como coordenada generalizada dominante mejora estabilidad y lectura causal. Las coordenadas cartesianas siguen siendo útiles, pero como salidas derivadas, no como núcleo dinámico redundante.\r
\r
Este caso muestra continuidad con teoría y modelo: seleccionar coordenadas por estructura del sistema, no por costumbre de representación. El impacto práctico es doble: cálculo más robusto y argumentos más defendibles al justificar por qué una variable se elige como estado independiente.
`;export{e as default};
