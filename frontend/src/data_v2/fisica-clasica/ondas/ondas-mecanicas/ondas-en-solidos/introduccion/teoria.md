# Introduccion A Ondas En Solidos

## Idea clave
En un solido, las ondas se propagan porque una deformacion local genera fuerzas elasticas restauradoras que transmiten la perturbacion al elemento vecino. La velocidad depende de rigidez elastica e inercia del material.

## 1- Que estudia este tema y por que es fundamental
Este tema introduce el marco fisico para entender ondas en barras, vigas, placas y medios elasticos.

Objetivo didactico principal:
- pasar de la idea general de onda al caso especifico de solidos,
- distinguir ondas longitudinales y transversales,
- conectar parametros mecanicos del material con velocidad de propagacion.

## 2- Mecanismo fisico de propagacion en solidos
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En solidos el mecanismo depende del tipo de deformacion:
- deformacion volumetrica y axial en ondas longitudinales,
- deformacion de corte en ondas transversales.

Por eso un mismo material puede soportar varios tipos de onda con velocidades distintas.

## 3- Magnitudes y parametros que debes identificar siempre
- \(v\): velocidad de propagacion (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(v_L\): velocidad de onda longitudinal (m/s).
- \(v_T\): velocidad de onda transversal o de corte (m/s).
- \(K\): modulo volumetrico o de compresion (Pa).
- \(G\): modulo de corte (Pa).
- \(E\): modulo de Young (Pa).
- \(\rho\): densidad (kg/m^3).
- \(\nu\): coeficiente de Poisson (adimensional).
- \(Z_L\), \(Z_T\): impedancias mecanicas efectivas (kg/(m^2 s)).

## 4- Formulas esenciales y lectura fisica
Relacion ondulatoria general:

$$
v=\lambda f
$$

Periodo-frecuencia:

$$
T=\frac{1}{f}
$$

Onda longitudinal en solido isotropo:

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
$$

Onda transversal (corte):

$$
v_T=\sqrt{\frac{G}{\rho}}
$$

Aproximacion axial en barra delgada:

$$
v=\sqrt{\frac{E}{\rho}}
$$

Impedancias asociadas:

$$
Z_L=\rho v_L,\qquad Z_T=\rho v_T
$$

Relacion de velocidades (material isotropo lineal):

$$
\frac{v_L}{v_T}=\sqrt{\frac{2(1-\nu)}{1-2\nu}}
$$

Lectura fisica clave:
- mayor rigidez elastica implica mayor velocidad,
- mayor densidad implica mayor inercia y menor velocidad,
- la onda longitudinal suele ser mas rapida que la transversal.

## 5- Nota conceptual importante
En regimen lineal, la velocidad de propagacion no depende de la amplitud de la onda.
Depende de propiedades del material (modulos elasticos y densidad).

## 6- Metodo de resolucion para problemas iniciales
1. Identifica tipo de onda: longitudinal o transversal.
2. Elige magnitudes del medio disponibles: \(K\), \(G\), \(E\), \(\rho\).
3. Calcula velocidad con la formula del tipo de onda.
4. Conecta con \(v=\lambda f\) para hallar \(\lambda\), \(f\) o \(T\).
5. Comprueba unidades en SI.
6. Interpreta el resultado en terminos de rigidez e inercia.

## 7- Errores tipicos a evitar
- usar formula longitudinal para una onda de corte.
- confundir \(E\), \(G\) y \(K\) como si fueran el mismo modulo.
- olvidar convertir GPa a Pa.
- usar densidad en g/cm^3 sin pasar a kg/m^3.
- no distinguir entre velocidad de onda y velocidad de particula.

## 8- Ejemplo guiado
Datos:
- \(K=36\times10^9\ \mathrm{Pa}\),
- \(G=27\times10^9\ \mathrm{Pa}\),
- \(\rho=7800\ \mathrm{kg/m^3}\),
- \(f=2.0\times10^4\ \mathrm{Hz}\).

Paso 1- velocidad longitudinal:

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
=\sqrt{\frac{36\times10^9+\frac{4}{3}27\times10^9}{7800}}
\approx 3017\ \mathrm{m/s}
$$

Paso 2- longitud de onda longitudinal:

$$
\lambda=\frac{v_L}{f}=\frac{3017}{2.0\times10^4}\approx 0.151\ \mathrm{m}
$$

Interpretacion:
- material relativamente rigido,
- longitud de onda decimetrica para esa frecuencia,
- comportamiento coherente con solido metalico.

## 9- Aplicaciones reales
- sismica e ingenieria geotecnica.
- ensayos no destructivos por ultrasonidos.
- control vibracional en estructuras.
- diseno de sensores piezoelectricos.
- caracterizacion mecanica de materiales.

## 10- Sintesis final
Dominar esta introduccion significa:
- entender el mecanismo elastico de propagacion,
- separar claramente tipos de onda en solidos,
- elegir el modelo y las formulas correctas,
- interpretar resultados mas alla de la sustitucion numerica.
