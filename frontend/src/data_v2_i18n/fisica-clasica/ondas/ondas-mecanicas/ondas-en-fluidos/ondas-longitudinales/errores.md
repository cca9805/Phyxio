## Errores conceptuales


### Error 1: Creer que las moléculas viajan con la onda

**Por qué parece correcto**
El alumno observa que el sonido "llega" de un lugar a otro y generaliza que las moléculas del aire recorren esa misma distancia, por analogía con un proyectil que se desplaza de A a B.

**Por qué es incorrecto**
Las moléculas del fluido oscilan localmente alrededor de su posición de equilibrio. Lo que se propaga es el patrón de compresiones y rarefacciones, no materia. La amplitud de oscilación molecular es del orden de micrómetros, mientras que la onda puede viajar kilómetros.

**Señal de detección**
El alumno describe la onda longitudinal como un "chorro de moléculas" o afirma que el fluido se desplaza en masa hacia el receptor.

**Corrección conceptual**
La onda transporta energía y momento lineal, pero no materia neta. Las moléculas empujan a sus vecinas y retroceden, transmitiendo la perturbación sin abandonar su entorno inmediato.

**Mini-ejemplo de contraste**
Si las moléculas viajaran con el sonido, hablar frente a una vela a un metro de distancia produciría un chorro de aire sostenido que la apagaría al instante. En realidad, la llama apenas parpadea levemente porque solo recibe oscilaciones de presión diminutas.


### Error 2: Atribuir al medio la [[frecuencia]] de la onda

**Por qué parece correcto**
Al ver que [[rapidez_de_propagacion]] depende de [[modulo_de_compresibilidad_volumetrica]] y [[rho]], el alumno infiere que todas las propiedades de la onda (incluida [[frecuencia]]) quedan fijadas por el medio, como si el fluido "eligiera" a qué [[frecuencia]] vibrar.

**Por qué es incorrecto**
La [[frecuencia]] la impone la fuente oscilante. El medio determina únicamente [[rapidez_de_propagacion]]; la longitud de onda [[lambda]] se ajusta como cociente. Al cambiar de medio, [[rapidez_de_propagacion]] y [[lambda]] varían simultáneamente, pero [[frecuencia]] permanece invariable.

**Señal de detección**
El alumno escribe que al pasar una onda de aire a agua "la [[frecuencia]] cambia porque el agua tiene distinta densidad".

**Corrección conceptual**
La fuente fija el número de compresiones por segundo. En la interfaz, cada compresión que llega genera una compresión en el segundo medio al mismo ritmo. Lo que se ajusta es la separación espacial [[lambda]], no el ritmo temporal [[frecuencia]].

**Mini-ejemplo de contraste**
Un diapasón de 440 Hz emite sonido en aire y en agua. Si la [[frecuencia]] cambiara con el medio, al sumergir parcialmente el diapasón se escucharían dos notas distintas simultáneamente. En realidad se escucha la misma nota en ambos medios; solo cambia la [[lambda]].

## Errores de modelo


### Error 1: Aplicar el modelo ideal a ondas de gran amplitud

**Por qué parece correcto**
La fórmula de [[rapidez_de_propagacion]] no muestra explícitamente un límite de amplitud, así que el alumno la aplica sin restricción a cualquier perturbación, incluyendo explosiones o estampidos sónicos.

**Por qué es incorrecto**
El modelo lineal presupone que la variación de presión es mucho menor que la presión estática. Cuando esta condición se viola, la zona de compresión viaja más rápido que la de rarefacción, la onda se deforma progresivamente y se forma una onda de choque donde la rapidez deja de ser la predicha por la fórmula lineal.

**Señal de detección**
El alumno calcula [[rapidez_de_propagacion]] para una explosión cercana y obtiene el mismo valor que para una conversación normal, sin cuestionar la validez del resultado.

**Corrección conceptual**
Verificar siempre que la amplitud de presión acústica sea inferior al 1 % de la presión estática antes de aplicar la fórmula lineal. Para perturbaciones mayores, se requieren modelos no lineales como la ecuación de Burgers.

**Mini-ejemplo de contraste**
Una onda de choque generada por una explosión viaja inicialmente a más de 1000 m/s en aire, muy por encima de los 343 m/s predichos. Si se usa la fórmula lineal se subestima la rapidez real en un factor superior a tres, lo que invalida cualquier cálculo de tiempos de llegada.

## Errores matemáticos


### Error 1: Olvidar la raíz cuadrada en la relación de rapidez

**Por qué parece correcto**
El alumno recuerda que [[rapidez_de_propagacion]] depende de [[modulo_de_compresibilidad_volumetrica]] y [[rho]], y escribe una proporcionalidad directa (cociente simple) omitiendo la raíz cuadrada. Mentalmente, "más rigidez, más rapidez" parece una relación lineal.

**Por qué es incorrecto**
La dependencia real es con la raíz cuadrada del cociente. Duplicar [[modulo_de_compresibilidad_volumetrica]] a [[rho]] constante no duplica [[rapidez_de_propagacion]] sino que lo multiplica solo por un factor de aproximadamente 1.41.

**Señal de detección**
El resultado numérico del alumno es anormalmente grande (si omite la raíz y calcula el cociente directo) o incoherente con las tablas de referencia del medio.

**Corrección conceptual**
La raíz cuadrada aparece porque la ecuación de onda es de segundo orden: involucra derivadas temporales y espaciales de segundo grado. La rapidez es la raíz del cociente de los coeficientes de la ecuación diferencial, no el cociente directo.

**Mini-ejemplo de contraste**
En agua, con [[modulo_de_compresibilidad_volumetrica]] de 2.2 GPa y [[rho]] de 1000 kg/m³, el cociente directo da 2 200 000 m/s (más rápido que la luz). Aplicando la raíz cuadrada se obtiene aproximadamente 1483 m/s, valor coherente con la referencia experimental.

## Errores de interpretación


### Error 1: Interpretar [[impedancia_acustica]] como disipación de energía

**Por qué parece correcto**
El término "impedancia" evoca resistencia eléctrica, donde mayor impedancia implica mayor pérdida de energía por efecto Joule. El alumno extrapola esta analogía y cree que [[impedancia_acustica]] alta significa que el medio absorbe más energía acústica.

**Por qué es incorrecto**
La impedancia acústica [[impedancia_acustica]] mide la oposición del medio a la deformación, no la disipación. En el modelo ideal no hay pérdidas; [[impedancia_acustica]] determina cuánta energía se refleja y cuánta se transmite en una interfaz, pero no consume energía dentro del medio.

**Señal de detección**
El alumno afirma que "el agua absorbe más sonido que el aire porque su impedancia es mayor" o que "un medio con alta [[impedancia_acustica]] atenúa la onda rápidamente".

**Corrección conceptual**
La impedancia acústica [[impedancia_acustica]] gobierna la reflexión y transmisión en fronteras. La atenuación dentro del medio depende de la viscosidad y la conductividad térmica, parámetros ausentes del modelo ideal. Un medio con [[impedancia_acustica]] alta puede transmitir ondas a gran distancia si su viscosidad es baja.

**Mini-ejemplo de contraste**
El agua tiene una [[impedancia_acustica]] unas 3500 veces mayor que el aire, pero las ballenas se comunican a cientos de kilómetros bajo el agua porque la atenuación real del agua es muy baja. Si [[impedancia_acustica]] midiera absorción, la comunicación submarina sería imposible.

## Regla de autocontrol rápido

Antes de dar por válido un resultado, aplicar esta verificación en tres pasos:

1. **Orden de magnitud**: comprobar que [[rapidez_de_propagacion]] sea cercano a 343 m/s en aire o 1480 m/s en agua. Cualquier resultado que difiera por más de un factor de dos del valor de referencia del medio requiere revisión inmediata.

2. **Coherencia física**: si [[modulo_de_compresibilidad_volumetrica]] aumenta y [[rho]] se mantiene, [[rapidez_de_propagacion]] debe aumentar. Si [[rho]] aumenta y [[modulo_de_compresibilidad_volumetrica]] se mantiene, [[rapidez_de_propagacion]] debe disminuir. Verificar que el sentido de variación del resultado sea consistente con la dependencia raíz cuadrada.

3. **Raíz cuadrada aplicada**: confirmar que el resultado no sea el cociente directo de [[modulo_de_compresibilidad_volumetrica]] entre [[rho]]. Un resultado de millones de metros por segundo en un líquido delata que se omitió la raíz cuadrada.