## Errores conceptuales


### Error 1: Creer que amplitud transmitida mayor que uno viola la conservacion de energia

**Por que parece correcto**

El alumno asocia "fraccion" con un numero entre cero y uno. Si la amplitud transmitida vale 1.5, piensa que se ha creado energia de la nada.

**Por que es incorrecto**

La energia transportada por una onda no es proporcional solo a la amplitud al cuadrado, sino al producto de la amplitud al cuadrado por la impedancia del medio. Cuando el segundo medio tiene impedancia menor, la amplitud debe crecer para mantener el balance de potencia. La verificacion correcta es que [[coeficiente_de_reflexion_en_energia]] mas [[coeficiente_de_transmision_en_energia]] sume exactamente uno.

**Señal de deteccion**

El alumno afirma que "la formula de transmision esta mal porque T sale mayor que uno" o rechaza un resultado de [[coeficiente_de_transmision_en_amplitud]] superior a la unidad.

**Correccion conceptual**

[[coeficiente_de_transmision_en_amplitud]] puede valer hasta 2 (limite de extremo libre). La conservacion se verifica con los coeficientes energeticos, no con los de amplitud. Verificar siempre que [[coeficiente_de_reflexion_en_energia]] mas [[coeficiente_de_transmision_en_energia]] sea igual a la unidad.

**Mini-ejemplo de contraste**

Una onda pasa de acero (Z alta) a aluminio (Z baja). [[coeficiente_de_transmision_en_amplitud]] es 1.46, pero [[coeficiente_de_transmision_en_energia]] es 0.79. La amplitud crece porque el medio receptor ofrece menos resistencia, pero la energia transmitida es solo el 79 % de la incidente.


### Error 2: Confundir coeficiente de reflexion en amplitud con coeficiente en energia

**Por que parece correcto**

Ambos se llaman "coeficiente de reflexion" y ambos dan un numero adimensional. El alumno no distingue entre R y R al cuadrado.

**Por que es incorrecto**

[[coeficiente_de_reflexion_en_amplitud]] puede ser negativo (inversion de fase) y su valor absoluto indica la fraccion de amplitud reflejada. [[coeficiente_de_reflexion_en_energia]] es siempre positivo y da directamente la fraccion de energia reflejada. Usar uno en lugar del otro produce errores de factor cuadratico.

**Señal de deteccion**

El alumno sustituye [[coeficiente_de_reflexion_en_amplitud]] directamente en un balance de potencia sin elevar al cuadrado, o bien descarta un resultado negativo creyendo que es erroneo.

**Correccion conceptual**

Para balances energeticos usar siempre [[coeficiente_de_reflexion_en_energia]] y [[coeficiente_de_transmision_en_energia]]. Para informacion de fase usar [[coeficiente_de_reflexion_en_amplitud]]. El signo de [[coeficiente_de_reflexion_en_amplitud]] contiene informacion fisica (inversion de fase) que no debe ignorarse.

**Mini-ejemplo de contraste**

En la interfaz acero-aluminio, [[coeficiente_de_reflexion_en_amplitud]] vale -0.46. Si el alumno lo usa directamente como fraccion de energia, cree que se refleja un -46 % de la energia (absurdo). El valor correcto de energia reflejada es el cuadrado: 0.21, es decir un 21 %.

## Errores de modelo


### Error 3: Aplicar la formula de incidencia normal a incidencia oblicua

**Por que parece correcto**

Las formulas de incidencia normal son sencillas y aparecen primero en los textos. El alumno las aplica sin verificar que el angulo sea efectivamente cero.

**Por que es incorrecto**

En incidencia oblicua aparece conversion de modo: una onda P genera tanto P como S reflejadas y transmitidas. Las formulas escalares dejan de ser validas y se necesitan las ecuaciones de Zoeppritz. Ademas, pueden aparecer angulos criticos donde la reflexion se vuelve total.

**Señal de deteccion**

El alumno usa la formula de diferencia-sobre-suma para un problema donde se especifica un angulo distinto de cero, o cuando el enunciado menciona ondas S generadas en la interfaz.

**Correccion conceptual**

Las formulas de este leaf son exclusivas de incidencia normal. Si hay angulo, se debe recurrir al tratamiento matricial o a las ecuaciones de Zoeppritz. Verificar siempre si el enunciado especifica incidencia perpendicular.

**Mini-ejemplo de contraste**

A 30 grados de incidencia en una interfaz acero-aluminio, la onda P genera una onda S reflejada significativa. El coeficiente PP reflejado difiere del valor de incidencia normal, y aparece un coeficiente PS que la formula simple no predice.

## Errores matemáticos


### Error 4: Invertir el orden de las impedancias en la formula

**Por que parece correcto**

La formula tiene [[impedancia_acustica_del_medio_2]] menos [[impedancia_acustica_del_medio_1]] en el numerador, pero el alumno puede poner [[impedancia_acustica_del_medio_1]] menos [[impedancia_acustica_del_medio_2]] sin darse cuenta de que cambia el signo.

**Por que es incorrecto**

La convencion estandar define [[coeficiente_de_reflexion_en_amplitud]] como ([[impedancia_acustica_del_medio_2]] - [[impedancia_acustica_del_medio_1]]) / ([[impedancia_acustica_del_medio_2]] + [[impedancia_acustica_del_medio_1]]), donde el medio 1 es el de incidencia y el medio 2 el de transmision. Invertir el orden invierte el signo del coeficiente y la informacion de fase se pierde o se invierte.

**Señal de deteccion**

El alumno obtiene R positivo cuando la onda va de medio rigido a medio blando (deberia ser negativo), o negativo cuando va de blando a rigido.

**Correccion conceptual**

Fijar siempre la convencion: medio 1 es donde viaja la onda incidente, medio 2 es adonde se dirige. [[impedancia_acustica_del_medio_2]] va en primer lugar en el numerador ([[impedancia_acustica_del_medio_2]] - [[impedancia_acustica_del_medio_1]]). Verificar el signo con el criterio fisico: si el segundo medio es mas rigido, R es positivo.

**Mini-ejemplo de contraste**

Onda de aluminio a acero: [[impedancia_acustica_del_medio_1]] (aluminio) menor que [[impedancia_acustica_del_medio_2]] (acero). R debe ser positivo (reflexion sin inversion). Si el alumno invierte las impedancias, obtiene R negativo y concluye incorrectamente que hay inversion de fase.

## Errores de interpretación


### Error 5: Suponer que reflexion alta implica que la interfaz es un defecto

**Por que parece correcto**

En ensayos no destructivos, un eco fuerte suele asociarse a un defecto. El alumno generaliza pensando que toda reflexion alta indica un problema.

**Por que es incorrecto**

La reflexion alta puede deberse simplemente al contraste natural de impedancias entre dos materiales unidos intencionalmente (como la interfaz entre un componente de acero y uno de aluminio). La presencia de reflexion no indica necesariamente un defecto; indica un cambio de impedancia, que puede ser parte del diseño.

**Señal de deteccion**

El alumno interpreta toda señal de eco como indicacion de grieta, sin considerar la geometria del componente ni las interfaces esperadas.

**Correccion conceptual**

Distinguir entre ecos esperados (interfaces de diseño) y ecos inesperados (defectos). En inspeccion ultrasomica, se compara la señal recibida con la geometria conocida del componente. Solo los ecos que no corresponden a interfaces planificadas son indicativos de defecto.

**Mini-ejemplo de contraste**

Una pieza bimetalica acero-aluminio siempre produce un eco en la interfaz. Si un tecnico interpreta ese eco como grieta, descarta piezas buenas. El eco es correcto y esperado; solo un eco a profundidad distinta o de amplitud anomala sugiere un defecto real.

## Regla de autocontrol rápido

Verificar siempre que [[coeficiente_de_reflexion_en_energia]] mas [[coeficiente_de_transmision_en_energia]] sume exactamente 1 (dentro del redondeo). Si la suma difiere de 1 en mas de un 1 %, revisar el calculo de impedancias y la sustitucion en las formulas. Verificar tambien que el signo de [[coeficiente_de_reflexion_en_amplitud]] es coherente con la relacion de impedancias: positivo si [[impedancia_acustica_del_medio_2]] es mayor que [[impedancia_acustica_del_medio_1]], negativo si es menor.