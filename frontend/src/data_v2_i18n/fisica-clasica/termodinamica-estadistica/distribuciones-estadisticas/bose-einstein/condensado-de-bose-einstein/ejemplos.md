# Ejemplo tipo examen


## Enunciado

Una nube ideal homogénea de átomos bosónicos tiene [[numero_particulas]] igual a 2,0·10⁶ en un [[volumen]] de 2,0·10⁻¹⁴ m³. La masa de cada átomo es [[masa_particula]] igual a 1,44·10⁻²⁵ kg. Se enfría hasta una [[temperatura]] de 80 nK. Estima la [[temperatura_critica]], decide si aparece condensado y calcula la [[fraccion_condensada]] ideal y el [[numero_condensado]].

## Datos

Los parámetros del enunciado, con sus unidades del sistema internacional, son:

- [[numero_particulas]]: 2,0·10⁶
- [[volumen]]: 2,0·10⁻¹⁴ m³
- [[masa_particula]]: 1,44·10⁻²⁵ kg
- [[temperatura]]: 80 nK
- [[constante_planck]]: 6,626·10⁻³⁴ J·s
- [[constante_boltzmann]]: 1,381·10⁻²³ J/K

## Definición del sistema

El sistema es una nube de bosones materiales confinada en un [[volumen]] efectivo. Se supone que la [[densidad_particulas]] puede aproximarse como uniforme para hacer un primer cálculo. El objeto de estudio no es una partícula aislada, sino la población estadística de estados cuánticos. La magnitud que se quiere interpretar es la [[fraccion_condensada]], y después se traduce a [[numero_condensado]] usando el [[numero_particulas]] total.

## Modelo físico

Se usa el gas ideal de Bose-Einstein no relativista. La [[temperatura_critica]] se calcula desde la [[densidad_particulas]] y la [[masa_particula]]. Si la [[temperatura]] es menor que [[temperatura_critica]], la parte de bosones que ya no cabe en estados excitados forma el condensado. Este modelo ignora interacciones, pérdidas y geometría detallada de la trampa.

## Justificación del modelo

El enunciado pide una estimación ideal, por tanto basta con comparar escalas. La nube tiene muchas partículas, lo que permite interpretar [[fraccion_condensada]] como proporción macroscópica. La [[temperatura]] está en el rango de nanokelvin, típico de condensación atómica. La [[densidad_particulas]] se obtiene de [[numero_particulas]] dividido por [[volumen]], y esa densidad fija el umbral junto con [[masa_particula]]. Si el resultado quedara fuera del intervalo físico de 0 a 1, habría que aplicar la condición de dominio antes de interpretar.

## Resolución simbólica

Primero se estima la [[densidad_particulas]] con el cociente entre [[numero_particulas]] y [[volumen]]. Después se calcula la [[temperatura_critica]] del gas ideal:

{{f:temperatura_critica_bose}}

La condición de condensación es comparar [[temperatura]] con [[temperatura_critica]]. Si el gas está por debajo del umbral, se usa la relación de fracción condensada:

{{f:fraccion_condensada_bose}}

Finalmente, el [[numero_condensado]] se obtiene multiplicando la [[fraccion_condensada]] por el [[numero_particulas]] total. El umbral de condensación equivalente en términos de densidad es la [[densidad_critica]] del gas ideal:

{{f:densidad_critica_bose}}

Cuando [[densidad_particulas]] supera [[densidad_critica]], el excedente no puede acomodarse en estados excitados y engorda el [[numero_condensado]]. Para revisar el significado microscópico del umbral, también puede estimarse la [[longitud_onda_termica]]:

{{f:longitud_onda_termica_de_broglie}}

## Sustitución numérica

La [[densidad_particulas]] estimada es 2,0·10⁶ / 2,0·10⁻¹⁴ m³, es decir, 1,0·10²⁰ m⁻³. Con esa escala y la masa indicada, la [[temperatura_critica]] resulta del orden de 2,0·10⁻⁷ K, aproximadamente 200 nK. Como la [[temperatura]] es 80 nK, el gas está por debajo del umbral. La razón térmica T/[[temperatura_critica]] es aproximadamente 0,40. En el modelo ideal, la [[fraccion_condensada]] es del orden de 1 menos esa razón elevada a 3/2, lo que da aproximadamente 0,75. Por tanto, el [[numero_condensado]] es alrededor de 1,5·10⁶ bosones.

## Validación dimensional

La [[densidad_particulas]] tiene dimensión m⁻³. En la fórmula de [[temperatura_critica]], las constantes [[constante_planck]], [[masa_particula]] y [[constante_boltzmann]] se combinan para producir kelvin cuando se introduce una densidad elevada a potencia 2/3. La [[fraccion_condensada]] no tiene unidad porque compara temperaturas del mismo tipo. El [[numero_condensado]] es un conteo de partículas, por tanto es adimensional como número puro, aunque físicamente representa una población.

## Interpretación física

El resultado indica que la nube no está solo fría, sino suficientemente por debajo de su [[temperatura_critica]] como para que una gran parte del [[numero_particulas]] ocupe el estado fundamental. La [[fraccion_condensada]] de aproximadamente 0,75 significa que el sistema ha pasado de una distribución térmica dispersa a una organización colectiva dominante. Si la [[temperatura]] subiera hacia 200 nK, el condensado se reduciría rápidamente. Si la [[densidad_particulas]] aumentara manteniendo la misma [[temperatura]], la [[temperatura_critica]] crecería y el régimen condensado sería más robusto. Físicamente, el cálculo compara separación media entre bosones con [[longitud_onda_termica]]: cuando las ondas se solapan, la identidad individual pierde protagonismo y aparece la ocupación macroscópica.

# Ejemplo de aplicación real


## Contexto

En un laboratorio de átomos ultrafríos, se ajusta la potencia de una trampa óptica para comprimir una nube de rubidio y después se evapora selectivamente la parte más energética. El objetivo no es solo bajar la [[temperatura]], sino alcanzar una combinación de [[densidad_particulas]] y [[temperatura]] que haga visible un pico central de [[numero_condensado]] en una imagen de tiempo de vuelo.

## Estimación física

Una escala razonable para un condensado atómico es [[temperatura]] entre 50 nK y 500 nK, [[numero_particulas]] entre 10⁴ y 10⁷, y [[densidad_particulas]] alrededor de 10¹⁹ a 10²¹ m⁻³. Con esas cifras, la [[temperatura_critica]] suele caer en el orden de 10⁻⁷ K. Si el experimento mide una [[temperatura]] de 120 nK y estima una [[temperatura_critica]] de 180 nK, la [[fraccion_condensada]] ideal sería apreciable, pero no completa. Si la densidad baja durante la expansión, la condición se debilita; por eso la medición debe asociarse al estado atrapado antes de liberar la nube.

## Interpretación

La aplicación muestra que el condensado se controla con dos palancas: enfriar y concentrar. Bajar [[temperatura]] aumenta [[longitud_onda_termica]], mientras aumentar [[densidad_particulas]] reduce la distancia media entre bosones. Cuando ambas escalas se cruzan, la [[fraccion_condensada]] aparece como señal de coherencia macroscópica. En la práctica, desviaciones respecto al modelo ideal no son fracaso: revelan interacciones, geometría de trampa y límites de equilibrio.