# Errores comunes en el proceso adiabático

## Errores conceptuales

### Error 1: "Adiabático significa temperatura constante"

**Por que parece correcto**

El alumno asocia "sin calor" con "sin cambio térmico". Como el calor es la forma más familiar de cambiar la temperatura en el dia a dia (calentar una olla, enfriarse en el exterior), parece razonable pensar que si no hay calor, no hay cambio de temperatura. Esta generalizacion excesiva mezcla dos cosas distintas: el calor como mecanismo de transferencia y la temperatura como variable de estado.

**Por que es incorrecto**

La temperatura es una propiedad de la energía interna del gas. La energía interna puede cambiar tanto por calor como por trabajo. En un proceso adiabático, el trabajo mecánico es el único agente de cambio energético. Cuando el gas se expande y realiza trabajo, pierde energía interna y su [[T2]] cae. Cuando se comprime, gana energía interna y [[T2]] sube. La ausencia de calor no protege la temperatura; al contrario, el trabajo actua sin compensacion térmica.

**Señal de deteccion**

El alumno escribe [[DeltaT_ad]] = 0 en un proceso adiabático con cambio de volumen, o afirma que "al no haber calor, la temperatura no cambia".

**Correccion conceptual**

Temperatura constante es el proceso isotérmico, no el adiabático. En el proceso adiabático, la temperatura cambia porque el trabajo modifica la energía interna. La regla correcta es: expansión adiabatica enfria ([[T2]] < [[T1]]); compresión adiabatica calienta ([[T2]] > [[T1]]).

**Mini-ejemplo de contraste**

Un estudiante aplica el proceso adiabático a un gas y concluye que [[T2]] = [[T1]] = 300 K. Si el volumen se duplico, la temperatura deberia haber caido a unos 228 K para un gas diatomico. La conclusion del estudiante equivale a decir que el gas realizo trabajo sin consumir ningún recurso energético propio, lo que viola la conservación de la energía.

### Error 2: "El proceso adiabático y el isotérmico son iguales porque ambos tienen Q = 0 o temperatura fija"

**Por que parece correcto**

El alumno confunde la definición de cada proceso. Como el isotérmico mantiene temperatura constante y el adiabático parece (erroneamente) que también lo hace, los trata como equivalentes. Además, en el diagrama pV ambos son curvas decrecientes, lo que refuerza visualmente la confusion.

**Por que es incorrecto**

En el proceso isotérmico la temperatura es constante porque el gas intercambia calor con el entorno para compensar el trabajo. En el proceso adiabático no hay ese intercambio de calor y la temperatura cambia. Las curvas en el diagrama pV tienen pendientes distintas: la adiabata cae más abruptamente que la isoterma porque [[gamma]] > 1. Para el mismo cambio de volumen, la presión y la temperatura finales son distintas en cada proceso.

**Señal de deteccion**

El alumno usa la formula del trabajo isotérmico (integral de p dV con T constante) para calcular el trabajo en un proceso adiabático, o dibuja la misma curva para ambos procesos.

**Correccion conceptual**

La distincion se hace mediante la condición del proceso: ausencia de calor para el adiabático, temperatura constante para el isotérmico. La formula del trabajo adiabático usa [[gamma]] y los estados inicial y final; la isoterma usa el logaritmo de la razon de volumenes. El diagrama pV muestra claramente que la adiabata es más inclinada.

**Mini-ejemplo de contraste**

Para un gas diatomico con [[V2]] = 2 [[V1]] y [[T1]] = 300 K: el trabajo isotérmico es el producto de la presión inicial, el volumen inicial y el logaritmo de 2, mientras que el trabajo adiabático es distinto y la temperatura final es 228 K, no 300 K.

## Errores de modelo

### Error 3: "La ley adiabática pV elevado a [[gamma]] vale para cualquier proceso adiabático"

**Por que parece correcto**

La formula se presenta en los libros como "la ecuación del proceso adiabático", sin enfatizar que solo vale para el proceso reversible cuasiestatico. El alumno la aplica sin revisar si el proceso cumple esas condiciones.

**Por que es incorrecto**

En una expansión adiabatica irreversible, como la expansión libre contra el vacío, el gas no realiza trabajo y [[DeltaU]] = 0. La temperatura no cambia aunque el volumen aumente. En ese caso, la ley adiabatica reversible no se cumple porque la entropía del gas aumenta durante el proceso irreversible, a diferencia del proceso reversible donde la entropía es constante.

**Señal de deteccion**

El alumno aplica la formula de la adiabata a una expansión libre o a un proceso con friccion y obtiene resultados incoherentes.

**Correccion conceptual**

La ley adiabática reversible solo aplica a procesos adiabaticos **reversibles**. Para procesos irreversibles, la relación entre estados inicial y final depende del tipo de irreversibilidad. La condición adiabatica sin intercambio de calor es necesaria pero no suficiente para usar esa ley.

**Mini-ejemplo de contraste**

Un gas se expande adiabáticamente contra el vacío (expansión de Joule). El volumen se duplica, no hay calor ni trabajo intercambiado, por lo que [[DeltaU]] es nulo y [[T2]] coincide con [[T1]]. La ley adiabática reversible predice [[T2]] igual a 228 K para un gas diatomico, lo que es incorrecto. El resultado correcto es [[T2]] igual a 300 K porque no hay trabajo.

## Errores matemáticos

### Error 4: "Usar temperatura en Celsius en las formulas de la adiabata"

**Por que parece correcto**

En la vida cotidiana la temperatura se mide en Celsius. Muchos problemas introductorios también la dan en Celsius, y el alumno la sustituye directamente en las formulas sin convertir. Como las diferencias de temperatura son iguales en Celsius y en Kelvin, el alumno no siente la incoherencia en problemas de diferencias.

**Por que es incorrecto**

Las formulas de la adiabata y de la energía interna del gas ideal usan temperatura absoluta en Kelvin. La razon es que la energía interna es proporcional a la temperatura absoluta, no a la Celsius. Si se usa Celsius, la razon [[T2]]/[[T1]] queda mal calculada y el resultado puede ser físicamente absurdo (temperatura negativa o ratio incorrecto).

**Señal de deteccion**

El alumno da [[T1]] = 27 grados en las formulas y obtiene [[T2]] = 0.76 x 27 ≈ 20 grados, que parece razonable pero es incorrecto. El resultado correcto parte de [[T1]] = 300 K y da [[T2]] ≈ 228 K.

**Correccion conceptual**

Siempre convertir temperatura a Kelvin sumando 273.15 antes de sustituir en cualquier formula termodinámica con temperatura absoluta. Las formulas con la razon [[T2]]/[[T1]] son especialmente sensibles a este error porque la razon depende del valor absoluto, no de la diferencia.

**Mini-ejemplo de contraste**

Con [[T1]] igual a 27 °C (300 K) y expansión que duplica el volumen con [[gamma]] igual a 1.4, usando Celsius se obtendría [[T2]] aproximadamente 20.5 °C, descenso de solo 6.5 °C. Usando Kelvin se obtiene [[T2]] aproximadamente 228 K (−45 °C), descenso de 72 grados. La diferencia es enorme y cambia toda la interpretacion física.

## Errores de interpretacion

### Error 5: "Si el trabajo es positivo, la temperatura debe subir"

**Por que parece correcto**

En muchas situaciones cotidianas, recibir trabajo (frotar, comprimir, golpear) calienta los objetos. El alumno generaliza esto sin distinguir entre quien realiza el trabajo. La confusion surge de mezclar el convenio de signo: si W positivo significa trabajo del gas sobre el entorno, el gas pierde energía y se enfria.

**Por que es incorrecto**

En el convenio usado en este leaf, [[W]] > 0 significa que el gas realiza trabajo sobre el entorno (expansión). Al hacer trabajo, el gas pierde energía interna y su temperatura baja. [[W]] < 0 significa que el entorno realiza trabajo sobre el gas (compresión), y entonces el gas se calienta. El signo de [[W]] no indica calentamiento ni enfriamiento por si mismo: hay que relacionarlo con quien recibe el trabajo.

**Señal de deteccion**

El alumno concluye que un gas que se expande adiabáticamente (realizando trabajo positivo) debe calentarse, o que una compresión adiabatica (trabajo negativo sobre el gas segun el convenio del alumno) debe enfriar el gas.

**Correccion conceptual**

El calentamiento o enfriamiento en proceso adiabático depende de si el gas realiza trabajo o lo recibe. Expansión: el gas realiza [[W]] > 0, pierde energía interna, [[T2]] < [[T1]]. Compresión: el gas recibe trabajo, gana energía interna, [[T2]] > [[T1]]. El primer principio adiabático, [[DeltaU]] = -[[W]], resume esto: si [[W]] > 0, [[DeltaU]] < 0, temperatura baja.

**Mini-ejemplo de contraste**

Un compresor empuja un gas adiabáticamente. El trabajo realizado sobre el gas es positivo segun el convenio termodinámico (trabajo recibido). La temperatura del gas sube. Esto es lo contrario de lo que ocurre en la expansión adiabatica donde el gas empuja y se enfria. La clave es identificar quien realiza el trabajo y sobre quien.

## Regla de autocontrol rápido

Antes de aceptar un resultado en un proceso adiabático, comprobar tres cosas. Primero: ¿el tipo de proceso es correcto? Si el volumen cambio, la temperatura debe cambiar; si alguien afirma que no cambia, el proceso seria isotérmico. Segundo: ¿el signo de [[DeltaT_ad]] es coherente con el tipo de proceso? Expansión implica [[T2]] < [[T1]]; compresión implica [[T2]] > [[T1]]. Tercero: ¿[[DeltaU]] y [[W]] son opuestos en signo e iguales en magnitud? Si no, el balance energético adiabático no se cumple y hay un error de calculo.

Una verificacion rápida adicional es calcular el trabajo dos veces: una con la formula del trabajo adiabático y otra como el negativo de [[DeltaU]]. Si los dos valores coinciden dentro de precision, el resultado es coherente con el primer principio adiabático.
