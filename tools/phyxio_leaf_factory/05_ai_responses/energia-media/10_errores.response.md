# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: energia-media
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Energia media
## Errores conceptuales
### Error 1: Creer que todas las partículas tienen exactamente la [[energia_media]]
**Por qué parece correcto**
La palabra media puede sonar a valor representativo único, casi como si todas las partículas hubieran sido igualadas por el equilibrio.
**Por qué es incorrecto**
En equilibrio hay una distribución de energías. La [[energia_media]] resume el conjunto, pero cada partícula puede estar por encima o por debajo.
**Señal de detección**
El alumno dice que una partícula “debe” tener siempre la energía calculada.
**Corrección conceptual**
Interpretar [[energia_media]] como promedio estadístico, no como etiqueta individual.
**Mini-ejemplo de contraste**
A la misma [[temperatura]], dos partículas pueden tener velocidades distintas y aun así pertenecer al mismo gas en equilibrio.

### Error 2: Pensar que más [[numero_particulas]] aumenta la [[energia_media]]
**Por qué parece correcto**
Más partículas parecen significar más energía disponible.
**Por qué es incorrecto**
A [[temperatura]] fija, aumentar [[numero_particulas]] aumenta [[energia_total]], no la media por partícula.
**Señal de detección**
Al duplicar [[numero_particulas]], el alumno duplica también [[energia_media]].
**Corrección conceptual**
Separar magnitudes intensivas y extensivas: [[energia_media]] depende de [[temperatura]], [[energia_total]] también de [[numero_particulas]].
**Mini-ejemplo de contraste**
Dos recipientes a 300 K pueden tener la misma [[energia_media]] aunque uno contenga diez veces más partículas.

## Errores de modelo
### Error 3: Usar el modelo clásico a cualquier [[temperatura]]
**Por qué parece correcto**
La fórmula lineal parece universal y muy simple.
**Por qué es incorrecto**
A baja [[temperatura]] pueden dominar efectos cuánticos y la equipartición clásica falla.
**Señal de detección**
Se extrapola la recta hasta regímenes criogénicos sin revisar hipótesis.
**Corrección conceptual**
Comprobar si el gas sigue siendo clásico, diluido y con niveles accesibles casi continuos.
**Mini-ejemplo de contraste**
Un gas ligero cerca de pocos kelvin puede requerir estadística cuántica, no solo {{f:energia_media_particula}}.

### Error 4: Aplicar la relación traslacional a toda la energía molecular
**Por qué parece correcto**
La [[energia_total]] se llama energía interna y parece incluir todo.
**Por qué es incorrecto**
El leaf trata energía cinética traslacional; rotación, vibración o ionización pueden añadir contribuciones.
**Señal de detección**
Se usa {{f:energia_total_temperatura}} para moléculas calientes sin revisar grados internos.
**Corrección conceptual**
Identificar qué modos energéticos están activos antes de elegir el modelo.
**Mini-ejemplo de contraste**
Un gas monoatómico moderado puede seguir el modelo; una molécula vibrante a alta [[temperatura]] puede necesitar más términos.

## Errores matemáticos
### Error 5: Introducir [[temperatura]] en grados Celsius
**Por qué parece correcto**
El termómetro cotidiano suele marcar °C.
**Por qué es incorrecto**
La relación usa [[temperatura]] absoluta; el cero de Celsius no es energía nula.
**Señal de detección**
A 27 °C se sustituye 27 en vez de unos 300 K.
**Corrección conceptual**
Convertir siempre a kelvin antes de usar [[k_boltzmann]].
**Mini-ejemplo de contraste**
27 K y 300 K no representan el mismo estado térmico, aunque 27 °C sea ambiente.

### Error 6: Confundir unidades de [[k_boltzmann]]
**Por qué parece correcto**
La constante es pequeña y puede parecer un número decorativo.
**Por qué es incorrecto**
[[k_boltzmann]] convierte kelvin en julios por partícula; sin unidades, la dimensión se rompe.
**Señal de detección**
El resultado de [[energia_media]] queda en K o sin unidad.
**Corrección conceptual**
Verificar que J/K multiplicado por K produce J.
**Mini-ejemplo de contraste**
{{f:energia_media_particula}} debe terminar en julios, no en grados ni en partículas.

## Errores de interpretación
### Error 7: Leer [[energia_media]] como energía macroscópica medible directamente
**Por qué parece correcto**
La unidad julio también se usa en energías macroscópicas.
**Por qué es incorrecto**
[[energia_media]] por partícula es del orden de 10^-21 J a temperatura ambiente.
**Señal de detección**
El alumno espera calentar un objeto con la energía de una sola partícula.
**Corrección conceptual**
Usar [[energia_total]] para el gas completo y [[energia_media]] para el nivel microscópico.
**Mini-ejemplo de contraste**
Una partícula tiene energía minúscula; un mol contiene alrededor de 10^23 partículas.

### Error 8: Interpretar pendiente gráfica como dependiente de [[numero_particulas]]
**Por qué parece correcto**
En problemas de gases aparece muchas veces [[numero_particulas]].
**Por qué es incorrecto**
La pendiente de [[energia_media]] frente a [[temperatura]] depende de [[k_boltzmann]], no de cuántas partículas haya.
**Señal de detección**
El alumno cambia la recta de [[energia_media]] al cambiar el tamaño de la muestra.
**Corrección conceptual**
Reservar [[numero_particulas]] para [[energia_total]].
**Mini-ejemplo de contraste**
Dos muestras a la misma [[temperatura]] tienen igual [[energia_media]] aunque sus [[energia_total]] sean distintas.

## Regla de autocontrol rápido
Antes de aceptar el resultado, pregunta: ¿uso kelvin, obtengo julios, distingo [[energia_media]] de [[energia_total]] y estoy dentro del gas clásico ideal en equilibrio?

