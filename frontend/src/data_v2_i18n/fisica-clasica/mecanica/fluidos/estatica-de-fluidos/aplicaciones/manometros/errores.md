# Errores frecuentes en manómetros

## Errores conceptuales

### Error 1: Creer que el manómetro mide presion absoluta por si solo
Muchos alumnos ven una escala y suponen que el instrumento devuelve directamente la presion del sistema.
- **Por que parece correcto**: En la practica de laboratorio se habla de "leer la presion en el manómetro" y eso suena a lectura directa.
- **Por que es incorrecto**: El manómetro mide primero un desnivel [[dh]], lo traduce en una diferencia [[dp]], y solo con una referencia [[p1]] permite reconstruir [[p2]].
- **Senal de deteccion**: El alumno obtiene un numero en Pa pero no puede decir respecto a que referencia esta definido.
- **Correccion**: Separar siempre lectura diferencial y presion final. Pregunta obligatoria: "cual es la referencia de presion en este problema".
- **Mini-ejemplo**: Dos manómetros con el mismo [[dh]] pueden corresponder a presiones absolutas distintas si uno usa referencia atmosferica y el otro otra rama del sistema.

### Error 2: Confundir desnivel vertical con longitud del tubo
En tubos inclinados o curvados es muy comun medir la distancia visible a lo largo del vidrio.
- **Por que parece correcto**: La regla se apoya de forma natural sobre el tubo, no sobre la vertical.
- **Por que es incorrecto**: La relacion manometrica usa [[dh]], diferencia de altura vertical. El equilibrio hidrostatico depende del peso de la columna vertical equivalente, no del camino geometrico del tubo.
- **Senal de deteccion**: El resultado de [[dp]] sale demasiado grande y no coincide con la intuicion del desnivel observado.
- **Correccion**: Dibujar primero una referencia horizontal y extraer solo la diferencia de cotas.
- **Mini-ejemplo**: Un tubo muy inclinado puede mostrar una longitud mojada de 20 cm y un desnivel vertical real de solo 5 cm.

## Errores de modelo

### Error 3: Usar la densidad del fluido del proceso en vez de la del liquido manometrico
Este error aparece mucho cuando el sistema mide aire, gas o vapor, pero el manómetro contiene agua o mercurio.
- **Por que parece correcto**: El alumno piensa en el fluido del problema principal y olvida el instrumento concreto.
- **Por que es incorrecto**: La columna que equilibra la presion es la del liquido manometrico. Por tanto, la densidad relevante en 

{{f:manometro}}

 es [[rho]] del fluido del manómetro.
- **Senal de deteccion**: El resultado cambia de forma absurda al pasar de agua a mercurio aunque el desnivel observado sea el mismo.
- **Correccion**: Antes de sustituir, responder por escrito: "que fluido forma la columna que estoy leyendo".
- **Mini-ejemplo**: Un manómetro que mide aire comprimido con agua usa la densidad del agua, no la del aire comprimido.

### Error 4: Aplicar la ecuacion basica cuando el instrumento no esta en equilibrio
Si el montaje vibra o recibe pulsaciones fuertes, la lectura puede oscilar.
- **Por que parece correcto**: La ecuacion es corta y da la impresion de ser universal.
- **Por que es incorrecto**: La ley basica es hidrostatica. Si la columna acelera, ya no basta con el balance de pesos.
- **Senal de deteccion**: El menisco no se estabiliza y el operador elige un punto cualquiera del movimiento.
- **Correccion**: Usar promedio temporal, amortiguacion o un sensor adecuado al regimen dinamico.
- **Mini-ejemplo**: En una linea con pulsaciones de bomba, la columna sube y baja continuamente y la lectura instantanea deja de ser una medida fiable de [[dp]].

## Errores matematicos

### Error 5: Olvidar conversiones de unidades
La forma mas comun es usar [[dh]] en cm o mm mientras [[rho]] y [[g]] estan en SI.
- **Por que parece correcto**: El desnivel se lee visualmente en cm y parece una unidad inocente.
- **Por que es incorrecto**: La ecuacion produce Pa solo si [[dh]] se expresa en metros.
- **Senal de deteccion**: Un desnivel de pocos centimetros produce diferencias de presion del orden de cientos de kPa, algo fisicamente desproporcionado.
- **Correccion**: Pasar siempre cm -> m o mm -> m antes de sustituir.
- **Mini-ejemplo**: 10 cm de agua representan 0.10 m, no 10 m; la diferencia entre ambos resultados es un factor 100.

### Error 6: Cambiar el signo de la diferencia de presion sin revisar la convencion
El alumno mira que una columna sube y concluye automaticamente que debe "sumar" sin pensar la rama de referencia.
- **Por que parece correcto**: La imagen del tubo induce respuestas rapidas de arriba y abajo.
- **Por que es incorrecto**: El signo de [[dp]] depende de como se haya definido la presion de referencia y de que rama se compare con cual.
- **Senal de deteccion**: El resultado final contradice el propio dibujo: la rama que parecia tener mas presion termina con menos.
- **Correccion**: Escribir primero la convencion verbal: "tomare positiva la diferencia entre [[p2]] y [[p1]]".
- **Mini-ejemplo**: Si la rama 2 empuja mas, entonces [[p2]] es mayor que [[p1]]; si se define [[dp]] como diferencia entre [[p2]] y [[p1]], el signo debe salir positivo.

## Errores de interpretacion

### Error 7: Cerrar el ejercicio con un numero y sin lectura fisica
El alumno obtiene [[dp]] o [[p2]] y termina sin explicar que significa el resultado en el sistema.
- **Por que parece correcto**: El formato escolar premia muchas veces el numero final.
- **Por que es incorrecto**: En instrumentacion, el valor solo sirve si se interpreta como normal, anomalo, alto, bajo o compatible con el estado del equipo.
- **Senal de deteccion**: No se puede responder si el filtro esta sucio, si la linea pierde carga o si el montaje es coherente.
- **Correccion**: Anadir siempre una frase causal: que implica el [[dp]] calculado para el sistema real.
- **Mini-ejemplo**: 250 Pa en un filtro no es "solo un numero": puede ser el umbral de sustitucion del elemento.

## Regla de autocontrol rapido
Antes de dar por buena una resolucion de manómetros, aplica esta secuencia:
1. Verifica que [[dh]] sea vertical y este en metros.
2. Comprueba que [[rho]] pertenece al fluido manometrico, no al fluido del proceso.
3. Calcula [[dp]] con 

{{f:manometro}}

.
4. Declara la referencia [[p1]] antes de obtener [[p2]].
5. Cierra con una frase fisica: que dice esa lectura sobre el sistema real.

