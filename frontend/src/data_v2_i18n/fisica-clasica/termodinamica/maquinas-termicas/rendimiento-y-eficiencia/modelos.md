## Modelo ideal

El modelo ideal del rendimiento térmico trata la máquina como un sistema que opera en un ciclo estacionario perfecto entre dos focos térmicos de temperatura absolutamente constante. El fluido de trabajo completa cada ciclo sin pérdidas de energía por rozamiento, sin transferencias de calor con diferencia de temperatura finita y sin mezclas irreversibles de gases.

En este modelo, [[Q_H]] se absorbe íntegramente en un proceso isotérmico a la temperatura del foco caliente, y [[Q_C]] se cede íntegramente en otro proceso isotérmico a la temperatura del foco frío. El trabajo neto [[W_util]] es exactamente la diferencia entre ambos calores, y el rendimiento [[eta]] coincide con el límite de Carnot [[eta_Carnot]] calculado con las temperaturas absolutas de los focos.

Este modelo conserva las dos magnitudes termodinámicas esenciales —los intercambios de calor— y descarta todas las pérdidas mecánicas y las irreversibilidades internas al fluido.

## Hipótesis

- El ciclo es **estacionario y periódico**: el fluido de trabajo regresa exactamente a su estado inicial al final de cada ciclo, sin variación de energía interna neta.
- Los **focos son ideales**: mantienen su temperatura absolutamente constante durante todo el intercambio de calor, independientemente de la cantidad de calor transferida. Violar esta hipótesis introduce gradientes de temperatura que añaden irreversibilidades externas.
- La **transferencia de calor es cuasi-estática**: ocurre sin diferencia de temperatura finita entre el fluido y el foco. Si existe una diferencia finita, la transferencia es irreversible y el rendimiento real cae por debajo del límite de Carnot.
- **Sin rozamiento interno del fluido**: la expansión y la compresión son reversibles. El rozamiento aumenta la generación interna de entropía, eleva [[Q_C]] y reduce [[eta]].
- **Sin pérdidas de calor laterales**: toda la energía intercambiada entre el fluido y los focos es la declarada por [[Q_H]] y [[Q_C]]; no existen fugas de calor a través de paredes ni a componentes auxiliares.

## Dominio de validez cuantitativo

El modelo es razonablemente preciso cuando las irreversibilidades son pequeñas comparadas con los intercambios de calor totales. Como regla práctica, el error relativo es inferior al 5% cuando el diferencial de temperatura entre el fluido y cada foco es menor de 20 K durante el intercambio de calor. Para aplicaciones de laboratorio con ciclos lentos, el modelo ideal es válido cuando la velocidad del ciclo es menor de 0.1 Hz y las presiones de operación son inferiores a 5 MPa.

Para motores de alta potencia, el modelo ideal sobreestima [[eta]] entre un 20% y un 40% respecto al rendimiento real medido, porque las irreversibilidades internas son siempre significativas a velocidades de rotación superiores a 1000 rpm. En ciclos Brayton de turbina de gas, el rendimiento isentrópico de compresor y turbina es típicamente 0.85–0.90, lo que reduce el rendimiento real hasta un 15% por debajo del límite del modelo ideal.

El modelo ideal pierde validez cuando las pérdidas por rozamiento superan el 10% del trabajo bruto de expansión, o cuando la temperatura del foco caliente varía más del 15% durante el ciclo de absorción de calor.

## Señales de fallo del modelo

- [[eta]] calculado con el modelo ideal excede en más del 30% el valor medido experimentalmente para las mismas temperaturas de foco: indica que las irreversibilidades internas son dominantes y el modelo subestima gravemente las pérdidas.
- [[Q_C]] medido es significativamente mayor que [[Q_H]] multiplicado por la razón de temperaturas del foco frío y caliente: señal de que la cesión de calor no es isotérmica o que existen pérdidas de calor laterales no contabilizadas.
- El motor entra en régimen no estacionario (temperatura de los gases de escape que aumenta de ciclo en ciclo): indica que el fluido de trabajo no regresa a su estado inicial y el ciclo no está cerrado, invalidando la hipótesis de periodicidad.
- La potencia del motor disminuye más rápidamente de lo esperado con el aumento de la velocidad de rotación: señal de pérdidas por rozamiento que el modelo ideal no puede capturar.

## Modelo extendido o alternativo

El modelo extendido incorpora irreversibilidades cuantificables mediante los rendimientos isentrópicos de cada componente del ciclo. Para turbinas y compresores, el rendimiento isentrópico es el cociente entre el trabajo real intercambiado y el trabajo que se intercambiaría en un proceso isoentrópico equivalente. Un rendimiento isentrópico de compresor de 0.85 significa que el compresor consume un 17.6% más de trabajo que en el caso ideal.

Cuando conviene pasar al modelo extendido: siempre que el ciclo opere a velocidades superiores a 500 rpm, cuando las irreversibilidades medidas superen el 10% del trabajo ideal, o cuando la diferencia entre el [[eta]] predicho por el modelo ideal y el [[eta]] medido sea mayor del 15%. En centrales termoeléctricas de alta precisión, cambiar a este modelo permite predecir el rendimiento con un error inferior al 2%.

El modelo de temperatura media logarítmica para los intercambiadores de calor es otra extensión relevante: reemplaza la hipótesis de foco isotérmico por un modelo que integra la variación de temperatura a lo largo del intercambiador, lo que reduce el [[eta_Carnot]] efectivo y acerca la predicción al rendimiento real.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Precisión | Sobreestima [[eta]] en 20–40% | Error inferior al 5% con rendimientos isentrópicos medidos |
| Complejidad | Una sola fórmula con [[Q_H]] y [[W_util]] | Requiere rendimientos isentrópicos de cada componente |
| Rango de aplicación | Ciclos lentos y cuasi-estáticos, análisis conceptual | Ciclos reales a velocidad de operación nominal |
| Señal de aplicabilidad | Velocidad de ciclo menor de 0.1 Hz, gradientes de temperatura menores de 20 K | Cualquier motor industrial a velocidad nominal |
| Ventaja clave | Permite comparar con el límite de Carnot y cuantificar la distancia al ideal | Permite predecir [[eta]] real a partir de especificaciones de componentes |
| Límite principal | No captura ninguna irreversibilidad; el rendimiento real siempre queda por debajo | Requiere datos experimentales de rendimientos isentrópicos; no predice el rendimiento sin mediciones previas |
