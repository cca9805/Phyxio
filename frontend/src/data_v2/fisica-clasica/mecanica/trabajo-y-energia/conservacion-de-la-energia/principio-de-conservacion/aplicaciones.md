# Aplicaciones

## 1. Diseño de parques acuáticos y toboganes seguros
**Contexto:** En un parque acuático, un tobogán desciende desde altura $h = 12\,\text{m}$ hasta una piscina. La dirección de la junta es sinuosa (no recta). ¿Qué velocidad máxima alcanza el usuario al llegar abajo?

**Cálculo sin conservación (difícil):** Integrar fuerzas variables sobre trayectoria curva con roce.

**Cálculo con conservación (simple):**
$$mgh = \frac{1}{2}mv_{\max}^2 + W_{\text{fricción}}$$
$$v_{\max} = \sqrt{2g(h - h_{\text{pérdida}})} = \sqrt{2 \times 10 \times (12 - 1.5)} = \sqrt{210} = 14.5\,\text{m/s}$$

**Decisión de seguridad:** $14.5\,\text{m/s} \approx 52\,\text{km/h}$. Se instala piscina amortiguadora o reducción de altura para limitar velocidad máxima a $\approx 8\,\text{m/s}$ (seguro).

## 2. Dimensionado de embalses hidroeléctricos
**Contexto:** Una presa retiene agua a altura $H = 80\,\text{m}$. Un turbogenerador extrae agua continuamente: caudal $Q = 2\,\text{m}^3/\text{s}$. ¿Cuánta potencia se genera?

**Energía por unidad volumen:** $e = gH = 10 \times 80 = 800\,\text{J/m}^3$.

**Potencia teórica:** $P_\text{teórico} = \rho Q e = 1000 \times 2 \times 800 = 1.6\,\text{MW}$.

**Potencia real (con rendimiento 92%):** $P_\text{real} = 1.6 \times 0.92 = 1.47\,\text{MW}$.

**Decisión económica:** Invertir en turbina de eficiencia 92% vs 85% = diferencia $+1.05\,\text{MW}$. Beneficio anual (a $0.08\,\text{€/kWh}$) = $1.05 \times 1000 \times 24 \times 365 \times 0.08 = 735\,\text{k€}$. ROI de turbina mejorada: $< 1$ año.

## 3. Diseño de sistemas de frenado en teleféricos
**Contexto:** Teleférico de montaña con cabina de $m = 2\,\text{toneladas}$, funcionando en descenso continuo. En caso de emergencia (corte de cable), ¿cuál es la velocidad terminal de seguridad?

**Velocidad operativa normal:** $v_\text{op} = 2\,\text{m/s}$.

**En emergencia:** La cabina desciende en caída libre amortiguada por roce aerodinámico + fricción de carril de seguridad.

**Balance energético:** La energía potencial se disipa completamente en fricción:
$$mgh = W_\text{fricción} = f \times d$$

**Criterio de seguridad:** Fricciones se calibran para que velocidad terminal nunca supere $v_\text{max} = 5\,\text{m/s}$ (tolerable para parada controlada).

**Especificación de frenos:** Sistema de zapatas con coeficiente $\mu = 0.8$ debe generar fuerza $F = \mu mg = 0.8 \times 20\,000 = 16\,\text{kN}$ (verificada por pruebas de fatiga).

## 4. Optimización de rutas de transporte y logística
**Contexto:** Red de distribución con centros de almacenamiento en altitudes variables. Centro A: altura $300\,\text{m}$; Centro B (valle): $50\,\text{m}$; Centro C (montaña): $800\,\text{m}$.

**Costo energético de transporte camión de $10\,\text{toneladas}$:**

**Ruta A→B (descenso):** Energía recuperable en frenado regenerativo o utilizada para tracción; beneficio.

**Ruta A→C (ascenso):** Energía requerida = $mg\Delta h = 100\,000 \times 10 \times 500 = 50\,\text{MJ} = 13.9\,\text{kWh}$. Consumo de combustible (motor 35% eficiente) = $13.9 / 0.35 = 39.7\,\text{kWh}$ equivalentes. Costo (diésel $1.50\,\text{€/L}$) = $4.5\,\text{L} \times 1.50 = 6.75\,\text{€}$.

**Decisión logística:** Si entregas en C → viajar directo. Si entregas en B primero luego C: descenso A→B es «gratis» en energía (inercia + frenado controlado). Ruta A→B→C puede optimizarse.

## 5. Caracterización de capacidad de almacenamiento en baterías vs volantes de inercia
**Contexto:** Sistema de almacenamiento de energía de una instalación solar. Comparar dos tecnologías:

**Opción 1: Batería de Li-ion ($100\,\text{kWh}$)**
- Costo: $10\,000\,\text{€}$.
- Ciclos útiles: $5000$ (vida $\approx 10$ años).
- Eficiencia: $92\%$.
- Costo por ciclo: $10\,000 / 5000 = 2\,\text{€}/\text{ciclo}$.

**Opción 2: Volante de inercia (rueda masiva, $10\,\text{toneladas}$, $r = 1\,\text{m}$)**
- Energía almacenada: $E = \frac{1}{2}I\omega_\max^2$, donde $\omega_\max$ limitado por esfuerzos de tensión en acero ($\sigma_\max \approx 200\,\text{MPa}$).
- Capacidad típica: $20-50\,\text{kWh}$ (menor que batería de mismo peso).
- Ciclos útiles virtualmente ilimitados ($10^6+$).
- Eficiencia: $95\%$ (fricción mínima en rodamientos magnéticos).
- Costo por ciclo: $5\,000 / 10^6 = 0.005\,\text{€}/\text{ciclo}$ (mucho menor a largo plazo).

**Decisión según aplicación:**
- **Corto plazo, ciclos frecuentes:** Volante de inercia (menor costo operativo).
- **Largo plazo, almacenamiento lento:** Batería de Li-ion (mayor energía específica).
- **Híbrida óptima:** Volante para picos diarios + batería para reserva semanal.
