# Cuerdas - Modelo y Validez

## Idea clave
El modelo de cuerda fija-fija es potente porque reduce un sistema real a un conjunto de hipotesis claras y comprobables.

## 1- Modelo operativo del subtema
Se modela una cuerda tensa, esbelta y con extremos fijos, en regimen lineal de pequena amplitud.

Ecuaciones base del modelo:
- $$v=\sqrt{\frac{F_t}{\mu_l}}$$
- $$\lambda_n=\frac{2L}{n}$$
- $$f_n=\frac{nv}{2L}$$
- $$f_n=nf_1$$

## 2- Suposiciones explicitas
- Tension aproximadamente uniforme en toda la longitud vibrante.
- Densidad lineal \(\mu_l\) constante.
- Perdidas disipativas pequenas en primera aproximacion.
- Extremos idealmente fijos (desplazamiento nulo en apoyos).

## 3- Cuando SI aplica
- Cuerdas de instrumentos en oscilaciones moderadas.
- Ensayos modales de elementos lineales tensados.
- Analisis de armonicos en condiciones cercanas a idealidad.

## 4- Cuando NO aplica
- Grandes amplitudes con no linealidad geometrica.
- Cuerdas con rigidez flexional relevante.
- Apoyos con desplazamiento o acoplamientos complejos.
- Regimen fuertemente amortiguado o excitacion no estacionaria dominante.

## 5- Formulas conceptuales de lectura (no calculadora directa)
- $$y(0,t)=0,\qquad y(L,t)=0$$
- $$y(x,t)=2A\sin(kx)\cos(\omega t)$$

Estas expresiones describen condicion de frontera y forma espacial-temporal; no se usan como despeje numerico directo en la calculadora basica.

## 6- Checklist de validez antes de cerrar un problema
1. Confirmar que el enunciado representa una cuerda fija-fija.
2. Verificar coherencia de unidades SI.
3. Revisar que el indice modal \(n\) es entero positivo.
4. Contrastar resultado con el patron de `Graficas`.

## 7- Cierre
El modelo es fiable cuando sus hipotesis se respetan. Si las hipotesis fallan, el numero puede ser correcto matematicamente pero incorrecto fisicamente.
