const e=`# Aplicaciones de la resonancia

## 1. Sintonizacion de circuitos de radio y television

Los receptores de radiofrecuencia utilizan circuitos resonantes LC para seleccionar la emisora deseada entre todas las senales electromagneticas que llegan a la antena. Cada estacion transmite en una frecuencia portadora especifica, y el receptor debe sintonizar su circuito resonante a esa frecuencia para captarla eficientemente.

El principio fisico es que el circuito LC presenta una impedancia minima precisamente en su frecuencia natural. Cuando esta frecuencia coincide con la de la emisora deseada, la corriente circula con maxima amplitud, mientras que frecuencias alejadas encuentran alta impedancia y son atenuadas. El factor de calidad del circuito determina la selectividad: valores altos permiten separar emisoras muy cercanas en frecuencia, mientras que valores bajos captan un espectro mas amplio.

En radios AM tradicionales, el rango de frecuencias va de 530 kHz a 1700 kHz, con separacion tipica de 10 kHz entre emisoras. Un circuito con factor de calidad de 50 proporciona suficiente selectividad para distinguir emisoras adyacentes sin requerir sintonizacion excesivamente precisa.

Variable dominante: La frecuencia natural del circuito LC, determinada por la inductancia del bobinado y la capacitancia del condensador variable controlado por el dial de sintonia.

Límite de validez: La aproximacion de circuito resonante ideal falla cuando aparecen inductancias o capacitancias parásitas significativas, tipicamente a frecuencias superiores a 100 MHz donde los efectos de cableado y disposicion fisica de componentes modifican la respuesta.

## 2. Diseno de aisladores de vibracion para maquinaria

Los sistemas de aislamiento de vibraciones, utilizados en maquinaria industrial, vehiculos y edificios, operan fundamentalmente mediante principios resonantes. Un aislador eficaz consiste en un sistema inercia-resorte cuya frecuencia natural se diseña deliberadamente muy por debajo de las frecuencias de excitacion predominantes.

La fisica del aislamiento se basa en que la transmisibilidad de vibraciones (relacion entre amplitud transmitida y amplitud incidente) depende fuertemente de la relacion entre frecuencia forzada y frecuencia natural. Cuando la frecuencia de excitacion es significativamente mayor que la natural del aislador, el cuerpo inercial no puede seguir el movimiento de la base y las vibraciones se atenuan drasticamente.

Los soportes elasticos de motores electricos, los sistemas de suspension de automoviles, y las bases antivibratorias de equipos de precision utilizan este principio. Una maquina de 60 Hz montada sobre aisladores de 5 Hz experimenta una atenuacion de vibraciones superior a noventa por ciento.

Variable dominante: La relacion entre frecuencia forzada de la maquina y frecuencia natural del sistema aislador, que debe mantenerse por encima de raiz cuadrada de dos para conseguir atenuacion efectiva.

Límite de validez: El modelo de aislador lineal falla cuando la amplitud de vibracion es tan grande que el aislador llega a sus topes mecanicos, o cuando la frecuencia excitadora cae cerca de la frecuencia natural del aislador, produciendo amplificacion en lugar de atenuacion.

## 3. Analisis modal en ingenieria estructural

El analisis modal de estructuras es una aplicacion sofisticada de la resonancia mecanica, utilizada para determinar las frecuencias naturales y modos de vibracion de puentes, edificios, turbinas eolicas y aeronaves. Cada estructura continua posee infinitas frecuencias naturales discretas, cada una asociada a un patron especifico de deformacion (modo normal).

Los ingenieros identifican estas frecuencias mediante ensayos de excitacion controlada, aplicando fuerzas periodicas de frecuencia variable y midiendo la respuesta en multiples puntos. Los picos de respuesta revelan las frecuencias naturales, y las fases relativas entre sensores determinan la forma modal asociada.

Esta informacion es critica para disenar estructuras que eviten la resonancia con excitaciones ambientales. Un puente cuyas frecuencias naturales coincidan con las frecuencias de vortices de viento Karman puede experimentar oscilaciones peligrosas. El diseno modal desplaza estas frecuencias fuera del rango peligroso o incorpora amortiguadores que reducen la respuesta resonante.

Variable dominante: La frecuencia natural de cada modo de vibracion estructural, determinada por la distribucion espacial de inercia y rigidez del elemento constructivo.

Límite de validez: El analisis modal lineal falla cuando las deformaciones son tan grandes que la rigidez de la estructura cambia significativamente con la amplitud (efectos geometricos no lineales), tipicamente en situaciones cercanas al colapso o en materiales con comportamiento plastico.

## 4. Resonadores opticos y cavidades laser

Las cavidades opticas resonantes, fundamentales en los lasers y en instrumentacion de alta precision, son aplicaciones de la resonancia electromagnetica. Dos espejos enfrentados forman un resonador donde ciertas frecuencias de luz se amplifican constructivamente mientras otras se atenuan por interferencia destructiva.

La condicion de resonancia optica requiere que la longitud de la cavidad contenga un numero entero de medias longitudes de onda. Esto produce modos longitudinales discretos, separados en frecuencia por la velocidad de la luz dividida por el doble de la longitud de la cavidad. Para una cavidad de diez centimetros, la separacion entre modos es de aproximadamente 1.5 GHz.

Los lasers utilizan esta resonancia para seleccionar y amplificar frecuencias especificas. El medio activo (gas, solido o semiconductor) proporciona ganancia, pero solo las frecuencias resonantes de la cavidad alcanzan la oscilacion sostenida. El factor de calidad de las cavidades opticas, expresado como finesse, puede alcanzar valores de cientos de miles, produciendo luz monocromatica extremadamente pura.

En metrologia, las cavidades de Fabry-Perot se emplean como referencias de frecuencia y para medir longitudes con precision subnanometrica. La interferometria de cavidades resonantes permite detectar desplazamientos del orden de diez a la menos dieciocho metros.

Variable dominante: La longitud de la cavidad optica, que determina las frecuencias de los modos longitudinales resonantes mediante la condicion de interferencia constructiva.

Límite de validez: El modelo de cavidad resonante ideal falla cuando los espejos presentan perdidas significativas por transmision o absorcion, o cuando la longitud de cavidad es comparable a la longitud de onda, donde desaparece la aproximacion de onda plana.

## 5. Espectroscopia de resonancia magnetica nuclear

La espectroscopia de resonancia magnetica nuclear (RMN) es una de las aplicaciones mas importantes del fenomeno de resonancia en fisica medica y quimica. Los nucleos atomicos con momento magnetico (como el hidrogeno) precesan alrededor de campos magneticos externos a una frecuencia caracteristica llamada frecuencia de Larmor.

Cuando se aplica radiacion electromagnetica de frecuencia igual a la de Larmor, los nucleos absorben energia y transitan entre estados de spin. Al retirar la excitacion, los nucleos retornan al estado de equilibrio emitiendo senales electromagneticas detectables. La frecuencia exacta de resonancia depende del entorno quimico del nucleo, permitiendo identificar la estructura molecular.

Los equipos de resonancia magnetica medica (MRI) utilizan campos magneticos superconductores de varios teslas, produciendo frecuencias de Larmor de decenas a cientos de megahertz. Los gradientes de campo permiten localizar espacialmente la senal resonante, construyendo imagenes detalladas de tejidos blandos sin radiacion ionizante.

La sensibilidad del metodo permite detectar concentraciones de protones en el orden de micromoles, haciendo posible estudios metabolicos funcionales que observan el flujo sanguineo cerebral en tiempo real.

Variable dominante: La frecuencia de Larmor, proporcional al producto del momento magnetico del nucleo y la intensidad del campo magnetico externo aplicado.

Límite de validez: El modelo de resonancia magnetica nuclear de dos estados falla cuando el campo magnetico es tan intenso que los efectos cuanticos de orden superior dominan, o cuando la interaccion entre nucleos vecinos modifica significativamente la frecuencia de resonancia (acoplamiento spin-spin en muestras concentradas).
`;export{e as default};
