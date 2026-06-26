const a=`# Ejemplo tipo examen

## Enunciado

Una cuerda tensa admite una perturbacion transversal pequeña. En un tramo de la cuerda se propone una solucion armonica con amplitud de 0,020 m, numero de onda de 4,0 rad/m y frecuencia angular de 24 rad/s. Se quiere decidir si esa forma puede representar una onda viajera lineal y que rapidez de fase implica.

Determina la rapidez de propagacion asociada a la fase, interpreta el papel de [[A]], [[k]] y [[omega]], y explica que exige la ecuacion de onda sobre la relacion entre curvatura espacial y cambio temporal.

## Datos

- Amplitud [[A]]: 0,020 m.
- Numero de onda [[k]]: 4,0 rad/m.
- Frecuencia angular [[omega]]: 24 rad/s.
- Perturbacion transversal [[y]] en una cuerda lineal.
- Coordenadas de lectura: [[x]] para posicion y [[t]] para instante.

## Definición del sistema

El sistema es una cuerda ideal observada en una dimension espacial. La variable [[y]] describe el desplazamiento transversal local, mientras [[x]] marca el punto de la cuerda y [[t]] marca el instante.

La solucion propuesta no se interpreta como un dibujo cualquiera. Debe ser compatible con una ley dinamica: la ecuacion de onda. Por eso interesa relacionar los parametros de fase con [[v]], no solo representar una curva sinusoidal.

## Modelo físico

Se usa el modelo de onda lineal unidimensional. La perturbacion es pequeña, el medio se considera uniforme y la rapidez de propagacion es estable. En ese modelo, [[y]] debe cumplir la relacion entre cambio temporal y curvatura espacial.

La solucion armonica permite leer la onda mediante [[A]], [[k]] y [[omega]]. La ecuacion diferencial fija la condicion de compatibilidad; la relacion de velocidad de fase traduce esa compatibilidad a una rapidez observable del patron.

## Justificación del modelo

El modelo vale porque la cuerda se declara tensa, uniforme y con perturbaciones pequeñas. Bajo esas hipotesis, la tension proporciona el acoplamiento local entre puntos vecinos y la curvatura espacial puede generar cambio temporal regular.

Dejaria de valer si la amplitud modificara la tension, si hubiera rozamiento fuerte, si la cuerda cambiara de propiedades a lo largo de [[x]] o si la forma se deformara mientras avanza. En cualquiera de esos casos, la velocidad [[v]] ya no seria una lectura simple de fase.

## Resolución simbólica

La ley diferencial que debe obedecer la perturbacion es:

{{f:ecuacion_onda_1d}}

La solucion armonica propuesta se representa mediante:

{{f:solucion_armonica}}

La rapidez de fase asociada se obtiene con:

{{f:velocidad_fase}}

La resolucion simbolica muestra que las magnitudes cumplen funciones distintas. [[A]] escala el tamaño de la perturbacion, [[k]] mide la repeticion espacial, [[omega]] mide el ritmo temporal de fase y [[v]] conecta ambos ritmos. Las coordenadas [[x]] y [[t]] indican donde y cuando se evalua [[y]].

## Sustitución numérica

Para la rapidez de fase, dividir 24 rad/s entre 4,0 rad/m da 6,0 m/s. Por tanto [[v]] es aproximadamente 6,0 m/s. Esta lectura no depende de que [[A]] sea 0,020 m; la amplitud solo determina que la perturbacion local no supere dos centimetros en el modelo ideal.

Si se duplicara [[omega]] manteniendo [[k]], la fase avanzaria mas deprisa. Si se duplicara [[k]] manteniendo [[omega]], el patron estaria mas comprimido espacialmente y la fase avanzaria mas despacio. Si se duplicara [[A]], la curva seria mas alta, pero la rapidez de fase no cambiaria por ese motivo en el modelo lineal.

## Validación dimensional

- La rapidez de fase combina un ritmo temporal con una escala espacial inversa y produce \`[L T⁻¹]\`.
- La perturbacion [[y]] y la amplitud [[A]] comparten dimension de longitud, \`[L]\`.
- El numero de onda [[k]] tiene dimension inversa de longitud, \`[L⁻¹]\`.
- La frecuencia angular [[omega]] tiene dimension temporal inversa, \`[T⁻¹]\`.

La validacion confirma que no se ha confundido amplitud con velocidad ni posicion espacial con perturbacion transversal.

## Interpretación física

El resultado significa que la fase de la perturbacion avanza 6,0 m cada segundo a lo largo de la cuerda, siempre que el medio mantenga las hipotesis del modelo. Una cresta se desplaza con esa rapidez, pero un punto material de la cuerda no viaja horizontalmente con ella; su movimiento local queda descrito por [[y]].

La ecuacion de onda aporta la lectura profunda: la forma armonica no es valida por ser bonita, sino porque su curvatura espacial y su cambio temporal mantienen el balance correcto. Donde la curva cambia mas bruscamente con [[x]], la evolucion en [[t]] tambien debe responder de forma compatible.

Si [[omega]] o [[k]] cambian sin respetar la relacion de fase, la forma propuesta deja de ser solucion de esa ecuacion para la misma [[v]]. Esta es la diferencia entre dibujar una onda y proponer una solucion fisica. El resultado tambien muestra que [[A]] controla la escala de la perturbacion, pero no decide por si sola la rapidez de propagacion.

# Ejemplo de aplicación real

## Contexto

En una cuerda de laboratorio accionada por un vibrador, se observa un tren de ondas casi sinusoidal. Midiendo la separacion espacial entre fases equivalentes se estima un numero de onda cercano a 12 rad/m. El vibrador impone una frecuencia angular cercana a 36 rad/s.

## Estimación física

La lectura de fase indica que dividir 36 rad/s entre 12 rad/m da una rapidez de aproximadamente 3,0 m/s. Esa es la rapidez con la que avanzan crestas y valles si la cuerda se comporta de forma lineal.

La amplitud visible puede ser de unos milimetros. Si se aumenta la amplitud sin cambiar la tension de la cuerda ni el ritmo del vibrador, la onda se ve mas alta, pero la rapidez de fase estimada a partir de [[omega]] y [[k]] no cambia de forma directa.

## Interpretación

La estimacion separa tres lecturas que suelen mezclarse: altura de la perturbacion, compresion espacial y ritmo temporal. La ecuacion de onda permite comprobar si esas lecturas forman una solucion compatible, no solo si los numeros parecen razonables.

En un montaje real, si la onda se amortigua mucho o la cuerda no es uniforme, la rapidez obtenida por fase puede variar de un tramo a otro. Esa variacion seria una señal de que el modelo ideal necesita ampliarse con atenuacion, dispersion o cambios de tension.
`;export{a as default};
