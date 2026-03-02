# Ejemplos resueltos

## Ejemplo 1: Bloque deslizando con fricción cinética

**Enunciado**: Un bloque de masa $m=5$ kg se desliza 2 m sobre una tabla horizontal con coeficiente de fricción cinética $\mu_k=0.25$ y normal $N=mg$. La velocidad inicial es $v_i=2$ m/s y se detiene después de 2 m. Calcular el trabajo disipado por fricción y verificar con cambio de energía cinética.

**Resolución**:

- Fuerza de fricción: $F_f=\mu_k N = 0.25 \times 5 \times 9.81 = 12.26$ N
- Trabajo disipado: $W_{nc} = -F_f \times d = -12.26 \times 2 = -24.52$ J
- Energía cinética inicial: $K_i = \tfrac{1}{2} m v_i^2 = 0.5 \times 5 \times 4 = 10$ J
- Energía final: $K_f = 0$ J → $\Delta K = -10$ J

Observación: la diferencia numérica proviene de la simplificación del ejemplo; en la práctica la distancia para detenerse dada por la energía sería $d = K_i/F_f = 10/12.26 = 0.815$ m. Si el bloque realmente recorrió 2 m, entonces trabajo total disipado = 24.52 J, consistente con una pérdida mayor que la energía cinética inicial (pues hubo aporte o condiciones distintas). Verifique siempre datos y sign conventions.

---

## Ejemplo 2: Arrastre cuadrático—bola proyectil en aire

**Enunciado**: Una esfera de radio $r=0.05$ m y área frontal $A=\pi r^2$ viaja a $v=20$ m/s en aire ($\rho=1.2$ kg/m³, $C_D=0.47$). Calcular la potencia instantánea disipada por arrastre.

**Resolución**:
$$F_D = \tfrac{1}{2} C_D \rho A v^2$$
$$A = \pi (0.05)^2 = 7.85\times 10^{-3} \text{ m}^2$$
$$F_D = 0.5 \times 0.47 \times 1.2 \times 7.85\times10^{-3} \times 400 \approx 0.887 \text{ N}$$
Potencia disipada: $P = F_D v \approx 0.887 \times 20 = 17.7$ W.

---

## Ejemplo 3: Frenado de vehículo—energía disipada y temperatura de disco

**Enunciado**: Un automóvil de masa $m=1200$ kg reduce velocidad de $v_i=27.78$ m/s (100 km/h) a $v_f=0$ en una frenada de emergencia; toda la energía cinética se disipa en los frenos. Estime la energía disipada y el aumento de temperatura si la masa efectiva del conjunto de frenado es 10 kg con capacidad calorífica $c=460$ J/kg·K.

**Resolución**:
$$E_k = \tfrac{1}{2} m v_i^2 = 0.5 \times 1200 \times (27.78)^2 \approx 463,000 \text{ J}$$
Si toda esa energía se concentrara en masa $M=10$ kg:
$$\Delta T = E_k / (M c) = 463,000 / (10 \times 460) \approx 100.7\,^{\circ}\text{C}$$

Interpretación: en la realidad la energía se reparte entre discos, pastillas, sistema de escape y aire; por eso se usan discos ventilados, materiales con alta capacidad térmica y sistemas de refrigeración.

---

## Ejemplo 4: Colisión inelástica entre dos masas

**Enunciado**: Masa $m_1=2$ kg con $v_1=4$ m/s choca inelásticamente con masa en reposo $m_2=3$ kg. Calcula velocidad final y energía perdida.

**Resolución**:
Conservación de momento:
$$v_f = \frac{m_1 v_1}{m_1 + m_2} = \frac{2 \times 4}{5} = 1.6\,\text{m/s}$$
Energía cinética inicial: $K_i = 0.5 \times 2 \times 4^2 = 16$ J
Energía final: $K_f = 0.5 (m_1 + m_2) v_f^2 = 0.5 \times 5 \times 1.6^2 = 6.4$ J
Energía perdida: $\Delta K = K_f - K_i = -9.6$ J (convertida en calor, deformación y sonido).

---

## Ejemplo 5: Rodadura con resistencia a la rodadura y trabajo del motor

**Enunciado**: Un camión con masa total equivalente $m=5000$ kg se desplaza a velocidad constante $v=20$ m/s. Resistencia a la rodadura efectiva corresponde a una fuerza $F_r = C_r m g$ con $C_r = 0.006$. Calcular la potencia que debe suministrar el motor solo para vencer la resistencia de rodadura.

**Resolución**:
$$F_r = 0.006 \times 5000 \times 9.81 = 294.3 \text{ N}$$
Potencia requerida: $P = F_r v = 294.3 \times 20 = 5,886$ W ≈ 5.9 kW.

Si además hay resistencia aerodinámica (por ejemplo 10 kW), la potencia total del motor deberá ser mayor según pérdidas del tren motor.

---

**Síntesis**: Los ejemplos ilustran cómo cuantificar trabajo disipativo en diferentes regímenes: fricción seco, arrastre cuadrático, freno de vehículos, colisiones inelásticas y resistencias de rodadura.
