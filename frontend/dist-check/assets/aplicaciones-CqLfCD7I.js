const e=`# Aplicaciones del análisis de diferencial y magnetotérmico\r
\r
## 1. Diagnóstico de cuadros con disparos recurrentes\r
\r
Cuando un diferencial o magnetotérmico salta repetidamente, el análisis de [[I]], [[I_delta]], [[margen_termico]] y [[margen_dif]] permite distinguir entre tres causas fundamentalmente diferentes: exceso de carga en el circuito, fuga real de corriente a tierra, o disparo aparente por condiciones ambientales. Sin este análisis, la intervención habitual es cambiar el dispositivo que saltó, lo que soluciona el síntoma pero no la causa y puede dejar la instalación en una situación más peligrosa que antes.\r
\r
La aplicación práctica consiste en medir [[I]] con una pinza amperimétrica durante el uso normal del circuito, calcular [[margen_termico]] = [[I]] / [[I_n]], y comparar con 1. Si [[margen_termico]] < 0,85, el origen del disparo no es sobrecarga permanente: hay que buscar transitorio de arranque o causa diferencial. Paralelamente, si se puede medir [[I_fase]] e [[I_neutro]] por separado, [[I_delta]] = |[[I_fase]] − [[I_neutro]]| permite evaluar [[margen_dif]] y cuantificar la fuga.\r
\r
**Variable dominante:** [[I_delta]] para el diagnóstico diferencial; [[I]] para el diagnóstico magnetotérmico.\r
\r
**Límite de validez:** El análisis es válido para instalaciones monofásicas residenciales con calibres estándar. No es directamente aplicable a instalaciones con variadores de frecuencia o alta densidad de cargas electrónicas, donde los armónicos pueden generar disparos fantasma.\r
\r
## 2. Dimensionamiento en reformas de vivienda\r
\r
Al añadir nuevas cargas o ampliar circuitos, el análisis de [[P_lim]] = [[V]] × [[I_n]] permite decidir si el circuito existente tiene capacidad suficiente o si requiere un nuevo magnetotérmico con mayor [[I_n]]. La regla de diseño es que la suma de [[I]] de las cargas previstas no supere el 80 % de [[I_n]] para disponer de margen de seguridad operativo: [[margen_termico]] ≤ 0,80 en condiciones de uso normal. Superar el 80 % aumenta el riesgo de disparos frecuentes ante transitorios de arranque de motores o cargas con factor de cresta elevado.\r
\r
Antes de cambiar el calibre [[I_n]] del magnetotérmico, hay que verificar que el conductor del circuito tiene la sección adecuada para la nueva corriente. Un magnetotérmico de 25 A en un circuito cableado con sección para 16 A puede no actuar a tiempo ante una sobrecarga que dañe el aislamiento del cable.\r
\r
**Variable dominante:** [[P_lim]] para la evaluación de capacidad del circuito; [[I_n]] como parámetro de diseño.\r
\r
**Límite de validez:** El criterio del 80 % de [[margen_termico]] es una regla práctica conservadora. Para cargas puramente resistivas (resistencias eléctricas, calefactores), se puede llegar al 90 %. Para motores, compresor, y cargas con alta corriente de arranque, hay que aplicar factores de corrección adicionales.\r
\r
## 3. Incidencias en zonas húmedas\r
\r
Los disparos diferenciales estacionales —más frecuentes en invierno o con lluvia— corresponden habitualmente a degradación de aislamiento que aumenta [[I_delta]] al crecer la humedad. El análisis de [[margen_dif]] en distintas condiciones ambientales permite confirmar este diagnóstico sin necesidad de desmontar toda la instalación. Un [[margen_dif]] de 0,7 en época seca que sube a 0,95 en época húmeda indica degradación progresiva del aislamiento que merece intervención preventiva antes del primer disparo.\r
\r
Los aparatos más susceptibles en zonas húmedas son los calefactores de baño, los secadores de pelo, las bombas de sump y los electrodomésticos próximos a puntos de agua. En cada caso, el cálculo de [[I_delta]] y [[margen_dif]] en condiciones de uso normal permite cuantificar el riesgo y priorizar la revisión.\r
\r
**Variable dominante:** [[I_delta]] y [[margen_dif]] como indicadores de degradación de aislamiento.\r
\r
**Límite de validez:** Válido para diferenciales tipo AC en presencia de corriente alterna pura. Si el circuito incluye aparatos con fuentes conmutadas (ordenadores, cargadores, televisores), la componente de CC puede requerir diferencial tipo A para detección fiable.\r
\r
## 4. Verificación de instalaciones antes de la puesta en servicio\r
\r
En instalaciones nuevas o tras reformas, verificar que [[margen_termico]] y [[margen_dif]] están dentro de márgenes seguros antes de conectar la carga definitiva. Un [[margen_dif]] mayor de 0,5 con instalación en vacío (sin cargas conectadas) indica fugas residuales en el cableado o en los aparatos ya conectados que deben corregirse antes de la primera puesta en uso. Un [[margen_termico]] mayor de 0,8 con la carga de diseño indica que el circuito opera cerca del límite y puede necesitar redistribución.\r
\r
El procedimiento correcto es conectar las cargas en grupos sucesivos y medir [[I_delta]] después de cada adición. Si [[margen_dif]] sube significativamente al añadir un aparato concreto, ese aparato tiene fuga de aislamiento y debe revisarse o sustituirse antes de su uso continuado.\r
\r
**Variable dominante:** [[margen_dif]] para verificación de aislamiento; [[margen_termico]] para verificación de capacidad de carga.\r
\r
**Límite de validez:** Las mediciones en vacío representan condiciones de baja temperatura del aislamiento. Las fugas de aislamiento aumentan con la temperatura de operación, por lo que las mediciones en condiciones de uso prolongado son más representativas del comportamiento en servicio real.\r
\r
## 5. Formación técnica y resolución de incidencias de seguridad\r
\r
Este análisis es la base para cualquier protocolo de respuesta ante incidentes eléctricos en vivienda. Saber que [[I_delta]] < [[I_dn]] no garantiza ausencia de defecto térmico local, y que [[I]] < [[I_n]] no garantiza ausencia de fuga significativa, son dos principios que cambian radicalmente la forma en que se evalúa la seguridad de una instalación. La formación en el uso de [[margen_termico]] y [[margen_dif]] como herramientas de diagnóstico continuo, en lugar de tratar los disparos como eventos binarios, es el núcleo del análisis técnico moderno de instalaciones residenciales.\r
\r
**Variable dominante:** [[margen_dif]] y [[margen_termico]] como indicadores de estado de la instalación.\r
\r
**Límite de validez:** Aplicable a instalaciones monofásicas residenciales con configuración estándar de cuadro. Para instalaciones industriales, trifásicas o con protecciones especiales, se requieren criterios adicionales específicos de cada tipo de instalación.\r
`;export{e as default};
