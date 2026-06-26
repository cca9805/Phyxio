# Aplicaciones

## 1. Planificación horaria de cargas domésticas

**Contexto físico real:**

La estructura tarifaria de electricidad residencial en mercados liberalizados penaliza las demandas simultáneas de potencia elevada mediante términos de potencia contratada y discriminación horaria. Un hogar típico europeo con potencia contratada de 5.75 kW (25 A a 230 V) enfrenta penalizaciones si supera este umbral, mientras que tarifas como PVPC en España pueden variar el precio del kWh en factor 3× entre valle y punta.

**Hipótesis o simplificación dominante:**

Se asume que los electrodomésticos tienen potencia constante durante su ciclo de operación y que la simultaneidad real es evitable mediante programación consciente. Se ignora la potencia de arranque de motores (3-7× nominal) asumiendo que los magnetotérmicos tipo C toleran estos picos transitorios. La tensión de red se considera estable en 230 V sin caídas significativas bajo carga.

El análisis se basa en la relación fundamental entre [[potencia_electrica]], [[tension_electrica]] e [[intensidad_de_corriente]], donde la potencia total simultánea determina si se excede el límite contratado. Para un hogar con múltiples electrodomésticos de alta potencia (horno 2000 W, lavadora 1500 W, termo 1200 W), la suma aritmética 4700 W excedería típicamente la potencia contratada de 3450 W (15 A).

Variable dominante: ** Potencia simultánea total calculada como suma de potencias individuales de electrodomésticos en operación concurrente.

**Interpretación física:**

La planificación horaria explota el hecho de que la potencia doméstica requerida en cada instante es el resultado de la superposición temporal de ciclos individuales. Desplazar la operación de electrodomésticos no urgentes (lavavajillas, lavadora) a franjas de baja demanda reduce el máximo de la función P(t) sin reducir la energía total consumida E = ∫P(t)dt.

Los beneficios incluyen: (a) evitación de penalizaciones por exceso de potencia, (b) reducción de cargos por demanda punta en tarifas horarias, (c) prevención de disparos molestos de magnetotérmicos, y (d) extensión de vida útil de electrodomésticos al reducir estrés térmico por ciclos de temperatura.

**Implementación práctica concreta:**

- Ejecutar la lavadora por la noche (22h-06h) cuando horno y microondas están apagados, aprovechando tarifas valle.
- Programar el lavavajillas para iniciar después de que el ciclo del termo eléctrico termine, evitando la superposición simultánea de 1200 W del lavavajillas y 1500 W de la lavadora (2700 W en total).
- Usar temporizadores en electrodomésticos de alta potencia para escalonar el arranque con diferencias > 30 min.
- Monitorear el vatímetro del hogar para identificar períodos de uso punta y ajustar hábitos.

Límite de validez: ** Válido cuando la temporalización de uso es flexible (no aplica a necesidades inmediatas como cocinar). Requiere electrodomésticos con programación horaria o enchufes inteligentes. No considera potencia reactiva de motores ni factor de potencia. El ahorro económico depende de la tarifa específica; en tarifas planas sin término de potencia, el beneficio se limita a evitar disparos.

**Resultados esperados:** Los hogares típicos pueden reducir la demanda punta en un 20-30% mediante programación inteligente sin ningún cambio de equipamiento, traduciéndose en ahorros anuales de €100-300 dependiendo de la tarifa y región.

---

## 2. Comparación económica de electrodomésticos por TCO

**Contexto físico real:**

La selección de electrodomésticos en puntos de venta se basa tradicionalmente en precio de compra, capacidades nominales y características funcionales. Sin embargo, la física del consumo energético determina que el coste total de propiedad (TCO) incluye un componente operativo que puede exceder ampliamente la inversión inicial durante la vida útil del aparato (típicamente 10-15 años).

**Hipótesis o simplificación dominante:**

Se asume operación a potencia nominal constante sin considerar ciclos de trabajo reales ni degradación por envejecimiento. Se utiliza precio medio de electricidad constante sin inflación ni variación tarifaria futura. La eficiencia energética del electrodoméstico se considera invariante en el tiempo (no se modela degradación de aislamiento término ni sellos).

El cálculo se basa en la relación entre [[energia_consumida]], [[potencia_en_kilovatios]] y [[t_h]], donde la energía anual depende linealmente de la potencia nominal para uso determinado. Un error común es comparar potencias sin considerar tiempo de uso: un horno de 2000 W usado 30 minutos diarios consume 365 kWh/año, mientras que un frigorífico de 150 W en funcionamiento continuo consume 1314 kWh/año.

Variable dominante: ** Coste total de propiedad calculado sumando el precio de compra más el producto de la potencia nominal por las horas anuales de uso, los años de vida útil y la tarifa del kWh.

**Interpretación física:**

La eficiencia energética de un electrodoméstico se cuantifica mediante la relación entre servicio útil entregado y energía eléctrica consumida. Un refrigerador eficiente (A+++) extrae la misma cantidad de calor del interior usando 700 kWh/año versus 2190 kWh/año de un modelo antiguo ineficiente, manteniendo la temperatura objetivo con menor disipación I²R en el compresor y bobinas.

La comparación económica requiere: (a) estimar horas anuales de operación, (b) convertir potencia a energía mediante E(kWh) = P(kW) × t(h), (c) calcular coste anual multiplicando por tarifa, y (d) sumar sobre vida útil. El modelo eficiente con precio de compra superior puede recuperar la diferencia mediante ahorros operativos.

**Ejemplo comparativo detallado:**

| Electrodoméstico | Potencia | Uso anual | Energía/año | Coste/año @ €0.15/kWh | TCO 10 años |
|------------------|----------|-----------|-------------|----------------------|-------------|
| Frigo A+++ eficiente | 80 W | 8760 h | 700 kWh | €105 | €1050 + precio |
| Frigo estándar | 150 W | 8760 h | 1314 kWh | €197 | €1970 + precio |
| Frigo viejo ineficiente | 250 W | 8760 h | 2190 kWh | €328 | €3280 + precio |

Límite de validez: ** Aplicable para electrodomésticos con uso predecible y continuo (frigoríficos, congeladores). No aplica a usos intermitentes donde el comportamiento del usuario domina sobre la eficiencia del aparato (hornos, aspiradoras). Supone tarifa constante; en realidad, las tarifas horarias pueden alterar el cálculo. Requiere verificación de etiqueta energética real versus nominal, existiendo casos de desviación por uso real diferente al estándar de laboratorio.

**Potencial de ahorro:** El electrodoméstico eficiente ahorra €223/año comparado con el modelo viejo, recuperando típicamente un sobreprecio de €300-500 en 2-3 años y generando ahorros netos de €1500-2000 durante la vida útil.

---

## 3. Optimización de autoconsumo fotovoltaico residencial

**Contexto físico real:**

Los sistemas fotovoltaicos residenciales generan potencia variable según irradiancia solar, con picos al mediodía solares (tipicamente 10h-14h en verano, 11h-13h en invierno) y nulos al amanecer/atardecer/noche. El desafío físico radica en que el perfil de generación solar P_solar(t) raramente coincide con el perfil de demanda doméstica P_demand(t), que típicamente presenta picos matutinos (desayuno, ducha) y vespertinos (cena, iluminación).

**Hipótesis o simplificación dominante:**

Se asume generación solar ideal sin sombreado ni degradación por polvo/temperatura. Se considera que la potencia de electrodomésticos es ajustable en tiempo (carga diferible) pero no divisible (no se puede lavar media lavadora). Se ignora la eficiencia de inversor (supuesta 100%) y pérdidas por autodescarga de baterías. La tensión de red se mantiene estable permitiendo inyección sin limitaciones técnicas.

El análisis se centra en maximizar la coincidencia temporal entre generación y consumo, minimizando la energía excedente exportada a red (típicamente con compensación económica inferior al valor del kWh consumido) y la energía importada de red durante déficits.

Variable dominante: ** Tasa de autoconsumo calculada como energía_consumida_localmente / energía_generada_total, objetivo > 70% para rentabilidad óptima.

**Interpretación física:**

La optimización requiere desplazar cargas eléctricas flexibles temporalmente hacia períodos de pico solar. La potencia instantánea disponible del sistema fotovoltaico sigue una curva aproximadamente gaussiana centrada al mediodía solar. Superponer el consumo de electrodomésticos de alta potencia (lavadoras 1500 W, lavavajillas 1200 W) sobre este pico maximiza el uso directo de generación local.

Las estrategias incluyen: (a) programar lavadora/lavavajillas durante ventana solar 10h-14h, (b) pre-calentar termo eléctrico usando excedente diurno para uso nocturno, (c) cargar vehículos eléctricos preferentemente en horas solares. Cuando el desfase temporal no es eliminable mediante desplazamiento de carga, el almacenamiento en baterías permite transferencia temporal de energía excedente.

**Proceso de análisis detallado:**

1. Medir o estimar el perfil de consumo horario P_demand(t) en kWh por hora a lo largo del día típico.
2. Modelar el perfil de generación solar P_solar(t) según latitud, inclinación de paneles, y estación.
3. Identificar períodos de desajuste (alto consumo cuando P_solar ≈ 0, o P_solar > P_demand sin carga utilizable).
4. Dimensionar baterías para acumular excedente P_solar - P_demand y descargar durante déficits.
5. Ajustar la temporalización del consumo diferible para maximizar superposición P_solar(t) × P_demand(t).

Límite de validez: ** Aplicable únicamente a sistemas fotovoltaicos conectados a red (on-grid) con medición bidireccional. No considera sistemas aislados (off-grid) donde el balance energético debe ser estricto. Requiere electrodomésticos programables o presencia doméstica durante horas solares para carga manual. La rentabilidad depende de la tarifa de compensación por excedentes (típicamente 50-70% del precio de compra). En regiones con baja irradiancia o sombreado severo, el autoconsumo máximo teórico puede ser inalcanzable.

**Impacto económico:** El autoconsumo optimizado puede aumentar el valor de la inversión solar en un 30-50% comparado con sistemas no optimizados, reduciendo el período de retorno de inversión de 10-12 años a 6-8 años en condiciones favorables.

---

## 4. Programas de educación energética doméstica

**Contexto físico real:**

La alfabetización energética de la población general es baja, con confusión sistemática entre conceptos de potencia (kW), energía (kWh), y coste económico. Cuando los miembros del hogar comprenden la relación física entre potencia, tiempo de uso, y coste derivado, emergen cambios de comportamiento que reducen consumo sin degradación de servicio.

**Hipótesis o simplificación dominante:**

Se asume que la retroalimentación inmediata de información energética modifica el comportamiento de usuarios racionales económicamente. Se considera que la potencia de electrodomésticos es conocida (lectura de etiqueta) y estable. Se ignora la variabilidad interpersonal en respuesta a incentivos económicos versus ambientales. La tarifa se supone constante para simplificar cálculos mentales.

El marco educativo se basa en hacer visible lo invisible: la electricidad fluye sin indicadores sensoriales directos de magnitud o coste. Transformar la abstracción física en feedback numérico inmediato (cuantificar cada acto en kWh y en euros) crea asociación causa-efecto previamente ausente.

Variable dominante: ** Intensidad energética del hogar medida en kWh/m²/año o kWh/persona/año, objetivo de reducción 10-15% mediante cambios de comportamiento.

**Interpretación física:**

La educación energética explota la capacidad humana de optimización cuando se proporciona información completa. La potencia instantánea [[potencia_electrica]] es la derivada temporal de energía; integrada sobre el tiempo de uso [[t_h]] produce la energía consumida [[energia_consumida]]. Multiplicando por la tarifa unitaria se obtiene el coste monetario directo del acto de consumo.

Cuando los usuarios internalizan que una ducha de 10 min con calentador eléctrico de 4000 W consume 0.67 kWh (4000 W × 10/60 h), equivalente a €0.10 con tarifa €0.15/kWh, la elección de reducir a 5 minutos se convierte en decisión económica racional. Conectar comportamientos con impacto ambiental (cada kWh ahorrado evita aproximadamente 0.5 kg CO₂) permite decisiones alineadas con valores ambientales.

**Herramientas educativas efectivas:**

- Monitores de energía en tiempo real mostrando [[potencia_electrica]] instantánea y [[energia_consumida]] acumulada diaria.
- Traducción de actos a coste inmediato: "esta ducha costó €0.35" versus "el horno de 1h costó €0.80".
- Gamificación con desafíos familiares semanales de reducción de kWh.
- Visualización de huella de carbono: "este mes hemos evitado 150 kg CO₂".

**Cambios de comportamiento observados:**

- Reducción de potencia en standby mediante desconexión física de dispositivos no usados (cada transformador en standby consume 2-5 W, sumando 50-100 W por hogar).
- Duchas más cortas cuando el coste es transparente y comparable a alternativas (café, golosina).
- Preferencia por métodos de cocción eficientes: microondas (1000 W durante 5 min consume solo 0.08 kWh) frente al horno (2000 W durante 30 min consume 1 kWh) para tareas pequeñas.
- Aceptación de ajustes de termostato de ±1°C con impacto cuantificado (calefacción/climatización representa 40-60% del consumo doméstico).

Límite de validez: ** Efectivo en hogares con disponibilidad económica suficiente para que el ahorro sea relevante pero no crítico. Menos efectivo en contextos de pobreza energética donde la satisfacción de necesidades básicas domina sobre optimización. Requiere cierto nivel de alfabetización numérica básica para interpretar kWh y costes. No sustituye a medidas estructurales (aislamiento térmico, eficiencia de equipos). El efecto puede decaer con el tiempo por habituación (requiere recordatorios periódicos).

**Resultados medidos:** Los hogares con programas de educación energética bien diseñados típicamente logran una reducción de consumo del 10-15% a través de cambios de comportamiento solamente, sin inversión en equipamiento, traduciéndose en ahorros anuales de €150-300 para hogar medio.

---

## 5. Auditoría de seguridad eléctrica preventiva

**Contexto físico real:**

Las instalaciones eléctricas domésticas, particularmente en viviendas antiguas (> 30 años) o con modificaciones no profesionales, operan frecuentemente cerca o por encima de sus límites de diseño original. La superposición temporal de electrodomésticos modernos de alta potencia sobre circuitos dimensionados para cargas históricas más bajas crea riesgos de sobrecalentamiento, fallos de aislamiento, e incendios.

**Hipótesis o simplificación dominante:**

Se asume que la potencia nominal de placa de electrodomésticos es representativa del consumo real. Se considera simultaneidad realista basada en hábitos de uso (no todas las cargas operan simultáneamente al 100%). Se ignora la potencia de arranque de motores asumiendo que los transitorios son breves frente a constantes térmicas de cables. La resistencia de cableado se supone dentro de especificaciones sin deterioro significativo por envejecimiento.

El análisis se basa en la ley de Ohm —dividir [[potencia_electrica]] entre [[tension_electrica]] para obtener [[intensidad_de_corriente]]— y en la suma de corrientes individuales para obtener la corriente total en cargas en paralelo. La capacidad de un circuito con protección de 16 A se agota cuando la corriente total demandada excede 16 A, equivalente a 3680 W a 230 V. El cableado debe soportar esta corriente continuamente sin superar 60-70°C (límite de aislamiento PVC típico).

Variable dominante: ** Margen de seguridad calculado como (I_max_protección - I_calculada_simultánea) / I_max_protección, objetivo > 20% (I_operación < 80% I_nominal).

**Interpretación física:**

La auditoría sistematiza la evaluación de riesgo térmico del cableado. La potencia disipada en un conductor por efecto Joule es proporcional al cuadrado de la corriente multiplicado por la resistencia del cable, cuadrática con [[intensidad_de_corriente]]. Un aumento del 20% en corriente (de 13 A a 16 A) produce un aumento del 44% en calor generado en el mismo cable. El calentamiento progresivo degrada el aislamiento, reduciendo su resistencia dieléctrica hasta eventual fallo cortocircuito o arco eléctrico.

El procedimiento de auditoría identifica: (a) circuitos donde I_calculada > I_protección (riesgo inmediato), (b) circuitos donde I_calculada > 0.8·I_protección (riesgo de degradación acelerada), (c) circuitos con márgenes cómodos para expansiones futuras.

**Procedimiento de auditoría detallado:**

1. Inventariar todos los electrodomésticos por circuito con sus potencias nominales de placa.
2. Calcular corriente individual de cada aparato dividiendo su [[potencia_electrica]] entre 230 V. Resultado en amperios.
3. Estimar simultaneidad realista (ej. cocina: horno + vitro + microondas nunca al 100% simultáneamente).
4. Calcular [[intensidad_de_corriente]] máxima simultánea por circuito.
5. Comparar contra [[intensidad_de_corriente]] nominal del magnetotérmico y sección del cable (1.5 mm² → ~16 A, 2.5 mm² → ~25 A).
6. Clasificar riesgos según margen de seguridad.

**Priorización de riesgos:**

- **Crítico:** Circuitos donde I_calculada > I_protección (operación por encima de 100%). Riesgo inmediato de disparo continuo, degradación térmica acelerada, potencial incendio. Requiere intervención urgente: redistribución de cargas o actualización de circuito.

- **Alto:** Circuitos con 0.8·I_protección < I_calculada < I_protección. Riesgo de degradación progresiva del aislamiento por operación sostenida cerca del límite térmico. Recomendable redistribución o ampliación de capacidad.

- **Medio:** Circuitos operando dentro de norma pero con capacidad marginal para nuevas cargas planificadas. Requiere precaución al añadir electrodomésticos.

- **Bajo:** Circuitos con I_calculada < 0.6·I_protección, márgenes de seguridad cómodos para expansión futura.

Límite de validez: ** La auditoría teórica complementa pero no sustituye a inspección física por electricista cualificado. No detecta defectos de instalación (conexiones flojas, cableado deteriorado, protecciones falsificadas). Requiere que los valores de placa de electrodomésticos sean legibles y representativos. La simultaneidad estimada puede variar por cambios de hábitos. No considera potencia reactiva ni factor de potencia, underestimando ligeramente la corriente real en cargas inductivas.

**Ejemplo práctico ilustrativo:**

Un circuito de cocina con protección de 16 A tiene capacidad teórica de 3680 W a 230 V. La auditoría revela: horno 2000 W, vitrocerámica 1500 W, microondas 800 W, frigorífico 150 W. Con simultaneidad realista (horno + vitro al 80% nunca simultáneo, microondas uso puntual), la carga máxima estimada es 2000 + 150 + 800 = 2950 W → 12.8 A, dentro del margen seguro (< 12.8 A). Sin embargo, si el hogar añade un freidora de aire de 1500 W usando el mismo circuito, la nueva carga máxima 4450 W → 19.3 A excede la protección de 16 A, requiriende redistribución o circuito dedicado antes de la instalación.