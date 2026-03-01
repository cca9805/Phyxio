# Ejemplos

## Ejemplo 1: Resorte ideal (Hooke lineal)

**Contexto:** Comprimes un resorte de constante $k = 200\,\text{N/m}$ desde su longitud natural $(x = 0)$ hasta una compresión de $x = 0.10\,\text{m}$. La fuerza restauradora es $F(x) = -kx = -200x$ (negativa porque se opone al desplazamiento). ¿Cuál es el trabajo que debes hacer para comprimir el resorte?

**Paso 1: Identificar la fuerza aplicada (contra la resorte)**
Para comprimir el resorte, debes aplicar una fuerza igual y opuesta a la restauradora:
$$F_{\text{aplicada}} = +kx = +200x$$
(positiva en la dirección de compresión)

**Paso 2: Configurar integral de trabajo**
$$W = \int_0^{0.10} F_{\text{aplicada}}(x) \, dx = \int_0^{0.10} 200x \, dx$$

**Paso 3: Integrar**
$$W = 200 \left[ \frac{x^2}{2} \right]_0^{0.10} = 100 \times (0.10)^2 - 0 = 100 \times 0.01 = 1\,\text{J}$$

**Paso 4: Interpretación física**
- El trabajo de $1\,\text{J}$ se almacena como **energía potencial elástica** en el resorte.
- Fórmula estándar: $U_{\text{elást}} = \frac{1}{2}kx^2 = \frac{1}{2}(200)(0.10)^2 = 1\,\text{J}$ ✓
- Si sueltas el resorte, esta energía potencial se convierte en energía cinética, acelerando la masa adosada.

**Paso 5: Verificación mediante teorema trabajo-energía**
Si comprimes el resorte y luego lo liberas desde el reposo (en la compresión máxima) hasta la posición de equilibrio:
$$W_{\text{resorte}} = \Delta KE = \frac{1}{2}mv_f^2 - 0$$
$$1 = \frac{1}{2}m v_f^2$$

Con $m = 0.5\,\text{kg}$:
$$v_f = \sqrt{2 \times 1 / 0.5} = 2\,\text{m/s}$$

Verificación: Desde equilibrio dinámico, aceleración máxima $a = kx / m = 200 \times 0.10 / 0.5 = 40\,\text{m/s}^2$ (realista para resorte con masa ligera).

---

## Ejemplo 2: Fuerza lineal con offset (dominio mixto)

**Contexto:** Un objeto se mueve bajo una fuerza variable $F(x) = 10 + 4x$ (en newtons) desde $x_1 = 0$ hasta $x_2 = 3\,\text{m}$. Interpreta físicamente: es como si hubiera una fuerza constante de $10\,\text{N}$ más una componente proporcional a la posición (ej., fricción que aumenta con velocidad acumulada, o un muelle debilitado).

**Paso 1: Configurar integral**
$$W = \int_0^3 F(x) \, dx = \int_0^3 (10 + 4x) \, dx$$

**Paso 2: Integrar**
$$W = \left[ 10x + 2x^2 \right]_0^3 = (30 + 18) - 0 = 48\,\text{J}$$

**Paso 3: Interpretar componentes**
- Aporte de la fuerza constante $(10\,\text{N})$: $W_1 = 10 \times 3 = 30\,\text{J}$ (área de rectángulo).
- Aporte de la fuerza variable $(4x)$: $W_2 = \int_0^3 4x \, dx = 2x^2 |_0^3 = 18\,\text{J}$ (área de triángulo).
- Total: $30 + 18 = 48\,\text{J}$.

**Paso 4: Verificación geométrica (área bajo curva)**
La curva $F(x) = 10 + 4x$ forma un trapecio:
- Altura en $x = 0$: $F(0) = 10\,\text{N}$.
- Altura en $x = 3$: $F(3) = 10 + 12 = 22\,\text{N}$.
- Base: $\Delta x = 3\,\text{m}$.
- Área del trapecio: $A = \frac{1}{2}(b_1 + b_2) \times h = \frac{1}{2}(10 + 22) \times 3 = 48\,\text{J}$ ✓

**Paso 5: Energía cinética final**
Si el objeto parte del reposo ($v_0 = 0$) con masa $m = 4\,\text{kg}$:
$$W = \Delta KE = \frac{1}{2}m v_f^2$$
$$48 = \frac{1}{2}(4) v_f^2$$
$$v_f = \sqrt{24} = 4.90\,\text{m/s}$$

---

## Ejemplo 3: Fuerza con cambio de signo (trabajo neto, compromisos oscilantes)

**Contexto:** Un objeto se mueve en el eje $x$ bajo una fuerza $F(x) = 8\cos(πx/2)$ (N) desde $x = 0$ hasta $x = 2\,\text{m}$. Esta fuerza tiene regiones positivas (acelera) y negativas (frena), como en un péndulo en oscilación.

**Paso 1: Analizar regiones**
- Para $0 \leq x \leq 1\,\text{m}$: $\cos(πx/2) > 0$, entonces $F > 0$ (fuerza favorable).
- Para $1 < x \leq 2\,\text{m}$: $\cos(πx/2) < 0$, entonces $F < 0$ (fuerza opuesta).

**Paso 2: Calcular trabajo total**
$$W = \int_0^2 8\cos\left(\frac{\pi x}{2}\right) dx$$

Sustituir $u = \pi x / 2$, entonces $du = \pi/2 \, dx$, así $dx = 2/\pi \, du$:
$$W = 8 \cdot \frac{2}{\pi} \int_0^{\pi} \cos(u) \, du = \frac{16}{\pi} [\sin(u)]_0^{\pi} = \frac{16}{\pi} (\sin\pi - \sin 0) = 0$$

**Paso 3: Interpretar el resultado**
El trabajo neto es cero porque:
- En la primera mitad ($0$ a $1\,\text{m}$): La fuerza positiva realiza trabajo $W_+ = \int_0^1 8\cos(\pi x/2) dx = \frac{16}{\pi}[\sin(\pi/2) - 0] = \frac{16}{\pi} \approx 5.09\,\text{J}$.
- En la segunda mitad ($1$ a $2\,\text{m}$): La fuerza negativa realiza trabajo $W_- = \int_1^2 8\cos(\pi x/2) dx = \frac{16}{\pi}[\sin(\pi) - \sin(\pi/2)] = -\frac{16}{\pi} \approx -5.09\,\text{J}$.
- Total: $W_+ + W_- = 0$.

**Paso 4: Consecuencia energética**
Un objeto que comienza en reposo en $x = 0$:
- Acelera durante la primera mitad, ganando energía cinética.
- Descelera durante la segunda mitad, perdiendo energía cinética.
- Llega a $x = 2\,\text{m}$ con velocidad nula: $v_f = 0$.

Este comportamiento es típico de sistemas oscilantes o procesos cíclicos reversibles.

---

## Ejemplo 4: Fuerza que depende de velocidad (resistencia del aire)

**Contexto:** Un objeto cae verticalmente en aire, experimentando resistencia proporcional a velocidad: $F_{\text{res}} = -bv$ (fuerzas):
- Peso: $F_g = mg = 10\,\text{N}$ (constante, hacia abajo).
- Resistencia: $F_{\text{air}} = -bv = -2v$ (opuesta al movimiento, proporcional a $v$).

El objeto alcanza **velocidad terminal** cuando $F_g + F_{\text{air}} = 0$:
$$10 - 2v_{\text{term}} = 0 \Rightarrow v_{\text{term}} = 5\,\text{m/s}$$

**Calcular trabajo desde inicio de caída hasta velocidad terminal:**

**Paso 1: Tiempo para alcanzar terminal (aproximado)**
La ecuación de movimiento es $m dv/dt = mg - bv$. Con $m = 1\,\text{kg}$, $g = 10\,\text{m/s}^2$, $b = 2\,\text{N·s/m}$:
$$\frac{dv}{dt} = 10 - 2v$$

Solución: $v(t) = 5(1 - e^{-2t})$.

Para alcanzar $99\%$ de terminal ($v \approx 4.95\,\text{m/s}$):
$$4.95 = 5(1 - e^{-2t}) \Rightarrow e^{-2t} = 0.01 \Rightarrow t \approx 2.3\,\text{s}$$

**Paso 2: Desplazamiento durante caída**
$$h = \int_0^{2.3} v(t) \, dt = \int_0^{2.3} 5(1 - e^{-2t}) \, dt$$
$$h = 5\left[ t + \frac{e^{-2t}}{2} \right]_0^{2.3} = 5\left( 2.3 + \frac{e^{-4.6}}{2} - 0.5 \right) \approx 5 \times 1.8 = 9\,\text{m}$$

**Paso 3: Calcular trabajo del peso**
$$W_g = mg \cdot h = 10 \times 9 = 90\,\text{J}$$

**Paso 4: Calcular trabajo de resistencia**
El trabajo de la resistencia (que se disipa como calor) es más delicado calcular directamente. Usamos el teorema trabajo-energía:
$$W_{\text{neto}} = \Delta KE = \frac{1}{2}m v_f^2 - 0 = \frac{1}{2}(1)(4.95)^2 \approx 12.25\,\text{J}$$

$$W_g + W_{\text{air}} = 12.25$$
$$90 + W_{\text{air}} = 12.25$$
$$W_{\text{air}} = 12.25 - 90 = -77.75\,\text{J}$$

**Paso 5: Interpretación**
- El peso realiza $90\,\text{J}$ de trabajo (fuente de energía).
- La resistencia disipa $77.75\,\text{J}$ como calor (disipación viscosa).
- Solo $12.25\,\text{J}$ se convierten en energía cinética.
- **Eficiencia de aceleración:** $12.25 / 90 = 13.6\%$ (la mayor parte de la energía se pierde en calor).

---

## Ejemplo 5: Trabajo en proceso termodinámico (gas ideal, expansión)

**Contexto:** Un pistón en un cilindro contiene gas ideal a temperatura constante (proceso isotérmico). El gas se expande desde volumen $V_1 = 0.01\,\text{m}^3$ hasta $V_2 = 0.04\,\text{m}^3$. Presión inicial $P_1 = 100\,\text{kPa}$.

Para un gas ideal en isotérmico: $PV = nRT = \text{const}$, así $P(V) = P_1 V_1 / V = 100 \times 0.01 / V = 1/V$ (en unidades de kPa·$\text{m}^3$).

**Paso 1: Configurar integral de trabajo**
En termodinámica, trabajo realizado **por el gas** es:
$$W = \int_{V_1}^{V_2} P(V) \, dV = \int_{0.01}^{0.04} \frac{1}{V} \, dV$$

(aquí $P$ se expresa en kPa, $V$ en $\text{m}^3$, resultado en kJ)

**Paso 2: Integrar**
$$W = \ln(V) \Big|_{0.01}^{0.04} = \ln(0.04) - \ln(0.01) = \ln(4) \approx 1.386\,\text{kJ (ojo: esto da }P_1 V_1 \ln(V_2/V_1))$$

Corrección con constante: $W = 100 [0.01 \ln(4)] = 1\,\text{kPa} \times 0.01\,\text{m}^3 \times \ln(4) / (1\,\text{Pa·m}^3/\text{J})$
$$W = 100 \times 0.01 \times \ln(4) = 1 \times 1.386 = 1.386\,\text{kJ}$$

**Paso 3: Interpretación**
- El gas realiza un trabajo de $1.386\,\text{kJ}$ mientras se expande (trabajo útil, ej., empuja el pistón).
- En un proceso isotérmico, la energía interna no cambia ($\Delta U = 0$), por lo que todo el calor suministrado se convierte en trabajo:
$$Q = W = 1.386\,\text{kJ}$$

**Paso 4: Comparar con expansión isobárica (presión constante)**
Si en lugar de isotérmico, el proceso fuera isobárico a $P = 100\,\text{kPa}$:
$$W_{\text{isobárico}} = P \Delta V = 100 \times (0.04 - 0.01) = 100 \times 0.03 = 3\,\text{kJ}$$

**Resultado:** Expansión isotérmica entrega menos trabajo ($1.386\,\text{kJ}$) que isobárica ($3\,\text{kJ}$) para el mismo cambio de volumen. Esto refleja que en isotérmico, la presión cae durante la expansión, reduciendo la fuerza media.
