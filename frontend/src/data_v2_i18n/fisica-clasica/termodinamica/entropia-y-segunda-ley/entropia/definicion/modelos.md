# Modelos

## Modelo ideal

El modelo estándar de este leaf aplica la definición de Clausius a un intercambio reversible de calor a temperatura constante.

## Hipótesis

- **Proceso isotérmico reversible**: la temperatura [[T_abs]] permanece constante durante todo el proceso. Esta condición convierte la integral diferencial en una simple división y es la hipótesis central del modelo.

- **Criterio cuantitativo de estabilidad térmica**: la variación de temperatura durante el intercambio debe mantenerse por debajo de 2 K; por encima de 5 K conviene tratar la irreversibilidad de forma explícita.

- **Proceso reversible (cuasi-estático)**: el sistema pasa por una sucesión continua de estados de equilibrio. No hay fricciones internas, gradientes de temperatura finitos ni procesos de difusión espontánea. En la práctica, los cambios de fase a temperatura constante (fusión, vaporización) son los procesos más próximos a este ideal.

- **Sistema cerrado en contacto con un único reservorio térmico**: todo el calor [[Q_rev]] se intercambia con un reservorio a temperatura constante [[T_abs]]. No hay múltiples fuentes de calor a distintas temperaturas actuando simultáneamente.

- **[[T_abs]] positiva y finita**: la temperatura del reservorio es estrictamente mayor que cero kelvin, lo que garantiza que el denominador de la fórmula de Clausius es siempre finito y positivo.

## Dominio de validez cuantitativo

Criterio cuantitativo: el modelo isotérmico es adecuado si la variación térmica del sistema cumple ΔT < 2 K durante el intercambio; si el gradiente entre sistema y reservorio cumple ΔT > 5 K, la irreversibilidad ya debe discutirse explícitamente. La relación integrada de Clausius es exacta para cualquier proceso isotérmico reversible.

Para procesos de cambio de fase a presión constante, el modelo es aplicable cuando la temperatura de transición está bien definida. Para el agua: fusión a 273.15 K, vaporización a 373.15 K (a 1 atm). Fuera de los puntos de transición, el proceso deja de ser isotérmico y la fórmula no aplica directamente.

La desviación del modelo comienza a ser significativa cuando el proceso real dista notablemente del reversible: si la transferencia de calor ocurre con un gradiente de temperatura mayor de 5 K entre el sistema y el reservorio, la irreversibilidad introduce un error relativo en [[DeltaS]] del sistema del orden del gradiente dividido por [[T_abs]].

## Señales de fallo del modelo

- **[[T_abs]] varía apreciablemente durante el proceso**: si la temperatura cambia en más de 1-2 K, la hipótesis isotérmica falla. En ese caso, [[DeltaS]] debe calcularse con un modelo no isotérmico por integración reversible.

- **Proceso claramente irreversible**: explosiones, mezclas rápidas, expansiones libres (expansión de Joule). En estos procesos el calor real es menor que el calor reversible equivalente para absorción; usar el calor real subestima [[DeltaS]] del sistema.

- **[[T_abs]] calculado negativo**: indica que [[DeltaS]] y [[Q_rev]] tienen signos opuestos, lo que es incoherente con la definición. Revisar los signos de los datos de entrada.

## Modelo extendido o alternativo

Para procesos no isotérmicos donde la temperatura varía de forma continua, la forma diferencial de Clausius debe evaluarse explícitamente. Para calentamiento sensible de un cuerpo con capacidad calorífica masiva aproximadamente constante, el modelo alternativo usa una relación logarítmica entre temperatura inicial y final.

Este modelo extiende la aplicabilidad a procesos de calentamiento o enfriamiento sensible sin cambio de fase. La condición cuantitativa para su validez es que la capacidad calorífica c sea constante dentro del rango de temperatura, lo que es razonable para variaciones de temperatura menores del 20% de [[T_abs]] en kelvin.

Cuando conviene pasar al modelo extendido: cuando el proceso no es isotérmico, cuando se trabaja con calentamiento o enfriamiento de líquidos o sólidos entre dos temperaturas distintas, o cuando el enunciado proporciona capacidad calorífica específica y temperaturas inicial y final en lugar de calor latente y temperatura de transición.

## Comparación operativa

| Criterio | Modelo isotérmico (Clausius directo) | Modelo no isotérmico (integral con c) |
|---|---|---|
| Condición | T constante, cambio de fase o proceso isotérmico reversible | T varía, calentamiento/enfriamiento sensible |
| Fórmula | relación de Clausius isotérmica | modelo no isotérmico por integración |
| Dato necesario | [[Q_rev]] y [[T_abs]] | masa, capacidad calorífica y temperaturas inicial/final |
| Complejidad | División directa | Logaritmo natural |
| Error típico | Usar temperatura Celsius; usar calor irreversible en lugar de [[Q_rev]] | Usar capacidad no constante; olvidar que las temperaturas deben estar en kelvin |
