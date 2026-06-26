const e=`## Errores conceptuales
Los errores conceptuales en el estudio de la resistencia suelen originarse en una comprensión superficial de la naturaleza de la materia y su interacción con los campos eléctricos. Muchos alumnos ven la resistencia como una etiqueta estática pegada a un componente, olvidando que es la manifestación de un equilibrio dinámico de colisiones.

### Error 1: Confundir la resistividad intrínseca con la resistencia del objeto
**Por qué parece correcto**: Ambos términos se refieren a la oposición eléctrica y suenan gramaticalmente similares, lo que induce a pensar que son intercambiables para describir la calidad de un conductor.
**Por qué es incorrecto**: La [[rho]] es una propiedad intensiva que caracteriza al material puro, independientemente de su forma. La [[R]] es una propiedad extensiva que depende tanto del material como de sus dimensiones físicas.
**Señal de detección**: Intentar buscar en una tabla de datos la "resistencia del cobre" sin especificar la longitud ni el grosor del cable.
**Corrección conceptual**: La resistividad es una propiedad del material; la resistencia es una propiedad del objeto fabricado.
**Mini-ejemplo**: Un kilómetro de cable de cobre tiene una resistencia muy alta, a pesar de que su resistividad es una de las más bajas de la naturaleza.

## Errores de modelo
El fallo de modelo ocurre cuando se aplican herramientas lineales a sistemas que no cumplen las hipótesis de proporcionalidad.

### Error 2: Aplicar la ley de Ohm en dispositivos no lineales
**Por qué parece correcto**: La ley de Ohm es tan ubicua que se asume que cualquier medición de tensión dividida por corriente define una resistencia constante válida para todos los rangos.
**Por qué es incorrecto**: En dispositivos como LEDs o transistores, la relación no es una línea recta. La oposición al paso de carga cambia drásticamente según el nivel de tensión aplicado.
**Señal de detección**: Al duplicar la [[V]], la [[I]] aumenta de forma exponencial o abrupta en lugar de duplicarse.
**Corrección conceptual**: Reconoce que la ley de Ohm es una relación constitutiva para materiales específicos, no una ley universal para todo componente eléctrico.
**Mini-ejemplo**: Un diodo que no conduce a 0.5 V pero deja pasar mucha corriente a 0.7 V no puede modelarse con una única resistencia fija.

## Errores matemáticos
Los fallos operativos suelen ser más destructivos que los conceptuales en la práctica de laboratorio.

### Error 3: Mezclar milímetros cuadrados con metros cuadrados en el cálculo de sección
**Por qué parece correcto**: El mm2 es la unidad estándar en los catálogos comerciales de cables, por lo que parece natural insertarlo directamente en las fórmulas de física.
**Por qué es incorrecto**: Las ecuaciones de física asumen unidades del Sistema Internacional. Usar mm2 en lugar de m2 introduce un error de un factor de un millón (\\(10^6\\)).
**Señal de detección**: Obtener valores de resistencia del orden de \\(\\mu\\Omega\\) para cables largos que deberían tener décimas de \\(\\Omega\\).
**Corrección conceptual**: Multiplica siempre el valor en mm2 por \\(10^{-6}\\) antes de realizar cualquier operación matemática en la fórmula geométrica.
**Mini-ejemplo**: Si calculas con un área de \\( 1.5 \\ \\mathrm{mm}^2 \\) en lugar de \\( 1.5 \\times 10^{-6} \\), tu cable parecerá un superconductor irreal cuando en realidad tiene una resistencia normal.

## Errores de interpretación
Interpretar incorrectamente los resultados de una simulación o medición lleva a conclusiones de diseño peligrosas.

### Error 4: Ignorar el aumento de resistencia por efecto térmico
**Por qué parece correcto**: En los ejercicios escolares se asume que los datos son estáticos y que la resistencia no cambia durante el experimento de medición.
**Por qué es incorrecto**: La corriente genera calor por efecto Joule, y este calor aumenta las colisiones atómicas, lo que a su vez eleva la resistencia real del material.
**Señal de detección**: Observar que la corriente decae lentamente tras conectar el circuito, a pesar de que la tensión de la fuente es perfectamente estable.
**Corrección conceptual**: En diseños de potencia, se debe usar el coeficiente de temperatura para predecir la resistencia operativa en caliente, no solo la nominal en frío.
**Mini-ejemplo**: El filamento de una bombilla tiene una resistencia en funcionamiento mucho mayor que la que medirías con un multímetro cuando está apagada.

## Regla de autocontrol rápido
Para blindar tus resultados contra estos fallos, aplica siempre este triple filtro de coherencia física antes de dar por finalizado un cálculo:
1. **Verificación de escala**: ¿Es razonable que un cable pequeño tenga giga\\(\\Omega\\)s o que un aislante tenga mili\\(\\Omega\\)s? Si el valor es extremo, sospecha de las unidades de área.
2. **Chequeo de linealidad**: ¿El componente que estoy analizando es realmente un resistor metálico o es un semiconductor con comportamiento complejo?
3. **Sentido térmico**: Si la corriente calculada es alta, ¿he considerado cómo afectará el calor generado al valor de la resistencia que estoy asumiendo como constante?
Si pasas estos tres filtros, la probabilidad de que tu análisis sea físicamente robusto es máxima.
`;export{e as default};
