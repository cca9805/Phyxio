# Introducción al Sonido - Modelos y Validez

## Modelo ideal
El modelo fundamental para el estudio del sonido en fluidos es el **modelo de acústica lineal**. Este marco teórico describe la propagación de perturbaciones mecánicas asumiendo que las variaciones de presión, densidad y velocidad de partícula son extremadamente pequeñas en comparación con los valores de equilibrio del medio. Se basa en una simplificación de las ecuaciones de Navier-Stokes donde se omiten los términos de segundo orden y los efectos de viscosidad, resultando en la ecuación de onda clásica. La relación central de este modelo es la conexión cinemática entre velocidad, frecuencia y longitud de onda, soportada por la elasticidad macroscópica del fluido.

## Hipótesis
Para que este modelo sea operativo y preciso, se deben cumplir las siguientes condiciones:
-   **Linealidad absoluta**: Se asume que el salto de presión acústica perturbacion de presion es despreciable frente a la presión ambiental P_0. Esto permite que las ondas se superpongan sin interactuar entre sí (principio de superposición).
-   **Proceso Adiabático**: Debido a la alta rapidez de las oscilaciones sonoras, se asume que no hay tiempo para el intercambio de calor entre las zonas comprimidas (calientes) y enrarecidas (frías).
-   **Continuidad del Medio**: El fluido se trata como una masa continua sin tener en cuenta la naturaleza discreta de las moléculas, lo cual es válido siempre que la longitud de onda [[lambda]] sea mucho mayor que el camino libre medio molecular.
-   **Medio Isótropo y Homogéneo**: Se supone que las propiedades como la densidad [[rho]] y el módulo [[B]] son constantes en todas las direcciones y puntos del espacio.

## Dominio de validez cuantitativo
-   **Nivel de Presión**: El modelo es excelente para sonidos desde el umbral de audición (0 dB) hasta niveles muy altos (150 dB), donde perturbacion de presion / P_0 < 0.001.
-   **Rango de Frecuencia**: Funciona perfectamente en el rango audible (20 Hz - 20 kHz) y en ultrasonidos industriales de baja potencia.
-   **Escala Espacial**: Válido para longitudes de onda desde unos pocos milímetros hasta cientos de metros.

## Señales de fallo del modelo
Un investigador o estudiante debe estar alerta a las siguientes señales cuantitativas que indican que el modelo lineal ya no es válido:
1.  **Saturación y Distorsión**: Si el sonido es tan fuerte que perturbacion de presion / P_0 > 0.1 (aproximadamente 174 dB en aire), la linealidad se rompe y el error del modelo supera el 10%.
2.  **Atenuación Excesiva**: Si el sonido desaparece mucho más rápido de lo que predice la ley del inverso del cuadrado, la viscosidad del medio está drenando la energía (régimen no ideal).
3.  **Dispersión Anómala**: Si las diferentes frecuencias viajan a velocidades distintas en un fluido que debería ser no dispersivo, existen efectos estructurales o químicos no contemplados.

## Modelo extendido o alternativo
Cuando el modelo lineal falla, se debe recurrir a:
-   **Acústica No Lineal (Ecuación de Westervelt)**: Necesaria para ultrasonidos médicos de alta intensidad (HIFU) y explosiones, donde la velocidad de la onda depende de la presión local.
-   **Acústica Termoviscosa**: Integra los efectos de la viscosidad y la conducción de calor, vital para sonidos de alta frecuencia en tubos estrechos o medios muy densos.

## Comparación operativa y transición
La **transición al modelo no lineal** es necesaria cuando la intensidad sonora es extrema. Conviene cambiar al modelo de acústica no lineal cuando la perturbación de presión perturbacion de presion supera el 10% de la presión ambiental. En este punto, las crestas de la onda viajan más rápido que los valles, lo que inevitablemente termina en la formación de una **onda de choque** (un salto discontinuo de presión). Asimismo, si se estudia el sonido en fluidos a escalas microscópicas (nanofluídica), el modelo de medio continuo debe abandonarse en favor de la dinámica molecular, ya que el sonido ya no "ve" un fluido suave, sino una lluvia de partículas individuales.