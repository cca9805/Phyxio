# Errores frecuentes: Arrastre lineal

## Errores conceptuales

### Error 1: Confundir causa con efecto

### Por que parece correcto
La ecuacion se ve simple y da la impresion de que todo depende de una sustitucion directa.

### Por que es incorrecto
En este leaf, [[F_d]] es una consecuencia del movimiento relativo en el medio y no una causa motriz del movimiento.

### Señal de deteccion
Tu DCL coloca [[F_d]] en el mismo sentido que la velocidad sin justificar marco ni convencion.

### Correccion conceptual
Declara siempre que [[F_d]] se opone al movimiento relativo y separa con claridad fuerza aplicada y fuerza resistiva.

### Mini-ejemplo
Si una particula se mueve hacia la derecha en un fluido en reposo, [[F_d]] apunta hacia la izquierda aunque su modulo se calcule de forma escalar.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

### Por que parece correcto
Como la relacion parece elemental, se tiende a usarla en cualquier problema de movimiento en fluidos.

### Por que es incorrecto
La ley lineal requiere un dominio en el que la proporcionalidad entre [[F_d]] y [[v]] sea razonable.

### Señal de deteccion
Los datos muestran curvatura clara en [[F_d]] frente a [[v]] y aun asi se mantiene una unica pendiente [[b]].

### Correccion conceptual
Antes de calcular, revisa validez local del modelo y declara criterio de cambio si aparece no linealidad.

### Mini-ejemplo
Si al duplicar [[v]] la fuerza medida crece mucho mas que al doble de forma sistematica, la lectura lineal debe revisarse.

### Error 3: Confundir magnitudes similares

### Por que parece correcto
En ejercicios rapidos, [[b]] y [[tau]] se manipulan algebraicamente y parecen intercambiables por despeje.

### Por que es incorrecto
[[b]] es un parametro resistivo del medio-cuerpo; [[tau]] es una escala temporal derivada que combina [[m]] y [[b]].

### Señal de deteccion
Tu interpretacion final habla de [[tau]] como si fuera un coeficiente de friccion o de [[b]] como si fuera tiempo.

### Correccion conceptual
Asocia cada magnitud a su papel fisico: [[b]] como pendiente resistiva y [[tau]] como rapidez de ajuste dinamico.

### Mini-ejemplo
Dos sistemas con igual [[b]] pero distinta [[m]] tienen distinta [[tau]], aunque la relacion instantanea de arrastre sea igual.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

### Por que parece correcto
El modelo lineal suele funcionar muy bien en practicas iniciales y genera confianza excesiva.

### Por que es incorrecto
Fuera de su rango, una sola pendiente [[b]] deja de representar el mecanismo dominante.

### Señal de deteccion
Necesitas cambiar [[b]] en cada subtramo de [[v]] para mantener ajuste aceptable.

### Correccion conceptual
Define umbral de error y activa transicion de modelo cuando la pendiente deje de ser estable.

### Mini-ejemplo
Si para bajas velocidades ajusta [[b]]_1 y para altas solo ajusta [[b]]_2 muy distinta, declara cambio de regimen en vez de promediar.

### Error 5: Ignorar los limites del modelo conocidos

### Por que parece correcto
Se asume que si la ecuacion aparece en el tema, sirve para cualquier configuracion parecida.

### Por que es incorrecto
El valor de [[b]] depende de condiciones de medio y geometria; extrapolar sin control puede romper la validez.

### Señal de deteccion
Comparas ensayos con fluidos distintos usando el mismo [[b]] sin recalibracion.

### Correccion conceptual
Documenta condiciones y recalibra [[b]] cuando cambie el escenario fisico relevante.

### Mini-ejemplo
Un cuerpo en aire y en aceite no debe compartir automaticamente el mismo [[b]] aunque la forma sea igual.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

### Por que parece correcto
El despeje de [[b]] o [[v]] parece inmediato y se ejecuta en segundos.

### Por que es incorrecto
Si no se cuidan dominio y unidades, el resultado puede ser numericamente limpio pero fisicamente absurdo.

### Señal de deteccion
Obtienes [[b]] negativa o [[tau]] sin unidades de tiempo y aun asi aceptas el numero.

### Correccion conceptual
Incluye chequeo dimensional y chequeo de signo como paso obligatorio antes de interpretar.

### Mini-ejemplo
Usar velocidad en km/h y fuerza en N sin conversion puede inflar o reducir [[b]] por un factor grande.

### Error 7: Olvidar constantes fundamentales o unidades

### Por que parece correcto
En ejercicios de una linea, la conversion de unidades parece un detalle administrativo.

### Por que es incorrecto
En este modelo, la unidad de [[b]] fija la coherencia de toda la cadena [[F_d]]-[[v]]-[[tau]].

### Señal de deteccion
No puedes justificar por que [[tau]] queda en s a partir de [[m]] y [[b]].

### Correccion conceptual
Trabaja en SI desde el inicio y valida dimensiones antes de cualquier conclusion.

### Mini-ejemplo
Si [[m]] esta en g y [[b]] en N s/m, [[tau]] sale mal si no conviertes masa a kg.

## Errores de interpretación

### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite

### Por que parece correcto
Un valor con muchos decimales da sensacion de rigor.

### Por que es incorrecto
La incertidumbre de medicion y la validez local de [[b]] limitan la precision fisica real.

### Señal de deteccion
Reportas cuatro decimales en [[F_d]] con datos de entrada aproximados y sin margen.

### Correccion conceptual
Ajusta cifras significativas al nivel de calidad de datos y declara incertidumbre razonable.

### Mini-ejemplo
Con mediciones de banco de baja resolucion, suele ser mas honesto informar [[F_d]] con dos o tres cifras significativas.

### Error 9: Saltarte la interpretación física del resultado calculado

### Por que parece correcto
Se cree que terminar la cuenta equivale a terminar el problema.

### Por que es incorrecto
Sin interpretacion causal, no sabes que variable dominaria una mejora o por que cambia la respuesta.

### Señal de deteccion
La conclusion final no menciona ni [[b]], ni [[v]], ni [[tau]], solo un numero aislado.

### Correccion conceptual
Cierra siempre con una frase de mecanismo y una frase de limite de validez.

### Mini-ejemplo
No basta escribir "[[F_d]] = 1.8 N"; debes indicar si ese valor implica amortiguamiento rapido o lento en terminos de [[tau]].

## Regla de autocontrol rápido

Usa esta checklist despues de cada resolucion:

- El DCL respeta el sentido resistivo de [[F_d]].
- La velocidad usada es relativa al fluido.
- La unidad de [[b]] es coherente con N s/m.
- La lectura de [[tau]] se expresa como escala temporal, no como tiempo total.
- La conclusion declara mecanismo y limite del modelo.

Si un punto falla, corrige antes de aceptar el resultado.