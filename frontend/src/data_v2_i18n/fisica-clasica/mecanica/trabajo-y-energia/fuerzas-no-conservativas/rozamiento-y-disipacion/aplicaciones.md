# Aplicaciones

## 1. Frenos de vehiculos

Variable dominante: [[Pdis]].

En una frenada, el rozamiento convierte energia mecanica del vehiculo en calor en discos, pastillas, neumaticos y carretera. La distancia de frenado depende del trabajo total [[Wr]], pero el riesgo de fallo depende de cuanta energia [[Edis]] se concentra por unidad de tiempo. Por eso dos frenadas con la misma energia inicial no son equivalentes si una ocurre en pocos segundos y otra en un tramo mas largo.

La lectura util para el profesor es conectar tres niveles: [[fr]] explica la fuerza de contacto, [[Wr]] explica la perdida de energia mecanica y [[Pdis]] explica el calentamiento. Asi el alumno entiende por que el mismo balance de energia puede hablar de seguridad, distancia y dano material.

Límite de validez: el coeficiente [[mu]] cambia con temperatura, humedad, desgaste y bloqueo de ruedas. En una frenada con ABS, neumaticos degradados o asfalto mojado, el valor constante de [[mu]] es solo una primera aproximacion.

## 2. Maquinas herramienta y guias lineales

Variable dominante: [[Edis]].

En guias, carros y bancadas, el rozamiento reduce eficiencia y puede deformar piezas por calentamiento local. La energia disipada por ciclo permite comparar materiales, tratamientos superficiales y lubricantes. Si una maquina repite miles de recorridos, una perdida pequena por ciclo se convierte en una carga energetica y termica importante.

El balance entre [[Emi]] y [[Emf]] ayuda a distinguir energia invertida en trabajo util de energia degradada en contacto. Esta lectura es especialmente didactica porque muestra que el rozamiento no es solo una fuerza que frena, sino un mecanismo que convierte energia mecanica organizada en energia menos aprovechable.

Límite de validez: cuando hay lubricacion hidrodinamica, el contacto seco deja de ser el modelo principal y la fuerza depende de viscosidad, velocidad y espesor de pelicula.

## 3. Cintas transportadoras y sistemas de manutencion

Variable dominante: [[fr]].

La fuerza de rozamiento determina la potencia minima del motor y las perdidas energeticas acumuladas. Un aumento pequeno de [[mu]] o [[N]] puede multiplicar costes si la distancia [[d]] se repite durante miles de ciclos diarios. En mantenimiento industrial, esta lectura permite detectar alineaciones deficientes, carga excesiva o superficies contaminadas.

El modelo tambien sirve para plantear decisiones: reducir [[N]], modificar materiales o controlar [[mu]] puede reducir [[Edis]]. Si se conoce el tiempo de operacion, [[Pdis]] traduce la perdida energetica a demanda de potencia y calentamiento de componentes.

Límite de validez: si hay rodillos, deformacion de banda o deslizamiento intermitente, hay que separar rozamiento seco, resistencia a la rodadura y perdidas internas del material.

## 4. Deportes y seguridad

Variable dominante: [[mu]].

La adherencia de zapatillas, neumaticos, esquies o superficies deportivas controla aceleracion, frenada y riesgo de caida. El mismo [[Wr]] que frena tambien disipa energia y calienta o desgasta el contacto. Un pavimento con [[mu]] bajo reduce el trabajo disipativo por metro y aumenta la distancia necesaria para detenerse.

Esta aplicacion permite discutir por que el rozamiento puede ser deseable o indeseable. En una frenada es necesario; en una articulacion mecanica puede ser una perdida; en escalada o atletismo es condicion de seguridad. El criterio no es "mas rozamiento siempre es mejor", sino que el valor de [[mu]] debe corresponder a la funcion del sistema.

Límite de validez: el coeficiente no es universal; depende del material, humedad, rugosidad, contaminacion y temperatura.

## 5. Diseno de cojinetes y articulaciones

Variable dominante: [[Pdis]].

En cojinetes, bisagras y articulaciones, una potencia disipada sostenida puede elevar la temperatura aunque la energia por vuelta parezca pequena. El diseno debe evacuar el calor generado por [[Edis]] y reducir [[fr]] mediante lubricacion o geometria. La pregunta clave no es solo cuanta energia se pierde, sino si el sistema puede disiparla sin cambiar de regimen.

El balance de rozamiento ayuda a estimar mantenimiento: si [[Pdis]] aumenta, puede haber falta de lubricante, incremento de [[N]] o deterioro del contacto. En clase, este ejemplo muestra que una formula energetica tambien sirve como herramienta de diagnostico tecnico.

Límite de validez: en regimen lubricado, el modelo de rozamiento seco se sustituye por un modelo viscoso o elastohidrodinamico.

## Lectura integrada de aplicaciones

En todas las aplicaciones aparece la misma cadena causal: el contacto fija [[N]] y [[mu]], esas magnitudes determinan [[fr]], la distancia [[d]] acumula [[Wr]] y el resultado se interpreta como [[Edis]] o como [[Pdis]] si importa el tiempo. Esta continuidad permite usar el leaf como herramienta transversal, no como una formula aislada.

La diferencia entre contextos esta en la pregunta de diseno. En frenos se busca detener con seguridad; en guias se busca precision; en cintas se busca eficiencia; en deporte se busca adherencia controlada; en cojinetes se busca evitar sobrecalentamiento. El mismo modelo se adapta porque separa fuerza, energia y potencia.

Como cierre aplicado, el dato numerico nunca debe quedar solo. Hay que preguntar si [[Edis]] es grande para el sistema, si [[Pdis]] puede evacuarse y si [[mu]] seguira siendo valido despues del calentamiento. Esa triple comprobacion convierte el calculo en criterio fisico.
