# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: bosones
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Bosones
## Modelo ideal
El modelo ideal trata los bosones como partículas indistinguibles, no interactuantes y en equilibrio térmico. La pregunta operativa es cómo responde la [[ocupacion_media]] de un estado cuando cambian la [[energia]], el [[potencial_quimico]] y la [[temperatura]]. El estado se considera bien definido, el reservorio fija la [[temperatura]] y el [[potencial_quimico]], y la ocupación múltiple está permitida. En este marco, una [[energia]] más alta reduce la población del estado, mientras que un [[potencial_quimico]] más cercano al nivel accesible favorece la acumulación. La [[fugacidad]] resume ese empuje químico en forma adimensional.

## Hipótesis
- Bosones indistinguibles: si las partículas fueran distinguibles o fermiones, la [[ocupacion_media]] no seguiría la misma lectura.
- Equilibrio térmico: sin equilibrio, una sola [[temperatura]] no describe la distribución.
- Gas ideal: interacciones fuertes desplazan niveles, cambian la [[energia]] efectiva y alteran la condensación.
- Ensamble gran canónico: el [[potencial_quimico]] representa intercambio de partículas con un sistema grande.
- Régimen no relativista para gases materiales: la [[masa_particula]] es fija y se usa [[longitud_onda_termica]] con [[constante_planck]].
- Volumen grande: si hay pocos niveles, la comparación entre [[densidad_particulas]] y [[densidad_critica]] pierde suavidad.

## Dominio de validez cuantitativo
El modelo es razonable si [[temperatura]] > 0 K, si todas las energías se expresan en la misma unidad, y si el [[potencial_quimico]] no supera la [[energia]] mínima accesible del gas ideal. Para baja ocupación, cuando [[energia]] - [[potencial_quimico]] > 5 [[constante_boltzmann]][[temperatura]], la [[ocupacion_media]] es pequeña y el límite clásico suele ser aceptable. Para degeneración cuántica, la condición orientativa es [[densidad_particulas]] [[longitud_onda_termica]]^3 del orden de 1. La condensación ideal se espera cuando [[densidad_particulas]] se acerca a [[densidad_critica]]. En gases diluidos, las correcciones de interacción son pequeñas si la energía de interacción media es mucho menor que [[constante_boltzmann]][[temperatura]].

## Señales de fallo del modelo
El modelo falla si la curva de [[ocupacion_media]] frente a [[energia]] no decrece como se espera, si la [[fugacidad]] queda fuera del dominio permitido, o si una nube experimental muestra desplazamientos de nivel por interacción. También falla cuando [[temperatura]] no está bien definida, cuando el confinamiento crea niveles separados comparables con [[constante_boltzmann]][[temperatura]], o cuando [[densidad_particulas]] excede el régimen diluido. Una señal clara es obtener [[ocupacion_media]] negativa o interpretar [[densidad_critica]] como una energía.

## Modelo extendido o alternativo
Si las interacciones importan, conviene pasar a modelos de gas débilmente interactuante, aproximación de campo medio o Gross-Pitaevskii para condensados. Si la trampa externa domina, se usa una densidad de estados adaptada al potencial de confinamiento. Si las partículas son fotones o fonones, el [[potencial_quimico]] puede tener condiciones especiales y no debe trasladarse sin revisar el sistema. Si hay pocos niveles, se abandona la aproximación continua.

## Comparación operativa
| Situación | Modelo útil | Magnitud de control | Riesgo principal |
|---|---|---|---|
| Estado aislado en equilibrio | Bose-Einstein ideal | [[ocupacion_media]] | Confundir promedio con probabilidad |
| Gas diluido ultrafrío | Gas ideal no relativista | [[longitud_onda_termica]] | Ignorar interacciones |
| Umbral de condensación | Comparación de densidades | [[densidad_critica]] | Usar volumen o unidades incorrectas |
| Trampa pequeña | Modelo discreto | [[energia]] | Aplicar curva continua sin niveles |

