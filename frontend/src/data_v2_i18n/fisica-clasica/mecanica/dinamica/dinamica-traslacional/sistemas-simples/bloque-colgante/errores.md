# Errores frecuentes: Bloque colgante

## Errores conceptuales

### Error 1: Creer que la tensión siempre iguala al peso

**Por qué parece correcto**

En la situación más común (bloque colgado en reposo), la tensión efectivamente iguala al peso. El alumno generaliza esta igualdad a todas las situaciones, pensando que el cable "transmite" el peso mecánicamente sin posibilidad de variación.

**Por qué es incorrecto**

La tensión es una fuerza de vínculo que se adapta a las condiciones dinámicas. Solo iguala al peso cuando la aceleración es nula. En elevación acelerada, la tensión supera al peso; en frenado o descenso acelerado, es menor que el peso. En caída libre, tiende a cero. La tensión no es una consecuencia fija del peso sino una variable independiente que controla el movimiento.

**Señal de detección**

Si al resolver un problema de aceleración el alumno escribe directamente [[T]] = [[W]] sin justificar equilibrio, o calcula una aceleración sin verificar que [[T]] difiere de [[W]], está cometiendo este error.

**Corrección conceptual**

Distinguir siempre entre el peso (fuerza gravitatoria fija para una masa dada) y la tensión (fuerza de vínculo variable). La ecuación de la segunda ley en dirección vertical muestra explícitamente que la diferencia entre ambas produce la aceleración.

{{f:dinamica_vertical}}

Si tensión y peso son iguales, no hay aceleración.

**Mini-ejemplo de contraste**

Un bloque de 5 kg cuelga de un dinamómetro. En reposo, el dinamómetro marca 49 N (el peso). Si elevamos el bloque con aceleración de 2 m/s², la lectura sube a 59 N. Si lo bajamos aceleradamente con la misma magnitud, la lectura baja a 39 N. La tensión varía; el peso permanece 49 N.

### Error 2: Usar la masa en lugar del peso en la ecuación dinámica

**Por qué parece correcto**

El alumno recuerda que la gravedad interviene pero confunde la magnitud masa [[m]] con la fuerza peso [[W]]. Como ambas están relacionadas por [[g]], en cálculos mentales rápidos los valores numéricos parecen cercanos (por ejemplo, 10 kg vs 98 N), lo que refuerza la confusión.

**Por qué es incorrecto**

La segunda ley de Newton requiere fuerzas (unidades de newton) en el lado izquierdo. La masa es una propiedad inercial, no una fuerza. La ecuación dinámica vertical requiere que [[T]] y [[W]] sean fuerzas comparables.

{{f:dinamica_vertical}}

Usar [[m]] directamente viola la homogeneidad dimensional y produce resultados absurdos (aceleraciones de 100 m/s² o más).

**Señal de detección**

Si los cálculos producen aceleraciones de orden 10 m/s² cuando deberían ser de orden g, o si la tensión de equilibrio aparece como 10 N para una masa de 10 kg (en lugar de 98 N), el alumno probablemente esté usando masa en lugar de peso.

**Corrección conceptual**

Convertir explícitamente masa a peso mediante la fórmula del peso gravitatorio antes de aplicar la segunda ley.

{{f:peso_gravitatorio}}

Verificar siempre dimensiones: si restas masa de fuerza, las unidades no coinciden.

**Mini-ejemplo de contraste**

Un alumno calcula la tensión de equilibrio para un bloque de 8 kg y obtiene 8 N (usando la masa directamente). La respuesta correcta es 78.4 N (usando el peso). El error es de casi un orden de magnitud, lo que sería catastrófico en diseño de cables.

## Errores de modelo

### Error 3: Ignorar el peso del cable en sistemas reales

**Por qué parece correcto**

El modelo idealizado del leaf asume cable sin masa. El alumno aplica esta idealización a situaciones reales donde el cable sí tiene masa apreciable, especialmente en sistemas con cables largos (grúas, pozos de mina).

**Por qué es incorrecto**

En cables de varios metros o más, el peso propio del cable suma carga adicional que debe soportar la parte superior. Un cable de acero de 10 m de longitud puede pesar decenas de newtons, comparable al peso de cargas pequeñas. Ignorar este peso subestima la tensión máxima y puede llevar a seleccionar cables inseguros.

**Señal de detección**

Cuando el problema menciona "cable de acero", "cable de 50 m" o similares, y el alumno solo calcula el peso de la carga útil sin considerar el cable mismo.

**Corrección conceptual**

El modelo del leaf es válido para cables cortos donde el peso del cable es despreciable frente al de la carga. Para cables largos, la tensión varía a lo largo del cable (es máxima arriba y mínima abajo) y el análisis requiere integración o métodos de ondas elásticas.

**Mini-ejemplo de contraste**

Una carga de 100 kg suspendida de un cable de acero de 20 m: el peso de la carga es 980 N, pero el cable añade unos 150 N adicionales. La tensión en la parte superior es 1130 N, un 15 % mayor que lo que calcularía el modelo simple.

## Errores matemáticos

### Error 4: Signos inconsistentes en la dirección vertical

**Por qué parece correcto**

El alumno asume que "hacia arriba es positivo" y escribe [[T]] positiva y [[W]] negativa, pero luego en la ecuación resta ambas como si fueran magnitudes. La confusión entre vector y escalar lleva a signos incorrectos en la aceleración.

**Por qué es incorrecto**

La segunda ley requiere suma algebraica con signos según el eje elegido. Si el eje positivo es hacia arriba, [[T]] es positiva y [[W]] es negativa, por lo que la ecuación es [[T]] − [[W]] = [[m]]·[[a]]. Si se restan como magnitudes absolutas ([[T]] − [[W]] sin considerar signos), el resultado es correcto solo cuando [[T]] > [[W]].

**Señal de detección**

Si el alumno obtiene aceleración positiva cuando calcula que la tensión es menor que el peso (lo que debería producir caída), hay un error de signo. O si la magnitud de la aceleración es correcta pero el sentido es opuesto al esperado.

**Corrección conceptual**

Definir explícitamente el eje positivo antes de plantear la ecuación. Asignar signos consistentes: fuerzas hacia arriba positivas, hacia abajo negativas (o viceversa, pero consistentemente). Verificar que el signo del resultado tiene sentido físico.

**Mini-ejemplo de contraste**

Un bloque con peso de 50 N y tensión de 30 N. Con eje positivo hacia arriba: (+30 N) + (−50 N) = [[m]]·[[a]], dando [[a]] negativa (caída). Si se escribe 30 − 50 sin signos explícitos, el resultado −20 es correcto en magnitud pero ambiguo en interpretación. Si se escribe 30 + 50 por error, se obtiene aceleración positiva absurda.

## Errores de interpretación

### Error 5: Interpretar que "subir más rápido" requiere mayor tensión

**Por qué parece correcto**

La intuición cotidiana asocia "rápido" con "fuerte". Pensamos que para mover algo rápidamente debemos empujar más fuerte. Esta intuición mecánica confunde velocidad con aceleración.

**Por qué es incorrecto**

Una vez que el bloque alcanza cierta velocidad hacia arriba, mantener esa velocidad constante no requiere fuerza neta. La tensión iguala exactamente al peso, independientemente de cuán rápido suba. La tensión extra solo se necesita durante la aceleración inicial, no durante el movimiento uniforme.

**Señal de detección**

Si el alumno dice que un ascensor subiendo a 5 m/s requiere mayor tensión que el mismo ascensor subiendo a 1 m/s (ambos a velocidad constante), está confundiendo velocidad con aceleración.

**Corrección conceptual**

Recordar la primera ley de Newton: velocidad constante (incluyendo cero) implica equilibrio de fuerzas. La tensión depende de la aceleración, no de la velocidad. Una vez en movimiento uniforme, el sistema no "sabe" qué tan rápido se mueve, solo que no acelera.

**Mini-ejemplo de contraste**

Dos ascensores idénticos: uno sube a 1 m/s constante, otro a 5 m/s constante. Ambos tienen [[a]] = 0, por lo que ambos requieren [[T]] = [[W]] (digamos 10 000 N). Para iniciar el movimiento desde reposo hasta 1 m/s o hasta 5 m/s, sí se necesita aceleración y tensión extra temporalmente; pero durante el ascenso uniforme, la tensión es idéntica.

## Regla de autocontrol rápido

Después de resolver cualquier problema de bloque colgante, aplica esta secuencia de verificación:

1. Comprobar que se usó peso ([[W]]) y no masa ([[m]]) directamente en la ecuación dinámica.
2. Verificar que los signos son consistentes con el eje vertical elegido.
3. Confirmar que las dimensiones del resultado son `[L T⁻²]` para la aceleración y `[M L T⁻²]` para las fuerzas.
4. Validar que [[T]] = [[W]] cuando [[a]] = 0 (caso de equilibrio).
5. Verificar que el sentido de [[a]] tiene sentido físico: positiva cuando [[T]] > [[W]], negativa cuando [[T]] < [[W]].
