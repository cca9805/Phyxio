# Ejemplo tipo examen

## Enunciado

Una línea de transporte mueve cajas de producto químico en pendiente pequeña. El motor entrega una fuerza aplicada [[F_ap]] casi constante durante el arranque. El fabricante indica que, en condiciones nominales, la eficiencia mecánica global [[eta]] es del 0.84, pero el equipo de mantenimiento sospecha desgaste porque la temperatura del conjunto aumenta y la aceleración medida tarda en estabilizarse.

Se pide determinar si el sistema puede arrancar con margen dinámico suficiente, estimar su aceleración real [[a]], comparar ese resultado con la aceleración ideal [[a_ideal]], y extraer una interpretación física que sirva para decidir si la operación debe continuar en ese estado o si conviene programar intervención.

## Datos

- Masa efectiva del sistema móvil: [[m]] = 1850 kg.
- Fuerza aplicada estimada en arranque: [[F_ap]] = 5400 N.
- Pérdida equivalente inicial por fricción y arrastre: [[F_loss]] = 1700 N.
- Potencia eléctrica de entrada en arranque: [[P_in]] = 34 kW.
- Eficiencia reportada en pruebas recientes: [[eta]] = 0.84.
- Radio equivalente de tambor para conversión de par de rozamiento: [[r]] = 0.19 m.
- Par de fricción medido en eje: [[tau_fr]] = 320 N m.
- Velocidad instantánea al final del primer segundo: [[v]] = 0.72 m/s.

## Definición del sistema

El sistema incluye motor, reductor, tambor, banda, carga y rodamientos. Para dinámica traslacional se representa todo el conjunto con una masa efectiva [[m]]. Las pérdidas internas se agrupan como fuerza equivalente [[F_loss]], que resume fricción seca, fricción viscosa y pérdidas de transmisión. El régimen analizado es de arranque, donde la variable crítica es si [[F_net]] resulta positiva con margen.

## Modelo físico

Usaremos el modelo real de balance de fuerza y su enlace con eficiencia y potencia. Las ecuaciones núcleo del leaf son:

{{f:fuerza_neta_real}}

{{f:segunda_ley_efectiva}}

{{f:aceleracion_ideal}}

{{f:aceleracion_con_eficiencia}}

{{f:rendimiento_potencia}}

{{f:potencia_perdida}}

{{f:fuerza_equivalente_torque}}

{{f:potencia_traslacional}}

## Justificación del modelo

Este modelo es apropiado porque el arranque ocurre en una ventana corta donde podemos tratar [[F_ap]] y [[F_loss]] como casi constantes. Además, existe medición de [[tau_fr]] y [[r]], lo que permite validar el orden de magnitud de [[F_loss]] desde una vía independiente. El objetivo no es capturar microtransitorios eléctricos, sino evaluar viabilidad mecánica real: margen de [[F_net]], nivel de [[a]] y coherencia energética entre [[P_in]], [[P_out]] y [[P_loss]].

## Resolución simbólica

1. Se calcula fuerza neta real:

{{f:fuerza_neta_real}}

2. Con esa fuerza, la aceleración efectiva se calcula como:

{{f:segunda_ley_efectiva}}

3. Como referencia ideal sin pérdidas:

{{f:aceleracion_ideal}}

4. Se contrasta también la formulación por eficiencia:

{{f:aceleracion_con_eficiencia}}

5. Se calcula potencia de salida y pérdidas:

{{f:rendimiento_potencia}}

{{f:potencia_perdida}}

6. Se revisa consistencia de pérdida por torque equivalente:

{{f:fuerza_equivalente_torque}}

7. Se cruza potencia mecánica instantánea:

{{f:potencia_traslacional}}

## Sustitución numérica

- [[F_net]] = 5400 - 1700 = 3700 N.
- [[a]] = 3700 / 1850 = 2.00 m/s2.
- [[a_ideal]] = 5400 / 1850 = 2.92 m/s2.

El cociente real ideal queda en 2.00/2.92, coherente con pérdidas significativas.

Con eficiencia:
- [[a]] aproximada = [[eta]] x [[a_ideal]] = 0.84 x 2.92 = 2.45 m/s2.

La diferencia entre 2.45 y 2.00 sugiere que parte de las pérdidas no está totalmente absorbida por un único factor de eficiencia constante, algo habitual en arranques donde la fricción no es lineal.

Potencias:
- Potencia útil estimada [[P_out]]: 28.56 kW.
- Potencia disipada [[P_loss]]: 5.44 kW.

Pérdida equivalente por torque:
- [[F_loss]] estimada por torque = [[tau_fr]]/[[r]] = 320/0.19 = 1684 N.

El valor es muy próximo a los 1700 N del dato principal, por lo que la identificación del modelo es consistente.

Potencia traslacional instantánea:
- [[P]] = [[F]] x [[v]].
Tomando [[F]] = [[F_net]] y [[v]] = 0.72 m/s:
- [[P]] = 3700 x 0.72 = 2664 W.

Ese valor bajo respecto a [[P_out]] no contradice nada: al inicio del arranque la velocidad es baja y gran parte de la potencia está en fase de incremento de energía cinética y pérdidas internas transitorias.

## Validación dimensional

- [[F_net]] en N, [[m]] en kg y [[a]] en m/s2 son coherentes con segunda ley.
- [[P_in]], [[P_out]] y [[P_loss]] en W respetan conservación energética.
- [[tau_fr]]/[[r]] produce N, coherente con [[F_loss]].
- [[P]] = [[F]] x [[v]] produce W.

No aparece ninguna inconsistencia de unidades. El resultado es físicamente utilizable.

## Interpretación física

El sistema sí arranca, porque [[F_net]] es positiva y suficientemente grande para producir [[a]] apreciable. Sin embargo, el salto entre [[a_ideal]] y [[a]] confirma un coste de pérdidas relevante. Además, la discrepancia entre la aproximación por [[eta]] y el cálculo por fuerzas sugiere que la eficiencia no es estrictamente constante durante todo el arranque.

Desde el punto de vista operativo, el equipo todavía es funcional, pero ya trabaja con margen más estrecho que el de diseño limpio. Si la carga sube o la temperatura ambiente empeora, el riesgo de arranque lento y sobrecalentamiento aumentará.

# Ejemplo de aplicación real

## Contexto

En una planta de envasado, un carro lanzadera desplaza palets entre dos estaciones. Durante horas punta la frecuencia de ciclos sube y el sistema sufre calentamiento. El supervisor observa que la velocidad objetivo tarda más en alcanzarse aunque el variador mantiene la consigna de fuerza. En este contexto, interesa decidir si el problema es de control o de degradación mecánica.

Se monitorizan [[P_in]], [[P_out]], [[P_loss]], [[eta]], [[F_ap]] y [[F_loss]] durante varios turnos. El patrón detectado es que [[P_loss]] aumenta de forma sostenida mientras [[F_ap]] permanece casi constante. En paralelo, la aceleración [[a]] cae y el tiempo de ciclo sube.

## Estimación física

Una estimación rápida usa dos escenarios:

- Escenario saludable: [[eta]] = 0.90, [[F_loss]] moderada.
- Escenario degradado: [[eta]] = 0.78, [[F_loss]] elevada por rodamientos fatigados.

Con el mismo [[F_ap]], la diferencia en [[F_net]] cambia de forma significativa. Esa caída se traduce en menor [[a]] y, por tanto, más tiempo para llegar a velocidad útil [[v]]. El coste no es solo temporal: también aumenta el consumo térmico por ciclo debido a [[P_loss]] más alta.

Si además el radio efectivo [[r]] varía por desgaste del recubrimiento del tambor, la equivalencia con [[tau_fr]] empeora el diagnóstico si no se corrige el parámetro. Por eso el mantenimiento debe medir [[r]] real y no asumir valor de catálogo.

## Interpretación

El problema principal no es falta de comando de fuerza, sino degradación de conversión energética. El sistema sigue operativo, pero con eficiencia deteriorada y menor robustez frente a sobrecarga. La acción recomendable es mantenimiento preventivo focalizado en elementos que explican [[F_loss]] y [[P_loss]]: rodamientos, alineación y lubricación.

La lección transferible es clara: en sistemas reales, la pregunta correcta no es "cuánta fuerza ordeno", sino "cuánta de esa fuerza se convierte realmente en aceleración útil". Ese cambio de enfoque evita paradas inesperadas y mejora decisiones de operación.