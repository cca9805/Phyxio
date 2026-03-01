# Ejemplos

## Ejemplo 1: Potencia media en elevación de carga (trabajo sobre tiempo)

**Contexto:** En un almacén, un operario usa una polea manual para elevar cajas de $m = 10\,\text{kg}$ una altura de $h = 5\,\text{m}$ en $t = 4\,\text{s}$. Calcula la potencia media suministrada.

**Paso 1: Identificar el trabajo realizado**
El trabajo debe vencer el peso (asumiendo movimiento cuasiestático sin aceleración significativa):
$$W = mgh = 10 \times 10 \times 5 = 500\,\text{J}$$

**Paso 2: Aplicar definición de potencia media**
$$P_{\text{media}} = \frac{W}{\Delta t} = \frac{500}{4} = 125\,\text{W}$$

**Paso 3: Interpretación física**
- Una potencia de $125\,\text{W}$ es aproximadamente **la quinta parte de una potencia equivalente a $1\,\text{hp}$ (746 W)**.
- En términos metabólicos, un operario humano típicamente sustrae **400-500 kcal/hora en trabajo físico moderado**; elevar cajas continuamente requiere esfuerzo considerable.
- Verificación: Energía total suministrada en una jornada de $8\,\text{h}$ = $125 \times 8 \times 3600 = 3.6 \times 10^6\,\text{J} = 1\,\text{kWh}$.

**Paso 4: Verificación mediante energía cinética y potencial**
Asumiendo movimiento uniformemente acelerado desde reposo hasta la cima:
- Velocidad media: $v_{\text{media}} = h / t = 5 / 4 = 1.25\,\text{m/s}$.
- Aceleración aproximada: $a = v_{\text{media}} / t = 1.25 / 4 = 0.31\,\text{m/s}^2$.
- Energía cinética en la cima: $KE_f = \frac{1}{2}mv_f^2 = \frac{1}{2}(10)(0.625)^2 = 1.95\,\text{J}$ (mínimo, casi despreciable).
- Energía potencial final: $PE_f = mgh = 500\,\text{J}$.
- Total: $500 + 2 \approx 502\,\text{J}$ ✓ (consistente con $W = 500\,\text{J}$).

---

## Ejemplo 2: Potencia instantánea en movimiento uniforme (producto fuerza-velocidad)

**Contexto:** Un auto de $m = 1200\,\text{kg}$ viaja a velocidad constante $v = 25\,\text{m/s}$ (90 km/h) en autopista. La resistencia total (fricción aerodinámica + rodadura) se modela como fuerza equivalente $F_{\text{res}} = 400\,\text{N}$ (aproximadamente proporcional a $v^2$ para velocidades altas, pero aproximada como lineal en este rango).

**Paso 1: En movimiento uniforme, fuerzas están equilibradas**
$$F_{\text{motor}} = F_{\text{resistencia}} = 400\,\text{N}$$

**Paso 2: Calcular potencia instantánea suministrada por el motor**
$$P = F_{\text{motor}} \cdot v = 400 \times 25 = 10\,000\,\text{W} = 10\,\text{kW}$$

**Paso 3: Verificar mediante trabajo y tiempo**
En una distancia de $d = 100\,\text{m}$:
- Tiempo requerido: $t = d / v = 100 / 25 = 4\,\text{s}$.
- Trabajo realizado por el motor: $W = F_{\text{motor}} \cdot d = 400 \times 100 = 40\,000\,\text{J}$.
- Potencia media: $P_{\text{media}} = W / t = 40\,000 / 4 = 10\,000\,\text{W}$ ✓

**Paso 4: Interpretación de consumo de combustible**
- Potencia requerida: $10\,\text{kW}$.
- Rendimiento típico del motor de combustión interna: $\eta \approx 0.25$ (25%).
- Potencia térmica suministrada por combustión: $P_{\text{térmica}} = P / \eta = 10\,000 / 0.25 = 40\,\text{kW}$.
- Consumo de combustible: Un litro de gasolina aporta aproximadamente $34 \times 10^6\,\text{J}$ de energía química.
- Tiempo para consumir $1\,\text{L}$: $t = 34 \times 10^6 / (40 \times 10^3) = 850\,\text{s} = 14.17\,\text{min}$.
- A $90\,\text{km/h}$, en $14.17$ minutos recorres $\approx 21.3\,\text{km}$.
- Consumo experimental observado: $\approx 7-8\,\text{L}/100\,\text{km}$, consistente con estimación (el cálculo es realista).

---

## Ejemplo 3: Potencia negativa en frenado (disipación de energía)

**Contexto:** Un ciclista que viaja a $v = 8\,\text{m/s}$ aplica los frenos con una fuerza de frenado $F_f = 80\,\text{N}$ (opuesta al desplazamiento). ¿Cuál es la potencia instantánea durante el frenado?

**Paso 1: Identificar fuerzas y vectores**
- Velocidad: $\vec v = 8\,\text{m/s}$ (adelante).
- Fuerza de frenado: $\vec F_f = -80\,\text{N}$ (atrás).
- Ángulo entre $\vec F_f$ y $\vec v$: $\theta = 180°$.

**Paso 2: Calcular potencia instantánea**
$$P = \vec F \cdot \vec v = F \cdot v \cdot \cos 180° = (-80) \times 8 \times (-1) = -640\,\text{W}$$

(Alternativamente, sin signo: $P = |F| \cdot |v| \cos(180°) = 80 \times 8 \times (-1) = -640\,\text{W}$.)

**Paso 3: Interpretar el signo negativo**
- Potencia negativa significa que se **extrae energía** del sistema.
- La energía cinética disminuye a razón de $640\,\text{J/s}$.
- Esta energía se disipa como **calor en las pastillas de freno**.

**Paso 4: Calcular tiempo de frenado y energía total disipada**
Asumiendo desaceleración constante:
- Aceleración de frenado: $a = F / m$. Para un ciclista ($m = 70\,\text{kg}$ + bici $10\,\text{kg} = 80\,\text{kg}$):
  $$a = -80 / 80 = -1\,\text{m/s}^2$$
- Tiempo para detener: $t = v / |a| = 8 / 1 = 8\,\text{s}$.
- Distancia de frenado: $d = v^2 / (2|a|) = 64 / 2 = 32\,\text{m}$.
- Energía cinética inicial: $KE_0 = \frac{1}{2}(80)(8)^2 = 2560\,\text{J}$.
- Energía disipada en frenos: $|W_f| = F_f \times d = 80 \times 32 = 2560\,\text{J}$ ✓

**Verificación:** La energía cinética inicial se disipa completamente como calor. Temperatura de frenos:
- Steel brake pad específico calor: $c \approx 500\,\text{J/(kg·K)}$; masa de pastillas: $m_{\text{pad}} = 0.1\,\text{kg}$.
- Aumento de temperatura: $\Delta T = Q / (m \cdot c) = 2560 / (0.1 \times 500) = 51.2\,\text{K}$.
- Resultado: Frenos se calientan $\approx 50°C$ por frenada completa (típico, confirma validez del modelo).

---

## Ejemplo 4: Potencia en trabajo contra y con la gravedad (signo de potencia en ascensor)

**Contexto:** Un ascensor levanta a $n = 4$ personas (promedio $75\,\text{kg}$ cada una) + cabina ($800\,\text{kg}$) a una altura de $h = 20\,\text{m}$ en tiempo $t = 15\,\text{s}$. En el descenso, realiza el mismo recorrido en $t' = 15\,\text{s}$ con los frenos controlados.

**Paso 1: Análisis de subida (motor suministra potencia)**
- Masa total: $m = 800 + 4 \times 75 = 1100\,\text{kg}$.
- Trabajo contra gravedad: $W_{\text{up}} = mgh = 1100 \times 10 \times 20 = 220\,000\,\text{J}$.
- Potencia media suministrada: $P_{\text{up}} = W / t = 220\,000 / 15 = 14\,667\,\text{W} \approx 14.7\,\text{kW}$.

**Paso 2: Análisis de bajada (gravedad realiza trabajo, frenos lo absorben)**
- Trabajo realizado por gravedad: $W = mgh = 220\,000\,\text{J}$.
- Este trabajo se disipa como calor en los frenos (potencia negativa desde perspectiva del motor).
- Potencia de disipación en frenos: $P_{\text{disipated}} = -W / t' = -220\,000 / 15 = -14\,667\,\text{W}$.
- (El signo negativo significa que la energía se extrae del sistema.)

**Paso 3: Comparación de energética**
- Subida: Motor suministra $14.7\,\text{kW}$ durante $15\,\text{s}$ = $220\,\text{kJ}$ (costo energético).
- Bajada: Recuperar energía mediante un "motor de recuperación" (frenos regenerativos) podría recapar hasta el $60-70\%$ de esta energía ($\approx 130-155\,\text{kJ}$).
- Ascensores modernos (especialmente en edificios verdes) usan **sistemas de recuperación de energía** que redirigen el trabajo de bajada a ascensos posteriores, mejorando la eficiencia general.

**Verificación de potencia instantánea durante ascenso con aceleración:**
Si el ascensor acelera uniformemente desde reposo a velocidad estable en los primeros $5\,\text{s}$:
- Aceleración: $a = 1\,\text{m/s}^2$ (típico para comodidad).
- Velocidad máxima: $v_{\max} = at = 1 \times 5 = 5\,\text{m/s}$ (mantenida durante los últimos $10\,\text{s}$).
- Fuerza de tensión en cable durante aceleración: $F = m(g + a) = 1100(10 + 1) = 12\,100\,\text{N}$.
- Potencia instantánea al final de aceleración ($v = 5\,\text{m/s}$): $P = F \cdot v = 12\,100 \times 5 = 60\,500\,\text{W}$ (pico).
- Potencia instantánea a velocidad constante: $P = mg \cdot v = 1100 \times 10 \times \frac{4}{3} = \approx 14\,667\,\text{W}$ (promedio, consistente).

---

## Ejemplo 5: Potencia en máquina de rendimiento limitado (eficiencia real)

**Contexto:** Una máquina industrial levanta cajas de $m = 50\,\text{kg}$ a una altura $h = 3\,\text{m}$ en tiempo $t = 5\,\text{s}$. El motor de la máquina consume una potencia eléctrica de $P_{\text{in}} = 3\,\text{kW}$.

**Paso 1: Calcular potencia útil (trabajo mecánico)**
$$P_{\text{útil}} = \frac{mgh}{t} = \frac{50 \times 10 \times 3}{5} = 300\,\text{W}$$

**Paso 2: Calcular rendimiento**
$$\eta = \frac{P_{\text{útil}}}{P_{\text{in}}} = \frac{300}{3000} = 0.10 = 10\%$$

**Paso 3: Analizar pérdidas de energía**
- Potencia perdida en fricciones mecánicas: $P_{\text{fricción}} = 3000 - 300 - P_{\text{térmico motor}} \approx 2000-2500\,\text{W}$.
- Potencia perdida como calor en motor (eficiencia eléctrica $\approx 85\%$): $P_{\text{térmico}} = P_{\text{in}} \times 0.15 = 450\,\text{W}$.
- **Resultado:** Del $3\,\text{kW}$ suministrado, solo $300\,\text{W}$ ($10\%$) realiza trabajo útil. El resto se disipa en fricción mecánica, calor del motor, y vibraciones.

**Paso 4: Mejora de eficiencia**
Para aumentar rendimiento al $20\%$ (objetivo razonable con mantenimiento y lubricación mejorada):
- Potencia útil sigue siendo $300\,\text{W}$ (mismo trabajo mecánico).
- Potencia de entrada requerida: $P_{\text{in, nuevo}} = P_{\text{útil}} / 0.20 = 300 / 0.20 = 1500\,\text{W}$.
- **Ahorro:** Reducción de potencia consumida de $3\,\text{kW}$ a $1.5\,\text{kW}$ = **50% menos consumo**.
- **Ahorros económicos (anual):** Si la máquina opera $2000$ horas/año a $0.15\,\text{€}/\text{kWh}$:
  $$\text{Ahorro} = (3 - 1.5) \times 2000 \times 0.15 = 450\,\text{€/año}$$
