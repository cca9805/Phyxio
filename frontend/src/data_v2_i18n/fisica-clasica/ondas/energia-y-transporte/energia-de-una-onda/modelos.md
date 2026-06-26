## Modelo ideal

El modelo ideal de transporte energético ondulatorio considera una onda armónica pura propagándose en un medio lineal, homogéneo e infinito, sin disipación ni reflexiones. En este modelo, la energía fluye a velocidad constante sin atenuación, manteniendo su forma y su potencia transportada invariantes a lo largo de toda la trayectoria.

Para una cuerda vibrante ideal, este modelo asume tensión uniforme, densidad lineal constante y oscilaciones de [[amplitud]] suficientemente pequeña para que la aproximación lineal sea exacta. La energía cinética y potencial se intercambian perfectamente en cada elemento del medio, sin pérdidas por fricción interna ni radiación hacia otros grados de libertad.

En ondas electromagnéticas, el modelo ideal corresponde a ondas planas en el vacío o en medios transparentes sin absorción, donde los campos E y B se propagan conservando su energía por unidad de área indefinidamente.

## Hipótesis

- **Medio continuo**: El medio se trata como continuo, válido cuando la longitud de onda es mucho mayor que la escala microscópica del material (separación interatómica o escala de granularidad).

- **Pequeñas oscilaciones**: La [[amplitud]] A es mucho menor que la longitud de onda λ (típicamente A < λ/20), asegurando que las pendientes permanezcan pequeñas y la tensión sea aproximadamente constante.

- **Linealidad**: Las fuerzas restauradoras son proporcionales al desplazamiento, sin términos de orden superior ni histéresis.

- **Sin disipación**: No hay fricción interna, viscosidad, ni mecanismos de pérdida energética. La energía total del sistema se conserva estrictamente.

- **Medio infinito o semiinfinito**: No hay bordes que causen reflexiones ni interferencias estacionarias. La onda se propaga libremente sin interacciones de contorno.

- **Isotropía**: Las propiedades del medio son iguales en todas las direcciones, asegurando que la velocidad de propagación no dependa de la dirección.

## Dominio de validez cuantitativo

El modelo lineal es válido cuando la [[amplitud]] satisface A < 0.05λ, manteniendo el error relativo por debajo del 1% en la velocidad de propagación. Para A entre 0.05λ y 0.2λ, el modelo sigue siendo útil pero con errores sistemáticos del 5-10%.

La aproximación de medio continuo requiere λ > 100 nm para ondas en sólidos cristalinos, equivalente a frecuencias por debajo de 10¹³ Hz en materiales típicos. Para longitudes de onda menores, la dispersión atómica modifica significativamente la relación de dispersión.

La hipótesis de no disipación es razonable cuando la distancia de propagación L satisface L << 1/α, donde α es el coeficiente de atenuación del medio. En cuerdas metálicas, α ≈ 10⁻³ m⁻¹ para frecuencias audibles, permitiendo distancias de decenas de metros. En agua del mar, α ≈ 10⁻⁴ m⁻¹ para olas de gravedad, válido para kilómetros.

El régimen de pequeñas oscilaciones falla cuando la velocidad transversal máxidad v_max = ωA se aproxima a la velocidad de propagación v, típicamente cuando v_max > 0.1v. Esto ocurre cuando A > 0.1λ/2π.

## Señales de fallo del modelo

Las siguientes observaciones indican que el modelo ideal está siendo violado:

- **Distorsión de forma**: La onda ya no es sinusoidal pura, mostrando picos agudizados o planos en los máximos. Esto indica que la no linealidad está activa.

- **Atenuación observable**: La [[amplitud]] disminuye apreciablemente con la distancia recorrida, aunque no haya geometría de expansión (como ondas esféricas).

- **Generación de armónicos**: Aparecen componentes de frecuencia múltiple de la fundamental, detectables en el espectro de frecuencias del análisis de Fourier.

- **Dependencia de [[amplitud]] en la velocidad**: La velocidad de propagación varía observablemente con la [[amplitud]] de la onda, típico de ondas de gran [[amplitud]] en agua superficial.

- **Formación de ondas estacionarias no deseadas**: Presencia de nodos y vientres fijos en posiciones inconsistentes con las condiciones de contorno forzadas, indicando reflexiones parásitas.

- **Histéresis**: La relación fuerza-desplazamiento es diferente en carga y descarga, mostrando bucles en gráficos de fase.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido de **ondas no lineales**: cuando la [[amplitud]] supera el 5% de la longitud de onda (A > 0.05λ), el modelo debe incluir términos de orden superior en la tensión y la fuerza restauradora. En este régimen, aparecen efectos como:

- Dependencia de la velocidad de propagación con la [[amplitud]] (ondas más altas viajan más rápido)
- Formación de ondas de choque en medios compresibles
- Soluciones tipo "solitón" que mantienen su forma al propagarse
- Generación de armónicos de orden superior por autointeracción

Para ondas en medios **disipativos**, el modelo extendido introduce un término de pérdida proporcional a la velocidad (amortiguamiento viscoso) o a la deformación (histéresis elastoplástica). La potencia transportada decae exponencialmente P(x) = P₀·exp(-αx), donde α depende de la frecuencia típicamente como α ∝ ω² para bajas frecuencias.

Cuando la longitud de onda es comparable a la escala microscópica del medio, cambiar al modelo de **redes discretas** o **cristalinas**, donde la relación de dispersión ω(k) muestra curvatura significativa desviándose de la linealidad, llegando incluso a bandas prohibidas de frecuencia donde la propagación es imposible.

Para ondas de gran [[amplitud]] en superficies libres (como olas marinas), el modelo de **ondas de Stokes** o teoría del potencial completamente no lineal reemplaza la aproximación lineal, permitiendo describir olas que se acercan al rompimiento.

## Comparación operativa

| Característica | Modelo ideal | Modelo extendido (no lineal + disipativo) |
|---|---|---|
| Precisión | Exacta solo para A << λ | Mejor ajuste a datos reales con amplitudes moderadas |
| Complejidad matemática | Ecuaciones lineales, soluciones analíticas cerradas | Ecuaciones no lineales, requiere métodos numéricos o perturbativos |
| Rango de amplitudes | Válido solo para pequeñas oscilaciones | Aplicable hasta A ≈ 0.3λ antes de rompimiento |
| Pérdida de energía | No modelada | Incluida mediante coeficientes de atenuación empíricos o teóricos |
| Velocidad de propagación | Constante, independiente de [[amplitud]] | Dependiente de [[amplitud]] y frecuencia |
| Generación armónica | Ausente | Presente, con coeficientes predecibles |
| Tiempo de cálculo | Instantáneo | Puede requerir simulaciones extensas |

El modelo ideal es la herramienta de elección para análisis conceptual, diseño preliminar, y situaciones donde las amplitudes están controladas. El modelo extendido es obligatorio para predicción precisa en condiciones de alta intensidad, análisis de fatiga por oscilaciones sostenidas, o diseño de sistemas donde la atenuación es un factor crítico como en comunicaciones de largo alcance o aislamiento de vibraciones.