# Ejemplo tipo examen: Órbita de un satélite de comunicaciones

## Enunciado

Un satélite de comunicaciones se desplaza en una trayectoria circular estable alrededor de la Tierra, manteniendo una altitud constante que le permite operar como un repetidor de señales eficiente. Este tipo de órbitas son fundamentales para la infraestructura global de telecomunicaciones, permitiendo la transmisión de datos, televisión y servicios de internet a través de vastas distancias. En este escenario particular, el satélite completa una revolución exacta alrededor de nuestro planeta cada 12 horas. El radio total de su órbita, medido meticulosamente desde el centro geométrico de la Tierra hasta el centro de masa del satélite, es de 20,000 km. El objetivo de este análisis exhaustivo es caracterizar detalladamente la cinemática del satélite para comprender las magnitudes físicas extremas y las condiciones de equilibrio dinámico bajo las cuales operan estos ingenios tecnológicos en el entorno espacial.

Determina con precisión los siguientes parámetros físicos:
1. La velocidad angular del satélite expresada en radianes por segundo para cuantificar su ritmo de rotación espacial.
2. La rapidez tangencial a la que se desplaza en su órbita para entender la magnitud de su avance lineal a través del vacío.
3. La aceleración centrípeta a la que está sometido permanentemente para mantener dicha trayectoria circular perfecta sin escapar hacia el espacio profundo por inercia.
4. El desplazamiento angular (en radianes) que el satélite barre en un intervalo de tiempo de 3 horas durante su misión de vigilancia.
5. El número total de vueltas [[N]] que el satélite completa tras un día de operación (24 horas).

## Datos

Para resolver el problema con rigor científico, organizamos las magnitudes conocidas asegurando su coherencia en el Sistema Internacional de Unidades (SI):
*   Período de rotación [[T]] : 12 h (tiempo necesario para completar un ciclo de 360 grados o 2*pi radianes).
*   Radio orbital [[R]] : 20,000 km (distancia radial constante desde el centro de giro terrestre). Equivale a 20,000,000 metros.
*   Intervalo de tiempo [[dt]] para la cuarta pregunta: 3 h (equivalente a 10,800 s).
*   Constantes implícitas: Consideramos que la trayectoria es una circunferencia perfecta, lo cual simplifica el análisis cinemático inicial.

## Definición del sistema

El sistema físico en estudio está compuesto por un único objeto, el satélite artificial, que para fines de este análisis cinemático se trata bajo el modelo de partícula puntual. Esta simplificación es plenamente válida ya que las dimensiones estructurales del satélite (unos pocos metros) son órdenes de magnitud inferiores al radio de su órbita (millones de metros), lo que hace que su geometría interna no afecte a los cálculos de trayectoria global. El centro de referencia inercial se sitúa en el centro de la Tierra, que consideramos como un punto fijo en el espacio para este marco temporal. El movimiento se describe en el plano orbital bidimensional utilizando un sistema de coordenadas polares (radio y ángulo). Las únicas direcciones vectoriales relevantes son la dirección radial (que apunta hacia el centro terrestre y define la aceleración) y la dirección tangencial (que define el sentido del movimiento instantáneo).

## Modelo físico

Para este análisis se aplica el modelo de **Movimiento Circular Uniforme (MCU)**. Este modelo ideal describe el movimiento de un cuerpo que recorre una circunferencia con rapidez constante, barriendo ángulos iguales en intervalos de tiempo iguales. Las magnitudes núcleo que definen este estado son la velocidad angular [[omega]] , el período [[T]] , la aceleración centrípeta [[ac]] y el desplazamiento angular [[dtheta]] . La característica definitoria es que, aunque el módulo de la velocidad (rapidez) no cambia, la dirección del vector velocidad varía continuamente debido a la presencia de una aceleración radial constante. Este modelo es una representación precisa de las órbitas circulares donde no hay fuerzas de resistencia significativas.

## Justificación del modelo

La elección del MCU como modelo de análisis está plenamente justificada en este escenario por tres razones principales. En primer lugar, el enunciado especifica que el satélite mantiene una altitud constante, lo que garantiza un [[R]] invariable, requisito fundamental de la trayectoria circular. En segundo lugar, al situarse en el vacío del espacio exterior, lejos de las capas densas de la atmósfera terrestre, las fuerzas disipativas como la fricción del aire son despreciables, lo que permite que la [[omega]] se mantenga constante sin necesidad de propulsión continua. Finalmente, para un satélite en órbita estable, la fuerza de gravedad actúa como la fuerza neta que proporciona exactamente la aceleración necesaria para curvar la trayectoria. El modelo solo dejaría de ser válido si el satélite realizara maniobras de propulsión para cambiar de órbita o si estuviera en una órbita tan baja que el rozamiento atmosférico causara un decaimiento orbital en espiral.

## Resolución simbólica

El proceso de resolución se divide en cuatro etapas lógicas que vinculan las magnitudes angulares con las lineales y temporales:

**Etapa 1: Cálculo del ritmo de giro angular**
La velocidad angular se define como el ángulo total barrido (una vuelta completa o 2*pi radianes) dividido por el tiempo total empleado (el período):

{{f:mcu_omega_periodo}}

**Etapa 2: Determinación de la rapidez lineal**
La rapidez tangencial vincula el desplazamiento angular con la distancia física recorrida. Se obtiene multiplicando la velocidad angular por el radio de la trayectoria:

{{f:mcu_relacion_lineal}}

**Etapa 3: Cálculo de la aceleración de curvatura**
La aceleración centrípeta es la magnitud que cuantifica el cambio de dirección del vector velocidad. Se puede expresar como el cociente entre el cuadrado de la rapidez tangencial y el radio de la órbita:

{{f:mcu_aceleracion_v}}

**Etapa 4: Cálculo del desplazamiento angular en un tramo**
El ángulo barrido en cualquier tramo se obtiene multiplicando la velocidad angular constante por la duración del intervalo de tiempo considerado:

{{f:mcu_desplazamiento_angular}}

**Etapa 5: Conteo de ciclos completos**
Para hallar el número de revoluciones, dividimos el desplazamiento angular total entre el ángulo de una vuelta (2*pi):

{{f:mcu_vueltas}}

## Sustitución numérica

Realizamos los cálculos asegurando la precisión en cada paso intermedio:

**Paso 1: Sincronización temporal**
Convertimos el periodo [[T]] a segundos para operar en el SI: doce horas resultan en 43,200 s. Convertimos también el intervalo [[dt]] de tres horas a segundos, obteniendo un valor de 10,800 s.

**Paso 2: Obtención de la velocidad angular**
Aplicamos la relación simbólica de la Etapa 1:

{{f:mcu_omega_periodo}}

El valor resultante para [[omega]] es de aproximadamente 0.0001454 rad/s.

**Paso 3: Obtención de la rapidez tangencial**
Utilizamos la fórmula de conexión lineal con el radio en metros (20,000,000 m):

{{f:mcu_relacion_lineal}}

El valor de [[v]] resultante es de 2,908 m/s (casi 3 km/s).

**Paso 4: Obtención de la aceleración centrípeta**
Usamos la expresión de la aceleración radial:

{{f:mcu_aceleracion_v}}

El valor de [[ac]] es de 0.423 m/s².

**Paso 5: Obtención del desplazamiento angular**
Aplicamos la definición de desplazamiento angular para el intervalo de 3 horas:

{{f:mcu_desplazamiento_angular}}

*   Valor de [[dtheta]] : 1.57 rad (lo que representa un ángulo recto).

**Paso 6: Obtención del número de vueltas**
Para un día completo (24 h), que es el doble del periodo [[T]], el satélite debe completar:

{{f:mcu_vueltas}}

*   Valor de [[N]] : 2 vueltas exactas.

## Validación dimensional

Verificamos la consistencia física de los resultados mediante el **Estilo de Notación Azul Phyxio v5**:
*   Para la velocidad angular: `` `[T⁻¹]` ``. Correcto.
*   Para la rapidez tangencial: `` `[T⁻¹] * [L] = [L T⁻¹]` ``. Correcto.
*   Para la aceleración: `` `[L T⁻¹]² / [L] = [L T⁻²]` ``. Correcto.
*   Para el desplazamiento angular: `` `[T⁻¹] * [T] = [1]` ``. Correcto, los ángulos son magnitudes adimensionales.

## Interpretación física

Los resultados revelan un equilibrio preciso. El satélite viaja a casi 3 km/s para contrarrestar la gravedad y no caer, pero esa misma gravedad le obliga a curvarse con una aceleración de 0.423 m/s². El desplazamiento angular de 1.57 rad en 3 horas tiene un significado físico muy claro: el satélite recorre exactamente un cuarto de su órbita total en ese tiempo. Esto es consistente con el hecho de que 3 horas es un cuarto de su período total de 12 horas. El MCU permite predecir con exactitud milimétrica dónde estará el satélite en cualquier momento del futuro, una capacidad crítica para el mantenimiento de las redes de comunicación globales.

# Ejemplo de aplicación real

## Contexto

Consideremos la **centrífuga de laboratorio de alta velocidad**, esencial en medicina para la separación de muestras. Al girar a miles de revoluciones por minuto, genera una aceleración que domina sobre la gravedad terrestre, permitiendo separar componentes por densidad en cuestión de minutos.

## Estimación física

Para realizar una estimación robusta del comportamiento de la centrífuga, partimos de un ritmo de giro estándar de 4,000 RPM (revoluciones por minuto). Este valor debe convertirse a frecuencia [[f]] dividiendo por 60 s, lo que nos da f ≈ 66.7 Hz. Considerando un radio típico de laboratorio de [[R]] : 0.15 m, estimamos las siguientes magnitudes críticas:

1.  **Velocidad angular:** El ritmo de giro en radianes es [[omega]] = 2 * pi * f. Estimamos una [[omega]] de aproximadamente 419 rad/s. Esto significa que el rotor barre más de 400 radianes cada segundo.
2.  **Rapidez tangencial:** En el borde del rotor, la rapidez [[v]] es el producto de [[omega]] por [[R]], resultando en unos 62.8 m/s (más de 220 km/h).
3.  **Aceleración centrípeta:** Esta es la magnitud dominante. Calculamos [[ac]] = [[omega]]² * [[R]], lo que arroja una estimación de 26,334 m/s². 

Al comparar esta [[ac]] con la gravedad terrestre (g ≈ 9.8 m/s²), observamos que la aceleración de sedimentación es casi 2,700 veces superior. Esta relación cuantitativa explica por qué procesos que tardarían días por decantación natural ocurren en minutos en la centrífuga.

## Interpretación

La aceleración casi 2,700 veces superior a la gravedad terrestre permite sedimentar partículas microscópicas rápidamente. El diseño debe soportar esfuerzos mecánicos masivos, ya que la aceleración crece con el cuadrado de la velocidad angular. Este ejemplo ilustra cómo el control preciso del ritmo de giro permite realizar tareas imposibles bajo la gravedad natural.
