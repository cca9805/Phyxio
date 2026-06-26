## Errores conceptuales


### Error 1: Creer que equilibrio significa ausencia de transiciones
**Por qué parece correcto**
La palabra equilibrio sugiere quietud.
**Por qué es incorrecto**
En equilibrio estadístico pueden seguir ocurriendo saltos; lo que se anula es el [[flujo_probabilidad]] neto.
**Señal de detección**
El alumno dice que [[tasa_transicion]] debe ser cero.
**Corrección conceptual**
Separar movimiento microscópico y estabilidad de [[probabilidad_estado]].
**Mini-ejemplo de contraste**
Dos estados intercambian población al mismo ritmo y sus probabilidades no cambian.


### Error 2: Confundir estacionariedad con balance detallado
**Por qué parece correcto**
Ambas ideas pueden mantener constantes las probabilidades.
**Por qué es incorrecto**
Puede haber ciclos con [[probabilidad_estado]] constante y [[flujo_probabilidad]] interno no nulo.
**Señal de detección**
No se revisan pares de transiciones inversas.
**Corrección conceptual**
Comprobar

{{f:balance_detallado_dos_estados}}

además de estacionariedad.
**Mini-ejemplo de contraste**
Tres estados pueden mantener ocupaciones constantes con corriente circular.

## Errores de modelo


### Error 3: Usar [[peso_boltzmann]] sin baño térmico estable
**Por qué parece correcto**
La fórmula parece universal.
**Por qué es incorrecto**
Requiere [[temperatura]] definida y condiciones térmicas compatibles.
**Señal de detección**
La [[temperatura]] cambia mientras se interpreta una distribución fija.
**Corrección conceptual**
Declarar el entorno y sus límites antes de usar pesos térmicos.
**Mini-ejemplo de contraste**
Un sistema aislado y uno en baño térmico no se modelan igual.


### Error 4: Ignorar estados accesibles ocultos
**Por qué parece correcto**
Solo se ven algunos estados medidos.
**Por qué es incorrecto**
La normalización falla si falta población estadística.
**Señal de detección**
La suma de [[probabilidad_estado]] no se aproxima a 1.
**Corrección conceptual**
Revisar el espacio de estados antes de diagnosticar equilibrio.
**Mini-ejemplo de contraste**
Un detector que omite un estado lento inventa un desbalance.

## Errores matemáticos


### Error 5: Restar flujos con el signo invertido
**Por qué parece correcto**
Los índices parecen simétricos.
**Por qué es incorrecto**
El signo de [[flujo_probabilidad]] indica dirección neta.
**Señal de detección**
La interpretación contradice la flecha dominante del DCL estadístico.
**Corrección conceptual**
Fijar una convención antes de aplicar

{{f:flujo_probabilidad_neto}}

.
**Mini-ejemplo de contraste**
[[flujo_probabilidad]] positivo no significa lo mismo que J_ji positivo.


### Error 6: Olvidar la normalización
**Por qué parece correcto**
Cada probabilidad individual parece razonable.
**Por qué es incorrecto**
Todas deben formar una distribución completa.
**Señal de detección**
La suma total supera 1 o queda por debajo de 1.
**Corrección conceptual**
Aplicar

{{f:normalizacion_probabilidades}}

antes de interpretar.
**Mini-ejemplo de contraste**
Tres valores plausibles pueden sumar 1.2 y no representar probabilidades.

## Errores de interpretación


### Error 7: Leer [[entropia]] como caos sin estructura
**Por qué parece correcto**
Se usa lenguaje cotidiano de desorden.
**Por qué es incorrecto**
[[entropia]] mide dispersión estadística cuantificada.
**Señal de detección**
No se conecta con [[probabilidad_estado]].
**Corrección conceptual**
Interpretar [[entropia]] desde la distribución de ocupaciones.
**Mini-ejemplo de contraste**
Dos distribuciones con la misma energía pueden tener distinta dispersión.


### Error 8: Tratar el DCL como mecánico
**Por qué parece correcto**
El diagrama usa flechas.
**Por qué es incorrecto**
Las flechas representan tráfico estadístico, no fuerzas reales.
**Señal de detección**
Se habla de newtons o aceleración.
**Corrección conceptual**
Leer entradas, salidas y balance de probabilidad.
**Mini-ejemplo de contraste**
Una flecha doble compensada indica equilibrio estadístico, no fuerza nula.

## Regla de autocontrol rápido

Antes de aceptar equilibrio, verifica normalización, [[probabilidad_estado]] estacionaria y [[flujo_probabilidad]] neto compatible con cero.