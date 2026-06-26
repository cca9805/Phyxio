const e=`# Velocidad terminal\r
\r
## Contexto conceptual\r
\r
Este leaf responde una pregunta muy precisa de dinamica en fluidos: como leer, en una grafica Coord y en un diagrama de cuerpo libre, que la velocidad terminal [[v_t]] aparece cuando el peso deja de acelerar al cuerpo porque el arrastre del medio compensa la accion gravitatoria. La idea central no es solo que exista una rapidez limite, sino entender por que aparece, de que magnitudes depende y en que condiciones cambia.\r
\r
La magnitud estrella del leaf es [[v_t]]. No representa una velocidad maxima universal del objeto, ni una velocidad instantanea cualquiera, ni una propiedad aislada del cuerpo. Es una rapidez de equilibrio dinamico. Antes de alcanzarla, la fuerza neta sigue siendo distinta de cero y el cuerpo todavia acelera. Cuando se alcanza, la suma de fuerzas se anula y la aceleracion desaparece aunque el movimiento continue.\r
\r
La riqueza del tema aparece al comparar dos modelos de arrastre. En el modelo lineal, la resistencia del medio crece proporcionalmente con la rapidez y se resume con [[b]]. En el modelo cuadratico, la resistencia depende del medio y de la geometria a traves de [[rho]], [[C_d]] y [[A]]. Aprender velocidad terminal significa decidir que bloque usar, justificarlo fisicamente y leer sus limites de validez.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial, la meta no es calcular rapido, sino mirar bien el mecanismo. Piensa en una gota de lluvia, una bola pequena cayendo en aceite y un ciclista en descenso. Los tres sistemas tienen gravedad, movimiento y arrastre, pero no todos evolucionan igual. Al principio, el peso domina porque el cuerpo aun se mueve despacio y el arrastre es pequeño. Conforme la rapidez crece, el medio responde con mayor fuerza resistiva. Llega un instante en que el peso hacia abajo y el arrastre hacia arriba se equilibran. Ese estado es la velocidad terminal.\r
\r
Lo decisivo aqui es separar tres ideas que suelen confundirse:\r
\r
1. [[v_t]] no es una velocidad inicial, sino una rapidez de equilibrio alcanzada despues de una etapa transitoria.\r
2. Un objeto con mayor masa [[m]] no siempre tiene menor [[v_t]]; depende de como cambien tambien la forma, el area [[A]] y el tipo de arrastre.\r
3. Un medio mas denso, representado por [[rho]], o una forma menos afinada, representada por [[C_d]], suelen reducir [[v_t]] porque el arrastre necesario para equilibrar el peso aparece a menor rapidez.\r
\r
En esta etapa, la intuicion fuerte es la siguiente: el sistema no deja de moverse cuando llega a [[v_t]]; deja de acelerar. Esa distincion entre velocidad y aceleracion es la base conceptual que luego permite leer tanto la grafica de velocidad-tiempo como el DCL sin contradicciones aparentes.\r
\r
## 🔵 Nivel formal\r
\r
El nivel formal introduce las relaciones matematicas que conectan fuerzas y rapidez limite segun el modelo elegido.\r
\r
Para arrastre lineal:\r
\r
{{f:velocidad_terminal_lineal}}\r
\r
Para arrastre cuadratico:\r
\r
{{f:velocidad_terminal_cuadratica}}\r
\r
La primera expresion usa [[m]], [[g]] y [[b]]. Su lectura es directa: si aumentan [[m]] o [[g]], la rapidez terminal lineal aumenta; si aumenta [[b]], el medio frena antes y [[v_t]] disminuye.\r
\r
La segunda expresion muestra una estructura distinta. Aqui [[v_t]] disminuye cuando crecen [[rho]], [[C_d]] o [[A]]. El papel fisico de cada una es diferente: [[rho]] resume la densidad del medio, [[C_d]] resume como la forma entrega impulso al fluido y [[A]] representa el area frontal efectiva que "presenta" el cuerpo al flujo.\r
\r
El uso formal correcto sigue una secuencia clara:\r
\r
1. Dibujar el DCL y declarar orientacion de fuerzas.\r
2. Identificar si el problema se modela mejor con arrastre lineal o cuadratico.\r
3. Seleccionar la expresion de [[v_t]] correspondiente.\r
4. Revisar unidades y dependencias cualitativas antes de sustituir numeros.\r
5. Interpretar el resultado como equilibrio dinamico, no como velocidad arbitraria.\r
\r
En este nivel importa tambien una lectura comparativa. Si dos cuerpos tienen igual [[m]] pero uno presenta mayor [[A]] y mayor [[C_d]], el modelo cuadratico anticipa menor [[v_t]]. Si en cambio se mantiene geometria y cambia el medio, aumentar [[rho]] reduce la rapidez limite. Estas tendencias deben poder predecirse incluso antes del calculo numerico.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural responde cuando conviene usar cada modelo y cuando una lectura simplificada deja de ser confiable. El modelo lineal suele funcionar mejor cuando el arrastre efectivo es aproximadamente proporcional a la rapidez en el rango de interes. El modelo cuadratico resulta mas coherente cuando domina la dependencia con el cuadrado de la rapidez y la interaccion con el medio requiere incorporar [[rho]], [[C_d]] y [[A]].\r
\r
La pregunta estructural correcta no es "cual formula me gusta mas", sino "que hipotesis sobre el arrastre son defendibles en este problema". Esa defensa depende del tamano del cuerpo, del medio, del regimen de flujo y del intervalo de velocidades por el que pasa el sistema antes de alcanzar [[v_t]].\r
\r
Una transicion operativa razonable puede declararse asi:\r
\r
1. Si la respuesta del medio se describe de forma efectiva por un coeficiente [[b]] casi constante en la banda de velocidades, usar bloque lineal.\r
2. Si la resistencia cambia de forma marcada con la rapidez y la geometria frontal gobierna la interaccion, usar bloque cuadratico.\r
3. Si ningun bloque unico reproduce bien datos o tendencias, pasar a una descripcion por tramos o a un modelo mas rico.\r
\r
Esta ultima regla evita un error comun: creer que porque el concepto de velocidad terminal es simple, cualquier forma de arrastre servira igual. No. La rapidez limite depende de la ley resistiva adoptada, y cambiar de ley cambia tanto el valor de [[v_t]] como la forma de la aproximacion temporal al equilibrio.\r
\r
El cierre estructural debe incluir siempre limites de validez. [[C_d]] no es una constante universal del objeto en cualquier postura, [[A]] depende de la orientacion y [[rho]] puede variar con el medio y las condiciones de operacion. Sin ese contexto, la prediccion de [[v_t]] se vuelve decorativa.\r
\r
## Interpretación física profunda\r
\r
Interpretar profundo este leaf significa leer una historia dinamica completa. Al comienzo de la caida o del descenso, el peso domina y la rapidez aumenta. El arrastre crece con el movimiento y reduce progresivamente la aceleracion. La llegada a [[v_t]] no es un cambio magico de fase, sino el resultado de una competencia continua entre peso y resistencia.\r
\r
Tambien significa entender que una misma [[v_t]] puede surgir por razones fisicas distintas. Un cuerpo puede alcanzar baja [[v_t]] porque el medio es muy denso, porque tiene gran [[A]], porque su forma aumenta [[C_d]], o porque en el modelo lineal el coeficiente [[b]] es grande. Decir solo que "la velocidad terminal es baja" no basta; hay que identificar que variable esta gobernando el efecto.\r
\r
La lectura madura del resultado exige traducir el numero a una decision: si quiero reducir [[v_t]], me conviene intervenir masa, forma o medio? Si quiero aumentarla, que variable es mas viable modificar sin romper el modelo? Esta capacidad de intervenir sobre la causa es la marca de una comprension fisica real.\r
\r
## Orden de magnitud\r
\r
Referencias utiles para chequeo rapido:\r
\r
- [[m]]: cuerpos masivos pueden requerir mayor rapidez para que el arrastre equilibre el peso, pero solo dentro del modelo elegido.\r
- [[g]]: suele tratarse como fija cerca de la superficie terrestre, aunque su papel causal sigue siendo central.\r
- [[b]]: resume un freno lineal efectivo; si resulta enorme o diminuto, conviene revisar si el modelo lineal era defendible.\r
- [[rho]]: medios mas densos tienden a reducir [[v_t]] en el modelo cuadratico.\r
- [[C_d]]: formas menos aerodinamicas incrementan arrastre y reducen la rapidez limite.\r
- [[A]]: mayor area frontal suele anticipar menor [[v_t]] porque el cuerpo "empuja" mas fluido.\r
- [[v_t]]: siempre se interpreta como rapidez de equilibrio dinamico, no como maxima rapidez imaginable del cuerpo.\r
\r
## Método de resolución personalizado\r
\r
1. Identifica el sistema, el medio y la orientacion del movimiento.\r
2. Dibuja el DCL y fija el sentido positivo.\r
3. Decide si el modelo de arrastre a usar es lineal o cuadratico.\r
4. Selecciona la expresion de [[v_t]] correspondiente.\r
5. Verifica unidades y tendencias cualitativas.\r
6. Calcula y traduce el resultado a lenguaje fisico.\r
7. Declara limite de validez y posibles causas de desviacion experimental.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: una particula en fluido muy viscoso puede acercarse al equilibrio con un modelo lineal efectivo y una [[v_t]] relativamente baja.\r
\r
Caso especial 2: un cuerpo con gran [[A]] y alto [[C_d]] en aire alcanza antes una rapidez limite modesta comparado con otro mas afinado.\r
\r
Ejemplo extendido: comparar dos paracaidistas con masas similares pero distinto equipo. El cambio principal no esta solo en [[m]], sino en [[A]] y [[C_d]], y por eso la lectura correcta de [[v_t]] exige pasar por el modelo adecuado.\r
\r
## Preguntas reales del alumno\r
\r
¿La velocidad terminal significa que ya no hay fuerzas?\r
No. Significa que la fuerza neta es cero, no que cada fuerza desaparezca.\r
\r
¿Un objeto mas pesado siempre cae con mayor [[v_t]]?\r
No necesariamente. Depende de como cambien tambien [[A]], [[C_d]] o [[b]].\r
\r
¿Por que en algunos problemas aparece [[b]] y en otros [[rho]], [[C_d]] y [[A]]?\r
Porque son modelos distintos de arrastre. Elegir bien el bloque es parte del problema, no un detalle menor.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf se conecta de forma directa con arrastre lineal, arrastre cuadratico y coeficiente de arrastre. Tambien conecta con numero de Reynolds y regimenes de arrastre cuando la decision de modelo depende del comportamiento del flujo. En dinamica general, dialoga con la segunda ley de Newton porque la condicion de velocidad terminal se formula como equilibrio de fuerzas, no como ausencia de movimiento.\r
\r
## Síntesis final\r
\r
La velocidad terminal [[v_t]] es una rapidez de equilibrio dinamico que aparece cuando el peso y el arrastre se compensan. Comprenderla bien exige mas que usar una formula: requiere decidir el modelo de arrastre, leer el DCL, anticipar tendencias de [[m]], [[b]], [[rho]], [[C_d]] y [[A]], y declarar los limites de validez del resultado. Ese encadenamiento entre intuicion, ecuacion y contexto es el verdadero aprendizaje del leaf.\r
`;export{e as default};
