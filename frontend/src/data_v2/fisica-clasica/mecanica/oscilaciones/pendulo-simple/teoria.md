# Péndulo simple

## Idea clave
El péndulo simple transforma energía potencial gravitatoria en energía cinética y viceversa. Para ángulos pequeños se comporta como un oscilador armónico con período dependiente de la longitud, no de la masa.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia la oscilación de una masa puntual suspendida por una cuerda inextensible y de masa despreciable.

Es fundamental porque conecta dinámica rotacional, aproximación lineal, energía y medida experimental de \(g\) en un mismo sistema didáctico.

## 2- Cómo funciona físicamente
Al separar el péndulo un ángulo \(\theta\), aparece una componente tangencial del peso que restaura hacia el equilibrio.

Para ángulos pequeños:

$$
\sin\theta\approx\theta
$$

y la ecuación se lineariza, dando movimiento casi armónico.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(L\): longitud del péndulo (m).
- \(\theta\): ángulo instantáneo (rad).
- \(\theta_0\): amplitud angular (rad).
- \(g\): aceleración de la gravedad (m/s²).
- \(T\): período (s), \(f\): frecuencia (Hz), \(\omega\): pulsación (rad/s).

## 4- Fórmulas esenciales y lectura física
Ecuación exacta:

$$
\ddot\theta+\frac{g}{L}\sin\theta=0
$$

Aproximación de pequeño ángulo:

$$
\ddot\theta+\frac{g}{L}\theta=0
$$

Pulsación y período aproximados:

$$
\omega=\sqrt{\frac{g}{L}},\qquad T=2\pi\sqrt{\frac{L}{g}}
$$

Lectura física:
- mayor longitud \(\Rightarrow\) oscilación más lenta;
- mayor gravedad \(\Rightarrow\) oscilación más rápida.

## 5- Condiciones de validez y límites del modelo
- \(\theta_0\) pequeño (aprox. <10° para alta precisión escolar).
- hilo rígido e inextensible ideal;
- rozamiento del aire y fricción en el eje pequeños.

Si el ángulo es grande, el período real aumenta y la fórmula aproximada infravalora el tiempo.

## 6- Método de resolución paso a paso
1. Convierte longitud a metros.
2. Verifica si el ángulo permite aproximación lineal.
3. Aplica fórmula de \(T\), \(f\) o \(\omega\) según objetivo.
4. Si dan tiempos/oscilaciones, usa \(T=t/N\).
5. Interpreta la dependencia con \(L\) y \(g\).

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿La masa cambia el período?**
No en el modelo ideal de péndulo simple.

**¿Por qué un péndulo largo va más lento?**
Porque su curvatura efectiva de trayectoria aumenta y la restauración angular relativa disminuye.

**¿Por qué falla la fórmula con ángulos grandes?**
Porque \(\sin\theta\approx\theta\) deja de ser buena aproximación.

## 8- Ejemplo guiado completo
Datos: \(L=1.00\,\text{m}\), \(g=9.81\,\text{m/s}^2\).

$$
T=2\pi\sqrt{\frac{1.00}{9.81}}=2.01\,\text{s}
$$

$$
f=\frac{1}{T}=0.497\,\text{Hz}
$$

Si observas 20 oscilaciones, el tiempo esperado es:

$$
t=NT=20\cdot2.01=40.2\,\text{s}
$$

## 9- Aplicaciones reales
- Relojería histórica y cronometraje.
- Medida experimental de \(g\).
- Sistemas de oscilación educativa y calibración básica.

## 10- Síntesis final
El péndulo simple muestra cómo una aproximación física bien justificada permite resolver problemas con precisión y entender claramente la relación entre geometría, gravedad y tiempo de oscilación.
