const e=`\uFEFF# Coeficiente de restitución\r
\r
## Contexto conceptual\r
\r
El coeficiente de restitución[[e]]es un parámetro adimensional fundamental en la mecánica clásica que cuantifica la elasticidad de un choque entre dos cuerpos. En el mundo real, ninguna colisión es perfectamente elástica; siempre existe una fracción de la energía cinética que se transforma en otras formas de energía interna, como calor, sonido o deformación plástica permanente de los materiales involucrados. Este coeficiente actúa como una caja negra que resume en un solo número toda la complejidad de las fuerzas de contacto, las ondas de choque internas y las disipaciones moleculares que ocurren durante el impacto. Es la herramienta analítica primordial para resolver colisiones sin necesidad de profundizar en la evolución temporal de las fuerzas de contacto, permitiendo una transición suave entre la cinemática de los cuerpos y la física del impacto.\r
\r
## 🟢 Nivel esencial\r
\r
### Definición central\r
\r
Desde un punto de vista fenomenológico, el coeficiente de restitución[[e]]se define como el cociente entre la rapidez relativa de separación tras el choque y la rapidez relativa de acercamiento antes del mismo. Representa la "memoria elástica" del contacto, indicando qué fracción de la velocidad de impacto se conserva para alejar los cuerpos:\r
\r
\r
Es una medida de la eficiencia del rebote. Indica qué parte de la velocidad relativa sobrevive al encuentro.\r
\r
### Clasificación de choques\r
\r
El valor de[[e]]permite clasificar los tipos de colisiones dentro del espectro físico ordinario, siguiendo una escala de restitución energética.\r
\r
1. **Colisión perfectamente elástica**: Ocurre cuando el parámetro es exactamente igual a 1. En este límite ideal, no hay pérdida de energía cinética. Los cuerpos se alejan con la misma rapidez relativa con la que se acercaron. Es el modelo aplicable a colisiones entre átomos o partículas fundamentales en condiciones específicas.\r
2. **Colisión totalmente inelástica**: Ocurre cuando el parámetro es exactamente igual a 0. En este caso, los cuerpos quedan unidos tras el impacto y se mueven como un solo bloque. La velocidad relativa de separación[[vrel_f]]es nula. Se disipa la máxima cantidad posible de energía cinética compatible con la conservación del momento.\r
3. **Colisión inelástica**: Es el régimen que cubre la inmensa mayoría de los fenómenos macroscópicos, donde el valor se encuentra entre los límites anteriores. Los materiales se deforman y recuperan parcialmente, perdiendo energía en el proceso.\r
\r
## 🔵 Nivel formal\r
\r
### Ecuación de resolución cinemática\r
\r
El coeficiente de restitución[[e]]proporciona la ecuación necesaria para cerrar el sistema de ecuaciones de un choque. Si conocemos las masas y las velocidades iniciales[[v1i]]y[[v2i]], podemos predecir el estado final. La velocidad final del primer cuerpo[[v1f]]se puede expresar en términos de la del segundo[[v2f]]:\r
\r
{{f:v1f_from_e}}\r
\r
Además, la magnitud conocida como velocidad relativa de separación[[vrel_f]]se obtiene directamente aplicando el coeficiente de restitución a la condición inicial de acercamiento:\r
\r
{{f:vrel_f}}\r
\r
Esta relación es extremadamente potente porque permite evaluar la "violencia" del rebote sin necesidad de descomponer las velocidades en un sistema de referencia específico, manteniendo la invariancia galileana del modelo.\r
\r
El valor de[[e]]debe satisfacer siempre la restricción de rango físico:\r
\r
{{f:rango_e}}\r
\r
### Medición experimental por alturas\r
\r
Una de las formas más sencillas y precisas de medir[[e]]en el laboratorio es mediante el rebote vertical de un objeto contra una superficie masiva y fija (como el suelo). Al soltar un objeto desde una altura inicial[[h0]]y medir la altura máxima del primer rebote[[hf]], el coeficiente de restitución se obtiene como la raíz cuadrada del cociente de alturas:\r
\r
{{f:e_desde_alturas}}\r
\r
Esta fórmula es una consecuencia directa de la conservación de la energía mecánica durante el vuelo parabólico y de la definición aplicada al instante del impacto. Es la base de los ensayos de calidad en la industria de materiales deportivos.\r
\r
### Dependencia con variables externas\r
\r
Aunque a menudo se trata como una constante del material, el valor depende sutilmente de la velocidad de impacto. A velocidades muy altas, el coeficiente tiende a disminuir debido a que se supera el límite elástico del material, provocando daños estructurales permanentes. También influye la geometría: dos esferas del mismo material tienen un comportamiento distinto al de un cilindro contra un plano.\r
\r
{{f:e}}\r
\r
{{f:mu}}\r
\r
{{f:perdida_energia}}\r
\r
{{f:altura_rebote}}\r
\r
## 🔴 Nivel estructural\r
\r
### Masa reducida y balance de energía\r
\r
El análisis profundo del impacto requiere separar el movimiento del sistema en dos componentes: el movimiento del centro de masas (que no se ve afectado por las fuerzas internas del choque) y el movimiento relativo de los cuerpos. La inercia asociada a este último es la masa reducida[[mu]], definida como el producto de las masas[[m1]]y[[m2]]dividido por su suma:\r
\r
\r
La importancia de[[mu]]radica en que toda la energía cinética que puede disiparse durante el choque es la energía cinética relativa. La pérdida de energía cinética total[[DeltaK]]del sistema tras el contacto viene dada por la expresión estructural:\r
\r
\r
Esta fórmula revela que la disipación depende cuadráticamente tanto de la velocidad relativa inicial como del coeficiente de restitución. Un[[e]]de 0,7 no significa que se pierda el 30% de la energía, sino que se pierde casi el 51% (1 menos 0,49).\r
\r
### Perspectiva termodinámica e irreversibilidad\r
\r
Desde el punto de vista de la termodinámica, el coeficiente de restitución[[e]]es un indicador de la irreversibilidad del proceso. Un choque con[[e]]menor que 1 es un proceso adiabático pero irreversible, donde la entropía del sistema aumenta debido a la degradación de la energía cinética ordenada en agitación térmica desordenada de las moléculas. La energía[[DeltaK]]se manifiesta como un incremento de temperatura en la zona de contacto y como la emisión de ondas acústicas.\r
\r
### Límites físicos y colisiones superelásticas\r
\r
En condiciones pasivas, el valor nunca puede superar la unidad, ya que esto implicaría una creación espontánea de energía mecánica. Sin embargo, existen sistemas activos o "superelásticos" donde es mayor que 1. Esto sucede cuando el contacto desencadena la liberación de energía potencial almacenada internamente, como una pequeña explosión química o el disparo de un resorte comprimido. En estos casos, la velocidad relativa final es superior a la inicial.\r
\r
## Interpretación física profunda\r
\r
La interpretación causal nos dice que este parámetro mide la eficiencia con la que un material es capaz de devolver la energía de deformación. Durante la fase de compresión del choque, la energía cinética relativa se transforma en energía potencial elástica; durante la fase de restitución, el material intenta recuperar su forma original. Si el material es viscoso o sufre deformación plástica, parte de esa energía se "atrapa" en la estructura molecular y nunca vuelve a la forma de movimiento macroscópico. Por tanto, el coeficiente es una medida de la resiliencia mecánica del sistema.\r
\r
## Orden de magnitud\r
\r
El espectro de valores es amplio y depende críticamente del par de materiales. Una bola de acero impactando contra otra de acero tiene un valor altísimo, cercano a 0,95, debido a la baja disipación interna del metal bien templado. En cambio, una pelota de tenis tiene un valor de aproximadamente 0,75, y un balón de baloncesto oscila alrededor de 0,83. Materiales como la arcilla o la plastilina tienen valores cercanos a 0,05, ya que su capacidad de recuperación elástica es casi nula. La temperatura también es un factor determinante: una pelota de goma enfriada con nitrógeno líquido puede ver reducido su rebote drásticamente hasta volverse quebradiza y no rebotar en absoluto.\r
\r
## Método de resolución personalizado\r
\r
Para abordar cualquier problema de colisiones utilizando el coeficiente de restitución, se sugiere seguir este protocolo:\r
\r
1. **Evaluación de datos**: Determinar si[[e]]es un dato conocido o si debe obtenerse a partir de observaciones cinemáticas como alturas o velocidades medidas.\r
2. **Cálculo desde alturas**: Si el problema involucra un rebote contra el suelo, aplicar la raíz cuadrada del cociente entre la altura de caída[[h0]]y la de rebote[[hf]].\r
3. **Planteamiento de ecuaciones**: Escribir la conservación del momento lineal junto con la ecuación de definición para formar un sistema consistente.\r
4. **Cálculo de velocidades**: Resolver el sistema para obtener las velocidades finales, prestando especial atención a la convención de signos elegida para el eje del movimiento.\r
5. **Análisis energético**: Utilizar la masa reducida[[mu]]para calcular la pérdida[[DeltaK]]y verificar que el resultado es coherente con el tipo de choque.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Rebotes sucesivos.** Cuando una pelota rebota repetidamente sobre una superficie, cada impacto reduce su energía según la misma proporción. Tras un número[[n]]de rebotes, la altura máxima alcanzada[[hn]]viene dada por la progresión geométrica:\r
\r
\r
Si una pelota con[[e]]igual a 0,8 se suelta desde 2 metros, el primer bote alcanza 1,28 m, el segundo 0,82 m y el tercero 0,52 m. La altura[[hn]]tiende a cero conforme[[n]]aumenta, ilustrando el decaimiento exponencial de la energía potencial máxima.\r
\r
**Colisión totalmente inelástica.** En el límite donde el parámetro es cero, los cuerpos no se separan. Esto ocurre en accidentes de tráfico donde los vehículos se enganchan o en un proyectil que se incrusta en un bloque de madera. Toda la energía cinética relativa se convierte en pérdida[[DeltaK]], la cual se disipa deformando las estructuras metálicas o rompiendo fibras de madera.\r
\r
**Ejemplo extendido.** Una esfera de 0,2 kg cae desde 3 metros sobre un suelo masivo. Antes del impacto, su velocidad es de 7,67 m/s. Tras el choque con un[[e]]de 0,7, la velocidad de salida es de 5,37 m/s hacia arriba. El impulso recibido cambia el momento de la esfera, y la altura de rebote[[hf]]resultante es de 1,47 metros. Se puede verificar que la energía se ha reducido a menos de la mitad de la original debido al factor cuadrático del coeficiente de restitución.\r
\r
## Preguntas reales del alumno\r
\r
- **¿El coeficiente de restitución puede depender del tiempo?** El parámetro resume un evento instantáneo. Sin embargo, si los materiales se calientan tras muchos botes, sus propiedades mecánicas cambian y el valor en el siguiente bote será distinto.\r
- **¿Es lo mismo que el coeficiente de fricción?** No. La fricción se opone al movimiento tangencial, mientras que rige la respuesta normal al plano de contacto. Son fenómenos independientes aunque ambos disipan energía.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Ciencia de Materiales**: El estudio de este parámetro es la puerta de entrada al análisis del comportamiento elasto-plástico y la fatiga de materiales bajo cargas impulsivas.\r
- **Seguridad Vial**: Los ingenieros de reconstrucción de accidentes lo utilizan para estimar velocidades de impacto a partir de los daños estructurales y las posiciones finales de los vehículos.\r
- **Deporte y Biomecánica**: El diseño de superficies de atletismo y calzado deportivo busca optimizar la devolución de energía para minimizar el riesgo de lesiones y maximizar el rendimiento.\r
\r
## Síntesis final\r
\r
El coeficiente de restitución[[e]]representa el eslabón perdido entre la descripción ideal de los choques y la realidad disipativa. Al permitirnos modelar la pérdida de velocidad relativa de forma sencilla, se convierte en una herramienta indispensable para cualquier análisis dinámico que involucre el contacto entre cuerpos sólidos, proporcionando una visión clara de cómo la energía macroscópica se degrada inevitablemente en el mundo físico.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
