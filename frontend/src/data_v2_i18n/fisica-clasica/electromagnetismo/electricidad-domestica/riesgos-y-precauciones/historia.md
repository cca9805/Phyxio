# Historia y evolución del concepto

## Problema histórico

Durante la mayor parte del siglo XX, las instalaciones eléctricas domésticas se mantuvieron con un **enfoque exclusivamente correctivo**: solo se reparaba tras producirse una avería manifiesta. Este paradigma reactivo dominaba tanto en viviendas particulares como en edificios de viviendas, donde la intervención técnica se solicitaba únicamente cuando ya había un fallo evidente: ausencia de suministro, disparo permanente de protecciones, o en el peor de los casos, incendio.

El coste de este enfoque era elevado: reparaciones urgentes, sustitución de cableado dañado, y sobre todo, riesgos de seguridad que podrían haberse evitado. La percepción social del riesgo eléctrico se dividía entre el miedo irracional ("la electricidad es peligrosa") y la despreocupación excesiva ("si funciona, no hay problema").

## Dificultad conceptual previa

El obstáculo fundamental era que **se ignoraba que muchos fallos graves tienen etapa previa detectable**. Antes de que un punto de conexión produzca un incendio o un corte de suministro, habitualmente pasa por fases intermedias:

- Calentamiento anómalo perceptible al tacto
- Olor leve a plástico caliente
- Disparos esporádicos del magnetotérmico bajo ciertas condiciones
- Holgura mecánica en el conector
- Decoloración de la carcasa

Estas señales tempranas eran sistemáticamente ignoradas o normalizadas ("siempre se ha calentado un poco", "a veces salta, pero vuelve a funcionar"), permitiendo que el daño progresara hasta alcanzar el fallo catastrófico.

## Qué cambió

A partir de las décadas de 1970-1980, la industria eléctrica comenzó a adoptar formalmente el **mantenimiento preventivo**, concepto trasladado desde la industria pesada y las instalaciones industriales. Los elementos clave de este cambio fueron:

- **Registro sistemático de incidencias**: Documentar no solo fallos, sino "casi-fallos" y anomalías
- **Inspecciones periódicas programadas**: Revisiones regulares sin esperar síntomas graves
- **Indicadores de condición**: Medir temperatura, resistencia de aislamiento, holgura de conexiones
- **Límites de intervención**: Establecer umbrales numéricos para decidir cuándo actuar

La adopción masiva de estas prácticas mejoró drásticamente la seguridad y continuidad de servicio, demostrando que la mayoría de incidentes graves son predecibles y prevenibles.

## Impacto en la física

El cambio más profundo fue la transformación del concepto de riesgo:

| Época | Concepto de riesgo | Enfoque | Metodología |
|:---|:---|:---|:---|
| **Pre-1970** | Evento aleatorio e impredecible | Correctivo | Reparar tras fallo |
| **1970-2000** | Desgaste predecible por tiempo | Preventivo por calendarización | Revisiones periódicas fijas |
| **2000-presente** | Proceso medible con variables físicas | Predictivo por condición | Monitoreo de indicadores técnicos |

El riesgo pasó de verse como **suerte** ("me ha tocado mala suerte con la instalación") a verse como **proceso físico** donde magnitudes observables —temperatura, resistencia de contacto, tiempo de exposición— determinan la evolución hacia el fallo.

### Contribuciones científicas clave

- **Efecto térmico (1841)**: James Prescott Joule establece la relación cuantitativa entre corriente, resistencia y calor disipado, fundamento físico de todo análisis térmico en conexiones eléctricas.

- **Análisis de fallos (siglo XX)**: La industria aeronáutica y nuclear desarrolla metodologías sistemáticas de análisis de modos de fallo y efectos (FMEA), posteriormente adaptadas a instalaciones eléctricas.

- **Termografía infrarroja (desde 1960)**: La disponibilidad de cámaras térmicas accesibles permite detectar puntos calientes de forma no invasiva, revolucionando el mantenimiento predictivo.

- **Gestión de activos eléctricos (ISO 55000, 2014)**: Normalización internacional que incluye evaluación de riesgo basada en condición como elemento clave de la gestión de instalaciones.

## Conexión con física moderna

La sensorización básica y el seguimiento digital permiten hoy cerrar el ciclo completo de gestión de riesgos:

1. **Detección**: Sensores de temperatura, registros de disparos, medidores de consumo en tiempo real
2. **Análisis**: Software que calcula automáticamente [[potencia_termica_disipada]] estimado y acumula histórico de [[energia_termica_acumulada]]
3. **Intervención**: Alertas automáticas cuando se superan umbrales de riesgo
4. **Verificación**: Confirmación de mejora mediante nuevas mediciones tras la intervención

Las "casas inteligentes" incluyen cada vez más monitoreo de temperatura en puntos críticos y alertas de riesgo eléctrico basadas en los principios de este leaf, democratizando el acceso al mantenimiento predictivo que antes solo estaba al alcance de instalaciones industriales.

### Lección histórica para el estudiante

La historia de los riesgos eléctricos enseña que **la mayoría de accidentes graves son prevenibles** si se reconocen las señales tempranas y se actúa antes de que el proceso de degradación llegue a su fin. El método técnico de evaluación por [[potencia_termica_disipada]] no es una complicación innecesaria: es la aplicación práctica de un siglo de aprendizaje sobre cómo prevenir el fuego eléctrico mediante la observación sistemática de magnitudes físicas.