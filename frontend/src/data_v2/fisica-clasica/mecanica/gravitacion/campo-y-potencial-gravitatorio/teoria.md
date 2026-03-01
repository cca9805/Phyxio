# Campo y potencial gravitatorio

## Idea clave
El campo gravitatorio describe **cómo acelera** una masa de prueba en cada punto del espacio, y el potencial gravitatorio describe **cuánta energía por unidad de masa** está asociada a ese punto. Campo y potencial son dos formas complementarias de describir el mismo fenómeno.

## 1- ¿Qué estudia este subtema y por qué es clave?
Este subtema responde a una transición importante en física: pasar de pensar en "fuerzas entre dos cuerpos" a pensar en "propiedades del espacio creadas por una masa fuente".

Es clave porque:
- simplifica problemas con varias masas de prueba,
- conecta fuerza con energía,
- prepara el salto a otros campos físicos (eléctrico, magnético).

## 2- ¿Qué diferencia hay entre fuerza, campo y potencial?
- **Fuerza gravitatoria**: depende de la masa de prueba \(m\).
- **Campo gravitatorio \(\vec g\)**: fuerza por unidad de masa; depende de la masa fuente y la posición, no del objeto de prueba.
- **Potencial gravitatorio \(V\)**: energía potencial por unidad de masa; es escalar y facilita cálculos energéticos.

Relación directa:

$$
\vec F = m\vec g
$$

$$
U = mV
$$

## 3- Campo gravitatorio: definición y lectura física
Definición general:

$$
\vec g = \frac{\vec F}{m}
$$

Para una masa puntual o esfera equivalente:

$$
\vec g(r)= -G\frac{M}{r^2}\,\hat r
$$

Lectura física:
- módulo \(g=GM/r^2\),
- dirección radial,
- sentido hacia la masa fuente (por eso el signo negativo en forma vectorial).

## 4- Potencial gravitatorio: definición y signo
Potencial de una masa puntual:

$$
V(r) = -G\frac{M}{r}
$$

El signo negativo es fundamental: con referencia \(V(\infty)=0\), los puntos cercanos a la masa tienen potencial más bajo (más negativo).

Esto significa que para "sacar" una masa hacia el infinito hay que aportar energía.

## 5- Relación entre campo y potencial (la conexión profunda)
Campo y potencial no son teorías separadas: el campo es el gradiente negativo del potencial.

$$
\vec g = -\nabla V
$$

En simetría radial, esto se reduce a:

$$
g(r) = -\frac{dV}{dr}
$$

Interpretación: el campo apunta hacia donde el potencial decrece más rápido.

## 6- Energía potencial y trabajo gravitatorio
Energía potencial:

$$
U = mV = -G\frac{Mm}{r}
$$

Cambio de energía potencial entre dos radios:

$$
\Delta U = U_f-U_i = -GMm\left(\frac{1}{r_f}-\frac{1}{r_i}\right)
$$

Relación con trabajo (fuerza conservativa):

$$
W_g = -\Delta U
$$

Esto permite resolver muchos problemas orbitales sin integrar fuerzas punto a punto.

## 7- Preguntas lógicas de alumno (respuestas directas)
**¿Por qué el potencial es negativo?**
Porque elegimos \(V(\infty)=0\) y la interacción gravitatoria es atractiva; los estados ligados quedan por debajo de cero.

**¿Puede haber potencial cero y campo no nulo?**
Sí, según la referencia elegida para potencial. Lo físicamente relevante del potencial son diferencias \(\Delta V\).

**¿Por qué a veces uso \(g\) y otras \(V\)?**
Si buscas aceleración/fuerza, usa campo. Si buscas trabajo/energía, suele ser más directo usar potencial.

**¿Qué cambia si hay varias masas fuente?**
Se aplica superposición: sumas vectorialmente campos y escalarmente potenciales.

## 8- Método de resolución paso a paso
1. Fija sistema y referencia de potencial (normalmente \(V(\infty)=0\)).
2. Identifica si hay una o varias masas fuente.
3. Calcula \(V\) en los puntos pedidos.
4. Si piden fuerza/aceleración, calcula \(\vec g\) y luego \(\vec F=m\vec g\).
5. Si piden trabajo o energía, usa \(\Delta U=m\Delta V\) y \(W_g=-\Delta U\).
6. Verifica unidades: \(g\) en \(\mathrm{m/s^2}\), \(V\) en \(\mathrm{J/kg}\), \(U\) en \(\mathrm{J}\).
7. Interpreta el signo final del resultado (si el sistema gana o pierde energía).

## 9- Ejemplo completo guiado
Datos: \(M=5.97\times10^{24}\,\mathrm{kg}\), \(r=7.0\times10^6\,\mathrm{m}\), \(m=100\,\mathrm{kg}\).

Campo:

$$
g=G\frac{M}{r^2}
=6.67\times10^{-11}\frac{5.97\times10^{24}}{(7.0\times10^6)^2}
\approx 8.13\,\mathrm{m/s^2}
$$

Potencial:

$$
V=-G\frac{M}{r}
\approx -5.69\times10^7\,\mathrm{J/kg}
$$

Energía potencial de la masa de prueba:

$$
U=mV\approx 100\cdot(-5.69\times10^7)
= -5.69\times10^9\,\mathrm{J}
$$

Interpretación: el sistema está ligado gravitatoriamente (energía potencial negativa).

## 10- Síntesis final
Dominar campo y potencial gravitatorio significa elegir la herramienta adecuada según la pregunta física:
- campo para dinámica (fuerzas y aceleraciones),
- potencial para energía y trabajo,
- y relación \(\vec g=-\nabla V\) como puente conceptual entre ambas visiones.
