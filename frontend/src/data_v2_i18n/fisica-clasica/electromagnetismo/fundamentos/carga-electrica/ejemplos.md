# Ejemplo tipo examen


## Enunciado

Una esfera conductora inicialmente neutra se electriza por contacto con una fuente que le transfiere exactamente 8.01 millones de millones (8.01×10¹²) de electrones. Determinar la carga eléctrica adquirida por la esfera, expresarla en microcoulombios, y calcular cuántas cargas elementales componen esa carga. Un segundo objeto, que lleva una carga positiva de 1.28 µC, se pone en contacto con la esfera cargada. Determinar la carga neta del sistema formado por los dos objetos antes y después del contacto.

## Datos

- Número de electrones transferidos: 8.01×10¹² electrones
- Carga elemental: 1.602×10⁻¹⁹ C (valor exacto del SI)
- Objeto A: esfera inicialmente neutra que adquiere los electrones transferidos
- Objeto B: carga positiva de 1.28 µC, equivalente a 1.28×10⁻⁶ C
- Los objetos se ponen en contacto en la segunda parte del problema

## Definición del sistema

El sistema está compuesto por dos objetos conductores macroscópicos. El objeto A es la esfera electrizada; el objeto B es el objeto con carga positiva. En la primera parte, solo interesa el objeto A de forma aislada. En la segunda parte, el sistema es {A + B} considerado aislado durante el proceso de contacto.

## Modelo físico

Se aplica el modelo de **carga puntual cuantizada**: cada electrón transferido aporta una carga negativa de módulo [[carga_elemental]] a la carga total del objeto A. La magnitud dominante es [[carga_electrica]], obtenida directamente de la cuantización de la carga. La carga neta del sistema {A + B} se obtiene por suma algebraica de [[q_pos]] y [[q_neg]].

## Justificación del modelo

El modelo puntual es válido porque el enunciado pide únicamente la carga neta total, no la distribución interna. Las dimensiones de los objetos no se especifican porque son irrelevantes para el cálculo de [[q_neta]]. La cuantización aplica porque el problema especifica un número entero de electrones transferidos; el modelo es exacto en este contexto. El modelo dejaría de ser válido si se pidiera el campo eléctrico a corta distancia de la superficie, donde la distribución geométrica importaría.

## Resolución simbólica

Para la carga del objeto A, se aplica la cuantización de la carga:

{{f:cuantizacion_carga}}

El objeto A ha ganado electrones, por lo que [[numero_de_cargas_elementales]] es negativo (exceso de electrones respecto al estado neutro). El número de cargas elementales es menos 8.01×10¹² y la carga [[carga_electrica]] del objeto A resulta de multiplicar [[numero_de_cargas_elementales]] por [[carga_elemental]].

Para el sistema {A + B} antes del contacto, se aplica la conservación de la carga:

{{f:carga_neta_sistema}}

La [[q_pos]] del sistema es la carga del objeto B. La [[q_neg]] del sistema es la carga del objeto A. La [[q_neta]] del sistema antes del contacto es la suma algebraica de ambas.

Después del contacto, la [[q_neta]] del sistema sigue siendo la misma por conservación de la carga.

## Sustitución numérica

Para la carga del objeto A: multiplicar el número de electrones (8.01×10¹²) por la carga de un electrón (1.602×10⁻¹⁹ C con signo negativo). El producto de 8.01×10¹² por 1.602×10⁻¹⁹ da aproximadamente 1.2832×10⁻⁶ C. Con signo negativo, la carga del objeto A es aproximadamente menos 1.28 µC. Por tanto [[carga_electrica]] del objeto A es aproximadamente menos 1.28 µC.

Verificación de cuantización: dividir 1.28×10⁻⁶ C entre 1.602×10⁻¹⁹ C da aproximadamente 7.99×10¹² ≈ 8.01×10¹² (pequeña diferencia por redondeo). [[numero_de_cargas_elementales]] resulta entero negativo, coherente con la cuantización.

Para la carga neta del sistema antes del contacto: [[q_pos]] del objeto B aproximadamente 1.28 µC, [[q_neg]] del objeto A aproximadamente menos 1.28 µC. La suma algebraica da [[q_neta]] prácticamente cero, coherente con el hecho de que ambas cargas son iguales en módulo y opuestas en signo.

Después del contacto, los electrones del objeto A (excedente) fluyen hacia el objeto B (deficitario) hasta equilibrar ambos. La [[q_neta]] del sistema después del contacto sigue siendo prácticamente cero.

## Validación dimensional

Para la cuantización: el número de cargas elementales es adimensional; la carga elemental tiene dimensión coulombio. El producto de adimensional por culombio da culombios, dimensión correcta de la carga total. Verificación: `[1] · [I T]` produce `[I T]` ✓.

Para la carga neta: la suma `[I T] + [I T]` produce `[I T]`. Dimensiones coherentes ✓.

## Interpretación física

El resultado revela una simetría notable: el número de electrones transferidos al objeto A fue elegido exactamente para que la carga del objeto A compensara la del objeto B en módulo. Esto no es coincidencia en el enunciado, sino una ilustración pedagógica de la cuantización: las cargas macroscópicas son siempre múltiplos de [[carga_elemental]], y es perfectamente posible transferir exactamente el número de electrones necesario para compensar otra carga.

La [[q_neta]] del sistema {A + B} siendo prácticamente cero antes del contacto ilustra la conservación: el sistema en conjunto ya era casi neutro. Después del contacto, la carga neta sigue siendo la misma porque en un sistema aislado no hay creación ni destrucción de carga. Lo que cambia es la distribución entre los dos objetos, no el total.

Si el número de electrones transferidos hubiera sido el doble (16×10¹²), la carga del objeto A habría sido aproximadamente menos 2.56 µC y la [[q_neta]] del sistema habría sido aproximadamente menos 1.28 µC: el sistema quedaría con carga neta negativa. Esto ilustra que la [[q_neta]] final depende críticamente de la cantidad de carga transferida y no solo de las polaridades de los objetos.

---

# Ejemplo de aplicación real


## Contexto

En un proceso industrial de pintura electrostática, una pistola aplica una tensión que electriza las partículas de pintura pulverizadas. Las partículas adquieren carga negativa por efecto corona y son atraídas hacia la pieza metálica puesta a tierra (con carga neta cero inicialmente). El control de [[carga_electrica]] en las partículas determina la eficiencia de deposición y la uniformidad del recubrimiento.

En un ensayo de laboratorio, una boquilla produce partículas de pintura de 5 µm de diámetro que adquieren una carga de aproximadamente 1 fentocoulombio (1×10⁻¹⁵ C) cada una. Se libera un chorro de 3 millones de partículas hacia la pieza.

## Estimación física

La carga total del chorro de pintura es el producto del número de partículas por la carga de cada una: 3×10⁶ partículas multiplicado por 1×10⁻¹⁵ C por partícula da 3×10⁻⁹ C, es decir 3 nanocoulombios. Esta es la [[q_neta]] negativa que llega a la pieza si todas las partículas se depositan.

La carga de 3 nC equivale a un número de cargas elementales de aproximadamente 1.87×10¹⁰ electrones extras: coherente con una carga macroscópica pequeña pero medible con un electrómetro sensible. El orden de magnitud (nanocoulombios) es razonable para procesos electrostáticos industriales de escala pequeña.

Si el proceso funciona con partículas de 10 µm en lugar de 5 µm (volumen ocho veces mayor), la carga por partícula podría escalar con la superficie y ser aproximadamente cuatro veces mayor, llevando la carga total del chorro al orden de decenas de nanocoulombios. Esto cambia el campo eléctrico generado por el chorro y afecta la trayectoria de las propias partículas (efecto de carga espacial).

## Interpretación

La carga eléctrica de las partículas es la variable que controla la eficiencia del proceso. Si [[carga_electrica]] por partícula es demasiado pequeña, las partículas no son desviadas suficientemente hacia la pieza y se desperdician. Si [[carga_electrica]] es demasiado grande, las partículas pueden repelerse entre sí (todas tienen el mismo signo) y dispersarse antes de llegar a la pieza: esto es el efecto de carga espacial.

El límite de validez del modelo de carga puntual aquí es la densidad del chorro: cuando las partículas están muy cerca entre sí, sus campos mutuos se suman de forma compleja. El modelo de carga puntual individual es válido cuando las partículas están separadas más de diez veces su propio radio, aproximadamente mayor de 50 µm en este caso.