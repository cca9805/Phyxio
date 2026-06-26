const e=`# Aplicaciones de la ley de Ampere

## 1. Diseño de solenoides de laboratorio

Los solenoides se usan para generar campos magneticos controlados en practicas, sensores y calibraciones. La ley de Ampere permite estimar [[B_sol]] a partir de [[n]] e [[I]] sin sumar la contribucion de cada espira. El diseño se centra en lograr un campo interior suficientemente uniforme.

La variable de diseño no es solo la corriente. Aumentar [[n]] puede elevar el campo sin exigir una fuente mas intensa, pero tambien aumenta longitud de hilo, resistencia y calentamiento.

En una practica real se mide el campo con una sonda Hall en varios puntos del eje. Si los valores centrales son parecidos y caen cerca de los extremos, el resultado confirma que el modelo de solenoide largo describe solo la zona util. La ley de Ampere no sustituye la medicion, pero permite anticipar el rango esperado antes de construir la bobina.

Variable dominante: [[B_sol]] fija el campo util en la region central.
Límite de validez: el modelo falla cerca de los extremos, en solenoides cortos o con nucleos magneticos no lineales.

## 2. Estimacion de campo alrededor de cables de potencia

En instalaciones electricas, la ley de Ampere da una primera estimacion del campo alrededor de conductores largos. Si se conoce [[I]] y la distancia [[r]], se obtiene el orden de magnitud de [[B]] cerca del cable.

Esta lectura es util para separar preocupaciones reales de exageraciones. Un cable domestico produce campos pequeños a distancias habituales, pero conductores industriales de alta corriente pueden exigir separacion, apantallamiento o disposicion geometrica adecuada.

Tambien sirve para comparar configuraciones. Dos conductores paralelos con corrientes opuestas reducen el campo lejano porque la corriente neta encerrada por curvas grandes puede compensarse. Por eso el retorno de corriente debe trazarse cerca del conductor de ida en sistemas sensibles.

Variable dominante: [[r]] controla la reduccion espacial del campo de un hilo largo.
Límite de validez: el modelo deja de ser adecuado con cables cercanos entre si, conductores finitos o corrientes alternas de alta frecuencia.

## 3. Bobinas de Helmholtz y calibracion magnetica

Aunque una bobina de Helmholtz no se resuelve directamente con la forma simple de Ampere, la ley ayuda a interpretar por que la corriente encerrada organiza el campo. En calibracion, se busca una region central donde [[B]] sea conocido y estable.

Ampere proporciona el lenguaje de circulacion y fuente. Luego se combinan modelos geometricos mas detallados para obtener uniformidad. La idea central sigue siendo que la corriente y la simetria determinan el campo util.

En una calibracion fina, la ley ayuda a interpretar desviaciones: si la corriente es estable pero el campo medido cambia al mover la sonda, el problema no esta en [[I_enc]], sino en la geometria real de la bobina o en la posicion de medida.

Variable dominante: [[I_enc]] organiza la fuente magnetica neta que debe calibrarse.
Límite de validez: la estimacion requiere modelos adicionales si la geometria no permite una curva amperiana simple.

## 4. Diagnostico de transformadores y electroimanes

En nucleos ferromagneticos, la circulacion magnetica se relaciona con la corriente de excitacion. Aunque el material modifica la permeabilidad, la ley de Ampere sigue guiando la lectura de cuanta corriente magnetizante se necesita para sostener el flujo.

En electroimanes, aumentar corriente eleva campo hasta que el nucleo se acerca a saturacion. A partir de ahi, mas corriente produce menos ganancia de campo y mas calentamiento. Ampere da la estructura de la fuente; el material fija la respuesta.

Esta separacion es importante en mantenimiento. Una corriente magnetizante anormalmente alta puede indicar entrehierros, laminaciones dañadas o saturacion. La ley orienta la pregunta de diagnostico: cuanta excitacion se aplica y que respuesta magnetica entrega el circuito.

Variable dominante: [[I_enc]] mide la excitacion magnetizante aplicada al circuito magnetico.
Límite de validez: en materiales reales se requiere incluir permeabilidad relativa, histeresis y saturacion.

## 5. Compatibilidad electromagnetica en equipos

El trazado de corrientes en placas y cables puede crear campos magneticos que acoplan ruido a sensores cercanos. La ley de Ampere ayuda a entender por que lazos de corriente grandes producen mayor circulacion magnetica alrededor del circuito.

Reducir el area del lazo, acercar conductor de ida y retorno, o trenzar pares disminuye la corriente neta encerrada por curvas externas. Asi se reducen campos no deseados y emisiones electromagneticas.

En placas electronicas, esta idea se traduce en planos de retorno continuos y pistas cortas. Si el retorno se aleja, una curva externa encierra mas corriente efectiva y aumenta la circulacion magnetica. Ampere proporciona una explicacion fisica sencilla para reglas de diseño que a menudo se aprenden como recetas.

Tambien ayuda a evaluar cables de alimentacion en instrumentos de precision. Si ida y retorno quedan separados, el campo puede inducir errores en magnetometros o sensores de corriente cercanos. Reorganizar el cableado reduce [[C_B]] externa sin cambiar la potencia del equipo.

Variable dominante: [[C_B]] indica la circulacion magnetica asociada a corrientes de retorno mal guiadas.
Límite de validez: a frecuencias altas se necesitan modelos de onda, capacitancias parasitas y distribucion espacial de corriente.
`;export{e as default};
