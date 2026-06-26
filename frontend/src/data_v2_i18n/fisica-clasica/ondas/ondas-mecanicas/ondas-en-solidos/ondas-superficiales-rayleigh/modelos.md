## Modelo ideal

El modelo ideal es un **semiespacio elastico homogeneo, isotropo y lineal** con una superficie libre plana. En este marco, la onda de Rayleigh se propaga sin dispersion a velocidad [[velocidad_de_onda_de_rayleigh]] constante (independiente de la frecuencia), su amplitud decae exponencialmente con la profundidad [[z_prof]] y las particulas describen elipses retrogradas cuyo semieje mayor es vertical.

Este modelo permite derivar la ecuacion secular de Rayleigh, la aproximacion de Viktorov para [[velocidad_de_onda_de_rayleigh]] y la relacion entre profundidad de penetracion [[d_pen]] y longitud de onda [[longitud_de_onda_de_rayleigh]].

## Hipótesis

- **Isotropia**: las propiedades elasticas son iguales en todas las direcciones. Violacion: en rocas metamorficas foliadas o composites laminados, la velocidad de Rayleigh depende de la direccion de propagacion respecto a las capas.
- **Homogeneidad**: las propiedades no varian con la posicion ni con la profundidad. Violacion: cualquier gradiente vertical de velocidad introduce dispersion y modifica la profundidad de penetracion.
- **Elasticidad lineal**: la relacion tension-deformacion es proporcional. Violacion: cerca de fuentes sismicas intensas o en materiales granulares a bajas presiones de confinamiento, aparecen efectos no lineales.
- **Superficie libre plana e infinita**: no hay topografia ni bordes laterales. Violacion: la topografia (colinas, valles) difracta y focaliza las ondas de Rayleigh, modificando amplitudes locales.
- **Sin disipacion intrinseca**: el factor Q es infinito. Violacion: en materiales con atenuacion (suelos parcialmente saturados, polimeros), la amplitud decae tambien horizontalmente por absorcion.

## Dominio de validez cuantitativo

- Longitud de onda de Rayleigh mucho mayor que las heterogeneidades del medio: [[longitud_de_onda_de_rayleigh]] > 10 veces el tamaño de grano o fractura.
- Frecuencias entre 0.5 Hz y 200 MHz (desde sismologia regional hasta dispositivos SAW en microelectronica).
- Para suelos naturales, el modelo homogeneo es valido solo si la variacion de [[v_s]] con la profundidad es menor del 20 por ciento dentro de una longitud de onda.
- Topografia con pendientes menores de 15 grados respecto a la horizontal.
- Deformaciones menores de 0.001 (regimen elastico lineal en la mayoria de rocas y metales).

## Señales de fallo del modelo

- La curva de dispersion medida (velocidad de fase vs frecuencia) no es plana: indica estratificacion y el modelo homogeneo ya no aplica.
- El movimiento de particula observado no es eliptico retrogrado: puede indicar anisotropia, topografia compleja o superposicion con ondas Love.
- La amplitud medida en superficie decae mas rapido con la distancia horizontal de lo que predice la divergencia cilindrica: indica atenuacion intrinseca no modelada.
- Diferencias de [[velocidad_de_onda_de_rayleigh]] con la direccion de propagacion mayores del 5 por ciento: indica anisotropia del medio.

## Modelo extendido o alternativo

Cuando el modelo homogeneo falla, conviene pasar al **modelo de semiespacio estratificado (metodo de la matriz de Thomson-Haskell)**. Este modelo resuelve la propagacion en un sistema de capas horizontales, cada una homogenea, produciendo modos de Rayleigh dispersivos. Es la base del metodo MASW y de la inversion de ondas superficiales.

Para medios con anisotropia, se usa la ecuacion secular generalizada que incorpora tensores elasticos completos. Para topografia compleja, se recurre a metodos numericos (elementos finitos o diferencias finitas). La transicion al modelo estratificado es necesaria cuando la curva de dispersion medida muestra variacion de [[velocidad_de_onda_de_rayleigh]] con la frecuencia mayor del 10 por ciento.

## Comparación operativa

| Aspecto | Modelo ideal (homogeneo) | Modelo extendido (estratificado) |
|---------|--------------------------|----------------------------------|
| Dispersion | No dispersivo: [[velocidad_de_onda_de_rayleigh]] constante | Dispersivo: [[velocidad_de_onda_de_rayleigh]] funcion de frecuencia |
| Penetracion | Fija: [[d_pen]] igual a [[longitud_de_onda_de_rayleigh]] | Variable: depende del perfil de capas |
| Datos necesarios | [[v_s]] y [[nu_poisson]] del medio | Perfil de [[v_s]], espesor y densidad de cada capa |
| Aplicacion | Calculo rapido en materiales uniformes | Inversion de perfiles de suelo (MASW, SASW) |
| Precision | Exacta para semiespacio uniforme | Necesaria cuando la variacion de [[v_s]] supera el 20 por ciento en una longitud de onda |
| Complejidad | Formula algebraica cerrada (Viktorov) | Resolucion numerica de la secular generalizada |