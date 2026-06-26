# Ejemplo tipo examen

## Enunciado

Una esfera de laboratorio desciende desde una altura inicial hasta una guía inferior. Se pide estimar la energía cinética final y decidir si el modelo conservativo es suficiente o si hace falta incluir transferencia no conservativa.

## Datos

Se conoce la altura inicial, la altura final y que la velocidad inicial es prácticamente nula. También se dispone de una medida experimental de velocidad final para validar el modelo. Las magnitudes clave del leaf son [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Em]], [[K]], [[U]] y [[Wnc]].

## Definición del sistema

El sistema se define como esfera más interacción gravitatoria relevante en el tramo analizado. Esta frontera permite interpretar el cambio como comparación entre estado inicial y estado final. Si aparece disipación, se registra mediante [[Wnc]] en lugar de esconderla en un ajuste numérico.

## Modelo físico

Se parte del modelo conservativo porque el montaje minimiza pérdidas. El balance central entre estados queda dado por:

{{f:conservacion_mecanica}}

La definición de contenido mecánico en cada estado se recuerda con:

{{f:energia_mecanica_total}}

Si los datos muestran desviación consistente respecto al ideal, el modelo se amplía con:

{{f:balance_con_no_conservativas}}

## Justificación del modelo

El modelo no se justifica por costumbre sino por evidencia. Superficie pulida, trayecto corto y dispersión baja entre repeticiones sugieren que la aproximación conservativa puede ser una primera lectura sólida. Aun así, el dato experimental final se usa para decidir si [[Wnc]] es despreciable o dominante.

Esta justificación es físicamente explícita: cuando las pérdidas son pequeñas, [[Em]] se mantiene casi constante entre estados; cuando las pérdidas son visibles, la diferencia entre predicción ideal y medición se interpreta como transferencia no conservativa.

## Resolución simbólica

Con estado inicial en reposo, [[Ki]] se aproxima a cero y [[Ui]] domina la energía mecánica inicial. En el estado final, la referencia potencial se fija para que [[Uf]] sea consistente y la mayor parte del contenido quede en [[Kf]].

Desde el modelo ideal, [[Kf]] se obtiene por balance entre [[Ki]], [[Ui]] y [[Uf]]. Desde el modelo extendido, el ajuste se interpreta con [[Wnc]]. Mantener la resolución simbólica hasta el final permite leer sensibilidad: aumentar altura inicial incrementa [[Ui]], y eso se refleja en mayor [[Kf]] ideal; introducir pérdidas aumenta en magnitud el efecto de [[Wnc]] y reduce la salida cinética observada.

Para cerrar la resolución con continuidad semántica del leaf, se utiliza además la definición de energía mecánica por estado:

{{f:energia_mecanica_total}}

## Sustitución numérica

Con datos típicos de aula, la predicción ideal entrega un [[Kf]] positivo y físicamente razonable. La medición real suele ser algo menor. Esa diferencia no invalida el principio; indica que el sistema real no es perfectamente ideal.

Cuando la diferencia es pequeña, se conserva la conclusión principal del modelo. Cuando la diferencia crece de forma sistemática, se calcula [[Wnc]] para cuantificar la pérdida y mejorar la lectura física del experimento.

## Validación dimensional

Todos los términos del balance deben expresarse en julios. Si una línea mezcla unidades incompatibles, la interpretación queda comprometida. También se revisa que [[K]] y [[Kf]] no sean negativas y que el signo de [[Wnc]] sea coherente con la situación de pérdida o aporte.

Esta validación evita errores silenciosos: números plausibles con significado físico incorrecto.

## Interpretación física

El ejemplo enseña que la conservación no es un dogma, sino un modelo condicionado. En condiciones ideales, [[Em]] permanece prácticamente constante y el cambio principal es redistribución entre [[U]] y [[K]]. En condiciones reales, parte de la energía mecánica se intercambia con el entorno y aparece [[Wnc]].

La lectura final no es solo numérica. Debe responder causalmente: qué cambió entre [[Ui]] y [[Uf]], cómo evolucionó [[Kf]] respecto a [[Ki]], y por qué [[Wnc]] es pequeño o grande según el montaje.

Una interpretación más profunda compara escenarios límite. Si el contacto es casi ideal, la diferencia entre predicción y medida tiende a reducirse y [[Wnc]] se aproxima a cero. Si el contacto introduce pérdidas apreciables, la magnitud de [[Wnc]] crece y reduce el resultado cinético observable. Esta comparación demuestra que el modelo no falla: cambia su nivel de realismo.

Además, la lectura física final debe permitir decisión técnica. Si el objetivo del sistema es maximizar transferencia hacia movimiento útil, se busca reducir la magnitud de [[Wnc]]. Si el objetivo es amortiguar impacto, se acepta una transferencia mayor en valor absoluto. Así, el mismo balance orienta decisiones de diseño en direcciones distintas.

Esta interpretación también responde a la pregunta de validez del modelo. Cuando el ajuste entre predicción y medición se mantiene en un rango pequeño y estable, el modelo conservativo sigue siendo útil para decisiones rápidas. Cuando el ajuste se deteriora con cambios de superficie o velocidad, el modelo extendido deja de ser opcional y se convierte en la representación dominante.

En términos de aprendizaje, el criterio de dominio no es repetir la ecuación, sino argumentar causalmente por qué un resultado cambia al modificar el contexto físico. Esa capacidad de explicación es la que conecta el ejemplo de aula con decisiones de ingeniería reales.

# Ejemplo de aplicación real

## Contexto

Una línea industrial de transporte por gravedad mueve piezas metálicas por un canal inclinado antes de un módulo de clasificación. El equipo necesita controlar la energía de llegada para evitar daños, pero mantener velocidad suficiente para el proceso.

## Estimación física

Primero se realiza una estimación ideal con conservación para fijar un rango objetivo de salida. Luego se comparan datos de planta para identificar pérdidas sistemáticas. Esa diferencia se traduce en [[Wnc]] y permite rediseñar materiales de contacto, inclinación y recubrimientos.

La lectura cuantitativa mínima sigue tres pasos: estimar [[Ui]] inicial, proyectar [[Kf]] ideal y contrastar con medición para inferir [[Wnc]]. Si la magnitud de [[Wnc]] crece, el diseño se ajusta porque el sistema está perdiendo demasiada energía útil.

## Interpretación

Este caso real confirma la continuidad entre teoría y práctica. El balance ideal es útil para arrancar rápido; el balance extendido es indispensable para ajustar con honestidad física. La decisión correcta no es una fórmula única para todo, sino una secuencia: definir sistema, comparar estados, validar unidades e interpretar intercambio.

El aprendizaje transferible es operativo. Un alumno competente puede explicar cómo se reparte [[Em]] entre [[Ki]], [[Ui]], [[Kf]] y [[Uf]], y cuándo [[Wnc]] debe incorporarse como término dominante. Esa capacidad es la que convierte el principio en herramienta profesional y no en memoria algebraica.
