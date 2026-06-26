## Modelo ideal

El modelo ideal trata la rueda, esfera o cilindro como un sólido rígido que rueda sin deslizar. La decisión estratégica consiste en elegir qué ecuaciones representan mejor la pregunta: condición geométrica, dinámica con [[tau]], energía con [[K_total]] y [[E_total]], o una combinación. El punto de contacto no se desplaza respecto al suelo en el instante de contacto, de modo que [[v_cm]] y [[omega]] quedan conectadas por [[R]].

## Hipótesis

La masa [[m]] se distribuye de forma fija, por lo que [[I]] no cambia durante el movimiento. La gravedad [[g]] es uniforme, el ángulo [[phi]] del plano es constante y el eje de rotación está bien definido. Si se usa [[a_cm]] junto con [[alpha]], se declara la restricción de rodadura. El rozamiento estático puede producir torque sin disipar energía mecánica neta.

## Dominio de validez cuantitativo

Rango cuantitativo explícito: el modelo es razonable para cuerpos rígidos de laboratorio cuando 0.01 m <= [[R]] <= 1.0 m, 0 <= [[phi]] <= 35 grados, las velocidades son no relativistas y las deformaciones son pequeñas. En un plano inclinado, la relación de aceleración en rodadura exige que el rozamiento estático disponible sea suficiente para imponer la restricción. La energía cinética total se usa cuando el reparto entre traslación y rotación es el dato relevante; la energía mecánica total se usa solo si las pérdidas no dominan.

## Señales de fallo del modelo

El modelo falla si la rueda patina, si el contacto rebota, si el eje se desplaza de forma no controlada o si la deformación absorbe energía. También falla si el cálculo exige un rozamiento estático mayor que el máximo disponible. Una señal observable es que el punto de contacto deja una marca de arrastre; otra es que la velocidad angular medida no cumple la relación con la velocidad del centro de masas.

## Modelo extendido o alternativo

Conviene cambiar de modelo cuando aparece deslizamiento, rodadura con pérdidas, deformación del neumático, resistencia del aire o torque externo aplicado. El modelo alternativo puede incluir rozamiento cinético, potencia disipada, radio efectivo variable o ecuaciones diferenciales acopladas. El cambio se justifica por una señal física, no por preferencia algebraica.

Se debe cambiar a modelo alternativo cuando la señal observable contradice la restricción ideal: marca de arrastre, calentamiento, diferencia persistente entre avance y giro o pérdida de energía no explicada.

## Comparación operativa

| Pregunta | Modelo que conviene empezar | Magnitudes de control |
|---|---|---|
| Relacionar avance y giro | Cinemática de rodadura | [[v_cm]], [[omega]], [[R]] |
| Hallar aceleración en plano | Dinámica y torque | [[a_cm]], [[alpha]], [[tau]], [[I]] |
| Hallar rapidez final | Energía | [[K_total]], [[E_total]], [[m]], [[g]] |
| Validar contacto | DCL y rozamiento | [[phi]], normal, rozamiento estático |

La comparación evita un uso mecánico de fórmulas. Si el problema pregunta por una fuerza, energía sola no basta. Si pregunta por rapidez y no hay pérdidas, dinámica completa puede ser innecesaria. Si pregunta por validez de la rodadura, la condición geométrica debe comprobarse con el contacto.