# Aplicaciones

## 1. Cálculo de consumo energético en elevadores y grúas

**Contexto:** Empresas de construcción necesitan estimar la potencia eléctrica de los motores de grúas para levantar materiales.

- Para una carga máxima $m=2000\,\text{kg}$ a $h=50\,\text{m}$ en $t=2\,\text{min}$,
  $$W = mgh = 2000 \times 10 \times 50 = 1 \times 10^6\,\text{J}$$
  $$P = W/t = 1\,\text{MJ} / 120\,\text{s} = 8.3\,\text{kW}$$
- Añadir un factor de seguridad del $25\%$ para fricción y eficiencia del motor (rendimiento $\eta=0.8$), motor requerido $\approx 12.5\,\text{kW}$.

**Decisión de compra:** elegir motor de $15\,\text{kW}$ para cubrir picos y asegurar vida útil.

---

## 2. Dimensionado de sistemas de almacenamiento energético gravitatorio (p.ej., pilas de bloques o volantes de inercia verticales)

- Volumen de agua $V=500\,\text{m}^3$ elevado $h=100\,\text{m}$ almacena energía:
  $$E = \rho g V h = 1000 \times 10 \times 500 \times 100 = 5 \times 10^8\,\text{J} = 139\,\text{kWh}$$
- Permite gestionar la demanda pico en redes eléctricas cuando se descarga el agua.

---

## 3. Planificación de rampas y desniveles en transporte terrestre

- Para camiones que suben una rampa de $\alpha=6\%$ con carga $m=40,000\,\text{kg}$ a $v=25\,\text{m/s}$,
  el trabajo por unidad de longitud: $dW/dx = mg\sin\alpha \approx 40\,000 \times 10 \times 0.06 = 24,000\,\text{N}$.
- Energía por kilómetro: $24,000\,\text{N} \times 1000\,\text{m} = 24\,\text{MJ}$.
- Permite calcular consumo adicional de combustible y dimensionar motores.

---

## 4. Estimación de energías en geodesia y altura relativa

- Satélites GNSS usan potencial gravitatorio para determinar diferencias de altura con precisión milimétrica.
- La energía potencial gravitatoria es proporcional a la altura; mediciones de frecuencia de reloj relativista calibran $\Delta U$.

---

## 5. Investigaciones de física fundamental y astrofísica

- Estudiar velocidades de escape de planetas extrasolares para predecir pérdida atmosférica.
- Calcular la energía liberada por acreción de materia en discos circumestelares usando el potencial universal; esencial en modelos de formación de estrellas y AGNs.
