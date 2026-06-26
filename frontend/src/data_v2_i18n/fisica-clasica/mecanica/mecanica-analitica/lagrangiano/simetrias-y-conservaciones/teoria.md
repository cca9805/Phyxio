# Simetrias y conservaciones

## Contexto conceptual

Una simetria fisica significa que cierta transformacion no cambia el contenido dinamico del sistema. En mecanica lagrangiana, esa idea se lee sobre el lagrangiano [[L]]: si una transformacion continua deja invariante el modelo, aparece una cantidad conservada. Esta es la intuicion central del teorema de Noether.

El valor didactico de este leaf es que permite dejar de ver las conservaciones como reglas sueltas. Energia, momento lineal y momento angular no son trucos independientes; son respuestas a preguntas sobre el tiempo, el espacio y la orientacion. La conservacion aparece porque el modelo no distingue ciertos cambios.

## 🟢 Nivel esencial

La idea esencial es directa: si cambiar algo no altera la fisica, hay una cantidad que no cambia durante el movimiento. Si el origen temporal no importa, se conserva energia. Si desplazar todo el sistema no importa, se conserva momento lineal. Si girar el sistema no importa, se conserva momento angular.

Esta lectura es mas profunda que memorizar leyes de conservacion. La pregunta no es "que se conserva en este problema", sino "que simetria tiene el lagrangiano". Al identificar la simetria, la cantidad conservada deja de ser una suposicion y pasa a ser una consecuencia del modelo.

Tambien conviene separar dos ideas que suelen confundirse. Una simetria no significa que el sistema este quieto; significa que una eleccion de referencia no afecta al comportamiento. Una particula puede moverse con momento constante, un cuerpo puede girar con momento angular constante, y un oscilador puede intercambiar energia cinetica y potencial mientras conserva su energia total.

## 🔵 Nivel formal

El momento conjugado que entra en Noether se define desde el lagrangiano:

{{f:momento_conjugado_noether}}

Una simetria continua con generador [[X_i]] produce una carga conservada:

{{f:carga_noether}}

Cuando una coordenada no aparece explicitamente en [[L]], su momento conjugado se conserva:

{{f:coordenada_ciclica}}

La invariancia ante traslaciones temporales produce una energia conservada:

{{f:energia_por_invariancia_temporal}}

La invariancia ante traslaciones espaciales da el caso elemental de momento lineal:

{{f:momento_lineal_por_traslacion}}

La invariancia ante rotaciones da el caso plano simple de momento angular:

{{f:momento_angular_por_rotacion}}

Estas formulas no son una lista de atajos. Todas expresan la misma estructura: una direccion de cambio que no altera [[L]] produce una cantidad que permanece constante. [[DLv]] define la pendiente conjugada, [[p_i]] se acopla al generador, y la cantidad conservada concreta depende de que simetria se haya identificado.

La velocidad generalizada [[qdi]] aparece en la energia y en la definicion de [[p_i]]. La magnitud [[dpdt]] es el test operativo de conservacion: no dice que la coordenada este quieta, sino que el momento conjugado asociado no cambia con el tiempo.

Formalmente, el procedimiento siempre tiene dos pasos. Primero se calcula la cantidad candidata desde [[L]]: una derivada respecto de [[qdi]], una carga asociada a [[X_i]] o una energia construida con [[p_i]]. Despues se comprueba la condicion de simetria. Sin esa segunda comprobacion, la expresion algebraica puede existir, pero no autoriza una ley de conservacion.

## 🔴 Nivel estructural

Estructuralmente, Noether convierte una propiedad del modelo en una restriccion sobre la evolucion. No dice que todo sistema conserve energia, momento o momento angular. Dice que cada conservacion necesita una simetria precisa. Si una fuerza externa distingue posiciones, se rompe la simetria traslacional. Si un torque externo distingue orientaciones, se rompe la simetria rotacional. Si el lagrangiano cambia explicitamente con el tiempo, puede fallar la conservacion energetica.

La potencia del metodo esta en anticipar integrales de movimiento antes de resolver la trayectoria completa. Una coordenada ciclica reduce el problema porque su momento conjugado queda fijado. Una simetria espacial reduce el numero de variables efectivas. Asi, la conservacion no es solo una comprobacion posterior: es una herramienta de modelado.

Tambien hay un limite conceptual. Una cantidad aproximadamente constante puede deberse a una simetria aproximada, a una escala temporal corta o a una cancelacion accidental. Noether exige una simetria continua del lagrangiano o de la accion. Por eso conviene distinguir entre conservacion exacta, aproximada y numerica.

Esta distincion es clave al comparar teoria y experimento. Si [[Q]] cambia menos que la incertidumbre instrumental, puede tratarse como conservada para ese uso concreto. Si la deriva crece de manera sistematica, el modelo esta avisando de una ruptura: rozamiento, torque externo, dependencia temporal o una eleccion incorrecta de coordenadas. La conservacion, por tanto, no solo simplifica calculos; tambien funciona como prueba de validez del modelo.

## Interpretacion fisica profunda

La interpretacion profunda es que el sistema no guarda memoria de ciertas elecciones humanas. El origen del tiempo, el origen del espacio o la orientacion absoluta pueden ser irrelevantes para la fisica. Cuando una de esas elecciones no importa, aparece una cantidad que no cambia.

Este enfoque cambia la forma de resolver problemas. En lugar de comenzar integrando ecuaciones, se buscan invariancias. Si el problema tiene simetria, esa informacion debe usarse antes de hacer calculos largos.

## Orden de magnitud

En el caso traslacional simple, si [[m]] es de orden un kilogramo y [[v]] de orden un metro por segundo, [[P]] tiene orden de un kg m/s. Si el brazo radial [[r]] es de orden un metro, [[J]] tiene orden de un kg m^2/s. Estas escalas ayudan a detectar confusiones entre momento lineal y angular.

La carga [[Q]] puede tener unidades distintas segun la simetria. No hay una unidad universal de Noether; la unidad la fija el generador [[X_i]] y el momento conjugado asociado.

## Metodo de resolucion personalizado

Primero escribe [[L]] en las coordenadas adecuadas. Segundo pregunta si alguna coordenada no aparece explicitamente. Tercero identifica si hay invariancia temporal, traslacional o rotacional. Cuarto calcula el momento conjugado [[p_i]] o la carga [[Q]] correspondiente.

Quinto verifica que la simetria no este rota por fuerzas externas, potenciales dependientes de posicion, torques o dependencia temporal. Sexto usa la cantidad conservada para reducir el problema antes de resolver la trayectoria.

## Casos especiales y ejemplo extendido

Una particula libre ilustra la simetria traslacional: ninguna posicion absoluta es especial, por lo que [[P]] se conserva. Un potencial central ilustra la simetria rotacional: ninguna orientacion absoluta es especial, por lo que [[J]] se conserva. Un lagrangiano autonomo ilustra la simetria temporal: ninguna hora absoluta es especial, por lo que [[E]] se conserva.

Una coordenada angular puede ser ciclica aunque el movimiento no sea simple. Si el lagrangiano no depende de esa coordenada, su momento conjugado permanece constante incluso si otras coordenadas evolucionan de forma compleja.

## Preguntas reales del alumno

Una pregunta frecuente es si toda conservacion viene de una simetria. En el marco lagrangiano regular, las conservaciones continuas profundas se entienden mediante Noether, pero en cursos iniciales algunas se presentan como reglas aisladas. Este leaf une esas reglas.

Otra duda es si simetria significa que nada cambia. No. Simetria significa que una transformacion del modelo no altera la fisica. El sistema puede moverse, pero cierta cantidad asociada permanece constante.

Tambien aparece la pregunta inversa: si una magnitud parece constante en datos reales, significa que hay una simetria exacta? No necesariamente. Puede haber una simetria aproximada, una perturbacion demasiado pequena para medirse o un intervalo temporal demasiado corto para ver la perdida. Por eso el razonamiento correcto combina formula, escala y criterio de validez.

## Conexiones transversales y rutas de estudio

Este leaf conecta con energia, cantidad de movimiento, momento angular, ecuaciones de Lagrange y Hamilton. Antes conviene dominar momento conjugado y coordenadas generalizadas. Despues, el paso natural es estudiar coordenadas ciclicas, potenciales centrales y retratos de fase.

Tambien prepara fisica moderna. Noether es una idea central en mecanica cuantica, campos clasicos y fisica de particulas: las simetrias no son decoracion matematica, sino organizadores de las leyes.

## Sintesis final

Las simetrias explican por que ciertas cantidades se conservan. La homogeneidad temporal da energia, la homogeneidad espacial da momento lineal, la isotropia da momento angular y una coordenada ciclica da conservacion del momento conjugado. El objetivo final es mirar un lagrangiano y reconocer que conservacion puede usarse antes de resolver el movimiento.
