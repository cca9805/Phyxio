# Aplicaciones

## 1. Diseño de suspensiones de vehículos (resortes y amortiguadores)
**Contexto:** En un auto con suspensión independiente, cada rueda requiere un resorte que absorba choques (compresión) y libere energía en forma controlada (extensión).

**Especificaciones:**
- Constante del resorte: $k = 20\,000\,\text{N/m}$ (típica para auto compacto).
- Recorrido máximo de compresión: $\Delta x = 0.15\,\text{m}$ (15 cm, típico en relieve moderado).
- Masa soportada por una rueda: $m = 300\,\text{kg}$ (1/4 del peso del auto).

**Cálculo de energía almacenada:**
Trabajo realizado al comprimir:
$$W = \int_0^{0.15} kx \, dx = \frac{k}{2} (\Delta x)^2 = \frac{20\,000}{2} \times (0.15)^2 = 225\,\text{J}$$

Esta energía se almacena en el resorte. Si la suspensión fuera perfecta (sin amortiguamiento), el resorte oscilaría indefinidamente. En realidad:

**Amortiguador viscoso:**
- Los amortiguadores (dampers) disipan energía proporcional a velocidad: $F_{\text{damp}} = -c v$, donde $c = 2000\,\text{N·s/m}$ (coeficiente de amortiguación).
- En una compresión/extensión típica (duración $\approx 0.5\,\text{s}$), la energía disipada es aproximadamente:
$$E_{\text{disipada}} \approx c \times v_{\text{media}} \times d = 2000 \times 1 \times 0.15 \approx 300\,\text{J}$$

**Decisión de diseño:**
- La energía del resorte ($225\,\text{J}$) requiere ser disipada o convertida en oscilación amortiguada.
- Sin amortiguador, el auto oscilaría múltiples veces tras cada bache (incómodo).
- Con amortiguador óptimo ($c \approx 1.5-2.0 \times \sqrt{km}$), la oscilación decae en $1$-$2$ ciclos (confortable).
- **Especificación comercial:** "Amortiguador de 2000 N·s/m" indica la capacidad de disipación.

---

## 2. Análisis de curvas fuerza-desplazamiento en ensayos de tracción (materiales)

**Contexto:** En ingeniería civil, el ensayo de tracción en hormigón reforzado mide cómo se comporta la resistencia de una barra de acero empotrada en hormigón a medida que se tira.

**Resultado típico (curva no lineal):**
- **Zona elástica (0–2 mm):** $F(x) = 50\,000 x$ (N) (comportamiento lineal, como Hooke).
- **Zona de plastificación (2–5 mm):** $F(x) = 100 + 40\,000 (x - 0.002)$ (transición, endurecimiento por deformación).
- **Zona de falla (5–10 mm):** $F(x) = 300 - 20\,000 (x - 0.005)$ (ablandamiento, degradación).

**Cálculo de trabajo (energía de deformación) por zona:**

**Zona elástica:**
$$W_1 = \int_0^{0.002} 50\,000 x \, dx = 50\,000 \times \frac{(0.002)^2}{2} = 0.1\,\text{J}$$

**Zona de plastificación:**
$$W_2 = \int_{0.002}^{0.005} [100 + 40\,000(x - 0.002)] \, dx$$

Calcular:
$$W_2 = [100x + 20\,000(x - 0.002)^2]_{0.002}^{0.005}$$
$$= [0.5 + 20\,000 \times (0.003)^2] - [0.2 + 0]$$
$$= 0.5 + 0.18 - 0.2 = 0.48\,\text{J}$$

**Zona de falla:**
$$W_3 = \int_{0.005}^{0.010} [300 - 20\,000(x - 0.005)] \, dx$$
$$= [300x - 10\,000(x - 0.005)^2]_{0.005}^{0.010}$$
$$= [3 - 10\,000 \times (0.005)^2] - [1.5 - 0]$$
$$= 3 - 0.25 - 1.5 = 1.25\,\text{J}$$

**Energía total absorbida antes de falla:**
$$W_{\text{total}} = 0.1 + 0.48 + 1.25 = 1.83\,\text{J}$$

**Energía de recuperación (elástica):** $W_1 = 0.1\,\text{J}$ (se recupera tras descarga).  
**Energía disipada (plástica + falla):** $0.48 + 1.25 = 1.73\,\text{J}$ (permanente, daño).

**Decisión de diseño:**
- Si se requiere material con alta ductilidad (capacidad de absorber energía antes de fallar), se elige acero con $W_{\text{total}}$ alto.
- Si se requiere material frágil (falla rápida pero con menos riesgo de flexión prolongada), se elige hormigón puro.
- La relación $W_{\text{plástica}} / W_{\text{total}} = 1.73 / 1.83 = 94.5\%$ indica que casi toda la energía se disipa (típico de acero dúctil).

---

## 3. Sistemas de frenado regenerativo en vehículos eléctricos/híbridos

**Contexto:** Un auto eléctrico de $m = 1500\,\text{kg}$ viaja a $v_0 = 25\,\text{m/s}$ y frena hasta $v_f = 0$.

**Energía cinética inicial:**
$$KE_0 = \frac{1}{2}m v_0^2 = \frac{1}{2}(1500)(25)^2 = 468\,750\,\text{J} = 468.75\,\text{kJ}$$

**Frenado tradicional (disipación térmica):**
- Pastillas de freno convierten toda la energía en calor: $E_{\text{calor}} = 468.75\,\text{kJ}$.
- Desperdicio total.

**Frenado regenerativo (eléctrico):**
- Motor eléctrico actúa como generador, convirtiendo energía cinética en energía eléctrica.
- Eficiencia de cero a generador: $\eta_{\text{gen}} = 0.85$ (típica).
- Eficiencia de carga a batería: $\eta_{\text{bat}} = 0.95$ (típica para baterías de Li-ion).
- Eficiencia total: $\eta_{\text{total}} = 0.85 \times 0.95 = 0.81 = 81\%$.

**Energía recuperada:**
$$E_{\text{recup}} = \eta_{\text{total}} \times KE_0 = 0.81 \times 468.75 = 379.7\,\text{kWh}$$

**Beneficio económico anual:**
- Autonomía mejorada: Con batería de $75\,\text{kWh}$, recuperar $380\,\text{kJ}$ en cada frenado puede extender alcance en $\approx 10\%$ en ciclo urbano (donde hay muchos frenados).
- Costo de energía ahorrada (a $0.15\,\text{€}/\text{kWh}$): $0.38 \times 0.15 = 0.057\,\text{€}$ por frenada.
- En ciclo urbano ($\approx 100$ frenadas/día en conducción típica), ahorro diario: $100 \times 0.057 = 5.7\,\text{€}$.
- Ahorro anual: $5.7 \times 250 = 1425\,\text{€}$ (asumiendo 250 días laborables).

**Decisión de tecnología:**
- Vehículos eléctricos puros usan frenado regenerativo extensivamente (ahorro de energía/autonomía).
- Vehículos híbridos usan regenerativo en frenadas leves, frenos tradicionales en frenadas de emergencia (seguridad).

---

## 4. Caracterización de amortiguadores ultrasonidos en ingeniería sísmica

**Contexto:** En edificios en zonas sísmicas, amortiguadores con fluido magnético (MR dampers) disipan energía durante oscilaciones inducidas por terremotos.

**Modelo de amortiguador MR:**
- Fuerza de amortiguación: $F(v) = c_0 |v|^{\alpha} + F_{\text{mag}}(I)$
  - $c_0 = 5000\,\text{N·s/m}$ (amortiguación viscosa pasiva).
  - $\alpha = 1.8$ (no linealidad típica de fluidos).
  - $F_{\text{mag}}(I)$ = fuerza de fricción magnética (controlada por corriente $I$, rango 0–5 kN).

**Desplazamiento durante sismo (simulado):**
$x(t) = 0.5 \sin(\omega t + \phi)$ (m), donde $\omega = 5\,\text{rad/s}$ (periodo $\approx 1.3\,\text{s}$, típico para edificios medianos).

**Cálculo de energía disipada en un ciclo (T = 1.26 s):**

**Caso pasivo (sin control magnético, $F_{\text{mag}} = 0$):**
$$E_{\text{disipada}} = \int_0^T F(v) \cdot v \, dt = \int_0^T 5000 |v|^{1.8} \cdot v \, dt$$

Con $v = 0.5 \omega \cos(\omega t)$:
$$E_{\approx} \approx 15\,000\,\text{J} = 15\,\text{kJ/ciclo}$$

**Caso activo (con control, $F_{\text{mag}} = 3$ kN):**
$$E_{\text{activo}} \approx 40\,000\,\text{J} = 40\,\text{kJ/ciclo}$$

(Mayor disipación = menor oscilación residual del edificio)

**Decisión operacional:**
- En sismo leve: MR desactivado; consumo bajo.
- En sismo moderado: MR con control adaptativo; disipación optimizada.
- En sismo fuerte: MR máximo; máxima protección.

---

## 5. Curvas de rendimiento en bombas con variación de caudal

**Contexto:** Una bomba centrífuga industrial opera en diferentes puntos de funcionamiento según caudal demandado. La curva de potencia $P(Q)$ es no lineal.

**Característica típica de bomba centrífuga:**
- Caudal mínimo: $Q = 10\,\text{L/s}$ (50 l/min), potencia $P = 2\,\text{kW}$.
- Caudal nominal: $Q = 30\,\text{L/s}$ (1800 l/min), potencia $P = 8\,\text{kW}$.
- Caudal máximo: $Q = 50\,\text{L/s}$ (3000 l/min), potencia $P = 15\,\text{kW}$.

**Modelo empírico (ajustado a datos):**
$$P(Q) = 0.2 + 0.25 Q + 0.005 Q^2 \quad (\text{kW; Q en L/s})$$

**Consumo energético anual si la operación está distribuida:**

Supón que el caudal varía según demanda horaria, con distribución típica:
- $20\%$ del tiempo: $Q = 10\,\text{L/s}$, $P = 2.0\,\text{kW}$.
- $50\%$ del tiempo: $Q = 30\,\text{L/s}$, $P = 8.0\,\text{kW}$.
- $30\%$ del tiempo: $Q = 50\,\text{L/s}$, $P = 15.0\,\text{kW}$.

**Potencia media anual:**
$$P_{\text{media}} = 0.20 \times 2 + 0.50 \times 8 + 0.30 \times 15 = 0.4 + 4 + 4.5 = 8.9\,\text{kW}$$

**Consumo anual:**
$$E_{\text{anual}} = 8.9\,\text{kW} \times 24\,\text{h/\text{día}} \times 365\,\text{días} = 77\,934\,\text{kWh}$$

**Costo anual (a $0.12\,\text{€}/\text{kWh}$):**
$$\text{Costo} = 77\,934 \times 0.12 = 9\,352\,\text{€/año}$$

**Mejora propuesta: Variador de frecuencia (VFD)**
- VFD reduce velocidad de motor cuando caudal es bajo, mejorando eficiencia.
- Eficiencia mejorada típica: $+15\%$.
- Consumo reducido: $77\,934 \times 0.85 = 66\,243\,\text{kWh}$.
- Costo reducido: $66\,243 \times 0.12 = 7\,948\,\text{€}/año$.
- **Ahorro:** $9\,352 - 7\,948 = 1\,404\,\text{€}/año$.
- **Costo del VFD:** $\approx 3\,000-5\,000\,\text{€}$.
- **ROI:** $(3\,000-5\,000) / 1\,404 = 2.1-3.6$ años (excelente inversión).
