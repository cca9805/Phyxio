const e=`# Aplicaciones\r
\r
## 1. Variables accion-angulo\r
\r
Variable dominante: [[C]].\r
\r
Limite de validez: transformacion regular con corchetes canonicos preservados.\r
\r
En sistemas periodicos, pasar a variables accion-angulo simplifica la dinamica sin cambiar el sistema. La transformacion es aceptable solo si conserva la estructura canonica. Esta aplicacion muestra por que una coordenada conveniente no basta: debe mantener la forma de Hamilton.\r
\r
La pregunta profesional es si las nuevas variables simplifican sin deformar el flujo. El criterio evita elegir coordenadas bonitas que ya no representan el mismo sistema.\r
\r
## 2. Perturbaciones orbitales\r
\r
Variable dominante: [[K]].\r
\r
Limite de validez: generatriz suave y terminos perturbativos pequenos.\r
\r
En mecanica celeste, una generatriz puede eliminar terminos rapidos del hamiltoniano efectivo. El hamiltoniano transformado no es una copia ingenua del original; incluye la correccion temporal si existe. La lectura fisica es que se ha cambiado la descripcion sin perder equivalencia dinamica.\r
\r
La pregunta profesional es si la eliminacion de terminos rapidos conserva la dinamica lenta. El criterio muestra que la correccion de energia efectiva debe justificarse.\r
\r
## 3. Sistemas con referencias moviles\r
\r
Variable dominante: [[Fgen]].\r
\r
Limite de validez: cambio temporal conocido y no singular.\r
\r
Cuando se usa un marco que rota o se desplaza, la funcion generatriz controla el coste dinamico del cambio. El alumno ve por que aparecen terminos nuevos y por que no deben tratarse como fuerzas misteriosas. Son consecuencia de exigir que el cambio siga siendo canonico.\r
\r
La pregunta profesional es si el marco movil introduce efectos por el cambio de descripcion. El criterio convierte esos terminos en consecuencias controladas.\r
\r
## 4. Diseno de integradores simplecticos\r
\r
Variable dominante: [[C]].\r
\r
Limite de validez: discretizacion que conserva la forma simplectica.\r
\r
En computacion, una transformacion discreta puede conservar energia de forma aproximada pero destruir estructura de fase. El criterio canonico ayuda a construir algoritmos que respetan la geometria. La aplicacion conecta calculo numerico con fisica, no con estetica de trayectorias.\r
\r
La pregunta profesional es si el paso numerico conserva estructura simplectica. El criterio permite preferir estabilidad fisica frente a una precision local enganosa.\r
\r
## 5. Reduccion de grados de libertad\r
\r
Variable dominante: [[Q]].\r
\r
Limite de validez: nuevas variables independientes y reversibles.\r
\r
Al elegir variables nuevas, algunas coordenadas pueden volverse ciclicas y simplificar el problema. La aplicacion ensena a distinguir reduccion legitima de perdida de informacion. Si no puede reconstruirse el sistema original, el cambio no es una transformacion canonica completa.\r
\r
La pregunta profesional es si reducir variables conserva capacidad de reconstruccion. El criterio evita perder informacion bajo una simplificacion demasiado agresiva.\r
\r
\r
## Lectura transversal de aplicaciones\r
\r
En todas estas aplicaciones, una transformacion canonica actua como prueba de legitimidad del cambio de descripcion. No basta con que las ecuaciones queden mas cortas: el cambio debe preservar la estructura que hace hamiltoniana a la dinamica. En variables accion-angulo, perturbaciones orbitales, marcos moviles o algoritmos simplecticos, la misma pregunta reaparece: las variables nuevas describen el mismo sistema o han introducido otra mecanica? Para el alumno, el beneficio es aprender a desconfiar de sustituciones demasiado comodas. Para el profesor, el beneficio es disponer de un criterio evaluable: generatriz, variables nuevas, condicion canonica, hamiltoniano transformado y reconstruccion fisica. Cuando esa cadena se cumple, la aplicacion muestra reduccion real, no simple manipulacion simbolica.\r
\r
\r
## Criterio de transferencia\r
\r
La transferencia a nuevos problemas exige reconocer que la comodidad algebraica no es suficiente. Primero se escribe que variables antiguas se abandonan y que variables nuevas se introducen. Despues se declara la generatriz o el criterio equivalente que conecta ambas descripciones. Finalmente se comprueba la preservacion canonica y se interpreta el hamiltoniano transformado. Este criterio sirve en perturbaciones, marcos moviles, variables accion-angulo y metodos numericos. La aplicacion avanzada no termina en encontrar coordenadas mas simples, sino en demostrar que esas coordenadas siguen describiendo el mismo flujo mecanico con posibilidad de reconstruir el sistema original.\r
\r
\r
## Cierre de aplicacion avanzada\r
\r
El uso avanzado de transformaciones canonicas exige terminar cada aplicacion con una decision sobre equivalencia fisica. No basta mostrar que las ecuaciones parecen mas simples; hay que demostrar que el cambio preserva corchetes, mantiene reconstruccion y justifica cualquier cambio del hamiltoniano. En problemas reales, esta exigencia separa una eleccion inteligente de coordenadas de una perdida silenciosa de informacion. Un alumno puede transferir el criterio a perturbaciones, marcos no inerciales, integradores simplecticos o variables accion-angulo si conserva la cadena comun: generatriz, variables, condicion canonica, hamiltoniano transformado y lectura del flujo. Esa cadena convierte la aplicacion en mecanica, no en cambio cosmetico.\r
\r
## Criterio profesional de elección\r
\r
Una transformación canónica se elige cuando reduce la complejidad física sin destruir la estructura de Hamilton. En un problema real, no basta con que las nuevas variables parezcan más cómodas: deben conservar la información de fase, mantener el papel conjugado entre coordenadas y momentos y convertir el nuevo [[K]] en una descripción más legible. En mecánica celeste, óptica hamiltoniana, teoría de perturbaciones y dinámica molecular, esta decisión permite separar movimientos rápidos y lentos, aislar invariantes y evitar integraciones directas innecesarias. El objetivo no es cambiar letras, sino revelar qué combinación de variables contiene el comportamiento esencial del sistema.\r
\r
Este criterio también evita un error frecuente en cursos avanzados: creer que cualquier sustitución algebraica bien definida es físicamente aceptable. Una sustitución puede simplificar una ecuación y aun así romper el área de fase o mezclar variables conjugadas de forma ilegítima. Por eso las aplicaciones de este leaf insisten en verificar la condición canónica antes de interpretar trayectorias, energías efectivas o constantes de movimiento.\r
\r
`;export{e as default};
