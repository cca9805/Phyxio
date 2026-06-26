# manómetros - Modelo y validez

## Modelo ideal
El modelo ideal del leaf es hidrostatico y se resume en la cadena:
[[dp]] = [[rho]] * [[g]] * [[dh]]
[[p2]] = [[p1]] + [[dp]]
Su fuerza didactica es que transforma una lectura geometrica, [[dh]], en una lectura de presion, [[dp]]. Si el sistema esta en equilibrio, el desnivel no es un detalle visual: es la forma en que el instrumento expresa una diferencia real de presion.

## Hipotesis
- El fluido manometrico esta en reposo o en cuasi equilibrio.
- La densidad [[rho]] puede tratarse como constante.
- La lectura [[dh]] es vertical.
- [[p1]] y [[p2]] usan la misma referencia de presion.

## Dominio de validez cuantitativo
El modelo funciona especialmente bien cuando el desnivel satisface una lectura clara y el instrumento permanece en regimen estable. En practica escolar e industrial simple, un criterio razonable es trabajar con [[dh]] > 0 y con oscilaciones pequenas respecto al desnivel medio. Tambien conviene recordar un orden de magnitud: con agua, 0.10 m producen unos 981 Pa; con mercurio, un desnivel de solo unos milimetros ya puede representar varios cientos de pascales. Ese contraste cuantitativo muestra por que la seleccion del fluido importa.

## Senales de fallo del modelo
Hay avisos observables de que la lectura simple [[dp]] = [[rho]] * [[g]] * [[dh]] ya no basta. Si el menisco oscila y no aparece una posicion estable, el sistema todavia no esta en equilibrio. Si el valor cambia mucho segun el punto desde el que se lea, el problema esta en la lectura geometrica y no en la ecuacion. Tambien hay fallo de modelo cuando la presion inferida contradice el comportamiento esperado del proceso o cuando el enunciado mezcla presion absoluta y manometrica sin fijar una referencia comun.

## Modelo extendido o alternativo
Si el manómetro contiene varios fluidos inmiscibles o varias ramas con interfaces, el modelo ya no puede reducirse a una sola [[rho]]. En ese caso se usa una suma algebraica de contribuciones hidrostaticas por tramos. Cada tramo aporta su propio producto densidad por gravedad por altura, y el balance final entre puntos se obtiene acumulando esas contribuciones. Cuando conviene cambiar de modelo queda claro en cuanto una sola [[rho]] o un solo [[dh]] dejan de representar fielmente el montaje real.

## Comparacion operativa
El modelo ideal es mejor cuando hay una sola columna manometrica dominante, lectura estable y referencia clara. El modelo extendido es necesario cuando aparecen varios fluidos, geometria mas compleja o referencias encadenadas. La regla operativa es simple: si el esquema puede reducirse sin ambiguedad a un unico [[dh]] y una unica [[rho]], usa el modelo ideal; si no, pasa al extendido antes de calcular.

Las senales observables que empujan a ese cambio son claras: menisco oscilante, resultados demasiado sensibles al punto de lectura, contradiccion con el comportamiento esperado o mezcla ambigua entre presion absoluta y manometrica. En resumen, el leaf ensena una jerarquia clara: primero un modelo ideal para leer [[dp]] con rapidez y despues, si la geometria o los fluidos lo exigen, un modelo extendido capaz de conservar la trazabilidad fisica de la lectura.

