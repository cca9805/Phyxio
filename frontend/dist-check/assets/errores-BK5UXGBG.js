const e=`\uFEFF# Errores frecuentes: Concepto fuerzas ficticias

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
La ecuacion muestra varias magnitudes y da la impresion de que todas son causas independientes del mismo tipo.

#### Por que es incorrecto
En este leaf, [[F_fict]] no es una interaccion material nueva. Es una correccion de marco asociada a [[a_marco]].

#### Senal de deteccion
El estudiante explica [[F_fict]] como si fuera una fuerza de contacto o de campo sin declarar el sistema de referencia.

#### Correccion conceptual
Declarar primero el marco. Luego separar fuerzas reales [[F_res]] de correccion inercial [[F_fict]].

#### Mini-ejemplo
Dos observadores describen el mismo bloque: uno inercial usa [[a_in]], otro acelerado usa [[a_rel]] y [[F_fict]]. El fenomeno es uno; la representacion cambia.

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### Por que parece correcto
La sustitucion numerica produce un valor rapido y parece suficiente para cerrar el problema.

#### Por que es incorrecto
Sin revisar validez del modelo, el numero puede ser algebraicamente correcto pero fisicamente irrelevante.

#### Senal de deteccion
Se reporta [[a_rel]] sin mencionar estabilidad de [[a_marco]] ni umbral de cambio de modelo.

#### Correccion conceptual
Incluir criterio cuantitativo de uso y criterio de escalado antes de concluir.

#### Mini-ejemplo
Un calculo da [[a_rel]] razonable, pero residuos repetidos superan 10 por ciento; seguir con el mismo modelo induce mala decision.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
[[a_in]] y [[a_rel]] son aceleraciones y suelen aparecer con valores cercanos en algunos casos.

#### Por que es incorrecto
Tienen significado distinto: [[a_in]] pertenece al marco inercial y [[a_rel]] al marco acelerado.

#### Senal de deteccion
El informe usa [[a_in]] y [[a_rel]] de forma intercambiable sin mencionar [[a_marco]].

#### Correccion conceptual
Escribir siempre la cadena [[a_in]] = [[a_rel]] + [[a_marco]] y explicar el rol de cada termino.

#### Mini-ejemplo
Si [[a_marco]] no es cero, entonces [[a_in]] y [[a_rel]] no deben asumirse iguales por defecto.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto
El modelo simple funciona en muchos ejercicios introductorios.

#### Por que es incorrecto
Fuera de regimen, terminos no incluidos afectan la decision y la lectura simple deja de ser fiable.

#### Senal de deteccion
Desacople persistente entre tendencia medida y estimada mayor a 10 por ciento.

#### Correccion conceptual
Pasar a un modelo extendido cuando el indicador de fallo sea repetido y no aislado.

#### Mini-ejemplo
Una plataforma con variacion brusca de [[a_marco]] exige modelado mas rico que el promedio escalar.

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto
La salida numérica parece plausible y del orden esperado.

#### Por que es incorrecto
La plausibilidad numerica no prueba validez fisica de supuestos.

#### Senal de deteccion
No se documenta rango de aplicacion ni criterio de descarte.

#### Correccion conceptual
Anotar junto al resultado el limite de validez operativo.

#### Mini-ejemplo
El mismo esquema sirve en un tramo estable y falla en un tramo con transientes fuertes; sin limites, ambos casos se mezclan.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
La manipulacion algebraica parece rutinaria.

#### Por que es incorrecto
Un cambio de signo en [[F_fict]] altera completamente la interpretacion causal.

#### Senal de deteccion
La tendencia contradice la regla: aumento de [[a_marco]] y disminucion de modulo de [[F_fict]] sin justificacion.

#### Correccion conceptual
Verificar signo y unidades en cada paso intermedio, no solo al final.

#### Mini-ejemplo
Un menos perdido cambia un diagnostico de estabilidad en uno de inestabilidad.

### Error 7: Olvidar constantes fundamentales o unidades

#### Por que parece correcto
Se asume conversion de unidades "para despues".

#### Por que es incorrecto
Sin unidad coherente, comparaciones entre escenarios dejan de ser validas.

#### Senal de deteccion
Dos rutas de calculo equivalentes dan resultados incompatibles por escala.

#### Correccion conceptual
Normalizar unidades al inicio y registrar conversiones.

#### Mini-ejemplo
Usar [[a_marco]] en unidad no SI sin convertir distorsiona de forma directa [[F_fict]].

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### Por que parece correcto
Muchos decimales transmiten sensacion de exactitud.

#### Por que es incorrecto
La precision real depende de supuestos y calidad de datos, no del formato numerico.

#### Senal de deteccion
Se reportan varios decimales sin rango de confianza ni comentario de validez.

#### Correccion conceptual
Ajustar cifras significativas al nivel de incertidumbre del modelo.

#### Mini-ejemplo
Un resultado con cuatro decimales no mejora una decision cuyo umbral esta en orden de unidades enteras.

### Error 9: Saltarte la interpretación física del resultado calculado

#### Por que parece correcto
Obtener un numero parece cerrar el ejercicio.

#### Por que es incorrecto
Sin lectura causal, el valor no orienta accion ni mejora comprension.

#### Senal de deteccion
El informe termina en calculo y no explica implicacion sobre [[a_rel]] o [[a_in]].

#### Correccion conceptual
Cerrar siempre con lectura fisica y regla de decision.

#### Mini-ejemplo
Dos escenarios con igual modulo de [[F_fict]] pueden requerir decisiones opuestas por diferente [[F_res]].

## Regla de autocontrol rapido

1. ¿Se declaro el marco y el eje?
2. ¿Se separo [[F_res]] de [[F_fict]]?
3. ¿Se distinguio [[a_rel]] de [[a_in]] usando [[a_marco]]?
4. ¿Se verificaron signo y unidad?
5. ¿Se explico la decision fisica final?\r
`;export{e as default};
