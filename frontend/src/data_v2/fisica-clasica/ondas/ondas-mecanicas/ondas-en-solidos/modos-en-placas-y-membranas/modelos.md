# Modelos Y Suposiciones Del Tema

## 1- Modelo de membrana ideal (tension dominante)

$$
v=\sqrt{\frac{T_s}{\mu_s}}
$$

$$
f_{mn}=\frac{v}{2}\sqrt{\left(\frac{m}{L_x}\right)^2+\left(\frac{n}{L_y}\right)^2}
$$

Valido cuando la tension domina y la rigidez flexional es despreciable.

## 2- Modelo de placa delgada isotropa (flexion dominante)

$$
D=\frac{E h^3}{12(1-\nu^2)}
$$

$$
omega_{mn}=\pi^2\sqrt{\frac{D}{\rho h}}\left[\left(\frac{m}{L_x}\right)^2+\left(\frac{n}{L_y}\right)^2\right]
$$

Valido para placa delgada con deformaciones pequenas y material casi isotropo.

## 3- Forma modal conceptual en membrana rectangular

$$
w(x,y,t)=A\sin\left(\frac{m\pi x}{L_x}\right)\sin\left(\frac{n\pi y}{L_y}\right)\cos(\omega t+\phi)
$$

Sirve para leer nodos/vientres y no suele usarse como calculo aislado de una sola magnitud.

## 4- Dominio de validez
En geometria compleja, anisotropia, fronteras mixtas o gran amplitud se requieren metodos numericos (FEM) y validacion experimental.
