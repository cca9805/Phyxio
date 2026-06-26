# Sistemas reales

## Contexto conceptual

La pregunta central de este leaf es directa y operativa: cuando aplicamos una fuerza motriz en una máquina o en un sistema mecánico, ¿cuánta parte de esa acción termina acelerando de verdad al conjunto? En el mundo ideal diríamos que toda la fuerza útil pasa a movimiento, pero en un sistema real eso casi nunca ocurre. Siempre hay pérdidas internas, rozamiento, flexión de elementos, pérdidas térmicas, turbulencia o desalineaciones.

Por eso este tema se organiza alrededor de tres ideas físicas conectadas. Primera: el balance real de fuerzas se calcula con fuerza aplicada menos pérdidas. Segunda: la aceleración observable depende de esa fuerza neta real y de la masa efectiva del conjunto. Tercera: la eficiencia energética no es un adorno, sino un puente entre la lectura de fuerzas y la lectura de potencia.

En términos de magnitudes, el núcleo conceptual está en [[F_ap]], [[F_loss]], [[F_net]] y [[a]]. La cadena causal es clara: si [[F_ap]] aumenta, no necesariamente sube [[a]] en la misma proporción; depende de cuánto crezca también [[F_loss]] y de cuál sea [[m]]. Del mismo modo, dos máquinas con la misma fuerza útil pueden comportarse de forma distinta si su eficiencia [[eta]], sus pérdidas [[P_loss]] o su velocidad [[v]] son diferentes.

Este leaf también introduce magnitudes que suelen quedar ocultas en problemas escolares simplificados, como [[tau_fr]], [[r]] y [[m_dot]]. Estas variables permiten modelar fricción equivalente y variaciones de masa en situaciones donde un modelo demasiado limpio falla al contrastarse con datos de campo.

## 🟢 Nivel esencial

Si solo te quedas con una intuición, quédate con esta: en un sistema real no gana quien “empuja más”, sino quien consigue convertir mejor su entrada en movimiento útil. Dos motores con la misma orden de control pueden entregar resultados de aceleración muy distintos porque no tienen la misma calidad de transmisión ni las mismas pérdidas.

Un ejemplo cotidiano es una cinta transportadora en una nave industrial. El actuador puede entregar una fuerza importante, pero si la banda está mal tensada y los rodamientos están secos, la pérdida interna aumenta. El operador percibe que la línea “se ahoga” al arrancar carga pesada.

Otro ejemplo es un vehículo eléctrico en pendiente suave con batería fría. El conductor pisa el acelerador y espera respuesta inmediata. Sin embargo, la potencia útil se reduce por protección térmica y resistencia interna. El resultado práctico es menor aceleración de la esperada.

La lectura esencial no exige todavía despejes largos; exige distinguir entre causa disponible y causa efectiva. Ese cambio de mirada evita el error más frecuente del tema: usar una ecuación ideal como si el sistema no tuviera fricción, calentamiento ni pérdidas de transmisión.

## 🔵 Nivel formal

En este nivel convertimos la intuición en relaciones cuantitativas. Todas las fórmulas del leaf se usan como piezas coherentes de un mismo modelo operativo.

Primero, el balance de fuerzas real:

{{f:fuerza_neta_real}}

Esta ecuación define la variable crítica [[F_net]]. Si [[F_loss]] crece más rápido que [[F_ap]], la máquina puede entrar en zona de arranque marginal o bloqueo dinámico.

Después, la ley dinámica efectiva:

{{f:segunda_ley_efectiva}}

Aquí aparece [[m]] como masa efectiva, no solo masa de la carga nominal. En sistemas con elementos rotativos o acoplamientos flexibles, ignorar esa diferencia produce sobreestimación de [[a]].

Ahora incorporamos la lectura energética:

{{f:rendimiento_potencia}}

Esta relación conecta [[P_in]], [[P_out]] y [[eta]]. En diagnóstico de mantenimiento, una caída persistente de [[eta]] suele preceder fallos mayores.

Separando explícitamente pérdidas:

{{f:potencia_perdida}}

La magnitud [[P_loss]] no es solo “calor perdido”; es una señal de estado del sistema. Si su tendencia temporal crece, hay degradación mecánica o operación fuera de régimen.

Comparación con escenario ideal:

{{f:aceleracion_ideal}}

La diferencia entre [[a_ideal]] y [[a]] permite medir de forma directa el impacto combinado de pérdidas y eficiencia.

Aceleración corregida por eficiencia:

{{f:aceleracion_con_eficiencia}}

Esta forma es útil cuando el diseñador dispone de mapas de eficiencia y no de modelos detallados de cada pérdida interna.

Potencia mecánica traslacional:

{{f:potencia_traslacional}}

Conecta [[F]], [[v]] y [[P]], y permite verificar consistencia entre resultados de dinámica y resultados de potencia.

Equivalencia entre par de fricción y fuerza de pérdida:

{{f:fuerza_equivalente_torque}}

Esta relación traduce [[tau_fr]] y [[r]] a una pérdida lineal compatible con el balance de fuerzas en traslación.

Caso de masa variable:

{{f:segunda_ley_masa_variable}}

La presencia de [[m_dot]] es decisiva en cintas con descarga continua, depósitos móviles o procesos donde la masa efectiva cambia durante la maniobra.

## 🔴 Nivel estructural

Un modelo realista no se evalúa por “dar números”, sino por decir con claridad dónde funciona, dónde empieza a fallar y qué hacer cuando falla. Aquí están los criterios estructurales que debes usar al resolver y al validar experimentos.

Primer criterio: coherencia de signos. Si [[F_ap]] es positiva y [[F_loss]] también, entonces [[F_net]] debe quedar por debajo de [[F_ap]]. Si obtienes el contrario, no es un detalle algebraico: hay una incoherencia física.

Segundo criterio: consistencia cruzada fuerza-potencia. Si con [[F]] y [[v]] calculas [[P]] y ese valor no guarda relación con [[P_out]], revisa hipótesis de régimen estacionario, pérdidas no modeladas o medición de velocidad.

Tercer criterio: comparación ideal-real. El valor [[a_ideal]] funciona como referencia superior en sistemas pasivos. Si el cálculo real supera de forma sistemática ese límite sin fuente adicional declarada, hay error de modelo o de datos.

Cuarto criterio: transición de modelo. Mientras las pérdidas puedan representarse con [[F_loss]] aproximadamente constante y la masa sea casi constante, el modelo base es suficiente. Cuando aparecen variaciones rápidas, histéresis, fatiga térmica o cambios de carga con [[m_dot]] apreciable, se debe pasar a modelo extendido con parámetros dependientes del estado.

Quinto criterio: validez operacional. Un modelo puede ser matemáticamente impecable y, sin embargo, inútil para operación diaria si no responde preguntas de control: margen de arranque, sensibilidad a carga, consumo energético y degradación.

## Interpretación física profunda

La interpretación central del leaf es causal: una parte de la energía de entrada se dedica a sostener pérdidas, y solo la fracción restante acelera el sistema. Esto parece obvio al decirlo, pero muchas decisiones de diseño y de mantenimiento fallan por no cuantificarlo con disciplina.

Cuando [[eta]] baja, no solo empeora el consumo; cambia la capacidad de respuesta dinámica. En arranques repetidos, esa diferencia puede provocar ciclos más largos, mayor calentamiento y más degradación, cerrando un bucle de ineficiencia.

Por eso no basta con obtener [[a]] una vez. Hay que leer cómo cambia frente a la temperatura, la carga y la velocidad. También hay que relacionar el incremento de [[P_loss]] con síntomas observables: vibración, ruido, olor térmico, deriva de tiempo de ciclo, o necesidad de sobrecorriente en arranque.

En diagnóstico avanzado, combinar [[F_net]], [[P_loss]] y [[eta]] permite decidir si conviene reajustar control, intervenir mecánica o redimensionar actuador. Esa es la diferencia entre resolver ejercicios y dirigir sistemas reales.

## Orden de magnitud y chequeos rápidos

Los órdenes de magnitud son filtros de calidad de cálculo. Si no los usas, puedes obtener resultados formalmente limpios y físicamente absurdos.

- [[m]]: suele ir de kilogramos a decenas de toneladas según aplicación.
- [[F_ap]]: depende del actuador y del régimen, pero no crece indefinidamente sin coste térmico.
- [[F_loss]]: en equipos sanos debe mantenerse acotada; crecimiento sostenido indica degradación.
- [[F_net]]: debería mantenerse positiva para arranque robusto.
- [[a]] y [[a_ideal]]: su diferencia mide impacto real de pérdidas.
- [[P_in]], [[P_out]], [[P_loss]]: su balance permite validar consistencia energética.
- [[tau_fr]] y [[r]]: ayudan a transportar análisis rotacional a traslación.
- [[m_dot]]: es clave cuando hay variación de carga durante la maniobra.
- [[v]], [[F]] y [[P]]: forman una terna básica de verificación de potencia mecánica.

Regla práctica de cinco segundos: si una cuenta sugiere alta [[a]] con [[eta]] baja y [[P_loss]] alta, sospecha error antes de aceptar el resultado.

## Método de resolución personalizado

1. Delimita el sistema físico y sus fronteras energéticas.
2. Identifica magnitudes conocidas y desconocidas usando IDs del leaf.
3. Evalúa si el caso es de masa constante o variable.
4. Calcula primero [[F_net]] y después [[a]].
5. Verifica consistencia con potencia y eficiencia.
6. Contrasta con el escenario ideal [[a_ideal]].
7. Redacta interpretación causal, no solo numérica.
8. Declara límite de validez y posible transición a modelo alternativo.

## Casos especiales y ejemplo extendido

Caso especial de arranque marginal: cuando [[F_net]] es pequeña pero positiva, el sistema arranca con lentitud y alta sensibilidad a variaciones de pérdida. Una pequeña subida de [[F_loss]] puede llevar el sistema a zona de bloqueo.

Caso especial de masa variable: en sistemas con [[m_dot]] apreciable, una misma consigna de fuerza produce respuestas distintas a lo largo del tiempo de maniobra.

Ejemplo extendido integrado: una línea de producción que arranca bien en frío pero degrada su desempeño tras una hora continua. El análisis correcto combina fuerza, potencia y evolución térmica para decidir mantenimiento.

## Preguntas reales del alumno

¿Si el motor entrega más fuerza siempre mejorará la aceleración? No necesariamente. Si las pérdidas crecen con la carga, la ganancia neta puede ser pequeña.

¿Por qué comparar con [[a_ideal]] si el sistema nunca es ideal? Porque ofrece una referencia superior para cuantificar el coste físico de la disipación.

¿Cuál es el mejor indicador para mantenimiento? La tendencia conjunta de [[P_loss]], [[eta]] y [[a]] bajo condiciones de carga comparables.

## Conexiones transversales y rutas de estudio

Conexión con rotación: la pérdida por par [[tau_fr]] y su traducción mediante [[r]] conectan este leaf con dinámica rotacional.

Conexión con energía: el par [[P_in]], [[P_out]] y [[P_loss]] enlaza directamente con conservación de energía en sistemas no ideales.

Conexión con control: la variación de [[a]] frente a cambios de carga muestra por qué los lazos de control deben considerar límites físicos, no solo consignas matemáticas.

## Síntesis final

Este leaf no trata de una sola ecuación, sino de un criterio de ingeniería física: distinguir entrada nominal de efecto útil. Con esa idea, cada magnitud cumple un papel preciso y cada fórmula se vuelve una herramienta de decisión. Si integras [[F_ap]], [[F_loss]], [[F_net]], [[a]], [[eta]], [[P_in]], [[P_out]] y [[P_loss]] en una lectura única, dejas de resolver en abstracto y empiezas a modelar sistemas que existen, se desgastan y deben operar con fiabilidad.