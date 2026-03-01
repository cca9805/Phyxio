# Aplicaciones

## 1. Dimensionado de motores eléctricos para máquinas industriales
**Contexto:** En una planta de manufactura, necesitas seleccionar un motor eléctrico para accionar una bomba centrífuga que extrae agua de un pozo y la distribuye a tanques a $15\,\text{m}$ altura.

**Especificaciones:**
- Caudal requerido: $Q = 50\,\text{L/min} = 0.833\,\text{L/s} = 0.833 \times 10^{-3}\,\text{m}^3/\text{s}$.
- Altura de elevación: $h = 15\,\text{m}$.
- Densidad del agua: $\rho = 1000\,\text{kg/m}^3$.
- Presión de descarga aplicada: $\Delta P = 2\,\text{bar} = 200\,\text{kPa}$ (para vencer resistencia de tuberías).

**Cálculo de potencia teórica (potencia hidráulica):**
- Masa por segundo: $\dot{m} = \rho Q = 1000 \times 0.833 \times 10^{-3} = 0.833\,\text{kg/s}$.
- Potencia gravitatoria: $P_g = \dot{m} g h = 0.833 \times 10 \times 15 = 125\,\text{W}$.
- Potencia de presión: $P_{\Delta P} = \Delta P \times Q = 200 \times 10^3 \times 0.833 \times 10^{-3} = 166.6\,\text{W}$.
- Potencia hidráulica total: $P_{\text{hidr}} = 125 + 166.6 = 291.6\,\text{W}$.

**Cálculo de potencia eléctrica requerida:**
- Rendimiento típico de las bombas centrífugas: $\eta_{\text{bomba}} = 0.80$ (80%).
- Rendimiento del motor eléctrico: $\eta_{\text{motor}} = 0.90$ (90%).
- Rendimiento total: $\eta_{\text{total}} = 0.80 \times 0.90 = 0.72$.
- Potencia eléctrica requerida: $P_{\text{eléc}} = P_{\text{hidr}} / \eta_{\text{total}} = 291.6 / 0.72 = 405\,\text{W}$.

**Selección del motor:**
- Stock disponible: motores de $0.5\,\text{kW} (500\,\text{W})$, $0.75\,\text{kW}$, $1\,\text{kW}$.
- **Decisión:** Seleccionar motor de $0.5\,\text{kW}$ (factor de seguridad $= 500 / 405 = 1.23$).
- **Justificación:** El factor $1.2-1.3$ protege contra variaciones de presión de descarga y envejecimiento de equipos; es estándar en ingeniería.

**Validación económica:**
- Consumo anual: $0.5\,\text{kW} \times 8\,\text{h/día} \times 250\,\text{días} = 1000\,\text{kWh}$.
- Costo eléctrico anual (a $0.12\,\text{€}/\text{kWh}$): $1000 \times 0.12 = 120\,\text{€}/\text{año}$.
- Costo de motor: $\approx 150-200\,\text{€}$.
- ROI (tiempo de recuperación): $(150-200) / 120 \approx 1.3-1.7$ años.

---

## 2. Evaluación de consumo energético en transporte y selección inteligente de vehículos

**Escenario:** Comparar consumo y costos de operación entre tres opciones de transporte de mercancías: (A) furgoneta diésel, (B) furgoneta híbrida, (C) furgoneta eléctrica.

**Datos operativos:**
- Carga típica: $m = 1500\,\text{kg}$ (mercancía) + $1200\,\text{kg}$ (vehículo) = $2700\,\text{kg}$ total.
- Distancia diaria: $d = 150\,\text{km}$.
- Perfil de conducción: $40\%$ autopista (120 km/h), $60\%$ ciudad (40 km/h).
- Resistencias típicas (suma fricción + aerodinámica):
  - Ciudad: $F_{\text{res}} = 200\,\text{N}$.
  - Autopista: $F_{\text{res}} = 500\,\text{N}$ (aerodinámica aumenta con $v^2$).

**Opción A: Furgoneta diésel**
- Consumo EPA: $6\,\text{L}/100\,\text{km}$ (promedio combinado).
- Energía del diésel: $36\,\text{MJ}/\text{L}$; rendimiento motor: $35\%$.
- Potencia efectiva media en ciclo: $P_{\text{eff}} = 0.6 \times \frac{F_{\text{res,ciudad}} \times v_{\text{ciudad}}}{3600} + 0.4 \times \frac{F_{\text{res,auto}} \times v_{\text{auto}}}{3600}$
  = $0.6 \times \frac{200 \times 11.1}{3600} + 0.4 \times \frac{500 \times 33.3}{3600} = 1.85\,\text{kW}$.
- Consumo energético diario: $P_{\text{eff}} \times t = 1.85 \times 4.5 \text{ h} = 8.3\,\text{kWh} \approx 6\,\text{L diésel}$ ✓
- Costo diario (diésel a $1.20\,\text{€}/\text{L}$): $6 \times 1.20 = 7.20\,\text{€}$.
- Costo anual (250 días laborables): $7.20 \times 250 = 1800\,\text{€}$.

**Opción B: Furgoneta híbrida**
- Mejora de eficiencia: $25\%$ (recuperación de energía en frenado).
- Reducción de consumo: $6 \times 0.75 = 4.5\,\text{L}/100\,\text{km}$.
- Consumo diario: $4.5\,\text{L}$.
- Costo diario: $4.5 \times 1.20 = 5.40\,\text{€}$.
- Costo anual: $5.40 \times 250 = 1350\,\text{€}$.
- **Ahorro respecto a diésel:** $1800 - 1350 = 450\,\text{€}/\text{año}$.
- **Sobrecosto inicial (aproximado):** $3000-5000\,\text{€}$.
- **Periodo de recuperación:** $3000 / 450 = 6.7$ años (marginal; si combustible sube, mejora el caso).

**Opción C: Furgoneta eléctrica**
- Consumo EPA: $20\,\text{kWh}/100\,\text{km}$ (eficiencia típica).
- Consumo diario: $150 \times 20 / 100 = 30\,\text{kWh}$.
- Costo de electricidad (a $0.15\,\text{€}/\text{kWh}$): $30 \times 0.15 = 4.50\,\text{€}$.
- Costo anual: $4.50 \times 250 = 1125\,\text{€}$.
- **Ahorro respecto a diésel:** $1800 - 1125 = 675\,\text{€}/\text{año}$.
- **Sobrecosto inicial:** $60\,000-80\,000\,\text{€}$ (incluida instalación de cargador).
- **Autonomía con batería típica (60 kWh):** $300\,\text{km}$ (adecuado para $150\,\text{km}$ diarios con recarga nocturna).
- **Período de recuperación simple:** $70\,000 / 675 = 103.7$ años (no viable con costos actuales sin subsidios).

**Decisión estratégica:**
- **Corto plazo (próximos 3-5 años):** Opción B (híbrida) = mejor balance coste-beneficio y riesgo operativo.
- **Largo plazo (más allá de 5-10 años):** Opción C (eléctrica) si precios de baterías bajan $30-40\%$ o hay subsidios significativos.
- **Factor no económico:** Emisiones $\text{CO}_2$: eléctrica es $60-70\%$ más limpia (dependiendo de matriz energética regional).

---

## 3. Análisis de potencia en sistemas de climatización y refrigeración

**Contexto:** Una cámara frigorífica de almacén debe mantener $T_{\text{interna}} = -18°C$ mientras el exterior es $T_{\text{externa}} = 25°C$.

**Parámetros:**
- Volumen de cámara: $V = 100\,\text{m}^3$.
- Material de aislamiento: espuma de poliuretano, espesor $d = 0.10\,\text{m}$, conductividad térmica $k = 0.025\,\text{W/(m·K)}$.
- Área de transferencia térmica (paredes, techo, piso): $A \approx 300\,\text{m}^2$ (estimado).
- Cambios de aire / entrada de calor por aberturas: $Q_{\text{infiltración}} = 2\,\text{kW}$ (tipificado).

**Cálculo de carga térmica:**
- Carga por conducción: $Q_{\text{cond}} = k \times A / d \times \Delta T = 0.025 \times 300 / 0.10 \times (25 - (-18)) = 3.225\,\text{kW}$.
- Carga por infiltración: $Q_{\text{inf}} = 2\,\text{kW}$.
- Carga total: $Q_{\text{total}} = 3.225 + 2 = 5.225\,\text{kW}$.

**Selección del refrigerador:**
- Coeficiente de desempeño (COP) típico de refrigerador industrial: $\text{COP} = 2.5-3.0$ (parte del trabajo del compresor por unidad de calor extraído).
- Potencia requerida del compresor: $P = Q_{\text{total}} / \text{COP} = 5.225 / 2.8 = 1.87\,\text{kW}$.
- Motor seleccionado: $2\,\text{kW}$ (factor de seguridad $1.07$; mínimo para continuo).

**Cálculo de consumo energético anual:**
- Operación: $16\,\text{h}/\text{día}$ (se apaga durante la noche para mantenimiento).
- Consumo anual: $2\,\text{kW} \times 16\,\text{h/día} \times 365 = 11\,680\,\text{kWh}$.
- Costo anual (a $0.12\,\text{€}/\text{kWh}$): $11\,680 \times 0.12 = 1401.60\,\text{€}$.

**Mejora propuesta: Mejor aislamiento**
- Aumentar espesor de aislante a $d = 0.15\,\text{m}$.
- Nueva carga por conducción: $Q_{\text{cond, nuevo}} = 0.025 \times 300 / 0.15 \times 43 = 2.15\,\text{kW}$.
- Nueva carga total: $Q_{\text{total, nuevo}} = 2.15 + 2 = 4.15\,\text{kW}$.
- Potencia requerida: $P' = 4.15 / 2.8 = 1.48\,\text{kW}$ (motor de $1.5\,\text{kW}$ es suficiente).
- Nuevo consumo anual: $1.5 \times 16 \times 365 = 8\,760\,\text{kWh}$.
- **Ahorro energético:** $11\,680 - 8\,760 = 2\,920\,\text{kWh} = 350.40\,\text{€}/\text{año}$.
- **Costo de mejora (aislante adicional):** $\approx 1500-2000\,\text{€}$.
- **ROI:** $(1500-2000) / 350.40 = 4.3-5.7$ años (viable para inversión de largo plazo).

---

## 4. Diagnóstico de eficiencia en plantas de procesamiento de alimentos

**Escenario:** Una planta de procesamiento usa un motor de $15\,\text{kW}$ para accionar una trituradora industrial. El supervisor reporta que la máquina trabaja "más lentamente de lo normal" y consume más energía de la esperada.

**Mediciones de campo:**
- Potencia eléctrica consumida: $P_{\text{in}} = 14\,\text{kW}$ (medido con analizador de red).
- Voltaje trifásico: normal ($400\,\text{V}$).
- Velocidad de salida de trituradora: $v = 2\,\text{m/s}$ (esperado: $3\,\text{m/s}$).
- Corriente de carga: $I = 25\,\text{A}$ (esperado: $20\,\text{A}$).

**Análisis de potencia:**
- Potencia mecánica teórica (motor con rendimiento $90\%$): $P_{\text{mec}} = 14 \times 0.90 = 12.6\,\text{kW}$.
- Potencia útil esperada (aplicada a tritura, basada en carga de material): Debería ser $\approx 10-11\,\text{kW}$.
- Potencia medida vs esperada: El motor consume $14\,\text{kW}$ pero solo entrega $12.6\,\text{kW}$ mecánicos (pérdida $2.4\,\text{kW}$ en calor del motor).

**Diagnósticos posibles:**
1. **Fricción excesiva en cojinetes:** Aumento de fricción → mayor corriente necesaria → menos potencia útil.
2. **Bloqueo parcial en alimentación:** Material se acumula → motor trabaja más para la misma velocidad.
3. **Desalineación de eje:** Vibración → fricción aumentada → demanda de potencia mayor.
4. **Poleas/correas gastadas:** Deslizamiento → pérdida de potencia transmitida.

**Plan de acción:**
- Inspeccionar y lubricar cojinetes (coste bajo, ~$200\,\text{€}$).
- Limpiar tuberías de alimentación (coste bajo, ~$100\,\text{€}$).
- Alinear eje con láser (coste medio, ~$500\,\text{€}$).
- Si no mejora, inspeccionar poleas/correas (coste medio-alto, $1000-2000\,\text{€}$).

**Beneficio estimado de reparación:**
- Reducción de consumo esperada: $14 \to 12\,\text{kW}$ (caso optimista).
- Ahorro anual: $(14 - 12) \times 24\,\text{h} \times 250\,\text{días} \times 0.12\,\text{€}/\text{kWh} = 1440\,\text{€}$.
- ROI si cost total es $1800\,\text{€}$: Recuperación en $1.25$ años.

---

## 5. Diseño de sistemas de energía renovable (paneles solares + baterías)

**Contexto:** Una empresa quiere instalar un sistema solar para alimentar un taller con consumo típico de $5\,\text{kW}$ durante el día ($8\,\text{h}$) y consumo nocturno de $2\,\text{kW}$ durante $12\,\text{h}$ (iluminación de emergencia, sistemas de bombeo).

**Cálculo de energía diaria requerida:**
- Energía diurna: $5\,\text{kW} \times 8\,\text{h} = 40\,\text{kWh}$.
- Energía nocturna: $2\,\text{kW} \times 12\,\text{h} = 24\,\text{kWh}$.
- Total: $64\,\text{kWh}/\text{día}$.

**Dimensionado de paneles solares:**
- Insolación promedio en región (ej., mediterránea): $5\,\text{h}$ de sol pico/día durante invierno.
- Potencia de paneles requerida: $P_{\text{panel}} = 40 / 5 = 8\,\text{kW}$ (para cubrir consumo diurno directo).
- Adicionalmente, durante el día debe cargarse la batería para cubrir noche: $(24\,\text{kWh}) / 5\,\text{h} = 4.8\,\text{kW}$ adicionales.
- **Total de paneles:** $8 + 4.8 = 12.8\,\text{kW}$ (instalación de $\approx 32-36$ paneles de $400\,\text{W}$).

**Dimensionado de baterías:**
- Autonomía requerida: al menos $2$ días sin sol (caso de mal tiempo prolongado).
- Energía total en batería: $64 \times 2 = 128\,\text{kWh}$.
- Con profundidad de descarga típica del $80\%$ (para prolongar vida), capacidad nominal: $128 / 0.80 = 160\,\text{kWh}$.
- Sistema de baterías: Lítio (vida útil $15$-$20$ años) o plomo-ácido (vida $5$-$8$ años).

**Análisis económico (15 años):**
- **Costo inicial:**
  - Paneles $12.8\,\text{kW}$: $2.50\,\text{€}/\text{W} \times 12\,800 = 32\,000\,\text{€}$.
  - Baterías $160\,\text{kWh}$: $500\,\text{€}/\text{kWh} \times 160 = 80\,000\,\text{€}$ (lítio).
  - Inversor, enlace a red, instalación: $15\,000\,\text{€}$.
  - **Total inicial:** $127\,000\,\text{€}$.

- **Costo de energía de la red (sin solar):**
  - Consumo anual: $64\times 365 = 23\,360\,\text{kWh}$.
  - Costo anual (a $0.15\,\text{€}/\text{kWh}$): $3\,504\,\text{€}$.
  - Costo 15 años: $3\,504 \times 15 = 52\,560\,\text{€}$.

- **Ahorro con instalación solar:**
  - Consumo remanente de red: $\approx 10\%$ (días nublados, compra de exceso): $2\,336\,\text{kWh}/\text{año} = 350\,\text{€}/\text{año}$.
  - Costo 15 años: $350 \times 15 = 5\,250\,\text{€}$.
  - **Ahorro neto:** $52\,560 - 5\,250 = 47\,310\,\text{€}$.

- **Costo neto de inversión:**
  - Inversión menos ahorro: $127\,000 - 47\,310 = 79\,690\,\text{€}$ (coste de transición a energía limpia).

- **Beneficios adicionales no económicos:**
  - Reducción de $\text{CO}_2$: $\approx 20\,000\,\text{kg}/\text{año} = 300\,\text{ton} \text{CO}_2$ sobre 15 años.
  - Independencia energética: Protección contra subidas futuras de energía.
  - Imagen corporativa: "Empresa sostenible" en marketing.

**Conclusión:** Para empresas con conciencia ambiental o en regiones con electricidad cara ($>0.20\,\text{€}/\text{kWh}$), el ROI mejora significativamente. En mediterráneo con $0.15\,\text{€}/\text{kWh}$, el período de recuperación es $\approx 25-30$ años, viable solo si se valoran aspectos ambientales.
