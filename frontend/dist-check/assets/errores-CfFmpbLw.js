const e=`# Errores frecuentes: Arrastre lineal\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
### Por que parece correcto\r
La ecuacion se ve simple y da la impresion de que todo depende de una sustitucion directa.\r
\r
### Por que es incorrecto\r
En este leaf, [[F_d]] es una consecuencia del movimiento relativo en el medio y no una causa motriz del movimiento.\r
\r
### Señal de deteccion\r
Tu DCL coloca [[F_d]] en el mismo sentido que la velocidad sin justificar marco ni convencion.\r
\r
### Correccion conceptual\r
Declara siempre que [[F_d]] se opone al movimiento relativo y separa con claridad fuerza aplicada y fuerza resistiva.\r
\r
### Mini-ejemplo\r
Si una particula se mueve hacia la derecha en un fluido en reposo, [[F_d]] apunta hacia la izquierda aunque su modulo se calcule de forma escalar.\r
\r
### Error 2: Aplicar la formula mecanicamente sin validar el contexto\r
\r
### Por que parece correcto\r
Como la relacion parece elemental, se tiende a usarla en cualquier problema de movimiento en fluidos.\r
\r
### Por que es incorrecto\r
La ley lineal requiere un dominio en el que la proporcionalidad entre [[F_d]] y [[v]] sea razonable.\r
\r
### Señal de deteccion\r
Los datos muestran curvatura clara en [[F_d]] frente a [[v]] y aun asi se mantiene una unica pendiente [[b]].\r
\r
### Correccion conceptual\r
Antes de calcular, revisa validez local del modelo y declara criterio de cambio si aparece no linealidad.\r
\r
### Mini-ejemplo\r
Si al duplicar [[v]] la fuerza medida crece mucho mas que al doble de forma sistematica, la lectura lineal debe revisarse.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
### Por que parece correcto\r
En ejercicios rapidos, [[b]] y [[tau]] se manipulan algebraicamente y parecen intercambiables por despeje.\r
\r
### Por que es incorrecto\r
[[b]] es un parametro resistivo del medio-cuerpo; [[tau]] es una escala temporal derivada que combina [[m]] y [[b]].\r
\r
### Señal de deteccion\r
Tu interpretacion final habla de [[tau]] como si fuera un coeficiente de friccion o de [[b]] como si fuera tiempo.\r
\r
### Correccion conceptual\r
Asocia cada magnitud a su papel fisico: [[b]] como pendiente resistiva y [[tau]] como rapidez de ajuste dinamico.\r
\r
### Mini-ejemplo\r
Dos sistemas con igual [[b]] pero distinta [[m]] tienen distinta [[tau]], aunque la relacion instantanea de arrastre sea igual.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuando el modelo simplificado falla\r
\r
### Por que parece correcto\r
El modelo lineal suele funcionar muy bien en practicas iniciales y genera confianza excesiva.\r
\r
### Por que es incorrecto\r
Fuera de su rango, una sola pendiente [[b]] deja de representar el mecanismo dominante.\r
\r
### Señal de deteccion\r
Necesitas cambiar [[b]] en cada subtramo de [[v]] para mantener ajuste aceptable.\r
\r
### Correccion conceptual\r
Define umbral de error y activa transicion de modelo cuando la pendiente deje de ser estable.\r
\r
### Mini-ejemplo\r
Si para bajas velocidades ajusta [[b]]_1 y para altas solo ajusta [[b]]_2 muy distinta, declara cambio de regimen en vez de promediar.\r
\r
### Error 5: Ignorar los limites del modelo conocidos\r
\r
### Por que parece correcto\r
Se asume que si la ecuacion aparece en el tema, sirve para cualquier configuracion parecida.\r
\r
### Por que es incorrecto\r
El valor de [[b]] depende de condiciones de medio y geometria; extrapolar sin control puede romper la validez.\r
\r
### Señal de deteccion\r
Comparas ensayos con fluidos distintos usando el mismo [[b]] sin recalibracion.\r
\r
### Correccion conceptual\r
Documenta condiciones y recalibra [[b]] cuando cambie el escenario fisico relevante.\r
\r
### Mini-ejemplo\r
Un cuerpo en aire y en aceite no debe compartir automaticamente el mismo [[b]] aunque la forma sea igual.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
### Por que parece correcto\r
El despeje de [[b]] o [[v]] parece inmediato y se ejecuta en segundos.\r
\r
### Por que es incorrecto\r
Si no se cuidan dominio y unidades, el resultado puede ser numericamente limpio pero fisicamente absurdo.\r
\r
### Señal de deteccion\r
Obtienes [[b]] negativa o [[tau]] sin unidades de tiempo y aun asi aceptas el numero.\r
\r
### Correccion conceptual\r
Incluye chequeo dimensional y chequeo de signo como paso obligatorio antes de interpretar.\r
\r
### Mini-ejemplo\r
Usar velocidad en km/h y fuerza en N sin conversion puede inflar o reducir [[b]] por un factor grande.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
### Por que parece correcto\r
En ejercicios de una linea, la conversion de unidades parece un detalle administrativo.\r
\r
### Por que es incorrecto\r
En este modelo, la unidad de [[b]] fija la coherencia de toda la cadena [[F_d]]-[[v]]-[[tau]].\r
\r
### Señal de deteccion\r
No puedes justificar por que [[tau]] queda en s a partir de [[m]] y [[b]].\r
\r
### Correccion conceptual\r
Trabaja en SI desde el inicio y valida dimensiones antes de cualquier conclusion.\r
\r
### Mini-ejemplo\r
Si [[m]] esta en g y [[b]] en N s/m, [[tau]] sale mal si no conviertes masa a kg.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite\r
\r
### Por que parece correcto\r
Un valor con muchos decimales da sensacion de rigor.\r
\r
### Por que es incorrecto\r
La incertidumbre de medicion y la validez local de [[b]] limitan la precision fisica real.\r
\r
### Señal de deteccion\r
Reportas cuatro decimales en [[F_d]] con datos de entrada aproximados y sin margen.\r
\r
### Correccion conceptual\r
Ajusta cifras significativas al nivel de calidad de datos y declara incertidumbre razonable.\r
\r
### Mini-ejemplo\r
Con mediciones de banco de baja resolucion, suele ser mas honesto informar [[F_d]] con dos o tres cifras significativas.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
### Por que parece correcto\r
Se cree que terminar la cuenta equivale a terminar el problema.\r
\r
### Por que es incorrecto\r
Sin interpretacion causal, no sabes que variable dominaria una mejora o por que cambia la respuesta.\r
\r
### Señal de deteccion\r
La conclusion final no menciona ni [[b]], ni [[v]], ni [[tau]], solo un numero aislado.\r
\r
### Correccion conceptual\r
Cierra siempre con una frase de mecanismo y una frase de limite de validez.\r
\r
### Mini-ejemplo\r
No basta escribir "[[F_d]] = 1.8 N"; debes indicar si ese valor implica amortiguamiento rapido o lento en terminos de [[tau]].\r
\r
## Regla de autocontrol rápido\r
\r
Usa esta checklist despues de cada resolucion:\r
\r
- El DCL respeta el sentido resistivo de [[F_d]].\r
- La velocidad usada es relativa al fluido.\r
- La unidad de [[b]] es coherente con N s/m.\r
- La lectura de [[tau]] se expresa como escala temporal, no como tiempo total.\r
- La conclusion declara mecanismo y limite del modelo.\r
\r
Si un punto falla, corrige antes de aceptar el resultado.`;export{e as default};
