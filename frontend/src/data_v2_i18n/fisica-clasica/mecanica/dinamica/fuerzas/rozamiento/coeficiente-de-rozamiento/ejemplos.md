# Ejemplo tipo examen

## Enunciado

Un bloque de masa conocida se apoya sobre un plano inclinado rugoso. El laboratorio quiere decidir si el bloque permanece en reposo o si inicia deslizamiento cuando se aumenta gradualmente la inclinacion. Ademas, si comienza a deslizar, se pide estimar la fuerza de rozamiento dinamico durante el primer tramo de movimiento y comparar ambos regímenes.

## Datos

- Normal de contacto estimada en la configuracion inicial: [[N]] = 120 N.
- Coeficiente estatico medido para el par de superficies: [[mu_s]] = 0.55.
- Coeficiente dinamico medido para el mismo par: [[mu_k]] = 0.40.
- Fuerza tangencial externa que intenta mover el bloque en un ensayo previo: 50 N.
- Angulo critico experimental del banco: [[theta_c]] = 29 grados.

## Definición del sistema

Se toma como sistema el bloque y su contacto con el plano. En direccion normal actua [[N]]. En direccion tangencial actuan la componente impulsora y la fuerza de rozamiento correspondiente al regimen. Mientras no hay deslizamiento, la fuerza relevante es [[fs]] con limite [[fs_max]]. Cuando hay deslizamiento, la fuerza relevante es [[fk]].

## Modelo físico

Se utiliza el modelo seco con coeficientes constantes en primera aproximacion. Para estado estatico se valida desigualdad de no deslizamiento. Para estado dinamico se calcula fuerza con coeficiente [[mu_k]]. Se usa ademas el metodo angular como verificacion cruzada de [[mu_s]].

## Justificación del modelo

El banco de ensayo esta preparado para contacto seco, velocidad moderada y deformacion despreciable. Bajo esas condiciones, el modelo de coeficientes es apropiado y permite separar con claridad dos preguntas distintas: capacidad de adherencia y resistencia durante deslizamiento. Esta separacion evita mezclar [[fs]] con [[fk]] en la misma etapa de analisis.

## Resolución simbólica

Limite estatico disponible:

{{f:fs_max_modelo}}

Condicion de permanencia en reposo:

{{f:condicion_estatica}}

Friccion en deslizamiento:

{{f:fk_modelo}}

Chequeo tipico entre coeficientes:

{{f:comparacion_coeficientes}}

Verificacion angular de [[mu_s]]:

{{f:mu_s_angulo_critico}}

## Sustitución numérica

1) Umbral estatico: [[fs_max]] = [[mu_s]]*[[N]] = 0.55*120 = 66 N.

2) Ensayo de reposo: exigencia tangencial 50 N. Como 50 <= 66, la condicion de no deslizamiento se cumple y el bloque puede permanecer estatico con [[fs]] ajustada a 50 N.

3) Si el sistema supera el umbral y entra en deslizamiento, la fuerza dinamica se estima como [[fk]] = [[mu_k]]*[[N]] = 0.40*120 = 48 N.

4) Comparacion de coeficientes: [[mu_k]] <= [[mu_s]] se cumple (0.40 <= 0.55), consistente con el comportamiento esperado para el par de superficies.

5) Verificacion angular: tan([[theta_c]]) con [[theta_c]] = 29 grados produce valor cercano a 0.55, coherente con el [[mu_s]] medido por fuerza.

## Validación dimensional

En todas las ecuaciones de fuerza, el producto coeficiente por [[N]] conserva unidad newton. Las desigualdades comparan fuerzas de la misma dimension. La expresion angular mantiene consistencia adimensional para [[mu_s]].

Tambien hay consistencia fisica de escala: [[fs_max]] y [[fk]] son del mismo orden, con [[fs_max]] mayor, lo que respalda la narrativa de mayor adherencia antes del deslizamiento.

## Interpretación física

El resultado no es solo numerico. Muestra una frontera de regimen clara: con la fuerza tangencial del ensayo (50 N), el contacto todavia puede sostenerse sin deslizamiento porque el techo estatico es 66 N. Si la exigencia aumenta por encima del umbral, el sistema migra a deslizamiento y la oposicion tangencial cae a 48 N en el modelo dinamico.

Esta caida de fuerza resistente explica por que el movimiento, una vez iniciado, puede acelerarse con mayor facilidad que en la fase de adherencia. Es una lectura causal central del leaf.

# Ejemplo de aplicación real

## Contexto

Una planta de envasado transporta cajas por una cinta inclinada hacia una mesa de empaquetado. El equipo de mantenimiento necesita ajustar recubrimientos de la cinta para evitar dos fallos opuestos: deslizamiento no deseado de cajas durante arranque y exceso de resistencia que incremente consumo energetico en regimen continuo.

En pruebas de campo se mide [[N]] por celda de carga y se estiman [[mu_s]] y [[mu_k]] para distintas combinaciones de material de base y recubrimiento superficial. La decision de ingenieria no depende de una sola ecuacion, sino de comparar comportamiento estatico y dinamico bajo el mismo perfil de carga.

## Estimación física

Para una familia de cajas de 8 kg transportadas sobre la cinta inclinada 12°, la fuerza normal estimada en la zona de contacto es [[N]] ≈ mg·cos(12°) = 78.4 × 0.978 ≈ 76.7 N. La demanda tangencial de arranque (componente gravitacional + inercia de puesta en marcha) se estima en 35 N.

Recubrimiento A: [[mu_s]] = 0.65, [[mu_k]] = 0.55.
- Umbral estático: [[fs_max]] = [[mu_s]]·[[N]] = 0.65 × 76.7 = 49.9 N > 35 N → arranque seguro con margen del 43 %.
- Rozamiento en marcha: [[fk]] = [[mu_k]]·[[N]] = 0.55 × 76.7 = 42.2 N → potencia disipada proporcional a 42.2 N × velocidad de cinta.

Recubrimiento B: [[mu_s]] = 0.52, [[mu_k]] = 0.35.
- Umbral estático: [[fs_max]] = 0.52 × 76.7 = 39.9 N > 35 N → arranque seguro con margen del 14 %.
- Rozamiento en marcha: [[fk]] = 0.35 × 76.7 = 26.8 N → reducción del 36 % respecto a recubrimiento A.

El recubrimiento B satisface la condición estática con margen suficiente y reduce la fuerza de arrastre en régimen continuo de 42.2 N a 26.8 N. Para una línea de producción con 500 cajas/hora a 0.5 m/s, la reducción de potencia disipada es aproximadamente (42.2 − 26.8) × 0.5 = 7.7 W por caja, lo que se traduce en un ahorro significativo a escala de planta.

## Interpretación

Este caso real muestra por qué el coeficiente de rozamiento debe tratarse como herramienta de decisión y no como número aislado de catálogo. El análisis correcto exige distinguir régimen, validar dominio y conectar resultado con objetivo operativo.

La lectura cuantitativa revela que la mejor opción no es la de mayor [[mu_s]], sino la que satisface simultáneamente el umbral de seguridad estático y minimiza [[fk]] en régimen dinámico. El recubrimiento B reduce la demanda energética en un 36 % manteniendo un margen de seguridad de arranque del 14 %, suficiente para absorber variabilidad de carga sin riesgo de deslizamiento.

También ilustra continuidad con la teoría del leaf: [[fs]], [[fs_max]], [[fk]], [[mu_s]], [[mu_k]], [[N]] y [[theta_c]] no son elementos decorativos; son piezas de un mismo argumento físico que permite decidir con trazabilidad técnica y valores verificables.
