const e=`# Modelos de leyes de kepler

## Modelo ideal

El modelo ideal es el problema kepleriano de dos cuerpos con masa central dominante. Un cuerpo de masa orbital [[m]] se mueve alrededor de una masa [[M]] mucho mas influyente, de modo que la trayectoria se describe como una elipse con foco ocupado por la masa central. La geometria se resume mediante [[a]], [[b]], [[e]], [[r]] y [[theta]], mientras que el tiempo orbital se resume mediante [[T]] y [[dA_dt]].

En este modelo, la primera ley fija la forma, la segunda fija el ritmo de barrido y la tercera fija la escala temporal. El objetivo operativo no es dibujar una elipse cualquiera, sino distinguir que variable responde cada pregunta: [[e]] modifica la forma, [[a]] domina el periodo, [[dA_dt]] explica la rapidez variable y [[mu]] condensa la intensidad gravitatoria.

## Hipótesis

Se supone que la masa central domina el movimiento y que el cuerpo orbital no desplaza de forma apreciable el centro dinamico. Tambien se supone que la fuerza efectiva es central, que no hay rozamiento atmosferico relevante, que no existe empuje continuo y que las perturbaciones de terceros cuerpos son pequenas durante el intervalo estudiado.

Las unidades deben ser coherentes. En la tercera ley absoluta se usan [[G]], [[M]] y [[a]] en SI para obtener [[T]] en segundos. En la forma comparativa, [[a1]] y [[a2]] pueden estar en cualquier unidad comun porque solo aparece el cociente, pero [[T1]] y [[T2]] deben mantener la misma unidad temporal.

## Dominio de validez cuantitativo

Como criterio practico, el modelo kepleriano es adecuado cuando la aceleracion perturbadora acumulada es menor que aproximadamente el 1% de la aceleracion gravitatoria central durante el intervalo de interes. Tambien es razonable si el cambio relativo de [[a]] por rozamiento o empuje cumple valor absoluto de variacion de [[a]] dividido por [[a]] menor que 0,01 por orbita.

Para una elipse ligada se exige [[a]] > 0 y 0 <= [[e]] < 1. Si [[e]] se acerca mucho a 1, las formulas geometricas siguen siendo validas, pero la interpretacion numerica se vuelve sensible cerca del pericentro. Si el movimiento se analiza durante muchas orbitas y [[a]] cambia de forma apreciable, conviene abandonar el modelo fijo y pasar a un modelo perturbado.

## Señales de fallo del modelo

Una senal clara de fallo es que el periodo observado no mantenga una relacion estable con [[a]] bajo la misma masa central. Otra senal es que el punto orbital no conserve una velocidad areal aproximadamente constante: si areas barridas en tiempos iguales son muy diferentes y no hay error de medicion, existe una fuerza no central o un par externo.

Tambien falla el modelo si la orbita decae, precesa rapidamente, cambia de plano o recibe maniobras propulsivas. En esos casos, las leyes de Kepler pueden seguir siendo una referencia instantanea, pero ya no describen la evolucion completa. El diagnostico correcto es reconocer que las relaciones ideales dejaron de ser el modelo principal.

## Modelo extendido o alternativo

El modelo extendido introduce perturbaciones: arrastre atmosferico para satelites bajos, influencia lunar y solar en orbitas terrestres altas, achatamiento del cuerpo central, empuje de motores o correcciones relativistas en campos intensos. En lugar de una elipse fija, se trabaja con elementos orbitales que evolucionan con el tiempo.

Conviene cambiar al modelo extendido cuando el objetivo sea predecir posicion durante muchas revoluciones, analizar reentrada, explicar precesion medible o planificar maniobras. En ese contexto, [[a]], [[e]] y [[T]] siguen siendo utiles, pero ya no se tratan como constantes perfectas.

## Comparación operativa

El modelo ideal sirve para estimar periodos, comparar orbitas y entender por que el movimiento es mas rapido cerca del foco. Es el primer modelo que debe usarse cuando el problema pide criterio fisico y no precision orbital fina. Su ventaja es que separa con claridad forma, area y periodo.

El modelo perturbado sirve cuando los pequenos efectos acumulados importan. Pierde simplicidad, pero gana fidelidad. La decision operativa es sencilla: si el problema pregunta por la estructura basica de la orbita, usa Kepler; si pregunta por cambios acumulados, correcciones o desviaciones observables, usa un modelo extendido.
`;export{e as default};
