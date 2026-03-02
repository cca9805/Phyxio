# Ejemplos resueltos

## Ejemplo 1: Energía almacenada en un resorte y restitución

**Enunciado**: Un resorte con $k=300\ \text{N/m}$ se comprime $x=0.08\ \text{m}$ desde su longitud natural. Calcular $U_e$ y la velocidad que adquiriría una masa de $m=0.2$ kg fijada al extremo si se libera sin disipación.

**Resolución**:
$$U_e=\tfrac12 k x^2 = 0.5\times 300 \times 0.08^2 = 0.96\ \text{J}$$
Conservación de energía (sin pérdidas): $U_e=K=\tfrac12 m v^2$ →
$$v=\sqrt{\frac{2U_e}{m}} = \sqrt{\frac{2\times0.96}{0.2}} \approx 3.1\ \text{m/s}$$

---

## Ejemplo 2: Trabajo realizado al extender un muelle no lineal (aproximación)

**Enunciado**: Un muelle presenta comportamiento ligeramente no lineal: $F(x)=kx+\alpha x^3$ con $k=200$ N/m, $\alpha=1\times10^4$ N/m^3. Calcular aproximación de trabajo entre $x=0$ y $x=0.05$ m.

**Resolución**:
$$W=-\int_0^{0.05} F(x) dx = -\left[\tfrac12 k x^2 + \tfrac14 \alpha x^4\right]_0^{0.05}$$
$$= -\left(0.5\times200\times0.05^2 + 0.25\times10^4\times0.05^4\right)$$
$$= -\left(0.25 + 0.25\times10^4\times6.25\times10^{-6}\right)$$
$$= -\left(0.25 + 0.15625\right) = -0.40625\ \text{J}$$

---

## Ejemplo 3: Sistema masa-resorte amortiguado — energía disponible

**Enunciado**: Masa $m=2$ kg unida a resorte $k=800$ N/m con amortiguamiento leve $c=5$ N·s/m. La masa se deja caer desde $x=0.1$ m comprimido. Estimar energía inicial almacenada y fracción disipada en la primera oscilación (aprox.).

**Resolución**:
Energía inicial: $U_e=0.5\times800\times0.1^2=4$ J.
Para amortiguamiento leve, energía perdida por ciclo aproximada: $\Delta E \approx 2\pi c \omega_n A^2$ donde $\omega_n=\sqrt{k/m}=20$ rad/s y A≈0.1 m.
$$\Delta E \approx 2\pi \times 5 \times 20 \times 0.1^2 = 2\pi \times 5 \times 20 \times 0.01 \approx 6.28 \ \text{J}$$
La aproximación excede $U_e$ porque la fórmula debe usarse con A representativa del movimiento libre; en esta escala, la fracción disipada en la primera oscilación es O(1) — en la práctica usar métodos numéricos o medidas para precisión y considerar que parte de la energía se disipa rápidamente.

---

## Ejemplo 4: Red de resortes—energía total en paralelo y en serie

**Enunciado**: Dos resortes idénticos $k=400$ N/m están conectados en paralelo y se comprimen 0.02 m. Calcular energía almacenada total. Repetir para conexión en serie con la misma compresión total.

**Resolución**:
Paralelo: constantes suman $k_{eq}=800$ N/m →
$$U=\tfrac12 k_{eq} x^2 = 0.5\times800\times0.02^2 = 0.16\ \text{J}$$
Serie: constantes en serie $1/k_{eq}=1/k+1/k$ → $k_{eq}=200$ N/m →
$$U=0.5\times200\times0.02^2 = 0.04\ \text{J}$$

---

## Ejemplo 5: Dispositivo de almacenamiento (volante + resorte) — energía combinada

**Enunciado**: Un sistema combina un resorte $k=1000$ N/m comprimido 0.05 m y un volante con $I=2$ kg·m² girando a $\omega=10$ rad/s. Calcular energía total almacenada.

**Resolución**:
Energía resorte: $U_e=0.5\times1000\times0.05^2 = 1.25$ J
Energía rotacional: $K_{rot}=0.5\times I \omega^2 = 0.5\times2\times100 = 100$ J
Energía total: $101.25$ J (el volante domina la capacidad de almacenamiento en este ejemplo).

---

**Comentarios**: Los ejemplos muestran integración de energía elástica con disipación y almacenamiento mecánico adicional; para casos reales use siempre comprobación experimental y, si procede, FEA para geometrías complejas.

