const e=`# Impedancia mecánica en sólidos

## Contexto conceptual

La impedancia mecánica es la magnitud que gobierna la transmisión de energía vibratoria entre sólidos. Cuando una onda mecánica viaja por una barra y llega a una unión con otra pieza, la diferencia de impedancias entre ambas determina cuánta energía pasa y cuánta regresa. Este concepto es análogo a la impedancia eléctrica en circuitos, donde una diferencia de impedancias provoca reflexión de señales en líneas de transmisión.

Dentro del bloque de ondas en sólidos, la impedancia mecánica conecta las propiedades del material ([[rho]], [[c_s]]) y la geometría ([[A_sec]]) con el comportamiento macroscópico de la transferencia de vibraciones. Sin entender [[Z_mec]], es imposible diseñar uniones eficientes, aislamientos vibratorios o sistemas de acoplamiento acústico que funcionen correctamente.

## 🟢 Nivel esencial

La impedancia mecánica [[Z_mec]] mide la **resistencia de un sólido a vibrar**. Un material pesado, rígido y de sección grande tiene alta impedancia; uno ligero, flexible y fino tiene baja impedancia. La impedancia depende de tres factores: la densidad [[rho]] del material, la velocidad a la que se propagan las ondas [[c_s]] y el tamaño de la sección transversal [[A_sec]].

Cuando una onda llega a la frontera entre dos piezas con diferente [[Z_mec]], parte de la energía se refleja y parte se transmite. Si ambas piezas tienen la misma impedancia, toda la energía pasa sin reflexión: es la **adaptación de impedancias**. Si difieren mucho, la mayoría de la energía rebota. Este principio explica por qué es difícil transmitir vibraciones entre materiales muy distintos (metal y caucho, por ejemplo) y por qué se usan capas intermedias de adaptación. En ingeniería, diseñar una unión eficiente significa minimizar la diferencia de [[Z_mec]] entre las piezas conectadas.

## 🔵 Nivel formal

La impedancia mecánica se define como el cociente entre la fuerza armónica aplicada y la velocidad de partícula resultante. Para ondas planas en un sólido de sección uniforme, esto se reduce a:

{{f:impedancia_mecanica}}

Donde [[rho]] es la densidad del material, [[c_s]] es la velocidad de fase de la onda (longitudinal o transversal según el modo) y [[A_sec]] es el área de la sección perpendicular a la propagación. El producto [[rho]] · [[c_s]] es la impedancia acústica específica del material, y al multiplicar por [[A_sec]] se obtiene la impedancia mecánica total que incluye la geometría de la pieza.

Cuando la onda incide perpendicularmente en una interfaz entre medio 1 (impedancia Z₁) y medio 2 (impedancia Z₂), el coeficiente de reflexión en amplitud de velocidad es:

{{f:coeficiente_reflexion_impedancia}}

Y el coeficiente de transmisión en amplitud de velocidad es:

{{f:coeficiente_transmision_impedancia}}

Estas expresiones satisfacen una relación de conservación: la suma de uno más [[R_Z]] da exactamente [[T_Z]], lo que garantiza continuidad de velocidad en la interfaz. La conservación de energía se verifica mediante la potencia, que es proporcional al producto de la impedancia por el cuadrado de la velocidad. La igualdad entre potencia incidente y la suma de reflejada más transmitida se cumple siempre, incluso cuando [[T_Z]] supera la unidad, porque la potencia transmitida depende de la impedancia del medio receptor, no del incidente.

## 🔴 Nivel estructural

Las decisiones de diseño que involucran impedancia mecánica dependen de varios factores interrelacionados:
- **Material**: [[rho]] y [[c_s]] determinan la impedancia específica; los metales pesados y rígidos dominan frente a polímeros.
- **Geometría**: [[A_sec]] puede variar a lo largo de la pieza; cambios bruscos de sección crean interfaces internas de reflexión.
- **Modo de onda**: la velocidad longitudinal y transversal difieren, por lo que la impedancia depende del tipo de onda excitada.
- **Frecuencia**: a frecuencias altas donde la longitud de onda es comparable al espesor, aparecen modos guiados y la impedancia simple deja de ser válida.

El acoplante entre dos piezas actúa como una capa de adaptación. Para máxima transmisión, la impedancia de la capa intermedia debe ser la media geométrica de las impedancias de ambas piezas. Este principio es análogo al recubrimiento antirreflectante en óptica y permite lograr [[R_Z]] nulo a la frecuencia de diseño.

> [!WARNING]
> La fórmula de [[R_Z]] solo vale para incidencia normal. Si la onda llega con ángulo oblicuo, hay conversión de modos (longitudinal ↔ transversal) y los coeficientes cambian drásticamente. En ese caso se necesitan las ecuaciones de Zoeppritz adaptadas a sólidos.

El límite de validez principal es la **hipótesis de onda plana**: si la sección transversal es comparable a la longitud de onda, aparecen modos de orden superior y la impedancia se convierte en una función de la frecuencia (impedancia de entrada del sistema). En barras finas a baja frecuencia, el modelo de onda plana funciona bien; en placas o estructuras complejas, se requiere análisis modal.

La **impedancia de transferencia** entre dos puntos alejados de la interfaz incorpora la propagación, la atenuación y las reflexiones múltiples. La formulación matricial (matrices de transferencia) generaliza el concepto para estructuras multicapa, pero el fundamento sigue siendo el mismo: cada interfaz refleja según el contraste de [[Z_mec]].

> [!NOTE]
> En materiales viscoelásticos, [[Z_mec]] se vuelve compleja: la parte real gobierna la transmisión de energía y la parte imaginaria gobierna la disipación. La magnitud del módulo complejo reemplaza al módulo elástico real en la expresión de [[c_s]].

## Interpretación física profunda

La impedancia mecánica codifica la **inercia acústica** del medio. Un sólido con alta [[Z_mec]] requiere mucha fuerza para producir una velocidad de partícula significativa. Cuando la onda cruza de un medio de baja impedancia a uno de alta, la velocidad transmitida se reduce pero la fuerza aumenta; la potencia se conserva porque es el producto de fuerza por velocidad.

El signo de [[R_Z]] contiene información física crucial: si es positivo, el medio 2 es más rígido y la onda reflejada mantiene la fase; si es negativo, el medio 2 es más blando y la onda reflejada invierte su fase. Esta inversión de fase es detectable experimentalmente y permite identificar la naturaleza de la interfaz sin conocer previamente las impedancias absolutas.

La relación de conservación (uno más [[R_Z]] da [[T_Z]]) implica que la velocidad transmitida puede ser **mayor** que la incidente (hasta el doble). Esto no viola la conservación de energía porque la potencia transmitida depende del producto de la impedancia del medio receptor por el cuadrado de la velocidad, y si el medio receptor es más blando, su menor impedancia compensa exactamente el aumento de velocidad.

## Orden de magnitud

Para una barra de acero de sección 10 cm² (10⁻³ m²): [[Z_mec]] = 7800 × 5900 × 10⁻³ ≈ 46 000 kg/s. Para una barra de aluminio de misma sección: [[Z_mec]] = 2700 × 6300 × 10⁻³ ≈ 17 000 kg/s. El ratio de impedancias es aproximadamente 2.7:1, lo que da [[R_Z]] ≈ 0.46 y una reflexión en energía del 21%.

Si el resultado de [[Z_mec]] es inferior a 100 kg/s para un sólido de ingeniería, probablemente hay un error de unidades en [[A_sec]] (cm² sin convertir a m²). Si [[R_Z]] resulta mayor que 1 en módulo, hay error algebraico seguro.

## Método de resolución personalizado

1. Identificar los materiales de ambos lados de la interfaz y obtener [[rho]] y [[c_s]] de tablas.
2. Determinar [[A_sec]] para cada medio (si cambia de sección en la interfaz, usar el área de cada lado).
3. Calcular [[Z_mec]] para cada medio con la fórmula fundamental.
4. Aplicar la fórmula de [[R_Z]] usando Z₁ (medio incidente) y Z₂ (medio receptor).
5. Calcular [[T_Z]] como 1 + [[R_Z]] o con la fórmula directa.
6. Verificar coherencia: comprobar que |[[R_Z]]| ≤ 1 y que la energía se conserva (R² + Z₁/Z₂ · T² = 1 si se trabaja con potencias).

## Casos especiales y ejemplo extendido

Cuando Z₁ = Z₂ (materiales idénticos y misma sección), [[R_Z]] = 0 y [[T_Z]] = 1. Toda la energía se transmite sin pérdida. Este es el caso ideal de una barra homogénea sin discontinuidades.

Cuando Z₂ → ∞ (extremo rígido, empotrado), [[R_Z]] → 1 y [[T_Z]] → 2. La velocidad en el extremo se duplica en fase, pero la fuerza transmitida al empotramiento es máxima. En la práctica, un extremo libre de una barra actúa como Z₂ = 0: [[R_Z]] = -1 (reflexión con inversión de fase) y [[T_Z]] = 0. La onda reflejada invierte su signo de velocidad.

En uniones atornilladas con una junta blanda (caucho, teflón), la capa intermedia reduce drásticamente la transmisión. Un espesor de junta de un cuarto de longitud de onda puede actuar como transformador de impedancias si su impedancia es la media geométrica.

## Preguntas reales del alumno

- ¿Por qué [[Z_mec]] incluye el área si la impedancia acústica no la incluye? Porque la impedancia mecánica relaciona fuerza total con velocidad, mientras que la impedancia acústica específica relaciona presión con velocidad. La presión es fuerza por unidad de área, así que al pasar de presión a fuerza aparece el factor [[A_sec]].

- ¿Puede [[T_Z]] ser mayor que 1? Sí, y no viola la conservación de energía. Cuando la onda pasa a un medio más blando (menor [[Z_mec]]), la velocidad transmitida aumenta pero la potencia no, porque la potencia es proporcional a Z · v² y el medio blando tiene menor Z.

- ¿Qué ocurre en una interfaz oblicua? Aparecen modos convertidos: una onda longitudinal incidente genera tanto onda longitudinal como transversal reflejadas y transmitidas. Los coeficientes dependen del ángulo y de las velocidades de ambos modos en ambos medios.

- ¿Cómo se consigue la adaptación de impedancias en la práctica? Usando una capa intermedia cuya impedancia sea la media geométrica de las dos piezas, y cuyo espesor sea un cuarto de la longitud de onda a la frecuencia de trabajo. Esto crea interferencia destructiva de las reflexiones múltiples.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con la reflexión y transmisión en sólidos, donde las ecuaciones de [[R_Z]] y [[T_Z]] se derivan de las condiciones de contorno. También se relaciona con las aplicaciones de ultrasonidos, donde la impedancia mecánica determina la detectabilidad de defectos y la necesidad de acoplantes.

La analogía con circuitos eléctricos es profunda: la impedancia mecánica es el análogo de la impedancia eléctrica, la velocidad de partícula corresponde a la corriente y la fuerza a la tensión. Las técnicas de adaptación (cuartos de onda, capas múltiples) son idénticas a las usadas en líneas de transmisión de microondas.

## Síntesis final

La impedancia mecánica [[Z_mec]] = [[rho]] · [[c_s]] · [[A_sec]] cuantifica la resistencia de un sólido al movimiento vibratorio y determina completamente la partición de energía en cada interfaz. La adaptación de impedancias maximiza la transferencia, mientras que el desacoplo maximiza la reflexión. El dominio de este concepto permite predecir y controlar el flujo de vibraciones en cualquier sistema mecánico con interfaces.
`;export{e as default};
