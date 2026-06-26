const e=`# Sistemas no inerciales intro\r
\r
## Contexto conceptual\r
\r
Este leaf responde una pregunta operativa: cuando describimos un movimiento desde un marco acelerado o rotante, que termino adicional necesitamos para mantener una descripcion dinamica coherente. En ese punto aparece [[F_ficticia]], que no representa un agente material directo, pero si una correccion necesaria para que el observador del marco no inercial pueda conectar causa y efecto de forma consistente.\r
\r
La cadena central del tema une [[a_marco]], [[F_ficticia]], [[F_real]] y [[a_rel]]. En marcos rotantes tambien entran [[omega]], [[r]], [[v_rel]], [[F_centrifuga]] y [[F_coriolis]]. El objetivo no es acumular nombres, sino saber cuando cada magnitud debe entrar en el modelo y cuando su aporte puede despreciarse.\r
\r
## 🟢 Nivel esencial\r
\r
Una forma intuitiva de pensar este tema es la siguiente: en un marco inercial, un objeto sin fuerza neta mantiene su estado de movimiento. En un marco que acelera o rota, el observador interno ve desviaciones que no puede explicar solo con las fuerzas de contacto, peso o tension. Para recuperar consistencia, introduce fuerzas inerciales efectivas.\r
\r
La idea clave es diagnostica, no ornamental. Si la aceleracion del marco es apreciable, tratar la referencia como inercial produce errores sistematicos en trayectoria, balance de fuerzas y prediccion temporal. Si esa aceleracion es muy pequena frente a la escala del problema, el marco puede aproximarse como inercial sin degradar demasiado el resultado.\r
\r
En un ascensor que arranca, en un vagon que frena o en una plataforma giratoria, el usuario siente un empuje aparente. Esa experiencia cotidiana anticipa la estructura formal del leaf: primero se decide si el marco es adecuado para una descripcion simple; despues se incorporan correcciones cuando la evidencia lo exige.\r
\r
En este nivel, la prioridad es clasificar bien el marco antes de calcular.\r
\r
## 🔵 Nivel formal\r
\r
El bloque formal separa tres pruebas: clasificacion del marco, correccion traslacional y correcciones rotacionales.\r
\r
**Criterio de no inercialidad:**\r
\r
{{f:criterio_no_inercial}}\r
\r
Este criterio decide si el marco exige terminos inerciales para describir la dinamica local.\r
\r
**Fuerza ficticia en traslacion acelerada:**\r
\r
{{f:fuerza_ficticia_traslacion}}\r
\r
Relaciona la aceleracion del marco con la fuerza inercial equivalente que aparece para masas dentro del marco.\r
\r
**Segunda ley en marco no inercial:**\r
\r
{{f:dinamica_en_no_inercial}}\r
\r
Integra fuerzas reales y terminos ficticios para predecir [[a_rel]] observada en el marco no inercial.\r
\r
**Fuerza centrifuga en marco rotante:**\r
\r
{{f:fuerza_centrifuga}}\r
\r
Aporta un termino radial saliente dependiente de [[omega]] y [[r]] dentro de marcos con rotacion.\r
\r
**Fuerza de Coriolis en marco rotante:**\r
\r
{{f:fuerza_coriolis}}\r
\r
Introduce desviacion lateral asociada al movimiento relativo [[v_rel]] medido en un marco que rota.\r
\r
Lectura de consistencia formal:\r
\r
1. Si [[a_marco]] es cero, la contribucion traslacional ficticia desaparece.\r
2. Si [[omega]] es cero, desaparecen [[F_centrifuga]] y [[F_coriolis]].\r
3. Si [[v_rel]] es cero, la contribucion de Coriolis se anula.\r
4. Si el criterio operativo marcado por [[system_classification]] indica marco no inercial, no debe omitirse ningun termino dominante.\r
\r
Esta lectura formal transforma ecuaciones en protocolo reproducible.\r
\r
## 🔴 Nivel estructural\r
\r
La parte estructural no agrega ecuaciones nuevas; agrega reglas para decidir cambios de modelo.\r
\r
Regla de validez cuantitativa basica:\r
\r
- Si abs([[a_marco]]) <= 0.001 m/s^2 en toda la ventana de analisis, aproximacion inercial razonable en muchos problemas de aula.\r
- Si abs([[a_marco]]) >= 0.01 m/s^2 de forma sostenida, conviene tratar el marco como no inercial de manera explicita.\r
\r
Regla de transicion en marcos rotantes:\r
\r
- Si abs([[omega]]) crece y el producto de escala con [[r]] aumenta, [[F_centrifuga]] deja de ser despreciable.\r
- Si ademas existe [[v_rel]] apreciable, [[F_coriolis]] puede cambiar la geometria de trayectoria y no debe ignorarse.\r
\r
Senales observables de fallo del modelo simplificado:\r
\r
1. Residuales dinamicos persistentes entre fuerzas reales y aceleracion observada.\r
2. Sesgo sistematico en direccion de trayectoria respecto al calculo sin terminos ficticios.\r
3. Sensibilidad excesiva del resultado ante pequenas variaciones de [[omega]] o [[a_marco]].\r
\r
Transicion recomendada: pasar de esquema inercial a esquema no inercial cuando el error relativo operativo supere 10 por ciento de forma repetida o cuando los residuos no puedan explicarse por ruido instrumental.\r
\r
Esta lectura estructural evita extrapolaciones ingenuas.\r
\r
## Interpretacion fisica profunda\r
\r
Interpretar este leaf implica distinguir dos planos. Plano fisico real: fuerzas con agente identificable ([[F_real]]). Plano de referencia: correcciones necesarias para que el observador del marco acelerado mantenga ecuaciones de movimiento operativas. Confundir ambos planos produce errores de causa-efecto.\r
\r
Tambien importa separar direccion y magnitud. En rotacion, [[F_centrifuga]] y [[F_coriolis]] tienen direcciones definidas por geometria del movimiento, no por intuicion verbal. Por eso una lectura cualitativa sin esquema vectorial suele fallar.\r
\r
La interpretacion madura responde tres preguntas: que marco describe, que terminos dominan y que umbral decide conservar o cambiar modelo.\r
\r
## Orden de magnitud\r
\r
Rangos utiles para criterio rapido:\r
\r
- [[m]]: desde cientos de gramos hasta toneladas segun sistema.\r
- [[a_marco]]: de 0.001 a varios m/s^2 en contextos de transporte.\r
- [[F_ficticia]]: proporcional a [[m]] y [[a_marco]], puede competir con [[F_real]] en maniobras bruscas.\r
- [[omega]]: pequena en fenomenos terrestres globales, grande en rotores o centrifugas.\r
- [[r]]: define brazo radial efectivo para [[F_centrifuga]].\r
- [[v_rel]]: controla intensidad de [[F_coriolis]] para un [[omega]] dado.\r
- [[a_rel]]: salida observable de la dinamica en el marco no inercial.\r
\r
Estos rangos no sustituyen calculo, pero evitan interpretaciones absurdas y ayudan a detectar datos mal escalados.\r
\r
## Metodo de resolucion personalizado\r
\r
1. Clasificar el marco con evidencia de [[a_marco]] y/o [[omega]].\r
2. Definir ejes y convenciones de signo antes de proyectar magnitudes.\r
3. Listar fuerzas reales en [[F_real]] y luego agregar terminos ficticios requeridos.\r
4. Resolver para [[a_rel]] o magnitud objetivo manteniendo unidades SI.\r
5. Validar resultado con orden de magnitud y criterio de validez de modelo.\r
6. Registrar decision en [[system_classification]] para trazabilidad.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: marco con traslacion acelerada pero sin rotacion. Domina [[F_ficticia]] asociada a [[a_marco]] y desaparecen terminos rotacionales.\r
\r
Caso especial 2: marco rotante con objeto en reposo relativo. Puede existir [[F_centrifuga]] sin [[F_coriolis]] si [[v_rel]] es nula.\r
\r
Caso especial 3: marco rotante con desplazamiento relativo. Conviven [[F_centrifuga]] y [[F_coriolis]], y la trayectoria aparente puede curvarse aunque en el marco inercial no haya fuerza lateral real equivalente.\r
\r
Ejemplo extendido integrado: plataforma que acelera linealmente y luego entra en giro. El protocolo correcto reevalua terminos activos por tramo, en lugar de aplicar una sola ecuacion para toda la secuencia.\r
\r
## Preguntas reales del alumno\r
\r
Por que aparece [[F_ficticia]] si nadie empuja el objeto: porque el marco elegido acelera y la descripcion interna necesita un termino compensatorio para conservar forma operativa de la dinamica.\r
\r
Cuando puedo ignorar Coriolis: cuando [[omega]] o [[v_rel]] son pequenos para la precision requerida, y el error esperado queda por debajo del umbral de decision.\r
\r
Que error conceptual es mas comun: mezclar [[a_rel]] del objeto con [[a_marco]] del observador. Esa confusion altera signos y rompe lectura causal.\r
\r
Como verifico rapidamente si el modelo alcanza: comparar residual de prediccion con incertidumbre instrumental y revisar estabilidad de [[a_marco]] y [[omega]] en la ventana analizada.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con sistemas inerciales, aceleracion relativa, diagramas de cuerpo libre y dinamica rotacional.\r
\r
Ruta sugerida:\r
\r
1. Consolidar criterio de inercialidad en traslacion.\r
2. Integrar marcos rotantes con lectura vectorial.\r
3. Practicar decisiones de cambio de modelo por umbral.\r
4. Aplicar a navegacion, meteorologia y control de movimiento.\r
\r
El valor formativo esta en pasar de formula aislada a protocolo de diagnostico fisico.\r
\r
## Sintesis final\r
\r
Sistemas no inerciales no es un catalogo de terminos nuevos; es una disciplina para describir correctamente el movimiento cuando el observador no esta en marco inercial. La consistencia entre [[F_real]], [[F_ficticia]], [[a_rel]], [[a_marco]], [[omega]], [[r]] y [[v_rel]] permite decidir con criterio cuando mantener aproximaciones simples y cuando escalar a un modelo mas completo.\r
`;export{e as default};
