const e=`# Ejemplo tipo examen

## Enunciado

Una carga puntual positiva de 5 μC está fija en el origen de coordenadas. Se pide calcular el campo eléctrico en un punto situado a 30 cm de la carga, determinar la fuerza que experimentaría una carga de prueba de 2 nC colocada en ese punto, y discutir cómo cambiaría el resultado si la distancia se duplicara.

## Datos

- Carga fuente: 5 μC (positiva)
- Distancia al punto de evaluación: 30 cm
- Carga de prueba: 2 nC (positiva)
- Constante de Coulomb: 8.988×10⁹ N·m²·C⁻²

## Definición del sistema

El sistema consiste en una carga puntual [[q_fuente]] fija en el origen y un punto de evaluación situado a distancia [[r]] del origen. La carga de prueba [[q_0]] es suficientemente pequeña para no perturbar la distribución de carga fuente. No se consideran efectos magnéticos (electrostática pura), ni la presencia de conductores o dieléctricos en el entorno. La dirección del campo sigue la línea que une la carga fuente con el punto de evaluación.

## Modelo físico

Se aplica el modelo de carga puntual en vacío: el campo [[E]] en cualquier punto del espacio depende únicamente de [[q_fuente]], de [[k_e]] y de [[r]] mediante la ley de Coulomb. La fuerza [[F_e]] sobre la carga de prueba [[q_0]] se obtiene a partir de [[E]] aplicando la definición operativa del campo. El principio de superposición no es necesario porque solo hay una carga fuente.

## Justificación del modelo

El modelo de carga puntual es válido porque la distancia de evaluación de 30 cm es muchos órdenes de magnitud mayor que el tamaño físico de cualquier carga real de 5 μC (que en un conductor típico ocupa un volumen de escala milimétrica o menor). El campo es estático porque la carga no se mueve. El modelo fallaría si hubiera conductores cercanos que induzcan redistribución de carga, o si la velocidad de la carga fuente fuera una fracción apreciable de la velocidad de la luz.

## Resolución simbólica

El módulo del campo eléctrico en el punto a distancia [[r]] de [[q_fuente]] se obtiene aplicando:

{{f:campo_electrico_coulomb}}

Una vez calculado el campo [[E]], la fuerza sobre la carga de prueba [[q_0]] colocada en ese punto se obtiene despejando de la definición:

{{f:campo_electrico_definicion}}

de donde la fuerza es el producto de [[E]] por [[q_0]]. Para el análisis de sensibilidad: si [[r]] se duplica, el denominador de la fórmula de Coulomb aumenta un factor de cuatro, por lo que [[E]] disminuye a una cuarta parte de su valor original.

## Sustitución numérica

Para calcular el módulo del campo, se introduce [[k_e]] de 8.988×10⁹ N·m²·C⁻², [[q_fuente]] de 5×10⁻⁶ C y [[r]] de 0.30 m. El numerador es el producto de 8.988×10⁹ por 5×10⁻⁶, que da 44 940 N·m²/C. El denominador es el cuadrado de 0.30 m, es decir, 0.09 m². Dividiendo ambos, [[E]] resulta aproximadamente 499 333 N/C, que redondeando a tres cifras significativas es aproximadamente 499 000 N/C.

Para la fuerza sobre [[q_0]]: multiplicando el campo de 499 000 N/C por la carga de prueba de 2×10⁻⁹ C, [[F_e]] resulta aproximadamente 9.98×10⁻⁴ N, es decir, aproximadamente 1 mN.

Para el caso de [[r]] duplicado a 60 cm: el denominador pasa a ser el cuadrado de 0.60 m, es decir, 0.36 m². El nuevo campo resulta aproximadamente 124 833 N/C, que es exactamente una cuarta parte del valor original, confirmando la dependencia cuadrática inversa.

## Validación dimensional

- Campo eléctrico: multiplicar N·m²·C⁻² por C y dividir entre m² da \`[N·m²·C⁻²]·[C]·[m⁻²]\`, que se simplifica a \`[N·C⁻¹]\`, es decir N/C. Correcto.
- Fuerza: multiplicar N/C por C da directamente N. Correcto.
- El cociente entre los campos a 30 cm y 60 cm es el cuadrado del cociente de distancias: \`[0.60/0.30]²\` da 4, confirmando la ley del cuadrado inverso. Correcto.

## Interpretación física

El resultado de aproximadamente 499 000 N/C indica que la carga de 5 μC crea un campo muy intenso a 30 cm de distancia. Físicamente, esto significa que cualquier carga de prueba positiva colocada en ese punto sería empujada radialmente hacia afuera con una fuerza proporcional a su valor. La fuerza resultante sobre la carga de 2 nC, alrededor de 1 mN, es pequeña en comparación con las fuerzas mecánicas cotidianas, pero es enorme a escala subatómica.

El análisis de sensibilidad revela la consecuencia más importante de la ley cuadrática inversa: duplicar la distancia no reduce [[E]] a la mitad, sino a una cuarta parte. Esto implica que el campo de una carga puntual se concentra en las proximidades de la fuente y decae rápidamente. Un electrónico o un físico que diseñe una trampa de iones o un acelerador de partículas debe tener muy presente esta no linealidad: alejarse ligeramente de la fuente reduce drásticamente la influencia del campo. Si la distancia se triplicara, el campo caería a una novena parte del original.

---

# Ejemplo de aplicación real

## Contexto

Los pararrayos de Franklin son uno de los dispositivos electrostáticos más antiguos y efectivos de la historia. Funcionan creando una región de campo eléctrico intenso en su punta metálica, que facilita la ionización del aire circundante y proporciona un camino conductor preferente para las descargas atmosféricas.

Durante una tormenta eléctrica, la base de las nubes cúmulo-nimbo acumula cargas negativas que inducen una carga positiva en la superficie terrestre. El campo eléctrico resultante puede alcanzar valores muy superiores al umbral de ruptura dieléctrica del aire, desencadenando el rayo. Modelar el extremo de un pararrayos como una carga puntual permite estimar el campo a su alrededor y entender por qué la geometría en punta es esencial para su funcionamiento.

## Estimación física

Considérese la punta de un pararrayos como una carga puntual [[q_fuente]] de valor típico 10 nC acumulada en un radio efectivo de 1 mm. A una distancia [[r]] de 1 mm de la punta, el campo se estima aplicando la fórmula de Coulomb. Con [[k_e]] de 8.988×10⁹ N·m²·C⁻² y [[q_fuente]] de 10⁻⁸ C, el numerador es 8.988×10⁹ por 10⁻⁸, que da 89.88 N·m²/C. El denominador es el cuadrado de 10⁻³ m, es decir, 10⁻⁶ m². El campo resultante [[E]] es aproximadamente 89 880 000 N/C, es decir, del orden de 90 MN/C.

Este valor supera el umbral de ruptura dieléctrica del aire seco, que es de aproximadamente 3 MN/C. Por tanto, el campo generado es suficiente para ionizar el aire inmediatamente alrededor de la punta, creando una región conductora (corona de plasma) que conecta la punta metálica con la atmósfera y drena la carga atmosférica de forma gradual o desencadena el rayo controlado.

## Interpretación

Este ejemplo muestra que [[E]] y su dependencia con [[r]] tienen una consecuencia práctica directa en el diseño de protecciones eléctricas. La geometría de punta concentra el campo a escala local superando el umbral de ionización, lo que físicamente significa que la energía almacenada en el campo es capaz de arrancar electrones del gas circundante y crear un canal conductor. Sin la geometría de punta, una superficie plana con la misma carga total generaría un campo mucho más débil, insuficiente para ionizar el aire.

La ley cuadrática inversa es la clave del mecanismo: a 1 mm de la punta el campo es del orden de 90 MN/C; a 1 cm —diez veces más lejos— el campo caería a aproximadamente 900 kN/C, ya por debajo del umbral de ruptura. Esto indica que la zona de ionización es muy localizada, lo cual es deseable: el pararrayos no ioniza el aire en toda la estructura del edificio, solo en la punta. La [[q_fuente]] concentrada y la distancia [[r]] pequeña son, por tanto, los dos parámetros de diseño críticos de cualquier dispositivo que explote este principio.
`;export{e as default};
