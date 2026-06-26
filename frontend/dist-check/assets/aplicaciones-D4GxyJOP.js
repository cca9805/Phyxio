const e=`## 1. Fibra óptica de telecomunicaciones

La transmisión de datos a larga distancia por fibra óptica aprovecha la reflexión total interna, que depende directamente del contraste de índices entre el núcleo y el revestimiento. El núcleo de sílice dopada presenta un índice [[n]] de aproximadamente 1.468, mientras que el revestimiento tiene un índice ligeramente inferior (por ejemplo, 1.462). Este pequeño contraste de índices define el ángulo crítico y, con él, el cono de aceptación de la fibra: los rayos que entran dentro de ese cono quedan confinados y se propagan por reflexión total a lo largo de kilómetros sin pérdida por refracción.

La velocidad de la señal dentro del núcleo, determinada por [[v_medio]], fija la latencia de la comunicación. Para una fibra monomodo estándar, la velocidad es aproximadamente dos tercios de [[c]], lo que produce una latencia cercana a 4.9 microsegundos por kilómetro. En enlaces submarinos transoceánicos de miles de kilómetros, esta latencia acumulada resulta decisiva para aplicaciones financieras de alta frecuencia donde milisegundos marcan la diferencia competitiva.

Variable dominante: el índice de refracción del núcleo [[n]], que controla el confinamiento óptico y la velocidad de propagación de la señal.
Límite de validez: el modelo de rayo deja de ser válido cuando el diámetro del núcleo se reduce por debajo de unas diez veces la longitud de onda en el medio, entrando en el régimen de guía de ondas monomodo donde la difracción domina la propagación.

## 2. Diseño de lentes oftálmicas

Las lentes para gafas correctoras se fabrican con materiales cuyo índice de refracción [[n]] determina tanto el poder dióptrico como el espesor y peso de la lente. Vidrios con [[n]] de 1.50 producen lentes relativamente gruesas para graduaciones altas; materiales de alto índice (1.67 o 1.74) permiten reducir el espesor hasta en un 40 % para la misma graduación, mejorando la estética y la comodidad.

El poder refractivo de una superficie curva depende del contraste entre el índice de la lente y el del aire. Al aumentar [[n]], la curvatura necesaria para una potencia dada disminuye, lo que implica lentes más planas. Sin embargo, materiales de alto índice también presentan mayor dispersión cromática (número de Abbe más bajo), lo que puede degradar la calidad de imagen periférica si no se aplican correcciones adecuadas.

Variable dominante: el índice de refracción del material de la lente [[n]], que controla el espesor, el peso y la dispersión cromática de la lente.
Límite de validez: el modelo de superficies refractivas ideales falla cuando las aberraciones cromáticas debidas a la dispersión del material dominan sobre la corrección geométrica, típicamente para lentes de alto índice sin tratamiento asférico.

## 3. Refractometría para control de calidad alimentaria

En la industria alimentaria se utiliza un refractómetro para medir la concentración de azúcar (grados Brix) en zumos, mieles y jarabes. El principio es directo: la concentración de soluto modifica el índice de refracción [[n]] del líquido. Un zumo de naranja con 12 grados Brix presenta un índice cercano a 1.3510, mientras que un jarabe concentrado de 60 grados Brix puede alcanzar 1.4418.

El refractómetro mide el ángulo crítico de reflexión total interna en la interfaz entre un prisma de vidrio de índice conocido y la muestra líquida. A partir de ese ángulo se calcula [[n]] del líquido, y una tabla de calibración convierte el índice en concentración de azúcar. La precisión del instrumento alcanza típicamente la cuarta cifra decimal del índice, suficiente para detectar diferencias de medio grado Brix.

Variable dominante: el índice de refracción del líquido [[n]], directamente correlacionado con la concentración de soluto.
Límite de validez: la calibración falla cuando el líquido contiene otros solutos en concentración significativa (sales, ácidos, alcohol) que alteran el índice sin corresponder a azúcar, produciendo lecturas de Brix sobreestimadas.

## 4. Gemología e identificación de piedras preciosas

La medición del índice de refracción es una de las pruebas fundamentales para identificar gemas y distinguir piedras naturales de imitaciones. Cada mineral tiene un índice característico: el diamante presenta [[n]] de 2.42, el rubí y el zafiro cercano a 1.77, el cuarzo alrededor de 1.54 y el circón entre 1.93 y 1.98.

El gemólogo utiliza un refractómetro de contacto con un prisma de alto índice y un líquido de acoplamiento. La medición es rápida y no destructiva: basta colocar una faceta plana de la gema sobre el prisma para leer el índice. Una diferencia de apenas 0.01 en [[n]] puede distinguir una esmeralda natural de una imitación de vidrio verde. Además, en cristales birrefringentes como la calcita, el refractómetro permite medir los dos índices principales (ordinario y extraordinario), aportando información adicional sobre la identidad del mineral.

Variable dominante: el índice de refracción de la gema [[n]], que actúa como huella dactilar óptica del mineral.
Límite de validez: el método falla cuando la superficie de la gema es curva o rugosa (impide el contacto óptico adecuado con el prisma) o cuando el índice de la gema supera el del líquido de contacto (típicamente limitado a 1.81), impidiendo la lectura del ángulo crítico.

## 5. Espejismos atmosféricos en carreteras y desiertos

Los espejismos que se observan en carreteras calientes o en desiertos son una consecuencia directa de la variación continua del índice de refracción [[n]] del aire con la temperatura. El aire caliente cerca del suelo tiene menor densidad y menor índice (aproximadamente 1.000 27 a 50 grados centígrados) que el aire más fresco por encima (1.000 29 a 20 grados centígrados). Este gradiente vertical de [[n]] curva progresivamente los rayos de luz hacia arriba.

Cuando el gradiente es suficientemente fuerte, los rayos procedentes del cielo se curvan tanto que alcanzan al observador desde abajo, creando la ilusión de un charco de agua en el suelo. El fenómeno es esencialmente una refracción continua en un medio de índice variable, no una reflexión en una superficie. La curvatura del rayo depende del gradiente vertical de [[n]], que a su vez depende del perfil térmico de la capa de aire cercana al suelo.

Variable dominante: el gradiente vertical del índice de refracción del aire, controlado por la diferencia de temperatura entre el suelo y la atmósfera superior.
Límite de validez: el modelo de rayo deja de ser aplicable cuando la turbulencia atmosférica produce fluctuaciones aleatorias del índice a escalas comparables a la longitud de onda, generando centelleo en lugar de un espejismo estable.
`;export{e as default};
