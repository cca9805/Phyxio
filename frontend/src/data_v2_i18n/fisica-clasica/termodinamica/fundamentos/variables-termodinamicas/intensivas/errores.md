# Errores comunes en variables intensivas

## Errores conceptuales

### Error 1: "Dos cuerpos juntos tienen el doble de temperatura"

**Confusion.** El alumno toma dos muestras identicas con la misma [[T]] y concluye que al juntarlas la temperatura total debe duplicarse.

**Por que parece correcto.** Hay más materia y por eso parece natural esperar una lectura mayor.

**Por que es incorrecto.** La [[T]] no mide cantidad total de energía. Mide estado térmico y direccion posible del intercambio de calor.

**Señal de deteccion.** El resultado propuesto cambia la temperatura solo porque se añadio una copia identica.

**Correccion conceptual.** Al juntar copias identicas, [[m]] aumenta, pero [[T]] permanece igual si no hay intercambio con el entorno ni cambio de estado.

**Mini-ejemplo de contraste.** Dos vasos de agua a la misma temperatura producen más agua, no una temperatura doble. El termometro mide la misma condición térmica.

### Error 2: "Toda variable calculada con masa es extensiva"

**Confusion.** Como [[rho]] se calcula usando [[m]], se clasifica automaticamente como extensiva.

**Por que parece correcto.** La formula usa [[m]], y la masa si aumenta al duplicar una muestra.

**Por que es incorrecto.** La densidad también usa [[V]]. Si ambas cantidades crecen en la misma proporcion, el cociente no cambia.

**Señal de deteccion.** El razonamiento mira solo el numerador y olvida que el volumen también se escala.

**Correccion conceptual.** [[rho]] mide masa por volumen, no masa total. Su comportamiento frente a [[lambda_escala]] es el que decide la clasificación.

**Mini-ejemplo de contraste.** Una muestra de agua y dos muestras iguales tienen distinta masa total, pero aproximadamente la misma densidad.

## Errores de modelo

### Error 3: "Una intensiva siempre es uniforme"

**Confusion.** Se cree que si una variable es intensiva debe tener el mismo valor en todos los puntos del sistema.

**Por que parece correcto.** En muchos ejemplos introductorios se usan sistemas uniformes con una sola lectura.

**Por que es incorrecto.** Intensiva describe una lectura local. Puede variar espacialmente si el sistema no esta en equilibrio o tiene gradientes.

**Señal de deteccion.** El alumno descarta gradientes solo porque la variable se llama intensiva.

**Correccion conceptual.** En un sistema no uniforme se usa [[T]] local, [[P]] local o [[rho]] local. La variable sigue siendo intensiva, pero ya no basta una sola cifra.

**Mini-ejemplo de contraste.** Una barra calentada por un extremo tiene distintas temperaturas a lo largo de su longitud; cada lectura local sigue siendo temperatura.

## Errores matemáticos

### Error 4: "Promediar intensivas sin ponderar"

**Confusion.** Para mezclar dos partes con [[X_A]] y [[X_B]], el alumno usa siempre una media aritmetica simple.

**Por que parece correcto.** La media simple parece equilibrada cuando solo se miran dos lecturas.

**Por que es incorrecto.** Si las cantidades son distintas, la parte más grande debe influir más en el valor final. La ponderacion requiere una cantidad compatible, como [[m]].

**Señal de deteccion.** El calculo da el mismo resultado aunque se cambien las masas relativas.

**Correccion conceptual.** En estimaciones simples se usa una media ponderada cuando la física lo permite. La regla del leaf para esta situación es:

{{f:promedio_ponderado_intensivo}}

**Mini-ejemplo de contraste.** Una taza caliente mezclada con una olla grande templada no queda en el promedio simple de ambas lecturas; queda más cerca de la olla.

### Error 5: "Comparar presiones como si fueran fuerzas totales"

**Confusion.** Dos recipientes con la misma [[P]] se interpretan como si ejercieran la misma fuerza total en cualquier pared.

**Por que parece correcto.** La presión se asocia con empuje y se confunde con la fuerza completa.

**Por que es incorrecto.** La [[P]] es fuerza por area. La fuerza total también depende del area de la frontera.

**Señal de deteccion.** La solucion compara recipientes sin mencionar el area de la pared.

**Correccion conceptual.** La presión permite comparar estado mecánico local; para fuerza total se necesita informacion geometrica adicional.

**Mini-ejemplo de contraste.** Una pequeña valvula y una pared grande pueden estar sometidas a la misma presión, pero la pared grande recibe mayor fuerza total.

## Errores de interpretacion

### Error 6: "Igual equilibrio significa igual cantidad"

**Confusion.** Se piensa que dos cuerpos en equilibrio deben tener la misma [[m]], el mismo [[V]] o la misma energía total.

**Por que parece correcto.** La palabra equilibrio puede sugerir reparto igual de todo.

**Por que es incorrecto.** El equilibrio térmico o mecánico se reconoce por igualdad de intensivas compatibles, no por igualdad de inventario.

**Señal de deteccion.** El criterio usa masas o volumenes iguales para justificar equilibrio de temperatura o presión.

**Correccion conceptual.** Dos masas distintas pueden tener la misma [[T]]. Dos recipientes de tamaño distinto pueden compartir [[P]] si estan en el mismo estado mecánico.

**Mini-ejemplo de contraste.** Un lago y un vaso pueden estar a la misma temperatura, aunque la cantidad de energía almacenada sea muy distinta.

## Regla de autocontrol rápido

Antes de sumar una variable, pregunta si realmente cuenta cantidad total. Si al duplicar una muestra uniforme el valor permanece igual, estas ante una variable intensiva. Si necesitas comparar dos muestras de distinto tamaño, empieza por [[T]], [[P]], [[rho]] o una propiedad normalizada. Si necesitas inventario, vuelve a las extensivas.
