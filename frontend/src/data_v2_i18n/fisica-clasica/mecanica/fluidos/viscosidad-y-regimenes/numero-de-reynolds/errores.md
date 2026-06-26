# Errores Comunes en el Análisis de Reynolds

## Errores conceptuales

### Error 1 : Confusión entre viscosidad dinámica y cinemática
**Por qué parece correcto**: Ambas representan resistencia al flujo y el nombre es casi idéntico en muchos manuales.
**Por qué es incorrecto**: Mezclar [[eta]] con [[nu]] en la misma fórmula invalida completamente el resultado adimensional. Tienen dimensiones distintas (masa sobre longitud por tiempo frente a longitud al cuadrado sobre tiempo).
**Señal de detección**: El alumno obtiene un resultado con unidades de metros o segundos en lugar de un número puro.
**Corrección conceptual**: Si usas la densidad [[rho]], debes usar la viscosidad dinámica [[eta]]. Si usas la viscosidad cinemática [[nu]], no debes incluir la densidad.
**Mini-ejemplo de contraste**: Usar [[nu]] del orden de 10 elevado a menos 6 en lugar de [[eta]] del orden de 10 elevado a menos 3 para el agua daría un Reynolds 1000 veces menor al real.

### Error 2 : Ignorar la dependencia térmica de la viscosidad
**Por qué parece correcto**: En problemas de física elemental las propiedades suelen tratarse como constantes universales.
**Por qué es incorrecto**: La viscosidad [[eta]] es extremadamente sensible a la temperatura. Un aumento de 20 grados Celsius puede reducir la viscosidad en un factor de 10.
**Señal de detección**: Se asume el mismo Reynolds para agua helada que para agua casi hirviendo si la velocidad es la misma.
**Corrección conceptual**: Siempre verificar la temperatura del fluido antes de seleccionar el valor de [[eta]] en las tablas.
**Mini-ejemplo de contraste**: Un aceite que fluye laminar a 20 grados Celsius puede volverse turbulento a 50 grados Celsius con la misma bomba.

## Errores de modelo

### Error 3 : Uso incorrecto de la longitud característica
**Por qué parece correcto**: El radio es la medida geométrica base en la mayoría de las fórmulas de área y volumen.
**Por qué es incorrecto**: El criterio estándar de Reynolds crítico igual a 2300 se definió experimentalmente usando el diámetro [[L]]. Usar el radio divide el resultado por dos.
**Señal de detección**: Clasificación errónea de un flujo como laminar con [[Re]] de 1150 cuando en realidad ya está en el umbral crítico de 2300.
**Corrección conceptual**: Recordar que para conductos cerrados, la escala de la perturbación depende del ancho total del camino.
**Mini-ejemplo de contraste**: Un tubo de 5cm con radio de 2.5cm daría resultados contradictorios si no se usa la escala correcta.

### Error 4 : Universalizar el valor del Reynolds crítico
**Por qué parece correcto**: El valor 2300 es el más famoso y se memoriza como una regla única para toda la física.
**Por qué es incorrecto**: La transición depende de la geometría. En una placa plana o un perfil alar, ocurre a valores del orden de 10 elevado a 5 o 10 elevado a 6.
**Señal de detección**: Aplicar 2300 para predecir la turbulencia en el ala de un avión o en el casco de un barco.
**Corrección conceptual**: El Reynolds crítico es una propiedad del sistema (fluido + geometría), no solo del fluido.
**Mini-ejemplo de contraste**: Usar 2300 en un ala de avión predeciría turbulencia a velocidades de caminata humana.

## Errores matemáticos

### Error 5 : Fallos en la escala de las unidades
**Por qué parece correcto**: Las tuberías se miden comercialmente en mm o pulgadas y se introducen esos valores directamente.
**Por qué es incorrecto**: El Sistema Internacional requiere metros para que la cancelación dimensional de [[Re]] sea perfecta.
**Señal de detección**: Obtención de números de Reynolds de órdenes de magnitud imposibles (por ejemplo, del orden de 10 elevado a menos 2 para un río o 10 elevado a 15 para un grifo).
**Corrección conceptual**: Realizar siempre una conversión previa a metros para todas las longitudes.
**Mini-ejemplo de contraste**: Usar 50 mm como "50" daría un error de factor 1000 respecto a usar 0.05 m.

## Errores de interpretación

### Error 6 : Ignorar la zona de transición inestable
**Por qué parece correcto**: Se busca una clasificación binaria rápida (laminar o turbulento) para simplificar el cálculo.
**Por qué es incorrecto**: Entre 2300 y 4000 el flujo es intermitente y caótico; ningún modelo simplificado es exacto en esta región.
**Señal de detección**: Resultados que afirman precisión absoluta en la caída de presión con [[Re]] igual a 3000.
**Corrección conceptual**: Informar siempre de la incertidumbre inherente cuando el resultado cae en la zona de transición.
**Mini-ejemplo de contraste**: Un sensor de flujo puede dar lecturas erráticas si se diseña para operar justo con [[Re]] alrededor de 3000.

## Regla de autocontrol rápido
Si al aumentar el diámetro [[L]] al doble, tu número de Reynolds [[Re]] no se duplica también, revisa tu fórmula: la relación debe ser lineal y el resultado siempre debe ser adimensional.