# Ecuación de movimiento en MHS

## Idea clave
La ecuación de movimiento del MHS no es solo una fórmula de posición: describe de forma completa cómo evoluciona el oscilador en el tiempo y permite conectar desplazamiento, velocidad, aceleración, fase y energía en un único modelo coherente.

## 1- Qué estudia este subtema y por qué es fundamental
Este subtema responde a una pregunta central: ¿cómo predecir el estado de un oscilador en cualquier instante sin recurrir a aproximaciones improvisadas?

Es fundamental porque, una vez dominas la ecuación de movimiento, puedes resolver con criterio problemas de masa-muelle, péndulos de pequeño ángulo, vibraciones de sensores y oscilaciones mecánicas de ingeniería.

## 2- Qué significa físicamente la ecuación del MHS
En MHS la fuerza restauradora es proporcional al desplazamiento y apunta siempre al equilibrio. Esa linealidad genera una oscilación sinusoidal.

La lógica dinámica es:
- si te alejas del equilibrio, aumenta la fuerza restauradora;
- al cruzar el equilibrio, la velocidad es máxima;
- en los extremos, la velocidad se anula y la aceleración es máxima hacia el centro.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(x\): desplazamiento respecto al equilibrio (m).
- \(A\): amplitud máxima (m).
- \(\omega\): frecuencia angular o pulsación (rad/s).
- \(\varphi\): fase inicial (rad).
- \(t\): tiempo (s).
- \(v\): velocidad instantánea (m/s).
- \(a\): aceleración instantánea (m/s²).
- \(f\): frecuencia (Hz).
- \(T\): período (s).

## 4- Fórmulas esenciales y lectura física
Ecuación de posición:

$$
x(t)=A\cos(\omega t+\varphi)
$$

Velocidad:

$$
v(t)=-A\omega\sin(\omega t+\varphi)
$$

Aceleración:

$$
a(t)=-\omega^2x(t)
$$

Relaciones temporales:

$$
\omega=2\pi f,\qquad T=\frac{1}{f},\qquad \omega=\frac{2\pi}{T}
$$

Lectura física clave:
- \(v\) y \(x\) están desfasadas \(\pi/2\).
- \(a\) y \(x\) están en oposición de fase.

## 5- Condiciones de validez y límites del modelo
El modelo es válido si:
- la fuerza restauradora es lineal (tipo Hooke o aproximación lineal);
- no domina el amortiguamiento;
- no hay excitación externa fuerte;
- las amplitudes no sacan al sistema del régimen lineal.

Si aparece no linealidad, fricción importante o fuerza externa periódica, debes pasar a modelos amortiguados o forzados.

## 6- Método de resolución paso a paso
1. Define el eje, el origen en equilibrio y el convenio de signos.
2. Identifica qué te dan: \(A\), \(\omega\), \(\varphi\), \(x(0)\), \(v(0)\), etc.
3. Escribe \(x(t)\) y deriva para obtener \(v(t)\), \(a(t)\).
4. Aplica condiciones iniciales para fijar fase y amplitud si faltan.
5. Sustituye en SI y verifica unidades.
6. Interpreta el resultado: valor instantáneo y estado dinámico (extremo, equilibrio o intermedio).

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué aparece coseno y no seno?**
Porque seno y coseno son equivalentes con un cambio de fase. Lo importante es la fase inicial correcta.

**¿La amplitud cambia la frecuencia?**
En el régimen lineal ideal, no: cambia la energía, no la frecuencia natural.

**¿Cómo sé si estoy en un extremo?**
Cuando \(|x|=A\), entonces \(v=0\) y \(|a|\) es máxima.

## 8- Ejemplo guiado completo
Datos: \(A=0.08\,\text{m}\), \(\omega=10\,\text{rad/s}\), \(\varphi=0\). Calcula \(x,v,a\) en \(t=0.15\,\text{s}\).

$$
x=0.08\cos(10\cdot0.15)=0.08\cos(1.5)\approx0.0057\,\text{m}
$$

$$
v=-0.08\cdot10\sin(1.5)\approx-0.798\,\text{m/s}
$$

$$
a=-10^2\cdot0.0057\approx-0.57\,\text{m/s}^2
$$

Interpretación: el sistema está cerca del equilibrio, con velocidad alta y aceleración relativamente pequeña, coherente con la dinámica del MHS.

## 9- Aplicaciones reales
- Sensores inerciales y acelerómetros.
- Suspensiones y aisladores vibratorios.
- Oscilaciones de elementos elásticos en maquinaria.
- Modelado inicial de vibraciones estructurales.

## 10- Síntesis final
Dominar la ecuación de movimiento en MHS significa pasar de “sustituir datos” a entender la dinámica completa del sistema: dónde está, hacia dónde se mueve, cuánto acelera y por qué.
