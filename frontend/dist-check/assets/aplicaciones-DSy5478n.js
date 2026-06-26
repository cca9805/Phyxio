const a=`## 1. Precipitador electrostático industrial

Los precipitadores electrostáticos se utilizan en centrales termoeléctricas, cementeras y fundiciones para eliminar partículas en suspensión del gas de escape antes de liberarlo a la atmósfera. El principio de operación es directo: un electrodo de corona ioniza el gas y carga las partículas de polvo, que son después atraídas por la fuerza de Coulomb hacia placas colectoras de signo contrario.

La variable dominante que controla la eficiencia de captura es [[r]], la distancia entre la partícula y el electrodo colector. Dado que [[F_C]] crece cuadráticamente al reducir [[r]], el diseño converge la geometría para que las partículas más próximas experimenten fuerzas mucho mayores y sean capturadas en tiempos muy cortos. La carga [[q2]] impartida a cada partícula es el otro parámetro de diseño clave: a mayor carga, mayor fuerza de captura incluso a distancias grandes.

Variable dominante: la distancia al electrodo colector [[r]] controla la fuerza cuadráticamente; reducir [[r]] a la mitad cuadruplica [[F_C]] y acelera la captura.
Límite de validez: el modelo de carga puntual falla cuando las partículas son comparables en tamaño a la distancia al electrodo (partículas de más de 1 mm o muy próximas a la placa).

## 2. Enlace iónico en cristales de sal

En un cristal de cloruro sódico (NaCl), iones de sodio (Na⁺) e iones de cloro (Cl⁻) están ordenados en una red tridimensional alternante. La fuerza de cohesión del cristal tiene su origen principal en la fuerza eléctrica atractiva de Coulomb entre pares de iones de signo contrario. Esta atracción contrarresta la repulsión cuántica de cortocircuito entre los núcleos cuando los iones se acercan demasiado.

La energía de red del cristal se obtiene sumando las contribuciones de Coulomb de cada par iónico mediante la constante de Madelung, que encapsula la geometría de la red. La estabilidad del enlace iónico es directamente proporcional al producto de las cargas de los iones y a la inversa de la distancia de equilibrio de la red.

Variable dominante: la carga de cada ión [[q1]] y [[q2]] (siempre ±e o ±2e en sales simples) determina la energía de red; a mayor carga iónica, más fuerte el enlace y mayor el punto de fusión del cristal.
Límite de validez: el modelo de Coulomb puntual solo es una primera aproximación; a distancias interiónicas del orden de 10⁻¹⁰ m intervienen efectos cuánticos de repulsión de Pauli que el modelo clásico no captura.

## 3. Electroscopio y medición de carga en el laboratorio

El electroscopio de hojas doradas es uno de los primeros instrumentos de medida eléctrica. Dos hojas de oro fino cuelgan de un soporte conductor. Cuando se carga el instrumento, ambas hojas adquieren la misma carga [[q1]] ≈ [[q2]] y se repelen por la fuerza de Coulomb, formando un ángulo proporcional a la carga depositada.

El ángulo de apertura de las hojas permite estimar la carga total del sistema: a mayor apertura, mayor [[F_C]] repulsiva y mayor carga depositada. Aunque el sistema no es exactamente de dos cargas puntuales (las hojas son distribuciones extendidas), la ley de Coulomb proporciona una estimación correcta en el rango de ángulos pequeños donde la geometría de las hojas permanece aproximadamente constante.

Variable dominante: la cantidad de carga total depositada [[q1]] ≈ [[q2]] controla el ángulo de apertura a través de [[F_C]]; duplicar la carga cuadruplica la fuerza repulsiva a distancia fija.
Límite de validez: para ángulos de apertura mayores de 30°, la geometría de las hojas cambia significativamente y la relación entre ángulo y carga deja de ser aproximadamente lineal.

## 4. Separación electrostática de minerales

En la industria minera, los minerales con diferente conductividad eléctrica se separan mediante separadores electrostáticos de rodillo. Las partículas de mineral se depositan sobre un rodillo cargado; los minerales conductores se descargan rápidamente al contactar el rodillo y son lanzados por la fuerza centrífuga, mientras que los minerales no conductores retienen su carga [[q2]] y son atraídos de vuelta al rodillo por [[F_C]].

El parámetro de diseño crítico es la intensidad del campo eléctrico del rodillo, que determina [[F_C]] sobre cada partícula. A mayor campo, mayor selectividad: partículas con pequeñas diferencias de conductividad pueden separarse si el campo es suficientemente intenso. La distancia [[r]] entre la partícula y la superficie del rodillo también importa: cuando la partícula está adherida al rodillo, [[r]] es mínimo y [[F_C]] es máxima.

Variable dominante: la carga retenida [[q2]] en la partícula no conductora controla su adherencia al rodillo; minerales con mayor resistividad retienen más carga y experimentan mayor [[F_C]] de retención.
Límite de validez: el modelo falla cuando la humedad del mineral reduce su resistividad y las partículas se descargan más rápido de lo previsto, disminuyendo la selectividad de separación.

## 5. Tinta electrostática en impresoras láser

En una impresora láser, el tambor fotoconductor se carga uniformemente con carga negativa. Un láser ilumina selectivamente las zonas que corresponden al texto o imagen, descargando esas regiones. El tóner (polvo de pigmento cargado positivamente) es atraído por la fuerza de Coulomb hacia las zonas descargadas del tambor (que retienen carga negativa relativa respecto al tóner). Luego el tóner se transfiere al papel por otro campo eléctrico y se fija por calor.

La calidad de impresión depende directamente de que [[F_C]] entre el tóner [[q2]] y la carga residual del tambor [[q1]] sea suficiente para retener el tóner en las posiciones correctas durante el transporte, pero no tan grande como para que no pueda transferirse al papel. El equilibrio entre estas dos fuerzas define el rango de carga óptima del tóner y la tensión de transferencia.

Variable dominante: la carga del tóner [[q2]] controla tanto la atracción hacia el tambor como la transferencia al papel; un tóner con carga demasiado alta produce transferencia incompleta y borrones.
Límite de validez: a temperaturas muy altas, las propiedades dieléctricas del tambor cambian y el modelo de carga superficial fija ya no describe correctamente la distribución de [[q1]] en el tambor.
`;export{a as default};
