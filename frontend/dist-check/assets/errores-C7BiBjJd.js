const e=`# Errores frecuentes: Curvas planas y peraltadas\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
Como [[Frad]] suele aparecer al final de la resolucion, muchos estudiantes dicen que la curvatura "crea" una fuerza nueva.\r
\r
#### por que es incorrecto\r
La secuencia causal correcta es opuesta: fuerzas reales generan [[Frad]], y ese resultado produce [[ac]] para curvar la trayectoria.\r
\r
#### senal de deteccion\r
El diagrama incluye una "fuerza centripeta" adicional sin justificar que provenga de [[fs]] o de la componente radial de [[Nn]].\r
\r
#### correccion conceptual\r
Primero dibuja fuerzas reales, luego proyecta en radial y solo despues interpreta la suma como requerimiento centripeto.\r
\r
#### mini-ejemplo\r
Mal: "hay peso, normal, friccion y ademas fuerza centripeta".\r
Bien: "la proyeccion radial de fuerzas reales entrega [[Frad]]".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
Las ecuaciones son conocidas y parece suficiente sustituir datos.\r
\r
#### por que es incorrecto\r
Sin revisar radio efectivo [[r]], regimen de [[mu]] y velocidad [[v]], el numero puede ser elegante pero fisicamente invalido.\r
\r
#### senal de deteccion\r
La solucion no explicita supuestos del modelo ni condiciones de pavimento.\r
\r
#### correccion conceptual\r
Antes de calcular, declarar hipotesis: curva plana o peraltada, rango de adherencia y estado de operacion.\r
\r
#### mini-ejemplo\r
Mal: usar la expresion de peralte ideal en una curva con frenado fuerte.\r
Bien: verificar primero si el regimen es aproximadamente uniforme.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[Frad]], [[fs]] y [[Nn]] aparecen en el mismo problema y se tienden a mezclar semanticamente.\r
\r
#### por que es incorrecto\r
[[Frad]] es resultante radial; [[fs]] y [[Nn]] son fuerzas de contacto concretas que pueden contribuir a esa resultante de forma distinta segun [[th]].\r
\r
#### senal de deteccion\r
Se afirma que aumentar [[Nn]] siempre aumenta seguridad sin analizar orientacion ni limite real de [[mu]].\r
\r
#### correccion conceptual\r
Separar roles: demanda radial, fuerzas disponibles y descomposicion geometrica en el eje radial.\r
\r
#### mini-ejemplo\r
Mal: "si [[Nn]] sube, siempre sobra adherencia".\r
Bien: "depende de como [[Nn]] y [[fs]] se proyectan para sostener [[Frad]]".\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
El esquema ideal funciona en muchos ejercicios y genera confianza excesiva.\r
\r
#### por que es incorrecto\r
Con transitorios, derrape o superficie heterogenea, el modelo de curva uniforme deja de capturar la dinamica dominante.\r
\r
#### senal de deteccion\r
La discrepancia entre calculo y observacion crece de forma sistematica en escenarios reales.\r
\r
#### correccion conceptual\r
Definir un umbral de error aceptable y migrar a modelo extendido cuando se supera repetidamente.\r
\r
#### mini-ejemplo\r
Mal: insistir con modelo ideal pese a eventos de perdida de control recurrentes.\r
Bien: incorporar dinamica transitoria y comportamiento no lineal de neumatico.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
Se interpreta la formula como regla universal.\r
\r
#### por que es incorrecto\r
Toda relacion tiene dominio de validez; fuera de el, las decisiones basadas en el resultado son fragiles.\r
\r
#### senal de deteccion\r
Se reporta [[ac]] con precision numerica alta pero sin mencionar clima, estado superficial o incertidumbre.\r
\r
#### correccion conceptual\r
Acompanhar cada resultado con limites: rango de [[mu]], tipo de maniobra y calidad de medicion.\r
\r
#### mini-ejemplo\r
Mal: recomendar velocidad unica para todo el ano.\r
Bien: definir velocidad operativa por bandas de adherencia.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
Las expresiones parecen simples y se manipulan de memoria.\r
\r
#### por que es incorrecto\r
Un despeje mal hecho puede invertir tendencias y ocultar riesgo real.\r
\r
#### senal de deteccion\r
Conclusiones del tipo "subir [[v]] aumenta poco la exigencia" en regimen donde la dependencia es fuerte.\r
\r
#### correccion conceptual\r
Comprobar monotonia fisica y unidades despues de cada transformacion algebraica.\r
\r
#### mini-ejemplo\r
Mal: tratar dependencia de [[Frad]] con [[v]] como lineal.\r
Bien: verificar que la demanda crece de forma pronunciada con la rapidez.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Se subestima el impacto de conversiones de velocidad o de unidades de radio.\r
\r
#### por que es incorrecto\r
Errores de unidad cambian umbrales de seguridad y pueden invalidar decisiones de diseno.\r
\r
#### senal de deteccion\r
Resultados incompatibles con ordenes de magnitud conocidos para curvas viales.\r
\r
#### correccion conceptual\r
Unificar en SI al inicio y revisar consistencia dimensional antes de interpretar.\r
\r
#### mini-ejemplo\r
Mal: usar [[v]] en km/h dentro de ecuaciones en SI.\r
Bien: convertir a m/s y documentar la conversion.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales dan apariencia de rigor.\r
\r
#### por que es incorrecto\r
La precision numerica no reemplaza la incertidumbre de [[mu]], mediciones y supuestos.\r
\r
#### senal de deteccion\r
Se reportan muchos decimales sin banda de confianza ni analisis de sensibilidad.\r
\r
#### correccion conceptual\r
Usar cifras significativas coherentes y comunicar margen de validez.\r
\r
#### mini-ejemplo\r
Mal: publicar velocidad maxima con seis decimales en evaluacion de campo.\r
Bien: reportar rango operativo con contexto de adherencia.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Al obtener un numero, se considera finalizado el trabajo.\r
\r
#### por que es incorrecto\r
Sin lectura causal, no se identifica que variable conviene intervenir para reducir riesgo.\r
\r
#### senal de deteccion\r
El informe termina en ecuaciones sin recomendar acciones sobre [[v]], [[r]], [[th]] o [[mu]].\r
\r
#### correccion conceptual\r
Cerrar siempre con decisiones fisicas: que cambiar, por que y con que efecto esperado en [[Frad]].\r
\r
#### mini-ejemplo\r
Mal: "resultado calculado, fin".\r
Bien: "si baja [[mu]], se reduce velocidad o se mejora geometria con peralte".\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Identifique [[Frad]] como suma radial de fuerzas reales?\r
- ¿Distingui con claridad [[ac]], [[fs]] y [[Nn]]?\r
- ¿Declare hipotesis y limites de validez?\r
- ¿Verifique unidades y tendencias fisicas?\r
- ¿Conecte el resultado con una decision tecnica concreta?\r
\r
Si alguna respuesta es no, el ejercicio aun no esta fisicamente cerrado.\r
`;export{e as default};
