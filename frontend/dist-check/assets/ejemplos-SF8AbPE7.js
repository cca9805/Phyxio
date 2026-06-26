const a=`# Ejemplo tipo examen

## Enunciado

Una cuerda de acero de piano tiene una longitud de 1.2 m, una densidad lineal de 5.0 g/m y está sometida a una tensión de 800 N. Se genera en ella una onda armónica transversal de frecuencia 440 Hz y amplitud 3.0 mm. Se pide:

(a) Calcular la velocidad de propagación [[v]] de la onda y la longitud de onda correspondiente.

(b) Determinar la energía total almacenada en un ciclo completo de la onda.

(c) Calcular la potencia media transportada por la onda.

(d) Verificar que se cumple la condición de régimen lineal.

## Datos

- Longitud de la cuerda: 1.2 m
- Densidad lineal [[mu]]: 5.0 g/m = 5.0 × 10⁻³ kg/m
- Tensión T: 800 N
- Frecuencia f: 440 Hz → frecuencia angular [[omega]]: 2π × 440 = 2765 rad/s
- Amplitud [[A]]: 3.0 mm = 3.0 × 10⁻³ m

## Definición del sistema

El sistema es una cuerda unidimensional ideal, uniforme, con extremos no especificados (asumimos semi-infinita para evitar reflexiones). La onda es progresiva, armónica, transversal, en régimen lineal. Se considera un tramo de longitud igual a una longitud de onda para el análisis energético.

## Modelo físico

El modelo es el de onda transversal en cuerda ideal bajo las siguientes hipótesis:

- Cuerda perfectamente flexible y uniforme
- Pequeñas oscilaciones (pendientes pequeñas, sin(θ) ≈ tan(θ))
- Tensión constante a lo largo de la cuerda
- Ausencia de disipación por fricción interna o amortiguamiento
- Régimen estacionario establecido

Las magnitudes fundamentales son la densidad de energía [[u_energia]] que varía espacial y temporalmente, la energía total por ciclo [[E_onda]], y la potencia transportada [[P_onda]]. La relación entre ellas está gobernada por las fórmulas de transporte energético ondulatorio.

## Justificación del modelo

El modelo lineal es aplicable si la amplitud es pequeña comparada con la longitud de onda (verificación en apartado d). La uniformidad de la cuerda garantiza [[mu]] constante. La tensión de 800 N es típica de cuerdas de piano de acero y mantiene la cuerda bien por debajo de su límite elástico, asegurando comportamiento lineal sin deformación permanente.

La ausencia de disipación es una idealización razonable para distancias cortas (metros) en cuerdas metálicas a frecuencias audibles. En aplicaciones reales de instrumentos musicales, esta disipación es lo que causa el decaimiento del sonido, pero para el análisis instantáneo del transporte es despreciable.

## Resolución simbólica

(a) La velocidad de propagación [[v]] en una cuerda bajo tensión se obtiene de la tensión dividida por la densidad lineal, en raíz cuadrada. La longitud de onda resulta de dividir [[v]] por la frecuencia, o equivalentemente multiplicar [[v]] por el período angular característico.

(b) La densidad de energía instantánea en cualquier punto de la cuerda viene dada por:

{{f:densidad_energia_cuerda}}

La energía total en un ciclo se calcula mediante:

{{f:energia_total_ciclo}}

Esta fórmula integra la densidad de energía promediada sobre una longitud de onda completa.

(c) La potencia transportada en la cuerda requiere la fórmula:

{{f:potencia_onda_cuerda}}

Para ondas en medios continuos más generales, la potencia se expresa mediante:

{{f:potencia_onda_general}}

Alternativamente, puede obtenerse como [[E_onda]]·v/[[lambda]], que es equivalente.

(d) La condición de régimen lineal requiere verificar que A/[[lambda]] sea suficientemente pequeño, típicamente menor que 0.05 para buena aproximación.

## Sustitución numérica

(a) Velocidad de propagación [[v]] calculada desde la tensión y la densidad lineal: la raíz cuadrada del cociente entre 800 N y 5.0 milésimos de kg/m da como resultado aproximadamente 400 m/s. La longitud de onda resulta del cociente entre [[v]] y la frecuencia de 440 Hz, obteniendo aproximadamente 0.91 m.

(b) Energía total en un ciclo:

Para aplicar la fórmula, primero evaluamos los factores individuales. El cuadrado de la frecuencia angular resulta aproximadamente 7.645 × 10⁶ rad²/s². El cuadrado de la amplitud da 9.0 × 10⁻⁶ m². Multiplicando la densidad lineal por estos factores se obtiene aproximadamente 344 J/m. Finalmente, aplicando la fórmula de energía total con el factor medio y la longitud de onda, el resultado es aproximadamente 156 J.

(c) Potencia transportada:

{{f:potencia_onda_cuerda}}

{{f:potencia_onda_general}}

Los factores son los mismos hasta el cuadrado de la amplitud, pero ahora multiplicamos por [[v]] en lugar de la mitad de la longitud de onda. Esto da aproximadamente 1.38 × 10⁵ W. Aplicando el factor medio, la potencia resulta aproximadamente 69 kW. La verificación alternativa usando la energía total multiplicada por la velocidad y dividida por la longitud de onda confirma este resultado numérico.

(d) Verificación de régimen lineal:

Relación amplitud/longitud de onda:

[[A]]/[[lambda]] = (3.0 × 10⁻³ m) / (0.909 m) ≈ 3.3 × 10⁻³ = 0.0033

Como 0.0033 < 0.05, el régimen lineal es excelente. El ángulo máximo de la cuerda respecto a la horizontal es aproximadamente arctan(2πA/λ) ≈ 1.2°, confirmando pendientes pequeñas.

## Validación dimensional

- Velocidad: \`[M L T⁻²]¹/² / [M L⁻¹]¹/² = [L² T⁻²]¹/² = [L T⁻¹]\` ✓ m/s correcto
- Longitud de onda: \`[L T⁻¹] / [T⁻¹] = [L]\` ✓ m correcto
- Energía: \`[M L⁻¹]·[T⁻¹]²·[L]²·[L] = [M L² T⁻²]\` ✓ J correcto
- Potencia: \`[M L⁻¹]·[T⁻¹]²·[L]²·[L T⁻¹] = [M L² T⁻³]\` ✓ W correcto

## Interpretación física

La energía de 156 J en un solo ciclo de la onda es considerable, equivalente a la energía cinética de una pelota de tenis a unos 25 m/s. Esta energía viaja a lo largo de la cuerda a 400 m/s, pasando por un punto dado en aproximadamente 2.3 ms (el período de oscilación).

La potencia de 69 kW es notablemente alta para una cuerda musical, indicando que las ondas en instrumentos de cuerda pulsados transportan energía significativa en intervalos cortos. En la práctica, la cuerda solo está vibrando con esta amplitud durante un tiempo breve (milisegundos tras el pulso inicial), y la potencia promedio temporal en una interpretación musical es mucho menor debido a los silencios entre notas y al decaimiento natural.

Si la amplitud se redujera a 1 mm (un tercio), la energía y potencia caerían a un noveno (factor 1/3² = 1/9), resultando en aproximadamente 17 J y 7.7 kW respectivamente. Esta dependencia cuadrática explica por qué tocar "más fuerte" (mayor amplitud) aumenta drásticamente el volumen percibido.

La verificación de régimen lineal confirma que la aproximación sinusoidal es excelente; la forma de onda real sería indistinguible de una sinusoidal pura incluso bajo análisis detallado. Esto justifica el uso de métodos de Fourier para análisis armónico en instrumentos de cuerda.

# Ejemplo de aplicación real

## Contexto

Los convertidores de energía undimotriz buscan capturar la energía transportada por las olas oceánicas para generación eléctrica. Un dispositivo tipo "absorbedor puntual" (punto de captura) oscila verticalmente con el movimiento de la superficie del agua, extrayendo energía cinética y potencial del movimiento ondulatorio.

## Estimación física

Consideremos olas típicas del Atlántico Norte con las siguientes características promedio:

- Amplitud de ola (altura media de cresta a valle dividida por 2): A ≈ 1.5 m
- Período característico: T ≈ 8 s → frecuencia f ≈ 0.125 Hz
- Longitud de onda aproximada para agua profunda: [[lambda]] ≈ g·T²/(2π) ≈ 100 m
- Velocidad de grupo de olas de gravedad: v_g ≈ g·T/(4π) ≈ 6.2 m/s

La densidad de energía superficial (energía por unidad de área horizontal) para olas de gravedad en agua profunda se aproxima mediante el producto de la mitad de la densidad del agua, la gravedad, y el cuadrado de la amplitud. Con los valores típicos de densidad de agua de mar y gravedad, y una amplitud de 1.5 m, esta densidad resulta aproximadamente 11300 J/m².

La potencia disponible por unidad de ancho de frente de onda (potencia específica) se obtiene multiplicando la densidad superficial por la velocidad de grupo. Usando los valores calculados, aproximadamente 11300 J/m² multiplicados por 6.2 m/s dan una potencia específica cercana a 70 kW por cada metro de frente de onda.

Un absorbedor de 10 m de diámetro expuesto a estas olas interceptaría un frente de onda de aproximadamente 10 m, accediendo teóricamente a 700 kW de potencia ondulatoria incidente.

## Interpretación

Los 70 kW por metro de frente de onda representan una densidad de potencia considerable, comparable a la radiación solar en un día soleado (aproximadamente 1 kW/m², pero durante horas, no instantáneamente). Sin embargo, la captura eficiente es extremadamente desafiante.

El límite teórico de Budal para absorbedores puntuales establece que la potencia máxima capturable es proporcional al producto de la densidad del agua, la gravedad, el cuadrado de la amplitud, y el ancho del dispositivo, dividido por cuatro veces el número de onda. Para los valores de nuestro ejemplo, esto limita la captura a aproximadamente la mitad de la potencia incidente en condiciones óptimas de resonancia. Para nuestros valores, esto limita la captura a aproximadamente el 50% de la potencia incidente en condiciones óptimas de resonancia.

En la práctica, los dispositivos reales capturan entre el 10% y el 30% de la potencia disponible debido a:

- Desajustes de frecuencia entre el dispositivo y el espectro de olas
- Pérdidas por fricción mecánica y conversión electromagnética
- Limitaciones estructurales que impiden respuesta óptima en tormentas

Para el absorbedor de 10 m de nuestro ejemplo, una captura del 20% de los 700 kW teóricos resultaría en 140 kW de potencia mecánica útil. Tras la conversión a electricidad (con eficiencias típicas del 80-90%), se obtendrían aproximadamente 110-125 kW de potencia eléctrica.

Esta potencia, aunque significativa, debe compararse con el costo de capital de instalar y mantener estructuras marinas capaces de soportar las condiciones extremas del entorno oceánico. La viabilidad económica depende críticamente de la capacidad de factor de planta (porcentaje de tiempo generando cerca de la potencia nominal) y la longevidad del sistema en el ambiente marino agresivo.
`;export{a as default};
