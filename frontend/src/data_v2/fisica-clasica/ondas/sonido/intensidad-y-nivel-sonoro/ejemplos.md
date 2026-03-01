# Intensidad Y Nivel Sonoro - Ejemplos Guiados

## Idea clave
Resolver bien aqui exige moverse con solvencia entre escala lineal (W/m^2) y escala logaritmica (dB).

## 1- Ejemplo basico: intensidad desde potencia y area
Datos: \(P=0.020\,\mathrm{W}\), \(A=0.50\,\mathrm{m^2}\).

$$
I=\frac{P}{A}=\frac{0.020}{0.50}=0.040\,\mathrm{W/m^2}
$$

Lectura: flujo energetico moderado por unidad de superficie.

## 2- Ejemplo intermedio: nivel sonoro desde intensidad
Datos: \(I=10^{-6}\,\mathrm{W/m^2}\), \(I_0=10^{-12}\,\mathrm{W/m^2}\).

$$
\beta=10\log_{10}\left(\frac{10^{-6}}{10^{-12}}\right)=10\log_{10}(10^6)=60\,\mathrm{dB}
$$

Lectura: nivel sonoro de entorno activo, claramente audible.

## 3- Ejemplo integrado: fuente puntual y distancia
Datos: \(P=0.50\,\mathrm{W}\), \(r=4.0\,\mathrm{m}\), \(I_0=10^{-12}\,\mathrm{W/m^2}\).

Paso 1- intensidad:

$$
I=\frac{P}{4\pi r^2}=\frac{0.50}{4\pi(4.0)^2}=2.49\times10^{-3}\,\mathrm{W/m^2}
$$

Paso 2- nivel:

$$
\beta=10\log_{10}\left(\frac{2.49\times10^{-3}}{10^{-12}}\right)\approx94\,\mathrm{dB}
$$

Lectura: nivel elevado; distancia mayor reduciria significativamente el nivel.

## 4- Preguntas de control rapido
- Cuanta intensidad representa +3 dB y +10 dB?
- Que pasa con \(\beta\) al duplicar distancia en campo libre?
- Por que no puedes sumar 70 dB + 70 dB como 140 dB?

## 5- Checklist final de revision
- Referencia \(I_0\) correcta.
- Logaritmo decimal, no natural.
- Modelo geometrico justificado.
- Interpretacion fisica del resultado en dB.

## 6- Siguiente paso
Replica estos casos en `Calculadora` y valida en `Graficas` la diferencia entre cambios lineales e incrementos en dB.
