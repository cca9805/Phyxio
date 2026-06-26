const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Dos satelites puntuales interactuan gravitatoriamente con una masa planetaria dominante [[M]]. En una primera parte, se pide la fuerza [[F]] entre el planeta y un satelite de masa [[m1]] a una distancia [[r1]]. En una segunda parte, ese satelite pasa a una distancia [[r2]] y se solicita estimar la nueva fuerza [[F2]] a partir de [[F1]]. En una tercera parte, se pide estimar el campo [[g]] y la aceleracion [[a]] en ambas posiciones, y finalmente calcular el peso [[P]] de una masa de prueba [[m]] ubicada en la posicion final.\r
\r
El objetivo del problema no es solo calcular. Tambien se debe justificar la seleccion de ecuaciones y verificar que las tendencias sean fisicamente coherentes con la ley inversa cuadratica.\r
\r
## Datos\r
\r
Se conocen [[G]], [[M]], [[m1]], [[m2]], [[r1]], [[r2]] y [[m]]. Para la parte de comparacion, se asume que las masas del sistema central se mantienen constantes. Ademas, se aclara que las distancias son centro a centro y que [[r2]] es mayor que [[r1]].\r
\r
Se pide utilizar unidades SI en todas las sustituciones y reportar resultados con notacion cientifica razonable. Tambien se solicita una frase final de interpretacion para cada bloque de calculo.\r
\r
## Definicion del sistema\r
\r
Sistema principal: interaccion gravitatoria newtoniana entre una fuente dominante y un cuerpo de prueba orbital. Variables nucleares del bloque de fuerza directa: [[F]], [[G]], [[m1]], [[m2]], [[r]]. Variables del bloque de campo-respuesta: [[g]], [[a]], [[P]], [[m]], [[M]], [[r]]. Variables de comparacion de estados: [[F1]], [[F2]], [[r1]], [[r2]].\r
\r
La geometria se modela como radial y central. No se consideran rozamiento, propulsion ni perturbaciones de terceros cuerpos en el calculo base.\r
\r
## Modelo fisico\r
\r
Se usa gravitacion newtoniana clasica con simetria radial. Para fuerza directa entre dos masas, se aplica la ley general. Para campo y aceleracion, se usa formulacion de masa fuente. Para comparacion entre estados con masas constantes, se usa relacion de escalado inverso cuadratico.\r
\r
Este modelo es coherente porque el enunciado ofrece distancias radiales claras y no exige precision relativista ni interaccion multipolar.\r
\r
## Justificacion del modelo\r
\r
La eleccion del modelo se justifica por cuatro razones. Primera, la escala del problema es clasica. Segunda, la simetria radial permite resumir la geometria en [[r]]. Tercera, los datos entregados coinciden con los parametros de las formulas del leaf. Cuarta, la pregunta pide tendencia entre dos estados, lo que hace especialmente util la relacion entre [[F1]], [[F2]], [[r1]] y [[r2]].\r
\r
El modelo dejaria de ser valido si el problema exigiera efectos relativistas fuertes, si la distribucion de masa fuera altamente asimetrica o si se incluyeran perturbaciones no despreciables de otros cuerpos.\r
\r
## Resolucion simbolica\r
\r
Bloque de fuerza directa:\r
\r
{{f:ley_newton_gravitacion}}\r
\r
Bloque de comparacion de estados:\r
\r
{{f:variacion_inversa_cuadrado}}\r
\r
Bloque de intensidad de campo:\r
\r
{{f:campo_gravitatorio}}\r
\r
Bloque de aceleracion radial:\r
\r
{{f:aceleracion_gravitatoria}}\r
\r
Bloque de peso sobre masa de prueba:\r
\r
{{f:peso_desde_campo}}\r
\r
Bloque direccional conceptual:\r
\r
{{f:forma_vectorial_conceptual}}\r
\r
Bloque de composicion de contribuciones:\r
\r
{{f:superposicion_conceptual}}\r
\r
## Sustitucion numerica\r
\r
Se calcula primero [[F1]] con los datos de [[m1]], [[m2]] y [[r1]]. Luego, usando [[r2]], se obtiene [[F2]] por comparacion radial para validar tendencia. De forma paralela, se puede recalcular [[F2]] desde la ley general y comparar ambos resultados; esta redundancia sirve como control de consistencia.\r
\r
Con [[M]] y cada radio, se evalua [[g]] y [[a]] en ambos estados. En la posicion final, se obtiene [[P]] para la masa de prueba [[m]]. El valor de [[P]] debe disminuir cuando la distancia radial aumenta, coherente con la caida de [[g]].\r
\r
Si algun resultado contradice estas tendencias, no se debe redondear y seguir. Debe revisarse inmediatamente conversion de unidades, exponentes y definicion geometrica de distancias.\r
\r
## Validacion dimensional\r
\r
Las cinco comprobaciones minimas son:\r
\r
1. [[F]], [[F1]], [[F2]] en newton.\r
2. [[g]] y [[a]] en metros por segundo cuadrado.\r
3. [[P]] en newton.\r
4. [[r]], [[r1]], [[r2]], [[R]] en metros.\r
5. [[G]] en unidades SI compatibles.\r
\r
Ademas, el cociente [[F2]] sobre [[F1]] debe ser adimensional y coincidir con el cociente cuadratico de radios. Esta validacion detecta errores algebraicos incluso cuando las unidades parecen correctas.\r
\r
## Interpretacion fisica\r
\r
El resultado completo debe leerse como una historia causal. Al pasar de [[r1]] a [[r2]] mayor, la intensidad gravitatoria cae, por lo que [[F2]] es menor que [[F1]]. Esa misma estructura aparece en [[g]] y [[a]], y por eso [[P]] de la masa de prueba tambien disminuye en la posicion final.\r
\r
La lectura direccional agrega que la fuerza apunta hacia la fuente. En problemas de una sola dimension radial, se suele trabajar con modulos y signo externo; en problemas de superposicion, la direccion no puede omitirse.\r
\r
Conclusión de examen: la solucion es correcta cuando numero, unidades y tendencia fisica apuntan al mismo relato. Si una de esas tres capas falla, la respuesta queda incompleta.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Una mision de observacion planetaria necesita reconfigurar la orbita de una sonda. El equipo de dinamica de vuelo debe estimar rapidamente como cambiara la fuerza gravitatoria sobre la nave al subir de una orbita baja a una media. Tambien necesita anticipar el nuevo campo local para planificar ventanas de maniobra y tolerancias de instrumentos sensibles a aceleracion.\r
\r
Adicionalmente, el equipo educativo del proyecto usa este mismo caso para entrenar estudiantes en lectura de modelo. El objetivo didactico es mostrar que una sola ley puede alimentar decisiones de fuerza, campo y peso sin perder coherencia simbolica.\r
\r
## Estimacion fisica\r
\r
El flujo de trabajo usa dos capas. Capa uno: calculo base de [[F]] con la ley principal en cada radio. Capa dos: comprobacion de razon de cambio mediante la expresion [[F2]]-[[F1]]. Si ambas capas coinciden, el equipo gana confianza en el pronostico.\r
\r
Luego se calcula [[g]] y [[a]] para el radio de operacion final. Con esa informacion se estima [[P]] para equipos internos de masa [[m]] montados en la sonda. Esto permite verificar cargas mecanicas esperadas durante fases de estabilizacion.\r
\r
Cuando la mision incluye efectos de terceros cuerpos, se activa lectura de superposicion para campo total. Aunque el caso de entrenamiento mantiene una fuente dominante, esta extension se presenta para que el estudiante entienda como escalar el modelo sin romper la estructura conceptual.\r
\r
## Interpretacion\r
\r
La decision operativa se toma con tres preguntas. Primera: la nueva orbita reduce [[F]] lo suficiente para cumplir objetivo de seguridad termica. Segunda: el cambio de [[g]] mantiene estabilidad de sensores dentro de tolerancia. Tercera: la interpretacion de tendencia coincide con lo esperado por la ley inversa cuadratica.\r
\r
Si las tres respuestas son positivas, la reconfiguracion se aprueba. Si no, se ajusta el plan orbital antes de ejecutar.\r
\r
El valor didactico del caso es que el estudiante ve una conexion directa entre teoria y decision real. [[F]], [[g]], [[a]] y [[P]] dejan de ser simbolos aislados y pasan a ser indicadores de riesgo, costo y viabilidad tecnica. Esa traduccion de ecuaciones a criterio de ingenieria es precisamente la competencia que este leaf busca consolidar.`;export{e as default};
