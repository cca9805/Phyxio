# Modelos de Ingeniería de Fluidos

## Modelo ideal
El modelo ideal de aplicaciones ingenieriles de fluidos se basa en la aproximación de **flujo unidimensional, estacionario e incompresible**. En este modelo, las máquinas hidráulicas se tratan como "dispositivos de caja negra" que intercambian energía con el fluido de manera puntual. Se asume que el fluido se desplaza como un todo continuo y que la transferencia de potencia útil [[P_util]] ocurre sin fluctuaciones temporales. Este modelo es la representación dominante en el diseño preliminar de sistemas de tuberías y estaciones de bombeo, permitiendo dimensionar motores y tuberías mediante ecuaciones algebraicas sencillas sin necesidad de recurrir a simulaciones tridimensionales de alta complejidad.

## Hipótesis
-   **Incompresibilidad**: La densidad densidad del fluido del fluido es constante en todo el proceso.
-   **Estado estacionario**: El caudal [[Q]] y la presión [[dp]] no varían con el tiempo en ningún punto del sistema.
-   **Flujo unidimensional**: Se asumen propiedades promediadas en cada sección transversal, ignorando perfiles de velocidad detallados.
-   **Eficiencia global**: Todas las pérdidas (mecánicas, hidráulicas y de fugas) se agrupan en un único coeficiente de eficiencia [[eta]].
-   **Propiedades constantes**: No se consideran cambios significativos en la temperatura o viscosidad del fluido durante el paso por el dispositivo.

## Dominio de validez cuantitativo
Este modelo es operativo bajo las siguientes restricciones métricas:
-   **Número de Mach**: M < 0.3 para líquidos y gases en baja velocidad, garantizando que el modelo incompresible sea físicamente aceptable.
-   **Régimen de flujo**: Flujo totalmente desarrollado y turbulento (Número de Reynolds > 4000), donde los coeficientes de pérdida son más estables.
-   **Rango de eficiencia**: El modelo es robusto para dispositivos que operan en su rango nominal de diseño (típicamente entre el 30% y el 90% de su caudal máximo).
-   **Presiones moderadas**: Evita zonas donde la presión del fluido se acerque a su presión de vapor para no invalidar el modelo por cavitación.

## Señales de fallo del modelo
-   **Pulsaciones de presión**: Indican que el flujo no es estacionario, invalidando los promedios temporales del modelo.
-   **Ruidos metálicos (Cavitación)**: Indican que el fluido ha dejado de ser una fase única incompresible, apareciendo burbujas de vapor que alteran la transferencia de potencia.
-   **Calentamiento excesivo**: Si la temperatura del fluido sube significativamente, las pérdidas ya no pueden modelarse con una eficiencia [[eta]] constante y se requiere un análisis termodinámico completo.
-   **Vibraciones estructurales**: Sugieren efectos dinámicos o mecánicos que el modelo estático unidimensional no captura.

## Modelo extendido o alternativo
Para situaciones que exceden los límites anteriores, se recurre a la **Dinámica de Fluidos Computacional (CFD)** o al **Análisis Termodinámico Compresible**.
-   **Qué cambia**: El modelo deja de usar promedios de sección y resuelve las ecuaciones de Navier-Stokes en tres dimensiones, capturando vórtices y turbulencias locales.
-   **Alternativa**: En sistemas de gases de alta presión, se utiliza el modelo de gas ideal con cambios de entalpía y entropía para calcular la potencia real de compresión.
-   **Enfoque dinámico**: Para transitorios (como el golpe de ariete), se utilizan modelos de ondas de presión que consideran la elasticidad del fluido y la tubería.

## Transición al modelo alternativo
**¿Cuándo conviene cambiar de modelo?** El modelo incompresible colapsa y se debe transicionar al modelo alternativo en los siguientes escenarios:
1.  **Cambio de Fase**: Cuando existe riesgo de cavitación o ebullición. El modelo de potencia simple no puede predecir la caída de rendimiento ni el daño estructural.
2.  **Compresibilidad**: Si la variación de densidad supera el 5% (Mach > 0.3). En este punto, el error de omitir el trabajo de compresión es inaceptable para fines de ingeniería.
3.  **Transitorios Rápidos**: Al cerrar válvulas de forma súbita, donde la potencia útil ya no es una constante sino una onda de choque que viaja por el sistema.

## Comparación operativa
El modelo ideal es una herramienta de cálculo rápido esencial para la toma de decisiones inicial y la viabilidad económica. El modelo extendido (CFD) es una herramienta de validación de alta precisión que requiere meses de trabajo y gran capacidad de cómputo. Mientras el modelo básico destaca por mostrar la relación directa entre potencia [[P_util]], presión [[dp]] y caudal [[Q]], los modelos avanzados son necesarios para optimizar la geometría interna de las máquinas y prevenir fallos catastróficos por fatiga o erosión.

