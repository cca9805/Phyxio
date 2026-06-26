# Aplicaciones

## 1. Vibraciones moleculares en sólidos
Variable dominante: [[frecuencia_angular]]
Límite de validez: aproximación armónica válida si la amplitud térmica mantiene el potencial casi cuadrático

En un sólido, muchos átomos vibran alrededor de posiciones de equilibrio. Cada modo normal puede aproximarse como oscilador armónico con una [[frecuencia_angular]] propia. El modelo permite predecir qué modos contribuyen más a [[energia_media]] a una [[temperatura]] dada. Los modos de baja [[frecuencia_angular]] tienen menor [[energia_cuantica]] y se activan antes; los de alta [[frecuencia_angular]] permanecen más cuantizados. Se mide o estima la contribución térmica de cada modo y se constriñe qué parte del calor específico puede explicarse por vibraciones armónicas. Un criterio práctico consiste en calcular [[beta]] para cada modo y comparar el producto de [[beta]] con [[energia_cuantica]]: si ese producto es mucho menor que uno, el modo está activado y su [[probabilidad_ocupacion]] se reparte entre muchos niveles; si es mucho mayor, permanece congelado en su estado fundamental y su contribución a [[energia_media]] queda cercana al valor de punto cero. Esta lectura permite identificar qué modos contribuyen realmente al calor específico antes de hacer un cálculo completo.

## 2. Calor específico a baja [[temperatura]]
Variable dominante: [[temperatura]]
Límite de validez: régimen frío si la escala térmica es menor que 0,1 veces [[energia_cuantica]] para muchos modos

A bajas temperaturas, no todos los modos vibracionales aceptan energía con facilidad. El modelo ayuda a explicar por qué el calor específico puede caer: [[probabilidad_ocupacion]] de niveles excitados se vuelve muy pequeña cuando [[temperatura]] no alcanza la separación marcada por [[energia_cuantica]]. Se predice una [[energia_media]] cercana al valor mínimo cuántico para modos rígidos. Esta aplicación no mide una partícula aislada, sino la respuesta agregada de muchos osciladores. El criterio útil es comparar [[temperatura]] con cada [[frecuencia_angular]] para saber qué modos están activos. A alta [[temperatura]], la ley de Dulong-Petit emerge cuando la escala térmica domina sobre [[energia_cuantica]] en todos los modos; el modelo predice entonces una [[energia_media]] proporcional a [[temperatura]] para cada grado de libertad, recuperando el resultado clásico de la equipartición. El modelo del oscilador armónico estadístico fue precisamente el que Einstein usó para explicar la caída del calor específico a baja [[temperatura]], señalando que la [[funcion_particion]] no puede ignorarse cuando la escala térmica ya no domina.

## 3. Diseño de sensores resonantes
Variable dominante: [[energia_media]]
Límite de validez: acoplamiento térmico débil y factor de calidad alto, sin excitación externa dominante

En microsensores y resonadores, el ruido térmico de un modo mecánico se relaciona con [[energia_media]]. Si la [[frecuencia_angular]] del resonador aumenta, la estructura cuántica puede alterar la lectura térmica a temperaturas muy bajas. El modelo permite estimar la energía de fondo esperada y separar señal real de fluctuación térmica. Se predice el nivel de ruido, se mide la ocupación efectiva y se restringe el rango en el que la lectura puede considerarse clásica. [[funcion_particion]] no se mide directamente, pero organiza la interpretación de [[probabilidad_ocupacion]]. En diseño de sensores MEMS, el piso de ruido cuántico aparece cuando la escala de [[energia_cuantica]] supera la agitación térmica: en ese régimen, [[energia_media]] tiende a la energía de punto cero y la lectura del sensor ya no puede reducirse más bajando [[temperatura]], porque la [[funcion_particion]] ya no varía de forma significativa.

## 4. Modos de campo y radiación térmica
Variable dominante: [[probabilidad_ocupacion]]
Límite de validez: modo individual bien definido y equilibrio térmico estacionario

Un modo de campo electromagnético en una cavidad puede tratarse matemáticamente como oscilador armónico. Su [[frecuencia_angular]] fija [[energia_cuantica]], mientras [[temperatura]] controla la ocupación. El modelo predice cuántos cuantos pueblan el modo y cómo cambia [[energia_media]]. Esta lectura es central en radiación térmica, microondas y cavidades. No basta con saber que el entorno está caliente: un modo de gran [[frecuencia_angular]] puede tener ocupación baja incluso en un baño térmico apreciable. La [[probabilidad_ocupacion]] de un modo de radiación es exactamente la distribución de Planck cuando se suma sobre todos los modos; así, la [[funcion_particion]] de un oscilador individual conecta directamente con el espectro de cuerpo negro, y la [[energia_media]] promediada sobre frecuencias reproduce la forma espectral observada.

## 5. Aproximación local de enlaces químicos
Variable dominante: [[energia_cuantica]]
Límite de validez: desplazamientos pequeños alrededor del equilibrio molecular

Un enlace químico cerca de su longitud de equilibrio puede aproximarse por un potencial armónico. La [[frecuencia_angular]] efectiva resume rigidez del enlace, y [[energia_cuantica]] indica la separación entre niveles vibracionales. Con el modelo se predice si una [[temperatura]] dada activa vibraciones apreciables o si el enlace permanece cerca de su estado fundamental. Esto constriñe interpretaciones espectroscópicas, almacenamiento de energía vibracional y estabilidad molecular. La aplicación falla cuando el enlace se estira mucho, porque el potencial real deja de ser cuadrático. En espectroscopía IR, las bandas de absorción corresponden a [[frecuencia_angular]] específicas de cada enlace; el modelo permite comparar la [[energia_cuantica]] de esas bandas con la escala térmica para decidir si el enlace está vibronalmente excitado a [[temperatura]] ambiente o si solo ocupa su nivel fundamental.