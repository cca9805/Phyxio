## Contexto conceptual

Una onda transversal de corte es una perturbacion mecanica en la que las particulas del medio se mueven perpendicularmente a la direccion de propagacion. No basta con que el medio tenga masa: debe poder ejercer fuerzas recuperadoras ante una deformacion lateral. Por eso este leaf se centra en solidos elasticos, donde la rigidez frente a cizalla permite que la perturbacion se transmita como onda S.

La pregunta central es fisica y no solo matematica: por que una onda asi existe en un solido y desaparece en un fluido ideal. En un liquido o gas, una deformacion de corte sostenida no genera una fuerza elastica restauradora comparable; el medio fluye. En un solido, en cambio, una capa desplazada lateralmente tira de las capas vecinas y la perturbacion avanza.

## 🟢 Nivel esencial

La variable que resume la rapidez de propagacion es [[v_s]]. Si el solido es mas rigido frente al corte, la onda viaja mas deprisa; si el solido es mas denso, la misma accion elastica debe acelerar mas masa y la onda se vuelve mas lenta. Esta lectura cualitativa permite anticipar el resultado antes de calcular.

El papel de [[modulo_de_cizalla]] es representar la capacidad del material para recuperar su forma ante una deformacion lateral. El papel de [[rho_medio]] es representar la inercia que se opone a cambiar el movimiento local. Una onda S es precisamente el equilibrio dinamico entre esas dos tendencias: restauracion elastica e inercia.

La diferencia con una onda longitudinal es importante. En la onda longitudinal las particulas se comprimen y se dilatan en la misma direccion en la que avanza la perturbacion. En la onda de corte, el volumen local apenas cambia; lo que cambia es la forma. Por eso un medio puede transmitir una onda P aunque no transmita una onda S, pero no al reves en el modelo elastico ordinario.

## 🔵 Nivel formal

La velocidad de corte se calcula con la relacion fundamental del modelo elastico isotropo:

{{f:velocidad_onda_s}}

La escala espacial de la perturbacion queda fijada por la frecuencia de la fuente:

{{f:longitud_onda_transversal}}

La impedancia transversal resume como el medio intercambia energia de corte en una frontera:

{{f:impedancia_transversal}}

La comparacion con ondas longitudinales permite relacionar el cociente de velocidades [[ratio_vp_vs]] con el coeficiente de Poisson:

{{f:relacion_vp_vs_poisson}}

Cuando ademas se conoce la amplitud y el ritmo angular de oscilacion, puede estimarse la densidad de energia asociada:

{{f:energia_onda_transversal}}

Estas formulas no son independientes en sentido pedagogico. Forman una cadena: primero se decide si el material puede sostener corte, luego se obtiene la velocidad, despues la longitud de onda y finalmente se interpretan interfaces, energia o comparaciones P/S.

En este nivel aparecen magnitudes que no eran necesarias para la intuicion inicial. [[impedancia_transversal]] sirve para hablar de intercambio de energia en una frontera, [[nu_poisson]] sirve para enlazar la lectura transversal con la longitudinal, y [[u_s]] exige conocer tambien amplitud y frecuencia angular. La formalizacion, por tanto, no solo calcula: ordena que informacion experimental hace falta para responder a cada tipo de pregunta.

## 🔴 Nivel estructural

La onda S es una solucion transversal de las ecuaciones elasticas lineales. El desplazamiento local no representa transporte neto de materia a larga distancia, sino oscilacion alrededor de una posicion de equilibrio. La informacion y la energia avanzan por acoplamiento entre zonas vecinas del solido.

En un medio isotropo, la direccion de polarizacion puede elegirse en cualquier plano perpendicular a la propagacion. En sismologia se habla a menudo de componentes SH y SV segun la orientacion horizontal o vertical del movimiento de particula. Esa distincion no cambia la condicion esencial: la fuerza restauradora procede del corte.

La longitud de onda debe ser mucho mayor que los granos, poros, fibras o defectos que se quieran promediar como medio continuo. Si la perturbacion empieza a resolver la microestructura, aparecen dispersion, scattering, conversion de modos y atenuacion adicional. Entonces la velocidad observada deja de ser una constante simple del material.

La estructura profunda tambien separa simetria y material. En un solido isotropo, dos polarizaciones transversales equivalentes viajan igual; en un medio anisotropo, esa equivalencia puede romperse. En un medio estratificado, una onda S incidente puede reflejarse, transmitirse o convertirse parcialmente en otro modo. Por eso una medida real de [[v_s]] se interpreta junto con geometria, frecuencia, polarizacion y condiciones de frontera.

## Interpretación física profunda

El resultado mas importante no es que exista una raiz cuadrada, sino que la propagacion se apoya en dos propiedades complementarias. [[modulo_de_cizalla]] aporta la tendencia a recuperar la forma; [[rho_medio]] aporta retraso inercial. Por eso duplicar la rigidez no duplica la velocidad, y duplicar la densidad no reduce la velocidad a la mitad.

La ausencia de ondas S en fluidos se entiende mirando el limite de rigidez de corte nula. Si no hay fuerza restauradora lateral, una capa desplazada no arrastra elasticamente a la siguiente. Puede haber viscosidad, ondas superficiales o efectos transitorios, pero no una onda de corte elastica de volumen como la descrita aqui.

## Orden de magnitud

En suelos blandos, [[v_s]] puede estar en cientos de metros por segundo. En rocas competentes y metales, suele estar entre varios miles de metros por segundo. En polimeros blandos o geles elasticos puede ser mucho menor. Estos rangos permiten detectar errores de unidades: introducir gigapascales como pascales desplaza el resultado por factores enormes.

En ultrasonidos industriales, una frecuencia de megahercios combinada con velocidades de kilometros por segundo da longitudes de onda del orden de milimetros. En sismologia, frecuencias de hercios o decimas de hercio dan longitudes de onda de metros a kilometros. La misma fisica cubre dominios muy distintos, pero la interpretacion experimental cambia.

## Método de resolución personalizado

Primero identifica si el medio puede tratarse como solido elastico. Si el enunciado habla de liquido, gas o material que fluye en la escala temporal del experimento, no uses directamente el modelo de onda S de volumen. Segundo, verifica que las magnitudes estan en SI y que la rigidez usada es la de cizalla, no la de Young ni la de compresibilidad.

Tercero, calcula [[v_s]] y compara el valor con [[v_p]] si aparece en el problema. Cuarto, usa la frecuencia para obtener [[lambda_s]] y decidir si el modelo continuo es razonable. Quinto, si hay una interfaz, interpreta [[impedancia_transversal]] antes de hablar de reflexion o transmision. Sexto, si se pide energia, introduce [[amplitud_transversal]] y [[omega_angular]] solo cuando el problema haya definido una oscilacion armonica.

## Casos especiales y ejemplo extendido

Un acero con alta rigidez de corte y densidad elevada puede tener una velocidad S de varios kilometros por segundo. Un suelo saturado puede tener mucha densidad pero baja rigidez efectiva, de modo que la velocidad S baja drasticamente. Un caucho puede tener densidad moderada y rigidez de corte pequena, por lo que transmite ondas S lentas aunque sea casi incompresible.

Si un ensayo mide llegadas P y S, el cociente entre ambas velocidades [[ratio_vp_vs]] informa sobre [[nu_poisson]]. Un material casi incompresible separa mucho las velocidades porque la onda P se vuelve muy rapida frente a la S. Un material mas compresible reduce esa separacion. La lectura debe hacerse con cuidado, porque anisotropia, fisuras o saturacion pueden alterar las velocidades aparentes.

## Preguntas reales del alumno

Si la onda es transversal, por que avanza hacia delante? Porque la direccion de avance es la direccion en la que se transmite la perturbacion, no la direccion del movimiento instantaneo de cada particula. La particula sube y baja o se desplaza lateralmente, mientras el patron de fase se desplaza por el solido.

Por que no basta con usar una cuerda como analogia? La cuerda ayuda a ver la transversalidad, pero una onda S en un solido tridimensional depende de un campo de deformacion de corte distribuido. La cuerda tiene tension externa; el solido tiene rigidez interna de cizalla.

## Conexiones transversales y rutas de estudio

Este tema conecta elasticidad, sismologia, ultrasonidos, geotecnia y ciencia de materiales. En elasticidad prepara la lectura de tensores de esfuerzo y deformacion. En sismologia explica por que las ondas S no atraviesan el nucleo externo liquido. En ingenieria permite estimar rigidez de suelos y detectar danos sin destruir la pieza.

## Síntesis final

Una onda transversal de corte es la firma dinamica de un solido capaz de resistir deformaciones laterales. Su velocidad mide la competencia entre rigidez de cizalla e inercia. Sus relaciones con longitud de onda, impedancia, energia y velocidad P convierten una idea simple en una herramienta cuantitativa para leer materiales reales.