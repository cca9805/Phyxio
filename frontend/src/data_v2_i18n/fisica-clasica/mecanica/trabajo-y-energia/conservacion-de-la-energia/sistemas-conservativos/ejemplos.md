# Ejemplo tipo examen

## Enunciado

Un trineo de laboratorio de masa 2 kg parte del reposo en una pista. El estado inicial esta a 5 m por encima del punto mas bajo. Antes de llegar al estado final, el trineo cruza una zona rugosa corta y termina en una plataforma situada a 1 m sobre el punto mas bajo. La zona rugosa extrae 8 J de energia mecanica. Se pide determinar la energia cinetica final, justificar si el proceso completo es conservativo o no y explicar que parte del cambio puede leerse como intercambio ideal entre energia cinetica y potencial.

## Datos

Se toma gravedad terrestre aproximada de 10 N por kg. La referencia de [[U]] se fija en el punto mas bajo de la pista y se mantiene para todo el problema. El estado inicial tiene [[Ki]] nula por partir del reposo. El estado inicial tambien tiene [[Ui]] asociada a 5 m de altura. El estado final tiene [[Uf]] asociada a 1 m de altura. El tramo rugoso se resume mediante [[Wnc]] negativa con valor de 8 J.

## Definición del sistema

El sistema incluye al trineo y la interaccion gravitatoria terrestre, de modo que la descripcion mecanica use [[Em]], [[K]] y [[U]] con una misma referencia. El tramo rugoso no se absorbe dentro de la parte conservativa del sistema, sino que se representa mediante [[Wnc]] para no forzar una conservacion ideal inexistente. Con esta decision, [[Ki]], [[Ui]], [[Kf]] y [[Uf]] describen estados, mientras [[Wc]], [[dU]] y [[Wnc]] describen el intercambio energetico relevante entre ellos.

## Modelo físico

La mayor parte del recorrido se interpreta como un intercambio entre [[U]] y [[K]], por lo que el lenguaje de sistemas conservativos sigue siendo el marco central. La gravedad aporta [[Wc]] y produce un cambio [[dU]] con signo opuesto. Sin embargo, el proceso global no es estrictamente conservativo porque el tramo rugoso introduce [[Wnc]]. Por eso conviene leer primero la parte ideal que transforma altura en movimiento y despues cerrar el balance total con [[Em]], [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Wc]], [[dU]] y [[Wnc]].

## Justificación del modelo

El modelo es fisicamente explicito porque distingue dos mecanismos y no los mezcla. La gravedad si admite potencial y por tanto puede tratarse como interaccion conservativa. El rozamiento localizado no cumple ese papel en el problema y se introduce como intercambio no conservativo neto. Esta separacion permite conservar la estructura del leaf sin fingir que todo el proceso es ideal. La justificacion tambien depende de mantener una referencia comun para [[Ui]] y [[Uf]], porque sin ella la comparacion entre estados perderia significado.

## Resolución simbólica

Primero se recuerda la definicion del estado mecanico:

{{f:conservacion_energia_mecanica}}

Luego se usa la relacion entre trabajo conservativo y cambio potencial:

{{f:trabajo_conservativo}}

Si el recorrido fuese completamente ideal entre estado inicial y final, la comparacion se expresaria mediante:

{{f:estados_conservativos}}

Pero como hay una zona rugosa con perdida neta, el balance correcto para el proceso completo es:

{{f:extension_no_conservativa}}

De forma cualitativa, la caida entre 5 m y 1 m hace que [[U]] disminuya y que la gravedad entregue [[Wc]] positiva. Esa conversion aumentaria [[Kf]] respecto al caso inicial. Luego la zona rugosa resta parte de ese presupuesto mediante [[Wnc]] negativa. La energia cinetica final debe ser, por tanto, la conversion gravitatoria disponible menos la perdida no conservativa.

## Sustitución numérica

Con la referencia elegida, el estado inicial tiene [[Ui]] de 100 J y [[Ki]] de 0 J. El estado final conserva [[Uf]] de 20 J. Entre ambos estados, la disminucion de [[U]] es de 80 J, de modo que el trabajo conservativo [[Wc]] correspondiente es de 80 J en el convenio del leaf. Si el sistema fuera ideal, toda esa diferencia alimentaria la [[Kf]].

Como el tramo rugoso extrae 8 J, el balance total indica que la energia cinetica final queda en 72 J. Eso significa que la mayor parte de la caida se traduce en movimiento, pero no toda. La rapidez final compatible con esa energia para 2 kg es del orden de 8.5 m por segundo, una cifra razonable para un descenso corto de laboratorio.

## Validación dimensional

Todas las magnitudes energeticas del problema se expresan en julios. [[Ui]], [[Uf]], [[Kf]], [[Wc]] y [[Wnc]] pertenecen a la misma familia dimensional, de modo que pueden entrar en un mismo balance. Esta revision es importante porque evita errores frecuentes de mezclar alturas, fuerzas y energias sin la conversion correspondiente. Tambien confirma que la resta entre conversion conservativa y perdida no conservativa es fisicamente consistente.

## Interpretación física

La lectura fisica mas importante no es el numero 72 por si solo, sino su significado. El proceso no es conservativo en sentido estricto porque [[Wnc]] no vale cero. Sin embargo, el tema de sistemas conservativos sigue dominando el problema porque la parte central del intercambio procede de la conversion entre [[U]] y [[K]]. El rozamiento aparece como correccion estructural clara y cuantificable. Esta es justamente la competencia que busca el leaf: distinguir cuando el nucleo del proceso es conservativo y cuando hace falta ampliar el balance.

# Ejemplo de aplicación real

## Contexto

Un equipo de diseno analiza una vagoneta ligera de parque cientifico con masa total cercana a 500 kg. En una bajada corta, la vagoneta desciende unos 12 m respecto al punto de partida antes de entrar en una curva de control. Los ingenieros quieren saber si pueden tratar ese tramo como casi conservativo para obtener una primera estimacion de velocidad o si deben incluir desde el inicio perdidas por ruedas, eje y aire.

## Estimación física

Si el tramo se leyera como estrictamente conservativo, la disminucion de [[U]] equivaldria a unos 60 kJ de presupuesto mecanico disponible para aumentar [[K]]. Esa escala sale de combinar masa, gravedad y cambio de altura. Las mediciones de prueba, sin embargo, muestran que al llegar a la curva el incremento efectivo de [[K]] queda mas cerca de 52 kJ. La diferencia, de unos 8 kJ, se interpreta como [[Wnc]] negativa distribuida entre rozamientos internos, rodadura y arrastre aerodinamico moderado.

El resultado no invalida el modelo conservativo como primera aproximacion. De hecho, muestra que el intercambio principal sigue dominado por [[U]] y [[K]]. Pero tambien indica que el diseno final de frenado y seguridad no deberia ignorar [[Wnc]], porque a escala de pasajeros y tolerancias reales una desviacion de varios kilojulios ya no es decorativa.

## Interpretación

En aplicacion real, la utilidad del leaf esta en ordenar decisiones de modelado. El calculo conservativo ofrece una primera lectura rapida de la energia disponible y del rango de velocidad esperable. La comparacion con la medicion permite luego estimar [[Wnc]] y decidir si el sistema puede seguir tratandose como casi ideal o si el termino no conservativo pasa a ser parte central del diseno. En este caso, la vagoneta opera cerca del regimen conservativo, pero no dentro de un ideal puro. Esa conclusion es mas valiosa que cualquier numero aislado porque informa como debe pensarse la ingenieria del sistema.