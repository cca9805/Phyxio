# Ejemplo tipo examen

## Enunciado

Un carro de prueba de masa [[m]] recorre una pista con loop vertical de radio [[r]]. Se pide determinar si el carro mantiene contacto en la cima y, ademas, estimar la fuerza normal en la base para una velocidad de entrada dada. El objetivo no es solo obtener numeros, sino justificar fisicamente el criterio de contacto y la severidad de carga mecanica.

Se conocen las condiciones iniciales: [[m]] igual a 250 kg, [[r]] igual a 12 m, [[g]] igual a 9.8 m/s^2 y velocidad de entrada en la base [[vB]] igual a 28 m/s. Tambien se solicita comparar la velocidad en la cima [[vT]] con su umbral minimo y explicar que papel cumplen [[Frad]] y [[Nn]] en cada punto del loop.

## Datos

- [[m]] = 250 kg
- [[r]] = 12 m
- [[g]] = 9.8 m/s^2
- [[vB]] = 28 m/s
- Condicion de pista ideal sin rozamiento apreciable

Magnitudes de interes en la resolucion:

- [[vT]] para verificar contacto arriba
- [[Nn]] en cima y base
- [[Frad]] para lectura radial de exigencia
- [[ac]] para interpretar curvatura dinamica
- [[E]] para enlazar estados alto y bajo

## Definición del sistema

El sistema es el carro modelado como partícula sobre un loop circular rigido. En la cima del loop, la direccion radial apunta hacia abajo, es decir, hacia el centro del circulo. En la base, la direccion radial apunta hacia arriba, tambien hacia el centro. Esta convencion evita errores de signo cuando se analizan ecuaciones locales.

Fuerzas consideradas en el modelo:

- Peso [[m]] por [[g]], siempre vertical hacia abajo.
- Normal [[Nn]] de la pista, siempre perpendicular a la superficie y radial en los puntos cima/base.

No se incluye friccion para mantener coherencia con el modelo ideal del leaf. Esta simplificacion permite relacionar la condicion de contacto con umbrales cineticos de forma directa.

## Modelo físico

La estructura del modelo usa cinco relaciones nucleares del leaf.

{{f:radial_general}}

{{f:punto_alto}}

{{f:velocidad_minima_alto}}

{{f:punto_bajo}}

{{f:velocidad_minima_bajo}}

El modelo combina dinamica radial local y criterio energetico global. La dinamica local determina [[Nn]] en cada punto. La condicion energetica conecta [[vB]] con [[vT]] para decidir si el sistema llega a la cima con margen de contacto.

## Justificación del modelo

Este modelo es pertinente porque el problema solicita condiciones minimas y lecturas de contacto en un loop ideal. Si se ignorara la ecuacion radial local, se perderia informacion de contacto aunque se conociera la energia. Si se ignorara la conexion energetica, se podria evaluar mal la viabilidad de alcanzar la cima con la velocidad de entrada dada.

La validez depende de suposiciones claras: pista cercana a circular, perdidas por rozamiento pequenas respecto de la energia cinetica principal y ausencia de acoplamientos fuera del plano dominante. En contextos con deformacion de pista o disipacion fuerte, la conclusion deberia corregirse con modelo extendido.

## Resolución simbólica

1. Umbral de contacto en cima:

{{f:velocidad_minima_alto}}

2. Umbral de velocidad de entrada en base para completar loop:

{{f:velocidad_minima_bajo}}

3. Fuerza normal en cima para una [[vT]] conocida:

{{f:punto_alto}}

4. Fuerza normal en base para una [[vB]] conocida:

{{f:punto_bajo}}

5. Lectura radial general de exigencia:

{{f:radial_general}}

La cadena causal que se evaluara es: velocidad de entrada en base -> capacidad de alcanzar cima con suficiente [[vT]] -> signo y magnitud de [[Nn]] en cima -> carga estructural en base.

## Sustitución numérica

Primero calculamos el umbral de cima. Con [[r]] = 12 m y [[g]] = 9.8 m/s^2, la velocidad minima en la cima es aproximadamente 10.84 m/s.

Luego calculamos el umbral de base para completar el loop ideal. Para los mismos [[r]] y [[g]], el valor minimo en base es aproximadamente 24.25 m/s. Como la velocidad de entrada dada [[vB]] = 28 m/s es mayor, el sistema supera el requisito minimo ideal.

Con esa informacion, se estima [[vT]] a partir de conservacion de [[E]] entre base y cima. El resultado aproximado es [[vT]] cercano a 12.5 m/s, mayor que el umbral de cima. Esto sugiere contacto positivo.

Sustituyendo en la ecuacion de cima, la normal [[Nn]] resulta positiva y moderada, no cercana a cero. Por lo tanto, no estamos en borde critico.

Finalmente, en la base, la ecuacion radial da una normal significativamente mayor que el peso. Esa diferencia confirma que la carga mecanica principal del loop aparece abajo, aunque la condicion de seguridad de contacto se decida arriba.

## Validación dimensional

En todas las ecuaciones usadas, la dimension de fuerza coincide con MLT^{-2}. Las velocidades criticas mantienen dimension LT^{-1}. Ademas, los signos son coherentes con la convencion radial definida al inicio.

Chequeos de coherencia:

- [[Nn]] en cima no puede ser negativa si afirmamos contacto.
- [[vT]] debe ser mayor o igual al umbral de cima en regimen de contacto.
- [[vB]] minima debe ser mayor que la de cima por efecto del cambio de altura.
- [[ac]] en base, calculada como [[v]] cuadrado sobre [[r]], debe superar la de cima si [[vB]] es mayor que [[vT]].

Los resultados satisfacen estos chequeos, por lo que la resolucion es fisicamente consistente en el marco ideal.

## Interpretación física

La lectura principal es doble. Primera: el contacto en cima depende de margen respecto al umbral critico de velocidad. Segunda: la carga en base puede ser alta incluso cuando la cima no es critica. Esto evita una conclusion ingenua de tipo "si no se despega arriba, todo esta bien".

Desde diseño, el parametro [[r]] juega un papel mixto: al aumentar [[r]], suben las velocidades criticas, pero tambien puede cambiar la distribucion de carga dependiendo de la velocidad operacional elegida. Desde operacion, la variable mas sensible suele ser [[vB]], porque pequenas variaciones de entrada se amplifican en la dinamica del loop.

En resumen, este ejemplo muestra continuidad con la teoria del leaf: [[Frad]] expresa exigencia, [[Nn]] expresa viabilidad de contacto, [[E]] conecta estados y [[ac]] interpreta curvatura local. Sin esa lectura integrada, el numero final queda incompleto.

# Ejemplo de aplicación real

## Contexto

Una instalacion de entrenamiento de dinamica vehicular usa un modulo de loop para estudiar seguridad y confort. El equipo de operacion necesita definir una ventana de velocidades de entrada para cumplir dos metas simultaneas: evitar perdida de contacto en cima y limitar cargas en base para no sobrepasar tolerancias estructurales.

En pruebas preliminares, se observa que al reducir ligeramente la velocidad de entrada se acerca la condicion de despegue arriba, mientras que al subirla en exceso aparecen picos de normal en base que elevan fatiga de componentes. El problema es tipico de ingenieria: no basta hallar un minimo, hay que definir margen operativo.

## Estimación física

La estrategia rapida es calcular primero el umbral ideal de [[vB]] mediante la relacion de velocidad minima en base y luego aplicar un factor de margen operativo. Si la incertidumbre experimental equivale, por ejemplo, a variaciones de 8% en velocidad efectiva por dispersion de condiciones, una politica razonable es fijar un margen por encima del umbral critico y verificar que la normal en base permanezca dentro de rango admisible.

El analisis usa la ecuacion de punto bajo para traducir esa politica de velocidad a carga normal. Asi se obtiene un intervalo operativo donde la cima conserva contacto robusto y la base no excede cargas de diseno. Aunque esta estimacion es ideal, ya permite decisiones de ensayo seguras antes de pasar a simulaciones de mayor fidelidad.

## Interpretación

La aplicacion real confirma la idea central del leaf: la condicion de contacto no es un dato aislado, sino parte de una negociacion entre seguridad de trayectoria y carga de estructura. El valor pedagogico es claro: quien aprende a leer [[vT]], [[vB]], [[Nn]] y [[Frad]] en conjunto puede transferir el metodo a otros sistemas curvos con criterios limite similares.

Tambien muestra cuando cambiar de modelo. Si las mediciones reales se apartan sistematicamente del ideal, se debe incorporar disipacion y efectos de flexibilidad. Ese cambio no contradice el modelo base; lo extiende cuando el contexto lo exige.
