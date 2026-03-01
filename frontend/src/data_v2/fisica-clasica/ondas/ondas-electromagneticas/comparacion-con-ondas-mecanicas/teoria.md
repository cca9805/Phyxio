# Comparacion Con Ondas Mecanicas

## Idea clave
Comparar ondas electromagneticas y ondas mecanicas te permite evitar el error mas comun en ondas: usar una formula correcta en el fenomeno equivocado.

## 1- Que fenomeno estudia este tema
Este tema explica que ambas familias comparten lenguaje ondulatorio, pero no comparten el mismo mecanismo fisico de propagacion.
Es clave porque, en problemas mixtos, decidir bien el modelo es mas importante que calcular rapido.

## 2- Base conceptual: que se mueve y que no se mueve
- Ondas mecanicas: necesitan medio material y se propagan por fuerzas restauradoras.
- Ondas electromagneticas: pueden propagarse en vacio por acoplamiento campo electrico-campo magnetico.
- En ambos casos hay transporte de energia, pero la ley que fija la velocidad no es la misma.

## 3- Elementos del tema (identificacion correcta)
- \(v\): velocidad ondulatoria generica (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(c\): velocidad de la luz en vacio (m/s).
- \(n\): indice de refraccion (1).
- \(F_t\): tension en cuerda (N).
- \(\mu_l\): densidad lineal de cuerda (kg/m).
- \(B\): modulo volumetrico (Pa).
- \(\rho\): densidad del medio (kg/m^3).

## 4- Formulacion matematica minima (y que significa cada ecuacion)
### Relacion comun
$$
v=\lambda f
$$
Lectura fisica: estructura ondulatoria compartida por ambas familias.

### Periodo
$$
T=\frac{1}{f}
$$
Lectura fisica: frecuencia y periodo son inversos.

### Bloque electromagnetico
$$
c=\lambda_0 f,\qquad v_{EM}=\frac{c}{n},\qquad \lambda_m=\frac{\lambda_0}{n}
$$
Lectura fisica: en medio, cambia \(v\) y \(\lambda\), pero se conserva \(f\).

### Bloque mecanico
$$
v_{mec}=\sqrt{\frac{F_t}{\mu_l}},\qquad
v_{mec}=\sqrt{\frac{B}{\rho}},\qquad
v_{mec}=\sqrt{\frac{E}{\rho}}
$$
Lectura fisica: mayor rigidez implica mayor velocidad; mayor inercia del medio implica menor velocidad.

## 5- Cuando aplican estas relaciones (modelo y validez)
El modelo comparativo funciona bien cuando:
- las ondas se tratan en regimen lineal,
- el medio se describe con parametros efectivos,
- no dominan dispersion extrema ni no linealidad.

Si esas hipotesis no se cumplen, debes refinar el modelo antes de aceptar el resultado.

## 6- Metodo de resolucion para problemas de comparacion de ondas
1. Clasifica la onda: mecanica o electromagnetica.
2. Identifica el medio.
3. Elige la ecuacion de velocidad apropiada.
4. Usa \(v=\lambda f\) para completar la magnitud faltante.
5. Despeja en simbolico y sustituye en SI.
6. Verifica unidades y orden de magnitud.
7. Interpreta el resultado en lenguaje fisico.

## 7- Errores frecuentes que bloquean el aprendizaje
- usar \(c\) en un problema mecanico.
- usar formulas de cuerda en fluidos o solidos sin verificar.
- olvidar que en cambio de medio EM no cambia \(f\).
- mezclar kg/m con kg/m^3.
- no justificar por que una formula aplica al caso.

## 8- Ejemplo guia (de principio a fin)
Caso EM: \(f=5.0\times10^{14}\ \mathrm{Hz}\), \(n=1.50\).
$$
v_{EM}=\frac{c}{n}=2.00\times10^8\ \mathrm{m/s}
$$
$$
\lambda_m=\frac{v_{EM}}{f}=4.0\times10^{-7}\ \mathrm{m}
$$

Caso mecanico (cuerda): \(F_t=100\ \mathrm{N}\), \(\mu_l=5.0\times10^{-3}\ \mathrm{kg/m}\), \(f=40\ \mathrm{Hz}\).
$$
v_{mec}=\sqrt{\frac{F_t}{\mu_l}}\approx141.4\ \mathrm{m/s}
$$
$$
\lambda=\frac{v_{mec}}{f}\approx3.54\ \mathrm{m}
$$

Comparacion: ambas usan \(v=\lambda f\), pero la ley que define \(v\) cambia con el fenomeno.

## 9- Aplicaciones reales
- seleccion entre sonar y lidar.
- comparacion entre ecografia y tecnicas opticas.
- diseno de sensores segun el medio de propagacion.
- validacion de modelos en ejercicios integrados.

## 10- Sintesis final
Dominar esta comparacion significa decidir primero el modelo fisico y despues calcular. Esa secuencia evita la mayoria de errores.

