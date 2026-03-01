# Ejemplos (MRU)

## Ejemplo 1 (ESO/Bach): posición tras un tiempo

Un móvil parte de $x_0 = 2\ \text{m}$ y se mueve con $v = 3\ \text{m/s}$.  
Calcula la posición a los $t = 5\ \text{s}$.

**Datos:**
- $x_0 = 2\ \text{m}$
- $v = 3\ \text{m/s}$
- $t = 5\ \text{s}$

**Fórmula:**
$$x = x_0 + vt$$

**Sustitución:**
$$x = 2 + 3\cdot 5$$

**Resultado:**
$$x = 17\ \text{m}$$

**Interpretación:** la posición aumenta porque $v>0$.

---

## Ejemplo 2 (Bach): encuentro de dos móviles

A: $x_{0A}=0\ \text{m}$, $v_A=4\ \text{m/s}$  
B: $x_{0B}=30\ \text{m}$, $v_B=-2\ \text{m/s}$

**¿Cuándo y dónde se encuentran?**

**Datos:**
- $x_{0A}=0\ \text{m}$, $v_A=4\ \text{m/s}$
- $x_{0B}=30\ \text{m}$, $v_B=-2\ \text{m/s}$

**Ecuaciones de posición:**
$$x_A(t)=x_{0A}+v_A t \Rightarrow x_A(t)=4t$$
$$x_B(t)=x_{0B}+v_B t \Rightarrow x_B(t)=30-2t$$

**Condición de encuentro:**
$$x_A(t)=x_B(t)$$

**Sustitución y despeje de $t$:**
$$4t = 30 - 2t$$
$$6t = 30$$
$$t = 5\ \text{s}$$

**Cálculo de la posición:**
$$x = x_A(5)=4\cdot 5 = 20\ \text{m}$$

**Resultado:**
$$t=5\ \text{s}, \quad x=20\ \text{m}$$

**Interpretación:** se encuentran porque van uno hacia el otro ($v_A>0$ y $v_B<0$).

---

## Propuesto 1 (ESO/Bach)

Un ciclista va a $18\ \text{km/h}$ durante $10$ minutos.  
¿Cuántos metros recorre? (Convierte unidades.)

**Pista:** $18\ \text{km/h} = 5\ \text{m/s}$ y $10\ \text{min} = 600\ \text{s}$.

---

## Propuesto 2 (Bach)

Dos móviles salen a la vez:
- A desde $x_0=10\ \text{m}$ con $v=1.5\ \text{m/s}$
- B desde $x_0=-5\ \text{m}$ con $v=2.0\ \text{m/s}$

¿Se alcanzan? Si sí, ¿cuándo y dónde?

**Pista:** se alcanzan cuando $x_A(t)=x_B(t)$.
