# Historia

## Problema histórico
Entre los siglos XVIII y XIX, la mecánica clásica avanzó rápidamente en la descripción del movimiento de sólidos rígidos. Sin embargo, había una pregunta práctica todavía abierta: cómo calcular de forma eficiente la inercia de un mismo cuerpo cuando el eje de giro real no pasaba por el centro de masas.

Ingenieros y físicos como Euler y Steiner trabajaban con mecanismos donde el eje útil estaba desplazado por condiciones de montaje. El problema no era teórico menor: sin una regla fiable, cada cambio de eje obligaba a rehacer integrales de masa completas.

## Dificultad conceptual previa
La dificultad principal era distinguir qué parte del efecto inercial pertenecía al cuerpo y cuál pertenecía al lugar elegido para girar. Antes de esa separación conceptual, se mezclaban geometría del objeto y geometría del eje en un solo cálculo largo.

Ese obstáculo volvía poco operativo el análisis de máquinas reales. Aunque la física de fondo era la misma, faltaba una formulación que permitiera trasladar un valor conocido sin perder rigor.

## Qué cambió
El cambio decisivo fue formular explícitamente que la inercia sobre un eje desplazado puede escribirse como suma de una parte centroidal [[Icm]] y una corrección geométrica dependiente de [[d]]. Esa idea convirtió un problema de reintegración en una regla de transferencia física.

Con ello, el cálculo dejó de depender de repetir todo desde cero para cada eje paralelo. El avance no fue solo algorítmico: aportó una forma nueva de leer el sistema, separando propiedad del cuerpo y elección de referencia.

## Impacto en la física
La consecuencia inmediata fue práctica: más velocidad y menos errores en dinámica rotacional aplicada. El teorema permitió diseñar e interpretar mecanismos con ejes reales de trabajo sin abandonar la consistencia de la mecánica clásica.

También tuvo impacto metodológico. Enseñó que cambiar de referencia puede modelarse con reglas estructuradas, no con aproximaciones ad hoc. Esa lógica fortaleció el puente entre teoría matemática y modelado ingenieril.

## Conexión con física moderna
Hoy el teorema sigue vigente en robótica, biomecánica, control de actuadores y diseño de estructuras móviles. En todos esos campos, estimar [[I]] sobre el eje real es clave para predecir demanda de [[tau]] y respuesta de [[alpha]].

La conexión moderna no es nostálgica: es operativa. El teorema continúa funcionando como herramienta de validación geométrica y como filtro de coherencia antes de pasar a simulaciones más complejas.
