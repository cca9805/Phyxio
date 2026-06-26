const e=`## Modelo ideal\r
\r
El modelo ideal del pendulo fisico supone un cuerpo rigido con masa total [[m]] que oscila alrededor de un eje fijo. La distribucion de masa se resume mediante [[I]] respecto a ese eje. El torque gravitatorio efectivo se controla con [[g]] y [[d]], donde [[d]] es la distancia entre eje y centro de masas. En este esquema no se permite deslizamiento del soporte ni deformacion interna apreciable del cuerpo.\r
\r
La utilidad del modelo ideal es operativa: permite predecir [[T]], [[f]] y [[omega0]] con relaciones compactas y comparar de forma directa con observaciones temporales de [[theta]]. Cuando la amplitud inicial es moderada, el ajuste suele ser robusto y didacticamente transparente.\r
\r
## Hipótesis\r
\r
Las hipotesis principales son cuatro. Primera, el eje de giro es fijo y estable durante todo el experimento. Segunda, el cuerpo mantiene rigidez suficiente para que [[I]] no cambie en el intervalo de analisis. Tercera, la amplitud es lo bastante pequena para que la linealizacion angular sea util cuando se calculan [[omega0]] y [[T]]. Cuarta, las perdidas por friccion y arrastre no dominan la dinamica de corto plazo.\r
\r
Estas hipotesis no son adornos. Si cambian, la lectura fisica del resultado cambia. Por ejemplo, una union elastica en el soporte altera la respuesta y puede simular un cambio ficticio en [[I]]. Del mismo modo, friccion elevada puede sesgar la estimacion de [[T]] cuando se mide con pocos ciclos.\r
\r
## Dominio de validez cuantitativo\r
\r
Como criterio cuantitativo de referencia para practicas de aula, el modelo lineal suele funcionar bien para amplitudes iniciales de [[theta]] menores que 0.35 rad y para variaciones relativas del periodo por amplitud por debajo del 5%. Si al duplicar amplitud el [[T]] medido cambia mas de 5%, conviene abandonar la lectura lineal estricta.\r
\r
Otro criterio cuantitativo es de consistencia de parametros: [[I]] > 0, [[m]] > 0, [[d]] > 0 y [[g]] > 0. En equipos reales, [[d]] muy cercano a 0.01 m vuelve el sistema sensible a incertidumbre geometrica y el error relativo en [[T]] puede escalar por encima de 10% con metrologia basica. Con [[I]] entre 0.01 y 1 kg*m^2 y [[m]] entre 0.1 y 5 kg, los periodos esperables suelen caer entre 0.3 s y 6 s.\r
\r
## Señales de fallo del modelo\r
\r
La primera senal de fallo aparece cuando [[T]] deja de ser estable frente a cambios de amplitud. La segunda surge cuando los residuos entre medicion y prediccion muestran sesgo sistematico en una direccion, no ruido aleatorio. La tercera ocurre si la senal temporal de [[theta]] presenta deformaciones persistentes incompatibles con oscilacion casi armonica.\r
\r
Tambien hay senales geometricas: si el eje real no coincide con el asumido, el [[I]] usado en calculo deja de representar el sistema. En ese escenario, la calibracion por ensayo puede parecer consistente en un punto pero fracasar al cambiar configuracion. Detectar estas senales temprano evita sobreajustar parametros sin significado fisico.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando la amplitud no es pequena, el modelo extendido conserva la ecuacion angular no lineal y trabaja con integracion numerica o aproximaciones de mayor orden. Este paso permite describir dependencias de [[T]] con amplitud y ajustar mejor datos experimentales alejados del regimen lineal.\r
\r
cuando conviene cambiar a modelo alternativo: si el cambio relativo de [[T]] supera 5% al comparar dos amplitudes iniciales distintas bajo el mismo montaje, se abandona el modelo lineal y se adopta el modelo no lineal como base operativa.\r
\r
Otro alternativo incluye amortiguamiento viscoso efectivo. Aunque el leaf actual no centra su calculadora en perdida energetica, en contexto experimental puede ser necesario para explicar decaimiento de envolvente y desplazamiento de fase. Si aparece excitacion externa periodica, el problema transita hacia oscilador forzado y requiere comparar frecuencia de excitacion con [[f]] natural.\r
\r
## Comparación operativa\r
\r
Comparar modelos no es elegir el mas complejo, sino el mas informativo bajo datos disponibles. El modelo lineal es preferible cuando cumple criterios cuantitativos y permite estimaciones rapidas de [[T]] y [[omega0]] con trazabilidad clara. El modelo no lineal gana cuando la amplitud rompe la linealizacion y se necesita precision adicional.\r
\r
Regla practica: empieza por el modelo ideal, verifica criterios, y escala complejidad solo si los residuos y pruebas de coherencia lo exigen. Esta estrategia mantiene interpretabilidad, evita sobreparametrizacion y mejora la calidad de decisiones de diseno o de laboratorio.`;export{e as default};
