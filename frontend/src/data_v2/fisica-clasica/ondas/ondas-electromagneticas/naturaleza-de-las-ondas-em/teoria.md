# Naturaleza De Las Ondas Em

## Idea clave
Una onda electromagnetica es la propagacion acoplada de campos electrico y magnetico variables en el tiempo. No necesita medio material para propagarse en vacio.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica por que la luz, las radioondas, los rayos X y otras radiaciones son manifestaciones del mismo fenomeno fisico.

Importa porque establece el marco comun para:
- espectro electromagnetico,
- propagacion en medios,
- energia de la radiacion,
- y tecnologias de comunicacion e imagen.

## 2- Mecanismo fisico de propagacion
Un campo electrico variable genera un campo magnetico variable y viceversa. Ese acoplamiento permite que la perturbacion se autosostenga y se propague.

En vacio:
- no hay transporte de materia,
- si hay transporte de energia y momento,
- los campos son transversales a la direccion de propagacion.

E, B y direccion de avance forman una terna ortogonal.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(c\): velocidad de la luz en vacio (m/s).
- \(v\): velocidad de propagacion en medio (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(\omega\): frecuencia angular (rad/s).
- \(k\): numero de onda (rad/m).
- \(E\): amplitud de campo electrico (V/m).
- \(B\): amplitud de campo magnetico (T).
- \(\varepsilon_0\): permitividad del vacio (F/m).
- \(\mu_0\): permeabilidad del vacio (H/m).
- \(n\): indice de refraccion del medio (1).

## 4- Formulacion matematica esencial
Relacion ondulatoria general:

$$
v=\lambda f
$$

Periodo y frecuencia:

$$
T=\frac{1}{f}
$$

Conversiones de fase:

$$
\omega=2\pi f,\qquad k=\frac{2\pi}{\lambda}
$$

Velocidad de la luz en vacio:

$$
c=\frac{1}{\sqrt{\varepsilon_0\mu_0}}
$$

Relacion entre amplitudes en vacio:

$$
E=cB
$$

Relacion con indice de refraccion:

$$
v=\frac{c}{n}
$$

Lectura fisica clave:
- en cambio de medio, \(f\) se conserva y cambia \(\lambda\),
- \(E\) y \(B\) estan acoplados,
- la propagacion EM en vacio no requiere soporte material.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
Modelo base valido cuando:
- medio lineal y aproximadamente homogeneo,
- regimen clasico no cuantico,
- amplitudes donde no domina no linealidad optica.

Se refina cuando:
- hay dispersión fuerte,
- hay no linealidad del medio,
- se requiere tratamiento cuantico (fotones).

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` valida:
1. Ortogonalidad entre E, B y propagacion.
2. Acoplamiento temporal entre los dos campos.
3. Cambio de \(\lambda\) al variar \(n\) manteniendo \(f\).

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Identifica si el problema es de vacio o de medio.
2. Define incognita y unidad objetivo.
3. Selecciona ecuacion minima (v-lambda-f, c-eps0-mu0, E-cB, v-c/n).
4. Despeja en simbolico.
5. Sustituye en SI y verifica orden de magnitud.
6. Interpreta fisicamente el resultado.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- pensar que onda EM necesita medio material,
- confundir cambio de frecuencia con cambio de longitud de onda en frontera,
- mezclar c de vacio con v de medio sin indice,
- usar unidades incompatibles en E y B,
- no verificar coherencia entre formulas acopladas.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
Este subtema se domina cuando puedes pasar de la descripcion de campos a la prediccion de magnitudes medibles (frecuencia, longitud de onda, velocidad en medio).

## 10- Ejemplo guia corto
Datos: onda EM en vidrio con \(n=1.5\) y frecuencia \(f=5.0\times10^{14}\,\mathrm{Hz}\).

Paso 1- velocidad en medio:

$$
v=\frac{c}{n}=\frac{3.0\times10^8}{1.5}=2.0\times10^8\,\mathrm{m/s}
$$

Paso 2- longitud de onda en medio:

$$
\lambda=\frac{v}{f}=\frac{2.0\times10^8}{5.0\times10^{14}}=4.0\times10^{-7}\,\mathrm{m}
$$

Interpretacion: la frecuencia se conserva y la longitud de onda se reduce en el medio.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- telecomunicaciones inalambricas,
- optica y laser,
- diagnostico por imagen,
- teledeteccion y observacion astronomica.

## 12- Sintesis final
Dominar la naturaleza de las ondas EM significa entender el acoplamiento E-B, su propagacion en vacio y medios, y aplicar ese marco a problemas reales con rigor.
