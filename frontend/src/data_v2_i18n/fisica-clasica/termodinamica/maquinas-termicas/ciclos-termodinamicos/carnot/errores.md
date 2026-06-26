# Errores frecuentes — Ciclo de Carnot

## Errores conceptuales

### Error 1: Creer que el rendimiento de Carnot es alcanzable en la practica

**Por qué parece correcto**
El alumno ve la fórmula de [[eta_C]] y asume que un ciclo bien diseñado con buenos materiales puede alcanzar ese valor. La expresión es sencilla y no parece incluir ninguna restricción explícita que lo impida, por lo que se interpreta como un objetivo de ingeniería.

**Por qué es incorrecto**
El rendimiento de Carnot requiere procesos reversibles, es decir, infinitamente lentos y sin fricción. Cualquier proceso real opera a velocidad finita con diferencias finitas de temperatura para que el calor fluya, lo que genera entropía irreversible y reduce el rendimiento por debajo de [[eta_C]]. El ciclo de Carnot es una cota superior asintótica, nunca un objetivo real alcanzable.

**Señal de detección**
Si el alumno presenta un rendimiento calculado como meta de diseño o afirma que una mejora específica permite alcanzar el rendimiento de Carnot, está cometiendo este error.

**Corrección conceptual**
El rendimiento de Carnot es un límite teórico absoluto, no un valor de diseño. Todo ciclo real opera necesariamente por debajo de él. La distancia entre el rendimiento real y el de Carnot cuantifica las irreversibilidades del sistema, nunca es cero.

**Mini-ejemplo de contraste**
Una central real entre 800 K y 300 K tiene un Carnot de 62.5 %. La central alcanza 38 %. Si un alumno declara que con mejor aislamiento se alcanzará 62.5 %, ignora que las irreversibilidades internas (fricción, mezclado, combustión) son ineliminables incluso con aislamiento perfecto.

## Errores de modelo

### Error 2: Aplicar la formula de Carnot a ciclos irreversibles como si fuera su rendimiento real

**Por qué parece correcto**
El alumno calcula el rendimiento de Carnot entre las temperaturas extremas de un ciclo Brayton o Rankine y lo presenta como el rendimiento de ese ciclo. La fórmula es sencilla y las temperaturas están disponibles en el enunciado, por lo que parece razonable aplicarla directamente.

**Por qué es incorrecto**
La fórmula de Carnot solo da el rendimiento de un ciclo completamente reversible. Los ciclos Brayton, Rankine u Otto tienen sus propias fórmulas de rendimiento que reflejan sus procesos específicos (isobáricos, isocóricos, etc.). El rendimiento de esos ciclos es siempre menor que el de Carnot entre las mismas temperaturas extremas.

**Señal de detección**
Si un problema de ciclo Brayton o Rankine arroja un rendimiento idéntico al de Carnot entre las mismas temperaturas, el alumno ha aplicado la fórmula incorrecta.

**Corrección conceptual**
Para cada ciclo específico existe una fórmula de rendimiento propia que depende de sus parámetros particulares (relación de presiones para Brayton, relación de compresión para Otto). El rendimiento de Carnot solo se usa como referencia de comparación, nunca como predicción del rendimiento del ciclo analizado.

**Mini-ejemplo de contraste**
Un ciclo Brayton entre 1500 K y 300 K tiene un Carnot de 80 %. El rendimiento real del Brayton con relación de presiones de 20 es aproximadamente 57 %. Presentar 80 % como rendimiento del Brayton supone un error de 23 puntos porcentuales.

## Errores matemáticos

### Error 3: Usar temperaturas en Celsius en lugar de kelvin

**Por qué parece correcto**
Los enunciados suelen dar las temperaturas en Celsius y el alumno las sustituye directamente en la fórmula sin convertir. El procedimiento parece natural porque las temperaturas ya son datos numéricos directos.

**Por qué es incorrecto**
La fórmula de rendimiento de Carnot involucra un cociente de temperaturas absolutas. Usar Celsius genera resultados absurdos: con [[T_H]] de 400 °C y [[T_C]] de 25 °C, el alumno calcula uno menos 25 dividido entre 400, obteniendo 93.75 %, cuando el valor correcto con kelvin (673 K y 298 K) es 55.7 %. La diferencia de casi 40 puntos delata el error.

**Señal de detección**
Si [[eta_C]] supera el 80 % con temperaturas de operación industrial convencionales (calderas por debajo de 600 °C), es muy probable que se hayan usado Celsius en lugar de kelvin.

**Corrección conceptual**
Antes de sustituir, convertir siempre ambas temperaturas sumando 273.15 a los valores en Celsius. Verificar que [[T_C]] dividido entre [[T_H]] sea un número entre 0 y 1 con sentido físico.

**Mini-ejemplo de contraste**
Con 400 °C y 25 °C: en Celsius se obtiene erróneamente 93.75 %. En kelvin (673 K y 298 K), el rendimiento correcto es 55.7 %. La diferencia de 38 puntos porcentuales muestra que el error de unidades produce resultados sin sentido físico.

## Errores de interpretación

### Error 4: Interpretar que reducir [[T_C]] a cero da rendimiento perfecto

**Por qué parece correcto**
La fórmula muestra que si [[T_C]] tiende a cero, [[eta_C]] tiende a uno. El alumno concluye que bastaría con enfriar suficientemente el foco frío para obtener un rendimiento del 100 %. El razonamiento algebraico es formalmente correcto.

**Por qué es incorrecto**
El tercer principio de la termodinámica establece que alcanzar el cero absoluto requiere un número infinito de pasos. Es un límite físicamente inalcanzable. Además, a medida que [[T_C]] se acerca a cero, la potencia extraíble también tiende a cero porque los procesos deben ser infinitamente lentos, haciendo la máquina inútil en la práctica.

**Señal de detección**
Si el alumno propone diseñar un sistema de refrigeración para reducir [[T_C]] como estrategia para alcanzar rendimiento unitario, está confundiendo un límite matemático con una posibilidad física.

**Corrección conceptual**
El rendimiento de 100 % es un límite asintótico, no alcanzable. En la práctica, [[T_C]] está fijada por el ambiente (280–350 K) y reducirla significativamente requiere trabajo adicional (refrigeración), lo cual reduce el rendimiento neto del sistema global.

**Mini-ejemplo de contraste**
Con [[T_H]] de 1000 K y [[T_C]] de 10 K se obtendría formalmente un rendimiento de 99 %. Pero mantener un sumidero a 10 K requiere un sistema criogénico que consume más trabajo del que el ciclo produce, haciendo el sistema globalmente inviable.

## Regla de autocontrol rápido

### Error 5: Obtener un rendimiento superior al de Carnot en un problema de ciclo real

**Por qué parece correcto**
El alumno calcula el rendimiento de un ciclo (Brayton, Rankine, Otto) y obtiene un valor alto. No compara con el Carnot correspondiente porque considera que son fórmulas independientes y no ve la necesidad de la comparación.

**Por qué es incorrecto**
Todo ciclo real debe tener un rendimiento estrictamente menor que el de Carnot entre sus temperaturas extremas. Si el resultado supera el Carnot, hay un error numérico (unidades, inversión de datos) o un error conceptual (fórmula incorrecta). La segunda ley lo prohíbe categóricamente.

**Señal de detección**
Siempre calcular el rendimiento de Carnot entre las temperaturas extremas del problema como paso de verificación final. Si el rendimiento calculado lo supera, el resultado es incorrecto.

**Corrección conceptual**
Usar la regla de autocontrol: para cualquier ciclo entre [[T_H]] y [[T_C]], calcular primero [[eta_C]] como techo. Si el resultado del ciclo específico es mayor que [[eta_C]], revisar unidades, datos y fórmula aplicada.

**Mini-ejemplo de contraste**
Un alumno calcula un rendimiento del ciclo Otto de 72 % entre temperaturas extremas de 1200 K y 400 K. El Carnot es 66.7 %. Como 72 % supera 66.7 %, el resultado es físicamente imposible y revela un error en la aplicación de la fórmula del Otto.
