## Problema histórico

Los primeros sistemas de distribucion electrica de la decada de 1880 necesitaban un dispositivo para conectar y desconectar equipos sin manipular directamente el cableado. El reto fisico era garantizar que la resistencia de contacto [[resistencia_en_estado_on]] fuera baja y estable: los primeros interruptores de cuchilla tenian [[resistencia_en_estado_on]] alta y variable, lo que generaba calentamiento local y perdidas de tension en la carga conectada.

El modelo fisico que cuantifica esta perdida, [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]], fue el criterio de diseno que guio el desarrollo de nuevas aleaciones y geometrias de contacto a lo largo del siglo XX.

## Dificultad conceptual previa

Antes de que el modelo de resistencia de contacto estuviera consolidado, los ingenieros y tecnicos atribuian el calentamiento de los interruptores a la corriente excesiva de la carga, no a la degradacion del propio contacto. Esta confusion entre sobrecarga del circuito y deterioro del dispositivo de maniobra retrasaba el diagnostico correcto y llevaba a soluciones equivocadas como sustituir los fusibles en lugar del interruptor.

La distincion entre [[corriente_de_maniobra]] (que depende de la carga) y [[resistencia_en_estado_on]] (que depende del estado del contacto) es la clave conceptual que resuelve esta confusion.

## Qué cambió

La ingenieria de contactos electricos, desarrollada a lo largo del siglo XX, establecio el modelo cuantitativo de [[resistencia_en_estado_on]] y definio las aleaciones optimas para minimizarla. La plata pura, la plata-cadmio y posteriormente la plata-oxido de estano redujeron [[resistencia_en_estado_on]] en un factor de 10 a 100 respecto a los contactos de cobre o hierro iniciales.

La normativa IEC 60669 formalizo los ensayos de resistencia de contacto y de durabilidad expresada en numero de maniobras, traduciendo el modelo fisico de [[perdida_resistiva_en_on]] y [[energia_disipada_en_conduccion]] en criterios verificables de calidad industrial.

## Impacto en la física

El modelo [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] es una aplicacion directa de la ley de Joule localizada. Su adopcion en ingenieria de interruptores demostro que incluso resistencias de miliohmios generan disipaciones significativas cuando la corriente es alta: con [[corriente_de_maniobra]] = 10 A y [[resistencia_en_estado_on]] = 0,05 ohm, [[perdida_resistiva_en_on]] = 5 W — suficiente para provocar degradacion termica en uso continuo.

Este resultado cuantitativo cambio el criterio de diseno: en lugar de minimizar solo el tamano y el coste del interruptor, se empezo a especificar [[resistencia_en_estado_on]] maxima admisible como parametro contractual entre fabricante y usuario.

## Conexión con física moderna

En la electronica de potencia moderna, el parametro [[resistencia_en_estado_on]] de los transistores MOSFET de potencia es el equivalente directo de la resistencia de contacto del interruptor mecanico. Con corrientes de decenas o centenares de amperios y [[resistencia_en_estado_on]] de miliohmios, [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] es el parametro de diseno dominante de los convertidores de alta eficiencia.

La fisica del interruptor mecanico domestico y la del transistor de potencia son identicas en sus principios: ambas se gobiernan por la ley de Joule localizada con una resistencia de conduccion [[resistencia_en_estado_on]] que determina la perdida [[perdida_resistiva_en_on]] y la eficiencia del dispositivo.