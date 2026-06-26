const e=`## Errores conceptuales

### Error 1: creer que la respuesta estacionaria usa la frecuencia natural

#### Por qué parece correcto
El oscilador tiene una frecuencia propia y el alumno la recuerda de oscilaciones libres.
#### Por qué es incorrecto
En régimen estacionario forzado, la frecuencia temporal de [[x]] es [[omega_f]].
#### Señal de detección
Se escribe la respuesta con una frecuencia que no aparece en la fuerza aplicada.
#### Corrección conceptual
Separar frecuencia propia, excitación externa y amplitud resultante.
#### Mini-ejemplo
Un motor que gira a 8 rad/s impone esa frecuencia aunque el soporte tenga otra natural.

### Error 2: ignorar el desfase

#### Por qué parece correcto
La amplitud [[X]] parece describir toda la vibración.
#### Por qué es incorrecto
[[delta]] dice cuándo ocurre la respuesta respecto a la fuerza.
#### Señal de detección
Se calcula [[X]] pero no se puede dibujar [[x]] en el tiempo.
#### Corrección conceptual
Calcular amplitud y fase antes de escribir la señal temporal.
#### Mini-ejemplo
Dos respuestas con el mismo [[X]] pueden estar retrasadas de forma distinta.

## Errores de modelo

### Error 3: usar el modelo durante el transitorio inicial

#### Por qué parece correcto
La fuerza ya está aplicada desde el inicio.
#### Por qué es incorrecto
La fórmula de [[X]] describe la parte permanente, no la suma con el movimiento libre inicial.
#### Señal de detección
Los datos iniciales no encajan con la señal estacionaria.
#### Corrección conceptual
Esperar a que el transitorio decaiga o resolver la respuesta completa.
#### Mini-ejemplo
Un sistema recién arrancado puede tener una oscilación libre superpuesta.

### Error 4: aplicar linealidad con amplitudes grandes

#### Por qué parece correcto
La fórmula sigue produciendo un número.
#### Por qué es incorrecto
Si [[X]] activa topes o cambia [[k]], el modelo lineal deja de valer.
#### Señal de detección
La respuesta medida contiene armónicos o saturación.
#### Corrección conceptual
Cambiar a modelo no lineal o limitar la amplitud de excitación.
#### Mini-ejemplo
Una bancada que golpea un tope no responde como masa-muelle lineal.

## Errores matemáticos

### Error 5: perder el término inercial

#### Por qué parece correcto
A baja frecuencia, el término de [[m]] puede parecer pequeño.
#### Por qué es incorrecto
A frecuencias altas, la inercia domina la oposición dinámica.
#### Señal de detección
La amplitud calculada no baja al aumentar mucho [[omega_f]].
#### Corrección conceptual
Mantener siempre la combinación elástica menos inercial.
#### Mini-ejemplo
Con [[omega_f]] grande, omitir [[m]] sobrestima [[X]].

### Error 6: usar mal el cuadrante de fase

#### Por qué parece correcto
La calculadora devuelve un arctangente principal.
#### Por qué es incorrecto
El signo del denominador cambia el cuadrante físico de [[delta]].
#### Señal de detección
La respuesta aparece adelantada cuando debería retrasarse.
#### Corrección conceptual
Interpretar [[delta]] con el signo de los términos dinámicos.
#### Mini-ejemplo
Por encima de la zona sensible, la fase no se lee igual que a baja frecuencia.

## Errores de interpretación

### Error 7: confundir fuerza forzada con resonancia

#### Por qué parece correcto
Ambos temas usan respuesta frente a frecuencia.
#### Por qué es incorrecto
Este leaf calcula la respuesta para una frecuencia dada; resonancia busca el máximo.
#### Señal de detección
Se concluye "resonancia" sin barrer frecuencias ni comparar máximos.
#### Corrección conceptual
Primero resolver la fuerza forzada general y después estudiar el máximo si se pide.
#### Mini-ejemplo
Una respuesta grande a 8 rad/s no prueba por sí sola que sea el máximo resonante.

## Regla de autocontrol rápido

Comprueba que [[omega_f]] es la frecuencia impuesta, que [[X]] tiene unidades de longitud, que [[delta]] se interpreta con cuadrante correcto, que [[x]] usa la respuesta estacionaria y que el transitorio inicial no domina los datos.
`;export{e as default};
