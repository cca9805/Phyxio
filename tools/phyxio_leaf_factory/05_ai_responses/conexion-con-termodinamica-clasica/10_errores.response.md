# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: conexion-con-termodinamica-clasica
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Conexion con termodinamica clasica
## Errores conceptuales
### Error 1: Leer la entropía como desorden visual
**Por qué parece correcto**
La palabra desorden aparece a menudo en explicaciones introductorias y parece intuitiva cuando se piensa en un gas expandiéndose.

**Por qué es incorrecto**
[[entropia]] se relaciona con [[numero_microestados]], no con una impresión visual. Dos sistemas visualmente parecidos pueden tener multiplicidades microscópicas distintas.

**Señal de detección**
La explicación no menciona microestados ni restricciones macroscópicas.

**Corrección conceptual**
Leer [[entropia]] como multiplicidad compatible con un macroestado.

**Mini-ejemplo de contraste**
Un sólido con muchas configuraciones vibracionales puede tener entropía relevante aunque parezca ordenado.

### Error 2: Pensar que la temperatura es solo energía media
**Por qué parece correcto**
En muchos ejemplos, más energía interna suele acompañarse de mayor temperatura.

**Por qué es incorrecto**
[[temperatura]] se conecta con [[derivada_entropia_energia]], por tanto depende de cómo cambia [[entropia]] con [[energia_interna]].

**Señal de detección**
Se afirma que duplicar energía siempre duplica temperatura.

**Corrección conceptual**
Interpretar [[temperatura]] como una variable de equilibrio ligada a la pendiente entrópica.

**Mini-ejemplo de contraste**
Durante una transición, puede añadirse energía sin aumentar mucho la temperatura.

## Errores de modelo
### Error 3: Usar Boltzmann fuera de equilibrio
**Por qué parece correcto**
La fórmula parece universal y compacta.

**Por qué es incorrecto**
El peso de Boltzmann presupone condiciones estadísticas concretas y una [[temperatura]] bien definida.

**Señal de detección**
Se aplica a un sistema que evoluciona rápidamente sin justificar equilibrio.

**Corrección conceptual**
Comprobar primero el tipo de ensemble o el régimen de cuasiequilibrio.

**Mini-ejemplo de contraste**
Un gas recién liberado en una cámara no tiene por qué tener temperatura uniforme instantánea.

### Error 4: Ignorar el dominio de la energía libre
**Por qué parece correcto**
[[energia_libre]] parece medir energía útil en cualquier caso.

**Por qué es incorrecto**
Su lectura depende de restricciones como temperatura constante y del balance entre [[energia_interna]] y [[entropia]].

**Señal de detección**
Se usa [[energia_libre]] sin especificar condiciones térmicas.

**Corrección conceptual**
Indicar el entorno térmico antes de interpretar el potencial.

**Mini-ejemplo de contraste**
A temperatura variable, otros potenciales pueden resultar más adecuados.

## Errores matemáticos
### Error 5: Omitir la constante de Boltzmann
**Por qué parece correcto**
El logaritmo de microestados ya parece capturar el crecimiento.

**Por qué es incorrecto**
[[constante_boltzmann]] aporta unidades y escala; sin ella, [[entropia]] no queda en unidades SI.

**Señal de detección**
Aparece un resultado adimensional donde se esperaba J/K.

**Corrección conceptual**
Mantener siempre la constante en la conversión micro-macro.

**Mini-ejemplo de contraste**
Un logaritmo puro no puede compararse con una entropía calorimétrica.

### Error 6: Confundir probabilidad con energía
**Por qué parece correcto**
La fórmula de Boltzmann relaciona [[probabilidad_relativa]] con [[energia_estado]].

**Por qué es incorrecto**
La probabilidad relativa es adimensional; la energía del estado tiene unidades energéticas.

**Señal de detección**
Se suman probabilidades y energías como si fueran magnitudes iguales.

**Corrección conceptual**
Separar peso estadístico y escala energética.

**Mini-ejemplo de contraste**
Un estado puede ser muy energético y aun así tener bajo peso estadístico.

## Errores de interpretación
### Error 7: Extrapolar una gráfica fuera de dominio
**Por qué parece correcto**
Una curva suave invita a prolongarla.

**Por qué es incorrecto**
La conexión clásica depende del dominio de microestados, equilibrio y tamaño del sistema.

**Señal de detección**
Se interpretan valores fuera del rango representado sin justificar el modelo.

**Corrección conceptual**
Leer la gráfica Coord dentro del dominio declarado.

**Mini-ejemplo de contraste**
Una tendencia válida para muchos microestados no describe necesariamente un sistema de dos estados.

### Error 8: Tratar un estado probable como único
**Por qué parece correcto**
El estado dominante suele ser el observado macroscópicamente.

**Por qué es incorrecto**
[[probabilidad_relativa]] compara pesos, pero no elimina fluctuaciones ni estados alternativos.

**Señal de detección**
Se escribe que los demás estados “no existen”.

**Corrección conceptual**
Hablar de dominancia estadística, no de exclusión absoluta.

**Mini-ejemplo de contraste**
A temperatura alta, varios estados energéticos pueden tener pesos cercanos.

## Regla de autocontrol rápido
Antes de interpretar, revisa microestados, unidades, dominio gráfico, equilibrio y variable clásica conectada.

