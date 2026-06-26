# Ejemplo tipo examen


## Enunciado

Un interruptor de pared controla un calefactor electrico de [[potencia_de_la_carga]] = 2000 W en una instalacion de [[tension_de_alimentacion]] = 230 V. Tras varios anos de uso, el interruptor presenta la carcasa caliente al tacto. Se mide [[resistencia_en_estado_on]] = 0,08 ohm con un ohmimetro de resolucion mili-ohm. El interruptor opera [[t_on]] = 6 horas al dia en invierno. Calcular [[corriente_de_maniobra]], [[perdida_resistiva_en_on]] y [[energia_disipada_en_conduccion]] diaria, y evaluar el riesgo termico.

## Datos

La carga tiene una potencia [[potencia_de_la_carga]] en el orden de los kilowatios. La instalacion opera a tension [[tension_de_alimentacion]] nominal europea. La resistencia del contacto [[resistencia_en_estado_on]] fue medida con instrumento de precision. El tiempo diario de conduccion [[t_on]] es de varias horas. Las magnitudes de resultado son [[perdida_resistiva_en_on]] para el diagnostico de riesgo termico y [[energia_disipada_en_conduccion]] para el analisis energetico del periodo.

## Definición del sistema

El sistema fisico es el interruptor como elemento resistivo en estado ON. La carga (calefactor) es externa al sistema de analisis: su funcion es fijar [[corriente_de_maniobra]] a traves del interruptor. El modelo aplicado es la ley de Joule localizada en el contacto del interruptor, con resistencia [[resistencia_en_estado_on]] como parametro de estado del contacto.

## Modelo físico

El interruptor real se modela como una resistencia [[resistencia_en_estado_on]] en serie con la carga. Al conducir [[corriente_de_maniobra]], disipa [[perdida_resistiva_en_on]] proporcional al cuadrado de [[corriente_de_maniobra]] y a [[resistencia_en_estado_on]]. Durante [[t_on]], la energia total disipada es [[energia_disipada_en_conduccion]]. Las tres formulas del leaf describen completamente este comportamiento para carga resistiva en regimen permanente.

## Justificación del modelo

Se aplica el modelo resistivo estatico porque la carga es resistiva pura (calefactor), el regimen es permanente y [[resistencia_en_estado_on]] es constante. Las hipotesis son validas: factor de potencia unitario, regimen permanente, sin transitorios de arranque. El modelo no es aplicable si la carga fuera inductiva o si el interruptor ciclara frecuentemente.

## Resolución simbólica

[[corriente_de_maniobra]] del interruptor se obtiene aplicando:

{{f:corriente}}

[[perdida_resistiva_en_on]] en el contacto se obtiene aplicando:

{{f:perdida_on}}

[[energia_disipada_en_conduccion]] durante la conduccion se obtiene aplicando:

{{f:energia_on}}

## Sustitución numérica

Sustituyendo los datos del enunciado en las formulas simbolicas: [[corriente_de_maniobra]] es igual a 8,70 A, [[perdida_resistiva_en_on]] es igual a 6,05 W y [[energia_disipada_en_conduccion]] es igual a 130680 J equivalente a 36,3 Wh por dia.

## Validación dimensional

Las dimensiones son coherentes en todas las formulas del leaf: [[corriente_de_maniobra]] se expresa en amperios, [[perdida_resistiva_en_on]] se expresa en vatios, [[energia_disipada_en_conduccion]] se expresa en julios. La dependencia cuadratica de [[perdida_resistiva_en_on]] en [[corriente_de_maniobra]] es correcta dimensionalmente porque el cuadrado de amperios multiplicado por ohmios da vatios.

## Interpretación física

El valor de [[perdida_resistiva_en_on]] obtenido supera el umbral de riesgo de 5 W establecido para interruptores domesticos. La carcasa caliente al tacto es la senal observable que confirma la disipacion local elevada. La causa fisica es [[resistencia_en_estado_on]] elevada — el doble del valor tipico de un interruptor nuevo de esta gama. La recomendacion es sustituir el interruptor. La energia acumulada [[energia_disipada_en_conduccion]] equivale a varios kWh por temporada de invierno disipados exclusivamente en el contacto del interruptor, energia convertida a calor en el dispositivo de maniobra y no en la carga util. Este ejemplo ilustra un principio general del diagnostico electrico: la carcasa caliente al tacto no indica sobrecarga del circuito (el magnetotermico no actua porque [[corriente_de_maniobra]] esta dentro del calibre), sino degradacion termica local del contacto del interruptor con [[resistencia_en_estado_on]] excesiva. El diagnostico correcto requiere medir [[resistencia_en_estado_on]] y calcular [[perdida_resistiva_en_on]], no solo observar si [[corriente_de_maniobra]] esta dentro del nominal.

---

# Ejemplo de aplicación real


## Contexto

Una instalacion domestica tiene un termostato que controla una bomba de calefaccion de [[potencia_de_la_carga]] = 800 W a [[tension_de_alimentacion]] = 230 V. El termostato cicla aproximadamente 8 veces por hora y opera 10 horas al dia. La carga es inductiva. Evaluar el riesgo termico del termostato con [[resistencia_en_estado_on]] = 0,05 ohm.

## Estimación física

Aplicando las formulas del leaf: [[corriente_de_maniobra]] = 3,48 A con [[potencia_de_la_carga]] = 800 W y [[tension_de_alimentacion]] = 230 V. Con [[resistencia_en_estado_on]] = 0,05 ohm, [[perdida_resistiva_en_on]] = 0,61 W — zona de vigilancia, no de riesgo inmediato. Con ciclo de trabajo del 50 por ciento y [[t_on]] correspondiente, [[energia_disipada_en_conduccion]] diaria es de aproximadamente 3 Wh. La naturaleza inductiva de la carga implica picos de [[corriente_de_maniobra]] de arranque varias veces superiores al valor nominal durante arranques breves, lo que puede degradar el contacto por arco aunque la [[perdida_resistiva_en_on]] estatica sea baja.

## Interpretación

El modelo estatico da como resultado [[perdida_resistiva_en_on]] baja — riesgo termico reducido en regimen permanente. Sin embargo, el numero de maniobras diarias es el factor limitante de la vida util del termostato, no el calentamiento estacionario. La magnitud diagnostica correcta para este caso es el numero acumulado de operaciones, no [[perdida_resistiva_en_on]] ni [[energia_disipada_en_conduccion]] estaticas. Este es el limite del modelo estatico: es valido para el diagnostico termico en regimen permanente pero no para predecir la degradacion por arco en cargas inductivas con ciclado frecuente. El modelo extendido, que incluye los picos de [[corriente_de_maniobra]] en arranque y el conteo de maniobras, es necesario para predecir la vida util en este tipo de instalacion. La transicion del modelo estatico al modelo extendido se produce cuando los sintomas de degradacion (aumento de [[resistencia_en_estado_on]] medida, chispas en la maniobra) no son explicables por el calentamiento estacionario calculado con [[perdida_resistiva_en_on]].