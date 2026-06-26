## Errores conceptuales


### Error 1: Tratar el calor como algo almacenado en el material
**Por qué parece correcto**

En el habla cotidiana se dice que una pared “tiene calor” o que una manta “da calor”. Esa forma de hablar empuja a imaginar el [[calor_transferido]] como una sustancia guardada dentro del objeto, especialmente cuando se toca una superficie caliente.

Además, la sensación táctil depende de la [[conductividad_termica]], de modo que un metal parece contener más energía que la madera aunque ambos estén a temperatura ambiente.

**Por qué es incorrecto**

El [[calor_transferido]] no es una reserva interna fija, sino energía en tránsito debida a una [[diferencia_temperatura]]. El material no “produce” el proceso por sí solo.

Lo que cambia entre materiales es la facilidad de paso, no la existencia de una sustancia térmica escondida. Esa facilidad está asociada a [[conductividad_termica]] y a la geometría.

**Señal de detección**

Aparece cuando se explica el fenómeno sin mencionar [[temperatura_caliente]] ni [[temperatura_fria]].

**Corrección conceptual**

Habla de transferencia provocada por contraste térmico y no de calor almacenado.

**Mini-ejemplo de contraste**

Una cuchara metálica y una de madera en la misma habitación tienen sensación distinta porque cambia la conducción, no porque una guarde más calor.


### Error 2: Creer que solo importa la temperatura caliente
**Por qué parece correcto**

Al mirar un foco caliente, la atención se va hacia [[temperatura_caliente]]. Parece que cuanto más caliente esté una cara, todo queda decidido por ese único dato.

En situaciones domésticas se suele comparar una sartén caliente con el aire cercano y se olvida que la cara fría también fija el desequilibrio.

**Por qué es incorrecto**

La conducción depende de [[diferencia_temperatura]], que requiere comparar [[temperatura_caliente]] con [[temperatura_fria]]. Una temperatura aislada no describe el empuje térmico.

Si ambas caras suben a la vez manteniendo la separación térmica, el paso ideal puede mantenerse parecido aunque los valores absolutos sean mayores.

**Señal de detección**

El razonamiento usa solo un extremo térmico y no calcula ni interpreta [[diferencia_temperatura]].

**Corrección conceptual**

Lee siempre el par de temperaturas y después interpreta el salto térmico.

**Mini-ejemplo de contraste**

Una placa entre 80 °C y 70 °C no conduce como otra entre 80 °C y 20 °C.

## Errores de modelo


### Error 3: Aplicar conducción unidimensional a cualquier geometría
**Por qué parece correcto**

La imagen de una pared plana es tan clara que se intenta trasladar a esquinas, tubos, placas pequeñas o piezas con bordes muy expuestos. El cálculo parece cómodo porque solo pide [[area]] y [[espesor]].

En un esquema escolar, dibujar dos caras paralelas da una sensación de orden que puede ocultar pérdidas laterales.

**Por qué es incorrecto**

El modelo exige que el paso térmico atraviese aproximadamente el [[espesor]] en una dirección principal. Si el calor se abre en varias direcciones, el [[gradiente_temperatura]] deja de ser simple.

La [[area]] efectiva puede cambiar a lo largo del camino, y entonces la estimación de [[potencia_termica]] pierde fidelidad.

**Señal de detección**

La pieza tiene bordes dominantes, curvatura fuerte o contacto parcial.

**Corrección conceptual**

Comprueba la geometría antes de elegir el modelo plano.

**Mini-ejemplo de contraste**

Una ventana rectangular grande se aproxima mejor que la esquina metálica de un marco pequeño.


### Error 4: Ignorar que el régimen puede no ser estacionario
**Por qué parece correcto**

Muchas fórmulas se enseñan como si el flujo fuera inmediato y constante. Al ver un [[tiempo]] en el problema, se multiplica la rapidez sin preguntarse si el sistema ya se estabilizó.

La comodidad del cálculo disfraza el hecho de que las temperaturas pueden estar cambiando durante el proceso.

**Por qué es incorrecto**

La [[potencia_termica]] y el [[flujo_calor]] constantes requieren condiciones mantenidas. Si [[temperatura_caliente]] o [[temperatura_fria]] evolucionan, el ritmo real no es único.

En un transitorio, el [[calor_transferido]] acumulado depende de cómo varía el proceso durante el [[tiempo]].

**Señal de detección**

El enunciado habla de calentamiento inicial, enfriamiento rápido o temperaturas que cambian.

**Corrección conceptual**

Usa el modelo estacionario solo cuando las fronteras térmicas se mantienen.

**Mini-ejemplo de contraste**

Una pared de una casa en equilibrio nocturno no se comporta como una taza recién llenada.

## Errores matemáticos


### Error 5: No convertir el área y el [[espesor]]
**Por qué parece correcto**

Los centímetros y milímetros son cómodos porque aparecen en reglas, planos y catálogos. Por eso resulta tentador introducir [[area]] en centímetros cuadrados o [[espesor]] en milímetros sin conversión.

El número obtenido puede parecer razonable visualmente, sobre todo si no se revisan unidades.

**Por qué es incorrecto**

La [[conductividad_termica]] habitual usa metros, de modo que mezclar unidades altera la [[potencia_termica]] y el [[flujo_calor]]. Un error en [[area]] puede multiplicar el resultado de forma enorme.

También la [[resistencia_termica]] queda distorsionada si el [[espesor]] no está en metros.

**Señal de detección**

El resultado cambia miles de veces al revisar unidades.

**Corrección conceptual**

Convierte toda longitud a metros y toda superficie a metros cuadrados antes de operar.

**Mini-ejemplo de contraste**

Un panel de diez mil centímetros cuadrados corresponde a un metro cuadrado, no a diez mil metros cuadrados.


### Error 6: Confundir flujo de calor con potencia térmica
**Por qué parece correcto**

Ambas magnitudes hablan de transferencia y suelen crecer cuando aumenta [[diferencia_temperatura]]. En problemas rápidos, el alumno ve vatios y vatios por metro cuadrado como etiquetas parecidas.

Si no se presta atención a [[area]], la diferencia entre intensidad superficial y total global se vuelve borrosa.

**Por qué es incorrecto**

La [[potencia_termica]] describe el conjunto completo, mientras [[flujo_calor]] está normalizado por [[area]]. No responden a la misma pregunta.

Una superficie grande puede tener mucha [[potencia_termica]] total y un [[flujo_calor]] moderado.

**Señal de detección**

Se comparan objetos de tamaño distinto usando solo el valor total.

**Corrección conceptual**

Usa [[flujo_calor]] para intensidad superficial y [[potencia_termica]] para transferencia total.

**Mini-ejemplo de contraste**

Una pared grande puede perder más energía total que una ventana pequeña aunque su intensidad superficial sea menor.

## Errores de interpretación


### Error 7: Pensar que resistencia alta significa buen conductor
**Por qué parece correcto**

La palabra “resistencia” a veces se asocia con robustez o capacidad. Al leer [[resistencia_termica]], puede parecer que un valor alto representa un material potente.

La analogía con otros contextos cotidianos puede inducir una lectura positiva de la magnitud.

**Por qué es incorrecto**

Una [[resistencia_termica]] alta significa oposición al paso del calor. Para la misma [[diferencia_temperatura]], reduce la [[potencia_termica]].

Los buenos aislantes buscan resistencia alta; los buenos conductores térmicos buscan resistencia baja.

**Señal de detección**

Se interpreta un aislante como si transmitiera más calor por tener valor alto.

**Corrección conceptual**

Asocia [[resistencia_termica]] con freno térmico, no con capacidad conductora.

**Mini-ejemplo de contraste**

Un abrigo eficaz tiene alta oposición térmica y por eso reduce pérdidas.


### Error 8: Leer el signo de Fourier como calor negativo
**Por qué parece correcto**

El signo negativo resulta llamativo y puede interpretarse como pérdida o valor imposible. Si se desconoce la convención, parece que un [[flujo_calor]] negativo contradice la física.

La dificultad crece cuando se mezcla el sentido del eje con la caída de temperatura.

**Por qué es incorrecto**

El signo indica dirección respecto al [[gradiente_temperatura]], no que la energía sea absurda. La conducción espontánea va hacia temperaturas menores.

Si se trabaja solo con magnitudes positivas, la dirección se describe en palabras y el tamaño se mantiene positivo.

**Señal de detección**

El alumno rechaza un resultado por el signo sin revisar el eje elegido.

**Corrección conceptual**

Distingue valor absoluto, dirección física y convenio de signos.

**Mini-ejemplo de contraste**

Un flujo hacia la izquierda puede ser negativo en un eje y seguir siendo una transferencia real.

## Regla de autocontrol rápido

Antes de aceptar un resultado, comprueba si [[temperatura_caliente]] supera a [[temperatura_fria]], si [[diferencia_temperatura]] y [[gradiente_temperatura]] tienen sentido, si [[conductividad_termica]], [[area]] y [[espesor]] están en unidades coherentes, si [[potencia_termica]] no se ha confundido con [[flujo_calor]], si [[tiempo]] justifica el [[calor_transferido]] y si [[resistencia_termica]] se interpreta como oposición.