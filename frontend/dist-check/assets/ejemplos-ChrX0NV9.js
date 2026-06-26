const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un laboratorio compara dos rotores con la misma masa total [[m]] de 4 kg y el mismo radio exterior [[R_geo]] de 0.20 m, pero con distinta distribucion de masa respecto al eje central. El rotor A puede modelarse como cuatro masas puntuales iguales situadas en la periferia. El rotor B puede modelarse como un disco macizo uniforme de la misma masa y radio. Se pide:\r
\r
1. Calcular el momento de inercia [[I]] de ambos respecto al eje central.\r
2. Calcular la aceleracion angular [[alpha]] de cada rotor si se aplica el mismo torque neto [[tau]] de 0.40 N*m.\r
3. Interpretar cual de los dos almacena mas energia cinetica rotacional [[K_rot]] si ambos alcanzan la misma velocidad angular [[omega]] de 20 rad/s.\r
\r
## Datos\r
\r
- Masa total de cada rotor [[m]]: 4 kg.\r
- Radio exterior [[R_geo]]: 0.20 m.\r
- Para el rotor A, cada masa puntual [[m_i]] vale 1 kg.\r
- Para el rotor A, cada distancia al eje [[r_i]] vale 0.20 m.\r
- Para el rotor B: disco uniforme.\r
- Torque neto aplicado [[tau]]: 0.40 N*m.\r
- Velocidad angular de comparacion [[omega]]: 20 rad/s.\r
\r
## Definición del sistema\r
\r
El eje de giro es el mismo en ambos casos: perpendicular al plano del rotor y pasando por el centro. Esa declaracion es indispensable, porque el momento de inercia [[I]] siempre se define respecto a un eje explicito.\r
\r
El rotor A es un sistema discreto, por lo que su inercia se construye con la definicion discreta. El rotor B es un cuerpo continuo sencillo, pero como se trata de un disco macizo uniforme puede modelarse con el resultado tabulado que procede de la definicion continua.\r
\r
## Modelo físico\r
\r
Para el rotor A, cada masa puntual [[m_i]] aporta una contribucion proporcional al cuadrado de [[r_i]]. Para el rotor B, la masa no esta toda en la periferia: la distribucion continua se representa con elementos diferenciales [[dm]] repartidos desde el eje hasta el borde. Esa diferencia geometrica hace que, aun con la misma masa total [[m]] y el mismo [[R_geo]], no se obtenga el mismo [[I]].\r
\r
La clave fisica es que la distribucion radial cambia la respuesta dinamica. El problema no puede resolverse leyendo solo [[m]]. Hace falta construir [[I]] a partir de la forma en que esa masa ocupa el espacio respecto al eje.\r
\r
## Justificación del modelo\r
\r
La justificacion es directa. El rotor A puede tratarse como discreto porque las masas estan localizadas en posiciones concretas y bien separadas. El rotor B puede tratarse como disco uniforme porque su distribucion es continua y simetrica. Una vez calculado [[I]], la respuesta dinamica se obtiene con la ley rotacional y la comparacion energetica se cierra con la energia de rotacion.\r
\r
## Resolución simbólica\r
\r
### Rotor A: sistema discreto\r
\r
Usamos la definicion discreta:\r
\r
{{f:definicion_discreta}}\r
\r
Como las cuatro masas son iguales y estan a la misma distancia del eje, el valor de [[I]] se obtiene sumando cuatro contribuciones identicas.\r
\r
### Rotor B: disco macizo\r
\r
Para un disco uniforme, el resultado tabulado procedente de la definicion continua da un momento de inercia igual a la mitad de [[m]] por el cuadrado de [[R_geo]].\r
\r
La relacion continua de partida es:\r
\r
{{f:definicion_continua}}\r
\r
### Comparacion dinamica\r
\r
Aplicamos la ley rotacional:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Con el mismo [[tau]], el rotor de mayor [[I]] tendra menor [[alpha]].\r
\r
### Comparacion energetica\r
\r
Usamos la relacion de energia rotacional:\r
\r
{{f:energia_rotacional}}\r
\r
A igualdad de [[omega]], el rotor de mayor [[I]] almacenara mayor [[K_rot]].\r
\r
### Lectura geometrica compacta\r
\r
Si se quiere condensar la geometria en una sola distancia equivalente [[k]], se usa:\r
\r
{{f:radio_giro}}\r
\r
## Sustitución numérica\r
\r
Primero calculamos los momentos de inercia.\r
\r
Para el rotor A, cada contribucion individual vale 1 kg por 0.20 m al cuadrado, es decir 0.04 kg*m^2. Como hay cuatro masas puntuales, el resultado total es [[I]] = 0.16 kg*m^2.\r
\r
Para el rotor B, el disco uniforme da [[I]] = 0.5 por 4 kg por 0.20 m al cuadrado, por lo que resulta [[I]] = 0.08 kg*m^2.\r
\r
Ahora calculamos las aceleraciones angulares [[alpha]] con el mismo [[tau]] de 0.40 N*m.\r
\r
Para el rotor A, [[alpha]] = 0.40 / 0.16 = 2.5 rad/s^2.\r
\r
Para el rotor B, [[alpha]] = 0.40 / 0.08 = 5.0 rad/s^2.\r
\r
El rotor B responde el doble de rapido porque tiene la mitad de inercia rotacional respecto al mismo eje.\r
\r
Calculamos ahora la energia cinetica rotacional [[K_rot]] para [[omega]] = 20 rad/s.\r
\r
Para el rotor A, [[K_rot]] = 0.5 por 0.16 por 20 al cuadrado = 32 J.\r
\r
Para el rotor B, [[K_rot]] = 0.5 por 0.08 por 20 al cuadrado = 16 J.\r
\r
Finalmente, interpretamos cada geometria con el radio de giro [[k]].\r
\r
Para el rotor A, [[k]] = raiz de 0.16 / 4 = 0.20 m.\r
\r
Para el rotor B, [[k]] = raiz de 0.08 / 4, aproximadamente 0.14 m.\r
\r
Esto confirma que el rotor A equivale a colocar toda la masa en el borde, mientras que el rotor B equivale a concentrarla mas cerca del eje.\r
\r
## Validación dimensional\r
\r
En todos los pasos:\r
\r
- [[I]] queda en kg*m^2.\r
- [[alpha]] queda en rad/s^2.\r
- [[K_rot]] queda en J.\r
- [[k]] queda en m.\r
\r
Las unidades son coherentes con las relaciones del leaf.\r
\r
## Interpretación física\r
\r
El ejemplo muestra la idea central del leaf: con la misma masa total [[m]] y el mismo radio exterior [[R_geo]], no se obtiene la misma inercia si cambia la distribucion radial. El rotor A coloca toda la masa efectiva en la periferia; por eso su [[I]] es mayor. En consecuencia, el mismo [[tau]] produce menor [[alpha]].\r
\r
Tambien se ve por que [[I]] entra en la energia rotacional. A igualdad de [[omega]], el rotor A almacena el doble de [[K_rot]] que el rotor B porque tiene el doble de momento de inercia. No hay contradiccion: una geometria que cuesta mas acelerar tambien almacena mas energia una vez puesta a girar.\r
\r
Esto significa que [[I]] no solo resume cuanta materia hay, sino donde domina esa materia respecto al eje. Cuando la masa se desplaza hacia fuera, aumenta la palanca inercial de cada porcion y disminuye la respuesta angular al mismo [[tau]].\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En el diseno de un volante de inercia para recuperar energia en una maquina industrial, un ingeniero duda entre dos opciones de igual masa total [[m]]: un disco casi macizo y un rotor con masa mas concentrada hacia la periferia. La variable de diseno no es solo cuanta masa hay, sino donde se coloca esa masa.\r
\r
## Estimación física\r
\r
Antes de cerrar el diseno, el ingeniero hace una lectura cuantitativa rapida. Si el volante tiene masa total [[m]] de 10 kg y radio maximo [[R_geo]] de 0.30 m, una estimacion de orden de magnitud sugiere que [[I]] debe quedar del orden de 1 kg*m^2. Ese valor ya permite anticipar escalas de respuesta. Si se quiere un rotor que cambie de [[omega]] con facilidad, un [[I]] de ese orden puede ser demasiado alto. Si se quiere almacenar [[K_rot]] y suavizar fluctuaciones, puede ser deseable.\r
\r
Supongamos dos alternativas:\r
\r
- Opcion compacta: [[I]] = 0.45 kg*m^2.\r
- Opcion periferica: [[I]] = 0.90 kg*m^2.\r
\r
Con el mismo torque motor [[tau]] de 3 N*m, las aceleraciones angulares [[alpha]] estimadas son 6.7 rad/s^2 para la opcion compacta y 3.3 rad/s^2 para la opcion periferica.\r
\r
Si ambas alcanzan la misma [[omega]] de 50 rad/s, las energias almacenadas [[K_rot]] son aproximadamente 560 J y 1125 J, respectivamente.\r
\r
## Interpretación\r
\r
La lectura ingenieril es clara: concentrar masa hacia fuera penaliza la respuesta dinamica inmediata, pero mejora la capacidad de almacenamiento energetico. Dicho de otro modo, una geometria con mayor [[k]] y mayor [[I]] filtra mejor las variaciones de velocidad, aunque requiere mas esfuerzo para arrancar o frenar.\r
\r
La variable dominante aqui no es solo [[m]], sino la distribucion radial equivalente expresada por [[k]] o por el propio [[I]]. En una etapa posterior, el diseno tambien debe respetar limites reales de tension o densidad superficial efectiva, asociados a magnitudes como [[sigma]], para evitar que el aumento de inercia comprometa la seguridad del rotor.`;export{a as default};
