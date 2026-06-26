## Errores conceptuales

### Error 1: Confundir dimensión espacial con grados de libertad

**Por qué parece correcto**
La generalización excesiva lleva a pensar que vivir en 3D implica siempre tres variables libres. El mecanismo cognitivo es una analogía incorrecta entre espacio físico y espacio de configuración.

**Por qué es incorrecto**
Las ligaduras eliminan independencia entre coordenadas. Por eso [[f]] no coincide necesariamente con la dimensión espacial.

**Señal de detección**
Se reporta [[f]] igual a 3 sin justificar [[C]] ni independencia de restricciones.

**Corrección conceptual**
Separar siempre descripción geométrica de estructura de independencia; calcular [[f]] después de identificar ligaduras.

**Mini-ejemplo de contraste**
Dos partículas en 3D no siempre tienen seis grados libres. Si la distancia mutua es fija, el conteo cambia y mantener 6 como libres produce dinámica imposible.

## Errores de modelo

### Error 2: Elegir coordenadas por comodidad algebraica sin lectura física

**Por qué parece correcto**
La heurística de minimizar escritura suele funcionar en ejercicios simples y genera confianza excesiva.

**Por qué es incorrecto**
Si la coordenada no tiene interpretación clara, el modelo pierde trazabilidad y validación física.

**Señal de detección**
No se puede explicar en una frase qué representa cada variable en términos observables.

**Corrección conceptual**
Elegir coordenadas por independencia y significado físico, no solo por forma algebraica.

**Mini-ejemplo de contraste**
Un ajuste numérico en variables abstractas puede converger, pero si no respeta la ligadura geométrica observada, el resultado no describe el sistema real.

## Errores matemáticos

### Error 3: Mezclar unidades angulares en [[theta]]

**Por qué parece correcto**
La confusión de magnitudes surge por cambio de herramienta: calculadora en radianes y datos en grados.

**Por qué es incorrecto**
Seno y coseno dependen de la unidad angular operativa. Mezclarla rompe coherencia de [[x]], [[y]] y [[r]].

**Señal de detección**
Los signos por cuadrante no coinciden con la posición física esperada.

**Corrección conceptual**
Declarar unidad angular al inicio y mantenerla estable en todo el flujo.

**Mini-ejemplo de contraste**
Usar 90 como radianes entrega proyecciones absurdas; usar 90 grados convertidos a radianes produce valores coherentes.

## Errores de interpretación

### Error 4: Tomar [[r]] como distancia recorrida

**Por qué parece correcto**
La analogía incorrecta entre distancia al origen y longitud de trayectoria es intuitiva para principiantes.

**Por qué es incorrecto**
[[r]] es estado geométrico instantáneo, no acumulado temporal de camino recorrido.

**Señal de detección**
Se compara [[r]] directamente con odometría sin justificar geometría de trayectoria.

**Corrección conceptual**
Distinguir variables de estado de variables acumulativas antes de interpretar resultados.

**Mini-ejemplo de contraste**
Una partícula que gira en circunferencia mantiene [[r]] constante mientras la distancia recorrida crece con el tiempo.

## Regla de autocontrol rápido

Antes de aceptar cualquier resultado, aplicar esta secuencia: 1) ¿Cada variable tiene significado físico explícito? 2) ¿Las ligaduras están contadas sin redundancia? 3) ¿Las unidades son coherentes, especialmente en [[theta]]? 4) ¿La interpretación distingue estado y acumulación?

Si una sola respuesta es negativa, detener cálculo final y rehacer el modelo base. Esta regla evita que errores pequeños escalen a conclusiones físicamente incorrectas y obliga a verificar independencia, validez y lectura causal antes de cerrar.