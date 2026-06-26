# Ejemplo tipo examen

## Enunciado

Determina la posición del centro de masas de un sistema binario compuesto por la Tierra y la Luna. Considera que ambos cuerpos son partículas puntuales separadas por una distancia media de 384,400 km. La masa de la Tierra es aproximadamente 81.3 veces la masa de la Luna. Expresa el resultado en kilómetros desde el centro de la Tierra y analiza si este punto se encuentra dentro o fuera del radio terrestre (Radio terrestre ≈ 6,371 km).

## Datos

- Masa de la Tierra [[m1]]: $5.97 \times 10^{24}$ kg
- Masa de la Luna [[m2]]: $7.35 \times 10^{22}$ kg
- Distancia Tierra-Luna [[d]]: $384,400$ km
- Posición de la Tierra [[x1]]: $0$ km (Origen)
- Posición de la Luna [[x2]]: $384,400$ km
- Radio de la Tierra [[R]]: $6,371$ km

## Definición del sistema

El sistema está compuesto por dos cuerpos masivos interactuando gravitatoriamente. Para el cálculo del centro de masas, definimos un sistema de referencia unidimensional (eje X) donde el origen de coordenadas (punto cero) coincide con el centro geométrico de la Tierra. La Luna se sitúa en la parte positiva del eje a la distancia media especificada. El sistema se considera aislado de otras influencias externas (como el Sol) para simplificar la localización del baricentro local.

## Modelo físico

Utilizamos el **Modelo de Partículas Puntuales** para el cálculo del centro de masas. En este modelo, toda la masa de la Tierra [[m1]] y de la Luna [[m2]] se considera concentrada en sus respectivos centros geométricos. Este planteamiento es una aplicación directa de la definición general para $N$ particles:

{{f:rcm_general}}

Donde cada partícula tiene una masa [[m_i]] y una posición [[r_i]]. En nuestro caso unidimensional, el vector [[rcm]] se simplifica a la coordenada [[xcm]]. La masa total del sistema [[M]] se define como la suma simple de ambas inercias. El centro de masas [[xcm]] representa el punto de equilibrio traslacional del sistema Tierra-Luna.

## Justificación del modelo

La aproximación de partículas puntuales es **válida** en este contexto **porque** la distancia entre los cuerpos ($3.8 \times 10^5$ km) es mucho mayor que sus radios físicos ($6,371$ km para la Tierra y $1,737$ km para la Luna). La relación [[R]]/[[d]] debe ser menor que 0.01 para despreciar la distribución interna de masa para el cálculo de la posición del baricentro. **Se asume** que los cuerpos son esféricamente simétricos, lo que permite tratar sus centros geométricos como los puntos donde se aplica la masa efectiva en el modelo de Newton.

## Resolución simbólica

Partimos de la definición general del centro de masas para un conjunto de masas [[m_i]] situadas en posiciones vectoriales [[r_i]]:

{{f:rcm_general}}

Primero, verificamos la validez de la aproximación puntual:

{{f:point_particle_validity}}

Para nuestro caso de dos partículas puntuales en una sola dimensión, esta expresión vectorial se proyecta sobre el eje X. Definimos la masa total del sistema [[M]] mediante la suma de las masas constituyentes:

{{f:M}}

A continuación, aplicamos la definición de centro de masas [[xcm]] para este sistema discreto:

{{f:xcm}}

Dado que hemos situado el origen en la Tierra (donde [[x1]] es $0$), la expresión se simplifica.

## Sustitución numérica

1.  **Cálculo de la masa total [[M]]:**
    Suma: $5.97 \times 10^{24}\text{ kg} + 0.0735 \times 10^{24}\text{ kg}$ da como resultado $6.0435 \times 10^{24}\text{ kg}$.

2.  **Cálculo de la posición [[xcm]]:**
    Operación: $(7.35 \times 10^{22}\text{ kg}) \cdot (384,400\text{ km}) / (6.0435 \times 10^{24}\text{ kg})$
    Resultado: aproximadamente $4,675.6\text{ km}$

**Comprobación de simetría:** Como las masas son muy distintas ([[m1]] es mucho mayor que [[m2]]), el resultado no debe coincidir con el centroide geométrico (que se sitúa en aproximadamente $192,200\text{ km}$).
Es coherente que el baricentro real esté mucho más cerca del cuerpo masivo ($4,676$ km) que del punto medio ($192,200$ km).

## Validación dimensional

Verificamos las unidades del resultado final. La fórmula utilizada para [[xcm]] relaciona longitud y masa.
La dimensión de [[xcm]] es de longitud ($L$), como se deduce de dividir masa por longitud entre masa.
El resultado se expresa en kilómetros (km), que es una unidad de longitud coherente con la escala del problema. El valor obtenido ($4,675.6$ km) es menor que la distancia total ($384,400$ km), lo cual es **coherente** con la definición de un promedio ponderado.

## Interpretación física

El valor calculado es de aproximadamente **4,676 km**. Esto nos **indica** que el centro de masas del sistema Tierra-Luna se encuentra mucho más cerca de la Tierra debido a su enorme superioridad en masa (donde [[m1]] es mucho mayor que [[m2]]). Al comparar este valor con el radio terrestre ([[R]] de $6,371$ km), observamos que el [[xcm]] está por debajo de la superficie.

**Esto implica** que el baricentro del sistema se localiza **dentro** del cuerpo físico de la Tierra, aproximadamente a 1,700 km bajo la superficie. Esta ubicación es la razón por la cual la Tierra no "orbita" a la Luna, sino que ambos cuerpos giran alrededor de este punto interno, provocando el característico "bamboleo" terrestre en su trayectoria orbital. Si la Luna fuera más masiva o estuviera más lejos, el centro de masas [[rcm]] podría salir al espacio exterior, cambiando la naturaleza dinámica del sistema a un planeta doble.

# Ejemplo de aplicación real

## Contexto

Consideremos la estabilidad de una estación espacial modular compuesta por dos secciones: un laboratorio de investigación de 80 toneladas y un módulo de soporte vital de 20 toneladas, conectados por un túnel de 50 metros. Para realizar maniobras de acoplamiento sin generar rotaciones indeseadas, los propulsores deben aplicar la fuerza exactamente en el centro de masas del conjunto.

## Estimación física

Realizamos una **estimación** rápida de la **magnitud** del desplazamiento inercial. Los datos de **escala** son:
- Masa 1 (Laboratorio) [[m1]]: 80,000 kg en [[x1]].
- Masa 2 (Soporte) [[m2]]: 20,000 kg en [[x2]] (a 50 m).
- Masa total [[M]]: 100,000 kg.

Aplicando la lógica de ponderación inercial:
$(80,000 \cdot 0 + 20,000 \cdot 50) / 100,000$ resulta en $10$ m.

## Interpretación

El centro de masas se encuentra a solo 10 metros del módulo más pesado. **Esto significa** que, aunque la estructura mide 50 metros, su "corazón inercial" está fuertemente desplazado hacia el laboratorio. Para los ingenieros de vuelo, esta información es crítica: cualquier empuje aplicado fuera de esa marca de 10 metros generará un torque que hará girar la estación. El CM actúa aquí como el **punto de equilibrio** dinámico; es el único lugar donde la estación se comporta como una simple partícula puntual ante fuerzas externas, permitiendo maniobras de traslación puras y seguras en el espacio.

