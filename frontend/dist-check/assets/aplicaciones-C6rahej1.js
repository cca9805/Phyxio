const e=`# Aplicaciones de ondas transversales de corte\r
\r
## 1. Geotecnia sismica y clasificacion de suelos\r
\r
Variable dominante: [[v_s]]\r
\r
Límite de validez: [[lambda_s]] debe ser mayor que la escala de heterogeneidad del estrato.\r
\r
En geotecnia, la velocidad S media cerca de la superficie permite clasificar el suelo y estimar su capacidad de amplificar movimiento sismico. Un perfil con valores bajos indica material blando, baja rigidez dinamica y mayor deformacion esperable ante un terremoto. La lectura no se limita a un numero: se compara la tendencia con profundidad, se buscan inversiones de velocidad y se revisa si cada capa puede tratarse como aproximadamente homogenea.\r
\r
La estimacion se vuelve operativa cuando los tiempos de llegada son claros y la distancia entre sensores esta bien medida. Si el pulso atraviesa rellenos, lentes blandas o zonas saturadas, la interpretacion debe incluir incertidumbre estratigrafica.

Un uso habitual es comparar perfiles antes y despues de compactacion o mejora del terreno. Si [[v_s]] aumenta de forma sostenida, se infiere incremento de rigidez dinamica. Si solo cambia una capa estrecha, el ingeniero evita extrapolar ese dato a todo el emplazamiento.
\r
## 2. Exploracion sismica y litologia\r
\r
Variable dominante: [[ratio_vp_vs]]\r
\r
Límite de validez: La anisotropia y la saturacion deben modelarse si alteran la lectura P/S.\r
\r
En exploracion, la comparacion entre velocidades P y S ayuda a distinguir litologias y contenido de fluidos. El cociente P/S cambia cuando la roca es mas compresible, cuando hay gas o cuando la matriz tiene fisuras. La onda S aporta informacion que una onda P sola no separa, porque responde directamente a la rigidez de corte del esqueleto solido.\r
\r
La aplicacion exige cautela: una variacion del cociente puede deberse a saturacion, mineralogia, presion efectiva o anisotropia. Por eso se combina con impedancias, registros de pozo y modelos de roca.

En inversiones modernas, las ondas de corte tambien ayudan a estimar propiedades elasticas que controlan estabilidad de reservorios y respuesta a fracturacion. La utilidad aparece cuando el dato S reduce una ambiguedad que el dato P mantenia abierta.
\r
## 3. Ultrasonidos industriales de corte\r
\r
Variable dominante: [[lambda_s]]\r
\r
Límite de validez: La pieza debe comportarse como continuo y la atenuacion no debe ocultar el eco.\r
\r
Los transductores de corte permiten inspeccionar soldaduras, laminados y piezas metalicas cuando una onda longitudinal no ilumina bien ciertos defectos. La longitud de onda controla la resolucion: frecuencias mayores detectan detalles menores, pero tambien aumentan la atenuacion y pueden dispersarse si la microestructura deja de ser pequena.\r
\r
El operador compara ecos, tiempos de vuelo y amplitudes relativas. La velocidad se calibra con una probeta conocida; despues se localizan discontinuidades usando trayectorias de onda S.

En soldaduras, la polarizacion de corte puede hacer visibles grietas orientadas de forma desfavorable para una onda longitudinal. La seleccion del transductor combina frecuencia, angulo y modo para maximizar contraste sin abandonar el dominio continuo.
\r
## 4. Sismologia global\r
\r
Variable dominante: [[Z_s]]\r
\r
Límite de validez: Las interfaces se interpretan con conversion de modo si la incidencia no es normal.\r
\r
En sismologia, las ondas S revelan donde el planeta conserva rigidez de corte. Su ausencia en el nucleo externo es una evidencia fisica de estado liquido. En discontinuidades internas, los contrastes de impedancia transversal controlan reflejos, conversiones y cambios de amplitud observados en estaciones lejanas.\r
\r
La interpretacion global no usa un unico material homogeneo. Se construyen modelos radiales o tridimensionales y se ajustan tiempos de llegada. La idea elemental de [[G_shear]] positivo sigue siendo la clave que separa zonas solidas de zonas incapaces de transmitir corte.

La comparacion entre estaciones permite detectar anisotropia del manto, zonas de baja velocidad y discontinuidades. Cada desviacion respecto a un modelo simple se interpreta como informacion sobre temperatura, composicion, fusion parcial o textura mineral.
\r
## 5. Ingenieria de materiales y control de curado\r
\r
Variable dominante: [[G_shear]]\r
\r
Límite de validez: La respuesta debe permanecer en regimen elastico lineal.\r
\r
Durante el curado de hormigones, polimeros o adhesivos, la velocidad S permite seguir el aumento de rigidez sin destruir la muestra. A medida que la red interna se consolida, [[G_shear]] crece y la onda de corte se propaga mas rapido. La tecnica es sensible a cambios tempranos que no siempre son visibles en ensayos estaticos.\r
\r
El limite aparece si el material es viscoelastico fuerte, si la temperatura cambia durante la medida o si la amplitud induce dano. En esos casos se requieren modulos dependientes de frecuencia y control experimental mas estricto.

Tambien se usa en control de calidad repetitivo: dos lotes con densidad parecida pero distinta [[v_s]] no tienen la misma rigidez de corte. Esa lectura permite detectar envejecimiento, porosidad o curado incompleto antes de realizar ensayos destructivos.

En materiales compuestos, la lectura debe separarse por direccion. Una velocidad alta en una orientacion y baja en otra no es necesariamente un error: puede ser la firma mecanica de fibras, capas o textura interna. Por eso la aplicacion combina la medida de [[v_s]] con conocimiento del proceso de fabricacion, historial termico y direccion de carga esperada.
`;export{e as default};
