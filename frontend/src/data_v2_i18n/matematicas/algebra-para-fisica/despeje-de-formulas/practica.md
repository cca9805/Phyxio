# Practica

## Nivel 1: reconocimiento

Identifica la incognita antes de despejar. En `d = v t`, si el enunciado pregunta cuanto tarda, la incognita es `t`. Si pregunta que distancia recorre, la incognita es `d`. Escribe una frase fisica para cada caso.

Ejercicio: en `P = E / t`, marca que variable despejarias para responder estas preguntas: energia transferida, tiempo de funcionamiento y potencia media. No calcules todavia; solo reconoce la variable.

## Nivel 2: aplicacion directa

Despeja formulas con una sola aparicion de la incognita. A partir de `F = m a`, despeja `a` y despues despeja `m`. Comprueba las unidades de cada resultado: aceleracion debe quedar en `m/s^2` y masa en `kg`.

Ejercicio: de `p = F / A`, despeja `F` y `A`. Explica que condicion debe cumplir el area para que el despeje tenga sentido.

Criterio de correccion: para `F = m a` deben aparecer `a = F/m` y `m = F/a`, con la condicion `a != 0` en el segundo despeje. Para `p = F/A` deben aparecer `F = p A` y `A = F/p`, con `A != 0` en la formula original y `p != 0` al despejar el area.

## Nivel 3: eleccion de herramienta

Elige que operacion inversa corresponde. Si la incognita esta multiplicada, divide. Si esta dividiendo, multiplica y despues divide si hace falta. Si esta sumada, resta. Si esta al cuadrado, aisla primero el cuadrado y solo despues toma raiz.

Ejercicio: compara `E = P t`, `v = v_0 + a t` y `K = (1/2) m v^2`. Di que pasos usarias para despejar `t` en las dos primeras y `v` en la tercera.

Ejercicio avanzado: clasifica estos despejes antes de resolverlos: `T = 2 pi sqrt(L/g)` para `g`, `I = V/R` para `R`, `q = q_0 e^{-t/tau}` para `t`, y `F = b v + c v^2` para `v`. Indica si el caso es lineal, racional, con raiz, exponencial o cuadratico.

Criterio de correccion: en `T = 2 pi sqrt(L/g)`, la incognita queda dentro de una raiz y en un denominador, por eso hay que cuadrar despues de aislar el cociente. En `q = q_0 e^{-t/tau}`, hay que formar una razon adimensional `q/q_0` y aplicar logaritmo.

## Nivel 4: interpretacion fisica

Despues de despejar, interpreta la dependencia. Si obtienes `t = d / v`, explica por que aumentar `d` aumenta `t` y aumentar `v` lo reduce. Si obtienes `a = F / m`, explica por que aumentar `m` reduce la aceleracion para una misma fuerza.

Ejercicio: una expresion final da `I = V / R`. Describe que ocurre con la corriente si la resistencia se duplica manteniendo la tension.

Ejercicio avanzado: de `K = (1/2) m v^2` se obtiene `v = sqrt(2K/m)` si se pide rapidez. Explica por que duplicar `K` no duplica la rapidez, y por que duplicar `m` reduce la rapidez por un factor `sqrt(2)` si la energia se mantiene.

Criterio de correccion: la respuesta debe hablar de raiz cuadrada, no de proporcionalidad lineal. Tambien debe distinguir rapidez positiva de velocidad con signo.

## Nivel 5: error intencionado

Analiza este despeje incorrecto: de `d = v t` alguien obtiene `t = v / d`. Detecta el error usando unidades y dependencia fisica. Escribe la forma correcta y una frase que explique por que el tiempo debe crecer al aumentar la distancia.

Analiza otro error: de `F = m a` alguien obtiene `m = F a`. Comprueba unidades, corrige el despeje y explica por que multiplicar por aceleracion no puede dar masa.

Analiza un tercer error: de `K = (1/2) m v^2` alguien obtiene `v = 2K/m`. Detecta que se ha olvidado la raiz, comprueba unidades y escribe la forma correcta. Explica por que el resultado incorrecto tiene unidades de `m^2/s^2`, no de velocidad.

Analiza un cuarto error: de `q = q_0 e^{-t/tau}` alguien despeja `t = -tau e q/q_0`. Explica por que no se puede "pasar" la exponencial multiplicando por `e`, aplica logaritmo correctamente y declara la condicion `q/q_0 > 0`.

## Ruta de dominio

Nivel basico: debes reconocer la incognita, aislarla en formulas lineales simples y comprobar que la unidad final coincide con la magnitud buscada. Si todavia dudas, escribe primero la pregunta fisica con palabras y despues marca la letra que responde a esa pregunta.

Nivel intermedio: debes elegir operaciones inversas en el orden correcto, detectar denominadores que no pueden ser cero e interpretar dependencias directas, inversas y cuadraticas. Aqui el objetivo no es solo obtener una forma algebraica, sino explicar por que el resultado aumenta o disminuye al cambiar un dato.

Nivel avanzado: debes manejar incognitas dentro de raices, potencias, exponenciales o logaritmos, reconocer cuando aparecen varias ramas y decidir si conviene una solucion simbolica o numerica. El cierre del despeje avanzado exige tres controles: dominio matematico, unidad fisica y sentido del modelo.

<!-- algebra-depth-v2 -->
## Practica de profundizacion

Nivel basico: inventa un ejemplo numerico sencillo relacionado con despeje de formulas, resuelvelo y escribe una frase con unidad y significado.

Nivel intermedio: cambia un dato por un factor `10` y predice el nuevo resultado antes de calcularlo. Luego verifica si la prediccion coincide.

Nivel avanzado: escribe un caso limite donde el procedimiento habitual pueda fallar. Explica que condicion fisica o matematica deja de cumplirse.

