
# Errores frecuentes en el cálculo de trabajo

## 1. Confundir trabajo neto con trabajo de una sola fuerza
**Concepto:** El trabajo neto es la suma de los trabajos de todas las fuerzas que actúan sobre el cuerpo. Tomar solo la fuerza aplicada y olvidar el rozamiento (o viceversa) lleva a errores en el resultado y en la interpretación física.
**Ejemplo:** Un bloque es empujado con 100 N y hay rozamiento de 30 N. El trabajo neto para un desplazamiento $d$ es $(100-30)\cdot d = 70d$ J, no 100·d.
**Consecuencias:** Sobreestimar la energía transferida, errores en el teorema trabajo-energía.
**Prevención:** Identificar y sumar todas las fuerzas relevantes antes de calcular el trabajo neto.

## 2. Usar el ángulo incorrecto en la fórmula $W=Fd\cos\theta$
**Concepto:** El ángulo debe ser el que forman los vectores fuerza y desplazamiento, no el ángulo con los ejes de coordenadas.
**Ejemplo:** Si la fuerza va a 30° respecto a la horizontal y el desplazamiento es horizontal, el ángulo es 30°, no 60°.
**Consecuencias:** Error en el signo y magnitud del trabajo, interpretación física incorrecta (trabajo negativo/positivo).
**Prevención:** Dibuja ambos vectores y mide el ángulo entre ellos, no respecto a los ejes.

## 3. Aplicar $W=Fd\cos\theta$ con fuerza variable
**Concepto:** La fórmula solo es válida para fuerzas constantes. Si la fuerza depende de la posición ($F(x)$), se debe usar la integral $W=\int F(x)dx$.
**Ejemplo:** Un resorte con $F=-kx$ requiere integración entre dos posiciones.
**Consecuencias:** Resultados incorrectos en problemas con fuerzas elásticas, campos no uniformes, etc.
**Prevención:** Verifica si la fuerza es constante antes de aplicar la fórmula directa.

## 4. Perder el signo en el coseno
**Concepto:** El signo de $\cos\theta$ determina si el trabajo es positivo (fuerza y desplazamiento en la misma dirección) o negativo (opuestos).
**Ejemplo:** $\theta=120°$, $\cos(120°)=-0.5$; el trabajo es negativo.
**Consecuencias:** Interpretación errónea de si la fuerza aporta o extrae energía.
**Prevención:** Calcula el coseno con atención al cuadrante y sentido físico.

## 5. Mezclar unidades o conceptos (N·m vs J)
**Concepto:** Aunque $1\,J=1\,N\cdot m$, el contexto es distinto: N·m para torque, J para trabajo/energía.
**Ejemplo:** Confundir el resultado de un cálculo de trabajo con un momento de fuerza.
**Consecuencias:** Respuestas sin sentido físico, errores en interpretación de resultados.
**Prevención:** Revisa el contexto y las unidades finales de cada magnitud.

## 6. No verificar con el teorema trabajo-energía
**Concepto:** El trabajo neto debe coincidir con el cambio de energía cinética ($W_{net}=\Delta K$) si no hay otras transferencias.
**Ejemplo:** Si el resultado no cuadra, probablemente hay un error conceptual o de cálculo.
**Consecuencias:** Resultados inconsistentes, pérdida de confianza en el método.
**Prevención:** Siempre verifica el resultado con el balance energético.

## 7. No descomponer el trabajo en sistemas con varias fuerzas
**Concepto:** Cada fuerza (gravedad, rozamiento, aplicada) puede hacer trabajo distinto según su dirección y magnitud.
**Ejemplo:** En un plano inclinado, el trabajo de la gravedad y el del rozamiento deben calcularse por separado.
**Consecuencias:** Cálculos incompletos o erróneos.
**Prevención:** Identifica y calcula el trabajo de cada fuerza por separado antes de sumar.

## 8. Asumir $\theta=0$ sin analizar el problema
**Concepto:** No siempre el trabajo es máximo positivo; depende del ángulo real entre fuerza y desplazamiento.
**Ejemplo:** Si la fuerza es perpendicular al desplazamiento, el trabajo es cero.
**Consecuencias:** Sobreestimación o subestimación del trabajo realizado.
**Prevención:** Lee cuidadosamente el enunciado y analiza la geometría del problema.

---

## Estrategia sistemática para evitar errores
1. Enumera todas las fuerzas que actúan sobre el sistema.
2. Dibuja los vectores fuerza y desplazamiento en el mismo gráfico.
3. Calcula el ángulo entre los vectores, no con los ejes.
4. Verifica si la fuerza es constante o variable antes de aplicar fórmulas directas.
5. Comprueba el resultado con el teorema trabajo-energía.
4. Aplica signo físicamente interpretable (energía gana o se disipa).
5. Cierra verificando coherencia con conservación de energía o teorema trabajo-energía.
