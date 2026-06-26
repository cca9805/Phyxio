const e=`## Modelo ideal

El modelo estándar del calor específico trata [[c]] como una constante del material, independiente de la temperatura, la presión y el estado de agregación. Bajo esta hipótesis, la relación entre el calor transferido, la masa y la variación de temperatura es lineal y permite calcular directamente cualquier de las cuatro variables conocidas las otras tres.

El modelo asume que la energía térmica se distribuye uniformemente en todos los modos de movimiento disponibles de las moléculas del material, que permanecen accesibles e igualmente activos a cualquier temperatura. Esta es la base del teorema de equipartición clásico, cuya validez práctica a temperatura ambiente para sólidos y líquidos está bien establecida.

## Hipótesis

- El calor específico [[c]] es independiente de la temperatura en el rango del proceso. Si el rango de temperatura supera unos 150–200 K para la mayoría de los sólidos, esta hipótesis puede introducir errores superiores al 5 %, especialmente en metales y polímeros.
- El calor específico [[c]] es independiente de la presión. Para sólidos y líquidos a presiones próximas a la atmósfera, la dependencia con la presión es despreciable. Para gases, la distinción entre calor específico a presión constante y a volumen constante es esencial.
- No hay cambio de estado durante el proceso. Si la temperatura cruza el punto de fusión o ebullición, [[c]] cambia abruptamente de valor y además aparece el calor latente de la transición.
- El sistema es homogéneo. Si el sistema contiene varios materiales, se debe usar la capacidad calorífica total como suma de los productos \`m_i · c_i\` de cada componente.
- La masa [[m]] permanece constante durante el proceso. En sistemas con pérdida de masa por evaporación u otras causas, el modelo requiere ajuste.

## Dominio de validez cuantitativo

Para el agua líquida entre 0 °C y 100 °C, la variación de [[c]] es inferior al 1 % respecto al valor de 4186 J/(kg·K). El modelo de [[c]] constante es plenamente válido en este rango.

Para metales como el aluminio, la variación de [[c]] entre 20 °C y 300 °C es de aproximadamente el 15 %, lo que puede ser significativo en cálculos de ingeniería de precisión. En ese rango se recomienda usar un valor promedio o integrar la dependencia tabular.

Para el hielo, [[c]] es aproximadamente 2090 J/(kg·K) entre −40 °C y 0 °C, con una variación inferior al 3 %. Sin embargo, al cruzar los 0 °C hay un cambio de fase y [[c]] pasa abruptamente al valor del agua líquida: el modelo de [[c]] constante no puede aplicarse a través de la transición de fase.

Para gases ideales monoatómicos como el helio, [[c]] a presión constante es exactamente 5R/2 por mol, equivalente a unos 5193 J/(kg·K), y es estrictamente constante en todos los rangos de temperatura. Para gases diatómicos como el nitrógeno, [[c]] depende de la temperatura porque los modos de rotación se activan por encima de temperatura ambiente y los de vibración a temperaturas más altas.

La ley de Dulong-Petit establece que para sólidos metálicos a temperatura ambiente, [[c]] · M ≈ 25 J/(mol·K), donde M es la masa molar. Esta ley predice con menos del 10 % de error los calores específicos de la mayoría de los metales simples a temperatura ambiente.

## Señales de fallo del modelo

- **Calor específico calculado negativo**: indica un error de signo en [[DeltaT]] o [[Q]], no un fallo del modelo. [[c]] siempre es positivo para materiales estables.
- **Calor específico calculado fuera del rango de materiales conocidos**: si el resultado está fuera del intervalo 100–5500 J/(kg·K) para sólidos y líquidos comunes, es probable un error de unidades.
- **Gran discrepancia entre el valor calculado y el tabulado del material**: si la discrepancia supera el 10 % en condiciones estándar, verificar si el proceso cruzó alguna transición de fase o si el rango de temperatura es demasiado amplio para asumir [[c]] constante.
- **[[DeltaT]] que incluye el punto de fusión o ebullición del material**: en ese caso el modelo de [[c]] constante es incompleto y debe sumarse el calor latente de la transición.

## Modelo extendido o alternativo

El modelo extendido incorpora la dependencia del calor específico con la temperatura: [[c]] se trata como una propiedad variable y el calor se calcula acumulando el aporte entre los límites térmicos del proceso. Para sólidos, el modelo de Debye describe esa variación desde cero absoluto hasta temperatura ambiente con excelente precisión, incluyendo la región de baja temperatura donde [[c]] crece como el cubo de la temperatura y el valor clásico de Dulong-Petit a alta temperatura.

Para gases reales y para sólidos y líquidos a rangos de temperatura amplios, los valores de [[c]] se tabulan en función de T y se interpolación. En este caso, el calor total del proceso se calcula como la integral de [[m]] · [[c]](T) entre los límites de temperatura, que en la práctica se aproxima como [[m]] multiplicado por el valor promedio de [[c]] en el rango.

Cuando conviene pasar al modelo extendido: cuando la variación de temperatura supera 150 K para metales o 50 K para materiales con dependencia marcada, cuando el proceso cruza una transición de fase, o cuando la precisión requerida es superior al 5 %.

## Comparación operativa

| Aspecto | Modelo simple (c constante) | Modelo extendido (c variable con T) |
|---|---|---|
| Complejidad de cálculo | Multiplicación directa | Integración tabular o numérica |
| Error típico para agua 0–100 °C | Inferior al 1 % | Referencia exacta |
| Error típico para aluminio 20–300 °C | 10–15 % | Inferior al 2 % |
| Aplicabilidad en transiciones de fase | No aplica en la transición | Requiere calor latente separado |
| Uso recomendado | Bachillerato, ingeniería de estimación | Ingeniería de precisión, termodinámica avanzada |
`;export{e as default};
