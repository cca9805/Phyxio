# Modelos físicos: Impulso

## Modelo ideal

El modelo ideal del **impulso** [[J]] se basa en la simplificación de una interacción compleja mediante el concepto de **fuerza media** [[Fmed]]. En este modelo, no intentamos rastrear la evolución exacta de la fuerza en cada milisegundo del choque; en su lugar, sustituimos la fuerza real variable por una fuerza constante que produce el mismo efecto dinámico neto.

{{f:impulso_fuerza_media}}

Este enfoque es extraordinariamente potente porque permite conectar el estado inicial y final de un sistema sin conocer los detalles íntimos de la colisión, tratando al objeto como una partícula o un sólido rígido donde el impulso se aplica instantáneamente en un intervalo [[dt]].

---

## Hipótesis

Para que el modelo de impulso sea operativo y fiable, aceptamos las siguientes hipótesis:
1. **Aproximación de Impulso**: Suponemos que el intervalo de interacción [[dt]] es tan pequeño comparado con el tiempo total de observación que las fuerzas externas no impulsivas (como el peso o el rozamiento ambiental) son despreciables durante el impacto.
2. **Sólido Rígido**: Se asume que el cuerpo no sufre deformaciones permanentes que disipen energía de forma que alteren el cálculo del momento lineal, o que dicha deformación es el mecanismo que define el [[dt]].
3. **Fuerza Neta Dominante**: La fuerza que genera el impulso es el factor dominante del cambio de movimiento, ignorando variaciones de masa [[m]] durante el proceso (salvo en modelos de propulsión).

---

## Dominio de validez cuantitativo

El modelo de impulso es válido bajo los siguientes criterios:
*   **Escala temporal**: El tiempo de contacto [[dt]] debe ser mucho menor que el periodo de movimiento característico del sistema (típicamente [[dt]] < 0.1 s en colisiones macroscópicas).
*   **Régimen de fuerzas**: La fuerza de impacto debe ser varios órdenes de magnitud superior a las fuerzas constantes del sistema (como la gravedad), de modo que `F_{impacto} / F_{grav} > 100`.
*   **Velocidad**: Las velocidades involucradas deben estar lejos del régimen relativista (`v << c`), donde la definición lineal de [[p]] dejaría de ser exacta.

---

## Señales de fallo del modelo

Podemos identificar que el modelo de impulso está fallando o es insuficiente si:
*   **Resultados divergentes**: La fuerza media calculada [[Fmed]] resulta menor que las fuerzas externas que habíamos despreciado (ej: si el impulso de un frenado es menor que el peso del objeto).
*   **Deformación excesiva**: Si el objeto se deforma de tal manera que el centro de masas cambia su posición interna significativamente durante el [[dt]], el modelo de partícula única falla.
*   **Tiempos largos**: Si la interacción se prolonga demasiado (como un remolque lento), ya no hablamos de "impulso" sino de dinámica de fuerzas constantes bajo la Segunda Ley de Newton estándar.

---

## Modelo extendido o alternativo

Cuando el modelo ideal es insuficiente, recurrimos a:
1. **Modelo Integral**: En lugar de [[Fmed]], utilizamos la función temporal de la fuerza `F(t)` y resolvemos la integral para obtener el área exacta. Es vital en balística avanzada y diseño de suspensiones.
{{f:impulso_integral}}
2. **Dinámica de Colisiones Elásticas/Inelásticas**: Introducimos el coeficiente de restitución para modelar cuánta de la energía se conserva tras el impulso.
3. **Masa Variable**: En sistemas como cohetes, donde el impulso se genera expulsando masa, el modelo debe extenderse para incluir el término `dm` / [[dt]].

---

## Comparación operativa

La elección del modelo depende del objetivo:
*   **Usa el Modelo de Fuerza Media** si solo te interesa el efecto neto del choque y tienes datos de tiempo y cambio de velocidad. Es el estándar para seguridad vial y deportes.
*   **Cambiar al Modelo Integral** cuando la integridad estructural dependa de los picos de tensión máxima [[Fmax]] y no solo del efecto neto acumulado, ya que el modelo de fuerza media puede subestimar daños por impacto en materiales frágiles.
*   **Usar el Teorema Impulso-Momento** siempre que el cálculo de la fuerza sea difícil pero el cambio de velocidad sea fácil de medir (ej. mediante cámaras de alta velocidad).
{{f:teorema_impulso_momento}}
