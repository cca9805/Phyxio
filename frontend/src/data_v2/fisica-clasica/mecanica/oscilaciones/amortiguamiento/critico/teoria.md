# Régimen crítico

## Idea clave
El amortiguamiento crítico es la frontera entre oscilación y no oscilación: devuelve al equilibrio en el menor tiempo posible sin sobrepasarlo.

## 1- Qué estudia este subtema y por qué es fundamental
Estudia la condición exacta en la que un sistema amortiguado no oscila y, a la vez, no se vuelve innecesariamente lento.

Es fundamental para diseño porque representa una referencia óptima en muchos problemas de control y estabilización mecánica.

## 2- Cómo funciona físicamente
El amortiguamiento es justo el necesario para disipar energía y evitar rebotes, pero sin introducir lentitud excesiva de retorno.

No hay oscilación: la respuesta es monótona hacia equilibrio.

## 3- Magnitudes y parámetros que debes identificar siempre
- \(m\): masa (kg).
- \(k\): rigidez (N/m).
- \(c\): amortiguamiento (N·s/m).
- \(c_c\): amortiguamiento crítico.
- \(\zeta\): razón de amortiguamiento.
- \(\omega_n\): frecuencia natural no amortiguada.

## 4- Fórmulas esenciales y lectura física
Ecuación dinámica:

$$
m\ddot x+c\dot x+kx=0
$$

Amortiguamiento crítico:

$$
c_c=2\sqrt{km}
$$

Condición crítica:

$$
\zeta=\frac{c}{c_c}=1
$$

Solución típica:

$$
x(t)=(C_1+C_2t)e^{-\omega_n t}
$$

## 5- Condiciones de validez y límites del modelo
- modelo lineal viscoso;
- parámetros constantes;
- ausencia de fuerzas externas dominantes.

## 6- Método de resolución paso a paso
1. Calcula \(c_c=2\sqrt{km}\).
2. Compara el \(c\) real con \(c_c\).
3. Si \(c=c_c\), aplica solución crítica.
4. Ajusta constantes con condiciones iniciales.
5. Verifica que no existan oscilaciones en la respuesta.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué se considera “óptimo”?**
Porque evita sobreoscilación y no sacrifica tanto tiempo de asentamiento como el sobreamortiguado.

**¿Puede haber pequeñas oscilaciones en la práctica?**
Sí, por tolerancias y no linealidades.

**¿Cómo distinguirlo del sobreamortiguado?**
Ambos no oscilan, pero el crítico vuelve más rápido al equilibrio.

## 8- Ejemplo guiado completo
Datos: \(m=0.8\,\text{kg}\), \(k=200\,\text{N/m}\).

$$
c_c=2\sqrt{km}=2\sqrt{200\cdot0.8}=25.30\,\text{N·s/m}
$$

Si el amortiguador del sistema se diseña con \(c\approx25.3\), la respuesta esperada es crítica.

## 9- Aplicaciones reales
- Cierre y apertura de mecanismos sin rebote.
- Diseño de instrumentos de medición rápida.
- Ajuste de amortiguadores en sistemas de control.

## 10- Síntesis final
El régimen crítico marca una referencia de ingeniería: retorno rápido, estable y sin oscilaciones, clave para diseñar respuestas limpias y controladas.
