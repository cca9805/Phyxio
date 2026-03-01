# Aplicaciones

## 1. Diseño de sistemas de transporte y logística
**Contexto:** En almacenes y plantas industriales, cintas transportadoras movilizan cargas continuamente. Es crítico estimar la potencia del motor requerida.

**Criterio de decisión:**
- Carga unitaria: $m = 100\,\text{kg}$.
- Distancia horizontal: $L = 50\,\text{m}$.
- Ángulo de inclinación: $\alpha = 5°$.
- Velocidad constante: $v = 0.5\,\text{m/s}$ (sin aceleración, equilibrio de fuerzas).

**Cálculo:**
- Trabajo contra gravedad: $W_g = mg\sin\alpha \cdot L = 100 \times 10 \times \sin 5° \times 50 = 4340\,\text{J}$.
- Trabajo contra fricción (coef. $\mu = 0.3$): $W_f = \mu mg\cos\alpha \cdot L = 0.3 \times 100 \times 10 \times \cos 5° \times 50 = 14\,925\,\text{J}$.
- Trabajo total por carga: $W_{\text{total}} = 4340 + 14\,925 = 19\,265\,\text{J}$.

**Decisión de potencia:**
- Número de cargas en proceso simultáneo: $n = 6$ (espaciadas a lo largo de la cinta).
- Tiempo de ciclo por carga: $t = L/v = 50/0.5 = 100\,\text{s}$.
- Potencia media requerida: $P = \frac{n \times W_{\text{total}}}{t} = \frac{6 \times 19\,265}{100} = 1156\,\text{W} \approx 1.5\,\text{kW}$.

**Selección del motor:** Se elige motor de $2\,\text{kW}$ (factor de seguridad $\approx 1.7$) para permítir aceleración inicial e inercia.

---

## 2. Análisis de seguridad en frenado de vehículos
**Contexto:** En autopistas, los sistemas de frenado deben garantizar distancias de parada seguras bajo diferentes condiciones de velocidad inicial y superficie.

**Escenario 1: Conducción urbana (asfalto seco)**
- Velocidad inicial: $v_0 = 50\,\text{km/h} = 13.9\,\text{m/s}$.
- Coeficiente de fricción: $\mu_k \approx 0.8$ (asfalto seco, neumáticos estándar).
- Masa del vehículo: $M = 1500\,\text{kg}$.

Distancia de frenado:
$$d = \frac{v_0^2}{2\mu g} = \frac{(13.9)^2}{2 \times 0.8 \times 10} = 12.1\,\text{m}$$

Trabajo de fricción:
$$W_f = -\mu M g d = -0.8 \times 1500 \times 10 \times 12.1 = -145\,200\,\text{J}$$

**Escenario 2: Lluvia (asfalto mojado)**
- Coeficiente de fricción: $\mu_k \approx 0.5$ (asfalto mojado).

Distancia de frenado:
$$d = \frac{(13.9)^2}{2 \times 0.5 \times 10} = 19.3\,\text{m}$$

**Decisión normativa:** Los sistemas ABS (Anti-lock Braking System) maximizan la fricción manteniendo deslizamiento óptimo en $\approx 15-20\%$. En lluvia, la distancia aumenta $59\%$; esto justifica límites de velocidad reducidos en mal clima.

**Cálculo de energía disipada en frenos:**
En dos frenadas consecutivas desde $100\,\text{km/s}$ a $50\,\text{km/h}$:
- Energía a disipar: $\Delta E = \frac{1}{2}M(v_1^2 - v_2^2) = \frac{1}{2}(1500)[(27.8)^2 - (13.9)^2] = 435\,600\,\text{J}$.
- Disipación requerida: calentamiento de pastillas de freno hasta $\approx 200°C$, límite de frenada repetitiva.

---

## 3. Actuadores robóticos: cálculo de trabajo y energía para posicionamiento
**Contexto:** Un robot industrial (manipulador de 6 ejes) debe mover una herramienta de soldar de $m = 5\,\text{kg}$ desde reposo a posición elevada, aceleración controlada.

**Especificación de movimiento:**
- Altura vertical: $h = 0.8\,\text{m}$.
- Aceleración ascendente: $a = 2\,\text{m/s}^2$ (aceleración moderada para precisión).
- Fricción/amortiguamiento en juntas: fuerza equivalente $f = 10\,\text{N}$ (constante).

**Cálculo de fuerzas:**
- Tensión en cable/actuador: $T = m(g + a) + f = 5(10 + 2) + 10 = 70\,\text{N}$.
- Trabajo del actuador: $W_{\text{act}} = T \times h = 70 \times 0.8 = 56\,\text{J}$.
- Trabajo contra gravedad: $W_g = mgh = 5 \times 10 \times 0.8 = 40\,\text{J}$.
- Trabajo contra fricción: $W_f = f \times h = 10 \times 0.8 = 8\,\text{J}$.
- Energía cinética final: $\Delta KE = 56 - 40 - 8 = 8\,\text{J}$.

**Verificación:** $v_f = \sqrt{2ah} = \sqrt{2 \times 2 \times 0.8} = 1.79\,\text{m/s}$; $KE = \frac{1}{2}(5)(1.79)^2 = 8\,\text{J}$ ✓

**Selección de motor:**
- Tiempo de movimiento: $t = \sqrt{2h/a} = \sqrt{2 \times 0.8 / 2} = 0.894\,\text{s}$.
- Potencia media: $P = W_{\text{act}} / t = 56 / 0.894 = 62.6\,\text{W}$.
- Motor seleccionado: $100\,\text{W}$ (factor de seguridad $\approx 1.6$ por ciclos repetitivos).

---

## 4. Evaluación de eficiencia en máquinas y procesos repetitivos
**Contexto:** Una máquina de prensado industrial realiza ciclos repetitivos: baja un platen (cabezal móvil) $d = 0.3\,\text{m}$ contra una carga de $m = 20\,\text{kg}$ con fricción en los sistemas de guía.

**Análisis de energía por ciclo:**
1. Descenso bajo gravedad + carga:
   $$W_{\text{descenso}} = mgd = 20 \times 10 \times 0.3 = 60\,\text{J}$$

2. Fricción en guías (coeficiente $\mu = 0.2$, fuerza normal $N = mg$):
   $$W_{\text{fricción}} = \mu mg d = 0.2 \times 20 \times 10 \times 0.3 = 12\,\text{J}$$

3. Motor debe suministrar para levantar (trabajo contra gravedad + fricción):
   $$W_{\text{levantamiento}} = (mgd + \mu mgd) = 60 + 12 = 72\,\text{J}$$

**Eficiencia mecánica:**
$$\eta = \frac{\text{Trabajo útil (descenso)}}{\text{Trabajo suministrado (levantamiento)}} = \frac{60}{72} = 83.3\%$$

**Mejora de eficiencia:**
- Instalar rodamientos de baja fricción: reduce $\mu$ de $0.2$ a $0.05$.
  $$W_{\text{fricción, mejorado}} = 0.05 \times 60 = 3\,\text{J}$$
  $$\eta_{\text{mejorada}} = \frac{60}{63} = 95.2\%$$
- Beneficio: Reducción de consumo energético en $13\%$ por ciclo.

**Decisión de inversión:** Si la máquina realiza $n = 1000$ ciclos/turno en empresa con $3$ turnos/día, el ahorro anual de energía considerando $0.15\,\text{€}/\text{kWh}$:
$$\text{Ahorro} = 3 \times 1000 \times (72 - 63) \times 10^{-3} \times 250 \times 0.15 = 101\,\text{€/año}$$

La inversión en rodamientos se recupera en menos de un año.

---

## 5. Energética de deportes y entrenamiento (estimación teórica)
**Contexto:** Un saltador de altura debe elevarse $h = 2.1\,\text{m}$ (récord mundial). Estimar el trabajo muscular requerido en la fase de impulso.

**Modelo simplificado:**
- Masa del atleta: $m = 80\,\text{kg}$.
- Recorrido de impulso (flexión de piernas): $d = 0.5\,\text{m}$.
- Aceleración media durante impulso: $a = 1.5g = 15\,\text{m/s}^2$.

**Cálculo:**
- Fuerza muscular promedio: $F = m(g + a) = 80(10 + 15) = 2000\,\text{N}$.
- Trabajo muscular: $W = Fd = 2000 \times 0.5 = 1000\,\text{J}$.
- Velocidad de despegue: $v_0 = \sqrt{2ad} = \sqrt{2 \times 15 \times 0.5} = \sqrt{15} = 3.87\,\text{m/s}$.
- Altura alcanzada: $h = v_0^2 / (2g) = 15 / 20 = 0.75\,\text{m}$.

**Análisis:** El valor teórico ($0.75\,\text{m}$) es menor al récord mundial ($2.1\,\text{m}$) porque:
- En realidad, el atleta extiende completamente las piernas, aumentando $d$.
- La técnica de impulso multi-fase (brazos + rotación de tronco) suma trabajo adicional.
- Elasticidad muscular y tendones aportan energía almacenada.
- Este ejercicio ilustra la diferencia entre modelo simplificado y sistema biológico complejo.
