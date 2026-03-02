# Modelos y alcance

## Formulación Base

La **energía cinética** de un cuerpo o partícula en movimiento traslacional es:

$$K = \frac{1}{2}mv^2$$

donde $m$ es la masa en kilogramos y $v$ es la velocidad (magnitud). Esta cantidad **positiva siempre** representa la capacidad del objeto en movimiento para realizar trabajo sobre otros cuerpos mediante colisión o fricción.

En su forma diferencial, el **teorema trabajo-energía** establece:
$$dK = dW_{neto}$$

Es decir, el cambio en energía cinética iguala el trabajo neto realizado por todas las fuerzas actuando sobre el cuerpo.

## Hipótesis Operacionales

1. **Masa constante**: La masa no cambia durante el proceso. Aplica en sistemas clásicos; excluye cohetes, sistemas de expulsión, evaporación.

2. **Velocidad clásica**: $v \ll c$ (~1% de velocidad luz = 3000 km/s). Relatividad despreciable hasta $v \sim 0.1c$.

3. **Referencia inercial**: Las velocidades se miden en marco inercial (sin aceleración del observador). En marcos no-inerciales aparecen fuerzas ficticias que modifican $K$ observado.

4. **Cuerpo como partícula puntual O partícula con movimiento del CM**: Para cuerpos extendidos, $K_{total} = K_{CM} + K_{rotación}$; en este tema solo tratamos $K_{CM} = \frac{1}{2}m v_{CM}^2$.

## Alcances: Dónde el Modelo es Válido

- **Objetos macroscópicos en movimiento clásico**: Automóviles, pelotas, proyectiles, aviones (siempre $v < 300$ m/s típico).
- **Escalas de laboratorio y cotidianas**: Pelotas en deportes, caídas desde alturas, impactos.
- **Aplicaciones energéticas**: Transferencia de energía cinética → potencial (péndulo), → térmica (fricción), → deformación (choque).
- **Energía de cuerpos celestes**: Meteoroides, satélites, planetas en órbita (mientras sean movidas por gravitación clásica, no relativista).

## Límites: Señales de Ruptura del Modelo

1. **Velocidades relativistas**: Si $v > 0.1c$ (~30,000 km/s), la masa inercial aumenta y $K = (\gamma - 1)mc^2$ donde $\gamma = 1/\sqrt{1-v^2/c^2}$ (factor Lorentz). Ejemplo: electrones en acelerador de partículas.

2. **Sistemas de masa variable**: Si la masa cambia durante el movimiento (cohete quemando combustible, goteo de líquido), no se puede usar $K = \frac{1}{2}mv^2$ directamente; requiere integración con $dm/dt$ variable.

3. **Marcos no-inerciales**: En vehículo acelerado, observador nota fuerzas ficticias. La energía cinética medida depende del marco; no es invariante Galileana en marcos acelerados.

4. **Cuántica microscópica**: A nivel de electrones, fotones, partículas subatómicas, la Mecánica Cuántica reemplaza el concepto de $K$ clásico por espectro discreto de niveles energéticos.

5. **Cuerpos excesivamente deformables**: Si el objeto se deforma significativamente durante movimiento (bola de goma chocando pared), parte de $K$ se convierte en deformación elástica + calor interno, violando supuesto de rigidez.

## Criterios Prácticos de Selección

| **Régimen** | **Descripción** | **Fórmula Aplicable** | **Ejemplo** |
|---|---|---|---|
| **Baja velocidad clásica** | $v < 10$ m/s; regímenes normales de vida | $K = \frac{1}{2}mv^2$ (exacta) | Balón de fútbol a 5 m/s |
| **Velocidad moderada, impactos** | $10 < v < 100$ m/s; colisiones, seguridad | $K = \frac{1}{2}mv^2$ (exacta) | Vehículo a 40 km/h |
| **Velocidad alta, relatividad incipiente** | $100 < v < 3000$ m/s; $v \sim 0.001c$ | $K = \frac{1}{2}mv^2$ (error <0.01%) | Proyectil de rifles |
| **Velocidades muy altas** | $v > 0.1c$; aceleradores de partículas | $K = (\gamma-1)mc^2$ con $\gamma = 1/\sqrt{1-v^2/c^2}$ | Electrón en colisionador LHC |
| **Sistemas con rotación** | Objeto rígido trasladándose + rotando | $K_{total} = \frac{1}{2}m v_{CM}^2 + \frac{1}{2}I\omega^2$ | Rueda rodando sin deslizar |
| **Marcos acelerados** | Observador en vehículo acelerado | $K$ aparente incluye términos ficticios; usar marco inercial | Pasajero en auto acelerando |

## Relación Trabajo-Energía Cinética

El **teorema trabajo-energía** es consecuencia directa de la 2ª ley Newton:
$$\sum F = ma \Rightarrow \int F \cdot dx = m \int a \cdot dx = m \int v \, dv = \frac{1}{2}m(v_f^2 - v_i^2) = \Delta K$$

Esto significa:
- Trabajo **positivo** → $K$ aumenta (objeto acelera)
- Trabajo **negativo** → $K$ disminuye (objeto frena)
- Trabajo **cero** → $K$ constante (velocidad no cambia)

## Resumen de Aplicabilidad

El modelo $K = \frac{1}{2}mv^2$ es **extraordinariamente robusto** en:
- Toda la mecánica clásica (>99% de aplicaciones en ingeniería, transporte, deporte)
- Cálculos de seguridad (frenada, colisiones, impactos)
- Transferencia de energía (máquinas, turbinas, propulsión)

Requiere extensión/reemplazo cuando:
- $v > 0.1c$ ($\Rightarrow$ relatividad especial)
- Masa variable ($\Rightarrow$ ecuación de Tsiolkovsky para cohetes)
- Movimiento cuántico ($\Rightarrow$ operadores $\hat{p}^2 / 2m$, espectro discreto)
- Marcos no-inerciales ($\Rightarrow$ pseudofuerzas, energías efectivas)
