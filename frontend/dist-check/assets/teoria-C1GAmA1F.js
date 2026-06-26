const e=`# Magnitudes cinemáticas \r
\r
## Contexto conceptual \r
\r
La cinemática es la rama de la física que describe el movimiento de los objetos sin considerar las causas que lo producen. Para lograr esta descripción precisa, se apoya en un conjunto de magnitudes fundamentales que capturan dónde está un objeto, qué tan rápido se mueve y cómo cambia esa [[rapidez]] con el [[tiempo]] . Estas magnitudes —[[posicion]] , [[desplazamiento]] , [[velocidad]] y [[aceleracion]] — forman una cadena de derivadas sucesivas respecto al [[tiempo]] . \r
\r
Dominar sus definiciones y relaciones mutuas es el primer paso para analizar cualquier fenómeno físico, desde el [[desplazamiento]] de un vehículo hasta el movimiento de un electrón. Un error común es confundir la [[distancia]] con el [[desplazamiento]] , o la [[rapidez]] con la [[velocidad]] . La distinción radica en que un par son magnitudes escalares y las otras son vectoriales. Comprender esta diferencia evita fallos críticos en problemas de trayectorias cerradas o movimientos multidimensionales. \r
\r
## 🟢 Nivel esencial \r
\r
Imagina un trayecto cotidiano. Tu [[posicion]] indica dónde estás en un instante dado dentro de un marco de referencia. Si sales de casa, das la vuelta a la manzana y terminas en la farmacia, todo el camino seguido pertenece a la idea de trayectoria. La longitud total de ese camino es la [[distancia]] recorrida. Por el contrario, la flecha recta que une el punto de partida con el de llegada representa el [[desplazamiento]] . \r
\r
Esta distinción es la idea central de este módulo. Dos movimientos pueden terminar en el mismo punto final y, sin embargo, haber implicado una [[distancia]] recorrida muy diferente. También puede ocurrir que recorras mucho camino mientras que el [[desplazamiento]] neto sea pequeño, o incluso nulo, si regresas casi al punto de partida. Por esa razón, no se puede preguntar simplemente cuánto se ha movido algo sin especificar qué magnitud se está midiendo. \r
\r
La primera habilidad física real aquí es conceptual: distinguir lo que describe la ruta real de lo que describe el cambio neto entre dos posiciones. Si esta distinción falla, las magnitudes basadas en el [[tiempo]] que se construyen sobre ella también serán malinterpretadas. \r
\r
> [!TIP] \r
> Regla rápida: la trayectoria registra la ruta real seguida, mientras que el [[desplazamiento]] solo compara el punto inicial con el final. \r
\r
## 🔵 Nivel formal \r
\r
En el lenguaje interno de la física, el movimiento se estructura mediante relaciones de cambio. La [[velocidad_media]] , la [[rapidez_media]] y la [[aceleracion_media]] son las herramientas para resumir un trayecto. La primera compara el [[desplazamiento]] con el [[tiempo]] , la segunda compara la longitud total del camino con el [[tiempo]] , y la tercera compara el [[cambio_velocidad]] con el [[tiempo]] . \r
\r
### Relaciones de Cambio Promedio \r
Disponemos de fórmulas para describir el comportamiento global de un móvil en un [[intervalo_tiempo]] : \r
\r
1.  **Definición de Desplazamiento**: \r
    Relaciona la [[posicion_inicial]] con la [[posicion_final]] . \r
\r
2.  **Velocidad Media**: \r
    Es el cociente entre el [[desplazamiento]] neto y el [[tiempo]] transcurrido. \r
\r
3.  **Rapidez Media**: \r
    Utiliza la [[distancia]] total recorrida a lo largo de la trayectoria. \r
\r
4.  **Aceleración Media**: \r
    Cuantifica cómo ha variado la [[velocidad]] en un intervalo dado. Para ello, primero debemos calcular el [[cambio_velocidad]] entre la [[velocidad_inicial]] y la [[velocidad_final]] : \r
\r
### Magnitudes Instantáneas \r
Cuando el [[intervalo_tiempo]] se hace extremadamente pequeño, hablamos de valores instantáneos. La [[velocidad]] instantánea es el límite de la [[velocidad_media]] cuando el [[tiempo]] tiende a cero: \r
\r
Del mismo modo, la [[aceleracion]] instantánea describe el [[cambio_velocidad]] en un punto exacto: \r
\r
En coordenadas intrínsecas, la [[aceleracion]] se descompone en dos partes. La componente tangencial mide el cambio en la [[rapidez]] , mientras que la componente normal o centrípeta mide el cambio en la dirección del movimiento. Para determinar completamente el movimiento a partir de la [[aceleracion]] , se requieren dos condiciones iniciales: la [[posicion]] y la [[velocidad]] en un instante de referencia. \r
\r
\r
Relaciones formales adicionales del leaf:\r
\r
{{f:definicion_desplazamiento}}\r
\r
{{f:velocidad_media}}\r
\r
{{f:rapidez_media}}\r
\r
{{f:aceleracion_media}}\r
\r
{{f:definicion_cambio_velocidad}}\r
\r
{{f:velocidad_instantanea}}\r
\r
{{f:aceleracion_instantanea}}\r
\r
{{f:aceleracion_como_segunda_derivada}}\r
\r
## 🔴 Nivel estructural \r
\r
Toda la jerarquía [[posicion]] , [[velocidad]] y [[aceleracion]] descansa sobre la operación matemática de la derivación temporal. Esta estructura refleja que el espacio-[[tiempo]] clásico pos\r
Relaciones formales adicionales del leaf:\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
ee una métrica suave que permite definir ritmos de cambio de cualquier orden respecto al [[tiempo]] . \r
\r
### Fundamentación Estructural y Dimensional \r
Desde un punto de vista dimensional, cada derivada temporal añade un factor de [[tiempo]] recíproco a las unidades. La [[posicion]] tiene dimensión de longitud. La [[velocidad]] tiene dimensiones de longitud dividida por [[tiempo]] . La [[aceleracion]] tiene dimensiones de longitud dividida por el cuadrado del [[tiempo]] . Esta cadena dimensional es el filtro de seguridad para cualquier ecuación física: todos los términos de una suma deben compartir las mismas dimensiones para ser coherentes. \r
\r
La [[aceleracion]] puede expresarse también como la segunda derivada de la [[posicion]] respecto al [[tiempo]] . \r
Esto revela que la [[aceleracion]] está codificada en la curvatura de la función de [[posicion]] . Si la trayectoria presentase discontinuidades, la [[velocidad]] divergiría hacia el infinito y el modelo clásico dejaría de ser válido. \r
\r
### Asimetría y Límites del Modelo \r
La descomposición tangencial-normal revela una asimetría profunda: la componente tangencial está vinculada a cambios en la energía cinética, mientras que la componente normal simplemente redirecciona el vector [[velocidad]] sin realizar trabajo. Esta distinción conecta la cinemática con la energía mucho antes de introducir la dinámica formalmente. \r
\r
En regímenes de alta [[velocidad]] , el modelo clásico se vuelve insuficiente. Al aproximarse a la [[velocidad]] de la luz [[c]] , las reglas de composición cambian. Asimismo, la presencia de una [[g]] intensa curva el espacio-[[tiempo]], obligando a redefinir la [[aceleracion]] . \r
\r
## Interpretación física profunda \r
\r
Las magnitudes cinemáticas no son solo números, sino el lenguaje con el que el universo narra el cambio. La [[velocidad]] instantánea es siempre tangente a la trayectoria, lo que significa que, en cada instante, el móvil nos indica hacia dónde pretende dirigirse. La [[aceleracion]] , en cambio, actúa como un timonel que corrige constantemente esa intención, ya sea aumentando la intensidad del movimiento o curvando el camino. \r
\r
El hecho de que se necesiten exactamente dos condiciones iniciales tiene implicaciones profundas: el estado cinemático de una partícula queda fijado por su [[posicion_inicial]] y su [[velocidad_inicial]] en un solo instante de [[tiempo]] . Este par define un punto en el espacio de fases, un concepto que permite predecir el futuro de un sistema si conocemos su estado presente y la [[aceleracion]] que lo gobierna. \r
\r
Esta estructura jerárquica nos enseña sobre la continuidad de la naturaleza. No podemos cambiar la [[posicion]] sin pasar por una [[velocidad]] , ni cambiar la [[velocidad]] sin una [[aceleracion]] . Esta interdependencia es la base de la causalidad en la física clásica, donde el movimiento es un proceso fluido y regido por leyes geométricas y temporales inquebrantables. \r
\r
## Orden de magnitud \r
\r
Valores típicos observados en nuestro entorno: \r
\r
| Magnitud | Ejemplo | Valor aproximado | \r
| :--- | :--- | :--- | \r
| [[rapidez]] de caminata | Persona paseando | 1.4 m/s | \r
| [[rapidez]] en autopista | Coche a 120 km/h | 33 m/s | \r
| [[aceleracion]] deportiva | De 0 a 100 km/h en 8 s | 3.5 m/s² | \r
| [[g]] terrestre | Caída libre en la Tierra | 9.81 m/s² | \r
| [[rapidez]] orbital ISS | Estación Espacial Internacional | 7700 m/s | \r
| Límite universal | [[velocidad]] de la luz [[c]] | 299792458 m/s | \r
\r
## Método de resolución personalizado \r
\r
Usa el Protocolo de Magnitudes para analizar cualquier movimiento: \r
1.  **Identifica el marco de referencia**: Elige un origen y unos ejes. Muchos errores nacen de no fijar el sentido positivo del [[tiempo]] y el espacio. \r
2.  **Clasifica los datos**: Anota los valores de [[posicion_inicial]] y [[posicion_final]] , así como la [[velocidad_inicial]] y [[velocidad_final]] . \r
3.  **Relaciona las magnitudes**: Usa las definiciones de cambio. Si conoces la [[aceleracion]] , integra para obtener la [[velocidad]] y la [[posicion]] . \r
4.  **Verificación dimensional**: Comprueba las unidades y evalúa si el resultado tiene sentido físico real. \r
5.  **Descompón la [[aceleracion]] **: En trayectorias curvas, separar las componentes tangencial y normal simplifica el análisis. \r
\r
## Casos especiales y ejemplo extendido \r
\r
### Caso 1: Movimiento Rectilíneo Uniforme \r
En este caso, la [[aceleracion]] es nula y la [[velocidad]] es constante. La [[distancia]] y el [[desplazamiento]] coinciden siempre que no haya cambio de sentido. \r
\r
### Caso 2: Lanzamiento Vertical \r
La [[aceleracion]] es constante e igual a la [[g]] . La [[velocidad]] se anula en el punto más alto. Aquí, el [[desplazamiento]] y la [[distancia]] difieren durante la fase de descenso. \r
\r
### Ejemplo Extendido: Análisis de un Dron \r
Un dron parte del reposo y tiene una [[aceleracion]] de 2 m/s² durante 5 segundos de [[tiempo]] . Luego, frena con una [[aceleracion]] de -1 m/s² hasta detenerse. \r
Fase 1: la [[velocidad_final]] alcanza los 10 m/s y la [[distancia]] recorrida es de 25 metros. \r
Fase 2: El dron tarda un [[tiempo]] de 10 segundos en frenar y recorre otra [[distancia]] de 50 metros. \r
Resultado total: El dron ha recorrido una [[distancia]] de 75 metros y su [[desplazamiento]] neto es también de 75 metros. \r
\r
## Preguntas reales del alumno \r
\r
*   **¿Puede la [[velocidad]] ser negativa?** Sí. El signo indica la dirección respecto al eje. Un valor negativo significa movimiento en sentido contrario al eje positivo. \r
*   **¿[[aceleracion]] cero significa reposo?** No. Significa que la [[velocidad]] no cambia. Un coche a [[rapidez]] constante tiene [[aceleracion]] nula pero no está parado. \r
*   **¿Por qué se necesitan dos condiciones iniciales?** Porque la [[aceleracion]] es la segunda derivada de la [[posicion]] . Se requieren la [[posicion_inicial]] y la [[velocidad_inicial]] para fijar las constantes. \r
\r
## Conexiones transversales y rutas de estudio \r
\r
*   **Hacia la dinámica**: Las magnitudes cinemáticas se conectan con las fuerzas mediante la Segunda Ley de Newton. Sin dominar la [[aceleracion]] , la dinámica es inaccesible. \r
*   **Hacia la energía**: La componente tangencial de la [[aceleracion]] se vincula con el trabajo. \r
*   **Hacia el cálculo**: La cadena [[posicion]] , [[velocidad]] y [[aceleracion]] es el ejemplo práctico de derivadas e integrales. \r
\r
## Síntesis final \r
\r
Las magnitudes cinemáticas ([[posicion]] , [[desplazamiento]] , [[velocidad]] y [[aceleracion]] ) forman una jerarquía que codifica el movimiento. Distinguir entre [[distancia]] y [[desplazamiento]] previene errores y conecta la geometría con la energía. Dos condiciones iniciales bastan para reconstruir la trayectoria a partir de la [[aceleracion]] . \r
`;export{e as default};
