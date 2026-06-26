const a=`# Aplicaciones\r
\r
## 1. Optica geometrica\r
\r
Variable dominante: [[S]].\r
\r
Limite de validez: longitud de onda pequena frente a la escala del medio.\r
\r
La funcion de accion cumple un papel parecido al frente de fase en optica. Las trayectorias se leen como normales a ese frente. Esta aplicacion permite explicar por que rayos y particulas comparten una estructura matematica cuando se estudian en regimen de alta frecuencia o accion grande.\r
\r
La pregunta profesional es si el frente de accion predice trayectorias como una superficie, no como una lista de puntos. El criterio une optica y mecanica.\r
\r
## 2. Problemas orbitales separables\r
\r
Variable dominante: [[W]].\r
\r
Limite de validez: hamiltoniano autonomo con coordenadas separables.\r
\r
En potenciales centrales, la accion reducida puede separar la parte radial y angular del movimiento. La aplicacion muestra como la energia constante no es solo un dato, sino una herramienta para transformar una trayectoria dificil en ecuaciones de accion mas manejables.\r
\r
La pregunta profesional es si la separacion conserva la energia y las constantes correctas. El criterio evita separar por costumbre cuando la coordenada no lo permite.\r
\r
## 3. Mecanica semiclasica\r
\r
Variable dominante: [[S]].\r
\r
Limite de validez: accion grande comparada con la escala cuantica.\r
\r
En aproximaciones semiclasicas, la fase de una onda se conecta con la accion clasica. El leaf prepara esa idea sin abandonar la mecanica clasica. El alumno entiende que el gradiente de accion no es decorativo: produce el momento y organiza familias de caminos.\r
\r
La pregunta profesional es si la fase semiclasica tiene escala suficiente para parecer accion clasica. El criterio marca el limite de la aproximacion.\r
\r
## 4. Metodos de caracteristicas\r
\r
Variable dominante: [[pi]].\r
\r
Limite de validez: solucion suave antes de causticas o multivaluacion.\r
\r
La ecuacion de Hamilton-Jacobi es una ecuacion diferencial parcial que puede resolverse siguiendo caracteristicas. La aplicacion ensena que una PDE de accion contiene dinamica ordinaria escondida. Cuando aparecen causticas, el modelo necesita tratamiento mas fino.\r
\r
La pregunta profesional es si las caracteristicas siguen siendo suaves. El criterio advierte cuando causticas o multivaluacion exigen otro modelo.\r
\r
## 5. Control y planificacion mecanica\r
\r
Variable dominante: [[E]].\r
\r
Limite de validez: energia efectiva conservada o controlada.\r
\r
En algunos problemas de control, se busca una funcion de coste que se comporta como accion. El criterio Hamilton-Jacobi permite leer trayectorias optimas como superficies de valor. La aplicacion conecta mecanica, optimizacion y toma de decisiones dinamicas.\r
\r
La pregunta profesional es si la funcion de coste conserva sentido mecanico. El criterio conecta trayectoria optima, energia efectiva y accion.\r
\r
\r
## Lectura transversal de aplicaciones\r
\r
En todas estas aplicaciones, Hamilton-Jacobi actua como metodo global de organizacion de trayectorias. La accion no se usa como una letra abstracta, sino como una funcion que codifica momentos, energia y familias de soluciones. En optica, orbitas, mecanica semiclasica o control, la pregunta de fondo es si una superficie de accion puede reemplazar una integracion punto a punto. Para el alumno, el beneficio es comprender que resolver no siempre significa despejar una trayectoria inmediata. Para el profesor, el beneficio es poder exigir una lectura de frente de accion, gradiente, separacion y reconstruccion. Cuando esos elementos aparecen, la aplicacion conecta mecanica clasica con metodos modernos sin perder interpretacion fisica.\r
\r
\r
## Criterio de transferencia\r
\r
La transferencia a nuevos problemas exige reconocer cuando conviene buscar una funcion y no una trayectoria inmediata. Primero se identifica la accion principal o reducida que puede organizar la familia de soluciones. Despues se comprueba si el hamiltoniano permite separacion, si la energia funciona como parametro y si las derivadas de la accion recuperan momentos. Finalmente se interpreta la superficie de accion como herramienta de reconstruccion. Este criterio sirve en optica, orbitas, aproximaciones semiclasicas y metodos de control. La aplicacion avanzada no termina en escribir una ecuacion diferencial parcial, sino en explicar que informacion dinamica queda codificada en ella.\r
\r
\r
## Cierre de aplicacion avanzada\r
\r
El uso avanzado de Hamilton-Jacobi exige terminar cada aplicacion con una decision sobre informacion dinamica. No basta escribir una ecuacion para la accion; hay que explicar si esa accion permite recuperar momentos, separar energia, reconstruir trayectorias o identificar familias de soluciones. En problemas reales, esta exigencia separa una expresion formal de una solucion mecanica global. Un alumno puede transferir el criterio a optica, orbitas, semiclasica o control si conserva la cadena comun: funcion de accion, gradiente, hamiltoniano, separacion y reconstruccion. Esa cadena muestra por que el leaf pertenece al nivel avanzado: ensena a resolver mediante estructura y no solo mediante integracion directa.\r
\r
## Criterio de aplicación avanzada\r
\r
Hamilton-Jacobi se aplica cuando el problema pide entender una familia completa de trayectorias, no solo integrar una trayectoria aislada. Su potencia aparece cuando [[S]] permite convertir la evolución en una geometría de frentes, acciones reducidas y constantes de separación. En óptica, mecánica celeste, semiclasica cuántica y problemas con simetrías, este enfoque permite detectar qué coordenadas son naturales antes de resolver por fuerza bruta. La pregunta útil no es solo cuánto vale [[qi]] en un instante, sino qué función generadora organiza todas las soluciones compatibles con la energía y las condiciones iniciales.
\r
Ese criterio obliga a leer la ecuación como una herramienta de diseño. Si la separación falla, el problema informa que la elección de coordenadas o de constantes no ha capturado la estructura física. Si la separación funciona, el movimiento queda comprimido en una acción cuya interpretación conecta dinámica, geometría y fase. Por eso el leaf no debe verse como un método alternativo aislado, sino como una puerta hacia formulaciones avanzadas de propagación, aproximación semiclasica y análisis de sistemas integrables.\r
\r
`;export{a as default};
