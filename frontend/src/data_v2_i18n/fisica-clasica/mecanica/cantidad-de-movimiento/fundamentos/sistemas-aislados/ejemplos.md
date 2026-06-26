# Ejemplo tipo examen: Explosión de un proyectil en reposo y retroceso

## Enunciado

Un proyectil de masa total [[m_total]] se encuentra inicialmente en reposo sobre una plataforma horizontal de muy baja fricción. El proyectil está diseñado para dividirse en dos secciones mediante una pequeña carga explosiva interna. En el momento de la activación, el proyectil se separa en dos fragmentos. El primer fragmento tiene una masa conocida de [[m1]] = 0,6 kg y sale disparado hacia la derecha con una velocidad final [[v1f]] = 12 m/s medida inmediatamente después de la detonación. El segundo fragmento tiene una masa de [[m2]] = 0,4 kg.

Se pide determinar la velocidad final [[v2f]] del segundo fragmento, justificando rigurosamente por qué el sistema puede tratarse como aislado y analizando cómo el p de momento total [[pTotI]] y [[pTotF]] permite predecir el comportamiento sin conocer la fuerza exacta de la explosión.

## Datos

Para el análisis, identificamos los siguientes parámetros inerciales y cinemáticos:
- **Masa del primer fragmento**: [[m1]] = 0,6 kg.
- **Velocidad final del primer fragmento**: [[v1f]] = 12 m/s (sentido positivo).
- **Masa del segundo fragmento**: [[m2]] = 0,4 kg.
- **Condición inicial**: Reposo absoluto del conjunto ([[v1i]] = 0 m/s y [[v2i]] = 0 m/s).
- **Entorno**: Superficie horizontal sin fricción apreciable.

## Definición del sistema

Definimos el sistema como el **conjunto de los dos fragmentos (1 y 2)**. Al incluir ambos cuerpos, la fuerza de la explosión se convierte en una **fuerza interna**. Según la Tercera Ley de Newton, estas fuerzas forman pares que se cancelan al sumar sobre el sistema completo, lo que garantiza que no pueden alterar el momento lineal total del conjunto.

## Modelo físico

Adoptamos el modelo de **sistema aislado**. La hipótesis central es que la fuerza externa neta horizontal es despreciable. La herramienta matemática principal es la Ley de Conservación del Momento Lineal:
{{f:cons}}

Esta conservación está vinculada a la variación de momento total [[DeltaPtot]] mediante el teorema del impulso aplicado al sistema global:
{{f:balance}}

## Justificación del modelo

El aislamiento del sistema se justifica por tres pilares físicos:
1. **Compensación vertical**: La gravedad es equilibrada por la fuerza normal.
2. **Ausencia horizontal**: Fricción despreciable.
3. **Aproximación impulsiva**: La interacción es tan rápida que cualquier fuerza externa residual no tiene tiempo de generar un impulso [[Jext]] significativo comparado con las fuerzas internas.

## Resolución simbólica

El procedimiento sigue una secuencia lógica basada en el p de estados y el uso de las fórmulas núcleo:

{{f:balance}}

Determinación del momento total inicial del conjunto:
{{f:Pinicial}}

Definición del momento total final tras la interacción:
Aquí inyectamos la definición del estado final:
{{f:Pfinal}}

Igualación de estados bajo la hipótesis de aislamiento:
{{f:cons_solve_pTotF}}

Lo que representa la aplicación directa de la Ley de Conservación del Momento:
{{f:cons}}

Planteamiento de la ecuación cinemática completa para dos cuerpos:
{{f:cons_completa}}

Despeje de la velocidad desconocida [[v2f]] a partir de los datos conocidos.

## Sustitución numérica

Introducimos los valores conocidos ([[m1]] = 0,6 kg, [[v1f]] = 12 m/s, [[m2]] = 0,4 kg) en la expresión:
El cálculo arroja un resultado de [[v2f]] = -18 m/s. El signo negativo indica sentido opuesto al fragmento 1.

## Validación dimensional

Verificamos las unidades del resultado:
[Velocidad] = [Masa · Velocidad] / [Masa] = [L/T]. 
El resultado se expresa en m/s, lo cual es dimensionalmente correcto.

## Interpretación física

La interpretación física de este resultado trasciende el simple número [[v2f]] = -18 m/s y se ancla en los principios fundamentales de la dinámica. Al ser un sistema aislado que parte del reposo, el momento total debe permanecer en cero perpetuamente a menos que una fuerza externa intervenga. Esto implica que el "impulso" hacia la derecha que gana el fragmento pesado debe ser compensado instantáneamente por un "impulso" hacia la izquierda del fragmento ligero.

Es una manifestación del **principio de retroceso**: el sistema se "auto-propulsa" internamente repartiendo su movimiento según la inercia de sus partes. El hecho de que el fragmento más pequeño ([[m2]] = 0,4 kg) alcance una velocidad mayor (18 m/s) que el grande (12 m/s) no es arbitrario; es la respuesta inercial necesaria para que el producto masa por velocidad sea idéntico en ambos cuerpos pero de signo opuesto. 

Desde una perspectiva causal, este ejemplo demuestra que no necesitamos conocer los detalles microscópicos de la explosión para predecir el estado final. La conservación del momento es una ley de "contabilidad física" tan poderosa que nos permite ignorar la complejidad de las fuerzas internas. Si en la práctica midiéramos una velocidad de retroceso menor, la física nos estaría alertando de una "fuga de momento" hacia el entorno, probablemente debida a un impulso externo [[Jext]] negativo generado por el rozamiento con el suelo.

# Ejemplo de aplicación real: Seguridad en acoplamientos espaciales

## Contexto

En el vacío del espacio, el aislamiento es una realidad casi perfecta. Imaginemos el desacoplamiento de una cápsula de [[m1]] = 2000 kg de una estación de 200.000 kg.

## Estimación física

Para planificar la maniobra, realizamos una estimación cuantitativa del retroceso de la estación. Si la cápsula se aleja a [[v1f]] = 0,5 m/s, aplicamos el p de momento:
- El momento ganado por la cápsula (masa [[m1]] por velocidad [[v1f]]) es de 1000 kg·m/s.
- Por conservación, el momento de retroceso de la estación debe ser de -1000 kg·m/s.
- La velocidad de retroceso de la estación [[v2f]] resulta ser de -0.005 m/s.

Esta lectura cuantitativa de 5 mm/s nos indica que el impacto cinemático en la estación es minúsculo en términos de velocidad instantánea, pero enorme en términos de navegación orbital si se mantiene durante horas sin corrección.

## Interpretación

Este escenario real confirma que el modelo de sistema aislado es la herramienta clave en ingeniería aeroespacial. La ausencia de impulso externo [[Jext]] garantiza que [[DeltaPtot]] = 0, permitiendo predecir el retroceso de una estación masiva sin conocer la fuerza exacta de los muelles de separación, basándonos únicamente en la relación de masas.




