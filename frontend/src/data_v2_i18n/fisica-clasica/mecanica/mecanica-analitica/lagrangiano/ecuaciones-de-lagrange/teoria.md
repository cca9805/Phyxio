# Ecuaciones de Lagrange

## Contexto conceptual

Las ecuaciones de Lagrange reformulan la dinamica para trabajar con coordenadas generalizadas [[qi]] en lugar de imponer desde el inicio una descomposicion cartesiana de todas las fuerzas. El cambio no es solo estetico: permite incorporar ligaduras, simetrias y geometria del sistema dentro de una funcion unica, el lagrangiano [[L]].

El punto central del leaf es aprender a pasar de energias a ecuaciones de movimiento. Primero se construye [[L]] con [[T]] y [[V]]. Despues se calcula el momento conjugado [[pi]] y el operador [[Ri]]. Finalmente se decide si el residuo debe anularse o igualarse a una fuerza generalizada [[Qi]].

## 🟢 Nivel esencial

Una ecuacion de movimiento describe como evoluciona una coordenada del sistema. En el enfoque lagrangiano esa coordenada no tiene por que ser una posicion cartesiana; puede ser un angulo, una distancia curvilinea o cualquier variable independiente que exprese mejor la configuracion. Por eso [[qi]] se elige por estructura fisica, no por costumbre.

La idea esencial es que la dinamica nace de comparar la respuesta de una funcion energetica frente a cambios de configuracion y de velocidad. Esa comparacion transforma una descripcion energetica en una ley de evolucion, de modo que el estudiante deja de ver la energia como un inventario y empieza a usarla para obtener dinamica.

Cuando toda la accion relevante ya esta contenida en el modelo energetico, la ecuacion se cierra sin aportes externos. Cuando queda una accion no potencial, hay que declararla aparte sin sobrecargar el primer nivel de lectura. Esa distincion explica por que las ecuaciones de Lagrange sirven tanto para problemas conservativos como para sistemas forzados.

## 🔵 Nivel formal

El lagrangiano mecanico se define como:

{{f:lagrangiano_mecanico}}

Esta expresion organiza la informacion energetica que se va a derivar. No es la energia total del sistema, sino la funcion que alimenta el principio variacional.

La derivada de [[L]] respecto de [[qdi]] define:

{{f:momento_conjugado_lagrangiano}}

El operador que resume la estructura dinamica es:

{{f:operador_euler_lagrange}}

En esta lectura, [[DLv]] nombra la derivada de [[L]] respecto de [[qdi]], [[DtDLv]] representa su variacion temporal y [[DLq]] recoge la sensibilidad configuracional. Separar esas tres piezas evita leer el operador como un unico bloque opaco.

Cuando no hay fuerzas generalizadas no potenciales, la ecuacion de movimiento queda:

{{f:ecuacion_lagrange_conservativa}}

Si existe una accion externa asociada a la coordenada elegida, se usa:

{{f:ecuacion_lagrange_forzada}}

La diferencia entre ambas formas no es menor. En la primera, el modelo afirma que toda la dinamica relevante ya esta contenida en [[L]]. En la segunda, reconoce explicitamente un aporte externo [[Qi]] que no se ha absorbido en [[V]].

Para comprobar que el formalismo reproduce una dinamica conocida, puede especializarse a un oscilador lineal con masa [[m]], rigidez [[k]] y fuerza generalizada [[Qi]]:

{{f:aceleracion_oscilador_forzado}}

Esta relacion enlaza el lenguaje abstracto con una aceleracion interpretable [[qddi]]. Si [[Qi]] y el termino restaurador se equilibran, la aceleracion se anula.

La secuencia formal completa deja ver la jerarquia del metodo. Primero se construye [[L]], despues se identifican las derivadas que componen el operador, y solo al final se decide el cierre fisico de la ecuacion. Ese orden evita usar la formula final como una plantilla desconectada del modelo.

## 🔴 Nivel estructural

El formalismo exige regularidad. Las coordenadas [[qi]] deben describir el sistema de forma diferenciable y el lagrangiano debe permitir derivadas coherentes respecto de [[qi]] y [[qdi]]. Si la eleccion de coordenadas es singular o si el sistema tiene restricciones que no se han modelado correctamente, el resultado puede parecer formalmente limpio y ser fisicamente defectuoso.

Tambien conviene separar tres niveles: definicion de [[L]], construccion del operador [[Ri]] y cierre con o sin [[Qi]]. Mezclarlos produce errores comunes, como introducir una fuerza externa dentro de [[V]] y volver a sumarla como [[Qi]], o imponer residuo cero cuando el problema describe un agente externo activo.

La potencia estructural del metodo aparece cuando la coordenada elegida simplifica la fisica. Un pendulo simple se expresa mejor con un angulo que con dos coordenadas cartesianas ligadas por una restriccion. El formalismo no elimina la dinamica; la vuelve mas visible.

Tambien importa la trazabilidad del modelo. Dos formulaciones algebraicamente equivalentes no siempre son igual de didacticas ni igual de estables para analizar limites. Una buena eleccion de [[qi]] permite reconocer enseguida que parte del resultado proviene de la inercia, cual de la energia almacenada y cual de la excitacion externa.

## Interpretacion fisica profunda

El operador de Euler-Lagrange no es una receta simbolica. Representa la competencia entre inercia generalizada y sensibilidad configuracional del sistema. El termino temporal asociado a [[pi]] refleja como cambia la respuesta cinetica; el termino en [[qi]] recoge como la configuracion modifica [[L]]. Su diferencia debe cerrar con [[Qi]].

Esta lectura tambien aclara el papel del momento conjugado. [[pi]] no es siempre momento lineal ordinario. En coordenadas angulares puede parecerse a un momento angular; en coordenadas curvilineas adopta otras formas. Lo constante es su definicion a partir de [[L]].

## Orden de magnitud

En un oscilador de laboratorio, una masa de 1 kg, una rigidez de 20 N/m y desplazamientos de decimas de metro producen aceleraciones del orden de unidades de m/s2. Si el calculo devuelve valores cien veces mayores sin una fuerza generalizada intensa, el modelo o las unidades deben revisarse.

La comparacion entre [[Qi]] y el termino elastico tambien orienta la lectura. Si [[Qi]] es pequeno frente a la restauracion, el sistema tiende a regresar hacia equilibrio. Si [[Qi]] la supera, la aceleracion cambia de signo y el equilibrio se desplaza.

## Metodo de resolucion personalizado

1. Elige [[qi]] y expresa [[qdi]] de forma consistente.
2. Escribe [[T]] y [[V]] en esas coordenadas.
3. Construye [[L]].
4. Calcula [[pi]] y el operador [[Ri]].
5. Decide si el cierre correcto es conservativo o forzado.
6. Simplifica la ecuacion y despeja la magnitud dinamica objetivo.
7. Valida signo, unidades y recuperacion de un caso conocido.

## Casos especiales y ejemplo extendido

Si [[Qi]] es cero, la forma forzada recupera la ecuacion conservativa. Si [[V]] no depende de [[qi]], el termino configuracional desaparece y la coordenada puede adquirir un papel especial en otros leaves de simetrias. Si [[L]] esta mal expresado en las coordenadas elegidas, toda la derivacion posterior hereda el error.

Ejemplo guia: para un oscilador lineal, [[T]] depende de la velocidad y [[V]] de la posicion. El formalismo devuelve una ecuacion con un termino restaurador proporcional a [[qi]]. Al incorporar [[Qi]], se obtiene una aceleracion desplazada respecto al caso libre. Esa transicion resume el nucleo fisico del leaf.

## Preguntas reales del alumno

- **Por que usar Lagrange si Newton ya funciona?**  
  Porque en sistemas con coordenadas naturales no cartesianas o con ligaduras, el balance energetico ofrece una ruta mas directa y menos redundante.

- **[[pi]] es siempre momento lineal?**  
  No. Es momento conjugado a [[qi]], y su forma depende de la coordenada elegida.

- **Cuando debo usar [[Qi]]?**  
  Cuando existe una accion no potencial que no ha sido absorbida en [[V]].

- **Que reviso si obtengo una ecuacion absurda?**  
  Revisa la expresion de [[T]], [[V]], la eleccion de [[qi]] y si has duplicado una fuerza como potencial y como [[Qi]].

## Conexiones transversales y rutas de estudio

Este leaf se apoya en energia cinetica y potencial, y prepara el paso hacia simetrias, conservaciones y formulacion hamiltoniana. Tambien conecta con osciladores, pendulos y sistemas con coordenadas angulares, donde el metodo lagrangiano reduce trabajo algebraico y mejora lectura fisica.

En una ruta didactica conviene estudiar primero la construccion de [[L]], despues practicar la ecuacion conservativa y por ultimo introducir [[Qi]] para entender sistemas forzados. Esa progresion evita presentar la formula como un bloque abstracto sin causalidad.

## Sintesis final

Dominar las ecuaciones de Lagrange significa saber transformar una descripcion energetica en una ecuacion de movimiento defendible. El objetivo final es construir [[L]], interpretar [[pi]] y [[Ri]], elegir el cierre adecuado con o sin [[Qi]], y comprobar que la dinamica obtenida expresa realmente la fisica del sistema.

Ese dominio marca un cambio de nivel en el aprendizaje: el alumno ya no solo resuelve ecuaciones dadas, sino que aprende a fabricarlas desde un modelo fisico coherente y a justificar por que esa construccion representa el sistema estudiado.
