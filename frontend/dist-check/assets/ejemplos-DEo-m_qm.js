const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Un bloque homogéneo de madera tiene una densidad promedio [[rho_obj]] de \\( 600\\text{ kg/m}^3 \\) y un volumen total [[Vtot]] de \\( 0.001\\text{ m}^3 \\). Se coloca en agua dulce de densidad [[rho_f]] igual a \\( 1000\\text{ kg/m}^3 \\). El objetivo de este ejercicio es hallar la fracción sumergida [[frac_sum]] del objeto, calcular el volumen sumergido real [[Vsum]] y comprobar mediante un balance de fuerzas que el empuje hidrostático equilibra exactamente al peso gravitatorio del cuerpo en su posición final de reposo. Este análisis es fundamental para comprender cómo interactúan los sólidos con la superficie de un fluido en equilibrio.\r
\r
## Datos\r
-   Densidad del objeto: [[rho_obj]] = \\( 600\\text{ kg/m}^3 \\)\r
-   Densidad del fluido: [[rho_f]] = \\( 1000\\text{ kg/m}^3 \\)\r
-   Volumen total: [[Vtot]] = \\( 0.001\\text{ m}^3 \\)\r
-   Aceleración gravitatoria de referencia: 9.8 m/s²\r
\r
## Definición del sistema\r
Tomamos como sistema de estudio el bloque de madera una vez alcanzado el estado de equilibrio estático en la superficie del líquido. El fluido se considera un medio continuo, homogéneo y en reposo absoluto, lo que implica la ausencia de corrientes internas. El cuerpo se trata como un sólido rígido con densidad uniforme y geometría constante. Las magnitudes clave del leaf involucradas en este proceso de cálculo son la fracción sumergida [[frac_sum]], el volumen sumergido [[Vsum]], la densidad del objeto [[rho_obj]] y la densidad del fluido [[rho_f]].\r
\r
## Modelo físico\r
El problema utiliza de manera directa las relaciones fundamentales del equilibrio de flotación y el principio de Arquímedes tal como se definen en este leaf de aprendizaje:\r
\r
{{f:fraccion_sumergida}}\r
\r
{{f:volumen_sumergido}}\r
\r
## Justificación del modelo\r
La justificación es puramente física: dado que la densidad promedio del bloque (\\( 600\\text{ kg/m}^3 \\)) es estrictamente menor que la del agua (\\( 1000\\text{ kg/m}^3 \\)), debe existir necesariamente una configuración de flotación parcial estable. Según las leyes de la hidrostática, el cuerpo se sumergirá hasta desplazar una cantidad de fluido cuyo peso sea idéntico al peso total del cuerpo. Al no existir aceleraciones externas, oleaje ni efectos dinámicos significativos, el modelo hidrostático del leaf proporciona una descripción exacta y rigurosa del sistema.\r
\r
## Resolución simbólica\r
En primer lugar, determinamos la proporción del volumen del cuerpo que quedará bajo la línea de flotación mediante la relación de densidades:\r
\r
{{f:fraccion_sumergida}}\r
\r
A continuación, calculamos el volumen real de la parte sumergida (volumen de carena) multiplicando la fracción calculada por el volumen total disponible del objeto:\r
\r
{{f:volumen_sumergido}}\r
\r
Para verificar el equilibrio total de fuerzas verticales, calculamos empuje y peso gravitatorio. En este caso, ambos resultados numéricos deben coincidir para mantener el reposo.\r
\r
## Sustitución numérica\r
Realizamos el cálculo de la fracción sumergida: el cociente entre 600 y 1000 da como resultado 0.6.\r
\r
A partir de este valor, obtenemos el volumen sumergido: 0.6 multiplicado por 0.001 da 0.0006 m³.\r
\r
Finalmente, comprobamos el equilibrio de fuerzas en el eje vertical: el empuje calculado es 5.88 N y el peso calculado también es 5.88 N.\r
\r
## Validación dimensional\r
La fracción sumergida [[frac_sum]] resulta ser una magnitud adimensional, lo cual es correcto al ser una relación de dos densidades con las mismas unidades (\\( \\text{kg/m}^3 / \\text{kg/m}^3 \\)). El volumen sumergido se expresa en metros cúbicos (\\( \\text{m}^3 \\)), la unidad estándar de volumen. Por último, tanto el empuje como el peso resultan en Newtons (\\( \\text{N} \\)), unidad coherente para fuerzas en el Sistema Internacional. Esta consistencia garantiza que el resultado matemático tiene un significado físico válido.\r
\r
## Interpretación física\r
El bloque de madera queda sumergido en un \\( 60\\% \\) de su volumen total. Esto indica que desplaza el peso de agua suficiente para equilibrar su propia masa mucho antes de hundirse por completo. La línea de flotación se estabiliza exactamente en el nivel donde el volumen desplazado alcanza los \\( 0.0006\\text{ m}^3 \\), punto en el cual la fuerza neta vertical sobre el bloque se anula por completo.\r
\r
La lectura más importante es la relación causal: la densidad relativa dicta la geometría del equilibrio. Si sustituyéramos el agua dulce por un fluido más denso, como agua de mar o mercurio, el bloque flotaría más arriba (menor fracción sumergida). Este fenómeno es el principio de funcionamiento de los densímetros, donde la profundidad de inmersión nos "traduce" visualmente las propiedades de densidad del medio líquido circundante.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Una boya esférica de señalización marítima de grandes dimensiones tiene una masa total de \\( 200\\text{ kg} \\) y un volumen total [[Vtot]] de \\( 0.523\\text{ m}^3 \\). Flota en agua de mar con una densidad característica [[rho_f]] de \\( 1025\\text{ kg/m}^3 \\). Los ingenieros necesitan estimar qué fracción del volumen queda bajo la superficie y qué reserva de flotabilidad queda disponible para absorber cargas adicionales por efecto del oleaje o la instalación de sensores.\r
\r
## Estimación física\r
Para realizar esta estimación cuantitativa, primero obtenemos la densidad promedio del conjunto boya-aire dividiendo la masa total por el volumen total conocido. El valor resultante es 382.41 kg/m³.\r
\r
A continuación, aplicamos la relación operativa del leaf\r
\r
{{f:fraccion_sumergida}}\r
\r
para hallar la proporción exacta de hundimiento en equilibrio hidrostático. El resultado es 0.3731.\r
\r
Esta cuantificación implica que el volumen sumergido real bajo la superficie del mar (volumen de carena) resulta ser 0.1951 m³.\r
\r
Finalmente, verificamos la fuerza de empuje para confirmar que el fluido soporta el peso gravitatorio. El empuje estimado es aproximadamente 1960.3 N.\r
\r
Este valor numérico compensa exactamente los \\( 1960\\text{ N} \\) del peso gravitatorio (\\( 200 \\cdot 9.8 \\)), lo que valida nuestra estimación del calado y confirma la estabilidad del sistema.\r
\r
## Interpretación\r
La boya sumerge solo alrededor del \\( 37\\% \\) de su volumen total. Esto indica que posee una reserva de flotabilidad muy amplia, cercana al \\( 63\\% \\). Este margen otorga a la boya una gran estabilidad y capacidad para soportar perturbaciones externas, como choques de olas o acumulación de material biológico, sin riesgo de hundimiento.\r
\r
La física profunda de este diseño radica en que la flotabilidad no depende del material del casco por sí solo, sino del gran volumen de aire encerrado que reduce la densidad media [[rho_obj]] por debajo de la del agua de mar. Este margen de seguridad es vital en ingeniería naval para garantizar que el objeto siga cumpliendo su función de señalización visible incluso en condiciones meteorológicas extremas. Además, este ejemplo muestra cómo la teoría de flotación se traduce en decisiones críticas sobre el mantenimiento y la seguridad operativa en entornos industriales marítimos.`;export{e as default};
