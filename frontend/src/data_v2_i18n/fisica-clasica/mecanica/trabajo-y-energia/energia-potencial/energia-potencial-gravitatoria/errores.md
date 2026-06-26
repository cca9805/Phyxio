# Errores frecuentes

## Errores conceptuales

### Error 1: usar [[Ug]] sin declarar referencia de altura

Por que parece correcto:
El calculo puede dar una cifra en julios y parecer completo.

Por que es incorrecto:
Sin referencia, el valor de estado no es interpretable de forma unica.

Senal de deteccion:
La solucion no puede explicar por que [[Ug]] sale positiva o negativa.

Mini-ejemplo de contraste:
Dos alumnos obtienen valores distintos de [[Ug]] para la misma cota por usar ceros diferentes, pero ambos pueden coincidir en [[dUg]] si comparan bien estados.

Correccion conceptual:
Definir el cero vertical al inicio y mantenerlo en todo el problema.

## Errores de modelo

### Error 2: aplicar modelo local cuando la escala ya no lo justifica

Por que parece correcto:
La expresion se puede usar en cualquier ejercicio y produce numeros.

Por que es incorrecto:
Cuando la variacion espacial es grande, la aproximacion de [[g]] constante puede dejar de ser valida.

Senal de deteccion:
El resultado contradice estimaciones fisicas razonables o cambia demasiado al refinar el modelo.

Mini-ejemplo de contraste:
Un ejercicio de orbita no debe tratarse igual que un ascensor de edificio.

Correccion conceptual:
Comprobar dominio de validez antes de sustituir y cambiar de marco cuando sea necesario.

## Errores matematicos

### Error 3: invertir [[hf]] y [[hi]] o mezclar unidades

Por que parece correcto:
La algebra sigue cerrando aunque se invierta el orden o falte una conversion.

Por que es incorrecto:
El signo de [[dUg]] y [[Wg]] cambia y la lectura fisica se vuelve incoherente.

Senal de deteccion:
Un ascenso con [[dUg]] negativa sin explicacion adicional.

Mini-ejemplo de contraste:
Si la cota final es mayor y el resultado indica perdida de energia potencial, suele haber error de resta o de referencia.

Correccion conceptual:
Escribir primero estado inicial y final, luego operar en SI con orden consistente.

## Errores de interpretacion

### Error 4: cerrar con numero sin lectura causal

Por que parece correcto:
El estudiante entrega magnitud y unidad correctas.

Por que es incorrecto:
No explica quien gana energia, quien la cede ni por que el signo tiene sentido.

Senal de deteccion:
No hay frase final que conecte [[dUg]] con [[Wg]].

Mini-ejemplo de contraste:
No basta con decir que [[Wg]] es negativa; hay que explicar que el proceso es un ascenso en la referencia elegida.

Correccion conceptual:
Cerrar cada ejercicio con una conclusion de estado mas transferencia.

## Regla de autocontrol rapido

1. Fija referencia vertical unica antes de calcular.
2. Declara si la pregunta pide [[Ug]], [[dUg]] o [[Wg]].
3. Verifica orden entre [[hi]] y [[hf]] y revisa unidades SI.
4. Contrasta el signo final con la historia fisica del proceso.
5. Si hay dudas de escala, revisa dominio de validez del modelo local.

Este autocontrol funciona mejor si se aplica antes y despues del calculo. Antes sirve para evitar errores de planteamiento, y despues sirve para detectar incoherencias de signo o de unidad. En trabajo real, esta doble pasada reduce retrabajos y mejora la calidad de reporte.

Otra recomendacion practica es registrar en una linea la referencia elegida y no volver a discutirla durante la resolucion. Muchos fallos repetidos en clase no son de algebra, sino de cambios silenciosos de referencia entre pasos. Cuando la referencia queda escrita, ese riesgo cae de forma inmediata.