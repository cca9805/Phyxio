# Errores frecuentes — Ejemplos prácticos

## Errores conceptuales

### Error 1: Creer que un COP mayor que uno viola la segunda ley

**Por qué parece correcto**
El alumno sabe que el rendimiento de un motor térmico está limitado a valores menores que uno. Al ver un [[COP_real]] de 2.8, generaliza esa restricción y concluye que el resultado es imposible.

**Por qué es incorrecto**
El COP no mide conversión de calor en trabajo sino transferencia de calor por unidad de trabajo consumido. Un refrigerador no convierte energía sino que la mueve, consumiendo [[W_comp]] para transferir [[Q_C]] del foco frío al caliente. El COP puede ser mucho mayor que uno sin violar ninguna ley.

**Señal de detección**
Si el alumno rechaza un [[COP_real]] de 2.8 argumentando que supera el 100 % de eficiencia, está confundiendo COP con rendimiento térmico.

**Corrección conceptual**
El COP mide calor transferido por unidad de trabajo, no calor convertido en trabajo. La restricción de ser menor que uno solo aplica al rendimiento térmico de motores. El COP está acotado superiormente por el [[COP_Carnot]], que siempre es mayor que uno para sistemas prácticos.

**Mini-ejemplo de contraste**
Un refrigerador con [[T_C]] de 255 K y [[T_H]] de 308 K tiene [[COP_Carnot]] de 4.81 y [[COP_real]] de 2.8. El rendimiento térmico de un motor entre los mismos focos sería solo 0.172. Confundir COP con rendimiento lleva a rechazar valores perfectamente legítimos.

## Errores de modelo

### Error 2: Usar el COP de Carnot para dimensionar un sistema real

**Por qué parece correcto**
El alumno calcula el [[COP_Carnot]] y lo usa directamente para estimar la capacidad de refrigeración del sistema real. La fórmula es sencilla y produce un número concreto.

**Por qué es incorrecto**
El [[COP_Carnot]] es un límite teórico que asume reversibilidad total. Los sistemas reales tienen un [[COP_real]] que es entre 30 y 60 % del valor de Carnot. Usar el COP de Carnot como predicción sobreestima la capacidad de refrigeración en un factor de 2 a 3.

**Señal de detección**
Si la [[eta_Carnot]] resultante es del 100 %, el alumno ha confundido el COP real con el de Carnot. Todo sistema real tiene [[eta_Carnot]] menor que 100 %.

**Corrección conceptual**
Siempre multiplicar el [[COP_Carnot]] por una fracción de Carnot realista (0.30 a 0.60) para obtener una estimación del [[COP_real]]. Alternativamente, usar directamente el COP proporcionado por el fabricante.

**Mini-ejemplo de contraste**
Con [[COP_Carnot]] de 4.81 y [[W_comp]] de 120 W, el alumno predice [[Q_C]] de 577 W. Con [[COP_real]] de 2.8, la capacidad real es 336 W. La sobreestimación del 72 % llevaría a un sistema subdimensionado que no alcanza la temperatura objetivo.

## Errores matemáticos

### Error 3: Usar temperaturas en Celsius en la fórmula del COP de Carnot

**Por qué parece correcto**
Los datos del problema dan temperaturas en Celsius y el alumno las sustituye directamente sin convertir a kelvin.

**Por qué es incorrecto**
La fórmula del COP de Carnot requiere temperaturas absolutas. Con menos 18 grados y 35 grados en Celsius, el alumno calcula menos 18 dividido entre 53, obteniendo menos 0.34, un valor negativo sin sentido físico.

**Señal de detección**
Si el COP calculado es negativo o extraordinariamente diferente del rango 3 a 15 con temperaturas de climatización convencional, es probable que se hayan usado Celsius.

**Corrección conceptual**
Convertir siempre ambas temperaturas a kelvin sumando 273.15 antes de sustituir. [[T_C]] de menos 18 grados es 255 K y [[T_H]] de 35 grados es 308 K. El [[COP_Carnot]] correcto es 255 dividido entre 53, dando 4.81.

**Mini-ejemplo de contraste**
En Celsius se obtiene menos 0.34 (negativo, sin sentido). En kelvin se obtiene 4.81 (positivo, coherente). La diferencia es tan drástica que delata inmediatamente el error de unidades.

## Errores de interpretación

### Error 4: Confundir potencia del compresor con capacidad de refrigeración

**Por qué parece correcto**
El alumno ve que el compresor consume 120 W y asume que esa es la capacidad de refrigeración del sistema. La potencia es un dato numérico concreto y parece representar la capacidad del aparato.

**Por qué es incorrecto**
La potencia [[W_comp]] es la entrada de energía al sistema, no su salida útil. La capacidad de refrigeración [[Q_C]] es [[COP_real]] multiplicado por [[W_comp]], que siempre es mayor que [[W_comp]] si el [[COP_real]] es mayor que uno.

**Señal de detección**
Si el alumno afirma que la capacidad frigorífica es igual a la potencia eléctrica del compresor, está ignorando el efecto multiplicador del COP.

**Corrección conceptual**
La potencia del compresor es el coste energético. La capacidad de refrigeración es ese coste multiplicado por el [[COP_real]]. Con un COP de 2.8, los 120 W del compresor producen 336 W de refrigeración.

**Mini-ejemplo de contraste**
Un alumno dice que el refrigerador de 120 W puede extraer 120 W de calor. En realidad, con [[COP_real]] de 2.8, extrae 336 W. El error subestima la capacidad en un factor de 2.8 y llevaría a sobredimensionar el compresor.

## Regla de autocontrol rápido

### Error 5: No verificar el balance energético

**Por qué parece correcto**
El alumno calcula [[Q_C]] y [[Q_H]] por separado y no siente la necesidad de verificar que cumplan el balance energético. Ambos valores parecen razonables individualmente.

**Por qué es incorrecto**
La primera ley de la termodinámica exige que [[Q_H]] sea exactamente [[Q_C]] más [[W_comp]]. Si la suma no cuadra, al menos uno de los tres valores es incorrecto.

**Señal de detección**
Calcular siempre [[Q_H]] menos [[Q_C]] y verificar que la diferencia sea exactamente [[W_comp]]. Si no coincide, hay un error en algún paso.

**Corrección conceptual**
Usar el balance energético como verificación obligatoria al final de cada problema. [[Q_H]] es [[Q_C]] más [[W_comp]]. Esta regla nunca falla y detecta errores numéricos, de unidades y de modelo.

**Mini-ejemplo de contraste**
El alumno calcula [[Q_C]] de 336 W y [[Q_H]] de 500 W. La diferencia es 164 W, pero [[W_comp]] es 120 W. Los 44 W de discrepancia revelan un error. El valor correcto de [[Q_H]] es 456 W, verificable como 336 más 120.
