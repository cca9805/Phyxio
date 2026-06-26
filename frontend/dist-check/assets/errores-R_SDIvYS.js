const e=`# Errores frecuentes: Loop vertical y condicion de contacto\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
En muchos ejercicios se habla de fuerza centripeta como si fuera una fuerza extra, y eso da la impresion de que basta nombrarla para explicar el movimiento.\r
\r
#### por que es incorrecto\r
La curvatura es efecto, no causa. La causa son fuerzas reales como peso y [[Nn]]. Si no se identifica esa cadena causal, la interpretacion del loop queda rota.\r
\r
#### senal de deteccion\r
El diagrama agrega "centripeta" ademas del peso y la normal, duplicando fuerzas sin justificacion.\r
\r
#### correccion conceptual\r
Trabajar siempre con fuerzas reales y leer [[Frad]] como resultante requerida, no como actor adicional.\r
\r
#### mini-ejemplo\r
Mal: "hay peso, normal y centripeta".\r
Bien: "peso y normal generan la resultante radial necesaria".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
La algebra funciona y da un numero, lo cual produce falsa sensacion de respuesta completa.\r
\r
#### por que es incorrecto\r
Sin revisar condiciones de validez, una formula correcta puede usarse en escenario equivocado.\r
\r
#### senal de deteccion\r
Se usa ecuacion de cima para interpretar carga en base, o viceversa, sin distinguir punto de analisis.\r
\r
#### correccion conceptual\r
Antes de sustituir, declarar ubicacion, convencion radial y supuesto de contacto.\r
\r
#### mini-ejemplo\r
Mal: calcular [[Nn]] en base con ecuacion de cima.\r
Bien: usar la ecuacion de punto bajo para base y la de punto alto para cima.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[vT]], [[vB]] y [[v]] parecen la misma variable si no se atiende al punto de la trayectoria.\r
\r
#### por que es incorrecto\r
Cada velocidad tiene rol distinto: cima, base o punto generico. Mezclarlas cambia la fisica del problema.\r
\r
#### senal de deteccion\r
Se compara [[vB]] directamente con el umbral de cima sin convertir ni justificar.\r
\r
#### correccion conceptual\r
Etiquetar siempre estado y magnitud con su subindice fisico antes de operar.\r
\r
#### mini-ejemplo\r
Mal: "si [[v]] supera el umbral ya hay contacto".\r
Bien: "se requiere que [[vT]] supere su umbral de cima".\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
El modelo ideal suele coincidir bien en ejercicios de aula y eso genera confianza excesiva.\r
\r
#### por que es incorrecto\r
Con perdidas fuertes o deformacion, las predicciones idealizadas dejan de representar el sistema.\r
\r
#### senal de deteccion\r
La medicion real difiere de forma sistematica aunque la cuenta este bien hecha.\r
\r
#### correccion conceptual\r
Definir umbral de discrepancia y escalar a modelo extendido cuando se supere.\r
\r
#### mini-ejemplo\r
Mal: insistir con modelo sin rozamiento pese a perdida de energia evidente.\r
Bien: introducir disipacion cuando la diferencia se vuelve recurrente.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
Se cree que una formula valida una vez es valida siempre.\r
\r
#### por que es incorrecto\r
Las ecuaciones del loop tienen dominio: contacto, geometria y regimen dinamico definidos.\r
\r
#### senal de deteccion\r
No se reportan supuestos ni rango operativo junto al resultado.\r
\r
#### correccion conceptual\r
Anexar siempre condicion de validez y criterio de cambio de modelo.\r
\r
#### mini-ejemplo\r
Mal: publicar velocidad minima sin aclarar hipotesis ideales.\r
Bien: reportar velocidad minima con supuesto de pista rigida y perdidas despreciables.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
La manipulacion simbolica parece rutinaria y se hace de memoria.\r
\r
#### por que es incorrecto\r
Un signo mal ubicado invierte la conclusion de contacto.\r
\r
#### senal de deteccion\r
Aparece [[Nn]] negativa y aun asi se afirma contacto estable.\r
\r
#### correccion conceptual\r
Verificar signos con diagrama radial antes de aceptar el resultado.\r
\r
#### mini-ejemplo\r
Mal: mover el termino de [[g]] con signo incorrecto.\r
Bien: revisar proyeccion radial y luego despejar.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Se subestima el impacto de unidades porque el valor numerico "parece razonable".\r
\r
#### por que es incorrecto\r
Errores de unidad alteran umbrales y cambian decisiones de seguridad.\r
\r
#### senal de deteccion\r
Velocidades absurdas para radios realistas o fuerzas fuera de escala.\r
\r
#### correccion conceptual\r
Unificar SI desde el inicio y hacer chequeo dimensional al final.\r
\r
#### mini-ejemplo\r
Mal: usar km para [[r]] sin convertir y mantener [[g]] en SI.\r
Bien: convertir todo a metros antes del calculo.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales dan apariencia de exactitud.\r
\r
#### por que es incorrecto\r
La precision numerica no reemplaza incertidumbre de modelo ni de medicion.\r
\r
#### senal de deteccion\r
Se reportan seis decimales sin discutir margen de operacion.\r
\r
#### correccion conceptual\r
Usar cifras significativas coherentes con calidad de datos y supuestos.\r
\r
#### mini-ejemplo\r
Mal: reportar umbral "exacto" sin banda de tolerancia.\r
Bien: reportar umbral y margen operativo.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Se considera que obtener el numero ya cierra el problema.\r
\r
#### por que es incorrecto\r
Sin lectura causal no hay criterio para actuar ni para detectar riesgo.\r
\r
#### senal de deteccion\r
La resolucion termina en ecuacion sin recomendar ajuste de variable.\r
\r
#### correccion conceptual\r
Cerrar siempre con accion: que cambiar y por que mejora contacto o carga.\r
\r
#### mini-ejemplo\r
Mal: "resultado final obtenido".\r
Bien: "subir [[vB]] mejora margen de cima, pero vigilar [[Nn]] en base".\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Defini el punto de analisis antes de elegir ecuacion?\r
- ¿Diferencie [[vT]] de [[vB]] sin mezclar subindices?\r
- ¿Verifique signo y positividad de [[Nn]] para contacto?\r
- ¿Declare supuestos y limite de validez del modelo?\r
- ¿Cierre con una decision fisica accionable?\r
\r
Si alguna respuesta es no, la solucion aun no esta lista para uso.\r
`;export{e as default};
