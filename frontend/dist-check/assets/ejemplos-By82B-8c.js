const e=`# Ejemplo tipo examen

## Enunciado

Un bloque de cobre de 2 kg, inicialmente a 600 K, se sumerge en un gran depósito de agua a 300 K hasta alcanzar el equilibrio térmico. La capacidad calorífica específica del cobre es 385 J/(kg·K). Calcular la variación de entropía del bloque de cobre, la variación de entropía del depósito de agua y la variación total de entropía del universo. Determinar si el proceso es reversible, irreversible o imposible.

## Datos

- Masa del cobre: [[m]] = 2 kg
- Temperatura inicial del cobre: [[T_i]] = 600 K
- Temperatura final del cobre (equilibrio con depósito): [[T_f]] = 300 K
- Capacidad calorífica específica del cobre: [[c_p]] = 385 J/(kg·K)
- Temperatura del depósito (constante, gran reservorio): [[T]] = 300 K

## Definición del sistema

El sistema principal es el bloque de cobre que se enfría. El depósito de agua actúa como reservorio térmico a temperatura constante (su capacidad térmica es tan grande que su temperatura no cambia apreciablemente). El universo termodinámico es la suma de ambos.

## Modelo físico

Se aplica la fórmula de variación de entropía por calentamiento/enfriamiento con [[c_p]] constante para el cobre, y la fórmula isotérmica para el depósito. Las magnitudes nucleares son [[DeltaS]], [[m]], [[c_p]], [[T_i]], [[T_f]] y [[T]]. La hipótesis central es que [[c_p]] del cobre es constante entre 300 K y 600 K (desviación real < 3%).

## Justificación del modelo

El modelo es válido porque:
- La capacidad calorífica del cobre varía menos del 3% entre 300 K y 600 K, cumpliendo la hipótesis de [[c_p]] constante.
- El depósito de agua es suficientemente grande para que su temperatura permanezca constante (reservorio ideal).

El modelo dejaría de valer si:
- La masa del depósito fuese comparable a la del cobre (la temperatura del agua cambiaría apreciablemente).
- El rango de temperaturas fuese mucho mayor (por encima de 1000 K, [[c_p]] del cobre aumenta significativamente).

## Resolución simbólica

Para el bloque de cobre (enfriamiento de [[T_i]] a [[T_f]]):

{{f:variacion_entropia_calentamiento}}

Para el depósito de agua (proceso isotérmico, absorbe el calor cedido por el cobre):

El calor absorbido por el depósito es igual al cedido por el cobre: Q_depósito = [[m]]·[[c_p]]·([[T_i]] − [[T_f]])

La variación de entropía del depósito: [[DeltaS]]_depósito = Q_depósito / [[T]]_depósito

La variación total del universo: [[DeltaS]]_universo = [[DeltaS]]_cobre + [[DeltaS]]_depósito

## Sustitución numérica

{{f:variacion_entropia_calentamiento}}

Para el cobre, sustituir [[m]] = 2 kg, [[c_p]] = 385 J/(kg·K), [[T_f]] = 300 K, [[T_i]] = 600 K. El cociente de temperaturas es 300/600 = 0.5 y ln(0.5) ≈ −0.693. Por tanto, multiplicar 2 × 385 × (−0.693) da aproximadamente −533.6 J/K. Así [[DeltaS]]_cobre ≈ −533.6 J/K.

{{f:variacion_entropia_isotermica}}

El calor cedido por el cobre al depósito: multiplicar 2 kg × 385 J/(kg·K) × (600 − 300) K da 231000 J. Para el depósito, dividir 231000 J entre 300 K da 770 J/K. Así [[DeltaS]]_depósito ≈ +770 J/K.

La variación total del universo: sumar −533.6 J/K y +770 J/K da aproximadamente +236.4 J/K. Por tanto [[DeltaS]]_universo ≈ +236.4 J/K.

## Validación dimensional

- [[DeltaS]]_cobre: \`[M] · [L² T⁻² Θ⁻¹] · [adimensional] = [M L² T⁻² Θ⁻¹]\` → J/K ✓
- [[DeltaS]]_depósito: \`[M L² T⁻²] / [Θ] = [M L² T⁻² Θ⁻¹]\` → J/K ✓
- Desglose completo: \`[kg] · [J/(kg·K)] · [1] = [J/K]\` ✓

## Interpretación física

El bloque de cobre pierde entropía ([[DeltaS]]_cobre < 0) porque se enfría: su energía térmica se dispersa menos al bajar de 600 K a 300 K. Sin embargo, el depósito de agua gana más entropía ([[DeltaS]]_depósito > 0) de la que pierde el cobre. Esto se debe a la asimetría fundamental de la entropía: la misma cantidad de calor produce mayor entropía al ser absorbida a baja temperatura (300 K) que al ser cedida desde alta temperatura (600 K).

El [[DeltaS]]_universo ≈ +236 J/K es estrictamente positivo, lo que confirma que el proceso es **irreversible**. El contacto térmico entre dos cuerpos a diferente temperatura es el ejemplo paradigmático de proceso irreversible: genera entropía porque la transferencia espontánea de calor de lo caliente a lo frío destruye trabajo potencial.

La causa física del aumento total no es la suma aritmética en sí, sino el salto térmico: el calor sale de un cuerpo caliente, donde cada julio representa menos entropía, y entra en un depósito frío, donde ese mismo julio representa más entropía. Por eso la irreversibilidad aparece aunque la energía se conserve exactamente.

Físicamente, esto significa que el sistema compuesto aumenta su dispersión energética: el bloque disminuye su entropía, pero el depósito aumenta más porque recibe el calor a menor temperatura. El signo positivo final indica una dirección espontánea y coherente con la segunda ley.

Si el depósito estuviese a la misma temperatura que el cobre (600 K), no habría transferencia de calor y [[DeltaS]]_universo = 0. Si la diferencia de temperaturas fuese menor (por ejemplo, depósito a 500 K), la irreversibilidad sería menor y [[DeltaS]]_universo sería menor. La magnitud de [[DeltaS]]_universo cuantifica exactamente cuánto trabajo potencial se ha degradado irrecuperablemente en el proceso.

# Ejemplo de aplicación real

## Contexto

En una planta de generación eléctrica de ciclo combinado, el vapor de agua a 823 K (550 °C) se expande en la turbina de alta presión y sale a 473 K (200 °C). El flujo másico es de 50 kg/s y la capacidad calorífica media del vapor en ese rango es aproximadamente 2100 J/(kg·K). El ingeniero necesita evaluar la variación de entropía del vapor para determinar la eficiencia de la turbina respecto al caso isentrópico ideal.

## Estimación física

Aplicando la fórmula de calentamiento (que sirve igualmente para enfriamiento cuando [[T_f]] < [[T_i]]):

{{f:variacion_entropia_calentamiento}}

Con [[m]] = 50 kg (por segundo de operación), [[c_p]] = 2100 J/(kg·K), [[T_f]] = 473 K y [[T_i]] = 823 K. El cociente es 473/823 ≈ 0.575 y ln(0.575) ≈ −0.553. Multiplicar 50 × 2100 × (−0.553) da aproximadamente −58065 J/K por segundo de operación. Por tanto [[DeltaS]]_vapor ≈ −58.1 kJ/(K·s).

Este valor negativo indica que el vapor pierde entropía al enfriarse en la turbina. En una turbina ideal isentrópica, toda esta pérdida de entropía del vapor se convertiría en trabajo. En la turbina real, parte de esa capacidad de trabajo se pierde como irreversibilidad interna (fricción, turbulencia), y [[DeltaS]]_total del vapor sería menos negativo (o el universo ganaría entropía extra).

Como contraste de gas ideal, si una etapa se modela por estados de volumen, se usa también [[R]] y el volumen final [[V_f]] junto con [[V_i]]. En una expansión, el aumento de [[V_f]] aporta una contribución positiva a [[DeltaS]] aunque la temperatura no cambie:

{{f:variacion_entropia_gas_ideal}}

## Interpretación

La magnitud de [[DeltaS]]_vapor permite calcular la **eficiencia isentrópica** de la turbina: si la salida real tiene mayor entropía que la salida isentrópica ideal, la diferencia cuantifica las pérdidas internas. Un [[DeltaS]] real del vapor menos negativo del esperado indica que la turbina está generando irreversibilidad interna. La eficiencia isentrópica típica de turbinas de vapor modernas es 85–92%; el análisis entrópico es la herramienta fundamental para evaluar y mejorar este rendimiento.

La lectura causal es que [[DeltaS]] no es solo un número de salida: identifica dónde se degrada trabajo útil. Cuando la fricción y la turbulencia aumentan, el estado final se desplaza hacia mayor entropía, y esa diferencia obliga a consumir más combustible para entregar la misma potencia. Por eso el diagnóstico entrópico conecta medición, causa física y acción de mantenimiento.

La variación de entropía por segundo (kJ/(K·s) = kW/K) es una magnitud operativa clave en ingeniería térmica que permite comparar directamente distintos diseños de turbinas y optimizar las condiciones de operación para minimizar la generación de irreversibilidad.
`;export{e as default};
