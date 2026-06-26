const e=`\uFEFF# Errores frecuentes: Tension en cuerdas y cables

## Errores conceptuales

### Error 1: Tratar [[T]] como una fuerza fija en todo el sistema

#### por que parece correcto

Muchos problemas introductorios muestran valores unicos de tension y eso puede dar la impresion de que la cuerda siempre transmite el mismo valor en cualquier configuracion.

#### por que es incorrecto

La tension depende del modelo y del tramo. En cuerda ideal por tramos puede ser uniforme, pero en cable con masa puede variar con la posicion, y en sistemas con geometria inclinada se deben considerar componentes.

#### senal de deteccion

Se usa un unico valor de [[T]] sin verificar si hay masa distribuida, cambios de tramo o condiciones de modelo distintas.

#### correccion conceptual

Decide primero el modelo fisico. Si el sistema no es ideal, introduce la variacion espacial y revisa si necesitas [[dT_dy]] o descomposiciones por ejes.

#### mini-ejemplo

Tomar la misma tension en un cable largo con masa puede subestimar la carga en el extremo superior.

### Error 2: Confundir [[T]] con [[Tx]] o [[Ty]]

#### por que parece correcto

Al ver una sola cuerda, puede parecer que su fuerza total se usa directamente en cualquier balance de fuerzas.

#### por que es incorrecto

Las ecuaciones en cada eje requieren componentes especificas. Usar [[T]] donde corresponde [[Tx]] o [[Ty]] rompe el equilibrio vectorial.

#### senal de deteccion

La solucion cierra numericamente en un eje pero contradice el otro, o produce signos fisicamente absurdos.

#### correccion conceptual

Define ejes y angulo [[theta]] antes de sustituir. Calcula primero componentes y aplica cada una en el balance correcto.

#### mini-ejemplo

En un cable inclinado, usar [[T]] completo en el eje vertical sobreestima soporte y puede ocultar falla lateral.

### Error 3: Aplicar Atwood ideal fuera de su dominio

#### por que parece correcto

Las ecuaciones de Atwood son compactas y se aprenden temprano, por lo que se tienden a reutilizar sin verificar hipotesis.

#### por que es incorrecto

Si hay rozamiento de polea, masa de cuerda relevante o inercia de polea no despreciable, las expresiones ideales dejan de representar la fisica real.

#### senal de deteccion

La aceleracion medida difiere de forma sistematica de la predicha incluso con datos instrumentales consistentes.

#### correccion conceptual

Usa Atwood ideal solo cuando la simplificacion este justificada. Si el error supera margenes razonables, cambia a modelo extendido.

#### mini-ejemplo

Medir una aceleracion 20% menor que la teorica en montajes repetidos suele indicar perdidas no modeladas.

## Errores de modelo

### Error 4: Ignorar el papel de [[lambda]] en cables largos

#### por que parece correcto

En problemas cortos de aula el peso propio de cuerda suele despreciarse, y esa intuicion se extrapola indebidamente.

#### por que es incorrecto

En cables largos, la masa lineal cambia la tension con la altura y modifica cargas de anclaje.

#### senal de deteccion

Se obtiene el mismo valor de tension en extremos donde deberia haber diferencia por peso propio.

#### correccion conceptual

Introduce el gradiente [[dT_dy]] y valida si la hipotesis de uniformidad sigue siendo aceptable para la escala real.

#### mini-ejemplo

Un cable de gran longitud puede ser seguro en el extremo inferior y critico en el superior.

### Error 5: Mantener el modelo ideal pese a discrepancias grandes

#### por que parece correcto

Cambiar de modelo parece complicar el problema y muchos estudiantes prefieren forzar el esquema mas simple.

#### por que es incorrecto

Si el error entre medicion y prediccion supera umbrales repetidamente, el modelo ya no es informativo para diseno o diagnostico.

#### senal de deteccion

Se observan desviaciones superiores al 10% y aun asi se mantiene la misma formulacion sin ajustes.

#### correccion conceptual

Establece criterios de cambio de modelo y aplicalos de forma explicita cuando se superen.

#### mini-ejemplo

Si dos tramos teoricamente iguales muestran tensiones con diferencia estable mayor al 5%, revisa friccion de polea y pasa a modelo extendido.

## Errores matematicos

### Error 6: Descomponer con un angulo mal definido

#### por que parece correcto

Es comun tomar un angulo de forma visual sin declarar respecto a que eje esta medido.

#### por que es incorrecto

Cambiar la referencia angular intercambia seno y coseno, alterando [[Tx]] y [[Ty]] y distorsionando todo el balance.

#### senal de deteccion

Una componente resulta mayor que [[T]] o con signo contrario al sentido fisico esperado.

#### correccion conceptual

Declara expresamente el eje de referencia de [[theta]] y mantenlo hasta el final del calculo.

#### mini-ejemplo

Si [[theta]] se mide desde horizontal y usas la formula vertical de un angulo medido desde vertical, el resultado es inconsistente.

### Error 7: Perder coherencia de unidades en gradientes

#### por que parece correcto

El gradiente de tension parece una simple division y se omiten chequeos dimensionales por prisa.

#### por que es incorrecto

[[dT_dy]] tiene dimensiones de fuerza por longitud; mezclar unidades de longitud invalida interpretacion de carga distribuida.

#### senal de deteccion

Aparecen valores de gradiente imposibles o incompatibles con la masa lineal usada.

#### correccion conceptual

Convierte todas las magnitudes al SI antes de operar y verifica dimension final del gradiente.

#### mini-ejemplo

Usar metros en [[lambda]] y milimetros en derivada espacial puede inflar el resultado por tres ordenes de magnitud.

## Errores de interpretacion

### Error 8: Concluir solo con el numero sin lectura mecanica

#### por que parece correcto

Al obtener un valor numerico limpio, parece que el problema termina ahi.

#### por que es incorrecto

La fisica del leaf exige interpretar como se transmite carga, que componente gobierna y si el modelo sigue siendo valido.

#### senal de deteccion

La solucion presenta [[T]] pero no explica impacto en anclaje, soporte o seguridad.

#### correccion conceptual

Cierra siempre con una frase causal: que exige el sistema, que transmite la cuerda y que riesgo aparece si cambia el regimen.

#### mini-ejemplo

Saber que [[T]] vale 5 kN sin distinguir [[Tx]] y [[Ty]] no permite decidir capacidad de anclaje lateral.

### Error 9: Sobreestimar precision de resultados idealizados

#### por que parece correcto

Un resultado con muchos decimales transmite falsa sensacion de exactitud.

#### por que es incorrecto

El modelo ideal tiene incertidumbre estructural; reportar precision excesiva puede ocultar limites de validez.

#### senal de deteccion

Se informa tension con cuatro decimales pese a datos de entrada aproximados o con dispersion experimental.

#### correccion conceptual

Ajusta cifras significativas al nivel de incertidumbre del modelo y del dato medido.

#### mini-ejemplo

Reportar 36.7539 N no aporta valor si el error experimental es del orden de 0.5 N.

## Regla de autocontrol rapido

Antes de cerrar un ejercicio, verifica cinco puntos: modelo elegido, ejes y signos consistentes, uso correcto de [[T]] frente a [[Tx]] y [[Ty]], coherencia dimensional de resultados incluyendo [[dT_dy]], e interpretacion final ligada a validez fisica. Si falla uno, el resultado no esta listo para decision tecnica.\r
`;export{e as default};
