const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
\r
### Error 1: usar [[Ue]] sin explicar que almacena el sistema\r
\r
Por que parece correcto:\r
El resultado numerico suele salir con unidad de energia y eso puede dar la impresion de que el ejercicio ya esta resuelto.\r
\r
Por que es incorrecto:\r
Si no aparece el resorte, la deformacion y la referencia natural, la cuenta carece de lectura fisica.\r
\r
Senal de deteccion:\r
El alumno da un numero pero no puede decir que cambia fisicamente en el sistema.\r
\r
Mini-ejemplo de contraste:\r
No es lo mismo decir solo que [[Ue]] vale cierto numero que explicar que el resorte quedo mas deformado respecto de su longitud natural.\r
\r
Correccion conceptual:\r
Verbaliza primero el sistema, la deformacion y el estado que comparas; luego calcula.\r
\r
## Errores de modelo\r
\r
### Error 2: mantener el modelo ideal cuando el enunciado ya lo contradice\r
\r
Por que parece correcto:\r
La formula de Hooke y la expresion de energia ideal siguen funcionando algebraicamente aunque la situacion real ya no sea lineal.\r
\r
Por que es incorrecto:\r
Si hay deformacion permanente, histéresis, amortiguacion fuerte o respuesta no lineal, el modelo basico deja de describir bien el sistema.\r
\r
Senal de deteccion:\r
Aparecen marcas permanentes, cambios visibles de rigidez o una curva fuerza-deformacion que deja de parecer recta.\r
\r
Mini-ejemplo de contraste:\r
Un resorte que deja marca o cambia su rigidez visible no debe tratarse como ideal sin mas.\r
\r
Correccion conceptual:\r
Revisa la hipotesis fisica antes de sustituir valores y cambia de modelo cuando la situacion ya no sea ideal.\r
\r
## Errores matematicos\r
\r
### Error 3: fallar en unidades, signos o conversion de magnitudes\r
\r
Por que parece correcto:\r
La algebra puede cerrar aunque la unidad final no sea la esperada.\r
\r
Por que es incorrecto:\r
Mezclar centimetros con metros o perder el cuadrado de [[x]] altera el resultado sin avisar.\r
\r
Senal de deteccion:\r
La energia sale desmesurada para una deformacion pequena o el signo no coincide con el proceso real.\r
\r
Mini-ejemplo de contraste:\r
Una energia que sale desmesurada para una deformacion pequena suele indicar un error de conversion, no una propiedad extraña del resorte.\r
\r
Correccion conceptual:\r
Comprueba la unidad de [[k]], la unidad de [[x]] y la coherencia dimensional del resultado antes de cerrar.\r
\r
## Errores de interpretacion\r
\r
### Error 4: terminar con un numero y no con una lectura fisica\r
\r
Por que parece correcto:\r
Un valor de [[dUe]] o [[We]] parece una respuesta completa cuando solo es una sustitucion.\r
\r
Por que es incorrecto:\r
Si no dices si el resorte almacena, cede o recupera energia, la respuesta queda incompleta.\r
\r
Senal de deteccion:\r
La solucion no explica el sentido del cambio ni el papel del signo.\r
\r
Mini-ejemplo de contraste:\r
No basta con informar el signo; hay que explicar que proceso fisico representa ese signo.\r
\r
Correccion conceptual:\r
Cierra siempre con una frase de interpretacion: que cambia, por que cambia y en que sentido.\r
\r
## Regla de autocontrol rapido\r
\r
1. Escribir primero el estado inicial y el final del resorte.\r
2. Confirmar que la deformacion se mide desde la longitud natural.\r
3. Revisar unidades y signos antes de sustituir numeros.\r
4. Explicar en una frase si la energia aumenta, disminuye o se transfiere.\r
5. Si el comportamiento real no es lineal, abandonar el modelo ideal a tiempo.\r
`;export{e as default};
