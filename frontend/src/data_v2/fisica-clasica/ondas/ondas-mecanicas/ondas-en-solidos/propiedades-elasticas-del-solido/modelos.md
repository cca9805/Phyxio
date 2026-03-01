# Modelos Y Suposiciones Del Tema

## 1- Modelo elastico lineal isotropo
Se asume que deformacion y esfuerzo se relacionan linealmente, con propiedades equivalentes en todas direcciones.

## 2- Modelo uniaxial de Hooke

$$
\sigma=E\epsilon
$$

Valido para pequenas deformaciones y estado tensional simple.

## 3- Modelo de propagacion de corte

$$
v_T=\sqrt{\frac{G}{\rho}}
$$

Representa la propagacion asociada a deformaciones tangenciales.

## 4- Modelo longitudinal general

$$
v_L=\sqrt{\frac{K+\frac{4}{3}G}{\rho}}
$$

Integra respuesta volumetrica y de corte del material.

## 5- Modelo axial aproximado

$$
v_L\approx\sqrt{\frac{E}{\rho}}
$$

Util en barras delgadas cuando aplica hipotesis 1D.

## 6- Impedancia elastica

$$
Z_L=\rho v_L,\qquad Z_T=\rho v_T
$$

Clave para reflexion/transmision en interfaces de materiales.

## 7- Dominio de validez
El modelo falla o pierde precision con:
- anisotropia marcada,
- no linealidad material,
- plasticidad,
- dano o microfisuracion intensa,
- dispersion compleja dependiente de frecuencia.
