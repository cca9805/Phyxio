# Errores frecuentes: Peso en diferentes contextos

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
Al mirar muchas variables en la misma ecuacion, parece natural pensar que todas "empujan" del mismo modo.

#### Por que es incorrecto
No todas las variables juegan el mismo papel causal. [[G]] y [[M]] definen el campo; [[a]] modifica la lectura de soporte [[Pap]], pero no crea gravedad.

#### Senal de deteccion
Si en tu explicacion dices que la masa del cuerpo "cambia" cuando cambia la lectura de bascula, estas mezclando causa y efecto.

#### Correccion conceptual
Separa siempre campo real ([[P]], [[gmod]]) de lectura contextual ([[Pap]], [[N]]).

#### Mini-ejemplo
Dos cajas con la misma [[m]] en el mismo planeta pueden marcar distinto [[Pap]] en un ascensor acelerado, sin que cambie [[Pmod]] por campo.

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### Por que parece correcto
La ecuacion parece universal y se tiende a usar sin mirar dominio.

#### Por que es incorrecto
Cada relacion tiene hipotesis. Usar [[g0]] cuando la variacion radial es grande produce sesgo sistematico.

#### Senal de deteccion
Obtienes resultados numericos estables pero incompatibles con telemetria o con medicion.

#### Correccion conceptual
Antes de sustituir, declara si estas en modelo local o central.

#### Mini-ejemplo
Si [[h]] es grande frente a [[R]], debes pasar a [[r]] y usar [[G]] con [[M]], no quedarte en aproximacion de superficie.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
Muchas magnitudes comparten unidades o se miden con el mismo dispositivo.

#### Por que es incorrecto
[[m]] no es [[Pmod]], y [[Pap]] no es siempre igual a [[Pmod]]. Son objetos fisicos distintos.

#### Senal de deteccion
Escribes frases del tipo "en orbita no hay gravedad porque la bascula marca cero".

#### Correccion conceptual
Etiqueta cada magnitud por su rol: propiedad del cuerpo, intensidad del campo o reaccion de contacto.

#### Mini-ejemplo
En caida libre ideal, [[Pap]] puede ser casi cero mientras [[gmod]] sigue siendo claramente no nulo.



## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto
En ejercicios escolares, el modelo local suele funcionar y crea exceso de confianza.

#### Por que es incorrecto
Cuando cambia escala espacial o precision requerida, la simplificacion deja de ser inocua.

#### Senal de deteccion
La diferencia entre dos modelos supera la incertidumbre del instrumento.

#### Correccion conceptual
Usa criterio de cambio: si abs([[h]]) <= 0.02*[[R]] no se cumple, migra a modelo central.

#### Mini-ejemplo
En vuelo suborbital, mantener [[g0]] fijo puede subestimar cargas maximas respecto al modelo con [[r]].

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto
El alumno recuerda la formula pero olvida su contrato de validez.

#### Por que es incorrecto
Toda ecuacion opera en un dominio, no en todo el universo fisico.

#### Senal de deteccion
No puedes justificar por que elegiste una formula y no otra del mismo leaf.

#### Correccion conceptual
Declara limite, variable dominante y margen de error antes de resolver.

#### Mini-ejemplo
Si el objetivo es calibracion fina de sensor, un modelo aproximado sin analisis de error puede invalidar el ensayo.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
La manipulacion algebraica parece un paso mecanico sin riesgo conceptual.

#### Por que es incorrecto
Un despeje formalmente valido puede romper dominio fisico o signo esperado.

#### Senal de deteccion
Aparecen valores negativos no plausibles para magnitudes que por contexto deben ser no negativas.

#### Correccion conceptual
Valida dimensiones, signo y rango despues de cada despeje critico.

#### Mini-ejemplo
Si calculas [[r]] con un radicando negativo al reorganizar una expresion, no es un numero "raro": es un fallo de entrada o modelo.

### Error 7: Olvidar constantes fundamentales o unidades

#### Por que parece correcto
El foco suele ponerse en la formula y no en conversiones.

#### Por que es incorrecto
Ignorar [[G]] o mezclar kilometros con metros puede desplazar resultados varios ordenes de magnitud.

#### Senal de deteccion
Resultado absurdamente grande o pequeno frente a escala esperada.

#### Correccion conceptual
Trabaja en SI desde el inicio y guarda trazabilidad de conversiones.

#### Mini-ejemplo
Usar [[R]] en km dentro de una ecuacion en SI puede destruir la coherencia del calculo aunque los pasos algebraicos parezcan correctos.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### Por que parece correcto
Mas decimales dan una falsa sensacion de rigor.

#### Por que es incorrecto
Precision numerica no equivale a validez fisica.

#### Senal de deteccion
Reportes con muchos decimales pero sin analisis de incertidumbre o de dominio.

#### Correccion conceptual
Redondea segun calidad del modelo y del instrumento, no segun capacidad de calculadora.

#### Mini-ejemplo
Si la diferencia entre modelos es de 3 por ciento, reportar siete decimales en [[Pap]] no agrega valor fisico.

### Error 9: Saltarte la interpretación física del resultado calculado

#### Por que parece correcto
En evaluaciones rapidas se premia cerrar cuentas y se olvida la narrativa causal.

#### Por que es incorrecto
Sin interpretacion, no sabes si el numero representa el fenomeno correcto.

#### Senal de deteccion
No puedes explicar por que [[Pap]] subio o bajo cuando cambia [[a]].

#### Correccion conceptual
Termina toda resolucion con lectura causal: que cambio, por que cambio y que implicacion practica tiene.

#### Mini-ejemplo
Decir "[[Pap]] = 20 N" no basta; hay que explicar que el marco se acerca a caida libre y por eso el soporte casi no transmite carga.

## Regla de autocontrol rápido

Usa esta checklist mental después de resolver un problema:

✓ **¿Tiene sentido dimensional?** Verifica \\([	ext{resultado}] = [	ext{esperado}]\\)

✓ **¿Es físicamente razonable?** ¿Está dentro del rango de órdenes de magnitud típicos?

✓ **¿El signo es correcto?** ¿Indica dirección/sentido coherente con el problema?

✓ **¿Respeta los límites del modelo?** ¿Estoy en el rango donde el modelo fue validado?

✓ **¿Puedo explicar qué significa?** Si no puedes contar la historia física del resultado, algo falta.

Si alguno de estos puntos falla, reexamina tu trabajo antes de confiar en el resultado.
