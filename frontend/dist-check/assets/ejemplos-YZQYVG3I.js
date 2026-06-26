const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una caja se mueve sobre una superficie horizontal. Sobre ella actua una fuerza de arrastre de modulo [[F]] igual a 80 N, aplicada con un angulo [[theta]] de 35 grados respecto a la direccion de avance. El desplazamiento neto en el tramo estudiado es [[d]] igual a 6 m. Se pide calcular el trabajo [[W]] realizado por esa fuerza, interpretar su signo y decidir si este resultado es compatible con una ganancia de energia cinetica en ausencia de otras contribuciones relevantes.\r
\r
## Datos\r
\r
Se conocen [[F]], [[d]] y [[theta]] para un tramo unico de movimiento. El problema no requiere potencia ni evolucion temporal detallada. El objetivo es una lectura de transferencia energetica por trabajo mecanico de fuerza constante. Se asume que la orientacion de la fuerza se mantiene aproximadamente estable durante el tramo.\r
\r
## Definición del sistema\r
\r
El sistema elegido es la caja. El agente externo que tira de ella queda fuera del sistema. Esta eleccion permite interpretar [[W]] como energia transferida al sistema por una interaccion externa concreta. Si luego se desea leer balance completo, se pasa a [[Wnet]] agregando las demas contribuciones.\r
\r
## Modelo físico\r
\r
El modelo fisico usa la relacion de trabajo de fuerza constante para una interaccion con orientacion definida. Las magnitudes nucleares son [[F]], [[d]], [[theta]] y [[W]]. Como complemento de coherencia, el resultado puede leerse contra [[Wnet]] y [[dK]] para evaluar si la historia energetica global tiene sentido.\r
\r
## Justificación del modelo\r
\r
El modelo es adecuado porque el enunciado ofrece magnitudes compatibles con fuerza constante y desplazamiento neto en un tramo corto. No se pide reconstruccion de fuerza variable ni informacion temporal fina. Por eso el cierre por trabajo elemental es la entrada correcta. Si el angulo o la fuerza variaran de forma marcada durante el trayecto, seria necesario escalar el modelo.\r
\r
## Resolución simbólica\r
\r
Primero se aplica la relacion nuclear:\r
\r
{{f:trabajo_fuerza_constante}}\r
\r
Para leer la orientacion desde datos energeticos tambien puede usarse:\r
\r
{{f:angulo_desde_trabajo}}\r
\r
Si el ejercicio incluyera varias interacciones, el cierre global se expresa con:\r
\r
{{f:trabajo_neto_sumatoria}}\r
\r
Y la lectura por estados se valida con:\r
\r
{{f:teorema_trabajo_energia}}\r
\r
## Sustitución numérica\r
\r
Al sustituir [[F]] igual a 80 N, [[d]] igual a 6 m y [[theta]] igual a 35 grados, el trabajo [[W]] de la fuerza aplicada resulta aproximadamente de 393 J. El valor sale positivo, coherente con una fuerza que tiene componente en la direccion del desplazamiento.\r
\r
Este numero no debe interpretarse aislado. Significa que esa interaccion, en ese tramo, aporta energia mecanica al sistema. Si no hubiera contribuciones negativas relevantes, el sistema deberia mostrar aumento de presupuesto cinetico. Si en un escenario real apareciera frenado a pesar de este aporte, la conclusion correcta seria que existen otras fuerzas con trabajo negativo que dominan el saldo.\r
\r
## Validación dimensional\r
\r
La combinacion de [[F]] en newton y [[d]] en metros produce unidades de joule para [[W]], como exige el modelo. El angulo [[theta]] entra a traves de una funcion trigonometrica adimensional. Por tanto, el cierre dimensional es coherente con transferencia energetica mecanica.\r
\r
Tambien se valida la coherencia de signo. Con un angulo menor de 90 grados, la proyeccion efectiva de la fuerza en direccion del avance es positiva. Por eso el resultado positivo no es accidental, sino consecuencia fisica de la orientacion impuesta por el problema.\r
\r
## Interpretación física\r
\r
La interpretacion central es que no toda la fuerza contribuye al trabajo del mismo modo. Solo la componente efectiva sobre el desplazamiento transfiere energia por trabajo. Este punto suele marcar la diferencia entre una resolucion mecanica robusta y una sustitucion automatica de numeros.\r
\r
El resultado positivo indica aporte energetico al movimiento de la caja. Si el sistema estaba inicialmente en desplazamiento lento y sin resistencias importantes, se espera incremento de rapidez. Si existieran resistencias fuertes, el aporte seguiria existiendo, pero deberia compararse con trabajos negativos para leer [[Wnet]] y decidir el efecto final sobre [[dK]].\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En logistica urbana, un operario arrastra un contenedor con asa inclinada en una rampa suave de descarga. El equipo de seguridad quiere estimar si el gesto tecnico elegido favorece transferencia energetica util o produce esfuerzo poco eficiente por mala orientacion de la fuerza. No buscan detalle temporal fino, sino lectura energetica de tramos de trabajo repetitivo.\r
\r
En una medicion de campo, para un tramo representativo se estima una fuerza aplicada [[F]] de 140 N, un desplazamiento [[d]] de 9 m y un angulo [[theta]] cercano a 25 grados respecto al avance efectivo del contenedor. Tambien se observa rozamiento significativo en ruedas mal mantenidas, por lo que el analisis necesita distinguir contribucion motora y saldo neto.\r
\r
## Estimación física\r
\r
Con los datos de la fuerza aplicada, el trabajo motor de esa interaccion sobre el tramo resulta del orden de mil julios y sale positivo. Esa escala es coherente con maniobras repetidas de arrastre de carga en operaciones de reparto. Sin embargo, una fraccion importante de ese aporte puede ser compensada por trabajo resistente de contacto si el mantenimiento del rodado es deficiente.\r
\r
La estimacion energetica permite dos decisiones practicas. Primera, revisar el angulo de arrastre para mantener [[theta]] en zona favorable y evitar perdida de aporte util. Segunda, reducir resistencias pasivas para que la diferencia entre trabajo aportado y trabajo resistente aumente y mejore la eficiencia del traslado. Sin esta lectura, el equipo puede confundir esfuerzo percibido con transferencia efectiva.\r
\r
## Interpretación\r
\r
La aplicacion real muestra por que el leaf de trabajo tiene valor operativo. La magnitud [[W]] de una fuerza concreta informa sobre su aporte local. Pero la decision tecnica correcta exige pasar a [[Wnet]] cuando hay varias interacciones. Solo asi puede inferirse la variacion esperada de [[dK]] y la calidad energetica del procedimiento.\r
\r
Tambien deja una regla metodologica clara: angulos mal definidos o desplazamientos mal medidos distorsionan el resultado mas que pequeñas variaciones de modulo en la fuerza. Por eso la lectura fisica de [[theta]] y [[d]] es tan importante como medir [[F]].\r
\r
En resumen, el ejemplo de logistica convierte una tarea cotidiana en un problema de transferencia energetica cuantificable. Esa conversion es precisamente la competencia que este leaf busca consolidar.`;export{e as default};
