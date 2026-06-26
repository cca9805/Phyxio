# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: distribucion-de-velocidades
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Distribucion de velocidades
## Modelo ideal
El modelo ideal describe un gas diluido en equilibrio, formado por muchas partículas idénticas de [[masa_particula]] que se mueven con distintas [[velocidad]]. La distribución de Maxwell-Boltzmann predice la [[densidad_probabilidad_velocidad]] de esas velocidades cuando la única escala térmica relevante es la [[temperatura_absoluta]]. No pretende seguir una molécula concreta, sino representar el reparto estadístico de un conjunto grande. En la gráfica, el máximo marca la [[velocidad_mas_probable]], mientras que las áreas bajo la curva permiten obtener una [[probabilidad_intervalo]].

## Hipótesis
- Gas ideal diluido: si las interacciones son fuertes, la forma de [[densidad_probabilidad_velocidad]] ya no depende solo de [[temperatura_absoluta]] y [[masa_particula]].
- Equilibrio térmico: si el gas no ha sufrido suficientes choques, puede aparecer una distribución deformada o con varios picos.
- Partículas idénticas: si hay mezcla de gases, cada especie tiene su propia [[masa_particula]] y sus propias velocidades características.
- Régimen clásico no relativista: si la [[velocidad_rms]] se acerca a una fracción apreciable de la velocidad de la luz, hay que cambiar de modelo.
- Volumen macroscópico: si hay muy pocas partículas, la curva continua deja de ser una buena descripción.

## Dominio de validez cuantitativo
El modelo funciona bien para gases diluidos con recorrido libre medio mucho mayor que el tamaño molecular y con densidades suficientemente bajas para que las colisiones sean binarias. Un criterio operativo es usarlo cuando la energía térmica asociada a [[constante_boltzmann]] y [[temperatura_absoluta]] no active grados internos dominantes ni ionización. En aire a 300 K, velocidades características de cientos de m/s son razonables. Si [[velocidad_rms]] es menor que aproximadamente 0,01 c, el tratamiento no relativista es seguro. Para intervalos, la [[probabilidad_intervalo]] debe calcularse con [[velocidad_minima]] y [[velocidad_maxima]], no con una altura aislada.

## Señales de fallo del modelo
Una curva experimental con dos máximos persistentes indica mezcla de poblaciones, chorro molecular o falta de equilibrio. Una cola rápida excesiva puede señalar aceleración externa, plasma, reacción química o calentamiento no uniforme. Si la [[velocidad_media]] calculada no queda entre la [[velocidad_mas_probable]] y la [[velocidad_rms]], hay un error matemático o de unidades. También falla si se usa temperatura Celsius en lugar de [[temperatura_absoluta]].

## Modelo extendido o alternativo
Para gases densos se emplean correcciones de gas real. Para plasmas o haces moleculares se usan distribuciones no maxwellianas o modelos cinéticos dependientes del tiempo. A bajas temperaturas o altas densidades pueden aparecer estadísticas cuánticas. Si hay varias especies, se construye una distribución por cada [[masa_particula]] y luego se compara su contribución experimental.

## Comparación operativa
| Situación | Modelo simple | Cambiar de modelo si |
|---|---|---|
| Gas ideal diluido | Maxwell-Boltzmann | Hay interacciones fuertes |
| Equilibrio térmico | Curva única suave | Aparecen dos picos |
| Misma especie | Una [[masa_particula]] | Hay mezcla molecular |
| Velocidades moderadas | Tratamiento clásico | [[velocidad_rms]] se aproxima a c |
| Intervalo de rapidez | Área bajo la curva | Se usa solo el valor del pico |

