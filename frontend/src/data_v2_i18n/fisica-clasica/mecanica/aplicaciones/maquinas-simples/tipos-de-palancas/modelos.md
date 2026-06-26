# Modelos físicos: tipos de palancas

## Modelo ideal

El modelo ideal trata cada palanca como un cuerpo rígido que gira alrededor de un apoyo fijo. La potencia [[P]] y la resistencia [[R]] actúan con brazos perpendiculares [[d_P]] y [[d_R]]. La etiqueta [[clase_palanca]] se determina por el orden espacial entre apoyo, potencia y resistencia.

El equilibrio ideal se usa para cuantificar fuerzas y brazos, mientras que [[VM]] ayuda a leer el efecto geométrico. La clasificación no se obtiene de [[VM]], sino de la posición relativa de los tres elementos.

## Hipótesis

- La barra o herramienta se aproxima como rígida.
- El apoyo está fijo durante el análisis.
- Las fuerzas se representan por líneas de acción definidas.
- Los brazos se miden desde el apoyo.
- Las pérdidas por rozamiento se ignoran.
- La clase se decide antes de interpretar la ventaja mecánica.

## Dominio de validez cuantitativo

El modelo es razonable cuando la deformación es menor que el 1 % de la longitud útil de la palanca y el rozamiento del apoyo es pequeño frente a los momentos principales. Para aplicar la razón [[VM]], el brazo resistente [[d_R]] debe ser positivo. En el modelo ideal, si [[d_P]] = 3 [[d_R]], la ventaja ideal vale aproximadamente 3.

Una comprobación mínima es que [[P]] por [[d_P]] y [[R]] por [[d_R]] tengan la misma unidad, N m. Además, [[clase_palanca]] solo puede tomar las tres configuraciones válidas: apoyo en medio, resistencia en medio o potencia en medio. Si se obtiene una “clase” a partir de que [[VM]] sea mayor que 1, se está usando un criterio incorrecto.

## Señales de fallo del modelo

El modelo falla si se clasifica la palanca por tamaño de fuerzas o por valor de [[VM]] en vez de por orden espacial. También falla si [[d_P]] o [[d_R]] se miden desde un extremo de la barra y no desde el apoyo. Otra señal es aplicar el modelo ideal a una herramienta muy flexible sin considerar deformación.

Un fallo típico aparece al llamar “segunda clase” a cualquier palanca con ventaja en fuerza. Una primera clase también puede tener ventaja en fuerza si el apoyo está más cerca de la resistencia.

## Modelo extendido o alternativo

Cuándo conviene cambiar de modelo: si se quiere estudiar pérdidas, deformaciones o movimiento acelerado, conviene cambiar a un modelo alternativo con rozamiento, elasticidad o dinámica rotacional. Si el objetivo principal es calcular eficiencia real, debe usarse un modelo de ventaja mecánica real. Si solo se suman varios momentos sin clasificar configuraciones, conviene pasar al modelo de sumatoria de momentos.

También conviene cambiar de modelo si las fuerzas no actúan aproximadamente perpendiculares y hay que calcular brazos efectivos mediante geometría de líneas de acción.

## Comparación operativa

| Situación | Modelo adecuado | Criterio |
|---|---|---|
| Identificar herramienta | Tipos de palancas | Usar [[clase_palanca]] |
| Calcular fuerza ideal | Equilibrio de palanca | Usar [[P]], [[R]], [[d_P]], [[d_R]] |
| Leer ayuda geométrica | Ventaja ideal | Usar [[VM]] |
| Medir pérdidas | Modelo real | Incluir rozamiento |
| Giro acelerado | Dinámica rotacional | Incluir inercia |

La regla práctica es clasificar primero y calcular después. Si se calcula primero, es fácil confundir una razón útil con la identidad del mecanismo.
