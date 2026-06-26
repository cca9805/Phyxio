const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
En un laboratorio escolar se monta un péndulo simple con [[L]] de 0.84 m. La gravedad local es [[g]] de 9.81 m/s^2. Se libera desde una amplitud inicial [[theta0]] pequeña. Se pide calcular [[omega0]], [[T]] y [[f]], justificar por qué el modelo lineal es adecuado, y describir qué cambia cuando la amplitud deja de ser pequeña.\r
\r
Además, se solicita interpretar el signo de [[theta_dd]] cuando [[theta]] es positivo. La respuesta debe unir cálculo y causalidad física.\r
\r
## Datos\r
\r
- Longitud efectiva [[L]]: 0.84 m.\r
- Gravedad local [[g]]: 9.81 m/s^2.\r
- Amplitud inicial [[theta0]]: pequeña, dentro del régimen lineal.\r
- Fase inicial [[phi]]: referencia de arranque simple.\r
\r
Magnitudes objetivo:\r
\r
- [[omega0]] en rad/s.\r
- [[T]] en s.\r
- [[f]] en Hz.\r
- [[E]] para control de consistencia energética.\r
\r
## Definición del sistema\r
\r
Se modela una masa puntual suspendida de un hilo ideal con soporte fijo. El desplazamiento angular [[theta]] se mide respecto del equilibrio estable. El tiempo [[t]] se toma desde el instante de liberación.\r
\r
## Modelo físico\r
\r
Escala natural del sistema en pequeña amplitud:\r
\r
{{f:omega0_ps}}\r
\r
Periodo lineal:\r
\r
{{f:periodo_ps}}\r
\r
Frecuencia temporal:\r
\r
{{f:frecuencia_ps}}\r
\r
Evolución temporal del ángulo:\r
\r
{{f:ecuacion_angular_ps}}\r
\r
Cuando la amplitud crece y ya no es pequeña, se requiere el modelo no lineal:\r
\r
{{f:ecuacion_no_lineal_ps}}\r
\r
Para analizar intercambio entre formas de energía:\r
\r
{{f:energia_ps}}\r
\r
## Justificación del modelo\r
\r
El modelo lineal se usa porque [[theta0]] es pequeña y permite aproximar la restauración gravitatoria como proporcional al desplazamiento angular. En ese rango, la diferencia respecto del periodo real suele ser menor que el error experimental típico de cronometraje manual.\r
\r
Si [[theta0]] aumenta de forma sistemática, el periodo medido se separa del valor lineal y hay que migrar al modelo no lineal. Esta regla de decisión conecta directamente hipótesis, medida y validez.\r
\r
## Resolución simbólica\r
\r
Primero se obtiene la pulsación natural:\r
\r
{{f:omega0_ps}}\r
\r
Luego se calcula el periodo:\r
\r
{{f:periodo_ps}}\r
\r
Después se obtiene la frecuencia por reciprocidad:\r
\r
{{f:frecuencia_ps}}\r
\r
Para describir la evolución angular en el tiempo:\r
\r
{{f:ecuacion_angular_ps}}\r
\r
Para amplitudes no pequeñas, la forma correcta es:\r
\r
{{f:ecuacion_no_lineal_ps}}\r
\r
Para cerrar coherencia física con amplitud finita:\r
\r
{{f:energia_ps}}\r
\r
## Sustitución numérica\r
\r
Con [[L]] de 0.84 m y [[g]] de 9.81 m/s^2, la pulsación natural resulta cercana a 3.42 rad/s.\r
\r
Con ese valor, el periodo queda cercano a 1.84 s.\r
\r
La frecuencia asociada queda cercana a 0.54 Hz.\r
\r
Control interno de coherencia: al comparar [[omega0]], [[T]] y [[f]], se verifica que las tres magnitudes son consistentes entre sí en el régimen lineal.\r
\r
Para la energía, si se toma masa de referencia de 0.05 kg y [[theta0]] de 0.1 rad, la energía total queda del orden de 2e-3 J. Ese orden de magnitud es compatible con un montaje de aula.\r
\r
## Validación dimensional\r
\r
- [[omega0]] debe tener dimensión de inverso de tiempo.\r
- [[T]] debe conservar dimension temporal.\r
- [[f]] debe quedar en ciclos por segundo.\r
- [[E]] debe quedar en joule.\r
\r
Si alguna unidad no coincide con esas referencias, el error no es físico sino de planteamiento o conversión.\r
\r
## Interpretación física\r
\r
Cuando [[theta]] es positivo, [[theta_dd]] apunta en sentido opuesto al desplazamiento. Esa oposición es la firma del torque restaurador gravitatorio y explica por qué el movimiento retorna al equilibrio en lugar de alejarse.\r
\r
La velocidad angular [[theta_dot]] crece al acercarse al equilibrio y disminuye en los extremos. Ese patrón es coherente con el intercambio entre energía potencial y cinética que describe [[E]].\r
\r
Si en datos reales se observa que el periodo aumenta al crecer [[theta0]] o que [[E]] cae ciclo a ciclo, eso implica salida del ideal lineal por amplitud finita o disipación.\r
\r
## Exercise 1: Finding the Period\r
\r
En este ejercicio se parte de [[L]] y [[g]] para estimar [[omega0]], luego [[T]] y por último [[f]]. La comprobación final consiste en verificar coherencia entre las tres magnitudes temporales.\r
\r
## Exercise 2: Energy in the Simple Pendulum\r
\r
En este ejercicio se usa [[E]] para comparar dos configuraciones con la misma amplitud y distinta longitud. La lectura cuantitativa ayuda a decidir si el comportamiento observado se mantiene dentro del regimen lineal ideal.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Un docente compara dos péndulos con la misma amplitud inicial pequeña y longitudes distintas para evaluar sensibilidad temporal del sistema y criterio de validez del modelo.\r
\r
## Estimación física\r
\r
Se espera que el péndulo más largo tenga mayor [[T]] y menor [[f]]. La dependencia de [[T]] con la raíz de [[L]] permite anticipar tendencias sin rehacer todo el desarrollo. Para un cambio de [[L]] de 1.0 m a 0.25 m, el orden de magnitud esperado en [[T]] cambia de alrededor de 2 s a alrededor de 1 s.\r
\r
## Análisis comparativo\r
\r
Caso A: [[L]] de 1.0 m.\r
\r
- [[omega0]] alrededor de 3.13 rad/s.\r
- [[T]] alrededor de 2.0 s.\r
- [[f]] alrededor de 0.5 Hz.\r
\r
Caso B: [[L]] de 0.25 m.\r
\r
- [[omega0]] alrededor de 6.26 rad/s.\r
- [[T]] alrededor de 1.0 s.\r
- [[f]] alrededor de 1.0 Hz.\r
\r
La comparación muestra que reducir [[L]] a la cuarta parte reduce [[T]] aproximadamente a la mitad. Ese patrón confirma la tendencia esperada del modelo lineal. Esto implica una lectura causal clara: al disminuir [[L]], aumenta la rapidez angular característica y el sistema repite ciclos más rápido.\r
\r
## Interpretación\r
\r
Para cerrar con energía, se usa la relación energética:\r
\r
{{f:energia_ps}}\r
\r
Con masa de referencia de 0.05 kg y misma amplitud en ambos montajes, la energía del péndulo largo resulta cerca de cuatro veces la del corto. Esto aporta un criterio adicional de consistencia: la energía escala con [[L]] cuando los demás parámetros se mantienen.\r
\r
La lectura final no es solo numérica. El ejemplo permite decidir cuándo el modelo lineal es suficiente y cuándo conviene pasar al no lineal por desvío sistemático en medidas. La regla operativa es cuantitativa: si el periodo medido se separa más de un cinco por ciento del valor lineal al aumentar [[theta0]], el experimento ya exige una descripción no lineal.`;export{e as default};
