# Modelos físicos: Rozamiento estatico

## Modelo ideal

El modelo ideal del leaf representa un contacto seco en el que dos superficies permanecen adheridas mientras la demanda tangencial no supera un umbral máximo. En ese marco, la fuerza de rozamiento estático [[fs]] no se fija de antemano, sino que se ajusta hasta un máximo [[fsmax]] definido por [[mus]] y [[N]]. El interés del modelo no es describir todos los detalles microscópicos del contacto, sino capturar con precisión suficiente la decisión macroscópica relevante: el sistema sigue en adherencia o entra en deslizamiento.

Este modelo es útil porque reduce una realidad compleja a pocas magnitudes operativas y permite responder preguntas de equilibrio, seguridad y diseño con rapidez. No intenta representar cada rugosidad, cada microdeformación ni cada redistribución local de presión. Acepta esas complejidades como parte de un comportamiento efectivo resumido en [[mus]].

## Hipótesis

Las hipótesis que sostienen el modelo son concretas:

- El contacto puede tratarse como seco y aproximadamente homogéneo.
- El coeficiente [[mus]] permanece casi constante dentro del rango de carga estudiado.
- La fuerza normal [[N]] está bien definida y no oscila de manera brusca.
- Las deformaciones locales son pequeñas y no alteran de forma dominante el reparto de carga.
- El análisis busca decidir el régimen estático, no describir el deslizamiento una vez iniciado.

Si una o varias de estas hipótesis dejan de cumplirse, el modelo puede seguir dando una primera aproximación, pero deja de ser una herramienta fiable para decisiones finas.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen condiciones cuantitativas como las siguientes:

- Variaciones relativas de [[N]] menores que aproximadamente el 10% durante el intervalo de análisis.
- Cambios efectivos de [[mus]] menores que aproximadamente el 10% entre pruebas repetidas con el mismo par de materiales.
- Diferencia clara entre demanda y umbral, por ejemplo un margen \(\frac{[[fsmax]]-[[Ft]]}{[[fsmax]]}\) superior al 5% cuando se quiere afirmar con seguridad que hay adherencia.
- Desajuste entre predicción y medida menor que el 10% en montajes experimentales sencillos.

Cuando el sistema está muy cerca del umbral, un error pequeño en [[mus]] o en [[N]] puede cambiar el diagnóstico del régimen. En ese caso el modelo ideal sigue siendo útil como primera lectura, pero conviene tratar el resultado como marginal y no como una afirmación robusta.

## Señales de fallo del modelo

Hay señales observables de que el modelo simple ya no basta:

- El cálculo predice adherencia, pero el sistema muestra microdeslizamientos repetidos.
- Pequeñas vibraciones cambian la respuesta más de lo que justificaría una variación menor en [[N]].
- El valor efectivo de [[mus]] obtenido en ensayos parecidos fluctúa mucho, por ejemplo más del 15%.
- La superficie se calienta, se desgasta o cambia de textura durante la prueba.

Estas señales no significan que toda la idea de rozamiento estático sea incorrecta. Significan que el parámetro efectivo único ya no resume bien la física real del contacto.

## Modelo extendido o alternativo

Cuando el modelo ideal deja de ser suficiente, el siguiente paso no es abandonar el análisis, sino cambiar de nivel de descripción. Se puede pasar a un modelo con transición estático-dinámica, introducir dependencia temporal del coeficiente, considerar vibraciones, o incluir deformación elástica del contacto.

La transición explícita es esta: si la comparación muestra que [[Ft]] está sistemáticamente a menos del 5% de [[fsmax]], o si ensayos repetidos alternan entre adherencia y microdeslizamiento, conviene cambiar del modelo de umbral estático puro a un modelo extendido que describa el inicio del deslizamiento de manera más fina. Si además hay deslizamiento sostenido, ya no conviene seguir con el leaf actual como modelo principal: hay que pasar al leaf de rozamiento dinámico.

## Comparación operativa

| Aspecto | Modelo ideal estático | Modelo extendido |
|---------|-----------------------|------------------|
| Variable central | Comparación entre [[Ft]] y [[fsmax]] | Evolución del contacto cerca o después del umbral |
| Precisión típica | Buena cuando el margen es claro | Mejor cerca de la transición |
| Complejidad | Baja | Media o alta |
| Cuándo usarlo | Adherencia bien establecida | Regímenes cercanos al deslizamiento o con perturbaciones |
| Decisión clave | ¿Se mantiene el reposo relativo? | ¿Cómo y cuándo se degrada la adherencia? |

La estrategia correcta es usar primero el modelo ideal para decidir el régimen con rapidez. Si el problema queda cerca del borde o la observación contradice el cálculo, entonces conviene cambiar de modelo de forma explícita, no forzar el actual más allá de su rango de confianza.
