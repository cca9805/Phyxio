# Ejemplo tipo examen

## Enunciado

Dos cuerpos se encuentran sobre un mismo eje horizontal. El cuerpo 1 tiene masa [[m1]] = 2 kg y esta en [[x1]] = 0 m. El cuerpo 2 tiene masa [[m2]] = 6 kg y esta en [[x2]] = 4 m. Define el sistema, calcula la masa total [[M]], calcula la coordenada [[xcm]] del centro de masas y explica por que el resultado no coincide con el punto medio geometrico. Usa tambien la lectura estructural [[Mxcm]] para comprobar la coherencia del calculo.

## Datos

| Magnitud | Valor |
|---|---|
| [[m1]] | 2 kg |
| [[x1]] | 0 m |
| [[m2]] | 6 kg |
| [[x2]] | 4 m |

Las posiciones se miden desde el mismo origen y hacia el mismo sentido positivo. Las masas son no negativas, por lo que el resultado final debe quedar entre 0 m y 4 m.

## Definicion del sistema

El sistema esta formado solo por los dos cuerpos indicados. No se incluye la mesa, el soporte ni ningun cuerpo externo. La definicion del centro de masas depende de esta frontera: si se incluyera otra masa, [[M]], [[Mxcm]] y [[xcm]] cambiarian. El modelo es unidimensional porque las dos posiciones relevantes se dan sobre el mismo eje.

## Modelo fisico

La masa total se obtiene con la definicion operativa:

{{f:M}}

La coordenada del centro de masas se obtiene como promedio ponderado:

{{f:xcm}}

La forma multiplicada permite comprobar el momento espacial total:

{{f:Mxcm}}

La generalizacion vectorial existe como extension conceptual:

{{f:rcm_general}}

En este ejercicio se usa el caso escalar, pero la idea es la misma que en la forma vectorial: cada posicion cuenta segun la masa que la ocupa.

## Justificacion del modelo

El modelo es valido porque los cuerpos se tratan como masas puntuales y sus posiciones se miden con un origen comun. No estamos calculando el centro de masas interno de cada cuerpo, sino el punto representativo del sistema formado por ambos. Como [[m2]] es mayor que [[m1]] y esta en [[x2]], se espera que [[xcm]] quede mas cerca de 4 m que de 0 m.

## Resolucion simbolica

Primero se construye la masa total [[M]] a partir de las masas parciales. Despues se forma el numerador ponderado: la posicion [[x1]] se pondera con [[m1]] y la posicion [[x2]] se pondera con [[m2]]. La coordenada final [[xcm]] resulta de dividir esa suma ponderada por [[M]].

La relacion [[Mxcm]] permite leer el mismo resultado sin perder estructura: el producto entre masa total y posicion colectiva debe coincidir con la suma de aportes espaciales de los dos cuerpos. Si esa igualdad no se cumple, se ha cambiado alguna masa o posicion durante la sustitucion.

Como extension, si el mismo razonamiento se aplicara a mas particulas o a un plano, se sustituiria cada masa puntual por una contribucion generica [[m_i]] situada en un vector [[r_i]], y el resultado seria el vector [[rcm]]:

{{f:rcm_general}}

Esta forma no se usa para el numero final del ejercicio, pero confirma que la definicion de [[xcm]] es el caso unidimensional de una regla mas general.

## Sustitucion numerica

La masa total es [[M]] = 8 kg. El aporte espacial del cuerpo 1 es nulo porque esta en el origen. El aporte espacial del cuerpo 2 domina el numerador porque combina una masa de 6 kg con una posicion de 4 m. La suma ponderada vale 24 kg m.

Al dividir 24 kg m entre 8 kg se obtiene [[xcm]] = 3 m. La lectura estructural es [[Mxcm]] = 24 kg m, coherente con la suma de aportes del sistema respecto al origen.

## Validacion dimensional

La magnitud [[M]] queda en kg. La magnitud [[Mxcm]] queda en kg m, porque combina masa y posicion. Al dividir kg m entre kg, [[xcm]] queda en metros. La dimension final es de longitud, como corresponde a una posicion.

Tambien se valida el rango: 3 m esta entre [[x1]] = 0 m y [[x2]] = 4 m. Ademas, 3 m esta mas cerca de 4 m que de 0 m, exactamente lo esperado porque [[m2]] es la masa dominante.

## Interpretacion fisica

El resultado no significa que exista una particula real en 3 m. Significa que el sistema de dos cuerpos tiene una posicion colectiva equivalente en ese punto. El punto medio geometrico seria 2 m, pero ese valor ignoraria que el segundo cuerpo tiene tres veces mas masa que el primero. La definicion de centro de masas corrige esa intuicion geometrica y desplaza el resultado hacia la masa mayor.

Si [[m1]] y [[m2]] fueran iguales, el centro coincidiria con el punto medio. Si [[m2]] aumentara, [[xcm]] se acercaria aun mas a [[x2]]. Estas variaciones muestran que la definicion no es una formula aislada, sino una herramienta para interpretar distribuciones de masa.

# Ejemplo de aplicacion real

## Contexto

Un tecnico coloca una bateria y una caja de herramientas sobre una tabla ligera. La bateria se aproxima como [[m1]] situada cerca del extremo izquierdo, y la caja como [[m2]] situada hacia la derecha. El objetivo no es estudiar la tabla, sino estimar donde queda el punto representativo de las dos cargas para decidir donde colocar un apoyo.

## Estimacion fisica

Antes de calcular, el tecnico observa que la caja es mas pesada y esta mas alejada del origen. Por tanto, espera que [[xcm]] quede claramente desplazado hacia la caja. Si la tabla mide 1 m y la caja esta cerca de 0.8 m, una estimacion razonable podria situar el centro de masas entre 0.5 m y 0.8 m, no cerca del extremo izquierdo.

La lectura cuantitativa se hace con las mismas magnitudes del ejemplo: se define [[M]], se calcula [[Mxcm]] como suma ponderada y se divide para obtener [[xcm]]. Si el resultado queda fuera de la tabla, se debe revisar si las posiciones se han medido desde el mismo origen.

## Interpretacion

La aplicacion real muestra para que sirve la definicion: transforma una distribucion de cargas en una posicion de decision. El apoyo debe colocarse cerca de [[xcm]] si se quiere evitar un giro inicial. No basta con mirar el centro geometrico de la tabla, porque el sistema fisico relevante son las cargas y sus posiciones.

Si el tecnico anadiera mas cargas, la tabla de dos cuerpos dejaria de ser suficiente y pasaria a una lista de contribuciones [[m_i]]. Si esas cargas estuvieran repartidas en una superficie, cada una tendria un vector [[r_i]] y el punto representativo seria [[rcm]]. La lectura practica no cambia: el centro se desplaza hacia las contribuciones mas pesadas y mas alejadas.

## Lista de verificacion

1. ¿Estan definidas todas las masas del sistema?
2. ¿[[x1]] y [[x2]] usan el mismo origen?
3. ¿[[M]] es la suma de las masas incluidas?
4. ¿[[xcm]] queda dentro del intervalo de posiciones?
5. ¿El resultado se desplaza hacia la masa mayor?
