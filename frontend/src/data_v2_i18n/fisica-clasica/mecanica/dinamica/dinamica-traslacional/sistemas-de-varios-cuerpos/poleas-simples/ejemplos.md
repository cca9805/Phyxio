# Ejemplo tipo examen

## Enunciado

Un operario debe elevar una carga de 60 kg utilizando un sistema de polea móvil simple. Se desea determinar la fuerza que debe ejercer el operario sobre el cable y la longitud de cable que debe tirar para elevar la carga 2 metros. Se considera un sistema ideal sin rozamiento ni peso de la polea.

## Datos

- Masa de la carga: 60 kg
- Aceleración gravitatoria: 9.8 m/s²
- Número de tramos activos [[nSel]]: 2 (polea móvil simple)
- Desplazamiento vertical de la carga [[dx_load]]: 2 m

## Definición del sistema

El sistema consiste en una carga suspendida de una polea móvil simple. La cuerda pasa por la polea móvil, con un extremo fijo en un punto superior y el otro extremo libre donde el operario aplica la fuerza. La polea móvil se desplaza verticalmente junto con la carga.

## Modelo físico

Se aplica el modelo ideal de poleas simples, donde:
- La cuerda es inextensible y de masa despreciable
- La polea no tiene masa ni rozamiento en su eje
- El sistema está en equilibrio estático o movimiento cuasi-estático

La fuerza de tracción se obtiene con:

{{f:fuerza_ideal_poleas}}

El desplazamiento de la cuerda se obtiene con:

{{f:traccion_cable_poleas}}

## Justificación del modelo

El modelo ideal es adecuado porque:
- La carga es mucho mayor que el peso típico de una polea pequeña (< 5% error)
- Se asume operación lenta (velocidad constante, aceleración despreciable)
- El sistema está bien lubricado (rozamiento mínimo)

## Resolución simbólica

Paso 1: Calcular el peso de la carga
El peso [[W]] se obtiene multiplicando la masa por la gravedad.

Paso 2: Aplicar la fórmula de fuerza ideal

{{f:fuerza_ideal_poleas}}

La fuerza aplicada [[F]] se calcula repartiendo [[W]] entre los tramos activos [[nSel]].

Paso 3: Calcular el desplazamiento de la cuerda

{{f:traccion_cable_poleas}}

El desplazamiento de cuerda [[dx_pull]] se obtiene multiplicando [[nSel]] por [[dx_load]].

## Sustitución numérica

Paso 1: Peso de la carga
El peso de la carga es 60 kg × 9.8 m/s² = 588 N.

Paso 2: Fuerza de tracción
La fuerza de tracción resulta 588 N dividido entre 2, es decir, 294 N.

Equivalente a aproximadamente 30 kgf, una fuerza que un adulto promedio puede ejercer sostenidamente.

Paso 3: Desplazamiento de la cuerda
El desplazamiento de cuerda resulta de duplicar 2 m, por tanto son 4 m.

## Validación dimensional

- [[W]] queda en newtons porque combina masa y aceleración gravitatoria.
- [[F]] queda en newtons porque divide una fuerza entre un número adimensional.
- [[dx_pull]] queda en metros porque multiplica una distancia por un número adimensional.

Coherencia física: La fuerza calculada (294 N) es menor que el peso (588 N), consistente con la ventaja mecánica de la polea móvil. El desplazamiento de cuerda (4 m) es mayor que la elevación (2 m), consistente con el principio de conservación de energía.

## Interpretación física

El análisis revela que la polea móvil proporciona una ventaja mecánica de 2:1, permitiendo que el operario eleve una carga de 60 kg ejerciendo una fuerza equivalente a solo 30 kg. Esta reducción de fuerza se logra a costa de un mayor recorrido: el operario debe tirar 4 metros de cuerda para elevar la carga solo 2 metros.

Desde la perspectiva energética, el trabajo realizado por el operario y el trabajo contra la gravedad son del orden de 1.2 kJ, confirmando la conservación de energía. La polea móvil no crea energía; simplemente redistribuye el esfuerzo permitiendo una mayor distancia de aplicación con menor fuerza. Por eso el resultado no es solo "294 N": también indica que la configuración es ergonómicamente viable y que la cuerda disponible debe permitir el recorrido duplicado.

Este ejemplo ilustra el principio fundamental de todas las máquinas simples: la ventaja mecánica multiplica la fuerza pero no puede multiplicar el trabajo, ya que el trabajo es el producto de fuerza por distancia y este producto permanece constante (menos pérdidas) en el sistema ideal.

# Ejemplo de aplicación real

## Contexto

En un taller de carpintería, un trabajador necesita elevar paneles de madera de 45 kg hasta una altura de 1.5 metros para colocarlos en un almacén elevado. El trabajador puede ejercer una fuerza máxima sostenida de aproximadamente 300 N (equivalente a levantar un objeto de unos 30 kg).

Se dispone de dos configuraciones: una polea fija anclada en el techo, o una polea móvil suspendida de la carga. Se debe determinar qué configuración permite realizar la tarea de forma segura y eficiente.

## Estimación física

Cálculo del peso de los paneles:
El peso [[W]] de los paneles es 45 kg × 9.8 m/s², aproximadamente 441 N o 45 kgf.

**Opción A - Polea fija, con [[nSel]] de 1:**
Usando la relación ideal de fuerza:

{{f:fuerza_ideal_poleas}}

La fuerza [[F]] requerida es 441 N dividido entre 1, por tanto 441 N.

El trabajador necesitaría ejercer 441 N, superando su capacidad sostenida de 300 N. Esta configuración no es viable para operación manual continua.

Desplazamiento de cuerda:

{{f:traccion_cable_poleas}}

El desplazamiento [[dx_pull]] coincide con la elevación: 1.5 m.

**Opción B - Polea móvil, con [[nSel]] de 2:**
Usando la relación ideal de fuerza:

{{f:fuerza_ideal_poleas}}

La fuerza [[F]] requerida es 441 N dividido entre 2, aproximadamente 221 N.

El trabajador ejerce 221 N, bien dentro de su capacidad de 300 N. Esta configuración es viable.

Desplazamiento de cuerda:

{{f:traccion_cable_poleas}}

El desplazamiento [[dx_pull]] duplica la elevación y alcanza 3 m.

Verificación energética:
- Trabajo contra gravedad: unos 662 J
- Trabajo del operario: unos 663 J
- Diferencia (~1.5 J) representa pérdidas por rozamiento menores al 1%

## Interpretación

El análisis demuestra que la elección de configuración de polea depende críticamente de la relación entre la fuerza requerida y la capacidad del operario. La polea fija, aunque más simple de instalar, exige 441 N — una fuerza que el trabajador podría ejercer brevemente pero no sostener durante múltiples operaciones de carga.

La polea móvil reduce la fuerza a 221 N, permitiendo que el trabajador realice la tarea repetidamente sin fatiga excesiva ni riesgo de lesión. El costo es un mayor recorrido de cuerda (3 m en lugar de 1.5 m), que resulta aceptable en el contexto de un taller donde la seguridad y la capacidad de operación sostenida priman sobre la velocidad.

Esta aplicación real ilustra cómo la física de poleas simples tiene implicaciones directas en ergonomía laboral y diseño de sistemas de manejo de materiales. El conocimiento de la relación inversa entre [[F]] y [[nSel]], para una carga [[W]] dada, permite a ingenieros y técnicos seleccionar equipos apropiados para las capacidades humanas, previniendo accidentes y mejorando la eficiencia operativa.
