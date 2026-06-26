# Ejemplo tipo examen

## Enunciado

Un disco uniforme gira alrededor de su eje central. Su momento de inercia respecto a ese eje es `0.80 kg m^2`. Inicialmente gira con velocidad angular `6 rad/s` y un motor lo acelera hasta `14 rad/s`. Se pide calcular la energía cinética rotacional inicial, la energía final y el trabajo rotacional neto realizado sobre el disco.

## Datos

Los datos relevantes son [[I]] igual a `0.80 kg m^2`, velocidad angular inicial

{{f:energia_rotacional_basica}}

 y velocidad angular final

{{f:energia_rotacional_basica}}

. La magnitud buscada en cada estado es [[Erot]], y para el proceso se busca [[Wrot]]. No hay información sobre traslación, así que el centro del disco se considera fijo.

## Definición del sistema

El sistema elegido es el disco. El motor actúa como agente externo que realiza trabajo sobre él. No incluimos el motor dentro del sistema porque entonces habría que describir también energía eléctrica, pérdidas internas y energía térmica. Esta elección permite usar directamente el balance

{{f:energia_rotacional_basica}}

.

## Modelo físico

El modelo es cuerpo rígido con eje fijo. El momento de inercia se mantiene constante durante el proceso y todos los puntos del disco comparten la misma velocidad angular. La energía relevante es rotacional pura, porque el centro de masa no se desplaza. Si el eje tuviera rozamiento apreciable, habría que separar el trabajo motor y la energía disipada.

## Justificación del modelo

El modelo físico se justifica por cuatro condiciones observables: el disco es rígido, el eje es fijo, el momento de inercia [[I]] permanece constante y no hay deslizamiento interno entre partes del sólido. El enunciado da directamente [[I]], por lo que no hace falta calcularlo desde masa y radio. Las velocidades angulares ya están en radianes por segundo, así que no hay conversión de unidades. Como se comparan dos estados del mismo disco alrededor del mismo eje, puede usarse la misma fórmula para [[Eroti]] y [[Erotf]]. La hipótesis física explícita es que no cambia la distribución de masa, no hay deformación apreciable y el eje central permanece fijo.

## Resolución simbólica

Relación base:

{{f:energia_rotacional_basica}}

Para el estado inicial se usa:

{{f:energia_rotacional_inicial}}

Para el estado final se usa:

{{f:energia_rotacional_final}}

El trabajo neto se obtiene con:

{{f:trabajo_rotacional_variacion}}

. La estructura muestra que no se debe igualar el trabajo a la energía final salvo que la energía inicial sea cero.

## Sustitución numérica

La energía inicial es `0.5 * 0.80 * 6^2 = 14.4 J`. La energía final es `0.5 * 0.80 * 14^2 = 78.4 J`. Por tanto, el trabajo rotacional neto es `78.4 - 14.4 = 64.0 J`. El motor ha transferido sesenta y cuatro joules netos al giro del disco.

## Validación dimensional

El producto de [[I]] y [[omega]] al cuadrado tiene unidades `kg m^2 s^-2`, equivalentes a joules. La diferencia entre [[Erotf]] y [[Eroti]] también queda en joules. Esta validación es importante porque si se hubieran usado revoluciones por minuto sin convertir, las unidades no representarían energía en el Sistema Internacional.

## Interpretación física

La velocidad angular final no llega ni a triplicar la inicial, pero la energía final es más de cinco veces mayor. La razón es la dependencia cuadrática con [[omega]]. El trabajo calculado no es una fuerza ni un torque: es energía transferida al disco. Si después se desconecta el motor, esa energía queda almacenada como movimiento de rotación hasta que el rozamiento la transforme o se extraiga para realizar trabajo.

# Ejemplo de aplicación real

## Contexto

En un sistema de recuperación de energía, un volante de inercia almacena energía durante una frenada y la devuelve más tarde. Supongamos un rotor con [[I]] igual a `12 kg m^2` que pasa de `120 rad/s` a `180 rad/s` durante una fase de carga. Queremos estimar cuánta energía adicional queda almacenada y qué significa ese número para el diseño.

## Estimación física

La energía inicial [[Eroti]] es 0.5 * 12 * 120^2 = 86400 J. La energía final [[Erotf]] es 0.5 * 12 * 180^2 = 194400 J. El aumento de energía, que coincide con [[Wrot]] neto si no hay pérdidas, es 108000 J. Esta cifra equivale a ciento ocho kilojoules, suficiente para sostener una potencia de varios kilowatts durante unos segundos. Como estimación de orden de magnitud, si el sistema entrega 9 kW, esa reserva adicional duraría unos 12 s antes de volver al estado inicial, sin contar pérdidas.

## Interpretación

El cálculo muestra por qué aumentar [[omega]] es una estrategia eficaz para almacenar energía, pero también peligrosa. El crecimiento cuadrático eleva rápidamente las exigencias sobre material, equilibrado, carcasa y rodamientos. Si el rotor no fuera rígido, parte de la energía podría aparecer como vibración o deformación. Si hubiera pérdidas, el trabajo externo requerido sería mayor que el incremento de [[Erot]]. La lectura final es que la fórmula proporciona el núcleo energético, pero el diseño real debe añadir límites de resistencia, disipación y control.

En una aplicación de transporte, esta energía no debe confundirse con energía total del vehículo. El volante puede almacenar parte de la energía de frenado, mientras el vehículo completo también tiene energía traslacional, pérdidas en neumáticos, calor en frenos y conversión eléctrica. Usar [[Erot]] de forma correcta significa insertarla en un balance global y no tratarla como si describiera todo el sistema.