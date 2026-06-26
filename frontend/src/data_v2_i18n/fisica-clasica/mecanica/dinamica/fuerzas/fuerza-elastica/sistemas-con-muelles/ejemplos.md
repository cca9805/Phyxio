# Ejemplo tipo examen

## Enunciado

Un bloque de masa despreciable de la conexion se une a dos muelles ideales en serie, con constantes [[k1]] = 300 N/m y [[k2]] = 600 N/m. El conjunto se deforma una distancia total [[x]] = 0.09 m respecto de la posicion natural. Se pide:

1. Calcular la constante equivalente [[keq]] de la red en serie.
2. Calcular la fuerza elastica total con signo [[Fel]] y su modulo [[Fm]].
3. Determinar el reparto de deformacion interna [[x1]] y [[x2]].
4. Verificar consistencia de unidades y coherencia fisica del resultado.
5. Discutir como cambiaria la respuesta si la misma red se montara en paralelo.

## Datos

- [[k1]] = 300 N/m
- [[k2]] = 600 N/m
- [[x]] = 0.09 m
- Sistema lineal ideal sin rozamiento interno
- Eje positivo en el sentido de deformacion impuesta

Ademas, para el contraste en paralelo se consideran las mismas constantes [[k1]] y [[k2]] con igual deformacion [[x]].

## Definición del sistema

El sistema principal es una conexion en serie. En ese esquema la fuerza transmitida es la misma por ambos muelles, mientras que la deformacion total [[x]] se reparte como suma de contribuciones internas [[x1]] y [[x2]]. El bloque no introduce dinamica propia en este ejercicio; se trata de una lectura constitutiva cuasiestatica.

Esta definicion evita un error frecuente: confundir "sistema con muelles" con "ley de un solo muelle". Aqui interesa la arquitectura de conexion y su impacto sobre [[keq]], no solo la ley local de cada resorte.

## Modelo físico

Se usa el nucleo del leaf completo:

{{f:serie_dos_muelles}}

{{f:hooke_equivalente_1d}}

{{f:hooke_equivalente_modulo}}

{{f:reparto_serie}}

{{f:paralelo_dos_muelles}}

{{f:reparto_paralelo}}

{{f:equilibrio_vertical}}

Aunque el problema principal no requiere equilibrio vertical, se incluye esa relacion para mostrar continuidad del marco teorico y para recordar que el mismo [[keq]] tambien se usa cuando aparece [[m]], [[g]] y [[x_eq]].

## Justificación del modelo

Las ecuaciones elegidas son adecuadas porque el problema explicita un regimen lineal y deformaciones moderadas. En ese contexto, la conexion serie se representa por una rigidez equivalente [[keq]] menor que cada rigidez individual, y la fuerza total [[Fel]] resulta restauradora respecto de [[x]].

La inclusion de la formula de paralelo no es decorativa: permite una comparacion fisica directa entre dos topologias con los mismos componentes [[k1]] y [[k2]]. Esa comparacion es central en este leaf porque revela como la arquitectura altera el comportamiento global.

## Resolución simbólica

Para la conexion en serie:

{{f:serie_dos_muelles}}

Para fuerza total:

{{f:hooke_equivalente_1d}}

Para modulo:

{{f:hooke_equivalente_modulo}}

Para reparto de deformacion:

{{f:reparto_serie}}

Para contraste de arquitectura en paralelo:

{{f:paralelo_dos_muelles}}

y, en caso de discutir fuerzas individuales en paralelo, la relacion de suma:

{{f:reparto_paralelo}}

Si el sistema se monta en vertical, la extension estatica de referencia se obtiene con:

{{f:equilibrio_vertical}}

## Sustitución numérica

En serie, con [[k1]] = 300 y [[k2]] = 600, la rigidez equivalente [[keq]] resulta 200 N/m.

Con [[x]] = 0.09 m, la fuerza equivalente con signo [[Fel]] es restauradora y vale -18 N, mientras que el modulo [[Fm]] vale 18 N.

Como en serie la fuerza interna es comun, el reparto de deformacion favorece al muelle mas blando: [[x1]] = 0.06 m y [[x2]] = 0.03 m, cumpliendo que [[x]] es la suma de ambas.

Para el contraste en paralelo, la misma pareja de muelles produce [[keq]] = 900 N/m. Si se impone la misma [[x]], el modulo total [[Fm]] sube fuertemente. La distribucion individual en paralelo se entiende con [[F1]] y [[F2]], donde la suma recupera el total y la proporcion depende de [[k1]] y [[k2]].

## Validación dimensional

La rigidez equivalente conserva unidad de rigidez, la fuerza total conserva unidad de fuerza y la deformacion conserva unidad de longitud. Ademas, la lectura cualitativa coincide con lo esperado:

1. En serie, [[keq]] queda por debajo de [[k1]] y [[k2]].
2. En paralelo, [[keq]] supera a cada constante individual.
3. El reparto interno en serie asigna mayor deformacion al muelle de menor rigidez.

Estos tres chequeos son suficientes para detectar errores de algebra o de seleccion de modelo.

## Interpretación física

El resultado principal no es un numero aislado, sino una regla de diseño: la arquitectura de conexion controla la "blandura" o "dureza" global del sistema. Si el objetivo es absorber desplazamiento con menor fuerza transmitida, la configuracion serie suele ser favorable. Si el objetivo es limitar desplazamiento bajo carga, la configuracion paralelo suele ser mas eficaz.

Tambien se aprende que el reparto interno importa. Un valor total aceptable de [[x]] puede ocultar que uno de los muelles esta cerca de su limite de deformacion individual. Por eso el analisis de [[x1]], [[x2]], [[F1]] y [[F2]] no es opcional en aplicaciones reales.

Finalmente, la continuidad con equilibrio vertical se mantiene: el mismo [[keq]] que aqui se obtiene por topologia se usa luego para estimar [[x_eq]] cuando se introduce [[m]] y [[g]]. Esa continuidad evita memorizar formulas sueltas y fortalece criterio de modelado.

Desde una lectura de seguridad, este resultado sugiere una practica concreta: antes de aprobar un diseño, comparar no solo la respuesta media, sino tambien el peor caso de rama. Ese peor caso suele definir mantenimiento y vida util. En otras palabras, la interpretacion fisica no termina en la cifra central; termina en la decision operativa que reduce riesgo.

La causalidad clave puede resumirse asi: cambiar topologia cambia [[keq]], cambiar [[keq]] cambia la relacion entre carga y desplazamiento, y ese cambio modifica directamente vibracion, fatiga y confort del sistema. Por eso, aunque dos montajes usen los mismos componentes, no son funcionalmente equivalentes.

Tambien hay una lectura de confiabilidad: cuando el reparto interno se concentra en una rama, el modo de fallo probable deja de ser global y pasa a ser local. En la practica, esto implica que la vida util depende mas de la rama critica que del promedio del conjunto.

# Ejemplo de aplicación real

## Contexto

Una suspension ligera para un modulo instrumental debe soportar una carga variable sin exceder recorrido disponible. El equipo de diseño dispone de dos muelles comerciales con [[k1]] y [[k2]] conocidas y evalua dos variantes: montaje en serie para mayor aislamiento o montaje en paralelo para mayor control de desplazamiento.

En pruebas preliminares se registra la carga total como modulo [[Fm]], pero el equipo tambien necesita estimar fuerzas parciales [[F1]] y [[F2]] para no sobrepasar limites de catalogo en cada componente. Ademas, por seguridad, se valida la deformacion estatica de equilibrio [[x_eq]] ante la masa efectiva [[m]] del subconjunto.

## Estimación física

La primera estimacion calcula [[keq]] para ambas arquitecturas. Con ello se proyecta el desplazamiento bajo una misma fuerza operativa y se decide si el recorrido mecanico disponible es suficiente.

Luego se evalua reparto interno: en serie se revisan [[x1]] y [[x2]] para prevenir que el muelle mas blando trabaje fuera de rango. En paralelo se revisan [[F1]] y [[F2]] para confirmar que ninguna rama recibe una porcion de carga superior a la permitida.

Finalmente, con la masa efectiva [[m]] y gravedad [[g]], se estima [[x_eq]] en montaje vertical para detectar hundimiento estatico excesivo antes de fabricar prototipos.

## Interpretación

La aplicacion muestra por que este leaf no se reduce a una sola ecuacion de Hooke. En ingenieria, elegir serie o paralelo cambia sensibilidad, carga transmitida y margen de seguridad de cada componente.

La leccion operativa es concreta: decidir arquitectura solo por intuicion puede producir fallos de recorrido o sobrecarga local. En cambio, usar [[keq]], [[Fel]], [[Fm]] y el reparto interno permite justificar decisiones con trazabilidad fisica y cuantitativa.

Este enfoque tambien mejora comunicacion entre diseño, ensayo y mantenimiento, porque cada equipo comparte las mismas magnitudes de control y los mismos criterios de validez del modelo lineal.

En terminos de decision, el mensaje fisico es directo: si se prioriza aislamiento frente a picos de carga, conviene una arquitectura mas complaciente; si se prioriza estabilidad geometrica, conviene una arquitectura mas rigida. El calculo no reemplaza esa eleccion, la hace transparente y defendible.

Asi, la interpretacion final conecta mecanismo y operacion: la estructura elastica no solo "da un numero", sino que determina como se transmite energia, donde se concentran esfuerzos y que estrategia de mantenimiento resulta razonable.
