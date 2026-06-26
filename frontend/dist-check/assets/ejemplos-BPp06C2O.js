const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque unido a un resorte se desplaza sobre una guia horizontal sin rozamiento apreciable. El profesor entrega un perfil de fuerza restauradora dependiente de posicion y pide estimar trabajo de compresion en un intervalo inicial. El objetivo es determinar [[W]] para el tramo entre [[x1]] y [[x2]], justificar modelo y cerrar con lectura fisica de transferencia.\r
\r
## Datos\r
\r
Se dispone de una aproximacion lineal valida en el rango analizado. La constante efectiva del resorte se reporta como [[k]] en unidades SI y los limites del tramo se dan sobre el mismo eje. El enunciado aclara que la medicion se hizo en un rango donde no aparecen no linealidades visibles, por lo que la representacion lineal es razonable como primera solucion.\r
\r
## Definición del sistema\r
\r
Sistema elegido: bloque mas resorte en el tramo de compresion definido. Frontera: contacto con actuador externo que realiza trabajo de entrada. Interaccion dominante: respuesta elastica en funcion de posicion. Salida requerida: trabajo de compresion en el intervalo inicial, expresado como [[W]].\r
\r
## Modelo físico\r
\r
Se adopta modelo de fuerza variable en funcion de posicion con lectura acumulativa por intervalo. En esta situacion, el trabajo no se trata como producto constante, sino como area orientada entre limites. Como se verifica linealidad local, puede usarse cierre de Hooke en intervalo para resolver con buena trazabilidad.\r
\r
## Justificación del modelo\r
\r
La eleccion es coherente porque el rango de desplazamiento es corto, la respuesta observada no presenta saturacion y la histéresis es despreciable en la escala de ensayo. Esto legitima usar relacion lineal para conectar [[k]], [[x1]], [[x2]] y [[W]]. Si aparecieran desviaciones fuertes, la estrategia correcta seria pasar a integral por tramos o perfil experimental directo.\r
\r
## Resolución simbólica\r
\r
Marco general del leaf:\r
\r
{{f:trabajo_integral}}\r
\r
Cierre lineal para este caso:\r
\r
{{f:trabajo_hooke_intervalo}}\r
\r
Relacion aproximada de contraste:\r
\r
{{f:trabajo_aprox_fuerza_media}}\r
\r
## Sustitución numérica\r
\r
Se toman valores de laboratorio con [[k]] en rango tipico de banco didactico y limites [[x1]] y [[x2]] coherentes con la zona lineal verificada. Al sustituir en el cierre lineal, el resultado de [[W]] queda en orden de joules bajos, compatible con un sistema de resorte escolar y desplazamiento corto.\r
\r
Para contraste, se calcula [[Fmed]] a partir de pendiente media del perfil en el tramo y se obtiene un valor de trabajo cercano, con una discrepancia pequena. Esa diferencia confirma que la aproximacion media es util para estimacion rapida, pero la integral o el cierre lineal sigue siendo referencia principal.\r
\r
## Validación dimensional\r
\r
La combinacion de [[k]] con diferencia cuadratica entre [[x2]] y [[x1]] entrega unidades equivalentes a energia mecanica. Esta validacion cierra consistencia interna de calculo y evita errores de conversion. Ademas, al comparar con aproximacion por [[Fmed]], se comprueba que ambas rutas retornan magnitud con unidad compatible y escala plausible.\r
\r
## Interpretación física\r
\r
El signo de [[W]] indica que el agente externo transfiere energia al conjunto durante la compresion. El valor obtenido no solo cuantifica transferencia total; tambien resume la distribucion de esfuerzo local en el intervalo. En este tipo de ensayo, una parte importante del aprendizaje es entender que el resultado no depende unicamente del desplazamiento neto, sino de como evoluciona la fuerza en cada posicion.\r
\r
Cuando el intervalo se desplaza hacia regiones de mayor rigidez efectiva, el trabajo crece de manera no proporcional al cambio lineal de recorrido. Esa lectura ayuda a anticipar por que pequenas variaciones en limite final pueden alterar de forma notable el presupuesto energetico de actuacion.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un equipo de mantenimiento valida el cierre de una puerta industrial con sistema elastico de asistencia. El fabricante aporta curva aproximada de fuerza en funcion de posicion durante el recorrido de cierre. La tarea es estimar energia por ciclo para decidir si el actuador actual trabaja dentro de margen seguro o si necesita reconfiguracion.\r
\r
El equipo no dispone de una expresion exacta unica para todo el recorrido, pero si cuenta con tramos donde la respuesta es casi lineal y con datos discretos de fuerza promedio. Por eso se comparan dos rutas: integral segmentada para referencia y aproximacion por [[Fmed]] para operacion rapida en inspecciones rutinarias.\r
\r
## Estimación física\r
\r
Primero se define intervalo operativo mediante [[x1]] y [[x2]] de la fase mas exigente del cierre. Luego se toma perfil local para estimar transferencia acumulada de [[W]]. En paralelo, se calcula estimacion por [[Fmed]] para construir indicador rapido de salud del sistema.\r
\r
La comparacion muestra que en ciclos normales la diferencia relativa entre ambas rutas se mantiene dentro de tolerancia operacional. Sin embargo, cuando la temperatura ambiente baja y aumenta rigidez efectiva, la discrepancia crece. Esa observacion sugiere que la fuerza media pierde fidelidad en condiciones de borde y que conviene activar control por tramos para evitar subestimacion de energia requerida.\r
\r
Con ese resultado, el equipo define protocolo dual: modo rapido con [[Fmed]] para monitoreo diario y modo integral para auditorias semanales o cuando se detecten sintomas de variacion anomala.\r
\r
## Interpretación\r
\r
Este ejemplo muestra el valor tecnico del leaf: no se trata solo de calcular [[W]], sino de decidir que modelo usar en cada contexto de riesgo. En operacion estable, la aproximacion media reduce tiempo y mantiene utilidad. En situaciones con variacion fuerte del perfil, la integral segmentada protege decisiones de seguridad y mantenimiento.\r
\r
La leccion central es metodologica. Un resultado energetico fiable depende de declarar limites, justificar modelo y reportar alcance. Cuando esos tres elementos se cumplen, el trabajo con fuerza variable se convierte en herramienta operativa para diagnostico, planificacion y mejora de confiabilidad en sistemas reales.`;export{e as default};
