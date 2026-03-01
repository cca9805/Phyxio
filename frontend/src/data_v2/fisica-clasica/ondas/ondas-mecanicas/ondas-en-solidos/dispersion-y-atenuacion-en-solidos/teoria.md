# Dispersion Y Atenuacion En Solidos

## Idea clave
En solidos reales, una onda puede cambiar de forma al propagarse por dos efectos distintos:
- dispersion: diferentes componentes frecuenciales viajan con distinta velocidad,
- atenuacion: la amplitud disminuye con la distancia por perdidas.

## 1- Que estudia este tema y por que es fundamental
Este tema ensena a separar claramente dispersion y atenuacion, que suelen mezclarse en la practica.

Es fundamental para:
- interpretar senales en ensayos no destructivos,
- analizar vibraciones en estructuras,
- estimar alcance y resolucion de mediciones,
- evitar errores de diagnostico por perdida o distorsion de forma de onda.

## 2- Mecanismo fisico de dispersion y atenuacion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Sobre esa base aparecen dos efectos:
1. Dispersion:
- el medio/sistema hace depender \(\omega\) de \(k\) de forma no lineal,
- el pulso se deforma porque cada componente viaja con velocidad distinta.

2. Atenuacion:
- parte de la energia se disipa (viscoelasticidad, friccion interna, scattering),
- la amplitud decae al avanzar.

## 3- Magnitudes y parametros esenciales
- \(v_p\): velocidad de fase (m/s).
- \(v_g\): velocidad de grupo (m/s).
- \(\omega\): frecuencia angular (rad/s).
- \(k\): numero de onda (rad/m).
- \(A_0\): amplitud de referencia (misma unidad que \(A_x\)).
- \(A_x\): amplitud a distancia \(x\).
- \(r_A=A_x/A_0\): ratio de amplitud (1).
- \(\alpha_{Np}\): coeficiente de atenuacion en neper/m.
- \(A_{dB}\): perdida en decibelios (dB).
- \(\alpha_{dB}\): atenuacion media en dB/m.
- \(x\): distancia de propagacion (m).

## 4- Formulas esenciales y lectura fisica
Velocidad de fase:

$$
v_p=\frac{\omega}{k}
$$

Velocidad de grupo (definicion):

$$
v_g=\frac{d\omega}{dk}
$$

Modelo de atenuacion exponencial:

$$
A_x=A_0e^{-\alpha_{Np}x}
$$

Ratio de amplitud:

$$
r_A=\frac{A_x}{A_0}=e^{-\alpha_{Np}x}
$$

Atenuacion neper/m desde amplitudes:

$$
\alpha_{Np}=\frac{1}{x}\ln\!\left(\frac{A_0}{A_x}\right)
$$

Perdida en dB:

$$
A_{dB}=20\log_{10}\!\left(\frac{A_0}{A_x}\right)
$$

Atenuacion media en dB/m:

$$
\alpha_{dB}=\frac{A_{dB}}{x}
$$

Conversion entre unidades:

$$
\alpha_{dB}=8.686\,\alpha_{Np}
$$

Lectura fisica:
- dispersion cambia la forma temporal/espacial del pulso,
- atenuacion reduce amplitud y energia,
- ambos efectos pueden actuar a la vez y deben separarse en analisis.

## 5- Nota conceptual importante
Una senal mas pequena en distancia no implica automaticamente mas dispersion.
Puede ser atenuacion pura. Y una senal mas ancha no implica siempre mas perdida: puede ser dispersion con energia casi conservada.

## 6- Metodo de resolucion recomendado
1. Determina si el problema pide fase/grupo (dispersion) o perdida de amplitud (atenuacion).
2. Para dispersion usa \(\omega(k)\), \(v_p\), \(v_g\).
3. Para atenuacion usa \(A_0\), \(A_x\), \(x\), \(\alpha\).
4. Convierte entre Np/m y dB/m si hace falta.
5. Verifica unidades y plausibilidad del resultado.
6. Interpreta si domina dispersion, atenuacion o ambos.

## 7- Errores tipicos
- confundir \(v_p\) con \(v_g\).
- usar formula en dB con logaritmo natural o viceversa.
- mezclar amplitud con intensidad sin ajustar factor (20 vs 10 dB).
- olvidar que \(x\) debe estar en metros en \(\alpha_{dB}\).
- concluir sin separar efecto dispersivo y disipativo.

## 8- Ejemplo completo guiado
Datos:
- \(\omega=18000\ \mathrm{rad/s}\), \(k=30\ \mathrm{rad/m}\),
- \(A_0=1.00\), \(A_x=0.40\), \(x=12\ \mathrm{m}\).

Paso 1- velocidad de fase:

$$
v_p=\frac{\omega}{k}=\frac{18000}{30}=600\ \mathrm{m/s}
$$

Paso 2- ratio de amplitud:

$$
r_A=\frac{A_x}{A_0}=0.40
$$

Paso 3- atenuacion en Np/m:

$$
\alpha_{Np}=\frac{1}{12}\ln\!\left(\frac{1.00}{0.40}\right)\approx0.076\ \mathrm{Np/m}
$$

Paso 4- perdida en dB y atenuacion dB/m:

$$
A_{dB}=20\log_{10}(2.5)\approx7.96\ \mathrm{dB}
$$

$$
\alpha_{dB}=\frac{7.96}{12}\approx0.66\ \mathrm{dB/m}
$$

## 9- Aplicaciones reales
- deteccion de dano por cambios en atenuacion de guiadas.
- ajuste de frecuencia de inspeccion por compromiso resolucion-alcance.
- analisis de dispersion en vigas, placas y materiales multicapa.
- evaluacion de calidad de uniones y recubrimientos.

## 10- Sintesis final
Dominar dispersion y atenuacion en solidos significa:
- separar matematicamente ambos efectos,
- calcular correctamente velocidades y coeficientes de perdida,
- interpretar senales con criterio fisico,
- tomar decisiones de medicion y diagnostico mas fiables.
