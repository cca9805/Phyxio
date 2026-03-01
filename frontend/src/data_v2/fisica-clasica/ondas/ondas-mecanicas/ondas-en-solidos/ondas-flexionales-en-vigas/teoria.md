# Ondas Flexionales En Vigas

## Idea clave
Las ondas flexionales en vigas son dispersivas: la velocidad de fase y la de grupo dependen de la frecuencia (o del numero de onda). Esto las diferencia de muchas ondas no dispersivas en medios simples.

## 1- Que estudia este tema y por que es fundamental
Este tema analiza la propagacion por flexion en vigas esbeltas, base para:
- vibraciones estructurales,
- control de ruido y fatiga,
- ensayos modales,
- monitorizacion de dano en elementos de ingenieria.

La clave didactica es entender que la rigidez a flexion \(EI\) y la inercia lineal \(\rho A\) gobiernan la dispersion.

## 2- Mecanismo fisico de propagacion flexional
La propagacion ocurre porque la curvatura local de la viga genera momentos flectores restauradores que transmiten la perturbacion al tramo vecino.

Cadena fisica:
1. Aparece curvatura local.
2. La rigidez \(EI\) genera momento restaurador.
3. La inercia \(\rho A\) limita la aceleracion transversal.
4. El balance produce una onda flexional dispersiva.

## 3- Magnitudes y parametros esenciales
- \(E\): modulo de Young (Pa).
- \(I\): segundo momento de area de la seccion (m^4).
- \(\rho\): densidad (kg/m^3).
- \(A\): area de seccion (m^2).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).
- \(v_p\): velocidad de fase (m/s).
- \(v_g\): velocidad de grupo (m/s).
- \(L\): longitud efectiva de la viga (m).
- \(n\): indice modal.
- \(f_n\): frecuencia modal (Hz).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).

## 4- Formulas esenciales y lectura fisica
Dispersion Euler-Bernoulli:

$$
\omega=\sqrt{\frac{EI}{\rho A}}\,k^2
$$

Velocidad de fase:

$$
v_p=\frac{\omega}{k}=\sqrt{\frac{EI}{\rho A}}\,k
$$

Velocidad de grupo:

$$
v_g=\frac{d\omega}{dk}=2\sqrt{\frac{EI}{\rho A}}\,k=2v_p
$$

Relaciones ondulatorias:

$$
k=\frac{2\pi}{\lambda},\qquad \omega=2\pi f,\qquad v_p=\lambda f
$$

Frecuencia modal en viga simplemente apoyada (pin-pin):

$$
f_n=\frac{n^2\pi}{2L^2}\sqrt{\frac{EI}{\rho A}}
$$

Forma modal (pin-pin, conceptual):

$$
y_n(x,t)=A_n\sin\!\left(\frac{n\pi x}{L}\right)\cos(\omega_n t+\phi_n)
$$

Lectura fisica:
- aumentar \(EI\) incrementa frecuencias y velocidades flexionales,
- aumentar \(\rho A\) reduce velocidades y frecuencias,
- en dispersion flexional, el contenido en alta frecuencia viaja con otra velocidad que el de baja.

## 5- Nota conceptual importante
En regimen lineal, la velocidad no depende de amplitud.
Depende de propiedades del medio y del numero de onda (dispersion).

## 6- Metodo de resolucion recomendado
1. Verifica que aplica modelo Euler-Bernoulli (viga esbelta, baja frecuencia relativa).
2. Calcula parametro \(\sqrt{EI/(\rho A)}\).
3. Si conoces \(k\), halla \(\omega\), \(v_p\), \(v_g\).
4. Si conoces frontera y modo, calcula \(f_n\).
5. Comprueba unidades y orden de magnitud.
6. Interpreta diferencias entre fase y grupo.

## 7- Errores tipicos
- tratar onda flexional como no dispersiva.
- confundir momento de inercia geometrico \(I\) con intensidad energetica.
- usar \(v_p=v_g\) por inercia mental de casos no dispersivos.
- olvidar conversion de mm^4 a m^4 en \(I\).
- usar formula modal de una frontera distinta.

## 8- Ejemplo completo guiado
Datos:
- \(E=200\times10^9\ \mathrm{Pa}\),
- \(I=8.0\times10^{-8}\ \mathrm{m^4}\),
- \(\rho=7800\ \mathrm{kg/m^3}\),
- \(A=1.2\times10^{-3}\ \mathrm{m^2}\),
- \(k=20\ \mathrm{rad/m}\).

Paso 1- factor flexional:

$$
\alpha=\sqrt{\frac{EI}{\rho A}}=\sqrt{\frac{200\times10^9\cdot8.0\times10^{-8}}{7800\cdot1.2\times10^{-3}}}\approx41.34\ \mathrm{m^2/s}
$$

Paso 2- frecuencia angular:

$$
\omega=\alpha k^2=41.34\cdot400\approx16536\ \mathrm{rad/s}
$$

Paso 3- velocidades:

$$
v_p=\frac{\omega}{k}\approx826.8\ \mathrm{m/s},\qquad v_g=2v_p\approx1653.6\ \mathrm{m/s}
$$

Interpretacion: la onda es claramente dispersiva y el paquete energetico viaja mas rapido que la fase para este modelo.

## 9- Aplicaciones reales
- analisis modal de vigas en estructuras.
- diagnostico de dano por cambios en \(f_n\).
- Diseno vibroacustico de chasis y perfiles.
- propagacion guiada en inspeccion estructural.

## 10- Sintesis final
Dominar ondas flexionales en vigas significa:
- entender la dispersion como rasgo central,
- conectar \(EI\) y \(\rho A\) con propagacion,
- calcular modos segun frontera,
- interpretar fisicamente velocidades de fase y grupo.

