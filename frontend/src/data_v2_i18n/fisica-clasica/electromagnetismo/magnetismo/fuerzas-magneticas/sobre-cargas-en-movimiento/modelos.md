## Modelo ideal

El modelo ideal describe una [[carga_electrica]] puntual que se mueve con [[rapidez]] dentro de un [[campo_magnetico]] uniforme. La interaccion se resume mediante [[fuerza_magnetica]], cuyo modulo depende de la orientacion por medio de [[s_theta]]. La simplificacion central es tratar la fuerza como perpendicular al movimiento cuando la entrada es perpendicular al campo.

En ese caso, la [[rapidez]] se mantiene idealmente constante y la fuerza cambia la direccion. La trayectoria se describe con [[a_c]] y [[radio_de_trayectoria]], de modo que el problema magnetico se convierte en un problema de movimiento circular.

## Hipótesis

- La carga es puntual; si tiene estructura extensa, pueden aparecer torques o distribuciones internas.
- El campo es uniforme; si cambia dentro de la vuelta, [[radio_de_trayectoria]] deja de ser constante.
- La [[rapidez]] es no relativista; si crece demasiado, la inercia efectiva cambia.
- No dominan colisiones ni rozamiento; si aparecen, la energia y la trayectoria dejan de seguir el modelo simple.
- La entrada circular usa movimiento perpendicular; si existe componente paralela, la trayectoria se vuelve helicoidal.

## Dominio de validez cuantitativo

El modelo es razonable para campos de laboratorio entre 10^-6 T y varios teslas, siempre que el radio calculado sea compatible con el tamano de la region. Una condicion practica es [[radio_de_trayectoria]] > 1 mm cuando el detector resuelve trayectorias milimetricas; por debajo de esa escala, la geometria instrumental puede dominar la lectura.

Tambien se exige un orden de magnitud no relativista para [[rapidez]]. En haces escolares o de laboratorio basico, velocidades de 10^5 m/s a 10^7 m/s suelen permitir una primera estimacion clasica.

## Señales de fallo del modelo

Una senal de fallo es que la traza observada no conserve curvatura constante aunque el campo se haya supuesto uniforme. Otra senal es que el radio inferido cambie con la posicion sin que cambien [[carga_electrica]], [[masa_de_la_particula]] o [[rapidez]]. Eso apunta a gradientes de campo, colisiones o campos electricos no incluidos.

Tambien falla si el calculo predice una desviacion grande pero el experimento muestra una trayectoria casi recta. En ese caso conviene revisar la orientacion, porque [[s_theta]] puede ser pequeno aunque [[campo_magnetico]] sea intenso.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si existe componente paralela de velocidad, usar trayectoria helicoidal en lugar de circulo plano. Si el campo varia en el espacio, cambiar a integracion numerica de la fuerza vectorial local.

Para particulas de alta energia, la transicion al modelo relativista incorpora la relacion entre energia, momento y curvatura. Para plasmas, pasar al modelo colectivo cuando las interacciones entre particulas ya no son despreciables frente a la accion externa de [[campo_magnetico]].

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Campo | Uniforme y estacionario | Variable en espacio o tiempo |
| Trayectoria | Circular o helicoidal simple | Integrada punto a punto |
| Coste matematico | Bajo, calculo directo de [[fuerza_magnetica]] y [[radio_de_trayectoria]] | Mayor, requiere condiciones iniciales completas |
| Uso recomendado | Estimaciones y problemas de aula | Detectores reales, plasmas y haces de alta energia |