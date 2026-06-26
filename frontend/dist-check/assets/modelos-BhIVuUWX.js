const e=`# Modelos físicos para la ecuación de onda electromagnética

## Modelo ideal

El modelo de referencia en este leaf es la **onda plana monocromática en el vacío**. En él, los campos [[E]] y [[B]] dependen de una sola coordenada espacial (la dirección de propagación x) y del tiempo, y son uniformes en cualquier plano perpendicular a esa dirección. La amplitud es constante: no hay atenuación ni variación de forma con la distancia.

La simplificación central es doble. Por un lado se ignora la geometría real de la fuente (que emite frentes de onda esféricos, no planos). Por otro lado se ignora la dispersión: se asume que la velocidad de propagación [[c]] no depende de [[omega]]. Las magnitudes que este modelo conserva son [[E]], [[B]], [[c]], [[omega]] y [[k]]; las que ignora son la variación de amplitud con la distancia a la fuente y la dependencia de [[c]] con la frecuencia.

## Hipótesis

- **Vacío sin cargas libres ni corrientes:** la densidad de carga ρ es nula y la densidad de corriente **J** es nula. Sin esta hipótesis, el término de corriente de conducción modifica la ecuación de onda e introduce atenuación.
- **Frente de onda plano:** la fase es constante en planos perpendiculares a la dirección de propagación. Si se viola (fuente cercana o geometría compleja), el frente de onda es curvo y el modelo ya no es aplicable sin correcciones.
- **Monocromaticidad:** se considera una sola [[omega]] bien definida. Si el pulso es de banda ancha, la superposición de frecuencias puede deformar la solución en medios dispersivos.
- **Amplitud constante:** la energía de la onda no se disipa ni se redistribuye espacialmente. Válido en el vacío; falla en medios con pérdidas o en geometrías divergentes.

## Dominio de validez cuantitativo

El modelo de onda plana es válido cuando la distancia a la fuente r satisface **r > 10·[[lambda]]** (zona de campo lejano o zona de Fraunhofer). Para la luz visible con [[lambda]] ≈ 500 nm, eso significa distancias superiores a unos 5 μm; para ondas de radio FM con [[lambda]] ≈ 3 m, la zona de campo lejano comienza más allá de los 30 m de la antena.

En el vacío, la relación de dispersión es estrictamente lineal: [[omega]] = [[c]]·[[k]] para todo [[omega]] en el rango de 10³ Hz (radio de onda larga) hasta 10²⁰ Hz (rayos gamma). La ausencia de dispersión hace que [[c]] sea la misma constante universal en todo ese rango de 17 órdenes de magnitud.

## Señales de fallo del modelo

El modelo de onda plana deja de funcionar en varios escenarios físicamente reconocibles.

Primero, si la intensidad calculada no decae con la distancia y el experimento muestra una caída de 1/r², la fuente es localizada y el frente de onda es esférico, no plano. Segundo, si dos frecuencias enviadas simultáneamente llegan en tiempos distintos al detector (dispersión cromática), el modelo sin dispersión es insuficiente. Tercero, si la onda penetra apreciablemente en un metal o semiconductor en lugar de reflejarse casi completamente, hay absorción y el número de onda [[k]] tiene parte imaginaria significativa.

## Modelo extendido o alternativo

El modelo extendido incorpora dos generalizaciones: la **onda esférica** (cuando r no es ≫ λ) y la **onda en medio dispersivo** (cuando n depende de [[omega]]). En la onda esférica, la amplitud de [[E]] decrece como el inverso de la distancia a la fuente, conservando la potencia total a través de superficies esféricas concéntricas. En el medio dispersivo, la velocidad de fase [[omega]]/[[k]] y la velocidad de grupo d[[omega]]/d[[k]] son distintas y ambas dependen de [[omega]].

Cuando conviene pasar al modelo extendido: en la zona de campo cercano (r < 10·[[lambda]]) el modelo de onda plana sobreestima la energía en direcciones laterales y hay que pasar al modelo de onda esférica. Cuando el parámetro de dispersión del medio supera 1 ps/(nm·km) para el ancho de banda del pulso, hay que pasar al modelo dispersivo porque la diferencia de tiempo de llegada entre frecuencias supera la duración del pulso. Fuera de estos regímenes, el modelo de onda plana en vacío es exacto.

## Comparación operativa

| Criterio | Onda plana en vacío | Onda esférica / dispersiva |
|---|---|---|
| **Amplitud** | Constante | Cae como 1/r o se atenúa exponencialmente |
| **Velocidad** | Siempre [[c]] | [[c]]/n, con n dependiente de [[omega]] |
| **Frente de onda** | Plano | Esférico o deformado |
| **Dispersión** | Nula | Presente; velocidad de grupo ≠ fase |
| **Aplicabilidad** | Campo lejano, vacío | Campo cercano, medios materiales |
| **Complejidad** | Mínima | Mayor; requiere n(ω) del medio |

El modelo ideal es suficiente para calcular [[c]], la relación de dispersión y las propiedades de transversalidad en el vacío. El modelo extendido es necesario en óptica de fibras, diseño de antenas en zona reactiva y análisis de pulsos ultracortos.
`;export{e as default};
