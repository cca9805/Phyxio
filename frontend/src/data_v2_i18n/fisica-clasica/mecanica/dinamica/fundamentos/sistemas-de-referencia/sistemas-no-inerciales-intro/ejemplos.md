# Ejemplo tipo examen

## Enunciado

Un bloque de [[m]] = 4.0 kg esta dentro de un vagon que acelera horizontalmente. El observador interno usa un marco con [[a_marco]] constante hacia la derecha. Se pide calcular la fuerza ficticia [[F_ficticia]], escribir el balance dinamico para obtener [[a_rel]] y discutir que cambia cuando el sistema entra en una fase de giro con [[omega]] no nula.

En una segunda parte se analiza un caso real de plataforma rotante con movimiento relativo [[v_rel]] para evaluar la aparicion conjunta de [[F_centrifuga]] y [[F_coriolis]].

## Datos

- [[m]] = 4.0 kg.
- [[a_marco]] = 1.5 m/s^2.
- Fuerza real horizontal medida en el objeto, componente principal de [[F_real]] = 10.0 N.
- Ventana temporal de analisis = 3.0 s.

Fase rotante:

- [[omega]] = 2.0 rad/s.
- [[r]] = 0.80 m.
- [[v_rel]] = 1.2 m/s.

Umbral de decision de modelo: error_relativo 10 por ciento.

## Definicion del sistema

Marco S: referencia inercial externa usada para diagnostico.

Marco S': referencia ligada al vagon y luego a la plataforma rotante. En S' se define [[system_classification]] como no inercial cuando [[a_marco]] o [[omega]] son significativos.

Magnitudes de interes:

[[F_real]], [[F_ficticia]], [[a_rel]], [[a_marco]], [[omega]], [[r]], [[v_rel]], [[F_centrifuga]], [[F_coriolis]].

## Modelo fisico

Se aplica dinamica newtoniana con correcciones inerciales dentro de S'. El flujo de ecuaciones es: clasificar marco, construir fuerza ficticia traslacional, resolver balance dinamico y agregar terminos rotacionales cuando el marco gira.

Anclaje explicito al leaf: el modelo conecta [[a_marco]] con [[F_ficticia]], combina [[F_real]] con la correccion inercial para interpretar [[a_rel]], y activa [[F_centrifuga]] y [[F_coriolis]] cuando [[omega]] y [[v_rel]] dejan de ser despreciables.

## Justificacion del modelo

La seleccion del modelo es fisicamente explicita:

1. [[a_marco]] es distinta de cero y suficientemente grande para no tratar S' como inercial.
2. Durante la fase lineal no hay rotacion, por lo que solo entra [[F_ficticia]] traslacional.
3. Durante la fase rotante, [[omega]] y [[v_rel]] son no nulos, por lo que deben incluirse [[F_centrifuga]] y [[F_coriolis]].

Criterio de rechazo:

- Si la prediccion de [[a_rel]] difiere mas de 10 por ciento de la observacion repetida, hay que ampliar modelo (friccion, elasticidad o geometria 3D).

## Resolucion simbolica

{{f:criterio_no_inercial}}

{{f:fuerza_ficticia_traslacion}}

{{f:dinamica_en_no_inercial}}

{{f:fuerza_centrifuga}}

{{f:fuerza_coriolis}}

Lectura simbolica del proceso:

1. El criterio confirma que S' es no inercial.
2. La contribucion traslacional genera [[F_ficticia]] opuesta a [[a_marco]].
3. El balance [[F_real]] mas terminos ficticios determina [[a_rel]].
4. En fase rotante se agregan componentes por [[F_centrifuga]] y [[F_coriolis]].

## Sustitucion numerica

Fase de traslacion acelerada:

1. Magnitud de fuerza ficticia traslacional:

- [[F_ficticia]] = [[m]] por [[a_marco]] = 4.0 por 1.5 = 6.0 N en sentido opuesto a [[a_marco]].

2. Balance horizontal efectivo en S':

- Fuerza neta efectiva aproximada: cuatro newton en el eje de analisis tras combinar aporte real y ficticio.

3. Aceleracion relativa estimada:

- [[a_rel]] aproximada: un metro por segundo cuadrado en el mismo eje.

Fase rotante:

4. Termino centrifugo escalar de referencia:

- Valor base asociado a [[F_centrifuga]] = [[m]] por [[omega]] cuadrada por [[r]] = 4.0 por 4.0 por 0.80 = 12.8 N.

5. Termino Coriolis escalar de referencia:

- Valor base asociado a [[F_coriolis]] = 2 por [[m]] por [[omega]] por [[v_rel]] = 2 por 4.0 por 2.0 por 1.2 = 19.2 N.

Estos valores indican que, en la fase rotante, los terminos inerciales pueden superar en magnitud a la fuerza real horizontal inicial, de modo que ignorarlos seria un error mayor de regimen.

## Validacion dimensional

Chequeos de unidades:

- [[a_marco]] y [[a_rel]] en m/s^2.
- [[omega]] en rad/s.
- [[r]] en m.
- [[v_rel]] en m/s.
- [[F_real]], [[F_ficticia]], [[F_centrifuga]], [[F_coriolis]] en N.

Coherencia:

1. [[m]] por [[a_marco]] produce unidad de fuerza.
2. [[omega]] cuadrada por [[r]] produce aceleracion radial.
3. [[omega]] por [[v_rel]] produce aceleracion lateral caracteristica de Coriolis.

Si en mediciones reales aparece discrepancia de 6 por ciento, el modelo sigue util; si la discrepancia sube a 14 por ciento en ventanas consecutivas, se activa cambio de modelo.

## Interpretacion fisica

La lectura importante no es solo el numero de [[a_rel]], sino la estructura causal. En la fase lineal, el marco acelerado introduce un termino ficticio que reduce o aumenta la aceleracion observada segun sentido relativo. En la fase rotante, la combinacion de [[F_centrifuga]] y [[F_coriolis]] modifica direccion y curvatura de trayectoria observada.

Esto implica que un mismo objeto puede mostrar comportamientos distintos para observadores diferentes sin violar leyes fisicas, siempre que se use el inventario correcto de terminos por marco. Si el analista insiste en usar solo [[F_real]] dentro de un marco no inercial, confundira un cambio de referencia con un cambio de fenomeno.

En consecuencia, el ejemplo conecta de forma directa con la teoria del leaf: la clasificacion del marco determina que ecuaciones se activan y que terminos dominan.

# Ejemplo de aplicacion real

## Contexto

Una plataforma de pruebas para drones monta una mesa giratoria que simula maniobras de seguimiento. El controlador interno estima aceleraciones y decide compensaciones en tiempo real. Para evitar saturaciones, el equipo necesita saber cuando tratar el marco local como inercial y cuando activar modelo no inercial.

## Estimacion fisica

Se registran tres escenarios durante 30 s:

- Escenario A: [[a_marco]] pequena, [[omega]] casi nula, [[v_rel]] moderada.
- Escenario B: [[a_marco]] media y [[omega]] creciente.
- Escenario C: [[omega]] alta con [[v_rel]] alta por maniobra evasiva.

Lectura cuantitativa de orden de magnitud:

1. En A, terminos ficticios quedan por debajo del ruido de sensores. Error relativo en prediccion de [[a_rel]] alrededor de 4 por ciento.
2. En B, [[F_ficticia]] y [[F_centrifuga]] suben y el error relativo escala a 9 por ciento, aun dentro del umbral.
3. En C, [[F_coriolis]] domina parte lateral y el error relativo alcanza 16 por ciento si no se incluye el termino de Coriolis.

Estimacion operacional:

- Mantener modelo simplificado en A.
- Usar modelo no inercial completo en B y C.

Esta estimacion muestra que el criterio de cambio no depende de intuicion subjetiva, sino de magnitudes medibles y residuales verificables.

## Interpretacion

El hallazgo principal es de regimen: la validez del modelo depende de escala de [[a_marco]], [[omega]] y [[v_rel]], no de preferencias del analista. Cuando estas magnitudes crecen, la interpretacion fisica correcta exige incluir terminos inerciales.

Tambien aparece una leccion metodologica: separar siempre las preguntas "que fuerza real actua" y "que correccion de marco necesito". Esa separacion evita diagnosticos falsos de hardware y mejora trazabilidad en control.

Si un informe final indica [[a_rel]] anomala en C sin mencionar [[F_coriolis]], la conclusion esta incompleta. En cambio, si el reporte explicita que el aumento lateral coincide con crecimiento de [[omega]] y [[v_rel]], la lectura es consistente con el modelo del leaf y util para decision de ingenieria.
