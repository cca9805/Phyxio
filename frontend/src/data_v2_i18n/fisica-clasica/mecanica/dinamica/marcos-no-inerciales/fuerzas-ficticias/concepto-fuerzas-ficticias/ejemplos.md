# Ejemplo tipo examen

## Enunciado

Una plataforma de pruebas se desplaza con aceleracion constante respecto al suelo. Dentro de la plataforma, un bloque de masa conocida se mueve a lo largo de una guia recta. El equipo de analisis quiere describir el movimiento desde el marco de la plataforma y desde un marco inercial para verificar coherencia. Se pide determinar la fuerza ficticia asociada al marco, la aceleracion observada dentro de la plataforma y la aceleracion inercial equivalente. Tambien se solicita interpretar por que el resultado no implica la aparicion de una nueva interaccion material.

## Datos

- [[m]] = 12 kg
- [[a_marco]] = 1.8 m/s^2 hacia el eje positivo elegido
- [[F_res]] = -6 N en la proyeccion del eje de estudio
- Marco no inercial translacional sin rotacion en la ventana
- Convencion de signo: positivo en sentido de avance de la plataforma

## Definición del sistema

Sistema fisico: bloque tratado como particula en 1D dentro de una plataforma acelerada.

Magnitudes del leaf usadas explicitamente: [[m]], [[a_marco]], [[F_fict]], [[F_res]], [[a_rel]], [[a_in]].

Objetivo didactico: separar con claridad efecto de marco y efecto de interacciones reales para evitar atribucion causal incorrecta.

## Modelo físico

Modelo adoptado: descripcion no inercial translacional por proyeccion escalar con validacion cruzada hacia marco inercial.

Relaciones nucleares del leaf usadas en el problema:

{{f:fuerza_ficticia_traslacional}}

{{f:segunda_ley_marco_no_inercial}}

{{f:relacion_aceleraciones}}

{{f:ecuacion_vectorial_conceptual}}

## Justificación del modelo

La plataforma tiene translacion acelerada con [[a_marco]] aproximadamente constante durante el intervalo analizado, por lo que la representacion escalar es fisicamente adecuada como primer nivel de resolucion. El problema no requiere reconstruccion angular ni acoples multieje de alta fidelidad; requiere lectura causal y coherencia de signos.

El uso de [[F_fict]] esta justificado porque el observador de la plataforma trabaja en marco no inercial. Sin ese termino, la ecuacion interna del marco quedaria incompleta y se perderia coherencia entre tendencia observada y ecuacion de movimiento. El modelo tambien es verificable porque permite reconstruir [[a_in]] y contrastar consistencia entre marcos.

## Resolución simbólica

Paso 1: calcular [[F_fict]] a partir de [[m]] y [[a_marco]].

{{f:fuerza_ficticia_traslacional}}

Paso 2: obtener [[a_rel]] combinando [[F_res]] y [[F_fict]] sobre [[m]].

{{f:segunda_ley_marco_no_inercial}}

Paso 3: recuperar [[a_in]] usando la relacion entre aceleraciones.

{{f:relacion_aceleraciones}}

Paso 4: verificar lectura global con la forma conceptual vectorial.

{{f:ecuacion_vectorial_conceptual}}

Cadena causal esperada: [[a_marco]] define [[F_fict]], la suma [[F_res]] + [[F_fict]] define [[a_rel]], y la combinacion de [[a_rel]] con [[a_marco]] define [[a_in]].

## Sustitución numérica

Con [[m]] = 12 y [[a_marco]] = 1.8, el termino ficticio queda en torno a [[F_fict]] = -21.6 N con la convencion de signo elegida.

Luego, al combinar [[F_res]] = -6 N con [[F_fict]] = -21.6 N, la suma efectiva en marco no inercial es -27.6 N y se obtiene [[a_rel]] aproximada de -2.3 m/s^2.

Finalmente, usando [[a_in]] = [[a_rel]] + [[a_marco]], resulta [[a_in]] cercana a -0.5 m/s^2. Esto significa que en marco inercial el bloque acelera levemente en sentido negativo, mientras que en marco de plataforma la aceleracion aparente es mas intensa por la correccion de marco.

## Validación dimensional

- [[F_fict]] debe tener unidades de N al multiplicar [[m]] por [[a_marco]].
- [[a_rel]] debe quedar en m/s^2 al dividir fuerza total por [[m]].
- [[a_in]] y [[a_rel]] deben compartir unidad de aceleracion.

Chequeo de tendencias:
- Si [[a_marco]] aumenta, el modulo de [[F_fict]] aumenta linealmente.
- Si [[m]] aumenta con [[a_marco]] fijo, [[F_fict]] crece, pero la relacion para [[a_rel]] depende tambien de [[F_res]].
- Si [[F_res]] cambia de signo, la lectura de [[a_rel]] puede invertirse.

## Interpretación física

El resultado no introduce una fuerza real adicional del entorno. Introduce una correccion necesaria para mantener coherencia en el marco acelerado. [[F_res]] sigue representando interacciones reales; [[F_fict]] representa la compensacion de referencia asociada a [[a_marco]].

La diferencia entre [[a_rel]] y [[a_in]] confirma continuidad con la teoria del leaf: cambiar de marco cambia la representacion, no el fenomeno fisico subyacente. Esta distincion evita dos errores didacticos clasicos: culpar a una "fuerza misteriosa" y confundir observacion local con dinamica absoluta.

Interpretacion causal adicional: cuando el marco acelera, el observador interno necesita una correccion para no romper consistencia entre ecuacion y observacion. Esa correccion no compite con las interacciones reales; las organiza dentro del sistema de referencia elegido. Por eso, la lectura correcta del resultado no es "aparecio una fuerza nueva", sino "aparecio una condicion de observacion que exige termino de compensacion".

Interpretacion de decision: si el objetivo es control local, [[a_rel]] puede ser la magnitud operativa principal; si el objetivo es auditoria externa, [[a_in]] suele ser mas informativa. El mismo calculo sirve a ambos fines solo si la distincion entre marcos queda explicita en el informe.

Interpretacion de regimen: el resultado tambien dice cuando el modelo es suficiente y cuando empieza a quedar corto. Si la tendencia observada mantiene coherencia causal con la secuencia del leaf, el esquema de primer orden es util. Si esa coherencia se rompe de forma repetida, la lectura fisica correcta no es forzar la ecuacion, sino reconocer limite de modelo y escalar la representacion.

Interpretacion de significado: la informacion central del ejemplo no es el valor puntual obtenido, sino la historia fisica que ese valor representa. Esa historia dice que el observador interno necesita una correccion por estado del marco, mientras que el observador inercial no la necesita. Entender esa diferencia evita explicaciones circulares y permite argumentar con claridad ante cambios de contexto.

Interpretacion de transferencia: si el estudiante puede explicar este mismo mecanismo en un ascensor, en una plataforma industrial y en un vehiculo, entonces comprendio el concepto. Si solo puede repetir la sustitucion de datos, aun no hay comprension profunda. Esta distincion entre repetir y comprender es la razon por la que esta seccion existe.

# Ejemplo de aplicación real

## Contexto

En una linea automatizada de manufactura, carros robotizados se desplazan sobre una plataforma movil que acelera para sincronizar estaciones. Sensores locales estiman aceleracion del carro y el sistema de control decide correcciones. Si no se separa correctamente [[F_res]] de [[F_fict]], el controlador puede interpretar sesgo de marco como perturbacion externa y aplicar compensaciones equivocadas.

## Estimación física

Supongamos una etapa donde [[a_marco]] se mantiene cercana a 1.2 m/s^2 y [[m]] del modulo movil es 25 kg. La lectura de [[F_fict]] queda del orden de 30 N. Si ademas la suma de fuerzas reales [[F_res]] por friccion y accion de actuador es cercana a 10 N en sentido opuesto, la aceleracion relativa [[a_rel]] sera muy distinta de la aceleracion inercial [[a_in]] que veria un observador externo.

El equipo usa esta diferencia para decidir calibracion. Si los residuos entre tendencia medida y tendencia estimada superan 10 por ciento de forma repetida, el sistema deja el modelo escalar y activa una capa vectorial con mayor fidelidad.

## Interpretación

La aplicacion muestra por que este leaf es operativo: define que magnitudes comparar, en que orden, y con que criterio de escalado de modelo. [[a_marco]] explica el origen de la correccion de referencia, [[F_fict]] cuantifica su impacto dinamico, [[F_res]] mantiene la lectura de interacciones reales, y la pareja [[a_rel]]/[[a_in]] permite auditar coherencia entre marcos.

Esta estructura evita diagnosticos falsos y reduce ajustes innecesarios. En terminos de ingenieria, convierte una confusion de referencia en una decision trazable y verificable.

Tambien mejora continuidad pedagogica con teoria e interpretacion: la secuencia [[a_marco]] -> [[F_fict]] -> [[a_rel]] -> [[a_in]] permite pasar de explicacion conceptual a regla de accion sin saltos logicos. Eso es exactamente lo que se espera de un ejemplo real en este leaf.

En lenguaje de operacion, la regla final es simple: primero identificar causa de marco, luego separar interacciones reales, y solo al final elegir accion. Saltarse ese orden produce decisiones inestables. Mantenerlo produce decisiones coherentes incluso cuando cambian condiciones de trabajo.

Lectura cualitativa de regimen: si el perfil de aceleracion del marco se vuelve irregular, la prioridad deja de ser afinar un numero y pasa a ser identificar si el modelo usado sigue representando el fenomeno. En ese punto, la interpretacion correcta es metodologica: reconocer limite, declarar incertidumbre y escalar el modelo.

Lectura de causa y efecto: [[a_marco]] actua como condicion de observacion, [[F_res]] resume interacciones materiales, y el contraste entre [[a_rel]] y [[a_in]] revela como cambia la descripcion segun observador. Esta narrativa causal es la pieza que evita convertir el ejemplo en pura aritmetica.
