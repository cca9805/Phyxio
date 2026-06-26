# Equilibrio termodinámico

## Contexto conceptual

El equilibrio termodinámico describe un estado en el que un sistema macroscopico deja de evolucionar porque se han anulado los gradientes internos capaces de producir cambios espontaneos. No significa que las particulas se detengan ni que no haya movimiento microscopico; significa que las magnitudes observables permanecen constantes y que no hay flujo neto de calor, empuje mecánico neto ni intercambio material neto compatible con las restricciones.

En un sistema real, el equilibrio se reconoce comparando variables intensivas. La temperatura [[T]] diagnostica equilibrio térmico, la presión [[P]] diagnostica equilibrio mecánico y el potencial quimico [[mu]] diagnostica equilibrio material o quimico. El concepto es central porque permite definir estados termodinámicos, usar ecuaciones de estado y distinguir un estado final estable de un transitorio.

## 🟢 Nivel esencial

La idea esencial es que un sistema esta en equilibrio cuando ya no tiene "motivos internos" para cambiar. Si dos partes tienen distinta [[T]], puede fluir calor. Si dos lados de una frontera movil tienen distinta [[P]], la frontera puede desplazarse. Si dos regiones conectadas tienen distinto [[mu]], puede difundirse materia o avanzar una reaccion. Mientras alguno de esos impulsos existía, el sistema no esta en equilibrio completo.

En equilibrio, las variables macroscopicas dejan de variar en el tiempo dentro de la precision del modelo. Una taza de cafe en una habitacion se acerca al equilibrio cuando su temperatura se iguala con la del aire. Un gas con pistón se acerca al equilibrio mecánico cuando la presión interna compensa la presión externa efectiva. Una mezcla reactiva alcanza equilibrio quimico cuando ya no hay avance neto de reaccion.

> [!NOTE]
> Equilibrio no significa "sin movimiento"; significa ausencia de cambio macroscopico neto compatible con las restricciones.

## 🔵 Nivel formal

El criterio térmico se expresa como:

{{f:equilibrio_termico}}

La misma condición, leida como estado comun de las partes en contacto, se escribe como:

{{f:igualdad_temperatura}}

El criterio mecánico se expresa como:

{{f:equilibrio_mecanico}}

Si la frontera movil no tiene aceleracion macroscopica, las presiones efectivas que la empujan quedan compensadas:

{{f:igualdad_presion}}

Cuando hay intercambio material permitido, el criterio correspondiente no es "misma concentracion" sino igualdad de potencial quimico:

{{f:equilibrio_material}}

El criterio general se resume mediante afinidades nulas:

{{f:equilibrio_general}}

Estas condiciones no son formulas aisladas, sino criterios de diagnostico. [[DeltaT]] mide la distancia al equilibrio térmico; [[DeltaP]] mide la distancia al equilibrio mecánico; [[A]] representa el impulso termodinámico general que queda para procesos permitidos por las restricciones del sistema.

La forma formal ayuda a separar dos lecturas complementarias. Las diferencias, como [[DeltaT]] y [[DeltaP]], indican cuanto falta para cerrar un canal de evolucion. Las igualdades de [[T]], [[P]] y [[mu]] describen el estado comun que queda cuando ese canal ya no selecciona un sentido macroscopico.

Un equilibrio completo exige que todos los canales relevantes se hayan cerrado: sin flujo neto de calor, sin empuje neto de fronteras, sin difusion neta y sin reaccion neta. Un equilibrio parcial puede cumplir una condición y fallar otra. Por ejemplo, un gas puede tener temperatura uniforme pero seguir expandiendose si [[DeltaP]] no se ha anulado.

## 🔴 Nivel estructural

La estructura del concepto depende de las restricciones. Si una pared es diaterma, permite intercambio de calor y exige igualdad de [[T]] para equilibrio térmico. Si una pared es rigida, no exige igualdad de presiones para movimiento de frontera porque la frontera no puede desplazarse. Si una membrana es impermeable, diferencias de [[mu]] pueden persistir sin intercambio de materia. Por eso equilibrio no se evalua con una lista ciega, sino con los procesos permitidos.

También importa la escala temporal [[tau]]. Un sistema puede parecer estable durante segundos y seguir lejos del equilibrio si su relajación es muy lenta. Los vidrios, geles, mezclas viscosas o sistemas aislados grandes pueden mostrar estados metastables: no cambian apreciablemente en la escala de observación, pero no cumplen todas las condiciones de equilibrio termodinámico estricto.

La estabilidad distingue equilibrio de simple estacionariedad. Un estado estacionario puede mantener flujos constantes, como una barra con calor entrando por un extremo y saliendo por otro. Sus variables no cambian en el tiempo, pero existe flujo neto interno; por tanto no es equilibrio termodinámico. El equilibrio verdadero no solo es constante: también carece de corrientes internas sostenidas.

## Interpretacion física profunda

El equilibrio termodinámico es el punto donde las variables intensivas han dejado de competir. La igualdad de [[T]] elimina el sentido preferente del calor; la igualdad efectiva de [[P]] elimina el empuje de una frontera movil; la igualdad de [[mu]] elimina la tendencia neta a transferir materia. Fisicamente, cada igualdad borra una flecha macroscópica de evolucion.

Esta lectura explica por que el equilibrio permite describir un sistema mediante pocas variables de estado. Si hay gradientes internos importantes, una sola temperatura o una sola presión no describe todo el sistema. Cuando el equilibrio se alcanza, esas variables globales vuelven a tener sentido operativo.

## Orden de magnitud

En problemas sencillos, una diferencia de temperatura de algunos kelvin ya basta para descartar equilibrio térmico exacto. En gases a presión atmosférica, diferencias de presión comparables a miles de pascales pueden mover pistones ligeros. En sistemas quimicos, diferencias pequeñas de potencial quimico pueden sostener difusion durante tiempos largos.

El tiempo de relajación [[tau]] puede variar enormemente: segundos para un gas bien mezclado, minutos para una taza de cafe, horas para un bloque grueso y anos para sistemas geologicos. Por eso conviene declarar siempre la escala temporal del diagnostico.

## Metodo de resolucion personalizado

1. Identifica el sistema y sus fronteras.
2. Decide que intercambios estan permitidos: calor, volumen, materia o reaccion.
3. Comprueba [[DeltaT]] si hay contacto térmico.
4. Comprueba [[DeltaP]] si hay frontera movil o equilibrio mecánico relevante.
5. Comprueba [[mu]] o [[A]] si hay intercambio material o reaccion.
6. Distingue equilibrio completo de equilibrio parcial o estado estacionario.

## Casos especiales y ejemplo extendido

**Equilibrio térmico pero no mecánico.** Dos gases separados por un pistón diatermo pueden tener la misma [[T]] y distinta [[P]]. Si el pistón puede moverse, el sistema aun cambia.

**Estado estacionario no equilibrado.** Una pared con temperatura constante en cada punto y flujo permanente de calor no cambia en el tiempo, pero no esta en equilibrio porque existe [[DeltaT]] espacial y corriente térmica.

**Ejemplo extendido.** Un recipiente dividido por una pared movil y diaterma contiene gas a ambos lados. Si inicialmente hay [[DeltaT]] y [[DeltaP]], primero se redistribuye calor y luego se ajusta el volumen. El equilibrio final exige temperatura comun y presión efectiva comun.

## Preguntas reales del alumno

**P: Si una variable no cambia, ya hay equilibrio?**

R: No necesariamente. Puede ser un estado estacionario con flujo constante. Equilibrio exige ausencia de gradientes impulsores, no solo valores constantes.

**P: Puede haber equilibrio parcial?**

R: Si. Un sistema puede estar en equilibrio térmico pero no mecánico, o mecánico pero no quimico. Hay que mirar las restricciones.

**P: Por que importa el potencial quimico?**

R: Porque la materia se mueve o reacciona por diferencias de potencial, no solo por diferencias visibles de concentracion.

## Conexiones transversales y rutas de estudio

Este leaf conecta con sistemas termodinámicos, variables intensivas y extensivas, temperatura, presión, energía interna, entropía y procesos reversibles. La ruta recomendada es: definir fronteras del sistema, estudiar variables de estado, entender equilibrio térmico y mecánico, y después extender el criterio a equilibrio quimico y estabilidad.

## Síntesis final

Un sistema esta en equilibrio termodinámico cuando se anulan los impulsos internos de cambio permitidos por sus restricciones. La igualdad de [[T]], la compensacion de [[P]] y la anulacion de [[A]] convierten un proceso transitorio en un estado describible mediante variables de estado. El equilibrio completo es más fuerte que estar quieto: exige ausencia de flujos internos netos.
