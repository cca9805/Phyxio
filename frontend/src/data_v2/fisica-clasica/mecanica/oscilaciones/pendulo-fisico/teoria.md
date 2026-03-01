# Péndulo físico

## Idea clave
El péndulo físico generaliza el péndulo simple: el cuerpo oscila alrededor de un eje y su dinámica depende tanto de su masa como de cómo está distribuida (momento de inercia).

## 1- Qué estudia este subtema y por qué es fundamental
Estudia la oscilación de un sólido rígido alrededor de un punto de suspensión bajo gravedad.

Es fundamental porque enseña que no basta conocer “cuánta masa hay”; también importa dónde está esa masa respecto al eje. Esta idea es central en toda mecánica rotacional.

## 2- Cómo funciona físicamente
Al separar el sólido de su equilibrio, el peso aplicado en el centro de masas genera un torque restaurador:

$$
\tau=-mgd\sin\theta
$$

donde \(d\) es la distancia del eje al centro de masas.

La aceleración angular depende de ese torque y del momento de inercia \(I\).

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa total (kg).
- \(d\): distancia eje-centro de masas (m).
- \(I\): momento de inercia respecto al eje (kg·m²).
- \(\theta\): ángulo (rad).
- \(g\): gravedad (m/s²).
- \(T\): período (s), \(\omega\): pulsación (rad/s).

## 4- Fórmulas esenciales y lectura física
Ecuación exacta:

$$
I\ddot\theta+mgd\sin\theta=0
$$

Aproximación de ángulo pequeño:

$$
I\ddot\theta+mgd\,\theta=0
$$

Pulsación y período:

$$
\omega=\sqrt{\frac{mgd}{I}},\qquad T=2\pi\sqrt{\frac{I}{mgd}}
$$

Longitud equivalente de péndulo simple:

$$
L_{eq}=\frac{I}{md}
$$

## 5- Condiciones de validez y límites del modelo
- oscilación de pequeño ángulo para usar período simple;
- eje de giro bien definido;
- cuerpo aproximadamente rígido;
- pérdidas por rozamiento moderadas o pequeñas.

Con amplitudes grandes o fricción intensa, el período y la amplitud temporal se desvían del ideal.

## 6- Método de resolución paso a paso
1. Define el eje de giro real.
2. Obtén \(d\) y \(I\) respecto a ese eje.
3. Verifica ángulo pequeño.
4. Aplica fórmula de \(T\) o \(\omega\).
5. Comprueba magnitud y coherencia física.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Dos cuerpos con igual masa oscilan igual?**
No necesariamente. Si su \(I\) es distinto, el período cambia.

**¿Qué efecto tiene alejar masa del eje?**
Aumenta \(I\), por tanto aumenta \(T\).

**¿Cuándo se parece al péndulo simple?**
Cuando puede representarse por una longitud equivalente \(L_{eq}\) y ángulo pequeño.

## 8- Ejemplo guiado completo
Datos: \(m=2.0\,\text{kg}\), \(d=0.30\,\text{m}\), \(I=0.50\,\text{kg·m}^2\), \(g=9.81\,\text{m/s}^2\).

$$
T=2\pi\sqrt{\frac{I}{mgd}}=2\pi\sqrt{\frac{0.50}{2.0\cdot9.81\cdot0.30}}
$$

$$
T\approx2\pi\sqrt{0.0849}\approx1.83\,\text{s}
$$

## 9- Aplicaciones reales
- Diseño de osciladores mecánicos reales.
- Metrología de inercia y balances dinámicos.
- Análisis de péndulos compuestos en ingeniería.

## 10- Síntesis final
El péndulo físico enseña una lección central: la dinámica rotacional depende de masa y geometría. Esa combinación explica por qué objetos de igual peso pueden oscilar de forma distinta.
