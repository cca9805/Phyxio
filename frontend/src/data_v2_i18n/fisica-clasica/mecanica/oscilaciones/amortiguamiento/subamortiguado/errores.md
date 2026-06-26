## Errores conceptuales

### Error 1: creer que amortiguado significa no oscilatorio

#### Por qué parece correcto
La palabra amortiguado sugiere desaparición inmediata del movimiento.
#### Por qué es incorrecto
En el régimen subamortiguado la disipación reduce amplitud, pero no elimina los cruces.
#### Señal de detección
La curva [[x]] cambia de signo varias veces mientras sus máximos bajan.
#### Corrección conceptual
Separar régimen subamortiguado de crítico y sobreamortiguado.
#### Mini-ejemplo
Una cuerda vibra varias veces después de pulsarla, aunque cada máximo sea menor.

### Error 2: confundir [[gamma]] con [[omega_d]]

#### Por qué parece correcto
Ambas magnitudes tienen dimensión de tiempo inverso.
#### Por qué es incorrecto
[[gamma]] mide decaimiento y [[omega_d]] mide ritmo oscilatorio visible.
#### Señal de detección
Se intenta calcular periodo usando [[gamma]].
#### Corrección conceptual
Usar [[omega_d]] para ciclos y [[gamma]] para envolvente.
#### Mini-ejemplo
Duplicar [[gamma]] reduce amplitud más rápido, pero no significa duplicar la frecuencia.

## Errores de modelo

### Error 3: aplicar el leaf sin comprobar [[gamma]] < [[omega0]]

#### Por qué parece correcto
La solución con coseno parece familiar y fácil de usar.
#### Por qué es incorrecto
Solo corresponde a raíces complejas, no a régimen crítico o sobreamortiguado.
#### Señal de detección
La raíz de [[omega0]] al cuadrado menos [[gamma]] al cuadrado no es positiva.
#### Corrección conceptual
Clasificar antes de calcular [[omega_d]] o [[x]].
#### Mini-ejemplo
Si [[gamma]] supera a [[omega0]], la oscilación con coseno ya no describe el retorno libre.

### Error 4: ignorar forzamiento externo

#### Por qué parece correcto
Una señal forzada también puede oscilar.
#### Por qué es incorrecto
El leaf describe respuesta libre; una fuerza externa puede mantener amplitud.
#### Señal de detección
Los máximos no decrecen aunque exista disipación.
#### Corrección conceptual
Pasar al modelo forzado si hay aporte periódico de energía.
#### Mini-ejemplo
Un altavoz vibra mientras recibe señal; no es solo decaimiento libre.

## Errores matemáticos

### Error 5: usar [[omega0]] como si fuera [[omega_d]]

#### Por qué parece correcto
Con amortiguamiento pequeño ambas pueden ser parecidas.
#### Por qué es incorrecto
La frecuencia visible disminuye por la disipación.
#### Señal de detección
El periodo calculado no coincide con los cruces observados.
#### Corrección conceptual
Calcular [[omega_d]] antes de usar la solución temporal.
#### Mini-ejemplo
Con [[omega0]] = 10 y [[gamma]] = 6, la diferencia ya no es despreciable.

### Error 6: olvidar el signo negativo en la envolvente

#### Por qué parece correcto
La exponencial se copia de memoria.
#### Por qué es incorrecto
Sin signo negativo la amplitud crece en un sistema disipativo libre.
#### Señal de detección
[[x_env]] aumenta con [[t]].
#### Corrección conceptual
Revisar que el factor sea de decaimiento.
#### Mini-ejemplo
Una envolvente que pasa de 1 cm a 3 cm sin fuerza externa contradice el modelo.

## Errores de interpretación

### Error 7: tomar [[x_env]] como posición real

#### Por qué parece correcto
La envolvente tiene la misma unidad que [[x]].
#### Por qué es incorrecto
[[x_env]] es una cota; [[x]] oscila dentro de ella.
#### Señal de detección
Se elimina el cambio de signo del movimiento.
#### Corrección conceptual
Dibujar la curva principal y sus dos envolventes.
#### Mini-ejemplo
Cuando la envolvente vale 2 mm, la posición puede ser 0 mm o -1 mm.

## Regla de autocontrol rápido

Antes de cerrar una resolución, verifica que [[gamma]] < [[omega0]], que [[omega_d]] es real y positiva, que [[x_env]] decrece, que [[x]] queda dentro de la envolvente y que las unidades de tiempo son coherentes.
