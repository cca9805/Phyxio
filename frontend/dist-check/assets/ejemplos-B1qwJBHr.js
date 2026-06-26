const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

Un vehiculo A acelera en linea recta mientras un vehiculo B, usado como marco observador movil, tambien acelera sobre la misma recta. Se pide calcular la aceleracion relativa de A respecto de B, justificar la validez del modelo galileano y discutir que cambia cuando B deja de ser aproximadamente inercial.

En una segunda parte, se usa una secuencia temporal para estimar como evoluciona la percepcion de aceleracion relativa y decidir si el modelo simple sigue siendo suficiente para interpretacion de datos.

## Datos

- [[a_A]] = 2.8 m/s^2 en el eje longitudinal.
- [[a_B]] = 1.1 m/s^2 en el mismo eje y sentido positivo.
- Intervalo de analisis [[t]] = 5 s.
- Incertidumbre de medicion de aceleracion: 0.05 m/s^2.

Para el caso extendido:

- Tramo 1: [[a_B]] = 1.1 m/s^2.
- Tramo 2: [[a_B]] = 2.8 m/s^2.
- Tramo 3: [[a_B]] = 3.3 m/s^2.

## Definicion del sistema

Sistema inercial de referencia: laboratorio de carretera recta en ventana temporal corta.

Objeto A: vehiculo objetivo cuya aceleracion absoluta es [[a_A]].

Marco B: observador movil con aceleracion absoluta [[a_B]].

Magnitud de interes: [[a_rel]], aceleracion de A observada desde B en traslacion pura.

## Modelo fisico

Se adopta composicion galileana de aceleraciones para marcos en traslacion sin rotacion relevante y con tiempo comun [[t]]. El modelo conecta explicitamente [[a_rel]], [[a_A]] y [[a_B]] y permite leer variacion aparente de dinamica al cambiar el observador.

## Justificacion del modelo

El modelo es apropiado porque ambos movimientos se idealizan en una dimension, los ejes pueden mantenerse alineados y no hay evidencia de rotacion relativa dominante. La incertidumbre instrumental es menor que la diferencia entre [[a_A]] y [[a_B]] en el tramo principal, por lo que la senal fisica puede distinguirse del ruido.

La justificacion tambien es causal: si cambia [[a_B]] con [[a_A]] fija, cambia [[a_rel]]; si cambia [[a_A]] con [[a_B]] fija, cambia [[a_rel]] en la misma direccion. Esta dependencia directa es precisamente el nucleo del leaf.

## Resolucion simbolica

{{f:composicion_aceleracion_galileana}}

{{f:invarianza_aceleracion_inercial}}

Lectura simbolica:

1. Regla general: [[a_rel]] se obtiene por diferencia vectorial entre [[a_A]] y [[a_B]].
2. Caso especial inercial del observador: cuando la aceleracion de B es nula, la aceleracion relativa coincide con la de A.

## Sustitucion numerica

Tramo principal:

- [[a_rel]] = 2.8 - 1.1 = 1.7 m/s^2.

Comparacion por tramos:

- Tramo 1: [[a_rel]] = 2.8 - 1.1 = 1.7 m/s^2.
- Tramo 2: [[a_rel]] = 2.8 - 2.8 = 0.0 m/s^2.
- Tramo 3: [[a_rel]] = 2.8 - 3.3 = -0.5 m/s^2.

Lectura temporal con [[t]] = 5 s:

- En tramo 1, B observa que A incrementa velocidad relativa en sentido positivo.
- En tramo 2, B observa aceleracion relativa nula: la diferencia de velocidades se mantiene constante.
- En tramo 3, B observa aceleracion relativa negativa: A pierde velocidad relativa respecto de B.

## Validacion dimensional

- [[a_A]], [[a_B]], [[a_rel]] en m/s^2.
- [[t]] en s.

No hay mezcla de dimensiones incompatibles. La operacion entre aceleraciones mantiene coherencia dimensional en todos los tramos.

Control de incertidumbre:

- Diferencia principal 1.7 m/s^2 es muy superior a 0.05 m/s^2.
- Diferencia de -0.5 m/s^2 tambien supera ruido instrumental.
- El caso 0.0 m/s^2 debe interpretarse dentro de banda de tolerancia, no como exactitud absoluta perfecta.

## Interpretacion fisica

La interpretacion clave es causal y no solo numerica. [[a_rel]] no representa una "nueva fuerza" sino una lectura de movimiento relativa entre objeto y observador. Cuando [[a_B]] aumenta, la aceleracion relativa de A medida por B disminuye, incluso si [[a_A]] permanece fija.

Esto explica por que dos observadores pueden describir de forma distinta el mismo objeto sin contradiccion fisica. La discrepancia aparente no surge de errores necesariamente, sino de marcos con aceleraciones distintas.

El caso [[a_rel]] nula no implica ausencia de dinamica absoluta. Significa que, en ese instante, objeto y observador comparten la misma aceleracion. Si sus velocidades relativas ya eran distintas, esa diferencia puede persistir aunque la aceleracion relativa sea cero.

Cuando [[a_rel]] cambia de signo, la lectura fisica cambia de regimen: A pasa de "acelerar respecto de B" a "desacelerar respecto de B". Esta transicion es especialmente util en control de seguimiento, porque indica cuando el observador comienza a ganar dinamicamente sobre el objeto observado.

# Ejemplo de aplicacion real

## Contexto

En un sistema ADAS de asistencia a conduccion, el vehiculo propio B estima la dinamica de un vehiculo lider A para ajustar distancia y confort. El algoritmo usa aceleraciones filtradas para evaluar riesgo de aproximacion o alejamiento dinamico.

## Estimacion fisica

Supongamos que el filtro entrega [[a_A]] entre 0.8 y 1.2 m/s^2 y [[a_B]] entre 1.4 y 1.8 m/s^2 durante varios segundos [[t]]. En promedio, la aceleracion relativa resulta negativa, indicando que B incrementa su capacidad de acercamiento dinamico al lider.

Si el control no reconoce esta lectura y mantiene empuje alto, la distancia de seguridad puede caer por debajo del objetivo. Por eso el sistema convierte [[a_rel]] en una accion de control: reducir par motor o iniciar frenado suave cuando la tendencia relativa se vuelve critica.

Estimacion operativa con escala temporal:

- Escenario E1: [[a_A]] = 1.0 y [[a_B]] = 1.5 m/s^2, luego [[a_rel]] = -0.5 m/s^2.
- Escenario E2: [[a_A]] = 1.1 y [[a_B]] = 1.2 m/s^2, luego [[a_rel]] = -0.1 m/s^2.

Esto implica dos regimenes distintos. En E1, la diferencia es de orden claramente mayor que la incertidumbre, por tanto la lectura causal es robusta. En E2, la diferencia esta cerca del umbral y debe tratarse como banda de transicion.

## Interpretacion

La aplicacion muestra la utilidad operativa del leaf: [[a_rel]] traduce una diferencia de marcos en una decision de seguridad. El modelo no reemplaza todo el controlador, pero aporta una variable interpretable para detectar transiciones de regimen.

Tambien muestra limite de validez: si el vehiculo B entra en maniobra con rotacion significativa o sensores desincronizados, la composicion simple puede subestimar complejidad. En ese caso conviene escalar a modelo extendido con dinamica lateral completa y fusion temporal mas robusta.

Lectura causal final: el cambio de decision no se justifica solo por un numero aislado, sino por el contraste entre orden de magnitud de [[a_rel]], escala temporal [[t]] y calidad de sincronizacion. Por tanto, la interpretacion fisica queda anclada al modelo y no a una narrativa generica.

### Nota cuantitativa adicional de estimacion

Para fortalecer la lectura de estimacion fisica en el ejemplo real, puede fijarse un umbral operativo: si [[a_rel]] < -0.20 m/s^2 durante mas de 1.5 s de [[t]], el sistema entra en modo de mitigacion con reduccion de par. En el tramo 3, con [[a_rel]] = -0.5 m/s^2, el criterio se activa con margen amplio respecto de la incertidumbre (0.05 m/s^2), por lo que la decision es robusta y no un artefacto del ruido.
`;export{e as default};
