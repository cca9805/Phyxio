# Ejemplo tipo examen

## Enunciado

Un rayo cae a 2.5 km de un observador. La temperatura del aire es de 15 C. Se pide calcular la velocidad del sonido del trueno en ese aire, estimar el tiempo que tarda el trueno en llegar al observador y comprobar si la aproximacion lineal de temperatura da una lectura coherente. Usa los datos termodinamicos indicados en la seccion de datos.

## Datos

- Temperatura ambiente: 15 C, equivalente a una [[T_abs]] de 288.15 K.
- Distancia entre el rayo y el observador: 2500 m.
- Indice adiabatico del aire [[gamma_gas]]: 1.4.
- Masa molar del aire seco [[M_mol]]: 0.029 kg/mol.
- Constante universal de los gases usada en la formula: 8.314 J por mol y kelvin.
- La densidad efectiva [[rho_med]] no se mide por separado porque queda incorporada en la forma de gas ideal de Newton-Laplace.

## Definicion del sistema

El sistema es la propagacion del pulso acustico del trueno en aire aproximadamente homogeneo. Las magnitudes de interes son [[v_son]] a la temperatura indicada, [[T_abs]] como variable termodinamica, [[gamma_gas]] como correccion adiabática del gas, [[M_mol]] como informacion molecular del medio y el tiempo de llegada del frente de onda al observador.

## Modelo fisico

Se aplica el modelo de **gas ideal con proceso adiabatico**. Las hipotesis son: aire a temperatura uniforme, perturbacion suficientemente pequena para que la propagacion sea lineal, y ausencia de dispersion relevante para el tiempo de llegada. La relacion nuclear del leaf es que la rigidez acustica efectiva aumenta con la temperatura absoluta y con [[gamma_gas]], mientras que la inercia molecular entra a traves de [[M_mol]] y de la [[rho_med]] equivalente.

## Justificacion del modelo

El trueno es un sonido cuasi-impulsivo de duracion breve y amplio espectro de frecuencias. Para estimar la velocidad de propagacion y el tiempo de llegada, el modelo de gas ideal a temperatura uniforme es adecuado. Si se quisiera analizar la forma del pulso con detalle, habria que considerar absorcion diferencial con la frecuencia, turbulencia y gradientes verticales de temperatura; para el calculo de primer orden del tiempo de llegada, esos efectos son secundarios.

## Resolucion simbolica

Velocidad del sonido en gas ideal:

{{f:v_gas_ideal}}

El tiempo de llegada del frente de onda se obtiene dividiendo la distancia recorrida por [[v_son]]. Esta lectura conserva la idea fisica: el rayo fija la distancia y el medio fija la rapidez de propagacion.

## Sustitucion numerica

**Apartado (a): velocidad del sonido**

La temperatura absoluta se obtiene sumando 273.15 al valor Celsius; para 15 C resulta una [[T_abs]] de 288.15 K.

Al sustituir [[gamma_gas]], la constante de gases, [[T_abs]] y [[M_mol]] en la formula del gas ideal, el argumento de la raiz queda cerca de 115645 en unidades de velocidad al cuadrado. La raiz de ese valor da una [[v_son]] de 340.1 m/s.

**Apartado (b): tiempo de llegada**

Dividir 2500 m entre 340.1 m/s da un tiempo de llegada de 7.35 s. Por tanto, el trueno se oiria algo mas de siete segundos despues del relampago.

**Apartado (c): verificacion con aproximacion lineal**

{{f:v_son_temperatura_aire}}

La aproximacion lineal suma 9.09 m/s al valor de referencia de 331.3 m/s y da 340.4 m/s. La diferencia respecto al calculo de gas ideal es de unas tres decimas de metro por segundo, menor que una decima porcentual. La concordancia confirma que la aproximacion lineal funciona muy bien para aire ordinario entre temperaturas invernales y veraniegas moderadas.

## Validacion dimensional

Para [[v_son]], el cociente energetico por masa tiene dimension `[L² T⁻²]`; al tomar la raiz queda una velocidad con dimension `[L T⁻¹]`.

Para el tiempo de llegada, dividir una distancia por una velocidad deja dimension `[T]`. Esta comprobacion tambien ayuda a detectar el error tipico de usar grados Celsius como si fueran temperatura absoluta.

## Interpretacion fisica

Una [[v_son]] de 340 m/s a 15 C es un valor completamente razonable para aire en condiciones atmosfericas ordinarias. El tiempo de llegada de 7.35 s para una distancia de 2.5 km coincide con la regla practica de "3 segundos por kilometro", que daria 7.5 s y por tanto solo introduce un error pequeno.

El resultado tambien muestra por que [[v_son]] no pertenece al rayo ni al trueno como fuente. Un trueno mas intenso tendria mayor amplitud acustica, pero no viajaria mas rapido si el medio, la temperatura y la composicion del aire fueran los mismos. La causa de la variacion esta en el medio: al aumentar [[T_abs]], las moleculas tienen una respuesta elastica mas rapida y la perturbacion de presion se transmite con mayor [[v_son]].

---

# Ejemplo de aplicacion real

## Contexto

Un tecnico de mantenimiento industrial quiere medir el grosor de una plancha de acero usando ultrasonidos de forma no destructiva. Coloca un transductor en una cara de la plancha, emite un pulso ultrasonico y mide el tiempo que tarda el eco en volver desde la cara opuesta. El tiempo medido es de 1.96 microsegundos. La [[v_son]] longitudinal calibrada para ese acero es 5100 m/s.

## Estimacion fisica

El pulso ultrasonico recorre el espesor de la plancha dos veces: primero avanza hasta la cara opuesta y despues regresa al transductor. Por eso, el tiempo de ida corresponde a la mitad del tiempo medido. La mitad de 1.96 microsegundos es 0.98 microsegundos; durante ese intervalo, una onda que se propaga a 5100 m/s recorre aproximadamente 0.004998 m, es decir, 5.0 mm.

Esta estimacion cuantitativa es una lectura directa de [[v_son]]: si la velocidad calibrada fuera un 1 % mayor, el espesor inferido tambien seria un 1 % mayor. La [[rho_med]] y la rigidez elastica del acero no aparecen como datos separados en esta aplicacion porque ya estan condensadas en la [[v_son]] medida para la pieza y el modo longitudinal usado por el transductor.

## Interpretacion

El grosor de la plancha es aproximadamente 5.0 mm. La tecnica de medicion por tiempo de vuelo ultrasonico depende directamente de conocer [[v_son]] en el material con precision. Si [[v_son]] en el acero varia con la temperatura, la composicion del acero o la presencia de esfuerzos mecanicos internos, hay que calibrarla con muestras patron de espesor conocido antes de medir piezas desconocidas.

Esta aplicacion ilustra que [[v_son]] no es solo un dato de referencia sino el parametro central de medicion de distancias y espesores en acustica industrial. La precision del resultado es suficiente para control de calidad en fabricacion de componentes metalicos, pero solo si el modelo fisico escogido corresponde al modo de onda real, al material real y a la temperatura real de ensayo.
