# Errores comunes: impulso externo y ruptura de la conservación

## Errores conceptuales

### Error 1: Creer que la ruptura de la conservación invalida el principio de momento

**Por qué parece correcto:**
Si el momento lineal no se conserva (es decir, [[Pinitial]] no es igual a [[Pfinal]]), parece que el principio físico ha fallado o no es aplicable a esa situación.

**Por qué es incorrecto:**
El principio del momento es universal, pero en sistemas no aislados toma la forma de teorema de impulso-momento. La "ruptura" de la conservación no es una falla de la física, sino una transferencia de momento entre el sistema y su entorno.

**Señal de detección:**
Abandonar el uso de magnitudes dinámicas y tratar de resolver el problema solo con cinemática pura al detectar una fuerza externa.

**Corrección conceptual:**
Utilizar la fórmula **DeltaP_ext** para cuantificar el cambio. El momento final será exactamente la suma del momento inicial más el impulso externo recibido.

**Mini-ejemplo de contraste:**
Un coche frena. Su momento no se conserva porque el suelo (externo) aplica un impulso. No ha fallado la física; simplemente el momento se ha transferido a la Tierra a través de la fricción.

## Errores de modelo

### Error 2: Usar la aproximación de impacto en procesos lentos

**Por qué parece correcto:**
En las colisiones ideales, ignoramos las fuerzas externas (como la gravedad) porque el proceso es "rápido". Se tiende a extender esta excusa a cualquier proceso.

**Por qué es incorrecto:**
La aproximación de sistema aislado solo es válida si el impulso externo (fuerza por tiempo) es despreciable. En procesos que duran segundos (como un objeto deslizando por una pista larga), la fuerza externa tiene [[t]] suficiente para generar un impulso masivo que rompe totalmente la conservación.

**Señal de detección:**
Obtener resultados que ignoran por completo la fricción o la gravedad en movimientos que duran varios segundos.

**Corrección conceptual:**
Evaluar el producto de la fuerza externa por el tiempo. Si este valor (fórmula **J**) es comparable al momento inicial, la conservación se ha roto y debe usarse el balance completo.

**Mini-ejemplo de contraste:**
Un proyectil en una explosión (milisegundos) conserva el momento a pesar de la gravedad. Un proyectil en vuelo parabólico (segundos) NO conserva el momento vertical porque la gravedad actúa demasiado tiempo.

## Errores matemáticos

### Error 3: Sumar el módulo del impulso en lugar de su valor vectorial

**Por qué parece correcto:**
Sumar cantidades absolutas parece más intuitivo y evita lidiar con signos negativos que "parecen" restar realismo al movimiento.

**Por qué es incorrecto:**
El impulso [[J]] es un vector. Si la fuerza se opone al movimiento (fricción), el impulso debe ser negativo para reducir el [[P]]. Sumarlo como positivo predeciría que la fricción acelera los objetos en lugar de frenarlos.

**Señal de detección:**
Un objeto que debería frenarse por fricción termina con una velocidad final mayor que la inicial según los cálculos.

**Corrección conceptual:**
Asignar signos a las fuerzas externas según el sistema de referencia antes de calcular el impulso mediante la fórmula **J**.

**Mini-ejemplo de contraste:**
Fuerza de frenado de 10 N durante 2 s. El impulso es -20 kg·m/s. Si se suma como +20, el momento del coche aumentaría, lo cual es físicamente absurdo.

## Errores de interpretación

### Error 4: No distinguir entre fuerza externa e impulso externo

**Por qué parece correcto:**
Si la fuerza externa es muy grande, se asume automáticamente que la conservación se rompe de forma masiva.

**Por qué es incorrecto:**
Lo que rompe la conservación no es la fuerza, sino el impulso (fuerza multiplicada por tiempo). Una fuerza externa enorme actuando durante un tiempo infinitesimal (como el peso durante un micro-choque) produce una ruptura despreciable. Inversamente, una fuerza diminuta actuando durante horas puede cambiar totalmente el momento del sistema.

**Señal de detección:**
Descartar la conservación del momento en un choque rápido solo porque "existe la gravedad", sin evaluar que el tiempo de acción tiende a cero.

**Corrección conceptual:**
Calcular siempre el valor de [[J]] antes de decidir si la ruptura de la conservación es relevante para el problema.

**Mini-ejemplo de contraste:**
Un peso de 100 N actúa durante 0.001 s en un choque rápido: el [[J]] es de solo 0.1 kg·m/s, despreciable si [[Pinitial]] es de 50 kg·m/s. En cambio, el mismo peso durante 100 s produce un [[J]] de 10000 kg·m/s, rompiendo totalmente la conservación. La fuerza es idéntica; la diferencia es el [[t]].

## Regla de autocontrol rápido

Antes de aplicar la conservación del [[P]], responde estas preguntas:

1. ¿Hay alguna fuerza externa no nula durante el intervalo de tiempo [[t]] relevante? Si sí, calcula el [[J]] correspondiente.
2. ¿El [[J]] calculado es despreciable comparado con [[Pinitial]]? (menos del 1-5 %) Si sí, puedes conservar [[P]] como aproximación.
3. ¿La variación [[DeltaP]] es coherente con el [[J]] neto externo? Comprueba que [[DeltaP]] ≈ [[J]].
4. ¿Los signos vectoriales son consistentes? Asegúrate de que las proyecciones de [[F_ext]] y [[P]] usan el mismo eje positivo.

Si todas las respuestas son afirmativas, el análisis es correcto. Cualquier inconsistencia señala un error conceptual o de signo.
