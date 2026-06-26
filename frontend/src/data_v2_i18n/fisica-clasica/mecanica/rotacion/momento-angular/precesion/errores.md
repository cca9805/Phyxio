# Errores comunes: precesión

## Errores conceptuales

### Error 1: Confundir la definición formal de precesión con la intuición cotidiana

**Por qué parece correcto:**
La intuición cotidiana sobre precesión funciona en contextos simples, así que parece correcta siempre.

**Por qué es incorrecto:**
La definición física de precesión incluye restricciones (vectorialidad, signo, marco de referencia) que la intuición ignora.

**Señal de detección:**
El alumno obtiene un resultado con el signo incorrecto o con magnitud absurda y no lo cuestiona.

**Corrección conceptual:**
Volver a la definición formal, verificar unidades y signo, y comparar con un caso límite conocido.

**Mini-ejemplo de contraste:**
Un alumno aplica precesión sin considerar el signo vectorial y obtiene un resultado positivo donde debería ser negativo; la magnitud es correcta pero la dirección no.

## Errores de modelo

### Error 2: Aplicar el modelo ideal de precesión fuera de su dominio de validez

**Por qué parece correcto:**
El modelo funciona en los ejercicios tipo, así que parece universal.

**Por qué es incorrecto:**
Todo modelo tiene hipótesis de validez. Fuera de su dominio, las predicciones divergen de la realidad.

**Señal de detección:**
El resultado numérico viola un límite físico conocido (velocidad mayor que c, energía negativa, etc.).

**Corrección conceptual:**
Verificar antes de calcular que las hipótesis del modelo se cumplen; si no, usar el modelo extendido.

**Mini-ejemplo de contraste:**
Aplicar la fórmula ideal de precesión a velocidades relativistas da un error >5 % cuando

{{f:L}}

.

## Errores matemáticos

### Error 3: Error de signo al proyectar vectores en el cálculo de precesión

**Por qué parece correcto:**
Elegir todos los valores positivos simplifica el cálculo.

**Por qué es incorrecto:**
La dirección del vector importa. Un signo equivocado en la proyección invierte el resultado.

**Señal de detección:**
El resultado tiene signo opuesto al esperado por el diagrama o la situación física.

**Corrección conceptual:**
Definir los ejes y los signos positivos antes de sustituir valores, y verificar coherencia al final.

**Mini-ejemplo de contraste:**
Una partícula se mueve hacia la izquierda respecto al eje x. Si se pone

{{f:L}}

 en vez de

{{f:L}}

, el momento calculado apunta al lado equivocado.

## Errores de interpretación

### Error 4: Leer el resultado numérico sin interpretar su significado físico

**Por qué parece correcto:**
El número es la respuesta; no hace falta más análisis.

**Por qué es incorrecto:**
Un resultado numérico sin interpretación física puede ocultar errores de concepto, signo o modelo.

**Señal de detección:**
El alumno presenta solo cifras sin unidades, sin dirección o sin comparación con un caso límite.

**Corrección conceptual:**
Después de obtener el número, verificar unidades, sentido físico y coherencia con casos límite.

**Mini-ejemplo de contraste:**
El alumno obtiene

{{f:tau_g}}

kg·m/s y escribe solo "12". El signo negativo indica dirección opuesta al eje elegido, información que se pierde.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica esta lista de comprobación:

1. **Unidades**: ¿el resultado tiene las dimensiones esperadas?
2. **Signo**: ¿el signo es coherente con la dirección elegida en el diagrama?
3. **Orden de magnitud**: ¿el valor es físicamente razonable para el escenario?
4. **Caso límite**: ¿la fórmula se reduce a un resultado conocido cuando un parámetro tiende a cero o a infinito?