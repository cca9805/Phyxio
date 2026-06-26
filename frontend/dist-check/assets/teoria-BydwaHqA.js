const e=`# Ligaduras y grados de libertad

## Contexto conceptual

Una ligadura es una condición física que impide que el sistema explore todas las configuraciones que podríamos escribir de manera algebraica. El punto central no es reducir símbolos, sino reconocer qué movimientos son posibles y cuáles quedan bloqueados por contacto, geometría, guía, cuerda, articulación o relación impuesta. Por eso este leaf estudia la diferencia entre coordenadas disponibles y coordenadas verdaderamente independientes.

En mecánica analítica, esta distinción decide cómo se construye el modelo. Si una restricción puede escribirse como una condición sobre [[q]] y [[t]], se puede analizar como ligadura holónoma. Si además las restricciones son independientes, el conteo de [[f]] tiene significado físico. Cuando esas hipótesis fallan, el problema no necesita más álgebra, sino una clasificación mejor de sus restricciones.

## 🟢 Nivel esencial

La idea esencial es que una ligadura elimina libertad física. Un sistema puede estar descrito con muchas variables, pero algunas solo sirven para mantener una relación obligatoria. Si una partícula está obligada a permanecer sobre una guía, no puede elegir cualquier posición del espacio: la guía ya ha decidido parte de su estado posible.

Por eso el número de grados de libertad no se obtiene mirando el dibujo ni contando ejes espaciales. Se obtiene preguntando cuántas decisiones independientes quedan después de aplicar restricciones reales. Esta lectura evita un error frecuente: pensar que escribir más variables significa tener más movimiento.

También conviene distinguir restricción y fuerza. La ligadura dice qué configuraciones son admisibles; la reacción necesaria para mantenerla puede aparecer después. Confundir esas dos capas lleva a sumar grados de libertad que no existen o a interpretar una reacción como si fuera una coordenada nueva.

En esta primera lectura basta con conservar una imagen cualitativa: una ligadura recorta posibilidades, no añade movimiento. La matemática formal llega después para precisar esa intuición.

En modelos discretos elementales, [[n]] puede usarse como número de entidades antes de traducirlo a coordenadas efectivas, pero en este leaf el conteo operativo se expresa después con coordenadas iniciales explícitas.

## 🔵 Nivel formal

Una ligadura holónoma se representa como condición de configuración:

{{f:ligadura_holonomica}}

La compatibilidad de variaciones virtuales se expresa imponiendo que el desplazamiento virtual no rompa la condición de ligadura:

{{f:desplazamiento_virtual_admisible}}

Si no se eliminan coordenadas, la reacción de ligadura puede entrar en las ecuaciones mediante multiplicadores:

{{f:multiplicadores_lagrange}}

El conteo estructural se resume con:

{{f:conteo_grados_libertad}}

Aquí [[phi]] selecciona el conjunto admisible, [[delta_q]] representa variaciones instantáneas compatibles, [[lambda]] mide la intensidad de reacción asociada y [[L]] organiza la dinámica en términos de [[q]] y [[qdot]]. El conteo usa [[Nq]] como número de coordenadas antes de reducir y [[C]] como número de ligaduras independientes. La palabra independiente es crucial: dos ecuaciones distintas pueden imponer la misma condición física.

La secuencia formal debe leerse en orden. Primero se declara la condición de configuración con [[phi]], porque sin condición no hay restricción que imponer. Después se estudia [[delta_q]], que indica qué variaciones respetan esa condición en el instante considerado. Solo cuando la restricción se incorpora a la dinámica aparece [[lambda]], asociado a la reacción necesaria para mantener el movimiento dentro del conjunto admisible. Finalmente, el conteo de [[f]] resume la dimensión disponible.

## 🔴 Nivel estructural

En nivel estructural, el foco pasa del cálculo al diagnóstico. Antes de aplicar [[f]]=[[Nq]]-[[C]], hay que saber si las ligaduras realmente reducen dimensiones distintas. El criterio formal es el rango local del conjunto de restricciones. Si el rango coincide con [[C]], el conteo es estable; si baja, hay redundancia; si cambia durante el movimiento, el sistema cambia de régimen.

Esta lectura explica por qué algunos modelos funcionan en una zona y fallan en otra. Una articulación puede comportarse como restricción regular en la mayor parte del movimiento y volverse singular en una configuración límite. En ese punto, el modelo ideal deja de describir bien la estructura y conviene pasar a una formulación con restricciones activas, cambio de carta o tratamiento específico de contacto.

El papel de [[lambda]] también es estructural. No crea nuevas coordenadas, pero permite medir la reacción que hace cumplir [[phi]]=0. En ingeniería, ese dato puede ser tan importante como la trayectoria: indica tensión, fuerza de contacto, carga interna o condición de diseño.

Una lectura estructural completa también revisa tolerancias. Si la condición [[phi]]=0 se impone con error aceptable, el modelo puede seguir siendo operativo. Si el error crece de forma sostenida, el fallo ya no es numérico aislado: indica que la restricción, la carta de coordenadas o el régimen físico han dejado de ser adecuados.

## Interpretación física profunda

Interpretar bien una ligadura exige separar tres preguntas. Primera: ¿qué condición debe cumplirse? Esa es la lectura de [[phi]]. Segunda: ¿qué variaciones son admisibles sin abandonar la condición? Esa es la lectura de [[delta_q]]. Tercera: ¿qué reacción aparece al imponerla dinámicamente? Esa es la lectura de [[lambda]].

El valor de [[f]] resume independencia, no complejidad visual. Un mecanismo con muchas piezas puede tener pocos grados de libertad si las articulaciones bloquean casi todo. Al revés, un sistema visualmente simple puede tener más libertad si no hay restricciones efectivas. La clave es contar relaciones independientes, no elementos visibles.

## Orden de magnitud

En un sistema con [[Nq]]=6 y [[C]]=2, el conteo entrega [[f]]=4. Si el alumno obtiene [[f]]=5 para las mismas hipótesis, probablemente ha ignorado una ligadura. Si obtiene [[f]]=3, probablemente ha contado una restricción adicional que no era independiente.

En simulación, una tolerancia típica de cierre puede exigir que [[phi]] permanezca cerca de cero, por ejemplo por debajo de \\(10^{-6}\\) en unidades normalizadas. Si la deriva supera ese orden de magnitud de forma sostenida, el integrador o el modelo de restricciones no está respetando el espacio admisible.

## Método de resolución personalizado

Un procedimiento fiable empieza clasificando la restricción: holónoma, no holónoma, unilateral o dependiente del tiempo. Después se eligen coordenadas [[q]], se escribe [[phi]]=0 si procede y se revisa independencia. Solo entonces se calcula [[f]].

Si el objetivo es resolver movimiento, hay dos rutas. La ruta reducida elimina coordenadas y trabaja directamente con las variables independientes. La ruta con multiplicadores conserva más coordenadas y añade [[lambda]] para imponer la restricción en la ecuación dinámica. La primera suele ser más limpia; la segunda permite leer reacciones y manejar restricciones difíciles de eliminar.

## Casos especiales y ejemplo extendido

Caso especial 1: ligaduras redundantes. Si dos ecuaciones representan la misma condición, contarlas por separado reduce [[f]] de forma artificial. El síntoma suele ser una movilidad calculada menor que la observada.

Caso especial 2: restricción dependiente de [[t]]. Una guía móvil puede imponer [[phi]]([[q]],[[t]])=0. En ese caso, la condición admisible cambia con el tiempo y no debe tratarse como geometría fija.

Ejemplo extendido: un brazo robótico con seis coordenadas y dos restricciones de cierre tiene [[f]]=4 si ambas restricciones son independientes. Si una articulación entra en una configuración singular, el rango efectivo puede cambiar. El modelo debe detectar ese cambio antes de interpretar cargas o planificar trayectoria.

## Preguntas reales del alumno

- ¿Una ligadura siempre es una fuerza?
No. La ligadura es la condición; la fuerza o reacción aparece al imponer dinámicamente esa condición.

- ¿Por qué [[lambda]] no aumenta [[f]]?
Porque [[lambda]] no decide configuración. Solo mide la reacción necesaria para mantener una restricción.

- ¿Puedo contar ecuaciones y ya está?
No. Hay que contar solo restricciones independientes.

- ¿Qué error es más grave?
Usar [[C]] sin revisar independencia. Ese error cambia todo el modelo.

## Conexiones transversales y rutas de estudio

Este leaf prepara directamente las ecuaciones de Lagrange con restricciones, los multiplicadores de Lagrange y la modelización multibody. También conecta con coordenadas generalizadas: primero se decide qué variables describen el sistema, después se decide qué restricciones reducen su independencia.

Una ruta razonable es estudiar coordenadas generalizadas, seguir con ligaduras y grados de libertad, y luego pasar a ecuaciones de Lagrange. Con esa secuencia, el alumno entiende que la dinámica no empieza en la ecuación final, sino en la arquitectura de configuración.

## Síntesis final

Las ligaduras y los grados de libertad enseñan a leer la estructura real de un sistema mecánico. El objetivo final es decidir qué configuraciones son admisibles, cuántas variables independientes quedan y qué reacciones aparecen al imponer restricciones. Dominar este leaf permite construir modelos más honestos, detectar sobreconteos y elegir entre reducción directa o multiplicadores con criterio físico.
`;export{e as default};
