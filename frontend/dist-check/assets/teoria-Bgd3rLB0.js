const e=`# Teoría del régimen sobreamortiguado

## Contexto conceptual

El régimen sobreamortiguado aparece cuando un sistema oscilatorio lineal tiene tanta disipación que ya no cruza el equilibrio de forma periódica. No significa que el sistema esté mejor diseñado ni que vuelva instantáneamente: significa que la pérdida de energía domina a la tendencia natural a oscilar. El resultado es un retorno sin oscilación sostenida, pero compuesto por dos modos exponenciales reales.

En este leaf, [[gamma]] mide la disipación efectiva y [[omega0]] fija la escala natural. A partir de esa comparación se decide si el retorno queda por encima de la frontera crítica. La pregunta principal es cómo predecir un retorno sin oscilación y, al mismo tiempo, detectar si el exceso de amortiguamiento lo vuelve demasiado lento.

## 🟢 Nivel esencial

La idea esencial es separar ausencia de oscilación y rapidez. Un sistema sobreamortiguado no rebota de manera ideal, pero puede tardar más en acercarse al equilibrio que un sistema críticamente amortiguado. Por eso, en diseño físico, sobreamortiguar no equivale automáticamente a mejorar. Puede ser útil cuando un sobrepaso sería peligroso, pero puede ser perjudicial si se necesita respuesta rápida.

La condición física se lee comparando disipación efectiva y escala natural. Si la disipación supera esa escala, la ecuación característica produce dos modos reales de decaimiento. Esos modos no son frecuencias de giro; indican con qué rapidez desaparecen distintas partes del transitorio.

La gráfica de [[x]] debe leerse como una historia de retorno. Al inicio puede haber una caída rápida, pero más tarde puede quedar una cola lenta. Esta lectura explica por qué un sistema muy amortiguado puede parecer seguro al no cruzar el equilibrio, pero todavía ser ineficiente porque conserva una desviación apreciable durante demasiado tiempo.

## 🔵 Nivel formal

El primer paso formal es clasificar el régimen:

{{f:condicion_sobreamortiguado}}

Esta desigualdad declara que el modelo está por encima de la frontera crítica. Antes de usar las expresiones temporales, se debe comprobar que [[gamma]] y [[omega0]] tienen las mismas unidades de tiempo inverso y que ambos son positivos. Si esta condición no se cumple, las raíces no representan el régimen sobreamortiguado.

La raíz lenta se obtiene con:

{{f:raices_sobreamortiguado}}

La raíz rápida se obtiene con:

{{f:raiz2_sobreamortiguado}}

Ambas raíces son negativas cuando el modelo es coherente. [[r1]] queda menos alejada de cero y por eso gobierna la respuesta tardía; [[r2]] queda más negativa y describe un transitorio que desaparece con rapidez. La separación entre raíces aumenta cuando [[gamma]] crece mucho respecto a [[omega0]], lo que puede hacer que la cola lenta sea más visible.

La solución temporal ideal se representa como:

{{f:solucion_sobreamortiguada}}

Esta expresión suma dos exponenciales reales. [[C1]] y [[C2]] no son constantes universales: dependen de la posición y velocidad iniciales. Por eso no basta con conocer [[gamma]] y [[omega0]] para dibujar una curva concreta; también hay que fijar las condiciones iniciales. El orden de resolución correcto es clasificar, calcular raíces, determinar constantes y evaluar [[x]] para los tiempos de interés.

## 🔴 Nivel estructural

Estructuralmente, el régimen sobreamortiguado pertenece a sistemas lineales de segundo orden con amortiguamiento viscoso equivalente. El modelo presupone que la fuerza disipativa es proporcional a la velocidad y que la rigidez efectiva no cambia durante el movimiento. Cuando esas hipótesis se cumplen, la dinámica se reduce a una ecuación característica con dos raíces reales.

La palabra equivalente es importante. Un cierre hidráulico, un sensor mecánico o un soporte con pérdidas internas pueden no tener un rozamiento puramente viscoso, pero pueden comportarse como si lo tuvieran en una ventana de amplitudes y velocidades. Fuera de esa ventana aparecen topes, rozamiento seco, turbulencia, calentamiento o no linealidades que rompen la lectura simple de [[r1]] y [[r2]].

También hay que distinguir respuesta libre y respuesta forzada. Este leaf describe el retorno después de una perturbación inicial, no la respuesta ante una fuerza periódica externa. Si el sistema recibe excitación continua, la curva observada puede contener una parte estacionaria que no pertenece al doble decaimiento exponencial.

## Interpretación física profunda

El sobreamortiguamiento muestra una paradoja útil: quitar oscilación no siempre reduce tiempo de respuesta. Al aumentar [[gamma]], el sistema pierde capacidad de cruzar el equilibrio, pero la raíz lenta puede acercarse a cero. Eso significa que el modo dominante decae despacio. En un instrumento de medida, esta situación evita rebote de la aguja, pero puede retrasar la lectura final.

La lectura física debe preguntar qué se está optimizando. Si el criterio principal es evitar sobrepaso, un régimen sobreamortiguado moderado puede ser aceptable. Si el criterio principal es asentarse rápido, el régimen crítico suele ser mejor referencia. El leaf enseña a justificar esa decisión con raíces y no solo con la apariencia visual de la curva.

## Orden de magnitud

Si [[omega0]] está alrededor de 10 rad/s y [[gamma]] apenas lo supera, las raíces tienen escala de unos pocos s^-1 a decenas de s^-1. El asentamiento puede ocurrir en décimas de segundo. Si [[gamma]] crece mucho, por ejemplo 100 rad/s con [[omega0]] de 10 rad/s, [[r2]] se vuelve muy negativa, pero [[r1]] puede quedar cerca de cero en comparación; el modo rápido desaparece y el modo lento domina.

Una comprobación rápida consiste en mirar el signo y la escala. [[r1]] y [[r2]] deben tener unidades s^-1 y valores negativos. Los productos [[r1]][[t]] y [[r2]][[t]] deben ser adimensionales dentro de las exponenciales. [[C1]], [[C2]] y [[x]] deben compartir unidad de longitud o de la magnitud desplazada. Si una exponencial recibe una cantidad con unidades, hay un error dimensional.

## Método de resolución personalizado

Primero identifica si el problema pide clasificar el régimen o calcular una respuesta. Para clasificar, compara [[gamma]] con [[omega0]]. Para una respuesta temporal, calcula [[r1]] y [[r2]], determina [[C1]] y [[C2]] desde las condiciones iniciales y evalúa [[x]] en el [[t]] pedido. No inviertas ese orden: evaluar la solución sin comprobar el régimen puede producir una curva formalmente escrita pero físicamente mal elegida.

Después interpreta la curva. Pregunta si [[x]] cambia de signo, si el modo rápido ya desapareció, si el modo lento queda dentro del tiempo aceptable y si las hipótesis lineales son razonables. La respuesta correcta no termina en un número; termina en una decisión sobre rapidez, seguridad y validez del modelo.

## Casos especiales y ejemplo extendido

Un caso especial aparece cerca de la frontera crítica. Si [[gamma]] supera muy poco a [[omega0]], las dos raíces pueden acercarse y la respuesta se parece a la crítica durante parte del transitorio. En ese caso, la clasificación matemática sigue siendo sobreamortiguada, pero la diferencia práctica puede depender de la tolerancia experimental.

Otro caso aparece con amortiguamiento excesivo. A primera vista parece deseable porque elimina rebote, pero la raíz lenta puede hacer que el sistema tarde mucho en asentarse. Un mecanismo de cierre puede no golpear, pero quedarse demasiado tiempo abierto; un sensor puede no oscilar, pero entregar una lectura tarde.

## Preguntas reales del alumno

Una duda habitual es si sobreamortiguado significa más estable. Es estable si ambas raíces son negativas, pero no necesariamente más útil. Otra pregunta es por qué hay dos exponentes. Aparecen porque el sistema conserva dos condiciones iniciales independientes: posición y velocidad. Cada una se combina en [[C1]] y [[C2]].

También se pregunta si [[r1]] o [[r2]] son frecuencias. No lo son en este régimen. Son tasas de decaimiento. La ausencia de parte imaginaria en las raíces elimina la oscilación ideal. Por eso el gráfico debe mostrar retorno sin ciclos sostenidos.

## Conexiones transversales y rutas de estudio

Este leaf se entiende mejor después de subamortiguado y crítico, porque los tres forman la clasificación completa de regímenes libres amortiguados. También conecta con oscilador masa-muelle, donde aparecen [[omega0]] y la estructura de segundo orden, y con sistemas forzados, donde la respuesta ya no depende solo de las condiciones iniciales.

## Síntesis final

El régimen sobreamortiguado enseña a leer un retorno no oscilatorio como suma de dos decaimientos reales. La competencia final es decidir si el exceso de amortiguamiento cumple el objetivo físico o si solo elimina el rebote a costa de una respuesta lenta.
`;export{e as default};
