const e=`## Modelo ideal

El modelo ideal de la ley de Coulomb trata las cargas como **cargas puntuales matemáticas**: toda la carga concentrada en un único punto del espacio, sin extensión, sin estructura interna, sin efectos de inducción. En este modelo, la fuerza entre [[q1]] y [[q2]] depende únicamente de sus valores y de [[r12]], y obedece perfectamente la relación inversa cuadrática.

Este modelo conserva las magnitudes esenciales del leaf —[[q1]], [[q2]], [[r12]], [[F_C]] y [[k_e]]— e ignora deliberadamente la geometría real de los objetos, la redistribución superficial de carga, los efectos relativistas y cualquier interacción magnética. Es exacto en el sentido matemático cuando las dimensiones de los objetos son mucho menores que [[r12]].

## Hipótesis

- **Extensión despreciable**: los objetos cargados son puntuales o, equivalentemente, su tamaño es mucho menor que la separación [[r12]]. Si esta hipótesis se viola, la fuerza real difiere de la predicción del modelo porque la distribución superficial de carga ya no equivale a una carga puntual.
- **Cargas fijas en el espacio**: las cargas no se mueven durante el tiempo de análisis. Si se mueven, la electrodinámica de Maxwell es necesaria y la ley de Coulomb es solo la componente electrostática.
- **Vacío o medio homogéneo e isótropo**: la interacción ocurre en el vacío o en un dieléctrico uniforme que puede describirse con una sola permitividad relativa. Medios inhomogéneos o anisótropos requieren tratamiento diferencial.
- **Sin conductores cercanos**: la presencia de superficies conductoras redistribuye las cargas por inducción, creando fuerzas de imagen que modifican [[F_C]]. El modelo ideal ignora estos efectos.

## Dominio de validez cuantitativo

El modelo de carga puntual es razonablemente exacto cuando la distancia [[r12]] supera en al menos un orden de magnitud el tamaño característico de los objetos cargados. Para esferas de 1 cm de radio, el modelo puntual es válido para [[r12]] mayor de 10 cm, con un error inferior al 1%.

La escala de energía donde la ley de Coulomb pierde validez por efectos cuánticos es la escala del átomo de Bohr: radio de aproximadamente 0.05 nm. Por debajo de 0.1 nm, los efectos de difracción electrónica son comparables a las fuerzas clásicas.

A distancias mayores de 1 m con cargas de laboratorio (microcoulombios), [[F_C]] cae por debajo de 10⁻³ N y puede ser comparable a fuerzas mecánicas parásitas, lo que hace difícil su medición directa pero no invalida el modelo.

## Señales de fallo del modelo

- **Resultado de [[F_C]] negativo**: el modelo escalar da módulos siempre positivos. Un resultado negativo indica que se está usando el producto de cargas con signo en lugar del valor absoluto, o que hay un error conceptual en la fórmula aplicada.
- **[[F_C]] que aumenta al aumentar [[r12]]**: la ley de Coulomb produce una fuerza decreciente con la distancia. Si los datos experimentales muestran lo contrario, hay influencia de cargas adicionales, inducción en conductores cercanos o error de medición.
- **Resultado en el rango de kN para cargas de μC a distancias de cm**: este rango es físicamente plausible pero extremo; conviene verificar que [[r12]] no se haya introducido en centímetros sin convertir a metros.
- **Divergencia cerca del origen**: en simulaciones numéricas, si [[r12]] se aproxima a cero, [[F_C]] crece sin límite. Esta señal indica que el modelo ha alcanzado su singularidad y debe detenerse el cálculo.

## Modelo extendido o alternativo

Para objetos con extensión real —esferas, cilindros, planos cargados— el modelo puntual se extiende integrando la contribución de cada elemento diferencial de carga. El resultado es el campo eléctrico de la distribución, que en casos simétricos se reduce a la ley de Gauss.

Para cargas en movimiento con velocidades apreciables, la extensión natural es la electrodinámica de Liénard-Wiechert, donde la fuerza depende no solo de la posición actual sino de la posición retardada y de la velocidad y aceleración de la carga fuente.

Cuando conviene pasar al modelo extendido: cuando el tamaño de los objetos cargados sea mayor del diez por ciento de [[r12]], cuando los objetos sean conductores con carga redistribuible, o cuando las velocidades superen el 1% de la velocidad de la luz.

## Comparación operativa

| Criterio | Modelo ideal (Coulomb puntual) | Modelo extendido (distribuciones) |
|---|---|---|
| Aplicabilidad | Cargas puntuales, [[r12]] grande | Objetos macroscópicos con forma |
| Complejidad | Álgebra directa | Integración o simetría (Gauss) |
| Precisión | Exacta para puntos; error para objetos | Exacta cuando se integra correctamente |
| Variables | [[q1]], [[q2]], [[r12]], [[k_e]] | Densidad de carga, geometría, posición |
| Error típico | Confusión en el cuadrado de [[r12]] | Elección incorrecta de la superficie gaussiana |
`;export{e as default};
