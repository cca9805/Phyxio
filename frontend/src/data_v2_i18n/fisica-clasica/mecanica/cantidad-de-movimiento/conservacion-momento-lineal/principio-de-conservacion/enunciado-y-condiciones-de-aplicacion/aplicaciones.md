# Aplicaciones del principio de conservación

## 1. Ingeniería Aeroespacial: Propulsión a chorro

La propulsión de cohetes es una aplicación directa del principio. Al expulsar masa de gas hacia atrás a alta velocidad, el cohete gana [[momento_lineal_individual]] hacia adelante. Como el [[momento_lineal_total]] del sistema (cohete + gas expulsado) debe conservarse, el incremento de [[velocidad_individual]] del cohete es proporcional a la masa expulsada y a su velocidad de escape. La ley de retroceso describe este intercambio:

{{f:recoil_law}}

donde [[m1]] y [[v1f]] representan el cohete y su velocidad ganada, mientras [[m2]] y [[v2f]] representan la masa de gas expulsado y su velocidad de salida. Para un cohete que expulsa masa de propulsión, el incremento de [[velocidad_individual]] del vehículo es proporcional a la velocidad relativa de expulsión y a la razón entre la masa expulsada y la masa total (ecuación de Tsiolkovsky diferencial). La ecuación de Tsiolkovsky integra este principio para calcular la [[velocidad_centro_de_masas]] final del cohete.

**Variable dominante:** [[velocidad_centro_de_masas]] del sistema (cohete + propergol), que permanece constante en vuelo libre sin fuerzas externas. La razón [[masa_individual]] de gas expulsado respecto a la [[masa_total]] inicial determina la ganancia de velocidad posible.

**Límite de validez:** El modelo de conservación pura aplica en las fases de combustión libre en el espacio, donde la [[fuerza_externa_neta]] de la resistencia aerodinámica es despreciable (altitudes superiores a 80 km). En atmósfera densa, el arrastre aerodinámico puede producir una [[variacion_momento_lineal]] no nula y la ecuación debe corregirse con el impulso de la fuerza de arrastre.

## 2. Balística y Seguridad: El retroceso de armas

Cuando se dispara un proyectil desde una posición de reposo, el sistema (arma + proyectil) parte con [[Pinitial]] = 0. Por la ley de retroceso, el arma experimenta una [[velocidad_individual]] de retroceso [[v1f]] inversamente proporcional a su [[masa_individual]] [[m1]] respecto a la del proyectil [[m2]]:

{{f:recoil_law}}

Este principio es crítico para diseñar amortiguadores en artillería, para calcular el recule de rifles y para dimensionar los frenos de boca en armas de gran calibre. En armas automáticas, el retroceso acumulado define los límites de la cadencia de disparo sostenible.

**Variable dominante:** La [[masa_individual]] del arma ([[m1]]) respecto a la del proyectil ([[m2]]). Una [[masa_individual]] mayor del arma reduce drásticamente [[v1f]] del retroceso, haciendo más controlable el sistema.

**Límite de validez:** El modelo es preciso durante el intervalo de disparo (aproximación impulsiva, [[tiempo]] de orden milisegundos). Una vez que el proyectil abandona el cañón, la [[fuerza_externa_neta]] de la gravedad actúa sobre ambos cuerpos de forma independiente y la conservación del sistema conjunto deja de describir sus trayectorias.

## 3. Seguridad Vial: Análisis forense de colisiones

Los peritos de accidentes utilizan el balance general de [[momento_lineal_total]] para reconstruir las velocidades previas al impacto. Si dos vehículos quedan unidos tras el choque (colisión perfectamente inelástica), la [[vf]] común permite estimar el [[Pinitial]] total y así calcular las velocidades individuales [[v1i]] y [[v2i]] previas. Para el caso general, se usa el balance:

{{f:general_1d_balance}}

y para el acoplamiento:

{{f:inelastic_collision}}

Los valores de [[masa_individual]] de cada vehículo ([[m1]], [[m2]]) son conocidos por registro técnico. La [[vf]] puede estimarse a partir de las marcas de frenado postimpacto, lo que permite despejar [[v1i]] y [[v2i]] del sistema de ecuaciones.

**Variable dominante:** [[masa_total]] del sistema de vehículos. En colisiones entre vehículos con relación de [[masa_individual]] muy desigual (un camión [[m1]] contra un turismo [[m2]]), el vehículo más liviano sufre cambios de [[velocidad_individual]] mucho mayores y es el que concentra la mayor parte del daño estructural.

**Límite de validez:** La conservación del [[momento_lineal_total]] es válida solo durante el intervalo de choque (algunos milisegundos). Durante ese brevísimo [[tiempo]], la [[fuerza_externa_neta]] de rozamiento del suelo sobre el sistema es despreciable frente a las fuerzas de impacto internas. Sin embargo, el análisis de la distancia de frenado posterior al impacto requiere considerar la [[fuerza_externa_neta]] de rozamiento, que sí produce una [[variacion_momento_lineal]] significativa en esa fase.

## 4. Astrofísica: Interacciones estelares y formación de sistemas

En el espacio profundo, donde la [[fuerza_externa_neta]] entre estructuras gravitatoriamente aisladas es prácticamente nula, la conservación del [[momento_lineal_total]] permite predecir las trayectorias tras colisiones galácticas, la formación de sistemas estelares binarios y la expulsión de estrellas de alta velocidad ("runaway stars"). El [[Pinitial]] del sistema de dos galaxias se conserva estrictamente durante la colisión galáctica, aunque la distribución de [[momento_lineal_individual]] entre las estrellas individuales cambie radicalmente.

{{f:cons_principle}}

La [[velocidad_centro_de_masas]] del sistema gravitacional permanece constante para un observador inercial externo independientemente de las interacciones internas, lo que permite predecir la posición del centro de masa galáctico millones de años después de la colisión.

**Variable dominante:** [[masa_total]] del sistema gravitacional y [[velocidad_centro_de_masas]] del conjunto. La [[masa_individual]] de cada componente (masa estelar, masa de gas) determina cómo se redistribuye el [[momento_lineal_individual]] entre los fragmentos.

**Límite de validez:** La conservación aplica plenamente cuando la [[fuerza_externa_neta]] de estructuras externas al sistema (cúmulos de galaxias lejanos, distribución de materia oscura no contabilizada) es despreciable durante el intervalo de análisis. En presencia de materia oscura con distribución asimétrica, el [[momento_lineal_total]] observable puede desviarse de las predicciones del modelo aislado.

## 5. Física de Partículas: Identificación de partículas invisibles

En los aceleradores de partículas, la conservación del [[momento_lineal_total]] es la herramienta fundamental para identificar productos de colisión no detectados directamente, como neutrinos o candidatos a materia oscura. Si el detector mide los momentos de todas las partículas visibles tras el choque y la suma vectorial difiere del [[Pinitial]] conocido, la diferencia corresponde exactamente al [[momento_lineal_individual]] de las partículas invisibles:

{{f:general_1d_balance}}

Esta diferencia se denomina "momento transverso faltante" y es la evidencia directa de la existencia de partículas que escapan sin interaccionar con el detector. El principio permitió confirmar la existencia del neutrino en 1956 y continúa siendo clave para buscar nueva física más allá del modelo estándar.

**Variable dominante:** [[variacion_momento_lineal]] del sistema total medida experimentalmente. Una [[variacion_momento_lineal]] no nula en la dirección transversal indica que al menos una partícula no detectada se ha llevado parte del [[momento_lineal_individual]].

**Límite de validez:** El modelo clásico de este leaf no es directamente aplicable: se requiere la versión relativista del momento (p = γmv) y el formalismo cuadridimensional de la relatividad especial. Los errores de calibración de los detectores y la resolución angular de los sensores introducen incertidumbres que limitan la precisión del "momento faltante" a unos pocos GeV/c en los grandes colisionadores actuales.
