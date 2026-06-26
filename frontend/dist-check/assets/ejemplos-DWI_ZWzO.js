const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Se estudia magnitudes angulares en un problema donde el dato importante no es solo numerico, sino estructural: hay que decidir si el sistema relevante es el movil o conjunto de moviles cuya trayectoria se modela y si el entorno puede resumirse como la descripcion angular de un giro alrededor de un eje. El objetivo del examen es justificar por que la relacion\r
\r
{{f:relacion_f_T}}\r
\r
representa el escenario mejor que otras alternativas del tema.\r
\r
## Datos\r
\r
Los datos deben fijar unidades, sentido positivo, geometria y parametros de material o de medio cuando los haya. Antes de operar conviene clasificar cada dato como causa externa, respuesta del sistema o condicion geometrica, porque esa separacion evita mezclar magnitudes que pertenecen a niveles distintos del modelo.\r
Tambien es util marcar desde este punto que datos vienen medidos, cuales se deducen y cuales solo sirven para comprobar coherencia al final.\r
\r
## Definicion del sistema\r
\r
El sistema se define de forma que todas las fuerzas internas irrelevantes queden fuera del balance principal. Esa eleccion debe ser compatible con el paso entre radianes, vueltas, frecuencia [[f]] y variables temporales y con la pregunta fisica central del leaf: que variable cambia, en que eje se mide y con que convencion de signos debe leerse. Si el sistema se escoge mal, el resto del ejercicio queda desordenado aunque las cuentas sean correctas.\r
\r
## Modelo fisico\r
\r
Se adopta el modelo minimo que conserva el mecanismo dominante. Eso significa aceptar que distinguir desplazamiento angular, velocidad angular [[omega]], aceleracion angular y periodo [[T_periodo]] y vigilar cuando se mezclan grados y radianes o magnitudes angulares y lineales sin conversion. Un buen modelo no es el mas largo, sino el que permite interpretar [[theta]] sin introducir parametros que no cambian la conclusion.\r
\r
## Justificacion del modelo\r
\r
La justificacion debe explicar por que el regimen elegido es compatible con la escala del problema, con la geometria disponible y con la precision pedida. En esta fase se descartan modelos rivales que podrian ser mas completos pero no anaden una mejora real para el caso planteado.\r
Una buena justificacion no enumera hipotesis al azar: muestra por que cada una simplifica sin deformar el mecanismo que se quiere estudiar.\r
\r
## Resolucion simbolica\r
\r
La resolucion simbolica empieza con la representacion matematica adecuada del sistema, ya sean ecuaciones horarias, relaciones geometricas o balances pertinentes, y sigue con un despeje limpio de [[theta]]. Conviene conservar la expresion literal hasta ver que dependencia tiene el resultado con cada parametro, porque asi se detecta si el efecto aumenta, disminuye o cambia de signo cuando cambia una condicion del entorno.\r
\r
Las magnitudes angulares del sistema se relacionan mediante las definiciones fundamentales del movimiento periódico.\r
\r
En primer lugar, la relación entre frecuencia y periodo establece que ambas magnitudes son inversas:\r
\r
{{f:relacion_f_T}}\r
\r
A partir de esta definición, la velocidad angular se conecta con la frecuencia mediante la relación angular-frecuencia:\r
\r
{{f:relacion_omega_frecuencia}}\r
\r
De forma equivalente, puede expresarse directamente en función del periodo usando la relación angular-periodo:\r
\r
{{f:relacion_omega_periodo}}\r
\r
Estas relaciones no son fórmulas independientes, sino distintas formas de describir el mismo fenómeno periódico. Elegir una u otra depende de qué magnitud se conoce y cuál se quiere determinar.\r
\r
La geometría del giro se completa con la definición del radian, que conecta el arco [[s]], el radio [[R]] y el ángulo [[theta]]:\r
\r
{{f:definicion_radian}}\r
\r
## Sustitucion numerica\r
\r
La sustitucion numerica se hace al final con conversion explicita de unidades. Un paso util es ordenar los factores segun su papel fisico: primero los que fijan escala, despues los geometricos y al final los coeficientes de modelo. Esa rutina reduce errores y mantiene visible el origen de cada contribucion.\r
Si aparecen varios escenarios, conviene repetir la misma estructura de sustitucion para que la comparacion entre casos sea legible y no se convierta en una lista de numeros sueltos.\r
\r
## Validacion dimensional\r
\r
La validacion dimensional comprueba que la expresion final produzca la categoria correcta de magnitud y que ninguna suma mezcle objetos incompatibles. Si las unidades son coherentes pero el valor obtenido contradice una estimacion previa, hay que revisar signos, proyecciones y dominio de validez antes de aceptar el resultado.\r
En problemas de examen, este paso suele ser el filtro mas rapido para detectar un despeje correcto en apariencia pero fisicamente mal planteado.\r
\r
## Interpretacion fisica\r
\r
La lectura final debe decir que significa [[theta]] en el sistema, que cambia si el contexto se modifica y por que el valor obtenido es compatible con trayectorias, lanzamientos, maniobras, graficas temporales y estimaciones de alcance. Un examen bien resuelto no termina en el numero: termina cuando se explica el mecanismo que ese numero resume. Esa explicacion final es la que permite reutilizar el metodo cuando cambian los datos pero no la estructura fisica del problema.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
En una situacion real, magnitudes angulares aparece junto a incertidumbres de medida, geometria imperfecta y condiciones del entorno que no siempre son ideales. Por eso la primera tarea es decidir que detalle afecta de verdad al resultado y cual puede incorporarse solo como comentario de validez del modelo.\r
\r
## Estimacion fisica\r
\r
La estimacion previa sirve para fijar un rango razonable antes de calcular. Comparar escalas, orientar el signo esperado y anticipar la dependencia con masa, velocidad, angulo o rigidez hace que la solucion numerica tenga una referencia fisica y no sea una cifra aislada.\r
Ese rango previo tambien permite decidir si merece la pena refinar el modelo o si basta con una primera aproximacion bien interpretada.\r
\r
## Interpretacion\r
\r
En aplicacion real interesa responder si el modelo permite tomar una decision: disenar, medir, corregir o comparar escenarios. La interpretacion adecuada separa con claridad lo que viene de la ecuacion, lo que viene de los datos y lo que queda fuera del regimen valido del leaf.`;export{e as default};
