# Ejemplo tipo examen

## Enunciado

Un deposito recibe agua caliente por una entrada y descarga agua por una salida. Entra un caudal de 2.0 kg/s y sale 1.5 kg/s. La corriente de entrada trae una energía específica de 420 kJ/kg y la salida se estima en 380 kJ/kg. El deposito recibe 8 kW de calor del entorno y entrega 3 kW como trabajo mecánico auxiliar. Decide si el sistema acumula masa y energía.

## Datos

- Caudal de entrada: [[m_dot]] igual a 2.0 kg/s.
- Caudal de salida: [[m_dot]] igual a 1.5 kg/s.
- Energía específica de entrada: [[e_flujo]] igual a 420 kJ/kg.
- Energía específica de salida: [[e_flujo]] igual a 380 kJ/kg.
- Potencia térmica: [[Q_dot]] igual a 8 kW hacia el sistema.
- Potencia de trabajo: [[W_dot]] igual a 3 kW saliendo del sistema.

## Definición del sistema

El sistema es el deposito completo con sus secciones de entrada y salida. Es abierto porque la masa cruza la frontera. La frontera también permite calor desde el entorno y trabajo mecánico hacia fuera. El contenido interno se describe mediante [[m_sys]] y [[E_sys]].

## Modelo físico

Usamos el modelo de volumen de control con propiedades medias en cada corriente. El balance de masa calcula [[dm_sys]] a partir de las entradas y salidas de [[m_dot]]. El balance de energía calcula [[dE_sys]] sumando [[Q_dot]], [[W_dot]] y la potencia de corriente [[m_dot]] por [[e_flujo]]. En este caso [[e_flujo]] se toma como energía específica de corriente; si velocidad y altura fueran despreciables, seria prácticamente la entalpía [[h]].

## Justificacion del modelo

El modelo es físicamente explicito porque cada canal de frontera esta identificado. La entrada y la salida llevan masa; por tanto no basta con calor menos trabajo. La corriente de entrada trae más energía específica que la salida, y además el caudal de entrada es mayor. Esas dos causas favorecen acumulacion energética. El trabajo de salida compite contra esa acumulacion, mientras el calor entrante la refuerza.

## Resolucion simbolica

Balance de masa:

{{f:balance_masa_abierto}}

Energía específica transportada por una corriente:

{{f:energia_especifica_flujo}}

Balance de energía:

{{f:balance_energia_flujo}}

## Sustitucion numerica

La acumulacion de masa es la diferencia entre entrada y salida: 2.0 kg/s menos 1.5 kg/s. El deposito gana 0.5 kg/s, por lo que [[m_sys]] aumenta. Aunque haya salida, entra más agua de la que sale.

Para energía, la entrada de masa aporta 2.0 por 420 kJ/s, es decir 840 kW. La salida retira 1.5 por 380 kJ/s, es decir 570 kW. La diferencia transportada por masa es 270 kW hacia el sistema. Sumando [[Q_dot]] de 8 kW y restando [[W_dot]] de 3 kW, la acumulacion energética neta es 275 kW. Por tanto [[E_sys]] aumenta rápidamente.

En simbolos de lectura, [[dm_sys]] es positivo y [[dE_sys]] también es positivo. Si el deposito funcionara así durante 10 s, acumularia 5 kg de agua y 2750 kJ de energía. Esa estimacion temporal confirma que no es un pequeno error de redondeo, sino una evolucion macroscópica clara del sistema abierto.

## Validacion dimensional

- [[m_dot]] tiene dimension `[M T⁻¹]`; una diferencia de caudales también queda en kg/s.
- [[e_flujo]] tiene dimension `[L² T⁻²]`, equivalente a J/kg.
- El producto de [[m_dot]] por [[e_flujo]] tiene dimension `[M L² T⁻³]`, es decir W.
- [[Q_dot]] y [[W_dot]] también se miden en W, por lo que el balance de energía es dimensionalmente coherente.

## Interpretacion física

El deposito no esta en regimen estacionario. Acumula masa porque entra más de lo que sale, y acumula energía porque la corriente entrante domina sobre la saliente y sobre el trabajo entregado. El resultado muestra la diferencia entre sistema abierto y cerrado: incluso con poco calor externo, la energía puede crecer mucho por transporte de masa.

# Ejemplo de aplicación real

## Contexto

Una unidad de ventilacion introduce aire exterior en una sala y extrae aire interior. Si los caudales no coinciden, la presión de la sala cambia; si las energías especificas de las corrientes son distintas, la climatizacion debe compensar la diferencia. La sala se modela como sistema abierto porque el aire cruza puertas, rejillas y conductos.

## Estimacion física

Si entran 0.30 kg/s de aire y salen 0.28 kg/s, la acumulacion de aire es 0.02 kg/s. En un minuto eso equivale a 1.2 kg de aire adicional si no aparece otra fuga. Para energía, una diferencia de 10 kJ/kg entre aire entrante y saliente con 0.30 kg/s ya representa unos 3 kW, comparable a un equipo domestico de climatizacion.

Si el aire se mueve despacio y no hay grandes cambios de altura, la energía específica puede aproximarse por [[h]]. Entonces una diferencia de entalpía de 10 kJ/kg con 0.30 kg/s produce la misma lectura de 3 kW. Si la sala tiene unos 60 kg de aire, una acumulacion de 1.2 kg por minuto ya seria un cambio relativo cercano al 2% por minuto, demasiado grande para llamarlo estacionario sin fugas compensadoras.

## Interpretacion

La lectura cuantitativa explica por que una sala puede parecer estable durante unos segundos y aun así estar acumulando masa o energía. El sistema abierto obliga a mirar caudales, no solo temperaturas. Si la ventilacion queda equilibrada en masa pero no en energía, [[m_sys]] puede permanecer constante mientras [[E_sys]] cambia por la energía de las corrientes y por [[Q_dot]] del equipo.

La estimacion también muestra que el balance de masa debe escribirse antes que el de energía. Si no se conoce si [[m_sys]] crece o queda constante, es facil interpretar mal la potencia térmica necesaria. El sistema abierto ordena la lectura: primero frontera, luego corrientes, después energía.
