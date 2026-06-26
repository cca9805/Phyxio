# Ejemplo tipo examen

## Enunciado

Una cuenta de masa [[m]] se mueve sin rozamiento sobre una guia ideal. Sobre ella actua una fuerza aplicada [[F]] y la cuenta tiene aceleracion [[a]] compatible con la guia. Se pide explicar como el principio de D'Alembert permite escribir el balance dinamico usando solo desplazamientos virtuales [[dr]] tangentes a la guia, y como aparece una fuerza generalizada [[Qj]] asociada a una coordenada [[qi]].

## Datos

- La masa [[m]] es constante y positiva.
- La fuerza activa es [[F]].
- La aceleracion real de la cuenta es [[a]].
- Los desplazamientos virtuales [[dr]] son tangentes a la guia.
- La reaccion normal de la guia es ideal y no realiza trabajo virtual tangencial.

## Definición del sistema

El sistema esta restringido geometricamente por la guia. La cuenta no puede desplazarse virtualmente en cualquier direccion; solo puede hacerlo en direcciones compatibles. Por eso no se usa un desplazamiento arbitrario del espacio, sino el desplazamiento virtual permitido por la ligadura.

## Modelo físico

Primero se reorganiza la dinamica mediante la fuerza efectiva:

{{f:fuerza_efectiva_dalembert}}

Despues se impone el balance de trabajo virtual:

{{f:trabajo_virtual_dinamico}}

Al escribir la geometria mediante [[qi]], la fuerza activa se convierte en fuerza generalizada:

{{f:fuerza_generalizada_desde_trabajo_virtual}}

El enlace con la formulacion lagrangiana queda:

{{f:lagrange_dalembert}}

## Justificación del modelo

El modelo es adecuado porque la guia se considera ideal y sin rozamiento. La normal existe, pero es perpendicular al desplazamiento virtual tangente. Por tanto, no contribuye a [[Wv]]. Esa eliminacion no es un desprecio de la fuerza, sino una consecuencia geometrica.

Tambien es importante que [[F]], [[m]] y [[a]] pertenezcan a la misma cuenta. Si se mezclan fuerzas de otro cuerpo o aceleraciones medidas en otra coordenada, la fuerza efectiva [[Feff]] pierde significado.

## Resolución simbólica

Se forma la fuerza efectiva:

{{f:fuerza_efectiva_dalembert}}

Luego se calcula el trabajo virtual dinamico sobre desplazamientos compatibles:

{{f:trabajo_virtual_dinamico}}

Si la guia se parametriza con [[qi]], se proyecta la fuerza activa para obtener:

{{f:fuerza_generalizada_desde_trabajo_virtual}}

Finalmente, la ecuacion reducida se lee como:

{{f:lagrange_dalembert}}

La reaccion normal no aparece porque su contribucion virtual se anula. Si hubiera rozamiento, esa conclusion cambiaria. En esta ultima lectura, [[Ri]] representa el residuo dinamico de la coordenada elegida y debe compararse con [[Qj]], no con una fuerza cartesiana cualquiera.

## Sustitución numérica

Supongamos [[m]]=0.50 kg y una aceleracion tangencial de 2.0 m/s2. El termino inercial tangencial tiene escala 1.0 N. Si la componente tangencial de [[F]] es 1.4 N, la fuerza efectiva tangencial tiene escala 0.4 N. Para un desplazamiento virtual de 1 mm, el trabajo virtual asociado seria de orden 0.0004 J.

Ese numero pequeno no significa que la fuerza sea irrelevante; el desplazamiento virtual se elige infinitesimal. Lo que importa es que el coeficiente de cada desplazamiento admisible se anule o quede equilibrado por la fuerza generalizada correspondiente.

## Validación dimensional

[[Feff]] tiene unidad de newton porque resta una fuerza aplicada y un termino [[m]][[a]]. Al multiplicarse por [[dr]], el resultado [[Wv]] tiene unidad de julio. En cambio, [[Qj]] depende de la coordenada: si [[qi]] es longitud, puede medirse en newtons; si es angulo, puede medirse en newton metro.

## Interpretación física

El resultado muestra que la guia controla la geometria, no necesariamente la ecuacion reducida de movimiento. La reaccion normal mantiene la cuenta en la guia, pero no empuja virtualmente en la direccion permitida. Por eso desaparece del balance de trabajo virtual.

La interpretacion correcta es que D'Alembert convierte la dinamica en una prueba de equilibrio virtual. Se restan los efectos inerciales, se proyecta sobre desplazamientos compatibles y se conservan solo los aportes que pueden hacer trabajo virtual.

Fisicamente, si el residuo [[Ri]] no coincide con el aporte [[Qj]], el modelo esta avisando de una fuerza mal proyectada, una aceleracion incompatible o una ligadura no ideal. Esa comparacion es mas informativa que el numero aislado de trabajo virtual, porque dice que parte del razonamiento dinamico ha perdido coherencia.

La lectura causal completa es esta: la guia limita los movimientos posibles, esa limitacion define [[dr]], el trabajo virtual filtra las fuerzas relevantes y la ecuacion reducida compara [[Ri]] con [[Qj]]. Si una de esas etapas se salta, el resultado puede ser numericamente razonable pero fisicamente equivocado.

Tambien conviene leer el signo. Si [[Qj]] cambia de signo al invertir la orientacion de [[qi]], no se ha producido una contradiccion: ha cambiado la convencion positiva de la coordenada. Lo importante es que [[Ri]] cambie de forma coherente con la misma convencion. Esta comprobacion evita interpretar un signo negativo como fallo automatico del modelo.

# Ejemplo de aplicación real

## Contexto

En robotica, un brazo articulado puede tener varias fuerzas internas en sus uniones. Para estudiar el movimiento de una articulacion, es mas util trabajar con una coordenada angular [[qi]] que resolver primero todas las reacciones internas.

## Estimación física

Una fuerza de 20 N aplicada a 0.15 m del eje produce un aporte generalizado de orden 3 N m. Si el brazo acelera, el termino inercial puede ser comparable y modificar el equilibrio dinamico. La lectura mediante [[Qj]] permite trabajar directamente con la magnitud relevante para la coordenada angular.

Si se confundiera [[Qj]] con una fuerza en newtons, se perderia el brazo de palanca y la ecuacion tendria dimensiones incorrectas. Esta estimacion detecta el error antes de resolver el sistema completo.

## Interpretación

La aplicacion real es que las coordenadas de articulacion absorben ligaduras geometricas. Las reacciones internas siguen existiendo y pueden ser importantes para dimensionar piezas, pero no siempre son necesarias para calcular la evolucion. D'Alembert justifica esa reduccion mediante trabajo virtual compatible.

El profesor puede usar este ejemplo para mostrar que mecanica analitica no oculta fuerzas: decide cuales hacen trabajo virtual en la coordenada elegida. Esa decision es fisica, geometrica y dimensional a la vez.
