# Sistema abierto

## Contexto conceptual

Un sistema abierto es una porcion de la realidad elegida para estudiar intercambios de masa y energía. Su rasgo distintivo no es que "este abierto al aire", sino que su frontera permite que materia cruce. Una turbina, una boquilla, un compresor, una olla con vapor escapando, un ser vivo o una habitacion ventilada pueden modelarse como sistemas abiertos si interesa seguir entradas y salidas.

La frontera de un sistema abierto suele llamarse volumen de control. Puede ser fija, como una tuberia, o moverse de forma idealizada. Lo importante es declarar que corrientes cruzan la frontera y que energía traen o se llevan. Por eso las magnitudes nucleares son el caudal masico [[m_dot]], la masa contenida [[m_sys]], la energía almacenada [[E_sys]], la potencia térmica [[Q_dot]], la potencia de trabajo [[W_dot]] y la energía específica de flujo [[e_flujo]].

## 🟢 Nivel esencial

La idea esencial es que un sistema abierto no se conserva solo por estar dibujado dentro de una frontera. Si entra más masa de la que sale, [[m_sys]] aumenta. Si sale más masa de la que entra, [[m_sys]] disminuye. Si entradas y salidas se compensan, la masa contenida puede permanecer constante aunque haya flujo continuo.

Con la energía ocurre algo parecido, pero hay más canales. La energía puede cruzar como calor [[Q_dot]], como trabajo [[W_dot]] o pegada a la masa que entra y sale. Esta última parte es la que distingue al sistema abierto de un sistema cerrado: cada kilogramo de fluido trae entalpía [[h]], energía cinética y energía potencial. Ignorar ese transporte conduce a balances incompletos.

> [!NOTE]
> Sistema abierto significa "masa cruza la frontera". Si solo cruza energía pero no masa, el sistema es cerrado, no abierto.

## 🔵 Nivel formal

El balance de masa se escribe como:

{{f:balance_masa_abierto}}

La energía específica de una corriente se resume como:

{{f:energia_especifica_flujo}}

El balance macroscopico de energía para el volumen de control se expresa como:

{{f:balance_energia_flujo}}

Estas relaciones son balances, no leyes nuevas separadas de la conservación. La primera cuenta materia. La segunda define que energía acompana a cada unidad de masa. La tercera combina calor, trabajo y energía transportada por corrientes. Todas requieren un convenio de signos explicito: normalmente [[Q_dot]] positivo entra al sistema, [[W_dot]] positivo sale como potencia producida, y las corrientes se separan en entradas y salidas.

En regimen estacionario, las derivadas de [[m_sys]] y [[E_sys]] pueden ser cero. Eso no convierte al sistema en cerrado. Una turbina en funcionamiento estacionario mantiene masa y energía internas casi constantes, pero recibe y expulsa masa de forma continua. La estacionariedad solo dice que no hay acumulacion neta, no que no haya intercambio.

Formalmente, cada termino del balance debe responder a una pregunta de frontera. Las entradas de masa suman, las salidas restan, el calor se firma segun entre o salga y el trabajo depende del convenio elegido. Esta disciplina evita mezclar un balance de sistema cerrado con uno abierto. También permite comprobar resultados: si [[dm_sys]] es cero pero [[m_dot]] no lo es, hay flujo compensado; si [[dE_sys]] es cero con potencias grandes, hay intercambio energético estacionario.

## 🔴 Nivel estructural

La estructura del modelo depende de como se elige la frontera. Si la frontera corta una tuberia, aparece un termino de [[m_dot]] con una propiedad de corriente. Si la frontera rodea un deposito completo, puede haber varias entradas y salidas. Si la frontera se elige alrededor de un componente electrico con refrigeración, puede haber trabajo electrico, calor y flujo de refrigerante al mismo tiempo.

También importa que propiedades se pueden despreciar. En muchas maquinas térmicas, la entalpía [[h]] domina sobre energía cinética y potencial; en boquillas y difusores, la energía cinética puede ser central; en conducciones con grandes diferencias de altura, la energía potencial no siempre es despreciable. La decision correcta se toma comparando ordenes de magnitud, no por costumbre.

El sistema abierto es la puerta de entrada a la primera ley en ingenieria. Permite estudiar equipos reales sin seguir cada particula individual. En lugar de etiquetar una masa fija, se mira un volumen por el que pasan corrientes. Esta eleccion simplifica problemas de turbinas, compresores, intercambiadores, bombas y reactores, siempre que las corrientes esten bien definidas.

Otra parte estructural es distinguir acumulacion de transporte. [[dm_sys]] y [[dE_sys]] describen pendientes internas: cuanto cambian masa y energía dentro del volumen de control. Los terminos con [[m_dot]] describen transporte a traves de la frontera. En un estacionario ideal las pendientes internas son nulas, pero los terminos de transporte pueden ser enormes.

## Interpretacion física profunda

La frontera de un sistema abierto actua como contador. Cuenta cuanta masa entra, cuanta sale, que energía trae cada corriente y que energía cruza sin masa como calor o trabajo. Si el balance neto es positivo, el sistema acumula. Si es negativo, se vacia energética o materialmente. Si es cero, puede estar en regimen estacionario con flujo permanente.

La entalpía aparece porque empujar masa a traves de una frontera requiere trabajo de flujo. Por eso el balance de energía de sistemas abiertos usa [[h]] en lugar de usar solo energía interna. Esta no es una convencion cosmetica: evita olvidar la energía asociada a introducir o expulsar fluido.

## Orden de magnitud

Un caudal de [[m_dot]] igual a 1 kg/s de agua con una diferencia energética específica de 10 kJ/kg transporta una potencia de 10 kW. En una turbina, 10 kg/s con una caida de entalpía de 100 kJ/kg ya corresponde a 1 MW ideal. Estos números muestran por que el termino de masa puede dominar sobre pequenas perdidas de calor.

En laboratorios pequenos, [[Q_dot]] puede estar en decenas de vatios; en plantas industriales, puede estar en megavatios. El mismo balance sirve, pero la lectura física exige escala.

## Metodo de resolucion personalizado

1. Dibuja la frontera del sistema abierto.
2. Etiqueta cada entrada y salida con [[m_dot]].
3. Decide el convenio de signos para calor y trabajo.
4. Escribe primero el balance de masa.
5. Asocia a cada corriente su [[e_flujo]] o su [[h]] si los otros terminos son despreciables.
6. Escribe el balance de energía y solo después aplica simplificaciones.

## Casos especiales y ejemplo extendido

**Regimen estacionario.** Entradas y salidas se compensan. [[m_sys]] y [[E_sys]] no cambian, pero el sistema sigue siendo abierto si hay [[m_dot]].

**Llenado de deposito.** Si entra masa y no sale, [[m_sys]] aumenta. Aunque no haya trabajo de eje, la energía almacenada puede crecer por la energía que trae la corriente.

**Turbina ideal.** En una turbina adiabática estacionaria, el descenso de entalpía de la corriente se convierte principalmente en [[W_dot]] de salida. El sistema es abierto porque el fluido atraviesa el equipo.

## Preguntas reales del alumno

**P: Puede un sistema abierto tener masa constante?**

R: Si. Basta con que el caudal total de entrada iguale al de salida. La constancia de [[m_sys]] no significa sistema cerrado.

**P: Por que aparece entalpía y no solo energía interna?**

R: Porque la masa que cruza una frontera de flujo transporta energía interna y trabajo de empuje. La entalpía agrupa ambas contribuciones.

**P: Si no hay calor, el sistema abierto no cambia energía?**

R: No necesariamente. Puede cambiar energía por trabajo o por la energía que entra y sale con la masa.

## Conexiones transversales y rutas de estudio

Este leaf conecta con sistema cerrado, sistema aislado, equilibrio termodinámico, primera ley, entalpía, maquinas térmicas, dinamica de fluidos y procesos estacionarios. La ruta natural es: frontera, balance de masa, energía específica de corriente, balance de energía, y después casos particulares como turbinas, compresores e intercambiadores.

## Sintesis final

Un sistema abierto intercambia masa y energía con el entorno. Su lectura correcta exige contar entradas, salidas, calor, trabajo y energía transportada por corrientes. El balance no pregunta si el sistema "parece quieto"; pregunta que cruza la frontera y que se acumula dentro.

La herramienta final es, por tanto, una contabilidad física: frontera primero, corrientes después, potencias al final. Si ese orden se respeta, el sistema abierto deja de ser una etiqueta y se convierte en un metodo para leer maquinas y procesos reales.
