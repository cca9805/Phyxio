# Movimiento Rectilíneo Uniformemente Acelerado (MRUA)

## Idea clave
En MRUA el móvil se desplaza en línea recta con **aceleración constante**.  
Eso implica que la **velocidad cambia linealmente** con el tiempo y la posición sigue una curva (parábola) en función de \(t\).

---

## Variables y unidades
- **Posición**: $x$ (m)
- **Posición inicial**: $x_0$ (m)
- **Velocidad**: $v$ (m/s)
- **Velocidad inicial**: $v_0$ (m/s)
- **Aceleración**: $a$ (m/s²)
- **Tiempo**: $t$ (s)
- **Desplazamiento**: $\Delta x = x - x_0$ (m)

---

## Ecuaciones del MRUA (aceleración constante)

### 1) Velocidad en función del tiempo
$$
v = v_0 + a t
$$

### 2) Posición en función del tiempo
$$
x = x_0 + v_0 t + \frac{1}{2} a t^2
$$

### 3) Ecuación sin tiempo (muy usada en Bachillerato)
$$
v^2 = v_0^2 + 2a\,\Delta x
$$

---

## Gráficas típicas

### Gráfica $v$–$t$
- Es una **recta**.
- La pendiente es la aceleración: $$a = \frac{\Delta v}{\Delta t}$$
- El área bajo la curva es el desplazamiento: $$\Delta x = \int v\,dt$$ (en MRUA se reduce a áreas geométricas)

### Gráfica $x$–$t$
- Es una **parábola** (curvatura depende del signo de $a$).

---

## Punto y coma en decimales (muy importante)

En España es habitual escribir decimales con **coma**: 9,8.  
En programación y muchas calculadoras se usa el **punto**: 9.8.

En Phyxio puedes escribir **coma o punto** y la calculadora lo entenderá.

> Recomendación en ciencias: para separar miles es mejor usar un espacio (por ejemplo 12 500) para evitar confusiones.

---

## Mini-resumen para examen
- MRUA ⇔ $a$ constante, $v(t)$ lineal, $x(t)$ cuadrática.
- Fórmulas clave:

$$
v = v_0 + at
$$

$$
x = x_0 + v_0 t + \frac{1}{2} a t^2
$$

$$
v^2 = v_0^2 + 2a\Delta x
$$
