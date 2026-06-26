# Errores comunes: centro de masas en sistemas discretos

## Errores conceptuales

### Error 1: usar el punto medio aunque las masas sean distintas

**Por qué parece correcto**
El punto medio funciona en sistemas simétricos y por eso puede parecer una regla general.

**Por qué es incorrecto**
El centro de masas pondera cada posición por su masa. Si [[m_1]] y [[m_2]] no son iguales, [[xcm]] debe desplazarse hacia la masa mayor.

**Señal de detección**
El resultado queda exactamente a mitad de camino entre [[x_1]] y [[x_2]] aunque una masa sea claramente mayor.

**Corrección conceptual**
Predice antes de calcular hacia qué lado debe moverse el centro. Después comprueba que el resultado coincide con esa predicción cualitativa.

**Mini-ejemplo**
Si [[m_2]] es tres veces [[m_1]], [[xcm]] debe quedar más cerca de [[x_2]] que de [[x_1]].

### Error 2: confundir centro geométrico con centro de masas

**Por qué parece correcto**
En un dibujo uniforme, el centro visual parece representar el equilibrio del sistema.

**Por qué es incorrecto**
La geometría solo basta cuando la masa está repartida de forma uniforme. En un sistema discreto, la información decisiva es la lista de masas y posiciones.

**Señal de detección**
La solución no usa [[m_i]] o no calcula [[M]].

**Corrección conceptual**
Escribe primero las parejas masa-posición y comprueba que cada objeto tenga una contribución.

**Mini-ejemplo**
Dos objetos colocados en extremos opuestos de una barra no tienen su centro de masas en el centro de la barra si sus masas son diferentes.

## Errores de modelo

### Error 3: mezclar orígenes o sentidos positivos

**Por qué parece correcto**
Cada posición puede estar bien medida de forma aislada.

**Por qué es incorrecto**
El promedio ponderado solo tiene sentido si todas las coordenadas [[x_i]] se miden desde el mismo origen y con el mismo sentido positivo.

**Señal de detección**
Una masa situada a la derecha aparece con coordenada negativa sin que el eje lo justifique.

**Corrección conceptual**
Dibuja un eje único, marca el origen y reescribe todas las posiciones antes de sustituir números.

**Mini-ejemplo**
Si un bloque está a 2 m a la derecha del origen y otro a 1 m a la izquierda, las posiciones deben escribirse como +2 m y -1 m, no como 2 m y 1 m.

### Error 4: aplicar un modelo discreto a una masa continua sin justificarlo

**Por qué parece correcto**
Una varilla o una placa puede parecer un solo objeto y tentarnos a poner toda su masa en un extremo o en un punto arbitrario.

**Por qué es incorrecto**
Si la masa está extendida, primero debe conocerse el centro propio de esa pieza o debe usarse un modelo de cuerpo extendido.

**Señal de detección**
Una pieza larga se representa por una posición elegida sin explicar por qué esa posición resume toda su masa.

**Corrección conceptual**
Sustituye cada pieza extendida por su centro de masas interno solo si ese centro está dado o se puede obtener con simetría.

**Mini-ejemplo**
Una varilla uniforme de 2 m no se representa en un extremo, sino en su centro geométrico si se usa como una pieza discreta equivalente.

## Errores matemáticos

### Error 5: olvidar dividir por la masa total

**Por qué parece correcto**
El numerador suma productos masa-posición y parece contener toda la información relevante.

**Por qué es incorrecto**
La suma de productos tiene unidades kg m. Para obtener una posición en metros hay que dividir por [[M]].

**Señal de detección**
El resultado conserva unidades de kg m o tiene un valor demasiado grande para el intervalo de posiciones.

**Corrección conceptual**
Calcula primero [[M]] y úsala como denominador de todo el promedio ponderado.

**Mini-ejemplo**
Si el numerador vale 18 kg m y [[M]] = 6 kg, la posición final es 3 m, no 18 kg m.

### Error 6: sumar masas negativas por error de signo

**Por qué parece correcto**
El signo menos suele aparecer en coordenadas y puede copiarse accidentalmente a la masa.

**Por qué es incorrecto**
En este leaf las masas son positivas. El signo de la posición indica lado del origen; la masa no cambia de signo.

**Señal de detección**
La masa total [[M]] resulta menor que una de las masas individuales o incluso cero.

**Corrección conceptual**
Separa en la tabla la columna de masa y la columna de posición. Solo la posición puede ser negativa por ubicación.

**Mini-ejemplo**
Una masa de 2 kg situada en -3 m se escribe [[m_i]] = 2 kg y [[x_i]] = -3 m.

## Errores de interpretación

### Error 7: no comprobar si el resultado queda dentro del intervalo físico

**Por qué parece correcto**
Después de sustituir números, el cálculo puede parecer cerrado.

**Por qué es incorrecto**
Con masas positivas, [[xcm]] debe quedar entre la posición mínima y la máxima. Si queda fuera, hay un fallo de signos, unidades o datos.

**Señal de detección**
Las posiciones van de 0 m a 4 m y el resultado aparece en 7 m.

**Corrección conceptual**
Haz siempre una comprobación de rango antes de aceptar el valor final.

**Mini-ejemplo**
Si las masas están en 0 m, 2 m y 4 m, el centro de masas no puede estar en 5 m.

### Error 8: interpretar el centro de masas como un objeto real

**Por qué parece correcto**
Se habla de una posición concreta y puede imaginarse como si hubiera una partícula allí.

**Por qué es incorrecto**
El centro de masas puede caer en un punto vacío. Es una posición equivalente para describir la distribución de masa, no necesariamente un punto ocupado.

**Señal de detección**
Se descarta un resultado porque no coincide con la posición de ningún objeto.

**Corrección conceptual**
Interpreta [[xcm]] como punto de balance global del sistema, no como una masa adicional.

**Mini-ejemplo**
Dos masas separadas pueden tener su centro de masas en una región intermedia donde no hay material.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio, comprueba cuatro cosas: [[M]] debe ser la suma de masas positivas, todas las posiciones deben usar el mismo eje, [[xcm]] debe quedar dentro del intervalo de posiciones y el resultado debe desplazarse hacia las masas mayores.
