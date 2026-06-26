const e=`# Aplicaciones reales: Momento lineal

## 1. Diseño de sistemas de retención infantil (Airbags y cinturones)

**Contexto físico real**:
En una colisión vehicular, el objetivo de los sistemas de seguridad pasiva es gestionar la transición del vehículo desde su velocidad de crucero hasta el reposo absoluto. El momento lineal [[p]] acumulado por los ocupantes debe ser extraído mediante la aplicación de una fuerza neta media [[Fnet]]. El airbag y los cinturones con pretensores actúan como disipadores de esta carga dinámica.

**Hipótesis o simplificación dominante**:
Se asume que el tiempo de impacto [[DeltaT]] se dilata de forma uniforme gracias a la deformación plástica de los materiales del sistema. Se ignora la rotación interna del pasajero para centrarse en el balance traslacional del centro de masas.

**Variable dominante**:
La variable crítica es el tiempo de contacto [[DeltaT]], que actúa como el divisor de la variación de momento lineal [[DeltaP]].

**Interpretación física**:
Puesto que la variación de momento lineal [[DeltaP]] es un valor fijo (determinado por la masa del pasajero y la velocidad previa al choque), la única forma de reducir la fuerza media de impacto es aumentar el tiempo de interacción. El airbag añade valiosos milisegundos a la colisión, lo que permite que la desaceleración sea biológicamente tolerable.

**Límite de validez**:
Este análisis deja de ser válido si la velocidad de impacto es tan elevada que se superan los límites de resistencia estructural de los materiales, produciéndose una deceleración instantánea (choque rígido).

## 2. Propulsión por reacción en ingeniería aeroespacial

**Contexto físico real**:
Los cohetes espaciales operan bajo el principio de conservación del momento lineal en ausencia de atmósfera significativa. Para ganar velocidad hacia adelante, el vehículo debe expulsar masa (combustible quemado) con un momento lineal elevado en sentido opuesto. Es la aplicación más pura de la tercera ley de Newton vista desde el balance de flujo de inercia.

**Hipótesis o simplificación dominante**:
Se considera un sistema aislado donde la única fuerza externa relevante en el vacío es la gravitatoria, la cual se trata como una perturbación menor frente al impulso del motor durante la fase de ignición.

**Variable dominante**:
La variable dominante es la fuerza instantánea [[F]], definida por la rapidez de cambio de la cantidad de movimiento del flujo de gases salientes. El momento lineal final [[Pfinal]] de los gases determina el impulso recibido por el vehículo.

**Interpretación física**:
El cohete no "empuja" contra el aire; el cohete se mueve porque el sistema total (Cohete + Gases) debe mantener su centro de masas según el balance de momento original. Cada gramo de gas expulsado a alta velocidad "empuja" al cohete en sentido contrario para compensar la balanza dinámica.

**Límite de validez**:
El modelo de partícula única para el cohete falla si el flujo de gases es asimétrico o si se alcanzan velocidades relativistas, donde la masa inercial deja de ser constante.

## 3. Dinámica de atraque en buques de gran calado

**Contexto físico real**:
Un buque portacontenedores acercándose a un muelle posee una masa inmensa [[m]], lo que implica que incluso a velocidades extremadamente bajas (pocos centímetros por segundo), su momento lineal [[p]] es colosal. Las defensas del muelle deben absorber esta carga dinámica para evitar daños estructurales en el hormigón.

**Hipótesis o simplificación dominante**:
Se desprecia el efecto de las corrientes marinas laterales y se asume una trayectoria de aproximación puramente rectilínea y ortogonal al muelle.

**Variable dominante**:
El momento lineal total [[p]], que debido a la magnitud de la masa [[m]], domina sobre cualquier otra variable cinemática. Se analizan las componentes [[px]] y [[py]] para aproximaciones angulares.

**Interpretación física**:
El operario del puerto debe entender que "velocidad baja" no significa "baja peligrosidad". El momento lineal del buque es tan alto que detenerlo requiere una gestión de fuerza inmensa. Un error de cálculo en la velocidad de aproximación de apenas 0.1 m/s puede duplicar la energía y el momento a disipar por las defensas.

**Límite de validez**:
El análisis es incompleto si el buque realiza maniobras de giro (borneo), donde el momento angular empieza a ser comparable al momento lineal traslacional.

## 4. Balística y diseño de blindajes cerámicos

**Contexto físico real**:
En balística, un proyectil de baja masa [[m]] pero altísima velocidad [[v]] impacta contra una placa cerámica. El objetivo del blindaje es fragmentar el proyectil y distribuir su momento lineal [[p]] en un área lo más amplia posible y en el menor tiempo posible para agotar su capacidad de penetración.

**Hipótesis o simplificación dominante**:
Se considera que el impacto es instantáneo y que el momento lineal se conserva íntegramente en el sistema Proyectil-Placa durante el primer microsegundo del contacto.

**Variable dominante**:
La variación de momento lineal [[DeltaP]] del proyectil, que debe ser llevada a cero por la fuerza de resistencia de la placa.

**Interpretación física**:
El blindaje cerámico no intenta "detener" la bala por dureza pura, sino por "robo de momento". Al romperse, la cerámica consume gran parte del impulso del proyectil, transformando un vector de avance concentrado en una multitud de vectores de menor intensidad en múltiples direcciones.

**Límite de validez**:
Este modelo falla si se utilizan proyectiles de energía cinética extrema (perforadores de energía cinética) que funden el material del blindaje, entrando en un régimen de hidrodinámica de impactos.

## 5. Análisis de colisiones en medicina forense y biomecánica

**Contexto físico real**:
Los peritos forenses utilizan la conservación del momento lineal para reconstruir accidentes de tráfico. A partir de las posiciones finales y las masas de los vehículos, pueden determinar las velocidades de impacto iniciales incluso si los conductores no frenaron.

**Hipótesis o simplificación dominante**:
Se asume que durante el breve instante del choque, las fuerzas de contacto son tan superiores al rozamiento con el suelo que el momento lineal del sistema se conserva durante la colisión propiamente dicha.

**Variable dominante**:
Las componentes del momento lineal horizontal [[px]] y [[py]], analizadas como un sistema de vectores antes y después del impacto.

**Interpretación física**:
La trayectoria post-colisión de los vehículos es la firma indeleble de sus estados de movimiento previos. Si un camión desplaza a un coche lateralmente, el vector resultante revela inequívocamente quién aportó la mayor parte de la carga dinámica al siniestro.

**Límite de validez**:
El cálculo pierde precisión si los vehículos permanecen enganchados y continúan rotando sobre su eje, o si el terreno es extremadamente irregular, invalidando la hipótesis de sistema aislado de corto plazo.
`;export{e as default};
