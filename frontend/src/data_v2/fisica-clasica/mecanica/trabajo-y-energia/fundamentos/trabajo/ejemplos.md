# Ejemplos

## Ejemplo 1: Arrastrar caja a ángulo variable (cálculo de trabajo a partir de vectores)

**Contexto:** En un almacén, necesitas arrastrar una caja de $m = 20\,\text{kg}$ sobre suelo horizontal una distancia de $8\,\text{m}$. La cuerda forma un ángulo de $\theta = 30°$ con la horizontal, y aplicas una tensión constante de $F = 60\,\text{N}$. Se desprecian fricción y resistencia del aire.

**Paso 1: Identificar fuerzas que realizan trabajo**
- Tensión $\vec F$ (ángulo $30°$) → realiza trabajo positivo parcial.
- Peso $m\vec g$ (vertical → desplazamiento horizontal) → perp., trabajo nulo.
- Normal $\vec N$ (vertical) → trabajo nulo.
- No hay fricción.

**Paso 2: Aplicar fórmula de trabajo escalar**
$$W_{\text{tensión}} = F \cdot d \cdot \cos\theta = 60 \times 8 \times \cos 30° = 480 \times 0.866 = 415.7\,\text{J}$$

**Paso 3: Interpretar el resultado**
El trabajo positivo ($415.7\,\text{J}$) indica que la tensión aumenta la energía cinética de la caja. Solo la componente horizontal $F_x = 60\cos 30° = 51.96\,\text{N}$ contribuye al trabajo; el componente vertical levanta ligeramente la caja pero se cancela con la reducción de normal.

**Paso 4: Verificación mediante teorema trabajo-energía**
Si la caja parte del reposo, su velocidad final es:
$$W_{\text{neto}} = \Delta KE \Rightarrow 415.7 = \frac{1}{2}(20)v_f^2$$
$$v_f = \sqrt{\frac{2 \times 415.7}{20}} = 6.45\,\text{m/s}$$

Verificación cinemática: $a = \frac{F_x}{m} = \frac{51.96}{20} = 2.598\,\text{m/s}^2$; $v_f = \sqrt{2ad} = \sqrt{2 \times 2.598 \times 8} = 6.45\,\text{m/s}$ ✓

---

## Ejemplo 2: Frenado por rozamiento (trabajo negativo y disipación de energía)

**Contexto:** Un auto de $m = 1000\,\text{kg}$ viaja a $v_0 = 20\,\text{m/s}$ y frena totalmente en una distancia de $d = 50\,\text{m}$ sobre pavimento horizontal. ¿Cuál es el trabajo realizado por fricción? ¿Cuál es la fuerza de rozamiento promedio?

**Paso 1: Identificar cambio de energía cinética**
$$\Delta KE = \frac{1}{2}m(v_f^2 - v_0^2) = \frac{1}{2}(1000)(0 - 400) = -200\,000\,\text{J}$$

**Paso 2: Aplicar teorema trabajo-energía**
Por el teorema trabajo-energía:
$$W_{\text{fricción}} = \Delta KE = -200\,000\,\text{J}$$

**Paso 3: Calcular fuerza de fricción equivalente**
$$W_f = F_f \cdot d \cdot \cos 180° = -F_f \cdot d$$
$$-200\,000 = -F_f \times 50 \Rightarrow F_f = 4000\,\text{N}$$

**Paso 4: Interpretar y validar**
- El trabajo negativo indica que la fricción disipa energía cinética.
- La fuerza de fricción $F_f = 4000\,\text{N}$ es consistente con $\mu_k = F_f / (mg) = 4000/9800 = 0.408$, un coeficiente realista para pavimento seco.
- Toda la energía cinética inicial se convierte en calor en el contacto llanta-asfalto.

**Verificación mediante cinemática:** $v_f^2 = v_0^2 - 2a d \Rightarrow 0 = 400 - 2a(50) \Rightarrow a = 4\,\text{m/s}^2 = F_f/m = 4000/1000$ ✓

---

## Ejemplo 3: Múltiples fuerzas y trabajo neto (ascensor con aceleración)

**Contexto:** Un ascensor con cabina de $m_{\text{cabina}} = 800\,\text{kg}$ eleva a $n = 5$ personas (promedio $70\,\text{kg}$ cada una) una altura de $h = 15\,\text{m}$ con aceleración constante $a = 0.5\,\text{m/s}^2$ hacia arriba. Calcula el trabajo de cada fuerza y el trabajo neto.

**Datos:**
$$m_{\text{total}} = 800 + 5 \times 70 = 1150\,\text{kg}$$
$$g = 10\,\text{m/s}^2$$

**Paso 1: Fuerzas que actúan**
- Tensión del cable $\vec T$ (hacia arriba, paralela al desplazamiento).
- Peso total $\vec W = m_{\text{total}}g$ (hacia abajo, opuesto al desplazamiento).

**Paso 2: Aplicar segunda ley de Newton**
$$T - W = m a$$
$$T = m(g + a) = 1150(10 + 0.5) = 12\,075\,\text{N}$$

**Paso 3: Calcular trabajos individuales**
$$W_T = T \cdot h = 12\,075 \times 15 = 181\,125\,\text{J}$$
$$W_W = (-m g) \cdot h \cdot \cos 180° = -1150 \times 10 \times 15 = -172\,500\,\text{J}$$

**Paso 4: Trabajo neto**
$$W_{\text{neto}} = W_T + W_W = 181\,125 - 172\,500 = 8625\,\text{J}$$

**Paso 5: Verificación mediante teorema trabajo-energía**
La velocidad final después de $h = 15\,\text{m}$ con aceleración constante $a = 0.5\,\text{m/s}^2$:
$$v_f^2 = 2ah = 2(0.5)(15) = 15 \Rightarrow v_f = \sqrt{15} = 3.87\,\text{m/s}$$
$$\Delta KE = \frac{1}{2}(1150)(15 - 0) = 8625\,\text{J}$$ ✓

**Interpretación física:** El trabajo neto es positivo, aumentando la energía cinética. La tensión realiza más trabajo que el peso, la diferencia acelera el sistema. En un ascensor real, el motor (cable) suministra esta energía adicional.

---

## Ejemplo 4: Trabajo cero bajo condiciones especiales (soporte de cuerpo estático)

**Contexto:** Un atleta sostiene una mancuerna de $m = 10\,\text{kg}$ en posición estática durante $t = 30\,\text{s}$. Aunque aplica una fuerza igual al peso ($F = 100\,\text{N}$), no realiza desplazamiento macroscópico.

$$W = F \cdot d \cdot \cos 0° = 100 \times 0 \times 1 = 0\,\text{J}$$

**Interpretación** (físicamente sutil):
- El trabajo mecánico es cero porque no hay desplazamiento.
- Sin embargo, el atleta gasta **energía metabólica** (fatiga muscular, consumo calórico) para mantener la contracción muscular contra la gravedad.
- Esta energía se disipa como calor en los tejidos musculares, **no como trabajo mecánico**.
- Demostración: después de 30 segundos sin movimiento, la mancuerna tiene la misma energía cinética ($KE = 0$) y potencial que al inicio → $\Delta E_{\text{mecánica}} = 0$.
