const e=`# Aplicaciones reales del efecto Venturi\r
\r
## 1. El carburador de un motor de gasolina\r
El carburador es quizás la aplicación más clásica y extendida del efecto Venturi en la historia de la ingeniería automotriz. Su función principal es dosificar y mezclar el aire con el combustible en la proporción estequiométrica ideal antes de que entre en la cámara de combustión. Para lograr esto, el carburador utiliza un estrechamiento en el conducto de entrada de aire conocido precisamente como "venturi". \r
\r
Cuando el pistón del motor desciende durante la fase de admisión, crea una succión que obliga al aire exterior a entrar a gran velocidad. Al pasar por la garganta del venturi, la velocidad del aire [[v1]] aumenta drásticamente y, de acuerdo con el principio de Bernoulli, su presión estática disminuye. Esta caída de presión se sitúa por debajo de la presión atmosférica reinante en la cuba de gasolina. Debido a este gradiente de presión, el combustible es literalmente succionado a través de un surtidor (chiclé) situado en la zona de menor presión. Una vez en la corriente de aire, la gasolina se atomiza en pequeñas gotas, facilitando una combustión rápida y eficiente. \r
**Variable dominante:** La velocidad del aire [[v1]] en la entrada que determina el grado de succión.\r
**Límite de validez:** El sistema pierde eficiencia si el flujo de aire se vuelve sónico o si la viscosidad del combustible cambia drásticamente con la temperatura, alterando el caudal de gasolina.\r
\r
## 2. El pulverizador o atomizador\r
Dispositivos cotidianos como botes de perfume, aerógrafos para pintura, pulverizadores agrícolas o incluso simples botes de spray para limpieza funcionan bajo el principio del efecto Venturi. El mecanismo consiste en una corriente de aire (o un fluido motriz) que se desplaza a alta velocidad sobre la abertura superior de un tubo vertical sumergido en un depósito de líquido.\r
\r
Al apretar el pulsador o accionar el compresor, el aire sale disparado por una boquilla estrecha. Esta velocidad elevada [[v2]] crea una zona de presión local muy baja justo encima del tubo de succión. La presión atmosférica que actúa sobre la superficie del líquido en el depósito empuja el fluido hacia arriba por el tubo para compensar el vacío parcial. Una vez que el líquido alcanza la corriente de aire rápida, la energía cinética del aire lo dispersa en forma de una fina niebla de gotas. La finura de la pulverización depende directamente de la magnitud de la caída de presión [[dp]] lograda en el estrechamiento.\r
**Variable dominante:** El flujo de aire a alta velocidad [[v2]] generado por el usuario o la bomba.\r
**Límite de validez:** El líquido debe tener una viscosidad lo suficientemente baja para que la diferencia de presión pueda vencer la tensión superficial y la gravedad.\r
\r
## 3. Medidores de caudal industriales (Tubo de Venturi)\r
En la industria petroquímica, de tratamiento de aguas y de transporte de gases, es crítico saber con exactitud cuántos metros cúbicos de fluido pasan por una tubería cada segundo. El tubo de Venturi es un instrumento de medición de presión diferencial que permite obtener el caudal sin necesidad de partes móviles que se desgasten con el tiempo.\r
\r
El diseño consiste en una sección de tubería que se estrecha gradualmente hasta una garganta y luego se vuelve a ensanchar suavemente para minimizar las pérdidas de energía por turbulencia. Al medir la diferencia de presión entre la sección ancha [[p1]] y la garganta estrecha [[p2]], se puede aplicar directamente la ecuación de Bernoulli. Como la geometría del tubo es conocida, la caída de presión [[dp]] es una medida directa y precisa de la velocidad del fluido. Estos medidores son altamente valorados porque, a diferencia de las placas de orificio, recuperan gran parte de la presión estática inicial gracias a su diseño aerodinámico de salida.\r
**Variable dominante:** La caída de presión [[dp]] medida por un manómetro diferencial.\r
**Límite de validez:** El fluido debe ser incompresible y el régimen de flujo debe ser estable; la presencia de burbujas de gas en un líquido falsea completamente la medición.\r
\r
## 4. Trompa de vacío de agua (Eductor)\r
Utilizada comúnmente en laboratorios de química para realizar filtraciones al vacío o para evacuar gases, la trompa de agua es un ejemplo de cómo el efecto Venturi puede generar succión sin electricidad. Se conecta directamente a un grifo de agua a presión. El agua entra en el dispositivo y pasa por una boquilla convergente que la acelera a gran velocidad.\r
\r
Esta corriente de agua rápida pasa por una cámara pequeña conectada lateralmente a una toma de vacío. La baja presión generada por el agua en movimiento (efecto Venturi) aspira el aire o los gases de la toma lateral, arrastrándolos hacia el desagüe. Es un método extremadamente fiable y seguro para trabajar con sustancias inflamables, ya que no hay chispas eléctricas involucradas. La calidad del vacío obtenido depende de la presión del agua de red [[p1]] y de que no se produzca cavitación excesiva dentro de la trompa.\r
**Variable dominante:** La presión de entrada [[p1]] de la red de suministro de agua.\r
**Límite de validez:** El vacío máximo está limitado por la presión de vapor del agua; si se intenta bajar más, el agua hierve a temperatura ambiente y el sistema se bloquea.\r
\r
## 5. El efecto de succión entre barcos en paralelo\r
Un fenómeno peligroso en la navegación marítima ocurre cuando dos barcos navegan muy cerca uno del otro en la misma dirección. El espacio entre los cascos de los dos barcos se comporta físicamente como un canal estrecho. A medida que los barcos avanzan, el agua que debe pasar entre ellos se ve obligada a acelerar debido a la restricción de espacio.\r
\r
Según el efecto Venturi, este aumento de la velocidad relativa del agua conlleva una disminución de la presión estática en el canal central. Mientras tanto, en los costados exteriores de los barcos, la presión del mar sigue siendo la presión ambiental normal. Esta diferencia de presión genera una fuerza neta que empuja a ambos barcos a atraerse entre sí. Si la velocidad es alta y la distancia es pequeña, la succión puede ser tan fuerte que los timones no logren compensarla, provocando una colisión lateral inevitable. Los capitanes deben conocer este principio para mantener siempre una distancia de seguridad lateral mínima.\r
**Variable dominante:** La velocidad relativa de los barcos respecto a la masa de agua circundante.\r
**Límite de validez:** El efecto es despreciable si la distancia entre cascos es mayor a tres veces la manga de los barcos o si la velocidad es de maniobra lenta.`;export{e as default};
