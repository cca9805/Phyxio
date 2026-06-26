const e=`# Trabajo de fuerzas no conservativas

## Contexto conceptual

En un sistema idealmente conservativo, la energia mecanica solo cambia de forma entre contribuciones cineticas y potenciales. Sin embargo, muchos procesos reales incluyen agentes que inyectan o retiran energia mecanica: rozamiento, motores, arrastre, deformaciones irreversibles o mecanismos de frenado. Este leaf organiza esas situaciones con una sola lectura: el trabajo no conservativo [[Wnc]] mide cuanto cambia la energia mecanica del sistema.

La clave didactica no es memorizar un balance, sino aprender a distinguir tres preguntas. Primero, cual es el sistema. Segundo, que fuerzas quedan recogidas en [[Wnc]]. Tercero, si el resultado implica aumento, perdida o conservacion efectiva de energia mecanica al comparar [[Emi]] con [[Emf]].

## 🟢 Nivel esencial

El trabajo de fuerzas no conservativas aparece cuando la energia mecanica final no coincide con la inicial. Si un motor acelera un carro, el sistema gana energia mecanica. Si el rozamiento frena un bloque, el sistema la pierde. En ambos casos la energia total no desaparece, pero la parte mecanica disponible cambia.

La primera decision es de frontera: se debe elegir el sistema antes de decidir si una accion cuenta como trabajo externo no conservativo. Un empuje manual puede aportar energia a un patinador si el sistema es el patinador; si se amplia el sistema hasta incluir a la persona que empuja, la lectura energetica cambia.

Tambien importa el signo. [[Wnc]] positivo indica aporte neto de energia mecanica; [[Wnc]] negativo indica retirada neta. Por eso una resolucion correcta no se limita a despejar una incognita: debe decir que ha ocurrido fisicamente con la energia mecanica.

## 🔵 Nivel formal

El balance general entre energia mecanica inicial y final se escribe como:

{{f:balance_general_no_conservativo}}

Esta relacion permite hallar [[Emf]] si se conoce [[Emi]] y el trabajo no conservativo [[Wnc]]. Tambien puede invertirse para diagnosticar el trabajo necesario cuando el estado inicial y el final estan dados.

La misma idea puede expresarse directamente como variacion de energia mecanica:

{{f:variacion_energia_mecanica_no_conservativa}}

Esta forma es especialmente util para interpretar el signo del proceso. Si [[dEm]] es negativa, la energia mecanica disminuye; si es positiva, aumenta.

Para construir los estados se separan sus componentes:

{{f:energia_mecanica_inicial_componentes}}

{{f:energia_mecanica_final_componentes}}

Asi se evita mezclar energia cinetica inicial [[Ki]] con energia potencial final [[Uf]], o viceversa. Cada suma pertenece a un estado concreto y a una misma referencia energetica.

Cuando el problema ofrece explicitamente las cuatro contribuciones de estado, conviene usar la relacion:

{{f:trabajo_no_conservativo_por_estados}}

Esta es la formula que faltaba representar de manera directa en el leaf. Hace visible que el trabajo no conservativo es la diferencia entre el paquete energetico final y el inicial.

Si se busca cerrar una energia final concreta, la forma operativa mas util es:

{{f:relacion_completa_entre_estados}}

Con ella puede despejarse [[Kf]] o [[Uf]] cuando el trabajo no conservativo ya esta identificado. El criterio de uso es simple: primero se fija el sistema, luego se clasifican los estados, despues se decide si conviene trabajar con [[Emi]] y [[Emf]] o con [[Ki]], [[Ui]], [[Kf]] y [[Uf]] por separado.

## 🔴 Nivel estructural

El modelo es valido cuando la comparacion entre estados se hace para el mismo sistema y con referencias energeticas coherentes. No se puede construir [[Emi]] con una referencia potencial y [[Emf]] con otra distinta sin ajustar el balance. Tampoco se puede introducir en [[Wnc]] una perdida que ya se ha descontado dentro de otra magnitud.

La categoria "no conservativa" no significa "siempre disipativa". Un motor, un atleta o un mecanismo de traccion pueden producir [[Wnc]] positivo. El rozamiento y el arrastre suelen producir [[Wnc]] negativo. El balance admite ambos casos; lo que cambia es la interpretacion fisica del signo.

Hay un limite importante: este leaf trabaja con un balance entre estados, no con la evolucion instantanea de cada fuerza. Si la fuerza no conservativa depende de forma fuerte del tiempo o de la velocidad, puede seguirse usando el balance energetico global, pero el calculo de [[Wnc]] exigira un modelo adicional. Esa distincion evita pedirle al balance mas de lo que puede dar.

## Interpretacion fisica profunda

La lectura experta separa transformacion interna y transferencia externa. Las fuerzas conservativas redistribuyen energia entre cinetica y potencial dentro del modelo. Las no conservativas alteran la cantidad total de energia mecanica disponible. Esa es la razon por la que [[Wnc]] no es un adorno algebraico: clasifica el mecanismo que hace que el balance deje de ser conservativo.

Un mismo valor de [[Emf]] puede esconder procesos muy distintos. Un carro puede terminar con 400 J porque partia de 500 J y perdio 100 J, o porque partia de 100 J y recibio 300 J de trabajo externo. El resultado final coincide, pero la historia fisica no. El analisis con [[Wnc]] permite distinguir esas situaciones.

## Orden de magnitud

En problemas escolares, trabajos no conservativos de unos pocos julios o decenas de julios aparecen en bloques, muelles con perdidas o pequenos empujes. En sistemas tecnicos, frenos, elevadores o maquinas pueden modificar la energia mecanica en kilojulios o megajulios. El orden de magnitud orienta si el resultado es razonable.

Tambien sirve como control de signo. Si un motor debe elevar y acelerar una carga, un [[Wnc]] negativo seria fisicamente sospechoso. Si una pieza se frena por rozamiento sin aporte externo, un [[Wnc]] positivo exigiría revisar el sistema o los datos.

## Metodo de resolucion personalizado

1. Delimita el sistema y fija los dos estados comparados.
2. Clasifica las contribuciones conservativas y no conservativas.
3. Construye [[Emi]] y [[Emf]] a partir de [[Ki]], [[Ui]], [[Kf]] y [[Uf]] si hace falta.
4. Escoge el balance general o la expresion completa por estados.
5. Despeja simbolicamente antes de sustituir valores.
6. Interpreta el signo de [[Wnc]] y [[dEm]] antes de cerrar.
7. Comprueba que el resultado no viole una condicion basica, como una energia cinetica final negativa.

## Casos especiales y ejemplo extendido

Si [[Wnc]] es cero, el balance recupera la conservacion de energia mecanica. Si [[Wnc]] es negativo, el sistema pierde energia mecanica por disipacion o resistencia. Si [[Wnc]] es positivo, una accion externa aporta energia mecanica y puede aumentar velocidad, altura o deformacion util.

Ejemplo guia: un carrito parte con [[Ki]] y [[Ui]] conocidos, asciende una rampa y recibe ayuda de un motor. Si el trabajo del motor supera la ganancia potencial exigida, [[Kf]] puede crecer. Si no la supera, el carrito puede llegar mas lento. La misma estructura formal distingue ambos desenlaces sin cambiar de modelo.

## Preguntas reales del alumno

- **Por que [[Wnc]] puede ser positivo si muchas veces se asocia a rozamiento?**  
  Porque "no conservativo" significa que cambia la energia mecanica total, no que siempre la reduce.

- **Cuando uso [[dEm]] y cuando uso el balance por estados?**  
  Usa [[dEm]] para leer el cambio global. Usa la expresion por estados cuando necesitas separar energia cinetica y potencial en el inicio y en el final.

- **Puedo afirmar que hubo disipacion solo porque [[Wnc]] es negativo?**  
  Debes justificar el mecanismo. Un [[Wnc]] negativo indica perdida mecanica neta, pero el modelo debe decir si proviene de rozamiento, arrastre u otra interaccion.

- **Que reviso si obtengo [[Kf]] negativa?**  
  Revisa el signo de [[Wnc]], la construccion de [[Ui]] y [[Uf]], y si el estado final planteado es alcanzable.

## Conexiones transversales y rutas de estudio

Este leaf prolonga el principio de conservacion de la energia y prepara el estudio de rozamiento y disipacion. Tambien conecta con potencia, porque un mismo trabajo no conservativo puede ocurrir de forma lenta o muy rapida, y esa diferencia importa en aplicaciones tecnicas.

Desde el punto de vista mecanico, el leaf sirve como puente entre problemas puramente conservativos y situaciones reales en las que intervienen motores, frenado, arrastre o perdidas internas. Es una herramienta de lectura global, complementaria a las ecuaciones de Newton cuando interesa cerrar estados en lugar de describir la evolucion instantanea.

## Sintesis final

Dominar el trabajo de fuerzas no conservativas significa saber explicar por que la energia mecanica cambia y cuanto cambia. El objetivo final es construir balances coherentes entre estados, interpretar el signo de [[Wnc]] y [[dEm]], y decidir si el sistema gana, pierde o conserva energia mecanica dentro del modelo elegido.
`;export{e as default};
