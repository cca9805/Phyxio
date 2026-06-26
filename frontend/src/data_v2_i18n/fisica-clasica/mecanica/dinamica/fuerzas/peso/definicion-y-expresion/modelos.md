# Modelos físicos: Definicion y expresion

## Modelo ideal

El modelo base combina dos niveles: descripción local de peso mediante [[P]] y [[Pmod]], y descripción gravitatoria por campo casi uniforme con [[gmod]] aproximadamente constante en la zona de estudio.

Este modelo es útil para problemas de aula, laboratorio y diseño preliminar donde la variación espacial de gravedad es pequeña frente al objetivo de precisión.

## Hipótesis

- [[m]] es positiva e invariante respecto al entorno gravitatorio.
- La dirección de [[P]] coincide con la del campo [[g]].
- En el régimen uniforme, [[gmod]] se toma constante en el volumen relevante.
- En el régimen central, el campo se aproxima por simetría esférica usando [[G]], [[M_astro]] y [[r]].

## Dominio de validez cuantitativo

El modelo uniforme se considera suficiente cuando:

- variacion_relativa_g <= 0.02 en el rango espacial del problema,
- error_objetivo_peso >= 0.01 en términos relativos,
- cambios de [[r]] son pequeños frente al valor nominal de referencia,
- no se requiere precisión orbital o geodésica fina.

El modelo central conviene cuando:

- variacion_relativa_g > 0.02,
- el problema compara altitudes o astros distintos,
- la precisión requerida en [[Pmod]] es más exigente que 1 por ciento,
- la variable [[r]] forma parte explícita de la pregunta física.

## Señales de fallo del modelo

Indicadores frecuentes de fallo:

- Resultado de [[Pmod]] inconsistente con órdenes de magnitud del escenario.
- Diferencias sistemáticas entre cálculo y medición en campañas repetidas.
- Incoherencia entre dirección asumida de [[P]] y diagrama de fuerzas.
- Sensibilidad no explicada de [[gmod]] frente a cambios de [[r]].

## Modelo extendido o alternativo

Cuando el esquema uniforme deja de ser suficiente, se adopta el modelo de campo central con [[gmod]] = [[G]]*[[M_astro]]/[[r]]^2, incorporando explícitamente dependencia radial.

Si el contexto exige mayor fidelidad todavía, se consideran extensiones geofísicas o relativistas según escala y precisión.

Transición explícita: cuándo conviene cambiar de modelo. Si variacion_relativa_g supera 2 por ciento o si el error relativo de peso excede el umbral de diseño de forma repetida, conviene pasar del modelo uniforme al modelo central.

Transicion explicita a modelo alternativo: cuando conviene cambiar de modelo es cuando la pregunta física depende de [[r]] de manera no despreciable o cuando la precisión exigida no se cumple bajo hipótesis uniforme. En ese punto, el modelo alternativo central deja de ser opcional y pasa a ser requisito metodológico.

Esta transición explícita a modelo alternativo no es opcional en análisis cuidadoso. Conviene cambiar de modelo cuando la pregunta física deja de ser local y pasa a depender de geometría radial o comparación entre entornos gravitatorios distintos. Mantener el modelo uniforme fuera de su dominio produce resultados coherentes en apariencia, pero frágiles para decisión técnica.

## Comparación operativa

| Aspecto | Modelo uniforme | Modelo central |
|---------|-----------------|----------------|
| Variable gravitatoria | [[gmod]] constante | [[gmod]] dependiente de [[r]] |
| Complejidad | Baja | Media |
| Datos necesarios | [[m]], [[gmod]] | [[m]], [[G]], [[M_astro]], [[r]] |
| Uso típico | Problemas introductorios | Comparación entre altitudes o astros |
| Riesgo principal | Sobresimplificar | Sobrecargar cálculo sin necesidad |

La decisión correcta no es usar siempre el modelo más complejo, sino el más simple que cumpla la precisión requerida.

En informes de ingeniería o docencia avanzada, vale la pena registrar por escrito qué criterio activó la transición. Esa trazabilidad mejora revisión, repetibilidad y aprendizaje, porque separa claramente error algebraico de error de modelo.
