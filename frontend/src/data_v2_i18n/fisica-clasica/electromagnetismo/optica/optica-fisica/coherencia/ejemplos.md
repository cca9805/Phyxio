# Ejemplo tipo examen


## Enunciado

Un interferometro usa una fuente filtrada cuyo tiempo de coherencia es de 2.0×10⁻¹² s. Los dos brazos del montaje tienen una diferencia de camino optico de 0.30 mm. El detector mide una intensidad maxima de 9.0 unidades arbitrarias y una intensidad minima de 3.0 unidades arbitrarias.

Se pide estimar la longitud de coherencia, valorar si el desajuste de caminos permite franjas visibles y calcular la visibilidad experimental del patron. Se trabaja en aire como aproximacion de vacio.

## Datos

- Tiempo de coherencia: 2.0×10⁻¹² s.
- Velocidad de propagacion usada: 3.00×10⁸ m/s.
- Diferencia de camino optico: 0.30 mm, equivalente a 3.0×10⁻⁴ m.
- Intensidad maxima: 9.0 unidades arbitrarias.
- Intensidad minima: 3.0 unidades arbitrarias.

## Definición del sistema

El sistema es un montaje interferencial con dos caminos que se recombinan sobre un detector. La fuente aporta [[tau_c]], que se convierte en [[longitud_de_coherencia]]. El montaje aporta [[diferencia_de_camino_optico]], y el patron medido permite obtener [[visibilidad_de_franjas]] a partir de [[intensidad_maxima]] e [[intensidad_minima]].

La magnitud que decide si la interferencia temporal sobrevive es la comparacion entre [[diferencia_de_camino_optico]] y [[longitud_de_coherencia]]. La visibilidad experimental indica despues si el contraste realmente observado coincide con esa expectativa.

## Modelo físico

Se usa un modelo temporal de coherencia en aire. La fuente tiene un tiempo de memoria de fase finito, el interferometro introduce una diferencia de caminos y el detector mide maximos y minimos de intensidad. El modelo no incluye vibraciones, fondo luminoso variable ni coherencia espacial limitada.

La coherencia relativa [[coherencia_relativa]] se usa como indicador pedagogico monotono. No sustituye una funcion de correlacion completa, pero permite leer si la diferencia de caminos esta dentro o fuera de la escala de coherencia.

## Justificación del modelo

El modelo es apropiado porque el problema ofrece [[tau_c]], [[diferencia_de_camino_optico]], [[intensidad_maxima]] e [[intensidad_minima]], que son justamente las magnitudes necesarias para conectar fuente, montaje y detector. Ademas, el aire permite usar [[velocidad_de_la_luz]] como velocidad de propagacion aproximada.

Dejaria de valer si la fuente cambiara de espectro durante la medida, si los brazos vibraran, si las intensidades estuvieran muy desequilibradas o si la pregunta pidiera distinguir coherencia temporal y espacial con detalle.

## Resolución simbólica

Primero se convierte el tiempo de coherencia en longitud de coherencia:

{{f:longitud_coherencia}}

Despues se estima la coherencia relativa comparando [[diferencia_de_camino_optico]] con [[longitud_de_coherencia]]:

{{f:coherencia_relativa}}

Finalmente se calcula la visibilidad experimental a partir del contraste entre [[intensidad_maxima]] e [[intensidad_minima]]:

{{f:visibilidad_franjas}}

Antes de sustituir, se espera que [[longitud_de_coherencia]] sea del mismo orden que fracciones de milimetro. Si [[diferencia_de_camino_optico]] queda por debajo de esa escala, deberian sobrevivir franjas con contraste apreciable.

## Sustitución numérica

Para la longitud de coherencia, multiplicar 3.00×10⁸ m/s por 2.0×10⁻¹² s da 6.0×10⁻⁴ m. Por tanto [[longitud_de_coherencia]] ≈ 0.60 mm.

Para la coherencia relativa, comparar 0.60 mm con un desajuste de 0.30 mm da un indicador de aproximadamente 0.67. Por tanto [[coherencia_relativa]] queda en una zona donde las franjas deberian seguir siendo observables.

Para la visibilidad, la diferencia entre 9.0 y 3.0 es 6.0, y la suma es 12.0. El cociente normalizado da 0.50. Por tanto [[visibilidad_de_franjas]] ≈ 0.50.

## Validación dimensional

En la longitud de coherencia, una velocidad con dimension `[L T⁻¹]` multiplicada por un tiempo con dimension `[T]` produce una longitud `[L]`, coherente con [[longitud_de_coherencia]].

En la coherencia relativa, se comparan dos longitudes, de modo que el resultado no tiene unidad. En la visibilidad, se comparan intensidades con la misma unidad y el cociente tambien es adimensional.

## Interpretación física

El resultado indica que la diferencia de camino es menor que la longitud de coherencia. La fuente todavia conserva memoria de fase suficiente para que las dos contribuciones se recombinen con una relacion estable durante la medida. Por eso no se espera un patron completamente borrado.

La visibilidad de 0.50, sin embargo, no es ideal. Eso puede significar coherencia parcial, pero tambien puede reflejar intensidades desiguales, fondo luminoso o alineacion imperfecta. La lectura correcta no es que falte luz, sino que los maximos y minimos no estan tan separados como en una interferencia ideal.

Si [[diferencia_de_camino_optico]] aumentara hasta varios milimetros manteniendo la misma fuente, [[coherencia_relativa]] bajaria y el patron perderia contraste. Si se usara una fuente con mayor [[tau_c]], [[longitud_de_coherencia]] aumentaria y el mismo interferometro podria admitir brazos mas desiguales.

# Ejemplo de aplicación real


## Contexto

En tomografia de coherencia optica se usa interferencia con una fuente de coherencia corta para seleccionar una profundidad concreta dentro de un tejido. A diferencia de un interferometro de brazos muy largos, aqui no se busca coherencia maxima en todo el recorrido, sino una ventana de coincidencia.

La fuente se elige de forma que [[longitud_de_coherencia]] sea suficientemente pequeña para discriminar capas cercanas, pero no tan pequeña que el detector pierda toda señal util.

## Estimación física

Si una fuente tiene [[longitud_de_coherencia]] del orden de 10 micrometros, solo caminos que coincidan dentro de esa escala contribuyen con interferencia fuerte. Una diferencia de camino de 100 micrometros queda un orden de magnitud por encima y reduce mucho la coherencia relativa.

La estimacion cuantitativa muestra que la falta de coherencia no siempre es un defecto. En este contexto, una coherencia limitada ayuda a localizar de que profundidad procede la señal.

## Interpretación

El mismo concepto que en un laboratorio escolar borra franjas se convierte aqui en una herramienta de resolucion axial. La coherencia actua como una regla de seleccion: solo las ondas que vuelven con camino optico parecido al de referencia interfieren de forma visible.

Por eso no basta decir que un laser es mejor por ser mas coherente. Para esta aplicacion, una fuente demasiado coherente mezclaria reflexiones de muchas profundidades. El diseño busca una coherencia ajustada al objetivo de medida.