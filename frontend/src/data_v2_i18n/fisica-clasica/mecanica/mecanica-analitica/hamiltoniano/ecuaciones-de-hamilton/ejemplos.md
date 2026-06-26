# Ejemplo tipo examen

## Enunciado

Un modo mecanico se describe con coordenada canonica [[qi]], momento conjugado [[p]], masa efectiva [[m]] y rigidez [[k]]. Su hamiltoniano es el del oscilador cuadratico. Obtén las ecuaciones de Hamilton, calcula [[qd]] y [[pd]] para un estado concreto e interpreta el flujo de fase.

## Datos

- [[m]] = 2,0 kg.
- [[k]] = 18 N/m.
- [[qi]] = 0,30 m.
- [[p]] = 4,0 kg m/s.
- El sistema no depende explicitamente del tiempo, por lo que [[Ht]] es nula.

## Definición del sistema

El sistema se representa por un punto de fase. La coordenada [[qi]] informa de la configuracion y [[p]] informa del estado conjugado de movimiento. No se pide integrar toda la trayectoria, sino construir el vector instantaneo que indica hacia donde se movera ese punto.

## Modelo físico

Se usa un oscilador armonico conservativo con masa efectiva constante y rigidez lineal. El hamiltoniano [[H]] separa energia cinetica escrita con [[p]] y energia potencial elastica escrita con [[qi]]. Bajo estas hipotesis, las variables son canonicas y las ecuaciones de Hamilton se aplican directamente.

## Justificación del modelo

El modelo es adecuado porque la rigidez se toma constante, la energia potencial es cuadratica y no hay fuerza disipativa ni dependencia temporal externa. La validez fisica depende de que [[qi]] sea medido desde el equilibrio y de que [[p]] sea el momento conjugado compatible con esa coordenada. Si esas condiciones fallaran, las pendientes de [[H]] no tendrian la lectura canonica usada aqui.

## Resolución simbólica

El campo hamiltoniano comienza con la primera ecuacion:

{{f:ecuacion_hamilton_q}}

La segunda componente del campo se obtiene con:

{{f:ecuacion_hamilton_p}}

Si el sistema tuviera varios grados de libertad, cada par canonico seguiria la forma indexada:

{{f:ecuaciones_hamilton_indexadas}}

Para el oscilador se usa:

{{f:hamiltoniano_oscilador}}

La velocidad de la coordenada queda:

{{f:qdot_oscilador}}

La evolucion del momento queda:

{{f:pdot_oscilador}}

La conservacion del hamiltoniano se evalua con:

{{f:conservacion_hamiltoniano}}

## Sustitución numérica

Con [[p]] = 4,0 kg m/s y [[m]] = 2,0 kg, la coordenada avanza con una rapidez canonica de 2,0 m/s. Con [[k]] = 18 N/m y [[qi]] = 0,30 m, el momento cambia a razon de -5,4 N. El signo negativo indica que el momento disminuye porque el estado esta desplazado hacia el lado positivo de la coordenada.

El valor de [[H]] es 4,0 J de parte cinetica y 0,81 J de parte potencial, para un total de 4,81 J. Como [[Ht]] es nula, ese valor se conserva durante la evolucion ideal, aunque la coordenada y el momento sigan cambiando.

## Validación dimensional

La relacion [[p]] dividido por [[m]] produce unidades de velocidad. La relacion [[k]] multiplicada por [[qi]] produce newtons, que son unidades de cambio temporal de momento. [[H]] queda en joules y [[dHdt]] en vatios. Las unidades separan claramente tres ideas: valor energetico, flujo de coordenada y flujo de momento.

## Interpretación física

La lectura fisica no es numerica sino causal. El momento positivo hace que la coordenada aumente; el desplazamiento positivo hace que el momento disminuya por efecto restaurador. El punto de fase se mueve, por tanto, hacia una region con mayor coordenada pero menor momento. Esa combinacion es la rotacion caracteristica del oscilador.

La conservacion de [[H]] no significa que el sistema este quieto. Significa que el punto se mueve sobre una curva de nivel. En este ejemplo, el estado intercambia energia cinetica y potencial manteniendo el valor total de la funcion hamiltoniana.

La lectura didactica completa es que el hamiltoniano aporta dos informaciones simultaneas. Como valor, permite comprobar una escala energetica y una conservacion. Como funcion, permite calcular pendientes que dirigen el movimiento. Si solo se conserva el numero 4,81 J, se pierde la parte mas importante del formalismo: saber hacia donde se desplaza el estado en el siguiente instante. Por eso el resultado correcto debe expresarse como vector de fase y no solo como energia total.

# Ejemplo de aplicación real

## Contexto

Un sensor mide el desplazamiento de una masa pequeña en una plataforma elastica. Para predecir la evolucion inmediata no basta con saber donde esta la masa; tambien hace falta conocer su momento. El formalismo hamiltoniano permite representar ambos datos como un punto de fase y calcular el vector de evolucion.

## Estimación física

Si se duplica [[p]] manteniendo [[m]], [[qd]] tambien se duplica. Si se duplica [[qi]] manteniendo [[k]], la magnitud de [[pd]] tambien se duplica y apunta con signo contrario. Esta estimacion permite anticipar cual variable domina el movimiento: mucho momento produce avance rapido; mucho desplazamiento produce cambio fuerte de momento.

## Interpretación

En laboratorio, esta lectura permite decidir si el sistema esta atravesando el equilibrio con gran velocidad, acercandose a un extremo o regresando desde el extremo. En docencia, muestra por que un retrato de fase contiene mas informacion que una grafica posicion-tiempo aislada. El objetivo del metodo es leer la dinamica local desde pendientes de [[H]], no solo calcular energia.

Tambien sirve como control de calidad de datos. Si el sensor indica un desplazamiento positivo y el modelo elastico predice una disminucion del momento, pero la estimacion experimental muestra aumento sostenido del momento, entonces falta una fuerza externa, hay error de signo o el sistema ya no esta en el regimen lineal. La aplicacion real no consiste en obtener una cifra exacta, sino en contrastar direccion de movimiento, escala de fuerza y conservacion esperada.
