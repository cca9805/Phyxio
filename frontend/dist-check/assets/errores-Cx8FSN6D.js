const e=`\uFEFF# Errores frecuentes en manómetros\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que el manómetro mide presion absoluta por si solo\r
Muchos alumnos ven una escala y suponen que el instrumento devuelve directamente la presion del sistema.\r
- **Por que parece correcto**: En la practica de laboratorio se habla de "leer la presion en el manómetro" y eso suena a lectura directa.\r
- **Por que es incorrecto**: El manómetro mide primero un desnivel [[dh]], lo traduce en una diferencia [[dp]], y solo con una referencia [[p1]] permite reconstruir [[p2]].\r
- **Senal de deteccion**: El alumno obtiene un numero en Pa pero no puede decir respecto a que referencia esta definido.\r
- **Correccion**: Separar siempre lectura diferencial y presion final. Pregunta obligatoria: "cual es la referencia de presion en este problema".\r
- **Mini-ejemplo**: Dos manómetros con el mismo [[dh]] pueden corresponder a presiones absolutas distintas si uno usa referencia atmosferica y el otro otra rama del sistema.\r
\r
### Error 2: Confundir desnivel vertical con longitud del tubo\r
En tubos inclinados o curvados es muy comun medir la distancia visible a lo largo del vidrio.\r
- **Por que parece correcto**: La regla se apoya de forma natural sobre el tubo, no sobre la vertical.\r
- **Por que es incorrecto**: La relacion manometrica usa [[dh]], diferencia de altura vertical. El equilibrio hidrostatico depende del peso de la columna vertical equivalente, no del camino geometrico del tubo.\r
- **Senal de deteccion**: El resultado de [[dp]] sale demasiado grande y no coincide con la intuicion del desnivel observado.\r
- **Correccion**: Dibujar primero una referencia horizontal y extraer solo la diferencia de cotas.\r
- **Mini-ejemplo**: Un tubo muy inclinado puede mostrar una longitud mojada de 20 cm y un desnivel vertical real de solo 5 cm.\r
\r
## Errores de modelo\r
\r
### Error 3: Usar la densidad del fluido del proceso en vez de la del liquido manometrico\r
Este error aparece mucho cuando el sistema mide aire, gas o vapor, pero el manómetro contiene agua o mercurio.\r
- **Por que parece correcto**: El alumno piensa en el fluido del problema principal y olvida el instrumento concreto.\r
- **Por que es incorrecto**: La columna que equilibra la presion es la del liquido manometrico. Por tanto, la densidad relevante en \r
\r
{{f:manometro}}\r
\r
 es [[rho]] del fluido del manómetro.\r
- **Senal de deteccion**: El resultado cambia de forma absurda al pasar de agua a mercurio aunque el desnivel observado sea el mismo.\r
- **Correccion**: Antes de sustituir, responder por escrito: "que fluido forma la columna que estoy leyendo".\r
- **Mini-ejemplo**: Un manómetro que mide aire comprimido con agua usa la densidad del agua, no la del aire comprimido.\r
\r
### Error 4: Aplicar la ecuacion basica cuando el instrumento no esta en equilibrio\r
Si el montaje vibra o recibe pulsaciones fuertes, la lectura puede oscilar.\r
- **Por que parece correcto**: La ecuacion es corta y da la impresion de ser universal.\r
- **Por que es incorrecto**: La ley basica es hidrostatica. Si la columna acelera, ya no basta con el balance de pesos.\r
- **Senal de deteccion**: El menisco no se estabiliza y el operador elige un punto cualquiera del movimiento.\r
- **Correccion**: Usar promedio temporal, amortiguacion o un sensor adecuado al regimen dinamico.\r
- **Mini-ejemplo**: En una linea con pulsaciones de bomba, la columna sube y baja continuamente y la lectura instantanea deja de ser una medida fiable de [[dp]].\r
\r
## Errores matematicos\r
\r
### Error 5: Olvidar conversiones de unidades\r
La forma mas comun es usar [[dh]] en cm o mm mientras [[rho]] y [[g]] estan en SI.\r
- **Por que parece correcto**: El desnivel se lee visualmente en cm y parece una unidad inocente.\r
- **Por que es incorrecto**: La ecuacion produce Pa solo si [[dh]] se expresa en metros.\r
- **Senal de deteccion**: Un desnivel de pocos centimetros produce diferencias de presion del orden de cientos de kPa, algo fisicamente desproporcionado.\r
- **Correccion**: Pasar siempre cm -> m o mm -> m antes de sustituir.\r
- **Mini-ejemplo**: 10 cm de agua representan 0.10 m, no 10 m; la diferencia entre ambos resultados es un factor 100.\r
\r
### Error 6: Cambiar el signo de la diferencia de presion sin revisar la convencion\r
El alumno mira que una columna sube y concluye automaticamente que debe "sumar" sin pensar la rama de referencia.\r
- **Por que parece correcto**: La imagen del tubo induce respuestas rapidas de arriba y abajo.\r
- **Por que es incorrecto**: El signo de [[dp]] depende de como se haya definido la presion de referencia y de que rama se compare con cual.\r
- **Senal de deteccion**: El resultado final contradice el propio dibujo: la rama que parecia tener mas presion termina con menos.\r
- **Correccion**: Escribir primero la convencion verbal: "tomare positiva la diferencia entre [[p2]] y [[p1]]".\r
- **Mini-ejemplo**: Si la rama 2 empuja mas, entonces [[p2]] es mayor que [[p1]]; si se define [[dp]] como diferencia entre [[p2]] y [[p1]], el signo debe salir positivo.\r
\r
## Errores de interpretacion\r
\r
### Error 7: Cerrar el ejercicio con un numero y sin lectura fisica\r
El alumno obtiene [[dp]] o [[p2]] y termina sin explicar que significa el resultado en el sistema.\r
- **Por que parece correcto**: El formato escolar premia muchas veces el numero final.\r
- **Por que es incorrecto**: En instrumentacion, el valor solo sirve si se interpreta como normal, anomalo, alto, bajo o compatible con el estado del equipo.\r
- **Senal de deteccion**: No se puede responder si el filtro esta sucio, si la linea pierde carga o si el montaje es coherente.\r
- **Correccion**: Anadir siempre una frase causal: que implica el [[dp]] calculado para el sistema real.\r
- **Mini-ejemplo**: 250 Pa en un filtro no es "solo un numero": puede ser el umbral de sustitucion del elemento.\r
\r
## Regla de autocontrol rapido\r
Antes de dar por buena una resolucion de manómetros, aplica esta secuencia:\r
1. Verifica que [[dh]] sea vertical y este en metros.\r
2. Comprueba que [[rho]] pertenece al fluido manometrico, no al fluido del proceso.\r
3. Calcula [[dp]] con \r
\r
{{f:manometro}}\r
\r
.\r
4. Declara la referencia [[p1]] antes de obtener [[p2]].\r
5. Cierra con una frase fisica: que dice esa lectura sobre el sistema real.\r
\r
`;export{e as default};
