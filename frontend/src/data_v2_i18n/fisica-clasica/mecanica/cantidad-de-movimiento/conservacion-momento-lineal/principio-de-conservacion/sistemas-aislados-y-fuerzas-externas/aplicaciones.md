# Aplicaciones de sistemas aislados y fuerzas externas

## 1. Reconstrucción de accidentes de tráfico

**Contexto:** Los peritos forenses usan la conservación del [[momento_lineal_total]] para reconstruir velocidades antes de una colisión. Cuando dos vehículos chocan y quedan unidos, el sistema puede tratarse como aislado durante el brevísimo instante del impacto.

**Variable dominante:** [[Pfinal]]

**Descripción:** A partir de la velocidad [[vf]] del conjunto tras el choque y las [[masa_individual]] de los vehículos, se aplica la fórmula de colisión perfectamente inelástica para obtener las velocidades iniciales [[v1i]] y [[v2i]]. La clave es que la [[fuerza_externa_neta]] horizontal (fricción, gravedad paralela) tiene un [[impulso_externo]] despreciable durante el instante del impacto (milisegundos), por lo que la [[variacion_momento_total]] es cero en esa ventana temporal. Fuera de ese instante, la fricción sí actúa y la conservación ya no aplica.

**Límite de validez:** El modelo es válido solo durante el instante de la colisión. Las marcas de frenado previas o posteriores al impacto deben analizarse con modelos de fricción separados. Si el intervalo de contacto es largo (vuelcos, choques amortiguados), el [[impulso_externo]] de la fricción no es despreciable y la conservación simple falla.

---

## 2. Propulsión de cohetes y separación de etapas

**Contexto:** Un cohete expulsa masa (gases) hacia atrás para aumentar su [[momento_lineal_total]] hacia delante. La separación de etapas es un caso de explosión interna desde un sistema en movimiento.

**Variable dominante:** [[momento_lineal_individual]]

**Descripción:** El sistema cohete-gases es aislado en el vacío (sin [[fuerza_externa_neta]] significativa). Cuando la etapa inferior se separa a [[v2f]] hacia atrás, la carga útil adquiere una [[v1f]] mayor hacia delante. La ley de retroceso garantiza que la [[variacion_momento_total]] del sistema combinado es nula: lo que la etapa inferior gana de [[Pinitial]] hacia atrás, la carga útil lo gana hacia delante. La [[masa_individual]] de cada etapa es el parámetro clave en el diseño del cohete.

**Límite de validez:** El modelo de sistema aislado es válido en el vacío profundo o durante intervalos breves en atmósferas tenues donde la resistencia aerodinámica tiene [[impulso_externo]] despreciable. En atmósferas densas, la [[fuerza_externa_neta]] aerodinámica debe incluirse en el balance.

---

## 3. Colisiones en física de partículas

**Contexto:** En aceleradores de partículas, los detectores registran los [[momento_lineal_individual]] de los fragmentos producidos en una colisión. La suma vectorial debe conservarse si el sistema es aislado.

**Variable dominante:** [[variacion_momento_total]]

**Descripción:** Antes de la colisión, el [[Pinitial]] del sistema es conocido con precisión. Después del impacto, la suma de los [[momento_lineal_individual]] de todos los fragmentos debe igualar [[Pfinal]] = [[Pinitial]]. Cualquier desvío en la [[variacion_momento_total]] indica la presencia de partículas no detectadas (como neutrinos) o la acción de alguna [[fuerza_externa_neta]] no modelada. Este principio fue crucial en el descubrimiento del neutrino: Pauli lo propuso en 1930 precisamente para explicar la [[variacion_momento_total]] aparente en la desintegración beta.

**Límite de validez:** La conservación del [[momento_lineal_total]] es exacta en ausencia de fuerzas externas. En experimentos de alta energía, las interacciones electromagnéticas con el haz o los campos magnéticos del detector constituyen fuerzas externas que deben calibrarse y sustraerse del análisis.

---

## 4. Armas de fuego y retroceso

**Contexto:** Al disparar, el sistema proyectil-arma está inicialmente en reposo ([[Pinitial]] = 0). La expansión de los gases propulsores es una fuerza interna al sistema, por lo que el [[momento_lineal_total]] se conserva.

**Variable dominante:** [[v1f]]

**Descripción:** La [[masa_individual]] del proyectil es [[m1]] y su velocidad [[v1f]] hacia adelante; la [[masa_individual]] del arma es [[m2]] (mucho mayor) y su velocidad de retroceso [[v2f]] es negativa. La ley de retroceso garantiza que [[m1]]·[[v1f]] + [[m2]]·[[v2f]] = 0, por lo que la [[variacion_momento_total]] del sistema es nula. El arma experimenta un [[impulso_externo]] nulo durante el disparo (los gases actúan internamente). El dolor del disparo proviene de la gran [[fuerza_externa_neta]] que el tirador debe ejercer para absorber el retroceso del arma.

**Límite de validez:** El modelo es válido mientras el sistema sea el arma + proyectil y la fricción con el suelo durante el brevísimo instante del disparo sea despreciable. Si el arma está sujeta a un sistema de amortiguación, la [[fuerza_externa_neta]] del mecanismo de retroceso modifica el balance.

---

## 5. Maniobras orbitales: atraque espacial

**Contexto:** Dos naves espaciales se aproximan para atracar. Antes del contacto, cada nave tiene su propio [[momento_lineal_individual]]. Tras el acoplamiento, forman un sistema único con una [[vf]] común.

**Variable dominante:** [[vf]]

**Descripción:** Si ambas naves apagan sus motores durante la maniobra de acoplamiento, el [[impulso_externo]] gravitacional es igual para ambas (trayectorias similares) y puede considerarse despreciable en la escala del encuentro. La colisión de acoplamiento es perfectamente inelástica: el [[Pinitial]] del sistema determina la [[vf]] del conjunto. La [[masa_total]] del sistema combinado y la diferencia de velocidades relativas son los parámetros que los controladores de vuelo deben calcular para planificar las maniobras de corrección posteriores.

**Límite de validez:** El modelo de sistema aislado es una aproximación válida durante el instante del acoplamiento. Antes y después, los motores y la gravedad orbital constituyen [[fuerza_externa_neta]] que domina la trayectoria a largo plazo.
