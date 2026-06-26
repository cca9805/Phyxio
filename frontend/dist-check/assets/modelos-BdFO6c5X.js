const e=`## Modelo ideal

El modelo ideal de la carga eléctrica en este leaf es el **modelo de carga puntual cuantizada en el vacío**. En este modelo, los objetos cargados se representan como puntos sin extensión espacial, portadores de una carga [[q]] que es múltiplo entero de la carga elemental [[e]]. La distribución interna de cargas se ignora; solo importa la carga neta [[q_neta]] del sistema.

Este modelo simplifica radicalmente la realidad: un objeto cargado real tiene extensión, distribución interna no uniforme y geometría. El modelo puntual elimina todas esas complejidades y retiene únicamente la magnitud [[q]] como descriptor completo del estado eléctrico del objeto.

## Hipótesis

- **Los portadores de carga son protones y electrones**: cada protón tiene carga positiva [[e]] y cada electrón tiene carga negativa de igual módulo. Consecuencia de violarla: en física de altas energías aparecen otras partículas cargadas (piones, muones) que este modelo no contempla.
- **La carga es cuantizada**: toda [[q]] observable es múltiplo entero de [[e]]. Consecuencia de violarla: aparecerían resultados como [[n]] fraccionario, que son físicamente imposibles salvo en el régimen de quarks confinados.
- **La carga se conserva**: la [[q_neta]] de un sistema aislado no cambia. Consecuencia de violarla: la energía del sistema no se conservaría de forma consistente con las ecuaciones de Maxwell.
- **Los objetos son puntuales**: la geometría y distribución interna de cargas no importa para calcular [[q_neta]]. Consecuencia de violarla: hay que recurrir a modelos de distribuciones de carga, potencial dipolar u órdenes multipolares superiores.
- **El medio es el vacío o el aire**: no hay efectos dieléctricos del medio sobre la distribución de [[q]]. Consecuencia de violarla: la polarización del medio redistribuye las cargas inducidas y modifica el campo resultante.

## Dominio de validez cuantitativo

El modelo de carga puntual es válido cuando las distancias de observación son mucho mayores que el tamaño del objeto cargado. Para objetos macroscópicos de laboratorio (esferas de radios del orden de centímetros), el modelo puntual funciona a distancias r > 10 veces el radio del objeto, es decir r > 0.1 m aproximadamente.

La cuantización es detectable solo por debajo del nanocoulombio: para [[q]] menores de 10⁻⁹ C el número [[n]] de cargas elementales es menor de diez mil millones, y las fluctuaciones discretas son en principio apreciables con instrumentos de alta sensibilidad. Para [[q]] mayores de 1 µC, la discretización es indetectable y el modelo continuo es indistinguible del cuántico con error relativo menor del 0.001 %.

## Señales de fallo del modelo

- **[[n]] fraccionario en el cálculo**: si al dividir [[q]] entre [[e]] el resultado no es entero, el modelo de cuantización con partículas estándar ha fallado. La causa más común es un error de unidades (usar pC en vez de C, por ejemplo).
- **[[q_neta]] cambia en un sistema supuestamente aislado**: indica que hay intercambio de cargas con el entorno no contemplado en el modelo. Puede ser una descarga a tierra, ionización del aire o conductividad del soporte.
- **La fuerza coulombiana medida no coincide con la calculada a partir de [[q]]**: señal de que el objeto no puede tratarse como puntual a la distancia medida, o de que hay cargas inducidas en materiales cercanos que redistribuyen el campo.
- **Dependencia angular de la fuerza**: si la fuerza entre dos objetos cargados depende de la orientación relativa, el modelo puntual falla; hay distribuciones de carga no simétricas o efectos dipolares que el modelo ignora.

## Modelo extendido o alternativo

El modelo extendido es el **modelo de distribución continua de carga**, donde [[q]] ya no es un valor puntual sino una densidad volumétrica, superficial o lineal que varía con la posición. Este modelo describe objetos cargados reales como conductores o dieléctricos con forma geométrica definida.

La diferencia concreta respecto al modelo ideal es que el campo eléctrico y el potencial ya no son los de una carga puntual: dependen de la geometría de la distribución, y calcularlos requiere integración sobre toda la distribución (ley de Coulomb integral o ley de Gauss con la geometría apropiada).

Cuando conviene pasar al modelo de distribución continua: cuando las distancias de observación son comparables al tamaño del objeto cargado, cuando la distribución no es simétrica, o cuando se necesita calcular el campo en puntos interiores al objeto. Cambiar a este modelo cuando la precisión requerida supera el 1 % y el objeto no puede aproximarse como puntual.

## Comparación operativa

| Criterio | Modelo puntual cuantizado | Modelo de distribución continua |
|---|---|---|
| Complejidad de cálculo | Baja: una magnitud, [[q]] | Alta: integración espacial |
| Variables necesarias | [[q]], [[e]], [[n]] | Densidades de carga, geometría |
| Validez a larga distancia | Excelente | Equivale al puntual |
| Validez a corta distancia | Falla si r ~ tamaño del objeto | Correcta |
| Detecta efectos dipolares | No | Sí |
| Uso típico | Electrostática básica, circuitos | Óptica, condensadores reales, biofísica |
`;export{e as default};
