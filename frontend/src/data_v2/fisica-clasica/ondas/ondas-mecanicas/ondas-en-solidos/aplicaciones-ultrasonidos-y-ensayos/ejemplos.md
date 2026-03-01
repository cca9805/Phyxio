# Ejemplos Guiados De Ultrasonidos Y Ensayos

## Ejemplo 1- Espesor por pulso-eco
Datos:
- v=6300 m/s
- t=18 us

$$
e=\frac{vt}{2}=\frac{6300\cdot18\times10^{-6}}{2}=0.0567\ \mathrm{m}
$$

## Ejemplo 2- Impedancia acustica
Datos:
- rho=2700 kg/m^3
- v=6400 m/s

$$
Z=\rho v=2700\cdot6400=1.728\times10^7\ \mathrm{kg/(m^2 s)}
$$

## Ejemplo 3- Reflexion de intensidad
Datos:
- Z1=1.728e7
- Z2=4.5e7

$$
R_I=\left(\frac{Z_2-Z_1}{Z_2+Z_1}\right)^2\approx0.18
$$

## Ejemplo 4- Atenuacion por trayecto
Datos:
- A0=1.0
- Ax=0.50
- x=0.08 m

$$
A_{dB}=20\log_{10}(2)=6.02\ \mathrm{dB}
$$

$$
\alpha_{dB}=\frac{6.02}{0.08}=75.3\ \mathrm{dB/m}
$$

Interpretacion: alta perdida, revisar frecuencia y acoplamiento.
