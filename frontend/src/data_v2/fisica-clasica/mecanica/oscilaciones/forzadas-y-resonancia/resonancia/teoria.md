# Resonancia

## Idea clave
La resonancia ocurre cuando la excitación externa opera cerca de la frecuencia natural del sistema y la amplitud crece notablemente. Sin amortiguamiento suficiente, ese crecimiento puede ser peligroso.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia el pico de respuesta en amplitud frente a frecuencia de excitación en sistemas oscilatorios.

Es fundamental porque explica fallos estructurales, ruido excesivo, fatiga mecánica y, a la vez, fenómenos útiles como amplificación en instrumentación y selección de frecuencia.

## 2- Cómo funciona físicamente
Cuando cada ciclo de la fuerza externa aporta energía “en fase” con el movimiento, la energía acumulada supera temporalmente la disipada y la amplitud aumenta.

El amortiguamiento impide crecimiento ilimitado y fija un máximo finito.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(\omega_n\): frecuencia natural.
- \(\Omega\): frecuencia de excitación.
- \(\zeta\): razón de amortiguamiento.
- \(X\): amplitud de respuesta.
- \(Q\): factor de calidad.

## 4- Fórmulas esenciales y lectura física
Amplitud estacionaria de oscilador forzado amortiguado:

$$
X(\Omega)=\frac{F_0}{\sqrt{(k-m\Omega^2)^2+(c\Omega)^2}}
$$

Con amortiguamiento ligero, frecuencia de máximo aproximada:

$$
\Omega_r\approx\omega_n\sqrt{1-2\zeta^2}
$$

Factor de calidad aproximado:

$$
Q\approx\frac{1}{2\zeta}
$$

## 5- Condiciones de validez y límites del modelo
- linealidad y amortiguamiento viscoso equivalente;
- excitación periódica estable;
- ausencia de no linealidad severa.

En sistemas no lineales, la resonancia puede deformarse, desplazarse o presentar histéresis.

## 6- Método de resolución paso a paso
1. Calcula \(\omega_n\) y \(\zeta\).
2. Evalúa amplitud en función de \(\Omega\).
3. Identifica zona de pico y margen operativo seguro.
4. Si hay riesgo, incrementa amortiguamiento o desplaza frecuencia de trabajo.
5. Verifica respuesta en fase además de amplitud.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Resonancia es siempre mala?**
No. Es peligrosa en estructuras no diseñadas para ella, pero útil en filtros, sensores y acústica.

**¿Por qué el pico no es infinito?**
Porque hay disipación.

**¿Cómo se evita en ingeniería?**
Cambiando rigidez/masa (\(\omega_n\)), aumentando amortiguamiento o alejando la frecuencia excitadora.

## 8- Ejemplo guiado completo
Datos: \(m=2\,\text{kg}\), \(k=200\,\text{N/m}\), \(c=8\,\text{N·s/m}\).

$$
\omega_n=\sqrt{\frac{k}{m}}=10\,\text{rad/s}
$$

$$
\zeta=\frac{c}{2\sqrt{km}}=\frac{8}{2\sqrt{400}}=0.20
$$

$$
\Omega_r\approx10\sqrt{1-2(0.2)^2}=9.59\,\text{rad/s}
$$

La resonancia aparecerá cerca de 9.6 rad/s, no exactamente en 10 rad/s debido al amortiguamiento.

## 9- Aplicaciones reales
- Diseño de puentes y edificios ante excitación periódica.
- Ensayos de vibración en componentes mecánicos.
- Sistemas acústicos y de instrumentación selectiva.

## 10- Síntesis final
La resonancia no es un “truco matemático”: es una consecuencia energética real. Comprenderla es clave para prevenir fallos y diseñar sistemas eficientes y seguros.
