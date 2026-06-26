# Errores frecuentes: Rozamiento estatico

## Errores conceptuales

### Error 1: Igualar siempre [[fs]] con [[fsmax]]

#### por que parece correcto

Muchos ejercicios muestran el caso límite, así que el estudiante acaba asociando el rozamiento estático con su valor máximo y deja de pensar en el carácter ajustable de la interacción.

#### por que es incorrecto

[[fs]] es la respuesta real del contacto en un caso concreto, mientras que [[fsmax]] es solo la capacidad máxima antes del deslizamiento. Confundir ambas magnitudes borra la diferencia entre estado y umbral.

#### senal de deteccion

Al resolver, aparece [[fs]] igual a [[fsmax]] incluso cuando el problema no dice que el sistema esté al borde de deslizar.

#### correccion conceptual

Primero identifica la demanda tangencial [[Ft]]. Luego compara esa demanda con [[fsmax]]. Solo si el sistema está justo en el umbral tiene sentido que [[fs]] alcance su valor máximo.

#### mini-ejemplo

Si una caja recibe una demanda de 20 N y el umbral es 60 N, lo correcto es [[fs]] = 20 N. Tomar [[fs]] = 60 N inventa una fuerza que el problema no necesita.

### Error 2: Pensar que [[mus]] genera por si solo la fuerza de rozamiento

#### por que parece correcto

Como [[mus]] aparece en la fórmula del umbral, parece natural creer que basta con conocer el coeficiente para saber la fuerza de rozamiento.

#### por que es incorrecto

[[mus]] no actúa solo. La capacidad del contacto depende de [[mus]] y también de [[N]]. Además, la fuerza real [[fs]] solo aparece en respuesta a una demanda tangencial [[Ft]].

#### senal de deteccion

El estudiante habla de una superficie “con mucho rozamiento” sin mencionar la carga normal ni la fuerza tangencial que intenta mover el cuerpo.

#### correccion conceptual

Interpreta [[mus]] como una propiedad efectiva del par de materiales dentro del régimen estático, no como una fuerza. La fuerza real surge al combinar capacidad y demanda.

#### mini-ejemplo

Dos superficies con el mismo [[mus]] no sostienen la misma adherencia si una trabaja con [[N]] pequeña y la otra con [[N]] mucho mayor. El umbral cambia porque cambia la compresión del contacto.

### Error 3: Aplicar el modelo sin decidir el regimen

#### por que parece correcto

El alumno a veces quiere calcular rápido y asume que toda fórmula vale igual en cualquier situación.

#### por que es incorrecto

El modelo estático solo vale mientras no haya deslizamiento. Si la demanda [[Ft]] supera [[fsmax]], el problema cambió de régimen y ya no se resuelve con la misma hipótesis.

#### senal de deteccion

Aparece una fuerza requerida mayor que [[fsmax]] y aun así el estudiante concluye que el sistema sigue en reposo relativo.

#### correccion conceptual

Haz siempre la comparación de régimen antes de cerrar el resultado. Esa comparación no es un detalle final; es la condición de validez del modelo.

#### mini-ejemplo

Si el cálculo exige 90 N y el umbral del contacto es 70 N, la conclusión correcta no es que [[fs]] valga 90 N, sino que comienza el deslizamiento.

## Errores de modelo

### Error 4: Ignorar que la capacidad del contacto puede cambiar

#### por que parece correcto

En problemas de libro, [[mus]] y [[N]] suelen parecer constantes, así que el estudiante traslada esa imagen rígida a toda situación real.

#### por que es incorrecto

En montajes reales, vibración, suciedad, humedad, desgaste o redistribución de cargas pueden modificar el valor efectivo de [[mus]] o de [[N]], y con ello alteran [[fsmax]].

#### senal de deteccion

Se usa el mismo umbral aunque el problema mencione cambio de superficie, inclinación variable o perturbaciones externas.

#### correccion conceptual

Antes de fijar el modelo, revisa si las condiciones del contacto permanecen realmente estables durante el intervalo analizado.

#### mini-ejemplo

Una caja puede sostenerse sobre una mesa seca y fallar sobre la misma mesa con polvo fino. La geometría no cambió, pero el contacto efectivo sí.

### Error 5: Leer la normal [[N]] como un detalle secundario

#### por que parece correcto

En algunos ejercicios, la normal se obtiene casi de forma automática y parece una magnitud auxiliar sin relevancia conceptual propia.

#### por que es incorrecto

[[N]] fija la escala de la capacidad estática. Un cambio en [[N]] puede modificar por completo el margen entre demanda y umbral, incluso si [[Ft]] permanece igual.

#### senal de deteccion

El estudiante calcula [[Ft]] con cuidado, pero no revisa cómo cambia [[N]] cuando el sistema se inclina, acelera o redistribuye peso.

#### correccion conceptual

Trata [[N]] como una magnitud estructural del contacto. Cada vez que cambie la geometría o la carga, revisa de nuevo el umbral [[fsmax]].

#### mini-ejemplo

Una pieza puede permanecer inmóvil en horizontal y comenzar a deslizar al inclinarse, no porque aumente mucho la demanda, sino porque la normal disminuye y con ella baja [[fsmax]].

## Errores matemáticos

### Error 6: Cerrar mal la comparacion entre demanda y umbral

#### por que parece correcto

Después de calcular varias magnitudes, el alumno puede pensar que comparar valores es un paso trivial y hacerla de manera descuidada.

#### por que es incorrecto

Una comparación mal leída cambia el régimen completo del problema. No es lo mismo quedar claramente por debajo del umbral que quedar por encima o prácticamente encima de él.

#### senal de deteccion

La cuenta numérica es correcta, pero la conclusión sobre adherencia o deslizamiento no coincide con la desigualdad obtenida.

#### correccion conceptual

Escribe de forma explícita qué magnitud representa la demanda y cuál representa la capacidad, y compara ambas antes de redactar la conclusión física.

#### mini-ejemplo

Si [[Ft]] vale 68 N y [[fsmax]] vale 70 N, la conclusión no es “desliza”, sino “permanece adherido con margen pequeño”.

## Errores de interpretación

### Error 7: Terminar el problema con un numero y sin lectura fisica

#### por que parece correcto

Cuando aparece un valor numérico claro, parece que el ejercicio ya terminó y que no hace falta justificar nada más.

#### por que es incorrecto

La física del leaf no está solo en el número, sino en decidir si el contacto tiene margen, si está al borde del deslizamiento o si ya salió del régimen estático.

#### senal de deteccion

La solución entrega un valor para [[fs]] o [[fsmax]] pero no dice qué implica para la adherencia del sistema.

#### correccion conceptual

Después del cálculo, traduce siempre el resultado a lenguaje causal: qué fuerza exige el entorno, qué puede sostener el contacto y qué régimen queda finalmente confirmado.

#### mini-ejemplo

Decir “[[fsmax]] vale 80 N” es incompleto. La lectura útil es: “como la demanda es 50 N, el sistema sigue adherido y aún conserva margen antes de deslizar”.

## Regla de autocontrol rapido

Después de resolver, revisa cinco preguntas breves: ¿identifiqué la demanda [[Ft]]?, ¿calculé correctamente [[fsmax]] a partir de [[mus]] y [[N]]?, ¿comparé ambas magnitudes antes de decidir el régimen?, ¿evité confundir [[fs]] con [[fsmax]]?, ¿expliqué si el sistema mantiene adherencia o empieza a deslizar? Si una de estas respuestas es negativa, la solución todavía no está cerrada.
