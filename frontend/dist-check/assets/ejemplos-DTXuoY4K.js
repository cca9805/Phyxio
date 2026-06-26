const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un satelite de mantenimiento se separa de una estacion en orbita baja alrededor de un planeta idealmente esferico. En la fase inicial, su modulo de distancia al centro es [[r]] = [[R]] + [[h]], donde [[R]] es el radio planetario y [[h]] la altura orbital. El equipo de mision quiere comparar tres cantidades: el modulo de la fuerza gravitatoria real [[Pmod]], la intensidad local [[gmod]] y la lectura de un sensor de soporte [[Pap]] dentro de una plataforma de prueba acelerada verticalmente en el satelite.\r
\r
Se pide:\r
\r
1. Calcular [[gmod]] con modelo de campo central y compararlo con la aproximacion local.\r
2. Estimar [[Pmod]] para un modulo de masa [[m]] conocido.\r
3. Analizar [[Pap]] cuando el marco de la plataforma tiene aceleracion [[a]] descendente cercana al valor de [[gmod]].\r
4. Interpretar fisicamente por que la tripulacion puede sentir casi ingravidez aunque la gravedad no sea cero.\r
\r
## Datos\r
\r
- [[G]] = 6.67e-11 en SI.\r
- [[M]] = 5.97e24 kg.\r
- [[R]] = 6.37e6 m.\r
- [[h]] = 4.00e5 m.\r
- [[m]] = 80 kg.\r
- Aceleracion del marco en plataforma: [[a]] = -8.4 m/s^2 (signo negativo: misma direccion del campo).\r
\r
Tambien se considera [[g0]] = 9.81 m/s^2 como referencia superficial para comparar orden de magnitud.\r
\r
## Definición del sistema\r
\r
El sistema de interes principal es el cuerpo de masa [[m]] dentro de la plataforma de prueba. El entorno gravitatorio esta determinado por el astro de masa [[M]]. El eje vertical local se define radial hacia afuera. Con ese convenio, la fuerza gravitatoria [[P]] apunta hacia el centro. En el diagrama de cuerpo libre de la plataforma aparecen [[P]], la reaccion [[N]] y el termino inercial asociado al marco acelerado.\r
\r
No se modelan rozamientos internos de la plataforma porque el objetivo es contrastar lectura de soporte frente a peso real. Esto permite separar con claridad [[Pmod]] de [[Pap]].\r
\r
## Modelo físico\r
\r
Para la gravedad se usa modelo central con [[G]], [[M]] y [[r]], ya que [[h]] no es despreciable frente a [[R]] para una comparacion fina. Para la lectura de soporte se usa la relacion de marco acelerado en una dimension vertical. El dominio de validez exige [[r]] > 0, [[m]] > 0 y consistencia de signos en [[a]].\r
\r
## Justificación del modelo\r
\r
La aproximacion de superficie con [[g0]] es util para estimar rapido, pero aqui interesa cuantificar diferencia orbital. Por eso el modelo central es preferible. Ademas, el fenomeno clave del problema es la diferencia entre fuerza real y lectura aparente; esa diferencia solo se vuelve visible cuando se incluye explicitamente la aceleracion del marco [[a]].\r
\r
## Resolución simbólica\r
\r
Primero, intensidad gravitatoria con campo central:\r
\r
{{f:gravedad_campo_central}}\r
\r
Segundo, para comparar con referencia de altura en torno a superficie:\r
\r
{{f:gravedad_altura}}\r
\r
Tercero, peso local en forma vectorial:\r
\r
{{f:peso_local_vectorial}}\r
\r
Cuarto, modulo de peso en aproximacion local de superficie:\r
\r
{{f:peso_superficie}}\r
\r
Quinto, lectura de peso aparente en marco acelerado:\r
\r
{{f:peso_aparente_concepto}}\r
\r
## Sustitución numérica\r
\r
1) Distancia radial total: [[r]] = [[R]] + [[h]] = 6.77e6 m.\r
\r
2) Con campo central, [[gmod]] resulta cercano a 8.7 m/s^2. Con el modelo de altura tambien se obtiene un valor muy parecido, confirmando coherencia entre enfoques para este rango.\r
\r
3) Peso real en modulo: [[Pmod]] = [[m]]*[[gmod]] aproximadamente 696 N.\r
\r
4) Peso de superficie de referencia: [[m]]*[[g0]] alrededor de 785 N, mayor que el orbital por la mayor distancia al centro.\r
\r
5) Peso aparente en plataforma: con [[a]] descendente, [[Pap]] = [[m]]*([[gmod]] + [[a]]) queda muy reducido. El valor numerico es cercano a 24 N, muy inferior a [[Pmod]].\r
\r
## Validación dimensional\r
\r
Cada bloque respeta dimensiones:\r
\r
- [[gmod]] en m/s^2.\r
- [[Pmod]] y [[Pap]] en N.\r
- [[r]], [[R]], [[h]] en m.\r
\r
Ademas, el signo y escala son fisicamente coherentes: si la plataforma acelera en la misma direccion del campo, la lectura de soporte baja. En el limite [[a]] = -[[gmod]], la lectura tiende a cero, sin anular necesariamente el campo global.\r
\r
## Interpretación física\r
\r
La conclusion central es causal: la gravedad sigue actuando porque [[G]], [[M]] y [[r]] no desaparecen, pero la sensacion de peso depende del contacto medido por [[N]] o [[Pap]]. El astronauta no "pierde masa" ni sale de la influencia gravitatoria; cambia el estado dinamico del marco y, por tanto, la fuerza de soporte.\r
\r
Este resultado conecta con teoria del leaf: [[P]] es una propiedad de interaccion cuerpo-astro, mientras [[Pap]] es una lectura contextual. Tambien conecta con decisiones de modelo: en analisis orbital conviene usar campo central, y en situaciones casi superficiales puede bastar aproximacion con [[g0]].\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una empresa de logistica aeroespacial diseña un banco de calibracion para sensores de carga que viajaran en cohetes reutilizables. Durante pruebas en torre vertical, el modulo instrumentado sube y baja con perfiles de aceleracion controlados. El objetivo es traducir lecturas de celda de carga a valores comparables entre tierra, vuelo suborbital y microgravedad parcial.\r
\r
En tierra, la calibracion base usa [[g0]]. En perfiles dinamicos, la lectura cambia con [[a]], por lo que el equipo necesita separar claramente [[Pmod]] de [[Pap]]. Para extrapolar a alturas de vuelo, incluyen correccion de [[gmod]] en funcion de [[h]] y, cuando el trayecto es amplio, migran al calculo con [[r]] en modelo central.\r
\r
## Estimación física\r
\r
Para una carga de [[m]] = 250 kg, la referencia terrestre entrega un valor cercano a 2450 N. En un tramo de ascenso con aceleracion positiva del marco, la lectura sube y puede superar 3000 N. En un tramo de descenso fuerte, la lectura puede bajar por debajo de 1000 N aun con gravedad no nula. Si el perfil se aproxima a caida libre, la lectura puede acercarse a cero.\r
\r
Cuando el equipo compara resultados para diferentes alturas, detecta que no basta reutilizar siempre [[g0]]. A cientos de kilometros, [[gmod]] cambia lo suficiente como para afectar calibraciones finas. Por eso el software integra ambos niveles: aproximacion local para chequeos rapidos y campo central para simulacion de mision.\r
\r
## Interpretación\r
\r
La aplicacion muestra una leccion metodologica: los sensores de soporte no miden directamente "cuanta gravedad hay", sino cuanta fuerza de contacto requiere el perfil dinamico del sistema. Ignorar esta diferencia produciria errores de certificacion y de seguridad.\r
\r
Tambien revela por que este leaf es operativo: obliga a declarar variable dominante, dominio de validez y marco de referencia antes de aceptar un numero. Esa disciplina reduce errores sistematicos al trasladar resultados entre banco terrestre y entorno de vuelo.\r
`;export{e as default};
