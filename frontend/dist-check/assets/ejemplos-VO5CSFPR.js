const e=`# Ejemplo tipo examen

## Enunciado
Una rama predominantemente inductiva de laboratorio se conecta a una fuente AC estable. Se conocen inductancia nominal, frecuencia de operacion y tension eficaz de linea. Se pide estimar oposicion inductiva, corriente eficaz de rama y magnitud de potencia reactiva, justificando hipotesis y validando consistencia de unidades.

## Datos
El caso se resuelve con una inductancia [[L]] de ciento ochenta milihenrios, frecuencia [[f]] de cincuenta hertz y tension eficaz [[V]] de doscientos treinta voltios. El ejercicio asume comportamiento lineal de la bobina en el rango de trabajo y regimen sinusoidal estacionario.

## Definición del sistema
El sistema es una rama inductiva unica conectada a fuente ideal de frecuencia fija. El interes no esta en el transitorio de conexion, sino en respuesta periodica estable. La magnitud de oposicion es [[Xl]], la de corriente eficaz es [[Il]] y la de intercambio reactivo es [[Ql]].

## Modelo físico
Se adopta modelo de bobina ideal sin perdidas dominantes, con frecuencia estable y magnitudes RMS coherentes en tension y corriente. Este modelo vincula escala temporal de excitacion con oposicion de rama, y la oposicion con exigencia de corriente.

## Justificación del modelo
El modelo se justifica porque el caso no reporta distorsion severa, ni saturacion magnetica cercana, ni temperatura extrema. Ademas, los datos corresponden a operacion nominal de banco, donde la aproximacion lineal es razonable para calculo didactico y chequeo de orden de magnitud.

## Resolución simbólica
La oposicion inductiva ideal se calcula con:

{{f:reactancia_inductiva}}

La conversion de frecuencia ordinaria a frecuencia angular se obtiene con:

{{f:omega_f}}

La corriente de rama se calcula con:

{{f:corriente_inductiva}}

La magnitud de potencia reactiva se resume con:

{{f:reactiva_inductiva}}

## Sustitución numérica
Primero se expresa [[L]] en henrios. Con [[f]] de cincuenta hertz, la conversion entrega [[omega]] del orden de centenas de radianes por segundo. Esa escala conduce a [[Xl]] en decenas de ohmios, coherente con una rama de algunas decimas de henrio a frecuencia industrial.

Con [[V]] eficaz de doscientos treinta voltios y la reactancia obtenida, la corriente [[Il]] resulta del orden de amperios. Luego, al combinar [[V]] e [[Il]], la magnitud [[Ql]] queda en el rango de centenas de var segun redondeo y convencion de reporte. El punto pedagogico no es el ultimo decimal, sino la consistencia causal entre entradas, oposicion y respuesta.

## Validación dimensional
La validacion dimensional confirma coherencia en toda la cadena: [[omega]] en radianes por segundo, [[Xl]] en ohmios, [[Il]] en amperios y [[Ql]] en var. Tambien se verifica tendencia fisica: al usar mayor [[f]] con la misma [[L]], la oposicion debe crecer y la corriente de rama debe reducirse para tension fija.

Un segundo control es metrologico. Las magnitudes de tension y corriente se interpretan como eficaces. Si se mezclaran valores pico con RMS, la magnitud reactiva resultante perderia validez comparativa.

## Interpretación física
El resultado muestra que una rama inductiva moderada puede limitar de forma relevante la corriente en AC sin representar por si sola consumo activo equivalente. Esto explica por que el dimensionamiento de conductores y protecciones no puede basarse unicamente en intuicion resistiva.

Ademas, se observa la causalidad central del leaf: la frecuencia no es un dato decorativo; es la variable que modifica la oposicion de la rama. Cambios de regimen temporal alteran de forma directa exigencia de corriente y lectura reactiva.

Una interpretacion madura añade limite de validez: si perdidas de cobre o nucleo crecen, la prediccion ideal debe ampliarse. Sin esa cautela, la conclusion numerica puede ser correcta en forma y debil en uso tecnico.

Esto implica que el valor calculado solo adquiere significado completo cuando se conecta con decision operativa. Por tanto, no basta con reportar [[Xl]], [[Il]] y [[Ql]]; hay que justificar que variable domino el resultado y como cambiaria el diagnostico ante variacion de [[f]] o [[L]].

En terminos de criterio fisico, la lectura correcta diferencia causa, efecto y condicion de validez. Esa diferenciacion evita que una resolucion aparentemente impecable termine siendo una recomendacion tecnica fragil.

# Ejemplo de aplicación real

## Contexto
En un tablero industrial con varias cargas magneticas, el equipo de mantenimiento detecta sobrecalentamiento recurrente en una rama con bobina de filtrado y disparos intermitentes de proteccion. Antes de reemplazar componentes, se decide revisar el problema desde reactancia inductiva con datos medidos en operacion.

## Estimación física
El equipo recopila inductancia efectiva de la rama, frecuencia real de operacion, tension eficaz y corrientes medidas. Primero verifica conversion de unidades de [[L]] y consistencia entre [[f]] y [[omega]]. Luego recalcula [[Xl]] para distintos horarios y compara la corriente [[Il]] estimada con la medida en campo.

La estimacion muestra que en periodos de mayor frecuencia efectiva por estrategia de conversion, la oposicion [[Xl]] aumenta y reduce corriente en la rama principal, pero al mismo tiempo otras condiciones de red alteran reparto de corriente y acercan una parte del sistema a limites termicos no previstos inicialmente. Tambien se observa que [[Ql]] de la rama cambia de magnitud con el regimen y afecta balance reactivo global del tablero.

## Interpretación
La lectura final no es que la bobina este defectuosa por definicion, sino que la politica de operacion exige coordinacion mas fina entre frecuencia de trabajo, limites termicos y objetivos de calidad de potencia. El caso confirma que modificar variables de regimen puede mejorar una condicion local y, simultaneamente, tensionar otra condicion del sistema.

La decision tecnica resultante incluye ajuste de estrategia de operacion, verificacion de margen termico de protecciones y seguimiento periodico de [[Il]] y [[Ql]] en ventanas representativas. Esta salida es mas robusta que una sustitucion impulsiva, porque nace de causalidad fisica explicita entre [[L]], [[f]], [[Xl]], [[Il]] y [[Ql]].

En terminos didacticos, el ejemplo real enseña que una buena resolucion no termina al obtener un numero: termina cuando ese numero se conecta con limite de modelo y con acciones operativas concretas.
`;export{e as default};
