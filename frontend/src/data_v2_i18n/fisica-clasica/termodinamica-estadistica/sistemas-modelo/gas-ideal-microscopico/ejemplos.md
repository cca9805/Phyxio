# Ejemplo tipo examen


## Enunciado

Un recipiente contiene un gas monoatómico ideal a [[temperatura]] de 300 K. Cada partícula tiene [[masa_particula]] de 6,64·10^-27 kg, valor aproximado para helio. Se pide estimar la [[energia_cinetica_media]] traslacional por partícula y la [[velocidad_rms]]. Después, se quiere interpretar qué ocurre si la [[temperatura]] sube hasta 600 K, manteniendo el gas en régimen ideal.

## Datos

Los siguientes valores definen el cálculo. El gas considerado es monoatómico ideal con [[temperatura]] y masa de partícula conocidas, y se asume que el número de partículas y el [[volumen]] son suficientes para que el modelo sea válido.

- [[temperatura]] inicial: 300 K
- [[temperatura]] final: 600 K
- [[masa_particula]]: 6,64·10^-27 kg
- [[constante_boltzmann]]: 1,38·10^-23 J/K
- [[numero_particulas]]: N (genérico, representativo de la muestra)
- Gas: monoatómico ideal
- Objetivos: [[energia_cinetica_media]] y [[velocidad_rms]]

## Definición del sistema

El sistema es una muestra de gas ideal en equilibrio térmico. No seguimos una partícula concreta, sino una población de partículas cuyo movimiento se describe mediante medias. La [[temperatura]] representa el estado macroscópico que fija la escala de agitación. La [[energia_cinetica_media]] se interpreta por partícula y no como energía total del gas. La [[velocidad_rms]] resume una rapidez típica asociada al promedio cuadrático de las velocidades microscópicas.

## Modelo físico

Usamos el gas ideal monoatómico clásico. Se supone que las partículas son puntuales, que sus choques son elásticos y que las interacciones entre ellas son despreciables fuera de los choques. La [[presion]] no se calcula en este ejemplo, pero permanece conectada con la misma imagen microscópica: choques contra paredes dentro de un [[volumen]]. La relación clave es que la [[temperatura]] absoluta mide directamente la [[energia_cinetica_media]] traslacional.

## Justificación del modelo

El modelo es adecuado porque la situación se formula como gas monoatómico ideal y porque la [[temperatura]] está dada en kelvin. No hay datos de alta [[presion]], bajo [[volumen]] ni condensación que obliguen a un modelo real. Además, el objetivo no es describir la distribución completa de velocidades, sino obtener dos medias: [[energia_cinetica_media]] y [[velocidad_rms]]. Esto coincide exactamente con las relaciones disponibles del leaf. La [[masa_particula]] solo entra al pasar de energía a rapidez típica.

## Resolución simbólica

Primero relacionamos la [[energia_cinetica_media]] con la [[temperatura]]:

{{f:energia_cinetica_media_temperatura}}

Después conectamos esa escala energética con una rapidez típica:

{{f:velocidad_cuadratica_media}}

La [[velocidad_rms]] depende de la raíz cuadrada del cociente entre energía térmica y [[masa_particula]]. Por eso, si la [[temperatura]] se multiplica por un factor, la rapidez típica cambia con su raíz cuadrada, no con el factor completo.

Si además se conoce el [[numero_particulas]] del gas y el [[volumen]] del recipiente, la misma descripción microscópica permite estimar la [[presion]] a partir de los choques con las paredes:

{{f:presion_microscopica_gas_ideal}}

O de forma equivalente, usando la ecuación de estado microscópica que relaciona directamente [[presion]], [[volumen]], [[numero_particulas]] y [[temperatura]]:

{{f:ecuacion_estado_gas_ideal_particulas}}

## Sustitución numérica

Para 300 K, la [[energia_cinetica_media]] es aproximadamente (3/2)·1,38·10^-23·300 J, es decir 6,21·10^-21 J por partícula. Con [[masa_particula]] de 6,64·10^-27 kg, la [[velocidad_rms]] resulta cercana a 1,37·10^3 m/s. Para 600 K, la [[energia_cinetica_media]] se duplica hasta 1,24·10^-20 J. La [[velocidad_rms]] aumenta por un factor raíz de 2, quedando alrededor de 1,93·10^3 m/s.

## Validación dimensional

La [[constante_boltzmann]] tiene unidades J/K y la [[temperatura]] tiene unidades K, por tanto su producto tiene unidades J. Eso coincide con la dimensión de [[energia_cinetica_media]]. Para [[velocidad_rms]], el cociente energético por [[masa_particula]] tiene unidades J/kg. Como 1 J es kg·m^2/s^2, J/kg equivale a m^2/s^2. Al tomar la raíz cuadrada, queda m/s, que es la unidad correcta de rapidez.

## Interpretación física

El resultado muestra que la [[temperatura]] es una medida energética microscópica, no una velocidad directa. A 300 K, cada partícula de helio tiene una [[energia_cinetica_media]] diminuta en julios, pero esa pequeñez es normal porque se refiere a una sola partícula. La [[velocidad_rms]] sale grande porque la [[masa_particula]] del helio es extremadamente pequeña. Al duplicar la [[temperatura]], la energía media por partícula se duplica, lo que confirma la relación lineal del modelo. Sin embargo, la rapidez típica solo aumenta por raíz de 2, porque la energía cinética depende del cuadrado de la rapidez. Físicamente, el gas más caliente contiene partículas más agitadas, choques más intensos y, si el [[volumen]] se mantiene, mayor tendencia a aumentar la [[presion]].

# Ejemplo de aplicación real


## Contexto

En una cámara de vacío parcial se introduce helio para calibrar un sensor. Aunque no se siguen las moléculas una a una, interesa saber si la [[temperatura]] de operación puede cambiar mucho la escala de movimiento microscópico. El sensor mide efectos macroscópicos relacionados con [[presion]], pero la interpretación se apoya en la agitación molecular del gas ideal.

## Estimación física

Tomemos una [[temperatura]] de 300 K y otra de 450 K. La [[energia_cinetica_media]] por partícula aumenta en la misma proporción que la [[temperatura]], es decir, un 50 %. En cambio, la [[velocidad_rms]] aumenta como la raíz de 450/300, aproximadamente raíz de 1,5, que es cerca de 1,22. Esto significa una subida de rapidez típica de solo un 22 %. La escala es razonable: para gases ligeros aparecen velocidades de cientos o miles de m/s, aunque el gas no tenga un flujo neto hacia una dirección.

## Interpretación

La aplicación enseña a separar movimiento microscópico de movimiento macroscópico. El helio puede tener gran [[velocidad_rms]] y, aun así, el gas estar globalmente en reposo si no hay corriente neta. Lo que aumenta con [[temperatura]] es la agitación desordenada. Esa agitación se traduce en mayor [[energia_cinetica_media]] y en choques más intensos contra paredes. Por eso un sensor de [[presion]] puede detectar cambios térmicos incluso sin ver moléculas. El modelo ideal es útil mientras el gas siga diluido y sin efectos de interacción relevantes.