# Ejemplo tipo examen

## Enunciado

Un laboratorio compara dos rotores con la misma masa total [[m]] de 4 kg y el mismo radio exterior [[R_geo]] de 0.20 m, pero con distinta distribucion de masa respecto al eje central. El rotor A puede modelarse como cuatro masas puntuales iguales situadas en la periferia. El rotor B puede modelarse como un disco macizo uniforme de la misma masa y radio. Se pide:

1. Calcular el momento de inercia [[I]] de ambos respecto al eje central.
2. Calcular la aceleracion angular [[alpha]] de cada rotor si se aplica el mismo torque neto [[tau]] de 0.40 N*m.
3. Interpretar cual de los dos almacena mas energia cinetica rotacional [[K_rot]] si ambos alcanzan la misma velocidad angular [[omega]] de 20 rad/s.

## Datos

- Masa total de cada rotor [[m]]: 4 kg.
- Radio exterior [[R_geo]]: 0.20 m.
- Para el rotor A, cada masa puntual [[m_i]] vale 1 kg.
- Para el rotor A, cada distancia al eje [[r_i]] vale 0.20 m.
- Para el rotor B: disco uniforme.
- Torque neto aplicado [[tau]]: 0.40 N*m.
- Velocidad angular de comparacion [[omega]]: 20 rad/s.

## Definición del sistema

El eje de giro es el mismo en ambos casos: perpendicular al plano del rotor y pasando por el centro. Esa declaracion es indispensable, porque el momento de inercia [[I]] siempre se define respecto a un eje explicito.

El rotor A es un sistema discreto, por lo que su inercia se construye con la definicion discreta. El rotor B es un cuerpo continuo sencillo, pero como se trata de un disco macizo uniforme puede modelarse con el resultado tabulado que procede de la definicion continua.

## Modelo físico

Para el rotor A, cada masa puntual [[m_i]] aporta una contribucion proporcional al cuadrado de [[r_i]]. Para el rotor B, la masa no esta toda en la periferia: la distribucion continua se representa con elementos diferenciales [[dm]] repartidos desde el eje hasta el borde. Esa diferencia geometrica hace que, aun con la misma masa total [[m]] y el mismo [[R_geo]], no se obtenga el mismo [[I]].

La clave fisica es que la distribucion radial cambia la respuesta dinamica. El problema no puede resolverse leyendo solo [[m]]. Hace falta construir [[I]] a partir de la forma en que esa masa ocupa el espacio respecto al eje.

## Justificación del modelo

La justificacion es directa. El rotor A puede tratarse como discreto porque las masas estan localizadas en posiciones concretas y bien separadas. El rotor B puede tratarse como disco uniforme porque su distribucion es continua y simetrica. Una vez calculado [[I]], la respuesta dinamica se obtiene con la ley rotacional y la comparacion energetica se cierra con la energia de rotacion.

## Resolución simbólica

### Rotor A: sistema discreto

Usamos la definicion discreta:

{{f:definicion_discreta}}

Como las cuatro masas son iguales y estan a la misma distancia del eje, el valor de [[I]] se obtiene sumando cuatro contribuciones identicas.

### Rotor B: disco macizo

Para un disco uniforme, el resultado tabulado procedente de la definicion continua da un momento de inercia igual a la mitad de [[m]] por el cuadrado de [[R_geo]].

La relacion continua de partida es:

{{f:definicion_continua}}

### Comparacion dinamica

Aplicamos la ley rotacional:

{{f:segunda_ley_rotacional}}

Con el mismo [[tau]], el rotor de mayor [[I]] tendra menor [[alpha]].

### Comparacion energetica

Usamos la relacion de energia rotacional:

{{f:energia_rotacional}}

A igualdad de [[omega]], el rotor de mayor [[I]] almacenara mayor [[K_rot]].

### Lectura geometrica compacta

Si se quiere condensar la geometria en una sola distancia equivalente [[k]], se usa:

{{f:radio_giro}}

## Sustitución numérica

Primero calculamos los momentos de inercia.

Para el rotor A, cada contribucion individual vale 1 kg por 0.20 m al cuadrado, es decir 0.04 kg*m^2. Como hay cuatro masas puntuales, el resultado total es [[I]] = 0.16 kg*m^2.

Para el rotor B, el disco uniforme da [[I]] = 0.5 por 4 kg por 0.20 m al cuadrado, por lo que resulta [[I]] = 0.08 kg*m^2.

Ahora calculamos las aceleraciones angulares [[alpha]] con el mismo [[tau]] de 0.40 N*m.

Para el rotor A, [[alpha]] = 0.40 / 0.16 = 2.5 rad/s^2.

Para el rotor B, [[alpha]] = 0.40 / 0.08 = 5.0 rad/s^2.

El rotor B responde el doble de rapido porque tiene la mitad de inercia rotacional respecto al mismo eje.

Calculamos ahora la energia cinetica rotacional [[K_rot]] para [[omega]] = 20 rad/s.

Para el rotor A, [[K_rot]] = 0.5 por 0.16 por 20 al cuadrado = 32 J.

Para el rotor B, [[K_rot]] = 0.5 por 0.08 por 20 al cuadrado = 16 J.

Finalmente, interpretamos cada geometria con el radio de giro [[k]].

Para el rotor A, [[k]] = raiz de 0.16 / 4 = 0.20 m.

Para el rotor B, [[k]] = raiz de 0.08 / 4, aproximadamente 0.14 m.

Esto confirma que el rotor A equivale a colocar toda la masa en el borde, mientras que el rotor B equivale a concentrarla mas cerca del eje.

## Validación dimensional

En todos los pasos:

- [[I]] queda en kg*m^2.
- [[alpha]] queda en rad/s^2.
- [[K_rot]] queda en J.
- [[k]] queda en m.

Las unidades son coherentes con las relaciones del leaf.

## Interpretación física

El ejemplo muestra la idea central del leaf: con la misma masa total [[m]] y el mismo radio exterior [[R_geo]], no se obtiene la misma inercia si cambia la distribucion radial. El rotor A coloca toda la masa efectiva en la periferia; por eso su [[I]] es mayor. En consecuencia, el mismo [[tau]] produce menor [[alpha]].

Tambien se ve por que [[I]] entra en la energia rotacional. A igualdad de [[omega]], el rotor A almacena el doble de [[K_rot]] que el rotor B porque tiene el doble de momento de inercia. No hay contradiccion: una geometria que cuesta mas acelerar tambien almacena mas energia una vez puesta a girar.

Esto significa que [[I]] no solo resume cuanta materia hay, sino donde domina esa materia respecto al eje. Cuando la masa se desplaza hacia fuera, aumenta la palanca inercial de cada porcion y disminuye la respuesta angular al mismo [[tau]].

# Ejemplo de aplicación real

## Contexto

En el diseno de un volante de inercia para recuperar energia en una maquina industrial, un ingeniero duda entre dos opciones de igual masa total [[m]]: un disco casi macizo y un rotor con masa mas concentrada hacia la periferia. La variable de diseno no es solo cuanta masa hay, sino donde se coloca esa masa.

## Estimación física

Antes de cerrar el diseno, el ingeniero hace una lectura cuantitativa rapida. Si el volante tiene masa total [[m]] de 10 kg y radio maximo [[R_geo]] de 0.30 m, una estimacion de orden de magnitud sugiere que [[I]] debe quedar del orden de 1 kg*m^2. Ese valor ya permite anticipar escalas de respuesta. Si se quiere un rotor que cambie de [[omega]] con facilidad, un [[I]] de ese orden puede ser demasiado alto. Si se quiere almacenar [[K_rot]] y suavizar fluctuaciones, puede ser deseable.

Supongamos dos alternativas:

- Opcion compacta: [[I]] = 0.45 kg*m^2.
- Opcion periferica: [[I]] = 0.90 kg*m^2.

Con el mismo torque motor [[tau]] de 3 N*m, las aceleraciones angulares [[alpha]] estimadas son 6.7 rad/s^2 para la opcion compacta y 3.3 rad/s^2 para la opcion periferica.

Si ambas alcanzan la misma [[omega]] de 50 rad/s, las energias almacenadas [[K_rot]] son aproximadamente 560 J y 1125 J, respectivamente.

## Interpretación

La lectura ingenieril es clara: concentrar masa hacia fuera penaliza la respuesta dinamica inmediata, pero mejora la capacidad de almacenamiento energetico. Dicho de otro modo, una geometria con mayor [[k]] y mayor [[I]] filtra mejor las variaciones de velocidad, aunque requiere mas esfuerzo para arrancar o frenar.

La variable dominante aqui no es solo [[m]], sino la distribucion radial equivalente expresada por [[k]] o por el propio [[I]]. En una etapa posterior, el diseno tambien debe respetar limites reales de tension o densidad superficial efectiva, asociados a magnitudes como [[sigma]], para evitar que el aumento de inercia comprometa la seguridad del rotor.