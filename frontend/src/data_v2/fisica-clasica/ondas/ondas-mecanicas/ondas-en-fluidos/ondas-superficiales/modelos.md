# Modelos Y Suposiciones De Ondas Superficiales

## 1- Modelo lineal base
Se asume amplitud pequena respecto a \(\lambda\) y profundidad caracteristica. Esto permite superposicion y formulas cerradas.

## 2- Regimenes por profundidad relativa
El parametro \(kh\) organiza el problema:
- profunda: \(kh\) grande,
- somera: \(kh\) pequeno,
- intermedio: transicion.

## 3- Modelos limite mas usados
Profunda:

$$
\omega^2=gk,\qquad v=\sqrt{\frac{g\lambda}{2\pi}},\qquad v_g=\frac{v}{2}
$$

Somera:

$$
v=\sqrt{gh},\qquad v_g=v
$$

## 4- Modelo general de gravedad

$$
\omega^2=gk\tanh(kh)
$$

Recupera automaticamente ambos limites.

## 5- Extension capilar-gravedad
Cuando \(\lambda\) es muy pequena, aparece el termino de tension superficial:

$$
\omega^2=\left(gk+\frac{\sigma}{\rho}k^3\right)\tanh(kh)
$$

## 6- Dominio de validez
El modelo pierde precision cuando hay:
- no linealidad fuerte,
- rompimiento de ola,
- viscosidad dominante,
- vorticidad intensa,
- interaccion compleja con fondo variable.

En esos casos se requieren modelos numericos mas avanzados.
