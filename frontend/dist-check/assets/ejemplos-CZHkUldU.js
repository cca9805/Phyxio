const a=`# Ejemplo tipo examen

## Enunciado

Una cuerda de guitarra tiene longitud de 0.65 m entre la cejilla y el puente. La velocidad de propagación de las ondas transversales en esta cuerda es 312 m/s, determinada por su tensión y densidad lineal. Se pide:

a) Calcular la frecuencia fundamental (primer armónico) de la cuerda.
b) Determinar la frecuencia y longitud de onda del quinto armónico.
c) Si el guitarrista presiona la cuerda en un traste que reduce la longitud vibrante a 0.433 m, ¿cuál es la nueva frecuencia fundamental?

## Datos

- Longitud de la cuerda: 0.65 m
- Velocidad de propagación: 312 m/s
- Nueva longitud al presionar traste: 0.433 m
- Extremos fijos en ambos casos
- Régimen lineal de oscilación

## Definición del sistema

El sistema es una cuerda con extremos fijos: un nodo en cada extremo de la longitud vibrante. Los modos normales de vibración corresponden a ondas estacionarias transversales que satisfacen las condiciones de contorno. Los armónicos son las frecuencias discretas permitidas, múltiplos enteros de la fundamental.

## Modelo físico

Aplicamos el modelo de cuerda ideal con extremos fijos. Las frecuencias armónicas siguen la ley de cuantización espacial impuesta por los nodos fijos:

{{f:frecuencia_armonica}}

Para el caso particular del primer armónico, [[n]] vale 1 y aparece la fundamental:

{{f:frecuencia_fundamental}}

La longitud de onda de cada armónico viene dada por:

{{f:longitud_onda_armonica}}

## Justificación del modelo

El modelo de cuerda ideal es aplicable porque:
- La longitud (65 cm) es mucho mayor que el diámetro de la cuerda (aproximadamente 0.3 mm), garantizando que la flexibilidad domina sobre la rigidez.
- La guitarra produce notas musicales en el rango audible donde el modelo es preciso.
- Los extremos cejilla-puente se comportan aproximadamente como nodos fijos para los modos principales.

El modelo dejaría de ser válido para frecuencias muy altas (superiores a 10 kHz) donde los efectos de rigidez se hacen notables, o si la amplitud de oscilación fuera tan grande que la tensión variara apreciablemente.

## Resolución simbólica

**Apartado a) Frecuencia fundamental**

Aplicando la fórmula de frecuencia fundamental con n=1:

{{f:frecuencia_fundamental}}

Sustituyendo los valores dados, la frecuencia fundamental es:

Para obtener la frecuencia fundamental [[f_1]], dividir la velocidad [[v]] (312 m/s) entre el doble de la longitud [[L]] (1.30 m), usando el primer armónico [[n]] igual a 1

**Apartado b) Quinto armónico**

Para el quinto armónico, [[n]] vale 5. Usando la relación general:

{{f:frecuencia_armonica}}

La frecuencia del quinto armónico resulta:

La frecuencia del quinto armónico [[f_n]] equivale a cinco veces la frecuencia fundamental, siguiendo la relación armónica lineal:

{{f:relacion_frecuencias}}

Donde el número de armónico [[n]] multiplica la fundamental [[f_1]] para dar la frecuencia del armónico deseado

Para la longitud de onda, aplicamos la cuantización espacial:

{{f:longitud_onda_armonica}}

Con n=5:

La longitud de onda del quinto armónico [[lambda_n]] resulta de dividir el doble de la longitud de cuerda [[L]] entre el número de armónico [[n]] (cinco)

**Apartado c) Nueva frecuencia al acortar la cuerda**

Al presionar el traste, la nueva longitud vibrante es L' = 0.433 m. La velocidad v permanece constante (misma tensión y cuerda). La nueva fundamental es:

La nueva frecuencia fundamental [[f_1]] se calcula con la nueva longitud [[L]] en el denominador, manteniendo constante la velocidad [[v]] y el número de armónico [[n]] igual a 1

## Sustitución numérica

**Apartado a)**

{{f:frecuencia_fundamental}}

Para la frecuencia fundamental, dividir 312 m/s entre el doble de 0.65 m, es decir, 1.30 m. Esto da aproximadamente 240 Hz.

[[f_1]] ≈ 240 Hz

Esta frecuencia corresponde aproximadamente al Sol3 (196 Hz) a Re3 (293 Hz) en la escala musical, una nota dentro del rango típico de guitarra.

**Apartado b)**

{{f:frecuencia_armonica}}

Para el quinto armónico, multiplicar 5 por la frecuencia fundamental. Con [[f_1]] ≈ 240 Hz, la magnitud general [[f_n]] toma aproximadamente 1200 Hz cuando [[n]] vale cinco.

{{f:longitud_onda_armonica}}

Para la longitud de onda, dividir el doble de la longitud (1.30 m) entre 5, dando aproximadamente 0.26 m.

Para [[n]] igual a cinco, [[lambda_n]] ≈ 0.26 m (26 cm).

**Apartado c)**

Con la nueva longitud L' = 0.433 m, la frecuencia fundamental aumenta porque la longitud vibrante disminuye. Dividiendo 312 m/s entre el doble de 0.433 m (0.866 m), resulta aproximadamente 360 Hz.

[[f_1]] (nueva) ≈ 360 Hz

Esta frecuencia es 1.5 veces la original, correspondiendo a una quinta justa musical aproximadamente.

## Validación dimensional

Verificamos las dimensiones de las magnitudes calculadas:

- Frecuencia: el cociente entre velocidad y longitud produce dimensión final \`[T⁻¹]\` (Hz). Correcto.
- Longitud de onda: repartir una longitud entre un índice adimensional conserva dimensión \`[L]\` (m). Correcto.

Desglose dimensional de la fórmula de frecuencia:
- Unidades de velocidad: m/s
- Unidades de longitud: m
- Cociente entre velocidad y longitud efectiva: dimensión final \`[T⁻¹]\`, equivalente a Hz.

El análisis dimensional confirma la coherencia de todas las fórmulas aplicadas.

## Interpretación física

El ejemplo ilustra cómo los músicos utilizan física conscientemente para modificar la altura de las notas. La frecuencia fundamental de 240 Hz representa el tono base de la cuerda al aire (sin presionar). Cuando el guitarrista presiona el traste, acorta la longitud efectiva L en un factor 0.433/0.65 ≈ 2/3, elevando la frecuencia en el factor inverso 3/2 ≈ 1.5, es decir, una quinta musical.

Los armónicos superiores, como el quinto a 1200 Hz, están presentes simultáneamente con la fundamental cuando se toca la nota, dando riqueza timbrística al sonido. La longitud de onda de 26 cm del quinto armónico significa que la cuerda de 65 cm contiene exactamente 2.5 longitudes de onda completas, o equivalentemente, 5 medias ondas, verificando la condición de cuantización.

Si la tensión de la cuerda se incrementara (girando la clavija), la velocidad [[v]] aumentaría elevando todas las frecuencias proporcionalmente, permitiendo afinar el instrumento.

---

# Ejemplo de aplicación real

## Contexto

Los instrumentos de cuerda pulsada (guitarra, arpa, clavicordio) y frotada (violín, violonchelo) funcionan según el principio de armónicos descrito. Un lutier (constructor de instrumentos de cuerda) debe calcular las frecuencias fundamentales al diseñar un nuevo instrumento para asegurar que las notas producida s correspondan a la escala musical deseada.

## Estimación física

Un lutier diseña una guitarra con escala (longitud de cuerda al aire) de 650 mm. La cuerda más grave (Mi bajo) debe producir 82.4 Hz de frecuencia fundamental. Para lograr esto, necesita determinar la velocidad de propagación requerida y, por tanto, la tensión necesaria dada la densidad lineal de la cuerda.

Despejando la velocidad de la fórmula de frecuencia fundamental:

{{f:frecuencia_fundamental}}

Para el cálculo, multiplicar dos veces la longitud (1.30 m) por la frecuencia deseada (82.4 Hz). Esto da aproximadamente 107 m/s como velocidad de propagación necesaria.

Si la cuerda tiene densidad lineal μ = 2.5 g/m (0.0025 kg/m), la tensión requerida se obtiene de v = √(T/μ), despejando La tensión resulta del producto de la densidad lineal por el cuadrado de la velocidad. Operando con los valores dados, la tensión es aproximadamente 28.6 N, equivalente a unos 2.9 kgf.

## Interpretación

Esta tensión de unos 29 newtons es razonable para una cuerda de guitarra y permite al lutier seleccionar el material y calibre adecuados. Si la tensión fuera excesiva (más de 100 N), la cuerda podría dañar el mástil del instrumento; si fuera insuficiente (menos de 10 N), la cuerda no tendría respuesta adecuada y sonaría "flácida".

El cálculo demuestra cómo la física de armónicos guía el diseño práctico de instrumentos musicales, conectando propiedades mecánicas (tensión, densidad) con resultados musicales (afinación, timbre) a través de las frecuencias de vibración.
`;export{a as default};
