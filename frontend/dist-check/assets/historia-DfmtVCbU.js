const e=`## Problema histórico
Cuando los sistemas de corriente alterna empezaron a escalar en distribución y uso industrial, apareció una dificultad práctica inmediata: las leyes pensadas para elementos puramente resistivos no bastaban para describir el papel de capacitores en régimen periódico. Se observaban corrientes relevantes y desplazamientos de fase que no podían interpretarse con la intuición de "oposición igual a disipación".

## Dificultad conceptual previa
La dificultad central era separar dos planos que en corriente continua suelen coincidir más fácilmente: oposición al cambio temporal y consumo energético neto. En AC, un capacitor podía modificar de forma fuerte la corriente de línea sin representar el mismo tipo de gasto activo que una resistencia. Sin un lenguaje preciso, muchos diagnósticos confundían intercambio reactivo con consumo útil.

Otra dificultad importante era metrológica. Las mediciones disponibles mostraban valores de tensión y corriente, pero no siempre quedaba claro cómo conectarlas con fase, frecuencia y condición de validez del modelo. Faltaba una estructura que uniera observación, fórmula y decisión técnica.

## Qué cambió
El cambio decisivo fue la formalización de la reactancia capacitiva como magnitud de oposición dependiente de frecuencia. Ese paso permitió explicar por qué un mismo capacitor no "se comporta igual" ante ritmos distintos de excitación. Después, al integrarse en análisis fasorial e impedancia compleja, la interpretación dejó de ser anecdótica y pasó a ser sistemática.

Con esa formalización, la ingeniería pudo diseñar compensación reactiva, filtros y etapas de acondicionamiento con criterios reproducibles. El conocimiento dejó de apoyarse en reglas empíricas sueltas y empezó a apoyarse en relaciones causales trazables.

## Impacto en la física
El impacto físico fue metodológico y tecnológico. Metodológico, porque consolidó la diferencia entre magnitudes que describen intercambio cíclico y magnitudes que describen transferencia neta. Tecnológico, porque habilitó decisiones de diseño más seguras en red, electrónica de potencia y control de calidad de energía.

Además, la noción de reactancia capacitiva ayudó a articular mejor el puente entre dominio temporal y dominio frecuencial. Ese puente es esencial para modelar sistemas periódicos modernos, desde filtros hasta arquitecturas de conversión.

## Conexión con física moderna
Hoy la reactancia capacitiva sigue siendo base en sistemas eléctricos avanzados. Aparece en corrección de factor de potencia, supresión de ruido, diseño de filtros activos y pasivos, convertidores y estrategias de compatibilidad electromagnética. También está en el núcleo de cursos de señales, sistemas lineales y modelado de redes.

En síntesis histórica, este tema no es una pieza menor del currículo: es una capa de alfabetización física para comprender cómo la variación temporal transforma la interacción entre componente y sistema. Sin esa capa, la física aplicada en AC queda incompleta.
`;export{e as default};
