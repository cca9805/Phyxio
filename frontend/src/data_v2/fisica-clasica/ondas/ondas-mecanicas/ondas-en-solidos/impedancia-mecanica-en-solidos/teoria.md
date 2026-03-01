# Impedancia Mecanica En Solidos

## Idea clave
La impedancia mecanica de onda cuantifica cuanta oposicion presenta un medio al paso de una perturbacion ondulatoria. En interfaces, el contraste de impedancias determina el reparto entre energia reflejada y transmitida.

## 1- Que estudia este tema y por que es fundamental
Este tema explica:
- que es la impedancia y como se calcula,
- como conecta amplitud de esfuerzo/presion con velocidad de particula,
- como se relaciona con intensidad y transferencia de energia.

Es esencial para ensayos no destructivos, sismica, acoplamiento de sensores y diseno vibroacustico.

## 2- Mecanismo fisico de impedancia
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

La impedancia resume el balance entre:
- inercia del medio (densidad),
- rapidez de propagacion (velocidad de onda),
- respuesta dinamica local (relacion esfuerzo-velocidad de particula).

Intuicion clave:
- impedancia alta: para una misma velocidad de particula se requieren amplitudes de esfuerzo/presion mayores.

## 3- Magnitudes y parametros esenciales
- \(Z\): impedancia mecanica de onda (Pa*s/m).
- \(\rho\): densidad (kg/m^3).
- \(v\): velocidad de onda en el medio (m/s).
- \(\hat p\): amplitud de presion/esfuerzo dinamico (Pa).
- \(\hat u\): amplitud de velocidad de particula (m/s).
- \(I\): intensidad media (W/m^2).
- \(P\): potencia (W).
- \(A\): area de transmision (m^2).

## 4- Formulas esenciales y lectura fisica
Impedancia:

$$
Z=\rho v
$$

Relacion amplitud-presion/velocidad:

$$
\hat p=Z\hat u
$$

Intensidad media para onda armonica plana:

$$
I=\frac{\hat p^2}{2Z}
$$

Forma equivalente:

$$
I=\frac{Z\hat u^2}{2}
$$

Potencia sobre area efectiva:

$$
P=IA
$$

Impedancia desde amplitudes medidas:

$$
Z=\frac{\hat p}{\hat u}
$$

Lectura fisica:
- si aumenta \(\rho\) o \(v\), aumenta \(Z\),
- con \(Z\) alto, para igual \(\hat u\) se obtiene mayor \(\hat p\),
- la transferencia de energia en interfaces depende del contraste de \(Z\).

## 5- Nota conceptual importante
La impedancia no es una fuerza ni una energia: es una relacion dinamica entre amplitudes de campo. Es propiedad del medio para un modo ondulatorio dado.

## 6- Metodo de resolucion recomendado
1. Define el modo de onda y el medio (longitudinal/corte).
2. Calcula \(Z=\rho v\) o usa \(Z=\hat p/\hat u\) si hay medidas.
3. Calcula intensidad con la formula adecuada.
4. Si hay area, obtiene potencia con \(P=IA\).
5. Verifica unidades y orden de magnitud.
6. Interpreta si el medio acopla bien o mal con otro.

## 7- Errores tipicos
- confundir impedancia con resistencia estatica.
- mezclar amplitud con valor RMS sin consistencia de formulas.
- usar \(v\) de un modo distinto al que se mide.
- olvidar que \(I\) depende de cuadrado de amplitud.
- no validar unidades de \(Z\) (Pa*s/m).

## 8- Ejemplo completo guiado
Datos:
- \(\rho=7800\ \mathrm{kg/m^3}\),
- \(v=5000\ \mathrm{m/s}\),
- \(\hat u=2.0\times10^{-4}\ \mathrm{m/s}\),
- \(A=3.0\times10^{-4}\ \mathrm{m^2}\).

Paso 1- impedancia:

$$
Z=\rho v=7800\cdot5000=3.90\times10^7\ \mathrm{Pa\,s/m}
$$

Paso 2- amplitud de presion:

$$
\hat p=Z\hat u=3.90\times10^7\cdot2.0\times10^{-4}=7.8\times10^3\ \mathrm{Pa}
$$

Paso 3- intensidad:

$$
I=\frac{\hat p^2}{2Z}=\frac{(7.8\times10^3)^2}{2\cdot3.90\times10^7}\approx0.78\ \mathrm{W/m^2}
$$

Paso 4- potencia:

$$
P=IA=0.78\cdot3.0\times10^{-4}=2.34\times10^{-4}\ \mathrm{W}
$$

Interpretacion: la potencia transmitida es baja por area pequena aunque la impedancia sea alta.

## 9- Aplicaciones reales
- acoplamiento de transductores ultrasonicos.
- analisis de interfaces en materiales multicapa.
- sismologia de reflexion por contraste de impedancia.
- monitorizacion estructural por cambio de impedancia efectiva.

## 10- Sintesis final
Dominar impedancia mecanica en solidos significa:
- calcular correctamente \(Z\) para el modo analizado,
- conectar amplitud de particula con esfuerzo/presion,
- cuantificar intensidad y potencia,
- interpretar transferencia energetica en interfaces.
