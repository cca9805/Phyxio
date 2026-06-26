# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: relacion-con-entropia-clasica
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Relacion con entropia clasica

## Errores conceptuales
### Error 1: Confundir [[entropia]] con desorden visual
**Por qué parece correcto**
Parece intuitivo porque muchos ejemplos usan mezcla o expansión.

**Por qué es incorrecto**
Es incorrecto porque aquí [[entropia]] conecta energía reversible y multiplicidad microscópica, no apariencia desordenada.

**Señal de detección**
La explicación no menciona [[calor_reversible]], [[temperatura]] ni [[numero_microestados]].

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
Un gas expandido puede parecer igual, pero tener mayor multiplicidad accesible.

### Error 2: Pensar que la lectura clásica y estadística son magnitudes distintas
**Por qué parece correcto**
Parece correcto porque usan datos muy diferentes.

**Por qué es incorrecto**
Es incorrecto: ambas describen la misma [[delta_entropia]] si se refieren al mismo cambio de estado.

**Señal de detección**
Aparecen dos resultados incompatibles para el mismo proceso sin revisar supuestos.

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
El cambio calculado con [[calor_reversible]] debe coincidir con el derivado de [[ratio_microestados]].

## Errores de modelo
### Error 3: Usar calor irreversible como [[calor_reversible]]
**Por qué parece correcto**
Parece correcto porque ambos son energía transferida como calor.

**Por qué es incorrecto**
Es incorrecto porque la fórmula clásica directa exige un camino reversible o equivalente.

**Señal de detección**
El problema describe fricción, expansión libre o gradientes fuertes y se divide calor real por [[temperatura]].

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
En una expansión libre se calcula [[delta_entropia]] con un camino reversible equivalente, no con el calor real.

### Error 4: Comparar microestados de sistemas distintos
**Por qué parece correcto**
Parece aceptable si los números son grandes en ambos casos.

**Por qué es incorrecto**
Es incorrecto porque [[ratio_microestados]] solo compara multiplicidades bajo restricciones compatibles.

**Señal de detección**
El estado inicial y final no conservan el mismo sistema ni las mismas variables macroscópicas.

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
No compares un gas con N partículas con otro de distinta composición sin redefinir el modelo.

## Errores matemáticos
### Error 5: Usar grados Celsius en [[temperatura]]
**Por qué parece correcto**
Parece inocente porque Celsius se usa en laboratorio.

**Por qué es incorrecto**
Es incorrecto: la escala térmica de la fórmula debe ser absoluta.

**Señal de detección**
Aparecen divisiones por cero cerca de 0 °C o cambios absurdos de signo.

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
Usa kelvin antes de relacionar [[calor_reversible]] con [[delta_entropia]].

### Error 6: Tratar el logaritmo como proporcionalidad lineal
**Por qué parece correcto**
Parece lógico porque más [[numero_microestados]] implica más [[entropia]].

**Por qué es incorrecto**
Es incorrecto porque la conexión estadística es logarítmica.

**Señal de detección**
Duplicar [[numero_microestados]] se interpreta como duplicar [[entropia]].

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
Un [[ratio_microestados]] enorme no produce un aumento lineal enorme de [[delta_entropia]].

## Errores de interpretación
### Error 7: Ignorar el signo de [[delta_entropia]]
**Por qué parece correcto**
Parece secundario si solo interesa el valor numérico.

**Por qué es incorrecto**
Es incorrecto porque el signo indica crecimiento o reducción de multiplicidad accesible.

**Señal de detección**
El resultado positivo se explica como pérdida de microestados o al revés.

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
Si [[ratio_microestados]] > 1, la lectura estadística debe indicar aumento de [[entropia]].

### Error 8: Olvidar la escala de [[k_boltzmann]]
**Por qué parece correcto**
Parece una constante decorativa en la fórmula.

**Por qué es incorrecto**
Es incorrecto porque convierte información adimensional en unidades J/K.

**Señal de detección**
El resultado estadístico queda sin unidades o se compara con energía directamente.

**Corrección conceptual**
Revisa que el cálculo describa el mismo sistema, use [[temperatura]] absoluta y conecte la lectura clásica con [[numero_microestados]].

**Mini-ejemplo de contraste**
La [[k_boltzmann]] permite comparar el conteo microscópico con la [[entropia]] clásica.

## Regla de autocontrol rápido
Antes de aceptar una [[delta_entropia]], comprueba tres cosas: [[calor_reversible]] pertenece a un camino reversible, [[temperatura]] está en kelvin y el signo coincide con el cambio de [[ratio_microestados]].

