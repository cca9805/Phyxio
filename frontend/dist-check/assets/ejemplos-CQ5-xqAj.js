const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Una barra rigida de longitud total 0.80 m esta articulada en su extremo izquierdo y [[y]] se mantiene inicialmente en reposo. En el extremo derecho se aplica una fuerza\r
\r
{{f:torque_por_angulo}}\r
\r
 con direccion inclinada, formando un angulo\r
\r
{{f:torque_por_angulo}}\r
\r
con la barra. El problema pide calcular el torque respecto al eje de la articulacion y estimar, de forma cualitativa, si el sentido de giro favorece cerrar o abrir la barra respecto a su posicion inicial. Como verificacion adicional, se solicita resolver por dos rutas: forma angular y forma de brazo de palanca [[b]]. Se asume que la barra esta en un plano, que no hay deformacion apreciable y que la fuerza se aplica de manera estacionaria durante el intervalo analizado.\r
\r
## Datos\r
Datos declarados:\r
- Longitud radial al punto de aplicacion:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
- Fuerza aplicada [[F]]:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
- Angulo entre r y F:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
- Eje de analisis: articulacion izquierda, perpendicular al plano.\r
- Convenio de signos: giro antihorario positivo.\r
\r
Dato derivado util:\r
- Brazo de palanca\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Supuestos:\r
- Geometria plana.\r
- Fuerza constante.\r
- Sin perdidas por friccion en la articulacion para el calculo principal.\r
- Distancias y angulos sin incertidumbre instrumental significativa para este ejercicio.\r
\r
## Definición del sistema\r
Sistema mecanico: barra idealizada como cuerpo rigido con un grado de libertad rotacional alrededor del apoyo izquierdo. El entorno ejerce restricciones que impiden traslacion del eje, pero no impiden el giro. La fuerza externa [[F]] se aplica en el extremo derecho. Para evitar ambiguedad, el origen se fija en el pivote y el eje z se define saliendo del plano. Con este convenio, [[tau]] positivo implica tendencia antihoraria.\r
\r
Se distingue claramente entre distancia radial [[r]] y distancia perpendicular [[b]]. Esta distincion es central porque el efecto rotacional depende de [[b]], no de [[r]] por si sola. En problemas de examen, muchos errores aparecen cuando se multiplica [[F]] por [[r]] sin considerar el angulo.\r
\r
## Modelo físico\r
Modelo seleccionado: torque de fuerza puntual sobre eje fijo en 2D usando la forma angular y la forma de brazo de palanca. La ecuacion principal es\r
\r
{{f:torque_por_angulo}}\r
\r
. Como ruta equivalente de verificacion, se usa\r
\r
{{f:torque_por_angulo}}\r
\r
 con\r
\r
{{f:torque_por_angulo}}\r
\r
. Ambas expresiones son consistentes con la formulacion vectorial para sistemas planos. Para casos en que se conocen componentes [[F_x]] y [[F_y]], se puede aplicar la forma plana para calcular [[tau_z]]. Si se busca la respuesta dinamica, se usa la segunda ley rotacional con [[I]] y [[tau]] para obtener [[alpha]].\r
\r
El modelo ignora deformaciones elasticas, histeresis de material y friccion del pasador. Estas simplificaciones son razonables para un ejercicio academico orientado a mecanica basica, siempre que se expliciten.\r
\r
## Justificación del modelo\r
La eleccion del modelo se justifica por disponibilidad de datos: se conocen [[r]], [[F]] y [[theta]], por lo que la forma angular permite resolver de forma directa. Ademas, el sistema esta restringido a un plano, asi que no se requiere una formulacion completa en 3D para obtener la componente relevante de torque.\r
\r
La ruta por brazo de palanca se incorpora como control interno de calidad. Si ambos metodos arrojan el mismo valor, aumenta la confianza en el resultado y se reduce el riesgo de error de trigonometria o de unidades. Esta practica es recomendable en examenes cuando el tiempo lo permite.\r
\r
## Resolución simbólica\r
Paso 1: escribir ecuacion principal\r
{{f:torque_brazo}}\r
\r
Paso 2: escribir ruta equivalente\r
\r
{{f:torque_por_angulo}}\r
\r
 y despues\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Paso 3: inferir signo\r
Con el convenio dado, si la fuerza tiende a rotar la barra en sentido antihorario, entonces\r
\r
{{f:torque_por_angulo}}\r
\r
. Si la tendencia fuese horaria,\r
\r
{{f:torque_por_angulo}}\r
\r
. El problema describe una configuracion que favorece apertura antihoraria, por lo que se espera signo positivo.\r
\r
Paso 4: identificar la componente formal en el plano cuando se conocen coordenadas:\r
\r
{{f:torque_plano}}\r
\r
. En este problema de geometria sencilla la forma angular es suficiente, pero cuando se conocen [[F_x]] y [[F_y]] esta es la ruta directa para obtener [[tau_z]].\r
\r
Paso 5: si se requiere la respuesta dinamica, aplicar la segunda ley rotacional para obtener la aceleracion angular [[alpha]] dado el momento de inercia [[I]] de la barra:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
.\r
\r
Paso 6: preparar evaluacion numerica con unidades SI coherentes.\r
\r
## Sustitución numérica\r
Calculo por forma angular:\r
{{f:torque_por_angulo}}\r
Usando\r
\r
{{f:torque_por_angulo}}\r
\r
:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
Calculo por brazo de palanca:\r
{{f:torque_brazo}}\r
Entonces:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
La pequena diferencia es redondeo numerico. Resultado consistente:\r
\r
{{f:torque_por_angulo}}\r
\r
, signo positivo con el convenio adoptado.\r
\r
## Validación dimensional\r
En forma angular:\r
\r
{{f:torque_por_angulo}}\r
\r
.\r
\r
En forma de brazo:\r
\r
{{f:torque_brazo}}\r
\r
.\r
\r
Coherencia de unidades confirmada. Tambien se valida rango: para una fuerza de centenas de newtons y brazo efectivo cercano a medio metro, un torque del orden de\r
\r
{{f:torque_por_angulo}}\r
\r
 es razonable. Si hubiera aparecido\r
\r
{{f:torque_por_angulo}}\r
\r
, seria una senal inmediata de conversion incorrecta de longitud o angulo.\r
\r
## Interpretación física\r
El resultado indica una tendencia clara al giro antihorario. Fisicamente, la fuerza esta bien orientada para generar momento, y la combinacion de magnitud de fuerza y brazo efectivo produce un par moderadamente alto para una barra de banco. Si este valor se comparara con limite de articulacion de\r
\r
{{f:torque_brazo}}\r
\r
, la conclusion seria riesgo de sobrecarga. Si el limite fuera\r
\r
{{f:torque_brazo}}\r
\r
, el sistema operaria con margen.\r
\r
La doble resolucion confirma que el modelo esta bien aplicado. La lectura final no es solo "numero correcto", sino "numero coherente con geometria, unidades y sentido de giro".\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
En mantenimiento industrial, un tecnico debe aflojar un perno de gran diametro en una linea de produccion. El procedimiento exige superar un torque de apriete residual cercano a\r
\r
{{f:torque_por_angulo}}\r
\r
. El tecnico dispone de una llave dinamometrica con brazo efectivo\r
\r
{{f:torque_por_angulo}}\r
\r
. Por razones de espacio, no siempre puede aplicar fuerza perpendicular perfecta; en algunas posiciones la accion se realiza con angulos desfavorables que reducen el torque util.\r
\r
La pregunta operativa es estimar que fuerza minima debe aplicar para garantizar desbloqueo en dos escenarios: ideal perpendicular y escenario inclinado con\r
\r
{{f:torque_por_angulo}}\r
\r
respecto al radio equivalente de accion. Ademas se quiere interpretar por que, en campo, dos tecnicos con fuerza similar obtienen resultados distintos segun postura y geometria de acceso.\r
\r
## Estimación física\r
El orden de magnitud de la fuerza requerida se estima a partir de [[tau]] y del brazo efectivo. La escala del esfuerzo cambia segun la geometria de acceso.\r
\r
Escenario 1, perpendicular:\r
\r
{{f:torque_brazo}}\r
\r
.\r
\r
Escenario 2, inclinado:\r
Si la configuracion se modela con la forma angular, el brazo efectivo equivalente es\r
\r
{{f:torque_por_angulo}}\r
\r
, entonces\r
\r
{{f:torque_brazo}}\r
\r
.\r
\r
La diferencia operativa es de unos 120 N adicionales en el escenario inclinado. Si ademas se quiere la aceleracion angular [[alpha]], se aplica la segunda ley rotacional con el momento de inercia [[I]] del conjunto. Las componentes [[F_x]] y [[F_y]] de la fuerza permiten calcular [[tau_z]] con la forma plana cuando la geometria no es sencilla.\r
\r
Ese incremento explica por que una maniobra aparentemente similar puede fallar cuando no se alcanza perpendicularidad suficiente.\r
\r
Analisis de sensibilidad rapido: un error angular de pm5^? alrededor de 55^? cambia sin([[theta]]) y modifica la fuerza requerida en varios puntos porcentuales. Por eso en protocolos de seguridad se recomienda maximizar perpendicularidad y usar extensores adecuados en lugar de compensar solo con esfuerzo muscular.\r
\r
## Interpretación\r
La lectura fisica principal es que la geometria gobierna la eficacia de la fuerza aplicada. No basta con "hacer mas fuerza"; la misma persona puede ser eficaz o ineficaz segun postura, posicion de manos y orientacion de herramienta. En terminos de seguridad, insistir en aplicar mayor fuerza con mala geometria aumenta riesgo de lesion sin garantizar exito.\r
\r
Desde el punto de vista de mantenimiento, el resultado justifica decisiones practicas: usar barra de extension para aumentar brazo efectivo, reposicionar el cuerpo para acercar el angulo a 90^?, y verificar torque con herramienta calibrada en vez de juicio subjetivo. El concepto de torque se traduce asi en productividad, seguridad y repetibilidad del procedimiento.`;export{e as default};
