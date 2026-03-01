# Fase

## Idea clave
La fase indica en que estado de oscilacion esta la onda en un punto y en un instante. Comparar fases permite predecir refuerzo, cancelacion y sincronia.

## 1- Que estudia este tema y por que importa
Este tema explica como medir y comparar el estado oscilatorio de una onda usando angulos (radianes).

Es clave porque muchos fenomenos de ondas dependen de la fase relativa:
- interferencia constructiva,
- interferencia destructiva,
- nodos y vientres en ondas estacionarias,
- sincronizacion temporal entre senales.

## 2- Significado fisico de la fase
Una onda armonica puede escribirse como:

$$
y(x,t)=A\sin(kx-\omega t+\phi_0)
$$

La cantidad dentro del seno es la fase instantanea:

$$
\phi(x,t)=kx-\omega t+\phi_0
$$

Interpretacion:
- misma fase \(\Rightarrow\) mismo estado oscilatorio,
- diferencia de fase \(\Rightarrow\) estados distintos en el ciclo.

## 3- Magnitudes que debes dominar
- \(\phi\): fase instantanea (rad).
- \(\phi_0\): fase inicial (rad).
- \(\Delta\phi\): desfase (rad).
- \(k\): numero de onda (rad/m).
- \(\omega\): frecuencia angular (rad/s).
- \(x\): posicion (m).
- \(t\): tiempo (s).
- \(\Delta x\): separacion espacial (m).
- \(\Delta t\): separacion temporal (s).
- \(\lambda\): longitud de onda (m).
- \(T\): periodo (s).
- \(f\): frecuencia (Hz).

## 4- Formulas esenciales y lectura fisica
Fase instantanea (convencion de propagacion hacia +x):

$$
\phi=kx-\omega t+\phi_0
$$

Desfase espacial:

$$
\Delta\phi=k\Delta x=\frac{2\pi\Delta x}{\lambda}
$$

Desfase temporal:

$$
\Delta\phi=\omega\Delta t=\frac{2\pi\Delta t}{T}
$$

Conversiones:

$$
\omega=2\pi f
$$

$$
k=\frac{2\pi}{\lambda}
$$

Conexion con velocidad de fase:

$$
v=\frac{\omega}{k}
$$

Criterios de interferencia (conceptual):

$$
\Delta\phi=2\pi n\quad(\text{constructiva})
$$

$$
\Delta\phi=(2n+1)\pi\quad(\text{destructiva})
$$

## 5- Modelo y condiciones de validez
Este modelo usa onda armonica y regimen lineal.

Aplica bien cuando:
- hay periodicidad clara,
- fase bien definida,
- parametros del medio no cambian bruscamente.

Si hay fuerte dispersion, no linealidad o ruido dominante, la fase puede requerir tratamiento avanzado.

## 6- Metodo de resolucion paso a paso
1. Define que te piden: \(\phi\), \(\Delta\phi\), \(x\), \(t\), \(\Delta x\), \(\Delta t\).
2. Pasa todo a SI.
3. Elige formula minima (espacial o temporal).
4. Despeja primero y luego sustituye.
5. Verifica unidad angular en radianes.
6. Interpreta si el resultado implica refuerzo o cancelacion.

## 7- Errores frecuentes
- confundir fase con amplitud.
- usar grados cuando el modelo esta en radianes.
- mezclar \(f\) y \(\omega\) sin \(2\pi\).
- olvidar \(\phi_0\) cuando el problema lo incluye.
- usar signo equivocado en la convencion de propagacion.

## 8- Ejemplo guiado completo
Datos: \(\lambda=0.80\ \mathrm{m}\), \(\Delta x=0.20\ \mathrm{m}\).

Paso 1. Desfase espacial:

$$
\Delta\phi=\frac{2\pi\Delta x}{\lambda}=\frac{2\pi(0.20)}{0.80}=\frac{\pi}{2}\ \mathrm{rad}
$$

Datos adicionales: \(f=50\ \mathrm{Hz}\), \(\Delta t=0.005\ \mathrm{s}\).

Paso 2. Desfase temporal:

$$
\Delta\phi=2\pi f\Delta t=2\pi(50)(0.005)=\frac{\pi}{2}\ \mathrm{rad}
$$

Interpretacion:
- ambas diferencias representan el mismo desfase: un cuarto de ciclo.

## 9- Aplicaciones reales
- control de fase en telecomunicaciones.
- interferometria optica.
- cancelacion activa de ruido.
- analisis de vibraciones en estructuras.
- sincronizacion de senales en instrumentacion.

## 10- Sintesis final
Dominar fase significa:
- describir correctamente el estado oscilatorio,
- calcular desfases espaciales y temporales,
- interpretar interferencia y sincronia,
- evitar errores de unidades angulares y convenciones.
