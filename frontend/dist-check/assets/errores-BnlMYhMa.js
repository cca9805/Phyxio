const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
\r
### Error 1: usar [[Ug]] sin declarar referencia de altura\r
\r
Por que parece correcto:\r
El calculo puede dar una cifra en julios y parecer completo.\r
\r
Por que es incorrecto:\r
Sin referencia, el valor de estado no es interpretable de forma unica.\r
\r
Senal de deteccion:\r
La solucion no puede explicar por que [[Ug]] sale positiva o negativa.\r
\r
Mini-ejemplo de contraste:\r
Dos alumnos obtienen valores distintos de [[Ug]] para la misma cota por usar ceros diferentes, pero ambos pueden coincidir en [[dUg]] si comparan bien estados.\r
\r
Correccion conceptual:\r
Definir el cero vertical al inicio y mantenerlo en todo el problema.\r
\r
## Errores de modelo\r
\r
### Error 2: aplicar modelo local cuando la escala ya no lo justifica\r
\r
Por que parece correcto:\r
La expresion se puede usar en cualquier ejercicio y produce numeros.\r
\r
Por que es incorrecto:\r
Cuando la variacion espacial es grande, la aproximacion de [[g]] constante puede dejar de ser valida.\r
\r
Senal de deteccion:\r
El resultado contradice estimaciones fisicas razonables o cambia demasiado al refinar el modelo.\r
\r
Mini-ejemplo de contraste:\r
Un ejercicio de orbita no debe tratarse igual que un ascensor de edificio.\r
\r
Correccion conceptual:\r
Comprobar dominio de validez antes de sustituir y cambiar de marco cuando sea necesario.\r
\r
## Errores matematicos\r
\r
### Error 3: invertir [[hf]] y [[hi]] o mezclar unidades\r
\r
Por que parece correcto:\r
La algebra sigue cerrando aunque se invierta el orden o falte una conversion.\r
\r
Por que es incorrecto:\r
El signo de [[dUg]] y [[Wg]] cambia y la lectura fisica se vuelve incoherente.\r
\r
Senal de deteccion:\r
Un ascenso con [[dUg]] negativa sin explicacion adicional.\r
\r
Mini-ejemplo de contraste:\r
Si la cota final es mayor y el resultado indica perdida de energia potencial, suele haber error de resta o de referencia.\r
\r
Correccion conceptual:\r
Escribir primero estado inicial y final, luego operar en SI con orden consistente.\r
\r
## Errores de interpretacion\r
\r
### Error 4: cerrar con numero sin lectura causal\r
\r
Por que parece correcto:\r
El estudiante entrega magnitud y unidad correctas.\r
\r
Por que es incorrecto:\r
No explica quien gana energia, quien la cede ni por que el signo tiene sentido.\r
\r
Senal de deteccion:\r
No hay frase final que conecte [[dUg]] con [[Wg]].\r
\r
Mini-ejemplo de contraste:\r
No basta con decir que [[Wg]] es negativa; hay que explicar que el proceso es un ascenso en la referencia elegida.\r
\r
Correccion conceptual:\r
Cerrar cada ejercicio con una conclusion de estado mas transferencia.\r
\r
## Regla de autocontrol rapido\r
\r
1. Fija referencia vertical unica antes de calcular.\r
2. Declara si la pregunta pide [[Ug]], [[dUg]] o [[Wg]].\r
3. Verifica orden entre [[hi]] y [[hf]] y revisa unidades SI.\r
4. Contrasta el signo final con la historia fisica del proceso.\r
5. Si hay dudas de escala, revisa dominio de validez del modelo local.\r
\r
Este autocontrol funciona mejor si se aplica antes y despues del calculo. Antes sirve para evitar errores de planteamiento, y despues sirve para detectar incoherencias de signo o de unidad. En trabajo real, esta doble pasada reduce retrabajos y mejora la calidad de reporte.\r
\r
Otra recomendacion practica es registrar en una linea la referencia elegida y no volver a discutirla durante la resolucion. Muchos fallos repetidos en clase no son de algebra, sino de cambios silenciosos de referencia entre pasos. Cuando la referencia queda escrita, ese riesgo cae de forma inmediata.`;export{e as default};
