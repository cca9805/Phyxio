const e=`# Ejemplo tipo examen

## Enunciado
Una fuente continua alimenta una cadena serie de tres resistencias [[R1]], [[R2]] y [[R3]]. El problema solicita calcular la resistencia equivalente [[Req]], la corriente comun [[I]] y la caida [[Vi]] de cada elemento. Ademas, pide justificar por que la topologia es serie pura y verificar el cierre energetico de malla con la tension total [[Vt]].

El enunciado incluye una condicion de validacion final: interpretar si el reparto de caidas es coherente con los valores resistivos. No basta con presentar numeros; se requiere explicar el mecanismo fisico por el cual la red asigna mayor porcion de [[Vt]] a los elementos con mayor [[Ri]].

## Datos
Se conocen los siguientes valores nominales, todos en unidades coherentes de resistencia y voltaje:

- [[R1]] en escala de decenas de ohm.
- [[R2]] en escala intermedia.
- [[R3]] en escala mayor que [[R1]] y [[R2]].
- [[Vt]] en escala de voltaje de laboratorio.

Como no se reportan coeficientes termicos ni tolerancias, el primer pase usa modelo lineal ideal. Luego se comenta el impacto cualitativo de variaciones de [[Ri]] para evaluar robustez de la solucion.

## Definición del sistema
El sistema considerado es una sola rama cerrada con fuente y tres resistores. No hay nodos de derivacion, por lo que no existe particion de corriente. Esta definicion implica que [[I]] debe ser unica para todos los elementos de la cadena.

El contorno de analisis es la malla completa. Las magnitudes de salida son [[Req]], [[I]] y cada [[Vi]]. Las magnitudes de entrada son [[R1]], [[R2]], [[R3]] y [[Vt]]. La magnitud auxiliar [[Ri]] se usa para expresar reglas generales de reparto local.

## Modelo físico
El modelo adopta resistores ohmicos lineales y fuente ideal de tension. Bajo esa hipotesis, la oposicion total se representa por [[Req]] y la corriente global [[I]] se determina por la razon entre [[Vt]] y [[Req]]. Cada caida [[Vi]] se calcula a partir de la corriente comun y el valor local [[Ri]].

En el plano conceptual, el modelo liga una condicion global con consecuencias locales. Primero fija el regimen global de corriente. Despues convierte ese regimen en un mapa de caidas. Esto permite responder no solo cuanto vale cada magnitud, sino por que el reparto se comporta de ese modo en una topologia serie.

## Justificación del modelo
Se justifica usar serie ideal porque la conexion descrita no tiene ramas paralelas y las resistencias se tratan como componentes pasivos lineales en el rango de trabajo. Esta decision de modelo es fisicamente explicita: si no hay bifurcacion, no hay mecanismo para que la corriente se divida, por eso [[I]] permanece comun.

Tambien se justifica que el repartidor de tension sea util en este contexto porque la salida no se declara cargada por una impedancia baja. Si apareciera una carga intensa, la distribucion de [[Vi]] se alteraria. En otras palabras, el modelo es valido mientras la topologia efectiva siga siendo la declarada y los parametros no salgan del dominio lineal.

## Resolución simbólica
Primero se obtiene la resistencia equivalente:

{{f:req_serie}}

{{f:Req_formula}}

Luego se calcula la corriente global:

{{f:i_total}}

{{f:I_formula}}

Despues se calcula la caida local por relacion de Ohm:

{{f:caida_ohm}}

{{f:Vi_formula}}

Como verificacion de reparto tambien se usa la forma proporcional de reparto:

{{f:divisor}}

Finalmente se exige cierre de malla:

{{f:Vt_formula}}

## Sustitución numérica
La sustitucion respeta un orden operativo: primero sumar [[R1]], [[R2]] y [[R3]] para hallar [[Req]]; despues usar [[Vt]] y [[Req]] para hallar [[I]]; por ultimo usar [[I]] con cada [[Ri]] para obtener cada [[Vi]].

En la etapa numerica se controla coherencia de escalas. Si [[Req]] cae en rango de cientos de ohm y [[Vt]] en decenas de volt, [[I]] debe caer en rango de centesimas de ampere, no en decenas de ampere. Esta lectura evita aceptar una salida absurda por error de conversion entre ohm y kiloohm.

## Validación dimensional
La validacion dimensional se realiza en tres niveles:

- Para [[Req]], suma de resistencias mantiene unidad de ohm.
- Para [[I]], razon de voltaje sobre resistencia produce ampere.
- Para [[Vi]], producto de corriente por resistencia produce volt.

Ademas, el cierre de malla compara suma de caidas con [[Vt]]. Si ambos lados quedan en volt y con magnitudes compatibles, la solucion es dimensional y fisicamente consistente. Si no, hay un error de signo, de unidad o de sustitucion.

## Interpretación física
El resultado se interpreta como un reparto energetico condicionado por pesos resistivos. El elemento con mayor [[Ri]] toma mayor fraccion de [[Vt]] y, por tanto, concentra una parte mayor de la disipacion. Esto implica que la seleccion de resistores no solo define corriente total, tambien define donde se concentra el esfuerzo termico.

La causa fisica es clara: en una ruta unica, la corriente [[I]] es comun y la diferencia entre elementos solo puede expresarse en la caida [[Vi]] asociada a cada [[Ri]]. Por tanto, cambiar un resistor cambia localmente su caida y globalmente modifica [[Req]] y [[I]]. Esta doble consecuencia explica por que un ajuste aparentemente local puede afectar todo el circuito.

# Ejemplo de aplicación real

## Contexto
Se desea alimentar una etapa de referencia de baja potencia mediante un repartidor serie. La fuente disponible fija [[Vt]] en un valor estable, y se seleccionan dos resistencias para obtener una salida util sin exceder corriente de consumo objetivo. El diseno debe ser robusto frente a tolerancias moderadas y variaciones ambientales.

En este escenario, el objetivo no es solo encontrar un numero de salida, sino justificar por que la topologia serie es suficiente y cuando deja de serlo. Si la carga de salida se vuelve comparable con las resistencias del repartidor, el comportamiento ideal pierde validez y la salida cae por debajo del valor esperado.

## Estimación física
La estimacion se plantea por orden de magnitud. Si [[Req]] total queda en escala de kiloohm y [[Vt]] en escala de decenas de volt, [[I]] esperada cae en miliampere. Ese nivel suele ser compatible con referencias de bajo consumo y limita calentamiento.

Luego se estima la salida local [[Vi]] del resistor objetivo usando reparto proporcional. Si la relacion de resistencias fija una fraccion cercana a dos tercios para un elemento, su caida sera una fraccion equivalente de [[Vt]]. Esta estimacion cuantitativa permite elegir rapidamente si la arquitectura sirve antes de entrar en detalle de tolerancias.

Como lectura de seguridad, se verifica que el peor caso de [[Vi]] por dispersion de [[Ri]] no empuje potencia fuera del margen del componente. Este punto es clave porque un repartidor aparentemente correcto en nominal puede fallar por tolerancia acumulada.

## Interpretación
La interpretacion final integra tres ideas. Primera, serie ideal ofrece una forma limpia de convertir una fuente [[Vt]] en una salida fraccionada [[Vi]] con una sola corriente [[I]]. Segunda, la precision real depende de estabilidad de [[Ri]] y de la ausencia de carga fuerte en la salida. Tercera, la validez del modelo se decide por comparacion entre impedancia de carga y resistencias del repartidor.

Por tanto, el ejemplo real muestra una regla de diseno: usar serie para referencias de baja corriente es eficiente y didactico, pero siempre con verificacion de carga, tolerancia y potencia. Esa regla transforma una solucion escolar en una practica de ingenieria confiable.
`;export{e as default};
