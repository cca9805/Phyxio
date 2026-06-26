# Errores frecuentes: Poleas simples

## Errores conceptuales

### Error 1: Confundir polea fija con polea móvil

**Por qué parece correcto**

Ambas son "poleas" y ambas están en el mismo capítulo del libro, así que la intuición generaliza que todas las poleas funcionan igual. La analogía visual es fuerte: ambas tienen una rueda con una cuerda. La tendencia cognitiva a categorizar por apariencia superficial lleva a pensar que si una polea multiplica fuerza, todas lo hacen.

**Por qué es incorrecto**

La diferencia física es radical: la polea fija tiene un único tramo de cuerda sosteniendo la carga, por lo que la tensión debe igualar el peso completo. La polea móvil tiene dos tramos compartiendo la carga, distribuyendo el peso. La relación ideal de fuerza muestra explícitamente que [[F]] depende inversamente de [[nSel]]. Con [[nSel]] de 1 no hay ventaja mecánica; con [[nSel]] de 2 la fuerza se reduce a la mitad.

**Señal de detección**

Si calculas que necesitas la misma fuerza para levantar una carga con polea fija que sin polea, o si asumes que cualquier polea reduce la fuerza a la mitad. También cuando describes una polea fija como "ahorrando fuerza".

**Corrección conceptual**

Distinguir siempre polea fija (cambia dirección y tiene [[nSel]] de 1) de polea móvil (multiplica fuerza y tiene [[nSel]] de 2). Contar los tramos de cuerda que sostienen directamente la carga: uno indica polea fija; dos indican polea móvil.

**Mini-ejemplo de contraste**

Para una carga de 1000 N, una polea fija exige una fuerza cercana a 1000 N; una polea móvil ideal exige unos 500 N. Si ambos resultados salen iguales, se confundió la configuración.

### Error 2: Contar mal los tramos activos

**Por qué parece correcto**

La cuerda visible parece tener muchos segmentos. Contar todos los tramos que se ven, incluyendo los que van a puntos fijos o que simplemente redirigen la cuerda, parece lógico. La intuición visual no distingue entre "sostener carga" y "redirigir cuerda".

**Por qué es incorrecto**

Solo los tramos que salen directamente de la polea móvil y tiran hacia arriba de la carga son activos. Los tramos que van a anclajes fijos no sostienen la carga; simplemente cambian la dirección del cable. La relación ideal de fuerza usa exclusivamente [[nSel]], el número de tramos soportantes.

**Señal de detección**

Obtener valores de fuerza que no tienen sentido físico, como una fuerza menor que la mitad de [[W]] en poleas simples. También cuando el cálculo de desplazamiento de cuerda no cuadra con la realidad.

**Corrección conceptual**

Identificar visualmente la polea móvil y contar solo los segmentos de cuerda que salen de ella hacia arriba sosteniendo la carga. Ignorar tramos a puntos fijos o de retorno.

**Mini-ejemplo de contraste**

Si una polea móvil simple parece tener tres tramos visibles, solo dos sostienen realmente la carga. Contar tres daría una fuerza demasiado baja y físicamente imposible para este montaje.

### Error 3: Confundir peso con masa

**Por qué parece correcto**

En el lenguaje cotidiano se usa "pesa 50 kilos" indistintamente. Libros de texto a veces dan datos en kilogramos sin especificar si es masa o peso. La confusión entre masa (cantidad de materia) y peso (fuerza gravitatoria) es profundamente arraigada.

**Por qué es incorrecto**

La relación ideal de fuerza opera con fuerzas en newtons. Si el enunciado dice "carga de 50 kg" y se usa 50 directamente en lugar de convertirlo a unos 490 N, el resultado tiene un error del orden del 80%. El peso [[W]] es una fuerza; la masa es una cantidad de materia. Están relacionadas por la gravedad, pero son conceptualmente distintas.

**Señal de detección**

Resultados de fuerza que son numéricamente pequeños (decenas) cuando deberían ser cientos. Dimensiones inconsistentes en la validación final. Respuestas absurdas como "necesito 25 N para levantar 50 kg".

**Corrección conceptual**

Convertir siempre masas a pesos antes de usar la relación. Multiplicar la masa por la gravedad para obtener peso en N. No sustituir nunca un valor de masa donde se espera una fuerza.

**Mini-ejemplo de contraste**

Una carga de 50 kg no pesa 50 N, sino cerca de 490 N. En una polea móvil ideal, la fuerza esperada ronda 245 N, no 25 N.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo ideal falla

**Por qué parece correcto**

El modelo ideal funciona en la mayoría de ejercicios de libro, generando confianza excesiva. La tendencia a buscar patrones conocidos lleva a aplicar la relación ideal de fuerza incluso cuando el sistema real tiene rozamiento significativo o la polea es muy pesada.

**Por qué es incorrecto**

El modelo asume: cuerda sin masa, polea sin masa, sin rozamiento, equilibrio estático. En sistemas reales con poleas de hierro fundido de 5 kg levantando cargas de 20 kg, o sistemas oxidados sin lubricación, las pérdidas pueden superar el 20%. La fuerza real puede quedar bastante por encima de la mitad del peso.

**Señal de detección**

Cuando la fuerza calculada teóricamente no permite mover la carga en la práctica, o cuando el sistema requiere fuerza creciente durante el ascenso (sintoma de rozamiento variable).

**Corrección conceptual**

Verificar siempre: peso de polea menor que 5% de carga? Sistema lubricado? Velocidad constante? Si alguna falla, usar modelo extendido con eficiencia o abandonar poleas simples.

**Mini-ejemplo de contraste**

Una carga ligera con una polea pesada no se comporta como el caso ideal de aula. Si la polea aporta una parte apreciable del peso total, debe incluirse en la carga efectiva.

### Error 5: Ignorar los límites del modelo

**Por qué parece correcto**

Los modelos aprendidos funcionan en contextos educativos, creando expectativa de universalidad. La generalización excesiva lleva a aplicar poleas simples a situaciones donde ya no son adecuadas, como cargas de 500 kg o alturas de 20 metros.

**Por qué es incorrecto**

El modelo de poleas simples tiene límites estructurales: cargas mayores a 150 kg generan fuerzas que exceden capacidad humana; alturas mayores a 10 m hacen impráctico el manejo de cuerdas largas; aceleraciones mayores a 0.1g introducen inercias significativas. Usar poleas simples en estos rangos es peligroso e ineficiente.

**Señal de detección**

Cuando la carga excede lo que una persona puede levantar teóricamente con la ventaja mecánica máxima de polea móvil (2:1), o cuando el recorrido de cuerda necesario supera los 20 metros.

**Corrección conceptual**

Reconocer que poleas simples son para cargas moderadas (hasta unos 100 kg) y alturas limitadas. Para aplicaciones mayores, se requieren poleas compuestas o sistemas motorizados. El límite de validez está en la ergonomía y seguridad, no solo en las ecuaciones.

**Mini-ejemplo de contraste**

Elevar 40 kg dos metros puede ser razonable con una polea móvil. Elevar 400 kg diez metros ya exige otro modelo, equipo de seguridad y normalmente accionamiento mecánico.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

**Por qué parece correcto**

Las matemáticas puras permiten despejar cualquier variable de una ecuación. La confianza en la regla de tres lleva a manipular la relación ideal de fuerza sin verificar el significado físico del resultado.

**Por qué es incorrecto**

Despejar [[W]] cuando se busca la carga máxima levantable con una fuerza dada es válido matemáticamente, pero el estudiante puede olvidar que [[W]] es el peso, no la masa, y termina diciendo "puedo levantar 50 kg" cuando el resultado equivale solo a unos 5 kg.

**Señal de detección**

Resultados con unidades inconsistentes o valores absurdos (como elevar 1000 kg con 100 N de fuerza). También confusiones entre masa y peso en la sustitución numérica.

**Corrección conceptual**

Siempre verificar dimensiones después de despejar. Fuerza en newtons, masa en kilogramos. Recordar que [[W]] en la fórmula es peso, no masa. Convertir masas a pesos multiplicando por la gravedad antes de usar la relación.

**Mini-ejemplo de contraste**

Despejar que con 200 N se puede levantar una carga de 400 N (40 kg) con polea móvil. El error: reportar "puedo levantar 400 kg". La corrección: "puedo levantar 40 kg".

### Error 7: Olvidar conversiones de unidades

**Por qué parece correcto**

En problemas de libro, a veces se dan datos directamente en newtons o se omiten conversiones. El estudiante asume que puede usar los números tal cual, olvidando que en aplicaciones reales las masas vienen en kg y las fuerzas deben calcularse.

**Por qué es incorrecto**

La relación ideal de fuerza opera con fuerzas en newtons. Si el enunciado da "carga de 50 kg" y el estudiante usa 50 en lugar de convertirlo a unos 490 N, el resultado tiene un error del 80% en términos relativos, o un error de un orden de magnitud si se compara con otros valores de fuerza.

**Señal de detección**

Resultados de fuerza que son numéricamente pequeños (decenas) cuando deberían ser cientos, o viceversa. Dimensiones inconsistentes en la validación final.

**Corrección conceptual**

Convertir todas las magnitudes a unidades SI antes de calcular. La masa en kilogramos debe transformarse en peso en newtons antes de sustituir. No sustituir nunca un valor de masa directamente donde la relación espera una fuerza.

**Mini-ejemplo de contraste**

Calcular que para levantar 50 kg se necesitan 25 N de fuerza con polea móvil (usando 50 en lugar de 490 N). El resultado correcto es 245 N. El error de un orden de magnitud es evidente al validar.

## Errores de interpretación

### Error 8: Reportar precisión excesiva

**Por qué parece correcto**

Las calculadoras dan resultados con 8 decimales. La precisión numérica da falsa confianza en la exactitud del resultado. El estudiante reporta 245.823415 N como si todas las cifras fueran significativas.

**Por qué es incorrecto**

El modelo ideal tiene incertidumbres inherentes: rozamiento no modelado (±5-10%), variación de g con la ubicación (±0.5%), pérdidas en la cuerda. El modelo es aproximadamente 5-10% preciso. Reportar más de 2-3 cifras significativas es físicamente deshonesto.

**Señal de detección**

Resultados reportados con más de 3 cifras significativas o decimales excesivos. También cuando la precisión reportada implica distinguir fuerzas que difieren en menos del 1%, lo cual es imposible de discernir en el sistema real.

**Corrección conceptual**

Ajustar la precisión del resultado a la precisión del modelo. Para poleas simples en contextos prácticos, 2-3 cifras significativas son suficientes. Reportar "aproximadamente 250 N" o "entre 240 y 260 N" es más honesto físicamente.

**Mini-ejemplo de contraste**

Reportar que se necesitan 294.1176471 N para levantar 60 kg (precisión de calculadora). La interpretación correcta: "aproximadamente 290 N" o "unos 30 kgf".

### Error 9: Omitir la interpretación física

**Por qué parece correcto**

El proceso matemático está completo: se identificaron datos, se aplicó la fórmula, se obtuvo un número. La tarea parece terminada. La cultura educativa a veces enfatiza el cálculo sobre la comprensión.

**Por qué es incorrecto**

Un número sin contexto físico es solo un número. La física explica qué significa el resultado: ¿Es manejable para un humano? ¿Cuánta cuerda debe tirarse? ¿Cuánto trabajo se realiza? ¿Es seguro? Sin esta interpretación, el conocimiento no es transferible a situaciones reales.

**Señal de detección**

Problemas resueltos que terminan con una fuerza de 294 N sin explicar si esto permite levantar la carga de forma segura, cuánta cuerda debe prepararse, o si un operario promedio puede realizar la tarea sostenidamente.

**Corrección conceptual**

Siempre traducir el resultado numérico a implicaciones físicas concretas: "294 N equivalen a levantar unos 30 kg, lo cual es manejable para un adulto promedio durante operaciones cortas, pero puede causar fatiga en tareas repetitivas. La cuerda necesaria es de 4 m para elevar 2 m, lo cual debe verificarse antes de comenzar."

**Mini-ejemplo de contraste**

Terminar un problema con "la fuerza es 500 N". La interpretación completa: "500 N equivalentes a unos 50 kgf exceden la capacidad sostenida de un trabajador promedio (300-400 N). Esta operación requiere dos personas o un sistema de poleas compuestas con mayor ventaja mecánica."

## Regla de autocontrol rápido

Verificación antes de entregar cualquier problema de poleas simples:

**¿Tiene sentido dimensional?** Verifica que la unidad del resultado coincide con la unidad esperada.

**¿He contado correctamente los tramos activos?**
Contar visualmente los segmentos que sostienen la carga, no todos los tramos visibles. Validar que [[nSel]] sea menor o igual que 2 para sistemas simples.

**¿Verifiqué las unidades antes de calcular?**
Confirmar que todos los datos están en SI. Masas convertidas a pesos (N). No usar kg donde se esperan newtons.

**¿El resultado es físicamente razonable?**
Verificar que la fuerza calculada está dentro del rango manejable para humanos (100-500 N típico). Confirmar que el desplazamiento de cuerda es práctico.

**¿Interpreté el resultado en contexto?**
Explicar si el resultado permite realizar la tarea de forma segura, si se requiere equipo adicional, o si hay consideraciones prácticas importantes.

Si alguna verificación falla, revisar el trabajo antes de considerarlo completo.
