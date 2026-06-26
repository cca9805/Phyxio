const e=`# Ejemplo tipo examen

## Enunciado

Una barra rigida de masa [[m]] = 1,8 kg tiene momento de inercia respecto a su centro de masas [[I_cm]] = 0,060 kg*m^2. Se cuelga de un pivote situado a [[d]] = 0,22 m del centro de masas. Toma [[g]] = 9,81 m/s^2. Calcula [[I_O]], la longitud equivalente [[leq]], la pulsacion lineal [[omega0]] y el periodo de pequenas oscilaciones [[T0]]. Despues comenta si el resultado seguiria siendo exacto para una amplitud inicial [[theta]] = 0,45 rad.

## Datos

Los datos son [[m]], [[I_cm]], [[d]] y [[g]]. Las incognitas son [[I_O]], [[leq]], [[omega0]] y [[T0]]. La magnitud [[theta]] aparece para decidir si el resultado lineal debe tratarse como aproximacion o como descripcion suficiente. Tambien se deben reconocer [[theta_dot]], [[theta_dd]] y [[E]] como magnitudes del modelo completo, aunque no todas sean necesarias para el calculo numerico principal.

## Definición del sistema

El sistema es un cuerpo rigido con pivote fijo. El centro de masas no coincide con el eje de giro, por lo que el peso genera un torque restaurador. La barra se analiza primero en el regimen de pequenas oscilaciones y despues se revisa la validez frente a una amplitud angular finita.

## Modelo físico

El modelo fisico es el pendulo fisico avanzado y esta anclado a magnitudes nucleares del leaf: [[I_O]], [[I_cm]], [[m]], [[d]], [[g]], [[theta]], [[T0]] y [[omega0]]. Primero se traslada la inercia del centro de masas al pivote real para obtener [[I_O]]. Despues se usa la aproximacion lineal para fijar la escala temporal con [[omega0]] y [[T0]]. Finalmente, la amplitud angular [[theta]] permite decidir si el modelo lineal es suficiente o si la ecuacion no lineal y la energia [[E]] deben entrar en la interpretacion.

## Justificación del modelo

El modelo es valido porque [[m]] es positiva, [[d]] es distinta de cero, [[g]] se toma uniforme y la barra se considera rigida. El pivote se supone fijo, de modo que la inercia relevante es [[I_O]] y no [[I_cm]]. La parte lineal es valida solo si el angulo es pequeno; por eso la amplitud de 0,45 rad se evalua al final como condicion de validez y no se mezcla sin comentario con [[T0]].

## Resolución simbólica

Para llevar la inercia al pivote se usa:

{{f:steiner_pf_av}}

La longitud equivalente se obtiene con:

{{f:longitud_equivalente_pf_av}}

La pulsacion lineal se calcula mediante:

{{f:omega0_pf_av}}

El periodo lineal de pequenas oscilaciones es:

{{f:periodo_lineal_pf_av}}

El modelo completo que justifica la limitacion de amplitud es:

{{f:ecuacion_no_lineal_pf}}

Y la lectura energetica de amplitudes finitas se expresa con:

{{f:energia_pf_av}}

## Sustitución numérica

Primero se calcula [[I_O]] = 0,060 + 1,8*(0,22)^2 = 0,060 + 0,0871 = 0,147 kg*m^2 aproximadamente. La longitud equivalente vale [[leq]] = 0,147/(1,8*0,22) = 0,371 m. Esta longitud no es una distancia dibujada directamente en la barra, sino la longitud del pendulo simple que tendria el mismo periodo lineal.

La pulsacion lineal vale [[omega0]] = sqrt(1,8*9,81*0,22/0,147) = sqrt(26,4) = 5,14 rad/s. El periodo resulta [[T0]] = 2*pi/5,14 = 1,22 s. Equivalentemente, usando directamente la formula de periodo se obtiene el mismo valor dentro del redondeo.

## Validación dimensional

En Steiner, [[m]][[d]]^2 tiene unidades kg*m^2, las mismas que [[I_cm]] e [[I_O]]. En [[leq]], dividir kg*m^2 entre kg*m deja metros. En [[omega0]], el cociente entre torque por radian e inercia produce s^-2, y su raiz produce rad/s. Finalmente, [[T0]] queda en segundos.

## Interpretación física

El periodo de 1,22 s no depende solo de la distancia al centro de masas. Depende de como la masa esta distribuida respecto al pivote. Si se hubiese usado [[I_cm]] en lugar de [[I_O]], se habria subestimado la inercia real y el periodo habria salido demasiado pequeno.

La amplitud [[theta]] = 0,45 rad equivale a unos 26 grados. No es una pequena oscilacion en sentido estricto. Por tanto, [[T0]] es una referencia lineal util, pero el periodo real sera algo mayor y deberia interpretarse con la ecuacion no lineal o con energia si se exige precision experimental. Esta conclusion es parte del resultado, no un detalle final.

# Ejemplo de aplicación real

## Contexto

En un laboratorio se cuelga una pieza mecanica irregular de varios agujeros y se mide el periodo de oscilacion para estimar su momento de inercia. La pieza no puede modelarse como masa puntual, y el centro de masas se ha localizado previamente por equilibrio.

## Estimación física

Para cada agujero se mide [[d]] y el periodo pequeño [[T0]]. Con [[m]] y [[g]] conocidos, se despeja [[I_O]] a partir del periodo. Luego se compara con [[I_cm]] + [[m]][[d]]^2 para comprobar si la pieza se comporta como cuerpo rigido y si el centro de masas esta bien localizado.

La estimacion debe incluir orden de magnitud y escala esperada del periodo. Como referencia, un valor razonable de [[T0]] para esta familia de piezas suele quedar entre 0.8 s y 1.8 s. Si aparece una estimacion fuera de esa escala, primero se revisan unidades, despues posicion del pivote y por ultimo condicion de amplitud. Este criterio evita aceptar resultados numericos que son algebraicamente limpios pero fisicamente inverosimiles.

## Interpretación

La aplicacion real muestra por que el leaf es avanzado. No solo calcula un periodo: permite inferir propiedades rotacionales desde una medida temporal. Si la amplitud es pequeña y la perdida de energia es baja, el metodo es potente. Si la amplitud es grande, [[E]] y el modelo no lineal indican que el periodo observado ya no representa directamente [[T0]]. La decision experimental consiste en controlar amplitud, eje, unidades y rigidez del cuerpo antes de confiar en la inercia calculada.
`;export{e as default};
