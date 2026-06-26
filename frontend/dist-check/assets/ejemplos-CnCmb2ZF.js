const e=`# Ejemplo tipo examen

## Enunciado
Una rama puramente capacitiva de prueba se conecta a una fuente de corriente alterna estable. Se dispone de capacitancia nominal, frecuencia de operación y tensión eficaz de línea. Se pide estimar oposición capacitiva, corriente eficaz de rama y magnitud de potencia reactiva, justificando hipótesis y verificando coherencia de unidades.

## Datos
El caso se resuelve con una capacitancia [[C]] de cuarenta y siete microfaradios, frecuencia [[f]] de sesenta hertz y tensión eficaz [[V]] de doscientos treinta voltios. El ejercicio asume comportamiento lineal del capacitor en el rango de operación y régimen sinusoidal estacionario.

## Definición del sistema
El sistema es una rama capacitiva única conectada a fuente ideal de frecuencia fija. El interés no está en transitorio de carga inicial, sino en respuesta periódica estable. La magnitud de oposición es [[Xc]], la de corriente eficaz es [[Ic]] y la de intercambio reactivo es [[Qc]].

## Modelo físico
Se adopta modelo de capacitor ideal sin pérdidas dominantes, con frecuencia estable y magnitudes RMS coherentes en tensión y corriente. Este modelo vincula la escala temporal de excitación con oposición de rama, y la oposición con exigencia de corriente.

## Justificación del modelo
El modelo se justifica porque el caso no reporta distorsión severa ni parámetros térmicos extremos. Además, los datos de entrada corresponden a operación nominal de laboratorio donde la aproximación lineal es razonable para cálculo didáctico y chequeo de orden de magnitud.

## Resolución simbólica
La oposición capacitiva ideal se calcula con:

{{f:reactancia_capacitiva}}

La conversión de frecuencia ordinaria a frecuencia angular se obtiene con:

{{f:omega_f}}

La corriente de rama se obtiene con:

{{f:corriente_capacitiva}}

La magnitud de potencia reactiva se resume con:

{{f:reactiva_capacitiva}}

## Sustitución numérica
Primero se expresa [[C]] en faradios. Con [[f]] de sesenta hertz, la conversión entrega un valor de [[omega]] en centenas de radianes por segundo. Esa escala conduce a [[Xc]] del orden de decenas de ohmios, coherente con una rama capacitiva de microfaradios a frecuencia industrial moderada.

Con [[V]] eficaz de doscientos treinta voltios y la reactancia obtenida, la corriente [[Ic]] resulta del orden de amperios. Luego, al combinar [[V]] e [[Ic]], la magnitud [[Qc]] queda en el rango de centenas a miles de var según redondeo y convención de reporte. El punto pedagógico no es el último decimal, sino la consistencia causal entre entradas, oposición y respuesta.

## Validación dimensional
La validación dimensional confirma coherencia en toda la cadena: [[omega]] en radianes por segundo, [[Xc]] en ohmios, [[Ic]] en amperios y [[Qc]] en var. También se verifica tendencia física: al usar una capacitancia de microfaradios en frecuencia de decenas de hertz, la reactancia no debe quedar ni extremadamente baja ni astronómicamente alta.

Un segundo control es metrológico: las magnitudes de corriente y tensión se interpretan como eficaces. Si se mezclaran valores pico con RMS, la magnitud reactiva resultante perdería validez comparativa.

## Interpretación física
El resultado muestra que una rama capacitiva relativamente pequeña puede exigir corriente relevante en régimen AC, aun sin representar potencia activa equivalente. Esto explica por qué el dimensionamiento de conductores y protecciones no puede basarse solo en intuición resistiva.

Además, se observa la causalidad central del leaf: la frecuencia no es un dato decorativo, es la variable que transforma la oposición de la rama. Cambios de régimen temporal alteran directamente exigencia de corriente y lectura reactiva.

Una interpretación madura añade límite de validez: si pérdidas o no linealidades crecen, la predicción ideal debe ampliarse. Sin esa cautela, la conclusión numérica puede ser correcta en forma y errónea en uso técnico.

Esto implica que el valor calculado solo adquiere significado completo cuando se conecta con decisión operativa. Por tanto, no basta con reportar [[Xc]], [[Ic]] y [[Qc]]; hay que justificar qué variable gobernó el resultado y cómo cambiaría el diagnóstico ante una variación de frecuencia o capacitancia.

En términos de criterio físico, la lectura correcta diferencia causa, efecto y condición de validez. Esa diferenciación evita que una resolución aparentemente impecable termine siendo una recomendación técnica débil.

# Ejemplo de aplicación real

## Contexto
En una planta ligera se instala un banco capacitivo para mejorar comportamiento reactivo del tablero principal. Tras la intervención, se observan corrientes de rama mayores a las esperadas y disparos ocasionales de protección en horarios de carga parcial. El equipo de mantenimiento decide revisar la lectura desde magnitudes alternas y reactancia capacitiva antes de reemplazar equipos.

## Estimación física
El equipo recopila capacitancia efectiva por etapa, frecuencia de operación real, tensión eficaz y corrientes de rama medidas. Primero verifica conversión de unidades de [[C]] y consistencia entre [[f]] y [[omega]]. Luego recalcula [[Xc]] para cada etapa y compara con la corriente [[Ic]] medida en campo.

La estimación muestra que en ciertos periodos la frecuencia efectiva y la distribución de etapas activas reducen la oposición total más de lo previsto en diseño inicial. Como consecuencia, la corriente de rama crece y aproxima límites térmicos de elementos de protección. Además, la magnitud [[Qc]] mejora el balance global, pero introduce exigencia local que no había sido priorizada en la puesta en marcha.

## Interpretación
La lectura final no es que "el banco está mal", sino que el régimen de operación exige coordinación más fina entre compensación y límites de conducción. El caso confirma que aumentar capacidad puede mejorar un indicador global y simultáneamente elevar requerimientos locales.

La decisión técnica resultante incluye escalonar etapas, ajustar lógica de conexión y revisar margen térmico de protecciones en condiciones reales de carga. Esta salida es más robusta que una sustitución impulsiva, porque nace de causalidad física explícita entre [[C]], [[f]], [[Xc]], [[Ic]] y [[Qc]].

En términos didácticos, el ejemplo real enseña que una buena resolución no termina en obtener un número: termina cuando ese número se conecta con límites de modelo y con acciones operativas concretas.
`;export{e as default};
