# Ejemplo tipo examen

## Enunciado

Un bloque de [[m]] = 12 kg se mueve sobre un plano inclinado de [[theta]] = 25 grados. El bloque esta unido por una cuerda que ejerce [[T]] paralela al plano hacia arriba. El contacto con el plano puede estar en regimen estatico o cinetico segun la condicion de arrastre. Se pide construir el diagrama de cuerpo libre, proyectar por ejes tangencial-normal y determinar [[ax]] y [[ay]] para dos escenarios: sin deslizamiento y con deslizamiento.

Adicionalmente, se solicita justificar cuando usar [[fs]] o [[fk]], verificar coherencia dimensional, y cerrar con interpretacion fisica de regimen.

## Datos

- [[m]] = 12 kg
- [[g]] = 9.81 m/s^2
- [[theta]] = 25 grados
- [[mu_s]] = 0.42
- [[mu_k]] = 0.30
- Tension aplicada [[T]] = 70 N
- Convencion: eje x paralelo al plano y eje y normal al plano
- Estado A: adherencia (sin deslizamiento)
- Estado B: deslizamiento descendente

## Definición del sistema

Sistema aislado: bloque.

Interacciones externas consideradas en el DCL:

- Peso [[P]], aplicado por la Tierra.
- Normal [[N]], aplicada por el plano.
- Tension [[T]], aplicada por la cuerda.
- Rozamiento de contacto: [[fs]] o [[fk]] segun regimen.

No se incluyen fuerzas internas del bloque porque no pertenecen al balance externo.

## Modelo físico

Se aplica mecanica clasica con fuerzas externas proyectadas por ejes:

{{f:newton_vectorial}}

{{f:newton_x}}

{{f:newton_y}}

{{f:componentes_peso_plano}}

{{f:equilibrio_vertical}}

{{f:rozamiento_estatico}}

{{f:rozamiento_cinetico}}

El modelo requiere declarar primero el regimen de contacto y luego elegir la ecuacion de rozamiento correspondiente.

## Justificación del modelo

Este modelo es apropiado porque el sistema es macroscópico, la velocidad es moderada y la aproximacion de rigidez del bloque/plano es razonable. Se considera [[g]] uniforme y se desprecia deformacion significativa del contacto.

La descomposicion del peso en [[Ppar]] y [[Pperp]] es necesaria porque los ejes no son horizontal-vertical, sino adaptados al plano. Esto simplifica el balance por ejes y permite distinguir claramente condicion normal de condicion tangencial.

El rozamiento se modela por dos leyes dependiendo del estado:

- Si no hay deslizamiento, [[fs]] cumple una cota con [[mu_s]] y [[N]].
- Si hay deslizamiento, [[fk]] queda fijado por [[mu_k]] y [[N]].

Por tanto, la validez del resultado depende de la consistencia entre hipotesis de regimen y observacion fisica.

## Resolución simbólica

1) Proyeccion del peso:

- [[Ppar]] = [[m]]*[[g]]*sin([[theta]])
- [[Pperp]] = [[m]]*[[g]]*cos([[theta]])

2) Eje normal (y):

Si no hay separacion del plano, [[ay]] = 0 y el balance vertical da [[N]] aproximadamente igual a [[Pperp]].

3) Escenario A (sin deslizamiento):

- Se verifica si existe [[fs]] tal que satisfaga el balance tangencial.
- Condicion de existencia: [[fs]] <= [[mu_s]]*[[N]].

4) Escenario B (con deslizamiento descendente):

- El rozamiento pasa a [[fk]] = [[mu_k]]*[[N]].
- El balance tangencial con [[T]], [[Ppar]] y [[fk]] determina [[Fx]] y por tanto [[ax]].

6) Cierre vectorial global:

{{f:newton_vectorial}}

En esta lectura, [[Fext]] resume la accion externa total y debe ser coherente con las proyecciones por eje.

5) Lectura por ejes:

- [[Fy]] controla contacto y estabilidad normal.
- [[Fx]] controla cambio de velocidad sobre el plano.

## Sustitución numérica

1) Peso total:

[[P]] = [[m]]*[[g]] = 12*9.81 = 117.72 N

2) Componentes del peso:

- [[Ppar]] aprox 117.72*sin(25) aprox 49.75 N
- [[Pperp]] aprox 117.72*cos(25) aprox 106.68 N

3) Normal aproximada en apoyo:

[[N]] aprox 106.68 N

4) Cota estatica:

[[mu_s]]*[[N]] aprox 0.42*106.68 aprox 44.81 N

Para sostener adherencia, el [[fs]] requerido por balance tangencial debe ser menor o igual a 44.81 N.

5) Rozamiento cinetico:

[[fk]] aprox [[mu_k]]*[[N]] aprox 0.30*106.68 aprox 32.00 N

6) Balance tangencial en escenario de deslizamiento descendente:

La lectura cuantitativa da que el efecto combinado de [[T]] y [[fk]] puede compensar parcialmente [[Ppar]], pero el signo final de [[Fx]] depende de la direccion de rozamiento elegida segun movimiento relativo.

En este caso de referencia, si el bloque desliza hacia abajo, [[fk]] apunta hacia arriba del plano. Entonces la tendencia neta se reduce frente al peso paralelo.

## Validación dimensional

- [[P]], [[N]], [[T]], [[fk]], [[fs]], [[Fx]] y [[Fy]] en N.
- [[a]], [[ax]], [[ay]] en m/s^2.
- [[mu_s]] y [[mu_k]] adimensionales.
- [[theta]] adimensional en formula trigonometrica.

No se detecta conflicto dimensional. La consistencia final depende de signos y regimen de contacto.

## Interpretación física

La lectura principal es causal: el diagrama separa correctamente el rol de cada fuerza. [[P]] no actua alineado con el plano, por eso se descompone en [[Ppar]] y [[Pperp]]. [[Pperp]] controla carga normal y condiciona [[N]], mientras [[Ppar]] compite con [[T]] y rozamiento en el eje tangencial.

Ademas, el vector [[Fext]] funciona como chequeo de consistencia: si las componentes por eje estan bien planteadas, la lectura vectorial global coincide con la tendencia de movimiento observada.

Esto implica que un mismo valor de [[T]] puede producir resultados dinamicos distintos si cambian [[theta]], [[mu_s]] o [[mu_k]]. Por tanto, no hay una "fuerza unica de movimiento"; hay balance de interacciones con direcciones especificas.

Si el estado es adherente, [[fs]] se adapta hasta cota y puede mantener [[ax]] cercano a cero. Si el estado cruza umbral, aparece [[fk]] y el sistema cambia de respuesta. Ese cambio de regimen es fisicamente significativo y no puede modelarse manteniendo la misma ecuacion de rozamiento.

En conclusion, el DCL no solo resuelve un numero: organiza decision de modelo, explica sensibilidad a parametros y entrega criterio operativo para predecir deslizamiento.

# Ejemplo de aplicación real

## Contexto

En una banda inclinada de paqueteria, cajas de masa variable suben mediante arrastre por correa lateral. El equipo de operaciones observa que algunos paquetes pesados retroceden en ciertos turnos aun cuando el control mantiene la misma tension nominal. Se sospecha variacion de superficie de contacto por polvo fino y humedad.

## Estimación física

Tomemos un lote con [[m]] promedio de 18 kg y [[theta]] de 20 grados:

- [[P]] aprox 176.6 N
- [[Ppar]] aprox 60.4 N
- [[Pperp]] aprox 165.8 N

Si el contacto seco ofrece [[mu_s]] = 0.45, la cota de [[fs]] ronda 74.6 N. Si en turno humedo [[mu_s]] cae a 0.25, la cota baja a 41.5 N.

Lectura cuantitativa: la caida de cota es de 33.1 N. Ese cambio de escala explica por que la misma estrategia de arrastre puede sostener adherencia en un turno y fallar en otro. En orden de magnitud, el margen pasa de alrededor de 10^1 N alto a un margen mucho mas estrecho.

Si ademas aparece deslizamiento, el modelo con [[fk]] usando [[mu_k]] mas bajo reduce aun mas la capacidad de compensar [[Ppar]]. Por eso el comportamiento observado es coherente con transicion de regimen de contacto.

## Interpretación

El diagnostico correcto no es "la maquina pierde fuerza" en abstracto. El DCL muestra que el problema puede estar dominado por interfaz: cambia [[mu_s]], cambia cota de [[fs]], cambia criterio de no deslizamiento.

Esto significa que la accion operativa debe combinar control y mantenimiento superficial. Aumentar tension puede ayudar, pero si no se estabiliza contacto, el sistema seguira alternando entre regimens con dispersion alta.

Interpretacion causal final: el desempeno de transporte depende del balance entre [[T]], [[Ppar]] y capacidad de contacto determinada por [[N]], [[mu_s]] y [[mu_k]]. El DCL permite separar causa raiz de sintoma y reduce decisiones de ajuste ciego.
