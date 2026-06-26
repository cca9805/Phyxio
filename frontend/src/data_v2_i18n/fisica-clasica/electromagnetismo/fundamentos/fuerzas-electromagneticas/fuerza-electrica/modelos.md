## Modelo ideal

El modelo ideal de la fuerza eléctrica trata [[q1]] y [[q2]] como **cargas puntuales** situadas en posiciones fijas del espacio. En este modelo se asume que toda la carga de cada objeto está concentrada en un único punto geométrico sin extensión espacial, y que el medio entre ellas es el vacío. La fuerza resultante depende únicamente de los valores de [[q1]], [[q2]] y de la distancia [[distancia_entre_cargas]] entre los puntos.

La simplificación central de este modelo es ignorar la distribución interna de carga y la estructura atómica del material. Esto es válido siempre que el tamaño de los objetos sea mucho menor que la distancia entre ellos. Bajo este supuesto, [[fuerza_electrica_de_coulomb]] queda completamente determinada por tres números: [[q1]], [[q2]] y [[distancia_entre_cargas]], lo que hace el modelo matemáticamente tratable y pedagógicamente transparente.

Las magnitudes que se conservan en el modelo ideal son [[q1]], [[q2]] y [[k_e]]. La magnitud que cambia libremente es [[distancia_entre_cargas]], la variable independiente del problema. El modelo ignora los efectos relativistas, la cuantización de la carga y cualquier interacción de orden superior.

## Hipótesis

- **Cargas puntuales**: cada objeto cargado se representa por una carga total concentrada en un punto. Si se viola esta hipótesis (objetos extendidos), hay que integrar la contribución de cada elemento de carga o usar el teorema de Gauss.
- **Vacío o dieléctrico uniforme**: el medio entre las cargas es homogéneo e isótropo. Si hay medios dieléctricos inhomogéneos, [[k_e]] debe reemplazarse por la permitividad local del medio, que puede variar con la posición.
- **Cargas en reposo o cuasiestáticas**: las cargas no se mueven o se mueven muy lentamente respecto a la velocidad de la luz. Si las velocidades son comparables a la de la luz, la ley de Coulomb es incorrecta y hay que usar el campo electromagnético de Liénard-Wiechert.
- **Ausencia de blindaje magnético**: no hay campos magnéticos externos que modifiquen el movimiento de las cargas. Esta hipótesis delimita el dominio puramente electroestático.

## Dominio de validez cuantitativo

El modelo de Coulomb es válido para cargas puntuales cuando la distancia [[distancia_entre_cargas]] satisface r > 2.8×10⁻¹⁵ m (radio clásico del electrón), que es el límite inferior bajo el cual la mecánica cuántica y las fuerzas nucleares dominan. En el laboratorio, la aproximación de carga puntual es razonable cuando r es mayor de 10 veces el diámetro del objeto cargado.

El error relativo de tratar una esfera de radio \(a\) cargada uniformemente como carga puntual es inferior al 1 % cuando r > 10·a. Para cargas de laboratorio con radios de milímetros (a ≈ 10⁻³ m), el modelo puntual es válido para r > 10⁻² m.

En cuanto a la velocidad, el modelo es preciso con un error inferior al 1 % cuando las velocidades de las cargas satisfacen v < 0.1·c, es decir, velocidades inferiores a 3×10⁷ m/s.

## Señales de fallo del modelo

- **Divergencia de la fuerza al reducir r**: si al disminuir [[distancia_entre_cargas]] la fuerza calculada supera valores del orden de 10⁸ N para cargas de laboratorio, es señal de que el modelo puntual ha alcanzado su límite.
- **Resultados negativos de [[distancia_entre_cargas]]**: si al despejar [[distancia_entre_cargas]] de la ley de Coulomb se obtiene un valor negativo o imaginario, hay inconsistencia en los datos de entrada.
- **Fuerza excesivamente grande para cargas pequeñas**: si [[fuerza_electrica_de_coulomb]] supera varios newtons con cargas de microcoulombios y distancias de laboratorio (centímetros), revisar la conversión de unidades.
- **Asimetría en la tercera ley**: si el alumno obtiene que la fuerza de [[q1]] sobre [[q2]] es distinta en módulo de la de [[q2]] sobre [[q1]], hay un error de cálculo. La ley de Coulomb garantiza simetría estricta.

## Modelo extendido o alternativo

Cuando las cargas no son puntuales sino que están distribuidas en un volumen, superficie o línea, la ley de Coulomb se extiende mediante **integración sobre la distribución de carga**. La fuerza total se calcula sumando vectorialmente las contribuciones de cada elemento de carga diferencial, aplicando la ley de Coulomb a cada par (elemento de [[q1]]) - (carga [[q2]]). Este modelo extendido es el punto de partida del cálculo del campo eléctrico de varillas, discos y esferas cargadas.

Para medios dieléctricos, la constante [[k_e]] se reemplaza por \([[k_e]] / \varepsilon_r\), donde \(\varepsilon_r\) es la permitividad relativa del medio. Este modelo extendido es válido para medios lineales, homogéneos e isótropos y explica por qué la fuerza entre iones en agua es ochenta veces menor que en vacío.

Cuando conviene pasar al modelo extendido: cuando el tamaño del objeto cargado es comparable a la distancia [[distancia_entre_cargas]] entre objetos (r < 10·a), cuando el medio no es el vacío, o cuando se requiere precisión en problemas con geometrías no esféricas.

## Comparación operativa

| Criterio | Modelo ideal (puntual) | Modelo extendido (distribución) |
|---|---|---|
| Complejidad matemática | Sustitución directa | Integración vectorial |
| Requisito geométrico | r >> tamaño del objeto | Sin restricción de tamaño |
| Medio | Vacío únicamente | Cualquier dieléctrico lineal |
| Tiempo de resolución | Segundos | Minutos a horas |
| Exactitud | Alta si r >> a | Alta en general |

El modelo ideal es la herramienta de referencia para problemas de laboratorio estándar y para introducir los conceptos de fuerza eléctrica y campo eléctrico. El modelo extendido es necesario para ingeniería de sensores, diseño de condensadores no planos y biofísica de iones en solución.