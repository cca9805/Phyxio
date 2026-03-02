# Ejemplos

## Ejemplo 1: Elevador de carga (modelo local uniforme)

Un ascensor transporta $m=500\,\text{kg}$ de material desde el sótano ($h=-5\,\text{m}$) hasta el sexto piso ($h=20\,\text{m}$). Calcular el trabajo realizado contra la gravedad y la potencia mínima si el trayecto dura $30\,\text{s}$.

**Cálculo:**
$$\Delta h = 25\,\text{m}$$
$$W = m g \Delta h = 500 \times 10 \times 25 = 125\,000\,\text{J} = 125\,\text{kJ}$$
Potencia media requerida:
$$P = W/\Delta t = 125\,000 / 30 = 4167\,\text{W} \approx 4.17\,\text{kW}$$

**Interpretación:**
- La energía potencial aumenta en $125\,\text{kJ}$; si el ascensor baja después con frenos regenerativos del $60\%$, se recuperarían $75\,\text{kJ}$.
- El valor se mantiene válido mientras $\Delta h \ll R_{Tierra}$.

---

## Ejemplo 2: Altura equivalente para lanzamiento de proyectil

Un caniqueiro desea lanzar una pelota de $0.2\,\text{kg}$ a velocidad $v=20\,\text{m/s}$ verticalmente. ¿A qué altura equivalente podría llegar si toda la energía cinética se transformara en energía potencial?

$$\frac{1}{2}mv^2 = mgh \Rightarrow h = \frac{v^2}{2g} = \frac{400}{20} = 20\,\text{m}$$

El cálculo ilustra que la altura alcanzada no depende de la masa. Si se escuchan sonidos o se observa fricción del aire, la altura real sería menor; la diferencia mide la energía disipada.

---

## Ejemplo 3: Órbita terrestre baja y velocidad de escape

Para un satélite de masa $m$ en órbita circular a $r = R_{Tierra} + 300\,\text{km}$ (radio $R \approx 6.678\times 10^6\,\text{m}$), la energía potencial y cinética totales por unidad de masa son:

$$U = -\frac{GM}{r}, \quad KE = \frac{GM}{2r}$$

Con $GM = 3.986\times 10^{14}\,\text{m}^3/\text{s}^2$, obtenemos:
$$U \approx -5.97 \times 10^7\,\text{J/kg}, \quad KE \approx 2.99 \times 10^7\,\text{J/kg}$$
La energía mecánica total es $E = -2.98 \times 10^7\,\text{J/kg}$.

La velocidad de escape desde esa órbita:
$$v_{esc} = \sqrt{\frac{2GM}{r}} \approx 10.9\,\text{km/s}$$

---

## Ejemplo 4: Variación de gravedad con altitud y trabajo necesario para subir a un globo estratosférico

Para un globo que asciende desde la superficie ($r=R$) hasta $r=R+30\,\text{km}$, el trabajo requerido usando el potencial universal:

$$W = GMm \left(\frac{1}{R} - \frac{1}{R+30\,\text{km}}\right)$$
Con $m=1000\,\text{kg}$:
$$W \approx 3.986\times10^{14} \times 1000 \times (1/6.378\times10^6 - 1/6.408\times10^6) \approx 6.1 \times 10^9\,\text{J}$$

Comparación con $mgh$:
$$mgh \approx 1000\times10\times30000 = 3.0 \times 10^8\,\text{J}$$

El cálculo con $-GMm/r$ da 20 veces mayor energía: la aproximación local falla en estratosfera.

---

## Ejemplo 5: Trabajo de gravedad en caída radial hacia un agujero negro (modelo universal)

Para una partícula de masa $m$ que cae desde $r_0 = 10R_s$ a $r_f = 2R_s$ alrededor de un agujero negro no rotante (radio de Schwarzschild $R_s$), la energía liberada (no relativista) es:

$$\Delta U = GMm \left(\frac{1}{2R_s} - \frac{1}{10R_s}\right) = \frac{4}{10} \frac{GMm}{R_s} = 0.4 \frac{GMm}{R_s}$$

Con $R_s=2GM/c^2$, esto equivale a $0.2 mc^2$; muestra cómo la gravedad puede liberar una fracción significativa de la masa en energía potencial en regímenes relativistas.

La conclusión es que el modelo universal $-GMm/r$ revela energías inimaginables comparadas con $mgh$ y justifica por qué la materia que cae en agujeros negros aporta emisiones de rayos X intensas.