const e=`# Ejemplo guiado

## Situacion fisica

Un laboratorio mide fuerza frente a estiramiento de un muelle. Los puntos casi forman una recta que pasa cerca del origen. En otro experimento, la amplitud de una oscilacion disminuye siempre en la misma proporcion cada segundo.

## Traduccion matematica

El muelle sugiere una funcion lineal \`F = kx\`, donde la pendiente \`k\` es constante elastica. La amplitud que pierde la misma fraccion por unidad de tiempo sugiere una exponencial decreciente \`A = A0 e^(-bt)\`.

## Calculo paso a paso

Si el muelle pasa por \`(x = 0.02 m, F = 1.0 N)\` y \`(x = 0.06 m, F = 3.0 N)\`, la pendiente es \`(3.0 - 1.0) N / (0.06 - 0.02) m = 50 N/m\`. Ese parametro tiene unidad de fuerza por longitud.

Para la amplitud, si cada segundo conserva el \`80%\`, no se resta una cantidad fija: se multiplica por \`0.8\`. Tras tres segundos queda \`A0 (0.8)^3\`, comportamiento propio de decaimiento exponencial discreto.

## Lectura del resultado

El primer resultado dice que el muelle necesita \`50 N\` por cada metro de estiramiento en el intervalo medido. El segundo dice que la perdida depende del valor actual, no de una resta constante.

## Error comun evitado

El error evitado es llamar lineal a cualquier relacion creciente. La exponencial decreciente tambien puede parecer suave, pero su cambio es proporcional al valor restante y no a un incremento fijo de tiempo.

# Ejemplo inverso

## Resultado dado

Una grafica de posicion-tiempo repite la misma forma cada \`2 s\` y oscila entre \`-0.10 m\` y \`0.10 m\`. El ajuste propuesto es sinusoidal.

## Que pregunta fisica permite responder

Permite preguntar por amplitud, periodo, frecuencia y fase de una oscilacion. No responde por si sola a la energia total ni a la causa de la fuerza restauradora, aunque orienta hacia un modelo oscilatorio.
`;export{e as default};
