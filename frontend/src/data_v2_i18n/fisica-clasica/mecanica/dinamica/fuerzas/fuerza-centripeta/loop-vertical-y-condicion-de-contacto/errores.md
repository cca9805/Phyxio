# Errores frecuentes: Loop vertical y condicion de contacto

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
En muchos ejercicios se habla de fuerza centripeta como si fuera una fuerza extra, y eso da la impresion de que basta nombrarla para explicar el movimiento.

#### por que es incorrecto
La curvatura es efecto, no causa. La causa son fuerzas reales como peso y [[Nn]]. Si no se identifica esa cadena causal, la interpretacion del loop queda rota.

#### senal de deteccion
El diagrama agrega "centripeta" ademas del peso y la normal, duplicando fuerzas sin justificacion.

#### correccion conceptual
Trabajar siempre con fuerzas reales y leer [[Frad]] como resultante requerida, no como actor adicional.

#### mini-ejemplo
Mal: "hay peso, normal y centripeta".
Bien: "peso y normal generan la resultante radial necesaria".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
La algebra funciona y da un numero, lo cual produce falsa sensacion de respuesta completa.

#### por que es incorrecto
Sin revisar condiciones de validez, una formula correcta puede usarse en escenario equivocado.

#### senal de deteccion
Se usa ecuacion de cima para interpretar carga en base, o viceversa, sin distinguir punto de analisis.

#### correccion conceptual
Antes de sustituir, declarar ubicacion, convencion radial y supuesto de contacto.

#### mini-ejemplo
Mal: calcular [[Nn]] en base con ecuacion de cima.
Bien: usar la ecuacion de punto bajo para base y la de punto alto para cima.

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[vT]], [[vB]] y [[v]] parecen la misma variable si no se atiende al punto de la trayectoria.

#### por que es incorrecto
Cada velocidad tiene rol distinto: cima, base o punto generico. Mezclarlas cambia la fisica del problema.

#### senal de deteccion
Se compara [[vB]] directamente con el umbral de cima sin convertir ni justificar.

#### correccion conceptual
Etiquetar siempre estado y magnitud con su subindice fisico antes de operar.

#### mini-ejemplo
Mal: "si [[v]] supera el umbral ya hay contacto".
Bien: "se requiere que [[vT]] supere su umbral de cima".

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
El modelo ideal suele coincidir bien en ejercicios de aula y eso genera confianza excesiva.

#### por que es incorrecto
Con perdidas fuertes o deformacion, las predicciones idealizadas dejan de representar el sistema.

#### senal de deteccion
La medicion real difiere de forma sistematica aunque la cuenta este bien hecha.

#### correccion conceptual
Definir umbral de discrepancia y escalar a modelo extendido cuando se supere.

#### mini-ejemplo
Mal: insistir con modelo sin rozamiento pese a perdida de energia evidente.
Bien: introducir disipacion cuando la diferencia se vuelve recurrente.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
Se cree que una formula valida una vez es valida siempre.

#### por que es incorrecto
Las ecuaciones del loop tienen dominio: contacto, geometria y regimen dinamico definidos.

#### senal de deteccion
No se reportan supuestos ni rango operativo junto al resultado.

#### correccion conceptual
Anexar siempre condicion de validez y criterio de cambio de modelo.

#### mini-ejemplo
Mal: publicar velocidad minima sin aclarar hipotesis ideales.
Bien: reportar velocidad minima con supuesto de pista rigida y perdidas despreciables.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
La manipulacion simbolica parece rutinaria y se hace de memoria.

#### por que es incorrecto
Un signo mal ubicado invierte la conclusion de contacto.

#### senal de deteccion
Aparece [[Nn]] negativa y aun asi se afirma contacto estable.

#### correccion conceptual
Verificar signos con diagrama radial antes de aceptar el resultado.

#### mini-ejemplo
Mal: mover el termino de [[g]] con signo incorrecto.
Bien: revisar proyeccion radial y luego despejar.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Se subestima el impacto de unidades porque el valor numerico "parece razonable".

#### por que es incorrecto
Errores de unidad alteran umbrales y cambian decisiones de seguridad.

#### senal de deteccion
Velocidades absurdas para radios realistas o fuerzas fuera de escala.

#### correccion conceptual
Unificar SI desde el inicio y hacer chequeo dimensional al final.

#### mini-ejemplo
Mal: usar km para [[r]] sin convertir y mantener [[g]] en SI.
Bien: convertir todo a metros antes del calculo.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales dan apariencia de exactitud.

#### por que es incorrecto
La precision numerica no reemplaza incertidumbre de modelo ni de medicion.

#### senal de deteccion
Se reportan seis decimales sin discutir margen de operacion.

#### correccion conceptual
Usar cifras significativas coherentes con calidad de datos y supuestos.

#### mini-ejemplo
Mal: reportar umbral "exacto" sin banda de tolerancia.
Bien: reportar umbral y margen operativo.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Se considera que obtener el numero ya cierra el problema.

#### por que es incorrecto
Sin lectura causal no hay criterio para actuar ni para detectar riesgo.

#### senal de deteccion
La resolucion termina en ecuacion sin recomendar ajuste de variable.

#### correccion conceptual
Cerrar siempre con accion: que cambiar y por que mejora contacto o carga.

#### mini-ejemplo
Mal: "resultado final obtenido".
Bien: "subir [[vB]] mejora margen de cima, pero vigilar [[Nn]] en base".

## Regla de autocontrol rápido

- ¿Defini el punto de analisis antes de elegir ecuacion?
- ¿Diferencie [[vT]] de [[vB]] sin mezclar subindices?
- ¿Verifique signo y positividad de [[Nn]] para contacto?
- ¿Declare supuestos y limite de validez del modelo?
- ¿Cierre con una decision fisica accionable?

Si alguna respuesta es no, la solucion aun no esta lista para uso.
