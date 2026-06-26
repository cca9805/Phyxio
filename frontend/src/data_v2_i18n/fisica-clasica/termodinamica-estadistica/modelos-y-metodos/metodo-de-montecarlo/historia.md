## Problema histórico

El problema histórico que impulsó el método de Monte Carlo fue la imposibilidad práctica de calcular ciertos promedios físicos por enumeración directa. En sistemas con muchas partículas, el número de estados posibles crece de forma descomunal. Calcular un valor medio recorriendo todos los casos era como intentar contar cada chispa de una hoguera turbulenta. La física necesitaba estimar observables sin perder el control sobre el error.

## Dificultad conceptual previa

Antes de aceptar el muestreo aleatorio como herramienta científica, parecía extraño que el azar pudiera producir información fiable. La dificultad estaba en distinguir una muestra accidental de un promedio estadístico. Un [[valor_muestra]] aislado no basta, pero muchos valores organizados mediante [[numero_muestras]], [[varianza_muestral]] y [[error_estandar]] sí permiten construir una predicción verificable.

## Qué cambió

El cambio fue entender que una muestra aleatoria bien diseñada puede representar una región del espacio de estados. El [[estimador_montecarlo]] no promete exactitud absoluta, sino aproximación con incertidumbre cuantificada. Con reglas como Metropolis, la [[probabilidad_aceptacion]] incorporó criterios físicos ligados a [[energia_estado]], [[temperatura]] y [[constante_boltzmann]], haciendo que el muestreo respetara distribuciones térmicas.

## Impacto en la física

Monte Carlo transformó la física computacional. Permitió estudiar líquidos, sólidos, sistemas magnéticos, modelos de partículas y problemas estadísticos donde la integración directa era inviable. También cambió la forma de comunicar resultados: un número sin [[error_estandar]] dejó de ser suficiente cuando el resultado depende de muestreo. El criterio de [[probabilidad_aceptacion]] en Metropolis demostró que es posible diseñar reglas de rechazo que respetan automáticamente la distribución térmica sin necesidad de conocer la función de partición explícita. Esto abrió la puerta a simulaciones de sistemas con millones de grados de libertad.

## Conexión con física moderna

Hoy el método conecta termodinámica estadística, simulación molecular, inferencia bayesiana y física de materiales. Su lectura moderna exige mirar el promedio, la incertidumbre y la calidad del muestreo como un solo objeto físico-computacional. La distinción entre [[varianza_muestral]] y [[error_estandar]] se ha convertido en una competencia esperada en física computacional avanzada.