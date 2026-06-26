# Ejemplo tipo examen

## Enunciado

Una masa [[m]] de 2,0 kg se une a un muelle lineal de rigidez [[k]] igual a 80 N/m. Se separa del equilibrio una amplitud [[A]] de 0,050 m y se suelta sin rozamiento apreciable. Calcula la frecuencia angular natural [[omega]], el periodo [[Tper]] y la energia mecanica total [[E]]. Interpreta que parametro controla el ritmo y cual controla la energia.

## Datos

Los datos son [[m]] = 2,0 kg, [[k]] = 80 N/m y [[A]] = 0,050 m. Se asume que el desplazamiento esta dentro del regimen lineal del muelle, que no hay amortiguamiento apreciable y que el movimiento ocurre alrededor de un equilibrio estable. Las unidades ya estan en SI.

## Definición del sistema

El sistema es una masa-resorte de un grado de libertad. La coordenada generalizada puede tomarse como desplazamiento respecto al equilibrio. La masa aporta inercia, el muelle aporta retorno lineal y la amplitud describe el estado inicial de excitacion. No se incluyen fuerzas externas ni perdidas disipativas.

## Modelo físico

Usamos el oscilador armonico ideal. En este modelo, [[omega]] se determina por la competencia entre [[k]] y [[m]], [[Tper]] se deriva del ritmo angular y [[E]] queda fijada por la amplitud maxima [[A]] en el potencial elastico. La energia se conserva porque no se modela rozamiento.

## Justificación del modelo

La eleccion es fisicamente razonable porque el enunciado declara un muelle lineal y una amplitud pequena. No hay datos de amortiguamiento, topes, no linealidad ni fuerza periodica externa. Si en un experimento se observara que el periodo cambia al aumentar [[A]], o que la amplitud decae por ciclo, habria que abandonar el modelo ideal.

## Resolución simbólica

La frecuencia angular natural se calcula con:

{{f:omega}}

El periodo se obtiene desde la frecuencia angular:

{{f:Tper}}

La energia mecanica total asociada a la amplitud maxima es:

{{f:E}}

Estas relaciones se aplican en este orden porque primero se lee el ritmo natural del sistema, luego su tiempo de ciclo y finalmente la energia almacenada por la amplitud inicial.

## Sustitución numérica

Con [[k]] = 80 N/m y [[m]] = 2,0 kg, el cociente rigidez-inercia vale 40 en unidades de segundo inverso al cuadrado. La raiz da una frecuencia angular aproximada de 6,32 rad/s. El periodo correspondiente es cercano a 0,99 s.

Para la energia, la amplitud se introduce en metros. El cuadrado de 0,050 m es 0,0025 m^2. Multiplicado por la rigidez y por el factor un medio da una energia total aproximada de 0,10 J.

## Validación dimensional

En la frecuencia angular, [[k]] dividido por [[m]] tiene dimension de uno sobre tiempo al cuadrado, y su raiz tiene dimension de uno sobre tiempo. En el periodo, la constante angular adimensional dividida por [[omega]] produce segundos. En la energia, [[k]] por [[A]] al cuadrado da N*m, equivalente a J.

## Interpretación física

El oscilador tiene un periodo cercano a un segundo: no es una vibracion ultrarrapida, pero si una oscilacion claramente periodica de laboratorio. Si se aumentara [[m]] manteniendo [[k]], el periodo crecería. Si se aumentara [[k]] manteniendo [[m]], el movimiento seria mas rapido. En cambio, aumentar [[A]] no cambiaria el periodo ideal, pero aumentaria [[E]] de forma cuadratica.

El resultado muestra la separacion didactica central del leaf. El ritmo pertenece al sistema; la energia pertenece al estado de excitacion. Mezclarlos llevaria a pensar que una oscilacion mas amplia debe oscilar mas despacio, algo que el modelo armonico ideal no predice.

La lectura final debe hacerse como diagnostico, no como simple sustitucion. La frecuencia angular calculada indica que el conjunto masa-muelle tiene un reloj interno definido por sus parametros mecanicos. La energia de 0,10 J indica que la preparacion inicial es moderada, pero si la amplitud se aumentara hasta 0,10 m la energia pasaria a 0,40 J. Esa comparacion ayuda a ver por que [[A]] es una variable de estado muy sensible aunque no cambie el periodo ideal.

# Ejemplo de aplicación real

## Contexto

Un equipo diseña un soporte elastico para aislar vibraciones de una pequena plataforma de medida. Quiere que la frecuencia natural no coincida con una vibracion externa dominante y necesita estimar cuanta energia se almacena si la plataforma se desplaza una amplitud maxima especificada.

## Estimación física

La primera estimacion compara la [[omega]] natural del soporte con el rango de excitaciones externas. Si la frecuencia natural queda demasiado cerca de una excitacion periodica, puede aparecer resonancia y conviene cambiar [[m]] o [[k]]. Una masa mayor reduce el ritmo natural; una rigidez mayor lo aumenta.

Tambien se estima [[E]] para la amplitud maxima admisible. Esa lectura no sirve solo para calcular un numero: indica si el soporte almacena energia compatible con los limites mecanicos. Si [[A]] se duplica, la energia se cuadruplica, por lo que el margen de seguridad puede reducirse con rapidez.

## Interpretación

El oscilador armonico permite una decision preliminar clara: ajustar ritmo con [[m]] y [[k]], y controlar energia con [[A]] y [[k]]. Si el sistema real muestra amortiguamiento fuerte, respuesta no lineal o excitacion externa dominante, el modelo debe extenderse. Pero como primera lectura de diseño, separa de forma limpia frecuencia natural, periodo y energia almacenada.

En un informe tecnico, esta separacion se traduciria en dos recomendaciones distintas. Para alejarse de una frecuencia externa peligrosa se cambiaria [[m]] o [[k]]. Para limitar esfuerzos internos y recorrido maximo se reduciria [[A]] o se elegiria una rigidez compatible con el rango de trabajo. El mismo calculo, por tanto, no solo da numeros: orienta que parametro debe modificarse segun el problema real.
