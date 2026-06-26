# Modelos de interferencia constructiva

## Modelo ideal

El modelo ideal describe dos ondas armonicas coherentes que llegan al mismo punto tras recorrer caminos comparables. La lectura fisica se hace en dos pasos: primero se suman las perturbaciones con fase, y despues se interpreta la intensidad media [[I_resultante]]. El refuerzo maximo aparece cuando la diferencia de camino [[Delta_r]] equivale a ciclos completos de [[lambda]], de modo que la diferencia de fase [[delta_phi]] vuelve a ser compatible con una llegada en fase.

En este leaf, el modelo ideal no representa cualquier encuentro de ondas. Representa una situacion controlada donde las fuentes conservan una relacion de fase estable, las frecuencias coinciden y el detector observa durante un tiempo suficientemente largo para medir una intensidad media, pero no tan largo como para borrar el patron por fluctuaciones aleatorias.

## Hipótesis

- Las ondas son coherentes durante la medida.
- Las ondas tienen la misma frecuencia y una polarizacion compatible cuando se trata de luz.
- El medio es lineal, de forma que se aplica superposicion sin distorsion apreciable.
- Las intensidades individuales [[I1]] e [[I2]] son estables en la region observada.
- La diferencia de camino [[Delta_r]] puede representarse mediante una geometria definida o mediante un camino optico equivalente.
- El orden [[m_orden]] se interpreta como entero cuando se buscan maximos constructivos bien definidos.

## Dominio de validez cuantitativo

El modelo es razonable si la coherencia se mantiene durante mas de 10 periodos de la onda y si la variacion de [[Delta_r]] dentro del detector es menor que una fraccion de [[lambda]]. En optica de banco, el orden de magnitud relevante suele ser micrometrico o nanometrico; en acustica de aula, puede ser centrimetrico o metrico.

Si la fuente tiene un ancho espectral grande, el patron solo permanece nitido cuando la diferencia de caminos esta por debajo de la longitud de coherencia. Si el detector promedia muchas posiciones o muchas fases, el maximo medido se reduce aunque la condicion geometrica local sea constructiva.

## Señales de fallo del modelo

Una senal clara de fallo es predecir franjas estables con fuentes independientes y no coherentes. Otra senal aparece cuando se obtiene [[I_resultante]] negativa o cuando el resultado se interpreta como creacion neta de energia. Tambien falla el modelo si se aplica una diferencia de camino puramente geometrica en medios con indice distinto sin considerar la fase acumulada.

En sonido real, el modelo empieza a fallar si las reflexiones de paredes anaden muchos caminos no controlados. En luz, falla si las polarizaciones son incompatibles o si la fuente es demasiado extensa para mantener contraste.

## Modelo extendido o alternativo

Conviene pasar al modelo extendido cuando las franjas pierden contraste, cuando hay mas de dos ondas o cuando el medio cambia la fase de manera no uniforme. El modelo extendido puede usar coherencia temporal, coherencia espacial, camino optico, visibilidad de franjas y suma de multiples contribuciones.

En optica, el cambio natural es pasar de dos ondas ideales a interferencia con camino optico y contraste finito. En acustica, el cambio natural es pasar de dos fuentes puntuales a campo sonoro con reflexiones, absorcion y fase dependiente de la posicion.

## Comparación operativa

Usa el modelo ideal si el problema pide decidir maximos a partir de [[Delta_r]], [[lambda]] y [[m_orden]], o si proporciona [[I1]], [[I2]] y [[delta_phi]] para estimar [[I_resultante]]. Usa el modelo extendido si el enunciado habla de anchura espectral, polarizacion, tamano de fuente, estabilidad temporal, indice del medio, reflexiones o visibilidad de franjas.

La decision operativa es simple: si la fase relativa esta controlada, el modelo ideal predice el maximo; si la fase relativa se degrada o se mezcla con otros caminos, el modelo extendido explica por que el maximo real es menor o menos nitido.
