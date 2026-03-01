# Aplicaciones Del Sonido - Ejemplos Guiados

## Idea clave
Estos ejemplos entrenan la seleccion de modelo correcto en contextos mixtos.

## 1- Ejemplo basico: distancia por eco
Datos: \(v=340\,\mathrm{m/s}\), \(t_{echo}=0.12\,\mathrm{s}\).

$$
d=\frac{340\cdot0.12}{2}=20.4\,\mathrm{m}
$$

Lectura: distancia al obstaculo en trayecto ida.

## 2- Ejemplo intermedio: nivel desde potencia y distancia
Datos: \(P=0.20\,\mathrm{W}\), \(r=5\,\mathrm{m}\), \(I_0=10^{-12}\,\mathrm{W/m^2}\).

$$
I=\frac{0.20}{4\pi(5)^2}=6.37\times10^{-4}\,\mathrm{W/m^2}
$$

$$
\beta=10\log_{10}\left(\frac{6.37\times10^{-4}}{10^{-12}}\right)\approx88\,\mathrm{dB}
$$

Lectura: nivel alto en campo libre a 5 m.

## 3- Ejemplo integrado: Doppler + interpretacion
Datos: \(f_0=700\,\mathrm{Hz}\), \(v=343\,\mathrm{m/s}\), \(v_s=25\,\mathrm{m/s}\), observador fijo.

$$
f_{obs}=700\frac{343}{343-25}=755\,\mathrm{Hz}
$$

$$
\Delta f=755-700=55\,\mathrm{Hz}
$$

Lectura: corrimiento positivo coherente con acercamiento de la fuente.

## 4- Preguntas de control rapido
- Por que el eco divide entre 2?
- Que representa realmente +10 dB en energia?
- Como detectar error de signo en Doppler antes de acabar?

## 5- Checklist final
- Modelo correcto para el escenario.
- SI consistente.
- Supuestos explicitados.
- Resultado interpretado fisicamente.

## 6- Siguiente paso
Repite en `Calculadora` y valida cada tendencia en `Graficas`.
