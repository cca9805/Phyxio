# Ejemplo tipo examen


## Enunciado

Dos bobinas fijas comparten un nucleo lineal. La inductancia mutua entre ellas es 0.080 H. La corriente primaria pasa de 0.20 A a 1.40 A en 6.0 ms. Calcula el flujo enlazado secundario final debido a la primaria y la fem media inducida en la secundaria. Despues, si [[inductancia_propia_primaria]] es 0.20 H y [[inductancia_propia_secundaria]] es 0.50 H, estima el coeficiente de acoplamiento.

## Datos

- Inductancia mutua [[inductancia_mutua]]: 0.080 H.
- Corriente primaria inicial [[corriente_fuente]]: 0.20 A.
- Corriente primaria final: 1.40 A.
- Cambio de corriente primaria [[cambio_de_corriente_primaria]]: aumento de 1.20 A.
- Intervalo de tiempo [[intervalo_de_tiempo]]: 6.0 ms, equivalente a 0.0060 s.
- Inductancias propias para acoplamiento: [[inductancia_propia_primaria]] de 0.20 H y [[inductancia_propia_secundaria]] de 0.50 H.

## Definición del sistema

El sistema esta formado por dos bobinas. La primaria es la fuente del flujo y la secundaria es la bobina donde se mide la fem. La referencia positiva de [[corriente_fuente]] se elige en el sentido que produce [[lambda_21]] positivo.

## Modelo físico

Se usa el modelo lineal de inductancia mutua. La magnitud [[inductancia_mutua]] conecta [[corriente_fuente]] con [[lambda_21]], y el cambio [[cambio_de_corriente_primaria]] durante [[intervalo_de_tiempo]] produce [[epsilon_2]]. El coeficiente [[coeficiente_de_acoplamiento]] se usa solo para interpretar la calidad del acoplamiento respecto a [[inductancia_propia_primaria]] y [[inductancia_propia_secundaria]].

## Justificación del modelo

El enunciado declara bobinas fijas y nucleo lineal, asi que [[inductancia_mutua]] se considera constante durante el transitorio. Si el nucleo saturara, si hubiera movimiento relativo o si el secundario cargado modificara mucho el flujo, esta lectura seria solo una primera aproximacion.

La corriente primaria aumenta, por tanto [[cambio_de_corriente_primaria]] es positivo con la referencia elegida. La fem secundaria debe aparecer con signo opuesto al aumento de flujo enlazado.

## Resolución simbólica

La inductancia mutua se define mediante el flujo secundario creado por corriente primaria:

{{f:definicion_inductancia_mutua}}

El flujo enlazado secundario final se obtiene con la relacion lineal:

{{f:flujo_mutuo_lineal}}

La fem media inducida durante el cambio se obtiene con:

{{f:fem_mutua_media}}

El acoplamiento se estima con:

{{f:coeficiente_acoplamiento}}

## Sustitución numérica

Para el estado final, multiplicar 0.080 H por 1.40 A da 0.112 Wb. Por tanto [[lambda_21]] final es aproximadamente 0.112 Wb con la referencia elegida.

La corriente primaria aumenta 1.20 A durante 0.0060 s. La rapidez media de cambio es de 200 A/s. Multiplicar por 0.080 H da un modulo de fem de 16 V. El signo de [[epsilon_2]] es negativo respecto a la referencia que haria crecer el flujo secundario, porque la fem se opone al aumento.

Para [[coeficiente_de_acoplamiento]], el producto de 0.20 H y 0.50 H tiene raiz cuadrada 0.316 H aproximadamente. Dividir 0.080 H por esa escala da un acoplamiento cercano a 0.25. Es un acoplamiento apreciable, pero lejos del caso ideal casi perfecto.

## Validación dimensional

Henrio por amperio produce weber, coherente con [[lambda_21]]. Henrio multiplicado por amperio y dividido por segundo produce voltio, coherente con [[epsilon_2]]. En el coeficiente [[coeficiente_de_acoplamiento]], henrio dividido por henrio da una cantidad sin unidad.

La lectura de signo tambien es coherente: un aumento de [[corriente_fuente]] aumenta el flujo mutuo, y la fem inducida aparece con polaridad opuesta al cambio segun Lenz.

## Interpretación física

El resultado muestra que una corriente primaria moderada puede producir una tension secundaria clara si el cambio ocurre en pocos milisegundos. El valor de [[inductancia_mutua]] resume cuanta parte del campo primario realmente enlaza la bobina secundaria.

El valor de [[coeficiente_de_acoplamiento]] completa la lectura. Aunque las bobinas tienen inductancias propias de decimas de henrio, solo una fraccion del acoplamiento maximo se aprovecha. Eso puede deberse a fugas de flujo, separacion o geometria no ideal.

Si el mismo cambio de corriente ocurriera diez veces mas lento, el modulo de [[epsilon_2]] seria diez veces menor. En cambio, [[lambda_21]] final dependeria del valor final de [[corriente_fuente]], no de la rapidez con la que se llego a el.

# Ejemplo de aplicación real


## Contexto

Un cargador inductivo usa una bobina emisora y una bobina receptora. La emisora cambia su corriente para crear un flujo variable; la receptora obtiene una fem por induccion mutua. El objetivo no es que las bobinas se toquen, sino que compartan flujo suficiente.

## Estimación física

Supongamos una [[inductancia_mutua]] efectiva de 20 microhenrios y un cambio de corriente primaria de 2 A en 10 microsegundos. La rapidez media de cambio es grande, por lo que la fem inducida puede estar en el orden de varios voltios. Si el receptor se desplaza y [[coeficiente_de_acoplamiento]] baja a la mitad, tambien baja [[inductancia_mutua]] y la tension disponible cae aproximadamente en la misma proporcion.

La estimacion cuantitativa ayuda a decidir si la posicion de la bobina receptora es aceptable. Un desplazamiento pequeño puede no cambiar mucho [[inductancia_propia_primaria]] ni [[inductancia_propia_secundaria]], pero si puede reducir [[coeficiente_de_acoplamiento]] y degradar la transferencia.

## Interpretación

La aplicacion real enseña que la inductancia mutua es una propiedad del par y de su alineacion. No basta con elegir bobinas grandes; hay que controlar distancia, orientacion, frecuencia y nucleo.

El diseño correcto mira simultaneamente [[inductancia_mutua]], [[coeficiente_de_acoplamiento]], [[cambio_de_corriente_primaria]] y [[intervalo_de_tiempo]]. Si solo se mira la corriente primaria nominal, se ignora la parte decisiva: cuanto flujo llega realmente al receptor y cuan rapido cambia.