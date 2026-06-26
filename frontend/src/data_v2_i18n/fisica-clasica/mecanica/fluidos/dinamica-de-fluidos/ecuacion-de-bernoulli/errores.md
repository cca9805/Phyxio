# Ecuación de Bernoulli — Errores comunes

## Errores conceptuales

### Error 1: creer que mayor presion implica mayor velocidad

#### Por que parece correcto
En la vida cotidiana asociamos presion con fuerza y con movimiento rapido: «a mas presion, mas fuerte sale el agua».

#### Por que es incorrecto
La ecuacion de Bernoulli dice exactamente lo contrario en un conducto: donde la velocidad [[v]] aumenta, la presion [[p]] debe caer para conservar la energia total [[H]]. Mayor velocidad consume energia de presion.

#### Senal de deteccion
El alumno afirma que en la garganta de un Venturi la presion es maxima porque el fluido «va mas apretado».

#### Correccion conceptual
Repetir la cadena causal: menor seccion → mayor velocidad → menor presion estatica. La presion total se conserva, no la estatica.

#### Mini-ejemplo
En una manguera de jardin, al tapar parcialmente la salida (menor seccion), el agua sale mas rapido pero la presion estatica en ese punto es menor, no mayor.

### Error 2: aplicar Bernoulli entre puntos que no estan en la misma linea de corriente

#### Por que parece correcto
Bernoulli parece una formula universal y el alumno la aplica entre cualquier par de puntos del fluido.

#### Por que es incorrecto
La constancia de [[H]] solo esta garantizada a lo largo de una misma trayectoria de particula. Entre lineas de corriente distintas, [[H]] puede variar si el flujo tiene vorticidad.

#### Senal de deteccion
Se comparan un punto dentro de un chorro y otro en el fluido en reposo circundante sin justificar que pertenecen a la misma linea de corriente.

#### Correccion conceptual
Antes de sustituir, dibujar la trayectoria del fluido y verificar que los dos puntos elegidos estan sobre ella.

#### Mini-ejemplo
En un deposito con un orificio lateral, el punto de la superficie libre y el punto del chorro de salida estan conectados por la misma linea de corriente. Pero un punto en la pared opuesta del deposito no lo esta necesariamente.

## Errores de modelo

### Error 3: ignorar las perdidas de carga en tuberias reales

#### Por que parece correcto
La ecuacion ideal no tiene terminos de friccion, y los resultados «cierran» algebraicamente.

#### Por que es incorrecto
En tuberias largas o con accesorios la viscosidad disipa energia mecanica en calor. El modelo ideal sobreestima la velocidad y el caudal.

#### Senal de deteccion
El caudal calculado es muy superior al medido o la velocidad de salida parece fisicamente imposible.

#### Correccion conceptual
Comparar la energia ideal con las perdidas esperadas usando Darcy-Weisbach. Si h_f supera el 5 % de la altura disponible, el modelo ideal ya no basta.

#### Mini-ejemplo
Un tubo liso de 30 m y 5 cm de diametro que conecta dos depositos con 10 m de desnivel: el modelo ideal predice 14 m/s, pero el calculo con perdidas reales arroja menos de 3 m/s.

### Error 4: usar Bernoulli cuando el flujo es compresible

#### Por que parece correcto
El aire parece ligero y el alumno no piensa en efectos de compresibilidad.

#### Por que es incorrecto
A velocidades cercanas o superiores a Mach 0,3, la densidad [[rho]] ya no puede tratarse como constante y la ecuacion incompresible subestima la velocidad real.

#### Senal de deteccion
La velocidad calculada supera 100 m/s en aire y el alumno no cuestiona la validez del resultado.

#### Correccion conceptual
Verificar siempre el numero de Mach: si Ma > 0{,}3, usar la forma compresible de Bernoulli o las relaciones isentropicas.

#### Mini-ejemplo
En un conducto de ventilacion con aire a 120 m/s, Ma es aproximadamente 0,35. El error por usar el modelo incompresible puede llegar al 10 %.

## Errores matematicos

### Error 5: mezclar presion absoluta y presion manometrica

#### Por que parece correcto
Los manometros de campo dan presion relativa (manometrica), y el alumno la inserta directamente sin convertir.

#### Por que es incorrecto
En la ecuacion de Bernoulli, si un punto usa presion absoluta y otro manometrica, aparece un error sistematico cercano a 101 325 Pa.

#### Senal de deteccion
El resultado cambia drasticamente si se suma o se resta la presion atmosferica a un dato.

#### Correccion conceptual
Declarar al inicio del problema si se trabaja con presiones absolutas o manometricas y mantener la coherencia en ambos puntos.

#### Mini-ejemplo
Si una presion es 200 kPa absoluta y la otra 100 kPa manometrica, la diferencia real queda cercana a menos 1,3 kPa, no 100 kPa.

### Error 6: olvidar el factor 2 en la altura de velocidad

#### Por que parece correcto
Al despejar la velocidad de la energia cinetica, el factor un medio se pierde facilmente en cadenas algebraicas largas.

#### Por que es incorrecto
Omitir el factor 2 produce un error del 41 % en la velocidad calculada.

#### Senal de deteccion
La velocidad calculada aparece alrededor de 1,41 veces mayor o menor de lo esperado.

#### Correccion conceptual
Antes de sustituir, escribir la formula completa con todos los factores y verificar dimensiones.

#### Mini-ejemplo
Con una altura de 5 m, la velocidad correcta ronda 9,9 m/s; si se olvida el factor 2, el resultado baja a unos 7,0 m/s, cerca de un 29 % menos.

## Errores de interpretacion

### Error 7: cerrar el ejercicio con un numero sin lectura fisica

#### Por que parece correcto
El calculo cierra y el numero tiene las unidades correctas.

#### Por que es incorrecto
Un resultado numerico sin contexto fisico no permite detectar si es razonable. Una velocidad de salida de 300 m/s en agua deberia activar una alarma inmediata.

#### Senal de deteccion
El alumno no puede anticipar que ocurriria si se modifica una hipotesis del problema.

#### Correccion conceptual
Toda solucion debe terminar con una frase que interprete el resultado en el contexto del problema y verifique si cae dentro del rango esperado.

#### Mini-ejemplo
Una velocidad de 9,9 m/s equivale a la velocidad de caida libre desde 5 m. Ese resultado es coherente con Torricelli y confirma la conversion total de energia potencial en cinetica.

## Regla de autocontrol rapido
Antes de cerrar un problema de Bernoulli: (1) verificar que los dos puntos pertenecen a la misma linea de corriente, (2) comprobar que todas las presiones son del mismo tipo (absolutas o manometricas), (3) confirmar Ma menor que 0,3 y flujo estacionario, y (4) interpretar el signo y la magnitud del resultado en terminos fisicos.

