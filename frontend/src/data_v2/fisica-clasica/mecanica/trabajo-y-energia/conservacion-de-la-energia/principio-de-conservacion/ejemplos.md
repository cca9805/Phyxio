# Ejemplos

## Ejemplo 1: Caída libre desde gran altura (conservación gravitatoria)

**Contexto:** Un paracaidista se lanza desde un helicóptero a altura $h = 1000\,\text{m}$ con velocidad inicial $v_0 = 0$. En condiciones ideales (sin resistencia del aire, asumamos atmósfera uniforme para simplificar), ¿cuál es su velocidad al alcanzar el suelo?

**Paso 1: Plantear balance energético**
Energía inicial = Energía final (conservación):
$$E_i = E_f$$
$$PE_i + KE_i = PE_f + KE_f$$
$$mgh + 0 = 0 + \frac{1}{2}mv_f^2$$

(Tomamos altitud del suelo como referencia de PE: $PE_f = 0$.)

**Paso 2: Resolver para velocidad final**
$$mgh = \frac{1}{2}mv_f^2$$
$$v_f = \sqrt{2gh} = \sqrt{2 \times 10 \times 1000} = \sqrt{20\,000} = 141.4\,\text{m/s}$$

**Paso 3: Interpretar el resultado**
- Velocidad final: $141.4\,\text{m/s} \approx 509\,\text{km/h}$ (enormemente rápido; demostraría efectos de aire reales).
- Observación teórica: Velocidad es **independiente de la masa** (como Galileo descubrió; todos los cuerpos caen al mismo ritmo en vacío).
- Tiempo de caída (cinemática): $t = v_f / g = 141.4 / 10 = 14.14\,\text{s}$ (aprox $14$ segundos).

**Paso 4: Cuantificar energía disipada (efecto de aire real)**
En realidad, con resistencia del aire (paraquaidista con cuerpo comprimido alcanza terminal $v_{\text{term}} \approx 50-60\,\text{m/s}$ para caída inicial, luego despliegue de paracaídas reduce a $v_{\text{term}} \approx 5\,\text{m/s}$ para descenso):

Energía cinética con aire: $KE_{\text{real}} = \frac{1}{2}m(50)^2$ (asumiendo termin a $50\,\text{m/s}$ parte media del descenso).

Energía teórica sin aire: $KE_{\text{ideal}} = \frac{1}{2}m(141.4)^2 = 10000\,m\,\text{J/kg}$.

Energía disipada: $\Delta E = (10\,000 - 1250)m = 8750m\,\text{J}$ (convertida a calor y sonido durante caída).

Para $m = 80\,\text{kg}$ (paracaidista + equipo):
$$\Delta E = 8750 \times 80 = 700\,000\,\text{J} = 700\,\text{kJ} = 167\,\text{kcal}$$

(Equivalente a calorías quemadas en correr maratón; el aire "disipa" una cantidad de energía tremenda.)

---

## Ejemplo 2: Sistema de masa-resorte en oscilación ideal

**Contexto:** Una masa $m = 2\,\text{kg}$ adosada a un resorte horizontal con $k = 200\,\text{N/m}$ es comprimida $x_0 = 0.20\,\text{m}$ desde su posición de equilibrio y liberada desde el reposo. Halla la velocidad máxima durante la oscilación.

**Paso 1: Identificar estados**
- **Estado inicial (máxima compresión):**
  - Desplazamiento: $x = x_0 = 0.20\,\text{m}$.
  - Velocidad: $v = 0$ (liberada del reposo).
  - KE: $KE_i = 0$.
  - PE elástica: $PE_i = \frac{1}{2}kx_0^2 = \frac{1}{2}(200)(0.20)^2 = 4\,\text{J}$.

- **Estado de velocidad máxima (equilibrio):**
  - Desplazamiento: $x = 0$ (posición de equilibrio).
  - Velocidad: $v_{\max}$ (a ser determinada).
  - KE: $KE_f = \frac{1}{2}mv_{\max}^2$.
  - PE elástica: $PE_f = 0$ (no hay deformación).

**Paso 2: Aplicar conservación de energía**
$$E_i = E_f$$
$$PE_i + KE_i = PE_f + KE_f$$
$$4 + 0 = 0 + \frac{1}{2}(2)v_{\max}^2$$
$$4 = v_{\max}^2$$
$$v_{\max} = 2\,\text{m/s}$$

**Paso 3: Verificación mediante ecuación de movimiento**
Para MAS, $v_{\max} = \omega x_0$, donde $\omega = \sqrt{k/m} = \sqrt{200/2} = 10\,\text{rad/s}$.

$$v_{\max} = \omega x_0 = 10 \times 0.20 = 2\,\text{m/s}$$ ✓

**Paso 4: Caracterizar oscilación**
- Amplitud: $A = 0.20\,\text{m}$.
- Frecuencia angular: $\omega = 10\,\text{rad/s}$.
- Período: $T = 2\pi / \omega = 2\pi / 10 = 0.628\,\text{s}$.
- Energía total (constante): $E_{\text{total}} = 4\,\text{J}$.
- Comportamiento: La masa oscila indefinidamente con energía constante (sistema ideal, sin damping).

---

## Ejemplo 3: Péndulo simple: Conversion PE ↔ KE en oscilación

**Contexto:** Un péndulo simple de longitud $L = 1.0\,\text{m}$ es levantado hasta ángulo máximo $\theta_0 = 30°$ desde vertical y soltado. Halla la velocidad en el punto más bajo.

**Paso 1: Calcular cambio de altura**
Desde ángulo $\theta_0$, la altura sobre el punto más bajo es:
$$\Delta h = L - L\cos\theta_0 = L(1 - \cos 30°) = 1.0 \times (1 - 0.866) = 0.134\,\text{m}$$

**Paso 2: Aplicar conservación de energía**
Energía inicial (en altura máxima, $v = 0$):
$$E_i = mg\Delta h + KE_i = mg\Delta h + 0$$

Energía en punto más bajo ($h = 0$, velocidad máxima):
$$E_f = 0 + \frac{1}{2}mv_{\max}^2$$

Por conservación:
$$mg\Delta h = \frac{1}{2}mv_{\max}^2$$
$$v_{\max} = \sqrt{2g\Delta h} = \sqrt{2 \times 10 \times 0.134} = \sqrt{2.68} = 1.63\,\text{m/s}$$

**Paso 3: Verificación (aproximación de ángulo pequeño)**
La aproximación pendular simple para ángulos pequeños ($\theta \ll 1\,\text{rad}$) da:
$$v_{\max} \approx \sqrt{gL\theta_0^2/2}$$

Con $\theta_0 = 30° = 0.524\,\text{rad}$:
$$v_{\max} \approx \sqrt{10 \times 1.0 \times (0.524)^2 / 2} = \sqrt{1.37} = 1.17\,\text{m/s}$$

Comparación: Fórmula exacta da $1.63\,\text{m/s}$; aproximación lineal da $1.17\,\text{m/s}$ (error $\approx 28\%$ para $30°$, aceptable pero notable).

**Paso 4: Período de oscilación**
Período exacto de péndulo simple:
$$T = 4\sqrt{\frac{L}{g}} \left[ K(\sin^2(\theta_0/2)) \right]$$

donde $K$ es integral elíptica (compleja). Para ángulo pequeño:
$$T_{\text{aprox}} = 2\pi\sqrt{L/g} = 2\pi\sqrt{1.0/10} = 1.99\,\text{s} \approx 2\,\text{s}$$

Energía oscila entre PE y KE completamente cada medio período ($T/2 \approx 1\,\text{s}$).

---

## Ejemplo 4: Conservación de energía con componentes múltiples (esquiador en pendiente)

**Contexto:** Un esquiador ($m = 70\,\text{kg}$) desciende una pista de esquí desde altura $h_1 = 500\,\text{m}$ hasta $h_2 = 200\,\text{m}$ (diferencia $\Delta h = 300\,\text{m}$), partiendo del reposo. Asumiendo:
- Trecho 1 (primeros 200 m): Pendiente suave, poco rozamiento.
- Trecho 2 (últimos 100 m): Pendiente pronunciada, nieve compacta, rozamiento moderado.

Estima la velocidad en la base considerando pérdidas por fricción.

**Paso 1: Energía gravitatoria disponible**
$$PE_{\text{total}} = mg\Delta h = 70 \times 10 \times 300 = 210\,000\,\text{J} = 210\,\text{kJ}$$

**Paso 2: Sin fricción (límite teórico)**
$$v_{\text{ideal}} = \sqrt{2g\Delta h} = \sqrt{2 \times 10 \times 300} = \sqrt{6000} = 77.5\,\text{m/s}$$

(Claramente irreal; sería esquiador a $279\,\text{km/h}$, velocidad de caída libre.)

**Paso 3: Con fricción estimada**
- Trecho 1: Coeficiente fricción $\mu_1 = 0.05$ (suave, poco hielo).
- Trecho 2: Coeficiente $\mu_2 = 0.15$ (compacta, nieve normal).
- Ángulo promedio pendiente: $\alpha \approx 20°$ (típico esquí).

Trabajo de fricción:
$$W_{f1} = -\mu_1 mg\cos\alpha \times d_1 = -0.05 \times 70 \times 10 \times 0.94 \times 200 = -6580\,\text{J}$$
$$W_{f2} = -\mu_2 mg\cos\alpha \times d_2 = -0.15 \times 70 \times 10 \times 0.94 \times 100 = -9870\,\text{J}$$

Trabajo fricción total: $W_f = -6580 - 9870 = -16\,450\,\text{J}$.

**Paso 4: Aplicar balance energético con fricción**
$$PE_{\text{inicial}} + W_f = KE_{\text{final}}$$
$$210\,000 - 16\,450 = \frac{1}{2}(70)v_f^2$$
$$193\,550 = 35 v_f^2$$
$$v_f = \sqrt{5530} = 74.4\,\text{m/s}$$

**Paso 5: Interpretación**
- Velocidad final: $74.4\,\text{m/s} \approx 268\,\text{km/h}$ (todavía muy rápido, cercano a récord mundial de esquí).
- Energía disipada por fricción: $16.45\,\text{kJ}$ representa solo el $7.8\%$ de energía disponible (típico para pendientes suaves; en nieve regular, fricción es relativamente pequeña).
- Resultado realista: Esquiadores control velocidad mediante:
  1. Virajes (aumentan distancia recorrida; mayor fricción integrada).
  2. Técnica de carving (reduce superficie de contacto, minimiza fricción).
  3. Rozamiento intencional (arrastres, saltos).

---

## Ejemplo 5: Sistema de múltiples masas y fuerzas (polea y masas acopladas)

**Contexto:** En un sistema de Atwood (dos masas colgadas de polea sin rozamiento), misma cuerda de masa despreciable:
- Masa 1: $m_1 = 2\,\text{kg}$ (lado izquierdo).
- Masa 2: $m_2 = 5\,\text{kg}$ (lado derecho).
- Sistema se libera desde reposo.
- Distancia de descenso: $d = 0.5\,\text{m}$ (antes de que $m_2$ toque suelo).

Halla velocidad común cuando $m_2$ ha descendido $d$.

**Paso 1: Identificar cambios de energía potencial**
- $m_2$ (más pesada) desciende: $\Delta PE_2 = -m_2 g d = -5 \times 10 \times 0.5 = -25\,\text{J}$ (pierde PE, gana KE).
- $m_1$ (más ligera) asciende: $\Delta PE_1 = +m_1 g d = +2 \times 10 \times 0.5 = +10\,\text{J}$ (gana PE, pierde KE).

**Paso 2: Cambio neto de PE**
$$\Delta PE_{\text{neto}} = \Delta PE_2 + \Delta PE_1 = -25 + 10 = -15\,\text{J}$$

(La caída neta de PE es de $15\,\text{J}$, que se convierte en KE.)

**Paso 3: Conservación de energía (sin fricción)**
$$\Delta KE_{\text{total}} = -\Delta PE_{\text{neto}} = 15\,\text{J}$$

Ambas masas se mueven con misma velocidad $v$ (conectadas por cuerda rígida):
$$\frac{1}{2}(m_1 + m_2)v^2 = 15$$
$$\frac{1}{2}(2 + 5)v^2 = 15$$
$$\frac{1}{2}(7)v^2 = 15$$
$$v^2 = 30/7 = 4.286$$
$$v = 2.07\,\text{m/s}$$

**Paso 4: Verificación mediante dinámica (segunda ley)**
Aceleración del sistema:
$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{(5 - 2) \times 10}{7} = 30/7 = 4.286\,\text{m/s}^2$$

Velocidad tras distancia $d$:
$$v^2 = 2ad = 2 \times 4.286 \times 0.5 = 4.286$$
$$v = 2.07\,\text{m/s}$$ ✓ (Coincide perfectamente.)

**Paso 5: Energía total del sistema**
Energía inicial: $E_i = 0$ (todo en reposo).
Energía final: $E_f = \frac{1}{2}(7)(2.07)^2 = \frac{1}{2}(7)(4.286) = 15\,\text{J}$.

Cambio: $\Delta E = 15\,\text{J} = -\Delta PE_{\text{neto}}$. **Energía mecánica se conserva perfectamente.** ✓
