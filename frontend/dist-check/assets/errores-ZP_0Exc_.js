const e=`# Errores frecuentes: Ejemplos de equilibrio\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir masa [[m]] con peso [[W]]\r
\r
### Por que parece correcto\r
En uso cotidiano se dice "pesar tantos kilos", lo que mezcla lenguaje de masa y de fuerza.\r
\r
### Por que es incorrecto\r
[[m]] se mide en kg y [[W]] en N. Si no incorporas [[g]], toda la cadena de equilibrio queda sesgada.\r
\r
### Senal de deteccion\r
Tus ecuaciones de fuerza contienen terminos en kg o resultados numericamente demasiado bajos.\r
\r
### Correccion conceptual\r
Convierte siempre primero [[m]] a [[W]] y recien despues plantea balances y proyecciones.\r
\r
### Mini-ejemplo\r
Si tomas 20 kg como "20 N", subestimas la carga real casi diez veces.\r
\r
### Error 2: Creer que equilibrio implica ausencia de fuerzas\r
\r
### Por que parece correcto\r
La palabra equilibrio sugiere inmovilidad "sin accion".\r
\r
### Por que es incorrecto\r
El equilibrio traslacional requiere compensacion de fuerzas, no desaparicion de interacciones.\r
\r
### Senal de deteccion\r
Tu DCL muestra una sola flecha en un sistema que claramente tiene contacto o cable.\r
\r
### Correccion conceptual\r
Busca pares o sistemas de compensacion: peso-normal, peso-tension, demanda-capacidad de rozamiento.\r
\r
### Mini-ejemplo\r
Un bloque quieto sobre mesa tiene [[W]] y [[N]] no nulos, pero resultante vertical nula.\r
\r
### Error 3: Elegir mal referencia angular\r
\r
### Por que parece correcto\r
Parece indiferente medir [[alpha]] o [[theta]] desde cualquier eje.\r
\r
### Por que es incorrecto\r
Cambiar referencia sin ajustar funciones trigonometricas altera proyecciones y conclusiones.\r
\r
### Senal de deteccion\r
Al variar poco el angulo, tus componentes cambian en direccion opuesta a la intuicion fisica.\r
\r
### Correccion conceptual\r
Declara desde donde mides el angulo y manten esa convención hasta el final.\r
\r
### Mini-ejemplo\r
Tomar [[theta]] desde vertical y usar expresion de horizontal produce [[T]] inconsistente.\r
\r
## Errores de modelo\r
\r
### Error 4: Usar adherencia limite como si siempre actuara\r
\r
### Por que parece correcto\r
La formula de [[F_s_max]] es simple y da una fuerza "lista para usar".\r
\r
### Por que es incorrecto\r
[[F_s_max]] es capacidad maxima, no valor real obligatorio del rozamiento en todo estado.\r
\r
### Senal de deteccion\r
Igualas automaticamente rozamiento real y maximo sin verificar si el sistema esta al limite.\r
\r
### Correccion conceptual\r
Compara demanda tangencial con capacidad; solo en umbral se igualan.\r
\r
### Mini-ejemplo\r
Si [[W_parallel]] es menor que [[F_s_max]], el rozamiento real se ajusta por debajo del maximo.\r
\r
### Error 5: Extrapolar el modelo estatico a situaciones dinamicas\r
\r
### Por que parece correcto\r
El cierre de fuerzas en ejemplos de aula genera confianza excesiva.\r
\r
### Por que es incorrecto\r
Con aceleracion apreciable o vibracion, se requieren ecuaciones dinamicas y no solo balance estatico.\r
\r
### Senal de deteccion\r
El experimento muestra movimiento sostenido aunque tus sumatorias "cierren" en papel.\r
\r
### Correccion conceptual\r
Si hay evidencia de aceleracion, cambia de modelo y documenta el motivo.\r
\r
### Mini-ejemplo\r
Una caja vibrando en rampa no se describe bien con equilibrio traslacional puro.\r
\r
## Errores matemáticos\r
\r
### Error 6: Mezclar componentes de ejes distintos\r
\r
### Por que parece correcto\r
Al manipular rapido algebra, sumar terminos parece inocuo.\r
\r
### Por que es incorrecto\r
No puedes sumar componente horizontal con vertical en una misma ecuacion escalar.\r
\r
### Senal de deteccion\r
Tus ecuaciones no explicitan eje o combinan terminos con direcciones incompatibles.\r
\r
### Correccion conceptual\r
Escribe una ecuacion por eje y etiqueta cada termino por direccion.\r
\r
### Mini-ejemplo\r
Sumar [[N]] y componente tangencial en la misma linea rompe consistencia vectorial.\r
\r
### Error 7: Ignorar control dimensional\r
\r
### Por que parece correcto\r
Si el numero final "parece" razonable, se tiende a no revisar unidades.\r
\r
### Por que es incorrecto\r
Errores de unidad pueden mantener forma algebraica correcta y aun asi arruinar la fisica.\r
\r
### Senal de deteccion\r
Resultados con escala absurda frente a ordenes de magnitud esperables.\r
\r
### Correccion conceptual\r
Aplica chequeo dimensional en cada paso intermedio y en resultado final.\r
\r
### Mini-ejemplo\r
Usar grados donde el software espera radianes distorsiona proyecciones con [[alpha]].\r
\r
## Errores de interpretación\r
\r
### Error 8: Reportar numeros sin mecanismo\r
\r
### Por que parece correcto\r
En practica academica, entregar valor final suele parecer suficiente.\r
\r
### Por que es incorrecto\r
Sin mecanismo causal no puedes juzgar si el valor tiene sentido ni transferir criterio.\r
\r
### Senal de deteccion\r
Tu conclusion termina en "valor obtenido" sin explicar que fuerza compensa a cual.\r
\r
### Correccion conceptual\r
Cierra cada ejemplo con estado fisico, variable dominante y limite del modelo.\r
\r
### Mini-ejemplo\r
Decir solo [[T]] = valor no explica por que la geometria obliga ese nivel de tension.\r
\r
### Error 9: No comparar entre ejemplos\r
\r
### Por que parece correcto\r
Resolver ejercicios por separado parece eficiente.\r
\r
### Por que es incorrecto\r
El objetivo del leaf es comparar mecanismos; sin comparacion no emerges criterio transferible.\r
\r
### Senal de deteccion\r
No puedes explicar por que en un caso domina [[N]] y en otro domina [[T]].\r
\r
### Correccion conceptual\r
Despues de cada resolucion, explicita semejanzas y diferencias con otro ejemplo del leaf.\r
\r
### Mini-ejemplo\r
Misma [[W]] puede exigir respuestas distintas segun [[alpha]] o [[theta]].\r
\r
## Regla de autocontrol rápido\r
\r
1. Verifica conversion [[m]] -> [[W]] antes de cualquier balance.\r
2. Confirma referencia angular para [[alpha]] y [[theta]].\r
3. Separa ecuaciones por eje sin mezclar componentes.\r
4. Compara [[W_parallel]] con [[F_s_max]] antes de concluir adherencia.\r
5. Interpreta resultado en lenguaje causal y comparativo.\r
\r
Esta rutina evita la mayoria de errores recurrentes al contrastar ejemplos de equilibrio.\r
`;export{e as default};
