const e=`# Ejemplo tipo examen

## Enunciado
Un conductor recto transporta una carga neta conocida en una ventana temporal controlada. El problema pide estimar la intensidad media [[I]], evaluar la densidad de corriente [[J]] en la seccion de paso y discutir si el resultado es fisicamente coherente con un escenario de laboratorio didactico.

## Datos
Se dispone de los siguientes datos experimentales: carga transportada [[q]] en un intervalo de [[t]], y seccion efectiva [[A]] del conductor medida con incertidumbre moderada. Tambien se cuenta con una estimacion razonable de [[n]] para el material y de [[v]] de deriva esperable en el rango de operacion.

## Definición del sistema
El sistema se modela como un tramo conductor uniforme durante la ventana analizada. Se adopta una convencion de signo fija para el sentido de corriente y se supone que la seccion efectiva de conduccion coincide de forma aproximada con la seccion medida. El objetivo principal es conectar lectura macroscópica de [[I]] con criterio local de esfuerzo mediante [[J]].

## Modelo físico
Se aplica un modelo de tasa media para corriente en la ventana temporal dada, junto con normalizacion espacial por area y verificacion micro macro con portadores. En este modelo, [[I]] representa flujo neto de [[q]] por unidad de [[t]], [[J]] representa intensidad por unidad de [[A]], y la relacion de portadores sirve para comprobar plausibilidad de parametros de material.

## Justificación del modelo
El enunciado provee una ventana temporal clara y un conductor sin evidencia de transicion abrupta de regimen en el intervalo considerado. Esto habilita usar una tasa media como primera aproximacion robusta. Ademas, como la pregunta incluye posible sobrecarga local, es obligatorio calcular [[J]] y no quedarse solo con [[I]].

La inclusion de [[n]] y [[v]] no busca refinamiento excesivo, sino chequeo de coherencia fisica. Si una estimacion de [[v]] resultara desproporcionada para el material, eso indicaria que la hipotesis sobre [[A]] efectiva o sobre la calidad de los datos debe revisarse.

## Resolución simbólica
Para obtener intensidad media del intervalo:

{{f:definicion_corriente}}

Para evaluar exigencia local de conduccion:

{{f:densidad_corriente}}

Para verificar consistencia micro macro del resultado:

{{f:corriente_portadores}}

## Sustitución numérica
Al sustituir los valores experimentales en la primera relacion, se obtiene una [[I]] media en rango de miliamperios, compatible con una practica de laboratorio de baja potencia. Al normalizar por [[A]], la [[J]] resultante queda en un orden de magnitud moderado para cobre en regimen continuo de corta duracion.

La ecuacion de portadores permite inferir una [[v]] de deriva pequena respecto a velocidades termicas tipicas, lo cual es coherente con el hecho de que corrientes macroscopicas no requieren deriva individual alta cuando [[n]] es grande. Esta coherencia cierra el circuito de validacion del ejemplo.

## Validación dimensional
La dimension de intensidad coincide con carga sobre tiempo, por lo que el resultado de [[I]] se expresa en amperios. La dimension de [[J]] corresponde a intensidad por area, por lo que se expresa en amperios por metro cuadrado. El chequeo de portadores conserva dimension de corriente al combinar densidad volumetrica, carga elemental efectiva, velocidad de deriva y area.

No se detectan inconsistencias de unidades tras convertir todas las magnitudes al sistema SI antes de operar. Esta etapa es clave porque errores de prefijo temporal o de conversion de area desplazan la respuesta varios ordenes de magnitud.

## Interpretación física
El resultado no se interpreta como numero aislado. La [[I]] media obtenida describe transporte neto en una ventana concreta, mientras la [[J]] aclara si ese transporte impone carga local relevante para el material. En este caso, la lectura conjunta sugiere operacion segura dentro del contexto didactico propuesto.

Ademas, la consistencia con el modelo de portadores evita una conclusion superficial. El ejemplo muestra que una corriente macroscópica apreciable puede coexistir con velocidad de deriva moderada, siempre que la densidad de portadores sea suficiente. Esta lectura causal fortalece la comprension del fenomeno y evita confundir rapidez de transporte neto con velocidad individual de particulas.

Esto implica que la pregunta fisica correcta no es solo cuanto vale la corriente, sino por que toma ese valor y bajo que supuestos permanece valida su lectura. Por tanto, un mismo numero puede cambiar de significado si se modifica la escala temporal o la seccion efectiva. En consecuencia, interpretar bien exige conectar resultado, mecanismo y dominio de validez en una sola narrativa.

# Ejemplo de aplicación real

## Contexto
En una linea de sensado industrial, una etapa de adquisicion reporta fallos intermitentes por calentamiento en una pista de conexion. El sistema global no muestra corriente total extrema, pero el comportamiento termico local sugiere que la densidad de corriente podria ser excesiva en un tramo reducido por restricciones de montaje.

El equipo de mantenimiento necesita decidir si basta con limitar [[I]] de forma global o si debe redisenar la seccion de paso. Para ello se analiza el problema con las tres relaciones del leaf y se interpreta el resultado en clave operativa.

## Estimación física
Primero se estima [[I]] media en el regimen de operacion nominal usando la relacion temporal entre [[q]] y [[t]]. Luego se calcula [[J]] con el area efectiva real del cuello de pista, no con el area nominal del tramo amplio. Esta decision cambia de forma sustancial la lectura de riesgo.

La estimacion muestra que, aunque [[I]] total esta en rango habitual para la arquitectura del equipo, la [[J]] local sube hasta una zona donde el margen termico se vuelve estrecho. El calculo micro macro confirma que el problema no exige inventar un fenomeno nuevo: la combinacion de [[A]] reducida con la misma corriente global explica la sobrecarga local observada.

Al explorar alternativa de diseno, se comparan dos acciones: reducir [[I]] maxima permitida o aumentar [[A]] efectiva del tramo critico. La segunda opcion mejora robustez sin penalizar tanto desempeno funcional, porque ataca directamente la variable local que origina el calentamiento.

## Interpretación
La aplicacion real enseña una regla general: decisiones basadas solo en corriente total pueden ser engañosas cuando hay no uniformidad espacial. El criterio local de [[J]] es el que conecta mejor con riesgo termico y confiabilidad.

Tambien evidencia la importancia de declarar dominio de validez. En este caso, el modelo medio y la normalizacion por area son suficientes para explicar el fallo y orientar el rediseño. Si aparecieran transitorios muy rapidos o variacion material fuerte por temperatura, el analisis deberia ampliarse con modelo por tramos o parametros dependientes de estado.

Como cierre, el ejemplo integra teoria y practica: la ecuacion de tasa organiza balance temporal, la normalizacion espacial detecta sobrecarga oculta y el puente de portadores aporta plausibilidad fisica. Esa integracion es precisamente el objetivo didactico del leaf.

En terminos causales, el calentamiento observado no surge por una anomalia misteriosa, sino por concentracion de flujo en una region de area reducida. Esta explicacion causal permite intervenir con criterio: redisenar geometria cuando domina el efecto espacial, o ajustar regimen temporal cuando domina el efecto de ventana de operacion. La lectura deja de ser numerica y se vuelve predictiva.
`;export{e as default};
