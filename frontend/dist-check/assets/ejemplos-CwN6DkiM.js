const e=`# Ejemplo tipo examen

## Enunciado
Un circuito RLC serie se usa como etapa de seleccion frecuencial en un modulo de medicion. Se conoce inductancia, capacitancia, resistencia efectiva y tension eficaz de excitacion. Se pide estimar frecuencia resonante, factor de calidad, ancho de banda aproximado y corriente de rama en condicion resonante, justificando modelo y limites.

## Datos
Se dispone de [[L]] de treinta y tres milihenrios, [[C]] de cuatro punto siete microfaradios, [[R]] efectiva de seis ohmios y tension [[V]] de cuarenta y ocho voltios RMS. El caso supone operacion sinusoidal estable y linealidad razonable de componentes en la ventana de analisis.

## Definición del sistema
El sistema es una rama RLC serie excitada con barrido de frecuencia. El objetivo es caracterizar posicion de sintonia y forma de respuesta para decidir si la etapa cumple especificacion de selectividad sin comprometer margen de corriente.

## Modelo físico
Se adopta modelo RLC lineal equivalente donde [[L]] y [[C]] fijan posicion resonante, [[R]] representa amortiguamiento y perdidas efectivas, y la respuesta de corriente en resonancia se aproxima con relacion de rama serie. El nucleo del analisis usa [[omega0]], [[f0]], [[Q]], [[BW]] e [[Ires]].

## Justificación del modelo
El modelo se justifica porque la excitacion es periodica estable y no se reportan no linealidades severas. La resistencia equivalente incorpora perdidas dominantes para primera aproximacion. Esta eleccion es adecuada para prediseno y validacion inicial, siempre que se contraste con medicion y margen termico posterior.

## Resolución simbólica
Frecuencia angular resonante:

{{f:omega_resonancia}}

Frecuencia resonante en hertz:

{{f:frecuencia_resonancia}}

Factor de calidad serie:

{{f:factor_calidad}}

Ancho de banda aproximado:

{{f:ancho_banda}}

Corriente resonante estimada:

{{f:corriente_resonancia}}

## Sustitución numérica
Con los datos normalizados a unidades SI, la frecuencia angular resonante queda del orden de miles de radianes por segundo y la frecuencia [[f0]] se ubica en el orden de centenas de hertz. El valor obtenido es coherente con componentes de milihenrios y microfaradios.

Al incorporar [[R]], el factor [[Q]] resulta de un orden medio que indica selectividad util sin extremo agudo. A partir de ese factor, [[BW]] queda en una franja moderada alrededor de [[f0]], coherente con una etapa de filtrado funcional pero no hiperselectiva.

Con [[V]] y [[R]] dados, la corriente [[Ires]] se ubica en rango relevante para proteccion de rama. Este punto confirma que un diseno bien sintonizado puede requerir verificacion termica incluso si la frecuencia central parece correcta.

## Validación dimensional
La cadena dimensional cierra: [[omega0]] en rad/s, [[f0]] y [[BW]] en Hz, [[Q]] adimensional e [[Ires]] en A. Tambien se valida tendencia fisica: al aumentar [[R]] con L y C fijas, la selectividad disminuye y el ancho de banda crece.

Un control adicional de coherencia exige comparar estimacion con medicion de barrido. Si el pico experimental se desplaza mucho respecto a [[f0]], hay perdida no modelada o desajuste de parametro efectivo.

## Interpretación física
El resultado no solo entrega una frecuencia central; tambien describe que tan exigente es el circuito frente a variaciones de entorno. Una [[Q]] moderada sugiere equilibrio entre discriminacion y robustez. Un [[BW]] demasiado estrecho seria problematico si la fuente o los componentes presentan deriva relevante.

Desde el punto de vista de seguridad, [[Ires]] marca el riesgo de sobrecorriente local cuando el sistema opera cerca de sintonia. Eso implica que la conclusion tecnica debe incluir no solo "donde resuena" sino tambien "cuanto exige en corriente" y "que margen real queda".

La lectura causal completa es: [[L]] y [[C]] fijan posicion de resonancia, [[R]] define forma de respuesta, y [[V]] junto con [[R]] condicionan exigencia de corriente. Esta cadena evita que una cuenta correcta termine en una recomendacion incompleta.

Una interpretacion fisica madura agrega una decision metodologica: si el entorno operativo cambia, no se debe congelar el resultado como constante, sino recalcular y revalidar con la misma cadena causal. De ese modo, el ejemplo no queda como ejercicio numerico aislado, sino como plantilla de criterio transferible a diseño, ajuste y mantenimiento.

Tambien conviene leer el fenomeno como intercambio de energia y no como tabla de sustitucion. Cerca de resonancia, el sistema puede pasar de comportamiento estable a comportamiento muy sensible ante pequeñas variaciones de parametros o carga. Esa sensibilidad no es un error del calculo; es parte constitutiva del fenomeno y por eso exige una lectura causal completa. Si se modifica el contexto operativo y no se actualiza el modelo, la prediccion pierde significado fisico aunque las cuentas sigan siendo internamente correctas.

Por eso la interpretacion final debe responder tres preguntas no numericas: que mecanismo domina, que condicion de validez sostiene la conclusion y que decision tecnica concreta se deriva del resultado. Sin estas tres respuestas, el ejemplo queda incompleto para uso profesional.

# Ejemplo de aplicación real

## Contexto
En una etapa de acoplamiento inalambrico de baja potencia, el equipo detecta perdida de rendimiento al cambiar temperatura ambiente y condiciones de carga. El sistema funciona, pero la transferencia util fluctua mas de lo esperado y aparecen picos de corriente en ciertas ventanas de operacion.

## Estimación física
Se levanta una matriz de mediciones de frecuencia, corriente de rama y tension eficaz para distintos estados termicos. Con esos datos, el equipo recalcula [[f0]], [[Q]] y [[BW]] efectivos por escenario y compara contra valores nominales. La estimacion muestra desplazamiento de sintonia por deriva de [[L]] y [[C]], junto con variacion de [[R]] efectiva al acoplar carga.

La lectura cuantitativa indica que la banda util se desplaza y se ensancha en ciertos estados, reduciendo selectividad y elevando [[Ires]] local en zonas puntuales. Esto explica por que el sistema parece estable en un punto de calibracion y se vuelve irregular en operacion real.

## Interpretación
La conclusion tecnica no es reemplazar componentes a ciegas, sino redisenar criterio de sintonia y margen. Se decide recentrar frecuencia objetivo, ajustar ventana de operacion y reforzar limite de proteccion en torno a corriente resonante. Ademas, se incorpora verificacion periodica de deriva para mantener consistencia entre modelo y campo.

El caso demuestra que resonancia electrica es una herramienta de decision: permite vincular posicion de pico, selectividad y seguridad operativa en una sola narrativa fisica util para mantenimiento y diseno.
`;export{e as default};
