const e=`# Errores comunes: definicion de momento de inercia\r
\r
## Errores conceptuales\r
\r
### Error 1: Tratar I como propiedad del objeto y no del par objeto-eje\r
\r
**Por qué parece correcto:**  \r
La masa si es una propiedad propia del objeto, asi que es tentador pensar que el momento de inercia tambien lo es.\r
\r
**Por qué es incorrecto:**  \r
I depende del eje porque todas las distancias radiales cambian cuando el eje cambia. Un mismo cilindro puede tener inercias distintas respecto al eje longitudinal y respecto a un eje transversal.\r
\r
**Señal de detección:**  \r
El alumno escribe "el momento de inercia del cuerpo es..." sin declarar el eje.\r
\r
**Corrección conceptual:**  \r
Escribir siempre "momento de inercia del cuerpo respecto al eje..." antes de empezar el calculo.\r
\r
**Mini-ejemplo de contraste:**  \r
Una barra larga gira con mucha menos dificultad respecto a su propio eje longitudinal que respecto a un eje perpendicular por su centro. La masa es la misma; cambia el eje y cambia I.\r
\r
### Error 2: Pensar que solo importa la masa total\r
\r
**Por qué parece correcto:**  \r
Dos cuerpos con la misma masa parecen "igualmente pesados", y eso invita a creer que responderan igual al mismo torque.\r
\r
**Por qué es incorrecto:**  \r
La definicion discreta y continua ponderan la distancia al eje con r^2. La geometria de la distribucion es decisiva.\r
\r
**Señal de detección:**  \r
El alumno afirma que un disco y un anillo de igual masa y radio tienen el mismo momento de inercia.\r
\r
**Corrección conceptual:**  \r
Comparar siempre como se reparte la masa respecto al eje antes de comparar valores de I.\r
\r
**Mini-ejemplo de contraste:**  \r
Un anillo concentra masa en la periferia y por eso tiene mayor I que un disco macizo de igual masa y radio exterior.\r
\r
## Errores de modelo\r
\r
### Error 3: Usar definicion discreta cuando el problema exige una distribucion continua\r
\r
**Por qué parece correcto:**  \r
Descomponer un cuerpo en unas pocas masas parece mas rapido que integrar.\r
\r
**Por qué es incorrecto:**  \r
Si la geometria continua es la que controla la respuesta, una discretizacion pobre puede borrar el efecto real de [[dm]], [[rho]] y la forma del cuerpo.\r
\r
**Señal de detección:**  \r
El resultado depende mas del numero arbitrario de puntos elegidos que de la geometria real.\r
\r
**Corrección conceptual:**  \r
Pasar a\r
\r
{{f:definicion_continua}}\r
\r
cuando la densidad continua y la forma del cuerpo sean parte del problema.\r
\r
**Mini-ejemplo de contraste:**  \r
Un disco uniforme no debe modelarse con una sola masa puntual en el borde. Esa eleccion exagera artificialmente su inercia.\r
\r
### Error 4: Suponer que I es constante cuando la masa se redistribuye\r
\r
**Por qué parece correcto:**  \r
Si el cuerpo no gana ni pierde masa, parece natural mantener el mismo valor de I.\r
\r
**Por qué es incorrecto:**  \r
El valor de I cambia si cambian las distancias al eje, aunque la masa total permanezca igual.\r
\r
**Señal de detección:**  \r
El alumno analiza un patinador o un sistema desplegable manteniendo fijo el mismo I durante todo el movimiento.\r
\r
**Corrección conceptual:**  \r
Reconocer que el leaf define I para una distribucion concreta. Si la distribucion cambia, debe recalcularse.\r
\r
**Mini-ejemplo de contraste:**  \r
Cuando un patinador recoge los brazos, disminuye su distancia media al eje y por tanto tambien disminuye I.\r
\r
## Errores matemáticos\r
\r
### Error 5: Olvidar el cuadrado en la distancia al eje\r
\r
**Por qué parece correcto:**  \r
La formula lineal\r
\r
{{f:definicion_discreta}}\r
\r
suena intuitiva y parece mantener la idea de "masa por distancia".\r
\r
**Por qué es incorrecto:**  \r
La definicion correcta es cuadratica. Sin el cuadrado se pierde la fisica del leaf y tambien cambian las unidades.\r
\r
**Señal de detección:**  \r
El resultado sale en kg*m en lugar de kg*m^2.\r
\r
**Corrección conceptual:**  \r
Comprobar siempre que cada contribucion individual tenga forma [[m_i]] por [[r_i]] al cuadrado o [[r]] al cuadrado por [[dm]].\r
\r
**Mini-ejemplo de contraste:**  \r
Duplicar r debe cuadruplicar la contribucion a I. Si en la cuenta solo la duplica, la formula usada es incorrecta.\r
\r
### Error 6: Confundir radio geometrico con radio de giro\r
\r
**Por qué parece correcto:**  \r
Ambos tienen unidades de longitud y ambos se nombran con lenguaje radial.\r
\r
**Por qué es incorrecto:**  \r
k no es una dimension fisica visible del objeto, sino una distancia equivalente definida por\r
\r
{{f:radio_giro}}\r
\r
.\r
\r
**Señal de detección:**  \r
El alumno impone sin justificar que\r
\r
{{f:definicion_continua}}\r
\r
para cualquier cuerpo.\r
\r
**Corrección conceptual:**  \r
Calcular k a partir de I y m o interpretarlo como radio equivalente, no como radio real.\r
\r
**Mini-ejemplo de contraste:**  \r
En un disco macizo,\r
\r
{{f:definicion_continua}}\r
\r
. En un anillo fino,\r
\r
{{f:definicion_continua}}\r
\r
.\r
\r
## Errores de interpretación\r
\r
### Error 7: Leer un I grande como si siempre fuera "mejor"\r
\r
**Por qué parece correcto:**  \r
En muchos contextos tecnicos se asocia un valor grande de I con robustez o estabilidad, y eso invita a tratarlo como una ventaja universal.\r
\r
**Por qué es incorrecto:**  \r
Un [[I]] grande significa dos cosas a la vez: cuesta mas cambiar la velocidad angular y tambien se almacena mas energia a igualdad de [[omega]]. La lectura correcta depende del objetivo fisico del sistema.\r
\r
**Señal de detección:**  \r
El alumno concluye automaticamente que "mas I es mejor" sin distinguir entre respuesta rapida y almacenamiento.\r
\r
**Corrección conceptual:**  \r
Interpretar I junto con la pregunta del problema: aceleracion, estabilidad, filtrado dinamico o capacidad energetica.\r
\r
**Mini-ejemplo de contraste:**  \r
Para un volante de inercia conviene un I alto, pero para una herramienta que debe arrancar rapido puede convenir uno menor.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar cualquier calculo de momento de inercia, aplicar este protocolo:\r
\r
1. Declarar el eje.\r
2. Verificar si el modelo es discreto o continuo.\r
3. Comprobar que toda distancia que entra sea perpendicular al eje.\r
4. Revisar unidades: I debe quedar en kg*m^2.\r
5. Preguntar si la distribucion de masa usada representa de verdad al sistema.`;export{e as default};
