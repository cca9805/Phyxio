const e=`# Modelos físicos: Definicion y expresion\r
\r
## Modelo ideal\r
\r
El modelo base combina dos niveles: descripción local de peso mediante [[P]] y [[Pmod]], y descripción gravitatoria por campo casi uniforme con [[gmod]] aproximadamente constante en la zona de estudio.\r
\r
Este modelo es útil para problemas de aula, laboratorio y diseño preliminar donde la variación espacial de gravedad es pequeña frente al objetivo de precisión.\r
\r
## Hipótesis\r
\r
- [[m]] es positiva e invariante respecto al entorno gravitatorio.\r
- La dirección de [[P]] coincide con la del campo [[g]].\r
- En el régimen uniforme, [[gmod]] se toma constante en el volumen relevante.\r
- En el régimen central, el campo se aproxima por simetría esférica usando [[G]], [[M_astro]] y [[r]].\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo uniforme se considera suficiente cuando:\r
\r
- variacion_relativa_g <= 0.02 en el rango espacial del problema,\r
- error_objetivo_peso >= 0.01 en términos relativos,\r
- cambios de [[r]] son pequeños frente al valor nominal de referencia,\r
- no se requiere precisión orbital o geodésica fina.\r
\r
El modelo central conviene cuando:\r
\r
- variacion_relativa_g > 0.02,\r
- el problema compara altitudes o astros distintos,\r
- la precisión requerida en [[Pmod]] es más exigente que 1 por ciento,\r
- la variable [[r]] forma parte explícita de la pregunta física.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores frecuentes de fallo:\r
\r
- Resultado de [[Pmod]] inconsistente con órdenes de magnitud del escenario.\r
- Diferencias sistemáticas entre cálculo y medición en campañas repetidas.\r
- Incoherencia entre dirección asumida de [[P]] y diagrama de fuerzas.\r
- Sensibilidad no explicada de [[gmod]] frente a cambios de [[r]].\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el esquema uniforme deja de ser suficiente, se adopta el modelo de campo central con [[gmod]] = [[G]]*[[M_astro]]/[[r]]^2, incorporando explícitamente dependencia radial.\r
\r
Si el contexto exige mayor fidelidad todavía, se consideran extensiones geofísicas o relativistas según escala y precisión.\r
\r
Transición explícita: cuándo conviene cambiar de modelo. Si variacion_relativa_g supera 2 por ciento o si el error relativo de peso excede el umbral de diseño de forma repetida, conviene pasar del modelo uniforme al modelo central.\r
\r
Transicion explicita a modelo alternativo: cuando conviene cambiar de modelo es cuando la pregunta física depende de [[r]] de manera no despreciable o cuando la precisión exigida no se cumple bajo hipótesis uniforme. En ese punto, el modelo alternativo central deja de ser opcional y pasa a ser requisito metodológico.\r
\r
Esta transición explícita a modelo alternativo no es opcional en análisis cuidadoso. Conviene cambiar de modelo cuando la pregunta física deja de ser local y pasa a depender de geometría radial o comparación entre entornos gravitatorios distintos. Mantener el modelo uniforme fuera de su dominio produce resultados coherentes en apariencia, pero frágiles para decisión técnica.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo uniforme | Modelo central |\r
|---------|-----------------|----------------|\r
| Variable gravitatoria | [[gmod]] constante | [[gmod]] dependiente de [[r]] |\r
| Complejidad | Baja | Media |\r
| Datos necesarios | [[m]], [[gmod]] | [[m]], [[G]], [[M_astro]], [[r]] |\r
| Uso típico | Problemas introductorios | Comparación entre altitudes o astros |\r
| Riesgo principal | Sobresimplificar | Sobrecargar cálculo sin necesidad |\r
\r
La decisión correcta no es usar siempre el modelo más complejo, sino el más simple que cumpla la precisión requerida.\r
\r
En informes de ingeniería o docencia avanzada, vale la pena registrar por escrito qué criterio activó la transición. Esa trazabilidad mejora revisión, repetibilidad y aprendizaje, porque separa claramente error algebraico de error de modelo.\r
`;export{e as default};
