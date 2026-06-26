# Errores frecuentes: Ejemplos de equilibrio

## Errores conceptuales

### Error 1: Confundir masa [[m]] con peso [[W]]

### Por que parece correcto
En uso cotidiano se dice "pesar tantos kilos", lo que mezcla lenguaje de masa y de fuerza.

### Por que es incorrecto
[[m]] se mide en kg y [[W]] en N. Si no incorporas [[g]], toda la cadena de equilibrio queda sesgada.

### Senal de deteccion
Tus ecuaciones de fuerza contienen terminos en kg o resultados numericamente demasiado bajos.

### Correccion conceptual
Convierte siempre primero [[m]] a [[W]] y recien despues plantea balances y proyecciones.

### Mini-ejemplo
Si tomas 20 kg como "20 N", subestimas la carga real casi diez veces.

### Error 2: Creer que equilibrio implica ausencia de fuerzas

### Por que parece correcto
La palabra equilibrio sugiere inmovilidad "sin accion".

### Por que es incorrecto
El equilibrio traslacional requiere compensacion de fuerzas, no desaparicion de interacciones.

### Senal de deteccion
Tu DCL muestra una sola flecha en un sistema que claramente tiene contacto o cable.

### Correccion conceptual
Busca pares o sistemas de compensacion: peso-normal, peso-tension, demanda-capacidad de rozamiento.

### Mini-ejemplo
Un bloque quieto sobre mesa tiene [[W]] y [[N]] no nulos, pero resultante vertical nula.

### Error 3: Elegir mal referencia angular

### Por que parece correcto
Parece indiferente medir [[alpha]] o [[theta]] desde cualquier eje.

### Por que es incorrecto
Cambiar referencia sin ajustar funciones trigonometricas altera proyecciones y conclusiones.

### Senal de deteccion
Al variar poco el angulo, tus componentes cambian en direccion opuesta a la intuicion fisica.

### Correccion conceptual
Declara desde donde mides el angulo y manten esa convención hasta el final.

### Mini-ejemplo
Tomar [[theta]] desde vertical y usar expresion de horizontal produce [[T]] inconsistente.

## Errores de modelo

### Error 4: Usar adherencia limite como si siempre actuara

### Por que parece correcto
La formula de [[F_s_max]] es simple y da una fuerza "lista para usar".

### Por que es incorrecto
[[F_s_max]] es capacidad maxima, no valor real obligatorio del rozamiento en todo estado.

### Senal de deteccion
Igualas automaticamente rozamiento real y maximo sin verificar si el sistema esta al limite.

### Correccion conceptual
Compara demanda tangencial con capacidad; solo en umbral se igualan.

### Mini-ejemplo
Si [[W_parallel]] es menor que [[F_s_max]], el rozamiento real se ajusta por debajo del maximo.

### Error 5: Extrapolar el modelo estatico a situaciones dinamicas

### Por que parece correcto
El cierre de fuerzas en ejemplos de aula genera confianza excesiva.

### Por que es incorrecto
Con aceleracion apreciable o vibracion, se requieren ecuaciones dinamicas y no solo balance estatico.

### Senal de deteccion
El experimento muestra movimiento sostenido aunque tus sumatorias "cierren" en papel.

### Correccion conceptual
Si hay evidencia de aceleracion, cambia de modelo y documenta el motivo.

### Mini-ejemplo
Una caja vibrando en rampa no se describe bien con equilibrio traslacional puro.

## Errores matemáticos

### Error 6: Mezclar componentes de ejes distintos

### Por que parece correcto
Al manipular rapido algebra, sumar terminos parece inocuo.

### Por que es incorrecto
No puedes sumar componente horizontal con vertical en una misma ecuacion escalar.

### Senal de deteccion
Tus ecuaciones no explicitan eje o combinan terminos con direcciones incompatibles.

### Correccion conceptual
Escribe una ecuacion por eje y etiqueta cada termino por direccion.

### Mini-ejemplo
Sumar [[N]] y componente tangencial en la misma linea rompe consistencia vectorial.

### Error 7: Ignorar control dimensional

### Por que parece correcto
Si el numero final "parece" razonable, se tiende a no revisar unidades.

### Por que es incorrecto
Errores de unidad pueden mantener forma algebraica correcta y aun asi arruinar la fisica.

### Senal de deteccion
Resultados con escala absurda frente a ordenes de magnitud esperables.

### Correccion conceptual
Aplica chequeo dimensional en cada paso intermedio y en resultado final.

### Mini-ejemplo
Usar grados donde el software espera radianes distorsiona proyecciones con [[alpha]].

## Errores de interpretación

### Error 8: Reportar numeros sin mecanismo

### Por que parece correcto
En practica academica, entregar valor final suele parecer suficiente.

### Por que es incorrecto
Sin mecanismo causal no puedes juzgar si el valor tiene sentido ni transferir criterio.

### Senal de deteccion
Tu conclusion termina en "valor obtenido" sin explicar que fuerza compensa a cual.

### Correccion conceptual
Cierra cada ejemplo con estado fisico, variable dominante y limite del modelo.

### Mini-ejemplo
Decir solo [[T]] = valor no explica por que la geometria obliga ese nivel de tension.

### Error 9: No comparar entre ejemplos

### Por que parece correcto
Resolver ejercicios por separado parece eficiente.

### Por que es incorrecto
El objetivo del leaf es comparar mecanismos; sin comparacion no emerges criterio transferible.

### Senal de deteccion
No puedes explicar por que en un caso domina [[N]] y en otro domina [[T]].

### Correccion conceptual
Despues de cada resolucion, explicita semejanzas y diferencias con otro ejemplo del leaf.

### Mini-ejemplo
Misma [[W]] puede exigir respuestas distintas segun [[alpha]] o [[theta]].

## Regla de autocontrol rápido

1. Verifica conversion [[m]] -> [[W]] antes de cualquier balance.
2. Confirma referencia angular para [[alpha]] y [[theta]].
3. Separa ecuaciones por eje sin mezclar componentes.
4. Compara [[W_parallel]] con [[F_s_max]] antes de concluir adherencia.
5. Interpreta resultado en lenguaje causal y comparativo.

Esta rutina evita la mayoria de errores recurrentes al contrastar ejemplos de equilibrio.
