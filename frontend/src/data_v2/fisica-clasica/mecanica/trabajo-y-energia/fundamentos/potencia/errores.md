
# Errores frecuentes en el cálculo de potencia

## 1. Confundir potencia con energía
**Concepto:** Potencia es la tasa de transferencia de energía ($P=\frac{dE}{dt}$), no la cantidad total acumulada.
**Ejemplo:** Un motor que entrega 1000 W durante 10 s transfiere $E=1000\times10=10,000$ J, pero la potencia es 1000 W, no 10,000 W.
**Consecuencias:** Interpretar mal la capacidad de un sistema, errores en dimensionado de equipos.
**Prevención:** Distingue siempre entre potencia (W) y energía (J).

## 2. Usar tiempo en minutos u horas sin convertir a segundos
**Concepto:** En el SI, el tiempo debe estar en segundos para que la potencia salga en vatios.
**Ejemplo:** Si elevas una carga en 2 minutos, usa $t=120$ s, no $t=2$.
**Consecuencias:** Resultados numéricos erróneos por factores de 60 o 3600.
**Prevención:** Convierte siempre el tiempo a segundos antes de calcular.

## 3. Olvidar el coseno en $P=Fv\cos\theta$
**Concepto:** Solo la componente de la fuerza en la dirección del movimiento aporta potencia.
**Ejemplo:** Si la fuerza es perpendicular a la velocidad ($\theta=90°$), $\cos(90°)=0$ y la potencia es cero.
**Consecuencias:** Sobreestimar la potencia útil, errores en análisis de máquinas.
**Prevención:** Dibuja los vectores y calcula el ángulo real entre fuerza y velocidad.

## 4. Interpretar mal la potencia negativa
**Concepto:** Potencia negativa significa que el sistema está absorbiendo energía (frenado, regeneración), no que sea imposible.
**Ejemplo:** Un coche frenando tiene $P<0$; la energía cinética se transforma en calor o se recupera en baterías (frenado regenerativo).
**Consecuencias:** Malinterpretar procesos de disipación o recuperación de energía.
**Prevención:** Analiza el sentido físico de la transferencia de energía en cada caso.

---

## Estrategia para evitar errores
1. Revisa las unidades de cada magnitud (W para potencia, J para energía).
2. Convierte todos los tiempos a segundos antes de operar.
3. Dibuja los vectores fuerza y velocidad y calcula el ángulo entre ellos.
4. Interpreta el signo de la potencia según el contexto físico (suministro o absorción de energía).
