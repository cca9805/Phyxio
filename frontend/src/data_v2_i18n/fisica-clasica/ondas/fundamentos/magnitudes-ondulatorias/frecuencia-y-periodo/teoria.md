# Frecuencia y periodo

## Contexto conceptual

Frecuencia y periodo describen el ritmo temporal de una onda periódica. La frecuencia [[f]] cuenta cuántos ciclos ocurren en cada segundo; el periodo [[T]] mide cuánto tarda un ciclo completo.

Estas dos magnitudes no son ideas separadas, sino dos formas inversas de leer la misma repetición. Una onda que repite muchas veces por segundo tiene un periodo corto; una onda lenta tiene un periodo largo.

## 🟢 Nivel esencial

La frecuencia [[f]] responde a la pregunta de cuántas veces se repite la onda en un segundo. El periodo [[T]] responde a cuánto tarda una repetición completa. Si los ciclos están muy juntos en el tiempo, la frecuencia es alta y el periodo es pequeño.

La idea esencial es temporal, no espacial. Una onda puede propagarse despacio o rápido por el medio, pero [[f]] y [[T]] describen el ritmo con el que un punto oscila. Por eso no deben confundirse con rapidez de propagación.

Cuando miras una boya, una cuerda o un altavoz, puedes fijarte en un solo punto y contar repeticiones. Esa lectura ya basta para hablar de frecuencia y periodo, aunque todavía no sepas la longitud de onda.

> [!TIP]
> Primero mira el ritmo del ciclo en un punto; después pregunta cómo viaja la onda por el espacio.

## 🔵 Nivel formal

La relación básica entre frecuencia y periodo es:

{{f:frecuencia_periodo}}

Esta relación expresa inversión. Si [[T]] aumenta, [[f]] disminuye; si [[T]] disminuye, [[f]] aumenta. La unidad Hz equivale a ciclos por segundo, por eso tiene dimensión temporal inversa. El periodo mantiene dimensión de tiempo.

Cuando el ciclo se describe mediante fase angular, se usa la frecuencia angular:

{{f:frecuencia_angular}}

La magnitud [[omega]] mide avance de fase por segundo. No cuenta ciclos completos como [[f]], sino radianes de fase recorridos por unidad de tiempo. Ambas lecturas son compatibles, pero no se deben mezclar sin distinguir unidades.

En una medición directa, la frecuencia puede estimarse contando ciclos:

{{f:frecuencia_por_conteo}}

Aquí [[N]] es el número de ciclos completos observados y [[Delta_t]] es la ventana temporal de medida. Esta forma es operacional: no parte de conocer el periodo de un solo ciclo, sino de contar repeticiones durante un intervalo.

Las tres relaciones se usan en situaciones distintas. Si se mide el tiempo de una repetición, conviene empezar por [[T]]. Si se cuenta una serie de repeticiones, conviene empezar por [[N]] y [[Delta_t]]. Si el problema habla de fase, [[omega]] es la forma natural de expresar el ritmo.

## 🔴 Nivel estructural

La estructura profunda del tema es que una onda periódica posee una escala temporal repetida. [[T]] es la escala de una repetición individual, [[f]] es la tasa con la que esas repeticiones se acumulan y [[omega]] traduce el mismo ritmo a fase angular. Las tres lecturas son coherentes solo si describen el mismo patrón.

La validez exige ciclos reconocibles y un ritmo suficientemente estable. Si el periodo cambia de ciclo a ciclo, [[T]] deja de ser único y [[f]] pasa a ser una media. Si el registro es demasiado corto, el conteo [[N]] dentro de [[Delta_t]] puede tener mucho error relativo.

El límite aparece en pulsos aislados, señales moduladas y ruido. En esos casos puede hablarse de frecuencia dominante, frecuencia instantánea o espectro, pero no siempre de un periodo único. La pregunta correcta cambia: ya no se busca solo cuánto dura un ciclo, sino qué componentes temporales forman la señal.

En una gráfica temporal, [[T]] se lee como distancia horizontal entre estados equivalentes. [[f]] no se ve como una altura, sino como densidad de repeticiones por unidad de tiempo. Esta separación evita confundir amplitud, velocidad espacial y ritmo temporal.

La validez también depende de la ventana elegida. Una ventana demasiado corta puede ocultar el ritmo real; una ventana demasiado larga puede mezclar tramos con frecuencias distintas. Por eso el modelo ideal se apoya en una decisión experimental: elegir una ventana donde el fenómeno sea suficientemente repetitivo y estable.

Esta estructura permite comparar señales distintas sin conocer su causa. Un resorte, una cuerda y una presión sonora pueden tener mecanismos físicos diferentes, pero si repiten estados en el tiempo, admiten una lectura común mediante [[f]] y [[T]].

## Interpretación física profunda

Frecuencia alta significa repetición rápida, no necesariamente mayor energía ni mayor velocidad de propagación. Una cuerda puede vibrar rápido con amplitud pequeña, y una onda sonora puede tener alta frecuencia sin ser más intensa.

El periodo aporta una lectura complementaria porque se entiende como espera entre ciclos. En muchos experimentos, medir varios ciclos y dividir mentalmente el tiempo total mejora la estimación frente a intentar medir un único ciclo ruidoso.

La frecuencia angular añade otra capa: no cambia el fenómeno, cambia el lenguaje. En vez de contar ciclos completos, cuenta avance de fase. Esta lectura es la que se vuelve natural al estudiar fase, interferencia y oscilaciones sinusoidales.

## Orden de magnitud

Una oscilación lenta puede tener [[f]] del orden de 1 Hz y [[T]] del orden de 1 s. Un sonido de 1000 Hz tiene un periodo de orden 1 ms. Esa comparación muestra tres órdenes de magnitud entre una vibración visible y una nota audible.

Un resultado absurdo aparece si una onda que se ve repetir lentamente se calcula con miles de Hz, o si un sonido audible se interpreta con un periodo de varios segundos. La escala temporal debe ser compatible con la observación.

También se detecta un error si [[N]] es grande pero [[Delta_t]] se leyó en milisegundos cuando estaba en segundos, o al revés. Las potencias de diez cambian radicalmente la interpretación del ritmo.

## Método de resolución personalizado

Primero identifica si el dato directo es un periodo, una frecuencia o un conteo de ciclos. Si se da [[T]], lee [[f]] como su inversa. Si se da [[N]] durante [[Delta_t]], estima primero la frecuencia media. Si aparece fase angular, convierte a [[omega]] solo después de tener claro el ritmo en ciclos por segundo.

Al final interpreta: frecuencia alta significa muchos ciclos por segundo; periodo alto significa espera larga entre ciclos.

## Casos especiales y ejemplo extendido

Si el ritmo no es constante, un único periodo puede ser una aproximación pobre. En una señal musical con vibrato, la frecuencia cambia ligeramente con el tiempo y conviene hablar de frecuencia media o instantánea.

Si solo se observa medio ciclo, el conteo no basta para una frecuencia fiable. En cambio, observar diez ciclos dentro de una ventana reduce el error relativo. Por eso en laboratorio se suele medir el tiempo de varios ciclos y no solo el de uno.

## Preguntas reales del alumno

**¿Mayor frecuencia significa mayor velocidad de la onda?** No. Significa más ciclos por segundo en un punto; la velocidad de propagación depende del medio.

**¿Periodo y frecuencia pueden crecer a la vez?** No en una onda periódica estable. Si un ciclo tarda más, ocurren menos ciclos por segundo.

**¿Hz y rad/s son lo mismo?** No. Hz cuenta ciclos por segundo; rad/s mide avance angular de fase por segundo.

**¿Puedo medir frecuencia contando crestas?** Sí, si cuentas ciclos completos durante una ventana temporal clara y el ritmo es estable.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [Fase](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/fase), porque [[omega]] traduce la frecuencia a avance angular. También conecta con longitud de onda y rapidez de propagación, donde el ritmo temporal se combina con escala espacial.

Después conviene estudiar ondas en cuerdas, sonido e interferencia. En todos esos temas, saber separar frecuencia, periodo, amplitud y velocidad evita errores de interpretación.

## Síntesis final

Frecuencia y periodo son dos lecturas inversas del ritmo temporal de una onda. [[f]] cuenta ciclos por segundo, [[T]] mide duración de un ciclo, [[omega]] expresa avance angular y el conteo [[N]] en [[Delta_t]] permite estimar el ritmo cuando se observa una señal real.
