const e=`# Errores frecuentes: Descomposicion vectorial

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por que parece correcto**
El estudiante ve una formula con varias letras y asume que todas juegan el mismo papel causal.

**Por que es incorrecto**
En descomposicion vectorial, cada componente cumple una funcion fisica distinta. [[Fx]] no reemplaza a [[Fy]], y [[Ppar]] no reemplaza a [[Pperp]].

**Senal de deteccion**
El alumno afirma que "si [[Fm]] sube, todo sube igual" sin revisar angulo [[theta]].

**Correccion conceptual**
Separar siempre lectura por ejes: que componente produce movimiento y que componente modifica contacto.

**Mini-ejemplo de contraste**
Con [[Fm]] fija, aumentar [[theta]] puede subir [[Fy]] y bajar [[Fx]]. Mismo modulo, efectos distintos.

### Error 2: Aplicar la formula mecanicamente sin validar el contexto

**Por que parece correcto**
Memorizar una expresion da seguridad y acelera calculo.

**Por que es incorrecto**
La expresion correcta depende de como se definio [[theta]] y de que ejes se eligieron.

**Senal de deteccion**
Se usa seno/coseno sin declarar desde que eje se mide el angulo.

**Correccion conceptual**
Antes de sustituir, escribir referencia angular y sistema de ejes.

**Mini-ejemplo de contraste**
Si [[theta]] se mide desde vertical, copiar formula de horizontal produce componentes permutadas.

### Error 3: Confundir magnitudes similares

**Por que parece correcto**
[[W]], [[Fm]], [[N]] y [[T]] pueden tener unidades N y valores parecidos.

**Por que es incorrecto**
Unidad igual no implica rol igual: [[W]] es gravitatorio, [[N]] es contacto, [[T]] es traccion.

**Senal de deteccion**
En balances aparece [[N]] sustituida por [[W]] sin justificar orientacion ni contacto.

**Correccion conceptual**
Etiquetar cada magnitud por origen fisico, no solo por numero y unidad.

**Mini-ejemplo de contraste**
En rampa, [[N]] suele aproximar [[Pperp]], no [[W]] completo.

## Errores de modelo

### Error 4: No reconocer cuando el modelo simplificado falla

**Por que parece correcto**
El modelo lineal por ejes funciona en muchos ejercicios introductorios.

**Por que es incorrecto**
Con vibracion, deformacion o contacto variable, [[muk]] deja de ser constante y el modelo simple pierde poder predictivo.

**Senal de deteccion**
El error entre prediccion y medida crece sistematicamente aunque no haya errores algebraicos.

**Correccion conceptual**
Usar descomposicion como base y extender luego el modelo de contacto.

**Mini-ejemplo de contraste**
En banda humeda, [[Ppar]] y [[Pperp]] se estiman bien, pero [[fk]] real cae por temperatura y aparece patinaje.

### Error 5: Ignorar los limites del modelo conocidos

**Por que parece correcto**
Si una formula dio bien una vez, parece razonable reutilizarla siempre.

**Por que es incorrecto**
Cada formula tiene dominio de validez geometrico y fisico.

**Senal de deteccion**
Se mezclan ejes cartesianas con ejes de rampa sin explicitar cambio de referencia.

**Correccion conceptual**
Declarar explicitamente: eje, angulo, supuesto de contacto y rango esperado.

**Mini-ejemplo de contraste**
Aplicar formula de [[Ppar]] en un problema con ejes horizontal/vertical conduce a interpretacion equivocada.

## Errores matematicos

### Error 6: Despejes algebraicos descuidados

**Por que parece correcto**
El despeje rapido parece ahorrar tiempo.

**Por que es incorrecto**
Un despeje valido en simbolos puede violar restricciones de dominio trigonometrico.

**Senal de deteccion**
Aparecen valores de componente mayores que el modulo original.

**Correccion conceptual**
Tras despejar, comprobar cotas fisicas y coherencia de signos.

**Mini-ejemplo de contraste**
Si [[Fx]] supera [[Fm]] en modulo, hay error de despeje o de conversion angular.

### Error 7: Olvidar constantes fundamentales o unidades

**Por que parece correcto**
El estudiante prioriza terminar operaciones numericas.

**Por que es incorrecto**
En plano inclinado, omitir [[g]] o mezclar grados/radianes altera resultado de forma grande.

**Senal de deteccion**
Resultados con orden de magnitud imposible para [[Ppar]] o [[Pperp]].

**Correccion conceptual**
Bloquear una rutina: unidades SI, valor de [[g]], y modo angular correcto en calculadora.

**Mini-ejemplo de contraste**
Usar [[g]] = 1 por descuido reduce [[W]] y componentes por casi un factor 10.

## Errores de interpretacion

### Error 8: Interpretar un resultado como mas preciso que lo que el modelo permite

**Por que parece correcto**
Muchos decimales transmiten falsa sensacion de exactitud.

**Por que es incorrecto**
Si [[muk]] es estimado, la precision real esta limitada por incertidumbre de contacto.

**Senal de deteccion**
Se reportan cuatro decimales en [[a]] cuando parametros de entrada son aproximados.

**Correccion conceptual**
Ajustar cifras significativas al nivel de incertidumbre fisica.

**Mini-ejemplo de contraste**
Con [[muk]] medido a dos decimales, reportar [[a]] con cuatro decimales es sobreprecision.

### Error 9: Saltarte la interpretacion fisica del resultado calculado

**Por que parece correcto**
Llegar a un numero final da sensacion de cierre.

**Por que es incorrecto**
Sin lectura causal no sabes que variable cambiar para mejorar el sistema.

**Senal de deteccion**
La solucion termina en "[[Fx]] = ..." sin explicar impacto en [[N]], [[fk]] o [[a]].

**Correccion conceptual**
Cerrar cada ejercicio con una frase de decision: que domina, que limita y que accion conviene.

**Mini-ejemplo de contraste**
Dos escenarios con mismo [[Fm]] pueden requerir acciones opuestas si cambia [[theta]].

## Regla de autocontrol rapido

1. El sistema de ejes esta declarado.
2. [[theta]] esta medido desde el eje correcto.
3. Las componentes reconstruyen el modulo.
4. El signo de cada componente coincide con la geometria.
5. La conclusion final dice que magnitud domina y cual limita.

Si alguna respuesta es no, conviene detenerse, corregir y recalcular.
`;export{e as default};
