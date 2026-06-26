const e=`# Ejemplo tipo examen

## Enunciado

Un haz de luz llega a un espejo plano formando 35 grados con la normal. La intensidad local del haz justo antes de tocar el espejo es 120 W/m². El espejo real devuelve el 85 % de esa intensidad y absorbe o transmite el resto.

Determina la dirección del rayo reflejado, estima la intensidad reflejada y explica por qué la dirección y la cantidad de energía reflejada son dos lecturas físicas distintas.

## Datos

- Ángulo de incidencia respecto a la normal: 35 grados.
- Intensidad incidente local: 120 W/m².
- Reflectancia del espejo: 0.85.
- Frontera plana y pulida.
- Medio incidente: aire.

## Definición del sistema

El sistema es el punto de incidencia sobre el espejo y los dos rayos asociados: el incidente y el reflejado. La normal local se dibuja perpendicular al espejo y sirve como referencia angular para [[theta_i]] y [[theta_r]].

La intensidad que llega es [[I_incidente]]. La fracción devuelta por el material se resume con [[R_reflectancia]], y el resultado energético observable es [[I_reflejada]].

## Modelo físico

Se usa el modelo de reflexión especular porque el espejo es plano y pulido frente a la longitud de onda visible. Esto permite predecir una única dirección reflejada mediante [[theta_r]].

Para la energía, se usa un modelo de frontera pasiva con reflectancia efectiva. La reflectancia no cambia la dirección del rayo en este problema; solo escala la intensidad que vuelve.

## Justificación del modelo

La ley angular vale porque la frontera tiene una normal bien definida y la superficie es lisa a escala óptica. Si el espejo estuviera rayado o fuera mate, el haz se dispersaría en muchas direcciones y un solo [[theta_r]] no bastaría.

La relación energética vale porque el dato de reflectancia se da como fracción efectiva. Dejaría de valer si el espejo tuviera ganancia, si la reflectancia dependiera fuertemente de la polarización o si el haz incidiera sobre una capa multicapa con interferencias internas dominantes.

## Resolución simbólica

La dirección reflejada se obtiene con:

{{f:ley_reflexion}}

Esta relación se aplica solo después de confirmar que [[theta_i]] está medido desde la normal. Si el ángulo estuviera dado desde la superficie, habría que cambiar la referencia antes de usar la ley.

La intensidad reflejada se estima con:

{{f:intensidad_reflejada}}

La magnitud [[R_reflectancia]] actúa como fracción de [[I_incidente]]. En una frontera pasiva, no debe interpretarse como un porcentaje entero ni como una cantidad con unidades.

## Sustitución numérica

Como el ángulo dado ya está medido respecto a la normal, [[theta_r]] toma el mismo valor angular que [[theta_i]]. Por tanto, el rayo reflejado forma 35 grados con la normal por el otro lado del eje normal.

Para la intensidad, tomar 85 % como fracción da [[R_reflectancia]] de 0.85. Multiplicar 120 W/m² por 0.85 da 102 W/m². Por tanto [[I_reflejada]] es aproximadamente 102 W/m².

## Validación dimensional

Los ángulos [[theta_i]] y [[theta_r]] son adimensionales, aunque se expresen en grados o radianes. La ley geométrica compara dos aberturas angulares medidas con la misma referencia.

La reflectancia [[R_reflectancia]] también es adimensional. Al multiplicarla por [[I_incidente]], la intensidad reflejada conserva la dimensión \`[M T⁻³]\`, propia de W/m².

## Interpretación física

El rayo reflejado tiene una dirección simétrica respecto a la normal. Si alguien midiera 35 grados desde la superficie, la predicción sería incorrecta porque estaría usando el ángulo complementario.

El espejo no devuelve toda la energía: devuelve una fracción alta, pero no total. La dirección de [[theta_r]] queda fijada por la geometría, mientras que [[I_reflejada]] depende de la propiedad material [[R_reflectancia]].

Si [[R_reflectancia]] bajara a 0.20, el rayo seguiría saliendo con la misma dirección angular, pero su intensidad sería mucho menor. Esto demuestra que geometría y energía deben resolverse como pasos separados.

# Ejemplo de aplicación real

## Contexto

En un auditorio, una pared lateral plana produce una reflexión temprana del sonido de un altavoz. El técnico quiere saber si esa reflexión llegará hacia una zona concreta de asientos y si será suficientemente intensa para afectar la claridad.

La pared se aproxima como superficie lisa para sonidos medios, y el ángulo se mide desde la normal de la pared. La reflexión puede ser geométricamente predecible aunque el material absorba parte de la energía sonora.

## Estimación física

Supón que el sonido llega con un ángulo de 40 grados respecto a la normal. La onda reflejada saldrá también con una abertura de 40 grados por el lado simétrico. Si la intensidad incidente local sobre la pared es 0.50 W/m² y el acabado devuelve alrededor de 30 %, la intensidad reflejada estimada es 0.15 W/m².

Esta cantidad no dice por sí sola qué oye cada persona, porque el sonido reflejado aún se debilita al propagarse hasta los asientos. Aun así, la estimación permite decidir si conviene añadir material absorbente o cambiar la orientación del altavoz.

## Interpretación

La aplicación muestra que la ley de reflexión no es solo óptica. En acústica, la misma geometría predice trayectorias de ecos y primeras reflexiones, mientras que [[R_reflectancia]] controla si esas trayectorias son audibles.

El técnico debe revisar dos salidas: dirección e intensidad. Si la dirección apunta a la audiencia y [[I_reflejada]] sigue siendo alta, la reflexión puede mejorar apoyo sonoro o degradar inteligibilidad según el retardo.
`;export{e as default};
