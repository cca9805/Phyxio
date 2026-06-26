# Ejemplo tipo examen: El choque de la pelota

## Enunciado

Una pelota de tenis de masa [[m]] se mueve horizontalmente hacia una pared. Tras el impacto, la pelota rebota en sentido contrario con una rapidez menor. El objetivo es determinar la fuerza media [[Fmed]] ejercida por la pared durante el brevísimo intervalo de contacto [[dt]], justificando el modelo impulsivo.

## Datos

Los parámetros físicos que definen el estado inicial y final del sistema son los siguientes:
- Masa inercial del objeto: [[m]] (0.20 kg)
- Velocidad inicial del sistema: [[v0]] (12 m/s, orientada hacia la derecha)
- Velocidad final tras el impacto: [[vF]] (-6 m/s, rebote hacia la izquierda)
- Intervalo temporal de contacto: [[dt]] (0.006 s)

## Definición del sistema

El sistema bajo estudio es la pelota de tenis. Se define de forma que todas las fuerzas internas queden excluidas del balance externo. La interacción con la pared se modela como una fuerza externa neta que actúa durante un tiempo muy breve, generando un impulso [[J]] que produce la variación de la cantidad de movimiento [[DeltaP]].

## Modelo físico

Se adopta el modelo de masa constante y choque impulsivo ideal. Se asume que la fuerza neta externa es la única responsable del cambio cinemático. Se ignoran efectos secundarios como la resistencia del aire o la fuerza gravitatoria durante el intervalo [[dt]], centrándonos en la transferencia de momento por impacto elástico.

## Justificación del modelo

La justificación radica en la escala temporal. El intervalo [[dt]] es tan pequeño (6 ms) que el impulso de la gravedad es despreciable frente al impulso de la fuerza de impacto. Además, se asume que la masa [[m]] se mantiene constante, sin fragmentación del objeto durante la colisión.

## Resolución simbólica

El proceso conecta la cinemática con la dinámica. Primero, calculamos el cambio neto de momento lineal [[DeltaP]] mediante la diferencia entre estados final e inicial:

{{f:cambio_momento}}

Si el movimiento ocurre en un plano bidimensional, el cambio se descompone en sus ejes cartesianos:

{{f:cambio_momento_componentes}}

Donde la cantidad de movimiento se relaciona con la masa y la velocidad:

{{f:impulso_momento_masa_velocidad}}

Finalmente, usando el Teorema Impulso-Momento, despejamos la fuerza media [[Fmed]]:

{{f:fuerza_media_cambio_momento}}

## Sustitución numérica

1. **Momento inicial**: [[p_inicial]] resultante de multiplicar 0.20 kg por 12 m/s (2.4 kg·m/s).
2. **Momento final**: [[p_final]] resultante de 0.20 kg por -6 m/s (-1.2 kg·m/s).
3. **Cambio de momento**: [[DeltaP]] como la diferencia -1.2 - 2.4 (-3.6 kg·m/s).
4. **Impulso total**: Por el teorema, el impulso [[J]] recibido es de -3.6 N·s. Al ser un choque horizontal, este valor representa la componente del eje x [[Jx]].
5. **Fuerza media**: [[Fmed]] al dividir el impulso por el tiempo: -3.6 / 0.006 (-600 N).

## Validación dimensional

El impulso [[J]] debe tener dimensiones de fuerza por tiempo. Al multiplicar las dimensiones de la fuerza `[M L T⁻²]` por las del tiempo `[T]`, obtenemos `[M L T⁻¹]`. Esta expresión coincide exactamente con las dimensiones de la cantidad de movimiento (masa por velocidad), lo que confirma la consistencia física del teorema. El resultado de -600 N es coherente con un impacto deportivo de alta intensidad.

## Interpretación física

El signo negativo en [[Fmed]] indica que la pared empuja la pelota hacia la izquierda, en sentido contrario al inicial. El impulso ha sido suficiente no solo para frenar la pelota, sino para invertir su marcha y devolverla con la mitad de su rapidez original en una fracción de segundo.



## Análisis estructural del impacto

Desde una perspectiva de nivel estructural, este choque no es solo un intercambio de momento, sino un estudio de la rigidez del sistema. La fuerza media [[Fmed]] obtenida representa la resistencia del material de la pelota a la compresión. Si la pelota fuera infinitamente rígida, el tiempo [[dt]] tendería a cero y la fuerza tendería a infinito, lo que destruiría cualquier estructura real. Por tanto, la elasticidad es la que permite que el impulso se distribuya en el tiempo, protegiendo la integridad física del objeto. Este principio es universal en la ingeniería de choques.

---

# Ejemplo de aplicación real: Seguridad vial

## Contexto

El diseño de zonas de deformación programada en vehículos es la aplicación crítica de la física del impulso. El objetivo es que, ante un cambio de velocidad inevitable ([[DeltaP]] fijo), la fuerza de impacto [[Fmed]] que llega al habitáculo sea inferior al límite de supervivencia humana aumentando el tiempo [[dt]].

## Estimación física

Realizaremos un cálculo de orden de magnitud para comparar la letalidad del impacto. Consideremos un vehículo de masa [[m]] (1500 kg) que choca a 15 m/s (54 km/h) y se detiene completamente.

*   **Variación de momento**: [[DeltaP]] = 1500 kg · (0 - 15 m/s) = -22,500 kg·m/s.
*   **Impulso requerido**: [[J]] = -22,500 N·s.

**Escenario A (Estructura rígida)**:
Si el chasis no se deforma y la detención ocurre en un tiempo de contacto infinitesimal [[dt]] (0.01 s), la fuerza media [[Fmed]] alcanza los -2,250,000 N. Esto equivale a recibir el peso de unas 230 toneladas de golpe.

**Escenario B (Zona de deformación)**:
Si el parachoques y el motor colapsan controladamente, permitiendo que la detención dure [[dt]] (0.15 s), la fuerza [[Fmed]] se reduce a -150,000 N. Aunque es una fuerza considerable (equivalente al peso de 15 toneladas), la aceleración resultante es de solo 10g, lo cual es físicamente sobrevivible gracias al sistema de retención.

## Interpretación

La ingeniería no lucha contra el impulso [[J]], sino que lo diluye en el tiempo. Al aumentar [[dt]], reducimos la altura de la fuerza media [[Fmed]]. Este concepto de "área constante" bajo la curva [[F]]-t es la base de todos los sistemas de protección contra impactos.

{{f:impulso_area_curva}}







