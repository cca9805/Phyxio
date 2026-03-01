# Caída libre

## Idea clave
En **caída libre** el movimiento es **vertical** y la única aceleración que actúa es la debida a la **gravedad**.  
Es un caso particular de **MRUA** con aceleración constante:

- Elegimos normalmente el eje **$y$ positivo hacia arriba**.
- Entonces la aceleración es **$a=-g$** con **$g>0$**.

---

## Variables y unidades
- **Posición vertical**: $y$ (m)  
- **Posición inicial**: $y_0$ (m)  
- **Velocidad vertical**: $v$ (m/s)  
- **Velocidad inicial**: $v_0$ (m/s)  
- **Aceleración**: $a$ (m/s²)  
- **Gravedad**: $g \approx 9.8$ (m/s²) en el planeta tierra. 
- **Tiempo**: $t$ (s)  
- **Desplazamiento vertical**: $\Delta y = y - y_0$ (m)

> Nota de signos: con $y$ hacia arriba, si el objeto cae su velocidad suele ser negativa.

---

## Aceleración en caída libre
La aceleración es constante y apunta hacia abajo:

$$
a = -g
$$

---

## Ecuaciones del movimiento (caída libre)
Son las ecuaciones de MRUA sustituyendo $a=-g$.

### Velocidad en función del tiempo
$$
v(t)=v_0 - g\,t
$$

**Interpretación física**
- Si lanzas hacia arriba ($v_0>0$), la gravedad va frenando el movimiento hasta que $v=0$ en la altura máxima.
- Si cae desde el reposo ($v_0=0$), entonces $v(t)=-g\,t$.

---

### Posición en función del tiempo (ecuación horaria)
$$
y(t)=y_0 + v_0\,t - \frac{1}{2}g\,t^2
$$

**Interpretación física**
- El término $v_0 t$ empuja “según el lanzamiento”.
- El término $-\frac{1}{2}gt^2$ siempre hace que $y$ tienda a disminuir con el tiempo (por la gravedad).

---

### Relación velocidad–posición (sin usar tiempo)
Útil cuando no te dan $t$:

$$
v^2 = v_0^2 - 2g\,(y-y_0)
$$

**Ojo**: al despejar $v$ aparece $\pm$ porque puede estar subiendo o bajando.

---

## Casos típicos

### 1) Objeto que se deja caer (reposo)
Condiciones iniciales: $v_0=0$

$$
v(t) = -g\,t
$$

$$
y(t)=y_0 - \frac{1}{2}g\,t^2
$$

Tiempo para llegar a un nivel $y$ (si procede):
$$
t = \sqrt{\frac{2\,(y_0-y)}{g}}
$$

---

### 2) Lanzamiento vertical hacia arriba
Condiciones: $v_0>0$

**Tiempo hasta la altura máxima** (cuando $v=0$):
$$
0 = v_0 - g\,t \quad \Rightarrow \quad t_{\max}=\frac{v_0}{g}
$$

**Altura máxima**:
$$
y_{\max} = y_0 + \frac{v_0^2}{2g}
$$

---

### 3) Lanzamiento vertical hacia abajo
Condiciones: $v_0<0$  
Se usan las mismas ecuaciones, pero el signo de $v_0$ hace que el descenso sea más rápido desde el principio.

---

## Gráficas típicas

### Gráfica $v$–$t$
- Es una **recta** con pendiente $-g$.
- Corta en $v_0$ cuando $t=0$.

$$
v(t)=v_0 - g\,t
$$

### Gráfica $y$–$t$
- Es una **parábola** (abre hacia abajo).
- El término $-\frac{1}{2}gt^2$ domina a tiempos grandes.

$$
y(t)=y_0 + v_0\,t - \frac{1}{2}g\,t^2
$$

---

## Gravedad en otros planetas y lunas (curiosidad)

En este tema hemos usado normalmente el valor de la gravedad terrestre:

$$
g_{\text{Tierra}} \approx 9.8\ \text{m/s}^2
$$

Sin embargo, la aceleración de la gravedad depende del cuerpo celeste.  
Si se mantiene el mismo modelo de caída libre pero se cambia el valor de $g$, el movimiento es distinto.

### Valores aproximados de la gravedad

· Cuerpo  $g$ (m/s²) 

- Tierra   | 9.8 
- Luna     | 1.62 
- Marte    | 3.71 
- Venus    | 8.87 
- Júpiter  | 24.79 
- Saturno  | 10.44 
- Urano    | 8.69 
- Neptuno  | 11.15 

### Qué cambia al modificar $g$
- El **tiempo de caída** aumenta si $g$ es menor.
- La **velocidad final** es menor si $g$ es menor.
- La **altura máxima** en un lanzamiento vertical es mayor si $g$ es menor.

Por ejemplo, un objeto tarda mucho más en caer en la Luna que en la Tierra, aunque las ecuaciones sean exactamente las mismas.

> En Phyxio puedes modificar el valor de $g$ para experimentar cómo cambia el movimiento en distintos planetas y lunas.

---

## Punto y coma en decimales (muy importante)

En España es habitual escribir decimales con **coma**: 9,8.  
En programación y muchas calculadoras se usa el **punto**: 9.8.

En Phyxio puedes escribir **coma o punto** y la calculadora lo entenderá.

> Recomendación en ciencias: para separar miles es mejor usar un espacio (por ejemplo 12 500) para evitar confusiones.

---

## Mini-resumen para examen
- Caída libre = MRUA vertical con $a=-g$.
- Fórmulas clave:

$$
v = v_0 - g\,t
$$

$$
y = y_0 + v_0\,t - \frac{1}{2}g\,t^2
$$

$$
v^2 = v_0^2 - 2g\,(y-y_0)
$$

- Si eliges $y$ hacia arriba, recuerda: gravedad siempre “resta”.

---