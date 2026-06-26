## Errores conceptuales


### Error 1: Creer que todos los fermiones pueden ocupar el estado de menor [[energia]]
**Por qué parece correcto**
En física clásica, los sistemas tienden a estados de menor [[energia]], así que parece natural acumular ahí todas las partículas.
**Por qué es incorrecto**
Los fermiones obedecen exclusión de Pauli: la [[degeneracion_estado]] limita cuántos pueden compartir un nivel y el [[numero_ocupacion]] no puede crecer sin techo.
**Señal de detección**
El resultado propone un [[numero_ocupacion]] mayor que la [[degeneracion_estado]].
**Corrección conceptual**
Antes de pensar en mínima [[energia]], cuenta los estados disponibles y aplica

{{f:exclusion_pauli_ocupacion_maxima}}

.
**Mini-ejemplo de contraste**
Un nivel con [[degeneracion_estado]] 2 no admite 10 fermiones en el mismo estado, aunque sea el de menor [[energia]].


### Error 2: Interpretar [[ocupacion_estado]] como número total de partículas
**Por qué parece correcto**
La palabra ocupación suena a conteo directo.
**Por qué es incorrecto**
[[ocupacion_estado]] es una probabilidad media por estado o subestado; el conteo total requiere [[numero_ocupacion]] y [[degeneracion_estado]].
**Señal de detección**
Se compara una probabilidad entre 0 y 1 con un número macroscópico de partículas.
**Corrección conceptual**
Distingue probabilidad media, subestados disponibles y conteo agrupado.
**Mini-ejemplo de contraste**
[[ocupacion_estado]] de 0,5 en un nivel con [[degeneracion_estado]] 4 sugiere [[numero_ocupacion]] medio cercano a 2.

## Errores de modelo


### Error 3: Usar equilibrio cuando el sistema está forzado
**Por qué parece correcto**
La fórmula de Fermi-Dirac es famosa y parece universal.
**Por qué es incorrecto**

{{f:fermi_dirac_ocupacion}}

exige equilibrio con [[temperatura_absoluta]] y [[potencial_quimico]] bien definidos.
**Señal de detección**
La población depende del bombeo, de un pulso externo o del tiempo.
**Corrección conceptual**
Si no hay equilibrio, usa una distribución no estacionaria o declara el modelo como aproximación local.
**Mini-ejemplo de contraste**
Un semiconductor iluminado intensamente puede no seguir una sola [[temperatura_absoluta]] electrónica.


### Error 4: Aplicar el gas ideal a un material fuertemente interactivo
**Por qué parece correcto**

{{f:energia_fermi_gas_3d}}

da una escala sencilla con [[densidad_numerica]].
**Por qué es incorrecto**
La relación ideal usa fermiones libres, [[masa_particula]] efectiva estable y estados uniformes.
**Señal de detección**
La [[energia_fermi]] estimada no concuerda con mediciones de bandas o calor específico.
**Corrección conceptual**
Cambia a modelo de bandas, masa efectiva o interacción según el material.
**Mini-ejemplo de contraste**
Electrones casi libres en un metal simple pueden aproximarse bien; electrones correlacionados en un óxido no.

## Errores matemáticos


### Error 5: Cambiar el signo de [[energia_reducida]]
**Por qué parece correcto**
La resta entre [[energia]] y [[potencial_quimico]] parece simétrica.
**Por qué es incorrecto**
El signo decide si el estado está por encima o por debajo de la referencia, y cambia la [[ocupacion_estado]].
**Señal de detección**
Un estado de alta [[energia]] aparece casi lleno sin razón física.
**Corrección conceptual**
Comprueba el orden de la diferencia antes de usar

{{f:parametro_reducido_fermi}}

.
**Mini-ejemplo de contraste**
Si [[energia]] supera claramente a [[potencial_quimico]], la ocupación debe bajar, no subir.


### Error 6: Olvidar la escala [[constante_boltzmann]][[temperatura_absoluta]]
**Por qué parece correcto**
Puede parecer que basta comparar energías absolutas.
**Por qué es incorrecto**
La suavidad de la transición depende de la escala térmica, no solo de la diferencia de [[energia]].
**Señal de detección**
Se obtienen cambios enormes por diferencias pequeñas sin mirar [[temperatura_absoluta]].
**Corrección conceptual**
Evalúa la diferencia de [[energia]] en unidades de [[constante_boltzmann]][[temperatura_absoluta]].
**Mini-ejemplo de contraste**
Una separación pequeña puede ser decisiva a baja [[temperatura_absoluta]] y poco relevante a alta [[temperatura_absoluta]].

## Errores de interpretación


### Error 7: Leer la gráfica como una recta proporcional
**Por qué parece correcto**
Muchos gráficos escolares muestran relaciones lineales.
**Por qué es incorrecto**
La ocupación fermiónica es una curva acotada y decreciente, no una proporcionalidad simple.
**Señal de detección**
Se habla de pendiente constante entre [[energia]] y [[ocupacion_estado]].
**Corrección conceptual**
Interpreta la pendiente como sensibilidad local de ocupación.
**Mini-ejemplo de contraste**
Cerca del [[potencial_quimico]] la curva cambia mucho; lejos de él se satura.


### Error 8: Creer que subir [[temperatura_absoluta]] elimina Pauli
**Por qué parece correcto**
Al calentar, más estados de alta [[energia]] pueden ocuparse.
**Por qué es incorrecto**
La [[temperatura_absoluta]] suaviza la distribución, pero no permite superar la [[degeneracion_estado]].
**Señal de detección**
El resultado acepta [[numero_ocupacion]] mayor que el máximo disponible.
**Corrección conceptual**
Separa excitación térmica de límite cuántico.
**Mini-ejemplo de contraste**
Un estado caliente puede estar menos o más poblado, pero no admite ocupación ilimitada.

## Regla de autocontrol rápido

Antes de aceptar un resultado, verifica tres cosas: 0 <= [[ocupacion_estado]] <= 1 por subestado, [[numero_ocupacion]] <= [[degeneracion_estado]] y la ocupación disminuye al aumentar [[energia]] si [[potencial_quimico]] y [[temperatura_absoluta]] permanecen fijos.