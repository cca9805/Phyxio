## Errores conceptuales


### Error 1: Confundir velocidad de propagacion con velocidad transversal

**Por que parece correcto**

En una simulacion o en una cuerda real, se ve un punto subir y bajar mientras el pulso avanza. Es natural llamar "velocidad de la cuerda" al movimiento visible del punto.

**Por que es incorrecto**

[[velocidad_de_propagacion]] mide la rapidez con que la forma de la perturbacion avanza a lo largo de la cuerda. La velocidad transversal de un punto describe otro movimiento: cuanto rapido sube o baja ese punto. Son lecturas distintas y pueden cambiar de forma independiente.

**Senal de deteccion**

El alumno dice que una amplitud mayor implica automaticamente mayor [[velocidad_de_propagacion]], porque ve puntos moverse mas rapido.

**Correccion conceptual**

La rapidez de propagacion pertenece al medio y se controla por [[tension_de_la_cuerda]] y [[mu]]. La amplitud afecta al movimiento local y puede romper el modelo si es grande, pero no es la causa primaria de [[velocidad_de_propagacion]] en el regimen lineal.

**Mini-ejemplo**

Dos pulsos pequenos y grandes en la misma cuerda tensa pueden recorrer una mesa en tiempos parecidos si la amplitud sigue siendo pequena. Lo que cambia visiblemente es la altura del pulso, no la rapidez ideal de propagacion.

## Errores de modelo

**Mini-ejemplo de contraste**

Control 1: En Velocidad de propagacion, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.


### Error 2: Pensar que la [[frecuencia]] de la fuente decide la rapidez

**Por que parece correcto**

En muchas formulas de ondas aparecen juntas [[velocidad_de_propagacion]], [[frecuencia]] y [[lambda]]. Si se aumenta [[frecuencia]], parece razonable esperar que la onda "vaya mas rapido".

**Por que es incorrecto**

En una cuerda ideal uniforme, la rapidez la decide el medio. Si [[tension_de_la_cuerda]] y [[mu]] no cambian, variar [[frecuencia]] modifica la longitud de onda asociada. La fuente decide el ritmo; la cuerda decide la rapidez.

**Senal de deteccion**

El alumno afirma que agitar la cuerda al doble de [[frecuencia]] duplica [[velocidad_de_propagacion]] aunque no cambie la tension ni la cuerda.

**Correccion conceptual**

Primero se calcula o se mide [[velocidad_de_propagacion]] desde el medio. Despues se relacionan [[frecuencia]] y [[lambda]] con esa rapidez.

**Mini-ejemplo**

Una cuerda mantenida con la misma tension se excita a 10 Hz y luego a 20 Hz. La rapidez ideal se conserva; la separacion espacial entre crestas se reduce en la segunda excitacion.

## Errores matemáticos

**Mini-ejemplo de contraste**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.


### Error 3: Usar gramos por metro como si fueran kilogramos por metro

**Por que parece correcto**

Los fabricantes y los laboratorios a menudo dan la masa lineal en g/m. El numero parece pequeno y se introduce directamente en la calculadora.

**Por que es incorrecto**

La formula mecanica usa unidades SI. [[mu]] debe expresarse en kg/m para que [[tension_de_la_cuerda]] en newtons produzca [[velocidad_de_propagacion]] en m/s. No convertir cambia el resultado por un factor grande.

**Senal de deteccion**

El resultado de [[velocidad_de_propagacion]] queda demasiado pequeno para una cuerda tensa, o no coincide con tiempos de recorrido observables.

**Correccion conceptual**

Antes de calcular, convertir gramos por metro a kilogramos por metro. La comprobacion dimensional debe terminar en `[L T⁻¹]`.

**Mini-ejemplo**

Una cuerda con masa lineal de 2 g/m debe introducirse como 0.002 kg/m. Usar 2 kg/m describe una cuerda miles de veces mas inerte.

## Errores de interpretación

**Mini-ejemplo de contraste**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.


### Error 4: Creer que la longitud de la cuerda fija la rapidez local

**Por que parece correcto**

En ondas estacionarias, la longitud [[longitud_efectiva]] aparece en las frecuencias permitidas. Por eso se suele pensar que [[longitud_efectiva]] tambien causa directamente la rapidez de propagacion.

**Por que es incorrecto**

En una cuerda uniforme ideal, [[longitud_efectiva]] no decide la rapidez local. La longitud decide que patrones caben entre extremos; [[tension_de_la_cuerda]] y [[mu]] deciden como de rapido viaja la perturbacion.

**Senal de deteccion**

El alumno cambia [[longitud_efectiva]] en un problema de pulso viajero y espera que [[velocidad_de_propagacion]] cambie aunque tension y densidad lineal permanezcan iguales.

**Correccion conceptual**

Separar propagacion local y condicion de contorno. Primero se interpreta [[velocidad_de_propagacion]] como propiedad mecanica; despues se usa [[longitud_efectiva]] si el problema pide resonancia o modos.

**Mini-ejemplo**

Dos tramos de la misma cuerda, con la misma tension y densidad lineal, transmiten un pulso con la misma rapidez ideal aunque uno sea mas largo. Lo que cambia es el tiempo total de recorrido.

## Regla de autocontrol rápido

Antes de aceptar un resultado, comprueba tres cosas: [[tension_de_la_cuerda]] en newtons, [[mu]] en kg/m y lectura positiva de [[velocidad_de_propagacion]]. Si el problema menciona [[frecuencia]], preguntate si se esta usando para hallar [[lambda]] o si se ha confundido con la causa mecanica de la rapidez.

**Mini-ejemplo de contraste**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.