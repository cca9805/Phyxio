const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

Una plataforma de ensayo gira con radio efectivo [[r]] y lleva una masa de prueba [[m]] sujeta en posicion fija respecto al disco. El operador recibe la velocidad de giro en [[rpm]] y necesita estimar la fuerza centrifuga [[F_cf]] en el marco no inercial de la plataforma. Ademas, debe comparar el estado inicial y final de operacion para decidir si el incremento de carga sigue dentro de limites seguros.

Se pide:
1. Convertir [[rpm]] a [[omega]].
2. Calcular [[F_cf]] para el estado base.
3. Verificar la consistencia con velocidad tangencial [[v]].
4. Comparar dos estados usando [[omega1]], [[omega2]] y [[ratio]].
5. Interpretar si el cambio de regimen obliga a reducir velocidad.

## Datos

- [[m]] = 12 kg
- [[r]] = 0.45 m
- Estado base: [[rpm]] = 300
- Estado comparado: [[omega1]] corresponde a 300 [[rpm]] y [[omega2]] corresponde a 360 [[rpm]]
- Sistema en regimen cuasiestable durante cada medicion

Los datos se obtienen de una mesa rotatoria de laboratorio con sensores de velocidad y registro de corriente del motor para detectar sobrecarga.

## Definicion del sistema

El sistema fisico es una masa puntual equivalente unida rigidamente a un disco giratorio. El analisis se hace en el marco rotante de la plataforma, donde la magnitud [[F_cf]] sirve para interpretar la demanda mecanica sobre el soporte radial. El objetivo no es derivar toda la dinamica del conjunto motor-disco, sino estimar de forma consistente la carga centrifuga bajo cambios de velocidad.

## Modelo fisico

Se adopta el modelo del leaf para ejemplos de fuerza centrifuga: masa efectiva constante, radio aproximadamente fijo y conversion de unidades disciplinada. El calculo se organiza con cinco relaciones nucleares:

{{f:conversion_rpm}}

{{f:fuerza_centrifuga_base}}

{{f:velocidad_tangencial}}

{{f:factor_por_cambio_omega}}

{{f:criterio_de_aplicacion_conceptual}}

## Justificacion del modelo

El modelo es adecuado porque la plataforma opera en intervalos cortos de velocidad estable, la geometria no cambia de forma apreciable y la masa de prueba esta rigidamente fijada. En estas condiciones, el error dominante suele venir de conversion de unidades o de lectura de velocidad, no de deformaciones estructurales complejas.

Tambien es pertinente el uso de comparacion por [[ratio]]: al mantener [[m]] y [[r]] constantes entre estados, la variacion de carga se gobierna de manera directa por la variacion de velocidad angular. Esto permite una lectura rapida de riesgo sin rehacer un modelo extendido.

## Resolucion simbolica

1. Conversion de velocidad angular a SI desde la lectura en [[rpm]]:

{{f:conversion_rpm}}

2. Fuerza centrifuga base en funcion de [[m]], [[omega]] y [[r]]:

{{f:fuerza_centrifuga_base}}

3. Relacion entre velocidad angular y rapidez tangencial para verificar coherencia:

{{f:velocidad_tangencial}}

4. Comparacion de cargas entre dos estados con [[omega1]] y [[omega2]]:

{{f:factor_por_cambio_omega}}

5. Criterio de aplicacion del marco no inercial:

{{f:criterio_de_aplicacion_conceptual}}

## Sustitucion numerica

Paso A. Conversion de 300 [[rpm]] a rad/s:

[[omega]] = (2*pi*300)/60 = 31.42 rad/s

Paso B. Calculo de fuerza centrifuga base:

[[F_cf]] = 12*(31.42^2)*0.45 = 5328 N aproximadamente

Paso C. Verificacion con velocidad tangencial:

[[v]] = [[omega]]*[[r]] = 31.42*0.45 = 14.14 m/s

La rapidez tangencial obtenida es coherente con el regimen de un banco de ensayo de este tipo.

Paso D. Comparacion entre estado inicial y final:

[[omega1]] = 31.42 rad/s

[[omega2]] = (2*pi*360)/60 = 37.70 rad/s

[[ratio]] = ([[omega2]]/[[omega1]])^2 = (37.70/31.42)^2 = 1.44

Interpretacion numerica: al subir 20 por ciento en velocidad angular, la carga centrifuga crece 44 por ciento.

## Validacion dimensional

- En la conversion de [[rpm]] a [[omega]], el resultado final queda en rad/s.
- En [[F_cf]] = [[m]]*[[omega]]^2*[[r]], las unidades producen newtons.
- En la relacion tangencial, [[v]] queda en m/s.
- En [[ratio]], la magnitud es adimensional.

No hay inconsistencias de unidades en la cadena de calculo.

## Interpretacion fisica

La conclusion fisica principal es que el sistema es altamente sensible a la velocidad angular. El operador podria pensar que un aumento moderado de velocidad tiene un impacto moderado en carga; sin embargo, el termino cuadratico hace que el crecimiento sea mucho mayor. Este resultado no es solo numerico: redefine el margen operativo del soporte y del sistema de sujecion.

Ademas, la lectura por [[ratio]] permite comunicar riesgo de forma clara al equipo de mantenimiento. En lugar de reportar solo dos fuerzas, se informa que la nueva condicion exige 1.44 veces la carga del estado base. Esa expresion es util para decidir si continuar, limitar velocidad o redimensionar componentes.

Desde el punto de vista de validez de modelo, la interpretacion sigue siendo confiable mientras [[r]] no cambie de manera relevante y la medicion de velocidad sea estable. Si aparecieran vibraciones, desalineacion o variaciones geometricas, el mismo valor de [[omega]] podria corresponder a una distribucion de cargas distinta y se requeriria modelo extendido.

La lectura fisica clave es causal: si aumenta [[omega]], aumenta de manera desproporcionada la exigencia radial sobre fijaciones y rodamientos, y por lo tanto disminuye el margen antes de que aparezcan sintomas de fatiga. Esta cadena causa-efecto permite decidir acciones concretas: limitar regimen, programar inspeccion temprana o redisenar soporte. El objetivo no es decorar el calculo, sino convertirlo en criterio operativo verificable.

# Ejemplo de aplicacion real

## Contexto

Una centrifuga de proceso en una planta de alimentos opera con canastilla de radio equivalente [[r]] = 0.62 m y carga total [[m]] = 38 kg. El controlador permite dos perfiles: perfil economico a 420 [[rpm]] y perfil intensivo a 560 [[rpm]]. El supervisor necesita decidir si el perfil intensivo puede usarse de forma continua sin acelerar desgaste del sistema de soporte.

## Estimacion fisica

Primero se convierte cada velocidad a [[omega]] para trabajar en SI. Luego se estima [[F_cf]] en ambos casos y se usa [[ratio]] para leer el salto relativo de carga.

Para 420 [[rpm]]:

[[omega1]] = (2*pi*420)/60 = 43.98 rad/s

Resultado estimado para el primer estado: alrededor de 45600 N.

Para 560 [[rpm]]:

[[omega2]] = (2*pi*560)/60 = 58.64 rad/s

Resultado estimado para el segundo estado: alrededor de 81000 N.

Comparacion:

[[ratio]] = ([[omega2]]/[[omega1]])^2 = (58.64/43.98)^2 = 1.78

La carga centrifuga sube cerca de 78 por ciento al pasar del perfil economico al intensivo.

## Interpretacion

Este caso muestra por que el control de velocidad es la palanca dominante de seguridad mecanica. El cambio de 420 a 560 [[rpm]] parece moderado en tablero, pero la demanda sobre el soporte radial crece de forma no lineal y puede acelerar fatiga en rodamientos y uniones.

La decision tecnica no depende solo de si el equipo puede alcanzar 560 [[rpm]], sino de si puede sostener ese regimen con margen termico y mecanico. Si la inspeccion historica ya muestra desgaste acelerado, la lectura de [[ratio]] sugiere mantener operacion continua en el perfil economico y reservar el intensivo para lotes puntuales.

La utilidad del leaf en campo es precisamente esa: convertir medicion de velocidad en lectura causal de carga y riesgo, con criterios comparables entre turnos de operacion.

Adicionalmente, esta interpretacion permite priorizar acciones. Si la operacion exige aumentar [[rpm]], la primera decision no deberia ser solo aceptar o rechazar el nuevo setpoint, sino evaluar si el incremento de [[ratio]] mantiene margen de seguridad en anclajes, rodamientos y estructura. Esta lectura transforma un numero en una estrategia: controlar variable dominante, vigilar sintomas tempranos y ajustar regimen antes de entrar en zona de dano acelerado.

Una lectura fisica madura no termina al reportar fuerza calculada. Debe explicar por que cambia la demanda mecanica, que elemento del sistema recibe primero ese aumento y que consecuencia operativa aparece si no se corrige el regimen. Ese cierre causal conecta directamente teoria, ejemplo y decision real.

Si el operador ignora esta cadena causal, puede mantener una condicion aparentemente estable que en realidad acelera dano por ciclos repetidos. Por eso, interpretar significa anticipar comportamiento, no solo describir un valor.

Tambien debe quedar explicito el mecanismo dominante: en este leaf, el crecimiento de carga esta gobernado por el termino cuadratico de [[omega]], no por una variacion lineal simple. Eso implica que una politica de control basada solo en incrementos pequenos de tablero puede ser enganosa. Si la velocidad aumenta en varios pasos cortos sin revisar [[ratio]] y sintomas de fatiga, el sistema puede cruzar un umbral de degradacion sin una alarma evidente en la lectura instantanea. Esta conclusion es fisica, no contable: explica por que el mismo valor de masa y radio puede llevar a escenarios de riesgo distintos cuando cambia el regimen de giro.
`;export{e as default};
