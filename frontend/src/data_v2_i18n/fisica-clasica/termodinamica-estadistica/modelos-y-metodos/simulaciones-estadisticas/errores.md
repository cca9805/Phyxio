## Errores conceptuales


### Error 1: Creer que muchas muestras garantizan verdad

**Por qué parece correcto**
Un [[numero_muestras]] grande da sensación de seguridad porque la tabla contiene muchos datos y la [[media_muestral]] parece estable.

**Por qué es incorrecto**
Si las muestras no representan la distribución física, la [[media_muestral]] puede ser sesgada. Un algoritmo que visita mal los estados de [[energia]] no reproduce bien la [[probabilidad_boltzmann]].

**Señal de detección**
Ejecuciones distintas dan promedios incompatibles aunque cada una tenga [[error_estadistico]] pequeño.

**Corrección conceptual**
Distingue precisión estadística de validez física. El [[error_estadistico]] mide fluctuación de muestreo, no garantiza ausencia de sesgo.

**Mini-ejemplo de contraste**
Una simulación con 10⁶ pasos atrapados en un mínimo de [[energia]] puede ser peor que 10⁴ muestras bien mezcladas.


### Error 2: Confundir fluctuación con error de la media

**Por qué parece correcto**
La [[desviacion_estandar]] y el [[error_estadistico]] tienen la misma unidad del [[observable]], así que parecen medir lo mismo.

**Por qué es incorrecto**
La [[desviacion_estandar]] mide dispersión de muestras individuales; el [[error_estadistico]] mide incertidumbre de la [[media_muestral]].

**Señal de detección**
El alumno afirma que cada valor individual debe estar cerca de la [[media_muestral]] si el error es pequeño.

**Corrección conceptual**
Un sistema puede fluctuar mucho y aun así tener una media bien conocida si [[numero_muestras]] es grande.

**Mini-ejemplo de contraste**
La [[energia]] de cada configuración puede variar bastante, pero la [[energia]] media tener un [[error_estadistico]] reducido.

## Errores de modelo


### Error 3: Usar N bruto como si todas las muestras fueran independientes

**Por qué parece correcto**
El archivo de datos contiene [[numero_muestras]] valores, y parece natural dividir la incertidumbre por la raíz de ese número.

**Por qué es incorrecto**
En Monte Carlo, muestras consecutivas pueden estar correlacionadas. El [[numero_muestras]] efectivo puede ser mucho menor.

**Señal de detección**
El [[error_estadistico]] calculado baja rápido, pero la [[media_muestral]] cambia lentamente entre bloques largos.

**Corrección conceptual**
Usa bloques o estimaciones de autocorrelación para corregir el tamaño muestral real.

**Mini-ejemplo de contraste**
Si 1000 configuraciones repiten casi la misma [[energia]], no equivalen a 1000 estados independientes.


### Error 4: Aplicar [[probabilidad_boltzmann]] fuera de equilibrio canónico

**Por qué parece correcto**
La expresión de Boltzmann aparece en muchos problemas térmicos y parece una receta universal.

**Por qué es incorrecto**
La [[probabilidad_boltzmann]] requiere equilibrio a [[temperatura]] fija y una distribución canónica. No describe cualquier muestreo.

**Señal de detección**
La [[temperatura]] cambia durante la simulación o el sistema está forzado externamente.

**Corrección conceptual**
Identifica primero el ensamble físico y después el peso estadístico adecuado.

**Mini-ejemplo de contraste**
Un sistema enfriado progresivamente no se interpreta igual que uno mantenido a [[temperatura]] constante.

## Errores matemáticos


### Error 5: Pensar que duplicar muestras reduce a la mitad el error

**Por qué parece correcto**
En muchos contextos cotidianos, duplicar esfuerzo parece duplicar precisión.

**Por qué es incorrecto**
El [[error_estadistico]] disminuye con la raíz de [[numero_muestras]], no de forma proporcional directa.

**Señal de detección**
El alumno espera que pasar de 10³ a 2·10³ muestras divida el error por 2.

**Corrección conceptual**
Para dividir el error por 2 hacen falta aproximadamente 4 veces más muestras.

**Mini-ejemplo de contraste**
Si [[error_estadistico]] es 0,04 con 10⁴ muestras, para bajar a 0,02 se necesitan unas 4·10⁴ muestras.


### Error 6: Sumar observables sin normalizar

**Por qué parece correcto**
La [[suma_observable]] crece con los datos y parece contener toda la información.

**Por qué es incorrecto**
La [[media_muestral]] requiere dividir la [[suma_observable]] por [[numero_muestras]]. La suma sola depende del tamaño de la simulación.

**Señal de detección**
Al aumentar [[numero_muestras]], el resultado físico crece aunque el sistema no haya cambiado.

**Corrección conceptual**
Usa la suma acumulada solo como paso intermedio hacia el promedio.

**Mini-ejemplo de contraste**
Duplicar muestras duplica [[suma_observable]], pero no debería duplicar la [[media_muestral]] si el sistema es el mismo.

## Errores de interpretación


### Error 7: Leer una probabilidad de aceptación como probabilidad de estado

**Por qué parece correcto**
Tanto [[probabilidad_aceptacion]] como [[probabilidad_boltzmann]] son probabilidades y dependen de la [[energia]].

**Por qué es incorrecto**
La [[probabilidad_aceptacion]] decide si se acepta una propuesta; la [[probabilidad_boltzmann]] describe el peso relativo de un estado.

**Señal de detección**
El alumno dice que un estado con cierta aceptación tiene esa misma probabilidad de aparecer.

**Corrección conceptual**
Separa dinámica del algoritmo y distribución de equilibrio.

**Mini-ejemplo de contraste**
Una propuesta con baja aceptación puede aparecer raramente, pero el peso de un estado depende del conjunto de configuraciones y de la normalización.


### Error 8: Interpretar un error pequeño sin mirar la escala física

**Por qué parece correcto**
Un número como 0,01 parece automáticamente pequeño.

**Por qué es incorrecto**
El [[error_estadistico]] solo es pequeño o grande comparado con la escala del [[observable]] o con la diferencia que se quiere resolver.

**Señal de detección**
Se acepta una conclusión aunque dos resultados difieran menos que sus incertidumbres.

**Corrección conceptual**
Compara siempre [[error_estadistico]] con [[media_muestral]] y con la separación entre modelos.

**Mini-ejemplo de contraste**
Un error de 0,01 J es enorme si la diferencia buscada es 0,005 J, pero pequeño si la escala es 10 J.

## Regla de autocontrol rápido

Antes de confiar en la simulación, pregunta: ¿la [[media_muestral]] usa muestras representativas, el [[error_estadistico]] baja como raíz inversa de [[numero_muestras]], y la escala física justifica la conclusión?