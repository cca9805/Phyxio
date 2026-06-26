# Ejemplo tipo examen


## Enunciado

Un microscopio compuesto tiene un objetivo con distancia focal de 4 mm y un ocular con distancia focal de 25 mm. La longitud optica del tubo es de 160 mm. Una muestra biologica se coloca a 4.2 mm del objetivo. Determinar la posicion de la imagen intermedia, el aumento total del microscopio y la posicion de la imagen respecto al ocular, suponiendo que el observador tiene un punto proximo convencional de 0.25 m.

## Datos

- Distancia focal del objetivo: 0.004 m
- Distancia focal del ocular: 0.025 m
- Longitud del tubo: 0.16 m
- Distancia del objeto al objetivo: 0.0042 m
- Distancia del punto proximo: 0.25 m

## Definición del sistema

El sistema consta de dos lentes convergentes delgadas colocadas coaxialmente. El objetivo esta frente a la muestra y forma una imagen real intermedia dentro del tubo. El ocular, situado al otro extremo del tubo, recibe esa imagen intermedia como objeto y la amplifica angularmente para el ojo del observador.

## Modelo físico

Se aplica la ecuacion de la lente delgada a cada lente por separado, usando [[d_o]], [[d_i]] y [[distancia_focal]] para el objetivo. La imagen intermedia se convierte en objeto del ocular. El aumento total [[aumento_total_del_microscopio]] se obtiene como producto del aumento lateral del objetivo por el aumento angular del ocular, utilizando [[longitud_del_tubo]], [[f_obj]], [[f_oc]] y [[d_pp]].

## Justificación del modelo

Las focales son del orden de milimetros a centimetros y la muestra es pequena, por lo que los rayos forman angulos reducidos con el eje optico. La aproximacion paraxial es valida. El modelo dejaria de valer si la apertura numerica del objetivo superara 0.65, caso en el que las aberraciones de tercer orden serian significativas.

## Resolución simbólica

Primero, posicion de la imagen intermedia formada por el objetivo:

{{f:ecuacion_lente_delgada}}

Despejando [[d_i]] se obtiene la distancia de la imagen al objetivo.

A continuacion, el aumento total del microscopio:

{{f:aumento_microscopio}}

El aumento angular de la lupa equivalente del ocular se obtiene de:

{{f:aumento_angular_lupa}}

## Sustitución numérica

Para la imagen intermedia, con [[d_o]] de 0.0042 m y [[distancia_focal]] de 0.004 m, operar con el inverso de 0.004 menos el inverso de 0.0042 y tomar el inverso del resultado. El inverso de 0.004 es 250, el inverso de 0.0042 es aproximadamente 238.1, la diferencia es 11.9 y su inverso da [[d_i]] aproximadamente 0.084 m, es decir, 84 mm. La imagen intermedia se forma a 84 mm del objetivo, dentro del tubo.

Para el aumento total del microscopio, dividir [[longitud_del_tubo]] entre [[f_obj]]: 0.16 dividido entre 0.004 da 40. Dividir [[d_pp]] entre [[f_oc]]: 0.25 dividido entre 0.025 da 10. Multiplicar ambos factores: 40 por 10 da [[aumento_total_del_microscopio]] igual a 400.

Para el aumento angular del ocular, dividir 0.25 entre 0.025 y obtener [[aumento_angular]] igual a 10.

## Validación dimensional

- Distancia de imagen: la operacion con inversos de metros da como resultado metros. Comprobacion dimensional: `[L]` ✓
- Aumento del microscopio: el cociente metro entre metro en cada factor da adimensional. Comprobacion: `[1]` ✓
- Aumento angular del ocular: metro entre metro da adimensional. Comprobacion: `[1]` ✓

## Interpretación física

El resultado muestra que la imagen intermedia se forma a 84 mm del objetivo, lo cual es coherente con una longitud de tubo de 160 mm: la imagen cae dentro del tubo, como se espera en un microscopio bien ajustado. El aumento total de 400 significa que un detalle de 1 micrometro en la muestra se proyecta sobre la retina del observador como si midiera 0.4 mm, tamano suficiente para ser percibido por el ojo humano.

El aumento de 400 es el producto de 40 (aumento lateral del objetivo) por 10 (aumento angular del ocular). Si se quisiera aumentar la resolucion, seria mas eficaz reducir la focal del objetivo que la del ocular, porque el factor del objetivo tiene mayor sensibilidad: reducir [[f_obj]] de 4 mm a 2 mm duplicaria el aumento total a 800, mientras que reducir [[f_oc]] de 25 mm a 12.5 mm tambien duplicaria el factor del ocular pero exigiria un ocular de mayor calidad para mantener el campo de vision.

Fisicamente, el aumento de 400 esta dentro del rango util para un microscopio con apertura numerica moderada. Superar los 600 aumentos con esta configuracion empezaria a producir aumento vacio, es decir, una imagen mas grande pero no mas nitida.

# Ejemplo de aplicación real


## Contexto

Un geologo en campo necesita examinar la textura cristalina de una roca con una lupa de bolsillo para determinar si se trata de un granito de grano fino o un basalto. Los cristales de interes miden entre 0.1 mm y 0.5 mm. La lupa tiene una focal de 50 mm y el geologo tiene un punto proximo de 0.25 m.

## Estimación física

La estimacion del aumento angular de la lupa resulta directa: [[d_pp]] dividido entre [[f_lupa]], es decir, 0.25 m dividido entre 0.050 m, da [[aumento_angular]] aproximadamente igual a 5. Este orden de magnitud es coherente con las lupas de campo habituales. Con este aumento, un cristal de 0.2 mm se percibe como si midiera 1 mm, tamano suficiente para distinguir su forma y brillo superficial. Un cristal de 0.1 mm se percibira como de 0.5 mm, en el limite de resolucion del ojo pero aun identificable bajo buena iluminacion.

Si el geologo necesitara mayor aumento, podria cambiar a una lupa de focal 25 mm, obteniendo [[aumento_angular]] de 10, con lo que el cristal de 0.1 mm se veria como de 1 mm. Sin embargo, el campo de vision se reduce y resulta mas dificil mantener la muestra enfocada en condiciones de campo. La escala de aumentos entre 3 y 10 cubre la mayor parte de las necesidades de clasificacion petrografica en campo.

## Interpretación

El aumento de 5 es adecuado para la clasificacion petrografica de campo porque permite distinguir cristales de cuarzo, feldespato y mica por su geometria y brillo sin requerir equipo de laboratorio. La decision entre lupa de 5 o de 10 aumentos depende del tamano minimo de cristal relevante y de la comodidad del campo de vision. Para un analisis mas detallado, el geologo trasladaria la muestra al laboratorio y usaria un microscopio petrografico con luz polarizada y aumentos de 40 a 400.