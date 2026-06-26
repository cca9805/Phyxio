## Modelo ideal

El modelo ideal del leaf trata la carga como una rama RLC serie lineal, lumped y excitada por una unica frecuencia sinusoidal en regimen estacionario. En ese marco, [[resistencia_serie]] concentra la disipacion media, mientras [[reactancia_inductiva]] y [[reactancia_capacitiva]] condensan el efecto reactivo de almacenamiento magnetico y electrico. La descripcion no sigue detalles geometricos ni materiales, sino el efecto equivalente que esos elementos producen sobre [[impedancia_total]], [[corriente_rms]], [[phi]], [[potencia_activa]], [[potencia_reactiva]] y [[potencia_aparente]].

Su valor didactico es alto porque permite leer la estructura de la carga antes de abrir correcciones finas. No es el mejor modelo porque sea universal, sino porque muestra con claridad como se organiza la oposicion total, por que la corriente puede crecer o caer y de que modo el [[phi]] redistribuye la demanda electrica.

## Hipótesis

La primera hipotesis es sinusoidalidad: la fuente y la respuesta relevante pueden representarse con una sola frecuencia dominante. La segunda es linealidad: los parametros equivalentes no cambian de forma dominante con la amplitud de corriente o tension durante el caso analizado. La tercera es concentracion de parametros: el tamaño fisico del montaje no introduce efectos distribuidos comparables a la respuesta de los elementos.

Tambien se supone que [[reactancia_inductiva]] y [[reactancia_capacitiva]] fueron evaluadas a la misma frecuencia y que [[tension_rms]] e [[corriente_rms]] se interpretan como valores RMS. Finalmente, el leaf fija una convencion de signo consistente para [[phi]] y [[potencia_reactiva]]: signo positivo para dominio inductivo y signo negativo para dominio capacitivo. Sin esa convencion, el calculo puede cerrar pero la lectura fisica se degrada.

## Dominio de validez cuantitativo

Como criterio operativo de primer orden, el modelo es confiable cuando la forma de onda puede tratarse como casi sinusoidal, por ejemplo con THD <= 5 por ciento, y cuando las parasitas no alteran los parametros efectivos mas de un 10 por ciento respecto a los valores usados en la resolucion. Tambien es razonable exigir que la frecuencia se mantenga en una ventana local con variacion relativa |delta f|/f <= 0.1 alrededor del punto de trabajo.

En forma compacta: THD <= 5%, |delta f|/f <= 0.10 y variacion relativa de parametros <= 10%.

En terminos practicos, el modelo serie basico es muy util cuando el objetivo es clasificar regimen, estimar corriente, comparar [[potencia_activa]], [[potencia_reactiva]] y [[potencia_aparente]] y decidir si una carga usa bien la capacidad de la red. Si el objetivo pasa a ser seguridad fina, resonancia cercana, precision de laboratorio o prediccion rigurosa de tolerancias, el dominio cuantitativo de este modelo deja de ser suficiente.

## Señales de fallo del modelo

Una primera señal de fallo aparece cuando resultados como [[corriente_rms]] o [[potencia_reactiva]] cambian demasiado ante perturbaciones pequenas de frecuencia o parametros. Si una variacion de menos del 5 por ciento dispara cambios grandes en la respuesta, el circuito puede estar operando en una zona donde el equivalente simple deja de ser robusto para decisiones tecnicas.

Otra señal de fallo es el desacoplamiento con la realidad material del montaje. Si el modelo predice demanda moderada pero el sistema real muestra calentamiento fuerte, caidas de tension, saturacion o limites de fuente no previstos, faltan resistencias parasitas, ESR, dependencia termica o no linealidades relevantes. Tambien falla el modelo si se aplica a topologias paralelas o distribuidas como si fueran ramas serie sin justificar la reduccion.

## Modelo extendido o alternativo

Cuando el modelo ideal deja de bastar, el paso natural es introducir resistencia efectiva total, perdidas del capacitor, resistencia del devanado del inductor y, si hace falta, dependencia con frecuencia o temperatura. Ese modelo extendido preserva la intuicion del leaf, pero mejora la prediccion cuantitativa y evita interpretar compensacion o cercania a resonancia con optimismo excesivo.

Cuando conviene cambiar de modelo es cuando el error esperado del equivalente serie deja de ser pequeno frente a la decision tecnica que quieres tomar. Si solo necesitas clasificar si la carga es inductiva o capacitiva, el modelo basico basta. Si necesitas especificar seguridad, margen termico, estabilidad cerca de compensacion o precision alta, fasores completos, admitancias u otros equivalentes pasan a ser el lenguaje correcto.

## Comparación operativa

El modelo ideal es superior para aprendizaje, diagnostico inicial y ejercicios donde interesa leer rapidamente el reparto entre demanda total, potencia activa y caracter reactivo. El modelo extendido es superior para predecir tolerancias, seguridad y comportamiento fino. El primero aclara. El segundo protege de conclusiones demasiado optimistas.

Elegir entre ambos no es una cuestion estetica. Si la aplicacion consiste en decidir si la carga usa mal la red, el modelo ideal puede ser suficiente. Si la aplicacion exige diseno, validacion fina o evaluacion de riesgo, el modelo extendido deja de ser opcional y pasa a ser la descripcion adecuada del sistema.