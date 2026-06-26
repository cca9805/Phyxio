# Modelos fisicos en rotacion con rozamiento

## Modelo ideal
El modelo ideal del leaf trata el frenado rotacional como una dinamica con eje fijo, inercia efectiva conocida y un mecanismo disipativo dominante. El objetivo no es capturar cada detalle del contacto, sino ofrecer una estructura interpretable para leer como evolucionan [[omega]], [[alpha]] y [[K_rot]] cuando actua un torque de frenado. En esa primera lectura, el sistema se piensa como un rotor rigido cuya respuesta se resume en la relacion entre torque, inercia y cambio temporal del giro.

Este modelo ideal es muy util en problemas de examen y en diagnostico preliminar porque ordena rapidamente las preguntas correctas. Si el frenado parece casi uniforme, una aproximacion de torque casi constante puede bastar. Si la rapidez de decaimiento depende de la velocidad, entonces el modelo ideal ya sugiere mirar un termino viscoso. La fuerza del modelo no esta en prometer precision absoluta, sino en mostrar con claridad que mecanismo domina.

## Hipotesis
Las hipotesis minimas son explicitas. Se supone eje de rotacion fijo, intervalo de tiempo corto, momento de inercia I constante y ausencia de aporte motor durante la ventana analizada. Tambien se exige un convenio de signos consistente: si [[omega]] es positiva, el torque disipativo debe oponerse al giro para representar frenado pasivo.

Ademas, el modelo asume que el contacto puede resumirse localmente mediante una ley efectiva. En regimen seco, esa ley se aproxima con torque_coulomb. En regimen viscoso, la dependencia con [[omega]] se resume con torque_viscoso. Si la geometria cambia, si aparecen acoplamientos flexibles o si el contacto alterna entre varios estados, estas hipotesis dejan de ser suficientes.

## Dominio de validez cuantitativo
Un criterio cuantitativo razonable es aceptar el modelo local si el error relativo de prediccion de [[omega]] se mantiene por debajo del 10 por ciento dentro de la ventana analizada. Entre 10 y 20 por ciento, el modelo sigue siendo util como primera aproximacion, pero la conclusion debe ir acompanada de advertencias. Por encima de 20 por ciento, conviene revisar el mecanismo disipativo elegido o la calidad de la medicion.

Tambien hay restricciones fisicas de dominio. Deben cumplirse I > 0, R > 0, [[mu_k]] >= 0 y [[b_rot]] >= 0. Si una identificacion entrega un radio negativo, un coeficiente viscoso negativo o un [[mu_k]] absurdo para el material, el problema no es solo numerico: el modelo esta describiendo mal el sistema.

## Senales de fallo del modelo
Una senal inmediata de fallo es que [[K_rot]] aumente durante un frenado pasivo sin aporte externo. Otra senal es que la curva de [[omega]] muestre un cambio claro de pendiente que el modelo local no puede sostener sin forzar parametros. Tambien es una alerta fuerte obtener un producto [[tau_roz]] * [[omega]] positivo, porque eso sugiere que el torque esta agregando energia en una escena que deberia disiparla.

El fallo tambien puede aparecer como incoherencia material. Si el ajuste requiere [[mu_k]] demasiado alta para un contacto lubricado, o si [[b_rot]] explica bien la zona de alta velocidad pero falla cerca de la parada, el mensaje fisico es claro: el sistema no pertenece a un regimen unico en toda la ventana.

## Modelo extendido o alternativo
El modelo extendido introduce una comparacion operativa entre torque_coulomb, torque_viscoso y un modelo mixto. En lugar de forzar un unico mecanismo, se divide la lectura en tramos o se evalua que ley explica mejor la forma temporal de [[omega]]. Con torque_coulomb, el frenado se parece mas a una desaceleracion angular casi constante. Con torque_viscoso, la velocidad cae de forma progresiva y la ley decaimiento_exponencial se vuelve la referencia natural.

Conviene pasar al modelo alternativo cuando la pendiente de [[omega]] cambia con la propia velocidad, cuando el ajuste semilog es bueno solo en una parte del registro o cuando la energia_rotacional desciende con una curvatura que el modelo seco no puede reproducir. Esa transicion no es decorativa: marca el momento en que el alumno deja de usar la misma receta y empieza a distinguir mecanismos fisicos.

## Comparacion operativa
Operativamente, el modelo seco es mas simple y mas robusto cuando existe evidencia de contacto dominante con radio efectivo R bien definido y [[mu_k]] aproximadamente estable. El modelo viscoso es preferible cuando hay lubricacion, cuando el torque efectivo cae al disminuir [[omega]] o cuando los datos muestran una recta razonable en escala semilog. El modelo mixto exige mas datos, pero suele ser el mas realista en sistemas industriales.

La comparacion no debe cerrarse solo con error de ajuste. Tambien debe considerar trazabilidad causal, interpretabilidad de parametros y utilidad para decidir una accion tecnica. Un modelo apenas mas preciso pero fisicamente opaco puede ser peor que uno un poco mas simple y claramente interpretable. Ese es el criterio operativo central de este leaf.
