# Modelos y alcances

## Formulación Base

La **energía cinética rotacional** de un cuerpo rígido girando alrededor de un eje es:

$$E_{rot} = \frac{1}{2}I\omega^2$$

donde $I$ es el **momento de inercia** (análogo rotacional de masa lineal) y $\omega$ es la velocidad angular. Para un cuerpo con elementos de masa $dm$ a distancia $r$ del eje:

$$I = \int r^2 \, dm$$

En sistemas con traslación y rotación simultáneas, la energía cinética total es:

$$E_{\text{total}} = \frac{1}{2}m v_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

donde el segundo término es la rotación alrededor del centro de masa.

## Hipótesis Operacionales

1. **Rigidez del cuerpo**: Asumimos que el cuerpo no se deforma bajo rotación; distancias internas permanecen fijas, lo que permite definir $I$ como invariante del cuerpo.

2. **Eje de rotación fijo o principal**: Para simplificar, consideramos rotación alrededor de un eje fijo (o principal de inercia) del cuerpo. En eses casos, $I$ es constante si la geometría no cambia.

3. **Velocidad angular uniforme o cuasi-uniforme**: En escala corta, $\omega$ es aproximadamente constante; variaciones lentas se capturan mediante $\frac{d\omega}{dt} = \alpha$ (aceleración angular).

4. **Ausencia de efectos relativistas**: $v_{tang} = \omega r \ll c$ en toda la extensión del cuerpo.

## Alcances: Dónde el Modelo es Válido

- **Cuerpos sólidos y rígidos**: Ruedas, discos, cilindros, esferas rotando alrededor de ejes fijos o móviles.
- **Maquinaria industrial**: Turbinas, motores eléctricos, bombas centrífugas rotando a velocidades bajas a moderadas ($\omega \lesssim 10^4$ rpm para acero).
- **Sistemas astronómicos**: Planetas, estrellas, galaxias con rotación lenta (en timescale humano); dinámicas de menos de $10^8$ años.
- **Deportes y movimiento humano**: Patinadores, gimnastas, ciclistas; rotaciones corporales con $\omega < 100$ rad/s (típico).
- **Laboratorio de física**: Peonzas, ruedas de bicicleta, volantes de demostración.

## Límites: Señales de Ruptura del Modelo

1. **Cuerpo deformable**: A velocidades muy altas, fuerzas centrífugas causan deformación (p.ej., aceleración centrífuga > $10^6$ m/s² genera estrés plástico en metales). El momento de inercia ya no es constante.

2. **Efectos relativistas**: Si $v_{tang} \approx 0.1 c$, relatividad especial es importante. Ocurre en **pulsares** (densidad de neutrones, $\omega \sim 1000$ rad/s pero $r$ muy pequeño).

3. **Cambio de geometría (p.ej., patinador flexionando brazos)**: Cuando un cuerpo activamente cambia sua distribución de masa durante rotación, $I$ varía en tiempo. Conservación dinámico debe reescribirse como $L = I\omega = \text{const}$ (momento angular), no energía.

4. **Fricción interna o amortiguamiento**: Disipación en cojinetes o fricción del fluido envolvente causa $\omega$ decae exponencialmente. El modelo energético requiere términos disipativos $-\Gamma\omega$ en ecuación de movimiento.

5. **Resonancia y acoplamiento**: Si el eje tiene diámetro cercano a frecuencia natural de vibración del cuerpo, ocurren fenómenos de resonancia paramétrica (tops nutation, precessión) que violan supuesto de rotación pura.

6. **Efecto Coriolis en sistemas no-inerciales**: En referencias rotantes (p.ej., Tierra), fuerzas ficticias Coriolis $\mathbf{F}_C = -2\mathbf{\Omega} \times \mathbf{v}$ modifican dinámica rotacional observada.

## Criterios Prácticos de Selección

| **Régimen** | **Descripción** | **Validez de E_rot** | **Ejemplo** |
|---|---|---|---|
| **Rotación pura, baja velocidad** | Cuerpo rígido, eje fijo; $\omega < 1000$ rpm | Excelente; error <1% | Rueda de bicicleta |
| **Rotación pura, velocidad moderada** | $1000 < \omega < 10,000$ rpm; verificar si deformación es tolerable | Bueno; error 1–5% | Turbinas de gas industrial |
| **Rotación + traslación** | Centro de masa se mueve; rodadura sobre superficie | Aplicar $E_{total} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I\omega^2$ | Rueda rodando sin deslizar |
| **Rotación variable de I** | Deportista flexionando limbs durante giro; $I(t)$ | Uso conservación momento angular $L=I\omega=const$; calcular $\omega(t)=L/I(t)$ | Patinador artístico variando pose |
| **Rotación rápida relativista** | Pulsar, $v_{tang} \sim 0.1c$; $\omega > 10^3$ rad/s en densidad neutrónica | No válido; requiere relatividad | Pulsar millisecondi |

## Resumen de Aplicabilidad

El modelo $E_{rot} = \frac{1}{2}I\omega^2$ es **extraordinariamente robusto** para:
- Ingeniería clásica (máquinas, turbinas, transportes)
- Deportes y biomecánica ($\omega \lesssim 100$ rad/s)
- Astrofísica de corto plazo ($t < 10^6$ años para rotación estelar)

Se requieren extensiones cuando:
- Geometría cambia ($\Rightarrow$ conservación momento angular)
- Disipación es significativa ($\Rightarrow$ términos amortiguador)
- Velocidades alcanzan ~10% de luz ($\Rightarrow$ relatividad)
- Cojinetes/apoyos tienen fricción dinámica importante ($\Rightarrow$ modelo de Stokes + turbulencia)