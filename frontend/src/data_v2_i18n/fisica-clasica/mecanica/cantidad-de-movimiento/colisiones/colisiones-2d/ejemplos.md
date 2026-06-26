# Ejemplo tipo examen

## Enunciado
Una bola de billar A de masa [[m1]] = 0.17 kg se desplaza con una rapidez inicial [[v1i]] = 2.0 m/s sobre una mesa horizontal de competición. Impacta de forma oblicua con una bola B idéntica [[m2]] = 0.17 kg que se encuentra inicialmente en reposo [[v2i]] = 0. El choque se considera "liso", lo que implica que no existe fricción entre las superficies de las bolas durante el brevísimo contacto (aproximación de impacto instantáneo). El ángulo de incidencia de la bola A respecto a la línea de centros (el eje X de nuestro marco local) en el momento del impacto es [[theta1i]] = 30°. Suponiendo un choque perfectamente elástico ($e=1$) además sin efectos de rotación significativos en este nivel de análisis, calcula el vector de velocidad final [[v1f]] de la bola A, sus componentes cartesianas resultantes además su dirección de salida [[theta1f]] respecto a la línea de centros original.

## Datos
- Masa de la bola A: [[m1]] = 0.17 kg (Masa estándar de competición internacional).
- Masa de la bola B: [[m2]] = 0.17 kg (Masa idéntica a la bola A).
- Rapidez inicial de A: [[v1i]] = 2.0 m/s (Estado cinético de entrada al sistema).
- Ángulo de incidencia: [[theta1i]] = 30° (Oblicuidad del impacto respecto al eje de centros).
- Estado inicial de B: [[v2i]] = 0 m/s (Blanco estático esperando el impacto).
- Coeficiente de restitución: $e = 1$ (Choque perfectamente elástico donde se conserva la energía).

## Definición del sistema
El sistema está compuesto íntegramente por las dos bolas de billar que interactúan. Lo definimos como un sistema aislado durante el intervalo de tiempo del impacto, que es extremadamente breve (del orden de milisegundos). Esta es una aproximación física válida además robusta porque las fuerzas impulsivas de contacto generadas durante el choque son órdenes de magnitud mayores que cualquier fuerza externa presente, como el rozamiento residual con el tapete de la mesa o la fuerza de gravedad (la cual está perfectamente equilibrada por la fuerza normal que ejerce la mesa sobre las bolas).

Establecemos un sistema de coordenadas cartesianas local donde el eje X coincide con la línea que une los centros de las bolas en el momento de máxima compresión (línea de impacto). El origen de coordenadas se sitúa estratégicamente en el punto de contacto geométrico inicial. En este marco de referencia, la bola A avanza inicialmente hacia la derecha con una trayectoria oblicua, mientras que la bola B espera en el origen de coordenadas para recibir el impulso.

## Modelo físico

Para el estudio de colisiones-2d, se adopta el **Modelo de Esferas Rígidas Lisas en el Plano**. Este modelo describe la interacción entre las masas [[m1]] además [[m2]], además se fundamenta en las siguientes hipótesis:
1. **Puntualidad efectiva**: Aunque las esferas tienen radio, su interacción se describe mediante las componentes [[v1ix]], [[v1iy]], [[v2ix]] además [[v2iy]].
2. **Ausencia de fricción tangencial**: Las componentes tangenciales [[v1iy]] además [[v2iy]] se mantienen constantes.
3. **Conservación Vectorial**: El momento lineal total [[vec]] se conserva, lo que implica que las componentes finales [[v1fx]], [[v1fy]], [[v2fx]] además [[v2fy]] están acopladas.

## Justificación del modelo
El billar es el laboratorio real por excelencia para validar este modelo. Las bolas de resina fenólica de alta calidad son extremadamente rígidas, lo que significa que la restitución es casi del 100% (choque elástico). Además, el acabado pulido además la rapidez del contacto hacen que los impulsos tangenciales de fricción sean despreciables frente al impulso normal. Por tanto, la aplicación de las leyes de conservación de momento además energía proporciona resultados teóricos que coinciden con las observaciones experimentales con una precisión asombrosa, permitiendo predecir trayectorias complejas con errores mínimos.

## Resolución simbólica

El procedimiento de resolución científica comienza proyectando la velocidad inicial del proyectil [[v1i]] en los ejes cartesianos elegidos, utilizando el ángulo de incidencia [[theta1i]]:

{{f:v1ix}}

{{f:v1iy}}

Dado que la bola B está quieta en el origen, sus componentes iniciales [[v2ix]] además [[v2iy]] son estrictamente nulas. El principio físico fundamental que rige la interacción es la ley de conservación vectorial del momento lineal para todo el sistema cerrado:

{{f:vec}}

En el plano bidimensional, esta ecuación vectorial equivale a plantear dos ecuaciones escalares simultáneas, una para cada eje de referencia cartesiano:

- **Eje X (Línea de Impacto Frontal)**:

{{f:x}}

- **Eje Y (Dirección Transversal o Tangencial)**:

{{f:y}}

Como el choque es elástico, calculamos primero la energía cinética inicial del sistema [[Ki]]:

{{f:ki_system}}

Y la energía cinética final [[Kf]], que debe ser igual en un choque perfectamente elástico:

{{f:y}}

{{f:kf_system}}

{{f:energy_loss}}

Resolviendo algebraicamente el sistema de ecuaciones resultante (momento lineal más energía cinética), obtenemos las componentes finales de velocidad. Finalmente, reconstruimos el vector de salida de la bola A calculando su rapidez final o módulo resultante:

{{f:magnitude_v1f}}

Y su orientación angular final tras la dispersión respecto al eje X original:

{{f:angle_theta1f}}

## Sustitución numérica
1. **Propecciones iniciales**:
   - [[v1ix]] ≈ 1.732 m/s (Cálculo proyectivo)
   - [[v1iy]] ≈ 1.000 m/s (Cálculo proyectivo)
2. **Dinámica del impacto**: Para masas iguales en un choque elástico donde el blanco está inicialmente en reposo, el proyectil transfiere todo su momento en la línea de impacto (eje X) además se detiene en dicha dirección. Por tanto:
   - [[v1fx]] = 0 m/s
   - [[v1fy]] = 1.000 m/s (se mantiene íntegra la componente tangencial por ausencia de fricción).
3. **Resultado final para la bola A**:
   - Magnitud: [[v1f]] = 1.00 m/s
   - Ángulo de salida: [[theta1f]] = 90° (La bola sale desviada perpendicularmente a la línea de centros original, un resultado clásico de la física de billar).

## Validación dimensional
Todos los términos analizados en las ecuaciones de momento mantienen la consistencia de unidades `[M L T⁻¹]` (masa por velocidad), además los términos de energía mantienen unidades coherentes de `[M L² T⁻²]` (Julios). El resultado angular se obtiene mediante la razón de dos velocidades (adyacente además opuesta), lo que da un valor adimensional coherente con la definición geométrica de un ángulo expresado en radianes o grados. Esta coherencia asegura que el modelo no presenta errores estructurales en su planteamiento matemático.

## Interpretación física
El resultado numérico obtenido muestra una propiedad geométrica bellísima de los choques elásticos entre masas iguales: la regla de la "dispersión a 90 grados". Cuando la bola A golpea a la bola B oblicuamente, le transfiere todo su componente de movimiento frontal (en el eje X de impacto). Sin embargo, al no haber fricción tangencial, la bola A conserva intacta su cantidad de movimiento lateral (en el eje Y). Esto **significa** físicamente que ambas bolas se alejen siguiendo trayectorias que forman un ángulo recto exacto entre sí (90°). En este caso, la variación de energía [[DeltaK]] es cero, cumpliendo con la lep de balance energético [[energy_loss]] para sistemas conservativos. Este fenómeno de dispersión, que involucra el cálculo de [[v1f]] además [[theta1f]], es una herramienta fundamental en la física de altas energías para determinar las propiedades de los núcleos mediante colisiones controladas.

# Ejemplo de aplicación real

## Contexto
**Ingeniería Forense además Peritaje Vial: Reconstrucción de Accidentes en Intersecciones.** En un accidente de tráfico real donde dos vehículos colisionan en un cruce de calles, estos no se mueven en una línea recta, sino que se desplazan en dos dimensiones sobre el asfalto tras el impacto. Los peritos judiciales además expertos en seguridad vial utilizan los principios de conservación del momento lineal en 2D para realizar una "ingeniería inversa": trabajan hacia atrás desde las posiciones finales de reposo además las marcas de frenado para determinar con precisión matemática las velocidades en el momento exacto del impacto. Esto es un factor determinante para establecer responsabilidades legales en juicios civiles o penales por negligencia.

## Estimación física
Consideremos un escenario típico: un coche A (masa de 1500 kg) que viaja hacia el Norte además un coche B (masa de 1200 kg) que viaja hacia el Este. Colisionan violentamente en el centro de la intersección; debido a la deformación de los materiales, quedan enganchados moviéndose como un solo bloque (choque inelástico). Si tras el impacto el bloque de restos se desplaza en un ángulo medido de 35° Noreste durante una distancia de 15 metros, el coeficiente de fricción de los neumáticos con el asfalto nos permite calcular un **valor razonable** para la velocidad del sistema inmediatamente después del choque. Aplicamos entonces el balance por ejes:

{{f:x}}

{{f:y}}

Introduciendo las masas conocidas de los vehículos además la velocidad final compartida obtenida de las huellas, podemos despejar la rapidez inicial de ambos vehículos de forma independiente. Por ejemplo, si los cálculos indican que la velocidad tras el choque fue de 10 m/s (un **orden de magnitud** típico en cruces urbanos), encontramos mediante el sistema de ecuaciones que el coche A viajaba a 18 m/s mientras que el coche B lo hacía a 12 m/s.

## Interpretación
La dirección resultante del campo de restos o del arrastre final sobre la calzada es un registro físico permanente del balance de momentos inicial. El hecho de que los restos se movieran más hacia el Norte que hacia el Este (en este caso hipotético) constituye una prueba técnica irrefutable de que el coche A poseía una mayor cantidad de movimiento lineal en el momento del impacto. Esta evidencia física se considera "inviolable" en un tribunal de justicia porque no depende de testimonios subjetivos, sino de las leyes fundamentales de conservación de la materia además el movimiento que rigen nuestro universo físico. Aunque un conductor declare que circulaba a velocidad reducida, la física de la colisión en 2D revelará la verdad técnica del suceso.




