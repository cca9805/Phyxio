const e=`# Ejemplo tipo examen

## Enunciado

Un suelo granitico tiene velocidad de onda S de 2800 m/s y coeficiente de Poisson de 0.27. Se desea estimar la velocidad de la onda de Rayleigh, la profundidad hasta la que un ensayo sismico de 2 Hz tendra sensibilidad, el cociente adimensional [[eta_R]], y la amplitud [[A_z]] a 500 m de profundidad si la amplitud superficial [[A_0]] es de 0.01 m.

## Datos

- Velocidad de onda S: 2800 m/s
- Coeficiente de Poisson: 0.27
- Frecuencia del ensayo: 2 Hz
- Amplitud superficial: 0.01 m

## Definicion del sistema

Medio semi-infinito, isotropo y homogeneo. La superficie libre es plana y horizontal.

## Modelo fisico

Se aplica el modelo de semiespacio elastico homogeneo con superficie libre plana. La formula de Viktorov permite calcular [[v_R]] a partir de [[v_s]] y [[nu_poisson]]. La profundidad de penetracion se estima como una longitud de onda. El decaimiento de amplitud sigue una exponencial con coeficiente [[alpha_R]]. La ecuacion secular verifica la coherencia del cociente [[eta_R]].

## Justificacion del modelo

El modelo es valido porque el granito a escala sismica (longitudes de onda de centenares de metros) se comporta como un medio homogeneo e isotropo. La frecuencia de 2 Hz produce una longitud de onda mucho mayor que las heterogeneidades minerales (escala centimetrica), validando la hipotesis de continuidad.

## Resolucion simbolica

{{f:velocidad_rayleigh_aproximada}}

{{f:profundidad_penetracion}}

{{f:decaimiento_profundidad}}

{{f:ecuacion_secular_rayleigh}}

La longitud de onda se obtiene como [[lambda_R]] igual a [[v_R]] dividido por la frecuencia. El cociente [[eta_R]] es [[v_R]] entre [[v_s]]. El parametro [[xi_vs_vp]] se obtiene de [[nu_poisson]].

## Sustitucion numerica

Aplicando la formula de Viktorov con [[v_s]] de 2800 m/s y [[nu_poisson]] de 0.27:

Numerador: 0.862 mas 1.14 por 0.27 da 1.1698. Denominador: 1 mas 0.27 da 1.27. Factor: 1.1698 dividido por 1.27 da 0.9211.

[[v_R]] resulta 2800 por 0.9211, es decir 2579 m/s.

Longitud de onda: [[lambda_R]] igual a 2579 dividido por 2, es decir 1290 m.

Profundidad de penetracion: [[d_pen]] es aproximadamente 1290 m (1.29 km).

El cociente [[eta_R]] es 2579 dividido por 2800, es decir 0.921. Este valor esta entre 0.87 y 0.96, confirmando coherencia con la ecuacion secular. El parametro [[xi_vs_vp]] para [[nu_poisson]] de 0.27 vale 0.561.

El coeficiente de decaimiento [[alpha_R]] se estima como 2 pi dividido por [[lambda_R]]: 6.283 dividido por 1290, es decir 0.00487 por metro.

A [[z_prof]] de 500 m: [[A_z]] es [[A_0]] por la exponencial de menos [[alpha_R]] por [[z_prof]], es decir 0.01 por exponencial de menos 2.435, que da 0.01 por 0.0876, resultando [[A_z]] de 0.000876 m.

## Validacion dimensional

La velocidad tiene unidades de m/s (correcto). La longitud de onda tiene unidades de m (correcto). La profundidad tiene unidades de m (correcto). [[eta_R]] y [[xi_vs_vp]] son adimensionales (correcto). [[alpha_R]] tiene unidades de 1/m (correcto). Ademas, [[v_R]] es menor que [[v_s]] (2579 < 2800) y [[A_z]] es menor que [[A_0]] (0.000876 < 0.01), lo cual es fisicamente necesario.

## Interpretacion fisica

La onda de Rayleigh en granito viaja a 2579 m/s, un 92 por ciento de la velocidad S. Esto es coherente con el valor tipico para nu cercano a 0.25. La profundidad de penetracion de 1.29 km indica que un ensayo a 2 Hz sondea la corteza superior, abarcando posibles variaciones litologicas a esa escala. A 500 m de profundidad (un 39 por ciento de [[lambda_R]]), la amplitud se ha reducido al 8.8 por ciento de la superficial, confirmando el fuerte confinamiento de la onda de Rayleigh. Si se necesita mayor resolucion superficial (por ejemplo, los primeros 30 metros para clasificacion geotecnica VS30), habria que usar frecuencias mucho mas altas (del orden de 50-100 Hz).

# Ejemplo de aplicacion real

## Contexto

Un equipo de geotecnia realiza un ensayo MASW (Multichannel Analysis of Surface Waves) en un solar urbano antes de construir un edificio de 10 plantas. Necesitan determinar el perfil de velocidad [[v_s]] en los primeros 30 metros para clasificar el suelo segun Eurocodigo 8. Se colocan 24 geofonos en linea con separacion de 2 m y se genera una fuente impulsiva (martillo de 8 kg). El analisis de dispersion revela que la velocidad de fase de la onda de Rayleigh a 25 Hz es 180 m/s y a 8 Hz es 310 m/s.

## Estimacion fisica

A 25 Hz: [[lambda_R]] es 180 dividido por 25, es decir 7.2 m. Profundidad sondeada ([[d_pen]]): aproximadamente 7 m (capa superficial blanda).

A 8 Hz: [[lambda_R]] es 310 dividido por 8, es decir 38.75 m. Profundidad sondeada ([[d_pen]]): aproximadamente 39 m (incluye capas mas profundas y rigidas).

Usando la aproximacion inversa de Viktorov con [[nu_poisson]] de 0.30, el factor de conversion [[v_R]]/[[v_s]] (es decir [[eta_R]]) vale 0.927. Por tanto:

Capa superficial (hasta 7 m): [[v_s]] es 180 dividido por 0.927, es decir 194 m/s.
Promedio hasta 39 m: [[v_s]] es 310 dividido por 0.927, es decir 334 m/s.

El parametro VS30 (promedio ponderado en los primeros 30 m) estara entre 194 y 334 m/s, probablemente en torno a 280 m/s. Esto clasifica el suelo como tipo C (suelo denso o roca blanda) segun Eurocodigo 8.

## Interpretacion

El resultado es coherente con un perfil tipico urbano: capa superficial de relleno o arcilla blanda (baja [[v_s]]) sobre un sustrato mas rigido (grava densa o roca alterada). La dispersion medida confirma la estratificacion. El valor VS30 estimado de 280 m/s situa el suelo justo en la categoria C, lo que implica un factor de amplificacion sismica moderado. Si el valor hubiera sido inferior a 180 m/s (categoria D), se habrian requerido medidas de cimentacion mas costosas. La tecnica MASW proporciona esta informacion sin necesidad de perforacion, reduciendo costos y tiempos respecto a ensayos invasivos como el cross-hole.
`;export{e as default};
