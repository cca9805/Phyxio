# Fase

## Contexto conceptual

La fase permite decir en qué punto del ciclo se encuentra una onda periódica. Dos puntos pueden tener distinta posición y aun así estar en el mismo estado de oscilación si su fase es equivalente dentro del ciclo.

En magnitudes ondulatorias, la fase conecta espacio, tiempo y repetición. No sustituye a la amplitud ni a la longitud de onda: indica el avance interno de la oscilación y permite comparar lecturas.

## 🟢 Nivel esencial

La fase [[phi]] es como la aguja de un reloj que marca el estado de una oscilación. No dice por sí sola si la onda es alta o baja en unidades de longitud; dice qué parte del ciclo está ocurriendo. Por eso dos puntos separados pueden comportarse igual si sus fases corresponden al mismo estado.

El desfase [[Delta_phi]] compara dos lecturas. Si el desfase es pequeño, las oscilaciones van casi juntas; si se acerca a media vuelta de ciclo, una tiende a estar en oposición con la otra. La fase inicial [[phi0]] fija desde dónde empieza a contarse el ciclo.

Así, la fase sirve para hablar de sincronía sin mirar todavía una ecuación completa.

> [!TIP]
> La pregunta esencial es si dos lecturas están sincronizadas, adelantadas o retrasadas dentro del mismo ciclo.

## 🔵 Nivel formal

Para una onda armónica, la fase reúne la lectura espacial, la lectura temporal y la fase inicial:

{{f:fase_armonica}}

La magnitud [[k]] indica cuánto cambia la fase al avanzar en posición [[x]]. La magnitud [[omega]] indica cuánto cambia la fase al avanzar en tiempo [[t]]. La fase inicial [[phi0]] desplaza todo el ciclo sin cambiar la separación entre crestas. Esta forma permite decidir si una cresta, un valle o un cruce por equilibrio aparece en un punto y en un instante.

Al comparar dos lecturas de la misma onda, se usa una diferencia de fase:

{{f:diferencia_fase}}

Esta relación separa dos causas de desfase. Una separación espacial produce cambio de fase mediante [[k]]. Una separación temporal produce cambio de fase mediante [[omega]]. Si ambas contribuciones se compensan, las dos lecturas pueden representar el mismo estado oscilatorio aunque ocurran en puntos e instantes distintos.

En esa comparación, [[Delta_x]] representa la separación espacial entre lecturas y [[Delta_t]] representa la separación temporal. Ambas no son detalles auxiliares: indican qué parte del desfase procede de estar en otro lugar y qué parte procede de mirar en otro instante.

La rapidez con la que avanza una fase constante se lee con:

{{f:velocidad_fase_phi}}

Esta rapidez [[v_phi]] no se obtiene de la amplitud. Depende de cómo se relacionan el ritmo temporal [[omega]] y el ritmo espacial [[k]]. Por eso una onda con mayor amplitud puede tener la misma rapidez de fase que otra si conserva el mismo cociente físico entre tiempo y espacio.

## 🔴 Nivel estructural

La fase es una coordenada interna del ciclo. Su profundidad está en que no describe un objeto nuevo, sino una manera de etiquetar estados equivalentes. Cuando una onda avanza, una fase fija se traslada por el espacio; seguir esa etiqueta permite distinguir propagación de simple oscilación local.

El modelo estructural exige tres condiciones. Primero, la onda debe tener una periodicidad reconocible para que [[phi]] sea una etiqueta estable. Segundo, las lecturas comparadas deben usar la misma convención de signo y de origen. Tercero, [[k]] y [[omega]] deben pertenecer a la misma componente de onda; mezclarlos desde componentes distintas crea un desfase sin sentido físico.

Los límites aparecen en pulsos muy cortos, señales ruidosas y medios dispersivos. En un pulso ancho puede hablarse de fase local solo si una componente dominante se reconoce. En un medio dispersivo, [[v_phi]] puede no coincidir con la rapidez con la que viaja la envolvente. En señales no periódicas, la fase deja de ser una lectura única y pasa a depender del método de descomposición.

La validez se comprueba mirando estabilidad del patrón. Si las crestas mantienen separación y ritmo, la fase es una herramienta fiable. Si el patrón se deforma, se atenúa o mezcla varias frecuencias, conviene hablar de componentes, desfases locales o análisis espectral antes de interpretar un único valor de [[phi]].

También hay que distinguir fase de información transportada. Una fase constante puede avanzar con [[v_phi]], pero eso no garantiza que energía, envolvente o señal útil viajen exactamente con esa rapidez. Esta separación es esencial en medios dispersivos y evita interpretar la fase como una partícula que recorre el medio.

## Interpretación física profunda

La fase no es una longitud ni un tiempo; es una posición dentro del ciclo. Por eso se mide en radianes aunque sea adimensional. El radián no añade dimensión física, pero conserva la lectura angular del ciclo y evita tratar la fase como un número cualquiera.

El signo del desfase depende de la convención. Decir que una señal adelanta a otra solo tiene sentido después de fijar qué dirección de propagación y qué expresión de fase se usan. La física está en la comparación de estados, no en memorizar el signo aislado.

## Orden de magnitud

En ondas sonoras audibles, [[omega]] puede ir desde decenas hasta decenas de miles de rad/s. En ondas de cuerda de laboratorio, [[k]] puede ser del orden de pocos rad/m; en ondas de radio puede ser mucho menor para longitudes de onda grandes. La comparación muestra que la fase puede cambiar rápido en el tiempo, en el espacio o en ambos.

Un resultado absurdo aparece si una separación pequeña produce muchas vueltas de fase sin que la longitud de onda sea pequeña, o si una señal lenta se interpreta con una [[omega]] enorme. La fase debe ser coherente con la escala espacial y temporal del fenómeno.

## Método de resolución personalizado

Primero identifica si el problema pide una fase absoluta [[phi]], un desfase [[Delta_phi]] o una rapidez de fase [[v_phi]]. Después fija la convención de signo y el origen de fase. Luego separa datos espaciales, datos temporales y fase inicial. Al final interpreta el resultado reduciéndolo mentalmente al ciclo: en fase, adelantado, retrasado u opuesto.

Si el resultado es grande, no lo leas como un número bruto. Pregunta cuántas vueltas completas contiene y qué resto de ciclo queda. Ese resto es el que suele importar para comparar estados físicos.

## Casos especiales y ejemplo extendido

Si dos puntos están separados por una longitud de onda completa, su diferencia de fase corresponde a una vuelta completa del ciclo y se comportan como estados equivalentes. Si están separados por media longitud de onda, suelen estar en oposición para una onda sinusoidal simple.

En un experimento con dos micrófonos, una misma nota puede llegar con desfase por la distancia extra recorrida. Si el desfase se acerca a oposición, la suma de señales puede debilitarse; si se acerca a fase común, puede reforzarse. La fase se convierte así en la llave que conecta geometría, tiempo e interferencia.

## Preguntas reales del alumno

**¿La fase es lo mismo que la amplitud?** No. La amplitud indica tamaño de la perturbación; la fase indica posición dentro del ciclo.

**¿Por qué se mide en radianes si no es un ángulo geométrico visible?** Porque el ciclo se representa como una vuelta angular; el radián etiqueta esa vuelta sin añadir dimensión.

**¿Un desfase grande siempre significa mucha separación física?** No. También puede venir de una diferencia temporal o de un número de onda grande.

**¿La rapidez de fase es la rapidez de las partículas del medio?** No necesariamente. En una cuerda, los puntos del medio oscilan mientras la fase se propaga.

## Conexiones transversales y rutas de estudio

La fase conecta con [Concepto de onda](leaf:fisica-clasica/ondas/fundamentos/concepto-de-onda), porque permite pasar de ver una forma a comparar estados. También prepara [Superposición](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/superposicion), ya que el resultado de sumar ondas depende fuertemente del desfase.

Más adelante, la fase aparece en interferencia, difracción, ondas estacionarias, corriente alterna y óptica. En todos esos temas, la misma pregunta vuelve con distintos nombres: qué señales llegan juntas, cuáles llegan retrasadas y qué consecuencia física tiene esa sincronización.

## Síntesis final

La fase es la magnitud conceptual que etiqueta el estado interno de una onda periódica. Al unir [[k]], [[omega]], [[phi0]], [[Delta_phi]] y [[v_phi]], permite leer sincronización, desfase y propagación sin confundir el avance del ciclo con la amplitud o con el movimiento material.
