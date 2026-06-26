const e=`# Modelos\r
\r
## Modelo ideal\r
\r
El modelo ideal es el punto de partida del leaf. Supone que el resorte responde de forma lineal, que no hay perdida apreciable y que toda la energia almacenada puede describirse con una sola variable de estado. En este marco, [[Ue]] resume el comportamiento energetico del sistema sin necesidad de resolver la historia temporal completa.\r
\r
Este modelo es el adecuado cuando la deformacion es pequena o moderada y cuando el material trabaja dentro de su zona elastica. La utilidad principal del modelo ideal es su claridad: permite pasar de la observacion de una deformacion a la energia almacenada con un numero minimo de variables y con una interpretacion directa.\r
\r
## Hipótesis\r
\r
El modelo reposa sobre tres hipótesis fuertes. La primera es que la deformacion se mide siempre desde la longitud natural. La segunda es que la relacion fuerza-deformacion sigue siendo lineal. La tercera es que las perdidas son pequenas frente a la energia elastica acumulada. Si una de esas condiciones cae, el resultado deja de ser una descripcion completa del sistema.\r
\r
En uso escolar, estas hipotesis se aceptan porque permiten una lectura clara del problema y porque producen predicciones robustas para deformaciones moderadas. La clave no es tratarlas como dogmas, sino como condiciones de trabajo que deben comprobarse antes de calcular.\r
\r
## Dominio de validez cuantitativo\r
\r
El dominio de validez no se decide solo por intuicion. Una regla util es mantener la deformacion relativa por debajo de un umbral de seguridad, por ejemplo cuando la extension o compresion es claramente pequena frente a la longitud natural. Otro criterio practico es verificar que la curva fuerza-deformacion no se aparte de manera apreciable de una recta. Como guia operativa, si la deformacion supera aproximadamente el diez por ciento de la longitud natural, o si el ajuste lineal ya no reproduce la respuesta con buena aproximacion, conviene abandonar el modelo ideal.\r
\r
Criterio cuantitativo explícito: usa el modelo ideal solo si la deformacion relativa es menor que ese orden de magnitud y la respuesta experimental sigue siendo casi lineal; si no, cambia de modelo antes de concluir.\r
\r
En terminos operativos, si al aumentar la carga la respuesta deja de ser proporcional, el modelo lineal ya no basta. Lo mismo ocurre si la pieza muestra memoria mecanica, deformacion residual o cambios visibles de rigidez. Ese umbral cuantitativo convierte el modelo en una herramienta de decision y no solo en una expresion simbolica.\r
\r
## Señales de fallo del modelo\r
\r
Las señales de fallo aparecen cuando el resorte ya no vuelve a su estado original, cuando el esfuerzo aplicado deja marcas permanentes o cuando la energia prevista no coincide de forma estable con la observacion. Tambien hay fallo cuando el calculo conserva la coherencia algebraica pero contradice la lectura fisica del sistema.\r
\r
Otra senal es la sensibilidad extrema del resultado a pequenas variaciones de deformacion. Si un cambio minimo en [[x]] produce un comportamiento que el montaje real no puede sostener, hay que revisar el modelo antes de seguir. El objetivo es detectar el desajuste temprano, no justificarlo al final.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el sistema abandona el ideal, el siguiente paso es introducir perdidas, no linealidades o acoplamientos adicionales. En algunos problemas basta con conservar la idea de energia almacenada y sumar una correccion disipativa. En otros, el resorte debe describirse con una ley no lineal o con un conjunto de resortes equivalentes.\r
\r
El modelo alternativo no invalida el anterior; lo sitúa en su dominio correcto. Por eso [[We]] sigue siendo util como referencia conceptual, pero deja de representar por si solo el balance total cuando existen rozamientos o histéresis importantes.\r
\r
## Comparación operativa\r
\r
La comparacion entre modelos ayuda a decidir rapidamente. El ideal sirve para problemas limpios, la version extendida para sistemas con perdidas, y el no lineal para casos donde la geometria o el material ya no responden con proporcionalidad. La eleccion correcta depende de la pregunta fisica y del nivel de precision necesario.\r
\r
La transicion es explicita: cuando la deformacion relativa supera el rango lineal seguro, cuando aparece histéresis o cuando la curva fuerza-deformacion deja de ser casi recta, conviene cambiar de modelo antes de seguir calculando.`;export{e as default};
