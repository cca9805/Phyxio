# Tiro horizontal

## Idea clave
En el tiro horizontal un cuerpo se lanza con **velocidad inicial solo horizontal** desde una cierta altura.  
El movimiento resulta de la **combinación de dos movimientos independientes**:

- En el eje horizontal: **MRU** (velocidad constante).
- En el eje vertical: **caída libre** (aceleración constante debida a la gravedad).

Ambos movimientos comparten el **mismo tiempo**.

---

## Variables y unidades
- **Posición horizontal**: $x$ (m)
- **Posición horizontal inicial**: $x_0$ (m)
- **Posición vertical**: $y$ (m)
- **Altura inicial**: $y_0$ (m)
- **Velocidad horizontal inicial**: $v_0$ (m/s)
- **Velocidad horizontal**: $v_x$ (m/s)
- **Velocidad vertical**: $v_y$ (m/s)
- **Aceleración de la gravedad**: $g$ (m/s²)
- **Tiempo**: $t$ (s)
- **Alcance horizontal**: $R$ (m)

---

## Ecuaciones del tiro horizontal

### 1) Movimiento horizontal (MRU)
La velocidad horizontal es constante:
$$
v_x = v_0
$$

La posición horizontal evoluciona como:
$$
x = x_0 + v_0 t
$$

---

### 2) Movimiento vertical (caída libre)
La velocidad vertical inicial es cero:
$$
v_{y0} = 0
$$

La posición vertical viene dada por:
$$
y = y_0 - \frac{1}{2} g t^2
$$

La velocidad vertical en función del tiempo:
$$
v_y = - g t
$$

---

### 3) Tiempo de caída (impacto en el suelo)
Si el cuerpo llega al suelo cuando $y = 0$:
$$
t = \sqrt{\frac{2 y_0}{g}}
$$

---

### 4) Alcance horizontal
El alcance es la distancia horizontal recorrida hasta el impacto:
$$
R = v_0 \, t
$$

---

## Gráficas típicas

### Gráfica $x$–$t$
- Es una **recta**.
- Su pendiente es la velocidad horizontal constante $v_0$.

### Gráfica $y$–$t$
- Es una **parábola**.
- Refleja una caída libre con aceleración constante $g$.

### Trayectoria $y(x)$
- Es una **parábola**, aunque el movimiento real no depende de una única ecuación temporal.

---

## Independencia de los movimientos (idea fundamental)
El movimiento horizontal **no influye** en el vertical y viceversa.  
Un objeto lanzado horizontalmente y otro soltado desde la misma altura **llegan al suelo al mismo tiempo** (si se desprecia el rozamiento).

---

## Punto y coma en decimales (muy importante)

En España es habitual escribir decimales con **coma**: 9,8.  
En programación y muchas calculadoras se usa el **punto**: 9.8.

En Phyxio puedes escribir **coma o punto** y la calculadora lo entenderá.

> Recomendación en ciencias: para separar miles es mejor usar un espacio (por ejemplo 12 500) para evitar confusiones.

---

## Mini-resumen para examen
- Tiro horizontal ⇔ MRU en $x$ + caída libre en $y$.
- Velocidad inicial solo horizontal ($v_{y0}=0$).
- Fórmulas clave:

$$
x = x_0 + v_0 t
$$

$$
y = y_0 - \frac{1}{2} g t^2
$$

$$
t = \sqrt{\frac{2 y_0}{g}}
$$

$$
R = v_0 t
$$
