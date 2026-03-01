# Ecuacion De Onda

## Idea clave
La ecuacion de onda describe en una sola expresion como evoluciona una perturbacion en el espacio y en el tiempo.

## 1- Que estudia este tema y por que importa
Este tema formaliza el comportamiento de una onda con una funcion matematica que permite predecir:
- desplazamiento en cualquier punto,
- estado temporal de oscilacion,
- desfases entre posiciones o instantes.

Sin ecuacion de onda, solo hay descripcion cualitativa. Con ella, puedes analizar y resolver problemas de forma completa.

## 2- Significado fisico de la ecuacion de onda
En 1D, una onda armonica que viaja en +x se expresa como:

$$
y(x,t)=A\sin(kx-\omega t+\phi_0)
$$

Lectura de cada termino:
- \(A\): escala de oscilacion.
- \(kx\): parte espacial de la fase.
- \(\omega t\): parte temporal de la fase.
- \(\phi_0\): condicion inicial de fase.

La propagacion ocurre porque el medio transmite deformacion por fuerzas restauradoras entre elementos vecinos.

## 3- Magnitudes que debes dominar
- \(y\): desplazamiento instantaneo (m).
- \(A\): amplitud (m).
- \(x\): posicion (m).
- \(t\): tiempo (s).
- \(\phi\): fase instantanea (rad).
- \(\phi_0\): fase inicial (rad).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(v\): velocidad de fase (m/s).

## 4- Formulas esenciales y lectura fisica
Ecuacion armonica 1D:

$$
y=A\sin(kx-\omega t+\phi_0)
$$

Fase instantanea:

$$
\phi(x,t)=kx-\omega t+\phi_0
$$

Relaciones de conversion:

$$
k=\frac{2\pi}{\lambda}
$$

$$
\omega=2\pi f
$$

Velocidad de fase:

$$
v=\frac{\omega}{k}=\lambda f
$$

Ecuacion diferencial de onda lineal 1D:

$$
\frac{\partial^2 y}{\partial t^2}=v^2\frac{\partial^2 y}{\partial x^2}
$$

Nota clave:
- en regimen lineal, cambiar amplitud no cambia la velocidad de fase del medio.

## 5- Modelo y condiciones de validez
Este modelo funciona bien cuando:
- la onda es aproximadamente armonica,
- el medio puede modelarse como lineal,
- hay parametros efectivos bien definidos.

Limites del modelo simple:
- no linealidad fuerte,
- dispersion compleja,
- atenuacion dominante,
- medios heterogeneos con cambios bruscos.

## 6- Metodo de resolucion paso a paso
1. Identifica que variable piden (y, fase, desfase, v, k, omega, etc).
2. Fija la convencion de propagacion y la ecuacion base.
3. Convierte todo a SI.
4. Calcula parametros (k, omega, v) antes de evaluar y(x,t).
5. Sustituye en el punto x,t pedido.
6. Verifica unidades y rango fisico de resultados.
7. Interpreta: estado de oscilacion y sentido fisico.

## 7- Errores frecuentes
- confundir frecuencia f con frecuencia angular omega.
- olvidar el factor 2*pi en conversiones.
- usar grados en lugar de radianes en la fase.
- mezclar signo de propagacion sin mantener convencion.
- interpretar y como desplazamiento de la onda completa en vez de particula local.

## 8- Ejemplo guiado completo
Datos: \(A=0.03\ \mathrm{m}\), \(\lambda=0.80\ \mathrm{m}\), \(f=5\ \mathrm{Hz}\), \(\phi_0=0\).
Calcular \(y\) en \(x=0.20\ \mathrm{m}\), \(t=0.10\ \mathrm{s}\).

Paso 1. Parametros:

$$
k=\frac{2\pi}{\lambda}=\frac{2\pi}{0.80}=2.5\pi\ \mathrm{rad/m}
$$

$$
\omega=2\pi f=10\pi\ \mathrm{rad/s}
$$

Paso 2. Fase:

$$
\phi=kx-\omega t=(2.5\pi)(0.20)-(10\pi)(0.10)=0.5\pi-\pi=-\frac{\pi}{2}
$$

Paso 3. Desplazamiento:

$$
y=A\sin\phi=0.03\sin\left(-\frac{\pi}{2}\right)=-0.03\ \mathrm{m}
$$

Interpretacion: el punto esta en elongacion minima en ese instante.

## 9- Aplicaciones reales
- modelado de vibraciones en cuerdas y estructuras.
- propagacion acustica en medios materiales.
- analisis de fase y amplitud en comunicaciones.
- simulacion de ondas en instrumentacion y control.
- base para extensiones en dispersion y ondas no lineales.

## 10- Sintesis final
Dominar ecuacion de onda significa:
- conectar fisica y matematica del fenomeno,
- calcular estado oscilatorio en cualquier x,t,
- usar parametros k, omega y v con criterio,
- decidir cuando el modelo armonico es valido y cuando no.
