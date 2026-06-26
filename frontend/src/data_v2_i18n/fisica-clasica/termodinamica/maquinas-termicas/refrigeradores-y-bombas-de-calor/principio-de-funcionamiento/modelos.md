# Modelos

## Modelo ideal

El modelo ideal del ciclo invertido asume un ciclo de Carnot reversible entre dos focos de capacidad infinita a temperaturas constantes [[T_C]] y [[T_H]]. El fluido de trabajo realiza procesos isotérmicos e isentrópicos perfectos. No hay fricción, caídas de presión ni diferencias finitas de temperatura en los intercambiadores. El trabajo mínimo resultante es [[W]] igual a [[Q_C]] multiplicado por ([[T_H]] menos [[T_C]]) dividido entre [[T_C]], y la variación de entropía total [[Delta_S_total]] es exactamente cero.

## Hipótesis

- Los focos térmicos tienen capacidad calorífica infinita: sus temperaturas no cambian al intercambiar calor.
- El ciclo es completamente reversible: compresión y expansión isentrópicas, intercambios isotérmicos.
- No hay pérdidas por fricción ni fugas de refrigerante.
- Las temperaturas del refrigerante coinciden exactamente con las de los focos durante el intercambio.
- El sistema opera en régimen estacionario cíclico.
- Se aplica la primera ley: [[Q_H]] es [[Q_C]] más [[W]] siempre.

## Dominio de validez cuantitativo

El modelo de Carnot es válido como referencia teórica para diferencias de temperatura entre 10 y 80 K, con temperaturas de foco frío entre 200 y 300 K. Se utiliza cuando se busca evaluar la eficiencia relativa de un sistema real respecto al ideal. Cuantitativamente, el modelo predice que el trabajo mínimo para extraer 1000 J con [[T_C]] de 263 K y [[T_H]] de 303 K es 152 J. La fracción de Carnot típica de sistemas reales es 30 % a 60 %. El modelo deja de ser cuantitativo cuando el trabajo real > 5 veces el mínimo o cuando las diferencias de temperatura son extremas (criogenia por debajo de 100 K).

## Señales de fallo del modelo

- El trabajo real es más de 5 veces el trabajo de Carnot: las irreversibilidades invalidan la predicción ideal.
- [[Delta_S_total]] calculada resulta negativa: indica error en los datos o violación de las hipótesis del modelo.
- La temperatura del refrigerante varía significativamente durante el intercambio: la hipótesis isotérmica no se cumple.
- El compresor opera en ciclos de arranque y parada frecuentes: el régimen estacionario no se aplica.
- La capacidad del foco es limitada y su temperatura cambia apreciablemente durante el proceso.

## Modelo extendido o alternativo

El modelo de ciclo de compresión de vapor sustituye los procesos isotérmicos de Carnot por procesos reales: compresión isentrópica real con rendimiento isentrópico del 70 al 85 por ciento, condensación isobárica a temperatura variable del refrigerante, expansión isoentálpica a través de válvula de estrangulamiento, y evaporación isobárica con recalentamiento. Este modelo predice el trabajo real con un error del 10 al 20 por ciento.

Cuando conviene pasar al modelo extendido: cuando se necesitan predicciones cuantitativas del trabajo real, cuando se evalúa el rendimiento de componentes específicos, o cuando la diferencia entre el modelo de Carnot y la realidad supera el 50 por ciento del trabajo.

## Comparación operativa

| Aspecto | Modelo ideal (Carnot) | Modelo real (compresión de vapor) |
|---|---|---|
| Compresión | Isentrópica reversible | Isentrópica con rendimiento 70-85 % |
| Intercambio de calor | Isotérmico, sin diferencia de T | Isobárico, con diferencia de 5-15 K |
| Expansión | Isentrópica reversible | Isoentálpica (irreversible) |
| [[Delta_S_total]] | Cero | Positiva (0.1 a 5 J/K por ciclo) |
| Trabajo [[W]] | Mínimo de Carnot | 2 a 5 veces el mínimo |
| Aplicación | Referencia teórica, cotas | Diseño, evaluación de rendimiento |
