## 1. Control de velocidad en cinta de cassette

Una cinta magnética debe pasar frente al cabezal de lectura/escritura a velocidad lineal constante

{{f:relacion_v_omega}}

. La cinta se enrolla en el carrete receptor, cuyo radio efectivo `R` crece desde

{{f:relacion_v_omega}}

 (carrete casi vacío) hasta

{{f:relacion_v_omega}}

 (carrete casi lleno). Para mantener [[v_t]] constante, el motor del carrete debe reducir su velocidad angular

{{f:relacion_v_omega}}

 a medida que `R` crece: cuando

{{f:relacion_v_omega}}

,

{{f:relacion_v_omega}}

; cuando

{{f:relacion_v_omega}}

,

{{f:relacion_v_omega}}

.

El circuito de control utiliza la relación velocidad lineal-angular invertida para estimar R en tiempo real a partir de la velocidad angular medida con un tacómetro; a partir de R actualiza la referencia de omega del motor. Cualquier desviación de [[v_t]] distorsiona la señal grabada, produciendo variación de tono (wow y flutter).

Variable dominante: [[v_t]] (la velocidad tangencial del punto de contacto cinta-cabezal es la magnitud especificada por el estándar y la que el circuito de control mantiene constante; omega es la variable manipulada para conseguirlo).

Límite de validez: válido mientras la cinta sea inextensible y el carrete sea perfectamente cilíndrico; si la cinta resbala sobre el carrete, R efectivo difiere del geométrico y la corrección de omega produce error sistemático en [[v_t]].

## 2. Diagnosis de desequilibrio en rotor de turbina

Un rotor de turbina de radio

{{f:relacion_v_omega}}

 gira a

{{f:relacion_v_omega}}

. Un acelerómetro radial en el cojinete detecta una señal a la frecuencia de giro de amplitud

{{f:relacion_v_omega}}

. El valor nominal de [[a_n]] es

{{f:relacion_v_omega}}

; la señal de 50 m/s² representa una perturbación relativa del 0,4 %, que corresponde a una excentricidad de masa que genera vibración periódica superimpuesta al estado de equilibrio. La norma ISO 1940 fija límites en desplazamiento de vibración

{{f:relacion_v_omega}}

, dentro del grado G2.5 para maquinaria de precisión.

La clave es que [[a_n]] a esa velocidad es tan elevada que incluso desequilibrios mecánicos pequeños producen aceleraciones absolutas apreciables; el técnico usa la relación de aceleración normal como referencia para interpretar la señal del acelerómetro.

Variable dominante: [[a_n]] (la aceleración normal es el término dominante de la señal vibratoria a velocidad de crucero; el técnico la usa como referencia para separar la respuesta de equilibrio de las perturbaciones por desequilibrio).

Límite de validez: válido para desequilibrio estático sobre eje rígido; si el eje flexiona (modos de flexión), la señal medida incluye componentes que no se modelan con [[a_n]] = omega^2·R del punto geométrico y se necesita análisis modal.

## 3. Verificación de esfuerzo en arranque de ventilador industrial

Las palas de un ventilador industrial de radio

{{f:relacion_at_alpha}}

 deben soportar la aceleración tangencial [[a_t]] durante el arranque. El motor alcanza

{{f:relacion_at_alpha}}

 en

{{f:relacion_at_alpha}}

 desde el reposo, con aceleración angular

{{f:relacion_at_alpha}}

. Usando `relacion_at_alpha`:

{{f:relacion_at_alpha}}

Eso equivale a 1,2 g en la punta de la pala, suficiente para generar esfuerzos significativos en palas de aluminio de gran envergadura. El fabricante debe verificar que la tensión en la raíz de la pala no supere el límite de fatiga. En el arranque, [[a_n]] es pequeña porque omega todavía es baja; es [[a_t]] la que carga mecánicamente la estructura.

Variable dominante: [[a_t]] (durante el arranque, la aceleración tangencial es la que carga mecánicamente la raíz de la pala; [[a_n]] es despreciable al inicio porque omega todavía es baja, pero [[a_t]] ya alcanza su valor máximo).

Límite de validez: válido mientras `alpha` sea constante y la pala sea rígida; si la pala flexiona durante el arranque, la aceleración real en la punta es mayor que la calculada con el modelo rígido y se requiere análisis de elementos finitos.

## 4. Detección de bloqueo de rueda en sistema ABS

El sensor ABS de un automóvil mide la velocidad angular omega de cada rueda con resolución de 0,1 rad/s. El radio nominal de la rueda es

{{f:relacion_v_omega}}

. La unidad de control calcula [[v_t]] = omega × R para cada rueda y las compara entre sí: si una rueda tiene [[v_t]] significativamente menor que las otras, el control detecta bloqueo y libera el freno. A

{{f:relacion_v_omega}}

,

{{f:relacion_v_omega}}

. La resolución en velocidad lineal es

{{f:relacion_v_omega}}

, suficiente para detectar deslizamiento incipiente.

Variable dominante: [[v_t]] - la velocidad tangencial del punto de contacto rueda-asfalto es la magnitud que el sistema ABS compara entre ruedas para decidir si hay bloqueo; omega es el dato medido y [[v_t]] es la magnitud de decisión.

Límite de validez: válido para rueda sin deformación y sin deslizamiento; un pinchazo reduce R y el sistema sobreestima la velocidad real del vehículo. En condiciones de deslizamiento, [[v_t]] de la rueda y la velocidad real del vehículo difieren por definición y el modelo deja de describir el estado del punto de contacto.

## 5. Selección de g efectiva en centrífuga de ensayos de materiales

Un laboratorio necesita someter muestras a

{{f:aceleracion_normal}}

. En régimen estacionario (`alpha` = 0),

{{f:aceleracion_normal}}

 y

{{f:aceleracion_normal}}

 (`aceleracion_total_modulo` se reduce a `aceleracion_normal`). Con un rotor de

{{f:aceleracion_normal}}

:

{{f:aceleracion_normal}}

Con

{{f:aceleracion_total_modulo}}

, se necesita

{{f:aceleracion_total_modulo}}

 para alcanzar la misma [[a_total]]: la mitad de radio exige

{{f:aceleracion_total_modulo}}

veces más velocidad angular. Durante el arranque, [[a_t]] no es cero y [[a_total]] > [[a_n]]; si la muestra es frágil, la aceleración transitoria puede superar la nominal y provocar fractura prematura.

Variable dominante: [[a_total]] (el parámetro especificado por el ensayo es la aceleración efectiva total que soporta la muestra; en régimen permanente coincide con [[a_n]], pero durante los transitorios [[a_t]] contribuye y [[a_total]] excede el valor nominal).

Límite de validez: válido para rotor rígido en régimen estacionario; durante el arranque o el freno, [[a_t]] no es cero y [[a_total]] > [[a_n]], por lo que la muestra experimenta transitoriamente una aceleración superior a la nominal, efecto relevante si la muestra es frágil o si el protocolo exige precisión en la carga aplicada.