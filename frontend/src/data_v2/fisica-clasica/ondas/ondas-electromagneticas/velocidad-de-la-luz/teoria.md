# Velocidad De La Luz

## Idea clave
La velocidad de la luz en vacio es una referencia universal. Este tema te ensena como usarla correctamente y como cambia la propagacion cuando la onda entra en un medio material.

## 1- Que fenomeno estudia este tema
Este tema explica la propagacion de ondas electromagneticas en vacio y en medios.
Su valor didactico esta en que evita errores de modelo muy frecuentes:
- usar \(c\) cuando deberias usar \(v=c/n\),
- cambiar la frecuencia al pasar de medio,
- mezclar conversion espectral con tiempo de vuelo sin criterio fisico.

## 2- Base conceptual: que se mueve y que no se mueve
- En vacio, la onda electromagnetica se propaga a \(c\).
- En medios materiales, la propagacion disminuye a \(v\).
- En frontera ideal, la frecuencia se conserva y cambian \(v\) y \(\lambda\).
- La velocidad de propagacion no depende de la amplitud en regimen lineal; depende de propiedades del medio.

## 3- Elementos del tema (identificacion correcta)
- \(c\): velocidad de la luz en vacio (m/s).
- \(v\): velocidad de propagacion en medio (m/s).
- \(n\): indice de refraccion (1).
- \(\lambda_0\): longitud de onda en vacio (m).
- \(\lambda_m\): longitud de onda en medio (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(d\): distancia (m).
- \(t\): tiempo de propagacion (s).

## 4- Formulacion matematica minima (y que significa cada ecuacion)
### Relacion en vacio
$$
c=\lambda_0 f
$$
Lectura fisica: conecta escala espacial y temporal en vacio.

### Relacion en medio
$$
v=\lambda_m f
$$
Lectura fisica: misma estructura ondulatoria, distinta velocidad.

### Indice de refraccion
$$
n=\frac{c}{v}
$$
Lectura fisica: cuantifica cuanto se reduce la velocidad en el medio.

### Longitud de onda en medio
$$
\lambda_m=\frac{\lambda_0}{n}
$$
Lectura fisica: al crecer \(n\), disminuye \(\lambda_m\) si \(f\) es fija.

### Periodo y tiempo de vuelo
$$
T=\frac{1}{f}
$$
$$
d=vt,\qquad d=\frac{vt}{2}\ (\text{eco})
$$
Lectura fisica: permite pasar de propagacion a medida de distancia.

## 5- Cuando aplican estas relaciones (modelo y validez)
El modelo basico funciona cuando:
- el medio se aproxima lineal e isotropo,
- no domina la dispersion fuerte,
- la frontera puede tratarse de forma ideal.

Debes revisar el modelo cuando:
- el indice depende fuertemente de la frecuencia,
- hay absorcion dominante o anisotropia,
- el problema requiere velocidad de grupo en pulsos cortos.

## 6- Metodo de resolucion para problemas de velocidad de la luz
1. Define si el problema es en vacio o en medio.
2. Pasa todos los datos a SI.
3. Elige la formula minima necesaria.
4. Despeja simbolicamente antes de sustituir.
5. Verifica unidades y orden de magnitud.
6. Interpreta fisicamente el resultado.

## 7- Errores frecuentes que bloquean el aprendizaje
- usar \(c\) en un problema de medio material.
- suponer que cambia \(f\) al pasar de medio.
- confundir nm, um y m.
- olvidar factor \(1/2\) en problemas de eco.
- cerrar el ejercicio sin interpretar el resultado.

## 8- Ejemplo guia (de principio a fin)
Datos: \(f=5.0\times10^{14}\ \mathrm{Hz}\), \(n=1.50\).

Paso 1. Velocidad en medio:
$$
v=\frac{c}{n}=\frac{3.00\times10^8}{1.50}=2.00\times10^8\ \mathrm{m/s}
$$

Paso 2. Longitud de onda en vacio:
$$
\lambda_0=\frac{c}{f}=\frac{3.00\times10^8}{5.0\times10^{14}}=6.0\times10^{-7}\ \mathrm{m}
$$

Paso 3. Longitud de onda en medio:
$$
\lambda_m=\frac{\lambda_0}{n}=4.0\times10^{-7}\ \mathrm{m}
$$

Interpretacion: la frecuencia se conserva y disminuyen velocidad y longitud de onda en el medio.

## 9- Aplicaciones reales
- fibra optica y latencia de enlaces,
- medicion por lidar y tiempo de vuelo,
- calibracion de sensores opticos,
- metrologia temporal de alta precision.

## 10- Sintesis final
Dominar velocidad de la luz significa elegir bien el modelo (vacio/medio), calcular con unidades consistentes y justificar fisicamente que cambia y que no cambia al propagarse la onda.

