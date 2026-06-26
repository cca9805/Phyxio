## Modelo ideal

El modelo ideal para la atenuación en sólidos asume una onda plana que se propaga en un medio homogéneo, isótropo e infinito. En este modelo simplificado, la atenuación sigue una ley exponencial pura con un coeficiente [[alpha]] constante que no depende ni de la distancia ni de la amplitud. El medio se considera pasivo, sin ganancia ni amplificación, y la dispersión se ignora completamente asumiendo que todas las frecuencias viajan a la misma velocidad.

Esta idealización conserva la energía total del sistema (la energía perdida por la onda se convierte en calor) pero ignora la complejidad microestructural real. Las magnitudes que se mantienen son la [[frecuencia]] y la velocidad de propagación, mientras que se desprecian los efectos de dispersión geométrica, scattering por granos, y la dependencia de [[alpha]] con la [[frecuencia]].

## Hipótesis

- **Medio homogéneo**: Las propiedades del material son uniformes en toda la región de propagación. Violar esta hipótesis produce variaciones locales de [[alpha]] y velocidades, invalidando la ley exponencial simple.

- **Onda plana**: El frente de onda es plano y el haz no diverge. Si el haz diverge, la amplitud disminuye adicionalmente por dispersión geométrica, confundiendo la medición de [[alpha]].

- **Isotropía**: Las propiedades son iguales en todas las direcciones. En materiales anisótropos como composites, [[alpha]] depende de la dirección de propagación.

- **Atenuación lineal**: El coeficiente [[alpha]] es constante con la amplitud. Si [[alpha]] depende de la amplitud (régimen no lineal), la exponencial deja de ser válida.

- **Sin dispersión**: Todas las frecuencias viajan a la misma velocidad. Con dispersión, el pulso se distorsiona y la amplitud medida depende del ancho de banda del transductor.

## Dominio de validez cuantitativo

El modelo exponencial es válido cuando la distancia de propagación es mayor que 10 veces la longitud de onda pero menor que 3 veces la longitud de atenuación [[longitud_de_atenuacion]]. Para frecuencias típicas de ensayo industrial (0.5-20 MHz), esto corresponde a distancias entre 1 mm y 100 mm dependiendo del material.

La aproximación de onda plana es razonable cuando el diámetro del haz es mayor que 5 veces la distancia de propagación. Para haces focales, esto limita la validez a la región cercana al foco donde el frente de onda es aproximadamente plano.

El modelo mantiene error inferior al 5% cuando la atenuación total es menor que 40 dB. Para pérdidas mayores, los efectos de ruido y no linealidades del equipo introducen errores sistemáticos no considerados en el modelo ideal.

## Señales de fallo del modelo

- **Desviación de la linealidad en escala logarítmica**: Si el gráfico de ln([[amplitud_a_distancia_x]]/[[amplitud_inicial]]) vs [[distancia_de_propagacion]] no es una línea recta, el modelo exponencial falla. Esto indica variación de [[alpha]] con la distancia o efectos de dispersión geométrica no compensados.

- **Dependencia de la amplitud con la [[frecuencia]] de medición**: Si cambiar la [[frecuencia]] del transductor modifica sistemáticamente el valor de [[alpha]] obtenido, el modelo de [[alpha]] constante es inadecuado.

- **Recuperación de amplitud en reflexiones múltiples**: Si ecos sucesivos no siguen la relación de atenuación esperada, puede haber ganancia por reflexión constructiva o efectos de interferencia no considerados.

- **Valores negativos de [[alpha]]**: Obtener coeficientes de atenuación negativos indica violación del modelo, usualmente por calibración incorrecta o no compensación de la dispersión geométrica.

## Modelo extendido o alternativo

El modelo extendido incorpora dispersión geométrica, dependencia de [[alpha]] con la [[frecuencia]] y anisotropía material. En este modelo, la atenuación total es la suma de la atenuación intrínseca del material y la dispersión geométrica del haz. El coeficiente [[alpha]] sigue una ley de potencia con la [[frecuencia]], y las velocidades de fase y grupo pueden diferir significativamente.

La diferencia principal con el modelo ideal es la inclusión de términos adicionales que dependen de la geometría del haz y la microestructura del material. Esto permite describir materiales reales como composites, piezas con gradientes de propiedades, y ensayos con haces divergentes.

Cuando conviene pasar al modelo extendido: para distancias mayores que 2 veces el diámetro del haz, frecuencias superiores a 5 MHz donde la dispersión es significativa, o materiales con estructura anisótropa como composites de fibra. La transición al modelo extendido es necesaria cuando el error del modelo ideal supera el 10% o cuando se requiere precisión mejor que 2 dB en la predicción de pérdidas.

## Comparación operativa

| Característica | Modelo ideal | Modelo extendido |
|---|---|---|
| **Precisión** | ±5% para pérdidas < 40 dB | ±2% hasta 60 dB de pérdida |
| **Complejidad** | Ecuación exponencial simple | Múltiples términos, dependencia con f |
| **Parámetros requeridos** | [[alpha]], [[distancia_de_propagacion]], [[amplitud_inicial]] | [[alpha]]([[frecuencia]]), geometría haz, anisotropía |
| **Rango de aplicación** | Metales homogéneos, haz colimado | Materiales complejos, haz divergente |
| **Ventajas** | Simple, rápido, intuitivo | Realista, predice dispersion |
| **Limitaciones** | No válido para alta dispersión | Requiere caracterización extensiva |
| **Señales de fallo** | Curva logarítmica no lineal | Errores en caracterización de material |