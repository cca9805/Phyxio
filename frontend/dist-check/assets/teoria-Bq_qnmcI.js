const e=`\uFEFF# Tensión y potencia en casa\r
\r
## Contexto conceptual\r
\r
Este leaf traduce magnitudes eléctricas abstractas —tensión [[V]], corriente [[I]], resistencia [[R]], potencia [[P]]— en decisiones técnicas concretas para el uso doméstico. En la red doméstica, la tensión está fijada a 230 V, pero cada equipo conectado "decide" cuánta corriente demanda según su resistencia interna. Esta interacción entre el "empuje" de la red y la "oposición" del equipo determina el flujo eléctrico real y, con él, el calentamiento de cables, el consumo energético y los riesgos potenciales.\r
\r
El objetivo de este leaf es operativo: aprender a calcular la corriente que demandará un equipo, distinguir cuándo esa corriente es baja, media o alta para una instalación doméstica típica, e interpretar qué implica una resistencia muy alta o muy baja en términos de riesgo real.\r
\r
## 🟢 Nivel esencial\r
\r
En electricidad doméstica, cuatro magnitudes gobiernan las decisiones prácticas. La **tensión** [[V]] es el "empuje" eléctrico que la red proporciona —en vivienda siempre son 230 V— y constituye el potencial disponible para hacer trabajar a los equipos. La **corriente** [[I]], también llamada intensidad, representa el flujo eléctrico que circula por los cables; se mide en amperios y es la magnitud que los cables deben transportar sin calentarse excesivamente.\r
\r
La **resistencia** [[R]] es la oposición al paso de corriente que presenta cada equipo. Aquí reside un punto crítico de seguridad: si la resistencia es muy baja, la corriente puede crecer enormemente y superar la capacidad de los cables. Finalmente, la **potencia** [[P]] indica la rapidez con la que un equipo consume energía; es la magnitud que aparece en las etiquetas de los electrodomésticos y que determina cuánto pagaremos en la factura, pero también cuánta corriente circulará por la instalación.\r
\r
La regla práctica es simple pero crucial: cuando dos equipos funcionan a la misma tensión, el que demanda más corriente —porque tiene menor resistencia interna— suele calentar más los conductores y contactos, y requiere cables y protecciones más robustos.\r
\r
## 🔵 Nivel formal\r
\r
Las relaciones matemáticas que gobiernan el comportamiento eléctrico doméstico parten de la ecuación fundamental de potencia. La potencia eléctrica instantánea que consume un equipo se calcula como el producto de la tensión aplicada por la corriente que circula:\r
\r
{{f:potencia_base}}\r
\r
Esta relación permite calcular cualquiera de las tres magnitudes conocidas las otras dos: [[V]], [[I]] y [[P]]. Cuando conocemos la potencia nominal de un electrodoméstico —los watts de su etiqueta— podemos determinar [[I]] que demandará de la red dividiendo [[P]] por [[V]] doméstica:\r
\r
{{f:corriente_por_resistencia}}\r
\r
El modelo resistivo ofrece una perspectiva alternativa. La misma [[P]] puede expresarse en función de [[R]] del equipo, lo que resulta especialmente útil cuando no conocemos directamente [[I]] pero sí las características constructivas del aparato:\r
\r
{{f:potencia_resistiva}}\r
\r
La energía eléctrica acumulada [[E_kWh]] durante un período de tiempo [[t_h]] se obtiene multiplicando la potencia por el tiempo de funcionamiento. Esta magnitud —medida típicamente en kilovatios-hora (kWh)— es la que realmente cuenta para la factura eléctrica:\r
\r
{{f:energia}}\r
\r
La [[E_kWh]] acumulada en un período [[t_h]] conecta directamente con la factura eléctrica y es indispensable para comparar el impacto económico de equipos con distinta [[P]]. Cuando múltiples equipos funcionan simultáneamente en el mismo circuito, sus potencias individuales se suman, creando una demanda agregada que debe respetar los límites del cableado y la protección. La corriente total resultante determina si la configuración es segura o si requiere redistribución de cargas.\r
\r
Estas ecuaciones conforman el núcleo matemático para dimensionar cualquier instalación doméstica, desde el simple cálculo de cuántos equipos pueden conectarse a una regleta hasta la planificación de circuitos independientes para la cocina.\r
\r
## 🔴 Nivel estructural\r
\r
El análisis de circuitos domésticos presenta una arquitectura física donde las magnitudes no existen aisladamente sino como partes de un sistema interconectado. La noción de corriente "alta" o "baja" es relativa: una corriente de 15 A puede ser segura en un circuito de 20 A con cable de 2.5 mm², pero peligrosa en un circuito de 10 A con cable más delgado.\r
\r
La estructura del riesgo eléctrico doméstico se comprende a través de la relación inversa entre resistencia y corriente. A tensión fija —230 V— cualquier disminución de la resistencia provoca un aumento proporcional de la corriente demandada. Esto explica por qué una resistencia muy baja —como la de un cortocircuito— puede disparar corrientes enormes que superan la capacidad de la instalación.\r
\r
El riesgo térmico local se interpreta a través de la potencia disipada en resistencias parásitas —contactos sucios, conexiones flojas— que mediante la ley de Joule pueden generar calentamiento localizado incluso cuando la corriente total parece dentro de límites normales.\r
\r
El dominio de validez de este modelo es explícito: análisis monofásico en instalaciones domésticas estándar con tensión nominal de 230 V. El modelo deja de ser válido en instalaciones trifásicas industriales, circuitos de alta tensión, o cuando hay componentes electrónicos con comportamiento no lineal.\r
\r
**Límites de aplicabilidad**: Cuando la corriente calculada supera el 80% de la capacidad nominal, el sistema entra en zona de precaución. Cuando se acerca o supera el 100%, las protecciones deberían actuar. Resistencias extremadamente altas generan corrientes insignificantes que, paradójicamente, también pueden ser problemáticas en circuitos de señal.\r
\r
## Interpretación física profunda\r
\r
Decir que un equipo tiene "8000 ohmios" o "0.8 ohmios" no es información neutra; es un predictor de comportamiento eléctrico que debe traducirse a corriente y potencia. Una resistencia de 8000 Ω a 230 V demandará apenas 0.029 A y 6.6 W —una carga insignificante. Una resistencia de 0.8 Ω a la misma tensión intentará extraer 287.5 A y disipar 66 kW, físicamente imposible en una instalación doméstica, resultando en disparo de protección o incendio.\r
\r
Esta asimetría contradice la intuición mecánica donde "más resistencia" implica más fricción. En electricidad, la resistencia funciona como válvula de control: valores altos restringen el flujo y reducen el riesgo; valores bajos lo aumentan.\r
\r
La potencia nominal —"2000 W"— no dice toda la historia. Ese número indica el ritmo de consumo, pero no la energía acumulada. Un horno de 2000 W funcionando 10 minutos consume menos [[E_kWh]] que un frigorífico de 150 W funcionando 24 [[t_h]]. La gestión eficiente requiere atender a potencia instantánea —calentamiento de cables— y energía acumulada —coste e impacto ambiental.\r
\r
## Orden de magnitud\r
\r
Los valores típicos de magnitudes eléctricas en contexto doméstico proporcionan referencias útiles para detectar situaciones anómalas. La tensión [[V]] está estandarizada a 230 V en Europa, con tolerancias típicas de ±10% que el equipo debe soportar sin daño. Corrientes inferiores a 0.1 A son comunes en equipos en standby o cargas muy ligeras; entre 0.5 A y 5 A encontramos la mayoría de electrodomésticos domésticos normales; entre 5 A y 16 A están los equipos de mayor consumo como hornos, lavadoras y termos eléctricos; valores superiores a 16 A requieren circuitos especiales y protecciones adecuadas.\r
\r
La resistencia [[R]] de equipos operativos varía enormemente: desde miles de ohmios en lámparas LED hasta fracciones de ohmio en elementos calefactores. Una resistencia de carga menor a 10 Ω ya debe llamar la atención y requerir verificación de la corriente resultante. Potencias domésticas típicas oscilan entre unos vatios para cargas menores hasta 3-4 kW para los equipos más exigentes. Configuraciones simultáneas que sumen más de 5 kW en un único circuito generalmente requieren revisión de la capacidad del cableado.\r
\r
## Método de resolución personalizado\r
\r
El protocolo de análisis eléctrico doméstico sigue una secuencia sistemática. Primero, identificar qué dato conocemos del equipo: suele ser la potencia nominal [[P]] en su etiqueta, o en algunos casos la resistencia [[R]] interna. Segundo, aplicar la ecuación correspondiente para obtener la corriente: si conocemos [[P]], usamos [[I]] = [[P]]/[[V]]; si conocemos [[R]], usamos [[I]] = [[V]]/[[R]].\r
\r
Tercero, comparar la corriente calculada con el límite del circuito: un enchufe estándar soporta típicamente 10-16 A; una regleta no debería superar 10-13 A; un circuito con protección de 16 A es prudente mantenerlo bajo 12-13 A sostenidos.\r
\r
Cuarto, si hay varias cargas simultáneas, sumar sus potencias individuales, recalcular la corriente agregada, y verificar que no excede la capacidad del elemento más débil.\r
\r
Quinto, decidir la acción correctora: repartir cargas en diferentes circuitos; cambiar a circuito de mayor sección; o reducir simultaneidad mediante planificación horaria.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Una comparación didáctica ilustra la drástica diferencia que la resistencia introduce. Consideremos dos cargas a 230 V: una con resistencia elevada de 8000 Ω, otra con resistencia baja de 0.8 Ω.\r
\r
Para la primera carga, la corriente es mínima —unos 0.029 A— y la potencia apenas 6.6 W. Esta carga ligera, equivalente a una pequeña lámpara, cualquier instalación la tolera sin esfuerzo.\r
\r
Para la segunda carga, la corriente asciende a 287.5 A —fuera de escala para cualquier instalación doméstica— y la potencia teórica sería de 66 kW. Esto representaría un cortocircuito que las protecciones deberían detectar inmediatamente.\r
\r
**Lectura técnica**: La resistencia de 8000 Ω se comporta como carga controlada y segura. La de 0.8 Ω se comporta como fallo eléctrico activo. El valor numérico solo adquiere significado cuando se traduce a implicaciones operativas.\r
\r
## Preguntas reales del alumno\r
\r
**¿Corriente e intensidad son magnitudes distintas?**\r
\r
En uso doméstico se emplean como sinónimos: ambas representan la magnitud [[I]] medida en amperios. "Intensidad" es el término más formal y "corriente" el más coloquial, pero designan el mismo fenómeno: flujo de carga eléctrica por unidad de tiempo.\r
\r
**¿Qué constituye "mucha" corriente en una casa?**\r
\r
Depende del circuito específico. En un circuito de iluminación protegido a 10 A, una carga de 9 A ya es preocupante. En un circuito de cocina de 25 A, una carga de 15 A es normal. La referencia correcta es la capacidad nominal del cableado. Regla práctica: superar el 80% de la capacidad merece atención; acercarse al 100% requiere precaución.\r
\r
**¿Por qué una resistencia baja puede ser peligrosa?**\r
\r
Porque ofrece poca oposición al flujo. A 230 V, una resistencia baja permite corriente elevada según la ley de Ohm. Esta corriente calienta los cables proporcionalmente al cuadrado de su intensidad —ley de Joule— y puede superar la capacidad térmica del aislamiento, produciendo incendio.\r
\r
**¿Si no salta ninguna protección, significa que todo está bien?**\r
\r
No necesariamente. Las protecciones actúan ante sobrecorrientes significativas, pero pueden no detectar sobrecargas leves prolongadas. El calentamiento local en puntos de conexión defectuosos puede ser peligroso aunque la corriente total esté dentro de límites normales.\r
\r
**¿Son lo mismo potencia alta y energía alta?**\r
\r
No. La potencia [[P]] es un ritmo —vatios— que indica cuán rápido consume energía. La energía [[E_kWh]] es una acumulación —vatios-hora— que depende de la potencia multiplicada por el tiempo [[t_h]]. Un horno de alta potencia que funcione poco tiempo puede consumir menos energía que un frigorífico de baja potencia funcionando continuamente.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Desde este leaf, el estudio continúa hacia aplicaciones prácticas. En **[Enchufes y tomas](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas)** se conectan las corrientes calculadas con los límites reales de tomas y cables.\r
\r
En **[Diferencial y magnetotérmico](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico)** se exploran las protecciones que monitorizan magnitudes y actúan cuando se exceden límites.\r
\r
En **[Coste de la electricidad](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad)** las potencias y energías calculadas se transforman en impacto económico real.\r
\r
Finalmente, en **[Modelo físico y dominio de validez](leaf:fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez)** se profundiza en los límites del modelo simplificado presentado aquí.\r
\r
## Síntesis final\r
\r
En la electricidad doméstica no basta con "ver los vatios" de la etiqueta. La gestión segura requiere traducir esos vatios a corrientes calculadas, comparar con los límites del cableado, y comprender cómo la resistencia interna interactúa con la tensión fija para determinar el flujo eléctrico resultante. Solo integrando estas cuatro magnitudes en un marco coherente se pueden tomar decisiones informadas sobre seguridad, eficiencia y coste.\r
`;export{e as default};
