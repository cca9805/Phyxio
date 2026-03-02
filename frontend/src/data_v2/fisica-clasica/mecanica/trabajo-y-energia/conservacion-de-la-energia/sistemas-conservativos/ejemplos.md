# Ejemplos

## Ejemplo 1: Caída y lanzamiento vertical con energía conservada

**Situación:** Un objeto de $m=0.5\,\text{kg}$ se deja caer desde $h=20\,\text{m}$ y luego es lanzado verticalmente hacia arriba con la misma velocidad de impacto. Ignorar resistencia del aire.

**Cálculo de velocidad al impactar:**
$$mgh = \frac{1}{2}mv^2 \Rightarrow v = \sqrt{2gh} = \sqrt{2 \times 10 \times 20} = 20\,\text{m/s}.$$  
(Energía inicial $PE=100\,\text{J}$, convertida a $KE$.)

**Después del rebote perfecto (energía totalmente recuperada):**
- La misma energía cinética se reconvierte en potencial en el lanzamiento.
- Altura máxima de subida post-rebote:
  $$\frac{1}{2}mv^2 = mgh' \Rightarrow h'= \frac{v^2}{2g} = 20\,\text{m}$$

**Interpretación:**,
- El objeto recupera exactamente la altura inicial si no hay pérdidas; energía mecánica total constante ($100\,\text{J}$).
- Si hubiera fricción con aire, la altura máxima sería menor; la diferencia cuantifica la energía disipada.

---

## Ejemplo 2: Oscilador masa-resorte sin amortiguación

**Sistema:** Masa $m=1\,\text{kg}$ unida a resorte con $k=100\,\text{N/m}$. Comprimes $x_0=0.1\,\text{m}$ y sueltas desde el reposo.

- Energía inicial (toda potencial elástica):
  $$U_0 = \frac{1}{2}k x_0^2 = \frac{1}{2} (100)(0.1)^2 = 0.5\,\text{J}$$

- En el paso por equilibrio ($x=0$): toda la energía es cinética: $KE=0.5\,\text{J}$.
- Velocidad máxima: $v_{\max} = \sqrt{2U_0/m} = \sqrt{1} = 1\,\text{m/s}$.

La energía total $E=0.5\,\text{J}$ permanece constante en cada instante; las gráficas $KE(t)$ y $U(t)$ son complementarias y suman siempre $0.5\,\text{J}$.

---

## Ejemplo 3: Pendiente y plano inclinado sin rozamiento

**Situación:** Una partícula desliza sin fricción por dos caminos diferentes entre los mismos puntos de altura (rampa directa y camino serpenteante).

- En cada caso, el trabajo realizado por la gravedad sólo depende de la diferencia de altura $\\Delta h$.
- Si el punto inicial está a $h_1=10\,\text{m}$ y el final a $h_2=0$, entonces $W = mg(h_2 - h_1) = -mg10$ para ambos caminos, aunque las longitudes diferirían.

**Verificación cinemática:**
Después del descenso, la velocidad calculada mediante $v=\sqrt{2g\Delta h}$ es idéntica para ambos recorridos, demostrando independencia de trayectoria.

---

## Ejemplo 4: Órbita circular bajo gravitación

**Sistema:** Satélite de masa $m$ orbitando a radio $r$ alrededor de un planeta de masa $M\gg m$. La energía mecánica total combinada es:
$$E = KE + U = \frac{1}{2}mv^2 - \frac{GMm}{r}.$$  
En una órbita circular, $v=\sqrt{GM/r}$, por lo que:
$$E = -\frac{1}{2} \frac{GMm}{r}$$

- Si el satélite transfiere energía (por maniobra de motor) cambiando $r$, la energía total varía sólo por el trabajo del motor. El modelo conserva energía mecánica del sistema aislado planeta–satélite.
- Por ejemplo, una sonda que transfiere calor al motor para subir a una órbita más alta: el trabajo requerido es igual a $\Delta E$ calculada con esta fórmula.

---

## Ejemplo 5: Colisión elástica de dos masas

**Sistema:** Dos masas $m_1=2\,\text{kg}$ y $m_2=3\,\text{kg}$ colisionan frontalmente, elástica y sin pérdidas. $m_1$ se mueve a $v_1=5\,\text{m/s}$, $m_2$ está en reposo.

- Energía cinética inicial: $KE_i = \frac{1}{2}m_1v_1^2 = 25\,\text{J}$.
- Tras la colisión elástica, las velocidades se calculan por conservación de energía y momento: $v_1' = 1\,\text{m/s}$, $v_2' = 4\,\text{m/s}$.
- Energía cinética final: $KE_f = \frac{1}{2}m_1(v_1')^2 + \frac{1}{2}m_2(v_2')^2 = 25\,\text{J}$.

La energía mecánica total se mantiene constante; el "trabajo" entre las masas es interno y no altera el total.
