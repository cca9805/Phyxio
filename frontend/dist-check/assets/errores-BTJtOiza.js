const e=`# Errores frecuentes: Concepto fuerza centripeta\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
Como [[Fc]] suele aparecer al final del calculo, algunos estudiantes dicen que la fuerza centripeta "aparece" por la curvatura y no por fuerzas reales.\r
\r
#### por que es incorrecto\r
La curvatura no causa por si sola la fuerza. La cadena causal correcta es inversa: las fuerzas reales generan una resultante radial [[Frad]], y esa resultante produce la aceleracion [[ac]] necesaria para curvar la trayectoria.\r
\r
#### senal de deteccion\r
La solucion agrega una fuerza centripeta nueva en el diagrama en lugar de identificar la suma radial de fuerzas reales.\r
\r
#### correccion conceptual\r
Primero dibuja fuerzas reales. Luego proyecta en radial. Solo despues nombra esa resultante como fuerza centripeta en modulo [[Fc]].\r
\r
#### mini-ejemplo\r
Mal: "hay tension, peso y ademas fuerza centripeta".\r
Bien: "la componente radial de la tension es la que hace de resultante centripeta".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
Las ecuaciones del movimiento circular son familiares y parece suficiente sustituir numeros.\r
\r
#### por que es incorrecto\r
Sin verificar radio fijo, ejes claros y unidades consistentes, el resultado puede ser numericamente bonito pero fisicamente vacio.\r
\r
#### senal de deteccion\r
El estudiante usa [[r]] como diametro o mezcla km/h con m/s sin conversion.\r
\r
#### correccion conceptual\r
Antes de sustituir, declara supuestos del modelo, define eje radial y revisa unidades.\r
\r
#### mini-ejemplo\r
Mal: usar [[v]] en km/h directo dentro de la formula de [[ac]].\r
Bien: convertir primero [[v]] a m/s y luego calcular.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[Frad]] y [[Fc]] parecen dos nombres para cosas distintas, y [[omega]] puede confundirse con frecuencia sin conversion adecuada.\r
\r
#### por que es incorrecto\r
[[Frad]] es la resultante radial de fuerzas reales y [[Fc]] es su modulo en el marco del problema. [[omega]] y frecuencia se relacionan, pero no son la misma magnitud si no se maneja [[pi]] correctamente.\r
\r
#### senal de deteccion\r
Aparecen expresiones como "[[omega]] = f" sin aclarar factor angular o se usa [[Frad]] y [[Fc]] con valores incoherentes.\r
\r
#### correccion conceptual\r
Mantener definiciones operativas: [[Frad]] para suma radial, [[Fc]] para modulo de exigencia centripeta, [[omega]] ligada al periodo [[T]] y a [[pi]].\r
\r
#### mini-ejemplo\r
Mal: "[[omega]] igual a frecuencia medida en Hz".\r
Bien: convertir con la relacion que incluye [[pi]] y [[T]].\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
Si un ejercicio previo salio bien, parece razonable repetir siempre el mismo esquema.\r
\r
#### por que es incorrecto\r
Cuando hay derrape, radio variable o cambios bruscos de rapidez, el modelo circular basico deja de describir bien la dinamica.\r
\r
#### senal de deteccion\r
Predicciones de [[Fc]] no coinciden con observacion y el error crece al aumentar [[v]].\r
\r
#### correccion conceptual\r
Declarar limites de aplicacion y cambiar a modelo extendido cuando la discrepancia sea sistematica.\r
\r
#### mini-ejemplo\r
Mal: mantener radio fijo en una trayectoria claramente ovalada.\r
Bien: reconocer radio variable y separar tramos.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
Se aprende una ecuacion y se asume universal.\r
\r
#### por que es incorrecto\r
Las relaciones de este leaf suponen condiciones geometricas y cinematicas concretas; fuera de ellas, la interpretacion falla.\r
\r
#### senal de deteccion\r
Se reporta [[ac]] con muchas cifras pero sin describir condiciones del giro.\r
\r
#### correccion conceptual\r
Siempre reportar resultado junto a supuestos: radio, velocidad, regimen y calidad de medicion.\r
\r
#### mini-ejemplo\r
Mal: publicar [[Fc]] sin indicar [[r]] usado.\r
Bien: reportar [[Fc]] con [[m]], [[v]], [[r]] y margen de incertidumbre.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
Las ecuaciones parecen simples y se despejan de memoria.\r
\r
#### por que es incorrecto\r
Un despeje mal hecho invierte dependencias y puede afirmar, por ejemplo, que aumentar [[r]] aumenta [[ac]] con [[v]] fija.\r
\r
#### senal de deteccion\r
El resultado contradice tendencias basicas del movimiento circular.\r
\r
#### correccion conceptual\r
Tras cada despeje, comprobar monotonia fisica esperada y unidades.\r
\r
#### mini-ejemplo\r
Mal: concluir que [[ac]] crece con [[r]] a [[v]] constante.\r
Bien: verificar que a [[v]] fija, mayor [[r]] reduce [[ac]].\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Se cree que [[pi]] o conversiones son detalles menores.\r
\r
#### por que es incorrecto\r
Ignorar [[pi]] o mezclar unidades cambia [[omega]] y arrastra todo el calculo de [[ac]] y [[Fc]].\r
\r
#### senal de deteccion\r
Periodo [[T]] razonable produce [[omega]] absurda o fuerza imposible para el sistema.\r
\r
#### correccion conceptual\r
Fijar SI al inicio y explicitar valor de [[pi]] cuando la relacion angular lo exija.\r
\r
#### mini-ejemplo\r
Mal: usar [[T]] en minutos sin convertir a segundos.\r
Bien: convertir [[T]] a s antes de calcular [[omega]].\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales transmiten apariencia de exactitud.\r
\r
#### por que es incorrecto\r
El modelo y las mediciones tienen incertidumbre. Reportar precision excesiva oculta la calidad real del dato.\r
\r
#### senal de deteccion\r
Se informa [[Fc]] con seis decimales sin discutir error experimental.\r
\r
#### correccion conceptual\r
Usar cifras significativas acordes con calidad de entrada y supuestos del modelo.\r
\r
#### mini-ejemplo\r
Mal: [[ac]] = 8.123456 m/s^2 en un ensayo basico.\r
Bien: [[ac]] ~ 8.1 m/s^2 con comentario de incertidumbre.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Al obtener el numero, se considera terminado el ejercicio.\r
\r
#### por que es incorrecto\r
Sin lectura causal, no se sabe que variable controla el riesgo ni como modificar el sistema.\r
\r
#### senal de deteccion\r
La solucion termina en una ecuacion sin explicar consecuencias operativas.\r
\r
#### correccion conceptual\r
Cerrar siempre con una frase causal: que cambio en [[v]], [[r]] o [[m]] aumenta o reduce la exigencia radial.\r
\r
#### mini-ejemplo\r
Mal: "[[Fc]] = 9600 N".\r
Bien: "ese valor implica alta demanda lateral; reducir [[v]] o aumentar [[r]] baja la exigencia".\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Use fuerzas reales para construir [[Frad]]?\r
- ¿Distingui claramente [[ac]], [[Frad]] y [[Fc]]?\r
- ¿Revise unidades y conversiones con [[pi]], [[T]] y [[omega]]?\r
- ¿Mis tendencias fisicas tienen sentido?\r
- ¿Cerre con interpretacion causal y limite de validez?\r
\r
Si una respuesta es no, el problema aun no esta fisicamente resuelto.\r
`;export{e as default};
