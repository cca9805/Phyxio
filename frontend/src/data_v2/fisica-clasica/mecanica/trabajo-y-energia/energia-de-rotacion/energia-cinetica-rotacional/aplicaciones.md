# Aplicaciones técnicas

## 1. Almacenamiento de energía mecánica con volantes de inercia (flywheels)

**Contexto**: En redes eléctricas inteligentes y sistemas de respaldo, volantes de inercia almacenan energía rotacional para regulación de frecuencia microsegundos-segundos (complementario a baterías químicas que responden en milisegundos).

**Cálculo de diseño**:
- Energía deseada: $E = 100$ kJ
- Velocidad segura: $\omega_{max} = 5000$ rpm = 523.6 rad/s (límite por estrés tensional en acero)
- Momento de inercia requerido: $I = 2E/\omega^2 = 2 \times 100,000 / (523.6)^2 = 0.729$ kg·m²
- Diseño: Cilindro hueco con radio externo 0.3 m, masa ~20 kg

**Aplicación real**: Beacon Power Corporation (EEUU) comercializa volantes de 25 kWh con eficiencia 95%. Un array de 200 volantes almacena 5 MWh—suficiente para ''suavizar'' picos de demanda en red de 50,000 hogares durante 36 segundos. Decisión económica: volante vs. batería de ion-Li (costo, ciclos de vida, temperatura operativa).

---

## 2. Diseño de turbinas de gas para generación eléctrica

**Contexto**: Turbinas de generador eléctrico (p.ej., en plantas de ciclo combinado) requieren rotor optimizado para máxima captura de energía en mínimo volumen.

**Parámetros de ingeniería**:
- Potencia: $P = 500$ MW
- Velocidad: $n = 3600$ rpm (para generador de 60 Hz; sincronía de red)
- Estrés permisible: $\sigma < 150$ MPa (acero turbina)
- Densidad de energía objetivo: $\rho_e = E_{rot}/V > 500$ kJ/m³

**Conexión con energía cinética**:
- Energía almacenada a máxima velocidad: $E = \frac{P \times t_{coast}}{1}$ donde $t_{coast}$ es tiempo de inercia (típico 2–5 segundos)
- Para 3 segundos: $E = 500 \times 10^6 \times 3 = 1.5 \times 10^9$ J = 1.5 GJ
- Momento de inercia requerido: $I = 2E/\omega^2 = 2 \times 1.5 \times 10^9 / (377)^2 \approx 2.1 \times 10^6$ kg·m²
- Rotor típico: ~400 toneladas, diámetro 2 m

**Decisión de diseño crítica**: Balance entre inercia alta (estabilidad de red, resistencia a desconexiones) y estrés mecánico (fatiga, rotura catastr ófica). Simulación FEM, ensayos de sobre-velocidad a 120% de nominal obligatorios.

---

## 3. Sistemas de transmisión en vehículos—volantes de motor y emisión de partículas

**Contexto**: En motores de combustión interna, el volante (disco metálico acoplado al cigüeñal) suaviza oscilaciones de ciclado pistón (potencia irregular en 4 tiempos) y almacena energía temporalmente.

**Análisis energético**:
- Volante típico (automóvil 2.0L): $m = 6$ kg, $r = 0.15$ m, $I \approx 0.068$ kg·m²
- RPM motor: 1000–6000
- A 3000 rpm: $\omega = 314.2$ rad/s, $E = 0.5 \times 0.068 \times (314.2)^2 \approx 3.36$ kJ

**Aplicación en sistema antideslizamiento**:
- Transición electrónica de motor de combustión a motor eléctrico (híbrido) requiere transferencia de energía rotacional sin choque mecánico
- Volante actúa como "amortiguador energético" permitiendo desacoplamiento suave
- En versión regenerativa (frenado libre energía), el volante de inercia reduce [[picos de corriente eléctrica que dañarían batería

**Regulación ambiental**: Normativa EU 2014/54 limita pérdidas en volante a <95 W nominales (fricción mínima). Diseño de cojinete de bajo-rozamiento crítico.

---

## 4. Deportes extremos y biomecánica—análisis de giro de gimnastas y esquiadores

**Contexto**: En patinaje artístico, salto de esquí con giro, gimnasia, el momento de inercia corporal es crucial para entendimiento de performance y lesiones.

**Ejemplo cuantitativo**:
- Gimnasta en posición extendida: $I_{ext} \approx 1.5$ kg·m²
- Misma gimnasta en posición encogida: $I_{enc} \approx 0.5$ kg·m²
- Velocidad de giro inicial (brazos abiertos): $\omega_1 = 5$ rad/s
- Momento angular conservado: $L = 1.5 \times 5 = 7.5$ kg·m²/s
- Velocidad al encoger: $\omega_2 = 7.5 / 0.5 = 15$ rad/s (triplicada)

**Energía contraída**: $E_2 = 0.5 \times 0.5 \times (15)^2 = 56.25$ J vs. inicial $E_1 = 0.5 \times 1.5 \times (5)^2 = 18.75$ J. Triplicación de energía por trabajo muscular interno.

**Implicación de lesión**: Velocidad angular mayor concentra más energía cinética; caída desde altura implica impacto a velocidad 3× mayor (escala no-lineal). Protección (casco, acolchonado) debe dimensionarse para energías de impacto $\propto \omega^2$.

---

## 5. Maquinaria industrial de precisión—balanceado dinámico y vibración

**Contexto**: En centrifugadoras médicas, máquinas herramienta de alta rpm, motores de precisión, si la masa no está uniformemente distribuida, rotores desbalanceados generan vibración.

**Física del balanceo**:
- Rotor teórico simétrico de masa $M$, radio $R$: cuando gira a $\omega$, energía cinética es $E = \frac{1}{2}I\omega^2$ distribuida uniformemente.
- Defecto (desbalanceo): masa puntual adicional $\Delta m$ a distancia $e$ del eje. Crea fuerza centrífuga $F_c = \Delta m \cdot e \cdot \omega^2$.
- A $\omega = 10,000$ rpm = 1047 rad/s, con $\Delta m = 1$ g, $e = 1$ mm: $F_c \approx 11$ N, suficiente para despertar vibración estructura.

**Corrección**: Balanceo dinámico requiere agregar contrapesos calibrados para anular $\Delta m \cdot e$ en dos planos principales. Máquinas de balanceo miden energía/vibración antes/después para validez.

**Aplicación en centrifugadoras ultra-altas**: Centrifugadora analítica $10^6$ G requiere rpm ~60,000. Pequeño desbalanceo (0.01 g) generaría fuerzas de miles de Newtons. Especificaciones de balanceo: tolerancia típica ISO 1940 Grado G2.5 (desbalanceo $< 2.5$ g·mm/kg de rotor).