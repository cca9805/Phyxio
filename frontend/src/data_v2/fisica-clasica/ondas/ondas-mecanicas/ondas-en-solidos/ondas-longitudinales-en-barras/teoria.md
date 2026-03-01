# Ondas Longitudinales En Barras

## Idea clave
En una barra elastica, la perturbacion axial se propaga por compresion y dilatacion sucesivas del material. Las frecuencias permitidas dependen de la velocidad longitudinal del medio y de las condiciones de frontera de la barra.

## 1- Que estudia este tema y por que es fundamental
Este tema desarrolla la propagacion longitudinal en barras 1D, base de:
- vibracion axial de elementos estructurales,
- resonancia en barras y varillas,
- metodos ultrasonicos en solidos,
- identificacion modal para diagnostico de dano.

La clave no es solo calcular \(f_n\), sino entender por que solo ciertos modos son compatibles con la geometria y los apoyos.

## 2- Mecanismo fisico de propagacion axial
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En barras:
- una compresion local aumenta esfuerzo axial,
- ese esfuerzo acelera la region adyacente,
- la perturbacion viaja como onda longitudinal.

La velocidad depende de rigidez axial e inercia volumetrica:

$$
v=\sqrt{\frac{E}{\rho}}
$$

## 3- Condiciones de frontera y modos permitidos
Las fronteras seleccionan la familia modal.

1. Fija-fija (o libre-libre):

$$
f_n=\frac{nv}{2L},\qquad \lambda_n=\frac{2L}{n}
$$

2. Fija-libre (cuarto de onda):

$$
f_n=\frac{(2n-1)v}{4L},\qquad \lambda_n=\frac{4L}{2n-1}
$$

Por eso dos barras del mismo material pueden tener espectros modales distintos si cambian los apoyos.

## 4- Magnitudes y parametros que debes identificar
- \(E\): modulo de Young (Pa).
- \(\rho\): densidad (kg/m^3).
- \(v\): velocidad longitudinal axial (m/s).
- \(L\): longitud efectiva de la barra (m).
- \(n\): indice modal (entero positivo).
- \(f_n\): frecuencia del modo \(n\) (Hz).
- \(\lambda_n\): longitud de onda del modo \(n\) (m).
- \(k_n\): numero de onda modal (rad/m).
- \(\omega_n\): frecuencia angular modal (rad/s).
- \(T\): periodo (s).

## 5- Formulas esenciales y lectura fisica
Velocidad axial:

$$
v=\sqrt{\frac{E}{\rho}}
$$

Frecuencia modal fija-fija:

$$
f_n=\frac{nv}{2L}
$$

Longitud modal fija-fija:

$$
\lambda_n=\frac{2L}{n}
$$

Frecuencia modal fija-libre:

$$
f_n=\frac{(2n-1)v}{4L}
$$

Relacion ondulatoria:

$$
v=\lambda f
$$

Periodo:

$$
T=\frac{1}{f}
$$

Numero de onda y frecuencia angular:

$$
k_n=\frac{2\pi}{\lambda_n},\qquad \omega_n=2\pi f_n
$$

Lectura fisica:
- mayor \(E\) eleva todas las frecuencias,
- mayor \(\rho\) las reduce,
- mayor \(L\) baja la escala modal,
- el tipo de apoyo cambia la secuencia modal permitida.

## 6- Nota conceptual importante
En regimen lineal, la velocidad de propagacion no depende de amplitud.
Depende de \(E\) y \(\rho\), y el espectro depende de la frontera.

## 7- Metodo de resolucion de problemas
1. Identifica frontera: fija-fija, libre-libre o fija-libre.
2. Calcula \(v=\sqrt{E/\rho}\) si no esta dada.
3. Aplica la familia modal correcta para \(f_n\) o \(\lambda_n\).
4. Conecta con \(v=\lambda f\) para completar magnitudes faltantes.
5. Verifica unidades SI y orden de magnitud.
6. Interpreta en termino de rigidez, inercia y apoyo.

## 8- Errores tipicos
- usar formula fija-fija en una barra fija-libre.
- tratar \(n\) como continuo no entero en modos ideales.
- olvidar conversion de GPa a Pa.
- confundir longitud total con longitud vibrante efectiva.
- no distinguir modo fundamental de sobretonos.

## 9- Ejemplo completo guiado
Datos:
- \(E=200\times10^9\ \mathrm{Pa}\),
- \(\rho=7850\ \mathrm{kg/m^3}\),
- \(L=1.20\ \mathrm{m}\),
- frontera fija-fija,
- modo \(n=3\).

Paso 1- velocidad axial:

$$
v=\sqrt{\frac{E}{\rho}}=\sqrt{\frac{200\times10^9}{7850}}\approx 5048\ \mathrm{m/s}
$$

Paso 2- frecuencia modal:

$$
f_3=\frac{3v}{2L}=\frac{3\cdot5048}{2.4}\approx 6310\ \mathrm{Hz}
$$

Paso 3- longitud modal:

$$
\lambda_3=\frac{2L}{3}=0.80\ \mathrm{m}
$$

Paso 4- comprobacion:

$$
v\approx\lambda_3 f_3\approx0.80\cdot6310\approx5048\ \mathrm{m/s}
$$

## 10- Sintesis final
Dominar ondas longitudinales en barras significa:
- entender el mecanismo axial de propagacion,
- elegir correctamente la familia modal segun frontera,
- calcular con coherencia fisica y dimensional,
- interpretar como cambian los modos al variar material y geometria.
