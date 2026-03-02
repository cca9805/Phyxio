
# Errores frecuentes en trabajo y torque rotacional

## 1. Usar grados en $W=\tau\Delta\theta$ sin convertir a radianes
**Concepto:** El ángulo $\Delta\theta$ debe estar en radianes para que el trabajo salga en joules.
**Ejemplo:** $\tau=2$ N·m, $\Delta\theta=180°=\pi$ rad: $W=2\cdot\pi=6.28$ J.
**Consecuencias:** Resultados numéricos erróneos por factores de $\pi/180$.
**Prevención:** Convierte siempre los ángulos a radianes antes de calcular.

## 2. Confundir torque (N·m) con energía (J)
**Concepto:** Aunque $1$ N·m $=1$ J en unidades, el contexto es distinto: N·m para torque, J para energía.
**Ejemplo:** Calcular el trabajo de un torque es $W=\tau\Delta\theta$, no simplemente "N·m".
**Consecuencias:** Interpretaciones erróneas y confusión en balances energéticos.
**Prevención:** Usa las unidades y el contexto físico adecuados para cada magnitud.

## 3. Aplicar $P=\tau\omega$ con signos inconsistentes
**Concepto:** El signo de la potencia depende del sentido de $\tau$ y $\omega$; si son opuestos, la potencia es negativa.
**Ejemplo:** Un motor que acelera ($\tau$ y $\omega$ en el mismo sentido) tiene $P>0$; un freno ($\tau$ opuesto a $\omega$) tiene $P<0$.
**Consecuencias:** Interpretar mal la transferencia de energía.
**Prevención:** Analiza el sentido de $\tau$ y $\omega$ en cada caso.

## 4. Ignorar que en torque variable hay que integrar
**Concepto:** Si el torque varía con el ángulo, el trabajo es $W=\int \tau(\theta)d\theta$, no simplemente $\tau\Delta\theta$.
**Ejemplo:** Un resorte de torsión con $\tau=k\theta$ requiere integración.
**Consecuencias:** Resultados incorrectos en problemas con torques no constantes.
**Prevención:** Verifica si el torque es constante o variable antes de aplicar la fórmula directa.

---

## Estrategia para evitar errores
1. Convierte todos los ángulos a radianes antes de calcular.
2. Usa el contexto físico adecuado para torque y energía.
3. Analiza el sentido de $\tau$ y $\omega$ para el signo de la potencia.
4. Integra el torque si varía con el ángulo.