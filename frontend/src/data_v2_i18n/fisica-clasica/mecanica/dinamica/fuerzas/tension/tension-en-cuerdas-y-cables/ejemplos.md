# Ejemplo tipo examen

## Enunciado

Un sistema de Atwood ideal esta formado por dos masas, [[m1]] y [[m2]], unidas por una cuerda ligera e inextensible que pasa por una polea ideal. La masa [[m2]] es mayor que [[m1]], por lo que el sistema acelera. Se pide calcular la aceleracion comun [[a]], la tension [[T]] en la cuerda y, para un tramo inclinado auxiliar del mismo montaje, las componentes [[Tx]] y [[Ty]] de la traccion cuando el cable forma un angulo [[theta]] con la horizontal.

## Datos

- [[m1]] = 3.0 kg
- [[m2]] = 5.0 kg
- [[g]] = 9.8 m/s^2
- Para el tramo inclinado: [[theta]] = 30 grados

Como dato complementario de validacion de modelo para un tramo largo de cable, se usara [[lambda]] = 0.80 kg/m para estimar el gradiente [[dT_dy]] en condiciones cuasiestaticas.

## Definicion del sistema

El sistema principal es la pareja de masas acopladas por cuerda ideal. Ambas comparten modulo de aceleracion y la cuerda transmite una tension comun [[T]]. Para la parte de descomposicion, se analiza un tramo de cable donde la traccion total se proyecta en eje horizontal y vertical, dando [[Tx]] y [[Ty]].

## Modelo fisico

Se adopta modelo ideal de Atwood: cuerda sin masa, polea sin rozamiento y sin inercia rotacional relevante. Bajo esas hipotesis, las ecuaciones de movimiento se escriben con una unica tension [[T]]. Para la descomposicion angular, se usa trigonometria con angulo [[theta]] definido respecto al eje horizontal.

## Justificacion del modelo

El problema busca identificar relaciones estructurales entre masas, aceleracion y tension, no estimar perdidas de energia por friccion o deformacion elastica. En laboratorio de docencia, este modelo produce resultados robustos siempre que la polea este bien alineada y la cuerda sea ligera frente a las masas colgantes.

## Resolucion simbolica

Aceleracion del sistema de Atwood ideal:

{{f:atwood_aceleracion}}

Tension en Atwood ideal:

{{f:atwood_tension}}

Componente horizontal de tension:

{{f:componentes_tension_x}}

Componente vertical de tension:

{{f:componentes_tension_y}}

Gradiente de tension en cable con masa distribuida:

{{f:gradiente_tension_cable_masivo}}

Como contraste de modelo, en tramos verticales de masa suspendida tambien puede verificarse:

{{f:tension_equilibrio_vertical}}

La coherencia entre estas relaciones exige mantener la misma convencion de ejes y signos en todo el desarrollo.

## Sustitucion numerica

1. Aceleracion [[a]]:

[[a]] = ((5.0 - 3.0)*9.8)/(5.0 + 3.0) = 2.45 m/s^2

2. Tension [[T]]:

[[T]] = (2*3.0*5.0*9.8)/(3.0 + 5.0) = 36.75 N

3. Componentes para [[theta]] = 30 grados:

[[Tx]] = [[T]]*cos([[theta]]) = 36.75*0.866 = 31.82 N

[[Ty]] = [[T]]*sin([[theta]]) = 36.75*0.5 = 18.38 N

4. Comprobacion interna:

[[Tx]] y [[Ty]] deben recomponerse en una magnitud compatible con [[T]] al aplicar la relacion pitagorica de componentes ortogonales. Los valores calculados son consistentes con redondeo numerico.

## Validacion dimensional

- En la relacion de aceleracion de Atwood, el resultado de [[a]] queda en m/s^2.
- En la expresion de tension de Atwood, [[T]] queda en newtons.
- En las expresiones de componentes horizontal y vertical, los resultados mantienen unidad de fuerza.
- En el modelo de gradiente para cable masivo, [[dT_dy]] queda en N/m y es coherente con [[lambda]]*[[g]].

No hay mezcla indebida de unidades, por lo que el resultado es dimensionalmente coherente.

## Interpretacion fisica

La lectura central es que la diferencia de masas fija la demanda dinamica del sistema: cuanto mayor sea el contraste entre [[m1]] y [[m2]], mayor sera [[a]], y la tension comun [[T]] se ajustara en consecuencia dentro del marco ideal. Las componentes [[Tx]] y [[Ty]] muestran que la misma traccion total puede tener efectos mecanicos distintos segun geometria. En diseno real, esta distincion determina cargas laterales en anclajes y cargas verticales en soportes.

Ademas, cuando el cable tiene masa distribuida, la interpretacion cambia de forma cualitativa: ya no existe una unica tension representativa para todo el tramo, sino una variacion espacial que puede volver critico el anclaje superior aunque el valor en la parte baja parezca moderado. Esta lectura causal conecta directamente con seguridad operacional: si se subestima [[dT_dy]], se puede aceptar una configuracion que falla por concentracion de carga en el punto equivocado.

Una interpretacion fisica completa tambien debe responder que pasaria si cambian las condiciones de operacion. Si el sistema pasa de regimen casi estacionario a arranques frecuentes, la tension media puede mantenerse pero los picos transitorios pueden crecer y controlar la fatiga del conjunto. Del mismo modo, un pequeno cambio en [[theta]] puede aumentar la demanda horizontal sobre soportes aunque la carga suspendida no cambie. Por eso, el resultado numerico solo es util cuando se acompana de una lectura de sensibilidad: que variable domina, que componente gobierna y cual es la primera hipotesis del modelo que podria romperse en campo.

# Ejemplo de aplicacion real

## Contexto

En un sistema de izado industrial, un cable levanta una carga mediante una polea superior y pasa por una etapa de guiado inclinada hacia un carro de transferencia. El equipo de mantenimiento necesita verificar dos cosas: si la tension de trabajo esta dentro de limites seguros del cable y si la componente horizontal sobre el anclaje no supera la capacidad del soporte.

## Estimacion fisica

La carga equivalente suspendida es de 400 kg, por lo que en regimen casi estacionario la tension base se aproxima por equilibrio vertical. Como estimacion inicial, usando [[g]] local, la tension es del orden de miles de newtons. Luego, para el tramo inclinado de guiado con [[theta]] cercano a 20 grados, se calcula [[Tx]] para estimar la exigencia lateral sobre la estructura. Aunque el valor total de [[T]] sea aceptable para el cable, [[Tx]] puede gobernar el criterio de diseno del anclaje.

Cuando la maniobra incluye aceleraciones de arranque o frenado, el equipo usa la relacion de tension vertical acelerada para estimar picos de carga y comparar con margen operativo. Si esos picos se acercan al limite admisible, se reduce aceleracion de consigna o se incrementa seccion de cable.

Para un tramo vertical largo de cable del mismo sistema, se estima tambien el gradiente:

{{f:gradiente_tension_cable_masivo}}

Con [[lambda]] = 0.80 kg/m y [[g]] = 9.8 m/s^2, se obtiene [[dT_dy]] = 7.84 N/m. Este valor permite proyectar cuanto aumenta la tension al subir en el cable y verificar capacidad del anclaje superior.

## Interpretacion

Este caso real muestra por que el leaf no se reduce a una sola ecuacion de equilibrio. La seguridad depende de integrar tension total, geometria de componentes y regimen dinamico. Un calculo correcto de [[T]] sin analisis de [[Tx]] puede dejar sin detectar un fallo de anclaje lateral. Del mismo modo, ignorar aceleraciones transitorias puede subestimar picos de carga en maniobras repetidas. La lectura fisica completa combina modelo, magnitudes y criterio de validez.
