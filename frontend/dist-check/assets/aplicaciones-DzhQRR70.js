const e=`# Aplicaciones: Bloque sobre superficie\r
\r
## 1. Sistemas de frenado de vehículos\r
\r
Los frenos de disco y tambor de automóviles funcionan creando fricción controlada entre pastillas y discos (o zapatas y tambores). Cuando el conductor presiona el pedal, se genera una fuerza normal [[N]] que comprime las pastillas contra el disco rotante. La fricción cinética [[f_k]] entre estos componentes disipa la energía cinética del vehículo como calor, reduciendo gradualmente la velocidad.\r
\r
La eficacia del frenado depende del coeficiente de fricción cinético [[mu_k]] entre los materiales de fricción (generalmente compuestos cerámicos o metálicos) y el disco de acero. Materiales con [[mu_k]] alto proporcionan mayor fuerza de frenado para la misma presión del pedal, permitiendo detener el vehículo en distancias más cortas. Sin embargo, valores excesivamente altos pueden causar patinaje repentino y pérdida de control direccional.\r
\r
Variable dominante: coeficiente de fricción cinético [[mu_k]] entre pastilla y disco, que determina la fuerza de frenado para una presión dada del pedal.\r
Límite de validez: el modelo de fricción constante falla a temperaturas extremas (> 500 °C) donde los materiales de fricción degradan y el coeficiente disminuye significativamente, causando "fading" o pérdida de eficacia.\r
\r
## 2. Sistemas de sujeción mecánica (tornillos y abrazaderas)\r
\r
Las prensas de tornillo para sujetar piezas durante el mecanizado operan generando una fuerza normal [[N]] a través del apriete del tornillo. La fricción estática [[f_s]] entre las mordazas y la pieza de trabajo evita que esta se desplace durante las operaciones de corte que ejercen fuerzas de empuje considerables.\r
\r
El torque aplicado al tornillo se convierte en fuerza de compresión normal. La fricción estática resultante debe superar la fuerza de corte del mecanizado para mantener la pieza inmóvil. Si el par de apriete es insuficiente, la pieza se desplaza (patinaje), causando defectos de precisión y riesgo de accidentes. Los ingenieros calculan el par mínimo necesario usando la fórmula del umbral estático, aplicando un factor de seguridad de 2 a 3 para compensar vibraciones y coeficientes variables.\r
\r
Variable dominante: fuerza normal [[N]] generada por el apriete del tornillo, que directamente determina el umbral estático [[f_s]] disponible para resistir fuerzas de corte.\r
Límite de validez: el modelo asume coeficiente de fricción constante; en realidad, la fricción entre metales lubricados o con viruta de mecanizado puede variar un 30%, requiriendo mayores factores de seguridad en producción industrial continua.\r
\r
## 3. Cintas transportadoras industriales\r
\r
Las cintas transportadoras en plantas de manufactura y logística mueven paquetes y materiales mediante fricción entre la banda y los objetos. El motor impulsa la cinta, y la fricción estática entre objeto y cinta arrastra el objeto hacia adelante sin deslizamiento relativo en condiciones normales.\r
\r
La capacidad de carga máxima está limitada por el umbral estático [[f_s]]. Si la masa del objeto es excesiva, el peso [[W]] produce una normal [[N]] que, multiplicada por [[mu_s]], da un umbral insuficiente para la fuerza de aceleración necesaria. El objeto entonces patina sobre la cinta, acumulando velocidad más lentamente o no moviéndose en absoluto. Los diseñadores calculan la masa máxima transportable usando la fórmula del umbral estático, considerando la aceleración máxima de arranque de la cinta.\r
\r
Variable dominante: masa del objeto transportado, que determina el peso [[W]], la normal [[N]] y por tanto el umbral de fricción disponible para el arranque.\r
Límite de validez: el modelo de fricción seca de Coulomb no aplica si la cinta está mojada o engrasada; la presencia de fluidos lubricantes puede reducir [[mu_s]] a la mitad, causando patinaje inesperado de cargas normalmente seguras.\r
\r
## 4. Neumáticos y tracción vehicular\r
\r
La tracción de un vehículo depende críticamente de la fricción estática entre neumáticos y carretera. Cuando las ruedas motrices giran, ejercen una fuerza hacia atrás sobre el asfalto. La fricción estática reacciona hacia adelante, propulsando el vehículo. Este es el único caso donde la fricción estática realiza trabajo útil sin disipación energética (hasta el límite de adherencia).\r
\r
La fuerza de tracción máxima está limitada por [[f_s]] = [[mu_s]]·[[N]], donde [[N]] es la porción del peso del vehículo sobre las ruedas motrices. En superficies resbaladizas ([[mu_s]] bajo), la fuerza de tracción disponible disminuye drásticamente. Si el conductor acelera bruscamente, la fuerza de tracción demandada supera [[f_s]], las ruedas patinan (pasan a régimen cinético con menor [[mu_k]]), y el vehículo pierde aceleración efectiva. Los sistemas de control de tracción (TCS) modernos limitan el par del motor para mantener la fuerza de tracción justo por debajo del umbral estático.\r
\r
Variable dominante: coeficiente de fricción estático [[mu_s]] entre neumático y superficie, que varía de 0.1 (hielo) a 1.2 (asfalto seco), determinando la aceleración máxima posible.\r
Límite de validez: el modelo de fricción de Coulomb no considera el desgaste del neumático ni la hidroplaning (aquaplaning) a alta velocidad sobre agua acumulada, donde la fricción cae precipitadamente independientemente de [[mu_s]] nominal.\r
\r
## 5. Diseño de rampas de carga y almacenamiento\r
\r
Las rampas de carga para almacenes y centros de distribución deben diseñarse con ángulos limitados para evitar que los pallets con mercancía resbalen hacia abajo por gravedad. La componente del peso paralela a la rampa actúa como fuerza de "empuje" gravitatorio, mientras la fricción estática debe resistir para mantener la carga estacionaria.\r
\r
Aunque este leaf trata bloques sobre superficies horizontales, el análisis es equivalente rotando el sistema de referencia. La fuerza de fricción estática [[f_s]] debe superar la componente paralela del peso para evitar deslizamiento. Los diseñadores calculan el ángulo máximo de rampa usando el coeficiente de fricción estático [[mu_s]] entre el pallet y la superficie de la rampa (típicamente metal estriado o hormigón rugoso). Para seguridad, se limita el ángulo a la mitad del teórico máximo, garantizando que incluso con coeficientes reducidos por humedad o suciedad, la carga permanezca segura.\r
\r
Variable dominante: coeficiente de fricción estático [[mu_s]] entre pallet y superficie de la rampa, que limita directamente el ángulo máximo de inclinación segura.\r
Límite de validez: el modelo asume carga estática; vibraciones de vehículos de carga o impactos de montacargas pueden generar fuerzas dinámicas momentáneas que superan el umbral estático calculado, requiriendo ángulos más conservadores o sistemas de retención mecánica adicionales.\r
`;export{e as default};
