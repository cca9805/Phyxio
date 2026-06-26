const e=`## Modelo ideal

El modelo clasico de onda longitudinal en barra esbelta asume que la seccion transversal permanece plana y perpendicular al eje durante la deformacion. El desplazamiento es puramente axial y uniforme en toda la seccion. La barra se trata como un medio unidimensional donde la unica variable espacial es la coordenada axial x.

## Hipótesis

- Material homogeneo, isotropo y linealmente elastico (ley de Hooke).
- Seccion transversal constante a lo largo de la barra.
- Deformaciones pequeñas respecto a la longitud de la barra.
- La seccion transversal permanece plana (hipotesis de Bernoulli para compresion).
- Se desprecian los efectos de inercia lateral debidos a la contraccion de Poisson.
- No hay amortiguamiento interno ni fuerzas externas distribuidas.
- La longitud de onda es mucho mayor que las dimensiones transversales.

## Dominio de validez cuantitativo

El modelo es valido cuando [[lambda_long]] > 6·d (dimension transversal maxima). En terminos de frecuencia: f < [[v_barra]]/(6·d).

Para una barra de acero de 20 mm de diametro ([[v_barra]] de 5100 m/s), la frecuencia maxima es f < 42 500 Hz. Por encima de esta frecuencia el modelo pierde precision y conviene cambiar al modelo de Rayleigh-Love.

Para barras mas gruesas (50 mm), el limite baja a f < 17 000 Hz. Para alambres finos (1 mm), el modelo es valido hasta varios MHz.

Cuando f > [[v_barra]]/(3·d), incluso el modelo de Rayleigh-Love es insuficiente y se debe usar Pochhammer-Chree.

## Señales de fallo del modelo

- La velocidad medida experimentalmente disminuye con la frecuencia (dispersion observada que el modelo no predice).
- Se detectan modos de vibracion con desplazamientos no axiales significativos.
- El tiempo de llegada de pulsos de alta frecuencia no coincide con 2L/[[v_barra]].
- La amplitud del pulso decae mas rapido de lo esperado por amortiguamiento material (posible conversion a modos laterales).

## Modelo extendido o alternativo

### Modelo de Rayleigh-Love

Incluye la inercia lateral debida a la contraccion de Poisson. La velocidad se reduce y depende de la frecuencia:

La velocidad corregida es [[v_barra]] dividida por la raiz cuadrada de (1 + nu² · k² · r_giro²), donde nu es el coeficiente de Poisson y r_giro el radio de giro de la seccion. A frecuencias bajas la correccion es despreciable; a frecuencias altas introduce dispersion.

### Modelo de Mindlin-Herrmann

Añade modos de deformacion lateral como grados de libertad adicionales. Permite capturar mas ramas de dispersion pero requiere resolver un sistema acoplado de ecuaciones.

### Modelo de guia de onda cilindrica (Pochhammer-Chree)

Solucion exacta tridimensional para barras de seccion circular. Predice multiples modos (longitudinales, flexionales, torsionales) con curvas de dispersion complejas. Es el modelo de referencia para comparar los limites de las aproximaciones unidimensionales.

## Comparación operativa

| Modelo | Dispersion | Variables | Rango tipico | Complejidad |
|--------|-----------|-----------|-------------|-------------|
| Barra esbelta | No | u(x,t) | f menor que v/(6d) | Baja |
| Rayleigh-Love | Si (debil) | u(x,t) | f hasta v/(3d) | Media |
| Pochhammer-Chree | Si (exacta) | u(r,x,t) | Todo el rango | Alta |

La eleccion del modelo depende de la precision requerida y del rango de frecuencias de interes. Para la mayoria de aplicaciones de ingenieria a frecuencias audibles, el modelo de barra esbelta es suficiente.
`;export{e as default};
