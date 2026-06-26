## Modelo ideal

El modelo cinético estándar de este leaf trata el gas como un conjunto de [[N]] moléculas puntuales de masa [[m_mol]] que se mueven en un volumen [[V]] sin interaccionar entre sí salvo en colisiones perfectamente elásticas e instantáneas con las paredes. En este modelo, toda la energía interna del gas es cinética y translacional: no hay energía potencial intermolecular ni grados de libertad rotacionales activos.

La simplificación central es la **hipótesis de gas ideal**: las moléculas son puntos matemáticos con masa pero sin extensión espacial, y las fuerzas entre ellas son estrictamente nulas fuera del instante de colisión. Esta hipótesis permite calcular [[P]], [[v_rms]] y [[E_k_mol]] con tres ecuaciones cerradas y sin parámetros ajustables, lo que hace del modelo una herramienta pedagógica y de cálculo de primera clase.

## Hipótesis

- Las moléculas son **puntuales**: su tamaño propio es despreciable frente a la distancia media entre ellas. Si esta hipótesis falla (alta presión), el volumen efectivo disponible se reduce y la presión real supera la predicha por el modelo.

- Las interacciones intermoleculares son **nulas fuera de las colisiones**. Si las fuerzas atractivas de Van der Waals son relevantes (baja temperatura o alta presión), las moléculas deceleran antes de llegar a la pared, reduciendo la presión efectiva por debajo del valor ideal.

- Las colisiones son **perfectamente elásticas**: la energía cinética total se conserva en cada choque. Si las colisiones fueran parcialmente inelásticas, el gas perdería energía en cada rebote y la temperatura descendería espontáneamente, lo que contradice el equilibrio termodinámico.

- La distribución de velocidades es **isotrópica**: en promedio, igual número de moléculas se mueve en cada dirección. Si hubiera una dirección preferente, la presión sobre distintas paredes sería distinta, algo incompatible con el equilibrio mecánico.

## Dominio de validez cuantitativo

El modelo de gas ideal cinético es preciso cuando la distancia media entre moléculas es mucho mayor que el tamaño molecular. Para la mayoría de los gases a presión inferior a 1 MPa y temperatura superior a 200 K, el modelo reproduce los datos experimentales con errores inferiores al 1 %.

La condición cuantitativa más útil es la del parámetro de densidad reducida: la aproximación es razonable cuando el volumen molar del gas real es mayor de 10 × el volumen propio molar de las moléculas. Para el nitrógeno a 300 K, eso equivale a presiones inferiores a aproximadamente 3 MPa. Por encima de este umbral, las correcciones de Van der Waals se vuelven apreciables.

En términos de temperatura, el modelo falla para gases a [[T]] inferior a la temperatura crítica del gas (por ejemplo, 126 K para nitrógeno, 33 K para hidrógeno). Por debajo de la temperatura crítica, el gas se licúa y el modelo cinético de partículas puntuales sin interacciones ya no tiene sentido.

Condición numérica de validez: el modelo es aplicable cuando la presión [[P]] es inferior a 1 × 10⁶ Pa para gases diatómicos comunes a temperaturas superiores a 250 K.

## Señales de fallo del modelo

- La densidad del gas calculada con [[P]], [[T]] y [[N]] difiere significativamente de la medida experimental: el volumen propio de las moléculas no es despreciable.

- La presión calculada es mayor que la medida: las fuerzas atractivas entre moléculas reducen la presión efectiva respecto al valor ideal.

- Al enfriar el gas por debajo de la temperatura de rocío, aparece condensación: el modelo cinético ideal no predice transiciones de fase porque ignora las interacciones intermoleculares.

- La relación entre [[P]], [[V]] y [[T]] ya no sigue la ley del gas ideal, especialmente cerca del punto crítico, donde las fluctuaciones de densidad son enormes y el modelo cinético simple es inadecuado.

## Modelo extendido o alternativo

El primer nivel de corrección al modelo ideal es el **modelo de Van der Waals**, que introduce dos parámetros empíricos: una corrección aditiva al volumen (para el tamaño molecular propio) y una corrección a la presión (para las fuerzas atractivas). Este modelo reproduce los datos reales con mucha mayor precisión cerca del punto de condensación y permite predecir la existencia de un punto crítico.

Para gases poliatómicos a temperatura alta (superior a varios cientos de kelvin), debe considerarse la activación de grados de libertad rotacionales y vibracionales. En ese régimen, la energía interna ya no es solo translacional y la fórmula [[E_k_mol]] proporcional a [[T]] subestima la energía total del gas.

Cuando conviene pasar al modelo de Van der Waals: cuando las condiciones de operación implican presiones superiores a 1 MPa, temperaturas cercanas a la temperatura crítica del gas, o cuando el error del modelo ideal supera el 5 % en la predicción de volumen o presión.

## Comparación operativa

| Criterio | Modelo cinético ideal | Modelo de Van der Waals |
|---|---|---|
| Número de parámetros | 0 (universal) | 2 (específicos por gas) |
| Rango de presión válido | Inferior a 1 MPa (aprox.) | Hasta el punto crítico y más |
| Predicción de transiciones de fase | No | Sí (aproximada) |
| Complejidad de cálculo | Muy baja | Baja a moderada |
| Adecuado para enseñanza | Sí, sin restricciones | Sí, nivel universitario |
| Incluye interacciones moleculares | No | Sí (de forma promediada) |
