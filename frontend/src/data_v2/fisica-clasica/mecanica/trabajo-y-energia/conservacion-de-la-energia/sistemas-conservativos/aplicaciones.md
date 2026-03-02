# Aplicaciones

## 1. Diseño seguro de montañas rusas y balnearios extremos

**Contexto:** Al proyectar la primera caída, ingenieros usan el principio de conservación de energía para asegurar que las velocidades máximas no excedan límites humanos.

**Ejemplo de cálculo:**
- Altura inicial: $h=60\,\text{m}$.
- Altura mínima de seguridad en bucle es $h_{min}=10\,\text{m}$.

Velocidad en la base sin fricción: $v = \sqrt{2gh} = 34.6\,\text{m/s}$ (124 km/h).  
Usando coeficiente efectivo de pérdida por fricción/aire $\mu_{eq}=0.05$, la velocidad real estimada: $v_{real} = \sqrt{2g(h - \mu_{eq} h)} = 33.5\,\text{m/s}$.

**Decisión de diseño:**
- Longitud de frenos y bucles calculados para disipar energía adicional sin pasar de $v=30\,\text{m/s}$ en puntos críticos.
- Elección de materiales y lubricación para mantener $\mu_{eq}$ bajo; revisión anual.

---

## 2. Sistemas de almacenamiento de energía mecánica (volantes de inercia)

**Contexto:** Un volante de inercia almacena energía rotacional; su energía total es $E = \frac{1}{2}I\omega^2$ (modelado como sistema conservativo durante descarga rápida).

**Aplicación industrial:**
- Volante de $I = 10\,\text{kg·m}^2$ gira a $\omega_0 = 500\,\text{rad/s}$, almacenando $E = 1.25\,\text{MJ}$.
- Al conectar a un generador, la energía se transfiere con eficiencia alta ($\eta \approx 0.95$) en segundos.
- La conservación de energía mecánica asegura que la caída de velocidad $\Delta \omega$ corresponde exactamente a la energía extraída.

**Diseño:**
- Seleccionar materiales con alta resistencia a fatiga (acero al carbono, varios millones de ciclos).  
- Diseñar márgenes de seguridad para asegurar que el volante no supere tensiones permitidas cuando $\omega$ varía.

---

## 3. Predicción de alturas de rebote en deportes extremos

**Contexto:** En parkour, un atleta salta desde altura $h$ y rebota sobre una superficie elástica. Su energía mecánica (considerando la elástico como un sistema conservativo temporal) determina la altura de rebote.

**Modelo simple:**
- Si la superficie tiene constante efectiva $k_{eq}=50\,\text{kN/m}$ y el atleta de masa $m=70\,\text{kg}$ comprime $x=0.3\,\text{m}$:
  $$W = \frac{1}{2}k_{eq}x^2 = 0.5 \times 50\,000 \times 0.09 = 2250\,\text{J}$$
- Esta energía vuelve a convertirse en energía cinética (rechazo) y luego en altura de rebote $h' = W/(mg) = 2250/(70\times10) = 3.21\,\text{m}$.

**Decisión de entrenamiento:**
- Ajustar técnica para limitar compresión máxima y evitar sobrecarga en tobillos.
- Utilizar superficies con $k_{eq}$ certificadas; medir trabajo almacenado con sensores de fuerza.

---

## 4. Balance energético en colisiones deportivas (fútbol, automovilismo)

**Contexto:** Durante colisiones entre coches de carrera, gran parte de la energía cinética se transforma en deformación plástica de la carrocería; sin embargo, el principio conservativo se usa para diseñar zonas de deformación controlada.

**Ejemplo de cálculo:**
- Auto de 1000 kg a 30 m/s impacta barrera; opción 1: diseño rígido vs opción 2: zonas de deformación.

- Energía inicial: $E_i = \frac{1}{2}(1000)(30)^2 = 450\,000\,\text{J}$.
- En diseño rígido, la fuerza máxima calculada por $F = E_i / d$ con $d$ pequeño ($<0.5\,\text{m}$) produce aceleraciones mortales.  
- Con zonas de deformación que absorben $d=1.5\,\text{m}$, $F_{max} \approx 300\,\text{kN}$, con desaceleraciones <25g, dentro de límites tolerables para el piloto.

**Aplicación:**
- Uso en normas de seguridad FIA: energía debe ser absorbida por estructuras deformables, demostrando conservación de energía (energía pasa de kenética a interna, no a fuerza instantánea peligrosa).

---

## 5. Diseño de péndulos industriales para recuperación de energía

**Contexto:** Un péndulo gigante (p.ej., en centrales hidroeléctricas de bombeo) usa masa que sube y baja para almacenar energía potencial.

- Masa total: $m=2000\,\text{kg}$; altura de elevación $h=50\,\text{m}$.
- Energía potencial almacenada: $E = mgh = 2000 \times 10 \times 50 = 1,000,000\,\text{J}$ = 1 MJ.

**Decisión de ingeniería:**
- Para minimizar pérdidas, el sistema debe aproximarse a conservativo; se utiliza lubricación extrema y rodamientos magnéticos.
- La descarga del péndulo genera corriente usando generador conectado; la velocidad de descenso corresponde exactamente al decrecimiento de $E$.

**Economía:**
- Si el péndulo opera 10 ciclos por día, energía recuperada = 10 MJ = 2.78 kWh.
- Con tarifas de $0.15\,\text{€}/\text{kWh}$, cada ciclo representa $0.42\,\text{€}$ de energía. Inversión justificable si costos de fricción < 5% de la energía almacenada.
