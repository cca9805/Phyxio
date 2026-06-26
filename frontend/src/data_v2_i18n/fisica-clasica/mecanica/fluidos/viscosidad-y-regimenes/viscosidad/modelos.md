# Viscosidad - Modelo y Validez

## Modelo ideal
El modelo fundamental para el estudio de la viscosidad es el **Fluido Newtoniano en Régimen Laminar**. Este modelo asume que el fluido se comporta como un medio continuo donde el rozamiento interno es puramente viscoso y proporcional a la velocidad de deformación. Se visualiza como una serie de láminas infinitamente delgadas que deslizan unas sobre otras, transmitiendo cantidad de movimiento de forma puramente molecular y lineal. Es el estándar de oro para el agua, el aire y la mayoría de aceites ligeros bajo condiciones de flujo moderadas.

## Hipótesis
Para que este modelo ideal sea aplicable, deben cumplirse las siguientes hipótesis de simplificación:
-   **Medio Continuo**: Se desprecia la naturaleza atómica de la materia; el fluido se trata como una masa ininterrumpida.
-   **Incompresibilidad**: Se asume que la densidad [[rho]] es constante, lo que simplifica la relación entre viscosidad dinámica y cinemática.
-   **Comportamiento Lineal**: Se postula que la viscosidad [[mu]] es una propiedad exclusiva del material y la temperatura, independiente de la fuerza con la que se le "empuje" o se le deforme.
-   **Régimen Laminar**: Se asume que no existen remolinos ni mezcla macroscópica entre las capas de fluido; el transporte de energía es ordenado y predecible.
-   **Sin Efectos de Memoria**: El fluido no tiene elasticidad; una vez que cesa el esfuerzo, la deformación no se recupera (a diferencia de un sólido elástico).

## Dominio de validez cuantitativo
La Ley de Newton de la viscosidad es operativa bajo límites físicos bien definidos:
-   **Número de Reynolds [[Re]]**: En conductos cerrados, el modelo es válido mientras [[Re]] < 2300. Por encima de este valor, las fuerzas inerciales comienzan a desestabilizar las capas viscosas.
-   **Número de Knudsen (Kn)**: En gases, el modelo del continuo solo es válido si Kn < 0.01. En sistemas de vacío extremo o nanotecnología, las moléculas están tan separadas que la viscosidad macroscópica pierde su sentido original.
-   **Escalas de Tiempo**: Para fluidos muy viscosos, el modelo es válido siempre que los procesos de deformación sean lentos en comparación con el tiempo de relajación molecular.

## Señales de fallo del modelo
Un investigador o ingeniero debe estar alerta a las siguientes evidencias de que el modelo Newtoniano está dejando de ser preciso:
-   **No linealidad**: Si al duplicar la velocidad de deformación [[dudy]], el esfuerzo cortante [[tau]] no se duplica exactamente, el fluido presenta un comportamiento no-newtoniano.
-   **Fluctuaciones de Presión**: La aparición de vibraciones o ruido en el flujo indica el inicio de la transición a la turbulencia, donde la viscosidad molecular ya no es suficiente para amortiguar el movimiento.
-   **Efectos de Orientación**: En fluidos complejos (como polímeros), si la viscosidad cambia según la dirección del flujo, el modelo isotrópico ideal ha fallado.

## Modelo extendido o alternativo
Cuando el modelo ideal es insuficiente, se recurre a marcos de trabajo más sofisticados:
-   **Modelos de Ley de Potencia (Oswald-de Waele)**: Para fluidos pseudoplásticos (que se adelgazan con el esfuerzo) o dilatantes (que se espesan).
-   **Modelos Viscoelásticos (Maxwell o Kelvin-Voigt)**: Para sustancias que presentan una respuesta intermedia entre un líquido y un sólido elástico (como el moco o ciertos geles).
-   **Viscosidad de Remolino (Eddy Viscosity)**: En flujos turbulentos, se añade un término extra que representa el transporte de momento realizado por los vórtices macroscópicos.

## Comparación operativa
El modelo de fluido Newtoniano es preferido en la mayoría de aplicaciones de ingeniería civil e hidráulica por su extraordinaria simplicidad matemática. Sin embargo, **cuando conviene** tratar con procesos de la industria alimentaria, química de polímeros o biomecánica (sangre), es imperativo abandonar la linealidad y adoptar modelos de reología compleja. Mientras que el modelo ideal permite obtener soluciones analíticas exactas para perfiles de velocidad, el modelo extendido suele requerir métodos numéricos pesados (CFD) para evitar subestimar las fuerzas de bombeo o las caídas de presión en el sistema.

