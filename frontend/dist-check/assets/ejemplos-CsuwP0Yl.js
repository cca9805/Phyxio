const e=`# Ejemplo tipo examen

## Enunciado

Un pulsador laser de laboratorio emite un pulso de luz de quinientos treinta y dos nanometros de longitud de onda. Este pulso atraviesa una celda de vidrio de quince centimetros de longitud llena de agua, y luego atraviesa una lamina de vidrio de dos centimetros de espesor. Se pide: (a) calcular la velocidad de la luz en el agua, (b) determinar el tiempo total de cruce del sistema agua-vidrio, y (c) calcular la longitud de onda de la luz dentro del agua.

## Datos

- Longitud de onda en vacio: quinientos treinta y dos nanometros
- Longitud celda de agua: quince centimetros
- Espesor lamina de vidrio: dos centimetros
- Indice de refraccion del agua: aproximadamente uno coma treinta y tres
- Indice de refraccion del vidrio: aproximadamente uno coma cincuenta
- Velocidad de la luz en vacio: trescientos mil millones de metros por segundo

## Definicion del sistema

El sistema consta de dos medios transparentes consecutivos: agua con [[n_indice]] aproximadamente uno coma treinta y tres y vidrio con [[n_indice]] aproximadamente uno coma cincuenta. La luz se propaga perpendicularmente a las interfaces, atravesando primero los quince centimetros de agua y luego los dos centimetros de vidrio.

Magnitudes involucradas:
- [[c_vacio]]: velocidad de referencia en vacio
- [[v_medio]]: velocidad en cada medio (diferente para agua y vidrio)
- [[n_indice]]: indice caracteristico de cada material
- [[lambda_vacio]]: longitud de onda de la fuente en vacio
- [[lambda_medio]]: longitud de onda reducida dentro del agua

## Modelo fisico

Aplicamos el modelo de indice de refraccion constante para medios homogeneos e isotropos. La velocidad de propagacion en cada medio se determina mediante la relacion fundamental que vincula [[v_medio]] con [[c_vacio]] y [[n_indice]].

Para la longitud de onda en el medio, usamos la relacion de conservacion de frecuencia con reduccion de longitud de onda proporcional al indice.

{{f:velocidad_medio}}

{{f:longitud_onda_medio}}

## Justificacion del modelo

El modelo de indice constante es aplicable porque: los medios agua y vidrio son transparentes y homogeneos a la escala macroscopica; las longitudes de onda involucradas (visible verde) estan lejos de resonancias electronicas de estos materiales; la intensidad del laser de laboratorio es suficientemente baja como para mantener linealidad optica.

El modelo dejaria de ser valido si: la luz fuera de muy alta intensidad (efectos no lineales), si el agua contuviera burbujas o impurezas (no homogeneidad), o si usaramos luz ultravioleta profunda cerca de la banda de absorcion del vidrio (dispersion anomala).

## Resolucion simbolica

Para la velocidad en el agua, despejamos de la relacion fundamental entre [[v_medio]], [[c_vacio]] y [[n_indice]]:

{{f:velocidad_medio}}

La velocidad resultante es el cociente entre la velocidad en vacio y el indice del agua.

Para la velocidad en el vidrio, aplicamos la misma relacion con el indice correspondiente:

{{f:indice_refraccion}}

El tiempo de cruce en cada medio se calcula dividiendo la distancia recorrida por la velocidad en ese medio. El tiempo total es la suma de los tiempos parciales.

Para la longitud de onda en el agua, usamos la relacion que mantiene la frecuencia constante:

{{f:longitud_onda_medio}}

La longitud de onda en el medio se reduce por el factor del indice respecto a la longitud de onda en vacio.

## Sustitucion numerica

**Calculo de velocidad en agua:**

Operacion: dividir la velocidad en vacio por el indice del agua.

Desglose numerico: trescientos mil millones dividido por uno coma treinta y tres da aproximadamente doscientos veintiseis mil millones de metros por segundo.

Por tanto [[v_medio]] en agua es aproximadamente dos coma veintiseis por diez a la ocho metros por segundo.

**Calculo de velocidad en vidrio:**

Operacion: dividir la velocidad en vacio por el indice del vidrio.

Desglose numerico: trescientos mil millones dividido por uno coma cincuenta da exactamente doscientos mil millones de metros por segundo.

Por tanto [[v_medio]] en vidrio es exactamente dos por diez a la ocho metros por segundo.

**Calculo de tiempos de cruce:**

Operacion para agua: dividir quince centimetros por la velocidad en agua.

Desglose: cero coma quince metros dividido por doscientos veintiseis mil millones da aproximadamente seiscientos sesenta picosegundos.

Operacion para vidrio: dividir dos centimetros por la velocidad en vidrio.

Desglose: cero coma cero dos metros dividido por doscientos mil millones da exactamente cien picosegundos.

Tiempo total: aproximadamente setecientos sesenta picosegundos.

**Calculo de longitud de onda en agua:**

Operacion: dividir la longitud de onda en vacio por el indice del agua.

Desglose numerico: quinientos treinta y dos dividido por uno coma treinta y tres da aproximadamente cuatrocientos nanometros.

Por tanto [[lambda_medio]] en agua es aproximadamente cuatrocientos nanometros.

## Validacion dimensional

- Unidades de velocidad: metros entre segundos dan metros por segundo, consistente con velocidad.
- Desglose dimensional: longitud dividido por tiempo da velocidad.
- Conversion: dos coma veintiseis por diez a la ocho metros por segundo equivale a aproximadamente tres cuartos de la velocidad en vacio, escala razonable para agua.

- Unidades de tiempo: metros dividido por metros por segundo dan segundos.
- Desglose dimensional: dividir \`[L]\` entre \`[L T⁻¹]\` da \`[T]\`.
- El tiempo total de aproximadamente setecientos sesenta picosegundos es consistente con trayectos de centimetros a velocidades de cientos de millones de metros por segundo.

- Unidades de longitud de onda: nanometros dividido por adimensional dan nanometros.
- Desglose dimensional: dividir \`[L]\` entre \`[1]\` conserva \`[L]\`.
- Cuatrocientos nanometros es consistente con luz visible violeta-azul, cercano al valor de entrada.

## Interpretacion fisica

El resultado muestra que la luz se propaga aproximadamente un veinticinco por ciento mas lento en el agua que en el vacio, y un treinta y tres por ciento mas lento en el vidrio. Esta reduccion de velocidad es la causa fisica fundamental de la refraccion: cuando la luz pasa de aire a agua o vidrio, su frente de onda se ralentiza en la parte que entra primero, causando el cambio de direccion descrito por la ley de Snell.

El tiempo total de cruce de setecientos sesenta picosegundos parece muy pequeño, pero en comunicaciones opticas de alta velocidad estos retrasos son significativos. Una senal que viajara la misma distancia en vacio tardaria solo quinientos sesenta y siete picosegundos, por lo que el sistema agua-vidrio introduce un retraso adicional de aproximadamente doscientos picosegundos. En redes de fibra optica transoceanicas, estos retrasos acumulados afectan la sincronizacion de sistemas financieros y de telecomunicaciones.

La longitud de onda reducida a cuatrocientos nanometros dentro del agua tiene consecuencias importantes para la optica de interferencia. Una burbuja de aire en el agua actuara como lente divergente porque la luz se propaga mas rapido en la burbuja, mientras que una gota de agua en aire actua como lente convergente. Estos efectos de gradiente de indice son fundamentales en la formacion del arcoiris y en el funcionamiento de los ojos de los seres vivos acuaticos.

---

# Ejemplo de aplicacion real

## Contexto

Las comunicaciones por fibra optica transoceanicas utilizan cables submarinos de vidrio de alta pureza que atraviesan oceanos enteros. En estos sistemas, la velocidad reducida de la luz en el vidrio de la fibra limita fisicamente la tasa maxima de transmision de datos y la latencia minima alcanzable entre continentes.

Un cable tipico entre Europa y Estados Unidos tiene una longitud de aproximadamente seis mil kilometros de fibra optica. Los ingenieros de telecomunicaciones deben calcular cuidadosamente estos retrasos para sincronizar redes globales, especialmente en aplicaciones financieras donde microsegundos de diferencia pueden significar millones de euros en transacciones.

## Estimacion fisica

Consideremos un pulso de luz que viaja desde Londres hasta Nueva York a traves de una fibra optica submarina tipica. La fibra tiene indice de refraccion aproximadamente uno coma cuatro seis, valor intermedio entre el agua marina y los vidrios opticos estandar.

La velocidad de la luz en esta fibra es aproximadamente doscientos cincuenta y siete mil kilometros por segundo, calculada dividiendo la velocidad en vacio por el indice caracteristico del vidrio de telecomunicaciones.

El tiempo de viaje a traves de seis mil kilometros de fibra es aproximadamente veintitres milisegundos. Si la luz pudiera viajar en vacio (imposible practicamente), el mismo trayecto tomaria aproximadamente veinte milisegundos. El medio material introduce un retraso adicional de tres milisegundos debido a la reduccion de velocidad.

Este retraso de tres milisegundos es fisicamente inevitable mientras se usen fibras de vidrio. Incluso con fibras perfectas sin perdidas ni dispersion, la velocidad finita de la luz en el medio establece un limite fundamental a la velocidad de comunicacion entre continentes.

## Interpretacion

El ejemplo ilustra como una propiedad fundamental de la materia (el [[n_indice]]) impone limites practicos a la tecnologia humana. A diferencia de otros factores que pueden mejorarse con ingenieria (atenuacion, ruido, dispersion), la velocidad reducida en el medio es un limite duro dictado por la fisica basica.

La latencia minima entre Londres y Nueva York es aproximadamente veintitres milisegundos, independientemente de la potencia del laser o la sensibilidad del detector. Este retraso afecta el diseno de protocolos de comunicacion, sistemas de trading de alta frecuencia, y aplicaciones en tiempo real como video conferencias y cirugia remota.

Ingenieros de telecomunicaciones trabajan continuamente en materiales con indices de refraccion mas bajos que mantengan otras propiedades opticas deseables. Sin embargo, cualquier material transparente tendra necesariamente un indice mayor que uno, por lo que el limite de velocidad c en el vacio nunca se alcanzara practicamente en sistemas de fibra optica.
`;export{e as default};
