const e=`# Historia de los interruptores electricos\r
\r
## Problema historico\r
\r
Los primeros sistemas de distribucion electrica de la decada de 1880 necesitaban un dispositivo para conectar y desconectar equipos sin manipular directamente el cableado. El reto fisico era garantizar que la resistencia de contacto [[R_on]] fuera baja y estable: los primeros interruptores de cuchilla tenian [[R_on]] alta y variable, lo que generaba calentamiento local y perdidas de tension en la carga conectada.\r
\r
El modelo fisico que cuantifica esta perdida, [[P_on]] = [[I]]^2 x [[R_on]], fue el criterio de diseno que guio el desarrollo de nuevas aleaciones y geometrias de contacto a lo largo del siglo XX.\r
\r
## Dificultad conceptual previa\r
\r
Antes de que el modelo de resistencia de contacto estuviera consolidado, los ingenieros y tecnicos atribuian el calentamiento de los interruptores a la corriente excesiva de la carga, no a la degradacion del propio contacto. Esta confusion entre sobrecarga del circuito y deterioro del dispositivo de maniobra retrasaba el diagnostico correcto y llevaba a soluciones equivocadas como sustituir los fusibles en lugar del interruptor.\r
\r
La distincion entre [[I]] (que depende de la carga) y [[R_on]] (que depende del estado del contacto) es la clave conceptual que resuelve esta confusion.\r
\r
## Que cambio\r
\r
La ingenieria de contactos electricos, desarrollada a lo largo del siglo XX, establecio el modelo cuantitativo de [[R_on]] y definio las aleaciones optimas para minimizarla. La plata pura, la plata-cadmio y posteriormente la plata-oxido de estano redujeron [[R_on]] en un factor de 10 a 100 respecto a los contactos de cobre o hierro iniciales.\r
\r
La normativa IEC 60669 formalizo los ensayos de resistencia de contacto y de durabilidad expresada en numero de maniobras, traduciendo el modelo fisico de [[P_on]] y [[E_on]] en criterios verificables de calidad industrial.\r
\r
## Impacto en la fisica\r
\r
El modelo [[P_on]] = [[I]]^2 x [[R_on]] es una aplicacion directa de la ley de Joule localizada. Su adopcion en ingenieria de interruptores demostro que incluso resistencias de miliohmios generan disipaciones significativas cuando la corriente es alta: con [[I]] = 10 A y [[R_on]] = 0,05 ohm, [[P_on]] = 5 W — suficiente para provocar degradacion termica en uso continuo.\r
\r
Este resultado cuantitativo cambio el criterio de diseno: en lugar de minimizar solo el tamano y el coste del interruptor, se empezo a especificar [[R_on]] maxima admisible como parametro contractual entre fabricante y usuario.\r
\r
## Conexion con fisica moderna\r
\r
En la electronica de potencia moderna, el parametro [[R_on]] de los transistores MOSFET de potencia es el equivalente directo de la resistencia de contacto del interruptor mecanico. Con corrientes de decenas o centenares de amperios y [[R_on]] de miliohmios, [[P_on]] = [[I]]^2 x [[R_on]] es el parametro de diseno dominante de los convertidores de alta eficiencia.\r
\r
La fisica del interruptor mecanico domestico y la del transistor de potencia son identicas en sus principios: ambas se gobiernan por la ley de Joule localizada con una resistencia de conduccion [[R_on]] que determina la perdida [[P_on]] y la eficiencia del dispositivo.\r
`;export{e as default};
