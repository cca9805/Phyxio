const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de [[m]] = 4.0 kg esta dentro de un vagon que acelera horizontalmente. El observador interno usa un marco con [[a_marco]] constante hacia la derecha. Se pide calcular la fuerza ficticia [[F_ficticia]], escribir el balance dinamico para obtener [[a_rel]] y discutir que cambia cuando el sistema entra en una fase de giro con [[omega]] no nula.\r
\r
En una segunda parte se analiza un caso real de plataforma rotante con movimiento relativo [[v_rel]] para evaluar la aparicion conjunta de [[F_centrifuga]] y [[F_coriolis]].\r
\r
## Datos\r
\r
- [[m]] = 4.0 kg.\r
- [[a_marco]] = 1.5 m/s^2.\r
- Fuerza real horizontal medida en el objeto, componente principal de [[F_real]] = 10.0 N.\r
- Ventana temporal de analisis = 3.0 s.\r
\r
Fase rotante:\r
\r
- [[omega]] = 2.0 rad/s.\r
- [[r]] = 0.80 m.\r
- [[v_rel]] = 1.2 m/s.\r
\r
Umbral de decision de modelo: error_relativo 10 por ciento.\r
\r
## Definicion del sistema\r
\r
Marco S: referencia inercial externa usada para diagnostico.\r
\r
Marco S': referencia ligada al vagon y luego a la plataforma rotante. En S' se define [[system_classification]] como no inercial cuando [[a_marco]] o [[omega]] son significativos.\r
\r
Magnitudes de interes:\r
\r
[[F_real]], [[F_ficticia]], [[a_rel]], [[a_marco]], [[omega]], [[r]], [[v_rel]], [[F_centrifuga]], [[F_coriolis]].\r
\r
## Modelo fisico\r
\r
Se aplica dinamica newtoniana con correcciones inerciales dentro de S'. El flujo de ecuaciones es: clasificar marco, construir fuerza ficticia traslacional, resolver balance dinamico y agregar terminos rotacionales cuando el marco gira.\r
\r
Anclaje explicito al leaf: el modelo conecta [[a_marco]] con [[F_ficticia]], combina [[F_real]] con la correccion inercial para interpretar [[a_rel]], y activa [[F_centrifuga]] y [[F_coriolis]] cuando [[omega]] y [[v_rel]] dejan de ser despreciables.\r
\r
## Justificacion del modelo\r
\r
La seleccion del modelo es fisicamente explicita:\r
\r
1. [[a_marco]] es distinta de cero y suficientemente grande para no tratar S' como inercial.\r
2. Durante la fase lineal no hay rotacion, por lo que solo entra [[F_ficticia]] traslacional.\r
3. Durante la fase rotante, [[omega]] y [[v_rel]] son no nulos, por lo que deben incluirse [[F_centrifuga]] y [[F_coriolis]].\r
\r
Criterio de rechazo:\r
\r
- Si la prediccion de [[a_rel]] difiere mas de 10 por ciento de la observacion repetida, hay que ampliar modelo (friccion, elasticidad o geometria 3D).\r
\r
## Resolucion simbolica\r
\r
{{f:criterio_no_inercial}}\r
\r
{{f:fuerza_ficticia_traslacion}}\r
\r
{{f:dinamica_en_no_inercial}}\r
\r
{{f:fuerza_centrifuga}}\r
\r
{{f:fuerza_coriolis}}\r
\r
Lectura simbolica del proceso:\r
\r
1. El criterio confirma que S' es no inercial.\r
2. La contribucion traslacional genera [[F_ficticia]] opuesta a [[a_marco]].\r
3. El balance [[F_real]] mas terminos ficticios determina [[a_rel]].\r
4. En fase rotante se agregan componentes por [[F_centrifuga]] y [[F_coriolis]].\r
\r
## Sustitucion numerica\r
\r
Fase de traslacion acelerada:\r
\r
1. Magnitud de fuerza ficticia traslacional:\r
\r
- [[F_ficticia]] = [[m]] por [[a_marco]] = 4.0 por 1.5 = 6.0 N en sentido opuesto a [[a_marco]].\r
\r
2. Balance horizontal efectivo en S':\r
\r
- Fuerza neta efectiva aproximada: cuatro newton en el eje de analisis tras combinar aporte real y ficticio.\r
\r
3. Aceleracion relativa estimada:\r
\r
- [[a_rel]] aproximada: un metro por segundo cuadrado en el mismo eje.\r
\r
Fase rotante:\r
\r
4. Termino centrifugo escalar de referencia:\r
\r
- Valor base asociado a [[F_centrifuga]] = [[m]] por [[omega]] cuadrada por [[r]] = 4.0 por 4.0 por 0.80 = 12.8 N.\r
\r
5. Termino Coriolis escalar de referencia:\r
\r
- Valor base asociado a [[F_coriolis]] = 2 por [[m]] por [[omega]] por [[v_rel]] = 2 por 4.0 por 2.0 por 1.2 = 19.2 N.\r
\r
Estos valores indican que, en la fase rotante, los terminos inerciales pueden superar en magnitud a la fuerza real horizontal inicial, de modo que ignorarlos seria un error mayor de regimen.\r
\r
## Validacion dimensional\r
\r
Chequeos de unidades:\r
\r
- [[a_marco]] y [[a_rel]] en m/s^2.\r
- [[omega]] en rad/s.\r
- [[r]] en m.\r
- [[v_rel]] en m/s.\r
- [[F_real]], [[F_ficticia]], [[F_centrifuga]], [[F_coriolis]] en N.\r
\r
Coherencia:\r
\r
1. [[m]] por [[a_marco]] produce unidad de fuerza.\r
2. [[omega]] cuadrada por [[r]] produce aceleracion radial.\r
3. [[omega]] por [[v_rel]] produce aceleracion lateral caracteristica de Coriolis.\r
\r
Si en mediciones reales aparece discrepancia de 6 por ciento, el modelo sigue util; si la discrepancia sube a 14 por ciento en ventanas consecutivas, se activa cambio de modelo.\r
\r
## Interpretacion fisica\r
\r
La lectura importante no es solo el numero de [[a_rel]], sino la estructura causal. En la fase lineal, el marco acelerado introduce un termino ficticio que reduce o aumenta la aceleracion observada segun sentido relativo. En la fase rotante, la combinacion de [[F_centrifuga]] y [[F_coriolis]] modifica direccion y curvatura de trayectoria observada.\r
\r
Esto implica que un mismo objeto puede mostrar comportamientos distintos para observadores diferentes sin violar leyes fisicas, siempre que se use el inventario correcto de terminos por marco. Si el analista insiste en usar solo [[F_real]] dentro de un marco no inercial, confundira un cambio de referencia con un cambio de fenomeno.\r
\r
En consecuencia, el ejemplo conecta de forma directa con la teoria del leaf: la clasificacion del marco determina que ecuaciones se activan y que terminos dominan.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Una plataforma de pruebas para drones monta una mesa giratoria que simula maniobras de seguimiento. El controlador interno estima aceleraciones y decide compensaciones en tiempo real. Para evitar saturaciones, el equipo necesita saber cuando tratar el marco local como inercial y cuando activar modelo no inercial.\r
\r
## Estimacion fisica\r
\r
Se registran tres escenarios durante 30 s:\r
\r
- Escenario A: [[a_marco]] pequena, [[omega]] casi nula, [[v_rel]] moderada.\r
- Escenario B: [[a_marco]] media y [[omega]] creciente.\r
- Escenario C: [[omega]] alta con [[v_rel]] alta por maniobra evasiva.\r
\r
Lectura cuantitativa de orden de magnitud:\r
\r
1. En A, terminos ficticios quedan por debajo del ruido de sensores. Error relativo en prediccion de [[a_rel]] alrededor de 4 por ciento.\r
2. En B, [[F_ficticia]] y [[F_centrifuga]] suben y el error relativo escala a 9 por ciento, aun dentro del umbral.\r
3. En C, [[F_coriolis]] domina parte lateral y el error relativo alcanza 16 por ciento si no se incluye el termino de Coriolis.\r
\r
Estimacion operacional:\r
\r
- Mantener modelo simplificado en A.\r
- Usar modelo no inercial completo en B y C.\r
\r
Esta estimacion muestra que el criterio de cambio no depende de intuicion subjetiva, sino de magnitudes medibles y residuales verificables.\r
\r
## Interpretacion\r
\r
El hallazgo principal es de regimen: la validez del modelo depende de escala de [[a_marco]], [[omega]] y [[v_rel]], no de preferencias del analista. Cuando estas magnitudes crecen, la interpretacion fisica correcta exige incluir terminos inerciales.\r
\r
Tambien aparece una leccion metodologica: separar siempre las preguntas "que fuerza real actua" y "que correccion de marco necesito". Esa separacion evita diagnosticos falsos de hardware y mejora trazabilidad en control.\r
\r
Si un informe final indica [[a_rel]] anomala en C sin mencionar [[F_coriolis]], la conclusion esta incompleta. En cambio, si el reporte explicita que el aumento lateral coincide con crecimiento de [[omega]] y [[v_rel]], la lectura es consistente con el modelo del leaf y util para decision de ingenieria.\r
`;export{e as default};
