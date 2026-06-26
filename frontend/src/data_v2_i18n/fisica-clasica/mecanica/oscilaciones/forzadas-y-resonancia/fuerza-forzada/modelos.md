## Modelo ideal

El modelo ideal es un oscilador lineal masa-muelle-amortiguador sometido a una fuerza sinusoidal externa. La respuesta que se estudia es la estacionaria: una vez apagado el transitorio, [[x]] oscila con la misma [[omega_f]] que la fuerza aplicada, con amplitud [[X]] y desfase [[delta]].

## Hipótesis

La masa [[m]], la rigidez [[k]] y el amortiguamiento [[b]] son constantes. La fuerza externa es sinusoidal, de amplitud [[F0]] y frecuencia angular [[omega_f]]. La amplitud de movimiento es suficientemente pequeña para mantener linealidad. No se estudia el arranque completo, sino el régimen permanente después de que la parte libre haya decaído.

## Dominio de validez cuantitativo

El modelo exige [[m]] > 0, [[k]] > 0, [[omega_f]] > 0 y [[b]] >= 0. Es razonable mientras la deformación máxima [[X]] sea pequeña frente al rango lineal del sistema, por ejemplo menor que el 5% o 10% de la longitud característica del dispositivo. La fuerza debe mantenerse periódica durante varios ciclos para que tenga sentido hablar de régimen estacionario.

## Señales de fallo del modelo

Falla si la respuesta no se estabiliza a una sola frecuencia, si aparecen armónicos importantes, si [[X]] cambia aunque [[F0]] y [[omega_f]] permanezcan fijos, o si la curva muestra golpes, saturación o rigidez variable. También falla si se intenta usar durante el transitorio inicial.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo alternativo es cuando la fuente no es sinusoidal, la amplitud activa no linealidades o el amortiguamiento depende fuertemente de la velocidad. En esos casos se usa respuesta en frecuencia general, integración numérica o modelos no lineales. Si se busca el máximo de [[X]] al barrer frecuencia, el siguiente modelo didáctico es resonancia.

## Comparación operativa

Este modelo responde a una pregunta concreta: para una frecuencia impuesta, qué amplitud y qué desfase tendrá el régimen permanente. Resonancia responde a otra: dónde aparece el máximo de respuesta. Mantener separadas ambas preguntas evita convertir este leaf en una copia del leaf de resonancia.

Operativamente, si solo se dispone de una frecuencia de trabajo, se usa este modelo. Si se dispone de un barrido de frecuencias y se busca el máximo, se pasa al análisis de resonancia. Si la señal contiene muchas frecuencias, se debe usar superposición o respuesta en frecuencia general.

La comprobación experimental más directa consiste en esperar varios ciclos, medir la amplitud repetible y comparar el retraso entre fuerza y desplazamiento. Si esos dos datos permanecen estables, el modelo describe el régimen permanente. Si cambian ciclo a ciclo, todavía hay transitorio o el sistema no se comporta como lineal.
