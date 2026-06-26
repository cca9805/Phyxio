# Ejemplo tipo examen


## Enunciado

Un rayo de luz monocromática de longitud de onda 589 nm en el vacío incide sobre la superficie plana de un bloque de vidrio con un ángulo de 45 grados respecto a la normal. La velocidad de la luz dentro del vidrio es de 1.97 por diez elevado a ocho metros por segundo. Determina el índice de refracción del vidrio, la longitud de onda de la luz dentro del vidrio y el ángulo de refracción del rayo.

## Datos

- Longitud de onda en el vacío: 589 nm (equivalente a 589 por diez elevado a menos nueve metros)
- Ángulo de incidencia: 45 grados respecto a la normal
- Velocidad de la luz en el vidrio: 1.97 por diez elevado a ocho metros por segundo
- Velocidad de la luz en el vacío: 2.998 por diez elevado a ocho metros por segundo

## Definición del sistema

El sistema consta de un rayo que viaja por el vacío (o aire, con índice aproximado de uno) e incide sobre una interfaz plana vacío-vidrio. El plano de incidencia contiene el rayo, la normal a la superficie y el rayo refractado. Las magnitudes relevantes son [[indice_de_refraccion]] (índice del vidrio), [[velocidad_de_la_luz_en_el_vacio]], [[v_medio]], [[lambda_0]], [[lambda_medio]], [[theta_1]] y [[theta_2]].

## Modelo físico

Se aplica el modelo de óptica geométrica con interfaz plana entre un medio de índice uno (vacío) y un medio de índice [[indice_de_refraccion]] (vidrio). La luz es monocromática, el medio es homogéneo e isótropo y la interfaz es ideal. La fórmula de definición del índice de refracción proporciona [[indice_de_refraccion]], la relación de longitudes de onda proporciona [[lambda_medio]] y la ley de Snell proporciona [[theta_2]].

## Justificación del modelo

El modelo es válido porque la luz es monocromática (589 nm, línea D del sodio), la interfaz es plana y el vidrio es homogéneo. La longitud de onda es muy inferior a las dimensiones del bloque, por lo que los efectos de difracción son despreciables. El modelo dejaría de ser válido si la fuente fuera policromática (dispersión) o si la superficie fuera rugosa.

## Resolución simbólica

Primero, el índice de refracción se obtiene de la definición:

{{f:definicion_indice}}

A continuación, la longitud de onda en el medio se calcula con la relación:

{{f:longitud_onda_medio}}

Finalmente, el ángulo de refracción se obtiene aplicando la ley de Snell:

{{f:snell_refraccion}}

La secuencia completa permite obtener las tres magnitudes pedidas de forma encadenada: primero [[indice_de_refraccion]], luego [[lambda_medio]] y finalmente [[theta_2]].

## Sustitución numérica

Para el índice: dividir 2.998 por diez elevado a ocho entre 1.97 por diez elevado a ocho da aproximadamente 1.522. Por tanto [[indice_de_refraccion]] ≈ 1.522.

Para la longitud de onda en el medio: dividir 589 nm entre 1.522 da aproximadamente 387 nm. Por tanto [[lambda_medio]] ≈ 387 nm.

Para el ángulo de refracción: el seno de 45 grados es aproximadamente 0.7071; dividir por 1.522 da aproximadamente 0.4648; el arco seno de 0.4648 es aproximadamente 27.7 grados. Por tanto [[theta_2]] ≈ 27.7 grados.

## Validación dimensional

- Unidades del índice: (m/s) dividido entre (m/s) resulta adimensional `[1]` ✓
- Unidades de la longitud de onda: metros divididos entre un adimensional resulta metros `[L]` ✓
- Unidades del ángulo: el arco seno de un adimensional da un ángulo en radianes (o equivalentemente en grados) `[1]` ✓

El desglose dimensional: `[L T⁻¹] / [L T⁻¹]` se simplifica a `[1]` para el índice, confirmando la coherencia.

## Interpretación física

El índice de refracción de 1.522 indica que la luz viaja un 52 % más lenta en el vidrio que en el vacío. Este valor es consistente con vidrios ópticos tipo crown, ampliamente utilizados en lentes. Si el índice fuera significativamente mayor (por ejemplo, 1.9), estaríamos ante un vidrio flint o un material de alta densidad óptica, y la desviación angular sería aún mayor.

La longitud de onda se reduce de 589 nm a 387 nm dentro del vidrio. Aunque la onda se "comprime", el ojo humano sigue percibiendo el color amarillo porque la frecuencia no cambia. Esta compresión de la longitud de onda tiene consecuencias prácticas en el diseño de recubrimientos antirreflectantes, cuyo espesor debe ser un cuarto de la longitud de onda en el medio, no en el vacío.

El ángulo de refracción de 27.7 grados, menor que los 45 grados de incidencia, confirma que el rayo se acerca a la normal al entrar en un medio de mayor índice. Si aumentáramos [[theta_1]] hasta el ángulo crítico (calculado como el arco seno de la inversa de [[indice_de_refraccion]], aproximadamente 41.1 grados desde dentro del vidrio), observaríamos reflexión total interna. Este fenómeno delimita la frontera del modelo: más allá del ángulo crítico no existe rayo refractado.

# Ejemplo de aplicación real


## Contexto

Un técnico de telecomunicaciones debe verificar que una fibra óptica de sílice dopada conduce correctamente la señal láser infrarroja de 1550 nm. La fibra tiene un núcleo con índice [[indice_de_refraccion]] de 1.468 y un revestimiento con índice menor. El técnico necesita estimar la velocidad de propagación de la señal y la longitud de onda de la luz dentro del núcleo para comprobar que las condiciones de interferencia constructiva se cumplen en la guía de ondas.

## Estimación física

Dividir [[velocidad_de_la_luz_en_el_vacio]] (2.998 por diez elevado a ocho metros por segundo) entre [[indice_de_refraccion]] de 1.468 da una velocidad en el núcleo de aproximadamente 2.042 por diez elevado a ocho metros por segundo. Por tanto [[v_medio]] ≈ 2.042 por diez elevado a ocho m/s.

La longitud de onda dentro del núcleo resulta de dividir 1550 nm entre 1.468, obteniendo aproximadamente 1056 nm. Por tanto [[lambda_medio]] ≈ 1056 nm.

El resultado indica que la onda se comprime significativamente dentro de la fibra. Esta longitud de onda interna es la que determina las condiciones de interferencia en el modo de propagación de la guía, y permite al técnico verificar que la fibra trabaja en el régimen monomodo correcto para esa longitud de onda.

## Interpretación

La velocidad de la señal en la fibra (aproximadamente dos tercios de [[velocidad_de_la_luz_en_el_vacio]]) implica una latencia de unos 4.9 microsegundos por kilómetro de fibra. Para una conexión transatlántica de 6000 km, la latencia mínima teórica por propagación sería de unos 29 milisegundos, dato crucial para aplicaciones de alta frecuencia en mercados financieros.

La longitud de onda interna de 1056 nm fija el espesor mínimo del núcleo para que la fibra sea monomodo: si el diámetro del núcleo es demasiado grande en comparación con [[lambda_medio]], aparecen múltiples modos de propagación que degradan la señal. Este cálculo sencillo muestra cómo el índice de refracción del material determina tanto la velocidad de la información como la geometría necesaria del dispositivo.