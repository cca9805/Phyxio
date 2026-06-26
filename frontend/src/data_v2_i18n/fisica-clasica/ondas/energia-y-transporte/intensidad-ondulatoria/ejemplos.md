# Ejemplo tipo examen


## Enunciado

Un altavoz emite potencia acústica de manera uniforme en todas direcciones (emisión isotrópica). Un estudiante situado a 10 metros del altavoz mide una intensidad de 0.01 W/m² utilizando un sonómetro. Se pide calcular: (a) la potencia total emitida por el altavoz, (b) la intensidad que experimentaría el estudiante si se alejara a 50 metros, y (c) el nivel de intensidad sonora en decibelios a ambas distancias.

## Datos

- Distancia inicial: 10 m
- Intensidad medida a 10 m: 0.01 W/m²
- Distancia final: 50 m
- Densidad del aire [[rho]]: aproximadamente 1.2 kg/m³
- Umbral de referencia para decibelios: I₀ = 10⁻¹² W/m²

## Definición del sistema

El sistema consiste en una fuente sonora puntual isotrópica (el altavoz) que emite potencia acústica en tres dimensiones. El medio es aire atmosférico de densidad [[rho]], que consideramos no absorbente para las distancias involucradas. La propagación es esférica desde la fuente.

## Modelo físico

Se aplica el modelo de ondas esféricas tridimensionales bajo las siguientes condiciones:

- Fuente puntual isotrópica (emisión uniforme en todas direcciones)
- Medio homogéneo no disipativo (aire)
- Campo lejano (distancias grandes comparadas con dimensiones del altavoz)

La intensidad se relaciona con la potencia y la distancia mediante la ley del inverso del cuadrado:

{{f:intensidad_desde_potencia}}

El nivel sonoro en decibelios se calcula mediante:

{{f:nivel_sonoro_dB}}

El modelo físico considera magnitudes fundamentales del sistema como [[area_de_la_onda_esferica]], [[beta_nivel]], [[intensidad_ondulatoria]].

## Justificación del modelo

El modelo de fuente puntual isotrópica es aplicable porque las distancias consideradas (10 m y 50 m) son mucho mayores que las dimensiones típicas de un altavoz (decenas de centímetros). En el campo lejano, la forma específica de la fuente no afecta significativamente la distribución de intensidad.

El modelo dejaría de ser válido si: (1) las distancias fueran menores que un metro, entrando en el campo cercano donde la directividad del altavoz es significativa; (2) las distancias superaran varios kilómetros, donde la absorción atmosférica se vuelve apreciable; o (3) hubiera obstáculos que generaran reflexiones o sombras acústicas significativas.

## Resolución simbólica

Para la potencia total de la fuente, despejamos de la ecuación de intensidad:

{{f:intensidad_desde_potencia}}

El área geométrica sobre la que se reparte la potencia se obtiene con:

{{f:area_esferica}}

De estas relaciones se obtiene la potencia multiplicando la intensidad medida por el área esférica correspondiente.

Para la intensidad a distancia diferente, aplicamos directamente la ley del inverso del cuadrado con la misma potencia:

I₂ = I₁ · (r₁/r₂)²

Para el nivel en decibelios:

{{f:nivel_sonoro_dB}}

Donde β = 10 log₁₀(I/I₀)

## Sustitución numérica

**Cálculo de la potencia total:**

Aplicando la fórmula con los datos a 10 m:

Operación: 0.01 W/m² × 4π × (10 m)²

Desglose: 0.01 × 4 × 3.1416 × 100 = 12.57 W

Por tanto [[potencia_de_la_fuente]] ≈ 12.6 W

**Cálculo de intensidad a 50 m:**

Usando la relación del inverso del cuadrado:

Operación: 0.01 W/m² × (10/50)²

Desglose: 0.01 × (0.2)² = 0.01 × 0.04 = 0.0004 W/m²

Por tanto [[intensidad_ondulatoria]] a 50 m ≈ 4×10⁻⁴ W/m²

Alternativamente, usando la potencia calculada:

Operación: 12.57 W / (4π × (50 m)²)

Desglose: 12.57 / (4 × 3.1416 × 2500) = 12.57 / 31416 ≈ 0.0004 W/m² ✓

**Cálculo de niveles en decibelios:**

A 10 m:

{{f:nivel_sonoro_dB}}

Operación: 10 × log₁₀(0.01 / 10⁻¹²)

Desglose: 10 × log₁₀(10¹⁰) = 10 × 10 = 100 dB

Por tanto el nivel [[beta_nivel]] a 10 m resulta de 100 dB.

A 50 m:

Operación: 10 × log₁₀(4×10⁻⁴ / 10⁻¹²)

Desglose: 10 × log₁₀(4×10⁸) = 10 × (log₁₀4 + 8) = 10 × (0.60 + 8) = 86 dB

Por tanto [[beta_nivel]] a 50 m ≈ 86 dB

## Validación dimensional

- Unidades de potencia: W/m² × m² = W ✓
- Unidades de intensidad: W / m² = W/m² ✓
- Unidades de nivel en dB: adimensional = 10 × log₁₀(adimensional) ✓

Desglose dimensional para la potencia:

- [[intensidad_ondulatoria]]: `[M T⁻³]`
- [[r_distancia]]²: `[L²]`
- Producto: `[M T⁻³] · [L²] = [M L² T⁻³]`

## Interpretación física

El resultado muestra que el altavoz emite una potencia total de aproximadamente 12.6 W, comparable a la potencia de una bombilla eléctrica pequeña. A 10 metros, la intensidad de 0.01 W/m² corresponde a 100 dB — un nivel similar al de un concierto de rock o una sierra eléctrica, que requiere protección auditiva para exposición prolongada.

Al alejarse a 50 metros (5 veces más lejos), la intensidad se reduce a 4×10⁻⁴ W/m², es decir, a 1/25 del valor inicial, confirmando la ley del inverso del cuadrado. El nivel sonoro desciende a 86 dB, todavía comparable al tráfico urbano intenso pero dentro del rango soportable sin protección por períodos moderados.

La reducción de 14 dB (de 100 a 86 dB) corresponde al mismo factor geométrico predicho por la expansión esférica. La densidad [[rho]] del aire no aparece en este cálculo porque se parte de una intensidad ya medida; sería necesaria si el dato experimental inicial fuera presión acústica.

Si el estudiante deseara reducir el nivel a 70 dB (conversación ruidosa), necesitaría alejarse a una distancia tal que la intensidad sea 10⁻⁵ W/m², lo que corresponde a aproximadamente 200 metros — distancia donde otros factores como absorción atmosférica y obstáculos comenzarían a ser significativos.

---

# Ejemplo de aplicación real


## Contexto

Los **sistemas de alerta sísmica** (como el sistema SASMEX en México o ShakeAlert en Estados Unidos) utilizan redes de sensores sísmicos para detectar ondas P (primarias) de un terremoto y emitir alertas antes de que lleguen las destructivas ondas S (secundarias). La intensidad de estas ondas sísmicas determina el daño potencial y las zonas que requieren alerta urgente.

Las ondas sísmicas se propagan tridimensionalmente desde el hipocentro (punto de ruptura en la corteza) y su intensidad sigue la ley del inverso del cuadrado modificada por la geometría del medio terrestre y la atenuación anelástica.

## Estimación física

Consideremos un sismo moderado con magnitud de momento Mw de valor 6. La energía sísmica radiada es del orden de 10¹³ J. Si esta energía se libera en unos 10 segundos, la potencia promedio radiada es del orden de 10¹² W.

A 50 km del epicentro (distancia típica de ciudades cercanas a zonas sísmicas), la intensidad sísmica (medida como potencia por unidad de área perpendicular a la propagación) sería:

Operación aproximada: P / (4πr²) = 10¹² W / (4π × (50,000 m)²)

Desglose: 10¹² / (4 × 3.14 × 2.5×10⁹) ≈ 10¹² / 3.14×10¹⁰ ≈ 32 W/m²

Esta intensidad, distribuida sobre la masa de edificios y estructuras, genera aceleraciones que pueden dañar construcciones no reforzadas.

El sistema de alerta utiliza la detección de las ondas P de baja intensidad (que llegan primero) para predecir la llegada de las ondas S de mayor intensidad. Si sensores cercanos al epicentro detectan intensidades sísmicas superiores a un umbral (correspondiente a magnitudes > 5.0), el sistema emite alertas a ciudades a 50-100 km de distancia con segundos a decenas de segundos de anticipación.

## Interpretación

La intensidad de las ondas sísmicas disminuye con la distancia según la ley del inverso del cuadrado, pero en la realidad terrestre esta disminución es más rápida debido a la atenuación anelástica (conversión de energía mecánica en calor dentro de la corteza). Un sismo de magnitud 6.0 puede generar intensidades dañinas (modificada Mercalli VI-VII) hasta 50-80 km del epicentro, mientras que a 200 km la intensidad suele ser perceptible pero no destructiva.

El sistema de alerta sísmica aprovecha que las ondas P, aunque de menor intensidad que las S, viajan más rápido (6-8 km/s vs 3-5 km/s). La detección de intensidades P superiores a un umbral crítico permite inferir que intensidades S destructivas llegarán segundos después. Esta ventana de tiempo, aunque breve, permite detener trenes, cerrar válvulas de gas y alertar a la población para buscar refugio.

Variable dominante: la magnitud del sismo (relacionada logarítmicamente con la energía radiada) y la distancia al epicentro, que determinan la intensidad sísmica local según leyes de atenuación geométrica.

Límite de validez: la ley del inverso del cuadrado pura subestima la atenuación real en medios absorbentes como la corteza terrestre. En terremotos muy profundos (>100 km), las ondas llegan a la superficie con intensidades mayores que las predichas por geometría esférica simple debido a efectos de canalización y reflexión en discontinuidades internas.