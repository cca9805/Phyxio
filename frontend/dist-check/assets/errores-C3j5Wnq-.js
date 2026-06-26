const e=`# Auditoría de Errores: Palancas

## Errores conceptuales

### Error 1: Confundir una palanca de segunda clase con una de tercera clase

**Por qué parece correcto**
Ocurre por el sesgo de "ahorro de esfuerzo". Muchos estudiantes asumen que cualquier palanca debe multiplicar la fuerza para ser útil. Como ambas tienen el apoyo en un extremo, se confunden fácilmente si no se observa con cuidado qué elemento está en el centro de la barra rígida.

**Por qué es incorrecto**
Aunque ambas tienen el fulcro en un extremo, su ventaja mecánica es opuesta. La segunda clase siempre tiene una magnitud [[VM]] superior a la unidad (ahorra fuerza), mientras que la tercera clase siempre tiene una magnitud [[VM]] inferior a la unidad (gana velocidad). Confundirlas invalida el análisis del propósito funcional de la herramienta.

**Señal de detección**
Obtener una ventaja mecánica mayor a uno en herramientas diseñadas para la agilidad o precisión, como unas pinzas de laboratorio o el antebrazo humano al realizar un movimiento veloz.

**Corrección conceptual**
Utiliza la regla del elemento central. Identifica qué magnitud está "encerrada" entre las otras dos. Si es la resistencia [[R]], es 2ª clase. Si es la potencia [[P]], es 3ª clase.

**Mini-ejemplo de contraste**
Una carretilla (2ª clase) permite mover 100 kg con poco esfuerzo; unas pinzas de depilar (3ª clase) requieren más fuerza en los dedos de la que ejercen en la punta para ganar control táctil.

## Errores de modelo

### Error 2: Creer que una palanca con gran ventaja mecánica ahorra trabajo o energía

**Por qué parece correcto**
Es un fallo de percepción sensorial. Como al usar una palanca larga "nos cuesta menos" mover un objeto pesado, el cerebro interpreta erróneamente que estamos realizando menos trabajo total que si lo levantáramos a pulso.

**Por qué es incorrecto**
Viola el Principio de Conservación de la Energía. La palanca es un transformador de fuerza, no un generador de energía. El trabajo de entrada debe ser igual al trabajo de salida en un modelo ideal, cumpliendo la ley de conservación.

**Señal de detección**
El alumno cree que ha "descubierto" una forma de mover objetos gastando menos energía de la que requiere el cambio de altura de la carga útil.

**Corrección conceptual**
Aplica la Regla de Oro de la Mecánica: lo que ganas en fuerza lo pagas en recorrido. Si la fuerza se reduce a la décima parte, tu mano debe recorrer diez veces más distancia lineal.

**Mini-ejemplo de contraste**
Para levantar una piedra 10 cm con una palanca que reduce el esfuerzo a la mitad, tu mano debe descender obligatoriamente 20 cm. El trabajo realizado (Fuerza por distancia) es el mismo.

## Errores matemáticos

### Error 3: Medir distancias desde los extremos de la barra en lugar de desde el fulcro

**Por qué parece correcto**
Este error nace del sesgo de medición lineal cotidiana. Tendemos a usar el extremo físico de un objeto (como una regla o una tabla) como el punto cero natural para medir longitudes por comodidad visual.

**Por qué es incorrecto**
La física de la palanca se basa en el equilibrio de momentos respecto al eje de rotación. En este contexto, el fulcro es el único origen de coordenadas válido para el cálculo de torques.

**Señal de detección**
El alumno obtiene resultados de fuerza que no equilibran el sistema. La suma de los brazos de potencia y resistencia no coincide con la geometría relativa al punto de apoyo central o lateral.

**Corrección conceptual**
Define siempre el fulcro como el punto cero (x ≈ 0). Todas las magnitudes de brazo [[bP]] y [[bR]] deben nacer obligatoriamente de ese punto de pivotaje.

**Mini-ejemplo de contraste**
En una barra de 3 m con el fulcro a 1 m del extremo izquierdo, si aplicas fuerza en el extremo derecho, el brazo es de 2 m, no de 3 m desde el borde.

## Errores de interpretación

### Error 4: Utilizar masa en kilogramos en lugar de peso en Newtons

**Por qué parece correcto**
Es una confusión de unidades común en la vida diaria. Las balanzas nos dan valores en kilos, y tendemos a tratar esa cifra como la fuerza que el objeto ejerce sobre la palanca.

**Por qué es incorrecto**
La ley de la palanca exige el balance de momentos, que son el producto de una fuerza por una distancia. La masa es una propiedad escalar que no genera rotación; es la fuerza peso la que genera el torque.

**Señal de detección**
Uso de unidades incorrectas como kg·m en lugar de N·m. El cálculo fallará si el sistema se analiza en condiciones de gravedad distinta a la terrestre.

**Corrección conceptual**
Multiplica siempre la masa por la aceleración de la gravedad para obtener la resistencia [[R]] en Newtons antes de aplicar la igualdad de momentos.

**Mini-ejemplo de contraste**
Un bloque de 10 kg no ejerce un momento de 10 unidades; ejerce una fuerza de 98 N que, multiplicada por el brazo, da el torque físico real.

## Regla de autocontrol rápido

Antes de finalizar tu análisis de una palanca, verifica estos tres puntos:
1. **Pertenencia:** ¿Has identificado correctamente cuál de las fuerzas está en el centro para clasificar el género?
2. **Ponderación:** ¿Está el brazo más largo asociado a la fuerza más pequeña? (Si no, el sistema no estará en equilibrio).
3. **Conservación:** ¿Has comprobado que el producto de fuerza por distancia es constante en ambos lados (Trabajo)?
`;export{e as default};
