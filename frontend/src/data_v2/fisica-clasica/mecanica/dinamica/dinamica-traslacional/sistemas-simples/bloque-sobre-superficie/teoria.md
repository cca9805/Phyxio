# Bloque Sobre Superficie

## Idea clave
Un bloque sobre superficie horizontal se resuelve separando claramente equilibrio vertical y dinamica horizontal. La aceleracion sale de la fuerza neta en el eje x, no de "sumar fuerzas a ojo".

## 1- Que fenomeno estudia este subtema
Este subtema estudia como se mueve una masa cuando la empujas o tiras de ella sobre una superficie plana.

Aprendes tres escenarios basicos:
- sin rozamiento,
- con rozamiento cinetico,
- con fuerza insuficiente para vencer rozamiento estatico.

## 2- Base conceptual: por que hay que separar ejes
En superficie horizontal, normalmente:
- en vertical no hay aceleracion, luego \(\sum F_y=0\),
- en horizontal si puede haber aceleracion, luego \(\sum F_x=ma\).

Esta separacion evita uno de los errores mas comunes: usar \(N=mg\) sin verificar si hay componentes verticales extra.

## 3- Elementos que debes identificar sin error
- \(m\): masa del bloque (kg).
- \(F\): fuerza aplicada horizontal (N).
- \(N\): fuerza normal (N).
- \(P=mg\): peso (N).
- \(f\): fuerza de rozamiento (N).
- \(\mu_s,\mu_k\): coeficientes estatico y cinetico.
- \(a\): aceleracion horizontal (m/s^2).

## 4- Formulacion matematica minima (y lectura fisica)
Equilibrio vertical en caso basico:

$$
N=mg
$$

Segunda ley en horizontal:

$$
\sum F_x = ma
$$

Sin rozamiento:

$$
a=\frac{F}{m}
$$

Con rozamiento cinetico:

$$
f_k=\mu_k N,\qquad a=\frac{F-f_k}{m}
$$

Condicion de inicio de movimiento:

$$
F>f_{s,\max}=\mu_s N
$$

## 5- Cuando aplican estas relaciones (modelo y validez)
El modelo aplica bien cuando:
- el movimiento es esencialmente rectilineo,
- la superficie puede aproximarse como horizontal,
- el coeficiente de rozamiento es aproximadamente constante.

Debes corregir el modelo cuando:
- la fuerza se aplica con angulo vertical,
- hay vibracion o rodadura,
- la friccion depende fuertemente de la velocidad o del estado de contacto.

## 6- Metodo de resolucion para problemas tipo
1. Dibuja diagrama de cuerpo libre.
2. Define ejes y convenio de signos.
3. Escribe \(\sum F_y=0\) y despeja \(N\).
4. Escribe \(\sum F_x=ma\) con el signo correcto de cada fuerza.
5. Sustituye \(f\) segun el regimen (estatico o cinetico).
6. Resuelve y valida el resultado fisicamente.

## 7- Errores frecuentes que bloquean el aprendizaje
- Confundir \(\mu_s\) y \(\mu_k\).
- Usar rozamiento cinetico aunque el bloque no se haya puesto en movimiento.
- Cambiar signos de fuerzas sin definir eje.
- Olvidar que \(f\) se opone al movimiento relativo.

## 8- Ejemplo guia (de principio a fin)
Datos: \(m=4\ \text{kg}\), \(F=20\ \text{N}\), \(\mu_k=0.20\), \(g=9.8\ \text{m/s}^2\).

Paso 1. Normal:

$$
N=mg=39.2\ \text{N}
$$

Paso 2. Rozamiento:

$$
f_k=\mu_k N=0.20(39.2)=7.84\ \text{N}
$$

Paso 3. Aceleracion:

$$
a=\frac{F-f_k}{m}=\frac{20-7.84}{4}=3.04\ \text{m/s}^2
$$

Interpretacion:
la fuerza aplicada vence el rozamiento y produce aceleracion positiva.

## 9- Aplicaciones reales
- Arrastre de cargas en industria.
- Ensayos para medir coeficientes de friccion.
- Calculo de fuerza minima en actuadores lineales.
- Modelado inicial de transporte horizontal.

## 10- Sintesis final
Dominar este subtema significa pasar de un esquema simple a un planteamiento dinamico correcto con signos, regimen de rozamiento y validacion fisica coherentes.
