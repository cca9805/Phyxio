# Errores frecuentes

## Errores conceptuales

### Error 1: creer que fase y posición significan lo mismo

Por que parece correcto:
En muchos ejercicios el alumnado ve primero [[x]] y deduce que esa sola magnitud identifica el estado completo del oscilador.

Senal de deteccion:
La explicación no puede distinguir dos estados con la misma posición pero con sentido de movimiento opuesto.

Mini-ejemplo de contraste:
Un oscilador puede pasar por el mismo [[x]] una vez mientras se acerca al equilibrio y otra mientras se aleja. La fase no es la misma aunque la posición sí lo sea.

Correccion conceptual:
Leer [[phi_t]] como variable de estado cíclico y [[x]] como proyección espacial de ese estado.

### Error 2: pensar que un desfase positivo implica mayor amplitud o mayor energía

Por que parece correcto:
La palabra adelanto suena intuitivamente a “ir más” y se interpreta como si describiera un sistema más intenso.

Senal de deteccion:
La respuesta compara [[delta_phi]] con [[A]] o con energía sin justificar por qué magnitudes tan distintas deberían medir lo mismo.

Mini-ejemplo de contraste:
Dos osciladores pueden tener igual [[A]] y energía comparable, pero distinto [[delta_phi]] solo porque arrancaron con corrimientos angulares distintos.

Correccion conceptual:
Separar claramente diferencia angular, escala espacial y balance energético.

## Errores de modelo

### Error 3: usar fase ideal cuando la frecuencia ya no es estable

Por que parece correcto:
La relación temporal de la fase es simple y suele aplicarse por inercia aun cuando la evolución real deja de ser uniformemente periódica.

Senal de deteccion:
[[omega]] cambia apreciablemente entre tramos y, aun así, la resolución mantiene una sola lectura lineal de fase sin discusión.

Mini-ejemplo de contraste:
Si la señal se deforma o la frecuencia deriva ciclo a ciclo, hablar de una sola fase ideal puede ocultar el mecanismo real que gobierna la respuesta.

Correccion conceptual:
Cambiar de modelo cuando la fase simple deja de condensar el estado del sistema con coherencia física.

### Error 4: comparar fases con referencias temporales distintas

Por que parece correcto:
Se calcula una fase para cada oscilador y luego se resta, suponiendo que cualquier diferencia angular ya representa un desfase físico útil.

Senal de deteccion:
El signo de [[delta_phi]] depende de cómo se escogió el origen temporal y no de la dinámica real de las señales.

Mini-ejemplo de contraste:
Un mismo par de señales puede parecer adelantado o retrasado si se redefine la referencia de tiempo a mitad del análisis.

Correccion conceptual:
Fijar antes una convención temporal única y sostenerla en toda la comparación.

## Errores matemáticos

### Error 5: mezclar hertz con radianes por segundo sin conversión

Por que parece correcto:
Ambas magnitudes se usan para describir periodicidad y, si los números son pequeños, el error puede pasar desapercibido en una primera lectura.

Senal de deteccion:
El valor de [[phi_t]] sale demasiado grande o demasiado pequeño para el intervalo temporal considerado.

Mini-ejemplo de contraste:
Una frecuencia en hertz usada directamente como si fuera [[omega]] cambia toda la escala angular del problema.

Correccion conceptual:
Verificar siempre la unidad de [[omega]] antes de sustituir datos y convertir cuando haga falta.

### Error 6: tratar la trigonometría como si cualquier ángulo valiera sin contexto

Por que parece correcto:
La calculadora devuelve un número y eso crea la impresión de que el resultado ya es automáticamente correcto.

Senal de deteccion:
No se comprueba si el valor obtenido para [[x]] es compatible con [[A]] o si la escala de [[v]] tiene sentido físico.

Mini-ejemplo de contraste:
Si una cuenta produce una posición de magnitud mayor que la amplitud declarada, la aritmética puede haberse ejecutado, pero la física ya falló.

Correccion conceptual:
Cerrar toda sustitución con control de rango, signo y plausibilidad del ciclo.

## Errores de interpretación

### Error 7: afirmar sincronización solo porque dos posiciones coinciden una vez

Por que parece correcto:
Visualmente, dos señales pueden pasar por un mismo valor y parecer “alineadas” en ese instante.

Senal de deteccion:
La conclusión de sincronización se apoya en una coincidencia puntual y no en una comparación de [[phi]] o [[delta_phi]].

Mini-ejemplo de contraste:
Dos osciladores pueden compartir un mismo [[x]] y aun así ir uno adelantado respecto del otro.

Correccion conceptual:
Usar el lenguaje de fase para comparar estado relativo y no una sola instantánea espacial.

### Error 8: cerrar con un número angular sin lectura causal del ciclo

Por que parece correcto:
La resolución entrega un valor en radianes y parece completa porque la magnitud objetivo ya “salió”.

Senal de deteccion:
La respuesta no dice si el sistema está cerca de un extremo, de un cruce por equilibrio, adelantado o retrasado.

Mini-ejemplo de contraste:
Un mismo número angular puede ser útil o inútil según se traduzca o no a una lectura física del estado oscilatorio.

Correccion conceptual:
Convertir el resultado final en una interpretación del ciclo y no solo en una cifra angular.

## Regla de autocontrol rápido

1. Fijar qué se busca: [[phi_t]], [[x]], [[v]] o [[delta_phi]].
2. Verificar referencia temporal y convención de signo antes de operar.
3. Comprobar la unidad de [[omega]] y la escala de [[A]].
4. Revisar que [[x]] y [[v]] sean compatibles con el ciclo esperado.
5. Cerrar con una frase física sobre estado, adelanto o retraso.