const e=`\uFEFF# Energia potencial gravitatoria\r
\r
## Contexto conceptual\r
\r
La [[Ug]] es una energia de estado asociada a la posicion vertical de un sistema en presencia de gravedad local. Esta idea parece simple, pero su potencia didactica es alta porque conecta tres decisiones fisicas que suelen confundirse en los primeros cursos: elegir referencia, comparar estados y leer el signo del trabajo.\r
\r
En este leaf, el objetivo no es memorizar una expresion, sino aprender a pensar con criterio energetico. El estudiante debe distinguir entre el valor de estado [[Ug]] y el cambio [[dUg]], y despues relacionar ese cambio con [[Wg]] para interpretar quien entrega energia y quien la absorbe. Cuando este enlace se domina, muchos problemas de mecanica se vuelven mas claros.\r
\r
Objetivo operativo del tema:\r
- Entender por que la energia potencial depende del nivel de referencia.\r
- Aplicar las tres relaciones nucleares del leaf con criterio de validez.\r
- Relacionar cambios de altura con trabajo de la gravedad.\r
- Integrar el resultado en balances mecanicos mas amplios.\r
\r
## 🟢 Nivel esencial\r
\r
En el nivel esencial, la pregunta principal es concreta: que significa fisicamente que un sistema tenga mas o menos [[Ug]] que antes. La respuesta correcta no habla primero de numeros. Habla de estado. Si un cuerpo termina a mayor altura con la misma referencia, el sistema queda en un estado con mayor energia potencial gravitatoria. Si termina mas abajo, ocurre lo contrario.\r
\r
Aqui tambien aparece un error recurrente: creer que [[Ug]] tiene un cero universal. No lo tiene. El cero depende de la referencia elegida. Lo que no depende de esa eleccion es la diferencia entre dos estados comparados con el mismo cero. Por eso, en practica, lo mas importante no es discutir si [[Ug]] es positiva o negativa, sino mantener una referencia coherente de principio a fin.\r
\r
Otra idea esencial es que la gravedad no desaparece porque fijemos [[Ug]] en cero en algun punto. Ese cero es una decision de descripcion, no una anulacion de la fisica. El alumno que entiende esto deja de pelear con signos y empieza a usarlos como informacion causal del proceso.\r
\r
El foco pedagogico de este nivel es conceptual: identificar sistema, variable de estado y sentido del cambio antes de escribir ecuaciones. Si se salta este paso, la cuenta puede cerrar algebraicamente pero fallar fisicamente.\r
\r
## 🔵 Nivel formal\r
\r
Arquitectura matematica util para resolver **Energia potencial gravitatoria**:\r
\r
{{f:potencial_gravitatorio_superficie}}\r
\r
{{f:variacion_potencial_gravitatorio}}\r
\r
{{f:trabajo_gravitatorio}}\r
\r
Variables con papel fisico directo:\r
- [[Ug]]: energia potencial gravitatoria del estado.\r
- [[m]]: masa del cuerpo.\r
- [[g]]: intensidad gravitatoria local.\r
- [[h]]: altura en una referencia fijada.\r
- [[hi]]: altura inicial.\r
- [[hf]]: altura final.\r
- [[dUg]]: cambio de energia entre estados.\r
- [[Wg]]: trabajo de la gravedad.\r
\r
Estrategia de seleccion de ecuaciones:\r
- Usa la primera relacion cuando se pide el valor de estado [[Ug]] para una sola altura.\r
- Usa la segunda cuando se comparan dos estados y la pregunta central es el cambio [[dUg]].\r
- Usa la tercera cuando el problema pide el trabajo de la fuerza gravitatoria o su signo.\r
\r
Este nivel formal no debe reducirse a sustitucion mecanica. Cada paso tiene una lectura: [[m]] y [[g]] escalan el efecto energetico, [[h]] define estado, y la comparacion [[hf]] frente a [[hi]] decide el signo de [[dUg]]. Despues, el signo de [[Wg]] se deduce por coherencia con esa comparacion.\r
\r
Una verificacion formal minima incluye tres controles: consistencia de unidades, consistencia de referencia y consistencia de signo. Si alguno falla, no se corrige solo con algebra; se corrige revisando la modelizacion.\r
\r
## 🔴 Nivel estructural\r
\r
### Hipotesis del modelo\r
- Campo gravitatorio local casi uniforme en el intervalo analizado.\r
- Misma referencia vertical para estado inicial y final.\r
- Regimen clasico con unidades SI coherentes.\r
\r
### Dominio de validez\r
- El modelo local de este leaf funciona bien para variaciones de altura moderadas.\r
- Si la escala espacial crece mucho, la aproximacion uniforme puede perder precision y conviene cambiar de modelo.\r
\r
En uso operativo, este nivel exige criterio de cambio de marco. Si el ejercicio pasa de una torre a una orbita, no basta con seguir calculando igual. Hay que reconocer que el dominio fisico cambio. El error estructural tipico es aplicar el mismo esquema fuera de rango solo porque la forma algebraica parece familiar.\r
\r
### Que cambia cuando falla una hipotesis\r
- Cambia la relacion entre altura y energia.\r
- Cambia la lectura del resultado y su precision.\r
- Cambia la forma de validar el signo del trabajo.\r
\r
En la practica docente, este punto separa al estudiante que calcula del que modela. El que modela puede explicar por que su respuesta sigue siendo fiable y cuando dejaria de serlo.\r
\r
## Interpretacion fisica profunda\r
\r
El nucleo de interpretacion es distinguir energia de estado y energia transferida. [[Ug]] describe como esta el sistema en una cota concreta. [[Wg]] describe transferencia durante un proceso. [[dUg]] conecta ambos lenguajes en una sola lectura coherente.\r
\r
La comprension profunda aparece cuando el estudiante puede anticipar el signo antes de operar. Si un cuerpo asciende en la misma referencia, espera [[dUg]] positiva. Si desciende, espera [[dUg]] negativa. Desde ahi, deduce el signo de [[Wg]] sin adivinar.\r
\r
Esta anticipacion no es un lujo. Es una herramienta de control de calidad. Si el numero final contradice esa prediccion causal, hay un error de referencia, orden de resta o interpretacion.\r
\r
Tambien es importante no confundir altura con distancia recorrida. Dos trayectorias distintas pueden terminar en el mismo estado final y producir el mismo cambio de energia potencial gravitatoria. La variable central no es el camino, sino el estado inicial y final en vertical.\r
\r
## Orden de magnitud\r
\r
En problemas de aula, [[m]] suele ir desde fracciones de kilogramo hasta cientos de kilogramos, y [[h]] desde decimetros hasta decenas de metros. Con ese rango, [[Ug]] y [[dUg]] suelen caer entre decenas y miles de julios.\r
\r
Una alerta util: si aparece una energia extremadamente grande para una variacion de altura pequena, suele haber una conversion incorrecta. Otra alerta: si el signo de [[Wg]] no coincide con ascenso o descenso, probablemente se invirtio el orden entre [[hf]] y [[hi]].\r
\r
El orden de magnitud no reemplaza el calculo, pero protege contra resultados absurdos que pasan inadvertidos cuando solo se mira la algebra.\r
\r
## Metodo de resolucion personalizado\r
\r
1. Definir sistema y fijar la referencia vertical desde el inicio.\r
2. Identificar si se pide [[Ug]], [[dUg]] o [[Wg]].\r
3. Elegir la relacion del leaf que corresponde a esa pregunta.\r
4. Resolver simbolicamente y luego sustituir en SI.\r
5. Validar unidades, signo y tendencia fisica.\r
\r
Punto de control del tema: antes de cerrar, comprobar que [[hi]] y [[hf]] fueron leidas en la misma referencia y que [[Wg]] es coherente con [[dUg]].\r
\r
## Casos especiales y ejemplo extendido\r
\r
Casos especiales de **Energia potencial gravitatoria**:\r
- Ascenso con energia externa: [[dUg]] positiva y [[Wg]] negativa.\r
- Descenso libre ideal: [[dUg]] negativa y [[Wg]] positiva.\r
- Ida y vuelta al mismo nivel: cambio neto de [[dUg]] nulo.\r
\r
Ejemplos operativos del tema:\r
- Caso de estado unico:\r
  util cuando la pregunta es energia en una altura concreta.\r
\r
- Caso de comparacion de estados:\r
  util cuando importa la diferencia entre [[hi]] y [[hf]].\r
\r
- Caso de transferencia por gravedad:\r
  util cuando se pide lectura de trabajo o cierre de balance.\r
\r
Ejemplo extendido de procedimiento:\r
1. Clasificar el proceso como ascenso, descenso o cambio mixto.\r
2. Fijar referencia y escribir datos con unidades SI.\r
3. Calcular la magnitud objetivo con formula del leaf.\r
4. Contrastar signo con prediccion causal previa.\r
5. Cerrar con una frase fisica de interpretacion.\r
\r
## Preguntas reales del alumno\r
\r
- **Cual es la decision de modelo mas importante antes de calcular?**  \r
  Fijar la referencia de altura y mantenerla en todo el proceso.\r
\r
- **Por que no basta con dar un valor de [[Ug]]?**  \r
  Porque el valor aislado depende del cero elegido; la fisica del proceso aparece en [[dUg]] y [[Wg]].\r
\r
- **Cuando debo usar [[dUg]] en lugar de [[Ug]]?**  \r
  Cuando el problema compara dos estados y pide cambio energetico.\r
\r
- **Como detecto un error de signo rapido?**  \r
  Anticipando si el cuerpo sube o baja antes de operar y comparando con el resultado.\r
\r
- **Que valida que la respuesta sea defendible?**  \r
  Coherencia entre referencia, unidades, signo y orden de magnitud.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Conceptos estructurales implicados:\r
- [fundamentos/conceptos-estructurales/sistema-fisico](leaf:fundamentos/conceptos-estructurales/sistema-fisico): define frontera y estado.\r
- [fundamentos/conceptos-estructurales/conservacion](leaf:fundamentos/conceptos-estructurales/conservacion): organiza el cierre energetico.\r
- [fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez](leaf:fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez): delimita cuando cambiar de modelo.\r
\r
Rutas de continuidad en mecanica:\r
- [fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo](leaf:fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo): interpreta transferencia energetica.\r
- [fisica-clasica/mecanica/trabajo-y-energia/energia-cinetica](leaf:fisica-clasica/mecanica/trabajo-y-energia/energia-cinetica): completa balance mecanico.\r
- [fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-elastica](leaf:fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-elastica): compara dos energias de estado.\r
\r
## Sintesis final\r
\r
Dominar **Energia potencial gravitatoria** significa leer la altura como estado energetico y no solo como dato geometrico. La secuencia robusta es: referencia clara, formula adecuada, validacion de signo y cierre causal. Cuando esa secuencia se consolida, el estudiante deja de depender de recetas y gana criterio de modelado fisico.\r
`;export{e as default};
