# Errores comunes en sistema abierto

## Errores conceptuales

### Error 1: "Abierto significa simplemente sin tapa"

**Descripción.** El alumno decide si un sistema es abierto mirando si esta físicamente expuesto al exterior.

**Por que parece correcto.** En lenguaje cotidiano, abierto significa no cerrado por una tapa o una pared.

**Senal de deteccion.** Se llama abierto a un recipiente que intercambia calor pero no masa, o cerrado a una tuberia porque sus paredes son solidas.

**Correccion conceptual.** En termodinámica, un sistema abierto es aquel cuya frontera permite paso de masa. La geometria visible importa menos que el intercambio real a traves de la frontera.

**Mini-ejemplo de contraste.** Una olla tapada con vapor saliendo por una valvula es sistema abierto. Un cilindro sellado que recibe calor es sistema cerrado.

### Error 2: "Si la masa interna no cambia, el sistema es cerrado"

**Descripción.** Se identifica masa constante con ausencia de flujo.

**Por que parece correcto.** En sistemas cerrados la masa total permanece constante, así que se invierte indebidamente la idea.

**Senal de deteccion.** Se ignoran corrientes de entrada y salida porque [[m_sys]] no cambia.

**Correccion conceptual.** Un sistema abierto puede tener [[m_sys]] constante si el caudal que entra iguala al que sale. La clave es si cruza masa, no si se acumula.

**Mini-ejemplo de contraste.** Una turbina en regimen estacionario mantiene masa interna casi constante, pero tiene [[m_dot]] de entrada y de salida.

## Errores de modelo

### Error 3: "Hacer solo balance de calor y trabajo"

**Descripción.** Se escribe energía acumulada igual a calor menos trabajo y se omite la energía transportada por la masa.

**Por que parece correcto.** Esa forma se parece al balance de un sistema cerrado.

**Senal de deteccion.** Hay [[m_dot]] no nulo pero no aparecen terminos con [[e_flujo]] o [[h]].

**Correccion conceptual.** En un sistema abierto, la masa que cruza la frontera trae o se lleva energía. El balance de energía debe incluir corrientes de entrada y salida.

**Mini-ejemplo de contraste.** Si entra agua caliente a un deposito, la energía almacenada puede aumentar aunque [[Q_dot]] externo sea cero.

### Error 4: "Usar entalpía sin declarar frontera de flujo"

**Descripción.** Se introduce [[h]] como propiedad automatica sin explicar que la masa cruza una frontera.

**Por que parece correcto.** Muchos problemas de maquinas térmicas usan tablas de entalpía directamente.

**Senal de deteccion.** No se dibuja volumen de control ni se identifican entradas y salidas.

**Correccion conceptual.** La entalpía es natural en corrientes que cruzan una frontera de flujo. Primero se define el volumen de control, después se asignan propiedades a cada corriente.

**Mini-ejemplo de contraste.** En una masa fija de gas dentro de un pistón sellado puede usarse energía interna; en una turbina atravesada por vapor se usa [[h]] de entrada y salida.

## Errores matemáticos

### Error 5: "No fijar convenio de signos"

**Descripción.** Se mezclan terminos positivos y negativos sin declarar si calor, trabajo o caudal entran o salen.

**Por que parece correcto.** Las formulas se recuerdan como plantillas y se sustituyen valores sin leer sentidos físicos.

**Senal de deteccion.** [[W_dot]] cambia de signo entre pasos o se suma una salida de masa como si fuera entrada.

**Correccion conceptual.** Antes de calcular, declara el convenio. Una opcion habitual es [[Q_dot]] positivo entrando, [[W_dot]] positivo saliendo y corrientes separadas en entradas y salidas.

**Mini-ejemplo de contraste.** Un compresor consume trabajo; si se usa el convenio de potencia producida positiva, su [[W_dot]] sera negativo o se escribira como trabajo de entrada.

## Errores de interpretacion

### Error 6: "Estacionario significa sin intercambio"

**Descripción.** Se lee derivada cero como ausencia de procesos.

**Por que parece correcto.** Si una magnitud no cambia, parece que nada ocurre.

**Senal de deteccion.** Se concluye que no hay energía cruzando porque [[E_sys]] es constante.

**Correccion conceptual.** En regimen estacionario puede haber grandes flujos que se compensan. La acumulacion nula no borra entradas y salidas.

**Mini-ejemplo de contraste.** Un intercambiador de calor estacionario puede mantener energía interna constante mientras transfiere kilovatios entre corrientes.

## Regla de autocontrol rápido

Antes de resolver, pregunta: que frontera elegi, que masa cruza, que energía acompana a esa masa y que energía cruza sin masa. Si hay [[m_dot]] no nulo, no uses un balance de sistema cerrado sin justificar una reduccion.
