const e=`\uFEFF# Ecuación de Bernoulli — Errores comunes\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que mayor presion implica mayor velocidad\r
\r
#### Por que parece correcto\r
En la vida cotidiana asociamos presion con fuerza y con movimiento rapido: «a mas presion, mas fuerte sale el agua».\r
\r
#### Por que es incorrecto\r
La ecuacion de Bernoulli dice exactamente lo contrario en un conducto: donde la velocidad [[v]] aumenta, la presion [[p]] debe caer para conservar la energia total [[H]]. Mayor velocidad consume energia de presion.\r
\r
#### Senal de deteccion\r
El alumno afirma que en la garganta de un Venturi la presion es maxima porque el fluido «va mas apretado».\r
\r
#### Correccion conceptual\r
Repetir la cadena causal: menor seccion → mayor velocidad → menor presion estatica. La presion total se conserva, no la estatica.\r
\r
#### Mini-ejemplo\r
En una manguera de jardin, al tapar parcialmente la salida (menor seccion), el agua sale mas rapido pero la presion estatica en ese punto es menor, no mayor.\r
\r
### Error 2: aplicar Bernoulli entre puntos que no estan en la misma linea de corriente\r
\r
#### Por que parece correcto\r
Bernoulli parece una formula universal y el alumno la aplica entre cualquier par de puntos del fluido.\r
\r
#### Por que es incorrecto\r
La constancia de [[H]] solo esta garantizada a lo largo de una misma trayectoria de particula. Entre lineas de corriente distintas, [[H]] puede variar si el flujo tiene vorticidad.\r
\r
#### Senal de deteccion\r
Se comparan un punto dentro de un chorro y otro en el fluido en reposo circundante sin justificar que pertenecen a la misma linea de corriente.\r
\r
#### Correccion conceptual\r
Antes de sustituir, dibujar la trayectoria del fluido y verificar que los dos puntos elegidos estan sobre ella.\r
\r
#### Mini-ejemplo\r
En un deposito con un orificio lateral, el punto de la superficie libre y el punto del chorro de salida estan conectados por la misma linea de corriente. Pero un punto en la pared opuesta del deposito no lo esta necesariamente.\r
\r
## Errores de modelo\r
\r
### Error 3: ignorar las perdidas de carga en tuberias reales\r
\r
#### Por que parece correcto\r
La ecuacion ideal no tiene terminos de friccion, y los resultados «cierran» algebraicamente.\r
\r
#### Por que es incorrecto\r
En tuberias largas o con accesorios la viscosidad disipa energia mecanica en calor. El modelo ideal sobreestima la velocidad y el caudal.\r
\r
#### Senal de deteccion\r
El caudal calculado es muy superior al medido o la velocidad de salida parece fisicamente imposible.\r
\r
#### Correccion conceptual\r
Comparar la energia ideal con las perdidas esperadas usando Darcy-Weisbach. Si h_f supera el 5 % de la altura disponible, el modelo ideal ya no basta.\r
\r
#### Mini-ejemplo\r
Un tubo liso de 30 m y 5 cm de diametro que conecta dos depositos con 10 m de desnivel: el modelo ideal predice 14 m/s, pero el calculo con perdidas reales arroja menos de 3 m/s.\r
\r
### Error 4: usar Bernoulli cuando el flujo es compresible\r
\r
#### Por que parece correcto\r
El aire parece ligero y el alumno no piensa en efectos de compresibilidad.\r
\r
#### Por que es incorrecto\r
A velocidades cercanas o superiores a Mach 0,3, la densidad [[rho]] ya no puede tratarse como constante y la ecuacion incompresible subestima la velocidad real.\r
\r
#### Senal de deteccion\r
La velocidad calculada supera 100 m/s en aire y el alumno no cuestiona la validez del resultado.\r
\r
#### Correccion conceptual\r
Verificar siempre el numero de Mach: si Ma > 0{,}3, usar la forma compresible de Bernoulli o las relaciones isentropicas.\r
\r
#### Mini-ejemplo\r
En un conducto de ventilacion con aire a 120 m/s, Ma es aproximadamente 0,35. El error por usar el modelo incompresible puede llegar al 10 %.\r
\r
## Errores matematicos\r
\r
### Error 5: mezclar presion absoluta y presion manometrica\r
\r
#### Por que parece correcto\r
Los manometros de campo dan presion relativa (manometrica), y el alumno la inserta directamente sin convertir.\r
\r
#### Por que es incorrecto\r
En la ecuacion de Bernoulli, si un punto usa presion absoluta y otro manometrica, aparece un error sistematico cercano a 101 325 Pa.\r
\r
#### Senal de deteccion\r
El resultado cambia drasticamente si se suma o se resta la presion atmosferica a un dato.\r
\r
#### Correccion conceptual\r
Declarar al inicio del problema si se trabaja con presiones absolutas o manometricas y mantener la coherencia en ambos puntos.\r
\r
#### Mini-ejemplo\r
Si una presion es 200 kPa absoluta y la otra 100 kPa manometrica, la diferencia real queda cercana a menos 1,3 kPa, no 100 kPa.\r
\r
### Error 6: olvidar el factor 2 en la altura de velocidad\r
\r
#### Por que parece correcto\r
Al despejar la velocidad de la energia cinetica, el factor un medio se pierde facilmente en cadenas algebraicas largas.\r
\r
#### Por que es incorrecto\r
Omitir el factor 2 produce un error del 41 % en la velocidad calculada.\r
\r
#### Senal de deteccion\r
La velocidad calculada aparece alrededor de 1,41 veces mayor o menor de lo esperado.\r
\r
#### Correccion conceptual\r
Antes de sustituir, escribir la formula completa con todos los factores y verificar dimensiones.\r
\r
#### Mini-ejemplo\r
Con una altura de 5 m, la velocidad correcta ronda 9,9 m/s; si se olvida el factor 2, el resultado baja a unos 7,0 m/s, cerca de un 29 % menos.\r
\r
## Errores de interpretacion\r
\r
### Error 7: cerrar el ejercicio con un numero sin lectura fisica\r
\r
#### Por que parece correcto\r
El calculo cierra y el numero tiene las unidades correctas.\r
\r
#### Por que es incorrecto\r
Un resultado numerico sin contexto fisico no permite detectar si es razonable. Una velocidad de salida de 300 m/s en agua deberia activar una alarma inmediata.\r
\r
#### Senal de deteccion\r
El alumno no puede anticipar que ocurriria si se modifica una hipotesis del problema.\r
\r
#### Correccion conceptual\r
Toda solucion debe terminar con una frase que interprete el resultado en el contexto del problema y verifique si cae dentro del rango esperado.\r
\r
#### Mini-ejemplo\r
Una velocidad de 9,9 m/s equivale a la velocidad de caida libre desde 5 m. Ese resultado es coherente con Torricelli y confirma la conversion total de energia potencial en cinetica.\r
\r
## Regla de autocontrol rapido\r
Antes de cerrar un problema de Bernoulli: (1) verificar que los dos puntos pertenecen a la misma linea de corriente, (2) comprobar que todas las presiones son del mismo tipo (absolutas o manometricas), (3) confirmar Ma menor que 0,3 y flujo estacionario, y (4) interpretar el signo y la magnitud del resultado en terminos fisicos.\r
\r
`;export{e as default};
