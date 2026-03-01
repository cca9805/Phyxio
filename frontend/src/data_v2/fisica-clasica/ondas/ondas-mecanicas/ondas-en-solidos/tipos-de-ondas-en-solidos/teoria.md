# Tipos De Ondas En Solidos

## Idea clave
Un solido puede soportar distintos tipos de onda porque admite diferentes modos de deformacion elastica. Cada tipo de onda tiene mecanismo, velocidad y aplicaciones propias.

## 1- Que estudia este tema y por que es fundamental
Este tema clasifica las ondas mecanicas en solidos y explica como identificarlas fisicamente:
- longitudinales,
- transversales de corte,
- superficiales (Rayleigh),
- guiadas en placas y barras (introduccion).

Es fundamental porque la resolucion correcta de problemas depende de elegir bien el tipo de onda antes de calcular.

## 2- Mecanismo fisico: por que existen varios tipos
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En solidos hay al menos dos respuestas elasticas distintas:
- compresion/expansion (modulos volumetricos y axiales),
- corte (modulo de corte).

Por eso un mismo material puede tener varias velocidades de onda.

## 3- Clasificacion fisica principal
1. Ondas longitudinales (P):
- desplazamiento paralelo a la propagacion,
- mas rapidas en general.

2. Ondas transversales de corte (S):
- desplazamiento perpendicular,
- requieren rigidez de corte del medio.

3. Ondas superficiales Rayleigh (R):
- confinadas cerca de la superficie,
- velocidad menor que la de corte,
- trayectoria eliptica de particulas cerca de la superficie.

## 4- Magnitudes y parametros que debes identificar
- \(v_L\): velocidad longitudinal (m/s).
- \(v_T\): velocidad transversal de corte (m/s).
- \(v_R\): velocidad Rayleigh (m/s).
- \(\nu\): coeficiente de Poisson (1).
- \(c_R\): factor de Rayleigh (1), tal que \(v_R\approx c_R v_T\).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(K\): modulo volumetrico (Pa).
- \(G\): modulo de corte (Pa).
- \(\rho\): densidad (kg/m^3).

## 5- Formulas esenciales y lectura fisica
Relacion de propagacion:

$$
v=\lambda f
$$

Periodo-frecuencia:

$$
T=\frac{1}{f}
$$

Velocidad longitudinal isotropa:

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
$$

Velocidad de corte:

$$
v_T=\sqrt{\frac{G}{\rho}}
$$

Factor de Rayleigh (aprox. ingenieril):

$$
c_R\approx\frac{0.87+1.12\nu}{1+\nu}
$$

Velocidad Rayleigh:

$$
v_R\approx c_R v_T
$$

Orden tipico de velocidades:

$$
v_L>v_T>v_R
$$

Lectura fisica:
- mayor rigidez \(\Rightarrow\) mayor velocidad,
- mayor densidad \(\Rightarrow\) menor velocidad,
- las ondas superficiales son mas lentas por su confinamiento y naturaleza mixta.

## 6- Nota conceptual importante
En regimen lineal, la velocidad no depende de amplitud.
Depende de propiedades elasticas del material y del tipo de modo ondulatorio.

## 7- Metodo de resolucion de problemas
1. Identifica geometria y tipo de onda dominante.
2. Selecciona la formula de velocidad adecuada (\(v_L\), \(v_T\) o \(v_R\)).
3. Si piden longitud o frecuencia, conecta con \(v=\lambda f\).
4. Verifica unidades y rango fisico.
5. Interpreta el resultado comparando velocidades entre modos.

## 8- Errores tipicos
- usar formula de onda longitudinal para onda de corte.
- asumir \(v_R=v_T\) sin correccion por \(\nu\).
- ignorar que \(v_R\) es superficial y no representa el volumen completo.
- mezclar modulos \(E\), \(G\), \(K\) sin conversion constitutiva.
- resolver sin comprobar si el medio se modela como isotropo.

## 9- Ejemplo completo guiado
Datos:
- \(G=30\times10^9\ \mathrm{Pa}\),
- \(K=52\times10^9\ \mathrm{Pa}\),
- \(\rho=7800\ \mathrm{kg/m^3}\),
- \(\nu=0.29\),
- \(f=25\ \mathrm{kHz}\).

Paso 1- \(v_T\):

$$
v_T=\sqrt{\frac{G}{\rho}}=\sqrt{\frac{30\times10^9}{7800}}\approx 1961\ \mathrm{m/s}
$$

Paso 2- \(v_L\):

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
=\sqrt{\frac{52\times10^9+40\times10^9}{7800}}
\approx 3435\ \mathrm{m/s}
$$

Paso 3- \(c_R\) y \(v_R\):

$$
c_R\approx\frac{0.87+1.12(0.29)}{1+0.29}\approx 0.926
$$

$$
v_R\approx c_R v_T\approx 0.926\cdot1961\approx 1816\ \mathrm{m/s}
$$

Paso 4- longitud de onda Rayleigh:

$$
\lambda_R=\frac{v_R}{f}=\frac{1816}{25000}\approx 7.26\times10^{-2}\ \mathrm{m}
$$

## 10- Sintesis final
Dominar tipos de ondas en solidos significa:
- distinguir correctamente el modo fisico,
- elegir la velocidad adecuada,
- resolver con formulas coherentes,
- interpretar resultados en clave de material, geometria y frontera.
