# Ejemplo tipo examen


## Enunciado

Un recipiente contiene un gas monoatómico ideal en equilibrio térmico a [[temperatura]] de 300 K. Se considera una muestra con [[numero_particulas]] igual a 2,0·10^20 partículas. Calcula la [[energia_media]] traslacional de una partícula y la [[energia_total]] traslacional de la muestra. Interpreta si el resultado representa una partícula concreta o un promedio estadístico del gas.

## Datos

- [[temperatura]]: 300 K
- [[numero_particulas]]: 2,0·10^20 partículas
- [[k_boltzmann]]: 1,38·10^-23 J/K
- Modelo: gas ideal clásico monoatómico en equilibrio térmico

## Definición del sistema

El sistema es la muestra gaseosa completa dentro del recipiente, pero el cálculo se divide en dos niveles. El primer nivel es microscópico: una partícula típica descrita por su [[energia_media]] traslacional. El segundo nivel es macroscópico: la suma de las contribuciones medias de todas las partículas, que da la [[energia_total]]. El recipiente solo fija el contexto de equilibrio; no se calcula trabajo de frontera ni intercambio de calor durante un proceso.

## Modelo físico

Se usa el modelo de gas ideal clásico con energía cinética traslacional. La [[temperatura]] fija la escala energética de cada partícula mediante [[k_boltzmann]]. Como el gas está en equilibrio, se puede usar una sola [[temperatura]] para toda la muestra. La [[energia_total]] resulta de multiplicar la media microscópica por [[numero_particulas]].

## Justificación del modelo

El gas es monoatómico e ideal, por lo que no se incluyen vibraciones ni rotaciones moleculares. La muestra se considera diluida, sin interacciones persistentes entre partículas salvo choques. La [[temperatura]] de 300 K es suficientemente cotidiana para que el tratamiento clásico sea razonable en un problema de aula. Además, el objetivo no es describir cada velocidad instantánea, sino el promedio de una distribución estadística estable.

## Resolución simbólica

Primero se calcula la energía media por partícula:

{{f:energia_media_particula}}

Después se relaciona esa media con la energía de toda la muestra:

{{f:energia_total_gas_ideal}}

También puede usarse directamente la relación combinada:

{{f:energia_total_temperatura}}

La secuencia lógica es: [[temperatura]] determina [[energia_media]], y [[numero_particulas]] convierte esa energía microscópica en [[energia_total]].

## Sustitución numérica

Para la partícula media, se toma el factor clásico traslacional y se multiplica por [[k_boltzmann]] y [[temperatura]]. Con los datos dados, el orden queda en 10^-21 J por partícula. Usando los valores numéricos, la [[energia_media]] es aproximadamente 6,2·10^-21 J. Para la muestra completa, se multiplica por [[numero_particulas]]. Así, la [[energia_total]] resulta aproximadamente 1,2 J. El contraste es importante: una energía por partícula minúscula se vuelve macroscópica cuando se suman muchísimas partículas.

## Validación dimensional

La dimensión de [[k_boltzmann]] es energía dividida por [[temperatura]], J/K. Al multiplicar por [[temperatura]] en K, la unidad final de [[energia_media]] es J. En

{{f:energia_total_gas_ideal}}

, [[numero_particulas]] es un conteo sin dimensión, por lo que multiplicar por [[energia_media]] mantiene la unidad J. La validación confirma que tanto [[energia_media]] como [[energia_total]] son energías, aunque describen escalas distintas.

## Interpretación física

El resultado no significa que cada partícula tenga exactamente 6,2·10^-21 J en todo instante. Significa que, en el equilibrio térmico del gas, esa es la energía cinética traslacional media asociada a una partícula. Algunas partículas estarán por encima y otras por debajo, porque sus velocidades se distribuyen estadísticamente. La [[temperatura]] de 300 K fija la escala de esa distribución. La [[energia_total]] de 1,2 J, en cambio, pertenece a la muestra completa: aparece al sumar el pequeño aporte medio de 2,0·10^20 partículas. Si se duplicara [[temperatura]], se duplicaría [[energia_media]]; si se duplicara [[numero_particulas]] a la misma [[temperatura]], solo se duplicaría [[energia_total]].

# Ejemplo de aplicación real


## Contexto

En una cámara de vacío de laboratorio se introduce una pequeña cantidad de gas noble para calibrar un sensor térmico. El sensor no mide directamente la energía de una partícula, pero la interpretación microscópica permite comprobar si la [[temperatura]] registrada es compatible con la escala de agitación del gas.

## Estimación física

Supongamos [[temperatura]] cercana a 290 K y una muestra de [[numero_particulas]] del orden de 10^18. La [[energia_media]] estará de nuevo en la escala de 10^-21 J, porque depende de [[temperatura]] y de [[k_boltzmann]]. La [[energia_total]], sin embargo, quedará en una escala de milésimas de julio al multiplicar por el número de partículas. Es una estimación razonable: la energía individual es microscópica, pero el acumulado empieza a ser detectable por instrumentación sensible.

## Interpretación

La aplicación muestra por qué la [[temperatura]] es una puerta entre el mundo macroscópico y el microscópico. No hace falta seguir una partícula concreta; basta con conocer el equilibrio térmico para asignar una [[energia_media]] representativa. Si el gas pierde equilibrio, si se vuelve denso o si aparecen interacciones fuertes, esta lectura deja de ser segura. Mientras el modelo sea válido, el gráfico de [[energia_media]] frente a [[temperatura]] actúa como una regla calibrada: más [[temperatura]] implica más energía media por partícula.

La misma lectura sirve para revisar cualquier resultado: primero escala microscópica, después suma macroscópica. Si esas dos capas se mezclan, el número puede parecer correcto y aun así contar una historia física equivocada.