const e=`## Modelo ideal

El **modelo de carga puntual** es la idealización central de este leaf. En él, toda la carga fuente [[q_fuente]] se concentra en un punto geométrico sin dimensión, y el espacio circundante es vacío con permitividad constante. Bajo estas hipótesis, el campo eléctrico [[E]] en cualquier punto queda completamente determinado por [[q_fuente]], la constante [[k_e]] y la distancia [[r]].

Este modelo conserva la magnitud física esencial —la dependencia cuadrática inversa con la distancia— e ignora deliberadamente la estructura interna de la carga fuente, las corrientes de desplazamiento y las variaciones temporales del campo. Es el punto de partida para el cálculo de cualquier distribución de carga mediante el principio de superposición.

## Hipótesis

- **Carga puntual**: el tamaño físico de la carga fuente es despreciable frente a la distancia [[r]] de evaluación. Si se viola esta hipótesis (objeto extendido a distancia comparable a su tamaño), el campo real diverge del modelo puntual y hay que integrar contribuciones elementales.
- **Electrostática estricta**: las cargas están en reposo o se mueven tan lentamente que las corrientes son despreciables. Si las cargas se mueven a velocidades apreciables, aparecen campos magnéticos y el modelo electrostático es insuficiente.
- **Vacío o medio lineal homogéneo**: no hay polarización no lineal ni inhomogeneidades dieléctricas. En medios con gradiente de permitividad, las líneas de campo se refractan en las interfases.
- **Ausencia de blindaje**: no existen conductores ni dieléctricos en el entorno que redistribuyan las cargas inducidas. La presencia de conductores cercanos altera radicalmente la distribución del campo.

## Dominio de validez cuantitativo

El modelo de carga puntual es aplicable cuando la distancia al punto de evaluación cumple r > 2.8×10⁻¹⁵ m (radio clásico del electrón). Para objetos macroscópicos, la aproximación puntual es válida cuando la distancia de evaluación es al menos diez veces mayor que la dimensión del objeto cargado; en la práctica esto equivale a r > 10 veces el radio del objeto.

En cuanto a la velocidad de las cargas, el modelo es fiable cuando la velocidad de las cargas fuente es menor del 10 % de la velocidad de la luz; por encima de ese umbral, los efectos magnéticos y relativistas se vuelven relevantes en un porcentaje superior al 1 %.

## Señales de fallo del modelo

- El campo calculado crece al reducir [[r]] sin límite: el modelo puntual predice un campo infinito en [[r]] tendiendo a cero, lo que en la práctica indica que la escala de evaluación ha alcanzado el tamaño real del objeto cargado.
- Las líneas de campo resultantes no son radiales: en configuraciones donde hay conductores o dieléctricos cercanos, el campo real se distorsiona respecto al patrón radial puntual. Si la simulación muestra líneas que se doblan inesperadamente, hay cargas inducidas que el modelo ignora.
- El campo medido experimentalmente no decae con el cuadrado de la distancia: puede indicar que la distribución real es extendida (cilindro, placa) o que el entorno no es el vacío libre.

## Modelo extendido o alternativo

El **modelo de distribución continua** extiende el modelo puntual al caso de objetos con carga distribuida en volumen, superficie o longitud. En lugar de evaluar el campo de una única [[q_fuente]], se divide la distribución en elementos infinitesimales \\(dq\\) y se integra la contribución de cada uno. Este modelo recupera el modelo puntual como caso límite cuando toda la carga se concentra en un punto.

El **modelo con dieléctrico** sustituye la constante [[k_e]] por el cociente entre [[k_e]] y la permitividad relativa del medio, reduciendo la intensidad del campo en materiales polarizables. El **modelo de campo cuántico** (electrodinámica cuántica) es el modelo fundamental válido a escala sub-atómica, donde el campo se describe mediante fotones virtuales.

Cuando conviene pasar al modelo de distribución continua: cuando el objeto cargado tiene dimensiones comparables con la distancia de evaluación, o cuando la carga está distribuida con simetría (esférica, cilíndrica, plana) que permite simplificar la integral mediante la ley de Gauss.

## Comparación operativa

| Criterio | Modelo puntual | Modelo distribución continua |
|---|---|---|
| Complejidad de cálculo | Mínima: una fórmula directa | Media-alta: requiere integración |
| Rango de aplicación | r mucho mayor que el tamaño de la fuente | Cualquier r, si la geometría es tratable |
| Precisión para objetos extendidos | Baja cuando r es comparable al tamaño | Alta, exacta para geometrías simétricas |
| Herramienta recomendada | Fórmula de Coulomb directa | Ley de Gauss o integración directa |
| Señal de fallo observable | Campo no decae como 1/r² con la distancia | Integral divergente o asimétrica |
`;export{e as default};
