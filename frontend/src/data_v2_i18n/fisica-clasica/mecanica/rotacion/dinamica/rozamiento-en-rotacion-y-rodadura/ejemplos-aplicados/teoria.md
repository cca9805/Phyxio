# Ejemplos Aplicados

## Contexto conceptual

Este leaf no trata solo de "hacer cuentas" de rotacion con rozamiento. Trata de aprender a leer un frenado rotacional real y decidir que modelo disipativo explica mejor la evolucion observada. La pregunta central es fisica: cuando una maquina o un volante disminuyen su velocidad [[omega0]] angular [[omega]], que parte de esa caida se explica con contacto seco, que parte con amortiguamiento viscoso y cuando hace falta un modelo mixto.

En esta familia de problemas, la magnitud [[omega]] no es solo un dato cinematico. Es la pista principal para reconstruir el mecanismo disipativo. Su forma temporal muestra si el frenado parece casi uniforme, si cae de modo progresivo o si cambia de regimen. Del mismo modo, [[K_rot]] [[K_rot]] no es un numero decorativo. La energia rotacional sirve como control de coherencia: en frenado pasivo debe disminuir, y si no lo hace el error esta en signos, unidades o hipotesis.

Por eso los ejemplos aplicados de este leaf ocupan un lugar especial en dinamica rotacional. Conectan teoria, formulas, medicion y decision tecnica. Un alumno competente no solo calcula [[alpha]], sino que tambien sabe decir por que ese valor tiene sentido, que hipotesis lo sostienen y en que punto conviene abandonar un modelo demasiado simple.

## 🟢 Nivel esencial

La intuicion esencial empieza sin ecuaciones largas. Si un rotor gira y nadie lo empuja, cualquier caida de la velocidad angular debe leerse como efecto de un torque disipativo. En lenguaje fisico simple: algo en el contacto o en el medio se opone al giro y extrae energia del sistema. Esa energia perdida aparece como disminucion de la energia de giro, calentamiento, vibracion o ruido, no como desaparicion misteriosa del movimiento.

La primera lectura cualitativa consiste en mirar como cae la velocidad. Si la bajada parece casi lineal en una ventana corta, es razonable sospechar un torque aproximadamente constante. Si la caida es rapida al principio y mas suave despues, el rozamiento viscoso gana protagonismo. Y si el comportamiento cambia al acercarse a la parada, probablemente no exista un unico mecanismo dominante en toda la maniobra.

Tambien es esencial entender el papel del radio efectivo [[R]]. Cuando el rozamiento nace en un contacto localizado, la misma fuerza [[N_normal]] tangencial genera mas o menos efecto segun donde actue respecto al eje. Un brazo mecanico mayor produce un torque mayor. Por eso un cambio pequeno en el radio puede alterar bastante el frenado incluso si la fuerza de contacto parece similar.

Otra idea esencial es no confundir medicion con modelo. Que podamos medir la velocidad con mucha precision no significa que conozcamos automaticamente el mecanismo disipativo. Los datos solo se vuelven conocimiento cuando se comparan con un modelo fisico y con controles de coherencia. El alumno debe poder narrar la escena: que elemento roza, que forma tiene la curva temporal y que tipo de perdida parece dominar.

## 🔵 Nivel formal

En el nivel formal aparecen las relaciones matematicas que organizan esta lectura. La formula basica es dinamica_rotacional:

{{f:dinamica_rotacional}}

Esta relacion dice que la aceleracion angular [[alpha]] depende del torque disipativo neto y del momento de inercia [[I]]. Si I es grande, el mismo torque cambia [[omega]] mas lentamente. Si el torque es intenso, la variacion de [[omega]] se vuelve mas rapida.

Cuando el mecanismo dominante es contacto seco, una ley util es torque_coulomb:

{{f:torque_coulomb}}

Aqui aparecen dos magnitudes fisicamente decisivas del leaf: [[mu_k]] y R. El coeficiente [[mu_k]] resume la interaccion material y R fija el brazo de palanca del contacto. Esta formula es muy util en frenos, zapatas, rodillos y problemas donde existe un punto o zona de accion bien definida.

Cuando domina un medio viscoso o un lubricante, la ley mas apropiada es torque_viscoso:

{{f:torque_viscoso}}

El signo negativo indica oposicion al giro bajo el convenio usual. Si esta ley es valida y [[b_rot]] [[b_rot]] puede tratarse como constante, la evolucion temporal de la velocidad se resume mediante decaimiento_exponencial:

{{f:decaimiento_exponencial}}

La energia_rotacional completa la lectura cuantitativa:

{{f:energia_rotacional}}

Esta formula no solo sirve para calcular un numero. Permite verificar que el modelo describe un frenado fisico. Si [[omega]] disminuye, [[K_rot]] debe disminuir tambien. Si la prediccion rompe esa coherencia, el problema no es solo algebraico, sino conceptual.

## 🔴 Nivel estructural

El nivel estructural pregunta cuando estas formulas dejan de ser una buena representacion del sistema. La primera condicion es la validez local. Muchas veces una ventana corta puede aproximarse con torque casi constante, pero esa misma ley falla al ampliar el intervalo. En otras situaciones, una ley viscosa explica bien la zona de alta velocidad y deja residuos sistematicos cerca de la parada, donde el contacto seco se vuelve mas importante.

La segunda condicion estructural es la coherencia de parametros. I debe ser positiva. R debe ser un radio efectivo realmente asociado al punto de accion del contacto. [[mu_k]] y [[b_rot]] no pueden adoptar valores arbitrarios solo para "hacer cerrar" una cuenta. Si la identificacion produce parametros absurdos, el fallo esta en el modelo o en los datos.

La tercera condicion es energetica. Un frenado pasivo debe extraer energia del rotor. Por eso la comparacion entre [[omega]] y [[K_rot]] no es un lujo didactico. Es un filtro estructural que separa un modelo fisicamente interpretable de un ajuste matematico superficial. En este leaf, entender la estructura significa aceptar que una buena solucion no depende solo del error numerico, sino tambien de la trazabilidad causal y del dominio de validez.

## Interpretacion fisica profunda

La lectura profunda del leaf aparece cuando el estudiante deja de ver cada formula como una receta aislada y empieza a compararlas como hipotesis sobre el mecanismo de frenado. torque_coulomb cuenta la historia de un contacto que disipa casi con intensidad fija. torque_viscoso cuenta la historia de una resistencia que crece con la propia velocidad. decaimiento_exponencial no es simplemente una curva bonita: es la firma temporal esperada cuando el termino viscoso domina.

En ese marco, [[omega]] se convierte en la huella experimental del mecanismo, y [[K_rot]] en el balance energetico que permite confiar o desconfiar del modelo. La decision fisica importante no es "que numero me salio", sino "que forma de perdida esta gobernando el sistema y por que". Esa pregunta es la que vuelve aplicados a los ejemplos de este leaf.

## Orden de magnitud

Antes de sustituir datos concretos conviene pensar rangos plausibles. Si I es grande, no esperamos cambios brutales de [[omega]] ante un torque moderado. Si R aumenta, un mismo contacto produce mas torque. Si [[mu_k]] es pequeno pero el frenado es muy intenso, entonces debe existir otra contribucion importante, posiblemente un termino viscoso o una carga externa no declarada.

Tambien es util comparar escalas temporales. Un frenado que reduce [[omega]] a la mitad en pocos segundos en un rotor pesado exige un torque disipativo importante. Si esa exigencia lleva a un [[mu_k]] imposible o a un [[b_rot]] negativo, el orden de magnitud ya esta avisando que el modelo elegido no representa bien la escena.

## Metodo de resolucion personalizado

Un metodo robusto para este leaf puede formularse asi:

1. Declarar convenio de signos y comprobar que [[tau_roz]] [[tau_roz]] se opone al giro.
2. Identificar si el contacto sugiere un modelo seco, viscoso o mixto.
3. Escribir primero dinamica_rotacional y despues la ley disipativa elegida.
4. Calcular [[omega]] o [[alpha]] en una ventana definida y revisar [[K_rot]].
5. Cerrar con una frase de validez: donde funciona el modelo y donde deja de funcionar.

Esta secuencia obliga a que el calculo y la interpretacion avancen juntos. El alumno no solo obtiene un resultado, sino que aprende a justificar por que ese resultado pertenece a un mecanismo fisico concreto.

## Casos especiales y ejemplo extendido

Un caso especial muy instructivo es el frenado por zapata o banda. Alli el modelo seco es natural porque existe un radio de accion R bien definido y un coeficiente [[mu_k]] asociado al material. Sin embargo, si el eje esta lubricado o si el registro temporal de [[omega]] muestra una pendiente que cambia de manera suave con la velocidad, conviene comparar la misma escena con torque_viscoso y con un modelo mixto.

Otro caso especial es el diagnostico industrial con sensores. El alumno ya no recibe solo un dato final, sino una curva de [[omega]] contra tiempo [[t]]. Eso cambia la tarea: ahora debe leer si la forma temporal parece lineal, exponencial o por tramos. En ese contexto, decaimiento_exponencial deja de ser solo una formula y se vuelve una herramienta para distinguir regimenes.

## Preguntas reales del alumno

**Como se si necesito R y [[mu_k]]?**  
Cuando el rozamiento se origina en un contacto mecanico con brazo bien definido. Si la historia fisica es "una fuerza roza en un radio", torque_coulomb es el punto de partida natural.

**Como se si necesito [[b_rot]] y decaimiento_exponencial?**  
Cuando la resistencia parece depender de [[omega]] y el frenado se suaviza al bajar la velocidad. Esa firma temporal suele apuntar a un termino viscoso dominante.

**Por que [[K_rot]] aparece tanto si el problema pide [[omega]]?**  
Porque [[K_rot]] funciona como chequeo de coherencia. Un modelo que predice una evolucion energetica imposible no debe aceptarse aunque la cuenta de [[omega]] parezca ordenada.

## Conexiones transversales y rutas de estudio

Este leaf conecta con magnitudes angulares, con rodadura y con momento de inercia. Tambien conecta con mantenimiento predictivo y con lectura de datos experimentales. La gran transferencia es metodologica: aprender a elegir entre modelos con evidencia, no solo aprender a despejar variables.

## Sintesis final

Dominar estos ejemplos aplicados significa usar [[omega]] como huella temporal del frenado, usar [[K_rot]] como filtro energetico y decidir si el sistema se entiende mejor con torque_coulomb, torque_viscoso o una descripcion mixta. Cuando esa comparacion esta bien hecha, la mecanica deja de ser una coleccion de formulas y se convierte en una lectura causal del sistema real.
