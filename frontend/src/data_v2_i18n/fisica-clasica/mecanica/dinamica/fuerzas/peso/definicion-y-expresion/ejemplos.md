# Ejemplo tipo examen

## Enunciado

Una sonda educativa compara el peso de una masa patrón [[m]] en dos escenarios: superficie terrestre y estación a mayor distancia radial [[r]] del centro del astro. El objetivo es conectar definición vectorial y expresión escalar del peso, mostrando cuándo basta usar [[gmod]] constante y cuándo conviene derivar [[gmod]] desde [[G]], [[M_astro]] y [[r]]. También se pide interpretar la dirección del peso en un diagrama de cuerpo libre con ejes cartesianos donde aparecen [[P_x]], [[P_y]], [[g_x]] y [[g_y]].

## Datos

Datos de referencia para el caso:

- [[m]] = 12 kg
- [[gmod]]_superficie = 9.8 m/s^2
- [[G]] = 6.674e-11 N m^2/kg^2
- [[M_astro]] = 5.97e24 kg
- [[r]]_superficie = 6.37e6 m
- [[r]]_orbita = 6.87e6 m

Convención de ejes del DCL: eje y positivo hacia arriba. Por tanto, las componentes gravitatorias verticales resultan negativas en ese sistema.

## Definición del sistema

Sistema físico: masa puntual sujeta únicamente a interacción gravitatoria del astro en cada escenario.

Magnitudes núcleo del leaf empleadas explícitamente: [[P]], [[Pmod]], [[m]], [[g]], [[gmod]], [[G]], [[M_astro]], [[r]], [[P_x]], [[P_y]], [[g_x]], [[g_y]].

En el escenario terrestre local se adopta aproximación de campo casi uniforme. En el escenario orbital cercano se evalúa además dependencia radial para comparar precisión.

## Modelo físico

El modelo se organiza en tres capas:

1. Definición vectorial de peso para dirección y sentido de la fuerza.
2. Expresión escalar de peso para magnitud numérica cuando la dirección ya está fijada.
3. Modelo de campo central para calcular [[gmod]] cuando la variación radial no puede despreciarse.

Esta estructura evita mezclar conceptos: [[P]] no es lo mismo que [[Pmod]], y [[g]] vectorial no es solo un número suelto.

## Justificación del modelo

Se justifica usar forma escalar en superficie porque el enunciado proporciona [[gmod]] local y el objetivo inicial es magnitud rápida de peso. Se justifica usar forma central en órbita porque cambia [[r]] y la pregunta exige analizar cómo esa variación afecta [[gmod]] y, por extensión, [[Pmod]].

Además, el enunciado pide dirección y componentes, por lo que la forma vectorial y la regla direccional son obligatorias para cerrar coherencia física.

## Resolución simbólica

Definición vectorial del peso:

{{f:peso_vectorial}}

Expresión escalar del peso:

{{f:modulo_peso}}

Campo central para gravedad local:

{{f:gravedad_campo_central}}

Regla de dirección:

{{f:direccion_peso}}

Aplicaciones simbólicas:

- Escenario superficie: [[Pmod]] = [[m]]*[[gmod]]_superficie.
- Escenario órbita: [[gmod]]_orbita = [[G]]*[[M_astro]]/[[r]]_orbita^2 y luego [[Pmod]]_orbita = [[m]]*[[gmod]]_orbita.
- En ejes cartesianos con x horizontal e y vertical: [[P_x]] = 0, [[P_y]] = -[[Pmod]], [[g_x]] = 0, [[g_y]] = -[[gmod]].

## Sustitución numérica

Escenario superficie:

- [[Pmod]]_superficie = 12*9.8 = 117.6 N.

Escenario órbita:

- [[gmod]]_orbita = 6.674e-11*5.97e24/(6.87e6^2) ≈ 8.44 m/s^2.
- [[Pmod]]_orbita = 12*8.44 ≈ 101.3 N.

Componentes en ambos escenarios (convención dada):

- [[P_x]] = 0.
- [[P_y]] negativo con módulo igual a [[Pmod]].
- [[g_x]] = 0.
- [[g_y]] negativo con módulo igual a [[gmod]].

Comparación cuantitativa:

- Reducción relativa de peso ≈ (117.6 - 101.3)/117.6 ≈ 13.9 por ciento.

## Validación dimensional

Chequeos de unidades:

- [[Pmod]] en newtons a partir de kg*m/s^2.
- [[gmod]] en m/s^2 desde [[G]]*[[M_astro]]/[[r]]^2.
- Componentes [[P_x]], [[P_y]] en newtons.

Chequeos físicos:

1. El peso disminuye al aumentar [[r]], coherente con el modelo central.
2. La dirección de [[P]] coincide con la de [[g]], coherente con la regla direccional.
3. La masa [[m]] permanece constante entre escenarios, coherente con su carácter inercial.

## Interpretación física

La lectura física central es que la expresión del peso depende de la pregunta. Si la pregunta es "cuánto pesa", la forma escalar [[Pmod]] es eficiente. Si la pregunta es "hacia dónde actúa y cómo entra al balance", la forma vectorial [[P]] es indispensable.

También se observa que el peso no es atributo fijo del objeto: cambia con el entorno gravitatorio porque cambia [[gmod]]. Por eso, hablar de "la masa cambió" cuando cambia el peso es un error conceptual.

En términos de modelado, este ejemplo muestra una transición concreta: campo uniforme para estimación local rápida, campo central para comparación radial cuantitativa. La decisión no es estética, es de precisión requerida.

# Ejemplo de aplicación real

## Contexto

Una empresa de metrología diseña una estación de calibración de celdas de carga para operar en dos sedes: una a nivel del mar y otra en altitud elevada. El protocolo de calibración usa masas patrón iguales en ambas sedes y necesita interpretar por qué la lectura en newtons cambia sin que cambie la masa física de los patrones.

Además, el software de calibración genera DCL simplificados donde se reportan componentes [[P_x]] y [[P_y]], por lo que la regla de dirección del peso debe validarse para evitar errores de signo en informes automáticos.

## Estimación física

El equipo aplica el esquema del leaf:

1. Usa [[Pmod]] = [[m]]*[[gmod]] para cada sede con su gravedad local.
2. Estima diferencia relativa de lectura entre sedes para ajustar tablas de corrección.
3. Revisa coherencia direccional con [[P]] alineada a [[g]] y componentes verticales negativas en su convención.

Con masas patrón de 20 kg y diferencia local de [[gmod]] de aproximadamente 1.5 por ciento entre sedes, la lectura de peso cambia alrededor de 3 N. Esa diferencia, pequeña para uso cotidiano, es crítica en calibración fina.

## Interpretación

La aplicación muestra por qué este leaf no se reduce a una fórmula de memoria. Entender definición y expresión del peso permite separar claramente propiedad del cuerpo (masa) de condición del entorno (gravedad). Esa separación evita ajustes incorrectos de instrumentos y mejora trazabilidad metrológica.

También confirma la utilidad del enfoque vector-escalar: la magnitud corrige lectura de carga, mientras la dirección asegura consistencia de signos en modelos automáticos. El resultado final es una calibración más confiable y físicamente justificable.
