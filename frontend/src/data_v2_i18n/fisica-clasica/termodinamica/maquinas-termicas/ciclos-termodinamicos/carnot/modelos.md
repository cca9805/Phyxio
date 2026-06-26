# Modelos — Ciclo de Carnot

## Modelo ideal

El ciclo de Carnot ideal consta de cuatro procesos reversibles ejecutados por un fluido de trabajo entre dos reservorios térmicos de capacidad infinita. La expansión isotérmica a [[T_H]] permite absorber [[Q_H]]; la expansión adiabática reversible reduce la temperatura hasta [[T_C]]; la compresión isotérmica a [[T_C]] cede [[Q_C]]; y la compresión adiabática reversible cierra el ciclo devolviendo el fluido a [[T_H]]. La simplificación central es la **reversibilidad total**: no existe fricción, no hay diferencias finitas de temperatura y los procesos son cuasiestáticos. Las magnitudes conservadas son la energía total (primera ley) y la entropía del universo (segunda ley en su forma de igualdad).

## Hipótesis

- Los reservorios térmicos tienen capacidad calorífica infinita y mantienen su temperatura constante durante todo el intercambio de calor.
- Todos los procesos son internamente reversibles: sin fricción, sin turbulencia, sin gradientes internos.
- La transferencia de calor ocurre a diferencia infinitesimal de temperatura entre el fluido y el reservorio.
- El fluido de trabajo retorna exactamente a su estado inicial tras completar el ciclo.
- No hay pérdidas por conducción, radiación ni fugas de masa.

Violar la primera hipótesis (reservorios finitos) hace que las temperaturas de los focos varíen durante el ciclo y el rendimiento real cae. Violar la segunda (fricción interna) genera entropía irreversible y reduce [[W_neto]]. Violar la tercera (diferencias finitas de temperatura) es la fuente dominante de irreversibilidad en máquinas reales.

## Dominio de validez cuantitativo

El modelo es aplicable cuando las irreversibilidades son despreciables frente a los intercambios de calor del ciclo. En la práctica, esto exige que la diferencia de temperatura entre el fluido y el foco sea menor del 1 % de la temperatura absoluta del foco durante los procesos isotérmicos. Para centrales térmicas con [[T_H]] > 500 K y [[T_C]] > 280 K, el rendimiento de Carnot proporciona una cota superior útil con error relativo respecto al ciclo ideal específico (Brayton, Rankine) del orden de magnitud del 10 – 30 %.

## Señales de fallo del modelo

- Si el rendimiento calculado del ciclo real supera el 90 % del rendimiento de Carnot correspondiente, los datos de entrada pueden ser incorrectos o el modelo del ciclo real es demasiado optimista.
- Si las temperaturas de los focos no son constantes durante la operación (como en ciclos de combustión interna), el modelo de Carnot entre temperaturas extremas sobreestima el límite real.
- Si el ciclo involucra cambios de fase no ideales con pérdidas de presión, el Carnot no captura esas irreversibilidades de fase.
- En sistemas con múltiples niveles de temperatura (ciclos combinados, regenerativos), el Carnot simple entre dos focos no refleja adecuadamente el potencial termodinámico disponible.

## Modelo extendido o alternativo

El modelo extendido más directo es el **ciclo endorreversible** (modelo de Curzon-Ahlborn), que mantiene la reversibilidad interna del fluido pero permite diferencias finitas de temperatura entre el fluido y los focos. Este modelo predice un rendimiento a máxima potencia menor que [[eta_C]], y su expresión depende de la raíz cuadrada del cociente de temperaturas en lugar del cociente lineal.

Cuando conviene pasar al modelo endorreversible: cuando se requiere estimar no solo el rendimiento máximo sino el rendimiento a máxima potencia de una planta, o cuando las diferencias de temperatura en los intercambiadores de calor son significativas respecto a las temperaturas absolutas de los focos.

Para ciclos específicos (Brayton, Rankine, Otto, Diesel), se abandona el modelo de Carnot genérico y se usa la fórmula de rendimiento propia del ciclo, que incorpora las restricciones del proceso real (isobárico, isocórico, etc.).

## Comparación operativa

| Criterio | Ciclo de Carnot ideal | Modelo endorreversible (Curzon-Ahlborn) |
|---|---|---|
| Precisión para rendimiento máximo | Exacta como cota superior | Subestima ligeramente la cota |
| Rendimiento a máxima potencia | No predice (requiere potencia nula) | Predice con raíz del cociente de temperaturas |
| Complejidad | Mínima, una sola fórmula | Moderada, requiere conductancias térmicas |
| Aplicación a ciclos reales | Solo como referencia comparativa | Diseño preliminar de plantas |
| Rango de validez | Universal entre dos focos | Sistemas con irreversibilidad externa dominante |
