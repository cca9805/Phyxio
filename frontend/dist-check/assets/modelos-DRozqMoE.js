const e=`# Modelos

## Modelo ideal

El modelo estándar de dilatación térmica de sólidos trata el coeficiente [[alpha]] (y [[beta]] para dilatación volumétrica) como **constantes del material** independientes de la temperatura. Bajo esta hipótesis, la variación de longitud [[DeltaL]] y la variación de volumen [[DeltaV]] son estrictamente lineales con [[DeltaT]]: las gráficas [[DeltaL]] vs [[DeltaT]] y [[DeltaV]] vs [[DeltaT]] son rectas que pasan por el origen.

El modelo asume además que el sólido es **libre de dilatarse** en todas las direcciones sin restricción mecánica externa, que el material es **isótropo** a escala macroscópica (mismas propiedades en todas las direcciones espaciales), y que no se producen cambios de estado durante el proceso. En este marco, el único parámetro termomecánico necesario para describir el comportamiento dimensional es [[alpha]] del material.

## Hipótesis

- **[[alpha]] constante con T**: el coeficiente de dilatación lineal no varía en el rango de temperatura considerado. Esta hipótesis es razonable para variaciones de hasta 200–300 K en la mayoría de metales.

- **Deformaciones pequeñas**: el producto [[alpha]]·[[DeltaT]] es mucho menor que 1, lo que permite despreciar los términos de orden superior en la expansión del volumen. Si esta hipótesis se viola, los términos cuadráticos y cúbicos en [[alpha]]·[[DeltaT]] dejan de ser despreciables.

- **Isotropía del material**: el sólido tiene el mismo [[alpha]] en todas las direcciones espaciales, lo que permite usar un único coeficiente lineal y derivar [[beta]] ≈ 3·[[alpha]] geométricamente. Si la hipótesis se viola (materiales con simetría reducida), cada dirección tiene su propio coeficiente y [[beta]] no es tres veces [[alpha]].

- **Dilatación libre (sin constricción mecánica)**: el sólido no está unido ni embridado a otra estructura que impida su expansión. Si esta hipótesis se viola, aparecen tensiones térmicas internas y la deformación real difiere de la predicha por el modelo libre.

- **Ausencia de cambio de estado**: el proceso de calentamiento o enfriamiento no atraviesa una transición de fase. Si se cruza una transición, la dilatación cesa de ser lineal y la fórmula deja de ser válida.

## Dominio de validez cuantitativo

El modelo lineal con [[alpha]] constante proporciona errores inferiores al 2% para la mayoría de metales cuando [[DeltaT]] < 200 K desde la temperatura ambiente. Para [[DeltaT]] > 300 K o temperaturas superiores al 60% de la temperatura de fusión del material, el error puede superar el 5% y conviene usar valores de [[alpha]] promediados en el intervalo.

La hipótesis de deformaciones pequeñas exige que [[alpha]]·[[DeltaT]] < 0.01 (deformación relativa inferior al 1%). Para [[alpha]] ≈ 12×10⁻⁶ K⁻¹ (acero), esto se satisface para [[DeltaT]] < 833 K, bien dentro del rango habitual. Para materiales con [[alpha]] mayor, como polímeros (100×10⁻⁶ K⁻¹), la hipótesis falla para [[DeltaT]] > 100 K.

La relación [[beta]] ≈ 3·[[alpha]] es exacta al orden lineal para sólidos isótropos y tiene una desviación inferior al 0.1% para metales con [[alpha]]·[[DeltaT]] < 0.001. Para materiales anisótropos o para líquidos, [[beta]] debe determinarse experimentalmente de forma independiente.

## Señales de fallo del modelo

- **[[DeltaL]] calculado negativo con [[DeltaT]] positivo (sin forzar la barra)**: indica que el modelo no aplica por inversión del signo de [[DeltaT]] o por un error de datos; físicamente [[DeltaL]] debe tener el mismo signo que [[DeltaT]] para [[alpha]] positivo.

- **Resultado de [[alpha]] fuera del rango 10⁻⁷ a 10⁻⁴ K⁻¹**: para sólidos reales este rango cubre materiales desde el cuarzo fundido hasta algunos plásticos. Un valor fuera de este rango indica casi siempre un error de unidades o de datos.

- **Curvatura observable en la gráfica [[DeltaL]] vs [[DeltaT]]**: en el modelo ideal la relación es estrictamente lineal. Si los datos experimentales muestran curvatura, [[alpha]] varía con T en ese rango y el modelo debe ser reemplazado por una integral del tipo [[DeltaL]] calculado como la integral de [[alpha]](T)·[[L0]] sobre [[DeltaT]].

- **[[DeltaV]] observado significativamente distinto de 3·[[alpha]]·[[V0]]·[[DeltaT]]**: puede indicar que el material no es isótropo en ese rango, que hay cambio de estado parcial o que el recipiente que se usa para medir el volumen también se dilata de forma significativa.

## Modelo extendido o alternativo

Cuando la variación de temperatura es amplia o se requiere alta precisión, [[alpha]] se trata como función de T (modelo de coeficiente variable). La elongación se calcula entonces mediante la integral:

La variación de longitud en el modelo extendido se obtiene integrando [[alpha]](T) sobre el intervalo desde T inicial hasta T final, multiplicado por [[L0]]. La función [[alpha]](T) puede representarse mediante una expresión polinómica ajustada a datos tabulados del material.

Cuando conviene pasar al modelo extendido: cuando [[DeltaT]] supere los 300 K, cuando la precisión requerida sea inferior al 1%, o cuando se trabaje con materiales cuyo [[alpha]] varía marcadamente con T (como el cobre entre 100 K y 1000 K, donde [[alpha]] varía más de un 30%). Cambiar a este modelo también es necesario cuando se analizan tensiones térmicas en materiales cuya respuesta mecánica no es lineal.

Para materiales anisótropos, el modelo extendido introduce un **tensor de dilatación** con coeficientes distintos por cada dirección cristalográfica. En ingeniería de composites y cristales funcionales, este tensor es la herramienta estándar.

## Comparación operativa

| Criterio | Modelo ideal ([[alpha]] constante) | Modelo extendido ([[alpha]](T)) |
|---|---|---|
| Precisión típica | < 2% para [[DeltaT]] < 200 K | < 0.5% para cualquier rango |
| Complejidad de cálculo | Una multiplicación | Integración numérica o tablas |
| Datos necesarios | Un valor de [[alpha]] | Tabla [[alpha]](T) del material |
| Aplicación principal | Diseño básico y educación | Metrología, ingeniería de precisión |
| Validez en anisótropos | Solo materiales isótropos | Sí, con tensor de dilatación |
`;export{e as default};
