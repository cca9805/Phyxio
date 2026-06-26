## Errores conceptuales

### Error 1: Pensar que la sustentación se debe solo al camino más largo

**Por qué parece correcto**
La explicación escolar suele decir que el aire de arriba recorre más distancia y por eso debe ir más rápido. Es una analogía sencilla, pero excesivamente rígida.

**Por qué es incorrecto**
El flujo no está obligado a llegar simultáneamente al borde de salida por ambos caminos. La distribución de presiones depende de condiciones de contorno, circulación, viscosidad y estado de la capa límite.

**Señal de detección**
El alumno no puede explicar por qué un ala plana con ángulo de ataque también genera sustentación.

**Corrección conceptual**
La sustentación debe leerse como combinación de presión, desviación del flujo y circulación.

**Mini-ejemplo de contraste**
Un ala plana con pequeño ángulo de ataque puede generar sustentación, aunque no tenga un extradós claramente más largo. Eso muestra que la explicación por longitud de camino no basta.

## Errores de modelo

### Error 1: Usar la fórmula global fuera de pérdida

**Por qué parece correcto**
La fórmula de [[L]] parece universal porque contiene pocos parámetros.

**Por qué es incorrecto**
Si el flujo se separa, [[C_L]] deja de comportarse como un coeficiente suave. El resultado numérico puede ocultar que el modelo ya no representa el fenómeno.

**Señal de detección**
Aumentar el ángulo no aumenta la fuerza o aparecen valores enormes de [[C_L]].

**Corrección conceptual**
Antes de aplicar la fórmula, comprobar régimen, ángulo y adherencia del flujo.

**Mini-ejemplo de contraste**
Si un cálculo exige [[C_L]] muy alto para una avioneta ordinaria, el problema probablemente no se resuelve aumentando el número, sino revisando pérdida, flaps o datos de entrada.

## Errores matemáticos

### Error 1: No convertir unidades de velocidad o área

**Por qué parece correcto**
El cálculo parece algebraicamente correcto aunque se introduzcan km/h o cm².

**Por qué es incorrecto**
La fuerza queda en newtons solo si [[rho]], [[v]] y [[S]] están en unidades SI compatibles.

**Señal de detección**
El resultado queda varios órdenes de magnitud por encima o por debajo del peso esperado.

**Corrección conceptual**
Convertir siempre velocidad a m/s y superficie a m² antes de sustituir.

**Mini-ejemplo de contraste**
Usar 90 como si fueran m/s cuando el dato está en km/h multiplica artificialmente la fuerza estimada y puede convertir un ala normal en un resultado imposible.

## Errores de interpretación

### Error 1: Confundir sustentación grande con vuelo posible

**Por qué parece correcto**
Si [[L]] es grande, parece que el avión necesariamente vuela.

**Por qué es incorrecto**
Hace falta comparar con [[W]], considerar resistencia, potencia, estabilidad y margen de pérdida.

**Señal de detección**
El alumno no verifica si [[L]] compensa el peso ni si el régimen es estable.

**Corrección conceptual**
Interpretar la fuerza dentro del balance completo del vuelo.

**Mini-ejemplo de contraste**
Un alerón de coche puede generar una fuerza grande, pero no permite volar: su orientación produce carga hacia abajo y debe interpretarse junto con la normal sobre los neumáticos.

## Regla de autocontrol rápido

Antes de cerrar cualquier ejercicio, pregunta tres cosas: si las unidades son SI, si el valor de [[C_L]] es plausible y si el régimen declarado permite usar el modelo. Si una de esas tres falla, el número puede estar bien calculado y seguir siendo físicamente inútil.