# Ejemplo tipo examen

## Enunciado

Un bloque de aluminio de 800 g se calienta desde 25 °C hasta 185 °C en un horno de laboratorio. Calcular el calor absorbido por el bloque. A continuación, una vez extraído del horno, el bloque se pone en contacto con 500 g de agua inicialmente a 20 °C. Usando los datos anteriores, estimar la temperatura final de equilibrio de la mezcla, suponiendo que no hay pérdidas de calor al entorno. El calor específico del aluminio es 900 J/(kg·K) y el del agua es 4186 J/(kg·K).

## Datos

- Masa del bloque de aluminio: 0.800 kg
- Temperatura inicial del aluminio: 25 °C
- Temperatura final del aluminio en el horno: 185 °C
- Calor específico del aluminio: 900 J/(kg·K)
- Masa del agua: 0.500 kg
- Temperatura inicial del agua: 20 °C
- Calor específico del agua: 4186 J/(kg·K)

## Definición del sistema

El sistema de la primera parte es el bloque de aluminio. El sistema de la segunda parte es la mezcla aluminio + agua, considerada aislada del entorno (sin pérdidas). La variable a calcular primero es [[Q]] absorbido por el aluminio en el horno; después, la temperatura de equilibrio final de la mezcla.

## Modelo físico

La transferencia de energía en ambas partes se rige por el modelo de calor sensible. No hay cambios de estado porque las temperaturas manejadas (25 °C a 185 °C para el aluminio, y la temperatura de equilibrio esperada entre 20 °C y 185 °C para la mezcla) no cruzan ningún punto de fusión ni ebullición de estos materiales a presión normal.

El principio de conservación de energía aplicado a la mezcla establece que el calor cedido por el aluminio al enfriarse es numéricamente igual al calor absorbido por el agua al calentarse, con signos opuestos.

## Justificación del modelo

El modelo de calor sensible con [[c_esp]] constante es válido aquí porque el rango de temperatura del aluminio (25 °C a 185 °C) está dentro de los límites en los que la variación de su calor específico es inferior al 2 %. Para el agua, el rango también es pequeño y [[c_esp]] puede considerarse constante sin error significativo. No hay cambio de estado en ningún punto del proceso, lo que confirma que la fórmula de calor latente no es necesaria. Si la temperatura de equilibrio resultara superior a 100 °C, el modelo debería revisarse porque el agua vaporizaría, pero el cálculo mostrará que esto no ocurre.

## Resolución simbólica

**Parte 1: calor absorbido por el aluminio en el horno**

Aplicando la fórmula de calor sensible:

{{f:calor_sensible}}

Se despeja [[Q]] directamente como producto de [[m]], [[c_esp]] y [[DeltaT]], donde [[DeltaT]] es la diferencia entre la temperatura final (185 °C) y la inicial (25 °C) del aluminio.

**Parte 2: temperatura de equilibrio de la mezcla**

Aplicando de nuevo la fórmula de calor sensible para cada elemento de la mezcla y el principio de conservación de energía, el calor cedido por el aluminio al bajar de 185 °C hasta la temperatura de equilibrio más el calor absorbido por el agua al subir de 20 °C hasta esa misma temperatura es igual a cero. Despejando la temperatura de equilibrio:

{{f:calor_sensible}}

La ecuación de equilibrio es: [[m]] de aluminio · [[c_esp]] del aluminio · (T_eq − 185) más [[m]] de agua · [[c_esp]] del agua · (T_eq − 20) resulta igual a cero. Despejando T_eq se obtiene la temperatura de equilibrio.

## Sustitución numérica

**Parte 1:**

Multiplicando 0.800 kg por 900 J/(kg·K) y por la diferencia de temperaturas (185 − 25), que es 160 K, se obtiene: 0.800 × 900 × 160. El producto 0.800 × 900 es 720 J/K; multiplicado por 160 K da 115 200 J. Por tanto [[Q]] del aluminio en el horno es aproximadamente 115 200 J, equivalentes a 115.2 kJ.

**Parte 2:**

Numerador de T_eq: [(0.800 × 900 × 185) + (0.500 × 4186 × 20)].

Primero: 0.800 × 900 × 185. El producto 0.800 × 900 es 720; multiplicado por 185 da 133 200.

Segundo: 0.500 × 4186 × 20. El producto 0.500 × 4186 es 2093; multiplicado por 20 da 41 860.

Numerador total: 133 200 más 41 860 resulta 175 060.

Denominador: (0.800 × 900) + (0.500 × 4186). Primer término: 720. Segundo término: 2093. Suma: 2813.

T_eq: 175 060 dividido entre 2813 resulta aproximadamente 62.2 °C.

Por tanto [[DeltaT]] del aluminio en la mezcla es 62.2 − 185, es decir aproximadamente −122.8 K (el aluminio se enfría), y [[DeltaT]] del agua es 62.2 − 20, es decir aproximadamente 42.2 K (el agua se calienta).

## Validación dimensional

Para el calor sensible, las unidades del producto kg · J/(kg·K) · K se resuelven como sigue: los factores kg y kg se cancelan, los factores K se cancelan, y resta J. La dimensión de [[Q]] es la energía: `[M L² T⁻²]`, que corresponde al julio.

Para la temperatura de equilibrio, el numerador tiene unidades de [masa × calor_específico × temperatura], que son J, y el denominador tiene unidades de [masa × calor_específico], que son J/K. El cociente J dividido entre J/K resulta K, que es la unidad de temperatura.

## Interpretación física

El resultado de la primera parte, aproximadamente 115.2 kJ, representa la energía que el horno ha transferido al bloque de aluminio durante el proceso de calentamiento. Este valor es positivo porque el sistema (el aluminio) ha absorbido energía: [[Q]] positivo y [[DeltaT]] positivo son coherentes. Para poner en perspectiva este resultado, 115.2 kJ equivalen aproximadamente a la energía que consume una bombilla de 100 W durante unos 19 minutos.

La temperatura de equilibrio de unos 62.2 °C revela algo físicamente significativo: aunque el aluminio (0.8 kg) partía de una temperatura mucho más alta que el agua (0.5 kg), la temperatura final se acerca más a la del agua que a la del aluminio. Esto se debe a que el agua tiene una capacidad calorífica total de 0.500 × 4186 ≈ 2093 J/K, frente a 0.800 × 900 ≈ 720 J/K del aluminio. La capacidad calorífica total del agua es casi tres veces la del aluminio, de modo que el agua "absorbe" la mayor parte de la energía del aluminio con un aumento de temperatura relativamente modesto.

Si la masa de agua se duplicara a 1 kg, la temperatura de equilibrio bajaría considerablemente hacia el valor inicial del agua, porque la capacidad calorífica del agua dominaría aún más sobre la del aluminio. Este comportamiento ilustra el papel del agua como regulador térmico: su elevada capacidad calorífica amortigua los cambios de temperatura incluso cuando recibe grandes cantidades de [[Q]].

---

# Ejemplo de aplicación real

## Contexto

Un sistema de calefacción por suelo radiante utiliza agua caliente que circula por tuberías embebidas en el hormigón del suelo. El agua entra a 45 °C y sale a 35 °C. El caudal volumétrico es de 180 litros por hora. Estimar el calor total cedido por el agua al suelo durante una hora de funcionamiento y analizar qué determina la eficiencia térmica del sistema.

## Estimación física

La masa de agua que circula en una hora es 180 litros × 1 kg/litro, es decir 180 kg. El descenso de temperatura del agua al pasar por el circuito es de 35 − 45, resultando [[DeltaT]] de −10 K (el agua se enfría). El calor cedido por el agua al suelo, aplicando el modelo de calor sensible, es el producto de 180 kg, 4186 J/(kg·K) y 10 K en valor absoluto: 180 × 4186 × 10 resulta aproximadamente 7 534 800 J, equivalentes a unos 7.5 MJ. Expresado en términos de potencia, esto corresponde a 7 534 800 J divididos entre 3600 segundos, dando aproximadamente 2.1 kW de potencia térmica media cedida al suelo.

La eficiencia del sistema depende fundamentalmente de dos factores: la diferencia de temperatura entre el agua circulante y el ambiente de la habitación (que determina el gradiente de transferencia por conducción a través del hormigón), y la capacidad de [[c_esp]] del agua para transportar energía por unidad de masa y de temperatura. El agua es especialmente adecuada como fluido caloportador precisamente por su [[c_esp]] alto: con el mismo caudal másico, el agua transporta aproximadamente cuatro veces más energía que el aceite mineral a igualdad de [[DeltaT]].

## Interpretación

El resultado de 7.5 MJ por hora equivale a una potencia de unos 2.1 kW, que es una potencia típica para calefactar una habitación de tamaño medio en condiciones de invierno moderado. El modelo de calor sensible permite predecir directamente esta potencia a partir de datos accesibles: caudal, temperaturas de entrada y salida, y el calor específico del agua.

Si se quisiera aumentar la potencia cedida sin cambiar la temperatura del agua, habría dos opciones: aumentar el caudal (aumentar [[m]] por unidad de tiempo) o aumentar la diferencia de temperatura entre entrada y salida (aumentar [[DeltaT]] en valor absoluto). La primera opción requiere mayor potencia de la bomba; la segunda requiere agua más caliente o mayor longitud del circuito. La variable dominante es [[Q]] total cedido por hora, que escala linealmente con ambas.
