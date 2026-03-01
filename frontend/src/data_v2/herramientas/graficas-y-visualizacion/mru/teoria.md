# Movimiento Rectilíneo Uniforme (MRU)

## Idea clave
En MRU el móvil se desplaza en línea recta con **velocidad constante**.  
Eso significa que en tiempos iguales recorre distancias iguales, y la posición cambia de forma **lineal** con el tiempo.

---

## Variables y unidades
- **Posición**: $x$ (m)  
- **Posición inicial**: $x_0$ (m)  
- **Velocidad**: $v$ (m/s)  *(puede ser negativa según el sentido del eje)*
- **Tiempo**: $t$ (s)  
- **Desplazamiento**: $\Delta x = x - x_0$ (m)

---

## Ecuación horaria (posición en función del tiempo)
$$
x(t) = x_0 + v\,t
$$

### Interpretación física
- Si $v>0$, la posición aumenta con el tiempo (se mueve “hacia +x”).
- Si $v<0$, la posición disminuye (se mueve “hacia −x”).
- Si $v=0$, está en reposo $x=x_0$.

---

## Desplazamiento y velocidad media
En MRU, el desplazamiento es proporcional al tiempo:
$$\Delta x = v\, \Delta t$$
y la velocidad media coincide con la velocidad constante:
$$
v = \frac{\Delta x}{\Delta t}
$$

---

## Gráficas típicas
### Gráfica $x$–$t$
- Es una **recta**.
- La **pendiente** es la velocidad:  
  $$
  v = \frac{\Delta x}{\Delta t}
  $$
- El punto donde corta al eje $x$ cuando $t=0$ es $x_0$.

### Gráfica $v$–$t$
- Es una línea horizontal: $v$ constante.

---

## Encuentros y adelantamientos (idea)
Si dos móviles A y B están en MRU, se encuentran cuando sus posiciones son iguales:
$$
x_A(t) = x_B(t)
$$
Es decir:
$$
x_{0A} + v_A t = x_{0B} + v_B t
$$
y se despeja $t$. Ese $t$ se sustituye para hallar la posición del encuentro.

---

## Punto y coma en decimales (muy importante)

En España es habitual escribir decimales con **coma**: 9,8.  
En programación y muchas calculadoras se usa el **punto**: 9.8.

En Phyxio puedes escribir **coma o punto** y la calculadora lo entenderá.

> Recomendación en ciencias: para separar miles es mejor usar un espacio (por ejemplo 12 500) para evitar confusiones.

---

## Mini-resumen para examen
- MRU ⇔ recta $x(t)$, pendiente = $v$, aceleración nula.
- Fórmula clave: $x = x_0 + vt$.
- Relaciones útiles:

$$
v = \frac{\Delta x}{\Delta t}
$$

$$
\Delta x = v\,\Delta t
$$

