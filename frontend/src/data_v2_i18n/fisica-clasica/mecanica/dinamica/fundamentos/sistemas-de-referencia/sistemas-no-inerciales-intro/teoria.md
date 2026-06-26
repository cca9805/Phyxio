# Sistemas no inerciales intro

## Contexto conceptual

Este leaf responde una pregunta operativa: cuando describimos un movimiento desde un marco acelerado o rotante, que termino adicional necesitamos para mantener una descripcion dinamica coherente. En ese punto aparece [[F_ficticia]], que no representa un agente material directo, pero si una correccion necesaria para que el observador del marco no inercial pueda conectar causa y efecto de forma consistente.

La cadena central del tema une [[a_marco]], [[F_ficticia]], [[F_real]] y [[a_rel]]. En marcos rotantes tambien entran [[omega]], [[r]], [[v_rel]], [[F_centrifuga]] y [[F_coriolis]]. El objetivo no es acumular nombres, sino saber cuando cada magnitud debe entrar en el modelo y cuando su aporte puede despreciarse.

## 🟢 Nivel esencial

Una forma intuitiva de pensar este tema es la siguiente: en un marco inercial, un objeto sin fuerza neta mantiene su estado de movimiento. En un marco que acelera o rota, el observador interno ve desviaciones que no puede explicar solo con las fuerzas de contacto, peso o tension. Para recuperar consistencia, introduce fuerzas inerciales efectivas.

La idea clave es diagnostica, no ornamental. Si la aceleracion del marco es apreciable, tratar la referencia como inercial produce errores sistematicos en trayectoria, balance de fuerzas y prediccion temporal. Si esa aceleracion es muy pequena frente a la escala del problema, el marco puede aproximarse como inercial sin degradar demasiado el resultado.

En un ascensor que arranca, en un vagon que frena o en una plataforma giratoria, el usuario siente un empuje aparente. Esa experiencia cotidiana anticipa la estructura formal del leaf: primero se decide si el marco es adecuado para una descripcion simple; despues se incorporan correcciones cuando la evidencia lo exige.

En este nivel, la prioridad es clasificar bien el marco antes de calcular.

## 🔵 Nivel formal

El bloque formal separa tres pruebas: clasificacion del marco, correccion traslacional y correcciones rotacionales.

**Criterio de no inercialidad:**

{{f:criterio_no_inercial}}

Este criterio decide si el marco exige terminos inerciales para describir la dinamica local.

**Fuerza ficticia en traslacion acelerada:**

{{f:fuerza_ficticia_traslacion}}

Relaciona la aceleracion del marco con la fuerza inercial equivalente que aparece para masas dentro del marco.

**Segunda ley en marco no inercial:**

{{f:dinamica_en_no_inercial}}

Integra fuerzas reales y terminos ficticios para predecir [[a_rel]] observada en el marco no inercial.

**Fuerza centrifuga en marco rotante:**

{{f:fuerza_centrifuga}}

Aporta un termino radial saliente dependiente de [[omega]] y [[r]] dentro de marcos con rotacion.

**Fuerza de Coriolis en marco rotante:**

{{f:fuerza_coriolis}}

Introduce desviacion lateral asociada al movimiento relativo [[v_rel]] medido en un marco que rota.

Lectura de consistencia formal:

1. Si [[a_marco]] es cero, la contribucion traslacional ficticia desaparece.
2. Si [[omega]] es cero, desaparecen [[F_centrifuga]] y [[F_coriolis]].
3. Si [[v_rel]] es cero, la contribucion de Coriolis se anula.
4. Si el criterio operativo marcado por [[system_classification]] indica marco no inercial, no debe omitirse ningun termino dominante.

Esta lectura formal transforma ecuaciones en protocolo reproducible.

## 🔴 Nivel estructural

La parte estructural no agrega ecuaciones nuevas; agrega reglas para decidir cambios de modelo.

Regla de validez cuantitativa basica:

- Si abs([[a_marco]]) <= 0.001 m/s^2 en toda la ventana de analisis, aproximacion inercial razonable en muchos problemas de aula.
- Si abs([[a_marco]]) >= 0.01 m/s^2 de forma sostenida, conviene tratar el marco como no inercial de manera explicita.

Regla de transicion en marcos rotantes:

- Si abs([[omega]]) crece y el producto de escala con [[r]] aumenta, [[F_centrifuga]] deja de ser despreciable.
- Si ademas existe [[v_rel]] apreciable, [[F_coriolis]] puede cambiar la geometria de trayectoria y no debe ignorarse.

Senales observables de fallo del modelo simplificado:

1. Residuales dinamicos persistentes entre fuerzas reales y aceleracion observada.
2. Sesgo sistematico en direccion de trayectoria respecto al calculo sin terminos ficticios.
3. Sensibilidad excesiva del resultado ante pequenas variaciones de [[omega]] o [[a_marco]].

Transicion recomendada: pasar de esquema inercial a esquema no inercial cuando el error relativo operativo supere 10 por ciento de forma repetida o cuando los residuos no puedan explicarse por ruido instrumental.

Esta lectura estructural evita extrapolaciones ingenuas.

## Interpretacion fisica profunda

Interpretar este leaf implica distinguir dos planos. Plano fisico real: fuerzas con agente identificable ([[F_real]]). Plano de referencia: correcciones necesarias para que el observador del marco acelerado mantenga ecuaciones de movimiento operativas. Confundir ambos planos produce errores de causa-efecto.

Tambien importa separar direccion y magnitud. En rotacion, [[F_centrifuga]] y [[F_coriolis]] tienen direcciones definidas por geometria del movimiento, no por intuicion verbal. Por eso una lectura cualitativa sin esquema vectorial suele fallar.

La interpretacion madura responde tres preguntas: que marco describe, que terminos dominan y que umbral decide conservar o cambiar modelo.

## Orden de magnitud

Rangos utiles para criterio rapido:

- [[m]]: desde cientos de gramos hasta toneladas segun sistema.
- [[a_marco]]: de 0.001 a varios m/s^2 en contextos de transporte.
- [[F_ficticia]]: proporcional a [[m]] y [[a_marco]], puede competir con [[F_real]] en maniobras bruscas.
- [[omega]]: pequena en fenomenos terrestres globales, grande en rotores o centrifugas.
- [[r]]: define brazo radial efectivo para [[F_centrifuga]].
- [[v_rel]]: controla intensidad de [[F_coriolis]] para un [[omega]] dado.
- [[a_rel]]: salida observable de la dinamica en el marco no inercial.

Estos rangos no sustituyen calculo, pero evitan interpretaciones absurdas y ayudan a detectar datos mal escalados.

## Metodo de resolucion personalizado

1. Clasificar el marco con evidencia de [[a_marco]] y/o [[omega]].
2. Definir ejes y convenciones de signo antes de proyectar magnitudes.
3. Listar fuerzas reales en [[F_real]] y luego agregar terminos ficticios requeridos.
4. Resolver para [[a_rel]] o magnitud objetivo manteniendo unidades SI.
5. Validar resultado con orden de magnitud y criterio de validez de modelo.
6. Registrar decision en [[system_classification]] para trazabilidad.

## Casos especiales y ejemplo extendido

Caso especial 1: marco con traslacion acelerada pero sin rotacion. Domina [[F_ficticia]] asociada a [[a_marco]] y desaparecen terminos rotacionales.

Caso especial 2: marco rotante con objeto en reposo relativo. Puede existir [[F_centrifuga]] sin [[F_coriolis]] si [[v_rel]] es nula.

Caso especial 3: marco rotante con desplazamiento relativo. Conviven [[F_centrifuga]] y [[F_coriolis]], y la trayectoria aparente puede curvarse aunque en el marco inercial no haya fuerza lateral real equivalente.

Ejemplo extendido integrado: plataforma que acelera linealmente y luego entra en giro. El protocolo correcto reevalua terminos activos por tramo, en lugar de aplicar una sola ecuacion para toda la secuencia.

## Preguntas reales del alumno

Por que aparece [[F_ficticia]] si nadie empuja el objeto: porque el marco elegido acelera y la descripcion interna necesita un termino compensatorio para conservar forma operativa de la dinamica.

Cuando puedo ignorar Coriolis: cuando [[omega]] o [[v_rel]] son pequenos para la precision requerida, y el error esperado queda por debajo del umbral de decision.

Que error conceptual es mas comun: mezclar [[a_rel]] del objeto con [[a_marco]] del observador. Esa confusion altera signos y rompe lectura causal.

Como verifico rapidamente si el modelo alcanza: comparar residual de prediccion con incertidumbre instrumental y revisar estabilidad de [[a_marco]] y [[omega]] en la ventana analizada.

## Conexiones transversales y rutas de estudio

Este leaf conecta con sistemas inerciales, aceleracion relativa, diagramas de cuerpo libre y dinamica rotacional.

Ruta sugerida:

1. Consolidar criterio de inercialidad en traslacion.
2. Integrar marcos rotantes con lectura vectorial.
3. Practicar decisiones de cambio de modelo por umbral.
4. Aplicar a navegacion, meteorologia y control de movimiento.

El valor formativo esta en pasar de formula aislada a protocolo de diagnostico fisico.

## Sintesis final

Sistemas no inerciales no es un catalogo de terminos nuevos; es una disciplina para describir correctamente el movimiento cuando el observador no esta en marco inercial. La consistencia entre [[F_real]], [[F_ficticia]], [[a_rel]], [[a_marco]], [[omega]], [[r]] y [[v_rel]] permite decidir con criterio cuando mantener aproximaciones simples y cuando escalar a un modelo mas completo.
