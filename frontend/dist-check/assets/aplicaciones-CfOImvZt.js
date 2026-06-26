const a=`## 1. Medicion en cuerdas

En una cuerda vibrante, la velocidad de propagacion se mide siguiendo una cresta o comparando [[lambda]] con [[f]]. La cuerda es un contexto excelente porque el alumno ve que cada punto sube y baja, mientras el patron se desplaza a lo largo de la cuerda.

Variable dominante: [[v]], porque resume la rapidez del patron que recorre la cuerda.

Limite de validez: la cuerda debe mantenerse con tension aproximadamente constante y el patron debe conservarse durante la observacion.

Esta aplicacion evita un error comun. Si se mira solo la amplitud, parece que la onda rapida es la que sube mas alto. La medicion correcta compara avance horizontal por tiempo o separacion entre crestas y frecuencia. Por eso una onda pequeña puede propagarse mas rapido que una onda alta si el medio lo permite.

En practicas, conviene marcar dos posiciones de la cuerda o grabar video. Si una cresta recorre una distancia conocida en un intervalo conocido, [[Delta_x]] y [[Delta_t]] dan una lectura directa. Si el patron es regular, medir [[lambda]] y contar [[f]] permite una segunda comprobacion.

## 2. Sonido en aire

En sonido, [[v]] describe la rapidez con que avanza la compresion y rarefaccion del aire. El valor no coincide con el movimiento medio de las moleculas, que oscilan localmente alrededor de posiciones variables.

Variable dominante: [[v]], porque permite convertir frecuencia audible en longitud de onda acustica.

Limite de validez: temperatura, composicion y movimiento del aire deben permanecer razonablemente estables.

Esta aplicacion explica por que un tono grave puede tener longitud de onda de varios metros mientras un tono agudo tiene una escala espacial menor. En el mismo aire, cambiar [[f]] no suele cambiar mucho la rapidez; cambia sobre todo [[lambda]]. La velocidad depende de propiedades del medio, no del volumen del sonido.

Una estimacion acustica permite comprobar salas y obstaculos. Si una onda sonora tiene longitud comparable al tamano de una puerta, rodea y difracta de forma distinta a una onda mucho mas corta. La rapidez de propagacion sirve de puente entre sonido percibido y geometria del espacio.

## 3. Ondas en agua

En olas superficiales, la lectura de [[v]] ayuda a distinguir ondas cortas de piscina, ondulaciones de viento y oleaje mas largo. La dificultad es que el agua puede ser dispersiva: no todas las longitudes viajan igual.

Variable dominante: [[Delta_x]], porque muchas mediciones reales se hacen siguiendo crestas entre marcas.

Limite de validez: el patron debe ser suficientemente regular y la profundidad no debe cambiar demasiado durante el recorrido.

En una piscina o canal, una camara desde arriba permite medir el avance de una cresta. Si se repite la medida con varias crestas, se obtiene una media mas robusta. Comparar esa lectura con la estimacion por [[lambda]] y [[f]] ayuda a detectar errores de escala o de conteo.

En mar abierto, la rapidez de las olas se relaciona con profundidad, periodo y longitud. El modelo elemental de este leaf es una entrada, no el final del analisis. Cuando la ola cambia al acercarse a la costa, una unica [[v]] constante puede dejar de describir todo el proceso.

## 4. Refraccion de ondas

La refraccion ocurre cuando cambia la velocidad de propagacion al entrar en otro medio o region. Si la frecuencia se conserva, el cambio de [[v]] se manifiesta como cambio de [[lambda]]. Esta lectura aparece en luz, sonido y ondas de agua.

Variable dominante: [[lambda]], porque la variacion espacial revela el cambio de rapidez cuando la fuente mantiene el ritmo.

Limite de validez: la frontera debe permitir comparar ondas antes y despues sin perder la identidad del frente.

La aplicacion es muy potente: si una onda reduce su longitud de onda dentro de un medio y mantiene su frecuencia, el medio esta reduciendo la rapidez de propagacion. En optica, esto prepara la idea de indice de refraccion; en agua, explica el giro de frentes al entrar en zonas de distinta profundidad.

Tambien ayuda a interpretar graficos. En una representacion con frentes, los frentes mas juntos indican menor velocidad si el ritmo temporal no ha cambiado. La comparacion no es decorativa; es una lectura fisica de la respuesta del medio.

## 5. Diagnostico experimental

La velocidad de propagacion sirve para comprobar si un conjunto de datos describe una sola onda. Si [[lambda]] y [[f]] dan una rapidez y [[Delta_x]] con [[Delta_t]] dan otra muy distinta, hay que buscar una causa.

Variable dominante: [[Delta_t]], porque una mala duracion de medida puede alterar la lectura directa.

Limite de validez: los dos metodos deben medir el mismo tren de ondas y no mezclar pulsos distintos.

Este diagnostico se usa en videoanalisis, sensores de laboratorio, acustica y estudios de vibraciones. Un resultado incompatible puede indicar escala de imagen mal calibrada, conteo de ciclos incorrecto, seguimiento de una cresta equivocada o cambio real de medio.

La aplicacion final es conceptual: [[v]] obliga a preguntar que patron se propaga, en que medio y durante que intervalo. Esa pregunta ordena la observacion y convierte una animacion de ondas en una medida fisica evaluable.
`;export{a as default};
