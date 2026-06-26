## Errores conceptuales


### Error 1: Confundir energía interna con calor o trabajo

**Por qué parece correcto**
El estudiante asocia que calentar un sistema aumenta su energía, y que realizar trabajo también requiere un consumo energético. Mediante una analogía incorrecta con la mecánica del día a día, tiende a asumir que el calor y el trabajo son propiedades almacenadas por la sustancia, confundiéndolos con la energía interna acumulada.

**Por qué es incorrecto**
El calor y el trabajo son exclusivamente **energías en tránsito** que solo existen mientras dura una transformación física. No tiene sentido físico decir que un sistema posee una cantidad de calor o de trabajo en un estado determinado. Por el contrario, la energía interna es una **función de estado** que mide la energía térmica acumulada en los movimientos moleculares en un instante dado.

**Señal de detección**
El alumno escribe enunciados o plantea ecuaciones algebraicas donde suma directamente una cantidad de calor a la energía del estado inicial para definir un nuevo estado, sin diferenciar las magnitudes en tránsito de las magnitudes de estado.

**Corrección conceptual**
La energía interna es como el saldo en una cuenta bancaria (una propiedad acumulada), mientras que el calor y el trabajo representan las transferencias de dinero (ingresos y retiros). El saldo cambia debido a las transferencias, pero no está compuesto de ingresos o retiros individuales.

**Mini-ejemplo de contraste**
Si un gas ideal realiza un trabajo de cien julios mientras absorbe exactamente cien julios de calor del entorno, su variación de energía interna resulta nula. Pensar que el calor y la energía interna son lo mismo obligaría a afirmar que la energía interna del sistema aumentó en cien julios, lo cual viola el balance de energía de la primera ley.

---

## Errores de modelo


### Error 2: Asumir que la energía interna depende solo de la [[temperatura]] en gases reales

**Por qué parece correcto**
Dado que el modelo clásico de gas ideal establece una relación de proporcionalidad directa entre la energía interna y la [[temperatura]] absoluta, el alumno realiza una generalización excesiva creyendo que este comportamiento es una propiedad universal para cualquier estado gaseoso de la materia.

**Por qué es incorrecto**
En los gases reales, las moléculas ejercen fuerzas atractivas y repulsivas entre sí. Esto significa que la energía interna real contiene un término de energía potencial intermolecular que depende directamente de la distancia promedio entre las partículas y, por tanto, del **volumen ocupado por el gas**.

**Señal de detección**
El alumno afirma que la variación de la energía interna es nula en un proceso de expansión a [[temperatura]] constante para un gas real denso o a presiones extremadamente elevadas.

**Corrección conceptual**
En un gas real, la energía interna es función tanto de la [[temperatura]] como del volumen. Al expandir el gas, la distancia entre moléculas aumenta, obligando al sistema a realizar trabajo contra sus propias fuerzas atractivas de cohesión, lo que modifica la energía interna incluso si la [[temperatura]] se mantiene constante.

**Mini-ejemplo de contraste**
En una expansión libre adiabática de Joule para un gas real, el gas se expande hacia el vacío sin realizar trabajo externo ni intercambiar calor, por lo que su variación de energía interna debe ser estrictamente nula. Si la energía interna dependiera únicamente de la [[temperatura]], esta no debería variar; sin embargo, experimentalmente se observa un enfriamiento del gas, lo que demuestra que parte de la energía cinética se convirtió en potencial debido al cambio de volumen.

---

## Errores matemáticos


### Error 3: Emplear la [[temperatura]] en grados Celsius en lugar de kelvin

**Por qué parece correcto**
Debido a la familiaridad cotidiana con la escala Celsius en laboratorios y problemas escolares, el estudiante realiza una sustitución numérica directa del valor de la [[temperatura]] en Celsius sin realizar la conversión previa a la escala absoluta.

**Por qué es incorrecto**
La definición de la energía interna absoluta en la teoría cinética se fundamenta en el movimiento térmico de las moléculas, el cual se anula teóricamente en el cero absoluto. Por tanto, las ecuaciones que relacionan la energía absoluta exigen el uso de la **[[temperatura]] absoluta en kelvin** para preservar la proporcionalidad matemática directa.

**Señal de detección**
El alumno obtiene un valor de energía interna absoluta negativo al realizar cálculos con temperaturas bajo cero grados Celsius en invierno, lo cual carece de sentido físico para una magnitud absoluta.

**Corrección conceptual**
Antes de sustituir cualquier valor de [[temperatura]] en las fórmulas de termodinámica, se debe sumar la constante de conversión de doscientos setenta y tres coma quince al valor en grados Celsius para obtener la [[temperatura]] correspondiente en la escala kelvin.

**Mini-ejemplo de contraste**
Si un mol de gas helio se encuentra a diez grados Celsius, calcular su energía interna absoluta usando el valor numérico diez daría un resultado positivo. Si la [[temperatura]] desciende a menos diez grados Celsius, sustituir menos diez en la fórmula daría una energía interna absoluta negativa, lo cual es físicamente imposible ya que la energía cinética molecular no puede ser menor que cero.

---

## Errores de interpretación


### Error 4: Restringir el uso de la capacidad calorífica a volumen constante a procesos isocóricos

**Por qué parece correcto**
Al observar el subíndice en el símbolo de la capacidad calorífica a volumen constante, el estudiante asocia mediante una confusión semántica que la fórmula solo es aplicable si el volumen del sistema permanece constante durante todo el proceso.

**Por qué es incorrecto**
Para un gas ideal, la energía interna depende exclusivamente de la [[temperatura]]. Por lo tanto, el cambio de energía interna entre dos temperaturas dadas es idéntico sin importar si el volumen cambia, se mantiene constante o experimenta cualquier otra transformación física intermedia.

**Señal de detección**
El estudiante intenta calcular la variación de energía interna en una expansión a presión constante utilizando la capacidad calorífica a presión constante en lugar del coeficiente a volumen constante.

**Corrección conceptual**
La variación de energía interna de un gas ideal está unívocamente determinada por el producto de los moles, la capacidad calorífica a volumen constante y la variación de [[temperatura]], independientemente de la trayectoria (isocórica, isobárica o adiabática) seguida por el proceso.

**Mini-ejemplo de contraste**
Si un gas ideal se expande a presión constante absorbiendo calor y realizando trabajo, calcular su variación de energía interna con el coeficiente a presión constante daría un valor superior al real. Esto rompería la coherencia de la primera ley de la termodinámica, ya que la variación de energía interna calculada no coincidiría con la diferencia neta entre el calor aportado y el trabajo realizado.

---

## Regla de autocontrol rápido

Para verificar la validez de sus resultados de energía interna, aplique este triple chequeo físico:
- **Consistencia de signo**: Compruebe que la variación de energía interna y la variación de [[temperatura]] tengan exactamente el mismo signo. Si el sistema se enfría, la variación de energía interna debe ser negativa; si se calienta, debe ser positiva.
- **Validación del cero absoluto**: Asegúrese de que el valor absoluto de la energía interna de su estado inicial y final sea estrictamente mayor que cero. Un resultado nulo o negativo indica de inmediato que ha utilizado la [[temperatura]] en grados Celsius en lugar de kelvin.
- **Cierre de ciclo**: Si el proceso descrito en el problema es un ciclo cerrado completo, verifique que la variación de energía interna neta acumulada en todas las etapas sume exactamente cero. Si obtiene un valor distinto de cero, revise los cálculos de [[temperatura]] en cada vértice del ciclo.