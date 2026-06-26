const e=`# Modelos: Introducción a ondas en sólidos

## Modelo ideal

El modelo ideal de propagación de ondas en sólidos asume un medio infinito, homogéneo, isótropo y linealmente elástico. En este régimen, las ondas longitudinales y transversales se propagan independientemente con velocidades constantes que dependen únicamente de las constantes elásticas y la densidad del material. No hay dispersión, atenuación ni conversión de modos.

## Hipótesis

- El sólido es linealmente elástico: la relación tensión-deformación es proporcional (ley de Hooke generalizada). Si se viola, aparecen efectos no lineales y generación de armónicos.
- El medio es homogéneo: las propiedades [[E_young]], [[G_mod]] y [[rho]] son uniformes en todo el volumen. Si hay gradientes, la velocidad varía con la posición.
- El medio es isótropo: las propiedades elásticas no dependen de la dirección. En materiales anisótropos la velocidad depende del ángulo de propagación.
- La onda es plana: el frente de onda es uniforme en la sección transversal. Esto requiere que [[lambda]] sea mucho mayor que las dimensiones transversales de la pieza.
- No hay disipación: la amplitud no decrece con la distancia. En materiales reales siempre hay atenuación por absorción interna y dispersión en fronteras de grano.

## Dominio de validez cuantitativo

El modelo es válido cuando la longitud de onda [[lambda]] es al menos 5 veces mayor que la dimensión transversal mayor de la pieza. Para una barra de diámetro d, el criterio es que la frecuencia sea inferior a [[v_fase]] dividida entre cinco veces el diámetro. Para metales con velocidades típicas de 5000 m/s y diámetros de 20 mm, el límite es de unos 50 kHz. Por debajo, el error del modelo de onda plana es inferior al 5%.

Para frecuencias superiores aparecen modos guiados cuya velocidad depende de la frecuencia y de la geometría exacta.

## Señales de fallo del modelo

- La velocidad medida varía con la frecuencia: indica dispersión geométrica (el modelo de onda plana ya no vale).
- Se detectan múltiples llegadas en la misma dirección: hay conversión de modos o reflexiones no previstas.
- La amplitud decrece más rápido que la inversa de la distancia: hay atenuación significativa no modelada.
- Los resultados teóricos no coinciden con mediciones en piezas pequeñas a frecuencias altas: los modos guiados dominan.

## Modelo extendido o alternativo

El modelo extendido introduce la viscoelasticidad (módulo complejo) para capturar la atenuación y la dispersión. El módulo de Young se sustituye por un módulo complejo cuya parte real controla la velocidad y cuya parte imaginaria controla la atenuación. Además, para geometrías finitas se usan modelos de guía de ondas: Pochhammer-Chree para barras cilíndricas y Lamb para placas.

Cuando conviene cambiar a modelo extendido: la transición es necesaria cuando la atenuación medida supera el 5% por longitud de onda, cuando la frecuencia excede el límite de onda plana, o cuando se necesita modelar la dependencia frecuencial de la velocidad en materiales poliméricos o compuestos.

## Comparación operativa

- **Modelo ideal (elástico, homogéneo)**: velocidad constante, independiente de frecuencia. Una sola fórmula algebraica. Útil para estimaciones rápidas y diseños preliminares.
- **Modelo extendido (viscoelástico, guía de ondas)**: velocidad y atenuación dependientes de frecuencia. Requiere solución de ecuaciones trascendentes o numéricas. Necesario para diseño de transductores, inspección ultrasónica de alta frecuencia y análisis de materiales compuestos.
- **Precisión**: el modelo ideal tiene errores menores al 5% cuando las hipótesis se cumplen. El extendido puede alcanzar errores menores al 1% con datos de material correctos.
- **Rango de aplicación**: el ideal sirve para barras delgadas a frecuencias bajas y moderadas; el extendido para cualquier geometría y todo el rango frecuencial.
`;export{e as default};
