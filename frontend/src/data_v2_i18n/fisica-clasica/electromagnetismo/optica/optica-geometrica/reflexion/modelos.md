## Modelo ideal

El modelo de reflexion especular en optica geometrica trata la luz como rayos rectilineos que cambian de direccion al encontrar una superficie sin considerar efectos ondulatorios. La simplificacion central es asumir que la interfaz es geometricamente perfecta: lisa, infinitamente delgada y sin region de transicion.

Este modelo conserva las magnitudes angulares ([[theta_i]], [[theta_r]]) y la geometria del plano de incidencia, pero ignora la polarizacion, la fraccion de energia reflejada versus transmitida y cualquier efecto de interferencia o difraccion. La consecuencia practica es que predice exactamente la **direccion** del rayo reflejado pero no su **intensidad**.

## Hipótesis

- La superficie reflectante es **perfectamente lisa** a la escala de la longitud de onda. Si se viola, la reflexion se vuelve difusa y no existe un unico rayo reflejado.
- La luz se propaga como **rayos rectilineos** con longitud de onda despreciable frente a las dimensiones de la superficie. Si se viola, aparecen efectos de difraccion.
- La interfaz es una **frontera geometrica abrupta** sin espesor. Si se viola (pelicula delgada), surgen efectos de interferencia que el modelo no captura.
- Los medios son **isotropos y homogeneos** a ambos lados. Si se viola (medios con gradiente de indice), los rayos se curvan y el modelo de frontera plana deja de aplicar.
- No se considera la **polarizacion** de la luz. Si se viola (incidencia cerca del angulo de Brewster), la fraccion reflejada depende fuertemente de la polarizacion.

## Dominio de validez cuantitativo

El modelo es valido cuando la rugosidad de la superficie es < 50 nm para luz visible (longitud de onda de 400 a 700 nm). Este criterio corresponde al limite de Rayleigh: rugosidad inferior a una decima parte de la longitud de onda.

Los espejos de laboratorio tienen rugosidad < 20 nm y cumplen con amplio margen. Los espejos de telescopio alcanzan rugosidad < 10 nm. Una hoja de papel tiene rugosidad del orden de magnitud de micrometros (> 1000 nm), mil veces mayor que la longitud de onda, y por eso refleja difusamente.

La extension lateral de la superficie debe ser > 100 veces la longitud de onda para evitar difraccion de borde significativa.

## Señales de fallo del modelo

- La imagen reflejada aparece **borrosa o difusa** en lugar de nitida: indica que la rugosidad superficial es comparable a la longitud de onda.
- El angulo del rayo reflejado medido experimentalmente **no coincide con [[theta_i]]**: sugiere que la normal local difiere de la normal supuesta, tipico de superficies curvas mal modeladas.
- La **intensidad reflejada varia con la polarizacion** del haz incidente: el modelo geometrico no distingue polarizaciones, por lo que esta dependencia delata la necesidad de pasar al modelo de Fresnel.
- Aparecen **franjas de colores** en peliculas delgadas (pompas de jabon, manchas de aceite): indican interferencia, fenomeno ajeno al modelo de rayos.
- La luz se **curva gradualmente** en vez de reflejarse en un punto: revela un gradiente de indice incompatible con la hipotesis de frontera abrupta.

## Modelo extendido o alternativo

El **modelo de Fresnel** incorpora la polarizacion y calcula las fracciones de energia reflejada y transmitida como funcion de [[theta_i]] y los indices [[n1]], [[n2]]. Predice fenomenos como el angulo de Brewster (reflexion nula para la componente paralela) que el modelo geometrico ignora.

El **modelo ondulatorio completo** trata la reflexion como superposicion de ondas electromagneticas satisfaciendo condiciones de contorno. Incluye la onda evanescente en reflexion total interna y describe correctamente peliculas delgadas.

Cuando conviene pasar al modelo de Fresnel: siempre que se necesite conocer la intensidad reflejada, la dependencia con la polarizacion o el comportamiento cerca del angulo de Brewster. Cuando conviene pasar al modelo ondulatorio: en peliculas delgadas, guias de onda o situaciones donde la difraccion sea relevante.

## Comparación operativa

| Criterio | Modelo geometrico especular | Modelo de Fresnel | Modelo ondulatorio |
|---|---|---|---|
| Prediccion angular | Exacta | Exacta | Exacta |
| Fraccion de energia | No predice | Predice segun polarizacion | Predice con onda evanescente |
| Pelicula delgada | No aplica | No aplica | Aplica |
| Coste computacional | Minimo | Bajo | Alto |
| Rango de validez | Superficies especulares | Superficies especulares | Universal |