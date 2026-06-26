const e=`\uFEFF# Capacidad calorifica\r
\r
## Contexto conceptual\r
\r
La capacidad calorifica total [[C]] mide cuanta energía debe absorber o ceder un cuerpo concreto para cambiar su temperatura un kelvin. No describe solo el material: describe el cuerpo entero. Un vaso pequeño de agua y un deposito grande de agua tienen el mismo material, pero capacidades calorificas muy distintas.\r
\r
La pregunta física central es directa: cuanta energía necesita un cuerpo para cambiar su temperatura en un grado? La respuesta depende de [[C]] y del cambio de temperatura [[DeltaT]]. El calor intercambiado [[Q]] toma signo positivo si el cuerpo se calienta y negativo si se enfria.\r
\r
## 🟢 Nivel esencial\r
\r
Un cuerpo con gran [[C]] cambia poco de temperatura cuando recibe una cantidad de calor dada. Por eso una piscina se calienta lentamente al sol, mientras una cuchara metalica pequeña puede cambiar de temperatura con rapidez. La capacidad calorifica funciona como una inercia térmica: cuanto mayor es, más cuesta mover la temperatura.\r
\r
La diferencia clave con el calor específico es que [[C]] pertenece al objeto completo. El calor específico pertenece al material. Si duplicas la cantidad de un mismo material, duplicas la capacidad calorifica total aunque el material no haya cambiado. Esta es la razon por la que una olla llena de agua necesita mucho más calor que una taza para subir los mismos grados.\r
\r
La idea cotidiana es sencilla: no todos los cuerpos "obedecen" igual ante el mismo aporte de energía. Algunos responden con una subida rápida de temperatura y otros apenas se mueven. Esa diferencia no implica que uno tenga calor dentro y otro no; indica que el cuerpo reparte la energía recibida entre más masa, más partes internas o un montaje más grande.\r
\r
## 🔵 Nivel formal\r
\r
La definición operacional es:\r
\r
{{f:definicion_capacidad_calorifica}}\r
\r
Cuando el cuerpo es homogeneo, también puede obtenerse desde el calor específico del material:\r
\r
{{f:capacidad_calorifica_desde_especifico}}\r
\r
La unidad de [[C]] es J/K. La unidad de [[Q]] es J y [[DeltaT]] se mide en K o en grados Celsius cuando se trata de diferencias de temperatura. Si [[DeltaT]] es positivo, el cuerpo se calienta y [[Q]] debe ser positivo. Si [[DeltaT]] es negativo, el cuerpo se enfria y [[Q]] debe ser negativo. [[C]] no cambia de signo: para materiales estables es siempre positiva.\r
\r
La formula solo representa calor sensible. Si entre la temperatura inicial y la final aparece fusion, ebullicion u otro cambio de estado, hay un tramo de calor latente que no se debe esconder dentro de [[C]].\r
\r
En una medición formal conviene separar tres decisiones. La primera es elegir el sistema: solo muestra, muestra más recipiente, o equipo completo. La segunda es decidir si [[C]] se toma como dato directo o si se calcula a partir del material. La tercera es comprobar que el intervalo de temperatura es suficientemente pequeño para no cambiar el valor efectivo de [[C]]. Estas decisiones evitan mezclar una propiedad del cuerpo con una propiedad del material y evitan usar una pendiente lineal donde la curva real ya no es lineal.\r
\r
## 🔴 Nivel estructural\r
\r
Estructuralmente, [[C]] es una propiedad extensiva. En un cuerpo compuesto se suman las contribuciones térmicas de sus partes: recipiente, liquido, tapa, sensor o muestra. Esa suma explica por que un calorimetro real no puede ignorarse: el recipiente también absorbe calor y altera el balance si su capacidad calorifica es comparable a la de la muestra.\r
\r
A escala microscopica, el calor absorbido aumenta energías internas de traslacion, vibracion, rotacion o modos colectivos. Cerca del cero absoluto, muchos modos no estan disponibles y [[C]] puede variar de forma fuerte con la temperatura. Cerca de una transicion de fase, la relación lineal también falla porque la energía cambia estructura sin producir un [[DeltaT]] ordinario.\r
\r
En una grafica de [[Q]] frente a [[DeltaT]], [[C]] es la pendiente. Una recta muy empinada corresponde a un cuerpo que necesita mucha energía para cambiar poco de temperatura. Una recta poco empinada corresponde a un cuerpo que responde con grandes cambios de temperatura ante poca energía.\r
\r
La estructura del concepto se ve mejor pensando en balances. Si varios elementos comparten una temperatura final, cada uno exige una parte del calor proporcional a su capacidad calorifica. El elemento con mayor [[C]] domina la respuesta del conjunto y arrastra la temperatura de equilibrio hacia su estado inicial. Por eso una muestra pequeña dentro de un calorimetro pesado puede parecer anomala si se ignora el instrumento: no falla la muestra, falla la frontera elegida para el sistema.\r
\r
También hay una lectura diferencial. Si el grafico experimental se curva, la pendiente local cambia y ya no hay una única capacidad que describa todo el intervalo. En ese caso se habla de capacidad media para un tramo o de capacidad dependiente de la temperatura. Esta distincion es importante en materiales a baja temperatura, en solidos cerca de transiciones estructurales y en fluidos cuando aparecen evaporacion o mezclas de fase.\r
\r
## Interpretación física profunda\r
\r
La capacidad calorifica no es calor almacenado como si fuera una sustancia dentro del cuerpo. Es una relación entre energía intercambiada y respuesta térmica. Un cuerpo con gran [[C]] no esta necesariamente más caliente; solo tiene mayor capacidad de absorber o ceder calor con menor variación de temperatura.\r
\r
Esta lectura evita un error frecuente: comparar materiales solo por su calor específico. Un material con c alta pero poca masa puede tener menor capacidad calorifica total que un bloque grande de otro material con c menor. En problemas reales, la pregunta correcta es casi siempre sobre el cuerpo completo.\r
\r
## Orden de magnitud\r
\r
Una moneda metalica puede tener [[C]] de pocos J/K. Una taza de agua ronda cientos de J/K. Un litro de agua tiene unos miles de J/K. Un deposito domestico de cien litros tiene cientos de miles de J/K. Esa escala explica por que el agua se usa como regulador térmico y por que calentar grandes masas de liquido requiere mucha potencia.\r
\r
En laboratorio, la capacidad del calorimetro puede ser de decenas o cientos de J/K. Si la muestra es pequeña, ese valor no es despreciable y debe entrar en el balance. En ingenieria, paredes, fluidos y estructuras pueden alcanzar millones de J/K.\r
\r
## Método de resolución personalizado\r
\r
Primero identifica si el proceso es de calor sensible sin cambio de estado. Segundo decide si se conoce [[C]] directamente o si hay que construirla a partir del material y la masa. Tercero fija el signo de [[DeltaT]] como temperatura final menos temperatura inicial. Cuarto calcula [[Q]] o [[C]] con la formula del leaf y revisa que los signos sean coherentes.\r
\r
Si el resultado da [[C]] negativa, no lo interpretes como material exotico: revisa signos. Si [[Q]] y [[DeltaT]] no tienen el mismo signo, el planteamiento esta invertido.\r
\r
## Casos especiales y ejemplo extendido\r
\r
En un calorimetro, la capacidad calorifica del recipiente se comporta como masa térmica adicional. Si una resistencia entrega energía a agua dentro de un vaso metalico, parte calienta el agua y parte calienta el vaso. Ignorar el vaso hace que la energía parezca menor o que el calor específico calculado de la muestra salga sesgado.\r
\r
En un cuerpo compuesto se calcula una capacidad efectiva. Por ejemplo, una botella con liquido, vidrio y tapa tiene una [[C]] total que es la suma física de cada parte. Esa capacidad total es la que decide cuanto cambia la temperatura de todo el conjunto ante una entrada de calor.\r
\r
## Preguntas reales del alumno\r
\r
Por que dos objetos del mismo material tienen distinta [[C]]? Porque [[C]] depende de la cantidad de materia del objeto, no solo del material.\r
\r
Puedo usar grados Celsius para [[DeltaT]]? Si, para diferencias de temperatura un kelvin y un grado Celsius tienen el mismo tamaño.\r
\r
Por que [[C]] no puede ser negativa? Porque un cuerpo estable que absorbe calor aumenta su temperatura; si sale negativa, hay un error de signos o de datos.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con calor, calor específico y calorimetria. En calorimetria, cada cuerpo pesa en el equilibrio segun su capacidad calorifica. En cambios de estado, la formula de [[C]] deja de bastar porque aparece calor latente. En ingenieria térmica, [[C]] se combina con potencia para estimar tiempos de calentamiento y enfriamiento.\r
\r
## Síntesis final\r
\r
[[C]] mide la energía por kelvin necesaria para cambiar la temperatura de un cuerpo concreto. [[Q]] y [[DeltaT]] describen el proceso; [[C]] describe la respuesta térmica del cuerpo. La relación es lineal solo mientras no haya cambio de estado y mientras la capacidad calorifica sea aproximadamente constante.\r
`;export{e as default};
