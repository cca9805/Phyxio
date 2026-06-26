const e=`## Modelo ideal
El modelo simplificado que rige este leaf es el de la **onda electromagnética plana armónica ideal** que se propaga en el vacío absoluto. En este modelo, asumimos que los frentes de onda son superficies planas paralelas infinitas perpendiculares a la propagación, y que los vectores del campo eléctrico [[E0]] y del campo magnético [[B0]] oscilan armónicamente manteniendo amplitudes constantes a lo largo de todo el trayecto. Se ignora por completo cualquier decaimiento geométrico de la amplitud con la distancia, la disipación por absorción en medios atenuantes, y cualquier distorsión por dispersión cromática.

## Hipótesis
- **Homogeneidad e isotropía espacial completa**: Asumimos que el vacío es idéntico en todas las direcciones. Si esta hipótesis se viola (por ejemplo, en un cristal anisótropo), la onda experimentará birrefringencia, dividiéndose en dos rayos con velocidades distintas.
- **Linealidad absoluta de los campos**: Asumimos que los campos no interactúan entre sí de forma no lineal. Si se viola por una intensidad extremadamente alta, se producirán fenómenos como la auto-focalización del haz.
- **Frentes de onda planos**: Se supone que la onda es plana infinita. Violar esta hipótesis para distancias cortas a la fuente (campo cercano) provoca que existan componentes de campo en la dirección de propagación.

## Dominio de validez cuantitativo
Este modelo es sumamente preciso y aplicable bajo condiciones cuantitativas estrictas:
- **Distancia a la fuente**: La distancia radial r al emisor debe cumplir la desigualdad de campo lejano: r >> [[lambda]] (típicamente r > 10 [[lambda]]), garantizando que la curvatura de los frentes de onda sea despreciable.
- **Intensidad de la radiación**: La densidad de potencia o intensidad media [[I]] debe encontrarse en rangos estándar, típicamente por debajo de los 10^12 W/m^2, donde los efectos no lineales de la electrodinámica cuántica y de polarización no lineal del medio son inexistentes.

## Señales de fallo del modelo
Un alumno o experimentador puede buscar estas señales cuantitativas en sus datos para saber que el modelo ideal ha dejado de aplicar:
- **Reducción de la amplitud con la distancia**: Si al medir el campo eléctrico en dos puntos sucesivos sobre el eje de avance se detecta que su valor decrece como 1/r, delata que el frente de onda real es esférico y no plano.
- **Desfase entre campos**: Si la medición del campo eléctrico [[E0]] y del campo magnético [[B0]] revela una diferencia de fase distinta de cero, esto delata la presencia de un medio conductor con pérdidas.
- **Desviación de la relación de amplitudes**: Si al calcular el cociente [[E0]] / [[B0]] el resultado difiere del valor constante de [[c]], indica que la onda se propaga en un dieléctrico material y no en el vacío.

## Modelo extendido o alternativo
El modelo extendido corresponde a la **propagación en medios materiales dieléctricos y conductores con pérdidas**. A diferencia del vacío, el medio real presenta polarización y magnetización que ralentizan la onda. La transición al modelo extendido conviene cuando la onda transita del vacío absoluto a cualquier medio material gaseoso, líquido o sólido (como la atmósfera, el agua o la fibra óptica). Cuando conviene pasar al modelo de conductor con pérdidas es al estudiar la propagación en metales o el agua salada, donde la conductividad provoca atenuación exponencial y absorción de energía.

## Comparación operativa
| Criterio | Modelo Ideal (Vacío) | Modelo Extendido (Medio Real) |
|---|---|---|
| **Precisión** | Exacto en vacío absoluto; aproximado en aire seco. | Alta en medios dispersivos y conductores con pérdidas. |
| **Complejidad** | Baja (relaciones algebraicas simples como [[E0]] = [[c]] [[B0]]). | Alta (ecuaciones diferenciales complejas y constantes complejas). |
| **Velocidad** | Constante [[c]] invariable. | Variable según el índice de refracción y dispersiva. |
| **Atenuación** | Nula (la onda se propaga infinitamente con amplitud constante). | Exponencial (conversión de energía electromagnética en calor). |
`;export{e as default};
