const e=`## 1. Cuerdas vibrantes

En una cuerda tensa, la onda transversal es la primera aplicacion visible. El pulso avanza a lo largo de la cuerda, pero cada punto de la cuerda se desplaza lateralmente. La magnitud dominante es [[u_perp]], porque la perturbacion se lee perpendicular al avance.

Variable dominante: [[u_perp]], porque permite reconocer que el movimiento local es perpendicular a la propagacion.

Limite de validez: la cuerda debe estar suficientemente tensa y el desplazamiento debe ser pequeño frente a la longitud observada. Si el movimiento se vuelve caotico o aparecen torsiones, la clasificacion simple pierde claridad.

Esta aplicacion permite separar dos ideas. La onda transporta energia y forma, pero no transporta la cuerda completa hacia delante. Una marca sobre la cuerda oscila alrededor de su posicion, mientras el pulso viaja. Por eso una camara lateral sirve para medir [[u_perp]] y estimar [[C_T]].

Tambien ayuda a discutir polarizacion. Si la cuerda puede vibrar en varios planos, la direccion de [[u_perp]] puede cambiar aunque la onda siga siendo transversal. La clasificacion se mantiene porque la comparacion se hace respecto al avance, no respecto al suelo del laboratorio.

## 2. Sonido en aire

El sonido en aire es el ejemplo cotidiano de onda longitudinal. La perturbacion no consiste en una altura visible, sino en compresiones y rarefacciones que avanzan por el medio. La magnitud dominante es [[u_parallel]], porque el movimiento local del aire es paralelo al avance de la onda.

Variable dominante: [[u_parallel]], porque las compresiones se alinean con la direccion de propagacion.

Limite de validez: el aire debe comportarse como medio continuo y las variaciones de presion no deben ser tan grandes como para producir choques. En sonido ordinario, la lectura longitudinal es muy robusta.

Esta aplicacion corrige una intuicion visual. Que no se vea una cresta no significa que no haya onda. Un microfono detecta presion variable, y esa variacion es la señal de una perturbacion longitudinal. El indice [[C_L]] ayuda a traducir esa idea al lenguaje de componentes.

En un tubo, esta lectura permite explicar resonancias acusticas sin dibujar una cuerda imaginaria. Los maximos y minimos relevantes pueden ser de presion o de desplazamiento paralelo, no de altura transversal visible.

## 3. Ondas sismicas

En sismologia aparecen ondas longitudinales y transversales en el mismo planeta. Las ondas primarias comprimen y dilatan el material en la direccion de propagacion; las ondas secundarias desplazan el material de forma transversal. La diferencia permite inferir propiedades internas de la Tierra.

Variable dominante: la comparacion entre [[C_T]] y [[C_L]], porque el diagnostico se hace identificando que componente se propaga.

Limite de validez: el medio terrestre es heterogeneo, de modo que la clasificacion local puede cambiar con profundidad y composicion. Aun asi, la distincion de componentes sigue siendo esencial para interpretar registros.

El hecho de que ciertas ondas transversales no atraviesen fluidos ayuda a deducir capas internas. Esta aplicacion muestra que la clasificacion no es escolar: conecta directamente con mediciones reales del interior terrestre.

En un registro sismico, distinguir tiempos de llegada no basta. La forma de movimiento del suelo tambien informa sobre el tipo de onda y sobre el material atravesado. Por eso la orientacion de la perturbacion se convierte en dato geofisico.

## 4. Resortes y muelles

Un muelle permite producir ambos tipos de manera controlada. Si se agita lateralmente, domina [[u_perp]]. Si se comprime y se suelta, domina [[u_parallel]]. La misma pieza de laboratorio sirve para mostrar que el tipo de onda depende de la excitacion, no solo del objeto.

Variable dominante: [[A]], porque actua como escala comun para comparar las dos componentes.

Limite de validez: las deformaciones deben ser pequeñas para que el muelle responda de forma regular. Si las espiras chocan o se retuercen, aparecen modos que no encajan en una clasificacion pura.

En clase, este montaje es util porque obliga a fijar primero la direccion de avance. Despues, el alumno puede decidir si el desplazamiento local es perpendicular o paralelo. La comparacion visual se vuelve una lectura fisica.

El muelle tambien muestra que el medio no determina por si solo una unica etiqueta. La excitacion lateral o la compresion inicial seleccionan modos distintos, y esa seleccion se refleja en los valores relativos de [[C_T]] y [[C_L]].

## 5. Diseño de sensores

Clasificar una onda decide que sensor conviene usar. Para una onda transversal en una cuerda, una camara o un sensor de posicion lateral puede ser suficiente. Para una onda longitudinal en aire, hace falta un microfono, un sensor de presion o un metodo que mida compresiones.

Variable dominante: el componente que se desea medir, [[u_perp]] o [[u_parallel]], porque cada sensor responde a una orientacion distinta de la perturbacion.

Limite de validez: el sensor debe estar alineado con la magnitud fisica relevante. Un sensor lateral mal elegido puede no detectar bien una onda longitudinal aunque la onda sea intensa.

Esta aplicacion conecta el concepto con practica experimental. No se trata solo de nombrar el tipo de onda, sino de decidir que magnitud observar. Una clasificacion correcta evita montar un experimento que mira en la direccion equivocada.

En control de calidad o instrumentacion, esta decision ahorra errores caros. Un sensor que mide posicion transversal puede registrar muy poco en una onda longitudinal intensa, mientras un sensor de presion puede ignorar parte de un modo transversal.
`;export{e as default};
