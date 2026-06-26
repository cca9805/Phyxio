# Ejemplo tipo examen

## Enunciado

Tres masas puntuales se colocan sobre una guía horizontal. La primera masa [[m_1]] = 2 kg está en [[x_1]] = 0 m. La segunda masa [[m_2]] = 5 kg está en [[x_2]] = 3 m. Una tercera masa [[m_i]] = 1 kg está en [[x_i]] = -1 m. Calcula la masa total [[M]] y la posición [[xcm]] del centro de masas del sistema discreto. Después interpreta hacia qué lado se desplaza el resultado.

## Datos

| Magnitud | Valor |
|---|---|
| [[m_1]] | 2 kg |
| [[x_1]] | 0 m |
| [[m_2]] | 5 kg |
| [[x_2]] | 3 m |
| [[m_i]] | 1 kg |
| [[x_i]] | -1 m |

El eje positivo se toma hacia la derecha. Todas las posiciones están medidas desde el mismo origen, situado en la posición de la primera masa.

## Definición del sistema

El sistema está formado solo por las tres masas puntuales declaradas. No se incluye la guía, el soporte ni ningún rozamiento. La magnitud global buscada es [[xcm]], y la masa total [[M]] se calcula con todas las contribuciones discretas. Este planteamiento es finito: no hay densidad continua ni integración.

## Modelo físico

El modelo físico es el de sistema discreto unidimensional. Cada masa actúa como un peso dentro de un promedio ponderado. El cálculo usa primero la suma de masas y después la relación general de centro de masas. Para mostrar el caso mínimo, también puede compararse con la forma de dos masas, pero aquí la tercera contribución obliga a usar la suma general.

{{f:masa_total_discreta}}

{{f:centro_masas_general}}

{{f:centro_masas_dos_masas}}

## Justificación del modelo

El modelo es válido porque las masas están concentradas en posiciones bien definidas, todas sobre el mismo eje y con un origen común. La guía solo fija la geometría; no forma parte de la distribución de masa. Si los bloques tuvieran tamaño apreciable o masa distribuida, habría que pasar al modelo de cuerpos extendidos. Aquí, en cambio, cada bloque se aproxima como masa puntual y la suma discreta captura la física dominante.

## Resolución simbólica

Primero se calcula la masa total:

[[M]] = [[m_1]] + [[m_2]] + [[m_i]].

Después se construye el numerador del promedio ponderado:

primer momento discreto = [[m_1]][[x_1]] + [[m_2]][[x_2]] + [[m_i]][[x_i]].

La coordenada del centro de masas queda como ese primer momento dividido por [[M]]. La lectura física de la expresión es directa: cada posición tira del resultado con intensidad proporcional a su masa.

## Sustitución numérica

Al sumar las tres masas se obtiene [[M]] = 8 kg. Al combinar cada masa con su posición, el primer momento discreto queda dominado por la masa de 5 kg situada a la derecha. El numerador total es 14 kg m.

Al dividir 14 kg m entre 8 kg se obtiene [[xcm]] = 1.75 m. Este valor está entre -1 m y 3 m, como exige un sistema con masas positivas. También queda más cerca de [[x_2]] = 3 m que del origen, porque [[m_2]] es la contribución dominante.

## Validación dimensional

La masa total [[M]] queda en kg porque suma masas. El numerador tiene unidades kg m porque cada término multiplica masa por posición. Al dividir kg m entre kg, [[xcm]] queda en m. La dimensión es correcta y el rango también: -1 m <= 1.75 m <= 3 m.

## Interpretación física

El resultado no significa que exista una partícula real en 1.75 m. Significa que, para describir la distribución discreta global, las tres masas se comportan traslacionalmente como si su masa total estuviera concentrada en esa posición. La masa de 5 kg situada en [[x_2]] arrastra el promedio hacia la derecha, mientras que la masa de 1 kg situada en posición negativa corrige el resultado hacia la izquierda.

Si se retirara la masa de 1 kg, [[xcm]] aumentaría; si se duplicara [[m_1]] en el origen, [[xcm]] se acercaría al origen. Esta lectura es más importante que el número aislado porque permite prever cómo cambia el sistema al redistribuir masas.

# Ejemplo de aplicación real

## Contexto

Un equipo diseña una plataforma con tres módulos: una batería, un sensor y una unidad de control. Cada módulo puede aproximarse como una masa puntual porque sus dimensiones son pequeñas frente a la separación entre puntos de montaje. El objetivo es comprobar si el centro de masas queda cerca del eje de apoyo.

## Estimación física

Antes de calcular, se observa que la batería es el módulo más pesado y está a la derecha del eje, aproximadamente a 0.40 m del origen elegido. El sensor está cerca del eje y la unidad de control queda algo a la izquierda, por lo que la lectura cualitativa anticipa un [[xcm]] positivo, pero menor que la posición de la batería. Si el eje de apoyo admite una zona segura de unos 0.10 m alrededor del origen, una estimación en torno a 0.20 m ya indicaría que conviene recolocar la batería o añadir una masa compensadora. Si el resultado saliera a la izquierda, habría un error de signo o se habría asociado alguna masa con la posición incorrecta.

## Interpretación

El cálculo discreto permite decidir si mover un módulo o añadir contrapeso. La variable útil no es solo [[M]], sino la posición [[xcm]] respecto al eje de apoyo. Si [[xcm]] cae fuera de la zona segura, el diseño puede volcar o exigir soportes adicionales. En este contexto, el leaf convierte una lista de componentes en una decisión de diseño.

## Lista de verificación

1. ¿Todas las posiciones usan el mismo origen?
2. ¿Cada masa se ha emparejado con su propia posición?
3. ¿La masa total [[M]] incluye todas las masas del sistema?
4. ¿El resultado [[xcm]] queda dentro del rango geométrico?
5. ¿La masa dominante explica el sesgo del resultado?
