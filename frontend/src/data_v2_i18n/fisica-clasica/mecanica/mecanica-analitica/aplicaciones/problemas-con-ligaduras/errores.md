# Errores frecuentes

## Errores conceptuales
### Error 1. Suponer independencia de ramas
#### Por que parece correcto
Cada masa tiene su propio diagrama de fuerzas y eso sugiere, de manera intuitiva, que se pueden resolver por separado. En ejercicios rapidos, esa intuicion parece ahorrar pasos.
#### Senal de deteccion
Aparecen dos respuestas incompatibles para el mismo movimiento compartido o se introducen variables extra sin significado fisico real.
#### Mini-ejemplo de contraste
Si se impone una aceleracion distinta en cada rama de una cuerda inextensible, la longitud total deja de ser compatible con la geometria del sistema.
#### Correccion conceptual
Aplicar primero la ligadura: una sola respuesta de movimiento compartido y luego cierre dinamico conjunto.

### Error 2. Tratar la fuerza interna como dato externo
#### Por que parece correcto
En situaciones casi estaticas la fuerza interna puede acercarse al peso de una masa, lo que induce una regla falsa de aplicacion universal.
#### Senal de deteccion
El valor calculado no cambia al modificar la otra masa, como si el acoplamiento no existiera.
#### Mini-ejemplo de contraste
Al aumentar [[m2]] con [[m1]] fija, la fuerza interna debe cambiar. Si no cambia, el planteamiento ignora la dependencia acoplada.
#### Correccion conceptual
Recordar que [[T]] emerge del cierre del sistema y depende de [[m1]], [[m2]] y [[g]].

## Errores de modelo
### Error 3. Usar idealidad fuera de rango
#### Por que parece correcto
El modelo ideal funciona bien en ejercicios introductorios y eso lleva a extenderlo automaticamente a montajes con friccion relevante o elasticidad.
#### Senal de deteccion
La diferencia entre prediccion y medicion mantiene sesgo estable incluso al repetir ensayo con el mismo protocolo.
#### Mini-ejemplo de contraste
Si la polea presenta friccion notable, la prediccion ideal subestima desbalance entre ramas y altera el cierre dinamico.
#### Correccion conceptual
Declarar hipotesis y dominio de validez antes de concluir. Si hay sesgo sistematico, migrar a modelo extendido.

## Errores matemáticos
### Error 4. Mezcla de signos y unidades
#### Por que parece correcto
Trabajar con modulos puede parecer mas simple al inicio, y redondear temprano da sensacion de rapidez.
#### Senal de deteccion
El resultado final contradice sentido fisico esperado o cambia de forma inestable entre intentos equivalentes.
#### Mini-ejemplo de contraste
Usar una masa en gramos y otra en kilogramos puede generar resultados numericos plausibles pero fisicamente absurdos.
#### Correccion conceptual
Fijar convencion de ejes al comienzo, mantener unidades coherentes y posponer redondeo hasta el cierre.

## Errores de interpretación
### Error 5. Cerrar con numero sin mecanismo
#### Por que parece correcto
En evaluaciones cortas se premia el valor final y se omite explicacion causal.
#### Senal de deteccion
No se puede responder que parametro controla la tendencia ni cuando deja de valer el modelo.
#### Mini-ejemplo de contraste
Se reporta resultado correcto, pero no se explica por que el acercamiento entre masas reduce la respuesta compartida.
#### Correccion conceptual
Anadir siempre una frase de causalidad y un limite de validez al reporte.

## Regla de autocontrol rápido
Regla final: eje definido, unidades consistentes, caso simetrico verificado, lectura causal redactada y limite de validez declarado. Si uno falla, el resultado no debe publicarse como cierre.
