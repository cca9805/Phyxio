const e=`# Errores

## Errores conceptuales

### Error 1: usar un modo no entero

**Por que parece correcto:** al despejar una relacion puede aparecer un valor decimal para [[n]], y ese numero parece una solucion algebraica aceptable.

**Por que es incorrecto:** en una cuerda fija por ambos extremos, [[n]] cuenta vientres completos. Un valor intermedio no deja nodos compatibles en los dos extremos y no representa una frecuencia propia estable.

**Senal de deteccion:** el dibujo no cierra con nodo en ambos extremos o el numero de vientres no coincide con el modo anunciado.

**Correccion conceptual:** interpreta el decimal como indicio de que la frecuencia externa no coincide con un modo propio. Busca el entero cercano solo si el problema pregunta por resonancia aproximada.

**Mini-ejemplo:** si el calculo sugiere un modo entre el segundo y el tercero, la cuerda puede vibrar forzada, pero no forma una estacionaria ideal limpia.

Otro error conceptual es pensar que la cuerda estacionaria no contiene propagacion. El patron no avanza, pero se sostiene por superposicion de ondas viajeras opuestas con rapidez [[v]]. Sin esa propagacion, no habria intercambio de energia ni seleccion temporal de [[f_n]].

## Errores de modelo

Un error de modelo frecuente es usar la longitud total de la cuerda, incluyendo tramos fuera de los apoyos, como [[L]]. La longitud que entra en el modelo es el tramo vibrante entre nodos efectivos. En un instrumento, un traste o un puente cambia esa longitud aunque la cuerda material sea la misma.

Tambien es comun ignorar que [[T]] debe ser casi uniforme. Si la amplitud es grande o la cuerda se afloja durante el movimiento, la frecuencia calculada con el modelo ideal deja de ser una buena prediccion. Para cuerdas rigidas o muy gruesas, los modos altos requieren un modelo extendido.

## Errores matemáticos

El fallo matematico mas comun es tratar la dependencia con [[T]] como proporcionalidad directa. La tension aparece dentro de una raiz al calcular [[v]], de modo que duplicar la tension no duplica la rapidez ni la frecuencia. Otro fallo es usar masa total en lugar de [[mu]]. La densidad lineal se obtiene repartiendo masa por longitud, no copiando la masa completa.

Tambien conviene evitar conversiones descuidadas. Una [[mu]] dada en gramos por metro debe expresarse de forma coherente antes de usarla. Si se conserva el numero en gramos como si fueran kilogramos, [[v]] queda demasiado baja y toda la serie de [[f_n]] se desplaza.

## Errores de interpretación

Un resultado numerico de [[f_n]] no basta para entender la cuerda. Hay que leer que variable domina el cambio: [[L]] por geometria, [[T]] por traccion, [[mu]] por inercia o [[n]] por seleccion modal. Sin esta lectura, dos problemas con frecuencias parecidas pueden tener causas fisicas opuestas.

Otro error es identificar [[lambda_n]] con [[L]] siempre. Eso solo ocurre en un modo particular. En el fundamental, la cuerda contiene media longitud de onda modal; en modos superiores contiene varias semilongitudes. El dibujo debe acompanar a la interpretacion.

## Regla de autocontrol rápido

Antes de aceptar el resultado, comprueba cuatro cosas: [[L]] es el tramo vibrante, [[T]] y [[mu]] son positivas y razonables, [[n]] es entero, y el dibujo muestra exactamente los vientres esperados. Si una de esas pruebas falla, [[f_n]] puede estar bien calculada algebraicamente pero mal interpretada fisicamente.
`;export{e as default};
