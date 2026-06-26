const e=`# Modelos físicos: Velocidad terminal\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf describe una caida o un movimiento resistido en el que existe una rapidez limite [[v_t]] cuando el peso y el arrastre se equilibran. La clave no es solo resolver una ecuacion, sino escoger la ley de arrastre apropiada para el intervalo de velocidades y el tipo de medio.\r
\r
Se usan dos bloques operativos: un modelo lineal con [[b]] y un modelo cuadratico con [[rho]], [[C_d]] y [[A]]. Ambos pueden producir [[v_t]], pero no deben aplicarse indistintamente.\r
\r
## Hipótesis\r
\r
Las hipotesis basicas del modelo son:\r
\r
1. La trayectoria puede tratarse como unidimensional en la direccion de caida o avance principal.\r
2. El peso se modela con [[m]] y [[g]] constantes en la region de interes.\r
3. El medio puede resumirse con parametros efectivos constantes en la banda analizada.\r
4. La orientacion del cuerpo no cambia tanto como para volver invalida la referencia de [[A]] o [[C_d]].\r
\r
Si estas hipotesis se rompen, la prediccion de [[v_t]] pierde capacidad explicativa.\r
\r
## Dominio de validez cuantitativo\r
\r
Un marco operativo util es este:\r
\r
- Modelo lineal: razonable cuando la fuerza resistiva efectiva crece aproximadamente de forma proporcional con la rapidez dentro de la banda analizada y los errores de ajuste quedan por debajo de 10%.\r
- Modelo cuadratico: razonable cuando la fuerza resistiva efectiva crece aproximadamente con el cuadrado de la rapidez y el uso de [[rho]], [[C_d]] y [[A]] mantiene coherencia con datos dentro de 10% a 15%.\r
- Cambio de modelo: necesario cuando un solo bloque no reproduce la banda completa y el error supera de forma sistematica 15%.\r
\r
## Señales de fallo del modelo\r
\r
Las señales de fallo mas utiles son:\r
\r
1. [[v_t]] calculada contradice de forma clara la rapidez observada en regimen estacionario.\r
2. Una pequena variacion de postura cambia mucho el comportamiento y el modelo mantiene [[C_d]] o [[A]] como constantes rigidas.\r
3. El ajuste lineal funciona a baja rapidez, pero falla a medida que la rapidez crece.\r
4. El modelo cuadratico da buen ajuste en una zona, pero exagera la resistencia en otra.\r
\r
## Modelo extendido o alternativo\r
\r
La transicion debe declararse explicitamente:\r
\r
1. Si el comportamiento observado es casi lineal en la banda relevante, usar bloque lineal con [[b]].\r
2. Si el comportamiento depende fuertemente de la velocidad y de la geometria frontal, pasar al bloque cuadratico con [[rho]], [[C_d]] y [[A]].\r
3. Si el sistema cruza dos bandas de comportamiento, usar modelo por tramos o validacion experimental adicional antes de fijar una sola [[v_t]].\r
\r
Esto importa porque la rapidez limite no es independiente de la ley de arrastre adoptada. Cambiar de modelo cambia tanto el valor de [[v_t]] como la manera en que el sistema se acerca a ella.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo lineal | Modelo cuadratico |\r
|---|---|---|\r
| Parametros clave | [[m]], [[g]], [[b]] | [[m]], [[g]], [[rho]], [[C_d]], [[A]] |\r
| Dependencia resistiva | proporcional a [[v_t]] | proporcional a [[v_t]] al cuadrado |\r
| Uso tipico | regimenes muy viscosos o velocidades bajas | regimenes dominados por inercia y geometria |\r
| Riesgo principal | esconder dependencia real con el medio | tratar [[C_d]] y [[A]] como constantes universales |\r
| Cuando cambiar | si el error crece con la rapidez | si la correlacion solo sirve en una banda estrecha |\r
\r
La leccion estructural es simple: no hay una formula unica de velocidad terminal valida para todo. La calidad del modelo depende de reconocer cuando un bloque explica bien la fisica y cuando hay que cambiar de descripcion.\r
`;export{e as default};
