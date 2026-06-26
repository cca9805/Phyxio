const e=`\uFEFF# Ejemplo tipo examen

## Enunciado
Una barra rigida de longitud total 0.80 m esta articulada en su extremo izquierdo y se mantiene inicialmente en reposo. En el extremo derecho se aplica una fuerza [[F]] de 240 N con direccion inclinada, formando un angulo [[theta]] de 35 grados con la barra. El problema pide calcular el torque [[tau]] respecto al eje de la articulacion, determinar el signo del giro con un convenio explicito, y verificar el valor obtenido por dos rutas equivalentes. Ademas, se solicita comentar que cambia si se conocen componentes cartesianas [[F_x]] y [[F_y]], y como se conectaria el resultado con la aceleracion angular [[alpha]] cuando se conoce el momento de inercia [[I]].

## Datos
Datos declarados para el caso base:
- Distancia radial [[r]] entre pivote y punto de aplicacion: 0.80 m.
- Fuerza aplicada [[F]]: 240 N.
- Angulo [[theta]] entre [[r]] y [[F]]: 35 grados.
- Eje de analisis: eje perpendicular al plano que pasa por la articulacion.
- Convenio de signos: giro antihorario positivo.

Datos de extension para comprobacion por componentes:
- Coordenada [[x]] del punto de aplicacion respecto al pivote: 0.80 m.
- Coordenada [[y]] del punto de aplicacion respecto al pivote: 0.00 m.
- Componente [[F_x]] de la fuerza en un escenario alternativo: 60 N.
- Componente [[F_y]] de la fuerza en un escenario alternativo: 210 N.

Supuestos del ejercicio:
- Geometria plana.
- Barra idealmente rigida.
- Friccion de articulacion despreciable para el calculo principal.
- Fuerza casi estacionaria durante el intervalo de analisis.

## Definición del sistema
El sistema es la barra mas su apoyo fijo. El entorno aplica la fuerza [[F]] en el extremo libre, mientras que la articulacion aporta reacciones que restringen traslacion del pivote. Para evitar ambiguedad, el origen se fija en la articulacion y el eje positivo de giro se define antihorario. Con esta declaracion previa, el signo de [[tau]] tiene lectura fisica inmediata.

El punto conceptual clave es separar distancia radial [[r]] de brazo de palanca [[b]]. La primera une el eje con el punto de aplicacion; la segunda es la distancia perpendicular desde el eje a la linea de accion de la fuerza. El torque no depende de [[r]] por si sola, sino de la combinacion geometrica que determina [[b]]. Esta distincion evita el error comun de multiplicar fuerza por distancia radial aunque el angulo no sea recto.

## Modelo físico
La relacion base para este leaf es:

{{f:torque_por_angulo}}

La verificacion equivalente por brazo de palanca se hace con:

{{f:torque_brazo}}

Si en vez de angulo se conocen coordenadas y componentes de fuerza, el torque axial se calcula con:

{{f:torque_plano}}

Si luego se quiere evolucion temporal del giro, la relacion dinamica es:

{{f:segunda_ley_rotacional}}

Estas cuatro relaciones pertenecen al mismo marco fisico. No compiten entre si: se elige la mas directa segun los datos disponibles y se usan las otras para validar consistencia o para extender el analisis desde estatica rotacional hacia dinamica.

## Justificación del modelo
El modelo angular es adecuado porque [[r]], [[F]] y [[theta]] estan explicitamente dados. La ruta por [[b]] se usa como control interno de calidad: si ambas rutas convergen, baja la probabilidad de error trigonometrico o de unidades. La formulacion por componentes aparece como alternativa robusta cuando el enunciado entrega [[F_x]] y [[F_y]] en vez de angulo.

La segunda ley rotacional no es necesaria para responder la primera pregunta de torque, pero se incluye porque conecta el mismo resultado con respuesta dinamica real. Esta conexion muestra que el ejemplo no es un ejercicio aislado de sustitucion, sino parte de una cadena de modelado donde [[tau]] actua como causa y [[alpha]] como respuesta, modulada por [[I]].

## Resolución simbólica
Paso 1. Relacion principal por angulo:

{{f:torque_por_angulo}}

Paso 2. Relacion de comprobacion por brazo:

{{f:torque_brazo}}

con [[b]] = [[r]] sen([[theta]]).

Paso 3. Relacion por componentes para escenario alternativo:

{{f:torque_plano}}

Paso 4. Conexion dinamica si se conoce [[I]]:

{{f:segunda_ley_rotacional}}

Paso 5. Criterio de signo: con convenio antihorario positivo, si la fuerza induce giro antihorario entonces [[tau]] mayor que cero; si induce horario, [[tau]] menor que cero.

## Sustitución numérica
Ruta angular:
- [[r]] = 0.80 m
- [[F]] = 240 N
- [[theta]] = 35 grados
- sen(35 grados) aproximado 0.574
- Resultado: [[tau]] aproximado 0.80 por 240 por 0.574, que da aproximadamente 110 N m.

Ruta por brazo:
- [[b]] = [[r]] sen([[theta]]) = 0.80 por 0.574, entonces [[b]] aproximado 0.459 m.
- [[tau]] = [[b]] [[F]] = 0.459 por 240, que da aproximadamente 110 N m.

Ruta por componentes en escenario alternativo:
- [[x]] = 0.80 m, [[y]] = 0.00 m, [[F_x]] = 60 N, [[F_y]] = 210 N.
- [[tau_z]] = [[x]] [[F_y]] menos [[y]] [[F_x]] = 0.80 por 210 menos 0.00 por 60.
- Resultado: [[tau_z]] aproximado 168 N m.

Conexion dinamica con ejemplo de inercia:
- Si [[I]] = 12 kg m2 y [[tau]] = 110 N m, entonces [[alpha]] aproximada 110 entre 12, es decir 9.17 rad por s2.

## Validación dimensional
En la ruta angular y en la ruta por brazo, la dimension final es fuerza por distancia, equivalente a N m. En la ruta por componentes ocurre lo mismo porque coordenadas multiplican componentes de fuerza. En la relacion dinamica, [[alpha]] queda en rad por s2 al dividir torque por [[I]], consistente con una aceleracion angular.

Comprobacion de escala: para fuerzas del orden de cientos de newtons y distancias del orden de medio metro, un torque cercano a cien N m es razonable. Un resultado de miles de N m en este mismo montaje indicaria error de conversion o de geometria.

## Interpretación física
El valor positivo de [[tau]] implica tendencia antihoraria con el convenio elegido. El aspecto fisico mas importante no es solo el numero, sino la dependencia causal: aumentar [[F]] incrementa [[tau]], aumentar [[b]] incrementa [[tau]], y reducir [[theta]] hacia cero reduce fuertemente el efecto rotacional. Esto explica por que dos personas con fuerza similar pueden obtener resultados distintos segun postura y angulo de aplicacion.

La comparacion entre ruta angular y ruta por brazo confirma coherencia interna del modelo. La ruta por componentes muestra ademas que, cuando el problema se expresa en coordenadas, se puede recuperar la misma magnitud rotacional sin recurrir al angulo explicito. Finalmente, la extension dinamica conecta el torque con aceleracion angular real: para un mismo [[tau]], sistemas con mayor [[I]] reaccionan mas lentamente.

# Ejemplo de aplicación real

## Contexto
En mantenimiento industrial, un tecnico debe aflojar un perno con torque resistente estimado de 180 N m. La llave disponible ofrece distancia radial [[r]] de 0.35 m. Por restricciones de espacio, la fuerza no siempre puede aplicarse perpendicularmente. Se comparan dos escenarios: uno casi ideal con [[theta]] cercano a 90 grados y otro de acceso incomodo con [[theta]] de 55 grados. El objetivo es estimar la fuerza minima necesaria y decidir si conviene insistir con esfuerzo humano o cambiar geometria de trabajo.

## Estimación física
Caso casi perpendicular:
- Aproximacion de brazo maximo, [[b]] cercano a [[r]].
- Fuerza minima aproximada 180 dividido 0.35, alrededor de 514 N.

Caso inclinado a 55 grados:
- [[b]] efectivo = [[r]] sen([[theta]]) = 0.35 por sen(55 grados), valor aproximado 0.287 m.
- Fuerza minima aproximada 180 dividido 0.287, alrededor de 628 N.

Lectura cuantitativa:
- Penalizacion geometrica aproximada 114 N adicionales.
- Incremento relativo cercano al 22 por ciento respecto del caso casi perpendicular.
- Si el operario no puede sostener ese incremento de forma segura, la estrategia correcta no es forzar mas, sino rediseñar el acceso.

Si se dispusiera de sensor de fuerzas en dos ejes, las componentes [[F_x]] y [[F_y]] permitirian calcular [[tau_z]] directamente por coordenadas y verificar en tiempo real si el valor util supera el umbral de desbloqueo. Si se modela el transitorio de arranque con inercia efectiva [[I]], la relacion de dinamica rotacional aporta una estimacion de [[alpha]] para anticipar respuesta del sistema al inicio del giro.

## Interpretación
La conclusion operativa es que la geometria gobierna la eficacia. Con la misma herramienta y casi la misma capacidad muscular, pasar de angulo favorable a angulo desfavorable puede volver inviable la tarea. La recomendacion tecnica es priorizar aumento de [[b]] efectivo, mejorar orientacion para acercar [[theta]] a 90 grados, y solo despues evaluar incremento de fuerza.

Tambien hay implicaciones de seguridad: elevar fuerza con mala postura aumenta riesgo de lesion y de deslizamiento de herramienta. Un procedimiento robusto combina calculo rapido de torque requerido, verificacion de limites de herramienta y ajustes de ergonomia. Asi, el concepto de torque deja de ser una cuenta aislada y se vuelve criterio de decision en campo.\r
`;export{e as default};
