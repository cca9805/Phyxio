const a=`# Velocidad de propagacion

## Contexto conceptual

La **velocidad de propagacion** describe la rapidez con la que avanza el patron de una onda. No mide necesariamente lo rapido que se mueve cada punto del medio. En una cuerda, por ejemplo, una marca de la cuerda puede subir y bajar mientras la cresta avanza horizontalmente.

Este leaf se apoya en dos lecturas complementarias. Una usa la repeticion espacial [[lambda]] y el ritmo temporal [[f]]. La otra sigue una fase reconocible durante un intervalo [[Delta_t]] y mide cuanto avanza como [[Delta_x]]. Ambas deben hablar del mismo patron fisico.

## 🟢 Nivel esencial

La idea central es simple: una onda no solo oscila, tambien **transporta una forma**. La magnitud [[v]] dice cuantos metros avanza esa forma en un segundo. Si una cresta tarda poco en llegar a una posicion lejana, la propagacion es rapida; si tarda mucho, es lenta.

Conviene separar tres cosas. La **altura** de la onda no es la rapidez. La separacion entre crestas, [[lambda]], tampoco es por si sola la rapidez. El ritmo de repeticion, [[f]], tampoco basta si no sabemos la escala espacial. La rapidez aparece cuando una distancia de patron se combina con un tiempo de avance.

> [!NOTE]
> En este leaf, seguir la onda significa seguir una cresta, un valle o una fase equivalente. No significa seguir una particula material concreta del medio.

## 🔵 Nivel formal

La primera relacion formal conecta una repeticion espacial con una repeticion temporal. En una onda periodica que conserva su forma, durante un ciclo temporal el patron avanza una longitud de onda. Por eso [[v]] se obtiene combinando [[lambda]] y [[f]]:

{{f:velocidad_onda_frecuencia}}

Esta relacion es una lectura de compatibilidad. Si el medio fija una [[v]] aproximadamente constante, aumentar [[f]] reduce la [[lambda]] observada. Si se mide una [[lambda]] mayor con la misma [[f]], la rapidez estimada tambien aumenta. La clave fisica es que [[lambda]] y [[f]] pertenecen a la misma onda.

La segunda relacion no exige contar ciclos completos. Basta seguir una cresta, un frente o una marca de fase durante un intervalo temporal y medir el desplazamiento del patron:

{{f:velocidad_media_patron}}

Esta forma es especialmente util en videoanalisis o en registros sucesivos. [[Delta_x]] representa avance horizontal del patron, no desplazamiento vertical de una particula. [[Delta_t]] debe ser positivo y suficientemente grande para reducir ruido de lectura, pero no tan grande como para que el medio cambie de forma apreciable.

Ambas expresiones son equivalentes solo si describen la misma fase del mismo tren de ondas.

## 🔴 Nivel estructural

Estructuralmente, [[v]] actua como **puente** entre el espacio y el tiempo. [[lambda]] pertenece al perfil espacial; [[f]] pertenece al ritmo temporal. La velocidad de propagacion dice como se cosen ambos aspectos para que el mismo patron aparezca desplazado en instantes sucesivos.

Este puente depende del medio. En una cuerda ideal, la rapidez la fijan tension y densidad lineal; en sonido, propiedades elasticas e inerciales del fluido; en ondas electromagneticas en el vacio, constantes de campo. Por eso no es correcto afirmar que una fuente aumenta siempre la velocidad al aumentar [[f]]. Muchas veces cambia la frecuencia emitida y el medio responde ajustando la longitud de onda.

La lectura por [[Delta_x]] y [[Delta_t]] revela otra capa: toda velocidad medida es una **media** sobre un intervalo. Si la onda se dispersa, si la forma se deforma o si varias frecuencias viajan juntas, la cresta visible puede no representar una sola velocidad. En ese caso aparece la diferencia entre velocidad de fase, velocidad de grupo y velocidad de transporte de energia.

El modelo elemental funciona cuando el patron es reconocible, el medio es aproximadamente uniforme y la amplitud no cambia tanto como para borrar la fase seguida. Falla si se mezclan reflexiones, si la onda cambia de regimen durante la medida o si el observador sigue un punto material en lugar de una fase.

Por eso el grafico debe mostrar desplazamiento de forma, no solo deformacion local del medio.

> [!WARNING]
> Una [[v]] numericamente razonable puede ser fisicamente incorrecta si [[lambda]], [[f]], [[Delta_x]] y [[Delta_t]] no proceden del mismo patron.

## Interpretación física profunda

La rapidez de propagacion no es una propiedad aislada del dibujo de la onda. Es una propiedad del **acoplamiento entre onda y medio**. Dos ondas con la misma [[lambda]] pueden avanzar a distinta rapidez si pertenecen a medios distintos; dos ondas con la misma [[v]] pueden tener frecuencias y longitudes diferentes.

Tambien hay una lectura causal importante. La fuente puede imponer el ritmo de oscilacion, pero el medio decide como se transmite la perturbacion. Por eso, al pasar a otro medio, suele cambiar la longitud de onda mientras la frecuencia se conserva. La velocidad de propagacion resume esa respuesta del medio.

## Orden de magnitud

En una cuerda de aula, [[v]] puede ser de unos pocos m/s a decenas de m/s. En sonido en aire, el orden habitual es cientos de m/s. En luz, la escala es cientos de millones de m/s. Si al medir una cuerda lenta aparece una rapidez propia del sonido en aire, o si una onda sonora ordinaria da metros por hora, el resultado merece revision.

## Método de resolución personalizado

Primero identifica si el dato procede de **ciclos** o de **seguimiento directo**. Si tienes [[lambda]] y [[f]], usa la lectura periodica. Si tienes una cresta observada en dos instantes, usa [[Delta_x]] y [[Delta_t]]. Despues comprueba que las magnitudes pertenecen al mismo medio, a la misma onda y a la misma fase.

Finalmente interpreta la escala. Pregunta si la rapidez obtenida es plausible para el medio, si una variacion de [[f]] deberia cambiar [[lambda]] y si la grafica muestra avance del patron o solo oscilacion local.

## Casos especiales y ejemplo extendido

Un caso sutil aparece cuando una onda estacionaria parece tener crestas fijas. Alli no se debe leer una [[v]] de avance desde los nodos, porque el patron total no se traslada. La rapidez relevante pertenece a las ondas viajeras que se superponen para formar la estacionaria.

Otro caso aparece en medios dispersivos. Un pulso puede tener una envolvente que avanza a una rapidez distinta de las crestas internas. Para este leaf se trabaja con una onda periodica simple o con una fase reconocible; si el pulso cambia de forma, la interpretacion debe hacerse con mas cuidado.

Como ejemplo extendido, imagina una cresta que se desplaza 1.8 m en 0.60 s dentro de un canal de agua. La lectura directa da una rapidez cercana a 3 m/s. Si ademas se cuentan crestas separadas 0.75 m y pasan cuatro ciclos por segundo, la lectura periodica da tambien cerca de 3 m/s. La coincidencia indica que se midio el mismo patron.

## Preguntas reales del alumno

**¿La velocidad de propagacion es la velocidad de una particula del medio?** No. En una cuerda, cada punto oscila alrededor de su equilibrio, mientras la forma viaja a lo largo de la cuerda.

**¿Si aumento la frecuencia aumenta siempre [[v]]?** No necesariamente. En muchos medios, la rapidez la fija el medio y la longitud de onda se ajusta.

**¿Por que necesito [[lambda]] si ya conozco [[f]]?** Porque [[f]] solo cuenta ciclos por segundo. Falta saber cuanto espacio avanza cada ciclo.

**¿Puedo usar cualquier intervalo como [[Delta_t]]?** Solo si durante ese intervalo sigues la misma fase y el patron no cambia de manera relevante.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con [longitud de onda](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda) y [frecuencia y periodo](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/frecuencia-y-periodo). Juntos forman el bloque minimo para leer ondas viajeras.

Tambien prepara [ecuacion de onda](leaf:fisica-clasica/ondas/fundamentos/ecuacion-de-onda), refraccion y dispersion. En esos temas, cambiar [[v]] deja de ser solo un calculo y se convierte en una señal de cambio de medio o de regimen.

## Síntesis final

La velocidad de propagacion [[v]] mide el avance del patron ondulatorio. Se entiende correctamente cuando se vinculan escala espacial, ritmo temporal y seguimiento de una misma fase dentro de un medio bien definido.
`;export{a as default};
