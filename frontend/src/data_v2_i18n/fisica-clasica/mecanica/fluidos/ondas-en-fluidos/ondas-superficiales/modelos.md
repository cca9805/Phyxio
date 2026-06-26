# Modelos Físicos de Ondas Superficiales

## Modelo ideal
El modelo de referencia es la teoría lineal de Airy para ondas de gravedad en la superficie de un fluido. Describe la propagación de perturbaciones pequeñas en un fluido incompresible, no viscoso e irrotacional, con fondo horizontal y profundidad constante en la región estudiada.

El modelo es útil porque conecta una magnitud observable, la velocidad de fase [[c]], con la gravedad [[g]], la longitud de onda [[lambda]] y la profundidad [[h]]. Su valor didáctico está en que obliga a clasificar el régimen antes de calcular.

## Hipótesis
Para aplicar el modelo se asumen estas condiciones:
1. **Amplitud pequeña:** la altura de la ola es pequeña frente a [[lambda]] y [[h]], de modo que la superficie puede tratarse mediante una aproximación lineal.
2. **Fluido ideal:** la viscosidad y la turbulencia no dominan la propagación.
3. **Fondo horizontal:** [[h]] se mantiene aproximadamente constante durante el tramo analizado.
4. **Gravedad dominante:** la tensión superficial solo se desprecia cuando la escala de la onda no es milimétrica.
5. **Flujo irrotacional:** no hay remolinos intensos ni rompiente dentro del dominio de cálculo.

## Dominio de validez cuantitativo
El primer criterio cuantitativo es la profundidad relativa:
- [[h]] / [[lambda]] > 0.5: el fondo puede considerarse irrelevante para la velocidad de fase.
- [[h]] / [[lambda]] < 0.05: la onda se comporta como una perturbación de columna de agua acoplada.
- 0.05 <= [[h]] / [[lambda]] <= 0.5: se debe usar la relación completa porque el fondo influye parcialmente.

El segundo criterio es la pendiente de la ola. Para que el modelo lineal sea fiable, la altura debe ser pequeña comparada con la longitud de onda; como referencia práctica, pendiente < 0.1 mantiene el comportamiento aproximadamente sinusoidal. Si la altura se acerca a la profundidad local, especialmente con altura > 0.8 [[h]], la ola entra en zona de rompiente y el modelo deja de representar el fenómeno.

## Señales de fallo del modelo
- **Crestas puntiagudas o espuma:** indican no linealidad fuerte y posible rompiente.
- **Fondos abruptos o rugosos:** introducen disipación, reflexión y turbulencia que el modelo ideal no recoge.
- **Ondas milimétricas:** la tensión superficial puede ser la fuerza restauradora dominante.
- **Cambios rápidos de profundidad:** obligan a modelar refracción, shoaling y transferencia de energía de forma más detallada.

## Modelo extendido o alternativo
Cuando los criterios anteriores fallan, se emplean modelos de orden superior:
- **Olas de Stokes:** para amplitudes mayores en mar abierto sin rompiente inmediata.
- **Modelos de Boussinesq:** para zonas costeras donde dispersión y no linealidad son comparables.
- **Ecuaciones de aguas poco profundas no lineales:** para tsunamis, inundaciones, bores y propagación con gran acoplamiento vertical.
- **Modelos capilares-gravitatorios:** para ondas muy cortas donde la tensión superficial no puede ignorarse.

## Transición de modelo
Cuando conviene pasar al modelo extendido: si las hipótesis de amplitud pequeña, fondo casi horizontal o gravedad dominante se rompen de forma medible, el cálculo de Airy deja de ser el modelo operativo principal.

Conviene cambiar de modelo cuando la altura de la ola deja de ser pequeña, cuando el número de Ursell indica dominio de la no linealidad, cuando aparece rompiente o cuando el objetivo ya no es solo estimar [[c]], sino estudiar transporte de sedimentos, turbulencia, impacto costero o inundación. En esos casos se debe abandonar Airy y pasar a Stokes, Boussinesq, ecuaciones no lineales de poca profundidad o modelos capilares-gravitatorios según el mecanismo dominante.

## Comparación operativa
Airy ofrece estimaciones rápidas, transparentes y muy útiles para clasificar oleaje y obtener velocidades iniciales. Los modelos extendidos son más costosos, pero capturan la energía real de impacto, la deformación del frente y la disipación. En una resolución didáctica, Airy es el punto de partida; en una predicción costera de riesgo, suele ser solo la primera capa del análisis.
