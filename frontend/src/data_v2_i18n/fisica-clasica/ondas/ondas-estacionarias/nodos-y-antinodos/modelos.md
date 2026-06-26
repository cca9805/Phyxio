# Modelos de nodos y antinodos

## Modelo ideal

El modelo estandar de nodos y antinodos describe una onda estacionaria pura en un medio homogeneo e infinito o semiinfinito con condiciones de contorno fijas. En este modelo, los nodos representan puntos de amplitud exactamente cero en todo instante, mientras los antinodos alcanzan amplitud maxima constante igual al doble de la amplitud de cada onda viajera componente.

Las posiciones de nodos y antinodos siguen distribuciones espaciales regulares determinadas unicamente por la longitud de onda. La distancia entre nodos consecutivos es exactamente media longitud de onda, y la distancia entre nodo y antinodo es exactamente un cuarto de longitud de onda. Esta regularidad permite predecir con precision arbitraria la ubicacion de cualquier punto caracteristico del patron estacionario.

## Hipotesis

- El medio es perfectamente elastico y homogeneo, sin variaciones de densidad o tension que perturben la propagacion.
- Las ondas que interfieren tienen identica frecuencia, amplitud y longitud de onda.
- No existen perdidas por disipacion, radiacion o amortiguamiento interno.
- Las condiciones de contorno establecen nodos perfectos en los extremos del sistema.
- El sistema opera en regimen lineal, sin efectos no lineales que modifiquen la forma de la onda.

## Dominio de validez cuantitativo

El modelo ideal proporciona resultados con error menor al 1% cuando se cumplen las siguientes condiciones cuantitativas:

- Frecuencia de operacion 0.1 kHz < f < 10 kHz para sistemas mecanicos macroscopicos.
- Amplitudes de oscilacion A < 1% de la longitud de onda para validez del regimen lineal.
- Coeficiente de amortiguamiento menor al 0.5% por ciclo garantiza perdidas despreciables.
- Coeficiente de reflexion R > 0.95 mantiene la pureza de la onda estacionaria.

Para frecuencias ultrasonicas superiores a 10 kHz o sistemas de microescala menores a 1 mm, los efectos de disipacion viscosa pueden requerir correcciones adicionales. La transicion ocurre cuando el numero de Reynolds cae por debajo de 1000, marcando el inicio del dominio viscoso significativo.

## Senales de fallo del modelo

El modelo deja de ser fiable cuando se observan las siguientes desviaciones:

- Los nodos presentan amplitud residual observable, superior al cinco por ciento de la amplitud maxima.
- La distancia medida entre nodos consecutivos varia mas del dos por ciento entre diferentes pares.
- Los antinodos muestran amplitudes significativamente diferentes entre si en un mismo sistema.
- Aparecen puntos de amplitud nula fuera de las posiciones predichas por la geometria regular.
- El sistema presenta dependencia temporal en las posiciones nodales, indicando componentes viajeras no despreciables.

## Modelo extendido o alternativo

Para sistemas con amortiguamiento significativo, el modelo extendido incorpora una envolvente espacial decreciente que modula la amplitud de la onda estacionaria. En este caso, los nodos conservan amplitud nula pero los antinodos presentan amplitudes decrecientes con la distancia desde la fuente.

En sistemas con extremos libres en lugar de fijos, el patron se desplaza medio cuarto de longitud de onda, intercambiando las posiciones relativas de nodos y antinodos respecto al modelo estandar. Esta condicion de contorno alternativa produce antinodos en los extremos en lugar de nodos.

## Comparacion operativa

| Caracteristica | Modelo ideal | Modelo amortiguado | Extremos libres |
|---|---|---|---|
| Amplitud en nodos | Cero exacto | Cercano a cero | Cercano a cero |
| Amplitud en antinodos | Constante | Decreciente | Constante o decreciente |
| Separacion nodos | lambda/2 exacto | lambda/2 aproximado | lambda/2 exacto |
| Posicion relativa nodo-extremo | Coincidente | Coincidente | Desplazada lambda/4 |

La eleccion entre modelos depende del analisis de las condiciones de contorno fisicas y del coeficiente de amortiguamiento del sistema real.
