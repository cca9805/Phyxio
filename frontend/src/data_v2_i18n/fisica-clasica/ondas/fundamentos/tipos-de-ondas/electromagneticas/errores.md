# Errores frecuentes en Electromagneticas

## Errores conceptuales

El error mas frecuente es imaginar la onda electromagnetica como una cuerda invisible que se dobla en el espacio. La curva del dibujo no es un objeto material, sino una representacion del valor de un campo. Si el alumno piensa que la luz necesita aire del mismo modo que el sonido, confunde una onda de campos con una onda mecanica.

Otro error conceptual es separar [[E0]] y [[B0]] como si fueran dos ondas independientes que casualmente viajan juntas. En una onda plana libre son partes de la misma estructura. Tambien es habitual olvidar la transversalidad y dibujar los campos paralelos a la propagacion. Ese dibujo puede ser visualmente comodo, pero no representa el modelo del leaf.

### Error 1: tratar la onda como una cuerda material

Por que parece correcto: el dibujo habitual usa una curva senoidal parecida a una cuerda, y esa imagen invita a pensar en una deformacion visible.

Por que es incorrecto: la curva representa el valor de un campo, no una trayectoria material. En este leaf oscilan [[E0]] y [[B0]], mientras la propagacion se lee como avance de fase.

Senal de deteccion: el razonamiento menciona soporte, aire o particulas del medio para explicar una onda que se esta modelando en vacio.

Correccion conceptual: sustituir la imagen de objeto ondulante por la de campos transversales acoplados que se reproducen en el espacio.

Mini-ejemplo: si la luz solar llega a la Tierra atravesando casi vacio, no puede depender de una cuerda o de aire comprimido; debe interpretarse como perturbacion electromagnetica.

## Errores de modelo

Un fallo de modelo aparece cuando se usa [[c]] para cualquier situacion sin mirar el medio. En vacio es correcto, pero en vidrio o agua la rapidez de fase cambia. El error inverso tambien ocurre: cambiar [[c]] cuando cambia [[f]] aunque el medio siga siendo vacio. En ese caso se rompe la relacion entre [[lambda]] y [[f]].

Otro fallo consiste en aplicar la relacion entre [[E0]] y [[B0]] cerca de una antena, una carga acelerada o una region con reflexiones fuertes. En zona cercana, los campos pueden no tener la proporcion simple de una onda plana. Antes de calcular hay que comprobar si el enunciado habla de una onda libre, plana y lejos de fuentes.

## Errores matemáticos

El error algebraico tipico es despejar mal la relacion entre [[lambda]], [[f]] y [[c]]. Si se busca [[lambda]], se divide la rapidez entre la frecuencia; si se busca [[f]], se divide la rapidez entre la longitud de onda. Multiplicar cuando habia que dividir cambia la banda espectral por muchos ordenes de magnitud.

Tambien se mezclan unidades. Usar nanometros sin convertir a metros, megahercios sin convertir a hertz o microteslas sin convertir a teslas produce resultados aparentemente numericos pero fisicamente incoherentes. Para acabado de unidades, usa notacion como `[L T⁻¹]`, `[T⁻¹]` o `[M L T⁻³ I⁻¹]`, no analisis dimensional escrito como una ecuacion larga dentro del texto.

## Errores de interpretación

Un resultado correcto puede interpretarse mal. Obtener una [[lambda]] pequena no significa que la onda sea mas rapida; significa que, a la misma rapidez, oscila con mayor [[f]]. Obtener un [[B0]] pequeno no significa que el campo magnetico sea irrelevante; significa que la unidad tesla es grande y que la relacion con [[E0]] incluye [[c]].

Tambien se interpreta [[E0]] como energia total. La amplitud electrica es una escala de campo; para hablar de energia transportada hace falta otro modelo. Si la pregunta pide reconocer la naturaleza electromagnetica, basta con campos transversales acoplados; si pide potencia, el leaf debe conectarse con energia e intensidad.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio, verifica cinco puntos: [[E0]] y [[B0]] son amplitudes no negativas; los campos son transversales; [[lambda]] y [[f]] son positivos; [[c]] queda en el orden de `3 x 10⁸ m/s` si el medio es vacio; y el resultado responde a la pregunta fisica, no solo a una sustitucion. Si alguno falla, vuelve al modelo antes de cambiar numeros.
