## Modelo ideal

El modelo principal de este leaf es el de la **propagación acústica lineal en un medio homogéneo**, descrito por la fórmula de Newton-Laplace. En este modelo, [[v_son]] es una constante del medio: no depende de la amplitud de la onda, ni de su frecuencia, ni de la dirección de propagación. El medio es elástico, lineal e isótropo.

Para gases, el modelo se especializa como **gas ideal con proceso adiabatico**: las compresiones y rarefacciones acusticas son suficientemente rapidas para ser adiabaticas, y el gas obedece la ecuacion de estado del gas ideal. Bajo estas condiciones, [[v_son]] depende solo de [[T_abs]], [[gamma_gas]] y [[M_mol]], y es independiente de la presion de equilibrio.

## Hipótesis

- **Medio homogéneo:** [[rho_med]] y [[B_mod]] son uniformes en el volumen de interés. Si el medio tiene gradientes de temperatura o composición (por ejemplo, la atmósfera a gran altitud), [[v_son]] varía con la posición y la onda se curva (refracción acústica). El modelo de [[v_son]] constante es una aproximación local válida cuando la longitud de onda es mucho menor que la escala característica de variación del medio.

- **Amplitudes pequeñas (régimen lineal):** La perturbación de presión acústica es mucho menor que la presión de equilibrio. Esta hipótesis garantiza que las propiedades del medio (B y rho) pueden tratarse como constantes durante el paso de la onda. Cuantitativamente, la amplitud de presión debe ser menor del 1 % de la presión de equilibrio para que los efectos no lineales sean despreciables.

- **Proceso adiabático para gases:** Las oscilaciones acústicas son lo suficientemente rápidas para que no haya intercambio de calor significativo entre regiones adyacentes. Para frecuencias audibles en aire, esta hipótesis es excelente: el tiempo de difusión térmica entre crestas y valles de la onda es muchos órdenes de magnitud mayor que el periodo de la oscilación.

- **No dispersión:** [[v_son]] no depende de la frecuencia. En aire a frecuencias audibles, esto es correcto con un error menor del 0.01 %. A frecuencias muy altas (megahercios) o en medios con relajación molecular (dióxido de carbono húmedo), la dispersión puede ser significativa.

- **Gas ideal:** Para gases, se asume que las interacciones moleculares son despreciables. En condiciones ordinarias (1 atm, 200-400 K), el aire se comporta esencialmente como gas ideal con errores menores del 0.1 %.

## Dominio de validez cuantitativo

El modelo de [[v_son]] constante por la fórmula de Newton-Laplace es válido cuando:

- La amplitud de presión acústica es menor de 2 kPa (menos del 2 % de la presión atmosférica a 1 atm). Por encima de este valor, la no linealidad del gas comienza a generar armónicos acústicos espurios.
- La frecuencia está entre 0.1 Hz y 1 MHz para el aire. A frecuencias menores, la hipótesis de proceso adiabático comienza a fallar (las ondas de baja frecuencia tienen periodos tan largos que el calor puede fluir parcialmente). A frecuencias mayores, la relajación vibracional molecular en el aire comienza a absorber energía de forma selectiva.
- La temperatura está entre 200 K y 2000 K para el aire. Por debajo, los gases reales se desvían del comportamiento ideal. Por encima, la disociación molecular modifica [[gamma_gas]].

Condición de linealidad concreta: la perturbación de presión p_ac debe satisfacer p_ac << P_0 (presión atmosférica), lo que numéricamente implica p_ac < 2 kPa para garantizar no linealidad menor del 2 %.

## Señales de fallo del modelo

- **Boom sónico:** Si la fuente se mueve a velocidades comparables o mayores que [[v_son]], se producen ondas de choque no lineales. El modelo lineal predice una divergencia (presión infinita al alcanzar Mach 1) que en la realidad se manifiesta como un fuerte bang. Para fuentes supersónicas, se requiere la dinámica de gases no lineal.
- **Absorción acústica notable:** Si la amplitud del sonido decrece significativamente más rápido de lo que predice la ley del cuadrado inverso (para fuentes puntuales), hay absorción que el modelo no captura. En el aire, la absorción depende de la frecuencia y la humedad y es significativa por encima de 10 kHz a distancias de decenas de metros.
- **Variación de timbre con la distancia:** Si el timbre de un instrumento cambia perceptiblemente al alejarse (los agudos se atenúan antes que los graves), la dispersión o la absorción selectiva en frecuencia están presentes, y el modelo de [[v_son]] uniforme no es suficiente.
- **Diferencias de temperatura en el medio:** Si hay gradientes de temperatura significativos (stratificación térmica, inversión térmica), [[v_son]] varía con la posición y la trayectoria del sonido se curva. En este caso, se requiere el modelo de propagación de rayos acústicos.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo: si aparece cualquiera de las señales anteriores, el modelo de [[v_son]] constante debe sustituirse por una descripcion que represente el mecanismo dominante.

Conviene cambiar de modelo cuando el medio deja de ser homogeneo, cuando la amplitud ya no es pequena, cuando aparece anisotropia del material o cuando la frecuencia entra en un rango con dispersion o absorcion selectiva. En esos casos, el valor unico de [[v_son]] deja de ser suficiente y se debe usar un modelo de rayos acusticos, ondas de choque, gas real o elasticidad anisotropa.

El modelo de **propagación de rayos acústicos** extiende la fórmula de Newton-Laplace a medios inhomogéneos: [[v_son]] varía suavemente con la posición, y la trayectoria acústica sigue las líneas del gradiente de [[v_son]], curvándose hacia las regiones de menor [[v_son]] (análogo a la refracción óptica). Este modelo se usa en oceanografía acústica, meteorología acústica y sismología.

El modelo de **ondas de choque** (no lineal) se requiere cuando la amplitud de la perturbación es comparable a la presión de equilibrio, o cuando una fuente se mueve a velocidades supersónicas. En este modelo, [[v_son]] no es constante: la cresta de la onda viaja más rápido que el valor de referencia y eventualmente alcanza el frente anterior, formando una discontinuidad de presión (onda de choque).

Para medios sólidos anisótropos (cristales, materiales compuestos laminados), [[v_son]] depende de la dirección de propagación y hay que distinguir entre velocidades de fase y de grupo. Este modelo es relevante en ensayos no destructivos industriales y en geofísica.

## Comparación operativa

| Criterio | Newton-Laplace (lineal) | Rayos acústicos (inhomogéneo) | Ondas de choque (no lineal) |
|---|---|---|---|
| Medio | Homogéneo, isótropo | Inhomogéneo (gradiente de T o composición) | Cualquier medio, amplitudes grandes |
| Amplitudes | Pequeñas (p_ac << P_0) | Pequeñas | Grandes (p_ac comparable a P_0) |
| Dependencia de v con posición | No | Sí | Sí (v varía con la amplitud local) |
| Trayectoria de la onda | Recta | Curva (refracción) | Discontinua (frente de choque) |
| Aplicaciones | Música, voz, ultrasonidos médicos | Sonar, meteorología acústica, sismología | Sonic boom, explosiones, litotricia |
| Complejidad matemática | Baja | Media | Alta |
