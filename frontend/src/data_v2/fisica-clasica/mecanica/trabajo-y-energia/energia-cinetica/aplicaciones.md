# Aplicaciones técnicas

## 1. Seguridad vial—análisis de colisiones y sistemas de protección

**Contexto**: La energía cinética de un vehículo determina sevedad de colisión, eficacia de sistemas de protección, y diseño de barreras de seguridad.

**Cálculo de energía en colisiones**:
- Auto de 1200 kg a 30 km/h (8.33 m/s): $K = 0.5 × 1200 × (8.33)^2 = 41.6$ kJ
- Auto a 50 km/h (13.89 m/s): $K = 0.5 × 1200 × (13.89)^2 = 115.7$ kJ (2.78× mayor)
- Auto a 100 km/h (27.78 m/s): $K = 0.5 × 1200 × (27.78)^2 = 462.8$ kJ (11.1× mayor que 30 km/h)

**Implicación de seguridad**:
- Airbags diseñados para límite de energía específico; a velocidades superiores, eficacia se reduce dramáticamente
- Distancia de parada es proporcional a $E \propto v^2$; pequeños aumentos de velocidad requieren distancias mucho mayores
- Norma NHTSA: protección contra impacto frontal a 56 km/h (35 mph); a 70 km/h, mortalidad sube ~85%

**Decisión técnica**: Material de absorción (espuma, acero deformable) de vehículo debe disipar energía lentamente ($F·d = E$) para mantener desaceleración bajo límite tolerable por cuerpo humano (~15g por 100 ms).

---

## 2. Diseño de frenado y sistemas de parada—energía disipada en frenos

**Contexto**: Frenos convierten energía cinética en calor mediante fricción. Dimensionamiento requiere cálculo exacto de $K$ a disipar.

**Cálculo de carga térmica en freno de emergencia**:
- Camión de 20 toneladas a 60 km/h (16.67 m/s)
- $K = 0.5 × 20,000 × (16.67)^2 = 2.78$ MJ

**Sistema de frenado seleccionado**:
- Freno hidráulico + ABS + freno motor (retarder eléctrico)
- Distribución: 40% hidráulico, 60% motor/accesorios
- Energía a disipar hidráulicamente: 1.1 MJ
- Distancia de parada: 150 m (a desaceleración moderada 0.5g)
- Potencia media: $P = E/t = 1.1 × 10^6 / 30 = 36.7$ kW

**Temperatura de pastillas**:
- Capacidad térmica: $Q = mc\Delta T$
- Masa de pastillas: 20 kg, $c = 700$ J/(kg·K) acero
- $\Delta T = 1.1 × 10^6 / (20 × 700) = 78.5$ K (sube ~80°C)

**Decisión técnica**: Pastar deben mantener $\mu > 0.4$ incluso a 150°C. Especificación: compuesto de fibra moderno resistente a sinterización.

---

## 3. Eficiencia de máquinas y transferencia de potencia

**Contexto**: Máquinas industriales transfieren energía cinética de entrada (motor) a salida (trabajo útil). Pérdidas se cuantifican como energía disipada.

**Ejemplo: Bomba centrífuga**
- Entrada: motor eléctrico 50 kW entrega fluido rotante energía cinética
- Energía cinética del fluido: $K = \frac{1}{2}m v^2$ donde $m$ es caudal másico (ej., 10 kg/s) y $v$ es velocidad tangencial
- A 15 m/s: $K = 0.5 × 10 × (15)^2 = 1125$ W = 1.125 kW
- Eficiencia: $\eta = 1.125 / 50,000 = 0.002≆ 2.2\%$ (el resto va a elevación de presión, fricción)

**Aplicación de control**: Variador de frecuencia (VFD) modula velocidad motor; $K \propto v^2$ significa reduir 10% velocidad reduce energía consumida ~19%. Ahorro en 5000 h/año operación: ~200 MWh.

---

## 4. Deportes y análisis biomecánico

**Contexto**: En deportes, energía cinética corporal determina rendimiento y riesgo de lesión.

**Ejemplo: Patada en fútbol**
- Masa de pierna: $m \approx 7$ kg (de cadera a punta de pie)
- Velocidad de ejecución: $v \approx 10$ m/s (típico tiro fuerte a puerta)
- Energía cinética: $K \approx 0.5 × 7 × (10)^2 = 350$ J
- Esta energía se transfiere al balón (0.45 kg) en contacto ~0.01 s
- Aceleración de balón: $a = \Delta v / \Delta t$; con $K_{balón} = 350$ J: $v_{balón} = \sqrt{2K/m} = \sqrt{1556} ≈ 39$ m/s (140 km/h)

**Aplicación de prevención**: En deportes de contacto, limitación de velocidades previene lesiones. Espinilleras absorben colisión distribuyendo $K$ sobre distancia mayor, reduciendo pico de fuerza. Teste: impacto a 10 m/s vs. 5 m/s = 4× menos energía = ~16× menos riesgo de fractura (ley elástica de hueso).

---

## 5. Energías renovables—conversión cinética de viento y agua

**Contexto**: Turbinas eólicas y hidroeléctricas convierten energía cinética de fluido (aire, agua) en electricidad.

**Cálculo de potencia en turbina eólica**:
- Viento: velocidad $v = 10$ m/s, densidad aire $\rho = 1.2$ kg/m³
- Rotor: diámetro $D = 80$ m, área barrida $A = \pi(40)^2 = 5027$ m²
- Flujo másico: $\dot{m} = \rho A v = 1.2 × 5027 × 10 = 60,324$ kg/s
- Energía cinética por segundo (potencia): $P = K/t = (1/2)\dot{m}v^2 \approx 3.6$ MW
- Eficiencia Betz teórica: máximo ~59% (en práctica ~35%)
- Potencia extraída realista: $P = 0.35 × 3.6 = 1.26$ MW

**Aplicación de decisión técnica**: 
- Turbinas modernas diseñadas para máximo rendimiento entre 10–15 m/s (velocidad nominal)
- Sobre/bajo este rango, controladores ajustan ángulo de pala para mantener extracción óptima
- $K \propto v^3$ (combinación flujo másico + velocidad) → pequeña variación de viento causa enormes cambios de potencia
- Conversión a electricidad requiere estabilización via baterías o red eléctrica conectada

---

## Síntesis Integrada

Energía cinética es piedra angular de:
- **Seguridad**: Cálculos de colisión, frenado, protección
- **Eficiencia energética**: Máquinas, transportes, renovables
- **Biomecánica**: Deportes, medicina, prevención de lesiones
- **Tecnología vial**: Diseño de autos, vías, señalización

Su naturaleza cuadrática con velocidad ($K \propto v^2$) es fuente de múltiples efectos no-lineales críticos en aplicaciones del mundo real.
