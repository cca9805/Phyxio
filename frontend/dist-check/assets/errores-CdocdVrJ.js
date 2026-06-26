const e=`# Errores comunes\r
\r
## Errores conceptuales\r
\r
### Error\r
Confundir [[W]] con fuerza o con esfuerzo subjetivo.\r
\r
Por que parece correcto\r
En lenguaje cotidiano se habla de esfuerzo como sinónimo de trabajo, y eso hace que muchos estudiantes crean que una fuerza grande implica automaticamente trabajo grande.\r
\r
Senal de deteccion\r
La resolucion menciona solo [[F]] y omite [[d]] y [[theta]], o interpreta un resultado sin discutir orientacion.\r
\r
Mini-ejemplo de contraste\r
Dos empujes con la misma [[F]] pueden producir trabajos muy distintos si cambia [[theta]] o si [[d]] es diferente.\r
\r
Correccion conceptual\r
Recordar que trabajo mecanico es transferencia energetica por fuerza en desplazamiento, no fuerza aislada.\r
\r
### Error\r
Creer que trabajo nulo significa ausencia de interaccion.\r
\r
Por que parece correcto\r
Si el resultado numérico de [[W]] es cero, se interpreta como si no hubiera fuerza ni efecto fisico relevante.\r
\r
Senal de deteccion\r
Se concluye que no pasa nada fisicamente aunque el sistema cambie direccion o mantenga restricciones activas.\r
\r
Mini-ejemplo de contraste\r
Una fuerza perpendicular al desplazamiento puede tener [[W]] nula y aun asi cambiar direccion de movimiento.\r
\r
Correccion conceptual\r
Separar transferencia energetica de cambio direccional; una interaccion puede no transferir energia y seguir siendo dinamicamente decisiva.\r
\r
## Errores de modelo\r
\r
### Error\r
Aplicar modelo de fuerza constante cuando la fuerza varia claramente en el tramo.\r
\r
Por que parece correcto\r
La formula elemental es rapida y familiar, y se usa incluso cuando el enunciado describe variacion fuerte por posicion o velocidad.\r
\r
Senal de deteccion\r
El resultado cambia mucho al dividir el trayecto en subtramos o contradice datos observados repetidos.\r
\r
Mini-ejemplo de contraste\r
En un resorte comprimido, la fuerza no se mantiene estable; tratarla como constante distorsiona la transferencia.\r
\r
Correccion conceptual\r
Cuando conviene cambiar de modelo, pasar a fuerza variable o a cierre energetico por segmentos.\r
\r
### Error\r
Cambiar sistema de referencia fisica en medio de la resolucion.\r
\r
Por que parece correcto\r
En problemas con varios cuerpos, se mezclan datos de un objeto con interpretaciones de otro.\r
\r
Senal de deteccion\r
Se calcula [[W]] para una interaccion y luego se interpreta como si fuera [[Wnet]] de todo el sistema.\r
\r
Mini-ejemplo de contraste\r
Trabajo sobre una caja no es automaticamente trabajo del conjunto caja mas operador.\r
\r
Correccion conceptual\r
Fijar sistema al inicio y mantenerlo hasta la interpretacion final.\r
\r
## Errores matemáticos\r
\r
### Error\r
Eliminar el signo en resultados de trabajo.\r
\r
Por que parece correcto\r
El alumno prioriza magnitud y piensa que el signo es un detalle de convención.\r
\r
Senal de deteccion\r
Aparecen sumas de modulos en lugar de suma algebraica de contribuciones.\r
\r
Mini-ejemplo de contraste\r
En frenado, convertir trabajo resistente a positivo borra la lectura causal de extraccion energetica.\r
\r
Correccion conceptual\r
Mantener el signo de cada contribucion y justificar su origen geometrico mediante [[theta]].\r
\r
### Error\r
Usar unidades inconsistentes para [[F]] o [[d]].\r
\r
Por que parece correcto\r
La cuenta numerica puede cerrarse formalmente aunque no tenga escala fisica coherente.\r
\r
Senal de deteccion\r
Resultados con orden de magnitud absurdo para el escenario real.\r
\r
Mini-ejemplo de contraste\r
Tomar desplazamiento en centimetros sin convertir puede inflar o hundir [[W]] por factores grandes.\r
\r
Correccion conceptual\r
Unificar unidades en SI antes de sustituir y validar plausibilidad del orden de magnitud.\r
\r
## Errores de interpretación\r
\r
### Error\r
Reportar el numero de [[W]] sin lectura causal del sistema.\r
\r
Por que parece correcto\r
El formato de examen a veces premia resultado final y no razonamiento fisico.\r
\r
Senal de deteccion\r
La solucion termina en valor numerico sin explicar aporte, extraccion o neutralidad energetica.\r
\r
Mini-ejemplo de contraste\r
Un mismo valor absoluto de trabajo puede significar escenarios opuestos segun el signo y el contexto.\r
\r
Correccion conceptual\r
Cerrar con frase fisica que conecte resultado, orientacion de fuerzas y efecto esperado sobre movimiento.\r
\r
## Regla de autocontrol rápido\r
\r
1. Declara sistema y tramo.\r
2. Verifica [[F]], [[d]] y [[theta]] en el mismo marco.\r
3. Predice signo esperado antes de calcular.\r
4. Suma contribuciones con signo para obtener [[Wnet]] si corresponde.\r
5. Comprueba escala y coherencia fisica del resultado.`;export{e as default};
