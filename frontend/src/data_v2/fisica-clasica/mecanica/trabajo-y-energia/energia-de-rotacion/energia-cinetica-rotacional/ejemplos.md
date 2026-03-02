# Ejemplos resueltos

## Ejemplo 1: Disco uniforme girando—comparing energías a distintas velocidades

**Enunciado**: Disco metálico de radio $R = 0.2$ m y masa $M = 5$ kg gira alrededor de su eje central. El momento de inercia es $I = \frac{1}{2}MR^2 = 0.1$ kg·m².

¿Cuál es la energía cinética rotacional a $\omega_1 = 10$ rad/s y $\omega_2 = 20$ rad/s? ¿Cuál es la ratio?

**Resolución**:
- A $\omega_1$: $E_1 = \frac{1}{2} (0.1) (10)^2 = 5$ J
- A $\omega_2$: $E_2 = \frac{1}{2} (0.1) (20)^2 = 20$ J  
- Ratio: $E_2 / E_1 = 4$. (Cuadruplicación por duplicación de velocidad angular debido a dependencia cuadrática con $\omega$.)

**Interpretación**: El doblar la velocidad de rotación cuadruplica la energía, ilustrando que el sistema almacena energía muy no-linealmente. Esto explica por qué volantes de inercia de alta velocidad almacenan cantidades enormes de energía en volumen pequeño.

---

## Ejemplo 2: Cilindro sólido vs. cilindro hueco—comparison of moments of inertia

**Enunciado**: Dos cilindros de acero, ambos de masa $M = 10$ kg y radio $R = 0.3$ m, giran a la misma velocidad angular $\omega = 5$ rad/s. Uno es **sólido** ($I_s = \frac{1}{2}MR^2$), el otro **completamente hueco** (toda la masa en el borde, $I_h = MR^2$).

¿Cuál tiene mayor energía rotacional? ¿Cuál es la ratio?

**Resolución**:
- Cilindro sólido: $I_s = 0.5 \times 10 \times 0.09 = 0.45$ kg·m²
  $$E_s = \frac{1}{2} (0.45) (5)^2 = 5.625 \text{ J}$$

- Cilindro hueco: $I_h = 1 \times 10 \times 0.09 = 0.9$ kg·m²
  $$E_h = \frac{1}{2} (0.9) (5)^2 = 11.25 \text{ J}$$

- Ratio: $E_h / E_s = 2$

**Implicación técnica**: El cilindro hueco almacena el doble de energía (misma masa, velocidad), porque toda la masa está a distancia máxima del eje. Esto es principio de diseño crítico en volantes de inercia industriales: **maximizar radio mientras se minimiza masa central** para alcanzar energía específica (J/kg) alta.

---

## Ejemplo 3: Rueda de bicicleta con traslación + rotación (rodadura sin deslizamiento)

**Enunciado**: Una bicicleta de $m_{bici+ciclista} = 100$ kg se mueve a velocidad del centro de masa $v_{cm} = 5$ m/s. La rueda (aproximada como aro uniforme) tiene $M_{rueda} = 2$ kg y radio $R = 0.35$ m.

Para rodadura sin deslizamiento, $v_{cm} = \omega R$. Calcular energía cinética traslacional vs. rotacional.

**Resolución**:
- Velocidad angular: $\omega = v_{cm}/R = 5/0.35 = 14.3$ rad/s

- Momento de inercia del aro: $I_{aro} = MR^2 = 2 \times 0.1225 = 0.245$ kg·m²

- Energía traslacional: $E_{trans} = \frac{1}{2} m v_{cm}^2 = 0.5 \times 100 \times 25 = 1250$ J

- Energía rotacional de la rueda: $E_{rot} = \frac{1}{2} I \omega^2 = 0.5 \times 0.245 \times (14.3)^2 = 25.1$ J

- Ratio: $E_{rot} / E_{trans} \approx 2\%$

**Conclusión**: La rotación de la rueda es energía relativamente pequeña (2%) comparada con traslación. Esto contradice intuición inicial; explica por qué bicicletas son eficientes: la mayor parte de energía va a movimiento del cuerpo, no a girar ruedas.

**Verificación adicional**: Si el ciclista aumenta velocidad a 10 m/s (duplica $v_{cm}$), entonces $E_{trans}$ crece a 5000 J (cuadruplica) pero $E_{rot}$ crece solo a 100 J (cuadruplica también). Sin embargo, porque $E_{rot} \ll E_{trans}$, el impacto absoluto es pequeño.

---

## Ejemplo 4: Turbina de vapor industrial—cálculo de potencia a partir de energía rotacional y tiempo

**Enunciado**: Una turbina de generador eléctrico gira a $n = 3000$ rpm constantes. El rotor tiene momento de inercia $I = 50$ kg·m². Si un evento de desconexión causa que la turbina desacelere desde 3000 rpm a parada en 60 segundos, ¿cuál es la potencia media de disipación?

**Resolución**:
- Conversión angular: $n = 3000$ rpm $= 3000/60 = 50$ rps $\Rightarrow \omega = 2\pi \times 50 = 314.2$ rad/s

- Energía rotacional inicial: $E_i = \frac{1}{2} I \omega^2 = 0.5 \times 50 \times (314.2)^2 = 2.47 \times 10^6$ J = 2.47 MJ

- Energía final: $E_f = 0$ J

- Energía disipada (en cojinetes, fricciones, arrastre de aire): $\Delta E = 2.47$ MJ

- Potencia media: $P_{mean} = \Delta E / t = 2.47 \times 10^6 / 60 = 41.2$ kW

**Nota de aplicación**: Turbinas reales usan cojinetes magnéticos u hidrostáticos para minimizar fricción. Un cojinete de fricción de aceite produciría disipación mayor (~100 kW); cojinete magnético reduce a ~10 kW. La elección del tipo de cojinete es decisión de ingeniería crítica.

---

## Ejemplo 5: Patinador artístico flexionando brazos—conservación de momento angular

**Enunciado**: Patinador comienza a girar con brazos extendidos. $I_1 = 2.5$ kg·m² (brazos abiertos) y $\omega_1 = 10$ rad/s. Repentinamente, flexiona brazos concentrando masa más cerca al eje: $I_2 = 1.2$ kg·m².

Calcular $\omega_2$ (bajo ausencia de fricción en hielo). ¿Cómo cambia la energía rotacional?

**Resolución**:
- **Momento angular se conserva** (sin torques externos): $L = I\omega = \text{const}$
  $$L = 2.5 \times 10 = 25 \text{ kg·m}^2/\text{s}$$

- Nueva velocidad angular:
  $$\omega_2 = L / I_2 = 25 / 1.2 = 20.8 \text{ rad/s}$$

- Energía inicial: $E_1 = \frac{1}{2} (2.5) (10)^2 = 125$ J

- Energía final: $E_2 = \frac{1}{2} (1.2) (20.8)^2 = 259.2$ J

- Cambio: $\Delta E = E_2 - E_1 = 134.2$ J

**Interpretación crítica**: La energía **aumentó** 134 J aunque no hay fuente externa de energía. ¿De dónde vino?

**Respuesta**: El patinador realizó **trabajo interno** flexionando músculos para tirar brazos hacia adentro contra la fuerza **centrífuga**. Este trabajo interno se convierte en energía rotacional. El análogo es comprimir un resorte: trabajo de input $=$ cambio de energía elástica.

**Enseñanza**: Sistemas rotacionales pueden cambiar energía sin disipación mediante redistribución de masa. Esto es radicalmente diferente de traducción pura donde la energía cinética no cambia sin fricción o impulso externo.

---

**Síntesis pedagógica**: Los ejemplos cubren escala desde laboratorio (disco simple) hasta maquinaria industrial (turbina) a fenómenos humanos (patinador), demostrando universalidad de $E_{rot} = \frac{1}{2}I\omega^2$, así como cuándo el modelo falla o requiere extensiones (cambio geométrico $\Rightarrow$ momento angular conservativo).