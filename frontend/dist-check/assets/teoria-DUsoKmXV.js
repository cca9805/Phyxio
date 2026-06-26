const e=`# Energia cinetica y potencial

## Contexto conceptual

La mecanica analitica no empieza escribiendo todas las fuerzas por componentes. Primero organiza el sistema mediante energia cinetica [[T]] y energia potencial [[V]], expresadas en las coordenadas adecuadas. Esta decision cambia la forma de pensar: el movimiento y la configuracion se convierten en ingredientes de una funcion dinamica.

El objetivo del leaf es construir el lagrangiano [[L]] sin confundirlo con la energia mecanica [[E]]. Aunque todas estas magnitudes se miden en julios, no cumplen la misma funcion. [[E]] sirve para discutir balances y conservacion; [[L]] sirve para generar ecuaciones de movimiento en el siguiente leaf.

Tambien se introduce una lectura grafica sencilla: si se fija una altura [[h]], la energia potencial gravitatoria permanece constante mientras la energia cinetica crece con la velocidad [[v]]. Esa comparacion permite ver en que zona domina el movimiento y en que zona domina la configuracion.

## 🟢 Nivel esencial

La idea esencial es que un modelo lagrangiano no usa cualquier energia suelta, sino terminos energeticos que describen el mismo sistema. La parte cinetica representa movimiento; la parte potencial representa configuracion. Si se mezclan referencias, coordenadas o sistemas distintos, la resta posterior pierde significado fisico.

La energia cinetica crece de forma cuadratica con la velocidad. Esto significa que duplicar la velocidad no duplica la energia asociada al movimiento, sino que la multiplica por cuatro. La energia potencial, en cambio, depende de la posicion, de una altura o de una deformacion medida desde una referencia.

El punto didactico clave es distinguir dos preguntas. Si la pregunta es cuanta energia mecanica se almacena o se conserva, se mira la suma. Si la pregunta es como construir la funcion que alimenta la dinamica lagrangiana, se mira la diferencia entre movimiento y configuracion.

Esta separacion debe quedar clara antes de hacer cuentas, porque evita usar una formula correcta para responder una pregunta equivocada.

## 🔵 Nivel formal

La energia cinetica traslacional elemental se escribe como:

{{f:energia_cinetica_traslacional}}

En coordenadas generalizadas, una forma lineal efectiva equivalente puede expresarse mediante la velocidad generalizada:

{{f:energia_cinetica_generalizada}}

En coordenadas curvilineas o acopladas, la forma avanzada usa la matriz metrica inercial [[G]]. Asi la energia cinetica no depende de una masa escalar aislada, sino de la geometria local de las coordenadas:

{{f:energia_cinetica_metrica}}

La energia potencial gravitatoria en campo uniforme es:

{{f:energia_potencial_gravitatoria}}

Para un modelo elastico lineal alrededor del equilibrio:

{{f:energia_potencial_elastica}}

El lagrangiano mecanico se construye como:

{{f:lagrangiano_mecanico}}

La energia mecanica total, usada para discutir conservacion, es:

{{f:energia_mecanica_total}}

Formalmente, [[T]], [[V]], [[L]] y [[E]] comparten dimension de energia, pero su papel no es intercambiable. La igualdad de unidades no autoriza a cambiar una magnitud por otra. [[L]] resta configuracion a movimiento porque su uso posterior es variacional; [[E]] suma ambas contribuciones porque su uso natural es energetico.

Tambien conviene fijarse en que las expresiones de [[V]] no son universales. La forma gravitatoria usa altura y campo uniforme; la forma elastica usa desplazamiento respecto del equilibrio y rigidez. Elegir una u otra es una decision fisica previa, no una preferencia algebraica.

En calculo formal, esta eleccion debe quedar hecha antes de insertar numeros. Primero se decide que modelo potencial representa la situacion; despues se evalua y se combina con la parte cinetica.

## 🔴 Nivel estructural

La estructura correcta exige que [[T]] y [[V]] se escriban en las mismas coordenadas. Si [[T]] se expresa con [[qdi]] pero [[V]] se deja en una coordenada incompatible, el lagrangiano resultante puede parecer formalmente correcto y aun asi no describir ningun sistema fisico coherente.

Tambien hay que separar referencia y dinamica. Cambiar el cero de [[V]] puede desplazar el valor numerico de [[L]] y [[E]], pero no cambia por si solo la fuerza conservativa derivada del potencial. Por eso interpretar un valor absoluto de energia sin declarar referencia es una lectura incompleta.

La tercera condicion estructural es el dominio de validez. La formula gravitatoria con [[m]], [[g]] y [[h]] presupone campo uniforme; la formula elastica con [[k]] y [[qi]] presupone regimen lineal. Si esas hipotesis fallan, no se arregla el modelo ajustando el ultimo numero: hay que cambiar la expresion de [[V]] o incluso la eleccion de coordenadas.

Una lectura estructural completa tambien pregunta que ocurriria al variar una referencia. Si solo cambia el cero de potencial, la comparacion numerica puede desplazarse, pero la interpretacion fisica debe conservar las diferencias relevantes. Si cambia la coordenada, en cambio, hay que reconstruir tanto [[T]] como [[V]].

## Interpretacion fisica profunda

[[T]] responde a la pregunta de cuanto movimiento hay en el estado. [[V]] responde a cuanto almacenamiento configuracional se ha introducido por posicion, altura o deformacion. [[L]] compara esas dos lecturas con signo, y por eso puede ser positivo, cero o negativo sin que eso signifique automaticamente ganancia o perdida de energia.

El cruce [[T]] igual a [[V]] tiene una lectura fina: marca [[L]]=0, pero no marca reposo ni equilibrio necesariamente. Puede haber velocidad, puede haber altura, y el sistema puede seguir evolucionando. La igualdad solo dice que las dos contribuciones energeticas tienen el mismo valor numerico en ese estado.

Esta distincion evita un error frecuente: creer que el lagrangiano es la energia total con otro nombre. En realidad, [[E]] y [[L]] son dos combinaciones distintas de los mismos ingredientes. La primera mira conservacion; la segunda prepara la derivacion dinamica.

## Orden de magnitud

En laboratorio, una masa de [[m]]=1 kg a [[v]]=2 m/s tiene [[T]] de orden 2 J. La misma masa a [[h]]=0.2 m en la Tierra tiene [[V]] gravitatoria cercana a 2 J. Este ejemplo muestra que velocidades moderadas y alturas pequenas pueden competir en la misma escala energetica.

Si un ejercicio de sobremesa entrega energias de \\(10^6\\) J sin masas grandes, alturas enormes o velocidades altas, hay que revisar unidades. El orden de magnitud es una defensa contra resultados aritmeticamente posibles pero fisicamente absurdos.

## Metodo de resolucion personalizado

1. Identifica la coordenada o velocidad que describe el movimiento.
2. Escribe [[T]] en funcion de esa velocidad.
3. Declara la referencia de energia potencial.
4. Escribe [[V]] con la misma coordenada o configuracion.
5. Construye [[L]] solo despues de tener [[T]] y [[V]] coherentes.
6. Usa [[E]] si la pregunta es conservacion, no como sustituto de [[L]].
7. Valida unidades, signo, referencia y orden de magnitud.

## Casos especiales y ejemplo extendido

Caso especial 1: [[V]] se desplaza por una constante. La energia mecanica cambia su valor numerico, y [[L]] tambien, pero la dinamica conservativa no cambia si la constante no depende de la coordenada. Esto explica por que la referencia energetica debe declararse sin convertirla en una falsa fuerza.

Caso especial 2: la energia cinetica no es simplemente traslacional. En coordenadas angulares o sistemas acoplados, [[T]] puede incluir coeficientes dependientes de la coordenada. El criterio no cambia: debe representar movimiento en las coordenadas elegidas.

Ejemplo extendido: un carrito que sube una rampa gana [[V]] al aumentar altura y pierde [[T]] si no hay aporte externo. Para discutir conservacion se usa [[E]]; para construir la ecuacion lagrangiana se expresa la altura en funcion de la coordenada de avance y se forma [[L]].

## Preguntas reales del alumno

- **Por que [[L]] no es [[E]] si ambos usan [[T]] y [[V]]?**  
  Porque combinan los mismos ingredientes con signos distintos y se usan para tareas distintas.

- **Puede [[L]] ser negativo?**  
  Si. Eso solo indica que [[V]] supera a [[T]] en la referencia elegida.

- **Cuando uso energia elastica en lugar de gravitatoria?**  
  Cuando la configuracion almacena energia por deformacion alrededor de un equilibrio.

- **Que reviso si el resultado no tiene sentido?**  
  Revisa unidades de [[v]], referencia de [[h]], signo de [[V]] y compatibilidad entre [[qi]] y [[qdi]].

## Conexiones transversales y rutas de estudio

Este leaf prepara directamente las ecuaciones de Lagrange. Primero se aprende a construir [[T]], [[V]] y [[L]]; despues se aprende a derivar la ecuacion de movimiento. Tambien conecta con osciladores, pendulos, energia mecanica y sistemas con coordenadas generalizadas.

La ruta recomendada es estudiar energia cinetica y potencial, despues ecuaciones de Lagrange y finalmente simetrias o transformacion de Legendre. En esa progresion, este leaf funciona como puente entre balances energeticos conocidos y formulacion analitica.

## Sintesis final

Dominar este tema significa saber elegir y combinar terminos energeticos sin confundir sus funciones. [[T]] describe movimiento, [[V]] describe configuracion, [[E]] organiza conservacion y [[L]] construye dinamica. Esa separacion es la base de una lectura lagrangiana seria.
`;export{e as default};
