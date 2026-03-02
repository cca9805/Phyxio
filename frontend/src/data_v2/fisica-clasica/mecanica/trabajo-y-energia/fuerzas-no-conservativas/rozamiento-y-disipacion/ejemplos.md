# Ejemplos resueltos

## Ejemplo 1: Cálculo de energía disipada en deslizamiento horizontal

**Enunciado**: Un bloque de aluminio de 10 kg se desliza sobre acero galvanizado. El coeficiente dinámico es $\mu_k = 0.47$. Se empuja con una fuerza neta horizontal y recorre 15 m antes de detenerse.  
¿Cuál fue la energía mecánica disipada en calor?

**Resolución**:
1. Fuerza normal: $N = mg = 10 \times 9.8 = 98\,\text{N}$
2. Fuerza de roce: $f_r = \mu_k N = 0.47 \times 98 = 46.06\,\text{N}$
3. Trabajo de roce (energía disipada): 
   $$W_{\text{roce}} = f_r \cdot d = 46.06 \times 15 = 690.9\,\text{J}$$

**Verificación**: La potencia media de disipación es $\bar{P} = \frac{690.9}{t}$. Si el deslizamiento tardó 5 segundos, $\bar{P} = 138$ W, razonable para fricción moderada.

**Interpretación**: Se convirtieron >690 J de energía cinética inicial en vibración molecular (calor) en las superficies de contacto. Temperatura superficial sube localmente decenas de grados.

---

## Ejemplo 2: Distancia de frenado de vehículo con análisis de material

**Enunciado**: Un automóvil de 1200 kg viaja a 60 km/h (≈ 16.67 m/s) y frena abruptamente. Las pastillas de freno sobre rotor de acero tienen $\mu_k = 0.8$ (condición húmeda, deterioro medio). ¿Qué distancia recorre hasta detenerse? ¿Cuál es la energía disipada?

**Resolución**:
1. Energía cinética inicial: 
   $$E_k = \frac{1}{2}mv^2 = \frac{1}{2} \times 1200 \times (16.67)^2 = 166,678\,\text{J} \approx 167\,\text{kJ}$$

2. Fuerza de frenado (rozamiento máximo): 
   $$f_r = \mu_k \times mg = 0.8 \times 1200 \times 9.8 = 9408\,\text{N}$$

3. Desaceleración: 
   $$a = -\frac{f_r}{m} = -\frac{9408}{1200} = -7.84\,\text{m/s}^2$$

4. Distancia usando $v^2 = v_0^2 + 2ad$ con $v = 0$:
   $$0 = (16.67)^2 + 2(-7.84)d \quad \Rightarrow \quad d = \frac{278}{15.68} \approx 17.7\,\text{m}$$

5. Energía disipada en pastillas/rotor:
   $$W_{\text{roce}} = f_r \times d = 9408 \times 17.7 = 166,522\,\text{J}$$

**Verificación**: $E_{\text{disipada}} \approx E_k$ inicial ✓. Pequeña diferencia por redondeos.

**Nota técnica**: Si el conductor hubiera esperado 1 segundo más (velocidad baja), o si $\mu$ fuera menor (0.5 en hielo), la distancia aumentaría a 28.4 m. Esto explica por qué "10 metros de diferencia a 60 km/h puede significar una colisión."

---

## Ejemplo 3: Comparación de superficies y análisis económico de desgaste

**Enunciado**: Una máquina herramienta desliza una pieza de trabajo sobre dos posibles base industriales:  
- **Opción A**: Acero lacado, $\mu ≈ 0.35$, costo inicial \$500, vida útil 2 años
- **Opción B**: Teflón + acero, $\mu ≈ 0.08$, costo inicial \$1500, vida útil 5 años

La máquina realiza 5 ciclos diarios de deslizamiento de 10 m cada uno, a 20 kg de carga, durante 250 días laborales/año.  
¿Cuál opción minimiza energía disipada y costo operacional total?

**Resolución**:

*Energía anual disipada:*
- Ciclos/año: $5 \times 250 = 1250$ ciclos
- Distancia/año: $1250 \times 10 = 12,500\,\text{m}$
- Normal: $N = 20 \times 9.8 = 196\,\text{N}$

**Opción A** (acero lacado):
$$E_{A} = \mu N d = 0.35 \times 196 \times 12,500 = 861,250\,\text{J} = 0.239\,\text{kWh}$$

**Opción B** (Teflón):
$$E_{B} = 0.08 \times 196 \times 12,500 = 196,000\,\text{J} = 0.0544\,\text{kWh}$$

*Costo total a 5 años (electricidad: \$0.12/kWh, mantenimiento \$200/año):*

**Opción A**:  
- Inversión inicial: \$500  
- Energía: $5 \times 0.239 \times 0.12 = \$0.14$  
- Mantenimiento: $5 \times 200 = \$1000$  
- **Total: \$1500.14**

**Opción B**:  
- Inversión inicial: \$1500  
- Energía: $5 \times 0.0544 \times 0.12 = \$0.03$  
- Mantenimiento: $5 \times 100 = \$500$ (menor desgaste)  
- **Total: \$2000.03**

**Decisión ingenieril**: A corto plazo, Opción A es más económica. Sin embargo, considerando desgaste ambiental, Opción B reduce calefacción indeseada y contaminación térmica microscópica, mejorando precisión de máquina en turnos largos.

---

## Ejemplo 4: Disipación en plano inclinado con resistencia del aire

**Enunciado**: Un trineo de 50 kg desciende una montaña nival por una pendiente de $\theta = 20°$ a velocidad aproximadamente constante (equilibrio fuerzas). El coeficiente de fricciónnieve-patín es $\mu = 0.04$ (baja, nieve dura). La distancia del descenso es 500 m.  
¿Cuál es la energía disipada solo por rozamiento (no incluir aire)?

**Resolución**:

En equilibrio a velocidad constante:
$$mg\sin\theta = f_r + F_{\text{aire}}$$

Para este problema asumimos arrastre de aire negligible a velocidad constante de descenso (~5 m/s).

1. Normal en plano: $N = mg\cos\theta = 50 \times 9.8 \times \cos(20°) = 50 \times 9.8 \times 0.9397 = 460.4\,\text{N}$

2. Fuerza de rozamiento: $f_r = \mu N = 0.04 \times 460.4 = 18.4\,\text{N}$

3. Trabajo de rozamiento (disipado como calor):
   $$W_{\text{roce}} = f_r \times d = 18.4 \times 500 = 9200\,\text{J} = 9.2\,\text{kJ}$$

4. Para comparación, energy gravitatoria convertida: 
   $$E_{\text{grav}} = mgh = mg \times d\sin\theta = 50 \times 9.8 \times 500 \times \sin(20°) = 83,865\,\text{J}$$

5. Fracción disipada por rozamiento: 
   $$\frac{W_{\text{roce}}}{E_{\text{grav}}} = \frac{9200}{83,865} \approx 11\%$$

**Verificación**: El 89% restante se convierte en energía cinética + aire. Como $v$ es aproximadamente constante, la energía cinética no cambia, suponiendo que el aire absorbe la diferencia.

**Nota real**: En descensos de esquí a velocidad terminal constante, este modelo sobrestima fricción; la mayor disipación es por arrastre aerodinámico cuando se alcalza velocidad.

---

## Ejemplo 5: Fricción en mecanismo rotatorio—cojinete de rodillo

**Enunciado**: Un cojinete de rodillo en una maquinaria industrial soporta una carga radial $N = 8000\,\text{N}$. El eje rota a $n = 1800\,\text{rpm}$ (30 rps). El coeficiente efectivo de fricción en régimen seco-lubricado es $\mu_{eff} = 0.002$ (muy bajo por lubricación). El radio medio de contacto es $r = 0.02\,\text{m}$.  
¿Cuál es la potencia disipada por rozamiento? ¿Cuánto aumenta la temperatura en una hora?

**Resolución**:

1. Torque de fricción: $\tau = f_r \times r = \mu_{eff} N \times r = 0.002 \times 8000 \times 0.02 = 0.32\,\text{N m}$

2. Velocidad angular: $\omega = 2\pi n = 2\pi \times 30 = 188.5\,\text{rad/s}$

3. Potencia disipada: 
   $$P = \tau \omega = 0.32 \times 188.5 = 60.3\,\text{W}$$

4. Energía disipada en 1 hora (3600 s):
   $$E = P \times t = 60.3 \times 3600 = 216,900\,\text{J} = 60.3\,\text{Wh} = 0.0602\,\text{kWh}$$

5. Cálculo de temperatura (asumiendo capacidad térmica del acero y contacto restringido):  
   Si el cojinete pesa $m_{cojinete} = 0.5\,\text{kg}$ y $c_{acero} \approx 500\,\text{J/(kg·K)}$:
   $$\Delta T = \frac{E}{m \times c} = \frac{216,900}{0.5 \times 500} = 866\,\text{K}$$

**Alerta crítica**: ¡866 K de aumento sería catastrófico! En realidad, el calor se disipa continuamente por convección y conducción al radiador/estructura. **Temperatura estable** se alcanza cuando $P_{\text{entrada}} = h_c A (T_c - T_{\text{ambiente}})$ (ley de enfriamiento Newton).

Para evitar daño, el cojinete debe estar en contacto con masa térmica (carcasa, aire forzado), manteniendo $T_c < 100°C$.

**Verificación de diseño**: 60 W en cojinete de 0.5 kg requiere $h_c A \approx 60/60 = 1\,\text{W/(K)}$ para estabilidad térmica, equivalente a radiador pasivo grande o ventilación forzada.

---

**Resumen pedagógico**: Los ejemplos abarcan escala doméstica (bloque), vehicular (freno auto), industrial (máquina herramienta), natural (trineo), y rotatorio (cojinete), demostrando universalidad del modelo $f_r = \mu N$ en contextos muy variados, así como límites (ejemplo5 muestra importancia de disipación térmica).