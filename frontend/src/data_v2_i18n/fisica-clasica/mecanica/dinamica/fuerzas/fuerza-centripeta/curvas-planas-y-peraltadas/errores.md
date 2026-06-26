# Errores frecuentes: Curvas planas y peraltadas

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
Como [[Frad]] suele aparecer al final de la resolucion, muchos estudiantes dicen que la curvatura "crea" una fuerza nueva.

#### por que es incorrecto
La secuencia causal correcta es opuesta: fuerzas reales generan [[Frad]], y ese resultado produce [[ac]] para curvar la trayectoria.

#### senal de deteccion
El diagrama incluye una "fuerza centripeta" adicional sin justificar que provenga de [[fs]] o de la componente radial de [[Nn]].

#### correccion conceptual
Primero dibuja fuerzas reales, luego proyecta en radial y solo despues interpreta la suma como requerimiento centripeto.

#### mini-ejemplo
Mal: "hay peso, normal, friccion y ademas fuerza centripeta".
Bien: "la proyeccion radial de fuerzas reales entrega [[Frad]]".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
Las ecuaciones son conocidas y parece suficiente sustituir datos.

#### por que es incorrecto
Sin revisar radio efectivo [[r]], regimen de [[mu]] y velocidad [[v]], el numero puede ser elegante pero fisicamente invalido.

#### senal de deteccion
La solucion no explicita supuestos del modelo ni condiciones de pavimento.

#### correccion conceptual
Antes de calcular, declarar hipotesis: curva plana o peraltada, rango de adherencia y estado de operacion.

#### mini-ejemplo
Mal: usar la expresion de peralte ideal en una curva con frenado fuerte.
Bien: verificar primero si el regimen es aproximadamente uniforme.

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[Frad]], [[fs]] y [[Nn]] aparecen en el mismo problema y se tienden a mezclar semanticamente.

#### por que es incorrecto
[[Frad]] es resultante radial; [[fs]] y [[Nn]] son fuerzas de contacto concretas que pueden contribuir a esa resultante de forma distinta segun [[th]].

#### senal de deteccion
Se afirma que aumentar [[Nn]] siempre aumenta seguridad sin analizar orientacion ni limite real de [[mu]].

#### correccion conceptual
Separar roles: demanda radial, fuerzas disponibles y descomposicion geometrica en el eje radial.

#### mini-ejemplo
Mal: "si [[Nn]] sube, siempre sobra adherencia".
Bien: "depende de como [[Nn]] y [[fs]] se proyectan para sostener [[Frad]]".

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
El esquema ideal funciona en muchos ejercicios y genera confianza excesiva.

#### por que es incorrecto
Con transitorios, derrape o superficie heterogenea, el modelo de curva uniforme deja de capturar la dinamica dominante.

#### senal de deteccion
La discrepancia entre calculo y observacion crece de forma sistematica en escenarios reales.

#### correccion conceptual
Definir un umbral de error aceptable y migrar a modelo extendido cuando se supera repetidamente.

#### mini-ejemplo
Mal: insistir con modelo ideal pese a eventos de perdida de control recurrentes.
Bien: incorporar dinamica transitoria y comportamiento no lineal de neumatico.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
Se interpreta la formula como regla universal.

#### por que es incorrecto
Toda relacion tiene dominio de validez; fuera de el, las decisiones basadas en el resultado son fragiles.

#### senal de deteccion
Se reporta [[ac]] con precision numerica alta pero sin mencionar clima, estado superficial o incertidumbre.

#### correccion conceptual
Acompanhar cada resultado con limites: rango de [[mu]], tipo de maniobra y calidad de medicion.

#### mini-ejemplo
Mal: recomendar velocidad unica para todo el ano.
Bien: definir velocidad operativa por bandas de adherencia.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
Las expresiones parecen simples y se manipulan de memoria.

#### por que es incorrecto
Un despeje mal hecho puede invertir tendencias y ocultar riesgo real.

#### senal de deteccion
Conclusiones del tipo "subir [[v]] aumenta poco la exigencia" en regimen donde la dependencia es fuerte.

#### correccion conceptual
Comprobar monotonia fisica y unidades despues de cada transformacion algebraica.

#### mini-ejemplo
Mal: tratar dependencia de [[Frad]] con [[v]] como lineal.
Bien: verificar que la demanda crece de forma pronunciada con la rapidez.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Se subestima el impacto de conversiones de velocidad o de unidades de radio.

#### por que es incorrecto
Errores de unidad cambian umbrales de seguridad y pueden invalidar decisiones de diseno.

#### senal de deteccion
Resultados incompatibles con ordenes de magnitud conocidos para curvas viales.

#### correccion conceptual
Unificar en SI al inicio y revisar consistencia dimensional antes de interpretar.

#### mini-ejemplo
Mal: usar [[v]] en km/h dentro de ecuaciones en SI.
Bien: convertir a m/s y documentar la conversion.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales dan apariencia de rigor.

#### por que es incorrecto
La precision numerica no reemplaza la incertidumbre de [[mu]], mediciones y supuestos.

#### senal de deteccion
Se reportan muchos decimales sin banda de confianza ni analisis de sensibilidad.

#### correccion conceptual
Usar cifras significativas coherentes y comunicar margen de validez.

#### mini-ejemplo
Mal: publicar velocidad maxima con seis decimales en evaluacion de campo.
Bien: reportar rango operativo con contexto de adherencia.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Al obtener un numero, se considera finalizado el trabajo.

#### por que es incorrecto
Sin lectura causal, no se identifica que variable conviene intervenir para reducir riesgo.

#### senal de deteccion
El informe termina en ecuaciones sin recomendar acciones sobre [[v]], [[r]], [[th]] o [[mu]].

#### correccion conceptual
Cerrar siempre con decisiones fisicas: que cambiar, por que y con que efecto esperado en [[Frad]].

#### mini-ejemplo
Mal: "resultado calculado, fin".
Bien: "si baja [[mu]], se reduce velocidad o se mejora geometria con peralte".

## Regla de autocontrol rápido

- ¿Identifique [[Frad]] como suma radial de fuerzas reales?
- ¿Distingui con claridad [[ac]], [[fs]] y [[Nn]]?
- ¿Declare hipotesis y limites de validez?
- ¿Verifique unidades y tendencias fisicas?
- ¿Conecte el resultado con una decision tecnica concreta?

Si alguna respuesta es no, el ejercicio aun no esta fisicamente cerrado.
