## Errores conceptuales


### Error 1: Creer que el área bajo la curva p-V es una aproximación del trabajo

**Por qué parece correcto**

En otras áreas de la física, las áreas geométricas aparecen como aproximaciones visuales o como resultado de simplificaciones. El alumno puede pensar que la equivalencia [[trabajo_termodinamico]] = área es una regla nemotécnica o una aproximación para procesos simples. El mecanismo cognitivo es la **infraestimación del rigor de la equivalencia integral-área**.

**Por qué es incorrecto**

La equivalencia [[trabajo_termodinamico]] = ∫p dV = área bajo la curva p(V) es exacta por definición de la integral de Riemann. No hay ninguna aproximación. El área geométrica es exactamente el valor de la integral, con la misma precisión que cualquier cálculo analítico.

**Señal de detección**

El alumno dice «el trabajo es aproximadamente el área» o recalcula [[trabajo_termodinamico]] con la fórmula analítica esperando que el resultado difiera del área medida gráficamente.

**Corrección conceptual**

La equivalencia es exacta. Si se traza la curva p(V) con precisión y se mide el área correctamente, el resultado numérico debe coincidir exactamente con el cálculo analítico.

**Mini-ejemplo de contraste**

Para un proceso isobárico a 2×10⁵ Pa que expande el gas de 1 L a 3 L, el área del rectángulo vale 400 J. El cálculo analítico mediante la fórmula del trabajo isobárico arroja exactamente el mismo valor. Son idénticos, no aproximados.

---

## Errores de modelo


### Error 1: Aplicar la lectura del área a procesos irreversibles

**Por qué parece correcto**

El alumno aprende que [[trabajo_termodinamico]] = área bajo la curva p-V y lo generaliza a todos los procesos, incluyendo los irreversibles. Como el diagrama p-V es una herramienta tan útil, es tentador aplicarla siempre. El mecanismo es la **generalización excesiva de una herramienta válida en su dominio**.

**Por qué es incorrecto**

El diagrama p-V solo representa procesos cuasi-estáticos: aquellos en los que el sistema pasa por estados de equilibrio bien definidos. En un proceso irreversible rápido (explosión, expansión libre, compresión brusca), el estado interno del gas no es homogéneo y no existe una presión única que defina un punto en el diagrama p-V. No hay curva trazable y, por tanto, no hay área que leer.

**Señal de detección**

El alumno intenta leer el trabajo de una expansión libre o de una compresión brusca directamente del diagrama p-V, conectando los estados inicial y final con una curva arbitraria.

**Corrección conceptual**

Para procesos irreversibles, el trabajo debe calcularse usando la presión externa del entorno (si es constante) o mediante métodos específicos para procesos irreversibles. El diagrama p-V puede mostrar el estado inicial y el estado final como puntos, pero no la trayectoria.

**Mini-ejemplo de contraste**

En una expansión libre de un gas que pasa de 1 L a 3 L sin presión externa, el [[trabajo_termodinamico]] es nulo. Si se traza una curva entre esos puntos en el diagrama p-V y se mide el área, se obtiene un valor positivo incorrecto. La expansión libre no tiene curva trazable en el diagrama.

---

## Errores matemáticos


### Error 1: Calcular el área con base en el eje p en lugar del eje V

**Por qué parece correcto**

El alumno confunde qué eje es la «base» y cuál es la «altura» al calcular el área bajo la curva. En un diagrama con p en el eje vertical y V en el horizontal, la «base» es el recorrido horizontal (ΔV) y la «altura» es la función p(V). Algunos alumnos invierten esto, tomando la diferencia de presiones como base. El mecanismo es la **confusión entre ejes en la lectura del área**.

**Por qué es incorrecto**

El trabajo es la integral de p sobre V (∫p dV), no la integral de V sobre p (∫V dp, que sería una magnitud termodinámica distinta llamada el «trabajo técnico»). El área que equivale al trabajo se mide proyectando sobre el eje V (base = ΔV), no sobre el eje p.

**Señal de detección**

El alumno calcula el área de un proceso isobárico como Δp × V_media en lugar de p × ΔV, obteniendo un resultado dimensional y numéricamente incorrecto.

**Corrección conceptual**

El área que equivale al trabajo siempre se mide proyectando sobre el eje horizontal ([[volumen]]). La base del rectángulo para un proceso isobárico es ΔV; la altura es p. Para procesos no lineales, la integral se realiza respecto a V.

**Mini-ejemplo de contraste**

Proceso isobárico a 10⁵ Pa que expande el gas de 1 L a 4 L. El área correcta es 300 J (producto de 10⁵ Pa por 3×10⁻³ m³). Un alumno que proyecta sobre el eje de presión en lugar del eje de [[volumen]] obtiene 250 J, resultado incorrecto y sin sentido físico para un proceso donde la presión no varía.

---

## Errores de interpretación


### Error 1: Concluir que el ciclo antihorario siempre es ineficiente o indeseable

**Por qué parece correcto**

El alumno recuerda que el ciclo motor (deseable para un motor de calor) es el ciclo horario, y concluye que cualquier ciclo antihorario es «malo» o ineficiente. El mecanismo es la **aplicación de un criterio correcto fuera de su contexto**.

**Por qué es incorrecto**

Los ciclos antihorarios son los ciclos de refrigeración y bombas de calor, que son igualmente válidos y útiles. Un refrigerador consume trabajo ([[trabajo_neto_del_ciclo]] < 0) para transferir calor del foco frío al foco caliente, lo cual es el objetivo deseado. La «indeseabilidad» solo aplica si el objetivo es producir trabajo, no si el objetivo es mover calor.

**Señal de detección**

El alumno descarta o penaliza un ciclo antihorario sin identificar cuál es el objetivo de la máquina (refrigerador vs. motor).

**Corrección conceptual**

El signo de [[trabajo_neto_del_ciclo]] indica el tipo de máquina, no su eficiencia o deseabilidad. Para un motor, [[trabajo_neto_del_ciclo]] > 0 es el objetivo. Para un refrigerador o bomba de calor, [[trabajo_neto_del_ciclo]] < 0 es exactamente lo que se busca; la eficiencia se mide como calor transferido dividido entre el trabajo consumido.

**Mini-ejemplo de contraste**

Un ciclo antihorario en el diagrama p-V que consuma 200 J de trabajo eléctrico y transfiera 600 J de calor del interior frío al exterior caliente es un excelente refrigerador con COP de 3. Llamarlo «ineficiente» por ser antihorario es un error de interpretación.

---

## Regla de autocontrol rápido

Antes de declarar válida una lectura del diagrama p-V, verificar:

- **Proceso cuasi-estático confirmado**: la curva es continua y suave; si el proceso es una explosión o expansión libre, no hay curva válida.
- **Área medida sobre el eje V**: la base del área es ΔV (eje horizontal), no Δp.
- **Signo correcto**: expansión (trayectoria hacia la derecha) = área positiva = [[trabajo_termodinamico]] > 0.
- **Sentido del ciclo identificado**: horario = motor ([[trabajo_neto_del_ciclo]] > 0); antihorario = refrigerador ([[trabajo_neto_del_ciclo]] < 0).
- **Comparación entre trayectorias**: si se comparan dos procesos entre los mismos estados, la de mayor área da mayor [[trabajo_termodinamico]], pero ambos resultados son válidos y físicamente posibles.