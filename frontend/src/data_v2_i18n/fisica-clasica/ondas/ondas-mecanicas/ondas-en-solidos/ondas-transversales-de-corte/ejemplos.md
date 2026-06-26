# Ejemplo tipo examen


## Enunciado

Un bloque de acero tiene modulo de cizalla de 80 GPa y densidad de 7850 kg/m3. Un transductor genera ondas transversales a 5 MHz. Determinar la velocidad de la onda S, la longitud de onda transversal, la impedancia acustica transversal y el coeficiente de Poisson sabiendo que la velocidad P medida es 5900 m/s.

## Datos

- Modulo de cizalla: 80 GPa, equivalente a 80 por 10 elevado a 9 Pa
- Densidad: 7850 kg/m3
- Frecuencia: 5 MHz, equivalente a 5 por 10 elevado a 6 Hz
- Velocidad P medida: 5900 m/s

## Definición del sistema

Bloque de acero homogeneo e isotropo, con un transductor ultrasónico acoplado a una cara plana. La propagacion se asume en linea recta sin efectos de borde ni atenuacion.

## Modelo físico

Se aplica el modelo de medio elastico isotropo infinito. La velocidad transversal depende del modulo de cizalla y la densidad. La relacion entre velocidades P y S permite obtener el coeficiente de Poisson. Las magnitudes centrales son [[v_s]], [[modulo_de_cizalla]], [[rho_medio]], [[lambda_s]], [[f_onda]], [[impedancia_transversal]], [[v_p]] y [[nu_poisson]].

## Justificación del modelo

El modelo es valido porque la longitud de onda esperada (del orden de 0.6 mm) es mucho mayor que el tamano de grano del acero (decenas de micrometros), lo que permite tratar el medio como continuo y homogeneo. Las dimensiones del bloque son mucho mayores que la longitud de onda, validando la hipotesis de medio infinito.

## Resolución simbólica

{{f:velocidad_onda_s}}

{{f:longitud_onda_transversal}}

{{f:impedancia_transversal}}

{{f:relacion_vp_vs_poisson}}

{{f:energia_onda_transversal}}

El coeficiente de Poisson se despeja de la relacion de velocidades: [[nu_poisson]] es igual a (R al cuadrado menos 2) dividido entre (2 por R al cuadrado menos 2), donde R es [[v_p]] dividido entre [[v_s]].

## Sustitución numérica

Calculando [[v_s]]: la raiz cuadrada de (80 por 10 elevado a 9) dividido entre 7850. El cociente da 10.19 por 10 elevado a 6. La raiz cuadrada es 3193 m/s. Por tanto [[v_s]] es aproximadamente 3193 m/s.

Longitud de onda: [[lambda_s]] es 3193 dividido entre 5 por 10 elevado a 6, es decir 6.39 por 10 elevado a menos 4 m, equivalente a 0.639 mm.

Impedancia transversal: [[impedancia_transversal]] es 7850 por 3193, es decir 25.06 por 10 elevado a 6 kg por metro cuadrado por segundo.

Cociente de velocidades R: 5900 dividido entre 3193 da 1.848. R al cuadrado es 3.415. Entonces [[nu_poisson]] es (3.415 menos 2) dividido entre (2 por 3.415 menos 2), es decir 1.415 dividido entre 4.830, que da 0.293. Por tanto [[nu_poisson]] es aproximadamente 0.29.

Para una amplitud de referencia [[amplitud_transversal]] de 1 micrometro, la formula energetica estima [[u_s]] asociada al pulso transversal sin cambiar la velocidad calculada.

## Validación dimensional

- [[v_s]]: Pa dividido entre kg/m3 da m2/s2; la raiz da m/s (correcto)
- [[lambda_s]]: m/s dividido entre 1/s da m (correcto)
- [[impedancia_transversal]]: kg/m3 por m/s da kg/(m2 s) (correcto)
- [[nu_poisson]]: cociente de velocidades al cuadrado entre cociente de velocidades al cuadrado, adimensional (correcto)
- [[v_s]] es menor que [[v_p]] (3193 < 5900) como debe ser

## Interpretación física

La velocidad transversal de 3193 m/s es tipica del acero estructural. La longitud de onda de 0.639 mm indica que el ensayo ultrasonico a 5 MHz puede detectar defectos internos superiores a fracciones de milimetro. El coeficiente de Poisson de 0.29 es coherente con el valor tabular del acero (0.27 a 0.30). La impedancia transversal alta explica por que el acero refleja fuertemente las ondas S cuando esta en contacto con materiales mas blandos.

# Ejemplo de aplicación real


## Contexto

Un equipo de ingenieria geotecnica realiza un ensayo cross-hole en un solar para determinar [[v_s]] del suelo y clasificarlo segun la norma sismica (VS30). Se perforan dos sondeos separados 5 metros y se coloca un generador de ondas S en uno y un geofono triaxial en el otro. Se registran tiempos de llegada de la onda transversal directa a distintas profundidades.

## Estimación física

A 10 m de profundidad, la primera llegada de la onda S se registra a 16.7 milisegundos. La distancia entre sondeos es 5 m. La velocidad [[v_s]] es distancia dividida entre tiempo: 5 dividido entre 0.0167, es decir 299 m/s.

A 25 m de profundidad, la primera llegada es a 10.2 milisegundos: [[v_s]] es 5 dividido entre 0.0102, es decir 490 m/s.

El parametro VS30 (velocidad media ponderada en los primeros 30 m) se calcula como 30 dividido entre la suma de espesores de cada capa divididos por su velocidad respectiva. Con las dos capas simplificadas: VS30 aproximado es 30 dividido entre (10/299 mas 20/490), que es 30 dividido entre (0.0334 mas 0.0408), es decir 30 dividido entre 0.0742, que da 404 m/s.

Este valor de [[v_s]] medio situa el suelo en la categoria B de Eurocodigo 8 (roca blanda o suelo muy denso, VS30 entre 360 y 800 m/s).

## Interpretación

El aumento de [[v_s]] con la profundidad (de 299 a 490 m/s) es tipico de suelos granulares donde la compactacion crece con la presion de confinamiento. La clasificacion B indica un factor de amplificacion sismica moderado, menor que un suelo tipo C. Este resultado justifica el uso de cimentaciones convencionales sin necesidad de mejoras especiales del terreno. Si [[v_s]] hubiera sido inferior a 180 m/s (categoria D o E), se habrian requerido estudios de respuesta de sitio mas detallados y posibles medidas de mitigacion del riesgo sismico.