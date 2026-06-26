const e=`## Modelo ideal

El modelo ideal supone **ondas planas** que se propagan en un sólido homogéneo, isótropo, perfectamente elástico y con sección transversal constante. En este modelo, la impedancia mecánica [[Z_mec]] es real, constante e independiente de la frecuencia. La onda no se atenúa y la interfaz entre dos medios se trata como una discontinuidad instantánea sin espesor ni capas de transición.

La simplificación central es ignorar la dispersión, la atenuación y los efectos geométricos de difracción. Esto permite reducir el problema de transmisión a una simple relación algebraica entre [[R_Z]], [[T_Z]] y las impedancias de ambos lados.

## Hipótesis

- El sólido es linealmente elástico: la relación tensión-deformación es proporcional sin histéresis. Si se viola, aparece disipación y [[Z_mec]] se vuelve compleja.
- La onda es plana: el frente de onda es perpendicular a la dirección de propagación y uniforme en toda la sección. Si la sección es comparable a la longitud de onda, aparecen modos de orden superior.
- Incidencia normal: la onda llega perpendicularmente a la interfaz. Si hay ángulo, aparece conversión de modos y los coeficientes cambian.
- Sección constante: [[A_sec]] no varía en las proximidades de la interfaz. Si cambia, hay reflexiones parciales distribuidas que el modelo no captura.
- Medio infinito o terminación conocida: se asume que no hay reflexiones posteriores que regresen a la interfaz. En sistemas finitos, las reflexiones múltiples modifican la impedancia efectiva.

## Dominio de validez cuantitativo

Dominio de validez cuantitativo: el modelo es válido cuando la longitud de onda λ es al menos 5 veces mayor que la dimensión transversal d de la pieza. El criterio numérico explícito es que la frecuencia sea inferior a [[c_s]] dividida entre cinco veces el diámetro. Para una barra de acero de 20 mm de diámetro con [[c_s]] de unos 5900 m/s, la frecuencia límite resulta ser aproximadamente 60 kHz. Por debajo de este valor, el error del modelo de onda plana es inferior al 5%.

Para frecuencias superiores, aparecen modos de Pochhammer-Chree en barras cilíndricas y modos de Lamb en placas, y la impedancia simple deja de representar la respuesta del sistema.

Transición explícita al modelo extendido: cuando la frecuencia supera el límite f_max calculado, o cuando la atenuación medida excede el 5% por longitud de onda, o cuando la estructura tiene múltiples interfaces, se debe abandonar el modelo ideal y usar la formulación matricial de transferencia con impedancia compleja.

## Señales de fallo del modelo

- El coeficiente de reflexión medido experimentalmente varía con la frecuencia cuando el modelo predice un valor constante: esto indica que la hipótesis de onda plana ha fallado.
- La energía medida transmitida más reflejada no suma la energía incidente: hay disipación (material viscoelástico) o dispersión lateral.
- El [[R_Z]] calculado no coincide con la medición en uniones reales: las capas de óxido, rugosidad superficial o capas de aire atrapado actúan como interfaces adicionales no modeladas.
- Aparecen ecos múltiples periódicos con amplitud creciente en la señal temporal: hay resonancia geométrica no prevista por el modelo de medio infinito.

## Modelo extendido o alternativo

El modelo extendido introduce la **impedancia compleja**, que añade una parte imaginaria a [[Z_mec]] para materiales viscoelásticos. La parte real gobierna la transmisión de energía y la parte imaginaria representa la disipación interna del material. Además, para sistemas multicapa se usa la **formulación matricial de transferencia**: cada capa se describe con una matriz 2×2 que relaciona fuerza y velocidad en ambas caras, y el producto de matrices da la respuesta total del sistema.

Cuando conviene pasar al modelo extendido: la transición es necesaria cuando se cumple alguna de las siguientes condiciones:
- La atenuación medida supera el 5% por longitud de onda.
- La estructura tiene más de una interfaz (capas de adaptación, recubrimientos, juntas).
- La frecuencia supera el límite de onda plana (f > [[c_s]] / 5d).

## Comparación operativa

- **Modelo ideal**: una sola ecuación algebraica por interfaz. Rápido, útil para estimaciones y diseños preliminares. No captura pérdidas ni efectos multicapa.
- **Modelo extendido (matrices de transferencia)**: permite múltiples capas, atenuación y resonancias. Más costoso computacionalmente. Necesario para diseño de filtros de vibración, recubrimientos multicapa y análisis de estructuras reales.
- **Precisión**: el ideal tiene errores < 5% si las hipótesis se cumplen; el extendido puede alcanzar < 1% con datos de material correctos.
- **Rango de aplicación**: ideal para barras finas y baja frecuencia; extendido para cualquier geometría y rango de frecuencias.
`;export{e as default};
