# Aplicaciones

## 1. Diagnóstico de cuadros con disparos recurrentes

Cuando un diferencial o magnetotérmico salta repetidamente, el análisis de [[corriente_de_carga]], [[desequilibrio_diferencial]], [[margen_termico]] y [[margen_dif]] permite distinguir entre tres causas fundamentalmente diferentes: exceso de carga en el circuito, fuga real de corriente a tierra, o disparo aparente por condiciones ambientales. Sin este análisis, la intervención habitual es cambiar el dispositivo que saltó, lo que soluciona el síntoma pero no la causa y puede dejar la instalación en una situación más peligrosa que antes.

La aplicación práctica consiste en medir [[corriente_de_carga]] con una pinza amperimétrica durante el uso normal del circuito, calcular [[margen_termico]] = [[corriente_de_carga]] / [[corriente_nominal_del_magnetotermico]], y comparar con 1. Si [[margen_termico]] < 0,85, el origen del disparo no es sobrecarga permanente: hay que buscar transitorio de arranque o causa diferencial. Paralelamente, si se puede medir [[corriente_de_fase]] e [[corriente_de_neutro]] por separado, [[desequilibrio_diferencial]] = |[[corriente_de_fase]] − [[corriente_de_neutro]]| permite evaluar [[margen_dif]] y cuantificar la fuga.

Variable dominante: ** [[desequilibrio_diferencial]] para el diagnóstico diferencial; [[corriente_de_carga]] para el diagnóstico magnetotérmico.

Límite de validez: ** El análisis es válido para instalaciones monofásicas residenciales con calibres estándar. No es directamente aplicable a instalaciones con variadores de frecuencia o alta densidad de cargas electrónicas, donde los armónicos pueden generar disparos fantasma.

## 2. Dimensionamiento en reformas de vivienda

Al añadir nuevas cargas o ampliar circuitos, el análisis de [[potencia_limite_magnetotermica]] = [[tension_de_suministro]] × [[corriente_nominal_del_magnetotermico]] permite decidir si el circuito existente tiene capacidad suficiente o si requiere un nuevo magnetotérmico con mayor [[corriente_nominal_del_magnetotermico]]. La regla de diseño es que la suma de [[corriente_de_carga]] de las cargas previstas no supere el 80 % de [[corriente_nominal_del_magnetotermico]] para disponer de margen de seguridad operativo: [[margen_termico]] ≤ 0,80 en condiciones de uso normal. Superar el 80 % aumenta el riesgo de disparos frecuentes ante transitorios de arranque de motores o cargas con factor de cresta elevado.

Antes de cambiar el calibre [[corriente_nominal_del_magnetotermico]] del magnetotérmico, hay que verificar que el conductor del circuito tiene la sección adecuada para la nueva corriente. Un magnetotérmico de 25 A en un circuito cableado con sección para 16 A puede no actuar a tiempo ante una sobrecarga que dañe el aislamiento del cable.

Variable dominante: ** [[potencia_limite_magnetotermica]] para la evaluación de capacidad del circuito; [[corriente_nominal_del_magnetotermico]] como parámetro de diseño.

Límite de validez: ** El criterio del 80 % de [[margen_termico]] es una regla práctica conservadora. Para cargas puramente resistivas (resistencias eléctricas, calefactores), se puede llegar al 90 %. Para motores, compresor, y cargas con alta corriente de arranque, hay que aplicar factores de corrección adicionales.

## 3. Incidencias en zonas húmedas

Los disparos diferenciales estacionales —más frecuentes en invierno o con lluvia— corresponden habitualmente a degradación de aislamiento que aumenta [[desequilibrio_diferencial]] al crecer la humedad. El análisis de [[margen_dif]] en distintas condiciones ambientales permite confirmar este diagnóstico sin necesidad de desmontar toda la instalación. Un [[margen_dif]] de 0,7 en época seca que sube a 0,95 en época húmeda indica degradación progresiva del aislamiento que merece intervención preventiva antes del primer disparo.

Los aparatos más susceptibles en zonas húmedas son los calefactores de baño, los secadores de pelo, las bombas de sump y los electrodomésticos próximos a puntos de agua. En cada caso, el cálculo de [[desequilibrio_diferencial]] y [[margen_dif]] en condiciones de uso normal permite cuantificar el riesgo y priorizar la revisión.

Variable dominante: ** [[desequilibrio_diferencial]] y [[margen_dif]] como indicadores de degradación de aislamiento.

Límite de validez: ** Válido para diferenciales tipo AC en presencia de corriente alterna pura. Si el circuito incluye aparatos con fuentes conmutadas (ordenadores, cargadores, televisores), la componente de CC puede requerir diferencial tipo A para detección fiable.

## 4. Verificación de instalaciones antes de la puesta en servicio

En instalaciones nuevas o tras reformas, verificar que [[margen_termico]] y [[margen_dif]] están dentro de márgenes seguros antes de conectar la carga definitiva. Un [[margen_dif]] mayor de 0,5 con instalación en vacío (sin cargas conectadas) indica fugas residuales en el cableado o en los aparatos ya conectados que deben corregirse antes de la primera puesta en uso. Un [[margen_termico]] mayor de 0,8 con la carga de diseño indica que el circuito opera cerca del límite y puede necesitar redistribución.

El procedimiento correcto es conectar las cargas en grupos sucesivos y medir [[desequilibrio_diferencial]] después de cada adición. Si [[margen_dif]] sube significativamente al añadir un aparato concreto, ese aparato tiene fuga de aislamiento y debe revisarse o sustituirse antes de su uso continuado.

Variable dominante: ** [[margen_dif]] para verificación de aislamiento; [[margen_termico]] para verificación de capacidad de carga.

Límite de validez: ** Las mediciones en vacío representan condiciones de baja temperatura del aislamiento. Las fugas de aislamiento aumentan con la temperatura de operación, por lo que las mediciones en condiciones de uso prolongado son más representativas del comportamiento en servicio real.

## 5. Formación técnica y resolución de incidencias de seguridad

Este análisis es la base para cualquier protocolo de respuesta ante incidentes eléctricos en vivienda. Saber que [[desequilibrio_diferencial]] < [[umbral_diferencial_nominal]] no garantiza ausencia de defecto térmico local, y que [[corriente_de_carga]] < [[corriente_nominal_del_magnetotermico]] no garantiza ausencia de fuga significativa, son dos principios que cambian radicalmente la forma en que se evalúa la seguridad de una instalación. La formación en el uso de [[margen_termico]] y [[margen_dif]] como herramientas de diagnóstico continuo, en lugar de tratar los disparos como eventos binarios, es el núcleo del análisis técnico moderno de instalaciones residenciales.

Variable dominante: ** [[margen_dif]] y [[margen_termico]] como indicadores de estado de la instalación.

Límite de validez: ** Aplicable a instalaciones monofásicas residenciales con configuración estándar de cuadro. Para instalaciones industriales, trifásicas o con protecciones especiales, se requieren criterios adicionales específicos de cada tipo de instalación.