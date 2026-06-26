## Contexto conceptual

La resonancia electrica en circuitos RLC organiza una idea de alto valor ingenieril: no toda frecuencia de excitacion produce la misma respuesta. Existe una frecuencia especial donde el intercambio entre almacenamiento magnetico y electrico queda balanceado y la rama serie responde de forma maxima en corriente para una misma excitacion eficaz.

Este leaf responde una pregunta operativa concreta: como conectar parametros de componente y perdida con posicion de resonancia y selectividad util. Sin esa conexion, los filtros pasabanda se ajustan por ensayo y error. Con ella, se puede disenar con criterio reproducible, justificar margenes y anticipar riesgos de sobrerrespuesta.

Las magnitudes nucleares son [[f0]], [[factor_de_calidad]], [[ancho_de_banda]] e [[corriente_resonante]]. [[omega0]] ubica escala angular, [[inductancia]] y [[capacitancia]] fijan el balance reactivo, [[resistencia_total_serie]] controla amortiguamiento, [[tension_eficaz]] define excitacion de trabajo. Este conjunto evita interpretar resonancia como "pico misterioso" y la convierte en estructura causal.

En la practica, resonancia no es solo tema de laboratorio: aparece en sintonia de receptores, acondicionamiento de potencia, acoplamiento inductivo y sensores selectivos. Por eso la lectura correcta exige unir formula, validez de modelo y criterio de seguridad.

## 🟢 Nivel esencial

En nivel esencial conviene fijar tres ideas. Primera: la resonancia es condicion de equilibrio entre mecanismos reactivos opuestos. Segunda: esa condicion define una frecuencia central donde la respuesta cambia de manera clara. Tercera: la amplitud y la anchura de la respuesta dependen de perdidas y no solo de la posicion del equilibrio.

Estas ideas permiten anticipar comportamiento antes de calcular. Si el circuito tiene perdidas bajas, la respuesta se vuelve mas aguda y sensible. Si las perdidas aumentan, la selectividad cae y la banda util se ensancha. Si parametros de componente derivan por temperatura, la sintonia se desplaza.

Otra idea esencial es de riesgo operativo. Una respuesta resonante favorable para seleccionar frecuencia puede implicar exigencia de corriente de rama que no era obvia fuera de la vecindad de sintonia. Por eso resonancia es tema de desempeño y, a la vez, de proteccion.

La competencia esencial no es memorizar expresiones, sino identificar causalidad: que fija posicion de resonancia, que fija selectividad y que fija limite operativo.

## 🔵 Nivel formal

La frecuencia angular resonante ideal se define por:

{{f:omega_resonancia}}

La frecuencia resonante en hertz se obtiene con:

{{f:frecuencia_resonancia}}

La selectividad aproximada de la rama serie se representa con:

{{f:factor_calidad}}

La anchura de respuesta alrededor de resonancia se estima con:

{{f:ancho_banda}}

La corriente eficaz de rama en condicion resonante serie se aproxima con:

{{f:corriente_resonancia}}

En esta capa, el control de unidades es decisivo. [[inductancia]] en henrios y [[capacitancia]] en faradios fijan correctamente [[omega0]]. La conversion a [[f0]] requiere mantener explicito el factor de paso entre escala angular y ciclos por segundo. [[tension_eficaz]] e [[corriente_resonante]] deben ser coherentes en regimen RMS para no falsear conclusion operacional.

Tambien importa la validez de aproximacion. La relacion de [[ancho_de_banda]] y [[factor_de_calidad]] es util cuando el modelo lineal representa bien el comportamiento y la respuesta es suficientemente selectiva. Si hay no linealidad o perdida distribuida dominante, la ecuacion conserva valor orientativo, pero no debe usarse como cierre unico de diseno.

Un cierre formal robusto tambien exige contrastar tendencia de resultados frente a cambios de parametro. Si [[inductancia]] o [[capacitancia]] se ajustan y [[f0]] no cambia en la direccion esperada, el problema no es la resonancia en si, sino la coherencia del flujo de modelado o de medicion.

## 🔴 Nivel estructural

Estructuralmente, la resonancia serie se entiende como cadena de tres capas. Capa uno: posicion de resonancia, gobernada por balance de [[inductancia]] y [[capacitancia]]. Capa dos: forma de la respuesta, gobernada por amortiguamiento equivalente asociado a [[resistencia_total_serie]] y resumido en [[factor_de_calidad]] y [[ancho_de_banda]]. Capa tres: implicacion operativa, visible en [[corriente_resonante]] para una excitacion [[tension_eficaz]] dada.

Esta cadena permite explicar por que dos circuitos con la misma frecuencia central pueden comportarse distinto. Uno puede ser selectivo y sensible, otro robusto pero poco selectivo. La diferencia no esta en la etiqueta "resonante", sino en la estructura de perdidas y en la banda objetivo.

Tambien evita errores de lectura de laboratorio. Un pico estrecho no es automaticamente mejor; puede degradar tolerancia a deriva. Una banda amplia no es automaticamente peor; puede ser preferible cuando la senal util es variable o el entorno tiene incertidumbre.

El modelo ideal tiene limites conocidos: resistencia parasita de bobina, perdida dielectrica, dependencia termica y acoplos no deseados. Mientras esos efectos sean secundarios, la estructura base conserva poder de prediccion. Cuando no lo son, hay que cambiar a modelo extendido para sostener conclusiones.

## Interpretación física profunda

La resonancia no es una coincidencia numerica, sino una organizacion temporal de energia. En torno al punto resonante, el intercambio entre campo electrico y magnetico domina la dinamica, mientras las perdidas definen cuanto de ese intercambio se conserva en forma de respuesta selectiva util.

Por eso [[factor_de_calidad]] no es una decoracion matematica. Es la huella compacta del compromiso entre concentrar respuesta y tolerar incertidumbre. Q alta mejora discriminacion en frecuencia, pero estrecha margen operativo. Q baja reduce sensibilidad fina, pero suele aumentar robustez frente a variaciones de componente.

La lectura fisica madura de resonancia incluye causalidad y contexto: quien desplaza [[f0]], quien deforma [[ancho_de_banda]], quien limita [[corriente_resonante]], y bajo que condiciones el modelo sigue representando al sistema real.

## Orden de magnitud

En circuitos de potencia moderada o laboratorio, valores de [[inductancia]] en milihenrios y [[capacitancia]] en microfaradios ubican [[f0]] en escalas de cientos a miles de hertz. Con [[resistencia_total_serie]] baja, el factor [[factor_de_calidad]] puede subir a valores de una o dos decenas, y el ancho [[ancho_de_banda]] volverse relativamente estrecho frente a la frecuencia central.

Un control de orden de magnitud evita errores comunes. Si con L del orden de milihenrios y C de microfaradios aparece una frecuencia central de fracciones de hertz, casi seguro hay error de conversion. Si [[corriente_resonante]] resulta excesiva para la potencia esperada, conviene revisar resistencia efectiva total y no solo valor nominal de componente.

La validacion por tendencia tambien es util. Si [[resistencia_total_serie]] aumenta y el modelo sigue arrojando Q creciente, hay inconsistencia de datos o de sustitucion. Si se modifica [[inductancia]] y no cambia posicion de [[f0]], hay ruptura de coherencia en el flujo de calculo.

## Método de resolución personalizado

Primero identifica objetivo: sintonia de frecuencia, control de selectividad o limite de corriente. Segundo, normaliza unidades y confirma tipo de medicion. Tercero, ubica resonancia con [[omega0]] y [[f0]]. Cuarto, estima forma de respuesta con [[factor_de_calidad]] y [[ancho_de_banda]]. Quinto, evalua exigencia de corriente con [[corriente_resonante]] y contrasta con limite termico.

Despues, cierra con lectura de validez: que supuestos sostienen la estimacion y que condiciones obligarian a cambiar de modelo. Esta etapa evita decisiones mecanicas basadas en una sola ecuacion fuera de su dominio.

Finalmente, traduce resultados a accion: ajustar L o C para desplazar sintonia, ajustar R efectiva para modificar selectividad, o redisenar proteccion si la corriente resonante compromete seguridad.

## Casos especiales y ejemplo extendido

Un caso especial tipico es resonancia deseada con parametros no ideales. El diseno apunta a una frecuencia, pero tolerancia de [[inductancia]] y [[capacitancia]] desplaza [[f0]] dentro de una ventana real. Si el circuito exige alta selectividad, esa ventana puede volver inaceptable un prototipo que parecia correcto en calculo nominal.

Otro caso es resonancia en entornos con variacion termica. La deriva de componente altera posicion y anchura de respuesta. Si no se contempla ese efecto, el sistema puede perder sintonia o sobreexigir corriente en parte del ciclo operativo.

Un tercer caso es acoplamiento con etapas adyacentes. Aunque la rama principal sea RLC serie, la carga conectada modifica resistencia efectiva y, por tanto, [[factor_de_calidad]], [[ancho_de_banda]] e [[corriente_resonante]]. Ignorar esa interaccion produce discrepancia entre banco aislado y sistema integrado.

## Preguntas reales del alumno

1. Si ubico bien [[f0]], ya resolvi el problema de resonancia?
No. Tambien debes evaluar selectividad, perdida y limite de corriente.

2. Q alta siempre es mejor?
No. Aumenta discriminacion, pero reduce tolerancia a deriva y puede elevar exigencia de control.

3. Por que [[ancho_de_banda]] importa si yo solo quiero una frecuencia?
Porque determina cuan estable sera la respuesta frente a variaciones reales.

4. La corriente resonante depende solo de la fuente?
No. En serie depende fuertemente de resistencia efectiva y condicion de resonancia.

5. Cuando debo abandonar el modelo minimo?
Cuando perdidas parasitas, no linealidad o variacion termica rompen coherencia entre prediccion y medida.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con [circuitos-rlc](fisica-clasica/electromagnetismo/corriente-alterna/circuitos-rlc), donde se construye la familia de respuestas de primer nivel. Conecta tambien con reactancia capacitiva e inductiva, porque el equilibrio entre ambas define el punto central de sintonia.

La ruta recomendada es: magnitudes alternas, reactancias, circuitos RLC, resonancia electrica y luego filtros de mayor complejidad. Esa secuencia mantiene continuidad causal y evita memorizar formulas sin contexto.

Tambien hay conexion con instrumentacion: medir [[f0]], [[ancho_de_banda]] e [[corriente_resonante]] exige coherencia entre tipo de señal, metodo RMS y resolucion del barrido en frecuencia.

## Síntesis final

La resonancia electrica convierte un circuito RLC en sistema selectivo de frecuencia. La posicion de sintonia la fija el balance entre [[inductancia]] y [[capacitancia]], la forma de respuesta la fija el amortiguamiento equivalente, y la implicacion operativa aparece en la corriente de rama. Dominar esta estructura permite disenar con criterio, validar con coherencia y operar con seguridad.