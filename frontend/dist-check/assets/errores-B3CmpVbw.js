const e=`# Errores frecuentes: Poleas simples\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir polea fija con polea móvil\r
\r
**Por qué parece correcto**\r
\r
Ambas son "poleas" y ambas están en el mismo capítulo del libro, así que la intuición generaliza que todas las poleas funcionan igual. La analogía visual es fuerte: ambas tienen una rueda con una cuerda. La tendencia cognitiva a categorizar por apariencia superficial lleva a pensar que si una polea multiplica fuerza, todas lo hacen.\r
\r
**Por qué es incorrecto**\r
\r
La diferencia física es radical: la polea fija tiene un único tramo de cuerda sosteniendo la carga, por lo que la tensión debe igualar el peso completo. La polea móvil tiene dos tramos compartiendo la carga, distribuyendo el peso. La relación ideal de fuerza muestra explícitamente que [[F]] depende inversamente de [[nSel]]. Con [[nSel]] de 1 no hay ventaja mecánica; con [[nSel]] de 2 la fuerza se reduce a la mitad.
\r
**Señal de detección**\r
\r
Si calculas que necesitas la misma fuerza para levantar una carga con polea fija que sin polea, o si asumes que cualquier polea reduce la fuerza a la mitad. También cuando describes una polea fija como "ahorrando fuerza".\r
\r
**Corrección conceptual**\r
\r
Distinguir siempre polea fija (cambia dirección y tiene [[nSel]] de 1) de polea móvil (multiplica fuerza y tiene [[nSel]] de 2). Contar los tramos de cuerda que sostienen directamente la carga: uno indica polea fija; dos indican polea móvil.

**Mini-ejemplo de contraste**

Para una carga de 1000 N, una polea fija exige una fuerza cercana a 1000 N; una polea móvil ideal exige unos 500 N. Si ambos resultados salen iguales, se confundió la configuración.
\r
### Error 2: Contar mal los tramos activos
\r
**Por qué parece correcto**\r
\r
La cuerda visible parece tener muchos segmentos. Contar todos los tramos que se ven, incluyendo los que van a puntos fijos o que simplemente redirigen la cuerda, parece lógico. La intuición visual no distingue entre "sostener carga" y "redirigir cuerda".\r
\r
**Por qué es incorrecto**\r
\r
Solo los tramos que salen directamente de la polea móvil y tiran hacia arriba de la carga son activos. Los tramos que van a anclajes fijos no sostienen la carga; simplemente cambian la dirección del cable. La relación ideal de fuerza usa exclusivamente [[nSel]], el número de tramos soportantes.
\r
**Señal de detección**\r
\r
Obtener valores de fuerza que no tienen sentido físico, como una fuerza menor que la mitad de [[W]] en poleas simples. También cuando el cálculo de desplazamiento de cuerda no cuadra con la realidad.
\r
**Corrección conceptual**\r
\r
Identificar visualmente la polea móvil y contar solo los segmentos de cuerda que salen de ella hacia arriba sosteniendo la carga. Ignorar tramos a puntos fijos o de retorno.

**Mini-ejemplo de contraste**

Si una polea móvil simple parece tener tres tramos visibles, solo dos sostienen realmente la carga. Contar tres daría una fuerza demasiado baja y físicamente imposible para este montaje.
\r
### Error 3: Confundir peso con masa
\r
**Por qué parece correcto**\r
\r
En el lenguaje cotidiano se usa "pesa 50 kilos" indistintamente. Libros de texto a veces dan datos en kilogramos sin especificar si es masa o peso. La confusión entre masa (cantidad de materia) y peso (fuerza gravitatoria) es profundamente arraigada.\r
\r
**Por qué es incorrecto**\r
\r
La relación ideal de fuerza opera con fuerzas en newtons. Si el enunciado dice "carga de 50 kg" y se usa 50 directamente en lugar de convertirlo a unos 490 N, el resultado tiene un error del orden del 80%. El peso [[W]] es una fuerza; la masa es una cantidad de materia. Están relacionadas por la gravedad, pero son conceptualmente distintas.
\r
**Señal de detección**\r
\r
Resultados de fuerza que son numéricamente pequeños (decenas) cuando deberían ser cientos. Dimensiones inconsistentes en la validación final. Respuestas absurdas como "necesito 25 N para levantar 50 kg".\r
\r
**Corrección conceptual**\r
\r
Convertir siempre masas a pesos antes de usar la relación. Multiplicar la masa por la gravedad para obtener peso en N. No sustituir nunca un valor de masa donde se espera una fuerza.

**Mini-ejemplo de contraste**

Una carga de 50 kg no pesa 50 N, sino cerca de 490 N. En una polea móvil ideal, la fuerza esperada ronda 245 N, no 25 N.
\r
## Errores de modelo
\r
### Error 4: No reconocer cuándo el modelo ideal falla\r
\r
**Por qué parece correcto**\r
\r
El modelo ideal funciona en la mayoría de ejercicios de libro, generando confianza excesiva. La tendencia a buscar patrones conocidos lleva a aplicar la relación ideal de fuerza incluso cuando el sistema real tiene rozamiento significativo o la polea es muy pesada.
\r
**Por qué es incorrecto**\r
\r
El modelo asume: cuerda sin masa, polea sin masa, sin rozamiento, equilibrio estático. En sistemas reales con poleas de hierro fundido de 5 kg levantando cargas de 20 kg, o sistemas oxidados sin lubricación, las pérdidas pueden superar el 20%. La fuerza real puede quedar bastante por encima de la mitad del peso.
\r
**Señal de detección**\r
\r
Cuando la fuerza calculada teóricamente no permite mover la carga en la práctica, o cuando el sistema requiere fuerza creciente durante el ascenso (sintoma de rozamiento variable).\r
\r
**Corrección conceptual**\r
\r
Verificar siempre: peso de polea menor que 5% de carga? Sistema lubricado? Velocidad constante? Si alguna falla, usar modelo extendido con eficiencia o abandonar poleas simples.

**Mini-ejemplo de contraste**

Una carga ligera con una polea pesada no se comporta como el caso ideal de aula. Si la polea aporta una parte apreciable del peso total, debe incluirse en la carga efectiva.
\r
### Error 5: Ignorar los límites del modelo
\r
**Por qué parece correcto**\r
\r
Los modelos aprendidos funcionan en contextos educativos, creando expectativa de universalidad. La generalización excesiva lleva a aplicar poleas simples a situaciones donde ya no son adecuadas, como cargas de 500 kg o alturas de 20 metros.\r
\r
**Por qué es incorrecto**\r
\r
El modelo de poleas simples tiene límites estructurales: cargas mayores a 150 kg generan fuerzas que exceden capacidad humana; alturas mayores a 10 m hacen impráctico el manejo de cuerdas largas; aceleraciones mayores a 0.1g introducen inercias significativas. Usar poleas simples en estos rangos es peligroso e ineficiente.\r
\r
**Señal de detección**\r
\r
Cuando la carga excede lo que una persona puede levantar teóricamente con la ventaja mecánica máxima de polea móvil (2:1), o cuando el recorrido de cuerda necesario supera los 20 metros.\r
\r
**Corrección conceptual**\r
\r
Reconocer que poleas simples son para cargas moderadas (hasta unos 100 kg) y alturas limitadas. Para aplicaciones mayores, se requieren poleas compuestas o sistemas motorizados. El límite de validez está en la ergonomía y seguridad, no solo en las ecuaciones.

**Mini-ejemplo de contraste**

Elevar 40 kg dos metros puede ser razonable con una polea móvil. Elevar 400 kg diez metros ya exige otro modelo, equipo de seguridad y normalmente accionamiento mecánico.
\r
## Errores matemáticos
\r
### Error 6: Despejes algebraicos descuidados\r
\r
**Por qué parece correcto**\r
\r
Las matemáticas puras permiten despejar cualquier variable de una ecuación. La confianza en la regla de tres lleva a manipular la relación ideal de fuerza sin verificar el significado físico del resultado.
\r
**Por qué es incorrecto**\r
\r
Despejar [[W]] cuando se busca la carga máxima levantable con una fuerza dada es válido matemáticamente, pero el estudiante puede olvidar que [[W]] es el peso, no la masa, y termina diciendo "puedo levantar 50 kg" cuando el resultado equivale solo a unos 5 kg.
\r
**Señal de detección**\r
\r
Resultados con unidades inconsistentes o valores absurdos (como elevar 1000 kg con 100 N de fuerza). También confusiones entre masa y peso en la sustitución numérica.\r
\r
**Corrección conceptual**\r
\r
Siempre verificar dimensiones después de despejar. Fuerza en newtons, masa en kilogramos. Recordar que [[W]] en la fórmula es peso, no masa. Convertir masas a pesos multiplicando por la gravedad antes de usar la relación.
\r
**Mini-ejemplo de contraste**\r
\r
Despejar que con 200 N se puede levantar una carga de 400 N (40 kg) con polea móvil. El error: reportar "puedo levantar 400 kg". La corrección: "puedo levantar 40 kg".\r
\r
### Error 7: Olvidar conversiones de unidades\r
\r
**Por qué parece correcto**\r
\r
En problemas de libro, a veces se dan datos directamente en newtons o se omiten conversiones. El estudiante asume que puede usar los números tal cual, olvidando que en aplicaciones reales las masas vienen en kg y las fuerzas deben calcularse.\r
\r
**Por qué es incorrecto**\r
\r
La relación ideal de fuerza opera con fuerzas en newtons. Si el enunciado da "carga de 50 kg" y el estudiante usa 50 en lugar de convertirlo a unos 490 N, el resultado tiene un error del 80% en términos relativos, o un error de un orden de magnitud si se compara con otros valores de fuerza.
\r
**Señal de detección**\r
\r
Resultados de fuerza que son numéricamente pequeños (decenas) cuando deberían ser cientos, o viceversa. Dimensiones inconsistentes en la validación final.\r
\r
**Corrección conceptual**\r
\r
Convertir todas las magnitudes a unidades SI antes de calcular. La masa en kilogramos debe transformarse en peso en newtons antes de sustituir. No sustituir nunca un valor de masa directamente donde la relación espera una fuerza.
\r
**Mini-ejemplo de contraste**\r
\r
Calcular que para levantar 50 kg se necesitan 25 N de fuerza con polea móvil (usando 50 en lugar de 490 N). El resultado correcto es 245 N. El error de un orden de magnitud es evidente al validar.\r
\r
## Errores de interpretación\r
\r
### Error 8: Reportar precisión excesiva\r
\r
**Por qué parece correcto**\r
\r
Las calculadoras dan resultados con 8 decimales. La precisión numérica da falsa confianza en la exactitud del resultado. El estudiante reporta 245.823415 N como si todas las cifras fueran significativas.\r
\r
**Por qué es incorrecto**\r
\r
El modelo ideal tiene incertidumbres inherentes: rozamiento no modelado (±5-10%), variación de g con la ubicación (±0.5%), pérdidas en la cuerda. El modelo es aproximadamente 5-10% preciso. Reportar más de 2-3 cifras significativas es físicamente deshonesto.\r
\r
**Señal de detección**\r
\r
Resultados reportados con más de 3 cifras significativas o decimales excesivos. También cuando la precisión reportada implica distinguir fuerzas que difieren en menos del 1%, lo cual es imposible de discernir en el sistema real.\r
\r
**Corrección conceptual**\r
\r
Ajustar la precisión del resultado a la precisión del modelo. Para poleas simples en contextos prácticos, 2-3 cifras significativas son suficientes. Reportar "aproximadamente 250 N" o "entre 240 y 260 N" es más honesto físicamente.\r
\r
**Mini-ejemplo de contraste**\r
\r
Reportar que se necesitan 294.1176471 N para levantar 60 kg (precisión de calculadora). La interpretación correcta: "aproximadamente 290 N" o "unos 30 kgf".\r
\r
### Error 9: Omitir la interpretación física\r
\r
**Por qué parece correcto**\r
\r
El proceso matemático está completo: se identificaron datos, se aplicó la fórmula, se obtuvo un número. La tarea parece terminada. La cultura educativa a veces enfatiza el cálculo sobre la comprensión.\r
\r
**Por qué es incorrecto**\r
\r
Un número sin contexto físico es solo un número. La física explica qué significa el resultado: ¿Es manejable para un humano? ¿Cuánta cuerda debe tirarse? ¿Cuánto trabajo se realiza? ¿Es seguro? Sin esta interpretación, el conocimiento no es transferible a situaciones reales.\r
\r
**Señal de detección**\r
\r
Problemas resueltos que terminan con una fuerza de 294 N sin explicar si esto permite levantar la carga de forma segura, cuánta cuerda debe prepararse, o si un operario promedio puede realizar la tarea sostenidamente.
\r
**Corrección conceptual**\r
\r
Siempre traducir el resultado numérico a implicaciones físicas concretas: "294 N equivalen a levantar unos 30 kg, lo cual es manejable para un adulto promedio durante operaciones cortas, pero puede causar fatiga en tareas repetitivas. La cuerda necesaria es de 4 m para elevar 2 m, lo cual debe verificarse antes de comenzar."\r
\r
**Mini-ejemplo de contraste**\r
\r
Terminar un problema con "la fuerza es 500 N". La interpretación completa: "500 N equivalentes a unos 50 kgf exceden la capacidad sostenida de un trabajador promedio (300-400 N). Esta operación requiere dos personas o un sistema de poleas compuestas con mayor ventaja mecánica."\r
\r
## Regla de autocontrol rápido\r
\r
Verificación antes de entregar cualquier problema de poleas simples:\r
\r
**¿Tiene sentido dimensional?** Verifica que la unidad del resultado coincide con la unidad esperada.
\r
**¿He contado correctamente los tramos activos?**\r
Contar visualmente los segmentos que sostienen la carga, no todos los tramos visibles. Validar que [[nSel]] sea menor o igual que 2 para sistemas simples.
\r
**¿Verifiqué las unidades antes de calcular?**\r
Confirmar que todos los datos están en SI. Masas convertidas a pesos (N). No usar kg donde se esperan newtons.\r
\r
**¿El resultado es físicamente razonable?**\r
Verificar que la fuerza calculada está dentro del rango manejable para humanos (100-500 N típico). Confirmar que el desplazamiento de cuerda es práctico.\r
\r
**¿Interpreté el resultado en contexto?**\r
Explicar si el resultado permite realizar la tarea de forma segura, si se requiere equipo adicional, o si hay consideraciones prácticas importantes.\r
\r
Si alguna verificación falla, revisar el trabajo antes de considerarlo completo.\r
`;export{e as default};
