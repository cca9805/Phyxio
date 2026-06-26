# Ejemplos: Momento Lineal [[p]]

# Ejemplo tipo examen

## Enunciado
Un proyectil de seguridad de masa[[m]] = 0.5 kg se desplaza horizontalmente hacia la derecha con una velocidad[[v]] = 20 m/s. El proyectil impacta contra una barrera de protección y rebota en la misma dirección pero en sentido contrario con una velocidad final de 15 m/s. El contacto con la barrera dura un intervalo de tiempo[[DeltaT]] = 0.02 s. 

Calcula:
1. El momento lineal inicial[[Pinicial]]y final[[Pfinal]]del proyectil.
2. La variación de momento lineal[[DeltaP]]sufrida por el objeto.
3. La fuerza neta media[[Fnet]]ejercida por la barrera sobre el proyectil.
4. La energía cinética[[K]]perdida durante el impacto.

## Datos
- Masa inercial del proyectil:[[m]] = 0.5 kg
- Velocidad inicial:[[vx]] = 20 m/s (sentido positivo)
- Velocidad final:[[vx]] = -15 m/s (sentido negativo, rebote)
- Intervalo de tiempo:[[DeltaT]] = 0.02 s

## Definición del sistema
El sistema se define como el proyectil puntual de masa constante. Se establece un sistema de coordenadas unidimensional donde el sentido hacia la derecha se considera positivo ($+$) y el sentido hacia la izquierda negativo ($-$). La barrera se considera un agente externo que ejerce un impulso sobre el sistema.

## Modelo físico
Se utiliza el **modelo de partícula puntual** bajo la Segunda Ley de Newton en su forma impulsiva. El movimiento se trata en una dimensión, por lo que la componente vertical de la cantidad de movimiento es nula ([[py]] = 0). Se asume que el proyectil no se fragmenta y que la fuerza media es representativa de la interacción total durante el impacto.

## Justificación del modelo
El uso de este modelo es adecuado porque el tiempo de contacto es extremadamente breve comparado con el tiempo total de vuelo, lo que permite tratar la interacción como una fuerza impulsiva dominante. Además, al no haber mención a deformaciones plásticas masivas o rotaciones, el balance de momento lineal es la herramienta más precisa para determinar la fuerza de impacto.

## Resolución simbólica

1.  **Cálculo de momentos de estado**:

{{f:momentum_definition}}

    Dado que el movimiento es 1D, su magnitud coincide con el valor absoluto de la componente x:

{{f:momentum_magnitude}}

    Se aplica esta relación a los estados inicial y final.
2.  **Cálculo del cambio de estado**:

{{f:momentum_change}}

3.  **Determinación de la causa dinámica**:

{{f:average_force_definition}}

4.  **Balance energético**:

{{f:kinetic_energy_momentum}}

    Para ambos estados.

## Sustitución numérica

1.  **Momentos**:
    - [[px]] resultante de multiplicar 0.5 kg por 20 m/s (10 kg·m/s).
    - [[px]] resultante de multiplicar 0.5 kg por -15 m/s (-7.5 kg·m/s).
2.  **Variación**:
    - [[DeltaP]] calculado como la diferencia entre -7.5 y 10 (-17.5 kg·m/s).
3.  **Fuerza Media**:
    - [[Fnet]] tras dividir -17.5 kg·m/s entre 0.02 s (-875 N).
4.  **Energía**:
    - [[K]] inicial a partir de 10 al cuadrado dividido por 2 veces 0.5 (100 J).
    - [[K]] final a partir de -7.5 al cuadrado dividido por 2 veces 0.5 (56.25 J).
    - Pérdida de energía por diferencia entre 100 y 56.25 (43.75 J).

## Validación dimensional
La verificación se realiza mediante el **Estilo de Notación Azul Phyxio v5**:
- Momento: `[M L T⁻¹]` (kg · m/s) -> Correcto.
- Fuerza: `[M L T⁻¹] / [T] = [M L T⁻²]` (N) -> Correcto.
- Energía: `[M L T⁻¹]² / [M] = [M L² T⁻²]` (J) -> Correcto.

## Interpretación física
El resultado muestra que la variación de momento lineal es mayor que el momento inicial debido al **cambio de sentido**. La fuerza de $-875 \text{ N}$ indica que la barrera empujó hacia la izquierda, oponiéndose al movimiento inicial y logrando no solo detener el proyectil, sino lanzarlo en sentido contrario. La pérdida de $43.75 \text{ J}$ de energía cinética indica que el choque fue inelástico; esa energía se ha disipado en forma de calor y deformación elástica de la barrera.

---

# Ejemplo de aplicación real: El Airbag de Seguridad

## Contexto
En un accidente de tráfico, un pasajero de masa[[m]] = 75 kg que viaja a 54 km/h (15 m/s) debe ser detenido por el sistema de seguridad. Si el pasajero choca contra el volante rígido, se detiene en apenas[[DeltaT]] = 0.01 s. Si el airbag se despliega, el tiempo de detención se extiende hasta[[DeltaT]] = 0.15 s. El objetivo es comparar la fuerza media[[Fnet]]que recibe el cuerpo en ambos casos.

## Estimación física
Realizaremos un cálculo de orden de magnitud para estimar el momento lineal [[p]] y la fuerza requerida.

El momento lineal inicial del pasajero se obtiene multiplicando su masa por su velocidad:
[[p]] evaluado en 75 kg por 15 m/s (1125 kg·m/s).

Para detenerlo, la variación de momento lineal [[DeltaP]] debe ser de -1125 kg·m/s, ya que el momento final debe ser nulo.

1.  **Caso sin Airbag**:
    Si la fuerza actúa en un intervalo muy corto, la intensidad crece enormemente. La [[Fnet]] obtenida al dividir -1125 entre 0.01 s resulta en -112,500 N. Esta fuerza equivale a soportar el peso de unas 11 toneladas sobre el pecho, lo cual es letal.
2.  **Caso con Airbag**:
    Al incrementar el tiempo de frenado, la [[Fnet]] calculada dividiendo -1125 entre 0.15 s se reduce a -7,500 N. Aunque sigue siendo una fuerza considerable, es 15 veces menor que en el caso anterior, situándose dentro de los márgenes de supervivencia humana gracias a la gestión del tiempo.

## Interpretación
Este ejemplo real demuestra que el momento lineal es una magnitud ineludible: para detener un coche o un cuerpo, el intercambio de[[p]]debe ocurrir sí o sí. La función del airbag no es "evitar" el momento lineal, sino **gestionar el intervalo[[DeltaT]]**. Al aumentar el tiempo de interacción, la fuerza media necesaria para el mismo[[DeltaP]]disminuye drásticamente, protegiendo la integridad física del pasajero. La física del momento lineal salva vidas cada día mediante esta simple relación de proporcionalidad inversa entre fuerza y tiempo.

