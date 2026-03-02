# Aplicaciones técnicas

## Aplicación 1: Diseño de sistemas de frenado automotriz (ABS y análisis de distancia segura)

**Contexto**: La distancia de frenado es crítica en seguridad vial. Depende directamente del coeficiente de fricción entre neumático y asfalto, que varía con tipo de pavimento, condiciones (seco/mojado/hielo), goma y envejecimiento de pastillas.

**Formulación de diseño**:  
- Distancia de frenado desde velocidad $v_0$: $$d = \frac{v_0^2}{2a} = \frac{v_0^2}{2\mu g}$$
- Para $v_0 = 100\,\text{km/h} = 27.8\,\text{m/s}$ y $\mu = 0.75$ (asfalto seco, compuesto moderno):
  $$d = \frac{(27.8)^2}{2 \times 0.75 \times 9.8} = 52.3\,\text{m}$$

**Variabilidad según condiciones**:

| **Condición** | **$\mu$ típico** | **Distancia (m)** | **Factor vs. seco** |
|---|---|---|---|
| Asfalto seco, goma nueva | 0.75–0.85 | 52–46 | 1.0× |
| Asfalto mojado | 0.50–0.60 | 78–65 | 1.5–1.7× |
| Pavimento mojado + desgaste | 0.35–0.45 | 111–88 | 2.1–2.4× |
| Hielo/nieve compactada | 0.15–0.25 | 260–155 | 5–10× |

**Estrategia técnica de mitigación**:
1. **ABS (Anti-lock Braking System)**: Previene bloqueo de ruedas manteniendo $\mu$ cerca del óptimo (evita deslizamiento total $\mu_k < \mu_s$).
2. **Control de tracción diferencial**: Asigna frenado variable por rueda para maximizar $\mu$ efectivo en curva.
3. **Compuesto de pastilla dinámico**: Varía composición químico-coloidal vs. temperatura para mantener $\mu > 0.6$ incluso a 200°C de rotor.

**Parámetro de diseño crítico **: $\mu_{mín, garantizado} = 0.45$ (norma FMVSS 135) garantiza distancia respetable incluso en condiciones de lluvia; especificaciones americanas/europeas requieren testing en dinamómetro de laboratorio bajo lluvia simulada en 10+ pavimentos variados.

---

## Aplicación 2: Ingeniería de neumáticos—optimización de agarre y comportamiento transversal

**Contexto**: Un neumático no es una goma lisa; la superficie microscópica tiene miles de micro-ranuras (sipes) y macroestructura (tacos) que aumentan el coeficiente de fricción efectivo y facilitan drenaje de agua en mojado.

**Mecanismo físico**: El coeficiente $\mu$ en neumático surge de dos contribuciones:
1. **Histéresis de sílice-caucho**: Deformación elástica cíclica en contacto disipa energía (60–70% del $\mu$).
2. **Adhesión molecular**: Fuerzas Van der Waals entre polímero y aspereza de pavimento (30–40% del $\mu$).

**Fórmula empírica (modelo Papadimitriou)**:
$$\mu_{eff} = \mu_0 \left( \frac{1}{1 + \alpha f_{\text{speed}}} \right)^{\beta} \times \text{(factor de textura)}$$

donde $f_{\text{speed}}$ es frecuencia de oscilación, $\alpha, \beta$ son calibrados experimentalmente; factor de textura captura diseño de tacos.

**Optimización de diseño**:

| **Parámetro** | **Rango** | **Efecto en $\mu$** | **Trade-off** |
|---|---|---|---|
| Densidad de sipes (canales/cm²) | 5–15 | Aumenta histéresis; ↑ $\mu$ en mojado | ↑ Ruido (dB) |
| Altura de taco original | 8–10 mm | Mayor contacto; ↑ $\mu$ inicial | ↓ Vida útil (km) |
| Rigidez compuesto (shore A) | 60–75 | Más histéresis; ↑ $\mu$ | ↓ Economía combustible (RR) |
| Profundidad de drenaje (surcos) | 5–8 mm | Mejor evacuación agua | ↓ Rigidez lateral |

**Ejemplo de cálculo—frenada en mojado (test homologación)**:
- Vehículo: 1500 kg
- Velocidad: 100 km/h ≈ 27.8 m/s
- Pavimento mojado ISO: $\mu_{\text{ref}} = 0.58$ (neumático estándar)
- Neumático premium (optimizado): $\mu = 0.68$ (+17%)
- Distancia seco (con ABS, $\mu = 0.80$): $d_1 = 48$ m
- Distancia mojado (estándar): $d_2 = \frac{27.8^2}{2 \times 0.58 \times 9.8} = 67$ m (+40% vs. seco)
- Distancia mojado (premium): $d_3 = \frac{27.8^2}{2 \times 0.68 \times 9.8} = 57$ m (−15% vs. estándar)

**Implicación regulatoria**: Diferencia de 10 m en frenada mojada significa diferencia entre colisión y salvación. Norma EU 440/2018 requiere $\mu_{\text{mojado}} > 0.65$ para neumáticos de etiqueta A, justificando investigación tribológica intensiva.

---

## Aplicación 3: Control térmico en máquinas rotatorias—cojinetes industriales con lubricación

**Contexto**: En compresores, bombas y turbomáquinas, el rozamiento en cojinetes puede generar calor excesivo, degradar lubricante y causar falla catastrófica. Diseño de cojinetes implica optimización de $\mu$ y sistema de refrigeración.

**Disipación de potencia en cojinete**:
$$P = \tau \omega = \mu N r \omega = \mu N r \times \frac{2\pi n}{60}$$

donde $n$ está en rpm. Para cojinete de bolas bajo carga radial $N = 5000\,\text{N}$, $r = 0.015\,\text{m}$, $n = 3000\,\text{rpm}$, $\mu_{eff} = 0.001$ (lubricado):
$$P = 0.001 \times 5000 \times 0.015 \times \frac{2\pi \times 3000}{60} = 47.1\,\text{W}$$

**Gestión térmica—estrategias de refrigeración**:

1. **Convección natural**: Carcasa expuesta al aire ambiente. Coeficiente $h \approx 5–10\,\text{W/(m}^2·\text{K)}$ (muy bajo para 50 W). → Temperatura sube a +80–100°C, riesgo de degradación lubricante.

2. **Convección forzada (ventilador)**: $h \approx 50–100\,\text{W/(m}^2·\text{K)}$ con radiador integral. → Mantiene 40–60°C. Costo: +\$500, energía ventilador +2 kW.

3. **Tubería con refrigerante (aceite circulante)**: Torre de enfriamiento dedicada. → Temperatura <40°C siempre. Cost: +\$5000. Usado en turbinas de gas, compresores centrífugos de alta confiabilidad.

**Criterio de selección**:
- **Pequeña máquina** ($P < 10\,\text{kW}$): Convección natural suficiente si espacio permite.
- **Máquina industrial estándar** ($10 < P < 100\,\text{kW}$): Ventilador + radiador (mejor costo-beneficio).
- **Turbomáquina crítica** ($P > 500\,\text{kW}$): Circuito de refrigeración activo obligatorio (downtime = pérdidas económicas $>$ inversión).

**Fórmula de diseño de radiador**:
$$A = \frac{P}{h \Delta T}$$

Para $P = 50\,\text{W}$, $h = 75\,\text{W/(m}^2·\text{K)}$, $\Delta T = 20\,\text{K}$ (objetivo $T_{cojinete} = T_{amb} + 20\,\text{K}$):
$$A = \frac{50}{75 \times 20} = 0.033\,\text{m}^2 = 330\,\text{cm}^2$$

(radiador de aluminio extruido de $20 \times 15\,\text{cm}$, altura 10 cm).

---

## Aplicación 4: Frenado de emergencia y disipadores sísmicos en ingeniería civil

**Contexto**: En edificios altos y puentes, durante un sismo o viento extremo, oscilaciones pueden causar resonancia. Disipadores de energía de fricción absorben oscilaciones convirtiendo energía en calor fricción, protegiendo estructura.

**Disipador de fricción tipo pernos deslizantes**:
- Placa de acero desliza sobre otra bajo carga perpendicular $N$ controlada.
- Diseño: $N$ se ajusta mediante pernos pretencionados a torque preciso.
- Coeficiente $\mu ≈ 0.45–0.55$ (acero-acero lubricado).
- Recorrido de deslizamiento: $d = \pm 50\,\text{mm}$ (amplitud de movimiento controlada).

**Cálculo de energía disipada en ciclo completo de sismo**:

Supongamos edificio de 100 m de altura oscila lateralmente. Si aceleración pico del suelo es $a_g = 0.3 g$ y período natural es $T = 2\,\text{s}$:

- Amplitud pico estimada (aprox. lineal): $x_{max} ≈ 0.5$ m
- En ciclo completo de sismo (30 segundos ≈ 15 ciclos), recorrido total: $d_{total} = 15 \times 4 \times 0.5 = 30\,\text{m}$
- Fuerza de disipación en pernos: $F = \mu N = 0.5 \times 2 \times 10^6 = 10^6\,\text{N}$ (para 2000 pernos de 500 N c.u.)
- Energía disipada: $E = F \times d = 10^6 \times 30 = 3 \times 10^7\,\text{J} = 30\,\text{MJ}$

**Beneficio**: Sin disipador, esa energía se transmitiría a conexiones estructurales (riesgo de fractura). Con disipador, se convierte en calor localizado en pernos (suficiente para subir temperatura ~20°C, controlable con ventilación).

**Norma de diseño (Eurocode 8)**: Disipadores deben absorber ≥50% de energía cinética máxima de sismo de 500 años de período de retorno.

---

## Aplicación 5: Regeneración de energía en frenado—sistemas de frenado por fricción vs. regenerativo

**Contexto**: En vehículos híbridos y eléctricos, el frenado tradicional por rozamiento desperdicia energía cinética. Sistemas regenerativos capturan parte de esa energía en batería. Comparación:

**Esquema de energía—frenada desde 100 km/h hasta parada**:

1. **Auto tradicional (gasolina)**: 
   - Energía cinética $E_k = 167\,\text{kJ}$ (vehículo 1000 kg)
   - 100% disipada en pastillas como calor y desgaste
   - Pérdida irreversible: 167 kJ

2. **Auto eléctrico con motor asincrónico (regenerativo)**:
   - Frenado eléctrico principal (no-contact, no hay $\mu$): recupera ≈70–80% $→$ batería
   - Frenado fricción residual (friccionar mecánica pura): disipa ≈20–30% restante
   - Recuperación útil: ~ 120 kJ en batería de 167 kJ

**Fórmula de economía de combustible equivalente**:
$$\text{Economía anual} = \frac{E_k \times \text{ciclos/año} \times \text{factor recuperación}}{\text{eficiencia motor eléctrico} \times \text{coste/kWh}}$$

Para vehículo urbano (ciclo parada-partida frecuente, 50 paradas/día, 250 días laborales):
$$\text{Ciclos/año} = 50 \times 250 = 12,500$$
$$\text{Energía recuperable} = 0.75 \times 167\,\text{kJ} \times 12,500 = 156\,\text{GJ} = 43,300\,\text{kWh}$$
$$\text{Coste combustible equivalente (gasolina \$1.50/L, 30 MJ/L)} = \frac{156 \times 10^9}{30 \times 10^6} \times 1.50 = \$7800 \text{ /año}$$

**Implicación técnica**: Frenado regenerativo recupera ~\$8k/año en vehículo urbano de uso intenso. Por tanto, la inversión en sistemas regenerativos (\$3000–5000 sobre coste base) se amortiza en <1 año. Explicación de por qué fabricantes (Tesla, BMW i3) priorizan regeneración en diseño.

**Limitación**: La fricción mecánica residual sigue siendo necesaria (parqueo, frenada de emergencia). Coeficiente de contacto $\mu$ en discos debe ser suficiente: $\mu > 0.35$ incluso sin energizar. Esto requiere materiales especiales (carburo de silicio, cerámica) para mantener $\mu$ constante durante vida útil (100,000+ ciclos).

---

## Integración: Curva de vida útil industrial (bathtub curve aplicada a fricción)

La tasa de fallo en sistemas friccionantes sigue la famosa **bathtub curve**:

- **Fase 1 (infancia, primeros 1000 km)**: Defectos de manufactura, $\mu$ inestable.
- **Fase 2 (vida útil, 10,000–100,000 km)**: $\mu$ constante, falla aleatoria rara.
- **Fase 3 (vejez, >100,000 km)**: Desgaste acumulativo, $\mu$ cae, falla segura (deterioro predecible).

Estrategia de mantenimiento: Reemplazo preventivo al inicio de Fase 3 (p.ej., 80,000 km) cuesta \$200 en pastillas, pero previene falla catastrófica que costaría \$5000+ en reparación + tiempo parada.