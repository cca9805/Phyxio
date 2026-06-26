const e=`## Modelo ideal

El modelo ideal de la fuerza de Lorentz en este leaf es el **modelo de carga puntual no relativista en campos uniformes**. En este modelo, la partícula cargada se trata como un punto sin extensión espacial, los campos [[E]] y [[B]] son uniformes en la región de interés y la velocidad [[v]] es mucho menor que la velocidad de la luz. La fuerza total [[F_L]] se calcula como la suma de la componente eléctrica y la magnética en el instante de evaluación.

Este modelo ignora la reacción de la partícula sobre los campos (retroacción de radiación), la extensión finita de la partícula, los efectos cuánticos y las correcciones relativistas. Es el modelo estándar de toda la electrodinámica clásica de partículas.

## Hipótesis

- **Partícula puntual**: la carga [[q]] está concentrada en un punto. Consecuencia de violarla: hay que usar la distribución de carga extendida y calcular la fuerza sobre cada elemento de volumen; el resultado puede diferir significativamente para geometrías no simétricas.
- **Campos uniformes**: [[E]] y [[B]] son constantes en la región donde se mueve la partícula. Consecuencia de violarla: la trayectoria se complica y en general no es circular ni helicoidal; hay que integrar las ecuaciones de movimiento numéricamente.
- **Régimen no relativista**: [[v]] << c. Consecuencia de violarla: la masa efectiva de la partícula aumenta con el factor de Lorentz, la fuerza magnética cambia y la trayectoria circular tiene radio diferente al calculado con masa en reposo.
- **Sin retroacción de radiación**: la partícula acelerada no irradia energía electromagnética. Consecuencia de violarla: la partícula pierde energía por radiación (frenado de Larmor); la trayectoria circular se espirala hacia adentro. En la mayoría de los problemas de nivel BACHILLERATO y UNIVERSIDAD introductoria esta corrección es despreciable.
- **Carga constante**: [[q]] no cambia con el tiempo ni con [[v]]. Consecuencia de violarla: en plasma de alta energía o en presencia de reacciones nucleares la carga puede cambiar; el modelo no se aplica directamente.

## Dominio de validez cuantitativo

El modelo es válido cuando [[v]] es menor del 10 % de c (aproximadamente 3×10⁷ m/s), rango en el que las correcciones relativistas son menores del 1 %. Para electrones en un tubo de vacío con tensiones de aceleración menores de 2.5 kV, [[v]] < 0.1c y el modelo clásico es correcto. Por encima de 25 kV para electrones, las correcciones relativistas superan el 1 % y el modelo empieza a introducir errores apreciables.

Para la hipótesis de campo uniforme: válida cuando las dimensiones de la región de campo son mucho mayores que el recorrido libre de la partícula. En el espectrómetro de masas, el campo magnético se diseña para ser uniforme en la región de la trayectoria semicircular; desviaciones mayores del 0.1 % del campo afectan la precisión de la medida de masa.

## Señales de fallo del modelo

- **[[F_m]] crece sin límite al aumentar [[v]]**: el modelo clásico no tiene límite superior de velocidad; si se obtienen velocidades próximas a c, el modelo falla y hay que usar la masa relativista.
- **La trayectoria no cierra el círculo esperado**: en un espectrómetro real, la no uniformidad de [[B]] provoca que el radio varíe a lo largo de la trayectoria, y la partícula no llega al detector esperado.
- **La partícula pierde energía aunque solo actúe el campo magnético**: señal de retroacción de radiación, efecto no contemplado en el modelo básico.
- **[[F_E]] varía a lo largo de la trayectoria**: indica que el campo eléctrico no es uniforme; las líneas de campo tienen curvatura significativa en la región de movimiento y el modelo de campo uniforme falla.

## Modelo extendido o alternativo

El modelo extendido es el **modelo relativista de la fuerza de Lorentz**, donde la masa en la segunda ley de Newton se reemplaza por la masa relativista, dependiente del factor de Lorentz. La expresión de la fuerza conserva la misma forma en términos del cuadrivector, pero el momento cinético de la partícula ya no es simplemente masa en reposo multiplicada por [[v]].

La diferencia concreta: el radio de la trayectoria circular en un campo magnético ya no es proporcional a [[v]] sino al momento relativista de la partícula. Para velocidades relativistas, el radio crece más lentamente que [[v]] porque el momento aumenta con el factor de Lorentz.

Cambiar al modelo relativista cuando la energía cinética de la partícula es comparable a su energía en reposo (masa por c al cuadrado). Para electrones esto ocurre a velocidades mayores del 30 % de c; para protones, a velocidades mayores del 10 % de c en aceleradores de alta energía.

## Comparación operativa

| Criterio | Modelo clásico | Modelo relativista |
|---|---|---|
| Complejidad | Baja: fórmulas algebraicas | Alta: corrección con factor de Lorentz |
| Validez de velocidad | v << c (error < 1 % para v < 0.1c) | Válido para cualquier v < c |
| Radio de trayectoria circular | Proporcional a v/B | Proporcional al momento relativista |
| Variables necesarias | [[q]], [[v]], [[B]], [[E]], [[sin_theta]] | Las mismas más la energía cinética relativista |
| Uso típico | Laboratorio, espectrómetros de baja energía | Aceleradores de partículas, física nuclear |
`;export{e as default};
