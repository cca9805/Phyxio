# Principio de funcionamiento

## Contexto conceptual

El refrigerador y la bomba de calor son máquinas térmicas que operan en sentido inverso al de un motor. Mientras un motor convierte calor en trabajo, estas máquinas consumen trabajo para transferir calor desde un cuerpo frío a uno caliente. La segunda ley de la termodinámica, en su formulación de Clausius, establece que este proceso nunca ocurre espontáneamente: el calor fluye de forma natural solo del caliente al frío. Por tanto, un refrigerador necesita un aporte externo de energía ([[W]]) para realizar su función. Comprender este principio es fundamental antes de abordar los coeficientes de rendimiento y el diseño de ciclos reales.

## 🟢 Nivel esencial

Un refrigerador extrae calor [[Q_C]] del interior frío y lo transfiere al exterior caliente. Para lograrlo, un compresor consume trabajo [[W]]. El foco caliente recibe un calor [[Q_H]] que es la suma de [[Q_C]] más [[W]]. La razón por la que se necesita trabajo es que el calor, por sí solo, nunca viaja del frío al caliente. El compresor comprime el gas refrigerante, elevando su temperatura por encima de la del foco caliente, lo que permite que el calor fluya naturalmente del gas comprimido al exterior.

Después, el refrigerante se expande, enfriándose por debajo de la temperatura del foco frío, y entonces el calor fluye naturalmente del interior del refrigerador al gas frío. La bomba de calor funciona de manera idéntica pero con el objetivo invertido: el efecto útil es el calor [[Q_H]] entregado al espacio a calentar. En ambos casos, sin el trabajo externo [[W]], la transferencia de calor del frío al caliente sería termodinámicamente imposible.

## 🔵 Nivel formal

La primera ley de la termodinámica aplicada al ciclo invertido completo establece el balance energético:

{{f:balance_energetico_ciclo_invertido}}

La segunda ley impone una restricción adicional fundamental. La variación de entropía total del universo debe ser no negativa:

{{f:segunda_ley_ciclo_invertido}}

Combinando ambas leyes se obtiene el trabajo mínimo necesario para extraer una cantidad [[Q_C]] del foco frío a temperatura [[T_C]] y rechazarla al foco caliente a [[T_H]]:

{{f:trabajo_minimo_carnot}}

Para un refrigerador doméstico con [[T_C]] de 268 K (menos 5 grados Celsius) y [[T_H]] de 308 K, la diferencia de temperatura es 40 K. Si se desea extraer [[Q_C]] de 1000 J, el trabajo mínimo de Carnot es 1000 multiplicado por 40 dividido entre 268, que da [[W]] de 149 J. Un ciclo real necesitará entre 250 y 400 J debido a las irreversibilidades. La variación de entropía total [[Delta_S_total]] para el ciclo de Carnot es exactamente cero, y para el ciclo real es positiva, confirmando que cumple la segunda ley. El sentido espontáneo del flujo de calor es siempre del caliente al frío, y solo la aportación de trabajo permite invertirlo.

{{f:flujo_calor_espontaneo}}

## 🔴 Nivel estructural

El ciclo invertido real difiere del de Carnot por múltiples fuentes de irreversibilidad. El compresor genera entropía debido a la fricción interna y la compresión no isentrópica, lo que incrementa [[W]] por encima del mínimo teórico. La válvula de expansión produce un estrangulamiento isoentálpico que es intrínsecamente irreversible. Los intercambiadores de calor requieren diferencias finitas de temperatura entre el refrigerante y los focos, lo que aleja las temperaturas efectivas de los valores nominales de [[T_C]] y [[T_H]], incrementando el trabajo necesario.

La formulación de Clausius de la segunda ley establece que es imposible construir un dispositivo que, operando cíclicamente, transfiera calor de un cuerpo frío a uno caliente sin producir ningún otro efecto en el entorno. El "otro efecto" es precisamente el consumo de trabajo [[W]]. El ciclo de Carnot invertido establece el límite superior de eficiencia: es el ciclo que menos trabajo necesita para una transferencia de calor dada entre dos focos a temperaturas fijas.

La conexión entre el principio de funcionamiento y la [[Delta_S_total]] es directa: cuanto más irreversible es el ciclo, mayor es la producción de entropía y mayor el trabajo necesario para la misma transferencia de calor. Un ciclo perfectamente reversible tiene [[Delta_S_total]] igual a cero y requiere exactamente el trabajo mínimo de Carnot.

## Interpretación física profunda

El principio de funcionamiento del ciclo invertido revela que la naturaleza impone un "peaje energético" para mover calor contra el gradiente térmico. Este peaje es el trabajo [[W]], y su valor mínimo está dictado por la segunda ley. Físicamente, el compresor no crea frío: comprime el refrigerante para elevar su temperatura y permitir que el calor fluya de forma espontánea en cada etapa del ciclo. El refrigerante actúa como un transportador de energía que recoge calor a baja temperatura y lo entrega a alta temperatura, mediando el proceso con cambios de presión y temperatura.

La asimetría entre [[Q_C]] y [[Q_H]] (siempre [[Q_H]] mayor que [[Q_C]]) no es un defecto sino una consecuencia de la conservación de la energía: la energía del trabajo se suma a la del calor extraído. En una bomba de calor, esta asimetría es ventajosa porque el efecto útil [[Q_H]] es mayor que la energía consumida [[W]].

## Orden de magnitud

| Magnitud | Valor típico | Contexto |
|---|---|---|
| [[Q_C]] refrigerador doméstico | 200 - 500 W (potencia) | Congelador entre 255 K y 268 K |
| [[Q_H]] refrigerador doméstico | 300 - 650 W (potencia) | Rechazo al ambiente a 300 - 310 K |
| [[W]] compresor doméstico | 80 - 200 W | Consumo eléctrico en régimen |
| [[T_C]] refrigeración | 233 - 278 K | Desde congelación industrial hasta climatización |
| [[T_H]] refrigeración | 293 - 323 K | Ambiente o agua de condensación |
| [[Delta_S_total]] ciclo real | 0.1 - 2 J/(K por ciclo) | Depende de irreversibilidades |

## Método de resolución personalizado

1. Identificar el sistema como refrigerador o bomba de calor y determinar cuál es el efecto útil ([[Q_C]] para refrigeración, [[Q_H]] para calefacción).
2. Convertir todas las temperaturas a kelvin sumando 273.15 a los valores en Celsius.
3. Aplicar el balance energético: [[Q_H]] es [[Q_C]] más [[W]].
4. Verificar la segunda ley: calcular [[Delta_S_total]] como [[Q_H]] dividido entre [[T_H]] menos [[Q_C]] dividido entre [[T_C]]; debe ser mayor o igual a cero.
5. Si se pide el trabajo mínimo, aplicar la fórmula de Carnot: [[W]] mínimo es [[Q_C]] multiplicado por ([[T_H]] menos [[T_C]]) dividido entre [[T_C]].
6. Comparar el trabajo real con el mínimo de Carnot para evaluar la irreversibilidad del ciclo.

## Casos especiales y ejemplo extendido

Cuando [[T_C]] se aproxima a [[T_H]], la diferencia de temperatura es pequeña y el trabajo mínimo de Carnot tiende a cero. En el límite, si ambos focos estuvieran a la misma temperatura, no se necesitaría trabajo ni existiría flujo de calor. Este es un caso trivial sin aplicación práctica.

Cuando [[T_C]] es muy baja (criogenia, menos de 200 K), el trabajo mínimo crece rápidamente porque la diferencia [[T_H]] menos [[T_C]] es grande comparada con [[T_C]]. Por ejemplo, para licuar nitrógeno a 77 K con [[T_H]] de 300 K, el trabajo mínimo para extraer 1000 J es 1000 multiplicado por 223 dividido entre 77, que da 2896 J, casi tres veces la energía extraída. Esto explica por qué la criogenia es energéticamente costosa.

Como ejemplo extendido, considérese un refrigerador que opera entre [[T_C]] de 253 K (menos 20 grados Celsius) y [[T_H]] de 313 K (40 grados Celsius), con [[Q_C]] de 5000 J por ciclo. El trabajo mínimo es 5000 multiplicado por 60 dividido entre 253, dando [[W]] de 1186 J. El calor cedido es [[Q_H]] de 6186 J. La [[Delta_S_total]] es 6186 dividido entre 313 menos 5000 dividido entre 253, que da 19.76 menos 19.76, igual a cero (ciclo de Carnot). Un ciclo real con [[W]] de 2000 J tendría [[Q_H]] de 7000 J y [[Delta_S_total]] de 7000 dividido entre 313 menos 5000 dividido entre 253, que da 22.36 menos 19.76, igual a 2.6 J/K, confirmando irreversibilidad positiva.

## Preguntas reales del alumno

**¿Por qué el refrigerador calienta la cocina?**
Porque [[Q_H]] es mayor que [[Q_C]]: el refrigerador extrae calor del interior y le suma el trabajo del compresor, rechazando todo al ambiente por la parte trasera. La cocina recibe más calor del que se extrae del interior del refrigerador.

**¿Es posible enfriar una habitación con un refrigerador abierto?**
No. Con la puerta abierta, el refrigerador extrae [[Q_C]] de la habitación pero devuelve [[Q_H]] mayor a la misma habitación. El efecto neto es calentar la habitación en una cantidad igual a [[W]], la energía eléctrica consumida.

**¿Por qué se necesita más trabajo para enfriar a temperaturas más bajas?**
Porque el trabajo mínimo es proporcional a la diferencia [[T_H]] menos [[T_C]] dividida entre [[T_C]]. Cuanto menor es [[T_C]], mayor es este cociente y más trabajo se requiere para cada julio de calor extraído.

## Conexiones transversales y rutas de estudio

El principio de funcionamiento conecta directamente con la formulación de Clausius de la segunda ley como fundamento teórico, con los ciclos termodinámicos como implementación práctica, con el coeficiente de rendimiento como medida cuantitativa de la eficiencia, y con los procesos irreversibles como fuente de la diferencia entre ciclo ideal y real. En ingeniería, conecta con el diseño de compresores, la selección de refrigerantes y la normativa de eficiencia energética.

## Síntesis final

El principio de funcionamiento de refrigeradores y bombas de calor se fundamenta en la imposibilidad termodinámica de la transferencia espontánea de calor del frío al caliente. El trabajo externo [[W]] permite invertir este flujo natural, extrayendo [[Q_C]] del foco frío y entregando [[Q_H]] al foco caliente, con [[Q_H]] siempre mayor que [[Q_C]]. La segunda ley establece el trabajo mínimo necesario (ciclo de Carnot) y la [[Delta_S_total]] cuantifica cuán lejos está el ciclo real de ese ideal. Dominar este principio es requisito previo para comprender el COP, diseñar ciclos eficientes y evaluar el rendimiento de sistemas reales.
