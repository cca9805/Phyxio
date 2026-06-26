# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: distribucion-de-velocidades
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Distribucion de velocidades
## Errores conceptuales
### Error 1: Creer que todas las moléculas tienen la misma [[velocidad]]
**Por qué parece correcto**
La [[temperatura_absoluta]] se da como un único número y eso sugiere una única agitación molecular.
**Por qué es incorrecto**
La [[temperatura_absoluta]] fija una escala estadística, no una rapidez individual. La curva de [[densidad_probabilidad_velocidad]] existe porque hay muchas [[velocidad]] posibles.
**Señal de detección**
El alumno usa solo [[velocidad_media]] y habla como si todas las partículas tuvieran ese valor.
**Corrección conceptual**
Lee [[velocidad_mas_probable]], [[velocidad_media]] y [[velocidad_rms]] como resúmenes distintos de una distribución.
**Mini-ejemplo de contraste**
En nitrógeno a 300 K hay moléculas lentas y rápidas; la [[velocidad_media]] no borra la cola rápida.

### Error 2: Interpretar la altura de la curva como probabilidad directa
**Por qué parece correcto**
La gráfica parece indicar “cuánta probabilidad” hay en cada punto.
**Por qué es incorrecto**
[[densidad_probabilidad_velocidad]] es probabilidad por unidad de [[velocidad]]. La probabilidad real en un rango es [[probabilidad_intervalo]].
**Señal de detección**
Se compara una altura aislada con un porcentaje.
**Corrección conceptual**
Usa el área entre [[velocidad_minima]] y [[velocidad_maxima]].
**Mini-ejemplo de contraste**
Una curva alta en un intervalo estrecho puede dar menos [[probabilidad_intervalo]] que una zona baja pero ancha.

## Errores de modelo
### Error 3: Aplicar Maxwell-Boltzmann fuera de equilibrio
**Por qué parece correcto**
La fórmula parece universal para cualquier gas.
**Por qué es incorrecto**
El modelo requiere choques suficientes y equilibrio térmico. Sin equilibrio, [[densidad_probabilidad_velocidad]] puede tener varios picos.
**Señal de detección**
El enunciado habla de chorro, expansión rápida o calentamiento localizado.
**Corrección conceptual**
Comprueba si existe una [[temperatura_absoluta]] única antes de usar la distribución.
**Mini-ejemplo de contraste**
Un gas en reposo térmico usa Maxwell-Boltzmann; un haz molecular recién filtrado necesita otro modelo.

### Error 4: Usar una sola [[masa_particula]] para una mezcla
**Por qué parece correcto**
La mezcla puede tener una sola [[temperatura_absoluta]].
**Por qué es incorrecto**
Cada especie posee distinta [[masa_particula]] y por tanto distinta escala de [[velocidad]].
**Señal de detección**
Se calcula una única [[velocidad_mas_probable]] para helio y argón mezclados.
**Corrección conceptual**
Calcula una distribución por especie y compáralas.
**Mini-ejemplo de contraste**
A igual [[temperatura_absoluta]], helio presenta [[velocidad_media]] mayor que argón.

## Errores matemáticos
### Error 5: Usar Celsius en lugar de kelvin
**Por qué parece correcto**
La temperatura cotidiana se expresa en grados Celsius.
**Por qué es incorrecto**
Las fórmulas usan [[temperatura_absoluta]]; valores Celsius rompen la escala energética con [[constante_boltzmann]].
**Señal de detección**
Aparecen raíces de temperaturas negativas o velocidades demasiado bajas.
**Corrección conceptual**
Convierte siempre a kelvin antes de calcular.
**Mini-ejemplo de contraste**
20 °C no se introduce como 20, sino como aproximadamente 293 K.

### Error 6: Confundir [[velocidad_rms]] con [[velocidad_media]]
**Por qué parece correcto**
Ambas son velocidades características y tienen la misma unidad.
**Por qué es incorrecto**
[[velocidad_rms]] pondera más las moléculas rápidas porque procede del promedio cuadrático.
**Señal de detección**
El resultado coloca [[velocidad_rms]] por debajo de [[velocidad_media]].
**Corrección conceptual**
Recuerda el orden: [[velocidad_mas_probable]], luego [[velocidad_media]], luego [[velocidad_rms]].
**Mini-ejemplo de contraste**
La cola rápida eleva más [[velocidad_rms]] que [[velocidad_media]].

## Errores de interpretación
### Error 7: Pensar que el pico contiene casi todas las moléculas
**Por qué parece correcto**
El máximo visual atrae la atención.
**Por qué es incorrecto**
El pico solo localiza la [[velocidad_mas_probable]]; la población se reparte por toda la curva.
**Señal de detección**
Se ignora la anchura de la distribución.
**Corrección conceptual**
Interpreta áreas y anchuras, no solo el máximo.
**Mini-ejemplo de contraste**
Al subir [[temperatura_absoluta]], el pico baja y se ensancha, aunque aumentan las velocidades típicas.

### Error 8: Creer que mayor [[masa_particula]] implica mayor [[energia_cinetica_media]]
**Por qué parece correcto**
La energía cinética contiene masa.
**Por qué es incorrecto**
En equilibrio clásico, [[energia_cinetica_media]] depende de [[temperatura_absoluta]], no de la especie.
**Señal de detección**
Se asigna más energía media al gas pesado a la misma [[temperatura_absoluta]].
**Corrección conceptual**
La masa cambia las velocidades, no la energía media traslacional a igual [[temperatura_absoluta]].
**Mini-ejemplo de contraste**
Helio se mueve más rápido que argón, pero ambos comparten la misma [[energia_cinetica_media]] media si están a igual [[temperatura_absoluta]].

## Regla de autocontrol rápido
Comprueba kelvin, especie, equilibrio y área: si buscas una probabilidad, usa [[velocidad_minima]], [[velocidad_maxima]] y [[probabilidad_intervalo]], no una altura aislada.

