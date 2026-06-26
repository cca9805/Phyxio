## Modelo ideal

El modelo ideal de calorimetría trata el sistema como perfectamente aislado del entorno y supone que todos los calores específicos son constantes en el rango de temperatura del proceso y que no se producen cambios de estado en ninguno de los cuerpos. Bajo estas hipótesis, la condición de suma de calores igual a cero es exacta y la temperatura de equilibrio se calcula como media ponderada de las temperaturas iniciales con pesos iguales a las capacidades caloríficas totales [[m_i]] · [[c_i]].

## Hipótesis

- El sistema está térmicamente aislado del entorno: no hay pérdidas de calor al calorímetro, al soporte del experimento ni al aire circundante. En la práctica, esto es una aproximación que depende de la calidad del aislamiento y del tiempo de equilibrio.
- Las capacidades caloríficas [[c_i]] son constantes en el rango de temperatura del proceso. Para la mayoría de los sólidos y líquidos comunes en rangos de temperatura inferiores a 100 K, esta hipótesis introduce errores inferiores al 5 %.
- No se producen cambios de estado en ningún cuerpo durante el proceso. Si algún cuerpo alcanza su punto de fusión o ebullición en el camino hacia [[T_eq]], el modelo ideal falla y debe extenderse.
- El calorímetro propiamente dicho (el recipiente) no absorbe calor significativo. Esta hipótesis es razonable solo si el calorímetro es de paredes gruesas de poliestireno expandido o de vacío, con capacidad calorífica total mucho menor que la de los cuerpos estudiados.
- Los cuerpos del sistema son homogéneos y alcanzan una temperatura uniforme al final del proceso. Se desprecian los gradientes de temperatura internos dentro de cada cuerpo.

## Dominio de validez cuantitativo

Para experimentos de laboratorio con agua y metales a temperatura ambiente (15–95 °C), el modelo ideal es una buena aproximación con error inferior al 5 % en la [[T_eq]] calculada, siempre que:

El tiempo de equilibrio sea superior a un minuto para sistemas de laboratorio estándar (100–500 g de material).

Las pérdidas del calorímetro se estimen en menos del 3 % de la energía total intercambiada, lo que requiere usar calorímetros de poliestireno o de vacío y realizar el experimento en menos de 5 minutos.

Los calores específicos de los materiales se tomen de tablas a temperatura ambiente, lo que es adecuado para rangos de temperatura inferiores a 50 K en metales y 80 K en agua.

El error introducido por ignorar el calorímetro es típicamente de 2–8 % para calorímetros de laboratorio estándar de aluminio (equivalente en agua de unos 20–50 g de agua).

## Señales de fallo del modelo

- **[[T_eq]] medida fuera del rango (T_min, T_max) inicial**: indica pérdidas al entorno o un error experimental sistemático, no una violación de la conservación de energía.
- **La suma de los [[Q_i]] calculados con la [[T_eq]] medida no es cero**: indica que el calor del calorímetro no es despreciable o que hay pérdidas al entorno que no se han corregido.
- **[[c_i]] calculado de un material difiere en más del 10 % del valor tabulado**: indica que alguna de las hipótesis del modelo falla (pérdidas, cambio de estado parcial, error de unidades, o [[c_i]] variable con T en el rango ensayado).
- **El proceso involucra cambio de estado**: si durante el experimento algún cuerpo cambia de fase, la temperatura de equilibrio puede quedar fijada en la temperatura de transición mientras parte del material completa el cambio de estado, y el modelo simple de [[T_eq]] como media ponderada falla.

## Modelo extendido o alternativo

El primer nivel de extensión incorpora el calor absorbido por el propio calorímetro, caracterizado por su equivalente en agua. Esta equivalente se determina experimentalmente en una calibración previa y se suma como un cuerpo adicional al balance energético. Este ajuste reduce el error sistemático del experimento de 5–8 % a menos del 1 % en condiciones de laboratorio cuidadosas.

El segundo nivel de extensión incorpora calores específicos variables con la temperatura, [[c_i]](T), y calcula el calor de cada cuerpo como integral de [[m_i]] · [[c_i]](T) sobre el rango de temperatura. Este nivel es necesario cuando los rangos de temperatura superan los 150 K para metales o cuando se requiere una precisión superior al 2 %.

El tercer nivel incluye los cambios de estado. En ese caso el proceso se divide en etapas: tramos de calor sensible con [[c_i]] constante, separados por tramos de calor latente a temperatura fija. La condición de suma de calores igual a cero se aplica globalmente a la suma de todos los aportes de todas las etapas.

Cuando conviene pasar al modelo extendido: cuando la precisión requerida es superior al 5 %, cuando se trabaja con materiales cuyo [[c_i]] varía significativamente con T, cuando los rangos de temperatura incluyen transiciones de fase, o cuando el calorímetro tiene una equivalente en agua no despreciable (superior al 10 % de la masa total de agua del experimento).

## Comparación operativa

| Aspecto | Modelo ideal | Modelo con corrección del calorímetro | Modelo con cambio de estado |
|---|---|---|---|
| Cálculo de [[T_eq]] | Media ponderada simple | Media ponderada con equivalente en agua adicional | División en etapas |
| Error típico en lab. estándar | 5–10 % | Menos del 2 % | Depende de la etapa |
| Cuando usar | Bachillerato, estimaciones rápidas | Laboratorio de precisión | Procesos multi-fase |
| Variables necesarias | [[m_i]], [[c_i]], temperatura inicial | + equivalente en agua del calorímetro | + calores latentes |
