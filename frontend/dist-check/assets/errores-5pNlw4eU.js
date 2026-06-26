const e=`# Errores frecuentes — Ecuación de onda electromagnética

## Errores conceptuales

### Error 1: Creer que c es un postulado de Maxwell

**Por qué parece correcto**

La relatividad especial de Einstein postula que la velocidad de la luz es la misma para todos los observadores, lo cual lleva a pensar que [[c]] es un axioma del electromagnetismo. Además, en muchos textos universitarios se presenta [[c]] como una constante que "aparece" en las ecuaciones, sin mostrar explícitamente cómo emerge de la deducción. La generalización incorrecta es razonable: si la relatividad postula [[c]], tal vez Maxwell también lo hizo.

**Por qué es incorrecto**

Maxwell no postuló [[c]]. El valor surge algebraicamente al combinar las cuatro ecuaciones diferenciales en el vacío: el laplaciano de [[E]] queda igualado a un coeficiente multiplicado por la segunda derivada temporal de [[E]], y ese coeficiente es exactamente [[mu0]]·[[epsilon0]]. Comparando con la forma estándar de la ecuación de onda escalar, la velocidad de propagación resulta ser el inverso de la raíz cuadrada de ese producto. Es una deducción, no una premisa.

**Señal de detección**

El alumno escribe frases como "Maxwell postuló que la luz viaja a 3×10⁸ m/s" o no puede explicar de dónde viene [[c]] en la ecuación de onda. Otro síntoma es confundir la constante [[c]] (resultado de la deducción) con la invarianza relativista de [[c]] (que sí es un postulado de Einstein, pero es un resultado distinto y posterior).

**Corrección conceptual**

La secuencia lógica correcta es: ecuaciones de Maxwell → eliminación cruzada de campos → ecuación de onda → identificación de la velocidad de propagación como [[c]] = 1/√([[mu0]]·[[epsilon0]]). El hecho de que ese valor coincida con la [[c]] medida experimentalmente es lo que demostró que la luz es una onda electromagnética, no un postulado.

**Mini-ejemplo de contraste**

Si [[c]] fuera un postulado, bastaría con elegir valores arbitrarios de [[mu0]] y [[epsilon0]] y la ecuación de onda seguiría siendo correcta. Pero al introducir [[mu0]] = 4π×10⁻⁷ H/m y [[epsilon0]] = 8.854×10⁻¹² F/m (determinados de fuerzas eléctricas y magnéticas), el producto [[mu0]]·[[epsilon0]] da exactamente 1/(3×10⁸)² m⁻²s². La concordancia no es casual: es la prueba de que [[c]] se deduce.

---

### Error 2: Confundir frecuencia angular con frecuencia ordinaria

**Por qué parece correcto**

Ambas magnitudes describen "la rapidez de oscilación" de la onda y se representan con letras distintas ([[omega]] y f), pero el alumno suele percibir que son lo mismo porque en el lenguaje cotidiano "frecuencia" se usa sin distinción. En muchos enunciados de nivel bachillerato solo aparece f, y el factor 2π parece un detalle técnico insignificante.

**Por qué es incorrecto**

[[omega]] y f difieren por un factor de 2π: [[omega]] = 2πf. Usar [[omega]] donde corresponde f (o viceversa) produce errores de un factor 2π ≈ 6.28 en [[k]], [[lambda]] y en el argumento de la solución de onda plana. Un error de ese tamaño cambia completamente el número de onda y la longitud de onda calculados.

**Señal de detección**

Si al calcular [[k]] con la relación de dispersión y con la definición [[k]] = 2π/[[lambda]] se obtienen valores que difieren en un factor de (2π)², el alumno ha mezclado [[omega]] con f en alguno de los dos pasos. Otro síntoma es obtener una [[lambda]] un factor 6.28 mayor o menor que el valor esperado.

**Corrección conceptual**

La relación de dispersión en el vacío es [[omega]] = [[c]]·[[k]], donde ambas magnitudes van en unidades del sistema internacional: [[omega]] en rad/s y [[k]] en rad/m. Para trabajar con frecuencia ordinaria f (en Hz) y [[lambda]] (en m), la relación equivalente es f = [[c]]/[[lambda]], que no tiene factores 2π visibles porque se cancelan: (2πf) = [[c]]·(2π/[[lambda]]).

**Mini-ejemplo de contraste**

La luz verde tiene f = 5.45×10¹⁴ Hz. Si se usa ese valor directamente en lugar de [[omega]] = 2πf para calcular [[k]] = [[omega]]/[[c]], el resultado es aproximadamente 1.82×10⁶ rad/m en lugar de 1.14×10⁷ rad/m. La [[lambda]] resultante sería 3.45 μm, en el infrarrojo medio, no 550 nm en el visible. Un error de un factor 2π detecta de inmediato la confusión.

---

## Errores de modelo

### Error 3: Extender la ecuación de onda del vacío a medios con pérdidas

**Por qué parece correcto**

La ecuación de onda en el vacío tiene una forma matemática limpia y simple. El alumno tiende a usarla como punto de partida universal porque funciona bien en todos los ejemplos de clase, que generalmente son en el vacío o en dieléctricos ideales. La extensión a medios reales parece un "detalle técnico" que no modifica la estructura esencial de la solución.

**Por qué es incorrecto**

La ecuación homogénea ∇²E = [[mu0]]·[[epsilon0]]·∂²E/∂t² solo vale si no hay corrientes libres, es decir, fuera del vacío y de dieléctricos sin pérdidas. En un conductor con conductividad σ, la ley de Ampère-Maxwell incluye un término adicional con la densidad de corriente de conducción, que añade un término de primer orden temporal en la ecuación de onda. La solución ya no es una sinusoide de amplitud constante: tiene una exponencial decreciente que atenúa el campo con la profundidad.

**Señal de detección**

El alumno calcula que una onda de radio penetra en un conductor metálico varios metros, cuando el valor real es del orden de micrómetros o nanómetros. O bien, calcula [[c]] en un conductor usando la fórmula del vacío y obtiene un resultado que viola la causalidad.

**Corrección conceptual**

En medios con pérdidas, el número de onda [[k]] se convierte en complejo. La parte real determina la longitud de onda dentro del medio; la parte imaginaria determina la longitud de atenuación (skin depth). En un buen conductor, la longitud de penetración es proporcional al inverso de la raíz cuadrada de la frecuencia y de la conductividad, y es del orden de micrómetros para frecuencias de radiofrecuencia.

**Mini-ejemplo de contraste**

El cobre tiene una longitud de penetración de aproximadamente 2 μm a 1 GHz. Si se usara la ecuación de onda del vacío, se concluiría que la onda penetra sin atenuación, prediciendo que las pantallas de cobre son transparentes a las microondas. El resultado contradice cualquier experiencia con hornos microondas y cajas de Faraday.

---

## Errores matemáticos

### Error 4: Confundir velocidad de fase con velocidad de grupo

**Por qué parece correcto**

En el vacío, la velocidad de fase (el cociente [[omega]]/[[k]]) y la velocidad de grupo (la derivada d[[omega]]/d[[k]]) son idénticas e iguales a [[c]]. Si el alumno solo trabaja en el vacío, nunca observa la diferencia y concluye que ambas son siempre lo mismo. La distinción parece un refinamiento innecesario.

**Por qué es incorrecto**

En medios dispersivos, el índice de refracción depende de la frecuencia. Eso significa que d[[omega]]/d[[k]] ≠ [[omega]]/[[k]], y la velocidad a la que se propaga la envolvente del pulso (velocidad de grupo) difiere de la velocidad a la que se propaga la fase (velocidad de fase). La información y la energía viajan a la velocidad de grupo, no a la de fase. En algunos materiales fuertemente dispersivos la velocidad de fase puede superar [[c]], pero la velocidad de grupo no.

**Señal de detección**

El alumno calcula el tiempo de llegada de un pulso óptico en una fibra de vidrio usando [[c]]/n en lugar de la velocidad de grupo real. El tiempo predicho es incorrecto, especialmente para pulsos cortos de banda ancha, donde la dispersión es apreciable.

**Corrección conceptual**

Para calcular el tiempo de propagación de información, siempre usar la velocidad de grupo dω/dk evaluada en la frecuencia central del pulso. En el vacío, la relación de dispersión es lineal y ambas velocidades coinciden con [[c]]. En medios dispersivos, calcular primero la relación n(ω) del medio y luego diferenciar.

**Mini-ejemplo de contraste**

En una fibra óptica monomodo estándar a 1550 nm, la velocidad de grupo es aproximadamente [[c]]/1.47, mientras que la velocidad de fase es [[c]]/1.46. La diferencia del 0.7% parece pequeña, pero acumula un retardo de nanosegundos por kilómetro que limita la tasa de transmisión de datos. Ignorar esta distinción produce estimaciones de ancho de banda erróneas por varios órdenes de magnitud.

---

## Errores de interpretación

### Error 5: Creer que E y B son independientes en la onda

**Por qué parece correcto**

En electrostática se estudia el campo eléctrico sin necesidad de mencionar el magnético. En magnetostática ocurre lo contrario. El alumno concluye que cada campo existe y tiene significado físico por sí solo, y que en una onda podrían propagarse por separado. Algunos textos presentan el campo eléctrico de la onda como "el campo primario" y el magnético como "secundario" o "inducido", reforzando la idea de jerarquía o independencia.

**Por qué es incorrecto**

En una onda plana en el vacío, [[E]] y [[B]] están completamente acoplados: la ley de Faraday exige que un [[E]] variable genere siempre un rotacional de [[B]], y la ley de Ampère-Maxwell exige que un [[B]] variable genere siempre un rotacional de [[E]]. Una onda con solo [[E]] y sin [[B]] violaría la ley de Faraday. La propagación de la onda es precisamente el ciclo de regeneración mutua de los dos campos.

**Señal de detección**

El alumno pregunta "¿cuál de los dos campos lleva la energía?", o intenta calcular la energía de la onda usando solo la densidad de energía del campo eléctrico. Otro síntoma es dibujar la onda con solo un campo oscilante y sin el otro.

**Corrección conceptual**

En una onda plana en el vacío, las densidades de energía de los campos eléctrico y magnético son iguales en todo momento. La energía total se transporta por el vector de Poynting, que es el producto vectorial de [[E]] y [[B]] dividido por [[mu0]]. Ambos campos contribuyen por igual y son inseparables.

**Mini-ejemplo de contraste**

Si se calcula la densidad de energía de la onda solar usando solo [[E]] (700 V/m), se obtiene la mitad de la intensidad real de la radiación solar (1361 W/m²). Al incluir [[B]] (2.3 μT), su densidad de energía es igual a la de [[E]] y el resultado correcto se recupera. La mitad "perdida" revela que ignorar uno de los campos produce un error sistemático del 50% en la energía.

---

## Regla de autocontrol rápido

Para verificar que no se han cometido los errores anteriores en un cálculo de ondas electromagnéticas, comprobar los siguientes puntos antes de dar el resultado por válido.

Primero: si el cálculo usa [[c]], verificar que se ha obtenido a partir de [[mu0]] y [[epsilon0]] o que se ha tomado como constante conocida. Si [[c]] aparece como un dato libre sin justificación física, reconsiderar el planteamiento.

Segundo: si el cálculo pide [[k]] o [[lambda]] a partir de una frecuencia, verificar que se ha convertido correctamente f a [[omega]] multiplicando por 2π antes de aplicar la relación de dispersión. Un resultado de [[lambda]] un factor 2π fuera del esperado señala este error.

Tercero: si el cálculo se realiza en un medio material, verificar que la ecuación de onda usada incluye la permitividad y permeabilidad relativas del medio. La velocidad de fase en un medio es [[c]]/n, no [[c]].

Cuarto: si el cálculo involucra propagación de pulsos en medios dispersivos, verificar si se necesita la velocidad de grupo en lugar de la velocidad de fase. Para pulsos de banda estrecha en el vacío, ambas coinciden; en medios dispersivos, no.

Quinto: si se calcula la energía o la intensidad de la onda, verificar que se han incluido las contribuciones de ambos campos, [[E]] y [[B]]. Una cuenta de energía con solo uno de los campos da la mitad del valor correcto.
`;export{e as default};
