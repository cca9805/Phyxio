# Principio de D'Alembert y trabajo virtual

## Contexto conceptual

El principio de D'Alembert es el puente entre la dinamica newtoniana y la mecanica analitica con ligaduras. Parte de la idea de que una ecuacion dinamica puede escribirse como un equilibrio si se resta el termino inercial. Ese equilibrio no se prueba con cualquier desplazamiento, sino con desplazamientos virtuales compatibles con las ligaduras del sistema.

Este leaf explica por que muchas fuerzas de ligadura no aparecen en las ecuaciones finales. Si una reaccion ideal no realiza trabajo virtual sobre desplazamientos admisibles, no aporta al balance que determina el movimiento. Asi se entiende el paso desde fuerzas cartesianas a coordenadas generalizadas.

## 🟢 Nivel esencial

La idea esencial es que no todas las fuerzas que existen son utiles para describir la evolucion. En una particula sobre una guia ideal, la normal existe, pero el desplazamiento permitido es tangente a la guia. Como la normal es perpendicular a ese desplazamiento virtual, su trabajo virtual no entra en la ecuacion efectiva.

D'Alembert reorganiza Newton restando la inercia a las fuerzas aplicadas. El sistema queda como si estuviera en equilibrio dinamico frente a cualquier desplazamiento virtual permitido. La palabra virtual es crucial: no describe un movimiento real durante un tiempo, sino una prueba instantanea de compatibilidad.

El alumno debe aprender a preguntar que desplazamientos son admisibles antes de calcular. Si el desplazamiento virtual viola una ligadura, el trabajo obtenido no tiene significado fisico para el sistema real. Si respeta la ligadura, permite eliminar reacciones ideales y conservar solo el contenido dinamico que importa.

## 🔵 Nivel formal

La fuerza efectiva de D'Alembert se define como fuerza aplicada menos termino inercial:

{{f:fuerza_efectiva_dalembert}}

El principio se expresa imponiendo que el trabajo virtual dinamico total se anule:

{{f:trabajo_virtual_dinamico}}

Al parametrizar desplazamientos compatibles mediante una coordenada generalizada [[qi]], aparece la fuerza generalizada:

{{f:fuerza_generalizada_desde_trabajo_virtual}}

La forma de Lagrange-D'Alembert conecta esa fuerza generalizada con el residuo lagrangiano:

{{f:lagrange_dalembert}}

El contenido formal es que [[dr]] no es arbitrario en el espacio completo, sino en el subespacio permitido por las ligaduras. El valor [[Wv]] resume la prueba de equilibrio dinamico virtual. Si las reacciones ideales no hacen trabajo virtual, desaparecen del balance aunque sigan existiendo fisicamente.

La magnitud [[Qj]] no es necesariamente una fuerza en newtons. Si [[qi]] es un angulo, [[Qj]] tiene dimension de torque. Si [[qi]] es una longitud, puede tener dimension de fuerza. Esta dependencia es una razon para no copiar componentes cartesianas sin revisar la coordenada.

La lectura dimensional debe hacerse en este nivel formal, antes de interpretar el resultado. Una misma fuerza aplicada puede producir distintos aportes generalizados segun la geometria que relaciona [[dr]] con [[qi]]. Por eso el calculo de [[Qj]] no es un tramite: es la traduccion fisica entre fuerza real y coordenada efectiva.

## 🔴 Nivel estructural

Estructuralmente, D'Alembert muestra que la mecanica analitica no ignora las fuerzas de ligadura: las clasifica. Las reacciones ideales quedan ortogonales a las variaciones admisibles y por eso no aparecen en el trabajo virtual. Las fuerzas activas si se proyectan sobre las coordenadas y producen fuerzas generalizadas.

El principio tambien separa dinamica y geometria. La geometria decide que desplazamientos virtuales son posibles. La dinamica decide que fuerzas efectivas equilibran esos desplazamientos. Cuando ambas partes se combinan, se obtiene una ecuacion en coordenadas adaptadas al sistema.

Hay limites claros. Si la ligadura tiene rozamiento, si la reaccion realiza trabajo virtual, si la restriccion depende de velocidades de forma no holonoma o si hay impactos, la eliminacion simple de reacciones puede fallar. En esos casos no basta con declarar la ligadura; hay que modelar su intercambio energetico o impulsivo.

Esta capa estructural es la que evita usar D'Alembert como truco algebraico. Primero se identifica el espacio de variaciones compatibles; despues se pregunta que fuerzas tienen proyeccion sobre ese espacio. Si se invierte el orden, se corre el riesgo de cancelar fuerzas que si hacen trabajo virtual o de conservar reacciones que ya estaban absorbidas por la coordenada.

## Interpretación física profunda

La interpretacion profunda es que una fuerza puede ser real y, aun asi, no ser necesaria para escribir la ecuacion de movimiento en las coordenadas correctas. La normal de una guia ideal, la tension de una cuerda inextensible ideal o ciertas reacciones internas pueden desaparecer del balance virtual porque no hacen trabajo sobre los desplazamientos permitidos.

Para el profesor, este leaf permite corregir una intuicion muy comun: eliminar una fuerza de la ecuacion no significa negar su existencia. Significa que su efecto esta incorporado en la geometria de la ligadura y no aporta potencia virtual en las direcciones que el sistema puede explorar.

## Orden de magnitud

Si una fuerza aplicada [[F]] es de 10 N y el desplazamiento virtual [[dr]] tiene escala de 1 mm, el trabajo virtual asociado tiene orden de 0.01 J. Si el termino inercial [[m]][[a]] tiene magnitud comparable, la diferencia efectiva [[Feff]] puede reducir mucho ese aporte.

La escala de [[Qj]] depende de la coordenada. Para una coordenada angular, una fuerza de 10 N aplicada con brazo de 0.2 m produce un aporte generalizado de orden 2 N m. Llamarlo simplemente fuerza seria perder informacion dimensional.

## Método de resolución personalizado

Primero se identifican las ligaduras y los desplazamientos virtuales compatibles. Segundo se separan fuerzas activas y reacciones ideales. Tercero se forma la fuerza efectiva [[Feff]] restando el termino inercial. Cuarto se calcula el trabajo virtual [[Wv]] solo con desplazamientos admisibles.

Quinto se extraen las fuerzas generalizadas [[Qj]] como coeficientes del trabajo virtual. Sexto se conectan con el residuo lagrangiano [[Ri]]. Septimo se revisa si las reacciones eliminadas eran realmente ideales; si no lo eran, el modelo debe ampliarse.

## Casos especiales y ejemplo extendido

En una cuenta deslizandose por un aro sin rozamiento, la normal mantiene la cuenta sobre la guia, pero no aporta trabajo virtual tangencial. La coordenada angular absorbe la ligadura y la ecuacion se escribe sin resolver primero la normal. La fuerza activa, como el peso, si se proyecta sobre el desplazamiento angular.

En una maquina de Atwood ideal, la tension interna puede desaparecer al elegir una coordenada compatible con la cuerda inextensible. Si la cuerda tiene masa, elasticidad o rozamiento en la polea, esa desaparicion deja de ser automatica. El principio obliga a mirar la idealidad de la ligadura.

## Preguntas reales del alumno

Una pregunta habitual es si la fuerza de ligadura no existe cuando no aparece en la ecuacion. Si existe, pero el metodo no necesita calcularla para obtener la evolucion en coordenadas compatibles. Puede calcularse despues si se quiere estudiar contacto, tension maxima o ruptura.

Otra duda es si un desplazamiento virtual es un desplazamiento muy pequeno real. No exactamente. Es una variacion instantanea compatible usada para probar trabajo; no implica que el sistema recorra realmente ese camino durante un intervalo temporal.

## Conexiones transversales y rutas de estudio

Este leaf debe estudiarse despues de ligaduras y grados de libertad, y antes de ecuaciones de Lagrange con fuerzas generalizadas. Conecta con coordenadas generalizadas porque [[qi]] parametriza desplazamientos admisibles. Conecta con principio variacional porque ambos usan variaciones compatibles, aunque aqui el foco es el trabajo virtual dinamico.

Despues, el alumno puede estudiar problemas con ligaduras, sistemas forzados y formulaciones hamiltonianas. La idea central seguira siendo la misma: elegir las variables que respetan la geometria antes de escribir ecuaciones.

## Síntesis final

El principio de D'Alembert afirma que el trabajo virtual de las fuerzas efectivas se anula para desplazamientos compatibles con ligaduras ideales. Su objetivo didactico es explicar por que las reacciones ideales pueden desaparecer de las ecuaciones sin dejar de existir fisicamente.
