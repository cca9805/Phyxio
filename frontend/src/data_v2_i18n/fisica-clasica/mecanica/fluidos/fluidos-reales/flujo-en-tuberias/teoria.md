# Flujo en Tuberías y Transporte de Fluidos

## Contexto conceptual
El flujo en tuberías constituye la columna vertebral de la infraestructura moderna. Representa el estudio del transporte de fluidos (líquidos o gases) a través de conductos cerrados que operan bajo presión. A diferencia de los modelos ideales estudiados en la hidrodinámica básica (como el principio de Bernoulli simple), el análisis del flujo real en tuberías debe integrar la viscosidad, la rugosidad superficial y los fenómenos de disipación energética. Este campo de la física aplicada es el que permite que el agua llegue a los pisos más altos de un rascacielos, que el petróleo cruce continentes y que los sistemas de refrigeración de los reactores nucleares mantengan su integridad operativa.

Desde una perspectiva histórica, el desarrollo de estas leyes fue impulsado por la Revolución Industrial y la necesidad de abastecer a ciudades en crecimiento. Investigadores como Henri Darcy y Julius Weisbach consolidaron en el siglo XIX las ecuaciones que hoy usamos para predecir cuánta potencia necesitamos para mover un fluido. No se trata solo de mover masa, sino de gestionar la fricción: la eterna lucha entre la inercia del fluido y la resistencia viscosa de las paredes del conducto.

## 🟢 Nivel esencial
De forma intuitiva, podemos entender el flujo en una tubería como el paso de un líquido a través de un camino con obstáculos. No es un movimiento libre; cada centímetro que el fluido avanza, pierde un poco de su energía debido al roce constante contra las paredes internas.

Para entender este tema, debemos fijarnos en tres pilares fundamentales:
1.  **Caudal** (¿Cuánto pasa?): Es el volumen total de fluido que atraviesa una sección de la tubería cada segundo. Si imaginas un contador de agua, el caudal es lo que determina qué tan rápido gira el marcador.
2.  **Velocidad** (¿Qué tan rápido va?): Depende del caudal y del tamaño del tubo. Si el tubo es muy estrecho, el fluido debe correr mucho más rápido para que pase la misma cantidad de agua. Esto es similar a lo que ocurre cuando pones el dedo en la salida de una manguera.
3.  **Caída de presión** (¿Cuánta energía se pierde?): Es la diferencia de presión entre el inicio y el final del trayecto. Si la tubería es muy larga, rugosa o tiene muchas curvas, la presión caerá drásticamente. Esta pérdida de carga es la razón por la que a veces el agua sale con poca fuerza si el grifo está muy lejos del depósito principal.

Conceptos auxiliares:
-   Tuberías lisas vs rugosas: El PVC es liso y ofrece poca resistencia; el hierro fundido viejo es rugoso y frena mucho más el flujo.
-   Régimen de flujo: A velocidades bajas, el fluido se mueve de forma ordenada. A velocidades altas, se vuelve caótico y forma remolinos, lo que dispara las pérdidas de energía.

## 🔵 Nivel formal
El análisis formal del flujo interno se rige por el **Balance General de Energía**, que es una extensión de la ecuación de Bernoulli para sistemas reales con fricción y adición de trabajo mecánico (bombas):

{{f:dp_tubo}}

frac{p_1}{[[rho]] g} + z_1 + frac{v_1^2}{2g} + h_{bomba}  igual a  frac{p_2}{[[rho]] g} + z_2 + frac{v_2^2}{2g} + h_L + h_{turbina} 


Donde cada término representa una "altura" o carga de energía:
-   **Carga de presión presion**: Energía potencial debida a la compresión del fluido.
-   **Carga de velocidad [[v]]**: Energía cinética del flujo.
-   **Carga de elevación cota**: Energía potencial gravitatoria.
-   **Pérdida de carga perdida de carga**: Energía degradada en calor por fricción.

### Ecuaciones Operativas
Para calcular la caída de presión [[dp]] en una tubería horizontal de longitud [[L]] y diámetro [[D]], utilizamos la **Ecuación de Darcy-Weisbach**:

{{f:caudal_tubo}}

{{f:area_circular}}

Delta p  igual a  f frac{L}{D} frac{[[rho]] v^2}{2} 


El **Factor de Fricción de Darcy [[f]]** es la variable más compleja de determinar:
-   **En régimen laminar** ([[Re]] < 2300): Se calcula simplemente como f  igual a  64/[[Re]] (Ley de Poiseuille).
-   **En régimen turbulento** ([[Re]] > 4000): Depende de la rugosidad relativa del tubo y se suele obtener mediante la ecuación de Colebrook-White o el famoso **Diagrama de Moody**.

El **Número de Reynolds ([[Re]])** es el criterio que define el régimen:

[[Re]]  igual a  frac{[[rho]] v D}{[[mu]]} 

Donde [[mu]] es la viscosidad dinámica del fluido. Este número representa la relación entre las fuerzas de inercia y las fuerzas viscosas.

## 🔴 Nivel estructural
El **Gradiente de Energía (EGL)** y la **Línea de Gradiente Hidráulico (HGL)** son herramientas visuales que muestran cómo se pierde la energía a lo largo del conducto. En una tubería de diámetro constante, la EGL cae linealmente debido a la fricción.

Si hay una bomba, la EGL salta hacia arriba, inyectando energía al sistema; si hay una turbina, cae bruscamente. La distancia entre la EGL y la HGL siempre representa el término de energía cinética (v^2/2g). Comprender estas pendientes es esencial para la ingeniería hidráulica, ya que permiten evitar fenómenos de sifonamiento o sobrepresiones que podrían reventar la infraestructura. El diseño de redes urbanas depende de que la HGL siempre esté por encima de la cota de los edificios para asegurar el suministro por gravedad.

Además, el análisis estructural nos permite entender que una red de tuberías no es solo un conjunto de tubos, sino un sistema dinámico interconectado. La topología de la red (si es en serie, en paralelo o ramificada) define cómo se redistribuye el caudal [[Q]] ante un cambio en la demanda o una avería. La física estructural aquí nos obliga a usar leyes de conservación de masa y energía en cada nudo, similar a las leyes de Kirchhoff en circuitos eléctricos. Esto es fundamental para asegurar que los edificios más alejados de la fuente sigan recibiendo el suministro adecuado sin que los cercanos sufran sobrepresiones innecesarias.

En sistemas complejos como los de refrigeración industrial, la estabilidad del flujo es crítica. El estudio estructural de las líneas de gradiente ayuda a identificar zonas de baja presión donde podría ocurrir cavitación, un fenómeno destructivo donde se forman burbujas de vapor que colapsan violentamente, erosionando el material del tubo. Por tanto, la integridad de la infraestructura de transporte depende directamente de un control preciso de la relación entre el diámetro [[D]] y la presión presion disponible en cada punto crítico de la red.

## Interpretación física profunda
La caída de presión no es simplemente un número; es el costo termodinámico del transporte. Cada Pascal perdido representa trabajo mecánico que ha sido degradado en calor interno del fluido. En el régimen turbulento, esta disipación es mucho más agresiva porque la energía se invierte en mantener los remolinos y la mezcla caótica de las capas de fluido, no solo en vencer la viscosidad molecular.

Esta turbulencia genera fluctuaciones de presión que pueden inducir vibraciones estructurales. Por tanto, la física del flujo en tuberías nos enseña que el transporte eficiente requiere minimizar la generación de entropía mediante la optimización de la velocidad [[v]] y la rugosidad de las paredes.

Finalmente, la integración de sensores inteligentes permite hoy realizar un "monitoreo estructural" en tiempo real. Al comparar la caída [[dp]] medida con la teórica en cada tramo, se pueden detectar fugas, bloqueos o incrustaciones de cal antes de que causen un fallo catastrófico. Esta convergencia entre la mecánica de fluidos clásica y la digitalización de infraestructuras asegura un suministro más eficiente, seguro y económico para las ciudades del futuro, reduciendo drásticamente el desperdicio de recursos energéticos y materiales.

## Orden de magnitud
- En una red de agua doméstica, las velocidades suelen mantenerse entre 1text{ y }2text{ m/s} para evitar ruidos y erosión prematura.
- Un factor de fricción típico para tuberías nuevas de acero comercial es de 0.02.
- El número de Reynolds en una manguera de jardín suele ser de unos 20000, lo que indica que casi siempre operamos en régimen turbulento.
- Una caída de presión de 1text{ bar} por cada 100text{ metros} es un valor común en diseños industriales de transporte de líquidos.

## Método de resolución personalizado
1.  **Diagnóstico del Régimen**: Calcule siempre [[Re]] primero. Sin esto, no puede elegir la fórmula de [[f]] correcta. Si [[Re]] < 2300, use 64/[[Re]]; de lo contrario, use Moody.
2.  **Cálculo de Área**: Asegúrese de que el diámetro [[D]] esté en metros para que el área [[A]] esté en m^2. Recuerde que A  igual a  pi D^2/4.
3.  **Balance de Energía**: Si hay cambios de altura o presión, use la ecuación completa de Bernoulli con pérdidas integradas.
4.  **Verificación de Unidades**: La viscosidad dinámica [[mu]] debe estar en Pa cdot s, no en centipoise. Un error de unidades aquí anula todo el cálculo de Reynolds.

## Casos especiales y ejemplo extendido
Un caso especial es el de los **conductos no circulares** (como los conductos de aire acondicionado cuadrados). En estos casos, se utiliza el **Diámetro Hidráulico** D_h  igual a  4A/P, donde P es el perímetro mojado. Esto permite aplicar la ecuación de Darcy-Weisbach a geometrías complejas con un error mínimo.

Otro caso es el **golpe de ariete**, que ocurre cuando una válvula se cierra bruscamente, deteniendo el caudal [[Q]] de forma casi instantánea. La inercia del fluido genera una onda de presión que puede ser diez veces superior a la nominal, demostrando la importancia de la elasticidad de las paredes del tubo.

## Preguntas reales del alumno
- **¿Por qué la presión baja si la tubería es horizontal?** Porque la energía mecánica se gasta continuamente en vencer la fricción viscosa contra las paredes internas del conducto.
- **¿Si el tubo es más ancho, hay más o menos fricción?** Menos, porque para el mismo caudal [[Q]], la velocidad baja drásticamente y la fricción depende del cuadrado de esa velocidad.
- **¿Qué pasa si el fluido es muy viscoso como la miel?** El número de Reynolds será muy bajo, el flujo será laminar y la caída de presión será enorme debido al rozamiento molecular interno.

## Conexiones transversales y rutas de estudio
- **Termodinámica**: El calor generado por la fricción se estudia en el primer principio como un aumento de la energía interna.
- **Transporte de Calor**: La transferencia de calor en tubos depende directamente del espesor de la capa límite y del régimen de flujo ([[Re]]).
- **Mecánica**: El rozamiento viscoso es el análogo fluido al rozamiento dinámico entre superficies sólidas.
- **Ecología**: La eficiencia en el bombeo de fluidos es clave para reducir el consumo energético global.

## Síntesis final
El transporte de fluidos es la lucha constante contra la entropía y la disipación energética. Diseñar una tubería no es solo un reto geométrico, sino un ejercicio de optimización económica y física: se debe encontrar el equilibrio perfecto entre el costo de inversión inicial (diámetro del tubo) y el costo operativo de por vida (energía de bombeo para vencer la caída [[dp]]). Comprender el flujo en tuberías es, en esencia, comprender cómo movemos la energía que sustenta nuestra civilización.

