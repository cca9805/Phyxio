
# Errores frecuentes en sistemas conservativos

## 1. Identificación incorrecta de fuerzas conservativas
**Concepto:** Una fuerza es conservativa si su trabajo no depende de la trayectoria, solo de los puntos inicial y final. Fuerzas que dependen de la velocidad (fricción viscosa, drag aerodinámico) no son conservativas.
**Ejemplo:** Considerar la fricción del aire como conservativa lleva a errores: la energía se disipa y no se recupera.
**Consecuencias:** Predicciones erróneas de energía constante donde en realidad hay disipación.
**Prevención:** Verifica la dependencia de la fuerza respecto a la posición y la velocidad antes de clasificarla.

## 2. Confundir independencia de trayectoria con longitud recorrida
**Concepto:** En fuerzas conservativas, el trabajo solo depende de los puntos inicial y final, no del camino recorrido.
**Ejemplo:** Subir una montaña por un sendero largo o corto requiere el mismo trabajo contra la gravedad.
**Consecuencias:** Sumar trabajos de segmentos individuales como si todos estuvieran alineados con la fuerza lleva a errores.
**Prevención:** Calcula el trabajo solo entre los puntos inicial y final para fuerzas conservativas.

## 3. Mezclar trabajo conservativo y no conservativo sin contabilizarlo
**Concepto:** Si hay fuerzas no conservativas (fricción, motores), su trabajo debe incluirse en el balance energético.
**Ejemplo:** Aplicar $E_i=E_f$ sin añadir el trabajo de rozamiento da velocidades finales incorrectas.
**Consecuencias:** Resultados físicamente imposibles, sobrestimación de energía mecánica.
**Prevención:** Identifica y suma todos los trabajos no conservativos en el balance.

## 4. Signo incorrecto en cambios de energía potencial
**Concepto:** Al elevar un objeto, $\Delta U=+mgh$; al bajarlo, $\Delta U=-mgh$. El signo depende del sentido del desplazamiento respecto a la fuerza.
**Ejemplo:** Subir una caja: $U$ aumenta; bajarla: $U$ disminuye.
**Consecuencias:** Cambios de signo erróneos, balances energéticos incorrectos.
**Prevención:** Define claramente el sentido positivo y revisa el signo en cada cálculo.

## 5. Errores algebraicos en el reparto de energía entre componentes
**Concepto:** Al descomponer la energía en varias formas (cinética, rotacional, elástica), es fácil duplicar o olvidar términos.
**Ejemplo:** Un péndulo con masa y resorte: $E=K+U_g+U_e$.
**Consecuencias:** Resultados numéricos incorrectos, balances incompletos.
**Prevención:** Enumera todas las formas de energía presentes y revisa unidades y dimensiones.

## 6. No definir estados de referencia (cero de potencial)
**Concepto:** El cero de energía potencial debe ser consistente en todos los cálculos.
**Ejemplo:** Definir $U_g=0$ en el suelo y luego cambiarlo a mitad del problema lleva a errores.
**Consecuencias:** Cancelaciones erróneas, aparentes violaciones de conservación de energía.
**Prevención:** Especifica y mantén la referencia de potencial durante todo el problema.

## 7. Aplicar el principio a sistemas con transferencia de masa o radiación
**Concepto:** Si la masa cambia (cohete) o hay emisión de energía (onda electromagnética), la conservación mecánica clásica no es válida sin correcciones.
**Ejemplo:** Un cohete que quema combustible pierde masa y requiere un análisis especial.
**Consecuencias:** Resultados no físicos si se aplica la conservación clásica sin ajustes.
**Prevención:** Identifica si el sistema es cerrado y sin transferencia de masa o energía antes de aplicar el principio.

---

## Estrategia para evitar errores
1. Verifica la naturaleza de cada fuerza (conservativa o no) antes de aplicar balances.
2. Calcula el trabajo solo entre puntos inicial y final para fuerzas conservativas.
3. Incluye todos los trabajos no conservativos en el balance energético.
4. Define y mantén el sentido y referencia de potencial en todo el problema.
5. Enumera todas las formas de energía presentes y revisa unidades.
6. Asegúrate de que el sistema sea cerrado antes de aplicar conservación mecánica clásica.

## 8) Omisión de términos de energía interna en colisiones reales
- En colisiones “elásticas” en la vida real, parte de la energía se convierte en calor y sonido; asumir conservación mecatécnica total puede subestimar las deformaciones.
- Úsese sólo si se conoce que la colisión es verdaderamente elástica (p.ej., choques entre esferas de acero bien pulidas).

> **Consejo general:** Antes de aplicar $E_i = E_f$, enumera **todas** las fuerzas actuantes y clasifica cada una como conservativa o no conservativa; define estados con claridad.
