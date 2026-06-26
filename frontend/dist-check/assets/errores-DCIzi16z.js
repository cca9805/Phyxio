const e=`# Errores frecuentes: Peso en diferentes contextos\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### Por que parece correcto\r
Al mirar muchas variables en la misma ecuacion, parece natural pensar que todas "empujan" del mismo modo.\r
\r
#### Por que es incorrecto\r
No todas las variables juegan el mismo papel causal. [[G]] y [[M]] definen el campo; [[a]] modifica la lectura de soporte [[Pap]], pero no crea gravedad.\r
\r
#### Senal de deteccion\r
Si en tu explicacion dices que la masa del cuerpo "cambia" cuando cambia la lectura de bascula, estas mezclando causa y efecto.\r
\r
#### Correccion conceptual\r
Separa siempre campo real ([[P]], [[gmod]]) de lectura contextual ([[Pap]], [[N]]).\r
\r
#### Mini-ejemplo\r
Dos cajas con la misma [[m]] en el mismo planeta pueden marcar distinto [[Pap]] en un ascensor acelerado, sin que cambie [[Pmod]] por campo.\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### Por que parece correcto\r
La ecuacion parece universal y se tiende a usar sin mirar dominio.\r
\r
#### Por que es incorrecto\r
Cada relacion tiene hipotesis. Usar [[g0]] cuando la variacion radial es grande produce sesgo sistematico.\r
\r
#### Senal de deteccion\r
Obtienes resultados numericos estables pero incompatibles con telemetria o con medicion.\r
\r
#### Correccion conceptual\r
Antes de sustituir, declara si estas en modelo local o central.\r
\r
#### Mini-ejemplo\r
Si [[h]] es grande frente a [[R]], debes pasar a [[r]] y usar [[G]] con [[M]], no quedarte en aproximacion de superficie.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### Por que parece correcto\r
Muchas magnitudes comparten unidades o se miden con el mismo dispositivo.\r
\r
#### Por que es incorrecto\r
[[m]] no es [[Pmod]], y [[Pap]] no es siempre igual a [[Pmod]]. Son objetos fisicos distintos.\r
\r
#### Senal de deteccion\r
Escribes frases del tipo "en orbita no hay gravedad porque la bascula marca cero".\r
\r
#### Correccion conceptual\r
Etiqueta cada magnitud por su rol: propiedad del cuerpo, intensidad del campo o reaccion de contacto.\r
\r
#### Mini-ejemplo\r
En caida libre ideal, [[Pap]] puede ser casi cero mientras [[gmod]] sigue siendo claramente no nulo.\r
\r
\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### Por que parece correcto\r
En ejercicios escolares, el modelo local suele funcionar y crea exceso de confianza.\r
\r
#### Por que es incorrecto\r
Cuando cambia escala espacial o precision requerida, la simplificacion deja de ser inocua.\r
\r
#### Senal de deteccion\r
La diferencia entre dos modelos supera la incertidumbre del instrumento.\r
\r
#### Correccion conceptual\r
Usa criterio de cambio: si abs([[h]]) <= 0.02*[[R]] no se cumple, migra a modelo central.\r
\r
#### Mini-ejemplo\r
En vuelo suborbital, mantener [[g0]] fijo puede subestimar cargas maximas respecto al modelo con [[r]].\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### Por que parece correcto\r
El alumno recuerda la formula pero olvida su contrato de validez.\r
\r
#### Por que es incorrecto\r
Toda ecuacion opera en un dominio, no en todo el universo fisico.\r
\r
#### Senal de deteccion\r
No puedes justificar por que elegiste una formula y no otra del mismo leaf.\r
\r
#### Correccion conceptual\r
Declara limite, variable dominante y margen de error antes de resolver.\r
\r
#### Mini-ejemplo\r
Si el objetivo es calibracion fina de sensor, un modelo aproximado sin analisis de error puede invalidar el ensayo.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### Por que parece correcto\r
La manipulacion algebraica parece un paso mecanico sin riesgo conceptual.\r
\r
#### Por que es incorrecto\r
Un despeje formalmente valido puede romper dominio fisico o signo esperado.\r
\r
#### Senal de deteccion\r
Aparecen valores negativos no plausibles para magnitudes que por contexto deben ser no negativas.\r
\r
#### Correccion conceptual\r
Valida dimensiones, signo y rango despues de cada despeje critico.\r
\r
#### Mini-ejemplo\r
Si calculas [[r]] con un radicando negativo al reorganizar una expresion, no es un numero "raro": es un fallo de entrada o modelo.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### Por que parece correcto\r
El foco suele ponerse en la formula y no en conversiones.\r
\r
#### Por que es incorrecto\r
Ignorar [[G]] o mezclar kilometros con metros puede desplazar resultados varios ordenes de magnitud.\r
\r
#### Senal de deteccion\r
Resultado absurdamente grande o pequeno frente a escala esperada.\r
\r
#### Correccion conceptual\r
Trabaja en SI desde el inicio y guarda trazabilidad de conversiones.\r
\r
#### Mini-ejemplo\r
Usar [[R]] en km dentro de una ecuacion en SI puede destruir la coherencia del calculo aunque los pasos algebraicos parezcan correctos.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### Por que parece correcto\r
Mas decimales dan una falsa sensacion de rigor.\r
\r
#### Por que es incorrecto\r
Precision numerica no equivale a validez fisica.\r
\r
#### Senal de deteccion\r
Reportes con muchos decimales pero sin analisis de incertidumbre o de dominio.\r
\r
#### Correccion conceptual\r
Redondea segun calidad del modelo y del instrumento, no segun capacidad de calculadora.\r
\r
#### Mini-ejemplo\r
Si la diferencia entre modelos es de 3 por ciento, reportar siete decimales en [[Pap]] no agrega valor fisico.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### Por que parece correcto\r
En evaluaciones rapidas se premia cerrar cuentas y se olvida la narrativa causal.\r
\r
#### Por que es incorrecto\r
Sin interpretacion, no sabes si el numero representa el fenomeno correcto.\r
\r
#### Senal de deteccion\r
No puedes explicar por que [[Pap]] subio o bajo cuando cambia [[a]].\r
\r
#### Correccion conceptual\r
Termina toda resolucion con lectura causal: que cambio, por que cambio y que implicacion practica tiene.\r
\r
#### Mini-ejemplo\r
Decir "[[Pap]] = 20 N" no basta; hay que explicar que el marco se acerca a caida libre y por eso el soporte casi no transmite carga.\r
\r
## Regla de autocontrol rápido\r
\r
Usa esta checklist mental después de resolver un problema:\r
\r
✓ **¿Tiene sentido dimensional?** Verifica \\\\([	ext{resultado}] = [	ext{esperado}]\\\\)\r
\r
✓ **¿Es físicamente razonable?** ¿Está dentro del rango de órdenes de magnitud típicos?\r
\r
✓ **¿El signo es correcto?** ¿Indica dirección/sentido coherente con el problema?\r
\r
✓ **¿Respeta los límites del modelo?** ¿Estoy en el rango donde el modelo fue validado?\r
\r
✓ **¿Puedo explicar qué significa?** Si no puedes contar la historia física del resultado, algo falta.\r
\r
Si alguno de estos puntos falla, reexamina tu trabajo antes de confiar en el resultado.\r
`;export{e as default};
