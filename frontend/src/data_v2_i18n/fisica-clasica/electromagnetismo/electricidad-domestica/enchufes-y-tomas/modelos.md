## Modelo ideal

El modelo de toma ideal trata los contactos metálicos como conductores perfectos con [[resistencia_de_contacto]] = 0 y por tanto [[potencia_disipada_en_el_contacto]] = 0. En este modelo, la corriente total [[corriente_total_en_la_toma]] fluye sin pérdida desde el pin del enchufe al conductor del circuito. La toma solo actúa como interruptor mecánico y punto de conexión sin efecto térmico propio.

Este modelo ideal es el punto de referencia para definir el concepto de sobrecarga: cuando [[corriente_total_en_la_toma]] supera [[corriente_maxima_nominal]], se supera el límite de diseño del componente, independientemente de [[resistencia_de_contacto]].

## Hipótesis

- Los contactos metálicos son conductores perfectos en el modelo ideal.
- Toda la resistencia parásita del circuito está concentrada en [[resistencia_de_contacto]] cuando el modelo incluye pérdidas de contacto.
- Las cargas son resistivas puras con factor de potencia unitario.
- La corriente es alterna sinusoidal y se usa su valor eficaz (RMS).
- El régimen es permanente: no se modelan transitorios de arranque ni ciclos intermitentes.
- [[potencia_total_simultanea]] = suma de potencias nominales con factor de simultaneidad = 1 (peor caso).

## Dominio de validez cuantitativo

El modelo es válido cuando se cumplen simultáneamente:
- Régimen permanente: tiempo de operación > 30 minutos sin cambios de carga.
- Factor de potencia ≥ 0,85 para las cargas conectadas.
- [[corriente_total_en_la_toma]] ≤ 2 · [[corriente_maxima_nominal]] (para factores de simultaneidad menores que 1, la corriente real puede ser menor).
- [[resistencia_de_contacto]] ≤ 1 Ω (para valores mayores, el modelo de Joule localizado puede subestimar la temperatura real del contacto).

**Condición cuantitativa de riesgo:** [[margen_uso]] ≥ 0,8 en uso continuo (más de 2 horas) activa la zona de vigilancia. [[margen_uso]] ≥ 1 indica sobrecarga activa que requiere acción inmediata. [[potencia_disipada_en_el_contacto]] ≥ 1 W indica disipación de contacto apreciable; [[potencia_disipada_en_el_contacto]] ≥ 5 W es condición de riesgo térmico severo.

## Señales de fallo del modelo

El modelo de Joule localizado falla o es insuficiente cuando:
- El enchufe se calienta apreciablemente con [[corriente_total_en_la_toma]] muy por debajo de [[corriente_maxima_nominal]]: indica [[resistencia_de_contacto]] muy alta, posiblemente por conexión no completamente insertada o contacto muy oxidado.
- La temperatura del enchufe fluctúa sin cambios de carga: puede indicar un contacto intermitente que genera arcos eléctricos locales, fenómeno no modelado por la resistencia estática.
- El calentamiento aparece solo en un polo (fase o neutro) y no en el otro: indica asimetría de [[resistencia_de_contacto]] entre los dos contactos del enchufe.
- Los síntomas aparecen tras arranque de motor (compresor, bomba): el transitorio de arranque puede generar [[corriente_total_en_la_toma]] pico muy superior a la nominal, calentando el contacto aunque la corriente en régimen permanente esté dentro del límite.

Estas señales de fallo observable indican que el modelo estático no es suficiente y que se requiere inspección física del contacto.

## Modelo extendido o alternativo

Cuando el modelo estático es insuficiente, se puede extender incorporando:
1. **Resistencia térmica del contacto al entorno**: permite predecir la temperatura real del contacto en función de [[potencia_disipada_en_el_contacto]] y las condiciones de ventilación. Requiere datos del fabricante (resistencia térmica en K/W).
2. **Modelo de arco eléctrico intermitente**: cuando el contacto está muy degradado, puede generar microarcos que disipan energía de forma no lineal. Este modelo requiere análisis de señal de corriente, no solo valor eficaz.
3. **Factor de simultaneidad real**: en lugar de asumir todos los equipos encendidos al máximo, se puede estimar la probabilidad de que todos estén encendidos al mismo tiempo usando distribuciones estadísticas de uso.

La transición al modelo extendido se justifica cuando el modelo simple predice seguridad pero hay síntomas físicos observables de calentamiento.

## Comparación operativa

| Situación | Modelo adecuado | Variable crítica |
|-----------|----------------|-----------------|
| Verificación preventiva (sin síntomas) | Modelo de [[margen_uso]] | [[margen_uso]] |
| Calentamiento con carga normal | Modelo de Joule + [[resistencia_de_contacto]] | [[potencia_disipada_en_el_contacto]], [[resistencia_de_contacto]] |
| Calentamiento intermitente | Modelo de arco (requiere técnico) | Inspección física |
| Diseño de regleta nueva | Modelo completo con [[potencia_maxima_nominal]] | [[corriente_maxima_nominal]], [[potencia_maxima_nominal]] |

En la práctica doméstica, el modelo de [[margen_uso]] y el modelo de Joule localizado cubren más del 90 % de los casos de diagnóstico sin necesidad de instrumentación específica.

## Cuándo cambiar de modelo

La transicion (cambio de modelo) del esquema de [[margen_uso]] al modelo extendido con [[resistencia_de_contacto]] — cuando conviene cambiar de modelo — se produce cuando los síntomas físicos no son explicables por sobrecarga simple:
- [[margen_uso]] < 0,8 pero el enchufe o regleta está perceptiblemente caliente al tacto.
- La temperatura superficial del plástico supera 40 °C con corriente moderada.
- Hay decoloración, olor o chispa visible en el momento de la conexión.
- La toma tiene más de 15 años de uso continuo en aplicaciones de alta potencia.

En estos casos, el modelo de resistencia estática de Joule localizado debe complementarse con inspección física del contacto o medición directa de [[resistencia_de_contacto]] con instrumento de resolución mili-ohm. Si [[resistencia_de_contacto]] > 0,5 Ω, la sustitución de la toma es la única solución segura.