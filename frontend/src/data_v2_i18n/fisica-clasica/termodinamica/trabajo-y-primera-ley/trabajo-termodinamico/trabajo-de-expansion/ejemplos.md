# Ejemplo tipo examen


## Enunciado

Un gas ideal encerrado en un cilindro con émbolo se calienta a presión constante de 1.5 atm. El [[volumen]] inicial es 2.0 L y el [[volumen]] final es 5.0 L. Calcular el trabajo [[trabajo_termodinamico]] realizado por el gas sobre el émbolo.

## Datos

Los datos del problema, convertidos a unidades SI:

- [[presion]]: 1.5 atm, equivalente a 1.52 × 10⁵ Pa (usando el factor 1 atm equivale a 101 325 Pa)
- Volumen inicial [[volumen]]: 2.0 L, equivalente a 2.0 × 10⁻³ m³
- Volumen final [[volumen]]: 5.0 L, equivalente a 5.0 × 10⁻³ m³

## Definición del sistema

El sistema es el gas ideal en el interior del cilindro. La frontera móvil es el émbolo. Se usa la convención física: [[trabajo_termodinamico]] > 0 cuando el gas se expande.

## Modelo físico

Proceso isobárico (presión constante), por tanto [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]]. El modelo cuasi-estático es válido porque el calentamiento es lento y la presión es uniforme en el gas.

## Justificación del modelo

[[presion]] constante durante el calentamiento implica proceso isobárico. La fórmula [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] es la expresión exacta del trabajo para este tipo de proceso.

## Resolución simbólica

El proceso es isobárico: la [[presion]] permanece constante durante todo el calentamiento. Por tanto se aplica directamente la fórmula del trabajo isobárico. La [[variacion_de_volumen]] se calcula como la diferencia entre el [[volumen]] final y el inicial. Las fórmulas que aplican son:

{{f:trabajo_integral}}

{{f:trabajo_isobarico}}


## Sustitución numérica

La [[variacion_de_volumen]] entre estado final e inicial vale 3.0×10⁻³ m³, lo que equivale a 3.0 litros de expansión. Multiplicando esa variación por la [[presion]] constante de 1.52×10⁵ Pa se obtiene el [[trabajo_termodinamico]] realizado por el gas: el resultado es 456 J. El signo positivo confirma que es el gas quien realiza trabajo sobre el émbolo, cediendo energía mecánica al entorno.

## Validación dimensional

La dimensión del [[trabajo_termodinamico]] se verifica combinando las dimensiones de [[presion]] y [[variacion_de_volumen]]:

- [[presion]]: `[M L⁻¹ T⁻²]` (pascales)
- [[variacion_de_volumen]]: `[L³]` (metros cúbicos)
- Producto p·ΔV: `[M L⁻¹ T⁻²]·[L³]` = `[M L² T⁻²]` (julios)

El resultado dimensional `[M L² T⁻²]` corresponde a la dimensión de la energía. Esto confirma que el [[trabajo_termodinamico]] tiene la misma dimensión que cualquier otra forma de energía, lo que es coherente con su naturaleza de transferencia mecánica de energía a través de la frontera móvil del sistema.

## Interpretación física

[[trabajo_termodinamico]] igual a 456 J positivo indica que el gas se expande y transfiere 456 J de energía mecánica al émbolo y al entorno. Este trabajo proviene de la energía interna del gas y del calor aportado. En el diagrama p-V, el trabajo es el área del rectángulo de base 3.0 L y altura 1.5 atm. Si la [[presion]] se hubiera reducido a la mitad, manteniendo la misma [[variacion_de_volumen]], el trabajo sería también la mitad: 228 J. Esta proporcionalidad directa entre [[trabajo_termodinamico]], [[presion]] y [[variacion_de_volumen]] se puede verificar visualmente en el diagrama como el cambio de área del rectángulo.

---

# Ejemplo de aplicación real


## Contexto

En un motor de combustión interna de cuatro tiempos, la carrera de expansión (fase de trabajo) es el proceso en que los gases de combustión empujan el émbolo hacia abajo a presión aproximadamente constante en la parte inicial del ciclo. La energía mecánica generada en esta carrera es la que se transmite al cigüeñal y, eventualmente, a las ruedas del vehículo.

## Estimación física

En un motor de automóvil de 1.6 litros de cilindrada, cada cilindro tiene un [[volumen]] desplazado de 0.4 L. Durante la carrera de expansión, la [[presion]] media de los gases es del orden de 5 × 10⁵ Pa. Multiplicando esa [[presion]] media por la [[variacion_de_volumen]] de 4×10⁻⁴ m³ se obtiene un [[trabajo_termodinamico]] de 200 J por cilindro por ciclo. Con cuatro cilindros funcionando a 3000 rpm, el motor realiza 200 ciclos de trabajo por segundo en total, lo que suma 40 000 W equivalentes a 40 kW de potencia mecánica, coherente con la potencia real de estos motores.

## Interpretación

El cálculo de [[trabajo_termodinamico]] por ciclo a partir de la presión media y la cilindrada es la base del concepto de "presión media efectiva" que usan los ingenieros de motores. Maximizar [[trabajo_termodinamico]] por ciclo sin aumentar el desgaste ni las emisiones es el objetivo central del diseño de motores de combustión. La dependencia de [[trabajo_termodinamico]] con la [[presion]] y la [[variacion_de_volumen]] explica por qué los motores turboalimentados (mayor [[presion]]) y los de gran cilindrada (mayor [[variacion_de_volumen]]) producen más par motor.

Esta estimación también ilustra la potencia del modelo: conocer solo dos magnitudes, la [[presion]] media y la [[variacion_de_volumen]] de cada cilindro, permite predecir la potencia total del motor con una precisión del orden del 10-20 % sin necesidad de integrar el ciclo completo. La discrepancia restante se debe a irreversibilidades (fricción, transferencia de calor, combustión incompleta) que el modelo isobárico simplificado no captura.