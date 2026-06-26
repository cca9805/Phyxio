## Modelo ideal

El modelo ideal de este leaf trata una ligadura como una condición explícita sobre la configuración: [[phi]]=0. La pregunta no es qué coordenadas resultan más cómodas, sino qué estados quedan físicamente permitidos y cuántas direcciones independientes sobreviven después de imponer las restricciones. Por eso el modelo separa tres capas: ecuación de ligadura, conteo de grados de libertad y reacción asociada.

En esta descripción, [[q]] representa las coordenadas usadas antes o después de la reducción, [[Nq]] es el número de coordenadas disponibles antes de aplicar ligaduras, [[C]] cuenta solo restricciones independientes y [[f]] expresa la dimensión efectiva resultante. Cuando se mantiene una formulación no reducida, [[lambda]] permite incluir la reacción de ligadura en la dinámica construida con [[L]] y [[qdot]].

## Hipótesis

- Las ligaduras son holónomas: pueden escribirse como [[phi]]([[q]],[[t]])=0. Si no se cumple, el tratamiento requiere un modelo no holónomo o una condición diferencial.
- Las restricciones contadas en [[C]] son independientes en la región estudiada. Si dos ecuaciones describen la misma condición, el conteo de [[f]] queda sobrerreducido.
- El rango de la matriz de ligaduras no cambia dentro del intervalo analizado. Si cambia, el sistema pasa de un régimen a otro y el modelo debe actualizar restricciones activas.
- La formulación con [[lambda]] representa reacciones ideales compatibles con el principio variacional usado. Si hay fricción, impacto o contacto unilateral, hace falta un modelo extendido.

## Dominio de validez cuantitativo

Como orden de magnitud operativo, una simulación bien cerrada suele exigir deriva de [[phi]] menor que 1e-6 en unidades normalizadas. Además, la cantidad de ligaduras [[C]] no debe superar las coordenadas iniciales [[Nq]], y [[f]] debe quedar no negativa. [[Nq]], [[C]] y [[f]] deben ser enteros no negativos. Una salida como [[f]]=-1 no indica un resultado raro, sino una inconsistencia de modelización: se han contado demasiadas ligaduras o se ha mezclado un conjunto de restricciones dependientes.

Otro control cuantitativo es el rango local. Si el jacobiano de [[phi]] respecto de [[q]] conserva rango [[C]], la reducción es estable en esa zona. Si el rango cae, una ligadura deja de aportar información nueva; si aumenta por activación de contacto, el sistema cambia de dimensión efectiva. En simulación, esta variación se ve como saltos de reacción, deriva de restricción o incompatibilidad entre integración y cierre geométrico.

## Señales de fallo del modelo

Una señal clara es que [[phi]] no se mantiene cerca de cero durante la evolución. En ese caso, la trayectoria calculada abandona el espacio admisible y cualquier lectura de [[f]] o [[lambda]] deja de ser fiable. Otra señal es que [[lambda]] crece sin límite ante cambios pequeños de datos: suele indicar mala escala, restricción casi redundante o singularidad de configuración.

También falla cuando [[delta_q]] se interpreta como desplazamiento real acumulado. Un desplazamiento virtual es una variación compatible instantánea; no describe necesariamente la evolución temporal del sistema. Confundir esas capas produce argumentos dinámicos incorrectos aunque el conteo inicial parezca razonable.

## Modelo extendido o alternativo

El modelo extendido sustituye la reducción directa por formulaciones con multiplicadores, penalización, proyección de restricciones o detección de contactos activos. Es útil cuando no conviene eliminar coordenadas, cuando las ligaduras cambian por tramos o cuando se necesita conservar variables redundantes para medir fuerzas de reacción.

La transicion explícita es esta: si [[phi]]=0 se mantiene estable y el rango es constante, el modelo ideal es suficiente. cuando conviene cambiar de modelo: cuando aparecen contacto, pérdida de rango, impacto, holgura o restricciones unilaterales; en ese caso conviene pasar a un modelo alternativo con restricciones activas y condiciones de cambio de régimen.

## Comparación operativa

- Modelo reducido: menos variables, interpretación limpia de [[f]], buen rendimiento si las ligaduras son simples.
- Modelo con [[lambda]]: más variables algebraicas, acceso directo a reacciones, mejor para contacto y diseño estructural.
- Penalización: implementación sencilla, pero introduce rigidez numérica y tolerancia de error en [[phi]].
- Proyección: conserva la trayectoria cerca del espacio admisible, aunque puede ocultar errores de modelo si se usa sin diagnóstico.
- Restricciones activas: necesarias cuando [[C]] cambia durante el movimiento, con mayor costo lógico y computacional.

La decisión física se resume así: primero se valida independencia de ligaduras, después se cuenta [[f]], y solo entonces se decide si eliminar coordenadas o mantenerlas con [[lambda]]. Ese orden evita convertir una restricción geométrica en una receta algebraica sin control físico.
