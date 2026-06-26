# Ejemplo tipo examen

## Enunciado

En un laboratorio escolar se monta un péndulo simple con [[L]] de 0.84 m. La gravedad local es [[g]] de 9.81 m/s^2. Se libera desde una amplitud inicial [[theta0]] pequeña. Se pide calcular [[omega0]], [[T]] y [[f]], justificar por qué el modelo lineal es adecuado, y describir qué cambia cuando la amplitud deja de ser pequeña.

Además, se solicita interpretar el signo de [[theta_dd]] cuando [[theta]] es positivo. La respuesta debe unir cálculo y causalidad física.

## Datos

- Longitud efectiva [[L]]: 0.84 m.
- Gravedad local [[g]]: 9.81 m/s^2.
- Amplitud inicial [[theta0]]: pequeña, dentro del régimen lineal.
- Fase inicial [[phi]]: referencia de arranque simple.

Magnitudes objetivo:

- [[omega0]] en rad/s.
- [[T]] en s.
- [[f]] en Hz.
- [[E]] para control de consistencia energética.

## Definición del sistema

Se modela una masa puntual suspendida de un hilo ideal con soporte fijo. El desplazamiento angular [[theta]] se mide respecto del equilibrio estable. El tiempo [[t]] se toma desde el instante de liberación.

## Modelo físico

Escala natural del sistema en pequeña amplitud:

{{f:omega0_ps}}

Periodo lineal:

{{f:periodo_ps}}

Frecuencia temporal:

{{f:frecuencia_ps}}

Evolución temporal del ángulo:

{{f:ecuacion_angular_ps}}

Cuando la amplitud crece y ya no es pequeña, se requiere el modelo no lineal:

{{f:ecuacion_no_lineal_ps}}

Para analizar intercambio entre formas de energía:

{{f:energia_ps}}

## Justificación del modelo

El modelo lineal se usa porque [[theta0]] es pequeña y permite aproximar la restauración gravitatoria como proporcional al desplazamiento angular. En ese rango, la diferencia respecto del periodo real suele ser menor que el error experimental típico de cronometraje manual.

Si [[theta0]] aumenta de forma sistemática, el periodo medido se separa del valor lineal y hay que migrar al modelo no lineal. Esta regla de decisión conecta directamente hipótesis, medida y validez.

## Resolución simbólica

Primero se obtiene la pulsación natural:

{{f:omega0_ps}}

Luego se calcula el periodo:

{{f:periodo_ps}}

Después se obtiene la frecuencia por reciprocidad:

{{f:frecuencia_ps}}

Para describir la evolución angular en el tiempo:

{{f:ecuacion_angular_ps}}

Para amplitudes no pequeñas, la forma correcta es:

{{f:ecuacion_no_lineal_ps}}

Para cerrar coherencia física con amplitud finita:

{{f:energia_ps}}

## Sustitución numérica

Con [[L]] de 0.84 m y [[g]] de 9.81 m/s^2, la pulsación natural resulta cercana a 3.42 rad/s.

Con ese valor, el periodo queda cercano a 1.84 s.

La frecuencia asociada queda cercana a 0.54 Hz.

Control interno de coherencia: al comparar [[omega0]], [[T]] y [[f]], se verifica que las tres magnitudes son consistentes entre sí en el régimen lineal.

Para la energía, si se toma masa de referencia de 0.05 kg y [[theta0]] de 0.1 rad, la energía total queda del orden de 2e-3 J. Ese orden de magnitud es compatible con un montaje de aula.

## Validación dimensional

- [[omega0]] debe tener dimensión de inverso de tiempo.
- [[T]] debe conservar dimension temporal.
- [[f]] debe quedar en ciclos por segundo.
- [[E]] debe quedar en joule.

Si alguna unidad no coincide con esas referencias, el error no es físico sino de planteamiento o conversión.

## Interpretación física

Cuando [[theta]] es positivo, [[theta_dd]] apunta en sentido opuesto al desplazamiento. Esa oposición es la firma del torque restaurador gravitatorio y explica por qué el movimiento retorna al equilibrio en lugar de alejarse.

La velocidad angular [[theta_dot]] crece al acercarse al equilibrio y disminuye en los extremos. Ese patrón es coherente con el intercambio entre energía potencial y cinética que describe [[E]].

Si en datos reales se observa que el periodo aumenta al crecer [[theta0]] o que [[E]] cae ciclo a ciclo, eso implica salida del ideal lineal por amplitud finita o disipación.

## Exercise 1: Finding the Period

En este ejercicio se parte de [[L]] y [[g]] para estimar [[omega0]], luego [[T]] y por último [[f]]. La comprobación final consiste en verificar coherencia entre las tres magnitudes temporales.

## Exercise 2: Energy in the Simple Pendulum

En este ejercicio se usa [[E]] para comparar dos configuraciones con la misma amplitud y distinta longitud. La lectura cuantitativa ayuda a decidir si el comportamiento observado se mantiene dentro del regimen lineal ideal.

# Ejemplo de aplicacion real

## Contexto

Un docente compara dos péndulos con la misma amplitud inicial pequeña y longitudes distintas para evaluar sensibilidad temporal del sistema y criterio de validez del modelo.

## Estimación física

Se espera que el péndulo más largo tenga mayor [[T]] y menor [[f]]. La dependencia de [[T]] con la raíz de [[L]] permite anticipar tendencias sin rehacer todo el desarrollo. Para un cambio de [[L]] de 1.0 m a 0.25 m, el orden de magnitud esperado en [[T]] cambia de alrededor de 2 s a alrededor de 1 s.

## Análisis comparativo

Caso A: [[L]] de 1.0 m.

- [[omega0]] alrededor de 3.13 rad/s.
- [[T]] alrededor de 2.0 s.
- [[f]] alrededor de 0.5 Hz.

Caso B: [[L]] de 0.25 m.

- [[omega0]] alrededor de 6.26 rad/s.
- [[T]] alrededor de 1.0 s.
- [[f]] alrededor de 1.0 Hz.

La comparación muestra que reducir [[L]] a la cuarta parte reduce [[T]] aproximadamente a la mitad. Ese patrón confirma la tendencia esperada del modelo lineal. Esto implica una lectura causal clara: al disminuir [[L]], aumenta la rapidez angular característica y el sistema repite ciclos más rápido.

## Interpretación

Para cerrar con energía, se usa la relación energética:

{{f:energia_ps}}

Con masa de referencia de 0.05 kg y misma amplitud en ambos montajes, la energía del péndulo largo resulta cerca de cuatro veces la del corto. Esto aporta un criterio adicional de consistencia: la energía escala con [[L]] cuando los demás parámetros se mantienen.

La lectura final no es solo numérica. El ejemplo permite decidir cuándo el modelo lineal es suficiente y cuándo conviene pasar al no lineal por desvío sistemático en medidas. La regla operativa es cuantitativa: si el periodo medido se separa más de un cinco por ciento del valor lineal al aumentar [[theta0]], el experimento ya exige una descripción no lineal.