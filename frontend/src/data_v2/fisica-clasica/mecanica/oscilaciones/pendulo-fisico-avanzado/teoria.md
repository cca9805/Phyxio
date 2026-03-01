# Péndulo físico avanzado

## Idea clave
En nivel avanzado el péndulo físico se trata como un sistema no lineal con parámetros geométricos, inerciales y disipativos que condicionan estabilidad, período y respuesta dinámica real.

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema aborda el péndulo físico más allá de la aproximación básica: linealización, no linealidad angular, energía, amortiguamiento y análisis de sensibilidad.

Es fundamental para nivel universitario porque conecta teoría de oscilaciones, ecuaciones diferenciales y validación experimental de modelos.

## 2- Cómo funciona físicamente (visión avanzada)
El balance dinámico alrededor del eje es:

$$
I\ddot\theta + c\dot\theta + mgd\sin\theta = \tau_{ext}(t)
$$

Cada término representa:
- inercia rotacional (\(I\ddot\theta\));
- disipación (\(c\dot\theta\));
- restauración gravitatoria no lineal (\(mgd\sin\theta\));
- posible excitación externa.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(I\): momento de inercia respecto al eje (kg·m²).
- \(m\): masa (kg).
- \(d\): brazo gravitatorio (m).
- \(c\): coeficiente de amortiguamiento rotacional (N·m·s/rad).
- \(\theta,\dot\theta,\ddot\theta\): estado angular.
- \(\tau_{ext}\): torque externo (N·m).
- \(\omega_n,\zeta\): frecuencia natural y razón de amortiguamiento.

## 4- Fórmulas esenciales y lectura física
Linealización (ángulos pequeños):

$$
I\ddot\theta + c\dot\theta + mgd\,\theta = \tau_{ext}(t)
$$

Frecuencia natural no amortiguada:

$$
\omega_n=\sqrt{\frac{mgd}{I}}
$$

Razón de amortiguamiento:

$$
\zeta=\frac{c}{2\sqrt{Imgd}}
$$

Energía mecánica (sin disipación):

$$
E=\frac{1}{2}I\dot\theta^2+mgd\,(1-\cos\theta)
$$

## 5- Condiciones de validez y límites del modelo
- linealización válida solo para ángulos pequeños;
- parámetros \(I,c,d\) deben estar correctamente identificados;
- para amplitudes altas conviene integrar la ecuación no lineal completa.

En presencia de excitación periódica pueden aparecer resonancia, salto de fase y comportamientos no triviales.

## 6- Método de resolución paso a paso
1. Construye modelo dinámico completo (lineal o no lineal).
2. Determina parámetros inerciales y geométricos reales.
3. Clasifica régimen (subamortiguado, crítico, sobreamortiguado).
4. Resuelve analíticamente o numéricamente según el caso.
5. Contrasta con energía y medidas experimentales.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué el período aumenta con amplitud grande?**
Porque el sistema deja de ser estrictamente lineal y la aproximación \(\sin\theta\approx\theta\) falla.

**¿Qué parámetro controla más la rapidez?**
El cociente \(mgd/I\): más brazo gravitatorio o menor inercia aceleran la oscilación.

**¿Qué muestra la fase en este contexto?**
El desfase entre excitación y respuesta, clave en análisis de resonancia.

## 8- Ejemplo guiado completo
Datos: \(m=1.5\,\text{kg}\), \(d=0.28\,\text{m}\), \(I=0.32\,\text{kg·m}^2\), \(c=0.12\,\text{N·m·s/rad}\).

$$
\omega_n=\sqrt{\frac{1.5\cdot9.81\cdot0.28}{0.32}}\approx3.59\,\text{rad/s}
$$

$$
\zeta=\frac{0.12}{2\sqrt{0.32\cdot1.5\cdot9.81\cdot0.28}}\approx0.030
$$

Régimen: claramente subamortiguado (\(\zeta<1\)).

## 9- Aplicaciones reales
- Sistemas de estabilización e instrumentación inercial.
- Ensayos de identificación dinámica de estructuras.
- Diseño de dispositivos oscilatorios de precisión.
- Modelado de elementos biomecánicos oscilantes.

## 10- Síntesis final
El péndulo físico avanzado es un laboratorio completo de dinámica: integra no linealidad, amortiguamiento, energía y respuesta forzada en un único sistema de estudio.
