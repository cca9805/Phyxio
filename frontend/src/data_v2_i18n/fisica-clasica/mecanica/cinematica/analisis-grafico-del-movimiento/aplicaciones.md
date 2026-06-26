# Aplicaciones

## 1. Telemetría en competición ciclista

En las etapas contrarreloj del Tour de Francia, los equipos obtienen datos de ** [[velocidad]] frente a [[tiempo]] ** a través de sensores GPS y potenciómetros en la bicicleta. El director deportivo examina el gráfico v-t para detectar cuándo el ciclista ha entrado en fatiga (pendiente descendente sostenida), cuándo el viento de cola ha favorecido la marcha (tramo constante a [[velocidad]] mayor de lo previsto) y cuánto queda de reserva para el sprint final. La **aceleración** se lee directamente como pendiente del gráfico y el ** [[desplazamiento]] acumulado** se estima como el área bajo la curva, lo que permite comparar la distancia recorrida con la del rival en [[tiempo]] real.

**Variable dominante:** [[velocidad]] instantánea leída del GPS 
**Límite de validez:** el modelo de aceleración constante por tramos falla cuando la carretera presenta cambios de pendiente continuos; en ese caso, los segmentos lineales deben ser más cortos que 5 s para mantener un error inferior al 3 %. Esta limitación es especialmente relevante en etapas de alta montaña.

## 2. Registro de frenada en seguridad vial

Los laboratorios de investigación de accidentes instalan **decelerómetros** en vehículos de prueba y representan la curva v-t durante una frenada de emergencia. La distancia de frenado se calcula como el **área bajo la curva** v-t desde el instante de reacción hasta parada completa. Para un turismo a 120 km/h que frena con a ≈ -8 m/s², la curva es aproximadamente una recta descendente y el área del triángulo resultante da unos 69 m. Si la curva se desvía de la recta (por degradación de pastillas o ABS pulsante), la distancia real difiere de la teórica y los peritos ajustan el modelo.

**Variable dominante:** aceleración (pendiente de la recta v-t durante la frenada) 
**Límite de validez:** la aproximación de aceleración constante se rompe si la frenada es superior a 4 s, ya que la temperatura de los frenos modifica el coeficiente de fricción y la pendiente deja de ser constante.

## 3. Monitorización de ascensores

Los ascensores modernos incorporan sensores que trazan la curva v-t del viaje entre plantas. El perfil estándar tiene tres fases: rampa de aceleración, meseta a [[velocidad]] nominal y rampa de frenado, exactamente el patrón del ejemplo tipo examen de esta hoja. Los ingenieros de mantenimiento comprueban que las **pendientes** (aceleración y deceleración) no superen 1.2 m/s² para confort del pasajero y que el **área total** sea coherente con la distancia entre plantas (por ejemplo, 3.5 m por planta). Una pendiente excesiva o un área que no cuadre activa una alerta de calibración.

**Variable dominante:** [[desplazamiento]] (obtenido como área bajo v-t) 
**Límite de validez:** en edificios muy altos con tramos de más de 20 plantas, la resistencia aerodinámica en el hueco del ascensor hace que la meseta no sea rigurosamente horizontal; el modelo lineal por tramos introduce un error de hasta un 5 % en la distancia estimada.

## 4. Análisis biomecánico del sprint

En laboratorios de biomecánica, cámaras de alta [[velocidad]] capturan la posición del centro de masas de un velocista y generan un gráfico x-t. De la forma del gráfico se deduce si el atleta mantiene aceleración (curva parabólica) o ha alcanzado [[velocidad]] máxima (curva lineal). La **pendiente de la tangente** en cada instante proporciona la [[velocidad]] instantánea, y la **segunda derivada gráfica** —obtenida trazando el gráfico v-t derivado del anterior— revela cómo evoluciona la aceleración. Los entrenadores comparan las curvas de distintas sesiones para cuantificar mejoras de hasta 0.02 m/s² en la fase de salida.

**Variable dominante:** posición del centro de masas (leída de x-t) 
**Límite de validez:** la resolución temporal de la cámara limita la precisión de la pendiente; por debajo de 120 fps, los segmentos linealizados introducen un ruido que supera el 10 % en la aceleración derivada y el análisis gráfico pierde fiabilidad.

## 5. Control de maniobras de atraque espacial

Durante el atraque de una cápsula Crew Dragon con la ISS, el sistema de navegación traza la curva v-t relativa entre ambos cuerpos. La **pendiente** del gráfico indica si los microimpulsos de frenado son correctos, y el **área residual** bajo la curva cuando la [[velocidad]] de aproximación cae por debajo de 0.03 m/s predice la distancia de cierre restante. Si el área calculada supera los 10 m y la [[velocidad]] sigue cayendo demasiado lento, el sistema ordena un impulso adicional. Todo el protocolo se basa en lectura gráfica de pendientes y áreas, la misma herramienta matemática que se practica en este tema.

**Variable dominante:** [[velocidad]] relativa de aproximación (pendiente y área del v-t relativo) 
**Límite de validez:** a distancias inferiores a 1 m, las perturbaciones gravitatorias residuales y la presión de radiación solar distorsionan la linealidad del gráfico; el modelo lineal por tramos sólo es válido mientras la distancia de separación sea mayor que ~2 m.
