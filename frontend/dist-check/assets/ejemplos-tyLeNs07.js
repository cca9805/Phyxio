const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de entrenamiento de masa conocida se mueve sobre una pista horizontal. Se aplica una fuerza mediante una cuerda y un sensor registra la resultante sobre el eje principal. Se pide calcular la aceleracion, verificar consistencia por componentes y justificar si el modelo de segunda ley es suficiente durante toda la ventana experimental.\r
\r
## Datos\r
\r
- Masa del bloque: [[m]] = 2.0 kg.\r
- Resultante sobre el eje de avance: [[F_x]] = 6.0 N.\r
- Fuerzas laterales relevantes: despreciables en primera aproximacion.\r
- Ventana de observacion: 4 s.\r
- Tolerancia instrumental en fuerza: 0.1 N.\r
\r
## Definición del sistema\r
\r
Sistema: bloque completo en contacto con la pista.\r
\r
Marco de referencia: laboratorio inercial para la escala de la practica.\r
\r
Ejes: eje x alineado con el avance, eje y normal a la pista.\r
\r
## Modelo físico\r
\r
Se adopta la segunda ley con masa constante, primero en forma por componentes para estimar [[a_x]] y luego en forma vectorial para validar coherencia con [[F_net]] y [[a]].\r
\r
## Justificación del modelo\r
\r
La eleccion del modelo se justifica porque [[m]] permanece estable, la resultante se mide con ruido bajo y no hay evidencia de acoplamientos complejos dominantes. En estas condiciones, el nexo causal entre [[F_net]] y [[a]] es directo y cuantificable.\r
\r
## Resolución simbólica\r
\r
{{f:segunda_ley_newton}}\r
\r
{{f:forma_componentes}}\r
\r
Interpretacion simbolica: la fuerza resultante determina la aceleracion y la masa modula la intensidad de respuesta.\r
\r
## Sustitución numérica\r
\r
Con [[F_x]] = 6.0 N y [[m]] = 2.0 kg, la aceleracion proyectada en x es 3.0 m/s^2 en primera aproximacion.\r
\r
Como no hay resultante lateral relevante, la lectura vectorial coincide con el eje principal dentro de tolerancia experimental.\r
\r
## Validación dimensional\r
\r
N dividido por kg produce m/s^2, coherente con unidad de aceleracion. No hay mezcla de unidades incompatibles.\r
\r
## Interpretación física\r
\r
El resultado expresa causalidad dinamica: la magnitud de [[F_net]] no solo empuja, tambien define cuanto cambia el estado de movimiento por unidad de masa. Si el mismo experimento se repite con mayor [[m]], la respuesta [[a]] se reduce aun con fuerza similar.\r
\r
Esta lectura no es numerica aislada. Explica por que sistemas con distinta inercia reaccionan distinto frente al mismo entorno externo.\r
\r
La cadena causal completa del ejemplo es: interaccion externa efectiva -> [[F_x]] neta positiva -> [[a_x]] positiva -> variacion progresiva del estado de movimiento. Esa secuencia importa porque separa causa, mediador y efecto observable. Cuando se omite esa secuencia, el resultado queda como numero suelto y no como explicacion fisica.\r
\r
Un contraste util es el caso contrafactual: si [[F_x]] fuera cercana a cero en el mismo montaje, la aceleracion en el eje principal tambien tenderia a cero, aun con velocidad inicial no nula. Este contraste muestra que la segunda ley gobierna cambio de movimiento, no existencia de movimiento.\r
\r
Tambien es relevante el rol de la incertidumbre. Con tolerancia de fuerza de 0.1 N, la aceleracion estimada no debe interpretarse como valor absoluto perfecto, sino como valor compatible con una banda. Incluir esa banda no debilita el modelo; lo hace fisicamente honesto y metodologicamente defendible.\r
\r
La interpretacion fisica completa tambien exige evaluar validez del modelo en el intervalo analizado. Si durante el ensayo aparecieran cambios bruscos de rozamiento o variaciones efectivas de masa, la relacion simple entre [[F_x]] y [[a_x]] perderia poder explicativo y haria falta un modelo extendido. Por tanto, interpretar no es repetir un resultado; es vincular mecanismo causal, condiciones de validez y consecuencias observables.\r
\r
Ademas, introduce una regla de decision practica: si una meta de aceleracion no se cumple, hay dos palancas principales, modificar [[F_net]] o modificar [[m]]. Esta lectura causal evita intervenciones irrelevantes y ordena el diagnostico del problema.\r
\r
Desde el punto de vista didactico, el ejemplo tambien muestra por que la forma por componentes es necesaria. No es un paso decorativo: permite verificar si el eje de interes concentra la dinamica o si hay componentes ocultas que distorsionan la conclusion global.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una linea automatizada, un carro industrial debe alcanzar velocidad objetivo en distancias cortas sin exceder cargas de seguridad. El control estima [[F_net]] disponible, conoce [[m]] total con carga y calcula aceleracion esperada para decidir perfil de arranque.\r
\r
## Estimación física\r
\r
Supongamos [[m]] efectiva de 120 kg y fuerza neta util de 240 N durante arranque. La lectura de segunda ley estima aceleracion de 2.0 m/s^2. Si la carga aumenta a 180 kg con la misma fuerza, la aceleracion estimada baja a 1.33 m/s^2.\r
\r
Esta comparacion cuantitativa muestra el rol operativo de la masa: para mantener la misma respuesta dinamica con mayor carga, el sistema debe aumentar [[F_net]] o aceptar un arranque mas lento.\r
\r
## Interpretación\r
\r
La aplicacion real confirma el principio del leaf: la dinamica no depende solo de empujar mas, depende de la relacion entre resultante e inercia. Ese enfoque permite decisiones de control defendibles, evita sobrecargas y mejora consistencia de produccion.\r
\r
Tambien entrena una regla metodologica transferible: cuando el rendimiento cambia, revisar primero la pareja [[F_net]] y [[m]] antes de atribuir fallos a variables secundarias.\r
\r
En terminos de operacion, esto habilita decisiones escalables: aumentar capacidad de actuacion, reducir carga efectiva, o rediseñar trayectoria para disminuir demanda de fuerza. La segunda ley no solo explica el estado actual; orienta cambios concretos en el sistema para alcanzar objetivos de seguridad y productividad.\r
\r
Finalmente, la estimacion cuantitativa tiene lectura de riesgo. Si el sistema necesita aceleracion mayor de la prevista pero trabaja cerca de limites de actuador, forzar mas [[F_net]] puede comprometer vida util o estabilidad. Reconocer ese trade-off es parte de la interpretacion fisica completa.\r
\r
Otra lectura causal clave es distinguir limitacion por fuerza de limitacion por masa. Si el sistema opera con [[F_net]] casi fija por hardware, el aumento de [[m]] reduce margen dinamico de forma directa. En cambio, si [[m]] se mantiene y aumenta [[F_net]], el sistema puede recuperar respuesta. Esta distincion orienta decisiones tecnicas concretas y evita diagnosticos ambiguos.\r
`;export{e as default};
