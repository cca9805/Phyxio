const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
### Error 1. Suponer independencia de ramas\r
#### Por que parece correcto\r
Cada masa tiene su propio diagrama de fuerzas y eso sugiere, de manera intuitiva, que se pueden resolver por separado. En ejercicios rapidos, esa intuicion parece ahorrar pasos.\r
#### Senal de deteccion\r
Aparecen dos respuestas incompatibles para el mismo movimiento compartido o se introducen variables extra sin significado fisico real.\r
#### Mini-ejemplo de contraste\r
Si se impone una aceleracion distinta en cada rama de una cuerda inextensible, la longitud total deja de ser compatible con la geometria del sistema.\r
#### Correccion conceptual\r
Aplicar primero la ligadura: una sola respuesta de movimiento compartido y luego cierre dinamico conjunto.\r
\r
### Error 2. Tratar la fuerza interna como dato externo\r
#### Por que parece correcto\r
En situaciones casi estaticas la fuerza interna puede acercarse al peso de una masa, lo que induce una regla falsa de aplicacion universal.\r
#### Senal de deteccion\r
El valor calculado no cambia al modificar la otra masa, como si el acoplamiento no existiera.\r
#### Mini-ejemplo de contraste\r
Al aumentar [[m2]] con [[m1]] fija, la fuerza interna debe cambiar. Si no cambia, el planteamiento ignora la dependencia acoplada.\r
#### Correccion conceptual\r
Recordar que [[T]] emerge del cierre del sistema y depende de [[m1]], [[m2]] y [[g]].\r
\r
## Errores de modelo\r
### Error 3. Usar idealidad fuera de rango\r
#### Por que parece correcto\r
El modelo ideal funciona bien en ejercicios introductorios y eso lleva a extenderlo automaticamente a montajes con friccion relevante o elasticidad.\r
#### Senal de deteccion\r
La diferencia entre prediccion y medicion mantiene sesgo estable incluso al repetir ensayo con el mismo protocolo.\r
#### Mini-ejemplo de contraste\r
Si la polea presenta friccion notable, la prediccion ideal subestima desbalance entre ramas y altera el cierre dinamico.\r
#### Correccion conceptual\r
Declarar hipotesis y dominio de validez antes de concluir. Si hay sesgo sistematico, migrar a modelo extendido.\r
\r
## Errores matemáticos\r
### Error 4. Mezcla de signos y unidades\r
#### Por que parece correcto\r
Trabajar con modulos puede parecer mas simple al inicio, y redondear temprano da sensacion de rapidez.\r
#### Senal de deteccion\r
El resultado final contradice sentido fisico esperado o cambia de forma inestable entre intentos equivalentes.\r
#### Mini-ejemplo de contraste\r
Usar una masa en gramos y otra en kilogramos puede generar resultados numericos plausibles pero fisicamente absurdos.\r
#### Correccion conceptual\r
Fijar convencion de ejes al comienzo, mantener unidades coherentes y posponer redondeo hasta el cierre.\r
\r
## Errores de interpretación\r
### Error 5. Cerrar con numero sin mecanismo\r
#### Por que parece correcto\r
En evaluaciones cortas se premia el valor final y se omite explicacion causal.\r
#### Senal de deteccion\r
No se puede responder que parametro controla la tendencia ni cuando deja de valer el modelo.\r
#### Mini-ejemplo de contraste\r
Se reporta resultado correcto, pero no se explica por que el acercamiento entre masas reduce la respuesta compartida.\r
#### Correccion conceptual\r
Anadir siempre una frase de causalidad y un limite de validez al reporte.\r
\r
## Regla de autocontrol rápido\r
Regla final: eje definido, unidades consistentes, caso simetrico verificado, lectura causal redactada y limite de validez declarado. Si uno falla, el resultado no debe publicarse como cierre.\r
`;export{e as default};
