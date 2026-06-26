const a=`# Ejemplo tipo examen

## Enunciado

Un tramo recto de conductor se coloca dentro de un campo magnetico uniforme. La corriente circula perpendicular al campo. Se pide calcular la fuerza magnetica total sobre el tramo, la fuerza por unidad de longitud y explicar hacia donde actuaria la fuerza.

## Datos

- Corriente: 4.0 A.
- Longitud efectiva dentro del campo: 0.30 m.
- Campo magnetico uniforme: 0.50 T.
- Orientacion: conductor perpendicular al campo, con factor angular maximo.

## Definición del sistema

El sistema es el tramo de conductor dentro de la region magnetica. La corriente [[I]] atraviesa la longitud efectiva [[L]], mientras el campo [[B]] actua sobre las cargas moviles del metal. Las magnitudes buscadas son [[F_B]] y [[f_L]].

## Modelo físico

Se usa el modelo de conductor recto con corriente estacionaria en campo uniforme. La orientacion perpendicular permite tomar [[s_theta]] en su valor maximo. La fuerza se interpreta como accion mecanica colectiva sobre el tramo, no como fuerza sobre un solo electron aislado.

## Justificación del modelo

El enunciado fija un campo uniforme y una longitud efectiva definida, por lo que la fuerza puede tratarse como distribuida de forma regular. El modelo dejaria de valer si el campo cambiara sobre el tramo, si el conductor se doblara o si el calentamiento alterara la corriente.

## Resolución simbólica

Para la fuerza total sobre el conductor:

{{f:fuerza_conductor_recto}}

Para la fuerza por unidad de longitud:

{{f:fuerza_por_unidad_longitud}}

La resolucion usa [[F_B]], [[I]], [[L]], [[B]], [[s_theta]] y [[f_L]]. El sentido de la fuerza no se obtiene del signo numerico, sino de la regla de la mano derecha aplicada a la corriente convencional y al campo.

## Sustitución numérica

Para [[F_B]], multiplicar 4.0 A por 0.30 m, por 0.50 T y por el factor angular maximo da aproximadamente 0.60 N. Por tanto, el tramo recibe una fuerza lateral de escala claramente medible en laboratorio.

Para [[f_L]], multiplicar 4.0 A por 0.50 T y por el factor angular maximo da aproximadamente 2.0 N*m^-1. Esa lectura significa que cada metro efectivo de conductor soportaria dos newtons de fuerza magnetica en las mismas condiciones.

## Validación dimensional

- Fuerza total: amperio por metro por tesla produce newton, dimension \`[M L T⁻²]\`.
- Fuerza por longitud: amperio por tesla produce newton por metro, dimension \`[M T⁻²]\`.

La diferencia dimensional confirma que [[F_B]] y [[f_L]] no son la misma magnitud. Una tiene unidad de fuerza total y la otra describe distribucion lineal.

## Interpretación física

El resultado indica que una corriente moderada en un campo de medio tesla puede producir una fuerza mecanica apreciable. No es necesario que cada carga individual salga del conductor: las cargas transfieren impulso al material y el tramo completo experimenta empuje lateral.

Si se duplicara [[I]], tanto [[F_B]] como [[f_L]] aumentarian en la misma proporcion. Si se duplicara [[L]], solo aumentaria [[F_B]], porque [[f_L]] ya esta normalizada por longitud. Esta distincion permite separar intensidad magnetica local y tamano del tramo activo.

El sentido de la fuerza cambiaria si se invierte la corriente o si se invierte el campo. Esta es la idea que permite construir actuadores: controlar corrientes y campos para producir fuerzas mecanicas con sentido predecible.

Tambien se observa que la longitud efectiva no es un detalle administrativo. Si el mismo cable tuviera solo 0.10 m dentro del campo, la fuerza total seria tres veces menor, mientras [[f_L]] permaneceria igual. Esa comparacion separa con claridad lo que pertenece al entorno magnetico y lo que pertenece a la geometria del montaje.

Si el conductor estuviera inclinado, la fuerza no podria estimarse copiando el caso perpendicular. El factor [[s_theta]] reduciria el empuje porque solo la parte perpendicular del tramo respecto a [[B]] contribuye de forma eficaz. Por eso, antes de sustituir datos, conviene dibujar el conductor y el campo: el calculo numerico depende de esa lectura geometrica.

La diferencia entre [[F_B]] y [[f_L]] tambien ayuda a revisar el resultado experimental. Si una balanza mide una fuerza total, debe compararse con [[F_B]]. Si el informe busca una carga mecanica distribuida para diseñar soportes, la lectura relevante es [[f_L]]. Mezclar ambas magnitudes puede llevar a sobredimensionar o infradimensionar el montaje.

# Ejemplo de aplicación real

## Contexto

En un altavoz dinamico, una bobina con corriente se encuentra dentro del campo magnetico de un iman. La fuerza sobre los tramos conductores de la bobina empuja el diafragma y convierte una senal electrica en sonido.

## Estimación física

Si la corriente instantanea aumenta, [[F_B]] aumenta y el diafragma recibe mayor empuje. Si se aumenta la longitud efectiva de hilo dentro del entrehierro, tambien crece la fuerza total. La magnitud [[f_L]] permite comparar disenos sin depender todavia de cuantas vueltas tiene la bobina.

## Interpretación

La aplicacion real muestra que la fuerza sobre conductores no es un detalle de laboratorio. Es el mecanismo que convierte informacion electrica variable en movimiento mecanico. El campo del iman proporciona la referencia, la corriente aporta el control temporal y la longitud efectiva de la bobina determina cuanto empuje se obtiene.

Si el altavoz calienta demasiado, la resistencia de la bobina cambia y la corriente real deja de coincidir con la esperada. Si la bobina sale parcialmente del campo uniforme, [[L]] efectiva cambia durante el movimiento. Por eso un buen diseño no solo busca un campo grande, sino mantener constante la region activa donde se produce [[F_B]].

El ejemplo tambien explica por que una bobina tiene muchas vueltas. Cada vuelta añade longitud activa dentro del campo, de modo que la fuerza total puede crecer aunque la fuerza por metro sea la misma. El limite practico aparece cuando aumentar hilo incrementa masa, resistencia y calentamiento.
`;export{a as default};
