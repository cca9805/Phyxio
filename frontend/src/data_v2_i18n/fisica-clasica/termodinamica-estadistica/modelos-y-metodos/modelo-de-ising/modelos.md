## Modelo ideal

El modelo ideal representa el material como una red fija de [[numero_espines]] variables binarias [[espin]]. Cada [[espin]] solo puede tomar dos orientaciones y solo interactúa con vecinos mediante [[acoplamiento]]. El [[campo_externo]] puede favorecer una orientación, mientras que la [[temperatura]] determina cuánto pesan las configuraciones energéticamente desfavorables. La predicción se resume en [[energia_ising]], [[magnetizacion_total]], [[magnetizacion_media]] y [[probabilidad_configuracion]].

## Hipótesis

- Red fija: si cambia la geometría o aparecen defectos, el conteo de vecinos deja de ser uniforme.
- [[espin]] binario: si el momento magnético tiene orientaciones continuas, el modelo pierde detalle.
- [[acoplamiento]] homogéneo: si los enlaces cambian de signo o intensidad, la [[energia_ising]] deja de tener una interpretación única simple.
- Equilibrio térmico: si no hay equilibrio, [[probabilidad_configuracion]] no se obtiene solo con peso de Boltzmann.
- [[campo_externo]] uniforme: si varía espacialmente, [[magnetizacion_total]] puede ocultar dominios locales.

## Dominio de validez cuantitativo

Para uso didáctico, conviene [[numero_espines]] ≥ 10² si se quiere una tendencia colectiva estable. En redes pequeñas, [[magnetizacion_media]] puede fluctuar mucho. La comparación relevante es |[[acoplamiento]]| frente a [[constante_boltzmann]]·[[temperatura]]. Si [[temperatura]] > 0 y |[[campo_externo]]| no domina totalmente a |[[acoplamiento]]|, el modelo muestra la competencia térmica. Con |[[campo_externo]]| ≫ |[[acoplamiento]]|, casi todo queda impuesto por el campo.

## Señales de fallo del modelo

El modelo empieza a fallar si se observan respuestas dependientes de historia, histéresis real, anisotropías fuertes, impurezas dominantes o interacciones largas. También es señal de fallo interpretar una sola configuración como predicción macroscópica completa. Si dos simulaciones pequeñas dan [[magnetizacion_media]] muy distinta, puede faltar tamaño o promedio estadístico.

## Modelo extendido o alternativo

Puede usarse Ising con acoplamientos aleatorios, campo local, red tridimensional o condiciones de contorno específicas. Si los espines tienen orientación continua, conviene un modelo XY o Heisenberg. Si interesa la dinámica temporal, se necesita una regla cinética o Monte Carlo. También se puede extender el modelo para incluir interacciones de segundo vecino, que modifican la [[energia_ising]] a mayor alcance. En todos estos casos, la lectura de [[magnetizacion_media]] y [[probabilidad_configuracion]] se mantiene estructuralmente, pero el rango de [[temperatura]] donde aparece cooperación colectiva puede desplazarse o bifurcarse respecto al caso ideal de solo primeros vecinos, y el criterio de [[beta_termica]] sigue siendo la escala clave para comparar interacción y agitación.


Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.
## Comparación operativa

| Situación | Modelo adecuado | Lectura principal |
| Espines binarios con vecinos | Ising ideal | [[magnetizacion_media]] frente a [[temperatura]] |
| Campo fuerte uniforme | Ising con campo | Sesgo de [[magnetizacion_total]] |
| Enlaces desordenados | Ising aleatorio | Frustración y dominios |
| Espines continuos | Modelo XY/Heisenberg | Orientación vectorial |