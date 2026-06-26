const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que fase y posición significan lo mismo\r
\r
Por que parece correcto:\r
En muchos ejercicios el alumnado ve primero [[x]] y deduce que esa sola magnitud identifica el estado completo del oscilador.\r
\r
Senal de deteccion:\r
La explicación no puede distinguir dos estados con la misma posición pero con sentido de movimiento opuesto.\r
\r
Mini-ejemplo de contraste:\r
Un oscilador puede pasar por el mismo [[x]] una vez mientras se acerca al equilibrio y otra mientras se aleja. La fase no es la misma aunque la posición sí lo sea.\r
\r
Correccion conceptual:\r
Leer [[phi_t]] como variable de estado cíclico y [[x]] como proyección espacial de ese estado.\r
\r
### Error 2: pensar que un desfase positivo implica mayor amplitud o mayor energía\r
\r
Por que parece correcto:\r
La palabra adelanto suena intuitivamente a “ir más” y se interpreta como si describiera un sistema más intenso.\r
\r
Senal de deteccion:\r
La respuesta compara [[delta_phi]] con [[A]] o con energía sin justificar por qué magnitudes tan distintas deberían medir lo mismo.\r
\r
Mini-ejemplo de contraste:\r
Dos osciladores pueden tener igual [[A]] y energía comparable, pero distinto [[delta_phi]] solo porque arrancaron con corrimientos angulares distintos.\r
\r
Correccion conceptual:\r
Separar claramente diferencia angular, escala espacial y balance energético.\r
\r
## Errores de modelo\r
\r
### Error 3: usar fase ideal cuando la frecuencia ya no es estable\r
\r
Por que parece correcto:\r
La relación temporal de la fase es simple y suele aplicarse por inercia aun cuando la evolución real deja de ser uniformemente periódica.\r
\r
Senal de deteccion:\r
[[omega]] cambia apreciablemente entre tramos y, aun así, la resolución mantiene una sola lectura lineal de fase sin discusión.\r
\r
Mini-ejemplo de contraste:\r
Si la señal se deforma o la frecuencia deriva ciclo a ciclo, hablar de una sola fase ideal puede ocultar el mecanismo real que gobierna la respuesta.\r
\r
Correccion conceptual:\r
Cambiar de modelo cuando la fase simple deja de condensar el estado del sistema con coherencia física.\r
\r
### Error 4: comparar fases con referencias temporales distintas\r
\r
Por que parece correcto:\r
Se calcula una fase para cada oscilador y luego se resta, suponiendo que cualquier diferencia angular ya representa un desfase físico útil.\r
\r
Senal de deteccion:\r
El signo de [[delta_phi]] depende de cómo se escogió el origen temporal y no de la dinámica real de las señales.\r
\r
Mini-ejemplo de contraste:\r
Un mismo par de señales puede parecer adelantado o retrasado si se redefine la referencia de tiempo a mitad del análisis.\r
\r
Correccion conceptual:\r
Fijar antes una convención temporal única y sostenerla en toda la comparación.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar hertz con radianes por segundo sin conversión\r
\r
Por que parece correcto:\r
Ambas magnitudes se usan para describir periodicidad y, si los números son pequeños, el error puede pasar desapercibido en una primera lectura.\r
\r
Senal de deteccion:\r
El valor de [[phi_t]] sale demasiado grande o demasiado pequeño para el intervalo temporal considerado.\r
\r
Mini-ejemplo de contraste:\r
Una frecuencia en hertz usada directamente como si fuera [[omega]] cambia toda la escala angular del problema.\r
\r
Correccion conceptual:\r
Verificar siempre la unidad de [[omega]] antes de sustituir datos y convertir cuando haga falta.\r
\r
### Error 6: tratar la trigonometría como si cualquier ángulo valiera sin contexto\r
\r
Por que parece correcto:\r
La calculadora devuelve un número y eso crea la impresión de que el resultado ya es automáticamente correcto.\r
\r
Senal de deteccion:\r
No se comprueba si el valor obtenido para [[x]] es compatible con [[A]] o si la escala de [[v]] tiene sentido físico.\r
\r
Mini-ejemplo de contraste:\r
Si una cuenta produce una posición de magnitud mayor que la amplitud declarada, la aritmética puede haberse ejecutado, pero la física ya falló.\r
\r
Correccion conceptual:\r
Cerrar toda sustitución con control de rango, signo y plausibilidad del ciclo.\r
\r
## Errores de interpretación\r
\r
### Error 7: afirmar sincronización solo porque dos posiciones coinciden una vez\r
\r
Por que parece correcto:\r
Visualmente, dos señales pueden pasar por un mismo valor y parecer “alineadas” en ese instante.\r
\r
Senal de deteccion:\r
La conclusión de sincronización se apoya en una coincidencia puntual y no en una comparación de [[phi]] o [[delta_phi]].\r
\r
Mini-ejemplo de contraste:\r
Dos osciladores pueden compartir un mismo [[x]] y aun así ir uno adelantado respecto del otro.\r
\r
Correccion conceptual:\r
Usar el lenguaje de fase para comparar estado relativo y no una sola instantánea espacial.\r
\r
### Error 8: cerrar con un número angular sin lectura causal del ciclo\r
\r
Por que parece correcto:\r
La resolución entrega un valor en radianes y parece completa porque la magnitud objetivo ya “salió”.\r
\r
Senal de deteccion:\r
La respuesta no dice si el sistema está cerca de un extremo, de un cruce por equilibrio, adelantado o retrasado.\r
\r
Mini-ejemplo de contraste:\r
Un mismo número angular puede ser útil o inútil según se traduzca o no a una lectura física del estado oscilatorio.\r
\r
Correccion conceptual:\r
Convertir el resultado final en una interpretación del ciclo y no solo en una cifra angular.\r
\r
## Regla de autocontrol rápido\r
\r
1. Fijar qué se busca: [[phi_t]], [[x]], [[v]] o [[delta_phi]].\r
2. Verificar referencia temporal y convención de signo antes de operar.\r
3. Comprobar la unidad de [[omega]] y la escala de [[A]].\r
4. Revisar que [[x]] y [[v]] sean compatibles con el ciclo esperado.\r
5. Cerrar con una frase física sobre estado, adelanto o retraso.`;export{e as default};
