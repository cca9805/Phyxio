# Contexto histórico: Trabajo Rotacional de Arquímedes a Sistemas Moderno de Control

## Antigüedad: Máquinas Simples y Torque Intuitivo

**Arquímedes** (~250 a.C.) en *Sobre el Equilibrio de Planos* introduce concepto de "momento" de fuerza alrededor de un pivote (palanca). Formula ley de la palanca:
$$F_1 \times d_1 = F_2 \times d_2$$

Cuando se reorganiza como trabajo:
$$F_1 \times d_1 = W = \tau \times \theta$$

Arquímedes no usaba terminología "torque" (término moderno), pero reconocía que producto fuerza × distancia perpendicular al eje es cantidad conservada. **Precedente: trabajo en rotación surge de máquinas simples.**

## Era Clásica: Euler y Dinámica Rotacional (1750s)

**Leonhard Euler** (1755, *Theoria Motus Corporum Solidorum*) formaliza dinámica de cuerpos rígidos rotantes. Define:

$$\tau = I \alpha$$

Análogo rotacional de $F = ma$. Euler demuestra que trabajo de torque:
$$W = \int \tau \, d\theta = \Delta K_{rot} = \Delta(\tfrac{1}{2}I\omega^2)$$

Esta es **primer enunciación clara del teorema trabajo-energía rotacional**.

## Era Industrial: Aplicación a Máquinas Vapor (1800s)

Con surgimiento de motores vapor de **James Watt** (1784), concepto de "potencia" en máquinas rotantes se vuelve **crítica comercial**: capacidad de motor se mide en caballos de vapor (horsepower):

$$P = \tau \times \omega$$

Watt descubrió empíricamente que potencia es producto torque × rpm; esto fue revolución en diseño industrial. Ahora puede calcularse a priori qué máquina es necesaria para tarea dada (levantar agua de mina, bombear, etc.), sin construir y probar.

**Ingeniero observación**: Volante grande (momento inercia alto) ayuda suavizar fluctuaciones torque en ciclo 4-tiempos de motor; trabajo neto es distribuido a lo largo de múltiples ciclos.

## Revolución de Energías: Turbinas de Vapor y Aire Comprimido (1880s-1920s)

**Charles Parsons** (1884) inventa turbina de vapor multi-etapa para generación eléctrica. Revolución:

- Antes: máquina recíproca (tipo pistón) con bajo torque constante pero velocidades moderadas
- Parsons: rotor de turbina entrega torque enorme a velocidades muy altas (~3000 rpm), convirtiendo quasi-directamente presión vapor en potencia eléctrica

**Ventaja térmodinámica**: Turbina es reversible (~40% eficiencia térmica) vs. motor recíproco (~10%)

**Concepto de trabajo**: En turbina, fluido hace trabajo comprimido contra paletas del rotor:
$$W = \int P \, dV = \int \tau \, d\theta$$

Fluido pierde entalpía; rotor gana energía cinética rotacional convertida finalmente en electricidad.

Por 1920s, **turbinas dominaban generación eléctrica global**, estableciendo relevancia de trabajo/torque como concepto ingenieril central.

## Era Eléctrica: Motores de Inducción (1890s-1960s)

**Nicola Tesla** (1888) y **Mikhail Dolivo-Dobrovolsky** (1889) desarrollan motor de inducción AC trifásico. Ventaja:

- **Simplicidad**: No requiere escobillas/conmutador (sin mantenimiento)
- **Robustez**: Puede operar en ambientes corrosivos, minería, etc.
- **Eficiencia**: 85-95% convierte corriente eléctrica en torque mecánico

**Curva característica torque-velocidad**: Motor iniciado desde parada con torque reducido (~100% nominal a 0 rpm), luego torque **decrece** con velocidad angular:
$$\tau(\omega) \approx \tau_0 (1 - s)$$

donde $s = (\omega_{sync} - \omega) / \omega_{sync}$ es "deslizamiento." Este comportamiento emergió de análisis de circuito equivalente; permite arranques relativamente seguros sin corrientes destructivas.

Potencia entregada: $P = \tau(\omega) \times \omega$, máxima en punto intermedio velocidad, no en máximo torque ni máxima velocidad. **Descubrimiento**: Potencia = función no-trivial de velocidad angular.

## Automatización y Control (1950s-1980s)

Con surgimiento de **servomotores** y **controladores electrónicos**, concepto de "trabajo de torque" pasó de **magnitud constante a variable dinámicamente**.

**Servo-systems arc**: Robot industrial (KUKA, ABB, 1970s) con 6 juntas articuladas requiere:
1. Comando de posición (ángulo deseado $\theta_{target}$)
2. Feedback de posición actual $\theta_{actual}$
3. Controlador calcula error: $e = \theta_{target} - \theta_{actual}$
4. Servo amplifier genera corriente motor proporcional a $e$ (control PID)
5. Motor desarrolla torque $\tau(t)$ variable para seguir trayectoria
6. Trabajo instantáneo: $P(t) = \tau(t) \omega(t)$

Por primera vez, trabajo rotacional pasó ser **controlado dinámicamente en tiempo real**, permitiendo movimientos precisos imposibles en era mecánica pura.

## Era Computacional y Digitalización (1990s-2020s)

**CNC (Computer Numerical Control)** máquinas herramienta (Haas, Siemens 1980s+) y **robots colaborativos** (Rethink 2012+) requieren:

- Sensores de torque/fuerza en tiempo real
- Algoritmos de control predictivos (PID, MPC)
- Optimización de trayectoria minimizando energía o tiempo

**Métrica nueva**: "Energía eficiencia" = trabajo útil / energía total consumida. En robots, optimización de trayectorias puede reducir energía 20-30% sin cambiar ciclo tiempo.

### Ejemplos Contemporáneos:

1. **Taladros inteligentes** (DeWalt FlexVolt): Módulo de control mide resistencia (torque de carga) en tiempo real; reduce velocidad para evitar bloqueo (kickback mortal).

2. **Turbinas eólicas** (Siemens Gamesa 12MW): Anemómetro mide viento; controlador ajusta ángulo aspa para mantener potencia cercana nominal (P = 12 MW) incluso si viento varía 8-20 m/s. Trabajo de torque variable segundos-a-segundos.

3. **Vehículos eléctricos** (Tesla Model 3): Motor puede modular torque 0-420 N·m dinámicamente; recuperación energía frenado mediante retroalimentación (motor como generador).

## Tabla Histórica

| **Período** | **Figura/Evento** | **Concepto** | **Impacto** |
|---|---|---|---|
| ~250 a.C. | Arquímedes | Momento de palanca (~torque) | Máquinas simples |
| 1755 | Euler | Teorema trabajo-energía rotacional ($W = \Delta(\frac{1}{2}I\omega^2)$) | Formalización matemática |
| 1784 | Watt | Potencia = torque × rpm (HP) | Estandarización potencia motor |
| **1884** | **Parsons** | **Turbina de vapor multi-etapa** | **Revolución generación eléctrica (40% eficiencia!)** |
| 1888 | Tesla/Dobrovolsky | Motor inducción AC trifásico | Electrificación masiva (85-95% eficiencia) |
| 1920s | Industria aeronáutica | Propulsores con reducción torque ($P = \tau \omega$ = const) | Aviación moderna |
| 1970 | KUKA Robot | Servomotores + control electrónico PID | Control dinámico de torque en tiempo real |
| **1990s** | **CNC/CAM** | **Optimización trayectoria mínima energía** | **Manufactura eficiente, 20-30% ahorro energía** |
| 2012+ | Cobots (Rethink) | Control seguro de fuerzas/torques (<150 N limit) | Robots colaborativos human-safe |
| 2020+ | Fusión por confinamiento inercia (NIF) | Trabajó de campos electromagnéticos confinando plasma | Energía ilimitada (en investigación) |

## Reflexión Epistemológica

La historia de **trabajo y torque** es historia de **abstracción permitiendo ingeniería predictiva sin ensayo-error**:

1. **Arquímedes**: Observación que palanca equilibra si productos fuerza × distancia son iguales
2. **Euler**: Formalismo matemático—toda rotación es caracterizada por $I$, $\omega$, $\tau$
3. **Watt-Parsons**: Aplicación industrial—potencia medible, estandarizable, comparable a energía calórica en forma universal
4. **Tesla-Edison**: Electrificación masiva requeriría motores eficientes y confiables; teoría torque/potencia hizo posible diseño
5. **Computacional**: Control en tiempo real de torque variable; optimización dinámica de trabajo

Hoy, concepto de trabajo rotacional (500+ años después Arquímedes) es **invisible a usuario final**—actuador responde perfectamente a comando, sin pensamiento de torque subyacente. Pero sin rigor matemático Euler + determinación industrial Watt, tecnología moderna (robots, regeneración energía, turbinas eólicas inteligentes) **sería imposible**.