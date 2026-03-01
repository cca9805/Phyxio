# Fase en oscilaciones

## Idea clave
La fase es la variable que indica “en qué punto del ciclo” está la oscilación. Controlar la fase permite comparar oscilaciones, detectar adelantos/retrasos y predecir interferencia temporal entre señales.

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema estudia la posición angular del estado oscilatorio dentro del ciclo y su evolución temporal.

Es fundamental porque muchos errores en oscilaciones no son de cálculo de amplitud o frecuencia, sino de interpretación de fase: confundir máximo con cruce por equilibrio, o suponer simultaneidad cuando existe desfase.

## 2- Qué significa físicamente la fase
En una oscilación sinusoidal:

$$
x(t)=A\cos(\omega t+\varphi)
$$

el término \(\omega t+\varphi\) es la fase instantánea. No representa una fuerza; representa la “etiqueta temporal del estado” dentro del ciclo.

- \(\varphi\) fija el estado inicial.
- \(\omega t\) describe cómo avanza ese estado con el tiempo.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(A\): amplitud (m).
- \(\omega\): pulsación (rad/s).
- \(\varphi\): fase inicial (rad).
- \(\phi(t)=\omega t+\varphi\): fase instantánea (rad).
- \(\Delta\phi\): diferencia de fase entre dos oscilaciones (rad).
- \(T\): período (s), \(f\): frecuencia (Hz).

## 4- Fórmulas esenciales y lectura física
Fase instantánea:

$$
\phi(t)=\omega t+\varphi
$$

Desfase entre dos oscilaciones de igual \(\omega\):

$$
\Delta\phi=\varphi_2-\varphi_1
$$

Relación entre desfase y retraso temporal:

$$
\Delta\phi=\omega\,\Delta t=2\pi\frac{\Delta t}{T}
$$

Interpretación:
- \(\Delta\phi>0\): la señal 2 va adelantada respecto a la 1.
- \(\Delta\phi<0\): la señal 2 va retrasada.

## 5- Condiciones de validez y límites del modelo
El concepto de desfase simple es directo cuando ambas oscilaciones son sinusoidales y tienen la misma frecuencia.

Si las frecuencias difieren, el desfase no es constante y aparece deriva de fase.

## 6- Método de resolución paso a paso
1. Escribe ambas señales con notación homogénea (coseno o seno).
2. Identifica \(\omega\) y \(\varphi\) en cada una.
3. Calcula \(\Delta\phi\) con signo.
4. Si piden tiempo equivalente, usa \(\Delta t=\Delta\phi/\omega\).
5. Interpreta físicamente: adelantada/retrasada y cuánto dentro del período.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Puede haber mismo movimiento con fases distintas?**
Sí. Misma amplitud y frecuencia, pero distintos instantes del ciclo.

**¿Desfase de \(2\pi\) significa diferente estado?**
No. \(2\pi\) equivale a un ciclo completo: estado físico equivalente.

**¿Por qué es importante el signo del desfase?**
Porque determina quién va primero en el tiempo.

## 8- Ejemplo guiado completo
Señales:

$$
x_1(t)=0.03\cos(20t+0.2),\qquad x_2(t)=0.03\cos(20t-0.5)
$$

Desfase de 2 respecto a 1:

$$
\Delta\phi=\varphi_2-\varphi_1=-0.5-0.2=-0.7\,\text{rad}
$$

Retraso temporal equivalente:

$$
\Delta t=\frac{\Delta\phi}{\omega}=\frac{-0.7}{20}=-0.035\,\text{s}
$$

Interpretación: la segunda oscilación está retrasada 35 ms respecto a la primera.

## 9- Aplicaciones reales
- Sincronización de señales y sensores.
- Análisis de vibraciones en mantenimiento predictivo.
- Audio y acústica.
- Electrónica de corriente alterna.

## 10- Síntesis final
Entender fase significa leer el tiempo interno de la oscilación. Cuando dominas fase y desfase, dejas de ver solo amplitudes y empiezas a interpretar la dinámica completa entre señales.
