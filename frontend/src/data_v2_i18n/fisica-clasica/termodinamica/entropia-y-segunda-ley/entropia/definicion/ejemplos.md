# Ejemplo tipo examen

## Enunciado

En un laboratorio se funden 500 g de hielo a cero grados Celsius mediante un bano térmico que se mantiene a la misma temperatura durante todo el proceso. El cambio se idealiza como reversible porque el sistema y el entorno intercambian calor sin salto finito de temperatura. El calor latente de fusion del hielo es 334 J/g. Calcula la variación de entropía [[DeltaS]] del hielo, la variación de entropía del bano y la variación total del universo.

## Datos

La masa de hielo es 500 g. La temperatura absoluta de fusion que se usa como [[T_abs]] es 273 K. El calor latente de fusion es 334 J por cada gramo. El hielo absorbe calor, de modo que su [[Q_rev]] es positivo; el bano entrega la misma cantidad de energía y su [[Q_rev]] tiene signo negativo. El proceso se trata como isotérmico y reversible.

## Definición del sistema

El sistema principal es el hielo que pasa de solido a liquido. El entorno inmediato es el bano térmico. La magnitud que se pide es [[DeltaS]], no la entropía absoluta [[S]], por lo que basta comparar el estado inicial y el estado final. Como el cambio de fase ocurre a temperatura constante, la lectura física depende de dos cantidades: el calor reversible [[Q_rev]] intercambiado y la temperatura absoluta [[T_abs]] a la que ocurre el intercambio.

## Modelo físico

El modelo apropiado es el de un cambio de fase isotérmico. Durante la fusion, la temperatura no aumenta: el calor suministrado se dedica a romper la estructura cristalina y a aumentar los microestados disponibles en el liquido. Por eso se usa la relación de Clausius para proceso isotérmico.

{{f:entropia_isotermica}}

La misma relación se aplica al bano con el signo contrario del calor. La hipótesis reversible es importante: no describe una fusion real rápida con un bano mucho más caliente, sino el camino limite que permite calcular [[DeltaS]] como función de estado.

## Justificación del modelo

La formula es válida porque [[T_abs]] permanece constante durante todo el cambio de fase y porque el calor considerado es [[Q_rev]], es decir, el calor que intercambiaria el sistema en un camino reversible entre los mismos estados. Si la temperatura cambiara apreciablemente, habria que pasar al modelo integral de variación de entropía, no a esta division directa. Si el intercambio fuera irreversible, [[DeltaS]] del hielo seguiria calculandose con el camino reversible equivalente, mientras que la entropía generada en el universo seria positiva.

## Resolucion simbolica

Primero se obtiene el calor reversible absorbido por el hielo a partir de la masa y del calor latente. Despues se introduce ese calor en la definición isotermica de [[DeltaS]]. Para el bano se conserva el mismo modulo de energía, pero con signo negativo porque el bano cede calor.

{{f:entropia_isotermica}}

{{f:definicion_entropia_clausius}}

La variación total del universo se obtiene sumando la contribucion del sistema y la del entorno. En el limite reversible ambas contribuciones tienen el mismo modulo y signos opuestos.

## Sustitucion numerica

El calor absorbido por el hielo es el producto de 500 g por 334 J/g, que da 167000 J. Al dividir este valor entre 273 K se obtiene una variación de entropía del hielo de aproximadamente 612 J/K. Para el bano, el calor tiene signo opuesto y la temperatura es la misma; por tanto su variación de entropía es aproximadamente menos 612 J/K. Al sumar ambas contribuciones, la variación total del universo queda en 0 J/K dentro de la aproximacion reversible.

## Validacion dimensional

La unidad de [[Q_rev]] es joule y la unidad de [[T_abs]] es kelvin. La division produce joule por kelvin, que es la unidad de [[DeltaS]]. El orden de magnitud también es razonable: fundir medio kilogramo de hielo implica una transferencia de calor grande, así que una variación de varios cientos de J/K es esperable.

## Interpretacion física

El signo positivo de [[DeltaS]] para el hielo indica aumento de dispersion energética y de configuraciones moleculares accesibles. El hielo liquido no es simplemente "más caliente"; de hecho, esta a la misma temperatura. Lo que cambia es la forma en que la energía queda distribuida entre microestados: la fase liquida admite muchas más posiciones y orientaciones que la red cristalina.

El signo negativo del bano no contradice la segunda ley, porque la segunda ley se aplica al conjunto sistema más entorno. En este caso ideal, el bano pierde exactamente la misma entropía que gana el hielo. Un proceso real requeriria un bano algo más caliente para que el flujo ocurriera en tiempo finito; entonces el bano perderia menos entropía en modulo y el universo ganaria una cantidad positiva. Esa diferencia es la irreversibilidad que la entropía permite medir.

# Ejemplo de aplicación real

## Contexto

Una empresa de alimentos congela bandejas de 1 kg de agua para fabricar hielo industrial. Aunque el equipo real no opera de forma reversible, el responsable tecnico necesita una estimacion de referencia: cuanta entropía debe extraerse del agua durante la solidificacion a temperatura cercana a 273 K. Esta estimacion permite comparar refrigeradores, detectar perdidas y entender por que congelar grandes masas requiere tanta potencia.

## Estimación física

Se toma como referencia el mismo calor latente de 334 J/g. Para 1 kg de agua, el calor de solidificacion tiene un modulo de 334000 J. Como el agua se solidifica, el sistema cede calor: su [[Q_rev]] es negativo. Usando [[T_abs]] cercano a 273 K, la variación de entropía del agua es de aproximadamente menos 1220 J/K. El refrigerador y el ambiente deben recibir al menos esa entropía; en la práctica reciben más, porque el compresor, los intercambiadores y los gradientes de temperatura generan irreversibilidades.

La lectura cuantitativa es clara: duplicar la masa duplicaria el modulo de [[Q_rev]] y también el modulo de [[DeltaS]]. En cambio, solidificar a una temperatura absoluta algo mayor reduciria ligeramente el modulo de la variación de entropía por la division entre [[T_abs]]. Por eso la misma energía térmica tiene más peso entrópico a temperaturas bajas.

## Interpretacion

La estimacion no pretende describir todos los detalles del ciclo frigorifico; sirve como limite termodinámico del producto que se congela. Si el agua pierde alrededor de 1220 J/K, el exterior debe ganar al menos esa cantidad para que el proceso sea posible. Si un balance experimental diera una variación total negativa, no indicaria un equipo extraordinario: indicaria un error de signos, de unidades de temperatura o de frontera del sistema. La definición de entropía convierte el lenguaje cualitativo de "extraer calor" en una condición cuantitativa sobre la direccion irreversible del proceso.
