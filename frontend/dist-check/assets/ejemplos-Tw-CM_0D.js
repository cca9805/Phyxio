const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

Una plataforma circular de ensayo gira con velocidad angular constante. Sobre la plataforma se fija una masa [[m]] a una distancia [[r]] del eje. El objetivo es calcular la lectura de fuerza centrifuga [[F_cf]] y la aceleracion centrifuga [[a_cf]] en el marco rotatorio, comparar la expresion en terminos de [[omega]] y en terminos de [[v]], y discutir por que el resultado no debe confundirse con la fuerza centripeta real aplicada por el soporte.

En una segunda parte del mismo ejercicio, se pregunta que cambia si el operador solo dispone de la rapidez tangencial [[v]] y no de [[omega]]. Finalmente, se solicita una lectura conceptual de la forma vectorial para aclarar direccion y sentido del termino inercial.

## Datos

Datos del caso base:

- [[m]] = 2.0 kg
- [[r]] = 0.40 m
- [[omega]] = 6.0 rad/s

Datos para comparacion alternativa:

- [[v]] medida en el borde del soporte
- Marco de referencia rotatorio con eje fijo

Supuestos operativos:

- Regimen estacionario de giro
- Radio aproximadamente constante
- Sin deformacion relevante del brazo de sujecion

## Definición del sistema

Sistema fisico: masa puntual fijada a un soporte que rota alrededor de un eje vertical. El observador esta solidario con la plataforma, por lo que describe el movimiento en un marco no inercial rotatorio.

Variables de estado elegidas:

- Geometria: [[r]]
- Escala inercial: [[m]]
- Regimen angular: [[omega]]
- Regimen tangencial equivalente: [[v]]

Magnitudes de salida:

- [[F_cf]] como lectura inercial radial aparente
- [[a_cf]] como lectura por unidad de masa

## Modelo físico

Se usa el modelo de marco rotatorio uniforme con radio bien definido y trayectoria circular. En este modelo, la lectura centrifuga se representa como termino inercial aparente hacia afuera en el marco que gira.

Relaciones nucleares del leaf:

{{f:fuerza_centrifuga_omega}}

{{f:fuerza_centrifuga_velocidad}}

{{f:relacion_tangencial}}

{{f:aceleracion_centrifuga}}

{{f:forma_vectorial_conceptual}}

## Justificación del modelo

El modelo es adecuado porque el sistema cumple tres condiciones clave: giro estable, radio geometrico bien definido y interes en la descripcion desde el observador rotatorio. Si el interes fuera describir las fuerzas reales en marco inercial, la lectura central seria la fuerza centripeta de contacto y no la lectura centrifuga aparente.

La formulacion con [[omega]] y [[r]] es directa cuando el sensor entrega velocidad angular; la formulacion con [[v]] es equivalente cuando se dispone de medicion lineal en el borde. Usar ambas expresiones permite validacion cruzada interna del calculo.

## Resolución simbólica

Para el caso base en forma angular:

{{f:fuerza_centrifuga_omega}}

Para traducir la lectura a forma por unidad de masa:

{{f:aceleracion_centrifuga}}

Para la forma tangencial equivalente:

{{f:relacion_tangencial}}

{{f:fuerza_centrifuga_velocidad}}

Lectura conceptual vectorial del termino inercial:

{{f:forma_vectorial_conceptual}}

La cadena simbolica deja claro que [[F_cf]] crece linealmente con [[m]] y [[r]], y cuadraticamente con [[omega]] o con [[v]] segun la parametrizacion.

## Sustitución numérica

1) Calculo de [[F_cf]] con [[omega]]:
- [[omega]]^2 = 36
- [[F_cf]] = 2.0 x 36 x 0.40 = 28.8 N

2) Calculo de [[a_cf]]:
- [[a_cf]] = [[omega]]^2 [[r]] = 36 x 0.40 = 14.4 m/s^2

3) Verificacion por via tangencial:
- [[v]] = [[omega]] [[r]] = 6.0 x 0.40 = 2.4 m/s
- [[F_cf]] = [[m]] [[v]]^2 / [[r]] = 2.0 x 5.76 / 0.40 = 28.8 N

Ambas rutas entregan la misma lectura de [[F_cf]], lo que confirma coherencia algebraica y fisica del procedimiento.

## Validación dimensional

Chequeo 1: [[F_cf]] = [[m]] [[omega]]^2 [[r]]
- Lectura dimensional: masa por aceleracion produce una fuerza en N.

Chequeo 2: [[F_cf]] = [[m]] [[v]]^2 / [[r]]
- Lectura dimensional: masa por velocidad al cuadrado dividida por longitud vuelve a dar N.

Chequeo 3: [[a_cf]] = [[omega]]^2 [[r]]
- Lectura dimensional: frecuencia angular al cuadrado por radio produce aceleracion en m/s^2.

No aparecen inconsistencias de unidades. El resultado es dimensionalmente valido.

## Interpretación física

El resultado [[F_cf]] = 28.8 N no significa que aparezca una fuerza nueva material empujando desde afuera. Significa que, para que el observador rotatorio pueda describir correctamente la dinamica en su marco, necesita introducir un termino inercial radial aparente. Esa lectura explica por que en plataformas giratorias la masa "tiende" a separarse del eje desde la perspectiva del observador que gira.

La dependencia cuadratica con [[omega]] es la parte mas sensible del problema: duplicar [[omega]] cuadruplica [[F_cf]]. Por eso, pequenas variaciones en regimen de giro tienen impacto mecanico grande en soportes, anclajes y condiciones de seguridad. Tambien por eso la interpretacion no puede quedarse en el numero: debe traducirse en criterio de operacion.

# Ejemplo de aplicación real

## Contexto

En una centrifuga de laboratorio para separacion de muestras, cada rotor trabaja en un rango de giro autorizado por fabricante. El operador registra [[omega]] o equivalente en [[v]] de borde y necesita estimar [[F_cf]] y [[a_cf]] para verificar que el conjunto tubo-porta muestras no supera regimen seguro.

Supongamos dos escenarios para una misma geometria y masa:

- Escenario A: [[omega]] = 120 rad/s, [[r]] = 0.08 m, [[m]] = 0.05 kg
- Escenario B: [[omega]] = 150 rad/s, [[r]] = 0.08 m, [[m]] = 0.05 kg

## Estimación física

Escenario A:
- [[a_cf]] = [[omega]]^2 [[r]] = 120^2 x 0.08 = 1152 m/s^2
- [[F_cf]] = [[m]] [[a_cf]] = 0.05 x 1152 = 57.6 N

Escenario B:
- [[a_cf]] = 150^2 x 0.08 = 1800 m/s^2
- [[F_cf]] = 0.05 x 1800 = 90 N

Incremento relativo:
- [[F_cf]] aumenta de 57.6 N a 90 N, es decir aproximadamente +56%

Lectura operativa: un aumento de [[omega]] del 25% produce un aumento mucho mayor en carga centrifuga, debido a la ley cuadratica. Esta sensibilidad obliga a controlar aceleracion de arranque, balance de masa y estado de rodamientos.

## Interpretación

La aplicacion real confirma la tesis central del leaf: la fuerza centrifuga es una lectura de marco que permite anticipar exigencia mecanica en sistemas rotatorios. El numero calculado no es decoracion; orienta decisiones concretas de seguridad, mantenimiento y regimen de operacion.

Tambien muestra por que conviene separar tres planos:

1. Plano descriptivo: como se ve el sistema desde el marco rotatorio.
2. Plano dinamico real: que fuerza material mantiene la trayectoria circular.
3. Plano ingenieril: que limite operativo no debe superarse para evitar dano.

Cuando estos tres planos se mezclan, aparecen errores conceptuales tipicos. Cuando se separan y se conectan con magnitudes [[m]], [[omega]], [[r]], [[v]], [[a_cf]] y [[F_cf]], la interpretacion se vuelve robusta y transferible a otras maquinas rotatorias.
`;export{e as default};
