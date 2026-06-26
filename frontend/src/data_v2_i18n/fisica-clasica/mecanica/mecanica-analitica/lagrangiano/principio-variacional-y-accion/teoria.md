# Principio variacional y accion

## Contexto conceptual

El principio variacional introduce una forma distinta de decidir que movimiento es fisicamente posible. En vez de sumar fuerzas componente a componente, compara trayectorias completas entre dos configuraciones fijadas y pregunta cual hace estacionaria una cantidad llamada [[S]]. Esa cantidad no es una energia instantanea, sino el efecto acumulado del [[L]] durante todo el intervalo de movimiento.

Este leaf ocupa el lugar conceptual anterior a las ecuaciones de Lagrange. Sin el principio de accion estacionaria, Euler-Lagrange puede parecer una receta algebraica. Con el principio variacional, se entiende que la ecuacion local nace de una comparacion global de caminos.

## 🟢 Nivel esencial

La idea esencial es que el sistema no elige una trayectoria porque tenga menor distancia ni porque minimice siempre una energia. El criterio lagrangiano es mas fino: entre trayectorias cinematicamente admisibles con los mismos extremos, la trayectoria fisica hace que la accion no cambie a primer orden ante pequenas variaciones permitidas.

Esto significa que una trayectoria cercana puede tener una accion mayor, menor o incluso producir una estacionariedad tipo silla. Por eso conviene hablar de accion estacionaria y no de accion minima como regla universal. El alumno debe imaginar una familia de caminos: se calcula la accion para cada uno y el camino fisico aparece donde la primera variacion se anula.

La potencia didactica esta en separar tres objetos. Una trayectoria posible respeta la cinematica y los extremos. Una variacion virtual modifica ligeramente esa trayectoria sin mover los extremos. La trayectoria fisica es la que pasa la prueba variacional. Esta distincion evita pensar que se varia el tiempo final o que se cambia el problema completo.

## 🔵 Nivel formal

La accion lagrangiana se define integrando el lagrangiano entre dos tiempos fijados:

{{f:accion_lagrangiana}}

El principio de Hamilton exige estacionariedad de primer orden:

{{f:condicion_accion_estacionaria}}

Al desarrollar esa condicion para una coordenada generalizada [[qi]] y su velocidad [[qdi]], aparece el residuo local:

{{f:residuo_variacional_euler_lagrange}}

La trayectoria fisica conservativa queda caracterizada por:

{{f:ecuacion_euler_lagrange_desde_accion}}

La lectura formal es importante: [[S]] depende de una funcion completa [[qi]] de [[t1]] a [[t2]]. No se toma una derivada ordinaria respecto de un numero, sino una variacion respecto de una trayectoria. El residuo [[Ri]] aparece porque la estacionariedad debe cumplirse para cualquier variacion admisible independiente.

Si [[Ri]] no se anula, la trayectoria candidata no satisface el principio variacional del modelo conservativo. Si hay fuerzas no potenciales externas, el leaf de ecuaciones de Lagrange permite extender el balance mediante fuerzas generalizadas; aqui se fija el nucleo ideal que explica de donde procede la estructura.

El paso formal tambien aclara por que las condiciones de contorno no son un detalle administrativo. Al integrar por partes, los terminos de borde desaparecen solo si las variaciones se anulan en los extremos. Si el extremo final fuera libre, apareceria una condicion natural adicional y el problema ya no seria el mismo leaf. Esta precision evita convertir el principio en una receta incompleta.

## 🔴 Nivel estructural

Estructuralmente, el principio variacional transforma un problema dinamico en un problema de seleccion dentro de un espacio de trayectorias. La informacion local de fuerzas queda codificada en [[L]], pero el criterio de seleccion es global: integrar, variar y exigir estacionariedad. Esta es la razon por la que el formalismo funciona tan bien con coordenadas generalizadas y ligaduras ideales.

La condicion de extremos fijados es decisiva. Si se permite mover el punto inicial o final sin cambiar el enunciado, se esta resolviendo otro problema. Las variaciones virtuales no son trayectorias reales alternativas producidas por otra fuerza; son cambios matematicos compatibles con las restricciones, usados para detectar si la trayectoria propuesta es estacionaria.

Tambien hay limites de modelo. El principio en esta forma supone un lagrangiano regular, coordenadas suaves y fuerzas relevantes incorporadas en [[L]]. El rozamiento seco, impactos, actuadores discontinuos o ligaduras no ideales pueden exigir terminos adicionales, formulaciones con fuerzas generalizadas o metodos variacionales ampliados.

La estructura resultante permite auditar modelos. Si dos trayectorias candidatas comparten extremos pero una viola una ligadura, no pertenece al conjunto de comparacion. Si una variacion cambia la duracion, introduce otra pregunta fisica. Y si una fuerza externa no conservativa no aparece en [[L]], la condicion conservativa deja de ser cerrada. El principio no sustituye al criterio fisico: lo obliga a declararse.

## Interpretación física profunda

La interpretacion profunda es que las leyes de movimiento pueden leerse como una condicion de coherencia de trayectoria. La naturaleza no prueba caminos de forma consciente; el principio variacional es una forma compacta de expresar una ley diferencial equivalente bajo ciertas hipotesis. Su valor esta en que organiza la dinamica desde una funcion escalar.

Para el profesor, este leaf permite explicar por que la mecanica analitica no es una notacion complicada de Newton. Cambia la pregunta: de "que fuerza actua en cada eje" a "que trayectoria hace estacionaria la accion del modelo". Esa pregunta conecta energia, coordenadas y simetrias en un mismo marco.

## Orden de magnitud

Si [[L]] tiene orden de 10 J y el intervalo entre [[t1]] y [[t2]] es de 2 s, entonces [[S]] tendra orden de 20 J s. La cifra absoluta puede cambiar si se desplaza el cero de energia potencial, pero la estacionariedad ante variaciones admisibles conserva el contenido dinamico relevante.

La magnitud [[deltaS]] debe interpretarse como cambio de primer orden. En una trayectoria fisica ideal, ese termino se anula aunque la accion total no sea cero. Por tanto, el orden de [[S]] no predice directamente la magnitud de [[deltaS]].

## Método de resolución personalizado

Primero se define el sistema, sus coordenadas [[qi]] y el intervalo temporal. Segundo se construye [[L]] con las energias e interacciones compatibles. Tercero se forma [[S]] como integral temporal del lagrangiano. Cuarto se declaran las variaciones admisibles, manteniendo fijos los extremos.

Quinto se impone la condicion de estacionariedad mediante [[deltaS]]. Sexto se obtiene el residuo [[Ri]] y se exige su anulacion para cada coordenada independiente. Septimo se interpreta la ecuacion obtenida y se comprueba que recupera el comportamiento conocido en un caso simple.

## Casos especiales y ejemplo extendido

En una particula libre, todas las trayectorias entre dos puntos no son equivalentes. La trayectoria rectilinea uniforme hace estacionaria la accion porque cualquier curvatura admisible aumenta o cambia el balance cinetico de primer orden. En un oscilador armonico, la trayectoria sinusoidal aparece porque el lagrangiano combina energia cinetica y potencial elastica.

Un caso sutil aparece cuando una trayectoria hace estacionaria la accion sin ser minimo absoluto. Esto no invalida el principio; muestra que el criterio correcto es estacionariedad. En problemas mas avanzados, una misma accion puede tener varios caminos estacionarios, y cada uno debe analizarse con condiciones fisicas y estabilidad.

## Preguntas reales del alumno

Una duda frecuente es por que no se puede variar solo la posicion en un instante. La respuesta es que el principio compara funciones completas que conectan extremos fijados. Cambiar un punto aislado sin ajustar suavemente la trayectoria no es una variacion admisible del problema continuo.

Otra pregunta habitual es si la accion se puede medir directamente. Normalmente no se mide como una magnitud instrumental simple; se calcula desde el modelo. Su valor educativo esta en seleccionar la trayectoria y derivar ecuaciones, no en sustituir a una lectura directa de energia.

## Conexiones transversales y rutas de estudio

Este leaf debe estudiarse despues de energia cinetica y potencial, y antes de ecuaciones de Lagrange. Conecta con coordenadas generalizadas porque la accion se escribe en variables adaptadas al sistema. Conecta con ligaduras porque solo se permiten variaciones compatibles. Conecta con simetrias porque Noether interpreta invariancias de la accion.

Despues de dominarlo, el paso natural es aplicar Euler-Lagrange, estudiar fuerzas generalizadas y pasar al Hamiltoniano mediante transformacion de Legendre. La accion tambien prepara fisica moderna: optica variacional, mecanica cuantica y teorias de campos usan la misma idea estructural.

## Síntesis final

El principio variacional afirma que la trayectoria fisica hace estacionaria la accion frente a variaciones admisibles con extremos fijados. Su objetivo didactico es convertir Euler-Lagrange en una consecuencia comprensible: una condicion local que nace de comparar trayectorias completas.
