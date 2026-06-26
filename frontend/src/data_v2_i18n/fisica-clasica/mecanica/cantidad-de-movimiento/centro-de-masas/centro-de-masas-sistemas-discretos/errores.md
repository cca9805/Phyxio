# Errores comunes: centro de masas de sistemas discretos

## Errores conceptuales

### Error 1: Calcular el CM como promedio aritmético de posiciones sin ponderar por masa

**Por qué parece correcto:**
Si hay dos partículas, dividir la distancia por 2 parece dar el punto medio correcto.

**Por qué es incorrecto:**
El CM es un promedio ponderado por masa:

{{f:xcm_sum}}

Sin ponderar, las masas desiguales dan resultados erróneos.

**Señal de detección:**
El alumno usa \((x_1 + x_2)/2\) cuando las masas son diferentes.

**Corrección conceptual:**
Incluir siempre la masa de cada partícula como peso en el promedio.

**Mini-ejemplo de contraste:**
Si las masas son diferentes, el promedio simple no da el centro de masas real. Usa siempre

{{f:xcm_sum}}

y verifica que el resultado esté más cerca de la masa mayor.

### Error 2: Olvidar que el CM es vectorial y calcular solo una componente

**Por qué parece correcto:**
Si el problema parece unidimensional, una sola coordenada parece suficiente.

**Por qué es incorrecto:**
En el plano o el espacio, el CM tiene tantas componentes como dimensiones. Omitir una coordenada da una posición incompleta.

**Señal de detección:**
El alumno escribe un solo número como respuesta cuando el sistema está en el plano.


**Corrección conceptual:**

Calcular cada componente por separado y reportar el vector completo:

{{f:xcm_sum}}

{{f:ycm_sum}}


**Mini-ejemplo de contraste:**
Si el sistema está en el plano, reporta todas las componentes usando

{{f:xcm_sum}}

y

{{f:ycm_sum}}

El CM es un vector completo.

## Errores de modelo

### Error 3: Colocar el origen de coordenadas de forma que complica la suma innecesariamente

**Por qué parece correcto:**
Cualquier origen da el mismo resultado porque el CM no depende del sistema de coordenadas.

**Por qué es incorrecto:**
El resultado final es el mismo, pero un origen mal elegido genera posiciones con muchas cifras y resta legibilidad, aumentando la probabilidad de error numérico.

**Señal de detección:**
El cálculo usa coordenadas con números grandes o negativos innecesarios, y el alumno se equivoca al sumar.

**Corrección conceptual:**
Elegir el origen en una de las partículas o en un punto de simetría del sistema para simplificar la suma.

**Mini-ejemplo de contraste:**
Elige el origen para simplificar los cálculos. Por ejemplo, poner el origen en una de las partículas permite usar

{{f:xcm_sum}}

con números más sencillos y menos errores.

## Errores matemáticos

### Error 4: Sumar masas en el numerador pero olvidar la masa total [[M]] en el denominador

**Por qué parece correcto:**
El alumno recuerda que hay que multiplicar $m_i x_i$ pero cree que la suma ya incorpora la normalización.

**Por qué es incorrecto:**
Sin dividir entre la masa total [[M]]:

{{f:M_sum}}

el resultado tiene unidades de kg·m y no es una posición.

**Señal de detección:**
El resultado tiene unidades extrañas (kg·m) o un valor numéricamente enorme comparado con las posiciones.

**Corrección conceptual:**
Verificar siempre que el resultado tiene unidades de longitud y cae entre las posiciones extremas del sistema.

**Mini-ejemplo de contraste:**
Si olvidas dividir por la masa total

{{f:M_sum}}

el resultado no tiene sentido físico. Usa siempre

{{f:xcm_sum}}

para obtener una posición válida.

## Errores de interpretación

### Error 5: Interpretar que el centro de masas debe coincidir con la posición de alguna partícula del sistema

**Por qué parece correcto:**
El alumno busca el CM entre los puntos materiales existentes, como si fuera uno de ellos.

**Por qué es incorrecto:**
El CM es un promedio ponderado que puede caer en cualquier punto del espacio, incluso donde no hay masa.

**Señal de detección:**
El alumno redondea el resultado de [[xcm]] a la posición de la partícula más cercana.

**Corrección conceptual:**
Aceptar que el centro de masas es una coordenada calculada que no tiene por qué coincidir con ninguna partícula real.

**Mini-ejemplo de contraste:**
Dos masas iguales de 1 kg en \(x = 0\) y \(x = 4\) m. El CM está en \(x = 2\) m, donde no hay ninguna partícula.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica esta lista de comprobación:

1. **Unidades**: ¿el resultado tiene las dimensiones esperadas?
2. **Signo**: ¿el signo es coherente con la dirección elegida en el diagrama?
3. **Orden de magnitud**: ¿el valor es físicamente razonable para el escenario?
4. **Caso límite**: ¿la fórmula se reduce a un resultado conocido cuando un parámetro tiende a cero o a infinito?
