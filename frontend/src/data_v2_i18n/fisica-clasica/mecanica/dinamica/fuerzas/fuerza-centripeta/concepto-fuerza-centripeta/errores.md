# Errores frecuentes: Concepto fuerza centripeta

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
Como [[Fc]] suele aparecer al final del calculo, algunos estudiantes dicen que la fuerza centripeta "aparece" por la curvatura y no por fuerzas reales.

#### por que es incorrecto
La curvatura no causa por si sola la fuerza. La cadena causal correcta es inversa: las fuerzas reales generan una resultante radial [[Frad]], y esa resultante produce la aceleracion [[ac]] necesaria para curvar la trayectoria.

#### senal de deteccion
La solucion agrega una fuerza centripeta nueva en el diagrama en lugar de identificar la suma radial de fuerzas reales.

#### correccion conceptual
Primero dibuja fuerzas reales. Luego proyecta en radial. Solo despues nombra esa resultante como fuerza centripeta en modulo [[Fc]].

#### mini-ejemplo
Mal: "hay tension, peso y ademas fuerza centripeta".
Bien: "la componente radial de la tension es la que hace de resultante centripeta".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
Las ecuaciones del movimiento circular son familiares y parece suficiente sustituir numeros.

#### por que es incorrecto
Sin verificar radio fijo, ejes claros y unidades consistentes, el resultado puede ser numericamente bonito pero fisicamente vacio.

#### senal de deteccion
El estudiante usa [[r]] como diametro o mezcla km/h con m/s sin conversion.

#### correccion conceptual
Antes de sustituir, declara supuestos del modelo, define eje radial y revisa unidades.

#### mini-ejemplo
Mal: usar [[v]] en km/h directo dentro de la formula de [[ac]].
Bien: convertir primero [[v]] a m/s y luego calcular.

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[Frad]] y [[Fc]] parecen dos nombres para cosas distintas, y [[omega]] puede confundirse con frecuencia sin conversion adecuada.

#### por que es incorrecto
[[Frad]] es la resultante radial de fuerzas reales y [[Fc]] es su modulo en el marco del problema. [[omega]] y frecuencia se relacionan, pero no son la misma magnitud si no se maneja [[pi]] correctamente.

#### senal de deteccion
Aparecen expresiones como "[[omega]] = f" sin aclarar factor angular o se usa [[Frad]] y [[Fc]] con valores incoherentes.

#### correccion conceptual
Mantener definiciones operativas: [[Frad]] para suma radial, [[Fc]] para modulo de exigencia centripeta, [[omega]] ligada al periodo [[T]] y a [[pi]].

#### mini-ejemplo
Mal: "[[omega]] igual a frecuencia medida en Hz".
Bien: convertir con la relacion que incluye [[pi]] y [[T]].

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
Si un ejercicio previo salio bien, parece razonable repetir siempre el mismo esquema.

#### por que es incorrecto
Cuando hay derrape, radio variable o cambios bruscos de rapidez, el modelo circular basico deja de describir bien la dinamica.

#### senal de deteccion
Predicciones de [[Fc]] no coinciden con observacion y el error crece al aumentar [[v]].

#### correccion conceptual
Declarar limites de aplicacion y cambiar a modelo extendido cuando la discrepancia sea sistematica.

#### mini-ejemplo
Mal: mantener radio fijo en una trayectoria claramente ovalada.
Bien: reconocer radio variable y separar tramos.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
Se aprende una ecuacion y se asume universal.

#### por que es incorrecto
Las relaciones de este leaf suponen condiciones geometricas y cinematicas concretas; fuera de ellas, la interpretacion falla.

#### senal de deteccion
Se reporta [[ac]] con muchas cifras pero sin describir condiciones del giro.

#### correccion conceptual
Siempre reportar resultado junto a supuestos: radio, velocidad, regimen y calidad de medicion.

#### mini-ejemplo
Mal: publicar [[Fc]] sin indicar [[r]] usado.
Bien: reportar [[Fc]] con [[m]], [[v]], [[r]] y margen de incertidumbre.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
Las ecuaciones parecen simples y se despejan de memoria.

#### por que es incorrecto
Un despeje mal hecho invierte dependencias y puede afirmar, por ejemplo, que aumentar [[r]] aumenta [[ac]] con [[v]] fija.

#### senal de deteccion
El resultado contradice tendencias basicas del movimiento circular.

#### correccion conceptual
Tras cada despeje, comprobar monotonia fisica esperada y unidades.

#### mini-ejemplo
Mal: concluir que [[ac]] crece con [[r]] a [[v]] constante.
Bien: verificar que a [[v]] fija, mayor [[r]] reduce [[ac]].

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Se cree que [[pi]] o conversiones son detalles menores.

#### por que es incorrecto
Ignorar [[pi]] o mezclar unidades cambia [[omega]] y arrastra todo el calculo de [[ac]] y [[Fc]].

#### senal de deteccion
Periodo [[T]] razonable produce [[omega]] absurda o fuerza imposible para el sistema.

#### correccion conceptual
Fijar SI al inicio y explicitar valor de [[pi]] cuando la relacion angular lo exija.

#### mini-ejemplo
Mal: usar [[T]] en minutos sin convertir a segundos.
Bien: convertir [[T]] a s antes de calcular [[omega]].

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales transmiten apariencia de exactitud.

#### por que es incorrecto
El modelo y las mediciones tienen incertidumbre. Reportar precision excesiva oculta la calidad real del dato.

#### senal de deteccion
Se informa [[Fc]] con seis decimales sin discutir error experimental.

#### correccion conceptual
Usar cifras significativas acordes con calidad de entrada y supuestos del modelo.

#### mini-ejemplo
Mal: [[ac]] = 8.123456 m/s^2 en un ensayo basico.
Bien: [[ac]] ~ 8.1 m/s^2 con comentario de incertidumbre.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Al obtener el numero, se considera terminado el ejercicio.

#### por que es incorrecto
Sin lectura causal, no se sabe que variable controla el riesgo ni como modificar el sistema.

#### senal de deteccion
La solucion termina en una ecuacion sin explicar consecuencias operativas.

#### correccion conceptual
Cerrar siempre con una frase causal: que cambio en [[v]], [[r]] o [[m]] aumenta o reduce la exigencia radial.

#### mini-ejemplo
Mal: "[[Fc]] = 9600 N".
Bien: "ese valor implica alta demanda lateral; reducir [[v]] o aumentar [[r]] baja la exigencia".

## Regla de autocontrol rápido

- ¿Use fuerzas reales para construir [[Frad]]?
- ¿Distingui claramente [[ac]], [[Frad]] y [[Fc]]?
- ¿Revise unidades y conversiones con [[pi]], [[T]] y [[omega]]?
- ¿Mis tendencias fisicas tienen sentido?
- ¿Cerre con interpretacion causal y limite de validez?

Si una respuesta es no, el problema aun no esta fisicamente resuelto.
