# Ejemplo tipo examen

## Enunciado

Una cuerda de guitarra de longitud sesenta y cinco centimetros vibra en su segundo armonico. Se observa que los nodos de desplazamiento estan separados treinta y dos punto cinco centimetros entre si.

Se pide calcular:
- La longitud de onda de la onda estacionaria
- La posicion del tercer nodo respecto al puente inferior  
- La distancia desde el puente inferior hasta el segundo antinodo

## Datos

- Longitud de la cuerda: sesenta y cinco centimetros
- Distancia entre nodos consecutivos: treinta y dos punto cinco centimetros
- Modo de vibracion: segundo armonico

## Definicion del sistema

El sistema consiste en una cuerda fija en ambos extremos que vibra en su segundo modo normal. En este modo, la cuerda presenta tres nodos incluyendo los dos extremos fijos y dos antinodos ubicados entre los nodos. La onda estacionaria resulta de la superposicion de ondas viajeras que se reflejan en los extremos.

## Modelo fisico

Se aplica el modelo de onda estacionaria en cuerda con extremos fijos. Las posiciones de nodos y antinodos vienen determinadas por las relaciones geometricas derivadas de la interferencia de ondas.

Las magnitudes fundamentales son [[lambda_onda]] para la longitud de onda, [[distancia_entre_nodos]] para la separacion entre nodos consecutivos, [[posicion_nodo]] para la ubicacion de cada nodo, y [[posicion_antinodo]] para la ubicacion de cada antinodo.

## Justificacion del modelo

El modelo de onda estacionaria con nodos en los extremos es aplicable porque la cuerda esta rigidamente fijada en ambos puentes, lo que impone la condicion de amplitud nula en esos puntos. La hipotesis de onda armonica es valida para amplitudes pequenas donde la tension de la cuerda permanece aproximadamente constante.

El modelo deja de ser valido si las amplitudes son tan grandes que la tension varia significativamente durante la oscilacion, o si existen perdidas por amortiguamiento que alteren las posiciones nodales.

## Resolucion simbolica

Para la distancia entre nodos consecutivos, aplicamos la formula fundamental:

{{f:distancia_nodos}}

Esta relacion indica que la distancia entre nodos es exactamente la mitad de la longitud de onda.

Despejando la longitud de onda:

[[lambda_onda]] = 2 * [[distancia_entre_nodos]]

Para la posicion del tercer nodo, utilizamos la formula de posicion nodal:

{{f:posicion_nodo_lambda}}

Donde [[numero_nodo]] representa el orden del nodo comenzando desde cero. Para el tercer nodo, el indice es 2.

Para la posicion del segundo antinodo, aplicamos la formula de posicion de antinodos:

{{f:posicion_antinodo_lambda}}

Donde [[numero_antinodo]] representa el orden del antinodo. Para el segundo antinodo, el indice es 1.

## Sustitucion numerica

Para la longitud de onda, usando la distancia entre nodos medida:

{{f:distancia_nodos}}

Despejando [[lambda_onda]], sustituimos [[distancia_entre_nodos]] por el valor medido.

Sustituyendo [[distancia_entre_nodos]] por 32.5 cm, obtenemos una longitud de onda de 65 cm.

Para la posicion del tercer nodo, con indice 2:

{{f:posicion_nodo_lambda}}

Aplicando [[numero_nodo]] igual a 2 y [[lambda_onda]] igual a 65 cm, la posicion nodal cae en el extremo derecho.

El resultado de 65 cm indica que el tercer nodo coincide con el extremo final de la cuerda, verificando las condiciones de contorno.

Para la posicion del segundo antinodo, con indice 1:

{{f:posicion_antinodo_lambda}}

Aplicando [[numero_antinodo]] igual a 1 y [[lambda_onda]] igual a 65 cm, se obtiene el antinodo interno pedido.

El calculo produce una posicion de 48.75 cm para el segundo antinodo.

Para comprobar la separacion local entre un nodo y el antinodo mas cercano usamos:

{{f:distancia_nodo_antinodo}}

Con [[lambda_onda]] igual a 65 cm, [[distancia_nodo_antinodo]] vale 16.25 cm. Esta distancia confirma que cada antinodo queda a un cuarto de longitud de onda respecto del nodo vecino.

La lectura de amplitud se apoya en:

{{f:amplitud_maxima_antinodo}}

La [[amplitud_maxima]] no cambia la posicion de nodos o antinodos; solo indica que el antinodo es el punto de mayor oscilacion del patron estacionario.

## Validacion dimensional

Verificacion de las dimensiones:

- Longitud de onda [[lambda_onda]]: unidades de longitud `[L]` - correcto
- Posicion del nodo [[posicion_nodo]]: unidades de longitud `[L]` - correcto
- Posicion del antinodo [[posicion_antinodo]]: unidades de longitud `[L]` - correcto
- Distancia nodo-antinodo [[distancia_nodo_antinodo]]: unidades de longitud `[L]` - correcto
- Amplitud maxima [[amplitud_maxima]]: unidades de longitud `[L]` - correcto

Todas las magnitudes resultantes tienen dimensiones consistentes con magnitudes espaciales.

## Interpretacion fisica

El patron de nodos y antinodos que hemos calculado revela la estructura espacial fundamental de una onda estacionaria en una cuerda con extremos fijos. La coincidencia entre [[lambda_onda]] y la longitud total de la cuerda no es arbitraria: indica que el sistema vibra en su segundo modo normal, donde la cuerda alberga exactamente una longitud de onda completa distribuida entre sus extremos.

Los puntos de amplitud nula —los nodos— representan ubicaciones donde las ondas viajeras que componen el patron se anulan permanentemente por interferencia destructiva. Esta cancelacion perfecta ocurre porque, en cada instante, una onda alcanza su maximo positivo mientras la otra alcanza su maximo negativo con identica magnitud. El resultado neto es reposo permanente, aunque la cuerda a ambos lados del nodo oscila vigorosamente.

En contraste, los antinodos manifestan interferencia constructiva. En estos puntos, ambas ondas viajeras llegan en fase: cuando una alcanza su desplazamiento maximo positivo, la otra hace lo mismo. La superposicion produce [[amplitud_maxima]], que supera la amplitud de cualquiera de las ondas individuales. Esta dualidad entre cancelacion y refuerzo extremos es la esencia fisica del patron estacionario.

La [[distancia_entre_nodos]] —la mitad de [[lambda_onda]]— define la escala espacial minima del patron. Si conocieramos solo esta distancia, podriamos reconstruir toda la estructura: los nodos estarian espaciados uniformemente por intervalos identicos, y los antinodos ocuparian las posiciones intermedias exactamente a [[distancia_nodo_antinodo]] de cada nodo vecino.

La regularidad de este patron tiene implicaciones practicas inmediatas. Un violinista sabe que el segundo armonico resuena mejor cuando se excita la cuerda cerca del antinodo central, no cerca de los nodos. Un ingeniero que diseña un transductor de ultrasonido coloca los electrodos detectores en los antinodos para maximizar la sensibilidad. El conocimiento de estas posiciones no es meramente numerico: determina donde actuar sobre el sistema para obtener el efecto deseado.

Si la longitud de la cuerda se modificara manteniendo la tension, todo el patron se escalaria proporcionalmente. Una cuerda mas corta produciria nodos y antinodos mas cercanos, implicando una [[lambda_onda]] menor y, por tanto, una frecuencia de vibracion mas alta. Esta relacion entre geometria, longitud de onda y frecuencia es el fundamento de la afinacion de instrumentos de cuerda.

---

# Ejemplo de aplicacion real

## Contexto

En el diseno de transductores de ultrasonido para aplicaciones medicas, es crucial conocer la distribucion exacta de nodos y antinodos en el elemento piezoelectrico. Estos dispositivos operan mediante ondas estacionarias para concentrar energia en puntos especificos.

Un transductor medico opera a frecuencia de un megahertzio, generando ondas estacionarias en un cristal de cuarzo. La velocidad de propagacion del sonido en el cuarzo es de cinco mil setecientos metros por segundo.

## Estimacion fisica

El cristal piezoelectrico tiene espesor de dos milimetros. Para determinar la distribucion de nodos y antinodos:

Primero estimamos la longitud de onda en el material. Usando la relacion basica donde la velocidad es igual a la frecuencia multiplicada por la longitud de onda, despejamos que la longitud de onda equivale a la velocidad dividida por la frecuencia.

Sustituyendo valores: cinco mil setecientos metros por segundo dividido por un millon de hercios da cero punto cero cero cinco siete metros, equivalente a cinco punto siete milimetros.

Comparando con el espesor del cristal (dos milimetros), observamos que el espesor es menor que media longitud de onda (dos punto ochenta y cinco milimetros). Esto implica que el cristal opera en modo de media onda estacionaria.

En este modo, los extremos del cristal funcionan como nodos de desplazamiento, y existe un unico antinodo central donde la amplitud de oscilacion es maxima.

La distancia entre nodos en este material seria de aproximadamente dos punto ochenta y cinco milimetros.

## Interpretacion

El diseno muestra que el cristal opera en modo de media onda estacionaria, con los extremos siendo nodos de desplazamiento. La colocacion de electrodos de deteccion en el antinodo central (a un milimetro de cada cara) maximiza la sensibilidad del transductor.

La frecuencia de un megahertzio es tipica para imagen medica de alta resolucion. La pequena diferencia entre el espesor real y media longitud de onda indica que el diseno podria optimizarse ajustando ligeramente la frecuencia o el espesor para lograr resonancia perfecta.

Este ejemplo ilustra como el concepto abstracto de nodos y antinodos determina directamente el diseno fisico y el rendimiento de dispositivos medicos de alta tecnologia. La posicion exacta del antinodo central es critica para la eficiencia del transductor.
