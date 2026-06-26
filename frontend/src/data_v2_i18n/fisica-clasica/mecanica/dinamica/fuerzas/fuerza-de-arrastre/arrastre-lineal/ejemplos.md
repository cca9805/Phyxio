# Ejemplo tipo examen

## Enunciado

Una esfera pequena de masa [[m]] se mueve en un fluido viscoso en una guia horizontal. Durante un tramo corto, el laboratorio confirma que el arrastre puede modelarse como lineal con respecto a la rapidez relativa [[v]]. Se pide estimar el modulo de la fuerza de arrastre [[F_d]] en dos condiciones de velocidad y, ademas, interpretar que significa la escala temporal [[tau]] para la evolucion del movimiento.

El objetivo no es solo calcular un numero. El examen evalua si sabes distinguir entre una lectura instantanea de resistencia ([[F_d]]) y una lectura dinamica de ajuste ([[tau]]). Tambien evalua si eres capaz de justificar cuando el modelo lineal es adecuado y cuando no conviene extrapolarlo.

## Datos

Se dispone de un valor calibrado de [[b]] para el montaje. La masa [[m]] de la esfera es conocida y estable en toda la practica. Se registran dos velocidades relativas respecto al fluido, [[v]]_1 y [[v]]_2, con [[v]]_2 aproximadamente el doble de [[v]]_1.

El protocolo indica que:

- La temperatura del fluido se mantiene casi constante.
- La geometria del sistema no cambia en el tramo medido.
- El ruido instrumental es bajo en la ventana de velocidades usada.

Estas condiciones son importantes porque sostienen la hipotesis de [[b]] aproximadamente constante. Sin esa hipotesis, la comparacion directa de resultados podria perder sentido fisico.

## Definición del sistema

Sistema: esfera + movimiento traslacional en una direccion principal.

Entorno: fluido viscoso en reposo respecto al laboratorio.

Variables de interes del leaf:

- [[F_d]]: modulo de fuerza resistiva del fluido.
- [[b]]: pendiente resistiva efectiva del sistema en el rango de trabajo.
- [[v]]: rapidez relativa entre esfera y fluido.
- [[m]]: masa inercial de la esfera.
- [[tau]]: escala temporal de ajuste.

En el DCL horizontal, la fuerza resistiva se opone a la direccion de movimiento. En esta resolucion se trabaja con modulos para evitar errores de signo durante la sustitucion, pero la interpretacion final recupera el sentido fisico opositor.

## Modelo físico

Relacion constitutiva del arrastre lineal:

{{f:arrastre_lineal_estandar}}

Escala temporal del ajuste dinamico:

{{f:tiempo_relajacion_lineal}}

Con estas dos ecuaciones se cubren dos preguntas distintas: cuanto resiste el fluido en un instante y cuan rapido se reajusta el sistema cuando cambian las condiciones de movimiento.

## Justificación del modelo

Se adopta el modelo lineal por tres motivos fisicos y experimentales:

1. En la ventana de [[v]] medida, la grafica [[F_d]]-[[v]] previa de calibracion es aproximadamente recta.
2. El parametro [[b]] se mantiene estable dentro del margen reportado por el laboratorio.
3. El objetivo del ejercicio es entrenar lectura de mecanismo lineal, no caracterizar regimenes no lineales.

Ademas, el uso de [[tau]] es pertinente porque la pregunta incluye interpretacion dinamica. Si solo calcularamos [[F_d]], perderiamos informacion sobre rapidez de ajuste del sistema.

## Resolución simbólica

Para cada velocidad:

{{f:arrastre_lineal_estandar}}

Se obtienen [[F_d]]_1 y [[F_d]]_2 sustituyendo [[v]]_1 y [[v]]_2 con el mismo [[b]].

Luego se calcula la escala temporal:

{{f:tiempo_relajacion_lineal}}

Con [[m]] y [[b]] se obtiene [[tau]], que se interpreta como tiempo caracteristico del amortiguamiento lineal.

Control simbolico clave:

- Si [[v]]_2 = 2 [[v]]_1 y [[b]] es constante, entonces [[F_d]]_2 debe ser aproximadamente 2 [[F_d]]_1.
- Si [[m]] aumenta con [[b]] fijo, [[tau]] aumenta.
- Si [[b]] aumenta con [[m]] fija, [[tau]] disminuye.

Estas tres reglas son comprobaciones de coherencia fisica del procedimiento.

## Sustitución numérica

Con valores tipicos de laboratorio, el calculo muestra que al pasar de [[v]]_1 a [[v]]_2 el modulo [[F_d]] crece de forma proporcional. La razon [[F_d]]_2/[[F_d]]_1 queda cercana a [[v]]_2/[[v]]_1, como exige el modelo lineal.

El valor de [[tau]] obtenido resulta del cociente entre [[m]] y [[b]]. Si el banco usa una esfera relativamente masiva en un fluido moderadamente viscoso, [[tau]] sale mayor, indicando respuesta mas lenta. Si el fluido es mas "frenante" (mayor [[b]]), [[tau]] baja y el ajuste se vuelve mas rapido.

La sustitucion debe reportarse con unidades coherentes en SI. Un error frecuente es dejar [[v]] en km/h o [[m]] en g; eso distorsiona [[b]] o [[tau]] aunque la calculadora arroje un numero aparentemente razonable.

## Validación dimensional

Chequeo 1: en la ecuacion de arrastre lineal, [[b]] por [[v]] debe producir N para [[F_d]].

Chequeo 2: en la ecuacion temporal, [[m]] dividido por [[b]] debe producir s para [[tau]].

Chequeo 3: dominio fisico. Los parametros del modelo en este contexto deben mantenerse no negativos y las magnitudes resultantes deben conservar interpretacion mecanica.

Chequeo 4: coherencia de tendencia. Si [[v]] sube y [[b]] no cambia, [[F_d]] no puede bajar. Si [[b]] sube con [[m]] fija, [[tau]] no puede subir.

Esta validacion evita aceptar resultados por inercia algebraica.

## Interpretación física

La lectura fisica del ejercicio tiene dos capas.

Capa instantanea: [[F_d]] crece en proporcion a [[v]] dentro del dominio lineal. Por eso, duplicar rapidez no cuadruplica la resistencia en este leaf; la duplica aproximadamente.

Capa temporal: [[tau]] resume cuan rapido el sistema "cede" a la disipacion del medio. Un [[tau]] pequeno sugiere amortiguamiento rapido; un [[tau]] grande indica persistencia inercial mas larga.

La conclusion correcta debe unir ambas capas: el modelo explica tanto la fuerza resistiva instantanea como la velocidad de ajuste dinamico bajo las mismas hipotesis de validez.

# Ejemplo de aplicación real

## Contexto

Un laboratorio de bioingenieria analiza microesferas que transportan marcadores en un canal con fluido viscoso. El objetivo es ajustar velocidad de avance sin sobrepasar limites de esfuerzo sobre el sistema de guiado. En este escenario, el regimen de trabajo se diseña precisamente para permanecer en una zona donde el modelo lineal es util y estable.

El equipo necesita decidir entre dos configuraciones de operacion: una con mayor rapidez objetivo y otra con menor rapidez pero mayor margen de control. Para decidir con criterio, no basta saber la rapidez; se requiere estimar [[F_d]] y leer [[tau]] para anticipar como respondera el sistema ante cambios de consigna.

## Estimación física

Primero, se calibra [[b]] con un tramo corto de referencia, verificando que la curva [[F_d]]-[[v]] permanezca casi lineal.

Luego, para cada configuracion de [[v]] objetivo, se calcula resistencia con:

{{f:arrastre_lineal_estandar}}

Despues, con la masa [[m]] de cada microesfera y el [[b]] calibrado, se estima la escala temporal:

{{f:tiempo_relajacion_lineal}}

Si la configuracion rapida aumenta [[F_d]] mas alla del margen del actuador, se descarta aunque complete el recorrido en menos tiempo nominal. Si la configuracion lenta da [[F_d]] y [[tau]] compatibles con control estable, se considera preferible para operacion continua.

Este procedimiento muestra por que el leaf es operativo: no se trata de elegir por intuicion, sino de leer mecanismo y respuesta temporal con magnitudes nucleares del modelo.

## Interpretación

El caso real confirma tres mensajes del tema:

1. [[F_d]] depende de [[v]] y de [[b]]; no puede deducirse solo desde distancia o tiempo de recorrido.
2. [[tau]] aporta informacion que una cuenta instantanea de fuerza no entrega.
3. La validez del modelo lineal exige control de condiciones; si aparece curvatura sistematica en [[F_d]]-[[v]], debe revisarse la estrategia.

En terminos didacticos, la aplicacion conecta teoria y decision: usar [[F_d]], [[b]], [[v]], [[m]] y [[tau]] para elegir una configuracion fisicamente coherente y operativamente segura.