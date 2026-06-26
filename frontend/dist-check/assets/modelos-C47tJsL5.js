const e=`## Modelo ideal

El modelo ideal del régimen subamortiguado es un oscilador lineal de segundo orden en respuesta libre, con amortiguamiento viscoso equivalente. La salida [[x]] oscila alrededor del equilibrio mientras su amplitud queda limitada por [[x_env]]. La condición [[gamma]] < [[omega0]] garantiza que existe una pulsación amortiguada real [[omega_d]].

## Hipótesis

La masa efectiva, la rigidez y el amortiguamiento permanecen constantes. La amplitud [[A]] es suficientemente pequeña para no activar no linealidades, topes ni cambios de rigidez. La disipación es proporcional a la velocidad y no hay fuerza externa periódica dominante. El tiempo [[t]] se mide desde el inicio del transitorio y la fase [[phi]] resume el estado inicial.

## Dominio de validez cuantitativo

El criterio mínimo es 0 < [[gamma]]/[[omega0]] < 1. Si la razón es menor que 0,1, el sistema se parece durante varios ciclos a un oscilador casi no amortiguado. Entre 0,1 y 0,7 suele observarse una oscilación clara con envolvente decreciente. Cerca de 1, [[omega_d]] se hace pequeña y el sistema se aproxima a la frontera crítica.

La comprobación dimensional exige que [[gamma]], [[omega0]] y [[omega_d]] estén en s^-1 o rad/s compatibles, que [[gamma]][[t]] sea adimensional y que [[A]], [[x_env]] y [[x]] tengan la misma unidad.

## Señales de fallo del modelo

El modelo falla si los máximos no siguen una envolvente aproximadamente exponencial, si el periodo cambia de forma irregular, si aparece crecimiento de amplitud sin aporte externo o si la curva muestra golpes contra topes. También falla si una fuerza externa mantiene la oscilación, porque entonces la respuesta ya no es libre.

## Modelo extendido o alternativo

Cuando la disipación depende de velocidad o amplitud, conviene usar un modelo no lineal o ajuste experimental de envolventes. Si hay fuerza periódica, debe pasarse al oscilador forzado. Si [[gamma]] se acerca demasiado a [[omega0]], el modelo crítico puede ser una mejor descripción práctica dentro de la incertidumbre.

## Comparación operativa

El modelo subamortiguado es el adecuado cuando se observan ciclos decrecientes y se quiere separar ritmo y pérdida de amplitud. El modelo alternativo se justifica cuando la curva deja de parecer una oscilación encerrada por una exponencial. La decisión se toma con signos, unidades, forma gráfica y tolerancia experimental.

Conviene cambiar de modelo cuando la reducción de máximos no puede ajustarse con una tasa aproximadamente constante, cuando el periodo cambia de ciclo a ciclo sin causa controlada o cuando el sistema recibe energía externa. En esos casos, insistir en el modelo ideal oculta información física relevante.

En otras palabras, cuando conviene cambiar a un modelo alternativo es precisamente cuando la curva medida deja de separar limpiamente ritmo y decaimiento. Ese criterio práctico evita forzar una lectura subamortiguada donde ya domina otra física.
`;export{e as default};
