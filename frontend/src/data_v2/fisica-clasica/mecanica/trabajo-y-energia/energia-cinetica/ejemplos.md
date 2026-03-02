# Ejemplos resueltos

## Ejemplo 1: Cálculo directo y comparación de energías a velocidades distintas

**Enunciado**: Un cuerpo de $m = 2$ kg se mueve a $v_1 = 5$ m/s, luego a $v_2 = 10$ m/s. Calcular energías en ambos casos y explicar por qué la segunda no es el doble de la primera.

**Resolución**:
- A $v_1 = 5$ m/s: $K_1 = \frac{1}{2}(2)(5)^2 = 25$ J
- A $v_2 = 10$ m/s: $K_2 = \frac{1}{2}(2)(10)^2 = 100$ J
- Ratio: $K_2 / K_1 = 100 / 25 = 4$ (cuadruplica, no duplica)

**Interpretación física**:
La energía cinética depende de $v^2$, no linealmente de $v$. Duplicar velocidad cuadruplica energía. Esto tiene consecuencias críticas:
- Vehículo a 60 km/h: impacto 4× más grave que a 30 km/h
- Incremento de 50% en velocidad (5 → 7.5 m/s) → incremento 2.25× en energía cinética

**Verificación**: La aceleración de 5 m/s a 10 m/s a través de una distancia requiere trabajo $W = \Delta K = 75$ J. Si la fuerza aplicada es $F = 10$ N, entonces $d = W/F = 7.5$ m. Check: $v_f^2 = v_i^2 + 2ad \Rightarrow 100 = 25 + 2(5)(7.5)$ ✓

---

## Ejemplo 2: Teorema trabajo-energía—frenada de vehículo

**Enunciado**: Automóvil de $m = 1000$ kg viaja a $v_i = 25$ m/s (90 km/h) y frena desacelerando uniformemente hasta parada en $t = 5$ s. Calcular: (1) aceleración, (2) fuerza de frenado, (3) trabajo realizado por fricción.

**Resolución**:
1. Aceleración (uniforme): $a = (v_f - v_i)/t = (0 - 25)/5 = -5$ m/s²

2. Fuerza de frenado: $F = ma = 1000 × (-5) = -5000$ N

3. Energía cinética inicial: $K_i = \frac{1}{2}(1000)(25)^2 = 312,500$ J = 312.5 kJ

4. Energía cinética final: $K_f = 0$ J

5. Trabajo de fricción: $W_{fricción} = K_f - K_i = -312,500$ J

6. Distancia de frenada (verificación): $v_f^2 = v_i^2 + 2ad \Rightarrow d = (0 - 625)/(2×(-5)) = 62.5$ m
   - Trabajo verificación: $W = F·d = (-5000)(62.5) = -312,500$ J ✓

**Conclusión**: 312.5 kJ se convierte en calor en pastillas de freno y neumáticos. Temperatura de pastillas sube ~100°C en frenada de emergencia. Este cálculo es crítico en diseño de sistemas de frenado y normativas de seguridad.

---

## Ejemplo 3: Colisión inelástica—análisis energético vs. momentum

**Enunciado**: Dos bolas de billar: $m_1 = 0.17$ kg a $v_1 = 2$ m/s colisiona con $m_2 = 0.17$ kg en reposo ($v_2 = 0$). Colisión perfectamente inelástica (se pegan). Calcular velocidad final y energía perdida.

**Resolución**:

**Conservación de momentum**:
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_f$$
$$0.17 × 2 + 0.17 × 0 = 0.34 × v_f$$
$$v_f = 1 \text{ m/s}$$

**Energías**:
- Inicial: $K_i = \frac{1}{2}(0.17)(2)^2 = 0.34$ J
- Final: $K_f = \frac{1}{2}(0.34)(1)^2 = 0.17$ J
- Pérdida: $\Delta K = 0.34 - 0.17 = 0.17$ J (50% disipada)

**Interpretación**: En colisión inelástica, siempre hay pérdida de energía cinética—se convierte en deformación, calor, sonido. Momentum se conserva (es vectorial, más fundamental), pero NO energía cinética.

---

## Ejemplo 4: Lanzamiento de proyectil—energía en distintos puntos de trayectoria

**Enunciado**: Se lanza una pelota de $m = 0.5$ kg verticalmente hacia arriba con velocidad $v_0 = 20$ m/s. Calcular energía cinética en: (a) altura máxima, (b) mitad de altura máxima, (c) al volver al punto de lanzamiento.

**Resolución**:

1. Altura máxima: $h_{max} = v_0^2 / (2g) = 400 / 20 = 20$ m
   - En altura máxima, $v = 0$ → $K = 0$ J
   - Todo transformado en $U = mgh = 0.5 × 10 × 20 = 100$ J ✓

2. A mitad de altura ($h = 10$ m):
   - Usando $v^2 = v_0^2 - 2gh$: $v^2 = 400 - 200 = 200$ → $v \approx 14.14$ m/s
   - $K = \frac{1}{2}(0.5)(200) = 50$ J
   - $U = 0.5 × 10 × 10 = 50$ J
   - Total: $E = 50 + 50 = 100$ J = constante ✓ (conservación energía mecánica)

3. De vuelta al punto de lanzamiento:
   - Altura = 0, por tanto $U = 0$
   - Velocidad (por simetría) = $v_0 = 20$ m/s pero hacia abajo
   - $K = \frac{1}{2}(0.5)(400) = 100$ J
   - Total: $E = 100$ J = constante ✓

**Conclusión**: En ausencia de fricción, energía cinética + potencial permanece constante. La cantidad de cinética vs. potencial intercambia, pero total invariable.

---

## Ejemplo 5: Sistemas con fricción—disipación de energía cinética

**Enunciado**: Un bloque de $m = 5$ kg se desliza sobre un piso horizontal con velocidad inicial $v_0 = 10$ m/s. Coeficiente de fricción cinética: $\mu_k = 0.2$. ¿Cuánta distancia recorre antes de detenerse? ¿Cuál es la razón entre trabajo de rozamiento y energía cinética inicial?

**Resolución**:

1. Energía cinética inicial: $K_0 = \frac{1}{2}(5)(10)^2 = 250$ J

2. Fuerza normal: $N = mg = 5 × 10 = 50$ N

3. Fuerza de fricción: $f = \mu_k N = 0.2 × 50 = 10$ N

4. Por teorema trabajo-energía:
   $$W_{fricción} = \Delta K = K_f - K_0 = 0 - 250 = -250 \text{ J}$$

5. Distancia:
   $$f × d = 250 \Rightarrow d = 250 / 10 = 25 \text{ m}$$

6. Verificación mediante cinemática:
   - Aceleración: $a = -f/m = -10/5 = -2$ m/s²
   - Usando $v_f^2 = v_0^2 + 2ad$: $0 = 100 + 2(-2)d$ → $d = 25$ m ✓

**Implicación térmica**: Los 250 J de energía cinética se convierten enteramente en calor en la interfaz bloque-piso. Aumento de temperatura (asumiendo todo calor va al bloque): $\Delta T = Q / (mc) = 250 / (5 × 500) = 0.1$ °C (pequeño, pero detectable con sensores).

---

**Síntesis**: Los ejemplos abarcan desde cálculos directos, colisiones (comparación momentum vs. energía), movimiento conservativo (proyectil), a sistemas disipativos (fricción), demostrando universalidad de $K = \frac{1}{2}mv^2$ y teorema trabajo-energía.
