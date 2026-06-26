# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fenomenos-criticos
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fenomenos criticos
## Errores conceptuales
### Error 1: creer que crítico significa simplemente muy caliente
**Por qué parece correcto**
La palabra crítico sugiere una situación extrema y se asocia a una [[temperatura]] alta.

**Por qué es incorrecto**
La criticidad depende de la cercanía a [[temperatura_critica]], no del valor absoluto de [[temperatura]]. Un sistema puede ser crítico a baja temperatura si su transición ocurre allí.

**Señal de detección**
El razonamiento usa solo [[temperatura]] y no calcula [[temperatura_reducida]].

**Corrección conceptual**
Primero compara [[temperatura]] con [[temperatura_critica]] y decide el lado térmico.

**Mini-ejemplo de contraste**
297 K puede ser crítico si [[temperatura_critica]] está en 300 K, pero 900 K puede estar lejos para otro sistema.

### Error 2: interpretar el parámetro de orden como temperatura
**Por qué parece correcto**
El [[parametro_de_orden]] cambia cuando cambia [[temperatura]].

**Por qué es incorrecto**
El [[parametro_de_orden]] mide organización macroscópica, no agitación térmica.

**Señal de detección**
Se espera que [[parametro_de_orden]] aumente siempre con [[temperatura]].

**Corrección conceptual**
En muchas transiciones continuas, [[parametro_de_orden]] disminuye al acercarse a [[temperatura_critica]] desde la fase ordenada.

**Mini-ejemplo de contraste**
La magnetización espontánea puede caer aunque [[temperatura]] suba lentamente.

## Errores de modelo
### Error 3: usar leyes críticas en una transición de primer orden
**Por qué parece correcto**
También hay una transición y una temperatura especial.

**Por qué es incorrecto**
Las leyes de [[susceptibilidad]] y [[longitud_correlacion]] suponen continuidad crítica, no salto con coexistencia.

**Señal de detección**
Aparecen histéresis, calor latente o salto brusco.

**Corrección conceptual**
Antes de ajustar exponentes, verifica si la transición es continua.

**Mini-ejemplo de contraste**
Una curva con meseta de coexistencia no debe ajustarse como divergencia limpia.

### Error 4: ignorar tamaño finito
**Por qué parece correcto**
La teoría predice crecimiento de [[longitud_correlacion]] al acercarse al punto crítico.

**Por qué es incorrecto**
Una muestra finita no permite correlaciones mayores que su tamaño efectivo.

**Señal de detección**
La [[longitud_correlacion]] satura cerca de [[temperatura_critica]].

**Corrección conceptual**
Usa escalado finito o excluye la zona redondeada.

**Mini-ejemplo de contraste**
Una película delgada puede saturar antes que un cristal volumétrico.

## Errores matemáticos
### Error 5: olvidar el valor absoluto de la temperatura reducida
**Por qué parece correcto**
[[temperatura_reducida]] ya tiene signo y parece poder elevarse directamente.

**Por qué es incorrecto**
Las leyes de divergencia usan la distancia al punto crítico y suelen depender de |[[temperatura_reducida]]|.

**Señal de detección**
Aparecen potencias no reales para exponentes fraccionarios.

**Corrección conceptual**
Mantén el signo para el lado físico y usa el módulo para la escala de distancia.

**Mini-ejemplo de contraste**
Con [[exponente_critico_gamma]] fraccionario, una base negativa no representa una susceptibilidad real positiva.

### Error 6: confundir amplitud con exponente
**Por qué parece correcto**
Ambos cambian la forma numérica de la curva.

**Por qué es incorrecto**
[[amplitud_critica]] fija escala; [[exponente_critico_beta]] fija pendiente logarítmica.

**Señal de detección**
Se intenta comparar universalidad usando amplitudes.

**Corrección conceptual**
Compara exponentes para universalidad y amplitudes para escala material.

**Mini-ejemplo de contraste**
Dos materiales pueden tener distinta [[amplitud_susceptibilidad]] y el mismo [[exponente_critico_gamma]].

## Errores de interpretación
### Error 7: llamar infinita a una medida saturada
**Por qué parece correcto**
La teoría habla de divergencias.

**Por qué es incorrecto**
La [[susceptibilidad]] medida siempre está limitada por resolución, tamaño y campos residuales.

**Señal de detección**
Se reporta infinito en vez de un máximo experimental.

**Corrección conceptual**
Interpreta la divergencia como tendencia ideal.

**Mini-ejemplo de contraste**
Un pico alto de [[susceptibilidad]] no es infinito; indica gran respuesta colectiva.

### Error 8: ajustar cualquier tramo como crítico
**Por qué parece correcto**
Una curva puede parecer potencia en un rango corto.

**Por qué es incorrecto**
Fuera de la zona crítica, las correcciones no universales dominan.

**Señal de detección**
El exponente cambia mucho al mover dos puntos del ajuste.

**Corrección conceptual**
Busca estabilidad de pendiente en escala logarítmica.

**Mini-ejemplo de contraste**
Un ajuste con |[[temperatura_reducida]]| cercano a 0,5 no prueba criticidad.

## Regla de autocontrol rápido
Calcula [[temperatura_reducida]], verifica continuidad, revisa si [[parametro_de_orden]] cae y si [[susceptibilidad]] y [[longitud_correlacion]] crecen sin saturación artificial.

