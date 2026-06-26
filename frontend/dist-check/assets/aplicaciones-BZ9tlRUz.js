const e=`# Aplicaciones

## 1. Interferometros de laboratorio

En un interferometro, dos haces recorren caminos distintos y se recombinan para formar franjas. La coherencia decide si esas franjas permanecen estables durante la medida. Si [[Delta_L]] supera la escala [[L_c]], el patron pierde contraste aunque ambos haces lleguen al detector.

La hipotesis dominante es que la fuente y la mesa optica permanecen estables. En ese caso, [[C_rel]] permite anticipar si el desajuste de caminos es tolerable, y [[V]] permite comprobar experimentalmente el contraste real. Una visibilidad baja no se interpreta automaticamente como poca luz.

En la practica, el operador ajusta primero los brazos hasta recuperar contraste y despues modifica la fuente o el filtro si el problema persiste. Esta secuencia evita diagnosticar como incoherente una fuente que en realidad esta siendo limitada por alineacion, vibracion o fondo luminoso.

La coherencia se convierte asi en una prueba de ajuste: cambiar el camino, observar [[V]] y comparar con [[L_c]] permite localizar la causa dominante de la perdida de franjas.

Variable dominante: [[C_rel]] resume si la diferencia de camino esta dentro de la escala de coherencia.
Límite de validez: el modelo simple falla si hay vibraciones, desalineacion, fondo luminoso o intensidades muy desiguales.

## 2. Seleccion de fuentes laser

La eleccion de un laser para interferometria no depende solo de potencia o color. Se necesita una fuente con [[L_c]] suficiente para la diferencia de caminos del montaje. Un laser de linea estrecha puede sostener franjas con brazos largos, mientras otro mas ruidoso puede perder contraste.

El modelo ideal ayuda a comparar fuentes antes de montar el experimento. Si el fabricante proporciona [[tau_c]] o una longitud de coherencia aproximada, se puede estimar la tolerancia de camino. Despues, la medida de [[V]] confirma si el conjunto fuente-montaje-detector funciona como se esperaba.

La aplicacion tambien muestra que dos lasers del mismo color pueden comportarse de forma distinta. El color fija una region espectral, pero la anchura de linea y la estabilidad de fase determinan la utilidad interferometrica.

En metrologia, este criterio evita comprar una fuente por potencia nominal cuando el requisito real es mantener fase durante brazos largos o barridos lentos.

Variable dominante: [[L_c]] fija la longitud maxima aproximada de desajuste aceptable.
Límite de validez: para lasers multimodo o inestables se requiere analizar espectro, ruido y modos longitudinales.

## 3. Tomografia de coherencia optica

En tomografia de coherencia optica, una fuente de coherencia corta permite seleccionar profundidades dentro de un tejido. Solo la luz que vuelve con camino optico parecido al brazo de referencia interfiere de forma visible. La coherencia limitada se convierte en resolucion axial.

Esta aplicacion invierte la intuicion escolar. No siempre interesa maximizar [[L_c]]. Si la coherencia fuera demasiado larga, reflexiones de muchas profundidades se mezclarian. El diseño busca una ventana de coherencia ajustada al espesor de capas que se quieren distinguir.

El medico o ingeniero interpreta entonces la coherencia como seleccion de camino. Una señal aparece cuando el camino de referencia coincide con una reflexion interna dentro de la ventana de coherencia de la fuente.

La resolucion axial mejora cuando esa ventana es estrecha, siempre que siga entrando luz suficiente para medir el contraste con ruido aceptable.

Variable dominante: [[L_c]] controla la ventana de profundidad que puede producir señal interferencial.
Límite de validez: el tejido dispersivo, el movimiento biologico y el ruido del detector exigen modelos extendidos.

## 4. Holografia y registro de fase

La holografia necesita que el haz de referencia y el haz procedente del objeto mantengan una relacion de fase estable durante el registro. Si la coherencia temporal o espacial no basta, las franjas holograficas se degradan y la reconstruccion pierde detalle.

La coherencia aqui no es un lujo tecnico, sino la condicion para registrar informacion de fase. [[V]] actua como indicador de calidad del patron: franjas de alto contraste permiten reconstrucciones mas limpias; franjas lavadas producen imagenes con menos informacion util.

Por eso los montajes holograficos suelen exigir estabilidad mecanica alta. Un pequeño movimiento durante la exposicion puede desplazar las franjas y reducir la informacion registrada aunque la fuente sea adecuada.

La coherencia temporal permite registrar fase, pero la estabilidad espacial del objeto y de la placa decide si esa fase queda escrita de forma util.

Variable dominante: [[V]] mide la calidad experimental del registro de franjas.
Límite de validez: vibraciones, movimiento del objeto y extension de fuente pueden dominar sobre la coherencia temporal.

## 5. Filtros espectrales en fuentes de luz

Una lampara de espectro ancho suele tener coherencia temporal corta. Al colocar un filtro estrecho, se reduce el ancho espectral y aumenta la escala de coherencia, aunque tambien baja la intensidad disponible. Esta compensacion aparece en interferencia, microscopía y metrologia optica.

La aplicacion muestra por que brillo y coherencia son decisiones distintas. Filtrar puede hacer visibles franjas que antes estaban borradas, pero exige detector mas sensible o mayor tiempo de exposicion. La lectura fisica compara [[L_c]], [[Delta_L]] y [[V]].

En docencia, esta aplicacion es especialmente clara: al estrechar el filtro se gana contraste, pero se pierde flujo luminoso. El alumno ve que mejorar coherencia no significa aumentar toda la señal, sino ordenar mejor la fase que llega al detector.

En laboratorio real, el compromiso se decide segun detector, tiempo disponible y contraste minimo aceptable para distinguir el patron.

Variable dominante: [[tau_c]] aumenta cuando la fuente se vuelve espectralmente mas estrecha.
Límite de validez: si el filtro introduce aberraciones, fondo o perdida excesiva de señal, la mejora de coherencia no garantiza un patron util.
`;export{e as default};
