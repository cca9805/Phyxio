const e=`# Calorimetría\r
\r
## Contexto conceptual\r
\r
La calorimetría es el campo de la física térmica que estudia y cuantifica el intercambio de calor entre cuerpos. Es la aplicación más directa del principio de conservación de energía a sistemas térmicos: si se aíslan del entorno un conjunto de cuerpos a distintas temperaturas, la energía que unos ceden es exactamente la que otros absorben.\r
\r
Este leaf se sitúa después de los conceptos de [[Q_i]] (calor como energía en tránsito), [[c_i]] (calor específico como propiedad del material) y [[DeltaT_i]] (variación de temperatura), y antes del estudio de los cambios de estado, donde la calorimetría se amplía para incluir calores latentes. La calorimetría pone en juego simultáneamente todas las magnitudes de los leafs anteriores y las integra en un principio único.\r
\r
La pregunta central es deceptivamente simple: ¿a qué temperatura llegarán dos cuerpos a distintas temperaturas cuando se ponen en contacto en un recipiente aislado? La respuesta no es la media aritmética de las temperaturas, sino una media ponderada donde el peso de cada cuerpo es su capacidad calorífica total [[m_i]] · [[c_i]].\r
\r
## 🟢 Nivel esencial\r
\r
Cuando se mezcla agua caliente con agua fría en un vaso aislado, ambas llegan a una temperatura intermedia. Si hay mucha más agua caliente que fría, la temperatura final es casi tan alta como la del agua caliente. Si hay mucho más agua fría, la temperatura final se acerca a la del agua fría. El agua más abundante "gana" porque tiene más capacidad de almacenar energía.\r
\r
El principio de calorimetría expresa esta idea con precisión: en un sistema aislado, la energía total se conserva. El calor cedido por los cuerpos que se enfrían es exactamente igual al calor absorbido por los que se calientan. Esto se escribe diciendo que la suma de todos los calores intercambiados es cero.\r
\r
Si un cuerpo caliente cede calor, su calor tiene signo negativo (pierde energía). Si un cuerpo frío absorbe calor, el suyo tiene signo positivo (gana energía). La condición de suma cero garantiza que no se crea ni se destruye energía.\r
\r
## 🔵 Nivel formal\r
\r
El principio de calorimetría se expresa como:\r
\r
{{f:principio_calorimetria}}\r
\r
Donde cada [[Q_i]] es el calor del i-ésimo cuerpo del sistema, calculado mediante la relación de calor sensible con su calor específico [[c_i]], su masa [[m_i]] y su variación de temperatura [[DeltaT_i]].\r
\r
{{f:calor_sensible_i}}\r
\r
Para un sistema de dos cuerpos sin cambio de estado, la temperatura de equilibrio se obtiene despejando [[T_eq]] de la condición de suma cero:\r
\r
{{f:temperatura_equilibrio_dos_cuerpos}}\r
\r
Esta expresión es una media ponderada de las temperaturas iniciales donde los pesos son las capacidades caloríficas totales [[m_i]] · [[c_i]] de cada cuerpo. Si las capacidades caloríficas son iguales, [[T_eq]] es simplemente la media aritmética. Si una es mucho mayor, [[T_eq]] se acerca a la temperatura inicial del cuerpo dominante.\r
\r
La temperatura de equilibrio [[T_eq]] siempre está estrictamente entre las temperaturas iniciales de los cuerpos más frío y más caliente del sistema. Si el resultado está fuera de ese intervalo, hay un error en el planteamiento.\r
\r
En la práctica, el cálculo formal se hace en dos pasadas: primero se obtiene [[T_eq]] con los pesos [[m_i]] · [[c_i]], y después se calculan los [[Q_i]] con [[DeltaT_i]] para comprobar la suma cero.\r
\r
## 🔴 Nivel estructural\r
\r
El principio de calorimetría es una manifestación directa de la primera ley de la termodinámica aplicada a un sistema aislado. En un sistema aislado, el calor total intercambiado con el entorno es cero por definición. El calor que fluye entre los cuerpos del sistema se redistribuye internamente pero no escapa ni llega del exterior. La condición de suma cero es, por tanto, la conservación de la energía interna total del sistema.\r
\r
A nivel molecular, la temperatura de equilibrio representa el estado en que todos los modos de movimiento molecular disponibles tienen, en promedio, la misma energía. Los cuerpos más calientes tienen moléculas con mayor energía cinética promedio; al entrar en contacto con cuerpos más fríos, las colisiones entre moléculas transfieren energía neta de las más energéticas a las menos energéticas hasta que ambas poblaciones tienen la misma distribución de energías. En ese punto, el intercambio neto de energía cesa y la temperatura es uniforme en todo el sistema.\r
\r
La fórmula de [[T_eq]] como media ponderada tiene una interpretación estructural importante. Las capacidades caloríficas totales [[m_i]] · [[c_i]] son los "pesos" que determinan cuánto arrastra cada cuerpo la temperatura final hacia su propio valor inicial. Un cuerpo con gran [[m_i]] · [[c_i]] es un "depósito térmico" que apenas cambia de temperatura al recibir o ceder calor, y por tanto domina el equilibrio. Esta es la razón por la que los océanos estabilizan el clima: su [[m_i]] · [[c_i]] total es tan enorme que apenas cambian de temperatura aunque intercambien enormes cantidades de calor con la atmósfera.\r
\r
## Interpretación física profunda\r
\r
El carácter de media ponderada de [[T_eq]] tiene implicaciones prácticas inmediatas. Si se quiere que [[T_eq]] esté próxima a la temperatura de un cuerpo A, se necesita que la capacidad calorífica total de A sea mucho mayor que la del resto del sistema. Esto se logra aumentando la masa de A, usando un material con [[c_i]] mayor, o ambas cosas.\r
\r
En calorimetría experimental, el calorímetro mismo (el recipiente) tiene una capacidad calorífica total no nula. Si se ignora, la temperatura de equilibrio medida difiere de la calculada con solo los cuerpos de interés. Este error sistemático se corrige determinando experimentalmente la "equivalente en agua" del calorímetro: la masa de agua que tendría la misma capacidad calorífica total que el calorímetro, e incluyéndola como un cuerpo adicional en el balance.\r
\r
> [!NOTE]\r
> En calorimetría, el principio de suma cero de los calores es siempre válido. Si los calores calculados no suman cero, hay un error de signo, un cuerpo omitido o un cambio de estado no contemplado.\r
\r
## Orden de magnitud\r
\r
En experimentos de laboratorio de bachillerato:\r
- Agua del calorímetro: 200 g, [[c_i]] = 4186 J/(kg·K), capacidad calorífica total ≈ 837 J/K\r
- Metal desconocido: 100 g, [[c_i]] ≈ 400–900 J/(kg·K), capacidad calorífica total ≈ 40–90 J/K\r
- El agua domina el equilibrio porque su capacidad calorífica total es 10–20 veces mayor que la del metal\r
\r
En aplicaciones industriales de templado (acero en agua):\r
- Acero: 1 kg, [[c_i]] ≈ 490 J/(kg·K), capacidad calorífica total ≈ 490 J/K\r
- Agua de temple: 10 kg, [[c_i]] = 4186 J/(kg·K), capacidad calorífica total ≈ 41 860 J/K\r
- El agua domina: la temperatura de equilibrio está menos de 2 °C por encima de la temperatura inicial del agua\r
\r
## Método de resolución personalizado\r
\r
**Tipo 1: Determinar [[T_eq]] dados todos los cuerpos del sistema.**\r
\r
1. Identificar todos los cuerpos del sistema, incluyendo el calorímetro si su calor no es despreciable.\r
2. Para cada cuerpo, identificar [[m_i]], [[c_i]] y la temperatura inicial.\r
3. Calcular la capacidad calorífica total de cada cuerpo: [[m_i]] · [[c_i]].\r
4. Aplicar la fórmula de temperatura de equilibrio como media ponderada de las temperaturas iniciales.\r
5. Verificar que el resultado está entre la temperatura más baja y la más alta de los cuerpos.\r
6. Calcular los [[Q_i]] individuales y verificar que suman cero.\r
\r
**Tipo 2: Determinar el calor específico [[c_i]] de un material desconocido.**\r
\r
1. Identificar los cuerpos conocidos y el cuerpo desconocido.\r
2. Medir [[T_eq]] experimentalmente.\r
3. Calcular el calor absorbido por el agua usando [[m_i]], [[c_i]] y la diferencia entre [[T_eq]] y su temperatura inicial.\r
4. Aplicar la condición de suma cero: el calor cedido por el material desconocido es igual en módulo y opuesto en signo al del agua.\r
5. Despejar [[c_i]] del material desconocido.\r
6. Comparar con tabla para identificar el material.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Sistema con tres o más cuerpos**: La fórmula de [[T_eq]] se generaliza sumando [[m_i]] · [[c_i]] · T_inicial_i en el numerador y [[m_i]] · [[c_i]] en el denominador sobre todos los cuerpos i. La condición de suma de [[Q_i]] cero sigue siendo válida y es el criterio de autocomprobación.\r
\r
**Calorímetro no ideal**: Si el calorímetro tiene una equivalente en agua, se añade al agua del calorímetro como si fuera un cuerpo adicional con el mismo [[c_i]] del agua. La equivalente en agua se determina en un experimento de calibración previo.\r
\r
**Sistema con cambio de estado**: Si algún cuerpo pasa por una transición de fase en el camino hacia [[T_eq]], el proceso debe dividirse en etapas. En la etapa de la transición, la variación de temperatura es cero y solo interviene el calor latente.\r
\r
**Termometría de mezclas**: En aplicaciones médicas y de ingeniería, la calorimetría de mezclas se usa para templar materiales, calibrar termómetros o determinar la capacidad calorífica de sistemas biológicos mediante calorímetros diferenciales de barrido.\r
\r
> [!WARNING]\r
> El error más frecuente en calorimetría es asignar calores positivos a todos los cuerpos, incluidos los que se enfrían. Los cuerpos que ceden calor tienen [[Q_i]] negativo.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué no es la media aritmética de las temperaturas?**\r
La media aritmética sería correcta solo si ambos cuerpos tuvieran la misma capacidad calorífica total. En general, un cuerpo con mayor [[m_i]] · [[c_i]] necesita más calor para cambiar su temperatura en un kelvin y por tanto "arrastra" más el equilibrio hacia su temperatura inicial. La media ponderada refleja este desequilibrio.\r
\r
**¿Qué ocurre si uno de los cuerpos cambia de estado durante el proceso?**\r
El proceso deja de ser puro calor sensible. Hay que calcular hasta dónde llega el enfriamiento o calentamiento antes de la transición (usando [[Q_i]] sensible), luego aplicar el calor latente de la transición, y finalmente continuar con calor sensible en la nueva fase. Si la energía disponible no es suficiente para completar la transición, el sistema queda en equilibrio a la temperatura de transición con parte del material en cada fase.\r
\r
**¿Cómo se mide experimentalmente la equivalente en agua del calorímetro?**\r
Se realiza un experimento de calibración mezclando agua caliente de masa y temperatura conocidas con agua fría de masa y temperatura conocidas dentro del calorímetro. La diferencia entre la [[T_eq]] medida y la calculada sin el calorímetro se debe al calor absorbido por este. Igualando esa diferencia al calor sensible de una masa equivalente de agua se determina esa equivalente.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
La calorimetría es el prerequisito directo de los [cambios de estado](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/cambios-de-estado), donde el principio de suma cero se extiende para incluir calores latentes. También conecta con la [termodinámica](leaf:física-clasica/termodinámica) a través de la primera ley, y con la [física estadística](leaf:física-moderna/física-estadística/distribucion-de-boltzmann) a través de la descripción microscópica del equilibrio térmico.\r
\r
En ingeniería, el diseño de sistemas de calefacción, refrigeración y almacenamiento térmico se basa directamente en los principios calorimétricos desarrollados en este leaf.\r
\r
## Síntesis final\r
\r
La calorimetría aplica la conservación de energía a sistemas térmicos aislados: la suma algebraica de todos los [[Q_i]] intercambiados es cero. La temperatura de equilibrio [[T_eq]] es la media ponderada de las temperaturas iniciales con pesos iguales a las capacidades caloríficas totales [[m_i]] · [[c_i]] de cada cuerpo. El principio es válido sin cambios de estado; con ellos, el proceso se divide en etapas. La condición de suma cero es siempre el criterio de autocomprobación definitivo.\r
`;export{e as default};
