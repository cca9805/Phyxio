# Errores comunes: colisiones elásticas

## Errores conceptuales

### Error 1: Creer que en una colisión elástica las velocidades siempre se intercambian

**Por qué parece correcto:**
En los ejemplos escolares con masas iguales, efectivamente se observa que el proyectil se detiene y el blanco sale disparado. Es tentador generalizar este comportamiento a cualquier choque.

**Por qué es incorrecto:**
El intercambio total de velocidades solo ocurre si las masas son iguales. Si las masas son diferentes, las velocidades finales dependen de la razón de masas. Si el proyectil es mucho más pesado, seguirá moviéndose hacia adelante tras el choque.

**Señal de detección:**
El alumno escribe que el proyectil se detiene sistemáticamente en todos los ejercicios sin comprobar la paridad de masas.

**Corrección conceptual:**
Utilizar siempre las fórmulas generales de solución:

{{f:v1f}}

{{f:v2f}}

que consideran explícitamente el valor de las masas.

**Mini-ejemplo de contraste:**
Una bola de 1 kg a 10 m/s choca con una de 3 kg en reposo. Si se intercambiaran, la de 1 kg se detendría. Realmente, rebota hacia atrás a -5 m/s y la pesada avanza a 5 m/s.

### Error 2: Pensar que la energía cinética de cada cuerpo se conserva individualmente

**Por qué parece correcto:**
Si la energía cinética total se conserva, el cerebro tiende a simplificar pensando que cada parte mantiene su presupuesto energético original.

**Por qué es incorrecto:**
Lo que se conserva es la suma total del sistema. Durante el impacto, hay una transferencia neta de energía entre los cuerpos. Un cuerpo puede perder casi toda su energía y cedérsela al otro, siempre que el balance final sea cero.

**Señal de detección:**
El alumno afirma que la rapidez (módulo de la velocidad) de cada cuerpo no puede cambiar durante el choque.

**Corrección conceptual:**
Permitir que las energías individuales fluctúen. El choque elástico es un reparto, no un aislamiento individual.

**Mini-ejemplo de contraste:**
En la cuna de Newton, la primera bola pierde TODA su energía cinética y se detiene, mientras que la última la gana TODA. La suma es constante, pero las partes cambian radicalmente.

## Errores de modelo

### Error 3: Confundir colisión elástica con colisión sin deformación

**Por qué parece correcto:**
El término "elástico" sugiere materiales rígidos que no se deforman, como el acero endurecido.

**Por qué es incorrecto:**
Físicamente, toda colisión implica una deformación. Lo que define a la colisión elástica es que la deformación es reversible y devuelve el 100 por ciento de la energía potencial acumulada. No es la ausencia de deformación, sino la ausencia de disipación interna.

**Señal de detección:**
Clasificar una colisión como inelástica simplemente porque los cuerpos "se ven" deformables (como pelotas de goma).

**Corrección conceptual:**
El criterio es el balance de energía cinética traslacional [[DeltaK]], no la dureza visual del material.

**Mini-ejemplo de contraste:**
Dos pelotas de goma de alta calidad se deforman mucho durante el contacto pero regresan toda la energía (elásticas). Dos trozos de plomo apenas se deforman visualmente pero absorben energía en su red cristalina (inelásticos).

## Errores matemáticos

### Error 4: Usar una sola ecuación de conservación

**Por qué parece correcto:**
Se conoce la ley de conservación del momento [[p]] y parece suficiente para resolver el problema de forma rápida.

**Por qué es incorrecto:**
Un choque elástico tiene dos incógnitas de salida: [[v1f]] y [[v2f]]. Una sola ecuación lineal produce infinitas soluciones posibles. Se necesita la condición de energía cinética [[K]] para cerrar el sistema.

**Señal de detección:**
El alumno encuentra una relación entre velocidades finales pero no puede determinar sus valores únicos, o elige uno al azar.

**Corrección conceptual:**
Plantear siempre el sistema de dos ecuaciones o usar la relación de velocidades relativas:

{{f:rel}}

**Mini-ejemplo de contraste:**
Si solo usas momento, podrías decir que ambas masas salen juntas (choque inelástico). Solo al aplicar la conservación de energía descartas esa opción y hallas la solución elástica correcta.

## Errores de interpretación

### Error 5: Ignorar la inversión del signo en la velocidad relativa

**Por qué parece correcto:**
Se calcula la rapidez relativa de alejamiento pero se olvida que los cuerpos ahora se alejan en lugar de acercarse.

**Por qué es incorrecto:**
En una colisión elástica 1D, la velocidad relativa invierte su signo obligatoriamente. Si no se respeta el convenio de signos, el resultado puede mostrar cuerpos "atravesándose" físicamente.

**Señal de detección:**
Obtener resultados donde la esfera de atrás tiene más velocidad que la de adelante tras el choque (físicamente imposible).

**Corrección conceptual:**
Verificar que la relación de inversión se cumple:

{{f:rel}}

la velocidad de separación debe ser el negativo de la de aproximación.

**Mini-ejemplo de contraste:**
Bola de 2 kg a 6 m/s golpea bola de 2 kg en reposo. Velocidad relativa inicial = 6 m/s. Tras la colisión elástica, la bola 1 se detiene y la bola 2 sale a 6 m/s. La velocidad relativa final es 0 menos 6 igual a -6 m/s. El signo se ha invertido, confirmando el alejamiento.

## Regla de autocontrol rápido

Antes de entregar un ejercicio, verifica estos cuatro puntos críticos:
1. **Conservación de Energía**: ¿He comprobado que la energía inicial es igual a la final?
2. **Signos de Rebote**: Si el proyectil es mucho menor que el blanco, ¿mi velocidad final ha cambiado de signo?
3. **Unidades Coherentes**: ¿Todas mis masas están en kg y mis velocidades en m/s?
4. **Sentido Común**: ¿Se alejan los cuerpos tras el impacto o parecen seguir pegados?
