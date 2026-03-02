# Ejemplos resueltos

## Ejemplo 1: Torque constante—trabajo en rotación de taladro

**Enunciado**: Un taladro industrial recibe torque constante $\tau = 50$ N·m mientras perfora un tablón. La broca gira $\Delta\theta = 30$ rad (aproximadamente 4.77 vueltas). Calcular trabajo realizado por torque.

**Resolución**:
$$W = \tau \Delta\theta = 50 \times 30 = 1500 \text{ J} = 1.5 \text{ kJ}$$

**Interpretación**: El taladro transfiere 1.5 kJ de energía mecánica en el proceso de perforación. Esta energía se disipa como:
- Calor friccional en broca-madera (~60%)
- Deformación plástica de virutas (~30%)
- Sonido y vibración (~10%)

El trabajo es **positivo**: el motor aporta energía al sistema.

---

## Ejemplo 2: Potencia instantánea en motor eléctrico

**Enunciado**: Un motor eléctrico de inducción (AC) desarrolla torque nominal $\tau = 200$ N·m a velocidad angular $\omega = 100$ rad/s (aproximadamente 955 rpm). ¿Cuál es la potencia entregada?

**Resolución**:
$$P = \tau \omega = 200 \times 100 = 20,000 \text{ W} = 20 \text{ kW}$$

**Interpretación**: El motor entrega 20 kW de potencia mecánica (potencia de eje). (La potencia eléctrica de entrada es mayor, ~25 kW, debido a pérdidas en bobinados, núcleo de hierro; eficiencia: ~85%)

**Verificación con tiempo**: Si el eje gira durante $t = 10$ s:
$$W = P \times t = 20,000 \times 10 = 200,000 \text{ J} = 200 \text{ kJ}$$

Alternativamente, ángulo total girado: $\Delta\theta = \omega t = 100 \times 10 = 1000$ rad → $W = 200 \times 1000 = 200$ kJ ✓

---

## Ejemplo 3: Torque variable—motor DC con carga mecánica

**Enunciado**: Motor DC (corriente continua) se carga progresivamente. A medida que aumenta carga, torque disponible en eje disminuye (relación $\tau(\omega) = \tau_0 - k\omega$):
- Torque nominal: $\tau_0 = 100$ N·m
- Constante: $k = 0.5$ N·m·s/rad
- Velocidad angular: $\omega = 50$ rad/s

Calcular (a) torque en operación, (b) potencia, (c) trabajo en 20 vueltas.

**Resolución**:

(a) Torque:
$$\tau(50) = 100 - 0.5 \times 50 = 100 - 25 = 75 \text{ N·m}$$

(b) Potencia:
$$P = \tau \omega = 75 \times 50 = 3750 \text{ W}$$

(c) Trabajo en 20 vueltas ($\Delta\theta = 20 \times 2\pi = 125.66$ rad):

**Asumiendo torque aproximadamente constante en rango pequeño**:
$$W \approx \tau \Delta\theta = 75 \times 125.66 = 9425 \text{ J}$$

**Alternativamente (si $\tau$ varía durante rotación)**:
$$W = \int_0^{\Delta\theta} \tau(\theta) d\theta$$

Si $\omega$ cambia lentamente, se puede integrar en tiempo:
$$W = \int_0^{t} P dt \approx \bar{P} \times t = 3750 \times t$$

Para 20 vueltas a 50 rad/s: $t = 125.66 / 50 = 2.51$ s → $W \approx 3750 \times 2.51 = 9413$ J ✓

---

## Ejemplo 4: Freno de potencia—trabajo negativo

**Enunciado**: Un volante (rueda grande de inercia) con $I = 100$ kg·m² gira a $\omega_i = 50$ rad/s (velocidad angular inicial). Se aplica freno (torque negativo) $\tau = -200$ N·m durante $\Delta\theta = 100$ rad de desaceleración.

Calcular: (a) trabajo del freno, (b) velocidad angular final, (c) energía suministrada.

**Resolución**:

(a) Trabajo:
$$W = \tau \Delta\theta = (-200) \times 100 = -20,000 \text{ J} = -20 \text{ kJ}$$

Trabajo **negativo**: el freno extrae energía del sistema.

(b) Velocidad angular final (usando teorema trabajo-energía):
$$W = \Delta K_{rot} = \frac{1}{2}I(\omega_f^2 - \omega_i^2)$$
$$-20,000 = 0.5 \times 100 \times (\omega_f^2 - 2500)$$
$$-20,000 = 50(\omega_f^2 - 2500)$$
$$\omega_f^2 = 2500 - 400 = 2100 \Rightarrow \omega_f \approx 45.8 \text{ rad/s}$$

(c) Energía disipada en freno:
$$E_{disipada} = |W| = 20 \text{ kJ}$$

Esta energía se convierte en **calor en pastilla/disco de freno**.

---

## Ejemplo 5: Transmisión de potencia en engranajes—trabajo en múltiples ejes

**Enunciado**: Engranaje de reducción 1:4 conecta motor (eje rápido) a carga (eje lento):
- Eje motor: $\omega_1 = 200$ rad/s, $\tau_1 = 50$ N·m
- Eje carga (por reducción 1:4): $\omega_2 = \omega_1 / 4 = 50$ rad/s, $\tau_2 = ?$

Calcular (a) torque en eje lento, (b) potencia en ambos ejes, (c) pérdidas suponiendo eficiencia 95%.

**Resolución**:

(a) Conservación de potencia (sin pérdidas):
$$P_1 = P_2 \rightarrow \tau_1 \omega_1 = \tau_2 \omega_2$$
$$50 \times 200 = \tau_2 \times 50$$
$$\tau_2 = 200 \text{ N·m}$$

Torque amplificado 4× (velocidad reducida 4×).

(b) Potencia:
$$P_1 = \tau_1 \omega_1 = 50 \times 200 = 10,000 \text{ W} = 10 \text{ kW}$$
$$P_2 = \tau_2 \omega_2 = 200 \times 50 = 10,000 \text{ W}$$

Iguales (simplificación teórica sin pérdidas).

(c) Con eficiencia real $\eta = 95\%$:
$$P_2 = 0.95 \times 10,000 = 9,500 \text{ W}$$

Pérdidas: $10,000 - 9,500 = 500$ W (~5%) disipadas en fricción de dientes, aceite del engranaje. En 1 hora continua: $500 \text{ W} \times 3600 \text{s} = 1.8$ MJ = 0.5 kWh de energía desperdiciada.

---

**Síntesis**: Los ejemplos cubren torque constante (herramientas), potencia instantánea (motores), torque variable (carga), trabajo negativo (frenos), y sistemas multicuerpo (engranajes), ilustrando aplicación universal de $W = \tau \Delta\theta$ y $P = \tau \omega$ en ingeniería.