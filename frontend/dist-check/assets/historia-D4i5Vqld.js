const e=`\uFEFF# Historia y evolución del concepto\r
\r
## Problema histórico\r
\r
Durante la mayor parte del siglo XX, las instalaciones eléctricas domésticas se mantuvieron con un **enfoque exclusivamente correctivo**: solo se reparaba tras producirse una avería manifiesta. Este paradigma reactivo dominaba tanto en viviendas particulares como en edificios de viviendas, donde la intervención técnica se solicitaba únicamente cuando ya había un fallo evidente: ausencia de suministro, disparo permanente de protecciones, o en el peor de los casos, incendio.\r
\r
El coste de este enfoque era elevado: reparaciones urgentes, sustitución de cableado dañado, y sobre todo, riesgos de seguridad que podrían haberse evitado. La percepción social del riesgo eléctrico se dividía entre el miedo irracional ("la electricidad es peligrosa") y la despreocupación excesiva ("si funciona, no hay problema").\r
\r
## Dificultad conceptual previa\r
\r
El obstáculo fundamental era que **se ignoraba que muchos fallos graves tienen etapa previa detectable**. Antes de que un punto de conexión produzca un incendio o un corte de suministro, habitualmente pasa por fases intermedias:\r
\r
- Calentamiento anómalo perceptible al tacto\r
- Olor leve a plástico caliente\r
- Disparos esporádicos del magnetotérmico bajo ciertas condiciones\r
- Holgura mecánica en el conector\r
- Decoloración de la carcasa\r
\r
Estas señales tempranas eran sistemáticamente ignoradas o normalizadas ("siempre se ha calentado un poco", "a veces salta, pero vuelve a funcionar"), permitiendo que el daño progresara hasta alcanzar el fallo catastrófico.\r
\r
## Qué cambió\r
\r
A partir de las décadas de 1970-1980, la industria eléctrica comenzó a adoptar formalmente el **mantenimiento preventivo**, concepto trasladado desde la industria pesada y las instalaciones industriales. Los elementos clave de este cambio fueron:\r
\r
- **Registro sistemático de incidencias**: Documentar no solo fallos, sino "casi-fallos" y anomalías\r
- **Inspecciones periódicas programadas**: Revisiones regulares sin esperar síntomas graves\r
- **Indicadores de condición**: Medir temperatura, resistencia de aislamiento, holgura de conexiones\r
- **Límites de intervención**: Establecer umbrales numéricos para decidir cuándo actuar\r
\r
La adopción masiva de estas prácticas mejoró drásticamente la seguridad y continuidad de servicio, demostrando que la mayoría de incidentes graves son predecibles y prevenibles.\r
\r
## Impacto en la física\r
\r
El cambio más profundo fue la transformación del concepto de riesgo:\r
\r
| Época | Concepto de riesgo | Enfoque | Metodología |\r
|:---|:---|:---|:---|\r
| **Pre-1970** | Evento aleatorio e impredecible | Correctivo | Reparar tras fallo |\r
| **1970-2000** | Desgaste predecible por tiempo | Preventivo por calendarización | Revisiones periódicas fijas |\r
| **2000-presente** | Proceso medible con variables físicas | Predictivo por condición | Monitoreo de indicadores técnicos |\r
\r
El riesgo pasó de verse como **suerte** ("me ha tocado mala suerte con la instalación") a verse como **proceso físico** donde magnitudes observables —temperatura, resistencia de contacto, tiempo de exposición— determinan la evolución hacia el fallo.\r
\r
### Contribuciones científicas clave\r
\r
- **Efecto térmico (1841)**: James Prescott Joule establece la relación cuantitativa entre corriente, resistencia y calor disipado, fundamento físico de todo análisis térmico en conexiones eléctricas.\r
\r
- **Análisis de fallos (siglo XX)**: La industria aeronáutica y nuclear desarrolla metodologías sistemáticas de análisis de modos de fallo y efectos (FMEA), posteriormente adaptadas a instalaciones eléctricas.\r
\r
- **Termografía infrarroja (desde 1960)**: La disponibilidad de cámaras térmicas accesibles permite detectar puntos calientes de forma no invasiva, revolucionando el mantenimiento predictivo.\r
\r
- **Gestión de activos eléctricos (ISO 55000, 2014)**: Normalización internacional que incluye evaluación de riesgo basada en condición como elemento clave de la gestión de instalaciones.\r
\r
## Conexión con física moderna\r
\r
La sensorización básica y el seguimiento digital permiten hoy cerrar el ciclo completo de gestión de riesgos:\r
\r
1. **Detección**: Sensores de temperatura, registros de disparos, medidores de consumo en tiempo real\r
2. **Análisis**: Software que calcula automáticamente [[P_joule]] estimado y acumula histórico de [[E_joule]]\r
3. **Intervención**: Alertas automáticas cuando se superan umbrales de riesgo\r
4. **Verificación**: Confirmación de mejora mediante nuevas mediciones tras la intervención\r
\r
Las "casas inteligentes" incluyen cada vez más monitoreo de temperatura en puntos críticos y alertas de riesgo eléctrico basadas en los principios de este leaf, democratizando el acceso al mantenimiento predictivo que antes solo estaba al alcance de instalaciones industriales.\r
\r
### Lección histórica para el estudiante\r
\r
La historia de los riesgos eléctricos enseña que **la mayoría de accidentes graves son prevenibles** si se reconocen las señales tempranas y se actúa antes de que el proceso de degradación llegue a su fin. El método técnico de evaluación por [[P_joule]] no es una complicación innecesaria: es la aplicación práctica de un siglo de aprendizaje sobre cómo prevenir el fuego eléctrico mediante la observación sistemática de magnitudes físicas.\r
`;export{e as default};
