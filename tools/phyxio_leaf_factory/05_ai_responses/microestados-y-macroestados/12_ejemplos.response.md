# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: microestados-y-macroestados
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen

## Enunciado
Un sistema sencillo contiene cuatro partículas distinguibles que pueden estar en la mitad izquierda o derecha de una caja. Se define un [[microestado]] indicando la posición de cada partícula. Se define un [[macroestado]] por el número de partículas situadas en la izquierda. Se pide contar la [[multiplicidad_macroestado]] de varios macrostados, obtener la [[probabilidad_macroestado]] del caso con dos partículas a la izquierda y relacionar el resultado con la [[entropia]].

## Datos
- [[numero_particulas]]: 4 partículas distinguibles.
- [[volumen]]: caja dividida en dos regiones iguales.
- [[macroestado]] de interés: dos partículas a la izquierda y dos a la derecha.
- [[microestado]]: asignación individual izquierda-derecha para cada partícula.
- [[constante_boltzmann]]: se mantiene simbólica para interpretar [[entropia]].
- Restricción: todos los microestados de posición se consideran igualmente accesibles.

## Definición del sistema
El sistema está formado por cuatro entidades microscópicas distinguibles. Cada una puede ocupar una de dos regiones del [[volumen]]. Un [[microestado]] requiere conocer la región de cada partícula individual. Un [[macroestado]] elimina esa identidad individual y conserva solo el número de partículas en la izquierda. Por tanto, el mismo [[macroestado]] puede estar producido por varias listas microscópicas distintas. La comparación será válida solo si todos los macrostados usan la misma caja, el mismo [[numero_particulas]] y el mismo criterio de accesibilidad.

## Modelo físico
El modelo es discreto, combinatorio y equiprobable. No se estudian velocidades ni interacciones, solo configuraciones de ocupación. La magnitud central es [[multiplicidad_macroestado]], porque mide cuántos [[microestado]] pertenecen al [[macroestado]] observado. A partir de ella se obtiene [[probabilidad_macroestado]] y, si interesa, [[entropia]]. El modelo representa una miniatura pedagógica de la relación entre descripción microscópica y descripción macroscópica.

## Justificación del modelo
El modelo es adecuado porque el enunciado define estados distinguibles, regiones excluyentes y restricciones fijas. No se cambia [[energia_total]], no se cambia [[volumen]] y [[numero_particulas]] permanece constante. Además, todos los [[microestado]] se tratan con el mismo peso, así que la [[probabilidad_macroestado]] puede obtenerse por conteo. Si las partículas interactuaran, si hubiera regiones de distinto tamaño o si los microestados tuvieran pesos energéticos diferentes, habría que cambiar de modelo.

## Resolución simbólica
Primero se cuenta cuántos [[microestado]] pertenecen a cada [[macroestado]].

{{f:conteo_microestados_macroestado}}

Para el caso de dos partículas a la izquierda, se eligen dos de las cuatro partículas. Esa elección determina automáticamente cuáles quedan a la derecha. Después se transforma el conteo en [[probabilidad_macroestado]] dividiendo por el número total de configuraciones izquierda-derecha.

{{f:probabilidad_macroestado_multiplicidad}}

La suma de las probabilidades de todos los macrostados debe cubrir todos los casos.

{{f:normalizacion_macroestados}}

Si se compara el caso dos-dos con otro caso, se usa la razón de multiplicidades.

{{f:razon_probabilidades_macroestados}}

La [[entropia]] del macroestado se asocia al logaritmo de su multiplicidad.

{{f:entropia_boltzmann_macroestado}}

## Sustitución numérica
Para cuatro partículas y dos regiones, el número total de [[microestado]] es 16. El [[macroestado]] con dos partículas a la izquierda tiene [[multiplicidad_macroestado]] 6. Por tanto, su [[probabilidad_macroestado]] es 6/16, es decir, 0,375. El macroestado con cero partículas a la izquierda tiene multiplicidad 1 y probabilidad 1/16. El de una partícula a la izquierda tiene multiplicidad 4 y probabilidad 4/16. La [[entropia]] del macroestado dos-dos sería proporcional a ln(6) mediante [[constante_boltzmann]].

## Validación dimensional
[[numero_microestados]] y [[multiplicidad_macroestado]] son conteos adimensionales. [[probabilidad_macroestado]] también es adimensional y debe quedar entre 0 y 1. La [[entropia]] sí tiene unidades asociadas a [[constante_boltzmann]], porque multiplica un logaritmo adimensional por una constante física. Si se aplicara el logaritmo a una magnitud con unidades, habría un fallo dimensional. Si la suma de probabilidades no diera 1, habría un fallo de normalización.

## Interpretación física
El resultado muestra que el [[macroestado]] dos-dos no es más probable por ser “más bonito” o “más ordenado”, sino porque tiene más [[microestado]] compatibles que los casos extremos. La [[multiplicidad_macroestado]] actúa como el tamaño microscópico del macroestado dentro del espacio de posibilidades. La [[probabilidad_macroestado]] de 0,375 indica que, si todos los microestados se recorren sin sesgo, el reparto dos-dos aparece con más frecuencia que tener todas las partículas a un lado. La [[entropia]] traduce esa riqueza de configuraciones a una escala física. El ejemplo también enseña que un macroestado improbable no es necesariamente imposible: el caso extremo existe, pero ocupa menos espacio estadístico.

# Ejemplo de aplicación real

## Contexto
Imagina una simulación de difusión en una caja con muchas moléculas de gas. Nadie mide la posición exacta de cada molécula; eso sería describir el [[microestado]]. Lo observable es una distribución aproximada de densidad, que funciona como [[macroestado]]. Cuando el gas se reparte casi uniformemente, ese macroestado puede estar producido por una cantidad gigantesca de microestados. En cambio, el macroestado “casi todas las moléculas en una esquina” tiene una multiplicidad muchísimo menor.

## Estimación física
Con solo 10 partículas repartidas entre dos mitades, el número total de configuraciones ya es 1024. El macroestado cercano al reparto equilibrado concentra muchas más configuraciones que los extremos. Con [[numero_particulas]] macroscópico, del orden de 10²³, la diferencia de [[multiplicidad_macroestado]] entre una distribución uniforme y una concentración extrema se vuelve tan enorme que el extremo deja de observarse en la práctica. No porque una ley lo prohíba absolutamente, sino porque su [[probabilidad_macroestado]] es microscópicamente minúscula.

## Interpretación
La aplicación conecta la experiencia cotidiana con el conteo estadístico. Un gas se expande por una habitación porque los macrostados repartidos agrupan muchos más microestados que los concentrados. La [[entropia]] aumenta porque la descripción macroscópica final admite más configuraciones microscópicas. La lectura correcta no exige imaginar cada molécula, sino entender que el macroestado observado es la cara visible de una multiplicidad enorme.

