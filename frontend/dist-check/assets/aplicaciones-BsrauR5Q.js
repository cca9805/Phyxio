const e=`## 1. Nucleos de transformadores de potencia

En un transformador, el nucleo magnetico permite guiar flujo entre bobinas con una corriente magnetizante relativamente pequeña. La razon no es que la bobina cambie de naturaleza, sino que el material ofrece una [[mu_r]] alta en el tramo de trabajo y convierte una [[H]] moderada en un [[B]] util para inducir tension en el secundario.

La hipotesis dominante es operar en la parte casi lineal de la curva del material. Si el nucleo se acerca a saturacion, la corriente magnetizante aumenta, el calentamiento crece y la forma de onda puede deformarse. La interpretacion fisica exige leer [[mu_r]] como pendiente operativa, no como etiqueta comercial fija.

En la practica se elige una chapa, polvo magnetico o ferrita segun frecuencia, perdidas admisibles y densidad de flujo objetivo. Un nucleo excelente a baja frecuencia puede ser inadecuado en conmutacion rapida, porque las perdidas por ciclo y por corrientes inducidas cambian la decision de diseño.

Variable dominante: permeabilidad relativa efectiva del nucleo dentro del rango de excitacion usado.
Límite de validez: deja de valer si aparece saturacion, histeresis intensa o calentamiento por perdidas magneticas.

## 2. Ferritas en fuentes conmutadas

Las ferritas se usan en transformadores e inductores de alta frecuencia porque combinan respuesta magnetica util con perdidas electricas reducidas. Su [[mu_r]] permite concentrar campo, mientras su alta resistividad limita corrientes parasitas que serian destructivas en materiales metalicos compactos.

La simplificacion dominante consiste en tratar el material mediante una permeabilidad efectiva para una frecuencia y temperatura dadas. La interpretacion cambia si la frecuencia sube demasiado: entonces las perdidas, la dispersion y la dependencia compleja de la permeabilidad importan tanto como el valor inicial de [[mu_r]].

Esta aplicacion muestra que "material magnetico" no significa siempre "mayor campo posible". En una fuente conmutada interesa almacenar y transferir energia de forma controlada, mantener el nucleo frio y evitar que [[B]] entre en una zona donde el control electronico pierda margen.

Variable dominante: permeabilidad efectiva dependiente de frecuencia y temperatura.
Límite de validez: deja de valer cuando las perdidas o la dispersion hacen que la respuesta ya no sea puramente lineal y reversible.

## 3. Blindaje magnetico de campos lentos

Un blindaje magnetico de material de alta permeabilidad no bloquea el campo como una pared opaca. Redirige lineas de campo por una ruta de menor reluctancia, de modo que la region protegida queda con menor [[B]]. La clave es que el material concentre el campo en si mismo sin saturarse.

La hipotesis dominante es que el blindaje trabaja con campos suficientemente bajos y geometria cerrada. Si hay huecos, esquinas mal diseñadas o campos demasiado intensos, la concentracion local puede saturar el material y perder eficacia precisamente donde mas se necesita proteccion.

El criterio de diseño no consiste en maximizar grosor sin mas, sino en distribuir el campo para que ninguna zona trabaje fuera de su tramo util. Por eso los blindajes de precision usan capas, geometria suave y materiales con alta respuesta inicial, pero tambien con margen real frente a saturacion.

Variable dominante: campo magnetico total dentro del blindaje y margen frente a saturacion.
Límite de validez: deja de valer si el material se satura o si la geometria deja caminos abiertos para el campo.

## 4. Sensores magneticos con nucleos concentradores

Algunos sensores usan piezas ferromagneticas para concentrar el campo externo en una region sensible. El material aumenta [[B]] local para que una sonda Hall, magnetorresistiva o inductiva trabaje con mejor señal. La lectura correcta separa el campo ambiental de la amplificacion geometrica y material.

La hipotesis dominante es que el concentrador no altera de forma no lineal la magnitud que se desea medir. Si [[mu_r]] cambia con el campo, el sensor puede volverse no calibrable con una sola pendiente. Por eso se diseñan rangos donde el material actua como concentrador estable.

En instrumentacion, una respuesta demasiado intensa puede ser peor que una respuesta moderada pero reproducible. El sensor necesita una relacion estable entre campo externo y lectura local; si el material conserva memoria, la misma muestra puede dar lecturas distintas segun el historial de exposicion.

Variable dominante: pendiente efectiva que transforma el campo externo en campo local medido.
Límite de validez: deja de valer si la respuesta del concentrador depende demasiado del nivel de campo o de la historia magnetica.

## 5. Separacion magnetica de materiales

En reciclaje, mineria o laboratorio, los materiales se separan segun su respuesta magnetica. Los ferromagneticos responden fuertemente y pueden ser atraidos por gradientes de campo. Los diamagneticos y paramagneticos requieren tecnicas mas sensibles porque su [[chi_m]] suele ser mucho menor en modulo.

La hipotesis dominante es que la respuesta del material identifica de forma fiable la fase buscada. En mezclas reales, tamaño de particula, humedad, oxidacion y geometria del campo pueden dominar la fuerza efectiva. Por eso una lectura basada solo en "ser magnetico" resulta demasiado pobre para diseñar el proceso.

La lectura de [[chi_m]] ayuda a prever si la separacion sera robusta o marginal. Cuando la diferencia entre fases es pequeña, se necesita un gradiente intenso, control de granulometria y a menudo varias etapas. La fisica del material se convierte entonces en una decision de proceso, no en una simple clasificacion escolar.

Variable dominante: susceptibilidad magnetica efectiva de la fase que se desea separar.
Límite de validez: deja de valer si la muestra es heterogenea, si hay aglomeracion o si la respuesta no es lineal en el gradiente usado.
`;export{e as default};
