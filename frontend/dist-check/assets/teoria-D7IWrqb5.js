const e=`# Potencia electrica

## Contexto conceptual
La [[P]] sintetiza una pregunta operativa central en electromagnetismo aplicado: que tan rapido se transfiere o se disipa [[E]] en un elemento real. En aula, el concepto suele aparecer como una formula breve; en laboratorio y en ingenieria, en cambio, se convierte en criterio de diseno, seguridad y eficiencia. Si una resistencia, un conductor o una fuente trabaja fuera de su margen de [[P]], no solo cambia un numero: cambia el regimen termico, se acelera el envejecimiento del material y puede aparecer falla funcional.

La intuicion inicial util es que [[P]] no mide cantidad acumulada, sino ritmo. Por eso el mismo consumo de [[E]] puede ocurrir en condiciones muy distintas: poca [[P]] durante mucho [[t]], o gran [[P]] en poco [[t]]. Esa diferencia determina impactos practicos opuestos, como calentamiento suave versus sobrecarga instantanea. Comprenderlo evita el error recurrente de comparar solo energia total sin mirar picos de potencia.

Este leaf organiza el tema para que el estudiante pase de la lectura de etiquetas electricas a decisiones fisicas justificadas. El foco no es memorizar cuatro expresiones, sino elegir el modelo adecuado para cada situacion, validar limites y producir interpretaciones que conecten circuito, comportamiento termico y uso real del dispositivo.

## 🟢 Nivel esencial
En nivel esencial, la potencia se interpreta como velocidad de transformacion energetica. Si un componente tiene mayor potencia, procesa o disipa energía mas rapidamente. Esta idea permite explicar por que dos aparatos con igual consumo diario pueden exigir instalaciones distintas: su perfil temporal de exigencia puede ser muy diferente.

La relacion mas directa entre variables medibles conecta tension y corriente en el mismo elemento.

Con esta expresion, la lectura causal es clara: al aumentar la tensión con la corriente aproximadamente constante, crece la transferencia energetica; al aumentar la corriente con tensión constante, tambien crece. En ambos casos, la exigencia termica del sistema sube y se vuelve mas relevante el limite nominal.

Para cargas predominantemente resistivas, aparecen formas equivalentes que ayudan a razonar riesgos de forma rapida. Cuando la instalacion impone el voltaje y el elemento tiene resistencia conocida, la exigencia responde con sensibilidad cuadratica a cambios de tension. Cuando el control principal es el amperaje, la disipacion por efecto Joule se vuelve especialmente critica en conductores y pistas delgadas.

En esta etapa es clave separar lenguaje: la magnitud de ritmo se expresa en W, mientras la magnitud acumulada se expresa en J o Wh. Confundir unidades cambia por completo la conclusion fisica. Una etiqueta de 100 W no dice por si sola cuanta energía se uso en el dia; solo indica la tasa instantanea o media en una condicion de operacion.

## 🔵 Nivel formal
En nivel formal se incorporan las relaciones matematicas del leaf y sus condiciones de uso. La expresion base de potencia electrica es:

{{f:potencia_base}}

Para elementos modelables como resistencia efectiva, se usan formas derivadas:

{{f:potencia_resistiva_corriente}}

{{f:potencia_resistiva_tension}}

Cuando se requiere energia acumulada en un intervalo con [[P]] constante o media bien definida:

{{f:energia_desde_potencia}}

Estas relaciones no son recetas matemáticas intercambiables sin contexto físico. La forma derivada con [[R]] exige estrictamente que el comportamiento resistivo sea la aproximación dominante en el régimen de operación. Si la carga bajo estudio presenta una contribución reactiva importante, transitorios intensos durante el encendido, o variaciones térmicas grandes que modifiquen el material, la equivalencia simple pierde precisión rápidamente. En esos casos más complejos, la interpretación debe volver necesariamente a la lectura simultánea de [[V]] e [[I]] medidos de forma empírica y coherente en el mismo elemento.

También se formaliza en este nivel la validación dimensional cruzada: la coherencia estricta entre las unidades W, V, A, ohm, J y s funciona como el primer detector rápido de errores sistemáticos de sustitución numérica. Por ejemplo, un error clásico es calcular la energía acumulada [[E]] dejando el tiempo [[t]] expresado en minutos o en horas sin la debida conversión a segundos. Esta omisión rompe por completo el resultado dentro del Sistema Internacional y suele introducir factores de sesenta o de tres mil seiscientos que pasan inadvertidos si no se exige un control dimensional antes de aceptar el resultado final.

## 🔴 Nivel estructural
El nivel estructural analiza dominio de validez, limites y decisiones de cambio de modelo. La primera condicion es de coherencia de medicion: [[V]] e [[I]] deben corresponder al mismo elemento y al mismo instante representativo. Mezclar mediciones de nodos distintos puede generar una [[P]] numericamente plausible pero fisicamente falsa.

La segunda condicion es termica. En muchos materiales, [[R]] depende de temperatura. Por eso un calculo inicial con forma resistiva en funcion de corriente puede subestimar o sobrestimar disipacion cuando la elevacion termica es significativa. Un criterio cuantitativo util para activar modelo extendido es observar deriva relativa de resistencia mayor al 5% durante el intervalo analizado, o diferencia entre potencia calculada y potencia medida superior al 10%. Si aparece cualquiera de esas senales, conviene actualizar [[R]] efectiva o pasar a modelo electrotermico acoplado.

La tercera condicion es de escala temporal. Si [[P]] varia rapidamente en el tiempo, usar una sola potencia representativa para estimar [[E]] puede ocultar picos peligrosos. En ese caso, se recomienda analizar [[P]](t) por tramos y leer [[E]] como area acumulada. El criterio practico es comparar el maximo de potencia con el promedio: si la razon pico/promedio supera 2, el riesgo termico instantaneo merece atencion especifica aunque la energia total parezca moderada.

## Interpretación física profunda
La interpretacion profunda de [[P]] combina tres planos. Plano energetico: indica velocidad de conversion entre formas de [[E]]. Plano material: traduce esa conversion en temperatura, esfuerzo electromigratorio y vida util de componentes. Plano funcional: condiciona rendimiento, estabilidad y seguridad del sistema completo.

En dispositivos reales, una misma [[P]] puede tener implicaciones distintas segun geometria, disipacion y entorno. Cien vatios en una resistencia de potencia con disipador pueden ser regimen nominal; cien vatios en una pista fina de PCB pueden significar destruccion inmediata. Por eso el numero aislado no basta: la interpretacion fisica necesita contexto de transferencia termica y limites constructivos.

Tambien es importante la direccion de flujo energetico. Con convencion pasiva, [[P]] positiva suele indicar absorcion y disipacion en el elemento; [[P]] negativa, entrega al circuito. Esta lectura evita errores al analizar fuentes regenerativas o sistemas donde la carga puede comportarse temporalmente como generador.

## Orden de magnitud
Las escalas de [[P]] orientan decisiones antes del calculo detallado. En sensores y electronica de instrumentacion, valores de mW a algunos W suelen dominar. En electrodomesticos, decenas a miles de W son comunes. En accionamientos industriales, la escala puede subir a kW o mas.

Una regla de orden de magnitud util es comparar la potencia esperada con la capacidad de disipacion. Si un componente pequeno sin disipador deberia evacuar decenas de W de forma continua, el escenario es sospechoso. Del mismo modo, si una carga que tipicamente opera en cientos de W resulta calculada en fracciones de W, conviene revisar unidades, conversiones y consistencia de datos.

Estas comprobaciones no reemplazan el modelo, pero reducen errores gruesos. En practica docente, incorporar orden de magnitud desde el inicio mejora la calidad de interpretacion y disminuye dependencia de sustitucion mecanica.

## Método de resolución personalizado
1. Definir el objetivo fisico: estimar [[P]] instantanea, comparar margen nominal o calcular [[E]] acumulada.
2. Identificar datos confiables y su contexto: [[V]], [[I]], [[R]], [[t]], condiciones termicas y modo de operacion.
3. Elegir la relacion principal del nivel formal para medicion directa, y pasar a formas resistivas cuando el modelo lo justifica.
4. Ejecutar calculo con control dimensional y unidades coherentes.
5. Contrastar con limites: potencia nominal, temperatura admisible y coherencia con orden de magnitud.
6. Si hay discrepancias >10% entre metodos o mediciones, migrar a modelo extendido y documentar la causa.
7. Comunicar resultado en lenguaje causal: que variable domina, que limite condiciona y que decision tecnica se desprende.

## Casos especiales y ejemplo extendido
Caso base: una resistencia de [[R]] = 10 ohm se alimenta con [[V]] = 24 V durante [[t]] = 120 s.

Para potencia resistiva por tension se usa la expresion formal correspondiente presentada antes.

Sustitucion: [[P]] = 57.6 W.

Para energia acumulada se usa la relacion formal entre potencia y tiempo presentada en el nivel formal.

Sustitucion: [[E]] = 6912 J.

Interpretacion: aunque el intervalo temporal sea corto, el valor de [[P]] supera claramente la potencia nominal de resistencias pequenas de uso comun (por ejemplo 0.25 W, 1 W o 5 W). El modelo ideal predice disipacion inmediata elevada; fisicamente se espera aumento rapido de temperatura y posible degradacion si no hay disipacion adecuada. La decision de diseno no es solo "el numero cierra", sino "el componente puede sostenerlo".

Caso especial 1: si [[R]] aumenta con temperatura, la corriente puede bajar y modificar [[P]] en regimen. Caso especial 2: si la fuente limita corriente, el sistema deja de comportarse como fuente ideal de tension y conviene recalcular con datos reales de [[I]]. Caso especial 3: en senales variables, usar promedios sin analizar picos puede ocultar sobrepotencia instantanea.

## Preguntas reales del alumno
Pregunta 1: "Si dos aparatos consumen la misma energia diaria, son equivalentes?"
Respuesta: no necesariamente. Igual [[E]] diaria puede provenir de perfiles de [[P]] muy distintos. El aparato con picos altos puede exigir cableado, proteccion y disipacion mas robustos.

Pregunta 2: "Cuando uso la forma resistiva por corriente y cuando la forma base?"
Respuesta: usa la forma base cuando tienes [[V]] e [[I]] medidos del mismo elemento. Usa la forma resistiva si el comportamiento de [[R]] esta bien caracterizado en el regimen de trabajo.

Pregunta 3: "Por que me da energia enorme?"
Respuesta: suele haber mezcla de unidades de [[t]]. Si usas SI, convierte minutos y horas a segundos antes del calculo energetico.

Pregunta 4: "Potencia alta siempre es mala?"
Respuesta: depende del objetivo y del diseno termico. En un calefactor es funcional; en un sensor pequeno puede ser destructiva.

Pregunta 5: "Si duplico [[V]] en una resistencia fija, que pasa?"
Respuesta: en el modelo resistivo por tension, [[P]] se cuadruplica. Esta sensibilidad cuadratica explica muchos eventos de sobrecarga.

## Conexiones transversales y rutas de estudio
1. Resistencia y ley de Ohm: conecta seleccion de forma de potencia con validez del modelo resistivo.
2. Conservacion de energia: interpreta [[P]] como flujo y [[E]] como acumulacion en frontera del sistema.
3. Escalas y ordenes de magnitud: filtra resultados imposibles antes de decisiones de diseno.
4. Modelo fisico y dominio de validez: establece cuando migrar de ideal a extendido por efectos termicos.
5. Circuitos RC y transitorios: muestra por que la potencia instantanea puede variar mucho dentro de un mismo proceso.

## Síntesis final
La [[P]] es una magnitud puente entre ecuaciones de circuito y consecuencias fisicas reales. Entenderla exige tres acciones inseparables: calcular con modelo correcto, validar limites de validez y traducir el numero en decisiones de seguridad, eficiencia y desempeno. Con esa mirada, las formulas del leaf dejan de ser identidad algebraica y se convierten en herramienta de criterio tecnico.
`;export{e as default};
