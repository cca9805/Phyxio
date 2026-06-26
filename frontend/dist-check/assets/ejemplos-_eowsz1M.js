const e=`# Ejemplo tipo examen

## Enunciado

Tres cargas puntuales están situadas en los vértices de un triángulo rectángulo en el plano horizontal. La carga de 4 µC está en el origen, la carga de −3 µC está a 0.30 m a la derecha del origen, y la carga de 2 µC está a 0.40 m por encima del origen. Se pide calcular la fuerza eléctrica total que actúan sobre una cuarta carga de prueba de 1 µC colocada en el origen del sistema.

## Datos

- Carga en A (origen): 4 µC (esta es la carga de prueba junto con las tres fuente)
- Carga B: −3 µC a 0.30 m a la derecha del origen
- Carga C: 2 µC a 0.40 m por encima del origen
- Carga de prueba Q: 1 µC en el origen
- Constante de Coulomb: [[k_e]] aproximadamente 8.99×10⁹ N·m²·C⁻²
- Número de cargas fuente [[N_cargas]]: 2 (carga B y carga C)

## Definición del sistema

Se toman como cargas fuente la carga B de −3 µC a distancia [[r_i]] de 0.30 m sobre el eje x positivo, y la carga C de 2 µC a distancia [[r_i]] de 0.40 m sobre el eje y positivo. La carga de prueba de 1 µC se sitúa en el origen. El sistema de referencia tiene el eje x apuntando a la derecha y el eje y apuntando hacia arriba.

## Modelo físico

Se aplica el principio de superposición: [[F_total]] sobre la carga de prueba es la suma vectorial de la fuerza de Coulomb ejercida por B y la fuerza de Coulomb ejercida por C, calculadas de forma independiente. Cada contribución utiliza la fórmula de la ley de Coulomb con la [[q_i]] correspondiente, su [[r_i]] al origen y el vector unitario de dirección desde la carga fuente hasta el origen.

## Justificación del modelo

El modelo de carga puntual es válido porque las distancias entre cargas (0.30 m y 0.40 m) son muy superiores al tamaño de los objetos cargados (estimado en milímetros para cargas de laboratorio). El régimen es electrostático ya que las cargas están en reposo. El medio es aire, que se comporta como vacío para este rango de distancias (permitividad relativa de 1.0006, despreciable). El principio de superposición es aplicable porque el aire es un medio lineal.

El modelo dejaría de valer si las distancias fueran comparables al tamaño de los objetos, o si hubiera conductores próximos que indujeran redistribución de carga.

## Resolución simbólica

Aplicando el principio de superposición para la fuerza eléctrica:

{{f:superposicion_fuerza}}

La contribución de la carga B (−3 µC, posición (0.30, 0)):

El vector desde B hasta el origen apunta en la dirección (−1, 0), es decir, hacia la izquierda. La fuerza es **atractiva** porque [[q_i]] es negativo: la fuerza sobre la carga de prueba positiva apunta hacia B, es decir, en dirección +x. Por tanto la componente x de la contribución de B es positiva.

Módulo de la contribución de B: [[k_e]]·|[[q_i]]|·|Q| / [[r_i]]².

La contribución de la carga C (2 µC, posición (0, 0.40)):

El vector desde C hasta el origen apunta en la dirección (0, −1), es decir, hacia abajo. La fuerza es **repulsiva** porque [[q_i]] es positivo: la fuerza sobre la carga de prueba positiva apunta alejándose de C, es decir, en dirección −y. Por tanto la componente y de la contribución de C es negativa.

Módulo de la contribución de C: [[k_e]]·[[q_i]]·|Q| / [[r_i]]².

El campo eléctrico total también puede calcularse independientemente de la carga de prueba:

{{f:superposicion_campo}}

Componentes del campo total: x aportada por B, y aportada por C. Dividiendo cada contribución de fuerza entre el valor de la carga de prueba (1×10⁻⁶ C) se obtiene la componente correspondiente del campo: [[E_total]] en el origen tiene componente x de aproximadamente +3.0×10⁵ N/C y componente y de aproximadamente −1.1×10⁵ N/C, con módulo resultante de aproximadamente 3.2×10⁵ N/C.

## Sustitución numérica

Módulo de la fuerza de B sobre Q:

Multiplicar [[k_e]] (8.99×10⁹) por [[q_i]] de B en valor absoluto (3×10⁻⁶ C) por la carga de prueba (1×10⁻⁶ C) y dividir entre el cuadrado de [[r_i]] de B (0.30 m)². El resultado es aproximadamente 8.99×10⁹ × 3×10⁻⁶ × 1×10⁻⁶ / 0.09, que da aproximadamente 0.2997 N. Así la componente x de [[F_total]] debida a B es aproximadamente +0.30 N.

Módulo de la fuerza de C sobre Q:

Multiplicar [[k_e]] (8.99×10⁹) por [[q_i]] de C (2×10⁻⁶ C) por la carga de prueba (1×10⁻⁶ C) y dividir entre el cuadrado de [[r_i]] de C (0.40 m)². El resultado es aproximadamente 8.99×10⁹ × 2×10⁻⁶ × 1×10⁻⁶ / 0.16, que da aproximadamente 0.1124 N. La componente y de [[F_total]] debida a C es aproximadamente −0.11 N (repulsión hacia abajo).

Suma vectorial:

Componente x total: aproximadamente +0.30 N.
Componente y total: aproximadamente −0.11 N.

Módulo de [[F_total]]: raíz de (0.30² + 0.11²) ≈ raíz de (0.090 + 0.012) ≈ raíz de 0.102 ≈ 0.32 N.

Ángulo respecto al eje x: arctan(0.11 / 0.30) ≈ 20° por debajo del eje x positivo (es decir, en el cuarto cuadrante).

## Validación dimensional

La dimensión de [[F_total]] es fuerza. Verificando la cadena dimensional:

Las dimensiones de las magnitudes involucradas: [[k_e]] tiene dimensión de fuerza por metro cuadrado por culombio al cuadrado; [[q_i]] tiene dimensión de carga; [[r_i]] tiene dimensión de longitud.

Combinando sus dimensiones:

\`[M L³ T⁻⁴ I⁻²]\` × \`[I T]\` × \`[I T]\` / \`[L²]\` = \`[M L T⁻²]\`, que es la dimensión de la fuerza (newton). La validación dimensional es correcta.

## Interpretación física

La carga de prueba positiva en el origen experimenta una fuerza resultante de aproximadamente 0.32 N apuntando predominantemente hacia la derecha y ligeramente hacia abajo. El resultado tiene sentido cualitativo: la carga B es negativa y más cercana (0.30 m), por lo que su contribución atractiva hacia la derecha domina. La carga C es positiva y algo más lejana (0.40 m), por lo que su contribución repulsiva hacia abajo es menor en módulo.

Si la carga B duplicara su valor en módulo, su contribución se duplicaría a aproximadamente 0.60 N, y [[F_total]] aumentaría significativamente en la dirección x. Si la distancia a B se duplicara a 0.60 m, la contribución de B caería a un cuarto (aproximadamente 0.075 N) por la ley del cuadrado inverso, y la contribución de C pasaría a dominar.

La dirección de [[F_total]] indica dónde se movería la carga de prueba si se dejara libre: aceleraría hacia la derecha y ligeramente hacia abajo, siguiendo la resultante vectorial. La presencia simultánea de la carga negativa B y la positiva C crea una fuerza neta que no apunta hacia ninguna de ellas individualmente sino en la dirección dictada por la superposición.

---

# Ejemplo de aplicación real

## Contexto

En un experimento de física de superficies, un electrón en la superficie de un semiconductor está sometido a la influencia de dos defectos cargados en la red cristalina: un ión donante de carga +e a 0.5 nm de distancia, y un ión aceptor de carga −e a 0.8 nm de distancia, formando un ángulo de 90° respecto al electrón. El objetivo es estimar el campo eléctrico neto que experimenta el electrón y determinar si la contribución de alguno de los dos iones es claramente dominante.

## Estimación física

La distancia al ión donante ([[r_i]] de 0.5 nm, es decir, 5×10⁻¹⁰ m) es menor que la distancia al ión aceptor (0.8 nm). Por la ley del cuadrado inverso, la contribución del ión más cercano es mayor por un factor de (0.8/0.5)² ≈ 2.56. Así, el ión donante ejerce una influencia 2.56 veces más intensa sobre el electrón que el ión aceptor.

Estimando el módulo del campo del ión donante en el electrón: [[k_e]] × e / [[r_i]]² ≈ 8.99×10⁹ × 1.6×10⁻¹⁹ / (5×10⁻¹⁰)² ≈ 5.75×10⁹ N/C.

El módulo del campo del ión aceptor: [[k_e]] × e / [[r_i]]² ≈ 8.99×10⁹ × 1.6×10⁻¹⁹ / (8×10⁻¹⁰)² ≈ 2.25×10⁹ N/C.

Como los dos iones forman un ángulo de 90° respecto al electrón, sus contribuciones son perpendiculares entre sí. El campo resultante tiene módulo aproximado de raíz de (5.75² + 2.25²) × 10⁹ ≈ 6.18×10⁹ N/C. El ión donante contribuye con aproximadamente el 80 % de la magnitud del campo resultante, confirmando que su proximidad lo convierte en el factor dominante.

## Interpretación

El resultado ilustra cómo el principio de superposición permite cuantificar la dominancia relativa de cada defecto: aunque ambos iones tienen la misma carga elemental, su diferente distancia [[r_i]] al electrón hace que sus contribuciones al campo sean muy distintas. En la práctica de semiconductores, este análisis justifica por qué los defectos más próximos a los portadores de carga determinan las propiedades de movilidad del material: un [[N_cargas]] pequeño de defectos cercanos puede dominar sobre un gran número de defectos lejanos.

La orientación de la suma vectorial también tiene consecuencias físicas: la fuerza resultante sobre el electrón no apunta ni hacia el donante ni hacia el aceptor, sino en la dirección dictada por la superposición. Esto afecta la trayectoria del electrón en el campo cristalino y, en agregado estadístico, determina la movilidad del portador en presencia de impurezas.
`;export{e as default};
