# Ejemplo tipo examen


## Enunciado

Un protón (carga [[carga_electrica]] aproximadamente 1.602×10⁻¹⁹ C, masa aproximadamente 1.673×10⁻²⁷ kg) entra en una región donde hay un campo eléctrico de 2×10⁴ V/m y un campo magnético de 0.05 T, ambos perpendiculares entre sí y perpendiculares a la dirección inicial de movimiento del protón. La velocidad inicial del protón es de 4×10⁵ m/s.

Calcular: (a) la fuerza magnética [[fuerza_magnetica]] sobre el protón, (b) la fuerza eléctrica [[fuerza_electrica]], (c) la fuerza de Lorentz total [[fuerza_de_lorentz]] cuando ambas fuerzas actúan en la misma dirección, (d) la velocidad a la que [[fuerza_de_lorentz]] sería nula (velocidad de selección de Wien).

## Datos

- Carga: [[carga_electrica]] aproximadamente 1.602×10⁻¹⁹ C
- Velocidad: [[velocidad_de_la_particula]] aproximadamente 4×10⁵ m/s
- Campo eléctrico: [[campo_electrico]] aproximadamente 2×10⁴ V/m
- Campo magnético: [[campo_magnetico]] aproximadamente 0.05 T
- [[sin_theta]] igual a 1 (velocidad perpendicular al campo magnético)
- El campo eléctrico y el magnético son perpendiculares entre sí

## Definición del sistema

El sistema es un protón moviéndose en una región con campos cruzados. Se trabaja en régimen no relativista (verificar: 4×10⁵ m/s es aproximadamente 0.13 % de c, muy inferior al 10 %, el modelo clásico es válido). En el apartado (d), el sistema es el mismo pero la velocidad es la incógnita que hace [[fuerza_de_lorentz]] nula.

## Modelo físico

Se aplica el **modelo de carga puntual no relativista en campos uniformes**. La magnitud dominante es [[fuerza_de_lorentz]], resultado de sumar vectorialmente [[fuerza_electrica]] y [[fuerza_magnetica]]. El factor [[sin_theta]] igual a 1 indica que [[velocidad_de_la_particula]] es perpendicular a [[campo_magnetico]], lo que maximiza [[fuerza_magnetica]].

## Justificación del modelo

El modelo clásico es válido porque [[velocidad_de_la_particula]] representa apenas el 0.13 % de c, muy por debajo del umbral del 10 % donde las correcciones relativistas superan el 1 %. Los campos se asumen uniformes en la región del problema. La fuerza de Lorentz sobre un protón es miles de veces superior a la gravitatoria, por lo que la gravedad se desprecia.

## Resolución simbólica

Para la componente magnética, aplicar la fórmula del módulo:

{{f:fuerza_magnetica_modulo}}

Para la fuerza de Lorentz total con ambas componentes en la misma dirección:

{{f:fuerza_lorentz_total}}

Para la velocidad de selección (apartado d), se impone que [[fuerza_de_lorentz]] sea cero: la componente eléctrica y la magnética se cancelan. Eso requiere que [[carga_electrica]]·[[campo_electrico]] sea igual a [[carga_electrica]]·[[velocidad_de_la_particula]]·[[campo_magnetico]]·[[sin_theta]], de donde [[velocidad_de_la_particula]] de selección resulta del cociente de [[campo_electrico]] entre [[campo_magnetico]] (el factor [[carga_electrica]] se cancela).

## Sustitución numérica

Apartado (a) — Fuerza magnética: multiplicar 1.602×10⁻¹⁹ C por 4×10⁵ m/s por 0.05 T por 1. El resultado es aproximadamente 3.20×10⁻¹⁵ N. Por tanto [[fuerza_magnetica]] es aproximadamente 3.20×10⁻¹⁵ N.

Apartado (b) — Fuerza eléctrica: multiplicar 1.602×10⁻¹⁹ C por 2×10⁴ V/m. El resultado es aproximadamente 3.20×10⁻¹⁵ N. Por tanto [[fuerza_electrica]] es aproximadamente 3.20×10⁻¹⁵ N.

Apartado (c) — Fuerza total con ambas en la misma dirección: sumar [[fuerza_electrica]] y [[fuerza_magnetica]]. El resultado es aproximadamente 6.40×10⁻¹⁵ N. [[fuerza_de_lorentz]] es aproximadamente 6.40×10⁻¹⁵ N.

Apartado (d) — Velocidad de selección: dividir [[campo_electrico]] entre [[campo_magnetico]]. El cociente de 2×10⁴ V/m entre 0.05 T da 4×10⁵ m/s. La velocidad de selección es exactamente la velocidad inicial del protón: con estos valores, [[fuerza_de_lorentz]] es en realidad cero cuando [[fuerza_electrica]] y [[fuerza_magnetica]] son opuestas.

## Validación dimensional

Para [[fuerza_magnetica]]: C · (m/s) · T da C · (m/s) · (kg/(A·s²)) que resulta en kg·m/s², es decir N ✓.
Para [[fuerza_electrica]]: C · (V/m) da C · (J/(C·m)) que resulta en J/m, es decir N ✓.

## Interpretación física

El resultado del apartado (b) revela que, con estos valores, [[fuerza_electrica]] y [[fuerza_magnetica]] son iguales en módulo: aproximadamente 3.20×10⁻¹⁵ N cada una. Esto indica que el enunciado fue construido para que la velocidad inicial sea exactamente la velocidad de selección de Wien (4×10⁵ m/s), lo que físicamente significa el equilibrio exacto entre las dos componentes de [[fuerza_de_lorentz]]. Cuando ambas fuerzas actúan en la misma dirección (apartado c), la fuerza total es el doble de cada componente: 6.40×10⁻¹⁵ N. Cuando actúan en direcciones opuestas (apartado d), se cancelan exactamente y [[fuerza_de_lorentz]] es nula.

Esta dualidad ilustra el principio del selector de velocidades: la misma partícula con la misma velocidad puede experimentar una fuerza total grande o nula dependiendo de cómo se orienten los campos. La velocidad de selección de Wien es 4×10⁵ m/s, que corresponde exactamente al cociente de [[campo_electrico]] entre [[campo_magnetico]]: 2×10⁴ V/m dividido entre 0.05 T. Esta relación es independiente de [[carga_electrica]]: cualquier ion que llegue a esta velocidad, sea un protón o un catión complejo, atraviesa el selector en línea recta.

En términos de orden de magnitud, la fuerza de 3.20×10⁻¹⁵ N sobre el protón es enorme comparada con su peso (aproximadamente 1.64×10⁻²⁶ N): la razón supera 10¹¹. Esto explica por qué en física de partículas se ignora completamente la gravedad y se trabaja solo con las fuerzas electromagnéticas. Cada vez que [[velocidad_de_la_particula]] se duplica manteniendo los campos constantes, la diferencia entre [[fuerza_magnetica]] y [[fuerza_electrica]] se duplica, y la partícula experimenta una fuerza neta creciente que la desvía de la trayectoria recta del selector.

---

# Ejemplo de aplicación real


## Contexto

El espectrómetro de masas de sector magnético usa la fuerza de Lorentz para separar iones de diferentes masas. Los iones se aceleran primero por un campo eléctrico hasta una energía cinética definida y luego entran en un sector magnético donde el campo [[campo_magnetico]] es perpendicular a su velocidad. La fuerza magnética actúa como fuerza centrípeta y cada ion describe un arco semicircular cuyo radio depende de su relación masa-carga.

En un espectrómetro de sector magnético de laboratorio, se usa un campo de 0.5 T. Los iones de carbono-12 (masa aproximadamente 12 uma, es decir aproximadamente 2×10⁻²⁶ kg, con carga [[carga_electrica]] igual a 1.602×10⁻¹⁹ C) se aceleran hasta una energía cinética determinada antes de entrar al sector magnético.

## Estimación física

En el sector magnético, [[fuerza_magnetica]] actúa como fuerza centrípeta. La condición de equilibrio entre la fuerza centrípeta y [[fuerza_magnetica]] permite calcular el radio de la trayectoria. Para un ion de carbono-12 con [[carga_electrica]] igual a 1.602×10⁻¹⁹ C, masa de 2×10⁻²⁶ kg, acelerado por una tensión de 1000 V, la velocidad al entrar al sector es aproximadamente 1.26×10⁵ m/s. Con [[campo_magnetico]] igual a 0.5 T y [[sin_theta]] igual a 1, la fuerza magnética que actúa como centrípeta vale aproximadamente 1.01×10⁻¹⁴ N. El radio de la trayectoria semicircular resulta aproximadamente 3.2 mm.

Para el isótopo carbono-13, la masa es aproximadamente 2.16×10⁻²⁶ kg. Tras la misma aceleración de 1000 V, la velocidad de entrada es algo menor (aproximadamente 1.21×10⁵ m/s) y el radio de la semicircunferencia es aproximadamente 3.3 mm. La diferencia de radios entre carbono-12 y carbono-13 es de aproximadamente 0.1 mm, diferencia que los detectores modernos resuelven con facilidad y que es la base de la medición de masas isotópicas con precisión de partes por millón.

Esta estimación muestra que [[fuerza_magnetica]] controla el radio con precisión: a igual [[carga_electrica]] y [[campo_magnetico]], el radio es proporcional al momento lineal del ion, que depende de la raíz cuadrada de la masa para energías cinéticas iguales. Por eso el espectrómetro puede distinguir isótopos que difieren en un solo neutrón: pequeñas diferencias de masa producen diferencias medibles en el radio de curvatura.

## Interpretación

La clave del espectrómetro es que [[fuerza_magnetica]] actúa como fuerza centrípeta sin hacer trabajo: el ion no pierde ni gana energía cinética al recorrer el arco. Su velocidad [[velocidad_de_la_particula]] entra en el sector magnético y sale del sector magnético con exactamente el mismo módulo. Lo único que cambia es la dirección: el ion ha girado exactamente 180° y llega al detector en una posición determinada por su radio de curvatura.

El límite de validez del modelo en este contexto es la precisión del campo magnético. Si [[campo_magnetico]] varía en un 0.01 % a lo largo de la trayectoria, el radio varía en el mismo porcentaje, lo que afecta la resolución de masas del instrumento. En espectrómetros de alta resolución, los imanes se diseñan con bobinas de corrección para mantener [[campo_magnetico]] uniforme al nivel de partes por millón en la región de la trayectoria.