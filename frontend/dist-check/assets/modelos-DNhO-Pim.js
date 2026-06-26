const e=`# Modelos físicos

## Modelo ideal

El modelo ideal es el problema kepleriano conservativo de dos cuerpos: una masa central [[M]] domina el campo y un satelite de masa [[m]] se mueve sin rozamiento, empuje ni perturbaciones externas apreciables. En ese marco la energia mecanica total [[E]] se conserva y permite clasificar la trayectoria por su signo.

La lectura puede hacerse con energia total o con energia especifica [[eps]]. La forma especifica es especialmente limpia porque elimina [[m]] y describe el estado orbital por unidad de masa. Asi, dos satelites de distinta masa en el mismo estado alrededor de la misma [[M]] comparten la misma clasificacion energetica.

## Hipótesis

Se supone referencia de energia potencial cero en el infinito. Con esa convencion, [[U]] es negativa para cualquier distancia finita [[r]], [[K]] es positiva y [[E]] resulta de sumar ambas. Tambien se supone que [[r]] es positiva, que [[v]] es un modulo no negativo y que la masa central domina sobre el objeto orbital.

Cuando se usan relaciones con [[a]], se supone orbita ligada kepleriana. En una orbita circular [[a]] coincide con [[r]], pero en una elipse no. Esta hipotesis es esencial: aplicar una formula circular a un punto cualquiera de una orbita eliptica mezcla estado instantaneo con parametro orbital global.

## Dominio de validez cuantitativo

Como criterio practico, el modelo de dos cuerpos es adecuado si las aceleraciones perturbativas son al menos 100 veces menores que la aceleracion central durante el intervalo estudiado, o si el error buscado tolera esa aproximacion. Para clasificacion energetica, [[eps]] < 0 indica orbita ligada, [[eps]] = 0 representa el umbral ideal de escape y [[eps]] > 0 representa trayectoria abierta.

En orbitas ligadas, [[a]] debe ser mayor que cero y [[E]] debe ser negativa. Si aparece [[E]] positiva junto con una relacion de orbita ligada, hay contradiccion de modelo. Si el problema incluye atmosfera, motores o encuentros con terceros cuerpos, la conservacion de [[E]] solo vale por tramos donde esos efectos sean despreciables.

## Señales de fallo del modelo

El modelo falla si el satelite maniobra, si atraviesa atmosfera significativa, si el campo central no domina o si hay perturbaciones acumulativas relevantes. Tambien falla si se intenta describir orientacion, excentricidad o plano orbital solo con energia: la energia fija tamaño y clasificacion, pero no toda la geometria.

Una señal observable de fallo es que una simulacion o medida muestre perdida continua de altura sin empuje declarado. Eso suele indicar disipacion, no cambio espontaneo de energia conservativa. Otra señal es usar el mismo [[r]] como si fuera [[a]] en una orbita claramente eliptica.

## Modelo extendido o alternativo

El modelo extendido incorpora perturbaciones, empuje, arrastre atmosferico, geopotencial no esferico o integracion numerica de varios cuerpos. En ese caso la energia mecanica kepleriana puede seguir siendo una variable diagnostica, pero ya no es necesariamente constante.

Cuando conviene pasar al modelo extendido: si hay rozamiento, si un motor cambia [[v]], si terceros cuerpos alteran apreciablemente la trayectoria, si se exige precision de mision o si la clasificacion energetica cambia durante el intervalo. La energia orbital ideal sigue siendo el primer control de coherencia, no el cierre final.

## Comparación operativa

El modelo ideal responde a preguntas como: si un estado esta ligado, que semieje mayor corresponde a una energia negativa, o cuanta energia especifica falta para llegar a escape. El modelo extendido responde a preguntas de trayectoria real: como cambia la energia tras una maniobra, cuanto decae una orbita con atmosfera o como perturba la Luna a una sonda.

Operativamente, se usa primero el modelo ideal para comprobar signo, orden de magnitud y consistencia entre [[K]], [[U]], [[E]] y [[eps]]. Si esa lectura contradice el escenario o no alcanza la precision requerida, se cambia de modelo antes de interpretar el resultado como prediccion real.
`;export{e as default};
