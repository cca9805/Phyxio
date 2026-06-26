# Sistemas conservativos

## Contexto conceptual

Un sistema conservativo es aquel en el que la descripcion energetica puede organizarse sin perder informacion mecanica relevante al pasar de un estado a otro. La idea central no es que todo permanezca inmovil o que nada cambie, sino que el intercambio entre movimiento y configuracion puede leerse con un balance estable. En ese marco, la energia mecanica [[Em]] actua como una lupa conceptual: permite decidir si el fenomeno puede tratarse como redistribucion ideal entre [[K]] y [[U]], o si hace falta introducir un termino adicional asociado a [[Wnc]].

La diferencia entre un sistema conservativo y uno no conservativo no se reduce a una etiqueta academica. Afecta la forma de modelar caidas, ascensos, resortes, trayectorias curvas, frenadas parciales y sistemas con aporte externo. Si el modelo es realmente conservativo, el foco no esta en seguir toda la trayectoria detalle a detalle, sino en comparar estados bien definidos mediante [[Ki]], [[Ui]], [[Kf]] y [[Uf]]. Si el problema incorpora disipacion, motor, empuje o rozamiento neto, el balance cambia y aparece [[Wnc]] como magnitud causal.

Este leaf sirve para entrenar una decision de modelado muy concreta. Antes de sustituir datos, el alumno debe preguntar si la interaccion principal admite una lectura con energia potencial y si el trabajo de esa interaccion depende o no de la trayectoria. Cuando la respuesta es afirmativa, [[Wc]] y [[dU]] permiten leer la conversion energetica con mucha potencia conceptual. Cuando la respuesta es negativa o incompleta, la presencia de [[Wnc]] obliga a abandonar la conservacion mecanica ideal y pasar a un balance mas general.

Tambien es un leaf importante porque corrige una confusion frecuente. Muchos estudiantes creen que un sistema conservativo es aquel donde [[K]] permanece constante, o donde la rapidez del objeto no cambia demasiado. Ninguna de esas afirmaciones define el concepto. Un sistema puede ser conservativo y aun asi transformar casi toda [[U]] en [[K]], o a la inversa. Lo que importa no es si cada contribucion permanece fija, sino si el total mecanico puede mantenerse sin perdida ni aporte neto externo.

Por eso el leaf no debe memorizarse como una definicion corta. Debe entenderse como un criterio operativo. Cuando un problema permite describir [[U]] con una referencia consistente, interpretar [[Wc]] como opuesto de [[dU]] y cerrar el balance entre estado inicial y final sin termino extra, estamos en el corazon del modelo conservativo. Cuando eso deja de ser suficiente, la propia estructura del leaf muestra por que aparece [[Wnc]] y que cambia en la lectura fisica.

## 🟢 Nivel esencial

En el nivel esencial conviene pensar un sistema conservativo como un problema en el que la energia mecanica cambia de forma, pero no se fuga del juego mecanico principal. Un objeto que cae, un cuerpo que asciende despues de recibir impulso o una masa unida a un resorte pueden acelerar o frenarse, pero el modelo sigue siendo coherente si el intercambio ocurre entre movimiento y configuracion. La pregunta clave es sencilla: la energia sigue dentro del balance mecanico o aparece un mecanismo adicional que la extrae o la inyecta.

Esta idea es mas fina que la intuicion de mirar solo la rapidez. Si un cuerpo baja, su [[K]] puede aumentar mucho y su [[U]] disminuir. Si sube, pasa lo contrario. En ambos casos el modelo sigue siendo conservativo mientras el total [[Em]] pueda entenderse como el mismo presupuesto redistribuido. El alumno no necesita, en este nivel, reconstruir toda la matematica. Necesita comprender que la energia mecanica puede conservarse aunque cada pieza por separado cambie bastante.

El otro concepto esencial es la diferencia entre ideal y real. Los sistemas reales rara vez son perfectamente conservativos, pero muchos se comportan como tales dentro de cierto margen. Una rampa muy pulida, un resorte de laboratorio o una caida breve en aire tranquilo pueden tratarse primero con el modelo ideal. La tarea no es creer que el mundo siempre es ideal, sino detectar cuando esa idealizacion es suficientemente buena para describir la fisica principal.

## 🔵 Nivel formal

La definicion estructural que organiza el leaf es:

{{f:conservacion_energia_mecanica}}

Esta relacion presenta a [[Em]] como suma de [[K]] y [[U]] en un estado. Todavia no impone conservacion estricta. Lo que hace es fijar el lenguaje del problema: el estado mecanico se describe con una contribucion ligada al movimiento y otra ligada a la configuracion.

Cuando la interaccion relevante es conservativa, el trabajo correspondiente se conecta con el cambio de energia potencial mediante:

{{f:trabajo_conservativo}}

Esta formula indica que [[Wc]] y [[dU]] deben leerse con signos opuestos. Si la energia potencial disminuye, la fuerza conservativa ha realizado trabajo positivo sobre el sistema. Si la energia potencial aumenta, ese trabajo resulta negativo en el convenio habitual.

La forma mas operativa del modelo conservativo entre dos estados es:

{{f:estados_conservativos}}

Aqui aparecen [[Ki]], [[Ui]], [[Kf]] y [[Uf]] como piezas del balance. Esta es la herramienta mas util cuando el problema esta planteado con estado inicial y final bien definidos. No exige recorrer punto por punto la trayectoria; exige, eso si, mantener el mismo sistema y la misma referencia potencial.

Cuando el proceso ya no es ideal y entra un intercambio no conservativo neto, el balance se amplía a:

{{f:extension_no_conservativa}}

La magnitud [[Wnc]] permite cuantificar la desviacion respecto al caso conservativo. Si vale cero, el sistema recupera el ideal. Si es negativa, suele indicar disipacion. Si es positiva, suele señalar aporte externo neto. El nivel formal del leaf, por tanto, no solo dice como calcular, sino como decidir que ecuacion corresponde a cada situacion fisica.

## 🔴 Nivel estructural

El modelo conservativo descansa en varias condiciones que deben vigilarse. La primera es que la interaccion principal admita una energia potencial [[U]] bien definida. Sin esa pieza, hablar de [[Wc]] como opuesto de [[dU]] deja de tener sentido. La segunda es que la referencia de [[U]], [[Ui]] y [[Uf]] permanezca fija al comparar estados. La tercera es que el termino [[Wnc]] sea nulo o despreciable si queremos usar la version ideal del balance.

Tambien hay un limite de interpretacion. El leaf no dice que toda transferencia de energia del universo quede contenida en [[Em]]. Solo organiza la parte mecanica elegida. Si aparece calor, deformacion irreversible, accion de un motor, frenado apreciable o perdida por arrastre, el problema sigue siendo resoluble energéticamente, pero ya no pertenece al caso conservativo puro. Ahi el modelo correcto no es negar el efecto, sino incorporarlo en [[Wnc]].

Una lectura estructural madura exige ademas distinguir definicion y ley. La ecuacion de [[Em]] como suma de [[K]] y [[U]] vale como definicion de estado. La conservacion entre estados es una conclusion condicional, no automatica. Confundir ambos niveles lleva a aplicar balances ideales donde el propio fenomeno ya esta pidiendo un termino de intercambio no conservativo.

## Interpretación física profunda

La potencia real de un sistema conservativo no esta en ahorrar cuentas, sino en cambiar la pregunta fisica. En vez de preguntar solo que fuerza actua en cada punto, el modelo permite preguntar como se redistribuye el contenido mecanico del sistema entre movimiento y configuracion. Esa reformulacion es profunda porque transforma el problema en un balance entre estados, no solo en una lista de causas locales.

Desde esta perspectiva, [[Wc]] no es una cifra suelta. Es la traduccion de que una parte del potencial disponible se ha convertido en capacidad de movimiento, o de que el sistema ha almacenado de nuevo esa capacidad en forma configuracional. De manera complementaria, [[Wnc]] marca la frontera entre la idealizacion y la realidad del proceso. No es un adorno algebraico, sino la señal de que el sistema ya no puede entenderse como un intercambio cerrado entre [[K]] y [[U]].

Entender esto evita dos errores graves. El primero es creer que todo problema con energia potencial es automaticamente conservativo. El segundo es creer que una vez aparece [[Wnc]] el lenguaje energetico deja de servir. Ocurre lo contrario: el lenguaje energetico sigue siendo el correcto, pero cambia la ecuacion de cierre y cambia el diagnostico fisico.

## Orden de magnitud

En problemas de laboratorio, [[Em]] puede moverse en escalas de unos pocos julios. En sistemas de transporte o ingenieria, puede subir a cientos o miles de julios. Lo importante no es memorizar cifras aisladas, sino usar la escala del problema como filtro de coherencia. Si un pequeno resorte aparece con un intercambio energetico comparable al de un vehiculo ligero, hay un fallo de datos, de unidades o de modelo.

## Metodo de resolucion personalizado

1. Define con cuidado el sistema y fija que estados vas a comparar.
2. Decide si la interaccion principal admite una [[U]] bien definida y una referencia estable.
3. Identifica si el caso es conservativo ideal o si hace falta introducir [[Wnc]].
4. Escribe primero el balance simbolico con [[Ki]], [[Ui]], [[Kf]] y [[Uf]].
5. Sustituye datos solo despues de verificar signos, referencia potencial y unidades.
6. Cierra con una lectura causal: conversion entre [[K]] y [[U]] o aparicion de intercambio no conservativo.

## Casos especiales y ejemplo extendido

Hay varios casos donde este leaf resulta especialmente claro. En una caida sin rozamiento, [[U]] disminuye mientras [[K]] aumenta y [[Em]] se mantiene. En una subida ideal ocurre el intercambio contrario. En un resorte sin perdida apreciable, la energia va y vuelve entre configuracion y movimiento. En una trayectoria con rozamiento, en cambio, la caida de [[Em]] o el aporte requerido para sostenerla obliga a introducir [[Wnc]].

Considera un ejemplo extendido en dos fases. Primero, una masa desciende por una rampa lisa y llega al pie con una [[Kf]] compatible con la perdida de [[U]]. La lectura conservativa es directa. Despues, esa misma masa entra en un tramo rugoso y se detiene antes de recuperar toda la altura si rebota o intenta ascender. La segunda fase ya no puede interpretarse con el mismo cierre ideal, porque una parte del presupuesto mecanico ha salido del intercambio entre [[K]] y [[U]]. Ese contraste es valioso porque muestra que el sistema no cambia de naturaleza por capricho matematico, sino porque cambia el mecanismo fisico dominante.

## Preguntas reales del alumno

- **Si [[Em]] se conserva, significa que [[K]] tambien se conserva?**  
  No. Lo que se conserva en el caso ideal es el total mecanico. [[K]] puede crecer o disminuir mientras [[U]] compensa el cambio.

- **Basta con que exista [[U]] para declarar sistema conservativo?**  
  No. Ademas debe mantenerse una referencia coherente y no debe haber un intercambio neto relevante representado por [[Wnc]].

- **Por que [[Wc]] y [[dU]] llevan signos opuestos?**  
  Porque el trabajo conservativo mide la conversion que hace disminuir o aumentar el potencial del sistema entre dos estados.

- **Que hago si el problema tiene rozamiento pequeño?**  
  Primero decide si es despreciable para la precision buscada. Si no lo es, abandona el cierre ideal y usa [[Wnc]].

- **Que es mas importante, la trayectoria o los estados?**  
  En el caso conservativo puro, los estados suelen ser la informacion decisiva para el balance. La trayectoria vuelve a importar si incorpora mecanismos no conservativos o datos geometricos necesarios para modelarlos.

## Conexiones transversales y rutas de estudio

Este leaf enlaza directamente con el principio de conservacion de la energia, con los leafs de [[K]] y [[U]] y con los temas de trabajo no conservativo y disipacion. Tambien conecta con dinamica, porque la descripcion local con fuerzas y la descripcion global con energia deben contar la misma historia fisica aunque cambie el lenguaje.

## Síntesis final

Dominar sistemas conservativos significa saber reconocer cuando el problema puede leerse como un intercambio interno entre [[K]] y [[U]], y cuando hace falta introducir [[Wnc]] para representar perdida o aporte externo. [[Em]] organiza el estado, [[Wc]] conecta el potencial con la conversion energetica y el balance entre [[Ki]], [[Ui]], [[Kf]] y [[Uf]] permite comparar estados de forma compacta y fisicamente robusta.

La competencia final del leaf no es recitar una definicion, sino decidir con rigor que modelo energetico corresponde al fenomeno real. Cuando esa decision se toma bien, el lenguaje de sistemas conservativos deja de ser un truco escolar y se convierte en una herramienta de interpretacion mecanica muy poderosa.