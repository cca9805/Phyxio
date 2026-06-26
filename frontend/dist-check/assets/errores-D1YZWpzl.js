const e=`# Errores frecuentes en el campo de distribuciones

## Errores conceptuales

### Error 1: Sumar módulos en lugar de vectores

**Por qué parece correcto**

Trabajar con escalares positivos parece más sencillo y menos propenso a errores de signo que operar con vectores. El alumno generaliza erróneamente la idea de que "el campo total es mayor que cada campo parcial", lo que lo lleva a sumar módulos sin considerar la dirección.

**Por qué es incorrecto**

El campo [[dE]] de cada elemento es un vector con dirección dependiente de la posición relativa entre el elemento y el punto campo. Dos contribuciones simétricas tienen componentes que se anulan parcialmente. Sumar módulos ignora estas cancelaciones y sobreestima sistemáticamente el campo resultante [[E]].

**Señal de detección**

El resultado de [[E]] es mayor que el valor máximo posible si toda la carga estuviera concentrada en el punto más cercano al punto campo. Si el resultado supera ese límite, es señal segura de que se han sumado módulos en lugar de componentes.

**Corrección conceptual**

Descomponer [[dE]] en componentes cartesianas antes de integrar. Integrar cada componente por separado. Calcular el módulo del vector resultante solo al final, después de completar todas las integrales.

**Mini-ejemplo de contraste**

Un anillo cargado en su plano mediador: cada elemento del anillo crea un [[dE]] con componente radial y componente axial. Las componentes radiales de elementos opuestos se cancelan exactamente. Si se suman los módulos, el resultado es distinto de cero en la dirección radial, lo cual es físicamente incorrecto: por simetría del anillo, [[E]] en el plano mediador es estrictamente axial.

## Errores de modelo

### Error 2: Usar el modelo de plano infinito fuera de su dominio

**Por qué parece correcto**

La fórmula del plano infinito es sencilla y no depende de [[r_dist]], lo que la hace cómoda para cualquier distancia. El alumno no distingue entre el régimen "cerca del plano" (donde el modelo es válido) y el régimen "lejos del plano" (donde el campo ya decae).

**Por qué es incorrecto**

El modelo de plano infinito es válido solo cuando [[r_dist]] es mucho menor que las dimensiones del plano real. Cuando [[r_dist]] es comparable a las dimensiones del plano, los bordes contribuyen apreciablemente y el campo empieza a decaer con la distancia, contrariamente a lo que predice el modelo ideal.

**Señal de detección**

Si el campo medido experimentalmente decrece al alejarse del plano pero el modelo predice campo constante, la distancia [[r_dist]] ya es comparable al tamaño del plano. El modelo ha salido de su dominio de validez.

**Corrección conceptual**

Verificar que [[r_dist]] es mucho menor que la dimensión más pequeña del plano antes de usar la fórmula del plano infinito. Si no se cumple, integrar [[dE]] para la geometría finita o usar métodos numéricos.

**Mini-ejemplo de contraste**

Un disco de radio 0.1 m cargado con [[sigma]] uniforme: a [[r_dist]] = 0.5 m (cinco veces el radio), el campo no es constante sino que ya decae notablemente. Aplicar la fórmula de plano infinito daría un campo independiente de la distancia, lo cual es incorrecto para esa geometría a esa escala.

## Errores matemáticos

### Error 3: Confundir [[r_dist]] con la coordenada al origen

**Por qué parece correcto**

En problemas con la fuente en el origen, la distancia del punto campo al origen coincide con la distancia fuente-punto. El alumno generaliza este caso especial a todas las situaciones, incluso cuando la fuente no está en el origen.

**Por qué es incorrecto**

En una distribución extendida, el elemento fuente ocupa una posición \`r'\` que varía a lo largo de la distribución. La distancia relevante para calcular [[dE]] es la separación entre esa posición fuente y el punto campo, no la distancia de éste al origen. Usar la distancia al origen introduce un error en el denominador del integrando que invalida toda la integral.

**Señal de detección**

Si [[r_dist]] aparece en la expresión del integrando como una constante (sin depender de la variable de integración), es probable que se haya confundido con la distancia al origen. La distancia fuente-punto siempre varía a lo largo de la distribución.

**Corrección conceptual**

Definir explícitamente el vector posición de la fuente (en función de la variable de integración) y el vector posición del punto campo (fijo durante la integración). Calcular [[r_dist]] como el módulo de la diferencia entre ambos vectores antes de sustituir en el integrando.

**Mini-ejemplo de contraste**

Para un segmento de hilo entre los extremos ±L/2 sobre el eje x, con el punto campo en (0, d), la distancia fuente-punto de un elemento en x es precisamente [[r_dist]] y equivale a la raíz de la suma de cuadrados de las coordenadas x y d, no simplemente la coordenada d. Usar únicamente d en el denominador produce un integrando erróneo y un campo sobreestimado.

## Errores de interpretación

### Error 4: Interpretar el campo constante del plano como ausencia de fuente

**Por qué parece correcto**

En la intuición cotidiana, un campo que no varía con la distancia sugiere que "no hay nada ahí" o que la fuente está muy lejos. El alumno confunde la uniformidad del campo con ausencia de acción física.

**Por qué es incorrecto**

El campo constante del plano infinito no significa que [[E]] sea débil ni que la fuente sea irrelevante: significa que la geometría de la fuente es tan extensa en dos dimensiones que las contribuciones de los elementos lejanos compensan exactamente la mayor [[r_dist]], manteniendo [[E]] constante. El campo es real, finito y capaz de ejercer fuerzas sobre cargas de prueba.

**Señal de detección**

Si el alumno argumenta que "el campo es constante porque la fuente es débil", hay una confusión entre la amplitud del campo y su dependencia espacial. El valor de [[E]] depende de [[sigma]], no de si el campo varía o no con la distancia.

**Corrección conceptual**

El campo constante del plano es una consecuencia de la simetría plana perfecta: cada elemento lejano tiene mayor distancia pero también mayor "ángulo sólido" de contribución, y los dos efectos se compensan exactamente. La amplitud de [[E]] está determinada por [[sigma]] y la permitividad del vacío, independientemente de la distancia.

**Mini-ejemplo de contraste**

Doblar [[sigma]] duplica [[E]] aunque el campo siga siendo constante con la distancia. Esto demuestra que la amplitud del campo sí depende de la fuente; solo su variación espacial es nula por simetría.

## Regla de autocontrol rápido

Antes de aceptar cualquier resultado para [[E]] de una distribución continua, verificar:

1. **Ley de decaimiento**: el campo del hilo cae inversamente con [[r_dist]]; el del plano es constante; el de una esfera o carga puntual cae con [[r_dist]] al cuadrado. Si el resultado no sigue la ley de su geometría, hay un error en el integrando o en los límites de integración.
2. **Dirección del campo**: el campo del hilo es radial y perpendicular al hilo; el del plano es perpendicular al plano. Si hay componentes en la dirección prohibida por la simetría, hay un error en la cancelación de componentes.
3. **Dimensiones**: el resultado de [[E]] debe tener unidades de voltios por metro. Verificar que [[lambda]] dividido entre (ε₀ · longitud) da V/m; que [[sigma]] dividido entre ε₀ da V/m; que [[rho_vol]] · longitud dividido entre ε₀ da V/m.
4. **Orden de magnitud**: [[E]] de nanocoulombios/metro a centímetros debe ser del orden de kilovoltios/metro. Un resultado en megavoltios/metro para densidades de laboratorio indica un error de unidades de diez potencias.
`;export{e as default};
