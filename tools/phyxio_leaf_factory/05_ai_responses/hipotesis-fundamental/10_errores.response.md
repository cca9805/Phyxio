# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: errores.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Hipotesis fundamental

## Errores conceptuales

### Error 1: Creer que equiprobabilidad significa ausencia de dinámica
**Por qué parece correcto**
Parece razonable porque todos los microestados tienen la misma [[probabilidad_microestado]].

**Por qué es incorrecto**
Es incorrecto porque la hipótesis habla de pesos estadísticos, no de inmovilidad.

**Señal de detección**
El alumno dice que nada cambia microscópicamente.

**Corrección conceptual**
Separa probabilidad de trayectoria.

**Mini-ejemplo de contraste**
Un gas puede cambiar de microestado aunque conserve el reparto microcanónico.

### Error 2: Confundir macroestado probable con microestado privilegiado
**Por qué parece correcto**
Un macroestado con gran [[multiplicidad_macroestado]] aparece más a menudo.

**Por qué es incorrecto**
Cada microestado sigue teniendo la misma probabilidad individual.

**Señal de detección**
Se asigna mayor peso a un microestado concreto.

**Corrección conceptual**
Suma microestados, no alteres el peso individual.

**Mini-ejemplo de contraste**
Un macroestado con 100 microestados supera a otro con 2 por cantidad, no por favoritismo.

## Errores de modelo

### Error 3: Aplicar la hipótesis a un sistema no aislado
**Por qué parece correcto**
Parece útil porque sigue habiendo muchos microestados.

**Por qué es incorrecto**
Si cambia [[energia_total]] el ensemble microcanónico no corresponde.

**Señal de detección**
Aparece intercambio térmico con el entorno.

**Corrección conceptual**
Usa modelo canónico si hay baño térmico.

**Mini-ejemplo de contraste**
Un sólido en contacto con un termostato no conserva exactamente e.

### Error 4: Contar microestados inaccesibles
**Por qué parece correcto**
Parece más completo incluir todas las configuraciones imaginables.

**Por qué es incorrecto**
Solo cuentan los compatibles con [[energia_total]], [[volumen]] y [[numero_particulas]].

**Señal de detección**
El conteo produce una [[entropia]] inflada.

**Corrección conceptual**
Define antes la accesibilidad física.

**Mini-ejemplo de contraste**
Una barrera interna puede separar regiones que no se comunican.

## Errores matemáticos

### Error 5: Olvidar la normalización
**Por qué parece correcto**
Parece que basta con decir que todos son iguales.

**Por qué es incorrecto**
Las probabilidades deben sumar toda la población estadística.

**Señal de detección**
La suma de probabilidades no da uno.

**Corrección conceptual**
Aplica {{f:normalizacion_microestados_accesibles}}.

**Mini-ejemplo de contraste**
Si hay 50 microestados, cada uno no puede tener probabilidad 0,1.

### Error 6: Usar Ω del macroestado como si fuera Ω total
**Por qué parece correcto**
Ambas cantidades cuentan microestados.

**Por qué es incorrecto**
La [[multiplicidad_macroestado]] pertenece a un macroestado, no al conjunto completo.

**Señal de detección**
Sale una probabilidad mayor que uno.

**Corrección conceptual**
Distingue [[multiplicidad_macroestado]] y [[numero_microestados_accesibles]].

**Mini-ejemplo de contraste**
Un macroestado con 20 casos dentro de un total de 100 tiene probabilidad 0,2.

## Errores de interpretación

### Error 7: Leer la entropía como desorden visual
**Por qué parece correcto**
Es una imagen común en libros introductorios.

**Por qué es incorrecto**
[[entropia]] mide multiplicidad estadística, no aspecto visual.

**Señal de detección**
Se justifica con dibujos sin contar microestados.

**Corrección conceptual**
Relaciónala con {{f:entropia_boltzmann_microcanonica}}.

**Mini-ejemplo de contraste**
Dos sistemas visualmente parecidos pueden tener multiplicidades distintas.

### Error 8: Ignorar el [[desbalance_probabilidad]]
**Por qué parece correcto**
Si las probabilidades parecen pequeñas, el sesgo puede pasar desapercibido.

**Por qué es incorrecto**
El desbalance indica separación frente a equiprobabilidad.

**Señal de detección**
Unas probabilidades son repetidamente mayores que otras.

**Corrección conceptual**
Usa [[desbalance_probabilidad]] como alarma.

**Mini-ejemplo de contraste**
Si un microestado aparece diez veces más que otro, no es microcanónico ideal.

## Regla de autocontrol rápido
Antes de aceptar una respuesta, verifica tres cosas: el sistema está aislado, [[numero_microestados_accesibles]] cuenta solo estados compatibles y todas las [[probabilidad_microestado]] accesibles quedan normalizadas sin [[desbalance_probabilidad]] injustificado.

