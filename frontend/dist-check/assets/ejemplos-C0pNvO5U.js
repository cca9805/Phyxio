const a=`# Ejemplo tipo examen

## Enunciado

Un haz de luz láser monocromática roja con una longitud de onda de 633 nm incide perpendicularmente sobre una rendija rectangular estrecha de ancho igual a 0.15 mm. El patrón de difracción de Fraunhofer resultante se proyecta sobre una pantalla plana colocada a una distancia longitudinal de 2.0 m de la rendija. Calcular: (a) la desviación angular en radianes y grados sexagesimales del primer mínimo de difracción lateral, (b) el ancho lineal total del máximo central brillante medido sobre la pantalla, (c) verificar si se cumple de forma satisfactoria la aproximación de ángulos pequeños para este montaje experimental.

## Datos

- Longitud de onda [[lambda]]: 633 nm, equivalente a 6.33 · 10⁻⁷ m
- Ancho de rendija [[a]]: 0.15 mm, equivalente a 1.5 · 10⁻⁴ m
- Distancia a la pantalla [[L]]: 2.0 m
- Aceleración angular o angularidad: paraxial

## Definición del sistema

El sistema está constituido por un emisor láser coherente de longitud de onda fija de 633 nm que incide ortogonalmente sobre una rendija de difracción simple uniforme con ancho [[a]] de 0.15 mm. La luz se propaga en campo lejano hasta incidir sobre una pantalla de proyección paralela plana colocada a una distancia longitudinal [[L]] de 2.0 m.

## Modelo físico

Se aplica el modelo de difracción de Fraunhofer en rendija simple rectangular bajo aproximación paraxial. Las magnitudes que definen este leaf de estudio son el ancho de la rendija [[a]], la longitud de onda [[lambda]], la desviación angular [[theta]], la distancia a la pantalla [[L]] y el ancho lineal total del máximo central [[w]]. El modelo requiere que el ancho de la rendija sea significativamente mayor que la longitud de onda y que el ángulo del primer mínimo sea pequeño (menor a una décima de radián).

## Justificación del modelo

El uso de la difracción de Fraunhofer está plenamente justificado debido a que la pantalla se sitúa a una distancia de dos metros, lo cual es de sobra mayor que el factor geométrico del cuadrado del ancho de la rendija dividido entre la longitud de onda (que toma el valor de aproximadamente treinta y cinco milímetros). Además, al ser la rendija del orden de décimas de milímetro y la luz visible, los ángulos de desviación serán lo suficientemente pequeños como para validar la aproximación paraxial lineal, lo que se demostrará numéricamente en el apartado c.

## Resolución simbólica

Apartado (a): La desviación angular en radianes hacia el primer mínimo de difracción lateral se obtiene despejando [[theta]] a partir de la relación fundamental que iguala el ángulo al cociente entre la longitud de onda de la luz y el ancho físico de la rendija:

{{f:angulo_primer_minimo}}

Para expresar el ángulo en grados sexagesimales, se multiplica el valor en radianes por ciento ochenta y se divide por pi.

Apartado (b): El ancho lineal total del máximo central brillante [[w]] proyectado sobre la pantalla de observación lateral se deduce combinando el ángulo de desviación angular bilateral con la amplificación de la distancia longitudinal geométrica [[L]]:

{{f:ancho_maximo_central}}

Apartado (c): La validez de la aproximación de ángulos pequeños exige que el valor absoluto del ángulo calculado [[theta]] sea mucho menor que una décima de radián (0.1 rad), garantizando que el error cometido al aproximar el seno y la tangente sea inferior al uno por ciento.

## Sustitución numérica

Apartado (a): Dividiendo la longitud de onda de 6.33 · 10⁻⁷ m entre el ancho de la rendija de 1.5 · 10⁻⁴ m se obtiene un ángulo [[theta]] aproximado de 0.00422 radianes. Multiplicando este valor por ciento ochenta y dividiendo por pi, resulta un ángulo de aproximadamente 0.242 grados sexagesimales. Por tanto [[theta]] ≈ 0.00422 rad (o 0.242°).

Apartado (b): Multiplicando dos por la longitud de onda de 6.33 · 10⁻⁷ m, por la distancia a la pantalla de 2.0 m, y dividiendo por el ancho de la rendija de 1.5 · 10⁻⁴ m, se obtiene un ancho lineal [[w]] de aproximadamente 0.0169 metros, equivalente a 16.9 milímetros. Por tanto [[w]] ≈ 16.9 mm.

Apartado (c): El ángulo calculado [[theta]] es de 0.00422 radianes. Puesto que 0.00422 rad es notablemente inferior al límite paraxial de 0.1 radianes (apenas representa un cuatro por ciento de dicho umbral), la aproximación paraxial lineal es perfectamente válida y comete un error matemático totalmente despreciable de millonésimas de metro en la proyección sobre la pantalla plana.

## Validación dimensional

Apartado (a): Para el ángulo, la expresión divide longitud entre longitud. Ambas magnitudes físicas tienen dimensión de longitud \`[L]\`. El cociente de metros dividido entre metros anula las dimensiones espaciales, resultando en una cantidad adimensional en radianes \`[adimensional]\` ✓

Apartado (b): Para el ancho [[w]], la expresión multiplica una constante adimensional por la longitud de onda de dimensión \`[L]\`, por la distancia a la pantalla de dimensión \`[L]\`, dividido todo entre el ancho de la rendija de dimensión \`[L]\`. Realizando la simplificación dimensional, la ecuación resulta en una unidad lineal de metros \`[L]\` ✓

## Interpretación física

El resultado del apartado (a) indica que el primer punto de total oscuridad lateral ocurre a una desviación angular de apenas 0.242 grados. Esto demuestra que la luz se propaga casi en línea recta, pero experimenta una desviación cuantificable debido a su naturaleza ondulatoria. La difracción lateral genera una dispersión angular hacia ambos lados que es intrínseca a la abertura geométrica.

El ancho total de la franja luminosa central es de 16.9 milímetros sobre la pantalla a dos metros de distancia. Esta dimensión representa la amplificación puramente geométrica del patrón angular proyectado. En esta región brillante se concentra casi la totalidad de la energía luminosa del haz láser transmitido. La excelente coincidencia de la aproximación lineal garantiza que el diseño del laboratorio óptico sea robusto y altamente predecible mediante expresiones algebraicas sencillas.

Si estrecháramos la rendija a la mitad (0.075 mm), la dispersión angular y el ancho lineal del patrón sobre la pantalla se duplicarían exactamente a 33.8 milímetros. Por el contrario, si usáramos luz azul de menor longitud de onda en lugar de roja, el patrón se contraería lateralmente debido a la menor desviación de fase ondulatoria lateral.

---

# Ejemplo de aplicación real

## Contexto

Un biofísico necesita medir con alta precisión el espesor microscópico de una fibra capilar (cabello humano) en un experimento de biomecánica celular. En lugar de utilizar un micrómetro mecánico que podría aplastar o deformar la fibra biológica sensible, decide diseñar un dispositivo de medición óptico no invasivo basado en la difracción de la luz. Para ello, alinea un puntero láser verde de laboratorio con una longitud de onda conocida de 532 nm y coloca el cabello verticalmente en el centro del haz de luz. Al otro lado de la sala, fija una pantalla de proyección plana blanca a una distancia longitudinal calibrada de 2.5 m.

## Estimación física

De acuerdo con el principio de Babinet en física ondulatoria, un obstáculo opaco delgado (el cabello) difracta la luz de forma exactamente idéntica a como lo haría una abertura rectangular complementaria del mismo ancho. Por lo tanto, el cabello actúa físicamente como una rendija difractora simple de ancho [[a]], donde [[a]] representa el diámetro transversal del cabello.

Al proyectar el haz verde sobre la pantalla a una distancia [[L]] de 2.5 m, el biofísico mide con una regla digital que el ancho total del máximo brillante central verde sobre la pantalla tiene [[w]] de 3.6 cm, equivalente a 0.036 m.

Para estimar el diámetro del cabello, el biofísico despeja el parámetro [[a]] de la expresión del máximo central brillante declarada en el leaf:

{{f:ancho_maximo_central}}

Introduciendo los valores experimentales: la longitud de onda es de 5.32 · 10⁻⁷ m, la distancia a la pantalla es de 2.5 m, y el ancho medido es de 0.036 m. Multiplicando dos por la longitud de onda y por la distancia se obtiene 2.66 · 10⁻⁶ m², y al dividir entre el ancho de 0.036 m resulta un ancho de rendija [[a]] aproximado de 7.39 · 10⁻⁵ m, es decir, unos 74 micrómetros.

Este valor es excelente y coincide plenamente con los rangos biológicos típicos del espesor de un cabello humano, que suele oscilar entre 50 y 100 micrómetros. El campo angular resultante es de unos 7 milirradianes, lo que valida de sobra la aproximación paraxial lineal de Fraunhofer utilizada.

## Interpretación

La magnitud física del diámetro del cabello [[a]] actúa como el elemento de escala dominante. Este método de calibración óptica demuestra cómo un fenómeno físico puramente ondulatorio permite realizar mediciones indirectas extremadamente precisas de dimensiones microscópicas utilizando únicamente un láser, una cinta métrica y una regla de laboratorio. El carácter no invasivo y la alta sensibilidad del patrón difractado a pequeños cambios en el espesor lo convierten en una técnica industrial y científica sumamente robusta para la metrología de fibras finas, cables y capilares biológicos.

Variable dominante: [[a]], el diámetro físico del obstáculo (cabello), que controla inversamente la escala del patrón espacial proyectado en la pantalla.
Límite de validez: el modelo de Fraunhofer paraxial es válido mientras la fibra sea uniforme, el haz sea altamente coherente y la distancia longitudinal supere los 2.5 metros en relación al espesor micrómetro.
`;export{a as default};
